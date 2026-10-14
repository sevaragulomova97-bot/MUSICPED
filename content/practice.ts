import { InstrumentKind } from "@/lib/domain/instruments";
import type { DiagnosticArea } from "@/lib/domain/types";

/**
 * Virtual cholg'ular uchun mashqlar.
 *
 * Uch rejim:
 *  • `ketma-ket` — notalar ketma-ketligini to'g'ri tartibda chalish (aniqlik %)
 *  • `ritm`      — namuna ritmni eshitib, vaqt aniqligi bilan takrorlash (ms)
 *  • `erkin`     — baholanmaydi, natija portfolioga yoziladi
 */

export type PracticeMode = "ketma-ket" | "ritm" | "erkin";
export type PracticeLevel = "oson" | "orta" | "erkin";

export const DARAJA_NOMI: Record<PracticeLevel, string> = {
  oson: "Oson",
  orta: "O'rta",
  erkin: "Erkin",
};

export type Exercise = {
  id: string;
  instrument: InstrumentKind;
  title: string;
  description: string;
  level: PracticeLevel;
  durationMin: number;
  mode: PracticeMode;
  /** Qaysi diagnostika yo'nalishini rivojlantiradi */
  area: DiagnosticArea;
  /** `ketma-ket` rejimi uchun notalar tartibi */
  sequence?: string[];
  /** `ritm` rejimi uchun zarb va vaqt (ms) */
  pattern?: Array<{ stroke: string; timeMs: number }>;
};

/* ───────────────────────────── Pianino ───────────────────────────── */

const PIANINO: Exercise[] = [
  {
    id: "p-do-re-mi",
    instrument: "pianino",
    title: "Do–Re–Mi",
    description:
      "Birinchi oktavaning yetti oq klavishini tartib bilan chaling. Nota nomlarini ovoz chiqarib ayting.",
    level: "oson",
    durationMin: 5,
    mode: "ketma-ket",
    area: "texnika",
    sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
  },
  {
    id: "p-oddiy-kuy",
    instrument: "pianino",
    title: "Oddiy kuy",
    description:
      "Qisqa kuyni notadan chalib ko'ring. Tempni sekin boshlang, xato bo'lsa boshidan qayting.",
    level: "orta",
    durationMin: 10,
    mode: "ketma-ket",
    area: "texnika",
    sequence: [
      "E4", "E4", "F4", "G4",
      "G4", "F4", "E4", "D4",
      "C4", "C4", "D4", "E4",
      "E4", "D4", "D4",
    ],
  },
  {
    id: "p-oz-kuy",
    instrument: "pianino",
    title: "O'z kuyingni yarat",
    description:
      "Erkin improvizatsiya. Yozib oling, qayta eshiting va yoqqanini portfolioga saqlang.",
    level: "erkin",
    durationMin: 15,
    mode: "erkin",
    area: "ijodkorlik",
  },
];

/* ────────────────────────────── Dutor ────────────────────────────── */

const DUTOR: Exercise[] = [
  {
    id: "d-barmoq",
    instrument: "dutor",
    title: "Barmoq mashqlari",
    description:
      "Birinchi torda pardalarni ketma-ket bosib chiqing. Barmoqlaringiz pardaga yaqin tursin.",
    level: "oson",
    durationMin: 5,
    mode: "ketma-ket",
    area: "texnika",
    sequence: ["C4", "D4", "E4", "F4", "G4", "F4", "E4", "D4", "C4"],
  },
  {
    id: "d-oddiy-kuy",
    instrument: "dutor",
    title: "Oddiy kuy",
    description: "Ikki tordan foydalanib qisqa kuy chaling.",
    level: "orta",
    durationMin: 10,
    mode: "ketma-ket",
    area: "texnika",
    sequence: ["G3", "A3", "C4", "D4", "E4", "D4", "C4", "A3", "G3"],
  },
  {
    id: "d-erkin",
    instrument: "dutor",
    title: "Erkin ijro",
    description: "O'zingiz tanlagan ohangni ijro eting va yozib oling.",
    level: "erkin",
    durationMin: 15,
    mode: "erkin",
    area: "ijodkorlik",
  },
];

/* ────────────────────────────── Doira ────────────────────────────── */

/** 100 BPM da chorak zarb = 600 ms. */
const Q = 600;

