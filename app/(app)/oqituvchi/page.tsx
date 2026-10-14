import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "O'qituvchi kabineti" };

export default function Page() {
  return (
    <Placeholder
      title="O'qituvchi kabineti"
      description="Talabalar, baholash, mentorlik va tadqiqot"
      stage="B5"
    />
  );
}
