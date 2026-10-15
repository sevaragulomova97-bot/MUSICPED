/**
 * Tajriba-sinov tahlili (dissertatsiyaning 3-bobi).
 *
 * Bu fayl ham **sof funksiya**: kirishga talabalar ro'yxati, chiqishga
 * tayyor jadvallar va mezon natijalari. Shu sababli uni test bilan
 * tekshirish mumkin va interfeys o'zgarsa ham o'zgarmaydi.
 *
 * Tahlil tuzilishi dissertatsiya mantiqini takrorlaydi:
 *
 *  1. **Guruhlar bir xilligi.** Tajriba boshida tajriba va nazorat guruhi
 *     farq qilmasligi kerak. Agar farq bo'lsa, oxirgi natijani
 *     metodikaga bog'lab bo'lmaydi — shuning uchun bu birinchi tekshiruv
 *     va u ogohlantirish beradi.
 *  2. **Guruhlararo farq.** Tajriba oxirida ikki guruh solishtiriladi
 *     (bog'liq bo'lmagan t-mezon + Mann–Uitni + Koen d).
 *  3. **Guruh ichidagi o'sish.** Har guruhning o'zida boshlang'ich va
 *     yakuniy natija juftlashgan t-mezon bilan solishtiriladi.
 *  4. **Daraja taqsimoti.** Past/o'rta/yuqori darajalar bo'yicha χ².
 */

import {
  type AreaScores,
  type DiagnosticArea,
  DIAGNOSTIKA_YONALISHLARI,
  type ExperimentGroup,
  overallScore,
  YONALISH_NOMI,
} from "@/lib/domain/types";
import {
  type ChiSquareResult,
  chiSquareIndependence,
  cohenD,
  describe as summarize,
  type Descriptive,
  type EffectSize,
  independentTTest,
  levelRow,
  type MannWhitneyResult,
  mannWhitneyU,
  pairedTTest,
  type TTestResult,
} from "@/lib/stats";

/** Tahlilga kiradigan bitta ishtirokchi. */
export type Subject = {
  id: string;
  fullName: string;
  group?: string;
  experimentGroup: ExperimentGroup;
  /** Boshlang'ich diagnostika */
  baseline: AreaScores;
  /** Yakuniy diagnostika */
  final: AreaScores;
  /** Namunaviy ma'lumotdanmi — hisobotda ajratib ko'rsatish uchun */
  demo?: boolean;
};

/** Ikki guruhni bitta o'lcham bo'yicha solishtirish natijasi. */
export type Comparison = {
  /** `"umumiy"` — barcha yo'nalishlar o'rtachasi */
  key: DiagnosticArea | "umumiy";
  label: string;
  tajriba: { baseline: Descriptive; final: Descriptive; osish: number };
  nazorat: { baseline: Descriptive; final: Descriptive; osish: number };
  /** Yakuniy natijalar bo'yicha guruhlararo t-mezon */
  ttest: TTestResult;
  effect: EffectSize;
  mann: MannWhitneyResult;
};

export type WithinGroup = {
  ttest: TTestResult;
  effect: EffectSize;
};

export type LevelAnalysis = {
  /** Qatorlar: tajriba, nazorat. Ustunlar: past, o'rta, yuqori. */
  observed: number[][];
  chi2: ChiSquareResult;
};

export type ResearchAnalysis = {
  counts: Record<ExperimentGroup, number>;
  /** 1-qadam: tajriba boshida guruhlar bir xilmi */
  homogeneity: { ttest: TTestResult; effect: EffectSize; homogeneous: boolean };
  /** 2-qadam: umumiy ball bo'yicha guruhlararo farq */
  overall: Comparison;
  /** 2-qadam: har bir yo'nalish bo'yicha */
  areas: Comparison[];
  /** 3-qadam: guruh ichidagi o'sish */
  within: Record<ExperimentGroup, WithinGroup>;
  /** 4-qadam: daraja taqsimoti */
  levels: { baseline: LevelAnalysis; final: LevelAnalysis };
  /** Natijani o'qishda e'tiborga olinishi kerak bo'lgan holatlar */
  warnings: string[];
  /** Namunaviy ma'lumot ishtirok etganmi */
  hasDemo: boolean;
};

