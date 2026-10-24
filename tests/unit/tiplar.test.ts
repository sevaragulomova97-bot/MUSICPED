import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Next.js **o'zi hosil qiladigan** global tiplar (`LayoutProps`,
 * `PageProps`, `RouteContext`) `.next/types/` ga **build paytida**
 * yoziladi.
 *
 * Shu sababli ular kodda ishlatilsa, tekshiruv mahalliy mashinada
 * o'tib ketadi (`.next` papkasi oldingi build'dan turibdi), toza
 * checkout da esa yiqiladi. CI da tiplarni tekshirish build dan oldin
 * yuriladi — ya'ni «Qurish» ishi to'xtaydi va **sayt joylanmaydi**.
 * Aynan shu bo'lib o'tdi: `app/layout.tsx` da `LayoutProps<"/">`
 * ishlatilgani uchun ketma-ket beshta joylash yiqildi
 * (`error TS2304: Cannot find name 'LayoutProps'`), buni esa hech
 * narsa aytmadi — mahalliy `tsc --noEmit` toza o'tardi.
 */
// Tip o'rnida ishlatilganini qidiradi (`: LayoutProps<…>`,
// `extends PageProps<…>`) — izohdagi eslatma hisobga olinmaydi.
const TAQIQLANGAN =
  /(?::|extends|satisfies)\s*(?:LayoutProps|PageProps|RouteContext)\s*</;

function fayllar(katalog: string): string[] {
  const natija: string[] = [];
  for (const nom of readdirSync(katalog)) {
    if (nom === "node_modules" || nom.startsWith(".")) continue;
    const yol = join(katalog, nom);
    if (statSync(yol).isDirectory()) natija.push(...fayllar(yol));
    else if (/\.tsx?$/.test(nom)) natija.push(yol);
  }
  return natija;
}

describe("Next.js hosil qiladigan tiplar", () => {
  it("ilova kodida ishlatilmaydi", () => {
    const topildi: string[] = [];
    for (const katalog of ["app", "components", "lib"]) {
      for (const yol of fayllar(katalog)) {
        const matn = readFileSync(yol, "utf8");
        matn.split("\n").forEach((satr, i) => {
          if (TAQIQLANGAN.test(satr))
            topildi.push(`${yol}:${i + 1}: ${satr.trim()}`);
        });
      }
    }
    expect(topildi.join("\n")).toBe("");
  });

  it("tekshiruvning o'zi ishlaydi", () => {
    // Qoida bo'sh bo'lib qolmasligi uchun: namunaviy satr topilishi kerak.
    expect(
      TAQIQLANGAN.test('function L({ children }: LayoutProps<"/">) {'),
    ).toBe(true);
    expect(TAQIQLANGAN.test("const x: Record<string, number> = {};")).toBe(
      false,
    );
  });
});
