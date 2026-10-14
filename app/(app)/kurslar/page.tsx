import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "O'quv kurslari" };

export default function Page() {
  return (
    <Placeholder
      title="O'quv kurslari"
      description="5 modul, kurslar va interaktiv darslar"
      stage="B2–B4"
    />
  );
}
