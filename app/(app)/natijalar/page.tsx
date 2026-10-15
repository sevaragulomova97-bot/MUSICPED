import type { Metadata } from "next";
import { Natijalar } from "./natijalar";

export const metadata: Metadata = { title: "Mening natijalarim" };

export default function Page() {
  return <Natijalar />;
}
