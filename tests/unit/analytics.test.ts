import { describe, expect, it } from "vitest";
import {
  buildCards,
  buildDinamika,
  buildTaqqoslash,
  filterByPeriod,
  gradedSubmissions,
} from "@/lib/analytics";
import type { StoredDiagnostic, StoredProgress, StoredSubmission } from "@/lib/db/schema";
import { emptyAreaScores } from "@/lib/domain/types";

function sub(
  partial: Partial<StoredSubmission> & { submittedAt: string },
): StoredSubmission {
  return {
    id: Math.random().toString(36),
    userId: "u1",
    taskId: "t1",
    taskType: "test",
    area: "nazariya",
    bloom: "bilish",
    ...partial,
  } as StoredSubmission;
}

describe("gradedSubmissions", () => {
  it("baholanmagan (-1) topshiriqlarni chiqarib tashlaydi", () => {
    const rows = [
      sub({ submittedAt: "2025-09-01", score: 80 }),
      sub({ submittedAt: "2025-09-02", score: -1 }),
      sub({ submittedAt: "2025-09-03" }),
    ];
    expect(gradedSubmissions(rows)).toHaveLength(1);
  });
});

describe("buildCards", () => {
  it("bo'sh ma'lumotda nol qaytaradi", () => {
    const c = buildCards([], []);
    expect(c).toEqual({
      ortacha: 0,
      ozgarish: null,
      bajarilganTopshiriq: 0,
      oqilganDars: 0,
    });
  });

  it("o'rtacha faqat baholangan topshiriqlardan hisoblanadi", () => {
    const rows = [
      sub({ submittedAt: "2025-09-01", score: 60 }),
      sub({ submittedAt: "2025-09-02", score: 80 }),
      sub({ submittedAt: "2025-09-03", score: -1 }),
    ];
    expect(buildCards(rows, []).ortacha).toBe(70);
  });

  it("bajarilgan topshiriqlar soni baholanmaganni ham sanaydi", () => {
    const rows = [
      sub({ submittedAt: "2025-09-01", score: 60 }),
      sub({ submittedAt: "2025-09-02", score: -1 }),
    ];
    expect(buildCards(rows, []).bajarilganTopshiriq).toBe(2);
  });

  it("faqat 100% dars o'qilgan deb sanaladi", () => {
    const prog = [
      { percent: 100 },
      { percent: 60 },
      { percent: 100 },
    ] as StoredProgress[];
    expect(buildCards([], prog).oqilganDars).toBe(2);
  });

  it("o'zgarish oxirgi yarmi bilan oldingi yarmini taqqoslaydi", () => {
    const rows = [
      sub({ submittedAt: "2025-09-01", score: 50 }),
      sub({ submittedAt: "2025-09-02", score: 50 }),
      sub({ submittedAt: "2025-09-03", score: 70 }),
      sub({ submittedAt: "2025-09-04", score: 70 }),
    ];
    expect(buildCards(rows, []).ozgarish).toBe(20);
  });

  it("natija kam bo'lsa o'zgarish hisoblanmaydi", () => {
    const rows = [sub({ submittedAt: "2025-09-01", score: 50 })];
    expect(buildCards(rows, []).ozgarish).toBeNull();
  });
});

describe("buildDinamika", () => {
  it("natija yo'q bo'lsa bo'sh qator", () => {
    expect(buildDinamika([])).toEqual([]);
  });

  it("yurib boruvchi o'rtachani hisoblaydi", () => {
    const rows = [
      sub({ submittedAt: "2025-09-01T10:00:00Z", score: 60 }),
      sub({ submittedAt: "2025-09-02T10:00:00Z", score: 80 }),
    ];
    const d = buildDinamika(rows);
    expect(d).toHaveLength(2);
    expect(d[0].umumiy).toBe(60);
    expect(d[1].umumiy).toBe(70);
  });

  it("yo'nalishlarni guruhga bog'laydi", () => {
    const rows = [
      sub({ submittedAt: "2025-09-01T10:00:00Z", score: 90, area: "nazariya" }),
      sub({ submittedAt: "2025-09-02T10:00:00Z", score: 50, area: "texnika" }),
    ];
    const d = buildDinamika(rows);
    expect(d[1].nazariya).toBe(90);
    expect(d[1].ijro).toBe(50);
  });

  it("bir kundagi bir nechta natija bitta nuqtaga yig'iladi", () => {
    const rows = [
      sub({ submittedAt: "2025-09-01T09:00:00Z", score: 60 }),
      sub({ submittedAt: "2025-09-01T18:00:00Z", score: 80 }),
    ];
    const d = buildDinamika(rows);
    expect(d).toHaveLength(1);
    expect(d[0].umumiy).toBe(70);
  });
});

describe("buildTaqqoslash", () => {
  const diag = (date: string, nazariya: number): StoredDiagnostic =>
    ({
      id: date,
      userId: "u1",
      kind: "boshlangich",
      scores: { ...emptyAreaScores(50), nazariya, eshituv: nazariya },
      profileType: "muvozanatli",
      overall: 50,
      completedAt: date,
    }) as StoredDiagnostic;

  it("diagnostika yo'q bo'lsa bo'sh", () => {
    expect(buildTaqqoslash([])).toEqual([]);
  });

  it("birinchi va oxirgi diagnostikani taqqoslaydi", () => {
    const rows = [diag("2025-09-01", 40), diag("2025-10-01", 70)];
    const t = buildTaqqoslash(rows);
    const naz = t.find((x) => x.yonalish === "nazariya")!;
    expect(naz.boshlangich).toBe(40);
    expect(naz.joriy).toBe(70);
    expect(naz.ozgarish).toBe(30);
  });

  it("tartibsiz kelgan qatorlarni sana bo'yicha tartiblaydi", () => {
    const rows = [diag("2025-10-01", 70), diag("2025-09-01", 40)];
    expect(buildTaqqoslash(rows).find((x) => x.yonalish === "nazariya")!.ozgarish).toBe(30);
  });
});

describe("filterByPeriod", () => {
  const now = Date.parse("2025-10-15T00:00:00Z");

  it("butun davr hammasini qoldiradi", () => {
    const rows = [sub({ submittedAt: "2024-01-01" }), sub({ submittedAt: "2025-10-01" })];
    expect(filterByPeriod(rows, "barcha", now)).toHaveLength(2);
  });

  it("1 oy faqat yaqin natijalarni qoldiradi", () => {
    const rows = [sub({ submittedAt: "2025-10-10" }), sub({ submittedAt: "2025-01-01" })];
    expect(filterByPeriod(rows, "1oy", now)).toHaveLength(1);
  });
});
