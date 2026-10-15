"use client";

import {
  db,
  type StoredActivity,
  type StoredDataset,
  type StoredMentorship,
  type StoredDiagnostic,
  type StoredLearningPath,
  type StoredPortfolioItem,
  type StoredProfile,
  type StoredProgress,
  type StoredRecording,
  type StoredReflection,
  type StoredSubmission,
} from "@/lib/db/schema";
import { buildLearningPath } from "@/lib/personalization";
import {
  type AreaScores,
  type BloomLevel,
  type DiagnosticArea,
  type DiagnosticKind,
  overallScore,
  type TaskType,
} from "@/lib/domain/types";
import { detectProfileType } from "@/lib/personalization";
import {
  type GradeBundle,
  TRANSFER_APP,
  TRANSFER_VERSION,
  type TransferBundle,
} from "@/lib/transfer";

/**
 * Ma'lumotlarga kirishning yagona yo'li.
 *
 * Sahifalar Dexie bilan to'g'ridan-to'g'ri ishlamaydi — faqat shu funksiyalarni
 * chaqiradi. Shu sababli saqlash usuli o'zgarsa, qolgan kod o'zgarmaydi.
 */

const now = () => new Date().toISOString();

/** Brauzerda ishlaydigan, tashqi bog'liqliksiz identifikator. */
function newId(prefix: string) {
  const rnd =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2);
  return `${prefix}-${rnd}`;
}

/* ─────────────────────────── Profillar ─────────────────────────── */

export async function upsertProfile(
  profile: Omit<StoredProfile, "createdAt" | "updatedAt"> &
    Partial<Pick<StoredProfile, "createdAt">>,
): Promise<StoredProfile> {
  const mavjud = await db().profiles.get(profile.id);
  const row: StoredProfile = {
    ...profile,
    createdAt: mavjud?.createdAt ?? profile.createdAt ?? now(),
    updatedAt: now(),
  };
  await db().profiles.put(row);
  return row;
}

export function getProfile(id: string) {
  return db().profiles.get(id);
}

export function listProfiles() {
  return db().profiles.toArray();
}

/* ────────────────────────── Diagnostika ────────────────────────── */

/**
 * Diagnostika natijasini saqlaydi va undan individual rejani darhol quradi.
 *
 * Ikkalasi bitta tranzaksiyada yoziladi: reja diagnostikasiz yoki diagnostika
 * rejasiz qolib ketmasin.
 */
export async function saveDiagnostic(
  userId: string,
  kind: DiagnosticKind,
  scores: AreaScores,
): Promise<{ diagnostic: StoredDiagnostic; path: StoredLearningPath }> {
  const database = db();
  const timestamp = now();

  const diagnostic: StoredDiagnostic = {
    id: newId("diag"),
    userId,
    kind,
    scores,
    profileType: detectProfileType(scores),
    overall: overallScore(scores),
    completedAt: timestamp,
  };

  const built = buildLearningPath({ scores });
  const path: StoredLearningPath = {
    id: newId("iry"),
    userId,
    diagnosticId: diagnostic.id,
    profileType: built.profileType,
    strengths: built.strengths,
    weaknesses: built.weaknesses,
    items: built.items,
    recommendations: built.recommendations,
    generatedAt: timestamp,
  };

  await database.transaction(
    "rw",
    database.diagnostics,
    database.learningPaths,
    database.activity,
    async () => {
      await database.diagnostics.put(diagnostic);
      await database.learningPaths.put(path);
      await database.activity.put({
        id: newId("act"),
        userId,
        type: "diagnostika",
        message: `${kind === "boshlangich" ? "Boshlang'ich" : kind === "oraliq" ? "Oraliq" : "Yakuniy"} diagnostika yakunlandi — ${diagnostic.overall}%`,
        createdAt: timestamp,
      } satisfies StoredActivity);
    },
  );

  return { diagnostic, path };
}

