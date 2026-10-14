import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Kontent" };

export default function Page() {
  return (
    <Placeholder
      title="Kontent"
      description="Modullar, kurslar va darslarni boshqarish"
      stage="B5"
    />
  );
}
