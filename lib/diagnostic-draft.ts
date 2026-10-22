import {
  qoralamaniOqi as oqiUmumiy,
  qoralamaniSaqla as saqlaUmumiy,
  qoralamaniTozala as tozalaUmumiy,
} from "@/lib/draft";
import type { DiagnosticKind } from "@/lib/domain/types";

/**
 * Yarim qolgan diagnostikaning qoralamasi.
 *
 * Umumiy qoralama mexanizmi `lib/draft.ts` da; bu yerda faqat
 * diagnostikaga xos shakl va kalit.
 */

export { ESKIRISH_SOATI } from "@/lib/draft";

const PREFIX = "musicped.diagnostika.qoralama.";

export type Qoralama = {
  /** Savol id -> javob */
  answers: Record<string, unknown>;
  /** Nechanchi bosqichda to'xtagan */
  step: number;
};

export function kalit(userId: string, kind: DiagnosticKind) {
  return `${PREFIX}${userId}.${kind}`;
}

function qoralamami(v: unknown): v is Qoralama {
  if (!v || typeof v !== "object") return false;
  const q = v as Partial<Qoralama>;
  return (
    typeof q.step === "number" &&
    Number.isFinite(q.step) &&
    !!q.answers &&
    typeof q.answers === "object"
  );
}

export function qoralamaniSaqla(
  userId: string,
  kind: DiagnosticKind,
  answers: Record<string, unknown>,
  step: number,
) {
  saqlaUmumiy<Qoralama>(kalit(userId, kind), { answers, step });
}

export function qoralamaniOqi(
  userId: string,
  kind: DiagnosticKind,
  now: Date = new Date(),
): Qoralama | null {
  const q = oqiUmumiy<Qoralama>(kalit(userId, kind), qoralamami, now);
  return q ? { answers: q.answers, step: Math.max(0, Math.floor(q.step)) } : null;
}

export function qoralamaniTozala(userId: string, kind: DiagnosticKind) {
  tozalaUmumiy(kalit(userId, kind));
}

/** Qoralamadagi javoblar soni — tiklash taklifida ko'rsatiladi. */
export function qoralamaSoni(q: Qoralama) {
  return Object.values(q.answers).filter(
    (v) => v !== undefined && (!Array.isArray(v) || v.length > 0),
  ).length;
}