/** Foydalanuvchining eng so'nggi diagnostikasi. */
export async function latestDiagnostic(userId: string, kind?: DiagnosticKind) {
  const rows = await db().diagnostics.where("userId").equals(userId).toArray();
  const filtered = kind ? rows.filter((r) => r.kind === kind) : rows;
  // `completedAt` — ISO sana, shuning uchun matn sifatida taqqoslash to'g'ri ishlaydi.
  return filtered.sort((a, b) => b.completedAt.localeCompare(a.completedAt))[0];
}

export async function allDiagnostics(userId: string) {
  const rows = await db().diagnostics.where("userId").equals(userId).toArray();
  return rows.sort((a, b) => a.completedAt.localeCompare(b.completedAt));
}

/* ───────────────────── Individual o'quv rejasi ───────────────────── */

export async function latestLearningPath(userId: string) {
  const rows = await db().learningPaths.where("userId").equals(userId).toArray();
  return rows.sort((a, b) => b.generatedAt.localeCompare(a.generatedAt))[0];
}

/* ───────────────────────────── Progress ───────────────────────────── */

export async function setProgress(
  userId: string,
  lessonId: string,
  courseSlug: string,
  percent: number,
) {
  const row: StoredProgress = {
    id: `${userId}:${lessonId}`,
    userId,
    lessonId,
    courseSlug,
    percent: Math.max(0, Math.min(100, Math.round(percent))),
    completedAt: percent >= 100 ? now() : undefined,
    updatedAt: now(),
  };
  await db().progress.put(row);
  return row;
}

export function courseProgress(userId: string, courseSlug: string) {
  return db().progress.where("[userId+courseSlug]").equals([userId, courseSlug]).toArray();
}

export function allProgress(userId: string) {
  return db().progress.where("userId").equals(userId).toArray();
}

/* ───────────────────────────── Faoliyat ───────────────────────────── */

export async function logActivity(userId: string, type: string, message: string) {
  const row: StoredActivity = {
    id: newId("act"),
    userId,
    type,
    message,
    createdAt: now(),
  };
  await db().activity.put(row);
  return row;
}

export async function recentActivity(userId: string, limit = 10) {
  const rows = await db().activity.where("userId").equals(userId).toArray();
  return rows
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit);
}


/* ──────────────────── Cholg'u yozuvlari va mashqlar ──────────────────── */

/**
 * Virtual cholg'udagi yozuvni saqlaydi va uni portfolioga ham qo'shadi.
 *
 * Audio fayl emas, nota hodisalari saqlanadi — bu yuzlab marta yengil va
 * qayta chalinganda aynan o'sha tembr bilan yangraydi.
 */
export async function saveRecording(
  userId: string,
  instrument: StoredRecording["instrument"],
  title: string,
  events: unknown,
  durationMs: number,
) {
  const database = db();
  const timestamp = now();

  const recording: StoredRecording = {
    id: newId("rec"),
    userId,
    instrument,
    title,
    events,
    durationMs,
    createdAt: timestamp,
  };

  const portfolioItem: StoredPortfolioItem = {
    id: newId("pf"),
    userId,
    category: "ijodiy",
    title,
    description: `${instrument} · ${(durationMs / 1000).toFixed(1)} soniya`,
    createdAt: timestamp,
  };

  await database.transaction(
    "rw",
    database.recordings,
    database.portfolio,
    database.activity,
    async () => {
      await database.recordings.put(recording);
      await database.portfolio.put(portfolioItem);
      await database.activity.put({
        id: newId("act"),
        userId,
        type: "yozuv",
        message: `${title} — yozuv portfolioga saqlandi`,
        createdAt: timestamp,
      } satisfies StoredActivity);
    },
  );

  return recording;
}

