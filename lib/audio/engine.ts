"use client";

/**
 * Audio dvigateli — barcha virtual cholg'ular uchun umumiy asos.
 *
 * Ikki muhim cheklov hisobga olingan:
 *
 *  1. Brauzer `AudioContext` ni **faqat foydalanuvchi harakatidan keyin**
 *     ishga tushirishga ruxsat beradi. Shuning uchun kontekst modul yuklanganda
 *     emas, birinchi bosish/teginishda ochiladi.
 *  2. Tone.js — og'ir kutubxona va faqat brauzerda ishlaydi. Shuning uchun u
 *     `import()` orqali, talab bo'yicha yuklanadi; statik build (Node muhiti)
 *     unga umuman tegmaydi.
 */

type ToneModule = typeof import("tone");

let tonePromise: Promise<ToneModule> | null = null;
let started = false;

/** Tone.js ni bir marta yuklaydi (keyingi chaqiriqlar o'sha va'dani qaytaradi). */
export function loadTone(): Promise<ToneModule> {
  tonePromise ??= import("tone");
  return tonePromise;
}

/**
 * AudioContext ni ishga tushiradi.
 *
 * Foydalanuvchi harakatini qayta ishlovchi ichida chaqirilishi shart —
 * aks holda brauzer kontekstni «suspended» holatida qoldiradi va ovoz chiqmaydi.
 */
export async function startAudio(): Promise<ToneModule> {
  const Tone = await loadTone();
  if (!started) {
    await Tone.start();
    started = true;
  }
  return Tone;
}

export function isAudioStarted() {
  return started;
}

/* ─────────────────────── Nota nomlari va chastotalar ─────────────────────── */

export const NOTA_NOMLARI = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const;

/** O'zbekcha solfedjio nomlari — oq klavishlar uchun. */
export const SOLFEDJIO: Record<string, string> = {
  C: "Do",
  D: "Re",
  E: "Mi",
  F: "Fa",
  G: "Sol",
  A: "Lya",
  B: "Si",
};

export type PianoKey = {
  /** Tone.js formati: "C4", "F#4" */
  note: string;
  /** Nota harfi diyezsiz: "C" */
  letter: string;
  octave: number;
  /** Qora klavishmi */
  sharp: boolean;
  /** Solfedjio nomi (faqat oq klavishlarda) */
  solfege?: string;
};

/** Berilgan oktavadan boshlab `count` oktavalik klaviatura hosil qiladi. */
export function buildKeyboard(startOctave: number, octaveCount: number): PianoKey[] {
  const keys: PianoKey[] = [];
  for (let o = 0; o < octaveCount; o += 1) {
    const octave = startOctave + o;
    for (const name of NOTA_NOMLARI) {
      const sharp = name.includes("#");
      keys.push({
        note: `${name}${octave}`,
        letter: name,
        octave,
        sharp,
        solfege: sharp ? undefined : SOLFEDJIO[name],
      });
    }
  }
  return keys;
}

/* ────────────────────────── Yozib olish ────────────────────────── */

export type NoteEvent = {
  note: string;
  /** Yozuv boshidan o'tgan millisekund */
  timeMs: number;
  /** Nota qancha yangradi */
  durationMs: number;
  /** 0–1 */
  velocity: number;
};

/**
 * Nota hodisalarini yozib oladi.
 *
 * Audio fayl emas, **hodisalar ro'yxati** saqlanadi: bu yuzlab marta yengil,
 * IndexedDB'da joy egallamaydi va keyin qayta chalinganda aynan o'sha tembr
 * bilan yangraydi.
 */
export class NoteRecorder {
  private startedAt: number | null = null;
  private events: NoteEvent[] = [];
  private pending = new Map<string, { timeMs: number; velocity: number }>();

  start() {
    this.startedAt = performance.now();
    this.events = [];
    this.pending.clear();
  }

  get recording() {
    return this.startedAt !== null;
  }

  noteOn(note: string, velocity = 0.8) {
    if (this.startedAt === null) return;
    this.pending.set(note, {
      timeMs: performance.now() - this.startedAt,
      velocity,
    });
  }

  noteOff(note: string) {
    if (this.startedAt === null) return;
    const open = this.pending.get(note);
    if (!open) return;
    this.pending.delete(note);
    this.events.push({
      note,
      timeMs: open.timeMs,
      durationMs: Math.max(60, performance.now() - this.startedAt - open.timeMs),
      velocity: open.velocity,
    });
  }

  /** Yozuvni to'xtatadi va hodisalarni vaqt bo'yicha tartiblab qaytaradi. */
  stop(): NoteEvent[] {
    if (this.startedAt === null) return [];
    // Hali qo'yib yuborilmagan notalarni yopamiz.
    for (const note of [...this.pending.keys()]) this.noteOff(note);
    this.startedAt = null;
    return [...this.events].sort((a, b) => a.timeMs - b.timeMs);
  }

  get durationMs() {
    if (!this.events.length) return 0;
    return Math.max(...this.events.map((e) => e.timeMs + e.durationMs));
  }
}
