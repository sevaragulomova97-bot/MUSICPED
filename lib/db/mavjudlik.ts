"use client";

/**
 * Brauzerda ma'lumot saqlash mumkinmi — **ishlatishdan oldin** tekshiriladi.
 *
 * Platforma serversiz: diagnostika, darslar progressi, topshiriqlar va
 * portfolio — hammasi IndexedDB da. Agar brauzer saqlashga ruxsat
 * bermasa (shaxsiy rejim, sayt uchun ma'lumot saqlash o'chirilgan,
 * korporativ siyosat), ilovaning hech bir qismi ishlamaydi.
 *
 * Ilgari bunday holatda sahifa «Yuklanmoqda…» yozuvi bilan **abadiy
 * osilib qolardi**: `useLiveQuery` so'rovi xatoga uchraydi va `undefined`
 * qaytaradi, komponent esa buni «hali yuklanmoqda» deb tushunadi.
 * Foydalanuvchi nima bo'lganini bilmasdi.
 */

export type SaqlashHolati = "tekshirilmoqda" | "ishlaydi" | "bloklangan";

const TEST_DB = "musicped-sinov";

/**
 * IndexedDB ochilishini sinab ko'radi.
 *
 * Asosiy baza emas, kichik sinov bazasi ochiladi: asosiysini ochish
 * migratsiyalarni ishga tushirib yuborardi va xatoni aniqlashtirish
 * o'rniga chalkashtirardi.
 */
export async function saqlashniTekshir(): Promise<boolean> {
  try {
    if (typeof indexedDB === "undefined") return false;
    await new Promise<void>((resolve, reject) => {
      // Brauzer so'rovni javobsiz qoldirishi mumkin (ayrim shaxsiy
      // rejimlarda aynan shunday bo'ladi) — shuning uchun kutish vaqti bor.
      const vaqt = setTimeout(() => reject(new Error("javob kelmadi")), 4000);
      let sorov: IDBOpenDBRequest;
      try {
        sorov = indexedDB.open(TEST_DB);
      } catch (cause) {
        clearTimeout(vaqt);
        reject(cause);
        return;
      }
      sorov.onsuccess = () => {
        clearTimeout(vaqt);
        sorov.result.close();
        try {
          indexedDB.deleteDatabase(TEST_DB);
        } catch {
          // Tozalash muhim emas — sinov bazasi bo'sh.
        }
        resolve();
      };
      sorov.onerror = () => {
        clearTimeout(vaqt);
        reject(sorov.error ?? new Error("ochib bo'lmadi"));
      };
      sorov.onblocked = () => {
        clearTimeout(vaqt);
        reject(new Error("bloklangan"));
      };
    });
    return true;
  } catch {
    return false;
  }
}