/** Tahlil ishonchli bo'lishi uchun guruhdagi minimal ishtirokchi soni. */
export const MIN_GURUH_HAJMI = 5;

function pick(subjects: readonly Subject[], group: ExperimentGroup) {
  return subjects.filter((s) => s.experimentGroup === group);
}

function values(
  subjects: readonly Subject[],
  phase: "baseline" | "final",
  key: DiagnosticArea | "umumiy",
): number[] {
  return subjects.map((s) =>
    key === "umumiy" ? overallScore(s[phase]) : s[phase][key],
  );
}

function compare(
  subjects: readonly Subject[],
  key: DiagnosticArea | "umumiy",
): Comparison {
  const tajriba = pick(subjects, "tajriba");
  const nazorat = pick(subjects, "nazorat");

  const tb = summarize(values(tajriba, "baseline", key));
  const tf = summarize(values(tajriba, "final", key));
  const nb = summarize(values(nazorat, "baseline", key));
  const nf = summarize(values(nazorat, "final", key));

  const finalT = values(tajriba, "final", key);
  const finalN = values(nazorat, "final", key);

  return {
    key,
    label: key === "umumiy" ? "Umumiy ball" : YONALISH_NOMI[key],
    tajriba: { baseline: tb, final: tf, osish: tf.mean - tb.mean },
    nazorat: { baseline: nb, final: nf, osish: nf.mean - nb.mean },
    ttest: independentTTest(finalT, finalN),
    effect: cohenD(finalT, finalN),
    mann: mannWhitneyU(finalT, finalN),
  };
}

function withinGroup(subjects: readonly Subject[]): WithinGroup {
  const before = values(subjects, "baseline", "umumiy");
  const after = values(subjects, "final", "umumiy");

  if (before.length < 2) {
    return {
      ttest: pairedTTest(before.length ? before : [0, 0], after.length ? after : [0, 0]),
      effect: cohenD(after, before),
    };
  }

  return { ttest: pairedTTest(before, after), effect: cohenD(after, before) };
}

function levelAnalysis(
  subjects: readonly Subject[],
  phase: "baseline" | "final",
): LevelAnalysis {
  const observed = [
    levelRow(values(pick(subjects, "tajriba"), phase, "umumiy")),
    levelRow(values(pick(subjects, "nazorat"), phase, "umumiy")),
  ];
  return { observed, chi2: chiSquareIndependence(observed) };
}

/**
 * To'liq tahlilni quradi.
 *
 * Guruhlardan biri bo'sh bo'lsa ham yiqilmaydi: mezonlar `NaN` qaytaradi va
 * `warnings` da sabab aytiladi. Interfeys shu sababli hech qachon «buzilgan»
 * holatga tushmaydi — faqat «ma'lumot yetarli emas» deb yozadi.
 */
