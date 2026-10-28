import { describe, expect, it } from "vitest";
import { platformaSoati, qoplanganKodlar, turQoplovi } from "@/content/dastur-qoplovi";
import { DASTUR_MAVZULARI, soatJami } from "@/content/fan-dasturi";
import { BARCHA_DARSLAR } from "@/content/courses";

/**
 * `/dastur` sahifasidagi «Platformada» ustuni shu modulga tayanadi.
 *
 * Eng muhim tekshiruv — birinchisi: soat **darslardan** hisoblanishi
 * kerak, dasturning o'z hujjatidan emas. Ilgari ustun hujjatdan
 * hisoblanardi va shuning uchun har doim yashil turardi.
 */

describe("qoplov manbasi", () => {
  it("soat dastur hujjatidan emas, darslardan hisoblanadi", () => {
    // Kurs ishi uchun dasturda 30 soat bor, lekin platformada hali
    // birorta dars yo'q. Ikki raqam teng chiqsa — manba almashib
    // ketgan.
    expect(soatJami("kurs-ishi")).toBeGreaterThan(0);
    expect(platformaSoati("kurs-ishi")).toBe(0);
  });

  it("faqat dasturTuri mos keladigan darslar hisoblanadi", () => {
    const qoldan = BARCHA_DARSLAR.filter(
      (d) => d.dasturTuri === "amaliy",
    ).reduce((s, d) => s + (d.dasturSoati ?? 0), 0);
    expect(platformaSoati("amaliy")).toBe(qoldan);
  });
});

describe("ma'ruza va amaliy qoplovi", () => {
  it("30 ta ma'ruza to'liq yozilgan", () => {
    const q = turQoplovi("maruza");
    expect(q.mavzular).toBe(30);
    expect(q.yozilgan).toBe(30);
    expect(q.qolgan).toEqual([]);
    expect(q.platformada).toBe(q.dasturda);
  });

  it("30 ta amaliy mashg'ulot to'liq yozilgan", () => {
    const q = turQoplovi("amaliy");
    expect(q.mavzular).toBe(30);
    expect(q.yozilgan).toBe(30);
    expect(q.qolgan).toEqual([]);
    expect(q.platformada).toBe(q.dasturda);
  });

  it("kodlar takrorlanmaydi va dasturdagi kodlarga mos", () => {
    for (const tur of ["maruza", "amaliy"] as const) {
      const kodlar = qoplanganKodlar(tur);
      expect(new Set(kodlar).size).toBe(kodlar.length);
      const dasturda = new Set(
        DASTUR_MAVZULARI.filter((m) => m.tur === tur).map((m) => m.kod),
      );
      for (const kod of kodlar) {
        expect(dasturda.has(kod), `${tur}: ${kod}`).toBe(true);
      }
    }
  });
});
