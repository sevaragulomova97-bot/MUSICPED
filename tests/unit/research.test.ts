import { describe, expect, it } from "vitest";
import {
  analyzeResearch,
  dynamicsRows,
  growthRows,
  MIN_GURUH_HAJMI,
  type Subject,
  toSubject,
} from "@/lib/research";
import { DEMO_TALABALAR } from "@/content/demo-students";
import { emptyAreaScores, type AreaScores } from "@/lib/domain/types";

/** Demo talabalar deterministik — ular tahlil uchun tayyor manba. */
const DEMO: Subject[] = DEMO_TALABALAR.map((s) => ({
  id: s.id,
  fullName: s.fullName,
  group: s.group,
  experimentGroup: s.experimentGroup,
  baseline: s.baseline,
  final: s.final,
  demo: true,
}));

function subject(
  id: string,
  group: "tajriba" | "nazorat",
  baseline: number,
  final: number,
): Subject {
  return {
    id,
    fullName: `Talaba ${id}`,
    experimentGroup: group,
    baseline: emptyAreaScores(baseline),
    final: emptyAreaScores(final),
  };
}

describe("tajriba-sinov tahlili", () => {
  const tahlil = analyzeResearch(DEMO);

  it("guruhlar soni to'g'ri aniqlanadi", () => {
    expect(tahlil.counts.tajriba).toBe(12);
    expect(tahlil.counts.nazorat).toBe(12);
  });

  it("tajriba boshida guruhlar bir xil (to'g'ri qo'yilgan tajriba belgisi)", () => {
    // Demo ma'lumot shunday generatsiya qilingan: boshlang'ich daraja o'xshash.
    expect(tahlil.homogeneity.homogeneous).toBe(true);
    expect(tahlil.homogeneity.ttest.p).toBeGreaterThan(0.05);
  });

  it("yakunda tajriba guruhi nazoratdan yuqori va farq ahamiyatli", () => {
    expect(tahlil.overall.tajriba.final.mean).toBeGreaterThan(
      tahlil.overall.nazorat.final.mean,
    );
    expect(tahlil.overall.ttest.p).toBeLessThan(0.05);
  });

  it("t-mezon va Mann–Uitni bir xil xulosaga olib keladi", () => {
    expect(tahlil.overall.mann.p < 0.05).toBe(tahlil.overall.ttest.p < 0.05);
  });

  it("8 ta yo'nalish bo'yicha ham solishtiradi", () => {
    expect(tahlil.areas).toHaveLength(8);
    for (const a of tahlil.areas) {
      expect(a.label.length).toBeGreaterThan(0);
      expect(Number.isFinite(a.ttest.p)).toBe(true);
    }
  });

  it("ikki guruh ham o'sadi, lekin tajriba guruhi kuchliroq", () => {
    expect(tahlil.overall.tajriba.osish).toBeGreaterThan(0);
    expect(tahlil.overall.nazorat.osish).toBeGreaterThan(0);
    expect(tahlil.overall.tajriba.osish).toBeGreaterThan(tahlil.overall.nazorat.osish);
  });

  it("guruh ichidagi o'sish juftlashgan mezon bilan tekshiriladi", () => {
    expect(tahlil.within.tajriba.ttest.method).toBe("paired");
    expect(tahlil.within.tajriba.ttest.p).toBeLessThan(0.001);
    expect(tahlil.within.nazorat.ttest.p).toBeLessThan(0.001);
  });

  it("daraja taqsimoti 2×3 jadval beradi", () => {
    expect(tahlil.levels.final.observed).toHaveLength(2);
    expect(tahlil.levels.final.observed[0]).toHaveLength(3);
    // Har bir qatordagi yig'indi guruh hajmiga teng.
    expect(tahlil.levels.final.observed[0].reduce((s, v) => s + v, 0)).toBe(12);
  });

  it("namunaviy ma'lumot ishlatilgani ogohlantirish sifatida aytiladi", () => {
    expect(tahlil.hasDemo).toBe(true);
    expect(tahlil.warnings.join(" ")).toContain("namunaviy");
  });
});

