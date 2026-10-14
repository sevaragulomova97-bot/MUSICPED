"use client";

import { loadTone, startAudio, type NoteEvent } from "@/lib/audio/engine";

/**
 * Virtual cholg'ular — ovoz **real vaqtda sintez qilinadi**.
 *
 * Tayyor audio namunalar ataylab ishlatilmagan: ular mualliflik huquqi
 * masalasini keltirib chiqaradi va omborga o'nlab megabayt binar fayl qo'shadi.
 * Sintez esa litsenziyasiz, bir zumda yuklanadi va oflayn ishlaydi.
 */

type Tone = Awaited<ReturnType<typeof loadTone>>;

export type InstrumentKind = "pianino" | "dutor" | "doira";

export type Instrument = {
  kind: InstrumentKind;
  /** Notani boshlaydi */
  attack: (note: string, velocity?: number) => void;
  /** Notani tugatadi (perkussiyada ishlatilmaydi) */
  release: (note: string) => void;
  /** Qisqa zarb — doira va shunga o'xshash cholg'ular uchun */
  trigger: (note: string, velocity?: number) => void;
  setVolume: (db: number) => void;
  setReverb: (wet: number) => void;
  dispose: () => void;
};

/* ──────────────────────────── Pianino ──────────────────────────── */

function createPiano(T: Tone): Instrument {
  const reverb = new T.Reverb({ decay: 1.8, wet: 0.18 }).toDestination();

  // Akustik pianinoga yaqinlashtirilgan FM sintez: tez hujum, uzun susayish.
  const synth = new T.PolySynth(T.FMSynth, {
    harmonicity: 2.5,
    modulationIndex: 7,
    oscillator: { type: "sine" },
    envelope: { attack: 0.004, decay: 1.6, sustain: 0.08, release: 1.2 },
    modulation: { type: "triangle" },
    modulationEnvelope: { attack: 0.01, decay: 0.4, sustain: 0, release: 0.4 },
  }).connect(reverb);
  synth.maxPolyphony = 16;
  synth.volume.value = -8;

  return {
    kind: "pianino",
    attack: (note, velocity = 0.8) => synth.triggerAttack(note, undefined, velocity),
    release: (note) => synth.triggerRelease(note),
    trigger: (note, velocity = 0.8) =>
      synth.triggerAttackRelease(note, "8n", undefined, velocity),
    setVolume: (db) => {
      synth.volume.value = db;
    },
    setReverb: (wet) => {
      reverb.wet.value = Math.max(0, Math.min(1, wet));
    },
    dispose: () => {
      synth.dispose();
      reverb.dispose();
    },
  };
}

/* ───────────────────────────── Dutor ───────────────────────────── */

function createDutor(T: Tone): Instrument {
  const reverb = new T.Reverb({ decay: 2.4, wet: 0.25 }).toDestination();

  // Karplus–Strong torli sintez — chertiladigan torga tabiiy mos keladi.
  // `resonance` yuqori bo'lsa tor uzoqroq jaranglaydi.
  const pluck = new T.PluckSynth({
    attackNoise: 1.2,
    dampening: 2600,
    resonance: 0.96,
    release: 1.4,
  }).connect(reverb);
  pluck.volume.value = -4;

  /**
   * `PluckSynth.triggerAttack` tezlik (velocity) argumentini qabul qilmaydi,
   * shuning uchun zarb kuchi `attackNoise` orqali beriladi: kuchliroq chertish
   * = ko'proq boshlang'ich shovqin = yorqinroq tembr. Bu haqiqiy torda ham
   * shunday ishlaydi.
   */
  const pluckAt = (note: string, velocity: number) => {
    pluck.attackNoise = 0.5 + Math.max(0, Math.min(1, velocity)) * 1.5;
    pluck.triggerAttack(note);
  };

  return {
    kind: "dutor",
    // PluckSynth — chertiladigan tor: attack zarbning o'zi, release kerak emas.
    attack: (note, velocity = 0.8) => pluckAt(note, velocity),
    release: () => {
      // Tor o'z-o'zidan so'nadi — alohida release kerak emas.
    },
    trigger: (note, velocity = 0.8) => pluckAt(note, velocity),
    setVolume: (db) => {
      pluck.volume.value = db;
    },
    setReverb: (wet) => {
      reverb.wet.value = Math.max(0, Math.min(1, wet));
    },
    dispose: () => {
      pluck.dispose();
      reverb.dispose();
    },
  };
}

