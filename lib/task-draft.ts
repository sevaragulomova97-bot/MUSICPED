import {
  qoralamaniOqi as oqiUmumiy,
  qoralamaniSaqla as saqlaUmumiy,
  qoralamaniTozala as tozalaUmumiy,
} from "@/lib/draft";

/**
 * Yarim qolgan topshiriqning qoralamasi.
 *
 * Matnli topshiriqlar — dars ishlanmasi, asar tahlili, refleksiya —
 * uzun yoziladi. Ilgari yozilgan matn faqat komponent holatida turardi
 * va sahifa yangilansa yo'qolardi. Testli topshiriqlarda ham javoblar
 * shunday edi.
 */

export { ESKIRISH_SOATI } from "@/lib/draft";

const PREFIX = "musicped.topshiriq.qoralama.";

export type TaskQoralama = {
  /** Test savollariga javoblar */
  answers: Record<string, unknown>;
  /** Matnli javob */
  text: string;
  /**
   * Topshiriq boshlangan vaqt (epoch ms) — faqat vaqt chegarasi bor
   * topshiriqlarda ma'noli.
   *
   * Busiz taymer har sahifa yangilanishida noldan boshlanardi: javoblar
   * qoralamadan tiklanar, vaqt esa qaytadan berilardi. Ya'ni vaqtli
   * testda cheksiz vaqt olish uchun sahifani yangilash yetardi — va bu
   * ball tadqiqot tahliliga tushadi.
   */
  startedAt?: number;
};

export function kalit(userId: string, taskId: string) {
  return `${PREFIX}${userId}.${taskId}`;
}

function qoralamami(v: unknown): v is TaskQoralama {
  if (!v || typeof v !== "object") return false;
  const q = v as Partial<TaskQoralama>;
  if (q.startedAt !== undefined && !Number.isFinite(q.startedAt)) return false;
  return (
    typeof q.text === "string" && !!q.answers && typeof q.answers === "object"
  );
}

export function taskQoralamaniSaqla(
  userId: string,
  taskId: string,
  answers: Record<string, unknown>,
  text: string,
  startedAt?: number,
) {
  saqlaUmumiy<TaskQoralama>(kalit(userId, taskId), { answers, text, startedAt });
}

export function taskQoralamaniOqi(
  userId: string,
  taskId: string,
  now: Date = new Date(),
): TaskQoralama | null {
  return oqiUmumiy<TaskQoralama>(kalit(userId, taskId), qoralamami, now);
}

export function taskQoralamaniTozala(userId: string, taskId: string) {
  tozalaUmumiy(kalit(userId, taskId));
}

/** Qoralamada ish bormi — bo'sh qoralama tiklanmaydi. */
export function taskQoralamaBormi(q: TaskQoralama) {
  if (q.text.trim().length > 0) return true;
  return Object.values(q.answers).some(
    (v) => v !== undefined && (!Array.isArray(v) || v.length > 0),
  );
}
