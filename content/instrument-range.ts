import { type InstrumentKind } from "@/lib/domain/instruments";

/**
 * Har bir cholg'uda chalish mumkin bo'lgan tovushlar.
 *
 * Ilgari bu ro'yxatlar sahifa fayllari ichida (`TORLAR`) turardi va ularni
 * faqat o'sha sahifa ko'rardi. Kuylar banki qo'shilgach bu yetarli
 * bo'lmay qoldi: kuyda cholg'uda umuman yo'q nota bo'lsa, «yonadigan
 * klavish» hech qayerda yonmaydi va talaba nimani bosishini bilmaydi.
 *
 * Endi diapazon shu yerda turadi — sahifalar ham, testlar ham undan
 * foydalanadi, shuning uchun chalib bo'lmaydigan kuy testda yiqiladi.
 */

export type StringSpec = { nom: string; notalar: string[] };

export const DUTOR_TORLARI: StringSpec[] = [
  { nom: "Past tor", notalar: ["G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4"] },
  { nom: "Baland tor", notalar: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"] },
];

export const RUBOB_TORLARI: StringSpec[] = [
  { nom: "Baland tor", notalar: ["D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5"] },
  { nom: "O'rta tor", notalar: ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4"] },
  { nom: "Past tor", notalar: ["D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4"] },
];

export const GITARA_TORLARI: StringSpec[] = [
  { nom: "1 — Mi (yuqori)", notalar: ["E4", "F4", "Gb4", "G4", "Ab4", "A4"] },
  { nom: "2 — Si", notalar: ["B3", "C4", "Db4", "D4", "Eb4", "E4"] },
  { nom: "3 — Sol", notalar: ["G3", "Ab3", "A3", "Bb3", "B3", "C4"] },
  { nom: "4 — Re", notalar: ["D3", "Eb3", "E3", "F3", "Gb3", "G3"] },
  { nom: "5 — Lya", notalar: ["A2", "Bb2", "B2", "C3", "Db3", "D3"] },
  { nom: "6 — Mi (past)", notalar: ["E2", "F2", "Gb2", "G2", "Ab2", "A2"] },
];

/** Klaviatura ko'rinishidagi cholg'ular uchun standart diapazon. */
export const KLAVIATURA_BOSHLANISHI = 4;
export const KLAVIATURA_OKTAVALARI = 2;

const NOTA_HARFLARI = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

/** `startOctave` dan boshlab `count` oktava tovushlari. */
export function klaviaturaNotalari(startOctave: number, count: number): string[] {
  const natija: string[] = [];
  for (let o = 0; o < count; o += 1) {
    for (const harf of NOTA_HARFLARI) natija.push(`${harf}${startOctave + o}`);
  }
  natija.push(`C${startOctave + count}`);
  return natija;
}

/**
 * Cholg'uda mavjud tovushlar to'plami.
 *
 * Pianino va nay uchun diapazon foydalanuvchi tanlagan oktavaga bog'liq;
 * bu yerda **standart** ko'rinish beriladi va kuylar shunga moslanadi.
 */
export const CHOLGU_NOTALARI: Record<InstrumentKind, readonly string[]> = {
  pianino: klaviaturaNotalari(KLAVIATURA_BOSHLANISHI, KLAVIATURA_OKTAVALARI),
  nay: klaviaturaNotalari(KLAVIATURA_BOSHLANISHI, KLAVIATURA_OKTAVALARI),
  dutor: [...new Set(DUTOR_TORLARI.flatMap((t) => t.notalar))],
  rubob: [...new Set(RUBOB_TORLARI.flatMap((t) => t.notalar))],
  gitara: [...new Set(GITARA_TORLARI.flatMap((t) => t.notalar))],
  doira: ["bum", "tak", "qarsak"],
};
