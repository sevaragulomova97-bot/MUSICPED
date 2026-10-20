import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  asosiyQatlam,
  kuchQatlami,
  notaMidi,
  notaTanlovi,
  parseBank,
  tezlikNisbati,
  zarbTanlovi,
  type SampleBank,
} from "@/lib/audio/bank";
import { CHOLGU_NOTALARI } from "@/content/instrument-range";
import { DOIRA_ZARBLARI } from "@/lib/domain/instruments";

/**
 * Namuna banki.
 *
 * Ikki xil tekshiruv bor va ikkalasi ham zarur:
 *
 *  • **Tanlov qoidalari** — qaysi namuna qaysi notaga va qaysi ijro
 *    kuchiga mos kelishi. Bu sof mantiq, brauzersiz tekshiriladi.
 *  • **Bankning o'zi** — `public/audio/` dagi haqiqiy fayllar. Bank
 *    e'lon qilgan har bir fayl diskda bo'lishi shart: yo'q fayl
 *    brauzerda **jim** kechadi (nota bosiladi, ovoz chiqmaydi), shuning
 *    uchun uni faqat shunday test ushlaydi.
 */

const AUDIO = path.join(process.cwd(), "public", "audio");

function bankOqi(papka: string): SampleBank {
  const yol = path.join(AUDIO, papka, "bank.json");
  return parseBank(JSON.parse(readFileSync(yol, "utf8")));
}

const BANKLAR = {
  dutor: "dutor-model",
  rubob: "rubob-model",
  doira: "doira-model",
} as const;

/* ───────────────────────── Nota nomlari ───────────────────────── */

describe("nota nomlari", () => {
  it("diyez va bemolni bir xil tushunadi", () => {
    expect(notaMidi("A4")).toBe(69);
    expect(notaMidi("F#4")).toBe(notaMidi("Gb4"));
    expect(notaMidi("C4")).toBe(60);
  });

  it("noto'g'ri nomga null qaytaradi", () => {
    expect(notaMidi("H4")).toBeNull();
    expect(notaMidi("bum")).toBeNull();
    expect(notaMidi("")).toBeNull();
  });

  it("oktava farqi tezlikni ikki barobar qiladi", () => {
    expect(tezlikNisbati(60, 72)).toBeCloseTo(2, 10);
    expect(tezlikNisbati(60, 60)).toBe(1);
  });
});

/* ───────────────────────── Tekshiruv ───────────────────────── */

const NAMUNAVIY = {
  cholgu: "dutor",
  nom: "Sinov",
  tur: "model",
  turi_izoh: "Sinov uchun",
  manba: "test",
  litsenziya: "test",
  sampleRate: 44100,
  kuchlar: [
    { id: "yumshoq", nom: "Yumshoq", velocity: 0.35 },
    { id: "orta", nom: "O'rta", velocity: 0.7 },
  ],
  zarblar: [],
  namunalar: [
    {
      fayl: "C4-orta.mp3", nota: "C4", f0: 261.63, registr: "orta",
      kuch: "orta", variant: 1, davomiylik: 2.6, loop: null,
    },
  ],
};

describe("bank tekshiruvi", () => {
  it("to'g'ri bankni qabul qiladi", () => {
    expect(parseBank(NAMUNAVIY).namunalar).toHaveLength(1);
  });

  it("litsenziyasiz bankni rad etadi", () => {
    const { litsenziya, ...siz } = NAMUNAVIY;
    expect(litsenziya).toBeTruthy();
    expect(() => parseBank(siz)).toThrow(/litsenziya/);
  });

  it("manbasiz bankni rad etadi", () => {
    const { manba, ...siz } = NAMUNAVIY;
    expect(manba).toBeTruthy();
    expect(() => parseBank(siz)).toThrow(/manba/);
  });

  it("noma'lum turni rad etadi", () => {
    expect(() => parseBank({ ...NAMUNAVIY, tur: "taxmin" })).toThrow(/tur/);
  });

  it("namunadagi noma'lum kuch qatlamini rad etadi", () => {
    const buzuq = {
      ...NAMUNAVIY,
      namunalar: [{ ...NAMUNAVIY.namunalar[0], kuch: "yoq" }],
    };
    expect(() => parseBank(buzuq)).toThrow(/kuch/);
  });

  it("tushunarsiz nota nomini rad etadi", () => {
    const buzuq = {
      ...NAMUNAVIY,
      namunalar: [{ ...NAMUNAVIY.namunalar[0], nota: "H9" }],
    };
    expect(() => parseBank(buzuq)).toThrow(/nota/);
  });
});

/* ───────────────────────── Tanlov qoidalari ───────────────────────── */

describe("ijro kuchi qatlami", () => {
  const bank = bankOqi(BANKLAR.dutor);

  it("eng yaqin qatlamni tanlaydi", () => {
    expect(kuchQatlami(bank, 0.3).id).toBe("yumshoq");
    expect(kuchQatlami(bank, 0.7).id).toBe("orta");
    expect(kuchQatlami(bank, 1).id).toBe("kuchli");
  });

  it("asosiy qatlam — o'rtachasi", () => {
    expect(asosiyQatlam(bank).id).toBe("orta");
  });
});

