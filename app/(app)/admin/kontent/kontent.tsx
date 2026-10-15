"use client";

import * as React from "react";
import { AlertTriangle, CheckCircle2, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  areaCoverage,
  bloomDistribution,
  inventory,
  outcomeCoverage,
  type OutcomeCoverage,
} from "@/lib/content-audit";
import { downloadCsv } from "@/lib/export/download";
import { BLOOM_NOMI, YONALISH_NOMI } from "@/lib/domain/types";

const GAP_NOMI: Record<OutcomeCoverage["gap"], string> = {
  yoq: "To'liq",
  darssiz: "Darsi yo'q",
  baholanmaydi: "Baholanmaydi",
  ikkalasi: "Dars ham, topshiriq ham yo'q",
};

const GAP_VARIANT: Record<OutcomeCoverage["gap"], "success" | "warning" | "danger"> = {
  yoq: "success",
  darssiz: "warning",
  baholanmaydi: "warning",
  ikkalasi: "danger",
};

export function Kontent() {
  const [filtr, setFiltr] = React.useState<OutcomeCoverage["gap"] | "barcha">("barcha");

  const inv = inventory();
  const coverage = outcomeCoverage();
  const bloom = bloomDistribution();
  const areas = areaCoverage();

  const korinadigan =
    filtr === "barcha" ? coverage : coverage.filter((c) => c.gap === filtr);

  const sanoq = {
    yoq: coverage.filter((c) => c.gap === "yoq").length,
    darssiz: coverage.filter((c) => c.gap === "darssiz").length,
    baholanmaydi: coverage.filter((c) => c.gap === "baholanmaydi").length,
    ikkalasi: coverage.filter((c) => c.gap === "ikkalasi").length,
  };

  function eksport() {
    const sarlavha = ["Modul", "O'quv natijasi", "Blum", "Darslar", "Topshiriqlar", "Holat"];
    const qatorlar = coverage.map((c) => [
      c.moduleTitle,
      c.text,
      BLOOM_NOMI[c.bloom],
      c.lessons.join("; ") || "—",
      c.tasks.join("; ") || "—",
      GAP_NOMI[c.gap],
    ]);
    downloadCsv([sarlavha, ...qatorlar], "konstruktiv-moslashuv.csv");
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
            Kontent va konstruktiv moslashuv
          </h1>
          <p className="mt-1.5 text-sm text-ink-muted">
            {inv.oquvNatijalari} o&apos;quv natijasi · {inv.darslar} dars ·{" "}
            {inv.topshiriqlar} topshiriq
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={eksport}>
          <Download aria-hidden="true" />
          CSV
        </Button>
      </div>

      <Card>
        <CardContent className="p-4 text-sm leading-relaxed text-ink-muted">
          J. Biggsning konstruktiv moslashuvi bo&apos;yicha har bir o&apos;quv natijasi
          uchun uni <strong className="font-medium text-ink">o&apos;rgatadigan
          dars</strong> va unga erishilganini{" "}
          <strong className="font-medium text-ink">tekshiradigan topshiriq</strong>{" "}
          bo&apos;lishi kerak. Quyidagi jadval shu aloqani ko&apos;rsatadi va
          uzilishlarni yashirmaydi.
        </CardContent>
      </Card>

      {/* Filtrlar */}
      <div className="flex flex-wrap gap-2">
        {([
          ["barcha", `Barchasi (${coverage.length})`],
          ["yoq", `To'liq (${sanoq.yoq})`],
          ["darssiz", `Darsi yo'q (${sanoq.darssiz})`],
          ["baholanmaydi", `Baholanmaydi (${sanoq.baholanmaydi})`],
          ["ikkalasi", `Ikkalasi yo'q (${sanoq.ikkalasi})`],
        ] as const).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setFiltr(key)}
            aria-pressed={filtr === key}
            className={
              filtr === key
                ? "rounded-xl bg-primary px-3.5 py-1.5 text-sm font-medium text-white"
                : "rounded-xl border border-border-subtle px-3.5 py-1.5 text-sm text-ink transition-colors hover:bg-surface-muted"
            }
          >
            {label}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full text-sm">
            <caption className="sr-only">
              O&apos;quv natijalari, ularga bog&apos;langan darslar va topshiriqlar
            </caption>
            <thead>
              <tr className="border-b border-border-subtle text-left">
                <th scope="col" className="px-4 py-3 font-medium text-ink-muted">O&apos;quv natijasi</th>
                <th scope="col" className="px-4 py-3 font-medium text-ink-muted">Blum</th>
                <th scope="col" className="px-4 py-3 font-medium text-ink-muted">Dars</th>
                <th scope="col" className="px-4 py-3 font-medium text-ink-muted">Topshiriq</th>
                <th scope="col" className="px-4 py-3 font-medium text-ink-muted">Holat</th>
              </tr>
            </thead>
            <tbody>
              {korinadigan.map((c) => (
                <tr key={c.outcomeId} className="border-b border-border-subtle last:border-0">
                  <td className="px-4 py-3">
                    <span className="block text-ink">{c.text}</span>
                    <span className="text-xs text-ink-muted">{c.moduleTitle}</span>
                  </td>
                  <td className="px-4 py-3 text-ink-muted">{BLOOM_NOMI[c.bloom]}</td>
                  <td className="px-4 py-3 text-xs text-ink-muted">
                    {c.lessons.length ? c.lessons.join(", ") : "—"}
                  </td>
                  <td className="px-4 py-3 text-xs text-ink-muted">
                    {c.tasks.length ? c.tasks.join(", ") : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={GAP_VARIANT[c.gap]}>{GAP_NOMI[c.gap]}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {sanoq.ikkalasi > 0 && (
        <Card>
          <CardContent className="flex items-start gap-2.5 p-4 text-sm leading-relaxed">
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden="true" />
            <span className="text-ink-muted">
              {sanoq.ikkalasi} ta o&apos;quv natijasi uchun hali na dars, na topshiriq
              bor. Bu kutilgan holat: platformadagi kontent — to&apos;liq o&apos;quv
              dasturi emas, uning <strong className="font-medium text-ink">namunaviy
              qismi</strong>. Jadval qaysi natijalar hali yopilmaganini aniq
              ko&apos;rsatadi, shuning uchun kontentni to&apos;ldirish tartibi
              ko&apos;rinib turadi.
            </span>
          </CardContent>
        </Card>
      )}

      {/* Blum taqsimoti */}
      <Card>
        <CardHeader>
          <CardTitle>Blum taksonomiyasi bo&apos;yicha taqsimot</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-sm">
            <caption className="sr-only">
              O&apos;quv natijalari, darslar va topshiriqlarning Blum darajalari
              bo&apos;yicha taqsimoti
            </caption>
            <thead>
              <tr className="border-b border-border-subtle text-left">
                <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Daraja</th>
                <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Natijalar</th>
                <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Darslar</th>
                <th scope="col" className="py-2 font-medium text-ink-muted">Topshiriqlar</th>
              </tr>
            </thead>
            <tbody>
              {bloom.outcomes.map((row, i) => (
                <tr key={row.key} className="border-b border-border-subtle last:border-0">
                  <td className="py-2 pr-4 text-ink">{BLOOM_NOMI[row.key]}</td>
                  <td className="py-2 pr-4 tabular-nums text-ink-muted">{row.count}</td>
                  <td className="py-2 pr-4 tabular-nums text-ink-muted">
                    {bloom.lessons[i].count}
                  </td>
                  <td className="py-2 tabular-nums text-ink-muted">{bloom.tasks[i].count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
            Shaxsga yo&apos;naltirilgan ta&apos;lim quyi darajalar bilan cheklanmaydi:
            «tahlil», «sintez» va «baholash» darajasida ham topshiriq bo&apos;lishi
            kerak, aks holda ijodiy faoliyat baholanmay qoladi.
          </p>
        </CardContent>
      </Card>

      {/* Yo'nalishlar qamrovi */}
      <Card>
        <CardHeader>
          <CardTitle>Yo&apos;nalishlar bo&apos;yicha qamrov</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-sm">
            <caption className="sr-only">
              Sakkiz diagnostika yo&apos;nalishi bo&apos;yicha savollar, darslar,
              topshiriqlar va mashqlar soni
            </caption>
            <thead>
              <tr className="border-b border-border-subtle text-left">
                <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Yo&apos;nalish</th>
                <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Savollar</th>
                <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Darslar</th>
                <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Topshiriqlar</th>
                <th scope="col" className="py-2 font-medium text-ink-muted">Mashqlar</th>
              </tr>
            </thead>
            <tbody>
              {areas.map((row) => (
                <tr key={row.area} className="border-b border-border-subtle last:border-0">
                  <td className="py-2 pr-4 text-ink">
                    {YONALISH_NOMI[row.area]}
                    {row.savollar === 0 && (
                      <Badge variant="danger" className="ml-2">savol yo&apos;q</Badge>
                    )}
                  </td>
                  <td className="py-2 pr-4 tabular-nums text-ink-muted">{row.savollar}</td>
                  <td className="py-2 pr-4 tabular-nums text-ink-muted">{row.darslar}</td>
                  <td className="py-2 pr-4 tabular-nums text-ink-muted">{row.topshiriqlar}</td>
                  <td className="py-2 tabular-nums text-ink-muted">{row.mashqlar}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {areas.every((a) => a.savollar > 0) && (
            <p className="mt-2 flex items-center gap-1.5 text-xs text-success">
              <CheckCircle2 className="size-3.5" aria-hidden="true" />
              Har bir yo&apos;nalish diagnostika savollari bilan qoplangan — ball
              to&apos;liq hisoblanadi.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
