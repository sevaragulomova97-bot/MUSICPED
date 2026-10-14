"use client";

import * as React from "react";
import {
  createInstrument,
  type Instrument,
  type InstrumentKind,
  playEvents,
} from "@/lib/audio/instruments";
import { NoteRecorder, type NoteEvent } from "@/lib/audio/engine";

export type InstrumentState = {
  /** Audio ishga tushganmi (birinchi bosishdan keyin) */
  ready: boolean;
  /** Yuklanish yoki ruxsat xatosi */
  error: string | null;
  recording: boolean;
  playing: boolean;
  /** Oxirgi yozuv */
  events: NoteEvent[];
  /** Hozir bosilgan notalar — klavishlarni yoritish uchun */
  active: ReadonlySet<string>;
};

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
  const [error, setError] = React.useState<string | null>(null);
  const [recording, setRecording] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [events, setEvents] = React.useState<NoteEvent[]>([]);
  const [active, setActive] = React.useState<ReadonlySet<string>>(new Set());

  recorderRef.current ??= new NoteRecorder();

  // Sahifadan chiqilganda ovozni to'xtatib, resurslarni bo'shatamiz.
  React.useEffect(() => {
    return () => {
      stopPlaybackRef.current?.();
      instrumentRef.current?.dispose();
      instrumentRef.current = null;
    };
  }, []);

  /** Cholg'u tayyorligini ta'minlaydi (birinchi chaqiriqda yaratadi). */
  const ensure = React.useCallback(async () => {
    if (instrumentRef.current) return instrumentRef.current;
    try {
      const instrument = await createInstrument(kind);
      instrumentRef.current = instrument;
      setReady(true);
      setError(null);
      return instrument;
    } catch (cause) {
      console.error(cause);
      setError(
        "Ovozni ishga tushirib bo'lmadi. Brauzeringiz Web Audio'ni qo'llamasligi yoki ovoz bloklangan bo'lishi mumkin.",
      );
      return null;
    }
  }, [kind]);

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

  /** Perkussiya uchun: zarb boshlanadi va qisqa vaqtdan keyin o'chadi. */
  const hit = React.useCallback(
    async (note: string, velocity = 0.9) => {
      await attack(note, velocity);
      window.setTimeout(() => release(note), 140);
    },
    [attack, release],
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

  const stopPlayback = React.useCallback(() => {
    stopPlaybackRef.current?.();
    stopPlaybackRef.current = null;
    setPlaying(false);
  }, []);

  const setVolume = React.useCallback((db: number) => {
    instrumentRef.current?.setVolume(db);
  }, []);

  const setReverb = React.useCallback((wet: number) => {
    instrumentRef.current?.setReverb(wet);
  }, []);

  const clear = React.useCallback(() => {
    stopPlaybackRef.current?.();
    stopPlaybackRef.current = null;
    setPlaying(false);
    setEvents([]);
  }, []);

  const state: InstrumentState = { ready, error, recording, playing, events, active };

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
    clear,
  };
}
