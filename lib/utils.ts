import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind sinflarini xavfsiz birlashtiradi (keyingi sinf oldingisini bosadi). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Sayt GitHub Pages'da `/MusicPed/` ostida turgani uchun `public/` ichidagi
 * fayllarga murojaat qilishda shu prefiks kerak. `next/link` va `next/image`
 * buni o'zi qo'shadi — bu yordamchi qo'lda yozilgan `src`/`href` uchun.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Foizni 0–100 oralig'ida butun songa keltiradi. */
export function toPercent(value: number, total: number) {
  if (!total) return 0;
  return Math.max(0, Math.min(100, Math.round((value / total) * 100)));
}

/** O'zbek tilidagi oy nomlari — rasmiy sana yozuvi uchun. */
export const OYLAR = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktabr",
  "noyabr",
  "dekabr",
] as const;

/**
 * Sana — `23.10.2026` ko'rinishida.
 *
 * Nega `Intl` emas: `uz-UZ` uchun natija brauzerning ICU ma'lumotiga
 * bog'liq. O'lchandi — Node `23/10/2026`, Chromium esa `2026-10-23`
 * qaytaradi. Ya'ni bir xil ma'lumot foydalanuvchiga brauzeriga qarab
 * boshqacha ko'rinadi, sertifikat PDF ida esa rasmiy hujjat sanasi
 * ISO ko'rinishida chiqib qolardi. Format o'zimizda bo'lsa — hamma
 * joyda bir xil.
 */
export function formatDate(value: Date | string) {
  const d = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return "—";
  const kun = String(d.getDate()).padStart(2, "0");
  const oy = String(d.getMonth() + 1).padStart(2, "0");
  return `${kun}.${oy}.${d.getFullYear()}`;
}

/** Rasmiy hujjat sanasi — `2026-yil 23-oktabr`. */
export function formatDateLong(value: Date | string) {
  const d = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return "—";
  return `${d.getFullYear()}-yil ${d.getDate()}-${OYLAR[d.getMonth()]}`;
}
