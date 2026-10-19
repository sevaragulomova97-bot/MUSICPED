import { type InstrumentKind } from "@/lib/domain/instruments";

/**
 * Mashhur kuylar banki — «yonib o'chadigan klavishlar» bilan o'rganish uchun.
 *
 * Ikki rejim bitta ma'lumotdan ishlaydi:
 *  • **Eshitish** — kuy o'zi chalinadi, klavishlar vaqtida yonadi;
 *  • **O'rganish** — keyingi nota yonib turadi, talaba uni bosadi.
 *
 * ## Mualliflik huquqi
 *
 * Loyiha qoidasi qat'iy: himoyalangan material ishlatilmaydi. Shuning
 * uchun bankka **faqat mualliflik huquqi muddati tugagan** kuylar
 * kiritilgan — xalq kuylari va mualliflari vafotidan 70 yildan ko'proq
 * vaqt o'tgan bastakorlar asarlari. Har bir kuyning manbasi `manba`
 * maydonida yoziladi va `CREDITS.md` ga chiqariladi.
 *
 * ## Diapazon
 *
 * Har bir kuy o'z cholg'usida **chalinadigan** bo'lishi shart: kuydagi
 * har bir nota `content/instrument-range.ts` dagi ro'yxatda bo'lishi
 * kerak. Buni unit test tekshiradi — aks holda yonadigan klavish
 * ko'rsatilmay qolardi.
 */

export type TuneLevel = "oson" | "orta";

export type TuneNote = {
  /** Pitch ("C4") yoki doira zarbi ("bum") */
  note: string;
  /** Davomiyligi — chorak zarb birligida (1 = chorak, 0.5 = sakkizlik) */
  beats: number;
};

export type Tune = {
  id: string;
  instrument: InstrumentKind;
  title: string;
  /** Qisqa izoh — nimani mashq qiladi */
  description: string;
  /** Manba va mualliflik holati (CREDITS.md uchun) */
  manba: string;
  level: TuneLevel;
  /** Chorak zarblar soni daqiqasiga */
  bpm: number;
  notes: TuneNote[];
};

/* ─────────────────── Umumiy ohanglar (qayta ishlatiladi) ─────────────────── */

/** «Ah! vous dirai-je, maman» — 18-asr fransuz xalq kuyi. */
const YULDUZCHA: TuneNote[] = [
  { note: "C4", beats: 1 }, { note: "C4", beats: 1 },
  { note: "G4", beats: 1 }, { note: "G4", beats: 1 },
  { note: "A4", beats: 1 }, { note: "A4", beats: 1 },
  { note: "G4", beats: 2 },
  { note: "F4", beats: 1 }, { note: "F4", beats: 1 },
  { note: "E4", beats: 1 }, { note: "E4", beats: 1 },
  { note: "D4", beats: 1 }, { note: "D4", beats: 1 },
  { note: "C4", beats: 2 },
];

/** L. van Beethoven, 9-simfoniya finali (1824) — asosiy mavzu. */
const SHODLIK: TuneNote[] = [
  { note: "E4", beats: 1 }, { note: "E4", beats: 1 },
  { note: "F4", beats: 1 }, { note: "G4", beats: 1 },
  { note: "G4", beats: 1 }, { note: "F4", beats: 1 },
  { note: "E4", beats: 1 }, { note: "D4", beats: 1 },
  { note: "C4", beats: 1 }, { note: "C4", beats: 1 },
  { note: "D4", beats: 1 }, { note: "E4", beats: 1 },
  { note: "E4", beats: 1.5 }, { note: "D4", beats: 0.5 },
  { note: "D4", beats: 2 },
];

/** 19-asr an'anaviy bolalar kuyi («Mary Had a Little Lamb»). */
const QOZICHOQ: TuneNote[] = [
  { note: "E4", beats: 1 }, { note: "D4", beats: 1 },
  { note: "C4", beats: 1 }, { note: "D4", beats: 1 },
  { note: "E4", beats: 1 }, { note: "E4", beats: 1 },
  { note: "E4", beats: 2 },
  { note: "D4", beats: 1 }, { note: "D4", beats: 1 },
  { note: "D4", beats: 2 },
  { note: "E4", beats: 1 }, { note: "G4", beats: 1 },
  { note: "G4", beats: 2 },
];

const MANBA_YULDUZCHA =
  "«Ah! vous dirai-je, maman» — 18-asr fransuz xalq kuyi. Mualliflik huquqi muddati tugagan.";
const MANBA_SHODLIK =
  "L. van Beethoven, 9-simfoniya finali (1824). Mualliflik huquqi muddati tugagan.";
const MANBA_QOZICHOQ =
  "19-asr an'anaviy bolalar kuyi. Mualliflik huquqi muddati tugagan.";

