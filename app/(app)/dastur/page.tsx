import type { Metadata } from "next";
import { FanDasturi } from "./fan-dasturi-sahifa";

export const metadata: Metadata = { title: "Fan dasturi" };

export default function Page() {
  return <FanDasturi />;
}
