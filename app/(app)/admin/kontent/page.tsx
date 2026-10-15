import type { Metadata } from "next";
import { Kontent } from "./kontent";

export const metadata: Metadata = { title: "Kontent auditi" };

export default function Page() {
  return <Kontent />;
}
