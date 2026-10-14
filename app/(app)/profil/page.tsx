import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Profil" };

export default function Page() {
  return (
    <Placeholder
      title="Profil"
      description="Profil ma'lumotlari va boshlang'ich diagnostika"
      stage="B2"
    />
  );
}