/* ───────────────────────────── Doira ───────────────────────────── */

/**
 * Doira uch xil zarb beradi:
 *  • `bum` — markazga urilgan past tovush (membrana)
 *  • `tak` — chetiga urilgan baland va qisqa tovush
 *  • `qarsak` — gardish/qo'ng'iroqchalar, shovqinli tembr
 */
export const DOIRA_ZARBLARI = ["bum", "tak", "qarsak"] as const;
export type DoiraStroke = (typeof DOIRA_ZARBLARI)[number];

export const DOIRA_ZARB_NOMI: Record<DoiraStroke, string> = {
  bum: "Bum (markaz)",
  tak: "Tak (chet)",
  qarsak: "Qarsak (gardish)",
};

function createDoira(T: Tone): Instrument {
  const reverb = new T.Reverb({ decay: 1.2, wet: 0.12 }).toDestination();

  const membrane = new T.MembraneSynth({
    pitchDecay: 0.03,
    octaves: 4,
    envelope: { attack: 0.001, decay: 0.42, sustain: 0 },
  }).connect(reverb);
  membrane.volume.value = -6;

  const noise = new T.NoiseSynth({
    noise: { type: "white" },
    envelope: { attack: 0.001, decay: 0.09, sustain: 0 },
  }).connect(reverb);
  noise.volume.value = -18;

  const fire = (stroke: string, velocity: number) => {
    if (stroke === "bum") {
      membrane.triggerAttackRelease("C2", "8n", undefined, velocity);
    } else if (stroke === "tak") {
      membrane.triggerAttackRelease("G3", "32n", undefined, velocity * 0.8);
      noise.triggerAttackRelease("32n", undefined, velocity * 0.5);
    } else {
      noise.triggerAttackRelease("16n", undefined, velocity);
    }
  };

  return {
    kind: "doira",
    attack: (stroke, velocity = 0.9) => fire(stroke, velocity),
    release: () => {
      // Perkussiya — zarb o'zi tugaydi.
    },
    trigger: (stroke, velocity = 0.9) => fire(stroke, velocity),
    setVolume: (db) => {
      membrane.volume.value = db;
      noise.volume.value = db - 12;
    },
    setReverb: (wet) => {
      reverb.wet.value = Math.max(0, Math.min(1, wet));
    },
    dispose: () => {
      membrane.dispose();
      noise.dispose();
      reverb.dispose();
    },
  };
}

/* ──────────────────────────── Fabrika ──────────────────────────── */

/**
 * Cholg'uni yaratadi. Birinchi chaqiriqda AudioContext ham ishga tushadi,
 * shuning uchun bu funksiya foydalanuvchi harakatidan keyin chaqirilishi kerak.
 */
export async function createInstrument(kind: InstrumentKind): Promise<Instrument> {
  const T = await startAudio();
  if (kind === "pianino") return createPiano(T);
  if (kind === "dutor") return createDutor(T);
  return createDoira(T);
}

/* ─────────────────────── Yozuvni qayta chalish ─────────────────────── */

/**
 * Yozib olingan nota hodisalarini qayta chaladi.
 * `stop` funksiyasini qaytaradi — foydalanuvchi to'xtata olishi uchun.
 */
export function playEvents(
  instrument: Instrument,
  events: NoteEvent[],
  onDone?: () => void,
): () => void {
  const timers: ReturnType<typeof setTimeout>[] = [];

  for (const event of events) {
    timers.push(
      setTimeout(() => {
        instrument.attack(event.note, event.velocity);
        if (instrument.kind === "pianino") {
          timers.push(
            setTimeout(() => instrument.release(event.note), event.durationMs),
          );
        }
      }, event.timeMs),
    );
  }

  const total = events.length
    ? Math.max(...events.map((e) => e.timeMs + e.durationMs)) + 150
    : 0;
  timers.push(setTimeout(() => onDone?.(), total));

  return () => {
    for (const t of timers) clearTimeout(t);
    onDone?.();
  };
}
