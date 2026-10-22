import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KURS_BY_SLUG, KURSLAR } from "@/content/courses";
import { KursSahifa } from "./kurs-sahifa";

type Params = { kurs: string };

/**
 * Kurs sahifasi.
 *
 * Ilgari bu yo'l umuman mavjud emas edi: `/kurslar/` ro'yxatdan
 * to'g'ridan-to'g'ri darsga o'tilardi, oraliq bosqich esa bo'sh qolgandi.
 * Natijada Next.js yo'naltiruvchisi shu segmentni oldindan yuklashga
 * urinib xato olardi, qo'lda kirilganda esa 404 chiqardi.
 */
export function generateStaticParams(): Params[] {
  return KURSLAR.map((kurs) => ({ kurs: kurs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { kurs } = await params;
  return { title: KURS_BY_SLUG.get(kurs)?.title ?? "Kurs" };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { kurs } = await params;
  if (!KURS_BY_SLUG.has(kurs)) notFound();
  return <KursSahifa courseSlug={kurs} />;
}
