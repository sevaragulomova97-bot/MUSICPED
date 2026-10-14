import { describe, expect, it } from "vitest";
import {
  areaSeries,
  DEMO_TALABALAR,
  studentsByGroup,
} from "@/content/demo-students";
import { DIAGNOSTIKA_YONALISHLARI, overallScore } from "@/lib/domain/types";

const ortacha = (xs: number[]) => xs.reduce((s, x) => s + x, 0) / xs.length;

describe("namunaviy talabalar", () => {
  it("24 ta talaba, ikki guruhga teng bo'lingan", () => {
    expect(DEMO_TALABALAR).toHaveLength(24);
    expect(studentsByGroup("tajriba")).toHaveLength(12);
    expect(studentsByGroup("nazorat")).toHaveLength(12);
  });

  it("identifikatorlar takrorlanmaydi", () => {
    const ids = new Set(DEMO_TALABALAR.map((s) => s.id));
    expect(ids.size).toBe(DEMO_TALABALAR.length);
  });

  it("barcha ballar 0–100 oralig'ida", () => {
    for (const s of DEMO_TALABALAR) {
      for (const area of DIAGNOSTIKA_YONALISHLARI) {
        expect(s.baseline[area]).toBeGreaterThanOrEqual(0);
        expect(s.baseline[area]).toBeLessThanOrEqual(100);
        expect(s.final[area]).toBeGreaterThanOrEqual(0);
        expect(s.final[area]).toBeLessThanOrEqual(100);
      }
    }
  });

  it("boshlang'ich darajada guruhlar yaqin (tajriba to'g'ri qo'yilgan)", () => {
    const t = ortacha(studentsByGroup("tajriba").map((s) => overallScore(s.baseline)));
    const n = ortacha(studentsByGroup("nazorat").map((s) => overallScore(s.baseline)));
    expect(Math.abs(t - n)).toBeLessThan(5);
  });

  it("ikkala guruhda ham o'sish bor", () => {
    for (const g of ["tajriba", "nazorat"] as const) {
      const oldin = ortacha(studentsByGroup(g).map((s) => overallScore(s.baseline)));
      const keyin = ortacha(studentsByGroup(g).map((s) => overallScore(s.final)));
      expect(keyin).toBeGreaterThan(oldin);
    }
  });

  it("tajriba guruhidagi o'sish nazoratdan sezilarli katta", () => {
    const osish = (g: "tajriba" | "nazorat") =>
      ortacha(studentsByGroup(g).map((s) => overallScore(s.final) - overallScore(s.baseline)));
    expect(osish("tajriba")).toBeGreaterThan(osish("nazorat") + 5);
  });

  it("generator deterministik — qayta import qilinganda bir xil", async () => {
    const qayta = await import("@/content/demo-students");
    expect(qayta.DEMO_TALABALAR[0].baseline).toEqual(DEMO_TALABALAR[0].baseline);
  });

  it("areaSeries guruh hajmiga teng qator qaytaradi", () => {
    expect(areaSeries("tajriba", "nazariya", "baseline")).toHaveLength(12);
  });
});
