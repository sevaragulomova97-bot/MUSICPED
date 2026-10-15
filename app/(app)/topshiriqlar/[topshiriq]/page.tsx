import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TOPSHIRIQ_BY_SLUG, TOPSHIRIQLAR } from "@/content/tasks";
import { TopshiriqSahifa } from "./topshiriq-sahifa";

type Params = { topshiriq: string };

export function generateStaticParams(): Params[] {
  return TOPSHIRIQLAR.map((t) => ({ topshiriq: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { topshiriq } = await params;
  return { title: TOPSHIRIQ_BY_SLUG.get(topshiriq)?.title ?? "Topshiriq" };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { topshiriq } = await params;
  if (!TOPSHIRIQ_BY_SLUG.has(topshiriq)) notFound();
  return <TopshiriqSahifa slug={topshiriq} />;
}
