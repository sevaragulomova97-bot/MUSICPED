import { describe, expect, it } from "vitest";
import { DASTUR_AMALIYLARI } from "@/content/courses/metodika-amaliy";
import type { Block, Lesson } from "@/content/lesson-types";

/**
 * Amaliy mashg'ulotlardagi nota misollari.
 *
 * Ikki narsa qo'riqlanadi.
 *
 * **Mualliflik huquqi.** Bu yerda qo'shiqlarning o'z ohangi yo'q va
 * bo'lmasligi kerak: nota misollari — diapazon ko'rsatkichi, qizdirish,
 * ritmik naqsh va qiyin joy uchun mashq. Har bir darsda buni aytadigan
 * eslatma turishi shart.
 *
 * **Diapazon.** Mashq sinf kuylay olmaydigan balandlikda bo'lsa, u
 * foydasiz. Shuning uchun darsdagi barcha notalar o'sha darsning
 * birinchi nota bloki ko'rsatgan oraliq ichida bo'lishi tekshiriladi.
 */

const ZINA = [
  "a/3", "b/3", "c/4", "d/4", "e/4", "f/4", "g/4",
  "a/4", "b/4", "c/5", "d/5", "e/5",
];
const IDX = new Map(ZINA.map((k, i) => [k, i]));

const notaBloklari = (dars: Lesson) =>
  dars.sections.flatMap((s) =>
    s.blocks.filter((b): b is Extract<Block, { kind: "nota" }> => b.kind === "nota"),
  );

describe("amaliy mashg'ulotlarning tuzilishi", () => {
  it("har bir darsda to'qqizta bo'lim bor", () => {
    const kutilgan = [
      "tayyorgarlik", "asar", "ovoz", "tahlil", "ritm",
      "ijro", "qiyinjoy", "orgatish", "xulosa",
    ];
    for (const dars of DASTUR_AMALIYLARI) {
      expect(dars.sections.map((s) => s.id), dars.dasturKodi).toEqual(kutilgan);
    }
  });

  it("har bir darsda to'rtta nota misoli bor", () => {
    for (const dars of DASTUR_AMALIYLARI) {
      expect(notaBloklari(dars).length, dars.dasturKodi).toBe(4);
    }
  });
});

describe("mualliflik huquqi", () => {
  it("har bir darsda nota misollarining mohiyati aytilgan", () => {
    for (const dars of DASTUR_AMALIYLARI) {
      const matn = JSON.stringify(dars);
      expect(matn, dars.dasturKodi).toContain("mualliflik huquqi bilan qo'riqlanadi");
      expect(matn, dars.dasturKodi).toContain("qo'shiqning ohangi emas");
    }
  });

  it("nota izohlari misolni mashq deb nomlaydi", () => {
    // Izohda «qo'shiq» so'zi chiqsa, misol asarning o'zi deb
    // tushunilishi mumkin — aynan shundan qochiladi.
    for (const dars of DASTUR_AMALIYLARI) {
      for (const blok of notaBloklari(dars)) {
        expect(blok.caption, `${dars.dasturKodi}: ${blok.caption}`).toBeTruthy();
        expect(
          /qo'shiq|asar ohangi/i.test(blok.caption ?? ""),
          `${dars.dasturKodi}: ${blok.caption}`,
        ).toBe(false);
      }
    }
  });
});

describe("diapazon", () => {
  it("barcha notalar sinfning ishchi oralig'i ichida", () => {
    const tashqarida: string[] = [];

    for (const dars of DASTUR_AMALIYLARI) {
      const bloklar = notaBloklari(dars);
      // Birinchi blok — diapazon ko'rsatkichi: eng past va eng baland.
      const chegara = bloklar[0].spec.notes.map((n) => n.keys[0]);
      expect(chegara.length, dars.dasturKodi).toBe(2);
      const past = IDX.get(chegara[0]);
      const baland = IDX.get(chegara[1]);
      expect(past, `${dars.dasturKodi}: ${chegara[0]}`).toBeDefined();
      expect(baland, `${dars.dasturKodi}: ${chegara[1]}`).toBeDefined();
      expect(past!).toBeLessThan(baland!);

      for (const blok of bloklar) {
        for (const n of blok.spec.notes) {
          for (const key of n.keys) {
            const i = IDX.get(key);
            if (i === undefined || i < past! || i > baland!) {
              tashqarida.push(`${dars.dasturKodi}: ${key} (${chegara.join(" - ")})`);
            }
          }
        }
      }
    }

    expect(tashqarida, tashqarida.join("; ")).toEqual([]);
  });
});
