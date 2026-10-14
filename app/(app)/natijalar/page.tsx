import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Mening natijalarim" };

export default function Page() {
  return (
    <Placeholder
      title="Mening natijalarim"
      description="Baholash, o'sish dinamikasi va o'qituvchi izohlari"
      stage="B4"
    />
  );
}
