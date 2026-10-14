import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Sozlamalar" };

export default function Page() {
  return (
    <Placeholder
      title="Sozlamalar"
      description="Tizim va hisob sozlamalari"
      stage="B5"
    />
  );
}
