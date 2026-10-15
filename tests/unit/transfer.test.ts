import { describe, expect, it } from "vitest";
import {
  bundleFileName,
  parseBundle,
  summarizeBundle,
  TRANSFER_APP,
  TRANSFER_VERSION,
  type GradeBundle,
  type TransferBundle,
} from "@/lib/transfer";
import { DIAGNOSTIKA_YONALISHLARI, emptyAreaScores } from "@/lib/domain/types";

function scores(fill = 60) {
  return emptyAreaScores(fill);
}

const TOLIQ: TransferBundle = {
  app: TRANSFER_APP,
  version: TRANSFER_VERSION,
  kind: "natijalar",
  exportedAt: "2026-05-20T10:00:00.000Z",
  profile: {
    id: "talaba-01",
    fullName: "Sevaraxon Egamnazarova",
    role: "TALABA",
    group: "MT-24",
    experimentGroup: "tajriba",
  },
  diagnostics: [
    { id: "d1", kind: "boshlangich", scores: scores(52), overall: 52, completedAt: "2026-01-10T09:00:00.000Z" },
    { id: "d2", kind: "yakuniy", scores: scores(74), overall: 74, completedAt: "2026-05-10T09:00:00.000Z" },
  ],
  progress: [
    { lessonId: "l1", courseSlug: "musiqa-nazariyasi", percent: 100, completedAt: "2026-02-01T09:00:00.000Z" },
    { lessonId: "l2", courseSlug: "musiqa-nazariyasi", percent: 40 },
  ],
  submissions: [
    {
      id: "s1", taskId: "nota-savodi-test", taskType: "test", area: "nazariya",
      bloom: "bilish", score: 85, submittedAt: "2026-02-02T09:00:00.000Z", gradedAt: "2026-02-02T09:00:00.000Z",
    },
    {
      id: "s2", taskId: "dars-ishlanmasi", taskType: "loyiha", area: "metodika",
      bloom: "sintez", submittedAt: "2026-03-02T09:00:00.000Z",
    },
  ],
  reflections: [
    { contextId: "l1", question: "Nima o'rgandingiz?", answer: "Interval turlarini", createdAt: "2026-02-01T09:05:00.000Z" },
  ],
  portfolio: [
    { id: "p1", category: "ijodiy", title: "Dutor improvizatsiyasi", createdAt: "2026-03-01T09:00:00.000Z" },
  ],
};

describe("eksport faylini o'qish", () => {
  it("to'liq va to'g'ri faylni qabul qiladi", () => {
    const r = parseBundle(JSON.stringify(TOLIQ));
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.value.kind).toBe("natijalar");
    if (r.value.kind !== "natijalar") return;
    expect(r.value.profile.fullName).toBe("Sevaraxon Egamnazarova");
    expect(r.value.diagnostics).toHaveLength(2);
    expect(r.value.submissions).toHaveLength(2);
  });

  it("baholanmagan ish `undefined` bo'lib qoladi, nolga aylanmaydi", () => {
    const r = parseBundle(JSON.stringify(TOLIQ));
    if (!r.ok || r.value.kind !== "natijalar") throw new Error("kutilmagan");
    const baholanmagan = r.value.submissions.find((s) => s.id === "s2");
    expect(baholanmagan?.score).toBeUndefined();
  });

  it("JSON buzilgan bo'lsa aniq xato beradi", () => {
    const r = parseBundle("{bu json emas");
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.error).toContain("JSON");
  });

  it("boshqa dasturning faylini rad etadi", () => {
    const r = parseBundle(JSON.stringify({ app: "boshqa-dastur", version: 1 }));
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.error).toContain("MusicPed");
  });

  it("kelajak versiyasini rad etadi va sababini aytadi", () => {
    const r = parseBundle(JSON.stringify({ ...TOLIQ, version: TRANSFER_VERSION + 5 }));
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.error).toContain("yangiroq");
  });

  it("versiya yo'q bo'lsa rad etadi", () => {
    const r = parseBundle(JSON.stringify({ app: TRANSFER_APP, kind: "natijalar" }));
    expect(r.ok).toBe(false);
  });

  it("tanilmagan tur uchun aniq xato beradi", () => {
    const r = parseBundle(JSON.stringify({ app: TRANSFER_APP, version: 1, kind: "nimadir" }));
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.error).toContain("tanilmadi");
  });

  it("ismsiz profilni rad etadi", () => {
    const r = parseBundle(
      JSON.stringify({ ...TOLIQ, profile: { id: "x", fullName: "   ", role: "TALABA" } }),
    );
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.error).toContain("ism");
  });

  it("buzuq qatorni tashlab, qolganini o'qiydi", () => {
    const yarim = {
      ...TOLIQ,
      submissions: [
        TOLIQ.submissions[0],
        { id: "yomon" }, // `taskId` va `submittedAt` yo'q
        TOLIQ.submissions[1],
      ],
      progress: [TOLIQ.progress[0], { lessonId: "l9" }], // `courseSlug` yo'q
    };
    const r = parseBundle(JSON.stringify(yarim));
    expect(r.ok).toBe(true);
    if (!r.ok || r.value.kind !== "natijalar") return;
    // Bitta buzuq qator butun faylni yo'qotmaydi.
    expect(r.value.submissions).toHaveLength(2);
    expect(r.value.progress).toHaveLength(1);
  });

  it("yo'nalishi to'liq bo'lmagan diagnostikani rad etadi", () => {
    const notoliq = { ...scores(60) } as Record<string, number>;
    delete notoliq[DIAGNOSTIKA_YONALISHLARI[3]];
    const r = parseBundle(
      JSON.stringify({ ...TOLIQ, diagnostics: [{ id: "d", kind: "boshlangich", scores: notoliq, overall: 60, completedAt: "2026-01-01T00:00:00.000Z" }] }),
    );
    expect(r.ok).toBe(true);
    if (!r.ok || r.value.kind !== "natijalar") return;
    // Yarim o'lchov grafikni buzadi — shuning uchun butun diagnostika tashlanadi.
    expect(r.value.diagnostics).toHaveLength(0);
  });

  it("chegaradan chiqqan ballni 0–100 oralig'iga qaytaradi", () => {
    const r = parseBundle(
      JSON.stringify({
        ...TOLIQ,
        progress: [{ lessonId: "l1", courseSlug: "k", percent: 540 }],
        submissions: [{ ...TOLIQ.submissions[0], score: -20 }],
      }),
    );
    if (!r.ok || r.value.kind !== "natijalar") throw new Error("kutilmagan");
    expect(r.value.progress[0].percent).toBe(100);
    expect(r.value.submissions[0].score).toBe(0);
  });

  it("obyektni ham, matnni ham qabul qiladi", () => {
    expect(parseBundle(TOLIQ).ok).toBe(true);
    expect(parseBundle(JSON.stringify(TOLIQ)).ok).toBe(true);
  });
});

