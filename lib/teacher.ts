/**
 * O'qituvchi kabinetining mantiqi.
 *
 * Yana sof funksiyalar: kirishga import qilingan fayllar, chiqishga ro'yxatlar,
 * baholash navbati va qaytariladigan baholar fayli. Hech qanday React yoki
 * IndexedDB yo'q — shuning uchun hammasi test bilan qoplanadi.
 */

import { TOPSHIRIQ_BY_ID } from "@/content/tasks";
import { KURSLAR } from "@/content/courses";
import type { StoredDataset } from "@/lib/db/schema";
import {
  type AreaScores,
  type ExperimentGroup,
  overallScore,
} from "@/lib/domain/types";
import { type Subject, toSubject } from "@/lib/research";
import {
  type GradeBundle,
  TRANSFER_APP,
  TRANSFER_VERSION,
  type TransferBundle,
  type TransferSubmission,
} from "@/lib/transfer";

/* ─────────────────────── Talaba haqida qisqa ko'rinish ─────────────────────── */

export type StudentOverview = {
  studentId: string;
  fullName: string;
  group?: string;
  experimentGroup?: ExperimentGroup;
  /** Yakunlangan darslar soni */
  completedLessons: number;
  totalLessons: number;
  /** Baholangan ishlarning o'rtacha bali (baholanmaganlar hisobga olinmaydi) */
  averageScore: number | null;
  /** Baho kutayotgan ishlar soni */
  pendingCount: number;
  submissionCount: number;
  reflectionCount: number;
  /** Oxirgi diagnostika bali */
  latestOverall: number | null;
  /** Boshlang'ich diagnostika bali */
  baselineOverall: number | null;
  importedAt: string;
  demo?: boolean;
};

/** Platformadagi barcha darslar soni — «yakunlangan / jami» ko'rsatish uchun. */
export const JAMI_DARS = KURSLAR.reduce((sum, k) => sum + k.lessons.length, 0);

/** Baho kutayotgan ish: ball yo'q yoki `-1` (B4 kelishuvi). */
export function isPending(s: Pick<TransferSubmission, "score">): boolean {
  return s.score === undefined || s.score < 0;
}

function averageOf(values: readonly number[]): number | null {
  if (!values.length) return null;
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}

export function overview(dataset: StoredDataset): StudentOverview {
  const b = dataset.bundle;
  const graded = b.submissions.filter((s) => !isPending(s)).map((s) => s.score as number);

  const diagnostics = [...b.diagnostics].sort((x, y) =>
    x.completedAt.localeCompare(y.completedAt),
  );
  const baseline = diagnostics.find((d) => d.kind === "boshlangich") ?? diagnostics[0];
  const latest = diagnostics[diagnostics.length - 1];

  return {
    studentId: dataset.studentId,
    fullName: dataset.studentName,
    group: dataset.group,
    experimentGroup: dataset.experimentGroup,
    completedLessons: b.progress.filter((p) => p.percent >= 100).length,
    totalLessons: JAMI_DARS,
    averageScore: averageOf(graded),
    pendingCount: b.submissions.filter(isPending).length,
    submissionCount: b.submissions.length,
    reflectionCount: b.reflections.length,
    latestOverall: latest ? latest.overall || overallScore(latest.scores) : null,
    baselineOverall: baseline ? baseline.overall || overallScore(baseline.scores) : null,
    importedAt: dataset.importedAt,
    demo: b.profile.demo,
  };
}

/* ─────────────────────────── Baholash navbati ─────────────────────────── */

export type GradingItem = {
  /** `${studentId}:${submissionId}` — ro'yxatda yagona kalit */
  key: string;
  studentId: string;
  studentName: string;
  submission: TransferSubmission;
  /** Topshiriq topilmasa ham ish ko'rsatiladi — faqat nomi `taskId` bo'ladi */
  taskTitle: string;
  /** O'qituvchi shu rubrika bo'yicha baholaydi */
  rubricCriteria: Array<{ id: string; title: string; description: string; maxPoints: number }>;
  pending: boolean;
};

/**
 * Baholash navbatini quradi.
 *
 * Tartib: avval baho kutayotganlar (eng eskisi birinchi — navbat adolatli
 * bo'lsin), keyin baholanganlar (eng yangisi birinchi).
 */
export function buildGradingQueue(
  datasets: readonly StoredDataset[],
  options: { onlyPending?: boolean } = {},
): GradingItem[] {
  const items: GradingItem[] = [];

  for (const dataset of datasets) {
    for (const submission of dataset.bundle.submissions) {
      const pending = isPending(submission);
      if (options.onlyPending && !pending) continue;

      const task = TOPSHIRIQ_BY_ID.get(submission.taskId);
      items.push({
        key: `${dataset.studentId}:${submission.id}`,
        studentId: dataset.studentId,
        studentName: dataset.studentName,
        submission,
        taskTitle: task?.title ?? submission.taskId,
        rubricCriteria: task?.rubric?.criteria ?? [],
        pending,
      });
    }
  }

  return items.sort((a, b) => {
    if (a.pending !== b.pending) return a.pending ? -1 : 1;
    return a.pending
      ? a.submission.submittedAt.localeCompare(b.submission.submittedAt)
      : b.submission.submittedAt.localeCompare(a.submission.submittedAt);
  });
}

