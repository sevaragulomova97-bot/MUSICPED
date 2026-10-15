import { describe, expect, it } from "vitest";
import {
  buildGradeBundle,
  buildGradingQueue,
  datasetsToSubjects,
  demoBundle,
  isPending,
  JAMI_DARS,
  overview,
  pendingCount,
} from "@/lib/teacher";
import type { StoredDataset } from "@/lib/db/schema";
import { DEMO_TALABALAR } from "@/content/demo-students";
import { emptyAreaScores } from "@/lib/domain/types";
import { TRANSFER_APP, TRANSFER_VERSION, type TransferBundle } from "@/lib/transfer";

function dataset(
  id: string,
  over: Partial<TransferBundle> = {},
  meta: Partial<StoredDataset> = {},
): StoredDataset {
  const bundle: TransferBundle = {
    app: TRANSFER_APP,
    version: TRANSFER_VERSION,
    kind: "natijalar",
    exportedAt: "2026-05-01T09:00:00.000Z",
    profile: { id, fullName: `Talaba ${id}`, role: "TALABA", group: "MT-24", experimentGroup: "tajriba" },
    diagnostics: [],
    progress: [],
    submissions: [],
    reflections: [],
    portfolio: [],
    ...over,
  };

  return {
    id: `oqituvchi:${id}`,
    ownerId: "oqituvchi",
    studentId: id,
    studentName: bundle.profile.fullName,
    group: bundle.profile.group,
    experimentGroup: bundle.profile.experimentGroup,
    bundle,
    importedAt: "2026-05-02T09:00:00.000Z",
    ...meta,
  };
}

const ISH = {
  id: "s1",
  taskId: "task-dars-ishlanma",
  taskType: "loyiha",
  area: "metodika" as const,
  bloom: "sintez",
  submittedAt: "2026-03-01T09:00:00.000Z",
};

describe("baho kutayotgan ishni aniqlash", () => {
  it("ballsiz ish kutayotgan hisoblanadi", () => {
    expect(isPending({ score: undefined })).toBe(true);
  });

  it("`-1` ham kutayotgan hisoblanadi (B4 kelishuvi)", () => {
    expect(isPending({ score: -1 })).toBe(true);
  });

  it("nol ball — bu baho, kutish emas", () => {
    expect(isPending({ score: 0 })).toBe(false);
    expect(isPending({ score: 85 })).toBe(false);
  });
});

describe("talaba haqida qisqa ko'rinish", () => {
  const d = dataset("t1", {
    progress: [
      { lessonId: "l1", courseSlug: "k", percent: 100, completedAt: "2026-02-01T09:00:00.000Z" },
      { lessonId: "l2", courseSlug: "k", percent: 100, completedAt: "2026-02-02T09:00:00.000Z" },
      { lessonId: "l3", courseSlug: "k", percent: 55 },
    ],
    submissions: [
      { ...ISH, id: "s1", score: 80, gradedAt: "2026-03-02T09:00:00.000Z" },
      { ...ISH, id: "s2", score: 60, gradedAt: "2026-03-03T09:00:00.000Z" },
      { ...ISH, id: "s3" },
      { ...ISH, id: "s4", score: -1 },
    ],
    reflections: [{ contextId: "l1", question: "q", answer: "a", createdAt: "2026-02-01T09:10:00.000Z" }],
    diagnostics: [
      { id: "d1", kind: "boshlangich", scores: emptyAreaScores(50), overall: 50, completedAt: "2026-01-10T09:00:00.000Z" },
      { id: "d2", kind: "yakuniy", scores: emptyAreaScores(76), overall: 76, completedAt: "2026-05-10T09:00:00.000Z" },
    ],
  });

  it("yakunlangan darslarni sanaydi", () => {
    const o = overview(d);
    expect(o.completedLessons).toBe(2);
    expect(o.totalLessons).toBe(JAMI_DARS);
    expect(JAMI_DARS).toBeGreaterThan(0);
  });

  it("o'rtacha ballga faqat baholangan ishlar kiradi", () => {
    // 80 va 60 → 70. Baholanmaganlar (undefined, −1) o'rtachani pasaytirmaydi.
    expect(overview(d).averageScore).toBe(70);
  });

  it("baho kutayotgan ishlar soni to'g'ri", () => {
    expect(overview(d).pendingCount).toBe(2);
  });

  it("boshlang'ich va oxirgi diagnostika ballari ajratiladi", () => {
    const o = overview(d);
    expect(o.baselineOverall).toBe(50);
    expect(o.latestOverall).toBe(76);
  });

  it("ma'lumot bo'lmasa null qaytaradi, nol emas", () => {
    const bosh = overview(dataset("t2"));
    expect(bosh.averageScore).toBeNull();
    expect(bosh.latestOverall).toBeNull();
    expect(bosh.completedLessons).toBe(0);
  });
});

