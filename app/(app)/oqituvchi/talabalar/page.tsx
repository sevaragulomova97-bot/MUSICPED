import type { Metadata } from "next";
import { Talabalar } from "./talabalar";

export const metadata: Metadata = { title: "Talabalar" };

export default function Page() {
  return <Talabalar />;
}
