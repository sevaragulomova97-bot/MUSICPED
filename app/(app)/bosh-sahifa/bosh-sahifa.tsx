"use client";

import Link from "next/link";
import { BookOpen, Clock3, GraduationCap, Music4, Target } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress, ProgressRing } from "@/components/ui/progress";

/**
 * B1 bosqichida ko'rsatkichlar statik — maket bo'yicha joylashuvni qotirish uchun.
 * B2 da bular IndexedDB'dagi haqiqiy progressdan hisoblanadi, havolalar esa
 * har bir kursning o'z sahifasiga (`/kurslar/<slug>`) yo'naltiriladi.
 */
const YONALISHLAR = [
  {
    nom: "Musiqa nazariyasi",
    href: "/kurslar",
    icon: BookOpen,
    foiz: 90,
    rang: "var(--mp-dir-nazariya)",
  },
  {
    nom: "Cholg'u ijrochiligi",
    href: "/asboblar",
    icon: Music4,
    foiz: 70,
    rang: "var(--mp-dir-ijro)",
  },
  {
    nom: "Pedagogik metodika",
    href: "/kurslar",
    icon: GraduationCap,
    foiz: 60,
    rang: "var(--mp-dir-metodika)",
  },
  {
    nom: "Kasbiy tayyorgarlik",
    href: "/kurslar",
    icon: Target,
    foiz: 75,
    rang: "var(--mp-dir-kasbiy)",
  },
] as const;

const BUGUNGI_VAZIFALAR = [
  { vaqt: "10:00", nom: "Nota savodiga doir test", modul: "Musiqa nazariyasi" },
  { vaqt: "14:00", nom: "Dutor asbobida mashq", modul: "Cholg'u ijrochiligi" },
  { vaqt: "17:00", nom: "Dars ishlanmasi (loyiha)", modul: "Pedagogik metodika" },
];

const UMUMIY_FOIZ = Math.round(
  YONALISHLAR.reduce((sum, y) => sum + y.foiz, 0) / YONALISHLAR.length,
);

export function BoshSahifa() {
  const { profile } = useSession();
  const ism = profile?.fullName.split(" ")[0] ?? "talaba";

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      {/* Salomlashuv */}
      <Card className="overflow-hidden">
        <CardContent className="flex flex-col gap-1 p-6 lg:p-7">
          <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
            Assalomu alaykum, {ism}!
          </h1>
          <p className="text-sm text-ink-muted">
            Bugun yangi bilimlar sari bir qadam oldinda!
          </p>
        </CardContent>
      </Card>

      {/* 4 yo'nalish kartasi */}
      <section aria-labelledby="yonalishlar-sarlavha">
        <h2 id="yonalishlar-sarlavha" className="sr-only">
          O&apos;quv yo&apos;nalishlari
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {YONALISHLAR.map((y) => {
            const Icon = y.icon;
            return (
              <Link key={y.nom} href={y.href} className="rounded-2xl">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="flex h-full flex-col gap-4 p-5">
                    <span
                      className="grid size-11 place-items-center rounded-xl"
                      style={{ backgroundColor: `color-mix(in srgb, ${y.rang} 14%, transparent)`, color: y.rang }}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <p className="font-display text-sm font-semibold leading-snug text-ink">
                      {y.nom}
                    </p>
                    <div className="mt-auto">
                      <Progress value={y.foiz} color={y.rang} label="Progress" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {/* O'qish davomiyligi */}
        <Card>
          <CardHeader>
            <CardTitle>O&apos;qish davomiyligi</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
            <ProgressRing value={UMUMIY_FOIZ} caption="Umumiy" />
            <div className="flex w-full flex-col gap-3.5">
              {YONALISHLAR.map((y) => (
                <Progress
                  key={y.nom}
                  value={y.foiz}
                  label={y.nom}
                  color={y.rang}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bugungi vazifalar */}
        <Card>
          <CardHeader>
            <CardTitle>Bugungi vazifalar</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3">
              {BUGUNGI_VAZIFALAR.map((v) => (
                <li
                  key={v.nom}
                  className="flex items-center gap-3 rounded-xl bg-surface-muted p-3.5"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface text-primary">
                    <Clock3 className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-ink">
                      {v.nom}
                    </span>
                    <span className="block truncate text-xs text-ink-muted">
                      {v.modul}
                    </span>
                  </span>
                  <Badge variant="primary">{v.vaqt}</Badge>
                </li>
              ))}
            </ul>

            <p className="mt-5 border-t border-border-subtle pt-4 font-display text-sm italic text-ink-muted">
              &laquo;Musiqa — bu hayotning eng go&apos;zal tili.&raquo;
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
