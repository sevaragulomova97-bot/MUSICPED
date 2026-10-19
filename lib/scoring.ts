/**
 * Diagnostika javoblarini ballga aylantirish.
 *
 * Sof funksiyalar — tashqi holatga bog'liq emas va unit-testlar bilan qoplangan.
 */

import {
  DIAGNOSTIKA_SAVOLLARI,
  type DiagnosticQuestion,
  type Question,
  type QuestionVariant,
} from "@/content/diagnostic";
import {
  type AreaScores,
  type DiagnosticArea,
  type DiagnosticKind,
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
  const nisbat = (chegaralangan - LIKERT_MIN) / (LIKERT_MAX - LIKERT_MIN);
  // Teskari bandda yuqori ball past motivatsiyani bildiradi.
  return question.reverse ? 1 - nisbat : nisbat;
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

/**
 * Berilgan shakldagi (A yoki B) savollar.
 *
 * Boshlang'ich va yakuniy o'lchov turli shaklda o'tkaziladi: aks holda
 * ikkinchi natija savollarni eslab qolish hisobiga ko'tariladi va o'sishni
 * metodikaga bog'lab bo'lmaydi.
 */
export function questionsOfVariant(
  variant: QuestionVariant,
  questions: DiagnosticQuestion[] = DIAGNOSTIKA_SAVOLLARI,
): DiagnosticQuestion[] {
  return questions.filter((q) => q.variant === variant);
}

/**
 * O'lchov turiga qarab shaklni tanlaydi.
 *
 * Qoida urinish raqamiga emas, **turga** bog'langan va buning aniq sababi
 * bor. `lib/research.ts` tahlilga boshlang'ichni va oxirgi yakuniyni
 * oladi; yakuniy bo'lmasa esa **oraliqni yakuniy o'rnida** ishlatadi.
 * Demak yakuniy bo'lishi mumkin bo'lgan har qanday o'lchov boshlang'ichdan
 * boshqa shaklda bo'lishi shart — aks holda taqqoslanadigan juftlik bir
 * xil savollarga tushib qoladi.
 *
 *   boshlangich -> A
 *   oraliq      -> B
 *   yakuniy     -> B
 *
 * Shu bilan tahlil qilinadigan juftlik (boshlang'ich ↔ yakuniy) har doim
 * A ↔ B bo'ladi.
 *
 * **Qoladigan cheklov:** talaba oraliq va yakuniy o'lchovning ikkisini
 * ham topshirsa, ular bir shaklda bo'ladi — ikki shakl bilan uchta
 * o'lchovni butunlay mustaqil qilib bo'lmaydi. Buni hisobotda ko'rsatish
 * kerak.
 */
export function variantForKind(kind: DiagnosticKind): QuestionVariant {
  return kind === "boshlangich" ? "A" : "B";
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
