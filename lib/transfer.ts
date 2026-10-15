/**
 * Ma'lumot ko'chirish — serversiz platformaning «tarmog'i».
 *
 * Server yo'q, shuning uchun talabaning ma'lumoti o'qituvchiga o'z-o'zidan
 * bormaydi. Uning o'rniga **fayl** ishlatiladi:
 *
 *   talaba → `natijalar.json` → o'qituvchi (import)
 *   o'qituvchi → `baholar.json` → talaba (import)
 *
 * Bu ataylab tanlangan yechim: hech kimning serveriga ma'lumot yuborilmaydi,
 * fayl foydalanuvchining o'z qo'lida qoladi va u nimani berishni o'zi hal
 * qiladi. Buning narxi — jarayon avtomatik emas; bu cheklov README va
 * qo'llanmada ochiq yozilgan.
 *
 * Fayl formati **versiyalangan**. Keyinchalik format o'zgarsa, eski fayllar
 * `version` orqali ajratiladi va yo o'qiladi, yo aniq xato beriladi —
 * «jim buzilish» bo'lmaydi.
 */

import {
  DIAGNOSTIKA_TURLARI,
  DIAGNOSTIKA_YONALISHLARI,
  EKSPERIMENT_GURUHLARI,
  type AreaScores,
  type DiagnosticArea,
  type DiagnosticKind,
  type ExperimentGroup,
  type Role,
  ROLLAR,
} from "@/lib/domain/types";

export const TRANSFER_APP = "musicped" as const;
export const TRANSFER_VERSION = 1 as const;

/* ═══════════════════ Formatlar ═══════════════════ */

export type TransferProfile = {
  id: string;
  fullName: string;
  role: Role;
  group?: string;
  direction?: string;
  experimentGroup?: ExperimentGroup;
  startedAt?: string;
  demo?: boolean;
};

export type TransferDiagnostic = {
  id: string;
  kind: DiagnosticKind;
  scores: AreaScores;
  overall: number;
  completedAt: string;
};

export type TransferProgress = {
  lessonId: string;
  courseSlug: string;
  percent: number;
  completedAt?: string;
};

export type TransferSubmission = {
  id: string;
  taskId: string;
  taskType: string;
  area: DiagnosticArea;
  bloom: string;
  score?: number;
  teacherComment?: string;
  submittedAt: string;
  gradedAt?: string;
};

export type TransferReflection = {
  contextId: string;
  question: string;
  answer: string;
  createdAt: string;
};

export type TransferPortfolioItem = {
  id: string;
  category: string;
  title: string;
  description?: string;
  fileName?: string;
  sizeBytes?: number;
  createdAt: string;
};

/**
 * Talabaning to'liq eksporti.
 *
 * DIQQAT: portfolio **fayllarining mazmuni** bu faylga kirmaydi — faqat
 * ro'yxati. Sabab: bitta audio yoki video fayl o'n megabaytdan oshadi va
 * JSON ichida base64 sifatida yana uchdan bir qism kattalashadi. Fayllar
 * foydalanuvchining kompyuterida qoladi, eksport esa yengil bo'ladi.
 */
export type TransferBundle = {
  app: typeof TRANSFER_APP;
  version: number;
  kind: "natijalar";
  exportedAt: string;
  profile: TransferProfile;
  diagnostics: TransferDiagnostic[];
  progress: TransferProgress[];
  submissions: TransferSubmission[];
  reflections: TransferReflection[];
  portfolio: TransferPortfolioItem[];
};

/** O'qituvchidan talabaga qaytadigan baholar fayli. */
export type GradeBundle = {
  app: typeof TRANSFER_APP;
  version: number;
  kind: "baholar";
  issuedAt: string;
  teacherName: string;
  studentId: string;
  studentName: string;
  grades: Array<{
    submissionId: string;
    taskId: string;
    score: number;
    comment?: string;
    gradedAt: string;
  }>;
};

