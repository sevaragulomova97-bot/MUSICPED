import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Elektron portfolio" };

export default function Page() {
  return (
    <Placeholder
      title="Elektron portfolio"
      description="Ishlar, dars ishlanmalari, ijodiy ishlar va sertifikatlar"
      stage="B4"
    />
  );
}
