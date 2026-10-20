import type { InstrumentKind } from "@/lib/domain/instruments";

/**
 * Tembr variantlari.
 *
 * FluidR3_GM da haqiqiy dutor, rubob va doira yozuvlari yo'q — ularga eng
 * yaqin tovushlarni tanlash kerak bo'ladi. Qaysi variant haqiqiyroq
 * eshitilishini **faqat quloq hal qiladi**, shuning uchun tanlov kodda
 * qotirilmay, foydalanuvchiga beriladi: har bir cholg'u sahifasida
 * «Tovush turi» ro'yxati bor va tanlov brauzerda eslab qolinadi.
 */

export type Shaping = {
  /** Past chastotalarni kesish (Hz) */
  highpass?: number;
  /** Yuqori chastotalarni kesish (Hz) */
  lowpass?: number;
  /** Yorqinlikni oshirish/kamaytirish (dB, 4 kHz atrofida) */
  presence?: number;
  reverbDecay: number;
  reverbWet: number;
  volumeDb: number;
  /** Nota qo'yib yuborilgandan keyin so'nish vaqti (soniya) */
  release?: number;
};

export type Timbre = {
  id: string;
  label: string;
  /** `public/audio/<folder>/` */
  folder: string;
  shaping: Shaping;
  /**
   * Papkada `bank.json` bormi.
   *
   * Bank bo'lsa, cholg'u yangi dvigatelda chalinadi: ijro kuchi
   * qatlamlari, zarb variantlari va ovozlarni boshqarish bilan
   * (`lib/audio/sampler.ts`). Boshqa tembrlar eski `Tone.Sampler`
   * yo'lidan ketaveradi — pianino va gitara ovozi o'zgarmaydi.
   */
  bank?: boolean;
};

/** Namunalar olingan notalar (har 3 yarim tonda bitta). */
export const SAMPLE_NOTES = [
  "C2", "Eb2", "Gb2", "A2",
  "C3", "Eb3", "Gb3", "A3",
  "C4", "Eb4", "Gb4", "A4",
  "C5", "Eb5", "Gb5", "A5",
  "C6",
];

