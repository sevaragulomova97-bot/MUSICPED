"use client";

import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import {
  BarChart3,
  ClipboardList,
  Lightbulb,
  Route,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress, ProgressRing } from "@/components/ui/progress";
import {
  ASOSIY_YONALISH_NOMI,
  ASOSIY_YONALISH_RANGI,
  ASOSIY_YONALISHLAR,
  BLOOM_NOMI,
  groupScores,
  PROFIL_NOMI,
  TOPSHIRIQ_TURI_NOMI,
  YONALISH_NOMI,
  ZPD_NOMI,
  ZPD_TAVSIFI,
} from "@/lib/domain/types";
import { latestDiagnostic, latestLearningPath } from "@/lib/db/repo";
import { formatDate } from "@/lib/utils";

const BOSQICHLAR = [
  { nom: "Diagnostika", icon: Stethoscope },
  { nom: "Individual reja", icon: Route },
  { nom: "Mashg'ulotlar", icon: ClipboardList },
  { nom: "Baholash", icon: BarChart3 },
];

const ZONA_VARIANT = {
  asosiy: "warning",
  zpd: "primary",
  mustaqil: "success",
} as const;

export function Yolnalish() {
  const { profile } = useSession();
  const userId = profile?.id;

  const data = useLiveQuery(async () => {
    if (!userId) return null;
    const [diagnostic, path] = await Promise.all([
      latestDiagnostic(userId),
      latestLearningPath(userId),
    ]);
    return { diagnostic, path };
  }, [userId]);

  // `undefined` — hali yuklanmoqda, `null` — foydalanuvchi yo'q
  if (data === undefined) {
    return <p className="text-sm text-ink-muted">Yuklanmoqda…</p>;
  }

  if (!data?.diagnostic || !data.path) {
    return (
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          Individual ta&apos;lim yo&apos;nalishi
        </h1>
        <Card className="mt-6">
          <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
              <Stethoscope className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-medium text-ink">Avval diagnostikadan o&apos;ting</p>
              <p className="mt-1.5 max-w-sm text-sm text-ink-muted">
                Individual reja boshlang&apos;ich diagnostika natijalari asosida
                avtomatik shakllantiriladi.
              </p>
            </div>
            <Link
              href="/diagnostika"
              className="inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Diagnostikani boshlash
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { diagnostic, path } = data;
  const guruh = groupScores(diagnostic.scores);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          Mening o&apos;quv yo&apos;lim
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          Diagnostika natijalari asosida sizning individual o&apos;quv rejangiz
          shakllantirildi · {formatDate(diagnostic.completedAt)}
        </p>
      </div>

      {/* 4 bosqichli stepper */}
      <Card>
        <CardContent className="p-5">
          <ol className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {BOSQICHLAR.map((b, i) => {
              const Icon = b.icon;
              // Reja tuzilgan — demak ikkinchi bosqichdamiz.
              const joriy = i === 1;
              const otgan = i < 1;
              return (
                <li key={b.nom} className="flex flex-1 items-center gap-3">
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-xl ${
                      joriy
                        ? "bg-primary text-white"
                        : otgan
                          ? "bg-success-soft text-success"
                          : "bg-surface-muted text-ink-muted"
                    }`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span
                    className={`text-sm ${joriy ? "font-semibold text-ink" : "text-ink-muted"}`}
                  >
                    {b.nom}
                  </span>
                  {i < BOSQICHLAR.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-border-subtle sm:block"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        {/* Natija xulosasi */}
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Diagnostika natijangiz</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-5">
              <ProgressRing value={diagnostic.overall} caption="Umumiy natija" />
              <div className="w-full flex-col gap-3.5">
                {ASOSIY_YONALISHLAR.map((d) => (
                  <Progress
                    key={d}
                    value={guruh[d]}
                    label={ASOSIY_YONALISH_NOMI[d]}
                    color={ASOSIY_YONALISH_RANGI[d]}
                    className="mb-3 last:mb-0"
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sizning profilingiz</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="rounded-xl bg-secondary-soft px-4 py-3 text-sm font-medium text-secondary">
                {PROFIL_NOMI[path.profileType]}
              </p>
              <div>
                <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-ink-muted">
                  Kuchli tomonlaringiz
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {path.strengths.map((a) => (
                    <Badge key={a} variant="success">
                      {YONALISH_NOMI[a]} · {diagnostic.scores[a]}%
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-ink-muted">
                  Rivojlantirish kerak
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {path.weaknesses.map((a) => (
                    <Badge key={a} variant="warning">
                      {YONALISH_NOMI[a]} · {diagnostic.scores[a]}%
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="size-4 text-warning" aria-hidden="true" />
                Shaxsiy tavsiyalar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2.5">
                {path.recommendations.map((r) => (
                  <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Tavsiya etilgan topshiriqlar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="size-4 text-secondary" aria-hidden="true" />
              Siz uchun tavsiya etilgan topshiriqlar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="flex flex-col gap-4">
              {path.items.map((item) => (
                <li
                  key={item.id}
                  className="rounded-xl border border-border-subtle p-4"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="grid size-7 shrink-0 place-items-center rounded-lg text-xs font-bold text-white"
                      style={{ backgroundColor: "var(--mp-primary)" }}
                      aria-label={`Ustuvorlik ${item.priority}`}
                    >
                      {item.priority}
                    </span>
                    <h3 className="font-display text-sm font-semibold text-ink">
                      {YONALISH_NOMI[item.area]}
                    </h3>
                    <Badge variant={ZONA_VARIANT[item.zone]}>
                      {ZPD_NOMI[item.zone]}
                    </Badge>
                    <Badge variant="neutral">{BLOOM_NOMI[item.bloom]}</Badge>
                    <Badge variant="secondary">
                      {TOPSHIRIQ_TURI_NOMI[item.taskType]}
                    </Badge>
                  </div>

                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                    {item.reason}
                  </p>

                  <details className="mt-3 group">
                    <summary className="cursor-pointer text-sm font-medium text-primary">
                      Bosqichli yordam va refleksiya
                    </summary>
                    <div className="mt-3 rounded-lg bg-surface-muted p-3.5">
                      <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                        {ZPD_TAVSIFI[item.zone]}
                      </p>
                      <ol className="mt-2.5 flex list-decimal flex-col gap-1.5 pl-4 text-sm text-ink">
                        {item.scaffolding.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ol>
                      <p className="mt-3 border-t border-border-subtle pt-3 text-sm italic text-ink-muted">
                        Refleksiya: {item.reflection}
                      </p>
                    </div>
                  </details>
                </li>
              ))}
            </ol>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-border-subtle pt-5">
              <Link
                href="/diagnostika"
                className="inline-flex h-10 items-center rounded-xl border border-border-subtle px-4 text-sm font-medium text-ink transition-colors hover:bg-surface-muted"
              >
                Qayta testdan o&apos;tish
              </Link>
              <Link
                href="/topshiriqlar"
                className="inline-flex h-10 items-center rounded-xl bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Topshiriqlarga o&apos;tish
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
