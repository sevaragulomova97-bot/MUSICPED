import type { Metadata } from "next";
import { DutorSahifa } from "./dutor-sahifa";

export const metadata: Metadata = { title: "Virtual dutor" };

export default function Page() {
  return <DutorSahifa />;
}
