"use client";

import * as React from "react";
import { CloudDownload, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { saveDataset } from "@/lib/db/repo";
import {
  oqituvchiKalitiniOqi,
  oqituvchiKalitiniYoz,
  serverdanOl,
  sozlamaniOqi,
} from "@/lib/sync/yiguvchi";
import { parseBundle } from "@/lib/transfer";
import { useHydrated } from "@/lib/use-hydrated";

type Natija = { ok: boolean; matn: string } | null;

/**
 * Talabalar yuborgan natijalarni serverdan yuklash.
 *
 * Panel **faqat yig'uvchi server sozlangan bo'lsa** chiqadi; aks
 * holda o'qituvchi kabineti hozirgidek, faqat fayl orqali ishlaydi.
 *
 * O'qish kaliti kodda emas, o'qituvchining o'z brauzerida saqlanadi:
 * u bilan barcha talabalarning ishini ko'rish mumkin, shuning uchun
 * uni ommaviy saytga joylash mumkin emas.
 */
export function ServerPanel({ ownerId }: { ownerId: string }) {
  const sozlama = React.useMemo(() => sozlamaniOqi(), []);
  const [band, setBand] = React.useState(false);
  const [natija, setNatija] = React.useState<Natija>(null);

  /*
    Kalit brauzer xotirasidan o'qiladi, lekin faqat gidratsiyadan
    keyin: statik build paytida `localStorage` yo'q, shuning uchun
    birinchi render ham serverda, ham brauzerda bo'sh bo'lishi kerak
    — aks holda React mos kelmaslikdan shikoyat qiladi.

    Effekt ichida `setState` chaqirilmaydi (loyihada bu qoida lint
    bilan qo'riqlanadi): tahrirlangan qiymat alohida turadi va
    saqlangani faqat u yo'q bo'lganda ko'rsatiladi.
  */
  const gidratsiya = useHydrated();
  const [tahrirlangan, setTahrirlangan] = React.useState<string | null>(null);
  const kalit = tahrirlangan ?? (gidratsiya ? oqituvchiKalitiniOqi() : "");

  if (!sozlama) return null;

  async function yukla() {
    if (!sozlama) return;
    setBand(true);
    setNatija(null);
    try {
      oqituvchiKalitiniYoz(kalit);
      const javob = await serverdanOl(sozlama, kalit);
      if (!javob.ok) {
        setNatija({ ok: false, matn: javob.sabab });
        return;
      }
      let qabul = 0;
      const xatolar: string[] = [];
      for (const yozuv of javob.yozuvlar) {
        const tahlil = parseBundle(JSON.stringify(yozuv.paket));
        if (!tahlil.ok) {
          xatolar.push(`${yozuv.ism}: ${tahlil.error}`);
          continue;
        }
        if (tahlil.value.kind !== "natijalar") {
          xatolar.push(`${yozuv.ism}: bu natijalar paketi emas`);
          continue;
        }
        await saveDataset(ownerId, tahlil.value);
        qabul += 1;
      }
      setNatija({
        ok: xatolar.length === 0,
        matn:
          `${qabul} ta talaba natijasi yuklandi` +
          (xatolar.length ? `. O'tmaganlari: ${xatolar.join("; ")}` : "."),
      });
    } catch (sabab) {
      console.error(sabab);
      setNatija({
        ok: false,
        matn:
          sabab instanceof Error && sabab.message
            ? sabab.message
            : "Serverdan yuklab bo'lmadi",
      });
    } finally {
      setBand(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Serverdan yuklash</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-ink-muted">
          Talabalar &laquo;O&apos;qituvchiga yuborish&raquo; tugmasini
          bosganda natijalar serverda to&apos;planadi. Shu yerdan ularni
          birdan yuklab olasiz — fayl almashtirish shart emas.
        </p>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="flex items-center gap-1.5 text-ink-muted">
            <KeyRound className="size-4" aria-hidden="true" />
            O&apos;qish kaliti
          </span>
          <input
            type="password"
            value={kalit}
            onChange={(e) => setTahrirlangan(e.target.value)}
            autoComplete="off"
            placeholder="Serverdan olingan kalit"
            className="h-10 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink placeholder:text-ink-muted"
          />
          <span className="text-xs leading-relaxed text-ink-muted">
            Kalit faqat shu brauzerda saqlanadi va hech qayerga
            yuborilmaydi. Uni boshqalarga bermang: u bilan barcha
            talabalarning ishini ko&apos;rish mumkin.
          </span>
        </label>

        <div>
          <Button onClick={() => void yukla()} disabled={band}>
            <CloudDownload aria-hidden="true" />
            {band ? "Yuklanmoqda…" : "Serverdan yuklash"}
          </Button>
        </div>

        {natija && (
          <p
            role="status"
            className={
              natija.ok
                ? "rounded-xl bg-success-soft p-3 text-sm text-success-ink"
                : "rounded-xl bg-danger-soft p-3 text-sm text-danger-ink"
            }
          >
            {natija.matn}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