describe("ogohlantirishlar", () => {
  it("guruh kichik bo'lsa ogohlantiradi", () => {
    const kichik = [
      subject("a", "tajriba", 50, 70),
      subject("b", "tajriba", 52, 72),
      subject("c", "nazorat", 51, 58),
      subject("d", "nazorat", 49, 56),
    ];
    const t = analyzeResearch(kichik);
    expect(t.warnings.join(" ")).toContain(String(MIN_GURUH_HAJMI));
  });

  it("boshida guruhlar farq qilsa ogohlantiradi", () => {
    const nomutanosib: Subject[] = [
      ...Array.from({ length: 8 }, (_, i) => subject(`t${i}`, "tajriba", 70 + (i % 3), 85)),
      ...Array.from({ length: 8 }, (_, i) => subject(`n${i}`, "nazorat", 40 + (i % 3), 50)),
    ];
    const t = analyzeResearch(nomutanosib);
    expect(t.homogeneity.homogeneous).toBe(false);
    expect(t.warnings.join(" ")).toContain("faqat metodika bilan tushuntirib bo'lmaydi");
  });

  it("bo'sh ro'yxatda ham yiqilmaydi", () => {
    const t = analyzeResearch([]);
    expect(t.counts.tajriba).toBe(0);
    expect(Number.isNaN(t.overall.ttest.p)).toBe(true);
    expect(t.warnings.length).toBeGreaterThan(0);
  });

  it("bitta guruh bo'lmasa ham yiqilmaydi", () => {
    const t = analyzeResearch([subject("a", "tajriba", 50, 70), subject("b", "tajriba", 55, 75)]);
    expect(t.counts.nazorat).toBe(0);
    expect(Number.isNaN(t.overall.ttest.p)).toBe(true);
  });
});

describe("grafik qatorlari", () => {
  it("dinamika ikki nuqtadan iborat", () => {
    const rows = dynamicsRows(analyzeResearch(DEMO));
    expect(rows).toHaveLength(2);
    expect(rows[0].label).toBe("Boshlang'ich");
    expect(rows[1].label).toBe("Yakuniy");
    expect(rows[1].tajriba).toBeGreaterThan(rows[0].tajriba);
  });

  it("o'sish qatorlari 8 yo'nalish bo'yicha", () => {
    const rows = growthRows(analyzeResearch(DEMO));
    expect(rows).toHaveLength(8);
    for (const r of rows) expect(Number.isFinite(r.tajriba)).toBe(true);
  });

  it("bo'sh tahlilda grafik qatori nol beradi, NaN emas", () => {
    const rows = dynamicsRows(analyzeResearch([]));
    expect(rows.every((r) => Number.isFinite(r.tajriba) && Number.isFinite(r.nazorat))).toBe(true);
  });
});

describe("diagnostikalardan ishtirokchi qurish", () => {
  const scores = (v: number): AreaScores => emptyAreaScores(v);

  it("boshlang'ich va yakuniy diagnostikadan quradi", () => {
    const s = toSubject({
      id: "u1",
      fullName: "Talaba",
      experimentGroup: "tajriba",
      diagnostics: [
        { kind: "boshlangich", scores: scores(50), completedAt: "2026-01-01T00:00:00.000Z" },
        { kind: "yakuniy", scores: scores(75), completedAt: "2026-05-01T00:00:00.000Z" },
      ],
    });
    expect(s).not.toBeNull();
    expect(s?.baseline.nazariya).toBe(50);
    expect(s?.final.nazariya).toBe(75);
  });

  it("yakuniy yo'q bo'lsa oxirgi oraliqni oladi", () => {
    const s = toSubject({
      id: "u2",
      fullName: "Talaba",
      experimentGroup: "nazorat",
      diagnostics: [
        { kind: "boshlangich", scores: scores(50), completedAt: "2026-01-01T00:00:00.000Z" },
        { kind: "oraliq", scores: scores(60), completedAt: "2026-03-01T00:00:00.000Z" },
        { kind: "oraliq", scores: scores(68), completedAt: "2026-04-01T00:00:00.000Z" },
      ],
    });
    expect(s?.final.nazariya).toBe(68);
  });

  it("tajriba guruhi ko'rsatilmagan talaba tahlilga kirmaydi", () => {
    const s = toSubject({
      id: "u3",
      fullName: "Talaba",
      diagnostics: [
        { kind: "boshlangich", scores: scores(50), completedAt: "2026-01-01T00:00:00.000Z" },
        { kind: "yakuniy", scores: scores(70), completedAt: "2026-05-01T00:00:00.000Z" },
      ],
    });
    expect(s).toBeNull();
  });

  it("faqat bitta o'lchovi bor talaba tahlilga kirmaydi", () => {
    const s = toSubject({
      id: "u4",
      fullName: "Talaba",
      experimentGroup: "tajriba",
      diagnostics: [
        { kind: "boshlangich", scores: scores(50), completedAt: "2026-01-01T00:00:00.000Z" },
      ],
    });
    // «O'sish» ikkita o'lchovsiz ma'nosiz — shuning uchun null.
    expect(s).toBeNull();
  });
});
