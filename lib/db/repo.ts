"use client";

import {
  db,
  type StoredActivity,
  type StoredDiagnostic,
  type StoredLearningPath,
  type StoredProfile,
  type StoredProgress,
} from "@/lib/db/schema";
import { buildLearningPath } from "@/lib/personalization";
import {
  type AreaScores,
  type DiagnosticKind,
  overallScore,
} from "@/lib/domain/types";
import { detectProfileType } from "@/lib/personalization";

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
