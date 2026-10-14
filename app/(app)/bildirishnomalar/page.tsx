import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Bildirishnomalar" };

export default function Page() {
  return (
    <Placeholder
      title="Bildirishnomalar"
      description="Topshiriq muddatlari va o'qituvchi izohlari haqida xabarlar"
      stage="B4"
    />
  );
}
