/**
 * Cholg'ular lug'ati — **audio dvigatelidan mustaqil**.
 *
 * Bu fayl `"use client"` emas: nomlar va toifalar server komponentlarida ham,
 * testlarda ham kerak. Tone.js ga bog'liq kod `lib/audio/instruments.ts` da.
 */

export const CHOLGULAR = [
  "pianino",
  "gitara",
  "dutor",
  "rubob",
  "nay",
  "doira",
] as const;

export type InstrumentKind = (typeof CHOLGULAR)[number];

export const CHOLGU_NOMI: Record<InstrumentKind, string> = {
  pianino: "Pianino",
  gitara: "Gitara",
  dutor: "Dutor",
  rubob: "Rubob",
  nay: "Nay",
  doira: "Doira",
};

/**
 * Cholg'ular uch toifaga bo'linadi — bu ularning qanday boshqarilishini
 * belgilaydi:
 *
 *  • `sustained`  (pianino, nay) — klavish bosilib turiladi, qo'yib
 *    yuborilganda tovush tugaydi: `attack` + `release`.
 *  • `plucked`    (gitara, dutor, rubob) — bir marta chertiladi va namuna
 *    tabiiy ravishda so'nadi; uni oldindan kesish noto'g'ri bo'lardi.
 *  • `percussive` (doira) — zarb, davomiyligi yo'q.
 */
const SUSTAINED: ReadonlySet<InstrumentKind> = new Set<InstrumentKind>([
  "pianino",
  "nay",
]);

const PERKUSSIYA: ReadonlySet<InstrumentKind> = new Set<InstrumentKind>(["doira"]);

/** Tovush klavish bosilib turilganda davom etadimi. */
export function isSustained(kind: InstrumentKind) {
  return SUSTAINED.has(kind);
}

export function isPercussive(kind: InstrumentKind) {
  return PERKUSSIYA.has(kind);
}

/** Chertiladigan yoki uriladigan cholg'u — bir harakat bilan ishlaydi. */
export function isOneShot(kind: InstrumentKind) {
  return !SUSTAINED.has(kind);
}

/** Doira zarblari. */
export const DOIRA_ZARBLARI = ["bum", "tak", "qarsak"] as const;
export type DoiraStroke = (typeof DOIRA_ZARBLARI)[number];

export const DOIRA_ZARB_NOMI: Record<DoiraStroke, string> = {
  bum: "Bum (markaz)",
  tak: "Tak (chet)",
  qarsak: "Qarsak (gardish)",
};
