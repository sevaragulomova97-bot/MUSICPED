import type { Metadata } from "next";
import { Sozlamalar } from "./sozlamalar";

export const metadata: Metadata = { title: "Sozlamalar" };

export default function Page() {
  return <Sozlamalar />;
}
