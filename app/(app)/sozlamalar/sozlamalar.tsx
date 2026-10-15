"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  AlertTriangle,
  Check,
  Database,
  Download,
  LogOut,
  Monitor,
  Moon,
  Sun,
  Trash2,
  Upload,
} from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  applyGrades,
  exportUserData,
  importUserData,
  upsertProfile,
  wipeUserData,
} from "@/lib/db/repo";
import { downloadJson } from "@/lib/export/download";
import { bundleFileName, parseBundle, summarizeBundle } from "@/lib/transfer";
import { useHydrated } from "@/lib/use-hydrated";

export function Sozlamalar() {
  const { profile, signOut } = useSession();
  const router = useRouter();

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          Sozlamalar
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          Ko&apos;rinish, ma&apos;lumotni ko&apos;chirish va hisobni tozalash
        </p>
      </div>

      <KorinishKarta />
      {profile && <MalumotKarta userId={profile.id} />}
      <SaqlashKarta />
      {profile && (
        <TozalashKarta
          userId={profile.id}
          onSignOut={() => {
            signOut();
            router.push("/kirish");
          }}
        />
      )}

      <Card>
        <CardHeader>
          <CardTitle>Maxfiylik</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 text-sm leading-relaxed text-ink-muted">
          <p>
            MusicPed serverga ega emas. Barcha ma&apos;lumot —
            diagnostika natijalari, darslar progressi, yozuvlar va portfolio
            fayllari — <strong className="font-medium text-ink">faqat shu
            brauzerda</strong> saqlanadi va hech qayerga yuborilmaydi. Analitika,
            kuzatuv skripti va uchinchi tomon xizmatlari yo&apos;q.
          </p>
          <p>
            Buning teskari tomoni ham bor: haqiqiy parol himoyasi yo&apos;q, chunki
            tekshiruvni bajaradigan server yo&apos;q. Profil tanlash — bu
            qulaylik, himoya emas. Shuning uchun shaxsiy yoki nozik
            ma&apos;lumotni kiritmaslik kerak. Brauzer ma&apos;lumotini tozalagan
            yoki boshqa kompyuterdan kirgan holatda ma&apos;lumot ko&apos;rinmaydi —
            uni eksport fayli orqali ko&apos;chirish mumkin.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

/* ───────────────────────────── Ko'rinish ───────────────────────────── */

function KorinishKarta() {
  const { theme, setTheme } = useTheme();
  const hydrated = useHydrated();

  const variantlar = [
    { id: "light", nom: "Yorug'", icon: Sun },
    { id: "dark", nom: "Qorong'i", icon: Moon },
    { id: "system", nom: "Tizim bo'yicha", icon: Monitor },
  ] as const;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ko&apos;rinish</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Mavzu tanlash">
          {variantlar.map((v) => {
            const tanlangan = hydrated && theme === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setTheme(v.id)}
                aria-pressed={tanlangan}
                className={
                  tanlangan
                    ? "flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white"
                    : "flex items-center gap-2 rounded-xl border border-border-subtle px-4 py-2 text-sm text-ink transition-colors hover:bg-surface-muted"
                }
              >
                <v.icon className="size-4" aria-hidden="true" />
                {v.nom}
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

/* ──────────────────── Eksport va import ──────────────────── */

type Xabar = { ok: boolean; matn: string } | null;

function MalumotKarta({ userId }: { userId: string }) {
  const { profile } = useSession();
  const [xabar, setXabar] = React.useState<Xabar>(null);
  const [band, setBand] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  async function eksport() {
    setBand(true);
    setXabar(null);
    try {
      // Profil bazada bo'lmasligi mumkin (masalan diagnostikadan o'tilmagan) —
      // eksport ishlashi uchun uni avval yozib qo'yamiz.
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
      const bundle = await exportUserData(userId);
      const xulosa = summarizeBundle(bundle);
      downloadJson(bundle, bundleFileName(bundle));
      setXabar({ ok: true, matn: `Fayl yuklandi: ${xulosa.lines.join(", ")}` });
    } catch (error) {
      setXabar({
        ok: false,
        matn: error instanceof Error ? error.message : "Eksport qilib bo'lmadi",
      });
    } finally {
      setBand(false);
    }
  }

  async function importQil(file: File | undefined) {
    if (!file) return;
    setBand(true);
    setXabar(null);
    try {
      const parsed = parseBundle(await file.text());
      if (!parsed.ok) {
        setXabar({ ok: false, matn: parsed.error });
        return;
      }

      if (parsed.value.kind === "baholar") {
        const natija = await applyGrades(userId, parsed.value);
        setXabar({
          ok: natija.applied > 0,
          matn:
            natija.applied > 0
              ? `${natija.applied} ta baho qo'shildi${natija.skipped ? `, ${natija.skipped} tasi mos ish topilmagani uchun o'tkazib yuborildi` : ""}.`
              : "Faylda bu brauzerdagi ishlarga mos baho topilmadi.",
        });
        return;
      }

      const hisobot = await importUserData(userId, parsed.value);
      setXabar({
        ok: true,
        matn: `Qo'shildi: ${hisobot.diagnostics} diagnostika, ${hisobot.progress} dars, ${hisobot.submissions} ish, ${hisobot.reflections} refleksiya.`,
      });
    } catch (error) {
      setXabar({
        ok: false,
        matn: error instanceof Error ? error.message : "Faylni o'qib bo'lmadi",
      });
    } finally {
      setBand(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ma&apos;lumotni ko&apos;chirish</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-ink-muted">
          Ma&apos;lumot shu brauzerda turgani uchun uni{" "}
          <strong className="font-medium text-ink">fayl orqali</strong>{" "}
          ko&apos;chiriladi. Eksport fayli ikki ish uchun kerak: boshqa
          kompyuterga o&apos;tish va natijalarni o&apos;qituvchiga topshirish.
        </p>

        <div className="flex flex-wrap gap-2">
          <Button onClick={() => void eksport()} disabled={band}>
            <Download aria-hidden="true" />
            Eksport qilish
          </Button>
          <input
            ref={inputRef}
            id="import-fayl"
            type="file"
            accept="application/json,.json"
            className="sr-only"
            onChange={(e) => void importQil(e.target.files?.[0])}
          />
          <Button variant="outline" onClick={() => inputRef.current?.click()} disabled={band}>
            <Upload aria-hidden="true" />
            Import qilish
          </Button>
        </div>

        {xabar && (
          <p
            role="status"
            className={
              xabar.ok
                ? "flex items-start gap-2 rounded-xl bg-success-soft p-3 text-sm text-success"
                : "flex items-start gap-2 rounded-xl bg-warning-soft p-3 text-sm text-warning"
            }
          >
            {xabar.ok ? (
              <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            ) : (
              <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            )}
            <span className="leading-relaxed">{xabar.matn}</span>
          </p>
        )}

        <ul className="flex flex-col gap-1.5 text-xs leading-relaxed text-ink-muted">
          <li>
            <strong className="font-medium">natijalar-….json</strong> — sizning
            barcha natijangiz. Import qilinganda u joriy profilga qo&apos;shiladi;
            bir xil faylni ikki marta yuklash dublikat yaratmaydi.
          </li>
          <li>
            <strong className="font-medium">baholar-….json</strong> —
            o&apos;qituvchidan keladigan fayl. Import qilinganda baho va izohlar
            ishlaringizga yoziladi.
          </li>
          <li>
            Portfolio <strong className="font-medium">fayllarining mazmuni</strong>{" "}
            eksportga kirmaydi (hajmi katta) — faqat ro&apos;yxati. Fayllar shu
            brauzerda qoladi.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

/* ──────────────────── Brauzer xotirasi ──────────────────── */

/**
 * Brauzer qancha joy ajratganini ko'rsatadi.
 *
 * `navigator.storage.estimate()` barcha brauzerlarda bor emas, shuning uchun
 * yo'q bo'lsa karta shunchaki ma'lumot bermaydi — xato chiqarmaydi.
 */
function SaqlashKarta() {
  const [holat, setHolat] = React.useState<{ used: number; quota: number } | null>(null);
  const [qollanmaydi, setQollanmaydi] = React.useState(false);

  React.useEffect(() => {
    let bekor = false;
    async function ol() {
      if (typeof navigator === "undefined" || !navigator.storage?.estimate) {
        setQollanmaydi(true);
        return;
      }
      try {
        const e = await navigator.storage.estimate();
        if (!bekor) setHolat({ used: e.usage ?? 0, quota: e.quota ?? 0 });
      } catch {
        if (!bekor) setQollanmaydi(true);
      }
    }
    void ol();
    return () => {
      bekor = true;
    };
  }, []);

  if (qollanmaydi) return null;

  const mb = (v: number) => (v / 1048576).toFixed(1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Brauzer xotirasi</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-3 text-sm">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
          <Database className="size-5" aria-hidden="true" />
        </span>
        {holat ? (
          <p className="text-ink-muted">
            Ishlatilgan:{" "}
            <strong className="font-medium tabular-nums text-ink">
              {mb(holat.used)} MB
            </strong>
            {holat.quota > 0 && <> · mavjud chegara ≈ {mb(holat.quota)} MB</>}
          </p>
        ) : (
          <p className="text-ink-muted">Hisoblanmoqda…</p>
        )}
      </CardContent>
    </Card>
  );
}

/* ──────────────────── Tozalash ──────────────────── */

function TozalashKarta({
  userId,
  onSignOut,
}: {
  userId: string;
  onSignOut: () => void;
}) {
  const [tasdiq, setTasdiq] = React.useState(false);
  const [band, setBand] = React.useState(false);
  const [tozalandi, setTozalandi] = React.useState(false);

  async function tozala() {
    setBand(true);
    await wipeUserData(userId);
    setBand(false);
    setTasdiq(false);
    setTozalandi(true);
    window.setTimeout(() => setTozalandi(false), 4000);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hisob</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button variant="outline" onClick={onSignOut} className="w-fit">
          <LogOut aria-hidden="true" />
          Profildan chiqish
        </Button>

        <div className="rounded-xl border border-danger/30 bg-danger-soft/40 p-4">
          <p className="flex items-center gap-2 text-sm font-medium text-ink">
            <AlertTriangle className="size-4 text-danger" aria-hidden="true" />
            Barcha ma&apos;lumotni o&apos;chirish
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
            Diagnostika, darslar progressi, topshiriqlar, yozuvlar va portfolio
            o&apos;chiriladi. Bu amalni <strong className="font-medium">qaytarib
            bo&apos;lmaydi</strong> — serverda nusxa yo&apos;q. Avval eksport
            qilib qo&apos;yish tavsiya etiladi.
          </p>

          {tasdiq ? (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Button variant="danger" onClick={() => void tozala()} disabled={band}>
                <Trash2 aria-hidden="true" />
                {band ? "O'chirilmoqda…" : "Ha, o'chirish"}
              </Button>
              <Button variant="ghost" onClick={() => setTasdiq(false)} disabled={band}>
                Bekor qilish
              </Button>
            </div>
          ) : (
            <Button variant="outline" className="mt-3" onClick={() => setTasdiq(true)}>
              <Trash2 aria-hidden="true" />
              O&apos;chirish
            </Button>
          )}

          {tozalandi && (
            <p role="status" className="mt-3 text-sm text-success">
              Ma&apos;lumot o&apos;chirildi.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
