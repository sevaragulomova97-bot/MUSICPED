"use client";

import { loadTone, startAudio, type NoteEvent } from "@/lib/audio/engine";
import {
  DOIRA_ZARBLARI,
  type DoiraStroke,
  type InstrumentKind,
  isSustained,
} from "@/lib/domain/instruments";
import { asset } from "@/lib/utils";

/**
 * Virtual cholg'ular — **haqiqiy yozib olingan namunalar** asosida.
 *
 * Dastlab ovoz Tone.js bilan sintez qilinardi, lekin sintez haqiqiy cholg'u
 * tembriga yetmadi. Endi FluidR3_GM to'plamidagi yozuvlar ishlatiladi
 * (MIT litsenziya, `public/audio/` ga joylashtirilgan — tashqi serverga
 * murojaat yo'q, oflayn ishlaydi).
 *
 * Har 3 yarim tonda bitta namuna olingan; oraliq notalarni `Tone.Sampler`
 * tovush balandligini o'zgartirib hosil qiladi. Shu sababli 88 ta fayl
 * o'rniga 17 tasi yetadi va jami hajm 1,6 MB bo'ladi.
 *
 * MUHIM cheklov: FluidR3_GM da dutor va rubob yo'q. Ular eng yaqin
 * qarindoshlari — nayloniy va metall torli gitara namunalari asosida,
 * tembr filtrlari bilan moslashtirilgan. Bu sintezdan ancha haqiqiyroq,
 * lekin haqiqiy dutor/rubob yozuvi emas (`CREDITS.md` ga yozilgan).
 */

type Tone = Awaited<ReturnType<typeof loadTone>>;

/** Namunalar olingan notalar (har 3 yarim tonda bitta). */
const SAMPLE_NOTES = [
  "C2", "Eb2", "Gb2", "A2",
  "C3", "Eb3", "Gb3", "A3",
  "C4", "Eb4", "Gb4", "A4",
  "C5", "Eb5", "Gb5", "A5",
  "C6",
];

