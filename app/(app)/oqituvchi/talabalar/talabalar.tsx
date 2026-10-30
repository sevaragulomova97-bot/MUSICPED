"use client";

import * as React from "react";
import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { Download, Table2, Users } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
} from "recharts";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TOPSHIRIQ_BY_ID } from "@/content/tasks";
import { listDatasets } from "@/lib/db/repo";
import { downloadCsv } from "@/lib/export/download";
import {
  DIAGNOSTIKA_YONALISHLARI,
  EKSPERIMENT_GURUH_NOMI,
  type ExperimentGroup,
  YONALISH_NOMI,
  zpdZone,
  ZPD_NOMI,
} from "@/lib/domain/types";
import { RasmiyBaho } from "@/components/teacher/rasmiy-baho";
import {
  dasturQoplovi,
  isPending,
  overview,
  type StudentOverview,
} from "@/lib/teacher";
import { formatDate } from "@/lib/utils";

type Saralash = "ism" | "natija" | "kutayotgan";

export function Talabalar() {
  const { profile } = useSession();
  const ownerId = profile?.id;
  const [tanlangan, setTanlangan] = React.useState<string | null>(null);
  const [saralash, setSaralash] = React.useState<Saralash>("ism");
  const [guruh, setGuruh] = React.useState<ExperimentGroup | "barcha">(
    "barcha",
  );

  const datasets = useLiveQuery(
    async () => (ownerId ? listDatasets(ownerId) : []),
    [ownerId],
  );

  /*
    Sarlavha ro'yxat bo'sh bo'lganda ham chiqadi. Avval bo'sh holatda
    sahifada bitta ham `h1` qolmasdi: ekran o'quvchi sahifaning nomini
    aytolmaydi, ko'z bilan o'qiyotgan ham qaysi bo'limda turganini
    yo'qotadi — yon paneldan boshqa tabda ochilgan bo'lsa ayniqsa.
  */
  const sarlavha = (izoh: string) => (
    <div>
      <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
        Talabalar
      </h1>
      <p className="mt-1.5 text-sm text-ink-muted">{izoh}</p>
    </div>
  );

  if (datasets === undefined) {
    return (
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {sarlavha("Yuklanmoqda…")}
      </div>
    );
  }

  if (datasets.length === 0) {
    return (
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {sarlavha("Hali bitta ham talaba ma'lumoti yuklanmagan")}
        <Card className="mx-auto max-w-2xl">
          <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary-ink">
              <Users className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-medium text-ink">
                Hali talaba ma&apos;lumoti yo&apos;q
              </p>
              <p className="mt-1.5 max-w-sm text-sm text-ink-muted">
                Talabalardan{" "}
                <code className="rounded bg-surface-muted px-1 py-0.5 text-xs">
                  natijalar-….json
                </code>{" "}
                faylini oling va kabinet bosh sahifasida yuklang. Sinab
                ko&apos;rish uchun namunaviy ma&apos;lumotni ham qo&apos;shish
                mumkin.
              </p>
            </div>
            <Link
              href="/oqituvchi"
              className="inline-flex h-10 items-center rounded-xl bg-primary-solid px-5 text-sm font-medium text-white transition-colors hover:opacity-90"
            >
              Ma&apos;lumot yuklash
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const royxat = datasets
    .map(overview)
    .filter((o) => guruh === "barcha" || o.experimentGroup === guruh)
    .sort((a, b) => {
      if (saralash === "natija") {
        return (b.latestOverall ?? -1) - (a.latestOverall ?? -1);
      }
      if (saralash === "kutayotgan") return b.pendingCount - a.pendingCount;
      return a.fullName.localeCompare(b.fullName, "uz");
    });

  const joriy = tanlangan
    ? datasets.find((d) => d.studentId === tanlangan)
    : undefined;

  function eksportCsv() {
    const sarlavha = [
      "Ism familiya",
      "Guruh",
      "Tajriba guruhi",
      "Boshlang'ich %",
      "Oxirgi %",
      "O'sish",
      "Yakunlangan dars",
      "O'rtacha ball",
      "Baho kutayotgan",
    ];
    const qatorlar = royxat.map((o) => [
      o.fullName,
      o.group ?? "",
      o.experimentGroup ? EKSPERIMENT_GURUH_NOMI[o.experimentGroup] : "",
      o.baselineOverall ?? "",
      o.latestOverall ?? "",
      o.baselineOverall !== null && o.latestOverall !== null
        ? o.latestOverall - o.baselineOverall
        : "",
      `${o.completedLessons}/${o.totalLessons}`,
      o.averageScore ?? "",
      o.pendingCount,
    ]);
    downloadCsv([sarlavha, ...qatorlar], "talabalar.csv");
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
            Talabalar
          </h1>
          <p className="mt-1.5 text-sm text-ink-muted">
            {royxat.length} talaba · ma&apos;lumot faqat shu brauzerda saqlanadi
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-2 text-sm">
            <span className="text-ink-muted">Guruh</span>
            <select
              value={guruh}
              onChange={(e) =>
                setGuruh(e.target.value as ExperimentGroup | "barcha")
              }
              className="h-9 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink"
            >
              <option value="barcha">Barchasi</option>
              <option value="tajriba">Tajriba</option>
              <option value="nazorat">Nazorat</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-ink-muted">Tartib</span>
            <select
              value={saralash}
              onChange={(e) => setSaralash(e.target.value as Saralash)}
              className="h-9 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink"
            >
              <option value="ism">Ism bo&apos;yicha</option>
              <option value="natija">Natija bo&apos;yicha</option>
              <option value="kutayotgan">Baho kutayotgan</option>
            </select>
          </label>
          <Button variant="outline" size="sm" onClick={eksportCsv}>
            <Download aria-hidden="true" />
            CSV
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="sr-only">
                Talabalar ro&apos;yxati: guruh, diagnostika natijasi,
                yakunlangan darslar va baho kutayotgan ishlar
              </caption>
              <thead>
                <tr className="border-b border-border-subtle text-left">
                  <th
                    scope="col"
                    className="px-4 py-3 font-medium text-ink-muted"
                  >
                    Talaba
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-medium text-ink-muted"
                  >
                    Guruh
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-medium text-ink-muted"
                  >
                    Boshi → oxiri
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-medium text-ink-muted"
                  >
                    Darslar
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-medium text-ink-muted"
                  >
                    O&apos;rtacha
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-medium text-ink-muted"
                  >
                    Kutmoqda
                  </th>
                </tr>
              </thead>
              <tbody>
                {royxat.map((o) => (
                  <tr
                    key={o.studentId}
                    className="border-b border-border-subtle last:border-0"
                  >
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() =>
                          setTanlangan((v) =>
                            v === o.studentId ? null : o.studentId,
                          )
                        }
                        className="text-left font-medium text-ink hover:text-primary hover:underline"
                        aria-expanded={tanlangan === o.studentId}
                      >
                        {o.fullName}
                      </button>
                      {o.demo && (
                        <Badge variant="warning" className="ml-2">
                          namuna
                        </Badge>
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-muted">
                      {o.group ?? "—"}
                      {o.experimentGroup && (
                        <Badge
                          variant={
                            o.experimentGroup === "tajriba"
                              ? "primary"
                              : "neutral"
                          }
                          className="ml-2"
                        >
                          {o.experimentGroup === "tajriba" ? "T" : "N"}
                        </Badge>
                      )}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-ink">
                      {o.baselineOverall ?? "—"}
                      {o.baselineOverall !== null &&
                        o.latestOverall !== null && (
                          <>
                            {" → "}
                            {o.latestOverall}
                            <span
                              className={
                                o.latestOverall >= o.baselineOverall
                                  ? "ml-1.5 text-xs text-success-ink"
                                  : "ml-1.5 text-xs text-danger-ink"
                              }
                            >
                              {o.latestOverall >= o.baselineOverall ? "+" : ""}
                              {o.latestOverall - o.baselineOverall}
                            </span>
                          </>
                        )}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-ink-muted">
                      {o.completedLessons}/{o.totalLessons}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-ink">
                      {o.averageScore !== null ? `${o.averageScore}%` : "—"}
                    </td>
                    <td className="px-4 py-3 tabular-nums">
                      {o.pendingCount > 0 ? (
                        <Badge variant="warning">{o.pendingCount}</Badge>
                      ) : (
                        <span className="text-ink-muted">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {joriy && (
        <TalabaKarta
          dataset={joriy}
          overview={overview(joriy)}
          ownerId={ownerId}
        />
      )}
    </div>
  );
}

/** Tanlangan talabaning batafsil ko'rinishi. */
function TalabaKarta({
  dataset,
  overview: o,
  ownerId,
}: {
  dataset: Awaited<ReturnType<typeof listDatasets>>[number];
  overview: StudentOverview;
  ownerId?: string;
}) {
  const [jadval, setJadval] = React.useState(false);
  const b = dataset.bundle;
  const qoplov = dasturQoplovi(b.progress);

  const diagnostikalar = [...b.diagnostics].sort((x, y) =>
    x.completedAt.localeCompare(y.completedAt),
  );
  const boshlangich =
    diagnostikalar.find((d) => d.kind === "boshlangich") ?? diagnostikalar[0];
  const oxirgi = diagnostikalar[diagnostikalar.length - 1];

  const radar =
    boshlangich && oxirgi
      ? DIAGNOSTIKA_YONALISHLARI.map((area) => ({
          yonalish: YONALISH_NOMI[area],
          Boshlangich: boshlangich.scores[area],
          Oxirgi: oxirgi.scores[area],
        }))
      : [];

  const ishlar = [...b.submissions].sort((x, y) =>
    y.submittedAt.localeCompare(x.submittedAt),
  );

  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between">
        <div>
          <CardTitle>{o.fullName}</CardTitle>
          <p className="mt-1 text-sm text-ink-muted">
            {o.group ?? "guruh ko'rsatilmagan"}
            {o.experimentGroup &&
              ` · ${EKSPERIMENT_GURUH_NOMI[o.experimentGroup]}`}
            {` · ${formatDate(o.importedAt)} da qabul qilingan`}
          </p>
        </div>
        {radar.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setJadval((v) => !v)}
          >
            <Table2 aria-hidden="true" />
            {jadval ? "Grafik" : "Jadval"}
          </Button>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <div>
          <p className="mb-2 flex items-baseline justify-between text-sm">
            <span className="text-ink-muted">
              Dastur bo&apos;yicha progress
            </span>
            <span className="tabular-nums text-ink">
              {o.completedLessons}/{o.totalLessons} dars
            </span>
          </p>
          <Progress
            value={Math.round((o.completedLessons / o.totalLessons) * 100)}
          />
        </div>

        {/*
          «Qancha dars tugatdi» degan raqam o'zi kam narsa aytadi:
          platformada dasturga kirmaydigan darslar ham bor. Shuning
          uchun qoplov ma'ruza va amaliy bo'yicha alohida ko'rsatiladi.
        */}
        <div className="grid gap-4 sm:grid-cols-2">
          {(
            [
              ["maruza", "Ma'ruza (M1-M30)"],
              ["amaliy", "Amaliy (A1-A30)"],
            ] as const
          ).map(([tur, nom]) => {
            const q = qoplov[tur];
            const foiz = q.jami ? Math.round((q.bajarildi / q.jami) * 100) : 0;
            return (
              <div key={tur}>
                <p className="mb-2 flex items-baseline justify-between text-sm">
                  <span className="text-ink-muted">{nom}</span>
                  <span className="tabular-nums text-ink">
                    {q.bajarildi}/{q.jami}
                  </span>
                </p>
                <Progress value={foiz} />
                {q.qolgan.length > 0 && (
                  <p className="mt-1.5 text-xs text-ink-muted">
                    Qolgan: {q.qolgan.slice(0, 6).join(", ")}
                    {q.qolgan.length > 6 && ` va yana ${q.qolgan.length - 6} ta`}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {ownerId && (
          <RasmiyBaho
            ownerId={ownerId}
            studentId={dataset.studentId}
            submissions={b.submissions}
            saqlangan={dataset.rasmiy}
          />
        )}

        {radar.length > 0 &&
          (jadval ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <caption className="sr-only">
                  Yo&apos;nalishlar bo&apos;yicha boshlang&apos;ich va oxirgi
                  diagnostika
                </caption>
                <thead>
                  <tr className="border-b border-border-subtle text-left">
                    <th
                      scope="col"
                      className="py-2 pr-4 font-medium text-ink-muted"
                    >
                      Yo&apos;nalish
                    </th>
                    <th
                      scope="col"
                      className="py-2 pr-4 font-medium text-ink-muted"
                    >
                      Boshi
                    </th>
                    <th
                      scope="col"
                      className="py-2 pr-4 font-medium text-ink-muted"
                    >
                      Oxiri
                    </th>
                    <th
                      scope="col"
                      className="py-2 pr-4 font-medium text-ink-muted"
                    >
                      O&apos;sish
                    </th>
                    <th scope="col" className="py-2 font-medium text-ink-muted">
                      Zona
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {DIAGNOSTIKA_YONALISHLARI.map((area) => {
                    const boshi = boshlangich.scores[area];
                    const oxiri = oxirgi.scores[area];
                    return (
                      <tr key={area} className="border-b border-border-subtle">
                        <td className="py-2 pr-4 text-ink">
                          {YONALISH_NOMI[area]}
                        </td>
                        <td className="py-2 pr-4 tabular-nums text-ink-muted">
                          {boshi}
                        </td>
                        <td className="py-2 pr-4 tabular-nums text-ink">
                          {oxiri}
                        </td>
                        <td className="py-2 pr-4 tabular-nums text-ink-muted">
                          {oxiri - boshi >= 0 ? "+" : ""}
                          {oxiri - boshi}
                        </td>
                        <td className="py-2 text-xs text-ink-muted">
                          {ZPD_NOMI[zpdZone(oxiri)]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radar} outerRadius="72%">
                  <PolarGrid stroke="var(--mp-border)" />
                  <PolarAngleAxis
                    dataKey="yonalish"
                    tick={{ fill: "var(--mp-text-muted)", fontSize: 11 }}
                  />
                  <PolarRadiusAxis
                    domain={[0, 100]}
                    tick={{ fill: "var(--mp-text-muted)", fontSize: 10 }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--mp-surface)",
                      border: "1px solid var(--mp-border)",
                      borderRadius: 12,
                      color: "var(--mp-text)",
                      fontSize: 13,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 13 }} />
                  <Radar
                    name="Boshlang'ich"
                    dataKey="Boshlangich"
                    stroke="var(--mp-text-muted)"
                    fill="var(--mp-text-muted)"
                    fillOpacity={0.15}
                  />
                  <Radar
                    name="Oxirgi"
                    dataKey="Oxirgi"
                    stroke="var(--mp-primary)"
                    fill="var(--mp-primary)"
                    fillOpacity={0.25}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          ))}

        {ishlar.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-medium text-ink">
              Topshirilgan ishlar ({ishlar.length})
            </h3>
            <ul className="flex flex-col divide-y divide-border-subtle">
              {ishlar.map((s) => (
                <li
                  key={s.id}
                  className="flex items-center justify-between gap-3 py-2 text-sm"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-ink">
                      {TOPSHIRIQ_BY_ID.get(s.taskId)?.title ?? s.taskId}
                    </span>
                    <span className="text-xs text-ink-muted">
                      {formatDate(s.submittedAt)}
                      {s.teacherComment && ` · ${s.teacherComment}`}
                    </span>
                  </span>
                  {isPending(s) ? (
                    <Badge variant="warning">baho kutmoqda</Badge>
                  ) : (
                    <span className="shrink-0 tabular-nums font-medium text-ink">
                      {s.score}%
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {b.reflections.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-medium text-ink">
              Refleksiya javoblari ({b.reflections.length})
            </h3>
            <ul className="flex flex-col gap-2">
              {b.reflections.slice(0, 6).map((r, i) => (
                <li
                  key={`${r.contextId}-${i}`}
                  className="rounded-xl bg-surface-muted p-3 text-sm"
                >
                  <p className="text-xs text-ink-muted">{r.question}</p>
                  <p className="mt-1 leading-relaxed text-ink">{r.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {b.diagnostics.length > 1 && (
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={diagnostikalar.map((d) => ({
                  nom:
                    d.kind === "boshlangich"
                      ? "Boshi"
                      : d.kind === "oraliq"
                        ? "Oraliq"
                        : "Yakuniy",
                  Ball: d.overall,
                }))}
                margin={{ top: 8, right: 16, bottom: 4, left: -16 }}
              >
                <CartesianGrid stroke="var(--mp-border)" vertical={false} />
                <XAxis
                  dataKey="nom"
                  stroke="var(--mp-text-muted)"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  stroke="var(--mp-text-muted)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--mp-surface)",
                    border: "1px solid var(--mp-border)",
                    borderRadius: 12,
                    color: "var(--mp-text)",
                    fontSize: 13,
                  }}
                />
                <Bar
                  dataKey="Ball"
                  fill="var(--mp-primary)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
