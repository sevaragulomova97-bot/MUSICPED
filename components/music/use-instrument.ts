"use client";

import * as React from "react";
import { createInstrument, type Instrument, playEvents } from "@/lib/audio/instruments";
import { type InstrumentKind } from "@/lib/domain/instruments";
import { NoteRecorder, type NoteEvent } from "@/lib/audio/engine";
import { useHydrated } from "@/lib/use-hydrated";
import type { SampleBank } from "@/lib/audio/bank";
import {
  defaultTimbre,
  TIMBRE_STORAGE_PREFIX,
  type Timbre,
  timbresFor,
} from "@/lib/audio/timbres";

export type InstrumentState = {
  /** Audio ishga tushganmi (birinchi bosishdan keyin) */
  ready: boolean;
  /** Namunalar yuklanmoqdami */
  loading: boolean;
  /** Namunalar yuklanmay, sintezga tushib qolindimi */
  usingFallback: boolean;
  /** Yuklanish yoki ruxsat xatosi */
  error: string | null;
  recording: boolean;
  playing: boolean;
  /** Oxirgi yozuv */
  events: NoteEvent[];
  /** Hozir bosilgan notalar — klavishlarni yoritish uchun */
  active: ReadonlySet<string>;
  /** Tanlangan tembr */
  timbre: Timbre;
  /** Shu cholg'u uchun mavjud tembrlar */
  timbres: Timbre[];
  /**
   * Namuna banki — ovoz qayerdan kelayotgani.
   *
   * Interfeys buni ko'rsatadi: tovush haqiqiy yozuvdanmi yoki fizik
   * modeldanmi — foydalanuvchi bilishi kerak.
   */
  bank: SampleBank | null;
};

/** Tanlangan tembrni brauzer xotirasidan o'qiydi (yo'q bo'lsa — birinchisi). */
function readStoredTimbre(kind: InstrumentKind): Timbre {
  const variants = timbresFor(kind);
  try {
    const id = window.localStorage.getItem(`${TIMBRE_STORAGE_PREFIX}${kind}`);
    return variants.find((t) => t.id === id) ?? variants[0];
  } catch {
    // Shaxsiy rejim yoki o'chirilgan saqlash — standart tembr ishlatiladi.
    return variants[0];
  }
}

function writeStoredTimbre(kind: InstrumentKind, id: string) {
  try {
    window.localStorage.setItem(`${TIMBRE_STORAGE_PREFIX}${kind}`, id);
  } catch {
    // Saqlab bo'lmasa ham joriy sessiyada tanlov ishlaydi.
  }
}

/**
 * Cholg'u bilan ishlashning umumiy mantig'i: yaratish, chalish, yozib olish,
 * qayta eshittirish va tozalash.
 *
 * Cholg'u birinchi foydalanuvchi harakatida yaratiladi — brauzer AudioContext
 * ni boshqacha ishga tushirishga ruxsat bermaydi.
 */
