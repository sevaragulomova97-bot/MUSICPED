import { describe, expect, it } from "vitest";
import { formatDate, formatDateLong, OYLAR } from "@/lib/utils";

/**
 * Sana formati **brauzerga bog'liq bo'lmasligi** kerak.
 *
 * Avval `Intl.DateTimeFormat("uz-UZ")` ishlatilardi. O'lchandi: Node
 * `23/10/2026`, Chromium esa `2026-10-23` qaytaradi — ya'ni bir xil
 * ma'lumot foydalanuvchiga brauzeriga qarab boshqacha ko'rinardi,
 * sertifikat PDF ida esa rasmiy hujjat sanasi ISO ko'rinishida chiqib
 * qolardi.
 */
describe("formatDate", () => {
  it("kun.oy.yil ko'rinishida yozadi", () => {
    expect(formatDate(new Date(2026, 9, 23))).toBe("23.10.2026");
  });

  it("bir xonali kun va oyni nol bilan to'ldiradi", () => {
    expect(formatDate(new Date(2025, 0, 5))).toBe("05.01.2025");
  });

  it("matn ko'rinishidagi sanani ham qabul qiladi", () => {
    expect(formatDate("2026-03-09T12:00:00")).toBe("09.03.2026");
  });

  it("noto'g'ri sanada chiziqcha qaytaradi", () => {
    expect(formatDate("bunday sana yo'q")).toBe("—");
  });
});

describe("formatDateLong", () => {
  it("rasmiy hujjat ko'rinishida yozadi", () => {
    expect(formatDateLong(new Date(2026, 9, 23))).toBe("2026-yil 23-oktabr");
  });

  it("kunni nol bilan to'ldirmaydi — matnda o'qiladi", () => {
    expect(formatDateLong(new Date(2025, 0, 5))).toBe("2025-yil 5-yanvar");
  });

  it("noto'g'ri sanada chiziqcha qaytaradi", () => {
    expect(formatDateLong("bunday sana yo'q")).toBe("—");
  });

  it("o'n ikki oyning hammasi nomlangan", () => {
    expect(OYLAR).toHaveLength(12);
    for (let oy = 0; oy < 12; oy += 1) {
      expect(formatDateLong(new Date(2026, oy, 1))).toBe(
        `2026-yil 1-${OYLAR[oy]}`,
      );
    }
  });
});
