import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Mentorlik" };

export default function Page() {
  return (
    <Placeholder
      title="Mentorlik"
      description="Pedagogik amaliyot: kuzatuv, mikro-o'qitish, mustaqil dars"
      stage="B5"
    />
  );
}