export type AnyBundle = TransferBundle | GradeBundle;

/* ═══════════════════ Tekshirish ═══════════════════ */

export type ParseResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const isString = (v: unknown): v is string => typeof v === "string";
const isFiniteNumber = (v: unknown): v is number =>
  typeof v === "number" && Number.isFinite(v);

function asArray(v: unknown): unknown[] {
  return Array.isArray(v) ? v : [];
}

/** Ball 0–100 oralig'iga majburlanadi — buzilgan fayl grafikni buzmasin. */
function clampScore(v: unknown, fallback = 0): number {
  if (!isFiniteNumber(v)) return fallback;
  return Math.max(0, Math.min(100, Math.round(v)));
}

function parseAreaScores(v: unknown): AreaScores | null {
  if (!isObject(v)) return null;
  const scores = {} as AreaScores;
  for (const area of DIAGNOSTIKA_YONALISHLARI) {
    const raw = v[area];
    // Bitta yo'nalish yetishmasa, butun diagnostika ishonchsiz — rad etiladi.
    if (!isFiniteNumber(raw)) return null;
    scores[area] = clampScore(raw);
  }
  return scores;
}

function parseProfile(v: unknown): ParseResult<TransferProfile> {
  if (!isObject(v)) return { ok: false, error: "Faylda profil ma'lumoti yo'q." };
  if (!isString(v.id) || !v.id) return { ok: false, error: "Profil identifikatori yo'q." };
  if (!isString(v.fullName) || !v.fullName.trim()) {
    return { ok: false, error: "Profilda ism-familiya yo'q." };
  }

  const role = (ROLLAR as readonly string[]).includes(String(v.role))
    ? (v.role as Role)
    : "TALABA";

  const experimentGroup = (EKSPERIMENT_GURUHLARI as readonly string[]).includes(
    String(v.experimentGroup),
  )
    ? (v.experimentGroup as ExperimentGroup)
    : undefined;

  return {
    ok: true,
    value: {
      id: v.id,
      fullName: v.fullName.trim(),
      role,
      group: isString(v.group) ? v.group : undefined,
      direction: isString(v.direction) ? v.direction : undefined,
      experimentGroup,
      startedAt: isString(v.startedAt) ? v.startedAt : undefined,
      demo: v.demo === true,
    },
  };
}

function parseDiagnostics(v: unknown): TransferDiagnostic[] {
  const out: TransferDiagnostic[] = [];
  for (const row of asArray(v)) {
    if (!isObject(row)) continue;
    const scores = parseAreaScores(row.scores);
    if (!scores) continue;
    if (!isString(row.completedAt)) continue;

    const kind = (DIAGNOSTIKA_TURLARI as readonly string[]).includes(String(row.kind))
      ? (row.kind as DiagnosticKind)
      : "boshlangich";

    out.push({
      id: isString(row.id) ? row.id : `diag-${out.length + 1}`,
      kind,
      scores,
      overall: clampScore(row.overall),
      completedAt: row.completedAt,
    });
  }
  return out;
}

function parseProgress(v: unknown): TransferProgress[] {
  const out: TransferProgress[] = [];
  for (const row of asArray(v)) {
    if (!isObject(row) || !isString(row.lessonId) || !isString(row.courseSlug)) continue;
    out.push({
      lessonId: row.lessonId,
      courseSlug: row.courseSlug,
      percent: clampScore(row.percent),
      completedAt: isString(row.completedAt) ? row.completedAt : undefined,
    });
  }
  return out;
}

