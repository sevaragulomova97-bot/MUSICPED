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
