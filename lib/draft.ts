/**
 * Yarim qolgan ishning qoralamasi.
 *
 * Platformada uzoq davom etadigan ikki ish bor: diagnostika (32 savol)
 * va matnli topshiriq (dars ishlanmasi, tahlil, refleksiya). Ikkalasi
 * ham o'n-yigirma daqiqalik mehnat, va ikkalasi ham ilgari faqat
 * komponent holatida turardi — sahifa yangilansa, «orqaga» bosilsa
 * yoki brauzer yorliqni xotiradan chiqarsa (mobil brauzerlar buni
 * muntazam qiladi) hammasi yo'qolardi.
 *
 * Qoralama `localStorage` da saqlanadi: u IndexedDB dan yengilroq va
 * har bir o'zgarishdan keyin yozish uchun mos. Ish yakunlangach
 * qoralama o'chiriladi.
 */

/** Qoralama shuncha soatdan keyin eskirgan hisoblanadi. */
export const ESKIRISH_SOATI = 24;

/**
 * Soat farqiga chidamlilik.
 *
 * Qurilmaning soati biroz oldinda bo'lsa, qoralama «kelajakdan» kelgan
 * bo'lib ko'rinadi. Buni qat'iy rad etish foydalanuvchining ishini
 * sababsiz yo'qotardi — maktab kompyuterlarida soat tez-tez xato
 * bo'ladi. Shuning uchun bir soatgacha oldinga ketgan vaqt qabul
 * qilinadi.
 */
export const SOAT_FARQI = 1;

export type Qoralama<T> = {
  qiymat: T;
  /** ISO vaqt */
  updatedAt: string;
};

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

export function qoralamaniSaqla<T>(kalit: string, qiymat: T) {
  try {
    const q: Qoralama<T> = { qiymat, updatedAt: new Date().toISOString() };
    saqlash()?.setItem(kalit, JSON.stringify(q));
  } catch {
    // Saqlash bloklangan bo'lsa, ish baribir davom etadi — faqat
    // qoralama bo'lmaydi.
  }
}

/**
 * Qoralamani o'qiydi.
 *
 * Eskirgan qoralama qaytarilmaydi: bir hafta oldin yarim tashlangan
 * ish bugungisi bilan aralashib ketsa, natija ma'nosiz bo'lardi va
 * buni foydalanuvchi sezmasdi ham.
 */
export function qoralamaniOqi<T>(
  kalit: string,
  tekshir: (v: unknown) => v is T,
  now: Date = new Date(),
): T | null {
  try {
    const raw = saqlash()?.getItem(kalit);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Qoralama<unknown>>;
    if (!parsed || typeof parsed.updatedAt !== "string") return null;
    const soat = (now.getTime() - new Date(parsed.updatedAt).getTime()) / 3_600_000;
    if (!Number.isFinite(soat) || soat < -SOAT_FARQI || soat > ESKIRISH_SOATI) {
      return null;
    }
    return tekshir(parsed.qiymat) ? parsed.qiymat : null;
  } catch {
    return null;
  }
}

export function qoralamaniTozala(kalit: string) {
  try {
    saqlash()?.removeItem(kalit);
  } catch {
    // Tozalab bo'lmasa ham zarari yo'q: qoralama bir sutkada eskiradi.
  }
}