function parseSubmissions(v: unknown): TransferSubmission[] {
  const out: TransferSubmission[] = [];
  for (const row of asArray(v)) {
    if (!isObject(row) || !isString(row.id) || !isString(row.taskId)) continue;
    if (!isString(row.submittedAt)) continue;

    const area = (DIAGNOSTIKA_YONALISHLARI as readonly string[]).includes(String(row.area))
      ? (row.area as DiagnosticArea)
      : "nazariya";

    out.push({
      id: row.id,
      taskId: row.taskId,
      taskType: isString(row.taskType) ? row.taskType : "mashq",
      area,
      bloom: isString(row.bloom) ? row.bloom : "bilish",
      // Baholanmagan ish ikki xil yoziladi: maydon yo'q yoki `-1`
      // (B4 dagi ichki kelishuv). Ikkalasi ham `undefined` ga keltiriladi —
      // aks holda manfiy ball 0 ga qirqilib, baholanmagan ish «nol ball»
      // bo'lib qolardi va talabaning o'rtachasini asossiz pasaytirardi.
      score: isFiniteNumber(row.score) && row.score >= 0 ? clampScore(row.score) : undefined,
      teacherComment: isString(row.teacherComment) ? row.teacherComment : undefined,
      submittedAt: row.submittedAt,
      gradedAt: isString(row.gradedAt) ? row.gradedAt : undefined,
    });
  }
  return out;
}

function parseReflections(v: unknown): TransferReflection[] {
  const out: TransferReflection[] = [];
  for (const row of asArray(v)) {
    if (!isObject(row) || !isString(row.contextId) || !isString(row.answer)) continue;
    out.push({
      contextId: row.contextId,
      question: isString(row.question) ? row.question : "",
      answer: row.answer,
      createdAt: isString(row.createdAt) ? row.createdAt : new Date().toISOString(),
    });
  }
  return out;
}

function parsePortfolio(v: unknown): TransferPortfolioItem[] {
  const out: TransferPortfolioItem[] = [];
  for (const row of asArray(v)) {
    if (!isObject(row) || !isString(row.title)) continue;
    out.push({
      id: isString(row.id) ? row.id : `pf-${out.length + 1}`,
      category: isString(row.category) ? row.category : "ishlar",
      title: row.title,
      description: isString(row.description) ? row.description : undefined,
      fileName: isString(row.fileName) ? row.fileName : undefined,
      sizeBytes: isFiniteNumber(row.sizeBytes) ? row.sizeBytes : undefined,
      createdAt: isString(row.createdAt) ? row.createdAt : new Date().toISOString(),
    });
  }
  return out;
}

/**
 * JSON matnini o'qiydi va formatni tekshiradi.
 *
 * Yondashuv: **muhim maydonlar qat'iy, qolgani kechirimli.** Ism yoki
 * identifikator yo'q bo'lsa fayl rad etiladi; bitta buzuq topshiriq qatori
 * bo'lsa esa shu qator tashlab ketiladi va qolgani o'qiladi. Shu sababli
 * bitta xato butun eksportni yo'qotmaydi.
 */
export function parseBundle(input: string | unknown): ParseResult<AnyBundle> {
  let raw: unknown = input;

  if (typeof input === "string") {
    try {
      raw = JSON.parse(input);
    } catch {
      return { ok: false, error: "Fayl JSON formatida emas yoki buzilgan." };
    }
  }

  if (!isObject(raw)) return { ok: false, error: "Fayl mazmuni noto'g'ri." };

  if (raw.app !== TRANSFER_APP) {
    return { ok: false, error: "Bu fayl MusicPed eksporti emas." };
  }

  if (!isFiniteNumber(raw.version) || raw.version < 1) {
    return { ok: false, error: "Fayl versiyasi ko'rsatilmagan." };
  }
  if (raw.version > TRANSFER_VERSION) {
    return {
      ok: false,
      error: `Fayl yangiroq versiyada (${raw.version}), platforma ${TRANSFER_VERSION} ni o'qiydi. Platformani yangilang.`,
    };
  }

  if (raw.kind === "baholar") return parseGradeBundle(raw);
  if (raw.kind !== "natijalar") {
    return { ok: false, error: "Fayl turi tanilmadi (`natijalar` yoki `baholar` kutilgan)." };
  }

  const profile = parseProfile(raw.profile);
  if (!profile.ok) return { ok: false, error: profile.error };

  return {
    ok: true,
    value: {
      app: TRANSFER_APP,
      version: raw.version,
      kind: "natijalar",
      exportedAt: isString(raw.exportedAt) ? raw.exportedAt : new Date().toISOString(),
      profile: profile.value,
      diagnostics: parseDiagnostics(raw.diagnostics),
      progress: parseProgress(raw.progress),
      submissions: parseSubmissions(raw.submissions),
      reflections: parseReflections(raw.reflections),
      portfolio: parsePortfolio(raw.portfolio),
    },
  };
}

