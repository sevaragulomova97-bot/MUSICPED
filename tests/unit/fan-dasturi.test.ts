import { describe, expect, it } from "vitest";
import {
  AMALIYLAR,
  ASARLAR,
  asarMuallifi,
  DASTUR_MAVZULARI,
  FAN,
  KURS_ISHLARI,
  MARUZALAR,
  MAVZU_BY_KOD,
  MUSTAQIL_TOPSHIRIQLAR,
  soatJami,
  TALIM_NATIJALARI,
} from "@/content/fan-dasturi";

/**
 * O'quv dasturi — rasmiy hujjat, va platformaning butun mazmuni unga
 * tayanadi. Shuning uchun kodga ko'chirilgan raqamlar hujjatdagi
 * raqamlar bilan **bir xilligini** test qo'riqlaydi: bitta mavzu
 * tushib qolsa yoki soat noto'g'ri yozilsa, buni hech narsa
 * bilintirmaydi — dastur qamrovi jim ravishda noto'g'ri bo'lib qoladi.
 */

describe("fan ma'lumotlari", () => {
  it("hujjatdagi hajm bilan mos", () => {
    expect(FAN.ects).toBe(9);
    expect(FAN.soat.jami).toBe(270);
    expect(FAN.soat.auditoriya).toBe(120);
  });

  it("soatlar yig'indisi jami yuklamaga teng", () => {
    const { maruza, amaliy, laboratoriya, seminar, kursIshi, mustaqil, jami } =
      FAN.soat;
    expect(maruza + amaliy + laboratoriya + seminar + kursIshi + mustaqil).toBe(
      jami,
    );
  });

  it("auditoriya soati ma'ruza va amaliydan iborat", () => {
    const { maruza, amaliy, laboratoriya, seminar, auditoriya } = FAN.soat;
    expect(maruza + amaliy + laboratoriya + seminar).toBe(auditoriya);
  });
});

describe("mavzular ro'yxati", () => {
  it("ma'ruzalar soni va soati dasturdagidek", () => {
    expect(MARUZALAR).toHaveLength(30);
    expect(soatJami("maruza")).toBe(FAN.soat.maruza);
  });

  it("amaliy mashg'ulotlar soni va soati dasturdagidek", () => {
    expect(AMALIYLAR).toHaveLength(30);
    expect(soatJami("amaliy")).toBe(FAN.soat.amaliy);
  });

  it("kurs ishi mavzulari soni va soati dasturdagidek", () => {
    expect(KURS_ISHLARI).toHaveLength(15);
    expect(soatJami("kurs-ishi")).toBe(FAN.soat.kursIshi);
  });

  it("mustaqil ta'lim topshiriqlari soni va soati dasturdagidek", () => {
    expect(MUSTAQIL_TOPSHIRIQLAR).toHaveLength(12);
    expect(soatJami("mustaqil")).toBe(FAN.soat.mustaqil);
    // Har biri 10 soat — dasturda shunday yozilgan.
    for (const t of MUSTAQIL_TOPSHIRIQLAR) expect(t.soat).toBe(10);
  });

  it("kodlar takrorlanmaydi", () => {
    const kodlar = DASTUR_MAVZULARI.map((m) => m.kod);
    expect(new Set(kodlar).size).toBe(kodlar.length);
    expect(MAVZU_BY_KOD.size).toBe(kodlar.length);
  });

  it("har bir mavzuda sarlavha bor", () => {
    for (const m of DASTUR_MAVZULARI) {
      expect(m.sarlavha.length, m.kod).toBeGreaterThan(10);
    }
  });

  it("ma'ruzalar M1…M30 ketma-ketligida", () => {
    expect(MARUZALAR.map((m) => m.kod)).toEqual(
      Array.from({ length: 30 }, (_, i) => `M${i + 1}`),
    );
  });

  it("1–7-sinf ma'ruzalari M20…M26 da", () => {
    for (let sinf = 1; sinf <= 7; sinf += 1) {
      const m = MAVZU_BY_KOD.get(`M${19 + sinf}`);
      expect(m?.sarlavha, `M${19 + sinf}`).toContain(`${sinf}-sinflar uchun`);
    }
  });
});

