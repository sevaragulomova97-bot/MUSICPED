import { describe, expect, it } from "vitest";
import { vexKeyToTone, vexKeyToUzbek } from "@/components/music/notation";
import { KURSLAR } from "@/content/courses";

/**
 * Nota tugmalarining yorlig'i.
 *
 * `lyric` berilmagan notada tugma avval Tone.js nomini ("C5") ko'rsatardi —
 * butunlay o'zbekcha interfeysda ilmiy balandlik yozuvi. Bu testlar
 * tarjimani va uning kontentdagi barcha notalarga yetishini qo'riqlaydi.
 */

describe("vexKeyToUzbek", () => {
  it("asosiy nota nomlarini tarjima qiladi", () => {
    expect(vexKeyToUzbek("c/4")).toBe("do");
    expect(vexKeyToUzbek("d/4")).toBe("re");
    expect(vexKeyToUzbek("e/5")).toBe("mi");
    expect(vexKeyToUzbek("f/4")).toBe("fa");
    expect(vexKeyToUzbek("g/4")).toBe("sol");
    expect(vexKeyToUzbek("a/4")).toBe("lya");
    expect(vexKeyToUzbek("b/4")).toBe("si");
  });

  it("alteratsiyani musiqiy belgi bilan beradi", () => {
    expect(vexKeyToUzbek("f#/4")).toBe("fa♯");
    expect(vexKeyToUzbek("bb/4")).toBe("si♭");
    expect(vexKeyToUzbek("ab/4")).toBe("lya♭");
    // Bekor belgisi nomga qo'shilmaydi
    expect(vexKeyToUzbek("cn/4")).toBe("do");
  });

  it("oktava raqamini yorliqqa qo'shmaydi", () => {
    expect(vexKeyToUzbek("c/4")).toBe(vexKeyToUzbek("c/6"));
  });

  it("tanimagan kalitni o'zgartirmay qaytaradi", () => {
    expect(vexKeyToUzbek("x/4")).toBe("x/4");
  });

  it("tovush balandligi esa Tone.js uchun o'zgarmaydi", () => {
    // Yorliq o'zbekcha, chalinadigan tovush esa oktava bilan to'liq.
    expect(vexKeyToTone("c/4")).toBe("C4");
    expect(vexKeyToTone("ab/4")).toBe("Ab4");
  });
});

describe("kontentdagi notalar", () => {
  it("lirikasiz notaning yorlig'i ham o'zbekcha chiqadi", () => {
    // Faqat zaxira yo'l tekshiriladi: `lyric` berilgan yorliq ataylab
    // yozilgan (masalan «T», «S», «D7» — garmonik funksiyalar) va unga
    // tegilmaydi.
    const yomon: string[] = [];
    for (const kurs of KURSLAR)
      for (const dars of kurs.lessons)
        for (const bolim of dars.sections)
          for (const blok of bolim.blocks) {
            if (blok.kind !== "nota") continue;
            for (const n of blok.spec.notes) {
              if (n.lyric) continue;
              const yorliq = n.keys.map(vexKeyToUzbek).join("+");
              // "C5", "F#4" kabi ilmiy yozuv qolmasligi kerak
              if (/[A-G][#b]?\d/.test(yorliq)) yomon.push(`${dars.slug}: ${yorliq}`);
            }
          }
    expect(yomon, yomon.join(", ")).toEqual([]);
  });

  it("kontentda hech bo'lmaganda bitta lirikasiz nota bor — test bo'sh yurmaydi", () => {
    const lirikasiz = KURSLAR.flatMap((k) =>
      k.lessons.flatMap((d) =>
        d.sections.flatMap((b) =>
          b.blocks.flatMap((blok) =>
            blok.kind === "nota" ? blok.spec.notes.filter((n) => !n.lyric) : [],
          ),
        ),
      ),
    );
    expect(lirikasiz.length).toBeGreaterThan(0);
  });
});