const DOIRA: Exercise[] = [
  {
    id: "doira-asosiy",
    instrument: "doira",
    title: "Asosiy zarb",
    description:
      "Eng sodda usul: kuchli zarb markazga (bum), kuchsizi chetga (tak).",
    level: "oson",
    durationMin: 3,
    mode: "ritm",
    area: "ritm",
    pattern: [
      { stroke: "bum", timeMs: 0 },
      { stroke: "tak", timeMs: Q },
      { stroke: "bum", timeMs: Q * 2 },
      { stroke: "tak", timeMs: Q * 3 },
    ],
  },
  {
    id: "doira-murakkab",
    instrument: "doira",
    title: "Murakkab ritm",
    description:
      "Sinkopali naqsh: urg'u kutilmagan joyga tushadi. Avval sekin tempda mashq qiling.",
    level: "orta",
    durationMin: 5,
    mode: "ritm",
    area: "ritm",
    pattern: [
      { stroke: "bum", timeMs: 0 },
      { stroke: "tak", timeMs: Q * 0.5 },
      { stroke: "tak", timeMs: Q },
      { stroke: "bum", timeMs: Q * 1.5 },
      { stroke: "qarsak", timeMs: Q * 2 },
      { stroke: "tak", timeMs: Q * 2.5 },
      { stroke: "bum", timeMs: Q * 3 },
    ],
  },
  {
    id: "doira-jorlik",
    instrument: "doira",
    title: "Qo'shiq jo'rligi",
    description:
      "Qo'shiqqa jo'r bo'lish uchun ishlatiladigan uzunroq naqsh. Tempni oxirigacha bir xil saqlang.",
    level: "erkin",
    durationMin: 7,
    mode: "ritm",
    area: "ritm",
    pattern: [
      { stroke: "bum", timeMs: 0 },
      { stroke: "tak", timeMs: Q * 0.5 },
      { stroke: "bum", timeMs: Q },
      { stroke: "tak", timeMs: Q * 1.5 },
      { stroke: "qarsak", timeMs: Q * 2 },
      { stroke: "bum", timeMs: Q * 2.5 },
      { stroke: "tak", timeMs: Q * 3 },
      { stroke: "tak", timeMs: Q * 3.5 },
    ],
  },
];

/* ────────────────────────────── Gitara ────────────────────────────── */

const GITARA: Exercise[] = [
  {
    id: "g-ochiq-torlar",
    instrument: "gitara",
    title: "Ochiq torlar",
    description:
      "Oltita ochiq torni pastdan yuqoriga ketma-ket cherting: Mi–Lya–Re–Sol–Si–Mi.",
    level: "oson",
    durationMin: 5,
    mode: "ketma-ket",
    area: "texnika",
    sequence: ["E2", "A2", "D3", "G3", "B3", "E4"],
  },
  {
    id: "g-akkordlar",
    instrument: "gitara",
    title: "Birinchi akkordlar",
    description:
      "Am va E akkordlari tovushlarini ketma-ket chalib, qulog'ingizni akkord tuzilishiga o'rgating.",
    level: "orta",
    durationMin: 10,
    mode: "ketma-ket",
    area: "nazariya",
    sequence: ["A2", "C3", "E3", "A3", "E2", "Ab3", "B3", "E4"],
  },
  {
    id: "g-erkin",
    instrument: "gitara",
    title: "Erkin ijro",
    description: "O'zingiz tanlagan ohangni ijro eting va yozib oling.",
    level: "erkin",
    durationMin: 15,
    mode: "erkin",
    area: "ijodkorlik",
  },
];

/* ────────────────────────────── Rubob ────────────────────────────── */

const RUBOB: Exercise[] = [
  {
    id: "r-barmoq",
    instrument: "rubob",
    title: "Barmoq mashqlari",
    description:
      "Pardalarni ketma-ket bosib chiqing. Rubob tovushi yorqin, shuning uchun zarb aniq bo'lsin.",
    level: "oson",
    durationMin: 5,
    mode: "ketma-ket",
    area: "texnika",
    sequence: ["C4", "D4", "E4", "F4", "G4", "F4", "E4", "D4", "C4"],
  },
  {
    id: "r-maqom",
    instrument: "rubob",
    title: "Maqom ohangi",
    description:
      "Maqom uslubidagi qisqa ohang. Har bir notani to'liq jaranglashiga qo'yib bering.",
    level: "orta",
    durationMin: 10,
    mode: "ketma-ket",
    area: "nazariya",
    sequence: ["D4", "E4", "F4", "G4", "A4", "G4", "F4", "E4", "D4", "C4", "D4"],
  },
  {
    id: "r-erkin",
    instrument: "rubob",
    title: "Erkin ijro",
    description: "O'z ohangingizni yarating va portfolioga saqlang.",
    level: "erkin",
    durationMin: 15,
    mode: "erkin",
    area: "ijodkorlik",
  },
];

