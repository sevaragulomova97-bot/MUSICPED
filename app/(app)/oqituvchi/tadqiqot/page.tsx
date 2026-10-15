import type { Metadata } from "next";
import { Tadqiqot } from "./tadqiqot";

export const metadata: Metadata = { title: "Tajriba-sinov tahlili" };

export default function Page() {
  return <Tadqiqot />;
}
