import type { Metadata } from "next";
import { BoshSahifa } from "./bosh-sahifa";

export const metadata: Metadata = {
  title: "Bosh sahifa",
};

export default function Page() {
  return <BoshSahifa />;
}
