import type { Metadata } from "next";
import { KurslarRoyxati } from "./kurslar-royxati";

export const metadata: Metadata = { title: "O'quv kurslari" };

export default function Page() {
  return <KurslarRoyxati />;
}
