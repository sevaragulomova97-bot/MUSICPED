import type { StoredDiagnostic, StoredProgress, StoredSubmission } from "@/lib/db/schema";
import {
  ASOSIY_YONALISHLAR,
  type AreaScores,
  groupScores,
  type MainDirection,
  overallScore,
  YONALISH_GURUHI,
} from "@/lib/domain/types";

/**
 * Natijalar sahifasi uchun hisob-kitoblar.
 *
 * Sof funksiyalar: kirish — bazadan o'qilgan qatorlar, chiqish — grafik va
 * kartalar uchun tayyor raqamlar. Shu sababli ular testlanadi va UI dan
 * mustaqil.
 */

export type Davr = "1oy" | "3oy" | "semestr" | "barcha";

export const DAVR_NOMI: Record<Davr, string> = {
  "1oy": "So'nggi 1 oy",
  "3oy": "So'nggi 3 oy",
  semestr: "Semestr",
  barcha: "Butun davr",
};

const DAVR_KUN: Record<Davr, number> = {
  "1oy": 30,
  "3oy": 90,
  semestr: 180,
  barcha: Number.POSITIVE_INFINITY,
};

export function filterByPeriod<T extends { submittedAt?: string; completedAt?: string }>(
  rows: T[],
  davr: Davr,
  now = Date.now(),
): T[] {
  const kun = DAVR_KUN[davr];
  if (!Number.isFinite(kun)) return rows;
  const chegara = now - kun * 24 * 60 * 60 * 1000;
  return rows.filter((r) => {
    const t = Date.parse(r.submittedAt ?? r.completedAt ?? "");
    return Number.isNaN(t) ? true : t >= chegara;
  });
}

/* ───────────────────────── Statistik kartalar ───────────────────────── */

export type Kartalar = {
  ortacha: number;
  /** Oldingi davrga nisbatan o'zgarish (foiz punkti) */
  ozgarish: number | null;
  bajarilganTopshiriq: number;
  oqilganDars: number;
};

/** Baholangan topshiriqlar — ball `-1` bo'lsa, u hali baholanmagan. */
export function gradedSubmissions(rows: StoredSubmission[]) {
  return rows.filter((r) => typeof r.score === "number" && r.score >= 0);
}

export function buildCards(
  submissions: StoredSubmission[],
  progress: StoredProgress[],
): Kartalar {
  const graded = gradedSubmissions(submissions).sort((a, b) =>
    a.submittedAt.localeCompare(b.submittedAt),
  );

  const ortacha = graded.length
    ? Math.round(graded.reduce((s, r) => s + (r.score ?? 0), 0) / graded.length)
    : 0;

  // O'zgarish: oxirgi yarmi oldingi yarmiga nisbatan
  let ozgarish: number | null = null;
  if (graded.length >= 4) {
    const yarim = Math.floor(graded.length / 2);
    const avg = (xs: StoredSubmission[]) =>
      xs.reduce((s, r) => s + (r.score ?? 0), 0) / xs.length;
    ozgarish = Math.round(avg(graded.slice(yarim)) - avg(graded.slice(0, yarim)));
  }

  return {
    ortacha,
    ozgarish,
    bajarilganTopshiriq: submissions.length,
    oqilganDars: progress.filter((p) => p.percent >= 100).length,
  };
}

/* ───────────────────────── O'sish dinamikasi ───────────────────────── */

export type DinamikaNuqta = {
  sana: string;
  umumiy: number;
} & Partial<Record<MainDirection, number>>;

/**
 * Vaqt bo'yicha o'sish egri chizig'i.
 *
 * Har bir nuqtada — o'sha kungacha to'plangan natijalarning yurib boruvchi
 * o'rtachasi. Bitta topshiriqning tasodifiy natijasi grafikni sakratib
 * yubormasligi uchun aynan shunday hisoblanadi.
 */
export function buildDinamika(submissions: StoredSubmission[]): DinamikaNuqta[] {
  const graded = gradedSubmissions(submissions).sort((a, b) =>
    a.submittedAt.localeCompare(b.submittedAt),
  );
  if (!graded.length) return [];

  const sums: Record<string, { sum: number; n: number }> = {};
  const add = (key: string, v: number) => {
    sums[key] ??= { sum: 0, n: 0 };
    sums[key].sum += v;
    sums[key].n += 1;
  };

  const byDay = new Map<string, DinamikaNuqta>();

  for (const row of graded) {
    const score = row.score ?? 0;
    add("umumiy", score);
    add(YONALISH_GURUHI[row.area], score);

    const kun = row.submittedAt.slice(0, 10);
    const nuqta: DinamikaNuqta = {
      sana: kun,
      umumiy: Math.round(sums.umumiy.sum / sums.umumiy.n),
    };
    for (const d of ASOSIY_YONALISHLAR) {
      if (sums[d]) nuqta[d] = Math.round(sums[d].sum / sums[d].n);
    }
    byDay.set(kun, nuqta);
  }

  return [...byDay.values()];
}

/* ──────────────── Boshlang'ich va joriy diagnostika ──────────────── */

export type Taqqoslash = {
  yonalish: MainDirection;
  boshlangich: number;
  joriy: number;
  ozgarish: number;
};

export function buildTaqqoslash(diagnostics: StoredDiagnostic[]): Taqqoslash[] {
  if (diagnostics.length < 1) return [];
  const tartib = [...diagnostics].sort((a, b) =>
    a.completedAt.localeCompare(b.completedAt),
  );
  const birinchi = groupScores(tartib[0].scores as AreaScores);
  const oxirgi = groupScores(tartib[tartib.length - 1].scores as AreaScores);

  return ASOSIY_YONALISHLAR.map((d) => ({
    yonalish: d,
    boshlangich: birinchi[d],
    joriy: oxirgi[d],
    ozgarish: oxirgi[d] - birinchi[d],
  }));
}

export function diagnosticOverall(d: StoredDiagnostic) {
  return overallScore(d.scores as AreaScores);
}
