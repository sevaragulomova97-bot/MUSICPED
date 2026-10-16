import type { Course } from "@/content/lesson-types";
import { NAZARIYA } from "@/content/courses/nazariya";
import { IJRO } from "@/content/courses/ijro";
import { METODIKA } from "@/content/courses/metodika";
import { TEXNOLOGIYA } from "@/content/courses/texnologiya";
import { AMALIYOT } from "@/content/courses/amaliyot";

/**
 * O'quv kurslari.
 *
 * Kurslar alohida fayllarga ajratilgan: har bir modul o'z faylida turadi,
 * shuning uchun kontent o'sganda ham bitta fayl ulkan bo'lib ketmaydi va
 * ikki modulni parallel tahrirlash mumkin.
 *
 * Har bir dars modulning aniq o'quv natijasiga bog'langan (`outcomeId`) —
 * J. Biggsning konstruktiv moslashuvi talabi. Bog'lanish uzilsa,
 * `lib/content-audit.ts` buni topadi va test yiqiladi.
 */

export const KURSLAR: Course[] = [NAZARIYA, IJRO, METODIKA, TEXNOLOGIYA, AMALIYOT];

export const KURS_BY_SLUG = new Map(KURSLAR.map((k) => [k.slug, k]));

export const BARCHA_DARSLAR = KURSLAR.flatMap((kurs) =>
  kurs.lessons.map((lesson) => ({ ...lesson, courseSlug: kurs.slug, courseTitle: kurs.title })),
);

export function findLesson(courseSlug: string, lessonSlug: string) {
  return KURS_BY_SLUG.get(courseSlug)?.lessons.find((l) => l.slug === lessonSlug);
}

/** Kursdagi darsning tartibi — «oldingi / keyingi» tugmalari uchun. */
export function lessonNeighbours(courseSlug: string, lessonSlug: string) {
  const lessons = KURS_BY_SLUG.get(courseSlug)?.lessons ?? [];
  const i = lessons.findIndex((l) => l.slug === lessonSlug);
  return {
    prev: i > 0 ? lessons[i - 1] : undefined,
    next: i >= 0 && i < lessons.length - 1 ? lessons[i + 1] : undefined,
    index: i,
    total: lessons.length,
  };
}
