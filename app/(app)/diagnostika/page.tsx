import type { Metadata } from "next";
import { DiagnostikaTest } from "./diagnostika-test";

export const metadata: Metadata = { title: "Diagnostika" };

export default function Page() {
  return <DiagnostikaTest />;
}
