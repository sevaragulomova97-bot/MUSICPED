import type { Metadata } from "next";
import { Mentorlik } from "./mentorlik";

export const metadata: Metadata = { title: "Pedagogik amaliyot" };

export default function Page() {
  return <Mentorlik />;
}
