import type { Metadata } from "next";
import { Baholash } from "./baholash";

export const metadata: Metadata = { title: "Ishlarni baholash" };

export default function Page() {
  return <Baholash />;
}
