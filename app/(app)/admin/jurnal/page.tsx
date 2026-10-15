import type { Metadata } from "next";
import { Jurnal } from "./jurnal";

export const metadata: Metadata = { title: "Faoliyat jurnali" };

export default function Page() {
  return <Jurnal />;
}
