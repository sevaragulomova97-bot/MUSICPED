"use client";

import * as React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Download, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allActivity, listProfiles } from "@/lib/db/repo";
import { downloadCsv } from "@/lib/export/download";

/** Faoliyat turlarining o'zbekcha nomi va rangi. */
const TUR_NOMI: Record<string, { nom: string; variant: "primary" | "secondary" | "success" | "warning" | "neutral" }> = {
  diagnostika: { nom: "Diagnostika", variant: "primary" },
  dars: { nom: "Dars", variant: "secondary" },
  mashq: { nom: "Mashq", variant: "secondary" },
  yozuv: { nom: "Yozuv", variant: "neutral" },
  refleksiya: { nom: "Refleksiya", variant: "neutral" },
  portfolio: { nom: "Portfolio", variant: "success" },
  import: { nom: "Import", variant: "warning" },
  baho: { nom: "Baho", variant: "success" },
  mentorlik: { nom: "Mentorlik", variant: "primary" },
};

function turi(type: string) {
  return TUR_NOMI[type] ?? { nom: type, variant: "neutral" as const };
}

export function Jurnal() {
  const [tur, setTur] = React.useState<string>("barcha");

  const data = useLiveQuery(async () => {
    const [activity, profiles] = await Promise.all([allActivity(500), listProfiles()]);
    return { activity, profiles };
  }, []);

  if (data === undefined) {
    return <p className="text-sm text-ink-muted">Yuklanmoqda…</p>;
  }

  const ismlar = new Map(data.profiles.map((p) => [p.id, p.fullName]));
  const turlar = Array.from(new Set(data.activity.map((a) => a.type))).sort();
  const korinadigan =
    tur === "barcha" ? data.activity : data.activity.filter((a) => a.type === tur);

  function eksport() {
    const sarlavha = ["Sana va vaqt", "Foydalanuvchi", "Turi", "Xabar"];
    const qatorlar = korinadigan.map((a) => [
      new Date(a.createdAt).toLocaleString("uz-UZ"),
      ismlar.get(a.userId) ?? a.userId,
      turi(a.type).nom,
      a.message,
    ]);
    downloadCsv([sarlavha, ...qatorlar], "faoliyat-jurnali.csv");
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
            Faoliyat jurnali
          </h1>
          <p className="mt-1.5 text-sm text-ink-muted">
            {korinadigan.length} ta yozuv · shu brauzerdagi barcha profillar
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {turlar.length > 1 && (
            <label className="flex items-center gap-2 text-sm">
              <span className="text-ink-muted">Turi</span>
              <select
                value={tur}
                onChange={(e) => setTur(e.target.value)}
                className="h-9 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink"
              >
                <option value="barcha">Barchasi</option>
                {turlar.map((t) => (
                  <option key={t} value={t}>
                    {turi(t).nom}
                  </option>
                ))}
              </select>
            </label>
          )}
          {korinadigan.length > 0 && (
            <Button variant="outline" size="sm" onClick={eksport}>
              <Download aria-hidden="true" />
              CSV
            </Button>
          )}
        </div>
      </div>

      {korinadigan.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary-ink">
              <Shield className="size-6" aria-hidden="true" />
            </span>
            <p className="max-w-sm text-sm text-ink-muted">
              Jurnal bo&apos;sh. Diagnostika, dars, topshiriq va import kabi
              harakatlar shu yerda qayd etiladi.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Harakatlar</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="flex flex-col divide-y divide-border-subtle">
              {korinadigan.map((a) => (
                <li key={a.id} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-2.5">
                  <Badge variant={turi(a.type).variant}>{turi(a.type).nom}</Badge>
                  <span className="min-w-0 flex-1 text-sm text-ink">{a.message}</span>
                  <span className="text-xs text-ink-muted">
                    {ismlar.get(a.userId) ?? a.userId}
                  </span>
                  <span className="shrink-0 text-xs tabular-nums text-ink-muted">
                    {new Date(a.createdAt).toLocaleString("uz-UZ", {
                      day: "2-digit",
                      month: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      )}

      <p className="text-xs leading-relaxed text-ink-muted">
        Jurnal faqat shu brauzerda saqlanadi va hech qayerga yuborilmaydi. U
        audit uchun emas, foydalanuvchining o&apos;z harakatlarini eslab qolishi
        uchun: serversiz platformada «kim nima qildi» degan markaziy yozuv
        bo&apos;lishi mumkin emas.
      </p>
    </div>
  );
}