/** Ohangni boshqa cholg'uga ko'chirish — id va matnlar o'zgaradi. */
function kuy(
  id: string,
  instrument: InstrumentKind,
  title: string,
  description: string,
  manba: string,
  level: TuneLevel,
  bpm: number,
  notes: TuneNote[],
): Tune {
  return { id, instrument, title, description, manba, level, bpm, notes };
}

/* ───────────────────────────── Pianino ───────────────────────────── */

/** Ch. Petzold, Menuet G-dur (BWV Anh. 114, ~1725). */
const MENUET: TuneNote[] = [
  { note: "D5", beats: 1 },
  { note: "G4", beats: 0.5 }, { note: "A4", beats: 0.5 },
  { note: "B4", beats: 0.5 }, { note: "C5", beats: 0.5 },
  { note: "D5", beats: 1 }, { note: "G4", beats: 1 }, { note: "G4", beats: 1 },
  { note: "E5", beats: 1 },
  { note: "C5", beats: 0.5 }, { note: "D5", beats: 0.5 },
  { note: "E5", beats: 0.5 }, { note: "F5", beats: 0.5 },
  { note: "G5", beats: 1 }, { note: "G4", beats: 1 }, { note: "G4", beats: 1 },
];

/** L. van Beethoven, «Elizaga» bagatellasi (1810) — boshlanishi. */
const ELIZAGA: TuneNote[] = [
  { note: "E5", beats: 0.5 }, { note: "Eb5", beats: 0.5 },
  { note: "E5", beats: 0.5 }, { note: "Eb5", beats: 0.5 },
  { note: "E5", beats: 0.5 }, { note: "B4", beats: 0.5 },
  { note: "D5", beats: 0.5 }, { note: "C5", beats: 0.5 },
  { note: "A4", beats: 2 },
];

/* ────────────────────────────── Nay ────────────────────────────── */

/** «Greensleeves» — 16-asr ingliz xalq kuyi. */
const GREENSLEEVES: TuneNote[] = [
  { note: "A4", beats: 1 },
  { note: "C5", beats: 1.5 }, { note: "D5", beats: 0.5 },
  { note: "E5", beats: 1 }, { note: "F5", beats: 0.5 }, { note: "E5", beats: 0.5 },
  { note: "D5", beats: 1.5 }, { note: "B4", beats: 0.5 },
  { note: "G4", beats: 1 }, { note: "A4", beats: 0.5 }, { note: "B4", beats: 0.5 },
  { note: "C5", beats: 1.5 }, { note: "A4", beats: 0.5 },
  { note: "A4", beats: 2 },
];

/* ───────────────────────────── Doira ───────────────────────────── */

const USUL_24: TuneNote[] = [
  { note: "bum", beats: 1 }, { note: "tak", beats: 1 },
  { note: "bum", beats: 1 }, { note: "tak", beats: 1 },
  { note: "bum", beats: 0.5 }, { note: "bum", beats: 0.5 },
  { note: "tak", beats: 1 },
];

const USUL_34: TuneNote[] = [
  { note: "bum", beats: 1 }, { note: "tak", beats: 1 }, { note: "tak", beats: 1 },
  { note: "bum", beats: 1 }, { note: "tak", beats: 1 }, { note: "tak", beats: 1 },
  { note: "bum", beats: 2 }, { note: "qarsak", beats: 1 },
];

const USUL_68: TuneNote[] = [
  { note: "bum", beats: 0.5 }, { note: "tak", beats: 0.5 }, { note: "tak", beats: 0.5 },
  { note: "bum", beats: 0.5 }, { note: "tak", beats: 0.5 }, { note: "tak", beats: 0.5 },
  { note: "bum", beats: 0.5 }, { note: "tak", beats: 0.5 }, { note: "qarsak", beats: 0.5 },
  { note: "bum", beats: 1.5 },
];

/* ──────────────────────────── Bank ──────────────────────────── */

