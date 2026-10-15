import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findLesson, KURSLAR } from "@/content/courses";
import { DarsSahifa } from "./dars-sahifa";

type Params = { kurs: string; dars: string };

/**
 * Statik eksportda har bir dars alohida HTML fayl bo'lib chiqadi, shuning
 * uchun barcha yo'llar oldindan sanab beriladi.
 */
export function generateStaticParams(): Params[] {
  return KURSLAR.flatMap((kurs) =>
    kurs.lessons.map((dars) => ({ kurs: kurs.slug, dars: dars.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { kurs, dars } = await params;
  return { title: findLesson(kurs, dars)?.title ?? "Dars" };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { kurs, dars } = await params;
  if (!findLesson(kurs, dars)) notFound();
  return <DarsSahifa courseSlug={kurs} lessonSlug={dars} />;
}