describe("baholash navbati", () => {
  const datasets = [
    dataset("t1", {
      submissions: [
        { ...ISH, id: "s-eski" , submittedAt: "2026-01-05T09:00:00.000Z" },
        { ...ISH, id: "s-baholangan", score: 90, submittedAt: "2026-02-05T09:00:00.000Z", gradedAt: "2026-02-06T09:00:00.000Z" },
      ],
    }),
    dataset("t2", {
      submissions: [{ ...ISH, id: "s-yangi", submittedAt: "2026-04-05T09:00:00.000Z" }],
    }),
  ];

  it("kutayotganlar birinchi, eng eskisi boshida", () => {
    const q = buildGradingQueue(datasets);
    expect(q.map((i) => i.submission.id)).toEqual(["s-eski", "s-yangi", "s-baholangan"]);
  });

  it("faqat kutayotganlarni ajratib beradi", () => {
    const q = buildGradingQueue(datasets, { onlyPending: true });
    expect(q).toHaveLength(2);
    expect(q.every((i) => i.pending)).toBe(true);
    expect(pendingCount(datasets)).toBe(2);
  });

  it("topshiriq nomi va rubrikasi topshiriqlar bankidan olinadi", () => {
    const q = buildGradingQueue(datasets);
    const item = q[0];
    expect(item.taskTitle).not.toBe(item.submission.taskId);
    expect(item.rubricCriteria.length).toBeGreaterThan(0);
  });

  it("notanish topshiriq ham ro'yxatdan tushmaydi", () => {
    const q = buildGradingQueue([
      dataset("t3", { submissions: [{ ...ISH, id: "s9", taskId: "yoq-bunday-topshiriq" }] }),
    ]);
    expect(q).toHaveLength(1);
    expect(q[0].taskTitle).toBe("yoq-bunday-topshiriq");
    expect(q[0].rubricCriteria).toEqual([]);
  });

  it("kalit talaba va ish bo'yicha yagona", () => {
    const q = buildGradingQueue(datasets);
    expect(new Set(q.map((i) => i.key)).size).toBe(q.length);
  });
});

describe("baholar faylini qurish", () => {
  it("faqat baholangan ishlarni oladi", () => {
    const d = dataset("t1", {
      submissions: [
        { ...ISH, id: "s1", score: 85, gradedAt: "2026-05-01T09:00:00.000Z" },
        { ...ISH, id: "s2" },
      ],
    });
    const b = buildGradeBundle(d, "D. Yo'ldosheva");
    expect(b).not.toBeNull();
    expect(b?.grades).toHaveLength(1);
    expect(b?.grades[0].submissionId).toBe("s1");
    expect(b?.teacherName).toBe("D. Yo'ldosheva");
    expect(b?.studentId).toBe("t1");
  });

  it("hech narsa baholanmagan bo'lsa null qaytaradi (bo'sh fayl yaratmaydi)", () => {
    expect(buildGradeBundle(dataset("t1", { submissions: [{ ...ISH, id: "s1" }] }), "O")).toBeNull();
    expect(buildGradeBundle(dataset("t2"), "O")).toBeNull();
  });

  it("o'qituvchi ismi bo'sh bo'lsa standart nom qo'yiladi", () => {
    const d = dataset("t1", { submissions: [{ ...ISH, id: "s1", score: 70 }] });
    expect(buildGradeBundle(d, "")?.teacherName).toBe("O'qituvchi");
  });
});

describe("tadqiqot uchun ma'lumot tayyorlash", () => {
  it("to'liq o'lchovga ega talabalar tahlilga kiradi", () => {
    const toliq = dataset("t1", {
      diagnostics: [
        { id: "d1", kind: "boshlangich", scores: emptyAreaScores(50), overall: 50, completedAt: "2026-01-01T00:00:00.000Z" },
        { id: "d2", kind: "yakuniy", scores: emptyAreaScores(75), overall: 75, completedAt: "2026-05-01T00:00:00.000Z" },
      ],
    });
    const { subjects, skipped } = datasetsToSubjects([toliq]);
    expect(subjects).toHaveLength(1);
    expect(skipped).toHaveLength(0);
  });

  it("chetda qolgan talaba va sababi aytiladi — jim tashlanmaydi", () => {
    const bitta = dataset("t2", {
      diagnostics: [
        { id: "d1", kind: "boshlangich", scores: emptyAreaScores(50), overall: 50, completedAt: "2026-01-01T00:00:00.000Z" },
      ],
    });
    const guruhsiz = dataset(
      "t3",
      { profile: { id: "t3", fullName: "Guruhsiz", role: "TALABA" } },
      { experimentGroup: undefined, studentName: "Guruhsiz" },
    );

    const { subjects, skipped } = datasetsToSubjects([bitta, guruhsiz]);
    expect(subjects).toHaveLength(0);
    expect(skipped).toHaveLength(2);
    expect(skipped[0].reason).toContain("diagnostikaning ikkisi");
    expect(skipped[1].reason).toContain("guruhi ko'rsatilmagan");
  });
});

describe("namunaviy ma'lumot paketi", () => {
  const demo = demoBundle(DEMO_TALABALAR[0]);

  it("haqiqiy eksport formatiga to'liq mos", () => {
    expect(demo.app).toBe(TRANSFER_APP);
    expect(demo.kind).toBe("natijalar");
    expect(demo.diagnostics).toHaveLength(2);
    expect(demo.diagnostics[0].kind).toBe("boshlangich");
    expect(demo.diagnostics[1].kind).toBe("yakuniy");
  });

  it("demo belgisi saqlanadi", () => {
    expect(demo.profile.demo).toBe(true);
  });

  it("deterministik — ikki chaqiruv bir xil natija beradi", () => {
    expect(JSON.stringify(demoBundle(DEMO_TALABALAR[0]))).toBe(JSON.stringify(demo));
  });

  it("demo paketlardan tahlil quriladi", () => {
    const datasets = DEMO_TALABALAR.map((s) => {
      const bundle = demoBundle(s);
      return {
        id: `o:${s.id}`,
        ownerId: "o",
        studentId: s.id,
        studentName: s.fullName,
        group: s.group,
        experimentGroup: s.experimentGroup,
        bundle,
        importedAt: "2026-05-02T09:00:00.000Z",
      } satisfies StoredDataset;
    });

    const { subjects, skipped } = datasetsToSubjects(datasets);
    expect(subjects).toHaveLength(24);
    expect(skipped).toHaveLength(0);
    expect(subjects.every((s) => s.demo)).toBe(true);
  });
});
