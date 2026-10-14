import type { Metadata } from "next";
import { GitaraSahifa } from "./gitara-sahifa";

export const metadata: Metadata = { title: "Virtual gitara" };

export default function Page() {
  return <GitaraSahifa />;
}
