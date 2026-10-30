"use client";

import * as React from "react";
import { CircleAlert, Save, Wand2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BAHO_JADVALI,
  JAMI_MAX,
  NAZORATLAR,
  type NazoratKodi,
  rasmiyNatija,
} from "@/lib/baholash-rasmiy";
import type { RasmiyBaholar } from "@/lib/db/schema";
import { setRasmiyBaholar } from "@/lib/db/repo";
import { jnTaklifi } from "@/lib/teacher";
import type { TransferSubmission } from "@/lib/transfer";
import { formatDate } from "@/lib/utils";

/**
 * Talabaning rasmiy bahosi: JN / ON / YaN -> 100 ball -> baho.
 *
 * Platformada faqat **joriy nazorat** uchun dalil bor: baholangan
 * topshiriqlar. Shuning uchun JN uchun taklif hisoblanadi, lekin u ham
 * majburiy emas. Oraliq va yakuniy nazorat auditoriyada o'tkaziladi —
 * ularning bali qo'lda kiritiladi. Platformaning ishi arifmetika va
 * saralash chegarasini tekshirish: aynan shu yerda eng ko'p xato
 * qilinadi, chunki saralashdan o'tmagan nazorat umumiy ball yetarli
 * bo'lsa ham fanni o'zlashtirilmagan qiladi.
 *
 * Holat `useState` da, boshlang'ich qiymat esa **hosil qilib** olinadi
 * (`tahrir ?? saqlangan`). Effekt bilan holatni to'ldirish `useLiveQuery`
 * javobi kechikkanda o'qituvchi yozayotgan raqamni bosib ketardi.
 */

type Tahrir = Partial<Record<NazoratKodi, string>> & { izoh?: string };