type Shaping = {
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

type SampledSpec = {
  type: "sampled";
  folder: string;
  shaping: Shaping;
};

const SAMPLED: Record<Exclude<InstrumentKind, "doira">, SampledSpec> = {
  pianino: {
    type: "sampled",
    folder: "piano",
    shaping: { reverbDecay: 1.8, reverbWet: 0.16, volumeDb: -6, release: 1.0 },
  },
  gitara: {
    type: "sampled",
    folder: "nylon",
    shaping: { reverbDecay: 1.6, reverbWet: 0.18, volumeDb: -4, release: 0.9 },
  },
  dutor: {
    // Dutor nayloniy/ipak torli, yumshoq va biroz dimog'i tovushli cholg'u:
    // gitara namunasining yuqori chastotalari yumshatiladi.
    type: "sampled",
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
  rubob: {
    // Rubob metall torli, yorqin va jarangdor: metall torli gitara namunasiga
    // yuqori chastotalar qo'shiladi va reverb uzaytiriladi.
    type: "sampled",
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
  nay: {
    type: "sampled",
    folder: "flute",
    shaping: { reverbDecay: 2.0, reverbWet: 0.22, volumeDb: -8, release: 0.5 },
  },
};

/* ──────────────────────────── Interfeys ──────────────────────────── */

export type Instrument = {
  kind: InstrumentKind;
  attack: (note: string, velocity?: number) => void;
  release: (note: string) => void;
  trigger: (note: string, velocity?: number) => void;
  setVolume: (db: number) => void;
  setReverb: (wet: number) => void;
  dispose: () => void;
  /** Namunalar yuklanmay, sintezga tushib qolindimi */
  usingFallback: boolean;
};

/* ───────────────────── Tembr zanjiri (effektlar) ───────────────────── */

type Chain = {
  input: InstanceType<Tone["Gain"]>;
  reverb: InstanceType<Tone["Reverb"]>;
  setReverb: (wet: number) => void;
  dispose: () => void;
};

function buildChain(T: Tone, shaping: Shaping): Chain {
  const reverb = new T.Reverb({
    decay: shaping.reverbDecay,
    wet: shaping.reverbWet,
  }).toDestination();

  const nodes: Array<{ dispose: () => void; connect: (n: unknown) => void }> = [];
  let tail: { connect: (n: unknown) => void } = reverb as never;

  // Zanjir teskari tartibda quriladi: oxirgi effektdan birinchisiga qarab.
  if (shaping.presence !== undefined) {
    const eq = new T.Filter({
      type: "peaking",
      frequency: 4000,
      Q: 0.9,
      gain: shaping.presence,
    });
    eq.connect(reverb as never);
    nodes.push(eq as never);
    tail = eq as never;
  }

  if (shaping.lowpass !== undefined) {
    const lp = new T.Filter({ type: "lowpass", frequency: shaping.lowpass, Q: 0.6 });
    lp.connect(tail as never);
    nodes.push(lp as never);
    tail = lp as never;
  }

  if (shaping.highpass !== undefined) {
    const hp = new T.Filter({ type: "highpass", frequency: shaping.highpass, Q: 0.6 });
    hp.connect(tail as never);
    nodes.push(hp as never);
    tail = hp as never;
  }

  const input = new T.Gain(1);
  input.connect(tail as never);

  return {
    input,
    reverb,
    setReverb: (wet) => {
      reverb.wet.value = Math.max(0, Math.min(1, wet));
    },
    dispose: () => {
      input.dispose();
      for (const n of nodes) n.dispose();
      reverb.dispose();
    },
  };
}

/* ───────────────────── Namunali cholg'u (Sampler) ───────────────────── */

async function createSampled(
  T: Tone,
  kind: Exclude<InstrumentKind, "doira">,
): Promise<Instrument> {
  const spec = SAMPLED[kind];
  const chain = buildChain(T, spec.shaping);

  const urls = Object.fromEntries(SAMPLE_NOTES.map((n) => [n, `${n}.mp3`]));

  const sampler = new T.Sampler({
    urls,
    baseUrl: asset(`/audio/${spec.folder}/`),
    release: spec.shaping.release ?? 1,
  }).connect(chain.input);
  sampler.volume.value = spec.shaping.volumeDb;

  // Namunalar yuklanmaguncha kutamiz — aks holda birinchi nota jim chiqadi.
  await T.loaded();

  return {
    kind,
    attack: (note, velocity = 0.8) => sampler.triggerAttack(note, undefined, velocity),
    release: (note) => sampler.triggerRelease(note),
    trigger: (note, velocity = 0.8) =>
      sampler.triggerAttackRelease(note, "2n", undefined, velocity),
    setVolume: (db) => {
      sampler.volume.value = db;
    },
    setReverb: chain.setReverb,
    dispose: () => {
      sampler.dispose();
      chain.dispose();
    },
    usingFallback: false,
  };
}

/* ─────────────────────────── Doira (zarbli) ─────────────────────────── */

async function createDoira(T: Tone): Promise<Instrument> {
  const chain = buildChain(T, {
    reverbDecay: 1.1,
    reverbWet: 0.1,
    volumeDb: -4,
  });

  const players = new T.Players({
    urls: {
      bum: "bum.mp3",
      tak: "tak.mp3",
      qarsak: "qarsak.mp3",
    },
    baseUrl: asset("/audio/doira/"),
  }).connect(chain.input);
  players.volume.value = -4;

  await T.loaded();

  const fire = (stroke: string, velocity: number) => {
    if (!DOIRA_ZARBLARI.includes(stroke as DoiraStroke)) return;
    const player = players.player(stroke);
    // Zarb kuchi — har bir urish uchun alohida ovoz balandligi.
    player.volume.value = -4 + (velocity - 1) * 14;
    player.start();
  };

  return {
    kind: "doira",
    attack: (stroke, velocity = 0.9) => fire(stroke, velocity),
    release: () => {
      // Zarbli cholg'u — zarb o'zi tugaydi.
    },
    trigger: (stroke, velocity = 0.9) => fire(stroke, velocity),
    setVolume: (db) => {
      players.volume.value = db;
    },
    setReverb: chain.setReverb,
    dispose: () => {
      players.dispose();
      chain.dispose();
    },
    usingFallback: false,
  };
}

/* ───────── Zaxira variant: namunalar yuklanmasa, sintez ───────── */

function createFallback(T: Tone, kind: InstrumentKind): Instrument {
  const reverb = new T.Reverb({ decay: 1.8, wet: 0.2 }).toDestination();

  if (kind === "doira") {
    const membrane = new T.MembraneSynth({
      pitchDecay: 0.03,
      octaves: 4,
      envelope: { attack: 0.001, decay: 0.42, sustain: 0 },
    }).connect(reverb);
    const noise = new T.NoiseSynth({
      noise: { type: "white" },
      envelope: { attack: 0.001, decay: 0.09, sustain: 0 },
    }).connect(reverb);
    noise.volume.value = -18;

    const fire = (stroke: string, velocity: number) => {
      if (stroke === "bum") membrane.triggerAttackRelease("C2", "8n", undefined, velocity);
      else if (stroke === "tak") {
        membrane.triggerAttackRelease("G3", "32n", undefined, velocity * 0.8);
        noise.triggerAttackRelease("32n", undefined, velocity * 0.5);
      } else noise.triggerAttackRelease("16n", undefined, velocity);
    };

    return {
      kind,
      attack: (s, v = 0.9) => fire(s, v),
      release: () => {},
      trigger: (s, v = 0.9) => fire(s, v),
      setVolume: (db) => {
        membrane.volume.value = db;
      },
      setReverb: (w) => {
        reverb.wet.value = w;
      },
      dispose: () => {
        membrane.dispose();
        noise.dispose();
        reverb.dispose();
      },
      usingFallback: true,
    };
  }

  const synth = new T.PolySynth(T.FMSynth, {
    harmonicity: 2.5,
    modulationIndex: 7,
    oscillator: { type: "sine" },
    envelope: { attack: 0.005, decay: 1.4, sustain: 0.1, release: 1.1 },
  }).connect(reverb);
  synth.maxPolyphony = 16;
  synth.volume.value = -10;

  return {
    kind,
    attack: (n, v = 0.8) => synth.triggerAttack(n, undefined, v),
    release: (n) => synth.triggerRelease(n),
    trigger: (n, v = 0.8) => synth.triggerAttackRelease(n, "8n", undefined, v),
    setVolume: (db) => {
      synth.volume.value = db;
    },
    setReverb: (w) => {
      reverb.wet.value = w;
    },
    dispose: () => {
      synth.dispose();
      reverb.dispose();
    },
    usingFallback: true,
  };
}

/* ──────────────────────────── Fabrika ──────────────────────────── */

/**
 * Cholg'uni yaratadi va namunalari yuklanishini kutadi.
 *
 * Birinchi chaqiriqda AudioContext ham ishga tushadi, shuning uchun bu
 * funksiya foydalanuvchi harakatidan keyin chaqirilishi kerak.
 *
 * Namunalarni yuklab bo'lmasa (tarmoq yo'q, fayl topilmadi) sintezga
 * tushiladi — cholg'u baribir ishlaydi, faqat tembri soddaroq bo'ladi.
 */
export async function createInstrument(kind: InstrumentKind): Promise<Instrument> {
  const T = await startAudio();
  try {
    if (kind === "doira") return await createDoira(T);
    return await createSampled(T, kind);
  } catch (cause) {
    console.warn("Namunalarni yuklab bo'lmadi, sintezga o'tilmoqda:", cause);
    return createFallback(T, kind);
  }
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
  const sustaining = isSustained(instrument.kind);

  for (const event of events) {
    timers.push(
      setTimeout(() => {
        if (sustaining) {
          // Nota yozuvdagi davomiylik qancha bo'lsa, shuncha ushlab turiladi.
          instrument.attack(event.note, event.velocity);
          timers.push(
            setTimeout(() => instrument.release(event.note), event.durationMs),
          );
        } else {
          // Chertma va zarbli cholg'uda namuna o'zi so'nadi — kesilmaydi.
          instrument.trigger(event.note, event.velocity);
        }
      }, event.timeMs),
    );
  }

  const total = events.length
    ? Math.max(...events.map((e) => e.timeMs + e.durationMs)) + 250
    : 0;
  timers.push(setTimeout(() => onDone?.(), total));

  return () => {
    for (const t of timers) clearTimeout(t);
    onDone?.();
  };
}