export const KUYLAR: Tune[] = [
  /* Pianino */
  kuy("k-pia-yulduzcha", "pianino", "Yulduzcha",
    "Birinchi kuy: faqat oq klavishlar, sakrashlar kam.",
    MANBA_YULDUZCHA, "oson", 96, YULDUZCHA),
  kuy("k-pia-shodlik", "pianino", "Shodlik madhiyasi",
    "Ketma-ket pog'onalar bilan harakat — barmoqlar tartibini mustahkamlaydi.",
    MANBA_SHODLIK, "oson", 100, SHODLIK),
  kuy("k-pia-menuet", "pianino", "Menuet (sol major)",
    "Sakkizliklar va sakrashlar aralash: o'ng qo'l uchun yaxshi mashq.",
    "Ch. Petzold, Menuet G-dur (BWV Anh. 114, ~1725). Mualliflik huquqi muddati tugagan.",
    "orta", 108, MENUET),
  kuy("k-pia-elizaga", "pianino", "Elizaga (boshlanishi)",
    "Yarim tonli almashinuv — barmoqlarning mustaqilligini talab qiladi.",
    "L. van Beethoven, «Elizaga» bagatellasi (1810). Mualliflik huquqi muddati tugagan.",
    "orta", 72, ELIZAGA),

  /* Nay */
  kuy("k-nay-yulduzcha", "nay", "Yulduzcha",
    "Qisqa frazalar — nafasni taqsimlashni o'rganish uchun.",
    MANBA_YULDUZCHA, "oson", 88, YULDUZCHA),
  kuy("k-nay-shodlik", "nay", "Shodlik madhiyasi",
    "Uzun frazalar: har satrni bitta nafasda chalishga harakat qiling.",
    MANBA_SHODLIK, "oson", 92, SHODLIK),
  kuy("k-nay-greensleeves", "nay", "Greensleeves",
    "Lirik ohang, keng diapazon — ifodali ijro uchun.",
    "«Greensleeves» — 16-asr ingliz xalq kuyi. Mualliflik huquqi muddati tugagan.",
    "orta", 76, GREENSLEEVES),

  /* Dutor */
  kuy("k-dut-yulduzcha", "dutor", "Yulduzcha",
    "Baland torda, pardalarni ketma-ket bosib chalinadi.",
    MANBA_YULDUZCHA, "oson", 84, YULDUZCHA),
  kuy("k-dut-shodlik", "dutor", "Shodlik madhiyasi",
    "Pog'onama-pog'ona harakat: barmoq tartibini mustahkamlaydi.",
    MANBA_SHODLIK, "oson", 88, SHODLIK),
  kuy("k-dut-qozichoq", "dutor", "Qo'zichoq",
    "Eng tor diapazon — birinchi kuy sifatida qulay.",
    MANBA_QOZICHOQ, "oson", 80, QOZICHOQ),

  /* Rubob */
  kuy("k-rub-yulduzcha", "rubob", "Yulduzcha",
    "Baland torda chalinadi; chertish aniqligiga e'tibor bering.",
    MANBA_YULDUZCHA, "oson", 88, YULDUZCHA),
  kuy("k-rub-shodlik", "rubob", "Shodlik madhiyasi",
    "Tovushlar bir xil kuchda chiqishi kerak — chertish tekisligi mashqi.",
    MANBA_SHODLIK, "oson", 92, SHODLIK),
  kuy("k-rub-qozichoq", "rubob", "Qo'zichoq",
    "Qisqa va oson: yangi boshlovchilar uchun.",
    MANBA_QOZICHOQ, "oson", 84, QOZICHOQ),

  /* Gitara */
  kuy("k-git-yulduzcha", "gitara", "Yulduzcha",
    "Birinchi va ikkinchi torda chalinadi, pozitsiya o'zgarmaydi.",
    MANBA_YULDUZCHA, "oson", 84, YULDUZCHA),
  kuy("k-git-shodlik", "gitara", "Shodlik madhiyasi",
    "Ikki tor orasida o'tish — o'ng qo'l aniqligini talab qiladi.",
    MANBA_SHODLIK, "oson", 88, SHODLIK),
  kuy("k-git-qozichoq", "gitara", "Qo'zichoq",
    "Tor diapazon: birinchi pozitsiyadan chiqmaydi.",
    MANBA_QOZICHOQ, "oson", 80, QOZICHOQ),

  /* Doira */
  kuy("k-doi-usul-24", "doira", "Ikki choraklik usul",
    "Eng oddiy yurish usuli: bum — tak.",
    "O'quv maqsadida tuzilgan metrik naqsh (muallifsiz).", "oson", 92, USUL_24),
  kuy("k-doi-usul-34", "doira", "Uch choraklik usul",
    "Vals metri: kuchli zarb va ikki kuchsiz zarb.",
    "O'quv maqsadida tuzilgan metrik naqsh (muallifsiz).", "oson", 108, USUL_34),
  kuy("k-doi-usul-68", "doira", "Olti sakkizlik usul",
    "Ikki uchlikka bo'linadigan metr — tez va harakatchan.",
    "O'quv maqsadida tuzilgan metrik naqsh (muallifsiz).", "orta", 116, USUL_68),
];

export const KUYLAR_BY_ID = new Map(KUYLAR.map((k) => [k.id, k]));

/** Shu cholg'u uchun kuylar. */
export function tunesFor(kind: InstrumentKind): Tune[] {
  return KUYLAR.filter((k) => k.instrument === kind);
}

/** Kuyning umumiy davomiyligi (ms). */
export function tuneDurationMs(tune: Tune): number {
  const beats = tune.notes.reduce((s, n) => s + n.beats, 0);
  return Math.round((beats * 60_000) / tune.bpm);
}
