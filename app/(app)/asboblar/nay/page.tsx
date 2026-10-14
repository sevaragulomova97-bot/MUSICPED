import type { Metadata } from "next";
import { NaySahifa } from "./nay-sahifa";

export const metadata: Metadata = { title: "Virtual nay" };

export default function Page() {
  return <NaySahifa />;
}