describe("baholar faylini o'qish", () => {
  const BAHOLAR: GradeBundle = {
    app: TRANSFER_APP,
    version: TRANSFER_VERSION,
    kind: "baholar",
    issuedAt: "2026-05-21T10:00:00.000Z",
    teacherName: "D. Yo'ldosheva",
    studentId: "talaba-01",
    studentName: "Sevaraxon Egamnazarova",
    grades: [
      { submissionId: "s2", taskId: "dars-ishlanmasi", score: 82, comment: "Yaxshi tuzilgan", gradedAt: "2026-05-21T10:00:00.000Z" },
    ],
  };

  it("to'g'ri faylni qabul qiladi", () => {
    const r = parseBundle(JSON.stringify(BAHOLAR));
    expect(r.ok).toBe(true);
    if (!r.ok || r.value.kind !== "baholar") return;
    expect(r.value.grades).toHaveLength(1);
    expect(r.value.grades[0].score).toBe(82);
  });

  it("talaba identifikatorisiz faylni rad etadi", () => {
    const r = parseBundle(JSON.stringify({ ...BAHOLAR, studentId: "" }));
    expect(r.ok).toBe(false);
  });

  it("bo'sh baholar ro'yxatini rad etadi", () => {
    const r = parseBundle(JSON.stringify({ ...BAHOLAR, grades: [] }));
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.error).toContain("bitta ham");
  });

  it("ballsiz qatorni tashlaydi", () => {
    const r = parseBundle(
      JSON.stringify({
        ...BAHOLAR,
        grades: [{ submissionId: "s1" }, BAHOLAR.grades[0]],
      }),
    );
    expect(r.ok).toBe(true);
    if (!r.ok || r.value.kind !== "baholar") return;
    expect(r.value.grades).toHaveLength(1);
  });
});

describe("fayl haqida qisqa ma'lumot", () => {
  it("natijalar faylini sanab beradi", () => {
    const s = summarizeBundle(TOLIQ);
    expect(s.title).toBe("Sevaraxon Egamnazarova");
    expect(s.lines.join(" ")).toContain("2 ta diagnostika");
    expect(s.lines.join(" ")).toContain("1 ta yakunlangan dars");
  });

  it("fayl nomi lotin harf, raqam va chiziqchadan iborat", () => {
    const nom = bundleFileName(TOLIQ);
    expect(nom).toBe("natijalar-sevaraxon-egamnazarova-2026-05-20.json");
    expect(nom).toMatch(/^[a-z0-9.-]+$/);
  });

  it("apostrofli ismda ham xavfsiz nom beradi", () => {
    const nom = bundleFileName({
      ...TOLIQ,
      profile: { ...TOLIQ.profile, fullName: "Dilnoza Yo'ldosheva" },
    });
    expect(nom).toMatch(/^[a-z0-9.-]+$/);
    expect(nom).toContain("yoldosheva");
  });
});
