import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Topshiriqlar" };

export default function Page() {
  return (
    <Placeholder
      title="Topshiriqlar"
      description="Mashq, test va loyiha topshiriqlari"
      stage="B4"
    />
  );
}
