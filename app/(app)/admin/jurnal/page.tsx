import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Faoliyat jurnali" };

export default function Page() {
  return (
    <Placeholder
      title="Faoliyat jurnali"
      description="Tizimdagi amallar tarixi"
      stage="B5"
    />
  );
}