/** Avtomatik baholanadigan (test) ishlar o'qituvchini kutmaydi. */
export function pendingCount(datasets: readonly StoredDataset[]): number {
  return buildGradingQueue(datasets, { onlyPending: true }).length;
}

/* ─────────────────────── Baholar faylini qurish ─────────────────────── */

/**
 * O'qituvchi qo'ygan baholarni talabaga qaytariladigan faylga yig'adi.
 *
 * Faqat **baholangan** ishlar kiradi; baholanmaganini yuborishdan ma'no yo'q.
 * Hech narsa baholanmagan bo'lsa `null` qaytadi — interfeys shunda tugmani
 * o'chirib qo'yadi, bo'sh fayl yaratmaydi.
 */
export function buildGradeBundle(
  dataset: StoredDataset,
  teacherName: string,
): GradeBundle | null {
  const grades = dataset.bundle.submissions
    .filter((s) => !isPending(s))
    .map((s) => ({
      submissionId: s.id,
      taskId: s.taskId,
      score: s.score as number,
      comment: s.teacherComment,
      gradedAt: s.gradedAt ?? new Date().toISOString(),
    }));

  if (!grades.length) return null;

  return {
    app: TRANSFER_APP,
    version: TRANSFER_VERSION,
    kind: "baholar",
    issuedAt: new Date().toISOString(),
    teacherName: teacherName || "O'qituvchi",
    studentId: dataset.studentId,
    studentName: dataset.studentName,
    grades,
  };
}

/* ─────────────────────── Tadqiqot uchun ma'lumot ─────────────────────── */

/**
 * Import qilingan fayllardan tahlilga tayyor ishtirokchilar ro'yxatini quradi.
 *
 * Tahlilga faqat **ikki o'lchovi ham bor** va tajriba guruhi ko'rsatilgan
 * talabalar kiradi (`toSubject` qoidasi). Chetda qolganlar soni ham
 * qaytariladi — interfeys «3 talaba tahlilga kirmadi, sababi …» deb
 * aytishi kerak, jim tashlab yuborish emas.
 */
export function datasetsToSubjects(datasets: readonly StoredDataset[]): {
  subjects: Subject[];
  skipped: Array<{ fullName: string; reason: string }>;
} {
  const subjects: Subject[] = [];
  const skipped: Array<{ fullName: string; reason: string }> = [];

  for (const dataset of datasets) {
    const b = dataset.bundle;
    const subject = toSubject({
      id: dataset.studentId,
      fullName: dataset.studentName,
      group: dataset.group,
      experimentGroup: dataset.experimentGroup,
      demo: b.profile.demo,
      diagnostics: b.diagnostics.map((d) => ({
        kind: d.kind,
        scores: d.scores,
        completedAt: d.completedAt,
      })),
    });

    if (subject) {
      subjects.push(subject);
      continue;
    }

    if (!dataset.experimentGroup) {
      skipped.push({
        fullName: dataset.studentName,
        reason: "tajriba yoki nazorat guruhi ko'rsatilmagan",
      });
    } else {
      skipped.push({
        fullName: dataset.studentName,
        reason: "boshlang'ich va yakuniy diagnostikaning ikkisi ham kerak",
      });
    }
  }

  return { subjects, skipped };
}

/* ─────────────────────── Namunaviy ma'lumotdan paket ─────────────────────── */

/**
 * Demo talabani import qilingan fayl ko'rinishiga aylantiradi.
 *
 * Shu usul bilan namunaviy ma'lumot ham **xuddi haqiqiy fayl kabi** o'tadi:
 * alohida yo'l yo'q, shuning uchun demo ishlasa, haqiqiy fayl ham ishlaydi.
 * `demo: true` belgisi butun zanjir bo'ylab saqlanadi va hisobotda
 * ogohlantirish sifatida chiqadi.
 */
export function demoBundle(student: {
  id: string;
  fullName: string;
  group: string;
  experimentGroup: ExperimentGroup;
  baseline: AreaScores;
  final: AreaScores;
}): TransferBundle {
  // Sanalar qat'iy: demo ma'lumot har safar bir xil bo'lishi kerak.
  const boshi = "2026-01-15T09:00:00.000Z";
  const oxiri = "2026-05-15T09:00:00.000Z";

  return {
    app: TRANSFER_APP,
    version: TRANSFER_VERSION,
    kind: "natijalar",
    exportedAt: oxiri,
    profile: {
      id: student.id,
      fullName: student.fullName,
      role: "TALABA",
      group: student.group,
      experimentGroup: student.experimentGroup,
      demo: true,
    },
    diagnostics: [
      {
        id: `${student.id}-boshlangich`,
        kind: "boshlangich",
        scores: student.baseline,
        overall: overallScore(student.baseline),
        completedAt: boshi,
      },
      {
        id: `${student.id}-yakuniy`,
        kind: "yakuniy",
        scores: student.final,
        overall: overallScore(student.final),
        completedAt: oxiri,
      },
    ],
    progress: [],
    submissions: [],
    reflections: [],
    portfolio: [],
  };
}
