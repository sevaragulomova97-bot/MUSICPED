"use client";

import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { BookOpen, CheckCircle2, Clock3 } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { KURSLAR } from "@/content/courses";
import { MODUL_BY_ID } from "@/content/modules";
import { allProgress } from "@/lib/db/repo";
import { BLOOM_NOMI } from "@/lib/domain/types";

export function KurslarRoyxati() {
  const { profile } = useSession();
  const userId = profile?.id;

  const progress = useLiveQuery(async () => {
    if (!userId) return [];
    return allProgress(userId);
  }, [userId]);

  const byLesson = new Map((progress ?? []).map((p) => [p.lessonId, p.percent]));

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          O&apos;quv kurslari
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          5 modul, {KURSLAR.reduce((s, k) => s + k.lessons.length, 0)} ta dars.
          Har bir dars modulning aniq o&apos;quv natijasiga bog&apos;langan.
        </p>
      </div>

      {KURSLAR.map((kurs) => {
        const modul = MODUL_BY_ID.get(kurs.moduleId);
        const tugagan = kurs.lessons.filter(
          (l) => (byLesson.get(l.id) ?? 0) >= 100,
        ).length;
        const foiz = Math.round((tugagan / kurs.lessons.length) * 100);

        return (
          <Card key={kurs.slug}>
            <CardContent className="p-5 lg:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="font-display text-lg font-semibold text-ink">
                    <Link
                      href={`/kurslar/${kurs.slug}`}
                      className="rounded transition-colors hover:text-primary"
                    >
                      {kurs.title}
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm text-ink-muted">{kurs.description}</p>
                </div>
                {modul && (
                  <Badge variant="primary">{modul.credits} ECTS kredit</Badge>
                )}
              </div>

              <div className="mt-4">
                <Progress
                  value={foiz}
                  label={`${tugagan} / ${kurs.lessons.length} dars tugallandi`}
                />
              </div>

              <ul className="mt-5 flex flex-col gap-2">
                {kurs.lessons.map((dars) => {
                  const pct = byLesson.get(dars.id) ?? 0;
                  const done = pct >= 100;
                  return (
                    <li key={dars.id}>
                      <Link
                        href={`/kurslar/${kurs.slug}/${dars.slug}`}
                        className="flex items-center gap-3 rounded-xl border border-border-subtle p-3.5 transition-colors hover:border-primary/40 hover:bg-primary-soft/40"
                      >
                        <span
                          className={`grid size-9 shrink-0 place-items-center rounded-lg ${
                            done
                              ? "bg-success-soft text-success-ink"
                              : "bg-surface-muted text-ink-muted"
                          }`}
                        >
                          {done ? (
                            <CheckCircle2 className="size-4" aria-hidden="true" />
                          ) : (
                            <BookOpen className="size-4" aria-hidden="true" />
                          )}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-ink">
                            {dars.title}
                          </span>
                          <span className="block truncate text-xs text-ink-muted">
                            {dars.summary}
                          </span>
                        </span>

                        <span className="hidden shrink-0 items-center gap-2 sm:flex">
                          <Badge variant="neutral">{BLOOM_NOMI[dars.bloom]}</Badge>
                          <span className="flex items-center gap-1 text-xs text-ink-muted">
                            <Clock3 className="size-3.5" aria-hidden="true" />
                            {dars.durationMin} daq
                          </span>
                        </span>

                        {pct > 0 && pct < 100 && (
                          <Badge variant="warning">{pct}%</Badge>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
