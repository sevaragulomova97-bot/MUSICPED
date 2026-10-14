import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Admin paneli" };

export default function Page() {
  return (
    <Placeholder
      title="Admin paneli"
      description="Tizim boshqaruvi"
      stage="B5"
    />
  );
}
