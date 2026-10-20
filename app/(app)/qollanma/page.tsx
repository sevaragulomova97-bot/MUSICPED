import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { parseMarkdown } from "@/lib/markdown";
import { Qollanma } from "./qollanma";

/**
 * Qo'llanmalar — **ilovaning ichida**.
 *
 * Ilgari ular faqat `docs/` papkasida, ya'ni repozitoriyda turardi.
 * Platformadan foydalanadigan talaba yoki o'qituvchi esa GitHub'ga
 * kirmaydi: ular uchun qo'llanma amalda mavjud emas edi. Matn build
 * paytida o'qiladi va sahifaga joylanadi — statik eksport buzilmaydi,
 * qo'shimcha so'rov ham ketmaydi, oflayn ham ochiladi.
 */

export const metadata: Metadata = { title: "Qo'llanma" };

function oqi(nom: string) {
  return parseMarkdown(
    readFileSync(path.join(process.cwd(), "docs", nom), "utf8"),
  );
}

export default function Page() {
  return (
    <Qollanma
      talaba={oqi("QOLLANMA-TALABA.md")}
      oqituvchi={oqi("QOLLANMA-OQITUVCHI.md")}
    />
  );
}