export function analyzeResearch(subjects: readonly Subject[]): ResearchAnalysis {
  const tajriba = pick(subjects, "tajriba");
  const nazorat = pick(subjects, "nazorat");
  const counts = { tajriba: tajriba.length, nazorat: nazorat.length };

  const baselineT = values(tajriba, "baseline", "umumiy");
  const baselineN = values(nazorat, "baseline", "umumiy");
  const homogeneityTest = independentTTest(baselineT, baselineN);
  const homogeneityEffect = cohenD(baselineT, baselineN);

  const warnings: string[] = [];

  if (counts.tajriba < MIN_GURUH_HAJMI || counts.nazorat < MIN_GURUH_HAJMI) {
    warnings.push(
      `Guruhlardagi ishtirokchi soni kam (tajriba ${counts.tajriba}, nazorat ${counts.nazorat}). Statistik mezonlar kamida ${MIN_GURUH_HAJMI} kishidan boshlab ma'noli bo'ladi.`,
    );
  }

  // Bir xillik buzilgan bo'lsa, oxirgi farqni metodikaga bog'lab bo'lmaydi.
  const homogeneous = !Number.isFinite(homogeneityTest.p) || homogeneityTest.p >= 0.05;
  if (Number.isFinite(homogeneityTest.p) && !homogeneous) {
    warnings.push(
      "Tajriba boshida guruhlar o'rtasida statistik ahamiyatli farq bor — yakuniy farqni faqat metodika bilan tushuntirib bo'lmaydi.",
    );
  }

  const finalLevels = levelAnalysis(subjects, "final");
  if (finalLevels.chi2.lowExpectedCells > 0) {
    warnings.push(
      `χ² mezonida ${finalLevels.chi2.lowExpectedCells} katakchaning kutilgan chastotasi 5 dan kichik — mezonning sharti to'liq bajarilmagan.`,
    );
  }

  const hasDemo = subjects.some((s) => s.demo);
  if (hasDemo) {
    warnings.push(
      "Tahlilga namunaviy (o'ylab topilgan) ma'lumot kirgan — natija faqat platformani ko'rsatish uchun, ilmiy xulosa uchun emas.",
    );
  }

  return {
    counts,
    homogeneity: { ttest: homogeneityTest, effect: homogeneityEffect, homogeneous },
    overall: compare(subjects, "umumiy"),
    areas: DIAGNOSTIKA_YONALISHLARI.map((area) => compare(subjects, area)),
    within: { tajriba: withinGroup(tajriba), nazorat: withinGroup(nazorat) },
    levels: { baseline: levelAnalysis(subjects, "baseline"), final: finalLevels },
    warnings,
    hasDemo,
  };
}

/* ─────────────────── Grafik va jadval uchun qatorlar ─────────────────── */

export type DynamicsRow = {
  label: string;
  tajriba: number;
  nazorat: number;
};

/** «Boshlang'ich → yakuniy» grafigi uchun ikki nuqta. */
export function dynamicsRows(analysis: ResearchAnalysis): DynamicsRow[] {
  const { overall } = analysis;
  return [
    {
      label: "Boshlang'ich",
      tajriba: round1(overall.tajriba.baseline.mean),
      nazorat: round1(overall.nazorat.baseline.mean),
    },
    {
      label: "Yakuniy",
      tajriba: round1(overall.tajriba.final.mean),
      nazorat: round1(overall.nazorat.final.mean),
    },
  ];
}

/** Yo'nalishlar kesimidagi o'sish — ustunli grafik uchun. */
export function growthRows(analysis: ResearchAnalysis): DynamicsRow[] {
  return analysis.areas.map((a) => ({
    label: a.label,
    tajriba: round1(a.tajriba.osish),
    nazorat: round1(a.nazorat.osish),
  }));
}

function round1(v: number): number {
  return Number.isFinite(v) ? Math.round(v * 10) / 10 : 0;
}

/* ─────────────────── Ma'lumotni tahlilga tayyorlash ─────────────────── */

/**
 * Bitta talabaning diagnostikalaridan `Subject` quradi.
 *
 * Boshlang'ich diagnostika — `boshlangich` turi; yakuniy — `yakuniy`, u
 * bo'lmasa oxirgi `oraliq`. Ikkalasidan biri yo'q bo'lsa `null` qaytadi:
 * tahlilga faqat to'liq o'lchovga ega talabalar kiradi, aks holda «o'sish»
 * soni ma'nosiz bo'lardi.
 */
export function toSubject(input: {
  id: string;
  fullName: string;
  group?: string;
  experimentGroup?: ExperimentGroup;
  demo?: boolean;
  diagnostics: ReadonlyArray<{
    kind: "boshlangich" | "oraliq" | "yakuniy";
    scores: AreaScores;
    completedAt: string;
  }>;
}): Subject | null {
  if (!input.experimentGroup) return null;

  const sorted = [...input.diagnostics].sort((a, b) =>
    a.completedAt.localeCompare(b.completedAt),
  );
  const baseline = sorted.find((d) => d.kind === "boshlangich");
  const final =
    [...sorted].reverse().find((d) => d.kind === "yakuniy") ??
    [...sorted].reverse().find((d) => d.kind === "oraliq");

  if (!baseline || !final || baseline === final) return null;

  return {
    id: input.id,
    fullName: input.fullName,
    group: input.group,
    experimentGroup: input.experimentGroup,
    baseline: baseline.scores,
    final: final.scores,
    demo: input.demo,
  };
}
