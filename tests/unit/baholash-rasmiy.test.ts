import { describe, expect, it } from "vitest";
import {
  bahoniAniqla,
  BAHO_JADVALI,
  JAMI_MAX,
  NAZORATLAR,
  rasmiyNatija,
  rubrikaMaxJami,
} from "@/lib/baholash-rasmiy";

/**
 * Rasmiy baholash — universitetga topshiriladigan raqam. Shuning uchun
 * dasturdagi qoidalar aynan tekshiriladi, ayniqsa **saralash alohida
 * qo'llanilishi**: bir nazoratdagi yetishmagan ball boshqasidagi
 * yuqori ball bilan qoplanmaydi.
 */

describe("nazorat turlari", () => {
  it("dasturdagi ballar: 30 + 20 + 50 = 100", () => {
    expect(NAZORATLAR.map((n) => n.max)).toEqual([30, 20, 50]);
    expect(JAMI_MAX).toBe(100);
  });

  it("saralash ballari dasturdagidek", () => {
    expect(NAZORATLAR.map((n) => n.saralash)).toEqual([18, 12, 30]);
  });

  it("saralash maksimaldan kichik", () => {
    for (const n of NAZORATLAR) expect(n.saralash).toBeLessThan(n.max);
  });

  it("rubrika mezonlari nazorat maksimaliga yig'iladi", () => {
    expect(rubrikaMaxJami("JN")).toBe(30);
    expect(rubrikaMaxJami("ON")).toBe(20);
    expect(rubrikaMaxJami("YaN")).toBe(50);
  });
});

describe("baho jadvali", () => {
  it("dasturdagi chegaralar", () => {
    expect(bahoniAniqla(100)).toBe("A'lo");
    expect(bahoniAniqla(90)).toBe("A'lo");
    expect(bahoniAniqla(89.9)).toBe("Yaxshi");
    expect(bahoniAniqla(70)).toBe("Yaxshi");
    expect(bahoniAniqla(69.9)).toBe("Qoniqarli");
    expect(bahoniAniqla(60)).toBe("Qoniqarli");
    expect(bahoniAniqla(59.9)).toBe("Qoniqarsiz");
    expect(bahoniAniqla(0)).toBe("Qoniqarsiz");
  });

  it("jadval kamayish tartibida", () => {
    const minlar = BAHO_JADVALI.map((d) => d.min);
    expect([...minlar].sort((a, b) => b - a)).toEqual(minlar);
  });
});

describe("rasmiy natija", () => {
  it("hamma nazorat saralashdan o'tsa, fan o'zlashtiriladi", () => {
    const n = rasmiyNatija({ JN: 25, ON: 16, YaN: 42 });
    expect(n.jami).toBe(83);
    expect(n.baho).toBe("Yaxshi");
    expect(n.otmagan).toEqual([]);
    expect(n.ozlashtirdi).toBe(true);
  });

  /*
    Dasturdagi eslatma: «Bir nazorat turidagi yetishmagan ball boshqa
    nazorat turidagi yuqori ball hisobiga qoplanmaydi». Shuning uchun
    jami ball yetarli bo'lsa ham fan o'zlashtirilmagan bo'lishi mumkin.
  */
  it("jami yetarli bo'lsa ham, saralashdan o'tmagan nazorat fanni yiqitadi", () => {
    const n = rasmiyNatija({ JN: 30, ON: 20, YaN: 25 });
    expect(n.jami).toBe(75);
    expect(n.baho).toBe("Yaxshi");
    expect(n.otmagan).toEqual(["YaN"]);
    expect(n.ozlashtirdi).toBe(false);
  });

  it("bir nechta nazorat o'tmasa, hammasi ko'rsatiladi", () => {
    const n = rasmiyNatija({ JN: 10, ON: 5, YaN: 45 });
    expect(n.otmagan).toEqual(["JN", "ON"]);
    expect(n.ozlashtirdi).toBe(false);
  });

  it("qo'yilmagan nazorat nol sanaladi va alohida ko'rsatiladi", () => {
    const n = rasmiyNatija({ JN: 25 });
    expect(n.qoyilmagan).toEqual(["ON", "YaN"]);
    expect(n.jami).toBe(25);
    expect(n.ozlashtirdi).toBe(false);
  });

  it("maksimaldan katta ball chegaralanadi", () => {
    const n = rasmiyNatija({ JN: 45, ON: 30, YaN: 70 });
    expect(n.ballar).toEqual({ JN: 30, ON: 20, YaN: 50 });
    expect(n.jami).toBe(100);
    expect(n.baho).toBe("A'lo");
  });

  it("manfiy yoki son bo'lmagan qiymat nolga keltiriladi", () => {
    const n = rasmiyNatija({ JN: -5, ON: Number.NaN, YaN: 50 });
    expect(n.ballar.JN).toBe(0);
    expect(n.ballar.ON).toBe(0);
    expect(n.jami).toBe(50);
  });

  it("saralash chegarasining o'zi o'tgan hisoblanadi", () => {
    const n = rasmiyNatija({ JN: 18, ON: 12, YaN: 30 });
    expect(n.otmagan).toEqual([]);
    expect(n.ozlashtirdi).toBe(true);
    expect(n.jami).toBe(60);
    expect(n.baho).toBe("Qoniqarli");
  });

  it("bo'sh kirish — hech narsa qo'yilmagan", () => {
    const n = rasmiyNatija({});
    expect(n.jami).toBe(0);
    expect(n.baho).toBe("Qoniqarsiz");
    expect(n.qoyilmagan).toHaveLength(3);
    expect(n.ozlashtirdi).toBe(false);
  });
});
