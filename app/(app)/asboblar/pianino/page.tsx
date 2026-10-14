import type { Metadata } from "next";
import { PianinoSahifa } from "./pianino-sahifa";

export const metadata: Metadata = { title: "Virtual pianino" };

export default function Page() {
  return <PianinoSahifa />;
}
