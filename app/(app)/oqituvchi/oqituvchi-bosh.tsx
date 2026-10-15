"use client";

import * as React from "react";
import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import {
  BarChart3,
  ClipboardList,
  GraduationCap,
  Trash2,
  Users,
} from "lucide-react";
import { useSession } from "@/components/session-provider";
import { ImportPanel } from "@/components/teacher/import-panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteDataset, listDatasets, recentActivity } from "@/lib/db/repo";
import { datasetsToSubjects, overview, pendingCount } from "@/lib/teacher";
import { analyzeResearch } from "@/lib/research";
import { formatNumber, formatP } from "@/lib/stats";
import { formatDate } from "@/lib/utils";

export function OqituvchiBosh() {
  const { profile } = useSession();
  const ownerId = profile?.id;

  const data = useLiveQuery(async () => {
    if (!ownerId) return null;
    const [datasets, activity] = await Promise.all([
      listDatasets(ownerId),
      recentActivity(ownerId, 8),
    ]);
    return { datasets, activity };
  }, [ownerId]);

  if (!ownerId) {
    return <p className="text-sm text-ink-muted">Profil tanlanmagan.</p>;
  }
  if (data === undefined) {
    return <p className="text-sm text-ink-muted">Yuklanmoqda…</p>;
  }

  const datasets = data?.datasets ?? [];
  const kutilayotgan = pendingCount(datasets);
  const { subjects } = datasetsToSubjects(datasets);
  const tahlil = subjects.length ? analyzeResearch(subjects) : null;
  const royxat = datasets.map(overview);
  const demoBor = royxat.some((o) => o.demo);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          O&apos;qituvchi kabineti
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          {profile?.fullName}
          {datasets.length > 0 && ` · ${datasets.length} talaba ma'lumoti qabul qilingan`}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="flex items-center gap-2 text-sm text-ink-muted">
              <Users className="size-4" aria-hidden="true" />
              Talabalar
            </p>
            <p className="mt-1 font-display text-3xl font-bold tabular-nums text-ink">
              {datasets.length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="flex items-center gap-2 text-sm text-ink-muted">
              <ClipboardList className="size-4" aria-hidden="true" />
              Baho kutayotgan ishlar
            </p>
            <p className="mt-1 font-display text-3xl font-bold tabular-nums text-ink">
              {kutilayotgan}
            </p>
            {kutilayotgan > 0 && (
              <Link
                href="/oqituvchi/topshiriqlar"
                className="mt-1.5 inline-block text-sm text-primary hover:underline"
              >
                Baholashga o&apos;tish
              </Link>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="flex items-center gap-2 text-sm text-ink-muted">
              <BarChart3 className="size-4" aria-hidden="true" />
              Tahlilga tayyor
            </p>
            <p className="mt-1 font-display text-3xl font-bold tabular-nums text-ink">
              {subjects.length}
            </p>
            {tahlil && Number.isFinite(tahlil.overall.ttest.p) && (
              <p className="mt-1.5 text-sm text-ink-muted">
                Guruhlararo farq: {formatP(tahlil.overall.ttest.p)}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <ImportPanel ownerId={ownerId} />

      {royxat.length > 0 && (
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Qabul qilingan ma&apos;lumot</CardTitle>
            <Link
              href="/oqituvchi/talabalar"
              className="text-sm text-primary hover:underline"
            >
              Barchasi
            </Link>
          </CardHeader>
          <CardContent>
            {demoBor && (
              <p className="mb-3 rounded-xl bg-warning-soft px-3 py-2 text-xs text-warning">
                Ro&apos;yxatda namunaviy (o&apos;ylab topilgan) talabalar bor — ular
                «namuna» belgisi bilan ko&apos;rsatilgan.
              </p>
            )}
            <ul className="flex flex-col divide-y divide-border-subtle">
              {royxat.slice(0, 8).map((o) => (
                <li key={o.studentId} className="flex items-center gap-3 py-2.5">
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="truncate text-sm font-medium text-ink">
                        {o.fullName}
                      </span>
                      {o.group && (
                        <span className="text-xs text-ink-muted">{o.group}</span>
                      )}
                      {o.experimentGroup && (
                        <Badge variant={o.experimentGroup === "tajriba" ? "primary" : "neutral"}>
                          {o.experimentGroup === "tajriba" ? "tajriba" : "nazorat"}
                        </Badge>
                      )}
                      {o.demo && <Badge variant="warning">namuna</Badge>}
                    </span>
                    <span className="mt-0.5 block text-xs text-ink-muted">
                      {o.completedLessons}/{o.totalLessons} dars
                      {o.averageScore !== null && ` · o'rtacha ${o.averageScore}%`}
                      {o.pendingCount > 0 && ` · ${o.pendingCount} ish baho kutmoqda`}
                      {` · ${formatDate(o.importedAt)}`}
                    </span>
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label={`${o.fullName} ma'lumotini o'chirish`}
                    onClick={() => void deleteDataset(ownerId, o.studentId)}
                  >
                    <Trash2 aria-hidden="true" />
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {tahlil && (
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Tajriba-sinov qisqa xulosasi</CardTitle>
            <Link href="/oqituvchi/tadqiqot" className="text-sm text-primary hover:underline">
              To&apos;liq tahlil
            </Link>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            <p className="text-ink-muted">
              Tajriba guruhi{" "}
              <strong className="font-medium text-ink">
                {formatNumber(tahlil.overall.tajriba.final.mean, 1)}%
              </strong>
              , nazorat guruhi{" "}
              <strong className="font-medium text-ink">
                {formatNumber(tahlil.overall.nazorat.final.mean, 1)}%
              </strong>
              {Number.isFinite(tahlil.overall.effect.d) && (
                <> · Koen d = {formatNumber(tahlil.overall.effect.d)} ({tahlil.overall.effect.magnitude})</>
              )}
            </p>
            {tahlil.warnings.slice(0, 2).map((w) => (
              <p key={w} className="text-xs text-warning">{w}</p>
            ))}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Kabinet bo&apos;limlari</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          {[
            { href: "/oqituvchi/talabalar", icon: Users, nom: "Talabalar", tavsif: "Har bir talabaning natijasi va o'sish dinamikasi" },
            { href: "/oqituvchi/topshiriqlar", icon: ClipboardList, nom: "Baholash", tavsif: "Rubrika bo'yicha baho qo'yish va baholarni qaytarish" },
            { href: "/oqituvchi/tadqiqot", icon: BarChart3, nom: "Tadqiqot", tavsif: "t-mezon, χ², Koen d va eksport" },
            { href: "/oqituvchi/mentorlik", icon: GraduationCap, nom: "Mentorlik", tavsif: "Pedagogik amaliyot bosqichlari va kuzatuv varaqasi" },
          ].map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="flex items-start gap-3 rounded-xl border border-border-subtle p-4 transition-colors hover:bg-surface-muted"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                <b.icon className="size-4.5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-medium text-ink">{b.nom}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">
                  {b.tavsif}
                </span>
              </span>
            </Link>
          ))}
        </CardContent>
      </Card>

      {data?.activity && data.activity.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>So&apos;nggi harakatlar</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2 text-sm">
              {data.activity.map((a) => (
                <li key={a.id} className="flex items-baseline justify-between gap-3">
                  <span className="text-ink">{a.message}</span>
                  <span className="shrink-0 text-xs text-ink-muted">
                    {formatDate(a.createdAt)}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