export async function listRecordings(userId: string) {
  const rows = await db().recordings.where("userId").equals(userId).toArray();
  return rows.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/** Mashq natijasini topshiriq sifatida yozadi (avtomatik baholangan). */
export async function savePracticeResult(params: {
  userId: string;
  exerciseId: string;
  area: DiagnosticArea;
  bloom: BloomLevel;
  taskType: TaskType;
  score: number;
  title: string;
  details?: Record<string, unknown>;
}) {
  const database = db();
  const timestamp = now();

  const submission: StoredSubmission = {
    id: newId("sub"),
    userId: params.userId,
    taskId: params.exerciseId,
    taskType: params.taskType,
    area: params.area,
    bloom: params.bloom,
    score: params.score,
    answers: params.details,
    submittedAt: timestamp,
    gradedAt: timestamp,
  };

  await database.transaction(
    "rw",
    database.submissions,
    database.activity,
    async () => {
      await database.submissions.put(submission);
      await database.activity.put({
        id: newId("act"),
        userId: params.userId,
        type: "mashq",
        message: `${params.title} — ${params.score}% natija`,
        createdAt: timestamp,
      } satisfies StoredActivity);
    },
  );

  return submission;
}

export async function listSubmissions(userId: string) {
  const rows = await db().submissions.where("userId").equals(userId).toArray();
  return rows.sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
}

/** Bitta mashq bo'yicha eng yaxshi natija. */
export async function bestScoreFor(userId: string, exerciseId: string) {
  const rows = await db()
    .submissions.where("[userId+taskId]")
    .equals([userId, exerciseId])
    .toArray();
  const scores = rows.map((r) => r.score).filter((s): s is number => s !== undefined);
  return scores.length ? Math.max(...scores) : undefined;
}


/* ───────────────────────────── Refleksiya ───────────────────────────── */

/**
 * Refleksiya javoblarini saqlaydi (D. Schön — reflective practitioner).
 *
 * Bitta kontekst (dars yoki topshiriq) uchun bir nechta savol bo'lishi mumkin,
 * shuning uchun identifikator savol tartibi bilan birga quriladi — qayta
 * yozilganda eski javob almashtiriladi, dublikat qolmaydi.
 */
export async function saveReflections(
  userId: string,
  contextId: string,
  answers: Array<{ question: string; answer: string }>,
) {
  const database = db();
  const timestamp = now();
  const rows: StoredReflection[] = answers.map((a, i) => ({
    id: `${userId}:${contextId}:${i}`,
    userId,
    contextId,
    question: a.question,
    answer: a.answer,
    createdAt: timestamp,
  }));

  await database.transaction("rw", database.reflections, database.activity, async () => {
    await database.reflections.bulkPut(rows);
    await database.activity.put({
      id: newId("act"),
      userId,
      type: "refleksiya",
      message: `Refleksiya yozildi (${contextId})`,
      createdAt: timestamp,
    } satisfies StoredActivity);
  });

  return rows;
}

export function reflectionsFor(userId: string, contextId: string) {
  return db().reflections.where("contextId").equals(contextId).and((r) => r.userId === userId).toArray();
}

export async function allReflections(userId: string) {
  const rows = await db().reflections.where("userId").equals(userId).toArray();
  return rows.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}


/* ───────────────────────────── Portfolio ───────────────────────────── */

/** Fayl hajmi chegarasi — IndexedDB kvotasini tugatib qo'ymaslik uchun. */
export const MAX_FILE_BYTES = 25 * 1024 * 1024;
export const MAX_PORTFOLIO_BYTES = 500 * 1024 * 1024;

export async function portfolioUsage(userId: string) {
  const rows = await db().portfolio.where("userId").equals(userId).toArray();
  return rows.reduce((sum, r) => sum + (r.sizeBytes ?? 0), 0);
}

/**
 * Portfolioga fayl qo'shadi.
 *
 * Fayl IndexedDB ichida `Blob` sifatida saqlanadi — serverga yuborilmaydi.
 * Brauzer kvotasi cheksiz emas, shuning uchun bitta fayl va umumiy hajm
 * cheklanadi; chegaradan oshsa aniq xato qaytariladi.
 */
export async function addPortfolioFile(
  userId: string,
  category: StoredPortfolioItem["category"],
  title: string,
  file: File,
  description?: string,
) {
  if (file.size > MAX_FILE_BYTES) {
    throw new Error(
      `Fayl juda katta: ${(file.size / 1048576).toFixed(1)} MB (chegara ${MAX_FILE_BYTES / 1048576} MB)`,
    );
  }
  const used = await portfolioUsage(userId);
  if (used + file.size > MAX_PORTFOLIO_BYTES) {
    throw new Error("Portfolio hajmi chegarasiga yetdi — eski fayllarni o'chiring.");
  }

  const row: StoredPortfolioItem = {
    id: newId("pf"),
    userId,
    category,
    title,
    description,
    fileName: file.name,
    mimeType: file.type || "application/octet-stream",
    blob: file,
    sizeBytes: file.size,
    createdAt: now(),
  };

  const database = db();
  await database.transaction("rw", database.portfolio, database.activity, async () => {
    await database.portfolio.put(row);
    await database.activity.put({
      id: newId("act"),
      userId,
      type: "portfolio",
      message: `${title} — portfolioga qo'shildi`,
      createdAt: row.createdAt,
    } satisfies StoredActivity);
  });

  return row;
}

export async function listPortfolio(userId: string) {
  const rows = await db().portfolio.where("userId").equals(userId).toArray();
  return rows.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function deletePortfolioItem(userId: string, id: string) {
  const row = await db().portfolio.get(id);
  if (!row || row.userId !== userId) return false;
  await db().portfolio.delete(id);
  return true;
}

/* ─────────────────────────── Tozalash ─────────────────────────── */

/** Foydalanuvchining barcha ma'lumotini o'chiradi (sozlamalardagi tugma uchun). */
export async function wipeUserData(userId: string) {
  const d = db();
  await d.transaction(
    "rw",
    [d.diagnostics, d.learningPaths, d.progress, d.submissions, d.reflections, d.recordings, d.portfolio, d.activity],
    async () => {
      for (const table of [
        d.diagnostics,
        d.learningPaths,
        d.progress,
        d.submissions,
        d.reflections,
        d.recordings,
        d.portfolio,
        d.activity,
      ]) {
        await table.where("userId").equals(userId).delete();
      }
    },
  );
}

/* ═════════════════ Eksport / import (serversiz ko'chirish) ═════════════════ */

/**
 * Foydalanuvchining barcha ma'lumotini ko'chirishga tayyor paketga yig'adi.
 *
 * Portfolio fayllarining **mazmuni** olinmaydi — faqat ro'yxati (sabab
 * `lib/transfer.ts` da yozilgan). Shu sababli fayl bir necha o'n kilobayt
 * bo'ladi va elektron pochta orqali ham yuborish mumkin.
 */
export async function exportUserData(userId: string): Promise<TransferBundle> {
  const profile = await getProfile(userId);
  if (!profile) throw new Error("Profil topilmadi — eksport qilish mumkin emas.");

  const [diagnostics, progress, submissions, reflections, portfolio] = await Promise.all([
    allDiagnostics(userId),
    allProgress(userId),
    listSubmissions(userId),
    allReflections(userId),
    listPortfolio(userId),
  ]);

  return {
    app: TRANSFER_APP,
    version: TRANSFER_VERSION,
    kind: "natijalar",
    exportedAt: now(),
    profile: {
      id: profile.id,
      fullName: profile.fullName,
      role: profile.role,
      group: profile.group,
      direction: profile.direction,
      experimentGroup: profile.experimentGroup,
      startedAt: profile.startedAt,
      demo: profile.demo,
    },
    diagnostics: diagnostics.map((d) => ({
      id: d.id,
      kind: d.kind,
      scores: d.scores,
      overall: d.overall,
      completedAt: d.completedAt,
    })),
    progress: progress.map((p) => ({
      lessonId: p.lessonId,
      courseSlug: p.courseSlug,
      percent: p.percent,
      completedAt: p.completedAt,
    })),
    submissions: submissions.map((s) => ({
      id: s.id,
      taskId: s.taskId,
      taskType: s.taskType,
      area: s.area,
      bloom: s.bloom,
      score: s.score,
      teacherComment: s.teacherComment,
      submittedAt: s.submittedAt,
      gradedAt: s.gradedAt,
    })),
    reflections: reflections.map((r) => ({
      contextId: r.contextId,
      question: r.question,
      answer: r.answer,
      createdAt: r.createdAt,
    })),
    portfolio: portfolio.map((p) => ({
      id: p.id,
      category: p.category,
      title: p.title,
      description: p.description,
      fileName: p.fileName,
      sizeBytes: p.sizeBytes,
      createdAt: p.createdAt,
    })),
  };
}

export type ImportReport = {
  diagnostics: number;
  progress: number;
  submissions: number;
  reflections: number;
  portfolio: number;
};

/**
 * Eksport faylini **joriy foydalanuvchining** ma'lumotiga qo'shadi.
 *
 * Nega `userId` fayldan emas, tashqaridan beriladi? Chunki talaba boshqa
 * kompyuterda yangi profil yaratib, o'z faylini import qilishi mumkin — bunda
 * identifikatorlar mos kelmaydi. Ma'lumot har doim **kim import qilayotgan
 * bo'lsa, o'shanga** yoziladi.
 *
 * Yozuvlar identifikatori fayl identifikatoridan qayta quriladi, shuning
 * uchun bir xil faylni ikki marta import qilish dublikat hosil qilmaydi
 * (idempotent).
 */
export async function importUserData(
  userId: string,
  bundle: TransferBundle,
): Promise<ImportReport> {
  const database = db();
  const timestamp = now();

  const diagnostics: StoredDiagnostic[] = bundle.diagnostics.map((d) => ({
    id: `${userId}:${d.id}`,
    userId,
    kind: d.kind,
    scores: d.scores,
    profileType: detectProfileType(d.scores),
    overall: d.overall || overallScore(d.scores),
    completedAt: d.completedAt,
  }));

  const progress: StoredProgress[] = bundle.progress.map((p) => ({
    id: `${userId}:${p.lessonId}`,
    userId,
    lessonId: p.lessonId,
    courseSlug: p.courseSlug,
    percent: p.percent,
    completedAt: p.completedAt,
    updatedAt: timestamp,
  }));

  const submissions: StoredSubmission[] = bundle.submissions.map((s) => ({
    id: `${userId}:${s.id}`,
    userId,
    taskId: s.taskId,
    taskType: s.taskType as StoredSubmission["taskType"],
    area: s.area,
    bloom: s.bloom as StoredSubmission["bloom"],
    score: s.score,
    teacherComment: s.teacherComment,
    submittedAt: s.submittedAt,
    gradedAt: s.gradedAt,
  }));

  const reflections: StoredReflection[] = bundle.reflections.map((r, i) => ({
    id: `${userId}:${r.contextId}:${i}`,
    userId,
    contextId: r.contextId,
    question: r.question,
    answer: r.answer,
    createdAt: r.createdAt,
  }));

  // Portfolio yozuvlari fayl mazmunisiz keladi — ro'yxat tiklanadi, fayllar yo'q.
  const portfolio: StoredPortfolioItem[] = bundle.portfolio.map((p) => ({
    id: `${userId}:${p.id}`,
    userId,
    category: p.category as StoredPortfolioItem["category"],
    title: p.title,
    description: p.description,
    fileName: p.fileName,
    sizeBytes: p.sizeBytes,
    createdAt: p.createdAt,
  }));

  await database.transaction(
    "rw",
    [
      database.diagnostics,
      database.progress,
      database.submissions,
      database.reflections,
      database.portfolio,
      database.activity,
    ],
    async () => {
      if (diagnostics.length) await database.diagnostics.bulkPut(diagnostics);
      if (progress.length) await database.progress.bulkPut(progress);
      if (submissions.length) await database.submissions.bulkPut(submissions);
      if (reflections.length) await database.reflections.bulkPut(reflections);
      if (portfolio.length) await database.portfolio.bulkPut(portfolio);
      await database.activity.put({
        id: newId("act"),
        userId,
        type: "import",
        message: `${bundle.profile.fullName} faylidan ma'lumot import qilindi`,
        createdAt: timestamp,
      } satisfies StoredActivity);
    },
  );

  // Import qilingan diagnostika asosida individual reja qaytadan quriladi.
  const latest = diagnostics.sort((a, b) => b.completedAt.localeCompare(a.completedAt))[0];
  if (latest) {
    const built = buildLearningPath({ scores: latest.scores });
    await database.learningPaths.put({
      id: `${userId}:import`,
      userId,
      diagnosticId: latest.id,
      profileType: built.profileType,
      strengths: built.strengths,
      weaknesses: built.weaknesses,
      items: built.items,
      recommendations: built.recommendations,
      generatedAt: timestamp,
    } satisfies StoredLearningPath);
  }

  return {
    diagnostics: diagnostics.length,
    progress: progress.length,
    submissions: submissions.length,
    reflections: reflections.length,
    portfolio: portfolio.length,
  };
}

/**
 * O'qituvchidan kelgan baholar faylini qo'llaydi.
 *
 * Faqat **mavjud** topshiriqlarga baho qo'yiladi: fayldagi notanish
 * identifikator jim o'tkazib yuborilmaydi, balki `skipped` sifatida
 * qaytariladi va foydalanuvchiga ko'rsatiladi.
 */
export async function applyGrades(
  userId: string,
  bundle: GradeBundle,
): Promise<{ applied: number; skipped: number }> {
  const database = db();
  let applied = 0;
  let skipped = 0;

  await database.transaction("rw", database.submissions, database.activity, async () => {
    for (const grade of bundle.grades) {
      // Eksportda identifikator `${userId}:${id}` ko'rinishiga o'tgan bo'lishi
      // mumkin, shuning uchun ikki variant ham tekshiriladi.
      const row =
        (await database.submissions.get(grade.submissionId)) ??
        (await database.submissions.get(`${userId}:${grade.submissionId}`));

      if (!row || row.userId !== userId) {
        skipped += 1;
        continue;
      }

      await database.submissions.put({
        ...row,
        score: grade.score,
        teacherComment: grade.comment,
        gradedAt: grade.gradedAt,
      });
      applied += 1;
    }

    if (applied > 0) {
      await database.activity.put({
        id: newId("act"),
        userId,
        type: "baho",
        message: `${bundle.teacherName} ${applied} ta ishga baho qo'ydi`,
        createdAt: now(),
      } satisfies StoredActivity);
    }
  });

  return { applied, skipped };
}

/* ═════════════════ O'qituvchi kabineti: import qilingan talabalar ═════════════════ */

/** O'qituvchi import qilgan talaba faylini saqlaydi (qayta import — almashtiradi). */
export async function saveDataset(
  ownerId: string,
  bundle: TransferBundle,
): Promise<StoredDataset> {
  const row: StoredDataset = {
    id: `${ownerId}:${bundle.profile.id}`,
    ownerId,
    studentId: bundle.profile.id,
    studentName: bundle.profile.fullName,
    group: bundle.profile.group,
    experimentGroup: bundle.profile.experimentGroup,
    bundle,
    importedAt: now(),
  };

  const database = db();
  await database.transaction("rw", database.datasets, database.activity, async () => {
    await database.datasets.put(row);
    await database.activity.put({
      id: newId("act"),
      userId: ownerId,
      type: "import",
      message: `${bundle.profile.fullName} — ma'lumot qabul qilindi`,
      createdAt: row.importedAt,
    } satisfies StoredActivity);
  });

  return row;
}

export async function listDatasets(ownerId: string): Promise<StoredDataset[]> {
  const rows = await db().datasets.where("ownerId").equals(ownerId).toArray();
  return rows.sort((a, b) => a.studentName.localeCompare(b.studentName, "uz"));
}

export function getDataset(ownerId: string, studentId: string) {
  return db().datasets.get(`${ownerId}:${studentId}`);
}

export async function deleteDataset(ownerId: string, studentId: string) {
  const id = `${ownerId}:${studentId}`;
  const row = await db().datasets.get(id);
  if (!row || row.ownerId !== ownerId) return false;
  await db().datasets.delete(id);
  return true;
}

/**
 * O'qituvchi qo'ygan bahoni import qilingan ma'lumotga yozadi.
 *
 * Baho talabaning o'z bazasiga emas, o'qituvchi nusxasiga yoziladi — keyin u
 * `baholar.json` sifatida eksport qilinadi va talaba o'zi import qiladi.
 * Shu sababli bitta manba qoidasi buzilmaydi: o'qituvchi nusxasi
 * o'qituvchining, talaba nusxasi talabaning.
 */
export async function gradeDatasetSubmission(
  ownerId: string,
  studentId: string,
  submissionId: string,
  score: number,
  comment?: string,
): Promise<StoredDataset | null> {
  const row = await getDataset(ownerId, studentId);
  if (!row) return null;

  const gradedAt = now();
  const submissions = row.bundle.submissions.map((s) =>
    s.id === submissionId
      ? { ...s, score: Math.max(0, Math.min(100, Math.round(score))), teacherComment: comment, gradedAt }
      : s,
  );

  const updated: StoredDataset = {
    ...row,
    bundle: { ...row.bundle, submissions },
  };
  await db().datasets.put(updated);
  return updated;
}

/* ═════════════════ Mentorlik kuzatuv varaqalari ═════════════════ */

/**
 * Kuzatuv varaqasini saqlaydi (bitta bosqich uchun bitta yozuv).
 *
 * Qayta saqlanganda eski yozuv almashtiriladi — o'qituvchi kuzatuv davomida
 * bir necha marta tahrirlashi normal holat, har bir tahrir yangi qator
 * yaratishi esa ro'yxatni ifloslantiradi.
 */
export async function saveMentorship(params: {
  ownerId: string;
  studentId: string;
  studentName: string;
  stageId: string;
  scores: Record<string, number>;
  comment?: string;
  observedAt?: string;
}): Promise<StoredMentorship> {
  const row: StoredMentorship = {
    id: `${params.ownerId}:${params.studentId}:${params.stageId}`,
    ownerId: params.ownerId,
    studentId: params.studentId,
    studentName: params.studentName,
    stageId: params.stageId,
    scores: params.scores,
    comment: params.comment,
    observedAt: params.observedAt ?? now(),
    updatedAt: now(),
  };

  const database = db();
  await database.transaction("rw", database.mentorship, database.activity, async () => {
    await database.mentorship.put(row);
    await database.activity.put({
      id: newId("act"),
      userId: params.ownerId,
      type: "mentorlik",
      message: `${params.studentName} — kuzatuv varaqasi saqlandi`,
      createdAt: row.updatedAt,
    } satisfies StoredActivity);
  });

  return row;
}

export async function listMentorship(ownerId: string): Promise<StoredMentorship[]> {
  const rows = await db().mentorship.where("ownerId").equals(ownerId).toArray();
  return rows.sort((a, b) => b.observedAt.localeCompare(a.observedAt));
}

export async function deleteMentorship(ownerId: string, id: string) {
  const row = await db().mentorship.get(id);
  if (!row || row.ownerId !== ownerId) return false;
  await db().mentorship.delete(id);
  return true;
}