export function useInstrument(kind: InstrumentKind) {
  const instrumentRef = React.useRef<Instrument | null>(null);
  const recorderRef = React.useRef<NoteRecorder | null>(null);
  const stopPlaybackRef = React.useRef<(() => void) | null>(null);

  const [ready, setReady] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  /**
   * Tembr tanlovi.
   *
   * Server renderida `localStorage` yo'q, shuning uchun birinchi render
   * standart tembr bilan chiqadi va hidratsiyadan keyingina saqlangan tanlov
   * qo'llanadi — shunda SSR va klient mos keladi. Foydalanuvchi o'zi
   * tanlasa, `chosen` ustun turadi.
   */
  const hydrated = useHydrated();
  const [chosen, setChosen] = React.useState<Timbre | null>(null);
  const timbre = chosen ?? (hydrated ? readStoredTimbre(kind) : defaultTimbre(kind));
  const [usingFallback, setUsingFallback] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [recording, setRecording] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [events, setEvents] = React.useState<NoteEvent[]>([]);
  const [active, setActive] = React.useState<ReadonlySet<string>>(new Set());
  const [bank, setBank] = React.useState<SampleBank | null>(null);

  recorderRef.current ??= new NoteRecorder();

  // Sahifadan chiqilganda ovozni to'xtatib, resurslarni bo'shatamiz.
  React.useEffect(() => {
    return () => {
      stopPlaybackRef.current?.();
      instrumentRef.current?.dispose();
      instrumentRef.current = null;
    };
  }, []);

  /**
   * Cholg'u tayyorligini ta'minlaydi (birinchi chaqiriqda yaratadi).
   *
   * Namunalar yuklanishi bir necha yuz millisekund olishi mumkin, shuning
   * uchun ayni paytda bir nechta chaqiriq kelsa, ular bitta va'daga ulanadi —
   * aks holda bir necha cholg'u nusxasi yaratilib, ovoz ikkilanib ketardi.
   */
  const pendingRef = React.useRef<Promise<Instrument | null> | null>(null);

  const ensure = React.useCallback(async () => {
    if (instrumentRef.current) return instrumentRef.current;
    if (pendingRef.current) return pendingRef.current;

    setLoading(true);
    pendingRef.current = createInstrument(kind, timbre.id)
      .then((instrument) => {
        instrumentRef.current = instrument;
        setReady(true);
        setUsingFallback(instrument.usingFallback);
        setBank(instrument.bank ?? null);
        setError(null);
        return instrument;
      })
      .catch((cause: unknown) => {
        console.error(cause);
        setError(
          "Ovozni ishga tushirib bo'lmadi. Brauzeringiz Web Audio'ni qo'llamasligi yoki ovoz bloklangan bo'lishi mumkin.",
        );
        return null;
      })
      .finally(() => {
        setLoading(false);
        pendingRef.current = null;
      });

    return pendingRef.current;
  }, [kind, timbre.id]);

  const attack = React.useCallback(
    async (note: string, velocity = 0.8) => {
      const instrument = await ensure();
      if (!instrument) return;
      instrument.attack(note, velocity);
      recorderRef.current?.noteOn(note, velocity);
      setActive((prev) => new Set(prev).add(note));
    },
    [ensure],
  );

  const release = React.useCallback((note: string) => {
    instrumentRef.current?.release(note);
    recorderRef.current?.noteOff(note);
    setActive((prev) => {
      if (!prev.has(note)) return prev;
      const next = new Set(prev);
      next.delete(note);
      return next;
    });
  }, []);

  /**
   * Chertma va zarbli cholg'ular uchun: bir harakat bilan ishlaydi va namuna
   * tabiiy ravishda so'nadi.
   *
   * `attack` + tez `release` ishlatilmaydi — u gitara yoki dutor namunasini
   * o'rtasidan kesib tashlardi. Yorqin belgilash esa faqat ko'rinish uchun
   * qisqa vaqtdan keyin o'chadi.
   */
  const VISUAL_MS = 180;

  const hit = React.useCallback(
    async (note: string, velocity = 0.9) => {
      const instrument = await ensure();
      if (!instrument) return;
      instrument.trigger(note, velocity);
      recorderRef.current?.noteOn(note, velocity);
      recorderRef.current?.noteOff(note);
      setActive((prev) => new Set(prev).add(note));
      window.setTimeout(
        () =>
          setActive((prev) => {
            if (!prev.has(note)) return prev;
            const next = new Set(prev);
            next.delete(note);
            return next;
          }),
        VISUAL_MS,
      );
    },
    [ensure],
  );

  const startRecording = React.useCallback(async () => {
    await ensure();
    recorderRef.current?.start();
    setEvents([]);
    setRecording(true);
  }, [ensure]);

  const stopRecording = React.useCallback(() => {
    const recorded = recorderRef.current?.stop() ?? [];
    setEvents(recorded);
    setRecording(false);
    return recorded;
  }, []);

  const play = React.useCallback(async () => {
    if (!events.length) return;
    const instrument = await ensure();
    if (!instrument) return;
    stopPlaybackRef.current?.();
    setPlaying(true);
    stopPlaybackRef.current = playEvents(instrument, events, () => {
      setPlaying(false);
      stopPlaybackRef.current = null;
    });
  }, [ensure, events]);

  /**
   * Ijroni to'xtatadi.
   *
   * Navbatdagi notalarni bekor qilish yetarli emas edi: allaqachon
   * boshlangan namunalar oxirigacha jaranglayverardi va «to'xtatish»
   * tugmasi bosilgandan keyin ham ovoz kelardi. Endi jaranglab turgan
   * ovozlar ham yumshoq so'ndiriladi.
   */
  const stopPlayback = React.useCallback(() => {
    stopPlaybackRef.current?.();
    stopPlaybackRef.current = null;
    instrumentRef.current?.stopAll();
    setPlaying(false);
    setActive(new Set());
  }, []);

  const setVolume = React.useCallback((db: number) => {
    instrumentRef.current?.setVolume(db);
  }, []);

  const setReverb = React.useCallback((wet: number) => {
    instrumentRef.current?.setReverb(wet);
  }, []);

  /**
   * Tembrni almashtiradi.
   *
   * Joriy cholg'u butunlay tashlanadi — namunalar boshqa papkadan keladi,
   * shuning uchun uni «qayta sozlab» bo'lmaydi. Yangisi keyingi chalishda
   * yaratiladi.
   */
  const setTimbre = React.useCallback(
    (next: Timbre) => {
      stopPlaybackRef.current?.();
      stopPlaybackRef.current = null;
      instrumentRef.current?.dispose();
      instrumentRef.current = null;
      pendingRef.current = null;
      setPlaying(false);
      setReady(false);
      setUsingFallback(false);
      setBank(null);
      setActive(new Set());
      setChosen(next);
      writeStoredTimbre(kind, next.id);
    },
    [kind],
  );

  const clear = React.useCallback(() => {
    stopPlaybackRef.current?.();
    stopPlaybackRef.current = null;
    setPlaying(false);
    setEvents([]);
  }, []);

  const state: InstrumentState = {
    ready,
    loading,
    usingFallback,
    error,
    recording,
    playing,
    events,
    active,
    timbre,
    timbres: timbresFor(kind),
    bank,
  };

  return {
    ...state,
    ensure,
    attack,
    release,
    hit,
    startRecording,
    stopRecording,
    play,
    stopPlayback,
    setVolume,
    setReverb,
    setTimbre,
    clear,
  };
}
