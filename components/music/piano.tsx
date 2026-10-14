"use client";

import * as React from "react";
import { buildKeyboard, type PianoKey } from "@/lib/audio/engine";
import { cn } from "@/lib/utils";

/**
 * Kompyuter klaviaturasi xaritasi — bir oktava.
 * Pastki qator oq klavishlar, yuqori qator qora klavishlar (haqiqiy pianinodagi
 * joylashuvni taqlid qiladi).
 */
const KEYBOARD_MAP: Record<string, number> = {
  KeyA: 0, // C
  KeyW: 1, // C#
  KeyS: 2, // D
  KeyE: 3, // D#
  KeyD: 4, // E
  KeyF: 5, // F
  KeyT: 6, // F#
  KeyG: 7, // G
  KeyY: 8, // G#
  KeyH: 9, // A
  KeyU: 10, // A#
  KeyJ: 11, // B
  KeyK: 12, // keyingi oktava C
};

const WHITE_WIDTH = 52;

export type PianoProps = {
  startOctave: number;
  octaveCount: number;
  active: ReadonlySet<string>;
  onAttack: (note: string) => void;
  onRelease: (note: string) => void;
  /** Mashq rejimida chalinishi kerak bo'lgan nota — yoritiladi */
  targetNote?: string;
  /** Mashq rejimida oxirgi javob to'g'ri bo'ldimi */
  feedback?: "togri" | "xato" | null;
  showNoteNames?: boolean;
};

export function Piano({
  startOctave,
  octaveCount,
  active,
  onAttack,
  onRelease,
  targetNote,
  feedback,
  showNoteNames = true,
}: PianoProps) {
  const keys = React.useMemo(
    () => buildKeyboard(startOctave, octaveCount),
    [startOctave, octaveCount],
  );
  const whiteKeys = keys.filter((k) => !k.sharp);

  // Sichqoncha tugmasi bosilgan holda surilganda ham chalinsin (glissando).
  const pointerDown = React.useRef(false);

  React.useEffect(() => {
    const up = () => {
      pointerDown.current = false;
    };
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, []);

  /* ── Kompyuter klaviaturasi ── */
  React.useEffect(() => {
    const held = new Set<string>();

    const noteFor = (code: string): string | null => {
      const offset = KEYBOARD_MAP[code];
      if (offset === undefined) return null;
      return keys[offset]?.note ?? null;
    };

    const down = (e: KeyboardEvent) => {
      // Matn kiritish maydonida yozayotgan bo'lsa, aralashmaymiz.
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const note = noteFor(e.code);
      if (!note || held.has(note)) return;
      held.add(note);
      e.preventDefault();
      onAttack(note);
    };

    const up = (e: KeyboardEvent) => {
      const note = noteFor(e.code);
      if (!note || !held.has(note)) return;
      held.delete(note);
      onRelease(note);
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      // Sahifadan chiqishda osilib qolgan notalarni yopamiz.
      for (const note of held) onRelease(note);
    };
  }, [keys, onAttack, onRelease]);

  function keyState(key: PianoKey) {
    if (targetNote === key.note && feedback) return feedback;
    if (active.has(key.note)) return "bosilgan";
    if (targetNote === key.note) return "nishon";
    return null;
  }

  function handleDown(note: string) {
    pointerDown.current = true;
    onAttack(note);
  }

  return (
    <div
      className="overflow-x-auto overscroll-x-contain pb-2"
      role="group"
      aria-label="Virtual pianino klaviaturasi"
    >
      <div
        className="relative mx-auto h-48 select-none sm:h-56"
        style={{ width: whiteKeys.length * WHITE_WIDTH }}
      >
        {/* Oq klavishlar */}
        {whiteKeys.map((key, index) => {
          const state = keyState(key);
          return (
            <button
              key={key.note}
              type="button"
              aria-label={`${key.solfege} ${key.octave}`}
              aria-pressed={active.has(key.note)}
              onPointerDown={(e) => {
                e.preventDefault();
                handleDown(key.note);
              }}
              onPointerUp={() => onRelease(key.note)}
              onPointerLeave={() => active.has(key.note) && onRelease(key.note)}
              onPointerEnter={() => pointerDown.current && handleDown(key.note)}
              className={cn(
                "absolute bottom-0 top-0 rounded-b-lg border border-ink/15 transition-colors",
                "flex items-end justify-center pb-3",
                state === "bosilgan" && "bg-primary text-white",
                state === "nishon" && "bg-warning-soft",
                state === "togri" && "bg-success text-white",
                state === "xato" && "bg-danger text-white",
                !state && "bg-white text-ink-muted hover:bg-primary-soft",
              )}
              style={{ left: index * WHITE_WIDTH, width: WHITE_WIDTH }}
            >
              {showNoteNames && (
                <span className="pointer-events-none text-[11px] font-medium">
                  {key.solfege}
                  <span className="opacity-50">{key.octave}</span>
                </span>
              )}
            </button>
          );
        })}

        {/* Qora klavishlar — oq klavishlar ustida */}
        {keys.map((key) => {
          if (!key.sharp) return null;
          // Qora klavish o'zidan oldingi oq klavishning o'ng chekkasida turadi.
          const whiteBefore = whiteKeys.findIndex(
            (w) =>
              w.octave === key.octave &&
              w.letter === key.letter.replace("#", ""),
          );
          if (whiteBefore < 0) return null;
          const state = keyState(key);
          const width = WHITE_WIDTH * 0.56;

          return (
            <button
              key={key.note}
              type="button"
              aria-label={`${key.letter} ${key.octave}`}
              aria-pressed={active.has(key.note)}
              onPointerDown={(e) => {
                e.preventDefault();
                handleDown(key.note);
              }}
              onPointerUp={() => onRelease(key.note)}
              onPointerLeave={() => active.has(key.note) && onRelease(key.note)}
              onPointerEnter={() => pointerDown.current && handleDown(key.note)}
              className={cn(
                "absolute top-0 z-10 h-[62%] rounded-b-lg border border-ink/30 transition-colors",
                state === "bosilgan" && "bg-primary",
                state === "nishon" && "bg-warning",
                state === "togri" && "bg-success",
                state === "xato" && "bg-danger",
                !state && "bg-[#1c2436] hover:bg-[#2b3550]",
              )}
              style={{
                left: (whiteBefore + 1) * WHITE_WIDTH - width / 2,
                width,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
