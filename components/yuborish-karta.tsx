"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { exportUserData, upsertProfile } from "@/lib/db/repo";
import {
  avtomatikUrinilsinmi,
  navbatdanOlib,
  navbatgaQosh,
  navbatniOqi,
  navbatniYoz,
  sozlamaniOqi,
  xabarMatni,
  yubor,
  type Natija,
  type Navbatdagi,
} from "@/lib/sync/yiguvchi";

/**
 * Natijalarni o'qituvchiga to'g'ridan-to'g'ri yuborish.
 *
 * Karta **faqat yig'uvchi server sozlangan bo'lsa** chiqadi. Sozlanmagan
 * joyda u umuman ko'rinmaydi va platforma fayl orqali ishlayveradi —
 * ishlamaydigan tugma ko'rsatish foydalanuvchini chalg'itadi.
 *
 * Yuborish navbat orqali: internet yo'q bo'lsa paket brauzerda
 * saqlanadi va keyingi ochilishda o'zi jo'naydi. Maktab va
 * universitet kompyuterlarida internet doim ham bo'lmaydi.
 */
export function YuborishKarta({ userId }: { userId: string }) {
  const { profile } = useSession();
  const sozlama = React.useMemo(() => sozlamaniOqi(), []);
  const [band, setBand] = React.useState(false);
  const [natija, setNatija] = React.useState<Natija | null>(null);
  const [navbatda, setNavbatda] = React.useState(0);

  // Ochilishda navbatda qolgan paketni jim yuborishga urinib ko'ramiz.
  React.useEffect(() => {
    if (!sozlama) return;
    let bekor = false;
    void (async () => {
      const navbat = navbatniOqi().filter((n) => n.talabaId === userId);
      if (!navbat.length) return;
      for (const n of navbat) {
        if (!avtomatikUrinilsinmi(n)) continue;
        const javob = await yubor(sozlama, n);
        if (bekor) return;
        const joriy = navbatniOqi();
        if (javob.ok) {
          navbatniYoz(navbatdanOlib(joriy, n.talabaId));
        } else {
          navbatniYoz(
            navbatgaQosh(joriy, { ...n, urinish: n.urinish + 1 }),
          );
        }
      }
      if (!bekor) {
        setNavbatda(navbatniOqi().filter((n) => n.talabaId === userId).length);
      }
    })();
    return () => {
      bekor = true;
    };
  }, [sozlama, userId]);

  if (!sozlama) return null;

  async function yuborishniBoshla() {
    if (!sozlama) return;
    setBand(true);
    setNatija(null);
    try {
      // Eksport bilan bir xil paket — server uchun alohida tuzilma yo'q.
      if (profile) {
        await upsertProfile({
          id: profile.id,
          fullName: profile.fullName,
          role: profile.role,
          group: profile.group,
          direction: profile.direction,
          startedAt: profile.startedAt,
        });
      }
      const paket = await exportUserData(userId);
      const element: Navbatdagi = {
        paket,
        talabaId: userId,
        ism: paket.profile.fullName,
        guruh: paket.profile.group,
        qoshilgan: new Date().toISOString(),
        urinish: 1,
      };

      const javob = await yubor(sozlama, element);
      if (javob.ok) {
        navbatniYoz(navbatdanOlib(navbatniOqi(), userId));
        setNavbatda(0);
        setNatija({ holat: "yuborildi" });
      } else {
        // Yuborilmagan paket yo'qolmaydi: navbatda qoladi.
        navbatniYoz(navbatgaQosh(navbatniOqi(), element));
        setNavbatda(1);
        setNatija({ holat: "navbatda", sabab: javob.sabab });
      }
    } catch (sabab) {
      console.error(sabab);
      setNatija({
        holat: "navbatda",
        sabab:
          sabab instanceof Error && sabab.message
            ? sabab.message
            : "Ma'lumotni tayyorlab bo'lmadi",
      });
    } finally {
      setBand(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Natijalarni o&apos;qituvchiga yuborish</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-ink-muted">
          Fayl almashtirmasdan, to&apos;g&apos;ridan-to&apos;g&apos;ri
          yuborish. Internet bo&apos;lmasa ish yo&apos;qolmaydi — paket
          navbatda qoladi va ulanish paydo bo&apos;lganda o&apos;zi
          jo&apos;naydi.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={() => void yuborishniBoshla()} disabled={band}>
            <Send aria-hidden="true" />
            {band ? "Yuborilmoqda…" : "O'qituvchiga yuborish"}
          </Button>
          {navbatda > 0 && !natija && (
            <span className="text-sm text-ink-muted">
              Navbatda yuborilmagan paket bor.
            </span>
          )}
        </div>

        {natija && (
          <p
            role="status"
            className={
              natija.holat === "yuborildi"
                ? "rounded-xl bg-success-soft p-3 text-sm text-success-ink"
                : "rounded-xl bg-warning-soft p-3 text-sm text-warning-ink"
            }
          >
            {xabarMatni(natija)}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
