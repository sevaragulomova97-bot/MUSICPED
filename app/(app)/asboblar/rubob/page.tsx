import type { Metadata } from "next";
import { RubobSahifa } from "./rubob-sahifa";

export const metadata: Metadata = { title: "Virtual rubob" };

export default function Page() {
  return <RubobSahifa />;
}
