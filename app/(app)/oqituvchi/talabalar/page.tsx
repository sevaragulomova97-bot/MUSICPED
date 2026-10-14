import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Talabalar" };

export default function Page() {
  return (
    <Placeholder
      title="Talabalar"
      description="Guruh talabalari ro'yxati va natijalari"
      stage="B5"
    />
  );
}
