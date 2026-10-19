"use client";

import * as React from "react";
import { type Tune, tuneDurationMs } from "@/content/tunes";

export type TuneMode = "yoq" | "eshitish" | "organish";

export type TuneState = {
  mode: TuneMode;
  /** Hozir yonishi kerak bo'lgan nota — «o'rganish» rejimida */
  target: string | null;
  index: number;
  correct: number;
  wrong: number;
  finished: boolean;
  feedback: "togri" | "xato" | null;
};

/**
 * Mashhur kuyni ikki rejimda o'rgatadi.
 *
 *  • **Eshitish** — kuy o'zi chalinadi. Klavishlar alohida yoritilmaydi:
 *    `attack`/`release` chaqirilgani uchun ular cholg'uning o'z «bosilgan»
 *    holati bilan yonadi. Shu sababli demo va jonli ijro bir xil
 *    ko'rinadi — talaba nimani takrorlashini aniq ko'radi.
 *
 *  • **O'rganish** — keyingi nota yonib turadi va kutadi. Vaqt o'lchanmaydi:
 *    maqsad tezlik emas, to'g'ri nota va to'g'ri tartib. Xato bosilsa
 *    nishon o'zgarmaydi, qayta urinish mumkin.
 */
export function useTunePractice(
  tune: Tune | null,
  opts: {
    oneShot: boolean;
    attack: (note: string) => void;
    release: (note: string) => void;
  },
) {
  const { oneShot, attack, release } = opts;

  const [mode, setMode] = React.useState<TuneMode>("yoq");
  const [index, setIndex] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [wrong, setWrong] = React.useState(0);
  const [feedback, setFeedback] = React.useState<"togri" | "xato" | null>(null);
  /**
   * Demo paytida yonishi kerak bo'lgan nota.
   *
   * Ataylab cholg'uning `active` to'plamiga tayanilmaydi: u faqat audio
   * muvaffaqiyatli ishga tushganda to'ladi. Yoritish esa darsning o'zi —
   * namunalar yuklanmasa yoki brauzer ovozni bloklasa ham, talaba kuyni
   * ko'rib o'rganishi kerak.
   */
  const [demoNote, setDemoNote] = React.useState<string | null>(null);

  const timers = React.useRef<number[]>([]);
  const ushlanganNotalar = React.useRef<Set<string>>(new Set());

  /**
   * `release` ni ref orqali ushlaymiz.
   *
   * U `useInstrument` qaytaradigan obyektga bog'langan va har renderda
   * yangi bo'lishi mumkin. Agar tozalash effekti unga to'g'ridan-to'g'ri
   * bog'lansa, effekt har renderda qayta ishlab, endigina qo'yilgan
   * taymerlarni o'chirib yuboradi — demo umuman chalinmaydi.
   */
  const releaseRef = React.useRef(release);
  React.useEffect(() => {
    releaseRef.current = release;
  }, [release]);

  const tozala = React.useCallback(() => {
    for (const t of timers.current) window.clearTimeout(t);
    timers.current = [];
    // Demo to'xtaganda osilib qolgan notalarni yopamiz.
    for (const note of ushlanganNotalar.current) releaseRef.current(note);
    ushlanganNotalar.current.clear();
    setDemoNote(null);
  }, []);

  // Faqat sahifadan chiqilganda: taymerlar va tovush qolmasligi kerak.
  React.useEffect(
    () => () => {
      for (const t of timers.current) window.clearTimeout(t);
      timers.current = [];
      for (const note of ushlanganNotalar.current) releaseRef.current(note);
      ushlanganNotalar.current.clear();
    },
    [],
  );

  const stop = React.useCallback(() => {
    tozala();
    setMode("yoq");
    setIndex(0);
    setFeedback(null);
  }, [tozala]);

  /**
   * Kuy almashganda chaqiriladi.
   *
   * Ataylab effekt emas: kuyni almashtirish — foydalanuvchi harakati, va
   * u taymerlarni tozalash hamda ovozni to'xtatish kabi yon ta'sirlarni
   * talab qiladi. Buni render paytida bajarib bo'lmaydi.
   */
  const reset = React.useCallback(() => {
    stop();
    setCorrect(0);
    setWrong(0);
  }, [stop]);

  /** Kuyni chalib beradi va klavishlarni vaqtida yoqadi. */
  const listen = React.useCallback(() => {
    if (!tune) return;
    tozala();
    setMode("eshitish");
    setIndex(0);

    const beatMs = 60_000 / tune.bpm;
    let t = 200; // boshlanishdan oldin qisqa pauza
    tune.notes.forEach((n, i) => {
      const davomiylik = n.beats * beatMs;
      timers.current.push(
        window.setTimeout(() => {
          setIndex(i);
          setDemoNote(n.note);
          attack(n.note);
          if (!oneShot) ushlanganNotalar.current.add(n.note);
          // Yoritish ham, tovush ham nota oxiridan sal oldin to'xtaydi —
          // shunda ketma-ket bir xil nota ikki marta ko'rinadi.
          timers.current.push(
            window.setTimeout(() => {
              if (!oneShot) {
                release(n.note);
                ushlanganNotalar.current.delete(n.note);
              }
              setDemoNote((joriy) => (joriy === n.note ? null : joriy));
            }, Math.max(60, davomiylik * 0.85)),
          );
        }, t),
      );
      t += davomiylik;
    });

    timers.current.push(
      window.setTimeout(() => {
        setMode("yoq");
        setIndex(0);
        setDemoNote(null);
      }, t + 400),
    );
  }, [tune, tozala, attack, release, oneShot]);

  /** «O'rganish» rejimini boshlaydi. */
  const learn = React.useCallback(() => {
    tozala();
    setMode("organish");
    setIndex(0);
    setCorrect(0);
    setWrong(0);
    setFeedback(null);
  }, [tozala]);

  const total = tune?.notes.length ?? 0;
  const finished = mode === "organish" && total > 0 && index >= total;

  /** Chalingan notani tekshiradi. */
  const submit = React.useCallback(
    (note: string) => {
      if (mode !== "organish" || !tune || index >= tune.notes.length) return;
      if (note === tune.notes[index].note) {
        setFeedback("togri");
        setCorrect((c) => c + 1);
        setIndex((i) => i + 1);
      } else {
        setFeedback("xato");
        setWrong((w) => w + 1);
      }
    },
    [mode, tune, index],
  );

  React.useEffect(() => {
    if (!feedback) return;
    const t = window.setTimeout(() => setFeedback(null), 300);
    return () => window.clearTimeout(t);
  }, [feedback]);

  const target =
    mode === "organish" && tune && index < tune.notes.length
      ? tune.notes[index].note
      : null;

  const state: TuneState = {
    mode,
    target,
    index,
    correct,
    wrong,
    finished,
    feedback,
  };

  return {
    ...state,
    demoNote,
    total,
    durationMs: tune ? tuneDurationMs(tune) : 0,
    listen,
    learn,
    stop,
    reset,
    submit,
  };
}
