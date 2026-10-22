import type { DiagnosticKind } from "@/lib/domain/types";

/**
 * Yarim qolgan diagnostikani saqlash.
 *
 * Diagnostikada 32 savol bor — bu o'n besh daqiqalik ish. Ilgari
 * javoblar faqat komponent holatida turardi, ya'ni sahifa yangilansa,
 * «orqaga» bosilsa yoki brauzer yorliqni xotiradan chiqarib yuborsa
 * (mobil brauzerlar buni muntazam qiladi) **hammasi yo'qolardi**.
 * Maktab yoki universitet kompyuterida bu tez-tez uchraydi.
 *
 * Qoralama `localStorage` da saqlanadi: u IndexedDB dan yengilroq va
 * har bir javobdan keyin yozish uchun mos. Natija saqlangach qoralama
 * o'chiriladi.
 */

const PREFIX = "musicped.diagnostika.qoralama.";

/** Qoralama shuncha soatdan keyin eskirgan hisoblanadi. */
export const ESKIRISH_SOATI = 24;

export type Qoralama = {
  /** Savol id -> javob */
  answers: Record<string, unknown>;
  /** Nechanchi bosqichda to'xtagan */
  step: number;
  /** ISO vaqt */
  updatedAt: string;
};

export function kalit(userId: string, kind: DiagnosticKind) {
  return `${PREFIX}${userId}.${kind}`;
}

/**
 * Saqlash joyi.
 *
 * `window` emas, `globalThis` orqali olinadi: shunda modul server
 * renderida ham, testda ham xato bermaydi, va saqlash bloklangan
 * brauzerda (getter xato tashlashi mumkin) oddiygina `null` qaytaradi.
 */
function saqlash(): Storage | null {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

export function qoralamaniSaqla(
  userId: string,
  kind: DiagnosticKind,
  answers: Record<string, unknown>,
  step: number,
) {
  try {
    const q: Qoralama = { answers, step, updatedAt: new Date().toISOString() };
    saqlash()?.setItem(kalit(userId, kind), JSON.stringify(q));
  } catch {
    // Saqlash bloklangan bo'lsa, diagnostika baribir ishlayveradi —
    // faqat qoralama bo'lmaydi.
  }
}

/**
 * Qoralamani o'qiydi.
 *
 * Eskirgan qoralama qaytarilmaydi: bir hafta oldin yarim tashlangan
 * o'lchov bugungi javoblar bilan aralashib ketsa, natija ma'nosiz
 * bo'lardi va buni foydalanuvchi sezmasdi ham.
 */
export function qoralamaniOqi(
  userId: string,
  kind: DiagnosticKind,
  now: Date = new Date(),
): Qoralama | null {
  try {
    const raw = saqlash()?.getItem(kalit(userId, kind));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Qoralama>;
    if (
      !parsed ||
      typeof parsed.updatedAt !== "string" ||
      typeof parsed.step !== "number" ||
      !parsed.answers ||
      typeof parsed.answers !== "object"
    ) {
      return null;
    }
    const soat = (now.getTime() - new Date(parsed.updatedAt).getTime()) / 3_600_000;
    if (!Number.isFinite(soat) || soat < 0 || soat > ESKIRISH_SOATI) return null;
    return {
      answers: parsed.answers as Record<string, unknown>,
      step: Math.max(0, Math.floor(parsed.step)),
      updatedAt: parsed.updatedAt,
    };
  } catch {
    return null;
  }
}

export function qoralamaniTozala(userId: string, kind: DiagnosticKind) {
  try {
    saqlash()?.removeItem(kalit(userId, kind));
  } catch {
    // Tozalab bo'lmasa ham zarari yo'q: qoralama bir sutkada eskiradi.
  }
}

/** Qoralamadagi javoblar soni — tiklash taklifida ko'rsatiladi. */
export function qoralamaSoni(q: Qoralama) {
  return Object.values(q.answers).filter(
    (v) => v !== undefined && (!Array.isArray(v) || v.length > 0),
  ).length;
}
