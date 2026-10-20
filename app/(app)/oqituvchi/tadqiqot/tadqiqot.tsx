"use client";

import * as React from "react";
import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { AlertTriangle, BarChart3, Download, FileText, Table2 } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listDatasets } from "@/lib/db/repo";
import { downloadBlob, downloadCsv } from "@/lib/export/download";
import {
  DARAJA_NOMI,
  DARAJALAR,
  EKSPERIMENT_GURUH_NOMI,
} from "@/lib/domain/types";
import {
  analyzeResearch,
  dynamicsRows,
  growthRows,
  type ResearchAnalysis,
} from "@/lib/research";
import { formatNumber, formatP, interpretTTest, significance } from "@/lib/stats";
import { datasetsToSubjects } from "@/lib/teacher";

export function Tadqiqot() {
  const { profile } = useSession();
  const ownerId = profile?.id;
  const [jadval, setJadval] = React.useState(false);
  const [pdfHolati, setPdfHolati] = React.useState<"tayyor" | "yasalmoqda">("tayyor");

  const datasets = useLiveQuery(
    async () => (ownerId ? listDatasets(ownerId) : []),
    [ownerId],
  );

  if (datasets === undefined) {
    return <p className="text-sm text-ink-muted">Yuklanmoqda…</p>;
  }

  const { subjects, skipped } = datasetsToSubjects(datasets);

  if (subjects.length === 0) {
    return (
      <Card className="mx-auto max-w-2xl">
        <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
          <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary-ink">
            <BarChart3 className="size-6" aria-hidden="true" />
          </span>
          <div>
            <p className="font-medium text-ink">Tahlil uchun ma&apos;lumot yetarli emas</p>
            <p className="mt-1.5 max-w-md text-sm text-ink-muted">
              Tahlilga faqat <strong className="font-medium text-ink">boshlang&apos;ich va
              yakuniy diagnostikasi ham bor</strong> va tajriba/nazorat guruhi
              ko&apos;rsatilgan talabalar kiradi — aks holda «o&apos;sish» degan son
              ma&apos;nosiz bo&apos;ladi.
            </p>
          </div>
          {skipped.length > 0 && (
            <ul className="w-full max-w-md text-left text-xs text-ink-muted">
              {skipped.slice(0, 6).map((s) => (
                <li key={s.fullName} className="border-t border-border-subtle py-1.5">
                  {s.fullName} — {s.reason}
                </li>
              ))}
            </ul>
          )}
          <Link
            href="/oqituvchi"
            className="inline-flex h-10 items-center rounded-xl bg-primary-solid px-5 text-sm font-medium text-white transition-colors hover:opacity-90"
          >
            Ma&apos;lumot yuklash
          </Link>
        </CardContent>
      </Card>
    );
  }

  const tahlil = analyzeResearch(subjects);
  const dinamika = dynamicsRows(tahlil);
  const osish = growthRows(tahlil);

  function eksportCsv() {
    const rows: Array<Array<string | number>> = [
      ["MusicPed — tajriba-sinov tahlili"],
      ["Tajriba guruhi", tahlil.counts.tajriba, "Nazorat guruhi", tahlil.counts.nazorat],
      [],
      ["Yo'nalish", "Tajriba boshi", "Tajriba oxiri", "Tajriba o'sish",
        "Nazorat boshi", "Nazorat oxiri", "Nazorat o'sish", "t", "df", "p", "Koen d"],
    ];

    for (const c of [tahlil.overall, ...tahlil.areas]) {
      rows.push([
        c.label,
        formatNumber(c.tajriba.baseline.mean, 1),
        formatNumber(c.tajriba.final.mean, 1),
        formatNumber(c.tajriba.osish, 1),
        formatNumber(c.nazorat.baseline.mean, 1),
        formatNumber(c.nazorat.final.mean, 1),
        formatNumber(c.nazorat.osish, 1),
        formatNumber(c.ttest.t),
        formatNumber(c.ttest.df, 1),
        formatNumber(c.ttest.p, 4),
        formatNumber(c.effect.d),
      ]);
    }

    rows.push([], ["Daraja taqsimoti (yakuniy)"], ["Guruh", ...DARAJALAR.map((l) => DARAJA_NOMI[l])]);
    rows.push(["Tajriba", ...tahlil.levels.final.observed[0]]);
    rows.push(["Nazorat", ...tahlil.levels.final.observed[1]]);
    rows.push([
      "χ²",
      formatNumber(tahlil.levels.final.chi2.chi2),
      "df",
      tahlil.levels.final.chi2.df,
      "p",
      formatNumber(tahlil.levels.final.chi2.p, 4),
      "Kramer V",
      formatNumber(tahlil.levels.final.chi2.cramersV),
    ]);

    downloadCsv(rows, "tadqiqot-tahlili.csv");
  }

  async function eksportPdf() {
    setPdfHolati("yasalmoqda");
    try {
      const { buildResearchReportPdf } = await import("@/lib/export/research-report");
      const blob = await buildResearchReportPdf(tahlil, {
        teacherName: profile?.fullName ?? "",
      });
      downloadBlob(blob, "tadqiqot-hisoboti.pdf");
    } finally {
      setPdfHolati("tayyor");
    }
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
            Tajriba-sinov tahlili
          </h1>
          <p className="mt-1.5 text-sm text-ink-muted">
            Tajriba guruhi {tahlil.counts.tajriba} kishi · nazorat guruhi{" "}
            {tahlil.counts.nazorat} kishi
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={eksportCsv}>
            <Download aria-hidden="true" />
            CSV
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => void eksportPdf()}
            disabled={pdfHolati === "yasalmoqda"}
          >
            <FileText aria-hidden="true" />
            {pdfHolati === "yasalmoqda" ? "Yasalmoqda…" : "PDF hisobot"}
          </Button>
        </div>
      </div>

      {tahlil.warnings.length > 0 && (
        <Card>
          <CardContent className="flex flex-col gap-2 p-4">
            {tahlil.warnings.map((w) => (
              <p key={w} className="flex items-start gap-2 text-sm text-warning-ink">
                <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span className="leading-relaxed">{w}</span>
              </p>
            ))}
          </CardContent>
        </Card>
      )}

      {skipped.length > 0 && (
        <p className="text-xs leading-relaxed text-ink-muted">
          {skipped.length} talaba tahlilga kirmadi:{" "}
          {skipped.slice(0, 4).map((s) => `${s.fullName} (${s.reason})`).join("; ")}
          {skipped.length > 4 && " …"}
        </p>
      )}

      {/* 1-qadam: guruhlar bir xilligi */}
      <Card>
        <CardHeader>
          <CardTitle>1. Tajriba boshida guruhlar bir xilmi?</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 text-sm">
          <p className="leading-relaxed text-ink-muted">
            Bu birinchi tekshiruv, chunki tajriba boshida guruhlar farq qilsa,
            oxirgi farqni metodikaga bog&apos;lab bo&apos;lmaydi.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={tahlil.homogeneity.homogeneous ? "success" : "danger"}>
              {tahlil.homogeneity.homogeneous ? "Guruhlar bir xil" : "Guruhlar farq qiladi"}
            </Badge>
            <span className="tabular-nums text-ink-muted">
              t = {formatNumber(tahlil.homogeneity.ttest.t)} · df ={" "}
              {formatNumber(tahlil.homogeneity.ttest.df, 1)} ·{" "}
              {formatP(tahlil.homogeneity.ttest.p)}
            </span>
          </div>
          <p className="tabular-nums text-ink-muted">
            Boshlang&apos;ich o&apos;rtacha: tajriba{" "}
            {formatNumber(tahlil.overall.tajriba.baseline.mean, 1)}% · nazorat{" "}
            {formatNumber(tahlil.overall.nazorat.baseline.mean, 1)}%
          </p>
        </CardContent>
      </Card>

      {/* 2-qadam: dinamika */}
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>2. O&apos;sish dinamikasi</CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setJadval((v) => !v)}>
            <Table2 aria-hidden="true" />
            {jadval ? "Grafik" : "Jadval"}
          </Button>
        </CardHeader>
        <CardContent>
          {jadval ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <caption className="sr-only">
                  Boshlang&apos;ich va yakuniy o&apos;rtacha ball, guruhlar bo&apos;yicha
                </caption>
                <thead>
                  <tr className="border-b border-border-subtle text-left">
                    <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">O&apos;lchov</th>
                    <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Tajriba</th>
                    <th scope="col" className="py-2 font-medium text-ink-muted">Nazorat</th>
                  </tr>
                </thead>
                <tbody>
                  {dinamika.map((r) => (
                    <tr key={r.label} className="border-b border-border-subtle">
                      <td className="py-2 pr-4 text-ink">{r.label}</td>
                      <td className="py-2 pr-4 tabular-nums text-ink">{r.tajriba}</td>
                      <td className="py-2 tabular-nums text-ink">{r.nazorat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dinamika} margin={{ top: 8, right: 16, bottom: 4, left: -16 }}>
                  <CartesianGrid stroke="var(--mp-border)" vertical={false} />
                  <XAxis dataKey="label" stroke="var(--mp-text-muted)" fontSize={12} tickLine={false} />
                  <YAxis domain={[0, 100]} stroke="var(--mp-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--mp-surface)",
                      border: "1px solid var(--mp-border)",
                      borderRadius: 12,
                      color: "var(--mp-text)",
                      fontSize: 13,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 13, paddingTop: 8 }} />
                  <Line
                    type="monotone"
                    dataKey="tajriba"
                    name={EKSPERIMENT_GURUH_NOMI.tajriba}
                    stroke="var(--mp-primary)"
                    strokeWidth={2.5}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="nazorat"
                    name={EKSPERIMENT_GURUH_NOMI.nazorat}
                    stroke="var(--mp-text-muted)"
                    strokeWidth={2.5}
                    strokeDasharray="5 4"
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          <p className="mt-3 text-sm leading-relaxed text-ink">
            {interpretTTest(tahlil.overall.ttest, tahlil.overall.effect)}
          </p>
          <p className="mt-1.5 text-xs text-ink-muted">
            Parametrik bo&apos;lmagan tekshiruv (Mann–Uitni):{" "}
            {formatP(tahlil.overall.mann.p)} — {" "}
            {tahlil.overall.mann.p < 0.05 === tahlil.overall.ttest.p < 0.05
              ? "ikki mezon bir xil xulosaga olib keladi"
              : "ikki mezon farq qiladi, natijani ehtiyotkorlik bilan o'qish kerak"}
          </p>
        </CardContent>
      </Card>

      {/* Yo'nalishlar kesimi */}
      <Card>
        <CardHeader>
          <CardTitle>Yo&apos;nalishlar bo&apos;yicha o&apos;sish</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={osish} margin={{ top: 8, right: 16, bottom: 48, left: -16 }}>
                <CartesianGrid stroke="var(--mp-border)" vertical={false} />
                <XAxis
                  dataKey="label"
                  stroke="var(--mp-text-muted)"
                  fontSize={11}
                  tickLine={false}
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                />
                <YAxis stroke="var(--mp-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--mp-surface)",
                    border: "1px solid var(--mp-border)",
                    borderRadius: 12,
                    color: "var(--mp-text)",
                    fontSize: 13,
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 13 }} verticalAlign="top" />
                <Bar dataKey="tajriba" name="Tajriba" fill="var(--mp-primary)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="nazorat" name="Nazorat" fill="var(--mp-text-muted)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="sr-only">
                Yo&apos;nalishlar bo&apos;yicha yakuniy natija, t-mezon va effekt kattaligi
              </caption>
              <thead>
                <tr className="border-b border-border-subtle text-left">
                  <th scope="col" className="py-2 pr-3 font-medium text-ink-muted">Yo&apos;nalish</th>
                  <th scope="col" className="py-2 pr-3 font-medium text-ink-muted">Tajriba</th>
                  <th scope="col" className="py-2 pr-3 font-medium text-ink-muted">Nazorat</th>
                  <th scope="col" className="py-2 pr-3 font-medium text-ink-muted">t</th>
                  <th scope="col" className="py-2 pr-3 font-medium text-ink-muted">p</th>
                  <th scope="col" className="py-2 font-medium text-ink-muted">d</th>
                </tr>
              </thead>
              <tbody>
                {[tahlil.overall, ...tahlil.areas].map((c) => (
                  <tr
                    key={c.key}
                    className={
                      c.key === "umumiy"
                        ? "border-b border-border-subtle font-medium"
                        : "border-b border-border-subtle"
                    }
                  >
                    <td className="py-2 pr-3 text-ink">{c.label}</td>
                    <td className="py-2 pr-3 tabular-nums text-ink">
                      {formatNumber(c.tajriba.final.mean, 1)}
                    </td>
                    <td className="py-2 pr-3 tabular-nums text-ink">
                      {formatNumber(c.nazorat.final.mean, 1)}
                    </td>
                    <td className="py-2 pr-3 tabular-nums text-ink-muted">
                      {formatNumber(c.ttest.t)}
                    </td>
                    <td className="py-2 pr-3 tabular-nums">
                      <span
                        className={
                          Number.isFinite(c.ttest.p) && c.ttest.p < 0.05
                            ? "text-success-ink"
                            : "text-ink-muted"
                        }
                      >
                        {significance(c.ttest.p) === "ahamiyatsiz"
                          ? formatNumber(c.ttest.p, 3)
                          : significance(c.ttest.p)}
                      </span>
                    </td>
                    <td className="py-2 tabular-nums text-ink-muted">
                      {formatNumber(c.effect.d)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
            t — Uelch t-mezoni statistikasi (dispersiyalar tengligi talab
            qilinmaydi); p — ikki tomonlama ahamiyatlilik; d — Koen effekt
            kattaligi (0,2 kichik · 0,5 o&apos;rta · 0,8 katta).
          </p>
        </CardContent>
      </Card>

      {/* 3-qadam: guruh ichidagi o'sish */}
      <Card>
        <CardHeader>
          <CardTitle>3. Guruh ichidagi o&apos;sish (juftlashgan t-mezon)</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          {(["tajriba", "nazorat"] as const).map((g) => (
            <div key={g} className="rounded-xl bg-surface-muted p-4">
              <p className="text-sm font-medium text-ink">{EKSPERIMENT_GURUH_NOMI[g]}</p>
              <p className="mt-1.5 text-sm tabular-nums text-ink-muted">
                O&apos;sish: {formatNumber(tahlil.within[g].ttest.meanDifference, 1)} ball
              </p>
              <p className="mt-0.5 text-sm tabular-nums text-ink-muted">
                t = {formatNumber(tahlil.within[g].ttest.t)} · df ={" "}
                {formatNumber(tahlil.within[g].ttest.df, 0)} ·{" "}
                {formatP(tahlil.within[g].ttest.p)}
              </p>
            </div>
          ))}
          <p className="text-xs leading-relaxed text-ink-muted sm:col-span-2">
            Bu yerda bir xil talabalarning «oldin» va «keyin» natijasi
            solishtiriladi, shuning uchun kuzatuvlar mustaqil emas va
            juftlashgan mezon ishlatiladi.
          </p>
        </CardContent>
      </Card>

      {/* 4-qadam: daraja taqsimoti */}
      <Card>
        <CardHeader>
          <CardTitle>4. Daraja taqsimoti (χ² mezoni)</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {(["baseline", "final"] as const).map((phase) => {
            const l = tahlil.levels[phase];
            return (
              <div key={phase}>
                <p className="mb-2 text-sm font-medium text-ink">
                  {phase === "baseline" ? "Tajriba boshida" : "Tajriba oxirida"}
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <caption className="sr-only">
                      {phase === "baseline" ? "Boshlang'ich" : "Yakuniy"} daraja
                      taqsimoti, guruhlar bo&apos;yicha
                    </caption>
                    <thead>
                      <tr className="border-b border-border-subtle text-left">
                        <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Guruh</th>
                        {DARAJALAR.map((lvl) => (
                          <th key={lvl} scope="col" className="py-2 pr-4 font-medium text-ink-muted">
                            {DARAJA_NOMI[lvl]}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(["tajriba", "nazorat"] as const).map((g, i) => (
                        <tr key={g} className="border-b border-border-subtle">
                          <td className="py-2 pr-4 text-ink">{EKSPERIMENT_GURUH_NOMI[g]}</td>
                          {l.observed[i].map((v, j) => (
                            <td key={j} className="py-2 pr-4 tabular-nums text-ink">
                              {v}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-1.5 text-sm tabular-nums text-ink-muted">
                  χ² = {formatNumber(l.chi2.chi2)} · df = {l.chi2.df} ·{" "}
                  {formatP(l.chi2.p)} · Kramer V = {formatNumber(l.chi2.cramersV)}
                  {l.chi2.lowExpectedCells > 0 && (
                    <span className="ml-2 text-warning-ink">
                      ({l.chi2.lowExpectedCells} katakchada kutilgan chastota &lt; 5)
                    </span>
                  )}
                </p>
              </div>
            );
          })}
          <p className="text-xs leading-relaxed text-ink-muted">
            Daraja chegaralari: past &lt; 56 · o&apos;rta 56–70 · yuqori ≥ 71.
            χ² mezoni taqsimotlar farqini tekshiradi; Kramer V farqning kuchini
            0 dan 1 gacha o&apos;lchaydi.
          </p>
        </CardContent>
      </Card>

      <p className="text-xs leading-relaxed text-ink-muted">
        Statistik mezonlar platforma ichida hisoblanadi va mustaqil paket
        (SciPy) bilan solishtirib tekshirilgan. Shunga qaramay statistika
        isbot bermaydi — u faqat «tasodif bilan tushuntirish qanchalik
        qiyin» degan savolga javob beradi.
      </p>
    </div>
  );
}

export type { ResearchAnalysis };
