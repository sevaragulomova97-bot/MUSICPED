import type { Metadata } from "next";
import { KirishForm } from "./kirish-form";

export const metadata: Metadata = {
  title: "Kirish",
};

export default function KirishPage() {
  return <KirishForm />;
}
