import type { Metadata } from "next";
import { Profil } from "./profil";

export const metadata: Metadata = { title: "Profil" };

export default function Page() {
  return <Profil />;
}