/* ─────────────────────────────── Nay ─────────────────────────────── */

const NAY: Exercise[] = [
  {
    id: "n-gamma",
    instrument: "nay",
    title: "Do mažor gammasi",
    description:
      "Gammani sekin, har bir tovushni teng davomiylikda chalib chiqing.",
    level: "oson",
    durationMin: 5,
    mode: "ketma-ket",
    area: "eshituv",
    sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
  },
  {
    id: "n-ohang",
    instrument: "nay",
    title: "Lirik ohang",
    description:
      "Cho'ziq, qo'shiqsimon ohang. Nafasni tejab, ohangni uzmasdan chalishga harakat qiling.",
    level: "orta",
    durationMin: 10,
    mode: "ketma-ket",
    area: "eshituv",
    sequence: ["G4", "A4", "B4", "A4", "G4", "E4", "G4", "F4", "E4", "D4", "C4"],
  },
  {
    id: "n-erkin",
    instrument: "nay",
    title: "Erkin improvizatsiya",
    description: "Erkin ijro eting, yozib oling va yoqqanini saqlang.",
    level: "erkin",
    durationMin: 15,
    mode: "erkin",
    area: "ijodkorlik",
  },
];

export const MASHQLAR: Exercise[] = [
  ...PIANINO,
  ...GITARA,
  ...DUTOR,
  ...RUBOB,
  ...NAY,
  ...DOIRA,
];

export function exercisesFor(instrument: InstrumentKind): Exercise[] {
  return MASHQLAR.filter((e) => e.instrument === instrument);
}

export function findExercise(id: string): Exercise | undefined {
  return MASHQLAR.find((e) => e.id === id);
}

/* ─────────────────── Ritm aniqligini baholash ─────────────────── */

/** Shu chetlanishdan keyin zarb umuman «tushmagan» deb hisoblanadi. */
export const RITM_MAX_OGISH_MS = 400;

/**
 * Ritm mashqi natijasini baholaydi.
 *
 * Har bir zarb uchun eng yaqin namunaviy zarb topiladi va vaqt farqi
 * o'lchanadi. Aniqlik — o'rtacha chetlanishdan hisoblanadi: 0 ms = 100%,
 * {@link RITM_MAX_OGISH_MS} va undan katta = 0%.
 *
 * Zarb **turi** ham tekshiriladi: to'g'ri vaqtda, lekin noto'g'ri zona
 * bosilsa, u zarb hisobga olinmaydi.
 */
export function scoreRhythm(
  pattern: Array<{ stroke: string; timeMs: number }>,
  played: Array<{ stroke: string; timeMs: number }>,
): { accuracy: number; averageOffsetMs: number; matched: number } {
  if (!pattern.length) return { accuracy: 0, averageOffsetMs: 0, matched: 0 };

  const ishlatilgan = new Set<number>();
  const ogishlar: number[] = [];

  for (const target of pattern) {
    let best = -1;
    let bestOffset = Number.POSITIVE_INFINITY;

    for (let i = 0; i < played.length; i += 1) {
      if (ishlatilgan.has(i)) continue;
      if (played[i].stroke !== target.stroke) continue;
      const offset = Math.abs(played[i].timeMs - target.timeMs);
      if (offset < bestOffset) {
        bestOffset = offset;
        best = i;
      }
    }

    if (best >= 0 && bestOffset <= RITM_MAX_OGISH_MS) {
      ishlatilgan.add(best);
      ogishlar.push(bestOffset);
    }
  }

  const matched = ogishlar.length;
  if (!matched) return { accuracy: 0, averageOffsetMs: RITM_MAX_OGISH_MS, matched: 0 };

  const ortachaOgish = ogishlar.reduce((s, o) => s + o, 0) / matched;
  // Topilmagan zarblar ham natijani pasaytiradi.
  const qamrov = matched / pattern.length;
  const vaqtAniqligi = 1 - ortachaOgish / RITM_MAX_OGISH_MS;

  return {
    accuracy: Math.max(0, Math.min(100, Math.round(qamrov * vaqtAniqligi * 100))),
    averageOffsetMs: Math.round(ortachaOgish),
    matched,
  };
}