function parseGradeBundle(raw: Record<string, unknown>): ParseResult<GradeBundle> {
  if (!isString(raw.studentId) || !raw.studentId) {
    return { ok: false, error: "Baholar faylida talaba identifikatori yo'q." };
  }

  const grades: GradeBundle["grades"] = [];
  for (const row of asArray(raw.grades)) {
    if (!isObject(row) || !isString(row.submissionId)) continue;
    if (!isFiniteNumber(row.score)) continue;
    grades.push({
      submissionId: row.submissionId,
      taskId: isString(row.taskId) ? row.taskId : "",
      score: clampScore(row.score),
      comment: isString(row.comment) ? row.comment : undefined,
      gradedAt: isString(row.gradedAt) ? row.gradedAt : new Date().toISOString(),
    });
  }

  if (grades.length === 0) {
    return { ok: false, error: "Baholar faylida bitta ham baho yo'q." };
  }

  return {
    ok: true,
    value: {
      app: TRANSFER_APP,
      version: raw.version as number,
      kind: "baholar",
      issuedAt: isString(raw.issuedAt) ? raw.issuedAt : new Date().toISOString(),
      teacherName: isString(raw.teacherName) ? raw.teacherName : "O'qituvchi",
      studentId: raw.studentId,
      studentName: isString(raw.studentName) ? raw.studentName : "",
      grades,
    },
  };
}

/* ═══════════════════ Qisqa ma'lumot ═══════════════════ */

export type BundleSummary = {
  kind: AnyBundle["kind"];
  title: string;
  lines: string[];
};

/** Import oldidan foydalanuvchiga «faylda nima bor» deb ko'rsatish uchun. */
export function summarizeBundle(bundle: AnyBundle): BundleSummary {
  if (bundle.kind === "baholar") {
    return {
      kind: "baholar",
      title: `${bundle.studentName || bundle.studentId} — baholar`,
      lines: [
        `${bundle.grades.length} ta baho`,
        `O'qituvchi: ${bundle.teacherName}`,
        `Sana: ${bundle.issuedAt.slice(0, 10)}`,
      ],
    };
  }

  const yakunlangan = bundle.progress.filter((p) => p.percent >= 100).length;
  return {
    kind: "natijalar",
    title: bundle.profile.fullName,
    lines: [
      `${bundle.diagnostics.length} ta diagnostika`,
      `${yakunlangan} ta yakunlangan dars`,
      `${bundle.submissions.length} ta topshirilgan ish`,
      `${bundle.reflections.length} ta refleksiya`,
      `Sana: ${bundle.exportedAt.slice(0, 10)}`,
    ],
  };
}

/** Eksport fayliga xavfsiz nom beradi (lotin harf, raqam va chiziqcha). */
export function bundleFileName(bundle: AnyBundle): string {
  const sana = (bundle.kind === "baholar" ? bundle.issuedAt : bundle.exportedAt).slice(0, 10);
  const ism = bundle.kind === "baholar" ? bundle.studentName || bundle.studentId : bundle.profile.fullName;
  const slug =
    ism
      .toLowerCase()
      .replace(/[ʻʼ'`]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "musicped";
  return `${bundle.kind === "baholar" ? "baholar" : "natijalar"}-${slug}-${sana}.json`;
}
