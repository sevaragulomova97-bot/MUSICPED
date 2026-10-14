"use client";

import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Music4,
  Stethoscope,
  Target,
} from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress, ProgressRing } from "@/components/ui/progress";
import { latestDiagnostic, latestLearningPath } from "@/lib/db/repo";
import {
  ASOSIY_YONALISH_NOMI,
  ASOSIY_YONALISH_RANGI,
  ASOSIY_YONALISHLAR,
  groupScores,
  type MainDirection,
  YONALISH_NOMI,
} from "@/lib/domain/types";

const YONALISH_IKONKASI: Record<MainDirection, typeof BookOpen> = {
  nazariya: BookOpen,
  ijro: Music4,
  metodika: GraduationCap,
  kasbiy: Target,
};

const YONALISH_HAVOLASI: Record<MainDirection, string> = {
  nazariya: "/kurslar",
  ijro: "/asboblar",
  metodika: "/kurslar",
  kasbiy: "/kurslar",
};

const KUNLIK_IQTIBOS = "Musiqa — bu hayotning eng go'zal tili.";

export function BoshSahifa() {
  const { profile } = useSession();
  const userId = profile?.id;
  const ism = profile?.fullName.split(" ")[0] ?? "talaba";

  const data = useLiveQuery(async () => {
    if (!userId) return null;
    const [diagnostic, path] = await Promise.all([
      latestDiagnostic(userId),
      latestLearningPath(userId),
    ]);
    return { diagnostic, path };
  }, [userId]);

  const yuklanmoqda = data === undefined;
  const diagnostic = data?.diagnostic;
  const path = data?.path;
  const guruh = diagnostic ? groupScores(diagnostic.scores) : null;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      {/* Salomlashuv */}
      <Card>
        <CardContent className="flex flex-col gap-1 p-6 lg:p-7">
          <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
            Assalomu alaykum, {ism}!
          </h1>
          <p className="text-sm text-ink-muted">
            Bugun yangi bilimlar sari bir qadam oldinda!
          </p>
        </CardContent>
      </Card>

      {yuklanmoqda ? (
        <p className="text-sm text-ink-muted" aria-busy="true">
          Yuklanmoqda…
        </p>
      ) : !diagnostic || !guruh ? (
        /* Bo'sh holat — hali diagnostikadan o'tmagan */
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
              <Stethoscope className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-medium text-ink">
                Boshlang&apos;ich diagnostikadan o&apos;ting
              </p>
              <p className="mt-1.5 max-w-md text-sm text-ink-muted">
                32 ta savol, 8 yo&apos;nalish bo&apos;yicha. Natijangiz asosida
                individual o&apos;quv rejangiz avtomatik tuziladi va bu sahifada
                real progress ko&apos;rsatiladi.
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
      ) : (
        <>
          {/* 4 yo'nalish kartasi */}
          <section aria-labelledby="yonalishlar-sarlavha">
            <h2 id="yonalishlar-sarlavha" className="sr-only">
              O&apos;quv yo&apos;nalishlari
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {ASOSIY_YONALISHLAR.map((d) => {
                const Icon = YONALISH_IKONKASI[d];
                const rang = ASOSIY_YONALISH_RANGI[d];
                return (
                  <Link key={d} href={YONALISH_HAVOLASI[d]} className="rounded-2xl">
                    <Card className="h-full transition-shadow hover:shadow-lg">
                      <CardContent className="flex h-full flex-col gap-4 p-5">
                        <span
                          className="grid size-11 place-items-center rounded-xl"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${rang} 14%, transparent)`,
                            color: rang,
                          }}
                        >
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <p className="font-display text-sm font-semibold leading-snug text-ink">
                          {ASOSIY_YONALISH_NOMI[d]}
                        </p>
                        <div className="mt-auto">
                          <Progress value={guruh[d]} color={rang} label="Natija" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* O'qish davomiyligi */}
            <Card>
              <CardHeader>
                <CardTitle>O&apos;qish davomiyligi</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6 sm:flex-row">
                <ProgressRing value={diagnostic.overall} caption="Umumiy" />
                <div className="flex w-full flex-col gap-3.5">
                  {ASOSIY_YONALISHLAR.map((d) => (
                    <Progress
                      key={d}
                      value={guruh[d]}
                      label={ASOSIY_YONALISH_NOMI[d]}
                      color={ASOSIY_YONALISH_RANGI[d]}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bugungi vazifalar — individual rejadan */}
            <Card>
              <CardHeader>
                <CardTitle>Bugungi vazifalar</CardTitle>
              </CardHeader>
              <CardContent>
                {path && path.items.length > 0 ? (
                  <ul className="flex flex-col gap-3">
                    {path.items.slice(0, 3).map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center gap-3 rounded-xl bg-surface-muted p-3.5"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface text-primary">
                          <Clock3 className="size-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-ink">
                            {YONALISH_NOMI[item.area]}
                          </span>
                          <span className="block truncate text-xs text-ink-muted">
                            {item.reason}
                          </span>
                        </span>
                        <Badge variant="primary">{item.priority}-o&apos;rin</Badge>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-ink-muted">
                    Hozircha vazifa yo&apos;q.
                  </p>
                )}

                <p className="mt-5 border-t border-border-subtle pt-4 font-display text-sm italic text-ink-muted">
                  &laquo;{KUNLIK_IQTIBOS}&raquo;
                </p>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
