"use client";

import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { BookOpen, CheckCircle2, ChevronRight, ClipboardList, Clock } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { KURS_BY_SLUG } from "@/content/courses";
import { MODULLAR } from "@/content/modules";
import { TOPSHIRIQLAR } from "@/content/tasks";
import { courseProgress } from "@/lib/db/repo";
import { BLOOM_NOMI } from "@/lib/domain/types";

/**
 * Bitta kursning sahifasi: o'quv natijalari, darslar va topshiriqlar.
 *
 * `/kurslar/` ro'yxati beshala kursni birdan ko'rsatadi va u yerda 52 ta
 * dars bo'ladi — kurs ichida ishlayotgan talaba uchun bu ortiqcha.
 * Bu sahifa esa bitta kursni to'liq ko'rsatadi: qaysi o'quv natijalari
 * ko'zlangan, qaysi darslar qolgan va qaysi topshiriqlar baholaydi.
 */
export function KursSahifa({ courseSlug }: { courseSlug: string }) {
  const { profile } = useSession();
  const userId = profile?.id;
  const kurs = KURS_BY_SLUG.get(courseSlug);
  const modul = MODULLAR.find((m) => m.id === kurs?.moduleId);

  const progress = useLiveQuery(
    async () => (userId ? courseProgress(userId, courseSlug) : []),
    [userId, courseSlug],
  );

  if (!kurs) return null;

  const byLesson = new Map((progress ?? []).map((p) => [p.lessonId, p.percent]));
  const tugagan = kurs.lessons.filter((l) => (byLesson.get(l.id) ?? 0) >= 100).length;
  const foiz = Math.round((tugagan / kurs.lessons.length) * 100);
  const topshiriqlar = TOPSHIRIQLAR.filter((t) => t.moduleId === kurs.moduleId);

  /*
    Darslar bitta tekis ro'yxatda berilsa, metodika kursida 71 band
    chiqadi va talaba qayerda turganini yo'qotadi. Shuning uchun
    ro'yxat fan dasturidagi mashg'ulot turi bo'yicha bo'linadi.
    Dasturga bog'lanmagan kurslarda (nazariya, ijro va boshqalar)
    bo'lish ma'nosiz — ular bitta «Darslar» guruhida qoladi.
  */
  const maruzalar = kurs.lessons.filter((l) => l.dasturTuri === "maruza");
  const amaliylar = kurs.lessons.filter((l) => l.dasturTuri === "amaliy");
  const qoshimcha = kurs.lessons.filter((l) => !l.dasturKodi);
  const guruhlar =
    maruzalar.length + amaliylar.length === 0
      ? [{ nom: "Darslar", izoh: null as string | null, darslar: kurs.lessons }]
      : [
          {
            nom: "Ma'ruza mashg'ulotlari",
            izoh: `Fan dasturidagi M1-M${maruzalar.length} — nazariy asos`,
            darslar: maruzalar,
          },
          {
            nom: "Amaliy mashg'ulotlar",
            izoh: `Fan dasturidagi A1-A${amaliylar.length} — maktab repertuari`,
            darslar: amaliylar,
          },
          {
            nom: "Qo'shimcha mavzular",
            izoh: "Dasturdan tashqari, platformada yozilgan darslar",
            darslar: qoshimcha,
          },
        ].filter((g) => g.darslar.length > 0);
  const soat = Math.round(
    kurs.lessons.reduce((s, l) => s + l.durationMin, 0) / 60,
  );

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <nav aria-label="Yo'l" className="flex items-center gap-1.5 text-sm text-ink-muted">
        <Link href="/kurslar" className="rounded hover:text-ink">
          O&apos;quv kurslari
        </Link>
        <ChevronRight className="size-4" aria-hidden="true" />
        <span className="text-ink">{kurs.title}</span>
      </nav>

      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          {kurs.title}
        </h1>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
          {kurs.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {modul && <Badge variant="primary">{modul.credits} ECTS kredit</Badge>}
          <Badge variant="neutral">{kurs.lessons.length} dars</Badge>
          <Badge variant="neutral">{topshiriqlar.length} topshiriq</Badge>
          <Badge variant="neutral">≈ {soat} soat</Badge>
        </div>
      </div>

      <Card>
        <CardContent className="p-5">
          <Progress
            value={foiz}
            label={`${tugagan} / ${kurs.lessons.length} dars tugallandi`}
          />
        </CardContent>
      </Card>

      {modul && (
        <Card>
          <CardHeader>
            <CardTitle>O&apos;quv natijalari</CardTitle>
          </CardHeader>
          <CardContent>
            {/*
              Natijalar ro'yxati ataylab shu yerda: talaba kursni
              boshlashdan oldin undan nima kutilishini bilishi kerak —
              J. Biggsning konstruktiv moslashuvi shuni talab qiladi.
            */}
            <ul className="flex flex-col gap-2.5">
              {modul.outcomes.map((o) => (
                <li key={o.id} className="flex items-start gap-2.5">
                  <span className="mt-0.5">
                    <Badge variant="neutral">{BLOOM_NOMI[o.bloom]}</Badge>
                  </span>
                  <span className="text-sm leading-relaxed text-ink-muted">
                    {o.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {guruhlar.map((guruh) => (
        <Card key={guruh.nom}>
          <CardHeader>
            <CardTitle>
              {guruh.nom}{" "}
              <span className="text-sm font-normal text-ink-muted">
                ({guruh.darslar.length})
              </span>
            </CardTitle>
            {guruh.izoh && (
              <p className="text-sm text-ink-muted">{guruh.izoh}</p>
            )}
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2">
              {guruh.darslar.map((dars, i) => {
                const pct = byLesson.get(dars.id) ?? 0;
                const done = pct >= 100;
                return (
                  <li key={dars.id}>
                    <Link
                      href={`/kurslar/${kurs.slug}/${dars.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-border-subtle p-3.5 transition-colors hover:border-primary/40 hover:bg-primary-soft/40"
                    >
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-lg text-sm font-semibold ${
                          done
                            ? "bg-success-soft text-success-ink"
                            : "bg-surface-muted text-ink-muted"
                        }`}
                      >
                        {done ? (
                          <CheckCircle2 className="size-4" aria-hidden="true" />
                        ) : (
                          i + 1
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
                      <span className="hidden shrink-0 items-center gap-1.5 text-xs text-ink-muted sm:flex">
                        <Clock className="size-3.5" aria-hidden="true" />
                        {dars.durationMin} daq
                      </span>
                      {!done && pct > 0 && <Badge variant="warning">{pct}%</Badge>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      ))}

      {topshiriqlar.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>
              Topshiriqlar{" "}
              <span className="text-sm font-normal text-ink-muted">
                ({topshiriqlar.length})
              </span>
            </CardTitle>
            <p className="text-sm text-ink-muted">
              Shu kursning o&apos;quv natijalarini baholaydigan ishlar
            </p>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2">
              {topshiriqlar.map((t) => (
                <li key={t.id}>
                  <Link
                    href={`/topshiriqlar/${t.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-border-subtle p-3.5 transition-colors hover:border-primary/40 hover:bg-primary-soft/40"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface-muted text-ink-muted">
                      <ClipboardList className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-ink">
                        {t.title}
                      </span>
                      <span className="block truncate text-xs text-ink-muted">
                        {t.description}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <p className="flex items-center gap-2 text-xs text-ink-muted">
        <BookOpen className="size-4" aria-hidden="true" />
        Har bir dars modulning aniq o&apos;quv natijasiga bog&apos;langan.
      </p>
    </div>
  );
}
