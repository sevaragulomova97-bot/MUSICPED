"use client";

import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { KURSLAR } from "@/content/courses";
import { MODUL_BY_ID } from "@/content/modules";
import { allProgress } from "@/lib/db/repo";

/**
 * Kurslar ro'yxati — to'rtburchak oynachalar ko'rinishida.
 *
 * Ilgari bu sahifa beshala kursning **barcha** darslarini bir joyda
 * chiqarardi. Dastur mavzulari qo'shilgach, u 110 dan ortiq bandga
 * aylandi va sahifa vazifasini yo'qotdi: ro'yxatdan kurs tanlash
 * uchun uzoq aylantirish kerak bo'lardi.
 *
 * Endi har bir kurs bitta oynacha: nomi, tavsifi, hajmi va o'zlashtirish
 * foizi. Oynachaga bosilsa, shu kursning mavzulari sahifasiga o'tiladi —
 * u yerda darslar ma'ruza, amaliy va qo'shimcha guruhlariga bo'lingan.
 *
 * Oynachalar `mp-float` bilan sekin qalqib turadi. Harakat har bir
 * oynada boshqa vaqtda boshlanadi, shuning uchun ular bir-biriga
 * qo'shilib ketmaydi. Kechikish va davr **indeks bo'yicha** hisoblanadi,
 * tasodifiy emas: aks holda serverdagi va brauzerdagi qiymat farq qilib,
 * gidratsiya xatosi chiqardi.
 */
export function KurslarRoyxati() {
  const { profile } = useSession();
  const userId = profile?.id;

  const progress = useLiveQuery(async () => {
    if (!userId) return [];
    return allProgress(userId);
  }, [userId]);

  const byLesson = new Map((progress ?? []).map((p) => [p.lessonId, p.percent]));
  const jamiDars = KURSLAR.reduce((s, k) => s + k.lessons.length, 0);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          O&apos;quv kurslari
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          {KURSLAR.length} modul, {jamiDars} ta dars. Kursni tanlang — uning
          mavzulari ma&apos;ruza, amaliy va qo&apos;shimcha bo&apos;limlarga
          ajratilgan.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {KURSLAR.map((kurs, i) => {
          const modul = MODUL_BY_ID.get(kurs.moduleId);
          const tugagan = kurs.lessons.filter(
            (l) => (byLesson.get(l.id) ?? 0) >= 100,
          ).length;
          const foiz = Math.round((tugagan / kurs.lessons.length) * 100);
          const soat = Math.round(
            kurs.lessons.reduce((s, l) => s + l.durationMin, 0) / 60,
          );

          return (
            <li
              key={kurs.slug}
              className="mp-float"
              style={{
                animationDelay: `${(i % 5) * 0.9}s`,
                animationDuration: `${6.5 + (i % 3) * 0.8}s`,
              }}
            >
              {/*
                Butun oynacha bosiladi, lekin havola — faqat kurs nomi.

                Oldin butun oynacha `<Link>` ichida edi va havolaning
                nomi oynacha ichidagi barcha matndan yig'ilardi. `aria-label`
                bilan nomni qisqartirish ham yaramadi: u ko'rinadigan
                matnni qamramagani uchun WCAG 2.5.3 («Label in Name»)
                buzilardi va qulaylik testi buni haqli ravishda tutdi.

                Yechim — «cho'zilgan havola» naqshi: havola matni faqat
                kurs nomi, uning `::after` elementi esa butun kartani
                qoplaydi. Shunda bosish sohasi butun oynacha bo'ladi,
                ekran o'quvchi esa bitta aniq nom eshitadi.
              */}
              <div className="group relative h-full">
                <Card className="flex h-full flex-col transition-shadow duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-focus-within:border-primary/40">
                  <CardContent className="flex flex-1 flex-col gap-3 p-5 pt-5">
                    <div className="flex items-start justify-between gap-2">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary-ink">
                        <BookOpen className="size-5" aria-hidden="true" />
                      </span>
                      {modul && (
                        <Badge variant="primary">{modul.credits} ECTS</Badge>
                      )}
                    </div>

                    <h2 className="font-display text-base font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                      <Link
                        href={`/kurslar/${kurs.slug}`}
                        className="rounded after:absolute after:inset-0 after:content-['']"
                      >
                        {kurs.title}
                      </Link>
                    </h2>

                    <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {kurs.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                      <Badge variant="neutral">{kurs.lessons.length} dars</Badge>
                      <span className="flex items-center gap-1">
                        <Clock3 className="size-3.5" aria-hidden="true" />≈ {soat}{" "}
                        soat
                      </span>
                    </div>

                    <Progress
                      value={foiz}
                      label={`${tugagan} / ${kurs.lessons.length} dars tugallandi`}
                    />

                    <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                      Mavzularni ko&apos;rish
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </CardContent>
                </Card>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
