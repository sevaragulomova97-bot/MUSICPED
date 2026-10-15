import type { Metadata } from "next";
import { Foydalanuvchilar } from "./foydalanuvchilar";

export const metadata: Metadata = { title: "Foydalanuvchilar" };

export default function Page() {
  return <Foydalanuvchilar />;
}