describe("nota tanlovi", () => {
  const bank = bankOqi(BANKLAR.rubob);

  it("mavjud notani cho'zmasdan chaladi", () => {
    const t = notaTanlovi(bank, "A3", 0.7);
    expect(t?.tezlik).toBeCloseTo(1, 10);
    expect(t?.namuna.nota).toBe("A3");
    expect(t?.qatlam.id).toBe("orta");
  });

  it("kerakli kuch qatlamini oladi", () => {
    expect(notaTanlovi(bank, "A3", 0.35)?.namuna.kuch).toBe("yumshoq");
    expect(notaTanlovi(bank, "A3", 1)?.namuna.kuch).toBe("kuchli");
  });

  it("qatlam yuklanmagan bo'lsa, balandlikni afzal ko'radi", () => {
    // Faqat «yumshoq» qatlam xotirada: kuchli ijro so'ralsa ham, to'g'ri
    // balandlikdagi namuna olinishi kerak — boshqa notaga o'tib ketish
    // ancha sezilarli xato bo'lardi.
    const mavjud = new Set(
      bank.namunalar.filter((n) => n.kuch === "yumshoq").map((n) => n.fayl),
    );
    const t = notaTanlovi(bank, "A3", 1, mavjud);
    expect(t?.namuna.nota).toBe("A3");
    expect(t?.qatlam.id).toBe("yumshoq");
  });

  it("diapazondan tashqari notani eng yaqinidan cho'zadi", () => {
    const t = notaTanlovi(bank, "A5", 0.7);
    expect(t).not.toBeNull();
    expect(t!.tezlik).toBeGreaterThan(1);
  });

  it("nota nomi tushunarsiz bo'lsa, null qaytaradi", () => {
    expect(notaTanlovi(bank, "bum", 0.7)).toBeNull();
  });
});

describe("zarb tanlovi", () => {
  const bank = bankOqi(BANKLAR.doira);

  it("variantlarni navbat bilan beradi va aylanadi", () => {
    const fayllar = [0, 1, 2, 3].map(
      (i) => zarbTanlovi(bank, "bum", 0.7, i)?.namuna.fayl,
    );
    expect(new Set(fayllar.slice(0, 3)).size).toBe(3);
    expect(fayllar[3]).toBe(fayllar[0]);
  });

  it("ketma-ket zarblar bir xil namunadan bo'lmaydi", () => {
    for (const zarb of DOIRA_ZARBLARI) {
      for (let i = 1; i < 6; i += 1) {
        const a = zarbTanlovi(bank, zarb, 0.9, i - 1)?.namuna.fayl;
        const b = zarbTanlovi(bank, zarb, 0.9, i)?.namuna.fayl;
        expect(b, `${zarb} ${i}`).not.toBe(a);
      }
    }
  });

  it("qatlam yuklanmagan bo'lsa, eng yaqin yuklanganidan oladi", () => {
    const mavjud = new Set(
      bank.namunalar.filter((n) => n.kuch === "orta").map((n) => n.fayl),
    );
    const t = zarbTanlovi(bank, "tak", 1, 0, mavjud);
    expect(t?.qatlam.id).toBe("orta");
  });

  it("noma'lum zarbga null qaytaradi", () => {
    expect(zarbTanlovi(bank, "yoq", 0.9, 0)).toBeNull();
  });
});

/* ──────────────────── Haqiqiy banklarning yaxlitligi ──────────────────── */

describe("yetkazilgan banklar", () => {
  for (const [cholgu, papka] of Object.entries(BANKLAR)) {
    describe(cholgu, () => {
      const bank = bankOqi(papka);

      it("e'lon qilgan har bir fayl diskda bor", () => {
        const yoq = bank.namunalar
          .map((n) => n.fayl)
          .filter((f) => !existsSync(path.join(AUDIO, papka, f)));
        expect(yoq, `yo'q fayllar: ${yoq.join(", ")}`).toHaveLength(0);
      });

      it("manba va litsenziya ko'rsatilgan", () => {
        expect(bank.manba.length).toBeGreaterThan(3);
        expect(bank.litsenziya.length).toBeGreaterThan(3);
      });

      it("model haqiqiy yozuv deb ko'rsatilmaydi", () => {
        // Eng muhim shart: tovush qayerdan kelgani yashirilmasin.
        expect(bank.tur).toBe("model");
        expect(bank.turiIzoh).toMatch(/model/i);
      });

      it("uchta ijro kuchi qatlami bor va har birida namuna bor", () => {
        expect(bank.kuchlar).toHaveLength(3);
        for (const k of bank.kuchlar) {
          const soni = bank.namunalar.filter((n) => n.kuch === k.id).length;
          expect(soni, k.id).toBeGreaterThan(0);
        }
      });
    });
  }

  for (const cholgu of ["dutor", "rubob"] as const) {
    it(`${cholgu}: chalinadigan har bir nota uchun o'z namunasi bor`, () => {
      const bank = bankOqi(BANKLAR[cholgu]);
      const bor = new Set(
        bank.namunalar.filter((n) => n.nota).map((n) => notaMidi(n.nota!)),
      );
      // Cho'zish — korpus rezonanslarini ham suradi, shuning uchun har bir
      // chalinadigan nota uchun **aynan o'sha balandlikda** namuna kerak.
      for (const nota of CHOLGU_NOTALARI[cholgu]) {
        expect(bor.has(notaMidi(nota)), `${cholgu} ${nota}`).toBe(true);
      }
    });
  }

  it("doira: har bir zarbda har bir kuch uchun kamida uch variant bor", () => {
    const bank = bankOqi(BANKLAR.doira);
    for (const zarb of DOIRA_ZARBLARI) {
      for (const k of bank.kuchlar) {
        const soni = bank.namunalar.filter(
          (n) => n.zarb === zarb && n.kuch === k.id,
        ).length;
        expect(soni, `${zarb}/${k.id}`).toBeGreaterThanOrEqual(3);
      }
    }
  });
});
