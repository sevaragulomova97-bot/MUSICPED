"use client";

import * as React from "react";
import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import {
  BarChart3,
  BookOpen,
  ClipboardList,
  Table2,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TOPSHIRIQ_BY_ID } from "@/content/tasks";
import {
  allDiagnostics,
  allProgress,
  allReflections,
  listSubmissions,
} from "@/lib/db/repo";
import {
  buildCards,
  buildDinamika,
  buildTaqqoslash,
  type Davr,
  DAVR_NOMI,
  filterByPeriod,
} from "@/lib/analytics";
import {
  ASOSIY_YONALISH_NOMI,
  ASOSIY_YONALISH_RANGI,
  ASOSIY_YONALISHLAR,
} from "@/lib/domain/types";
import { cn, formatDate } from "@/lib/utils";

/** Grafik chiziqlari — tartib qat'iy, rang yo'nalishga biriktirilgan. */
const CHIZIQLAR = [
  { key: "umumiy" as const, nom: "Umumiy", rang: "var(--mp-text)" },
  ...ASOSIY_YONALISHLAR.map((d) => ({
    key: d,
    nom: ASOSIY_YONALISH_NOMI[d],
    rang: ASOSIY_YONALISH_RANGI[d],
  })),
];

export function Natijalar() {
  const { profile } = useSession();
  const userId = profile?.id;
  const [davr, setDavr] = React.useState<Davr>("barcha");
  const [jadval, setJadval] = React.useState(false);

  const data = useLiveQuery(async () => {
    if (!userId) return null;
    const [subs, prog, diags, refl] = await Promise.all([
      listSubmissions(userId),
      allProgress(userId),
      allDiagnostics(userId),
      allReflections(userId),
    ]);
    return { subs, prog, diags, refl };
  }, [userId]);

  if (data === undefined) {
    return <p className="text-sm text-ink-muted">Yuklanmoqda…</p>;
  }

  const subs = filterByPeriod(data?.subs ?? [], davr);
  const kartalar = buildCards(subs, data?.prog ?? []);
  const dinamika = buildDinamika(subs);
  const taqqoslash = buildTaqqoslash(data?.diags ?? []);
  const izohlar = (data?.subs ?? []).filter((s) => s.teacherComment);

  const bosh = !subs.length && !taqqoslash.length;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
            Mening natijalarim
          </h1>
          <p className="mt-1.5 text-sm text-ink-muted">
            Natijalar brauzeringizdagi haqiqiy ma&apos;lumotdan hisoblanadi.
          </p>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <span className="text-ink-muted">Davr</span>
          <select
            value={davr}
            onChange={(e) => setDavr(e.target.value as Davr)}
            className="h-9 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink"
          >
            {(Object.keys(DAVR_NOMI) as Davr[]).map((d) => (
              <option key={d} value={d}>
                {DAVR_NOMI[d]}
              </option>
            ))}
          </select>
        </label>
      </div>

      {bosh ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
              <BarChart3 className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-medium text-ink">Hali natija yo&apos;q</p>
              <p className="mt-1.5 max-w-sm text-sm text-ink-muted">
                Diagnostikadan o&apos;ting yoki birorta topshiriqni bajaring —
                shundan keyin bu sahifada grafiklar paydo bo&apos;ladi.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="/diagnostika"
                className="inline-flex h-10 items-center rounded-xl bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Diagnostika
              </Link>
              <Link
                href="/topshiriqlar"
                className="inline-flex h-10 items-center rounded-xl border border-border-subtle px-5 text-sm font-medium text-ink transition-colors hover:bg-surface-muted"
              >
                Topshiriqlar
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Statistik kartalar */}
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardContent className="p-5">
                <p className="text-sm text-ink-muted">O&apos;rtacha natija</p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold tabular-nums text-ink">
                    {kartalar.ortacha}%
                  </span>
                  {kartalar.ozgarish !== null && kartalar.ozgarish !== 0 && (
                    <span
                      className={cn(
                        "flex items-center gap-0.5 text-sm font-medium",
                        kartalar.ozgarish > 0 ? "text-success" : "text-danger",
                      )}
                    >
                      {kartalar.ozgarish > 0 ? (
                        <TrendingUp className="size-4" aria-hidden="true" />
                      ) : (
                        <TrendingDown className="size-4" aria-hidden="true" />
                      )}
                      {Math.abs(kartalar.ozgarish)}%
                    </span>
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5">
                <p className="flex items-center gap-2 text-sm text-ink-muted">
                  <ClipboardList className="size-4" aria-hidden="true" />
                  Bajarilgan topshiriqlar
                </p>
                <p className="mt-1 font-display text-3xl font-bold tabular-nums text-ink">
                  {kartalar.bajarilganTopshiriq}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5">
                <p className="flex items-center gap-2 text-sm text-ink-muted">
                  <BookOpen className="size-4" aria-hidden="true" />
                  O&apos;qilgan darslar
                </p>
                <p className="mt-1 font-display text-3xl font-bold tabular-nums text-ink">
                  {kartalar.oqilganDars}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* O'sish dinamikasi */}
          {dinamika.length > 1 && (
            <Card>
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle>O&apos;sish dinamikasi</CardTitle>
                <button
                  type="button"
                  onClick={() => setJadval((v) => !v)}
                  className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
                >
                  <Table2 className="size-4" aria-hidden="true" />
                  {jadval ? "Grafik" : "Jadval"}
                </button>
              </CardHeader>
              <CardContent>
                {jadval ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <caption className="sr-only">
                        O&apos;sish dinamikasi — sana bo&apos;yicha o&apos;rtacha natija
                      </caption>
                      <thead>
                        <tr className="border-b border-border-subtle text-left">
                          <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">
                            Sana
                          </th>
                          {CHIZIQLAR.map((c) => (
                            <th
                              key={c.key}
                              scope="col"
                              className="py-2 pr-4 font-medium text-ink-muted"
                            >
                              {c.nom}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dinamika.map((row) => (
                          <tr key={row.sana} className="border-b border-border-subtle">
                            <td className="py-2 pr-4 text-ink-muted">
                              {formatDate(row.sana)}
                            </td>
                            {CHIZIQLAR.map((c) => (
                              <td
                                key={c.key}
                                className="py-2 pr-4 tabular-nums text-ink"
                              >
                                {row[c.key] ?? "—"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={dinamika} margin={{ top: 8, right: 16, bottom: 4, left: -16 }}>
                        <CartesianGrid stroke="var(--mp-border)" vertical={false} />
                        <XAxis
                          dataKey="sana"
                          tickFormatter={(v: string) => formatDate(v).slice(0, 5)}
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
                          labelFormatter={(v) => formatDate(String(v))}
                        />
                        <Legend wrapperStyle={{ fontSize: 13, paddingTop: 8 }} />
                        {CHIZIQLAR.map((c) => (
                          <Line
                            key={c.key}
                            type="monotone"
                            dataKey={c.key}
                            name={c.nom}
                            stroke={c.rang}
                            strokeWidth={2}
                            dot={{ r: 3 }}
                            connectNulls
                          />
                        ))}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}
                <p className="mt-3 text-xs text-ink-muted">
                  Har bir nuqta — o&apos;sha kungacha to&apos;plangan natijalarning
                  yurib boruvchi o&apos;rtachasi.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Diagnostika taqqoslash */}
          {taqqoslash.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Boshlang&apos;ich va joriy diagnostika</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={taqqoslash.map((t) => ({
                        nom: ASOSIY_YONALISH_NOMI[t.yonalish],
                        Boshlangich: t.boshlangich,
                        Joriy: t.joriy,
                      }))}
                      margin={{ top: 8, right: 16, bottom: 4, left: -16 }}
                    >
                      <CartesianGrid stroke="var(--mp-border)" vertical={false} />
                      <XAxis dataKey="nom" stroke="var(--mp-text-muted)" fontSize={11} tickLine={false} />
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
                      <Bar dataKey="Boshlangich" name="Boshlang'ich" fill="var(--mp-text-muted)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Joriy" name="Joriy" fill="var(--mp-primary)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {taqqoslash.map((t) => (
                    <li key={t.yonalish} className="flex items-center gap-3 text-sm">
                      <span className="w-40 shrink-0 text-ink-muted">
                        {ASOSIY_YONALISH_NOMI[t.yonalish]}
                      </span>
                      <span className="tabular-nums text-ink-muted">
                        {t.boshlangich}% → {t.joriy}%
                      </span>
                      {t.ozgarish !== 0 && (
                        <Badge variant={t.ozgarish > 0 ? "success" : "warning"}>
                          {t.ozgarish > 0 ? "+" : ""}
                          {t.ozgarish}
                        </Badge>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* O'qituvchi izohlari */}
          {izohlar.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>O&apos;qituvchi izohlari</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3">
                  {izohlar.map((s) => (
                    <li key={s.id} className="rounded-xl bg-surface-muted p-4">
                      <p className="text-sm font-medium text-ink">
                        {TOPSHIRIQ_BY_ID.get(s.taskId)?.title ?? s.taskId}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        {s.teacherComment}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Refleksiya kundaligi */}
          {(data?.refl.length ?? 0) > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Refleksiya kundaligi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3">
                  {data!.refl.slice(0, 8).map((r) => (
                    <li key={r.id} className="rounded-xl border border-border-subtle p-4">
                      <p className="text-sm font-medium text-ink">{r.question}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        {r.answer || <em>javob yozilmagan</em>}
                      </p>
                      <p className="mt-2 text-xs text-ink-muted">
                        {formatDate(r.createdAt)}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Progress xulosasi */}
          <Card>
            <CardHeader>
              <CardTitle>Yo&apos;nalishlar bo&apos;yicha</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3.5">
              {taqqoslash.length > 0
                ? taqqoslash.map((t) => (
                    <Progress
                      key={t.yonalish}
                      value={t.joriy}
                      label={ASOSIY_YONALISH_NOMI[t.yonalish]}
                      color={ASOSIY_YONALISH_RANGI[t.yonalish]}
                    />
                  ))
                : ASOSIY_YONALISHLAR.map((d) => (
                    <Progress
                      key={d}
                      value={0}
                      label={ASOSIY_YONALISH_NOMI[d]}
                      color={ASOSIY_YONALISH_RANGI[d]}
                    />
                  ))}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
