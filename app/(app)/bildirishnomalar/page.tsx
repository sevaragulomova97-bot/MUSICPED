import type { Metadata } from "next";
import { Bildirishnomalar } from "./bildirishnomalar";

export const metadata: Metadata = { title: "Bildirishnomalar" };

export default function Page() {
  return <Bildirishnomalar />;
}
