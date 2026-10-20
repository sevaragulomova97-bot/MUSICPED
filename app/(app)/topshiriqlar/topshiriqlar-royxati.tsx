"use client";

import * as React from "react";
import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { ClipboardList, FileText, Music4, PencilRuler } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TOPSHIRIQLAR, tasksByType } from "@/content/tasks";
import { MODUL_BY_ID } from "@/content/modules";
import { listSubmissions } from "@/lib/db/repo";
import {
  BLOOM_NOMI,
  type TaskType,
  TOPSHIRIQ_TURI_NOMI,
} from "@/lib/domain/types";
import { cn } from "@/lib/utils";

const TABLAR: Array<{ id: TaskType | "barcha"; label: string }> = [
  { id: "barcha", label: "Barcha" },
  { id: "mashq", label: "Mashq" },
  { id: "test", label: "Test" },
  { id: "loyiha", label: "Loyiha" },
  { id: "ijro", label: "Ijro" },
];

const TUR_IKONKASI: Record<TaskType, typeof ClipboardList> = {
  mashq: PencilRuler,
  test: ClipboardList,
  loyiha: FileText,
  ijro: Music4,
};

const TUR_RANGI: Record<TaskType, string> = {
  mashq: "var(--mp-dir-ijro)",
  test: "var(--mp-dir-nazariya)",
  loyiha: "var(--mp-dir-metodika)",
  ijro: "var(--mp-dir-kasbiy)",
};

export function TopshiriqlarRoyxati() {
  const { profile } = useSession();
  const userId = profile?.id;
  const [tab, setTab] = React.useState<TaskType | "barcha">("barcha");

  const submissions = useLiveQuery(async () => {
    if (!userId) return [];
    return listSubmissions(userId);
  }, [userId]);

  // Bitta topshiriq bo'yicha eng yaxshi natija
  const best = new Map<string, number>();
  for (const s of submissions ?? []) {
    if (s.score === undefined) continue;
    best.set(s.taskId, Math.max(best.get(s.taskId) ?? 0, s.score));
  }
  const topshirilgan = new Set((submissions ?? []).map((s) => s.taskId));

  const royxat = tasksByType(tab);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          Topshiriqlar va testlar
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          {TOPSHIRIQLAR.length} ta topshiriq. Testlar avtomatik, loyiha va ijro
          esa rubrika bo&apos;yicha baholanadi.
        </p>
      </div>

      {/* Tablar */}
      <div role="tablist" aria-label="Topshiriq turlari" className="flex flex-wrap gap-2">
        {TABLAR.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
              tab === t.id
                ? "bg-primary-solid text-white"
                : "bg-surface text-ink-muted hover:bg-surface-muted hover:text-ink",
            )}
          >
            {t.label}
            <span className="ml-1.5 tabular-nums">{tasksByType(t.id).length}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {royxat.map((task) => {
          const Icon = TUR_IKONKASI[task.type];
          const rang = TUR_RANGI[task.type];
          const ball = best.get(task.id);
          const bajarilgan = topshirilgan.has(task.id);

          return (
            <Link key={task.id} href={`/topshiriqlar/${task.slug}`} className="rounded-2xl">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="flex h-full flex-col gap-3 p-5">
                  <div className="flex items-start gap-3">
                    <span
                      className="grid size-10 shrink-0 place-items-center rounded-xl"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${rang} 14%, transparent)`,
                        color: rang,
                      }}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-sm font-semibold leading-snug text-ink">
                        {task.title}
                      </h2>
                      <p className="mt-0.5 text-xs text-ink-muted">
                        {MODUL_BY_ID.get(task.moduleId)?.title} · {task.duration}
                      </p>
                    </div>
                    {ball !== undefined && (
                      <Badge variant={ball >= 70 ? "success" : "warning"}>{ball}%</Badge>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-ink-muted">
                    {task.description}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
                    <Badge variant="neutral">{TOPSHIRIQ_TURI_NOMI[task.type]}</Badge>
                    <Badge variant="neutral">{BLOOM_NOMI[task.bloom]}</Badge>
                    {task.rubric && <Badge variant="secondary">Rubrika</Badge>}
                    <span className="ml-auto text-sm font-medium text-primary">
                      {bajarilgan ? "Ko'rish" : "Boshlash"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
