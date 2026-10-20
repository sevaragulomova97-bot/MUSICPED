import type { InstrumentKind } from "@/lib/domain/instruments";

/**
 * Tembr variantlari.
 *
 * Dutor, rubob va doirada ikkitadan variant bor va ikkalasining ham
 * kelib chiqishi ma'lum:
 *
 *  • **haqiqiy yozuv** — qarindosh akustik cholg'uning yozuvi (standart);
 *  • **fizik model** — cholg'uning o'z akustikasidan hisoblangan.
 *
 * Ilgari bu ro'yxatda General MIDI dan olingan o'rinbosarlar ham bor edi
 * (klavesin, klavinet, pitsikato, tom-bongo). Ular namuna banki
 * tizimidan oldin yozilgan, metadatasi yo'q — ya'ni interfeys ularning
 * kelib chiqishini ko'rsata olmasdi — va tovush sifati bo'yicha ham
 * yangi banklardan past edi. Shuning uchun olib tashlandi: har biri
 * nima ekani ma'lum bo'lgan ikkita yaxshi variant, kelib chiqishi
 * noaniq oltitadan foydaliroq.
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
      // Haqiqiy nayloniy torli cholg'u yozuvi (MusyngKite, MIT). Dutorning
      // o'z yozuvi emas, lekin tor materiali, yog'och qopqoq va barmoq
      // bilan chertish bir xil — fizik modeldan tirikroq eshitiladi,
      // chunki unda haqiqiy korpus va xona akustikasi bor.
      id: "yozuv",
      label: "Haqiqiy yozuv (nayloniy tor)",
      folder: "dutor-yozuv",
      bank: true,
      shaping: {
        lowpass: 5600,
        reverbDecay: 2.0,
        reverbWet: 0.2,
        volumeDb: -14,
        release: 1.3,
      },
    },
    {
      // Dutorning o'z fizik modeli: ikki tor, kvarta oralig'ida; ipak torning
      // so'nishi, uzun dastaning yumshoq zarbi, kichik tut yog'ochli korpusning
      // rezonanslari (250 Hz havo, 430 Hz qopqoq) va 1,2 kHz dagi "dimog'i"
      // formanti modellashtirilgan.
      id: "model",
      label: "Dutor fizik modeli",
      folder: "dutor-model",
      bank: true,
      shaping: { reverbDecay: 2.0, reverbWet: 0.2, volumeDb: -16, release: 1.4 },
    },
  ],

  rubob: [
    {
      // Haqiqiy sitor yozuvi (MusyngKite, MIT). Metall tor, nokka bilan
      // chertish, simpatik torlar va rezonator kosa — qashqar rubobining
      // eng yaqin akustik qarindoshi.
      id: "yozuv",
      label: "Haqiqiy yozuv (sitor)",
      folder: "rubob-yozuv",
      bank: true,
      shaping: {
        highpass: 120,
        reverbDecay: 2.4,
        reverbWet: 0.24,
        volumeDb: -14,
        release: 1.2,
      },
    },
    {
      // Rubobning o'z fizik modeli: metall tor, nokka bilan ko'prikka
      // yaqin chertish, teri qoplangan kosa rezonanslari va uchta
      // simpatik tor.
      id: "model",
      label: "Rubob fizik modeli",
      folder: "rubob-model",
      bank: true,
      shaping: { reverbDecay: 2.6, reverbWet: 0.26, volumeDb: -15, release: 1.2 },
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
      // Haqiqiy ramkali baraban va dafcha yozuvi (VCSL, CC0). Doira —
      // ramkali baraban, shuning uchun bu qarindoshlik juda yaqin:
      // membrana, yog'och gardish va metall halqalar.
      id: "yozuv",
      label: "Haqiqiy yozuv (ramkali baraban)",
      folder: "doira-yozuv",
      bank: true,
      shaping: { reverbDecay: 1.1, reverbWet: 0.1, volumeDb: -6 },
    },
    {
      // Doiraning o'z fizik modeli — modal sintez. Membrana garmonik
      // bo'lmagan Bessel rejimlarida tebranadi (1,00 · 1,55 · 2,04 · 2,18 …),
      // zarb joyi esa qaysi rejim uyg'onishini belgilaydi.
      id: "model",
      label: "Doira fizik modeli",
      folder: "doira-model",
      bank: true,
      // Balandlik brauzerda o'lchab tenglashtirilgan (cho'qqi ~0,30)
      shaping: { reverbDecay: 1.2, reverbWet: 0.11, volumeDb: -5.5 },
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