describe("repertuar", () => {
  it("30 ta asar bor va har birining amaliy mashg'uloti bor", () => {
    expect(ASARLAR).toHaveLength(30);
    for (const a of ASARLAR) {
      expect(MAVZU_BY_KOD.get(a.kod)?.tur, a.kod).toBe("amaliy");
    }
  });

  it("har bir asar sinfga yoki madhiyaga tegishli", () => {
    for (const a of ASARLAR) {
      if (a.turi === "madhiya") expect(a.sinf).toBeUndefined();
      else expect(a.sinf, a.nom).toBeGreaterThanOrEqual(1);
      if (a.sinf !== undefined) expect(a.sinf, a.nom).toBeLessThanOrEqual(7);
    }
  });

  it("muallifli asarda she'r va musiqa muallifi ko'rsatilgan", () => {
    for (const a of ASARLAR.filter((x) => x.turi === "muallif")) {
      expect(a.sher, a.nom).toBeTruthy();
      expect(a.musiqa, a.nom).toBeTruthy();
    }
  });

  it("xalq qo'shig'ining muallifi yozilmaydi", () => {
    for (const a of ASARLAR.filter((x) => x.turi === "xalq")) {
      expect(asarMuallifi(a)).toBe("Xalq qo'shig'i");
    }
  });

  it("muallif dasturdagi ko'rinishda yoziladi", () => {
    const madhiya = ASARLAR.find((a) => a.turi === "madhiya")!;
    expect(asarMuallifi(madhiya)).toBe("A.Oripov she'ri, M.Burhonov musiqasi");
  });

  /*
    Mualliflik huquqi: asarlarning nota matni yoki yozuvi platformada
    bo'lmasligi kerak — bular hozirgi zamon mualliflarining asarlari.
    Shuning uchun `Asar` tuzilmasida bunday maydon umuman yo'q va bu
    test shuni qo'riqlaydi.
  */
  it("asar tuzilmasida nota yoki audio maydoni yo'q", () => {
    const maydonlar = new Set(ASARLAR.flatMap((a) => Object.keys(a)));
    for (const taqiq of ["nota", "notes", "audio", "fayl", "spec", "url"]) {
      expect([...maydonlar]).not.toContain(taqiq);
    }
  });
});

describe("mustaqil ta'lim", () => {
  it("har bir topshiriq asarga bog'langan", () => {
    for (const t of MUSTAQIL_TOPSHIRIQLAR) {
      expect(t.asar.nom.length, t.kod).toBeGreaterThan(2);
    }
  });

  it("topshiriq matni tahlil va dars ishlanmani talab qiladi", () => {
    for (const t of MUSTAQIL_TOPSHIRIQLAR) {
      expect(t.mazmun, t.kod).toMatch(/tahlil/i);
      expect(t.mazmun, t.kod).toMatch(/dars ishlanma/i);
    }
  });
});

describe("ta'lim natijalari", () => {
  it("TN1…TN8 to'liq", () => {
    expect(TALIM_NATIJALARI.map((t) => t.kod)).toEqual([
      "TN1", "TN2", "TN3", "TN4", "TN5", "TN6", "TN7", "TN8",
    ]);
  });

  it("to'rttasi kompetensiya, to'rttasi ko'nikma", () => {
    const k = TALIM_NATIJALARI.filter((t) => t.tur === "kompetensiya");
    const n = TALIM_NATIJALARI.filter((t) => t.tur === "konikma");
    expect(k).toHaveLength(4);
    expect(n).toHaveLength(4);
  });

  it("har bir natija matni to'liq yozilgan", () => {
    for (const t of TALIM_NATIJALARI) {
      expect(t.matn.length, t.kod).toBeGreaterThan(80);
    }
  });
});