export const TEMBRLAR: Record<InstrumentKind, Timbre[]> = {
  pianino: [
    {
      id: "grand",
      label: "Akustik royal",
      folder: "piano",
      shaping: { reverbDecay: 1.8, reverbWet: 0.16, volumeDb: -6, release: 1.0 },
    },
  ],

  gitara: [
    {
      id: "nylon",
      label: "Klassik (nayloniy tor)",
      folder: "nylon",
      shaping: { reverbDecay: 1.6, reverbWet: 0.18, volumeDb: -4, release: 0.9 },
    },
    {
      id: "steel",
      label: "Akustik (metall tor)",
      folder: "steel",
      shaping: { reverbDecay: 1.6, reverbWet: 0.18, volumeDb: -5, release: 0.9 },
    },
  ],

  dutor: [
    {
      // Dutorning o'z fizik modeli: ikki tor, kvarta oralig'ida; ipak torning
      // so'nishi, uzun dastaning yumshoq zarbi, kichik tut yog'ochli korpusning
      // rezonanslari (250 Hz havo, 430 Hz qopqoq) va 1,2 kHz dagi "dimog'i"
      // formanti modellashtirilgan. Namunalar `tools/dutor-model/` dagi skript
      // bilan render qilingan — gitara yozuvi emas.
      id: "model",
      label: "Dutor modeli (tavsiya etiladi)",
      folder: "dutor-model",
      bank: true,
      // Balandlik boshqa dutor variantlari bilan tenglashtirilgan
      // (brauzerda o'lchangan cho'qqi ~0,10).
      shaping: { reverbDecay: 2.0, reverbWet: 0.2, volumeDb: -16, release: 1.4 },
    },
    {
      id: "nylon-soft",
      label: "Yumshoq ipak tor",
      folder: "nylon",
      shaping: {
        lowpass: 3400,
        presence: -2,
        reverbDecay: 2.2,
        reverbWet: 0.24,
        volumeDb: -3,
        release: 1.3,
      },
    },
    {
      id: "nylon-bright",
      label: "Yorqinroq tor",
      folder: "nylon",
      shaping: { presence: 2, reverbDecay: 2.0, reverbWet: 0.2, volumeDb: -3, release: 1.2 },
    },
    {
      id: "pizzicato",
      label: "Pitsikato (qisqa chertma)",
      folder: "pizzicato",
      shaping: { lowpass: 4200, reverbDecay: 1.8, reverbWet: 0.2, volumeDb: -2, release: 0.8 },
    },
  ],

  rubob: [
    {
      // Rubobning o'z fizik modeli: metall tor (yuqori garmonikalar
      // saqlanadi), nokka bilan ko'prikka yaqin chertish (yorqin zarb),
      // teri qoplangan kosa rezonanslari va **uchta simpatik tor** —
      // rubobning jarangli "shleyfi" shundan. Gitara yozuvida bunday
      // narsa umuman yo'q. Manba: `tools/instrument-models/`.
      id: "model",
      label: "Rubob modeli (tavsiya etiladi)",
      folder: "rubob-model",
      bank: true,
      shaping: { reverbDecay: 2.6, reverbWet: 0.26, volumeDb: -15, release: 1.2 },
    },
    {
      id: "steel",
      label: "Metall tor (gitara)",
      folder: "steel",
      shaping: {
        highpass: 110,
        presence: 4,
        reverbDecay: 2.6,
        reverbWet: 0.28,
        volumeDb: -5,
        release: 1.1,
      },
    },
    {
      id: "harpsichord",
      label: "Jarangdor chertma (klavesin)",
      folder: "harpsichord",
      shaping: {
        highpass: 140,
        presence: 3,
        reverbDecay: 2.4,
        reverbWet: 0.26,
        volumeDb: -7,
        release: 0.9,
      },
    },
    {
      id: "clavinet",
      label: "O'tkir metall (klavinet)",
      folder: "clavinet",
      shaping: {
        highpass: 150,
        presence: 2,
        reverbDecay: 2.0,
        reverbWet: 0.22,
        volumeDb: -6,
        release: 0.8,
      },
    },
    {
      id: "pizzicato",
      label: "Pitsikato torlar",
      folder: "pizzicato",
      shaping: { presence: 3, reverbDecay: 2.2, reverbWet: 0.24, volumeDb: -3, release: 0.9 },
    },
  ],

  nay: [
    {
      id: "flute",
      label: "Fleyta",
      folder: "flute",
      shaping: { reverbDecay: 2.0, reverbWet: 0.22, volumeDb: -8, release: 0.5 },
    },
  ],

  // Barcha doira variantlari bir xil balandlikda eshitilsin deb, har birining
  // `volumeDb` qiymati brauzerda o'lchab sozlangan (cho'qqi ~0,3).
  doira: [
    {
      // Doiraning o'z fizik modeli — modal sintez. Membrana garmonik
      // bo'lmagan Bessel rejimlarida tebranadi (1,00 · 1,55 · 2,04 · 2,18 …),
      // zarb joyi esa qaysi rejim uyg'onishini belgilaydi: markazga
      // urilganda chuqur "bum", chetga urilganda qisqa "tak", gardishda esa
      // metall halqalarning "qarsak" jarangi.
      id: "model",
      label: "Doira modeli (tavsiya etiladi)",
      folder: "doira-model",
      bank: true,
      // Balandlik brauzerda o'lchab tenglashtirilgan (cho'qqi ~0,30)
      shaping: { reverbDecay: 1.2, reverbWet: 0.1, volumeDb: -5.5 },
    },
    {
      id: "tom",
      label: "Tom + bongo + daf",
      folder: "doira",
      shaping: { reverbDecay: 1.1, reverbWet: 0.1, volumeDb: -9 },
    },
    {
      id: "taiko",
      label: "Chuqur ramkali baraban",
      folder: "doira2",
      // Bu namunalar boshqalardan ancha jimroq yozilgan, shuning uchun
      // balandlik ko'tariladi.
      shaping: { reverbDecay: 1.3, reverbWet: 0.12, volumeDb: 10 },
    },
    {
      id: "past",
      label: "Past va to'liq",
      folder: "doira3",
      shaping: { reverbDecay: 1.2, reverbWet: 0.11, volumeDb: -8 },
    },
    {
      id: "orkestr",
      label: "Orkestr to'plami",
      folder: "doira4",
      shaping: { reverbDecay: 1.4, reverbWet: 0.14, volumeDb: -8 },
    },
  ],
};

export function timbresFor(kind: InstrumentKind): Timbre[] {
  return TEMBRLAR[kind];
}

export function defaultTimbre(kind: InstrumentKind): Timbre {
  return TEMBRLAR[kind][0];
}

export function findTimbre(kind: InstrumentKind, id: string | null | undefined): Timbre {
  if (!id) return defaultTimbre(kind);
  return TEMBRLAR[kind].find((t) => t.id === id) ?? defaultTimbre(kind);
}

/** Tanlov brauzerda eslab qolinadi — har bir cholg'u uchun alohida. */
export const TIMBRE_STORAGE_PREFIX = "musicped.timbre.";