export function RasmiyBaho({
  ownerId,
  studentId,
  submissions,
  saqlangan,
}: {
  ownerId: string;
  studentId: string;
  submissions: readonly TransferSubmission[];
  saqlangan?: RasmiyBaholar;
}) {
  const [tahrir, setTahrir] = React.useState<Tahrir>({});
  const [holat, setHolat] = React.useState<"tayyor" | "saqlanmoqda" | "saqlandi">(
    "tayyor",
  );
  const [xato, setXato] = React.useState<string | null>(null);

  const matn = (kod: NazoratKodi): string =>
    tahrir[kod] ?? (saqlangan?.[kod] !== undefined ? String(saqlangan[kod]) : "");

  const son = (kod: NazoratKodi): number | undefined => {
    const t = matn(kod).replace(",", ".").trim();
    if (t === "") return undefined;
    const n = Number(t);
    return Number.isFinite(n) ? n : undefined;
  };

  const natija = rasmiyNatija({ JN: son("JN"), ON: son("ON"), YaN: son("YaN") });
  const jnMax = NAZORATLAR.find((n) => n.kod === "JN")!.max;
  const taklif = jnTaklifi(submissions, jnMax);

  const ozgartirildi =
    (["JN", "ON", "YaN"] as const).some((k) => tahrir[k] !== undefined) ||
    tahrir.izoh !== undefined;

  async function saqla() {
    setHolat("saqlanmoqda");
    setXato(null);
    try {
      const natijaSaqlash = await setRasmiyBaholar(ownerId, studentId, {
        JN: son("JN"),
        ON: son("ON"),
        YaN: son("YaN"),
        izoh: tahrir.izoh ?? saqlangan?.izoh,
      });
      if (!natijaSaqlash) {
        setXato("Talaba yozuvi topilmadi — ro'yxatni yangilab ko'ring.");
        setHolat("tayyor");
        return;
      }
      setTahrir({});
      setHolat("saqlandi");
    } catch (sabab) {
      console.error(sabab);
      setXato("Saqlab bo'lmadi. Brauzer xotirasi to'lgan bo'lishi mumkin.");
      setHolat("tayyor");
    }
  }

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-border-subtle p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-sm font-semibold text-ink">
          Rasmiy baho (fan dasturi bo&apos;yicha)
        </h3>
        {saqlangan && (
          <span className="text-xs text-ink-muted">
            {formatDate(saqlangan.updatedAt)} da saqlangan
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[460px] text-sm">
          <caption className="sr-only">
            Joriy, oraliq va yakuniy nazorat ballari
          </caption>
          <thead>
            <tr className="border-b border-border-subtle text-left text-ink-muted">
              <th scope="col" className="py-2 font-medium">
                Nazorat
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Maks.
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Saralash
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Ball
              </th>
            </tr>
          </thead>
          <tbody>
            {NAZORATLAR.map((n) => {
              const qiymat = son(n.kod);
              const past = qiymat !== undefined && qiymat < n.saralash;
              return (
                <tr key={n.kod} className="border-b border-border-subtle/60">
                  <td className="py-2 text-ink">
                    {n.nom}{" "}
                    <span className="text-xs text-ink-muted">({n.kod})</span>
                    <span className="block text-xs text-ink-muted">
                      {n.vosita}
                    </span>
                  </td>
                  <td className="py-2 text-right tabular-nums text-ink-muted">
                    {n.max}
                  </td>
                  <td className="py-2 text-right tabular-nums text-ink-muted">
                    {n.saralash}
                  </td>
                  <td className="py-2 text-right">
                    <label className="sr-only" htmlFor={`ball-${n.kod}`}>
                      {n.nom} bali, eng ko&apos;pi {n.max}
                    </label>
                    <input
                      id={`ball-${n.kod}`}
                      type="number"
                      inputMode="decimal"
                      min={0}
                      max={n.max}
                      step="0.1"
                      value={matn(n.kod)}
                      onChange={(e) =>
                        setTahrir((v) => ({ ...v, [n.kod]: e.target.value }))
                      }
                      placeholder="—"
                      className={`h-9 w-20 rounded-lg border bg-surface px-2 text-right text-sm tabular-nums text-ink ${
                        past ? "border-danger" : "border-border-subtle"
                      }`}
                    />
                    {past && (
                      <span className="block text-xs text-danger-ink">
                        saralashdan past
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {taklif !== null && (
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTahrir((v) => ({ ...v, JN: String(taklif) }))}
          >
            <Wand2 aria-hidden="true" />
            JN uchun taklif: {taklif}
          </Button>
          <span>
            baholangan ishlarning o&apos;rtachasidan hisoblandi; o&apos;zgartirish
            mumkin
          </span>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-surface-muted p-3">
        <div>
          <p className="text-sm text-ink-muted">Jami</p>
          <p className="font-display text-lg font-semibold tabular-nums text-ink">
            {natija.jami} / {JAMI_MAX}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-ink-muted">Baho</p>
          <Badge
            aria-label="Yakuniy baho"
            variant={
              natija.ozlashtirdi
                ? natija.baho === "Qoniqarli"
                  ? "warning"
                  : "success"
                : "danger"
            }
          >
            {natija.ozlashtirdi ? natija.baho : "Yakunlanmagan"}
          </Badge>
        </div>
      </div>

      {natija.qoyilmagan.length > 0 && (
        <p className="flex items-start gap-2 text-xs text-ink-muted">
          <CircleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          Qo&apos;yilmagan nazorat: {natija.qoyilmagan.join(", ")}. Baho
          hammasi qo&apos;yilgandan keyin chiqadi.
        </p>
      )}

      {natija.otmagan.length > 0 && (
        <p
          role="status"
          className="flex items-start gap-2 text-xs text-danger-ink"
        >
          <CircleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          Saralashdan o&apos;tmagan: {natija.otmagan.join(", ")}. Umumiy ball
          yetarli bo&apos;lsa ham fan o&apos;zlashtirilmagan hisoblanadi.
        </p>
      )}

      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-ink-muted">Izoh (ixtiyoriy)</span>
        <textarea
          rows={2}
          value={tahrir.izoh ?? saqlangan?.izoh ?? ""}
          onChange={(e) => setTahrir((v) => ({ ...v, izoh: e.target.value }))}
          placeholder="Masalan: ON qayta topshirildi"
          className="rounded-lg border border-border-subtle bg-surface px-3 py-2 text-sm text-ink placeholder:text-ink-muted"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={() => void saqla()} disabled={holat === "saqlanmoqda"}>
          <Save aria-hidden="true" />
          {holat === "saqlanmoqda" ? "Saqlanmoqda…" : "Ballarni saqlash"}
        </Button>
        {holat === "saqlandi" && !ozgartirildi && (
          <span role="status" className="text-sm text-success-ink">
            Saqlandi
          </span>
        )}
        {xato && (
          <span role="alert" className="text-sm text-danger-ink">
            {xato}
          </span>
        )}
      </div>

      <p className="text-xs leading-relaxed text-ink-muted">
        Baho shkalasi:{" "}
        {BAHO_JADVALI.filter((d) => d.min > 0)
          .map((d) => `${d.baho} — ${d.min} ball va yuqori`)
          .join("; ")}
        . Ballar shu brauzerda, o&apos;qituvchining yozuvida saqlanadi.
      </p>
    </section>
  );
}
