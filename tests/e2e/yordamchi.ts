import type { Page } from "@playwright/test";

/**
 * Testlar uchun umumiy yordamchilar.
 *
 * Profil tanlash sahifasidan o'tib o'tirmaslik uchun sessiya to'g'ridan-to'g'ri
 * `localStorage` ga yoziladi — bu kirish oqimini emas, keyingi sahifalarni
 * sinayotgan testlarni qisqartiradi. Kirish oqimining o'zi alohida testda
 * tekshiriladi.
 */

export type Rol = "TALABA" | "OQITUVCHI" | "ADMIN";

export async function sessiyaBer(
  page: Page,
  profil: { id: string; fullName: string; role: Rol; group?: string },
) {
  // `localStorage` ga yozish uchun avval shu domendagi biror sahifa ochiq
  // bo'lishi kerak.
  await page.goto("/kirish/");
  await page.evaluate((p) => {
    window.localStorage.setItem("musicped.session.v1", JSON.stringify(p));
  }, profil);
}

export const TALABA = {
  id: "e2e-talaba",
  fullName: "Sinov Talabasi",
  role: "TALABA" as const,
  group: "MT-24",
};

export const OQITUVCHI = {
  id: "e2e-oqituvchi",
  fullName: "Sinov O'qituvchisi",
  role: "OQITUVCHI" as const,
};

export const ADMIN = {
  id: "e2e-admin",
  fullName: "Sinov Administratori",
  role: "ADMIN" as const,
};

/** Dexie bazasini tozalaydi — testlar bir-biriga ta'sir qilmasin. */
export async function bazaniTozala(page: Page) {
  await page.evaluate(async () => {
    const bazalar = await indexedDB.databases?.();
    await Promise.all(
      (bazalar ?? []).map(
        (b) =>
          new Promise<void>((resolve) => {
            if (!b.name) return resolve();
            const req = indexedDB.deleteDatabase(b.name);
            req.onsuccess = () => resolve();
            req.onerror = () => resolve();
            req.onblocked = () => resolve();
          }),
      ),
    );
  });
}

/**
 * Bezak effektlarini o'chiradi (`html[data-effects="off"]`).
 *
 * Kurs oynachalari sekin qalqib turadi. Playwright esa bosish yoki
 * hover'dan **oldin** elementning to'xtashini talab qiladi: ikki ketma-ket
 * kadrda joyi bir xil bo'lishi kerak. Cheksiz animatsiyada bu shart
 * mashina bandligiga qarab goh bajariladi, goh yo'q — test esa
 * tebranib qoladi.
 *
 * Harakatning o'zini tekshiradigan testlar bor (`21-kurs-oynalari`),
 * shuning uchun boshqa testlar uni o'chirib qo'yishi mumkin: ular
 * havolani tekshiradi, bezakni emas.
 */
export async function bezakniOchir(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.setItem("musicped.effects.v1", "off");
  });
}
