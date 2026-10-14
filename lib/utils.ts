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

/** O'zbekcha sana: 12.09.2025 */
export function formatDate(value: Date | string) {
  const d = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return "—";
  return new Intl.DateTimeFormat("uz-UZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}
