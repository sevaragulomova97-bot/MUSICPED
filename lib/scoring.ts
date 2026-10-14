/**
 * Diagnostika javoblarini ballga aylantirish.
 *
 * Sof funksiyalar — tashqi holatga bog'liq emas va unit-testlar bilan qoplangan.
 */

import {
  DIAGNOSTIKA_SAVOLLARI,
  type Question,
} from "@/content/diagnostic";
import {
  type AreaScores,
  type DiagnosticArea,
  DIAGNOSTIKA_YONALISHLARI,
  emptyAreaScores,
} from "@/lib/domain/types";

/**
 * Bitta savolga berilgan javob.
 *  • `single`   — tanlangan variant `id` si
 *  • `multiple` — tanlangan variantlar `id` lari
 *  • `likert`   — 1 dan 5 gacha raqam
 */
export type Answer = string | string[] | number;

export type AnswerMap = Record<string, Answer | undefined>;

export const LIKERT_MIN = 1;
export const LIKERT_MAX = 5;

/**
 * Bitta savol uchun 0–1 oralig'idagi natija qaytaradi.
 *
 * `multiple` savolda qisman ball beriladi: to'g'ri belgilanganlar sonidan
 * noto'g'ri belgilanganlar ayiriladi va natija to'g'ri javoblar soniga bo'linadi.
 * Shunday qilib "hammasini belgilab qo'yish" strategiyasi foyda bermaydi.
 */
export function scoreQuestion(question: Question, answer: Answer | undefined): number {
  if (answer === undefined) return 0;

  if (question.kind === "single") {
    return answer === question.correctId ? 1 : 0;
  }

  if (question.kind === "multiple") {
    if (!Array.isArray(answer)) return 0;
    const tanlangan = new Set(answer);
    const togri = question.correctIds.filter((id) => tanlangan.has(id)).length;
    const notogri = [...tanlangan].filter(
      (id) => !question.correctIds.includes(id),
    ).length;
    const natija = (togri - notogri) / question.correctIds.length;
    return Math.max(0, Math.min(1, natija));
  }

  // likert — to'g'ri javob yo'q, shkaladagi o'rin 0–1 ga keltiriladi
  if (typeof answer !== "number") return 0;
  const chegaralangan = Math.max(LIKERT_MIN, Math.min(LIKERT_MAX, answer));
  return (chegaralangan - LIKERT_MIN) / (LIKERT_MAX - LIKERT_MIN);
}

/**
 * Barcha javoblardan 8 ta yo'nalish bo'yicha foiz hisoblaydi.
 *
 * Savoli umuman bo'lmagan yo'nalish 0 emas, `fallback` qiymatini oladi —
 * aks holda u yo'nalish sun'iy ravishda "eng zaif" bo'lib chiqib, individual
 * rejani buzardi.
 */
export function scoreDiagnostic(
  answers: AnswerMap,
  questions: Question[] = DIAGNOSTIKA_SAVOLLARI,
  fallback = 0,
): AreaScores {
  const earned = emptyAreaScores(0);
  const possible = emptyAreaScores(0);

  for (const question of questions) {
    const weight = question.points ?? 1;
    possible[question.area] += weight;
    earned[question.area] += scoreQuestion(question, answers[question.id]) * weight;
  }

  const result = emptyAreaScores(fallback);
  for (const area of DIAGNOSTIKA_YONALISHLARI) {
    if (possible[area] > 0) {
      result[area] = Math.round((earned[area] / possible[area]) * 100);
    }
  }
  return result;
}

/** Yo'nalish bo'yicha savollar — test sahifasini bosqichlarga bo'lishda ishlatiladi. */
export function groupQuestionsByArea(
  questions: Question[] = DIAGNOSTIKA_SAVOLLARI,
): Array<{ area: DiagnosticArea; questions: Question[] }> {
  return DIAGNOSTIKA_YONALISHLARI.map((area) => ({
    area,
    questions: questions.filter((q) => q.area === area),
  })).filter((group) => group.questions.length > 0);
}

/** Javob berilgan savollar soni. */
export function answeredCount(answers: AnswerMap, questions: Question[] = DIAGNOSTIKA_SAVOLLARI) {
  return questions.filter((q) => answers[q.id] !== undefined).length;
}
