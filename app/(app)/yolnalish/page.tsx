import type { Metadata } from "next";
import { Yolnalish } from "./yolnalish";

export const metadata: Metadata = { title: "Individual yo'nalish" };

export default function Page() {
  return <Yolnalish />;
}
