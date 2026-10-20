"use client";

import * as React from "react";
import type { NotationSpec } from "@/content/lesson-types";
import { cn } from "@/lib/utils";

/**
 * Nota yozuvi (VexFlow).
 *
 * VexFlow faqat brauzerda ishlaydi va og'ir kutubxona, shuning uchun
 * `import()` orqali talab bo'yicha yuklanadi — statik build unga tegmaydi.
 *
 * Nota ustiga bosilganda tovush chalinishi mumkin (`onNoteClick`), shunda
 * talaba yozuvni ko'rish bilan birga eshitadi ham.
 */

const STAVE_WIDTH = 620;
const NOTE_START = 56;

/** VexFlow kaliti ("f#/4") -> Tone.js notasi ("F#4"). */
export function vexKeyToTone(key: string): string {
  const [letter, octave] = key.split("/");
  const base = letter[0].toUpperCase();
  const accidental = letter.slice(1).replace("n", "");
  return `${base}${accidental}${octave}`;
}

/**
 * VexFlow kaliti -> o'zbekcha nota nomi ("f#/4" -> "fa#").
 *
 * Tugma yorlig'i uchun kerak. `lyric` berilmagan bo'lsa, ilgari Tone.js
 * nomi ("C5", "E4") chiqardi — butun interfeys o'zbekcha bo'lgan joyda
 * ilmiy balandlik yozuvi yot ko'rinadi va talabaga hech narsa aytmaydi.
 * Oktava raqami ataylab tushirib qoldirilgan: tugma nota nomini aytadi,
 * balandligini esa chizmadan ko'rinadi va bosilganda eshitiladi.
 */
const NOTA_NOMI: Record<string, string> = {
  c: "do",
  d: "re",
  e: "mi",
  f: "fa",
  g: "sol",
  a: "lya",
  b: "si",
};

export function vexKeyToUzbek(key: string): string {
  const letter = key.split("/")[0];
  const nom = NOTA_NOMI[letter[0].toLowerCase()];
  if (!nom) return key;
  const alteratsiya = letter
    .slice(1)
    .replace(/##/g, "x")
    .replace(/#/g, "\u266F")
    .replace(/bb/g, "\u266D\u266D")
    .replace(/b/g, "\u266D")
    .replace(/n/g, "");
  return nom + alteratsiya;
}

/** Kalitdagi alteratsiya belgisi ("f#/4" -> "#"). */
function accidentalOf(key: string): string | null {
  const letter = key.split("/")[0];
  const acc = letter.slice(1);
  return acc === "#" || acc === "b" || acc === "##" || acc === "bb" ? acc : null;
}

export function Notation({
  spec,
  caption,
  onNoteClick,
  activeIndex,
  className,
}: {
  spec: NotationSpec;
  caption?: string;
  /** Berilsa, notalar bosiladigan bo'ladi */
  onNoteClick?: (tones: string[], index: number) => void;
  /** Hozir chalinayotgan nota — yoritiladi */
  activeIndex?: number | null;
  className?: string;
}) {
  const hostRef = React.useRef<HTMLDivElement | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [ready, setReady] = React.useState(false);

  // Chizish — spec o'zgarganda qayta bajariladi
  React.useEffect(() => {
    let cancelled = false;
    const host = hostRef.current;
    if (!host) return;

    (async () => {
      try {
        const VF = await import("vexflow");
        if (cancelled || !hostRef.current) return;

        const { Renderer, Stave, StaveNote, Voice, Formatter, Accidental, Annotation } = VF;

        hostRef.current.innerHTML = "";
        const renderer = new Renderer(hostRef.current, Renderer.Backends.SVG);
        renderer.resize(STAVE_WIDTH, 150);
        const ctx = renderer.getContext();

        const stave = new Stave(8, 20, STAVE_WIDTH - 24);
        stave.addClef(spec.clef);
        if (spec.timeSignature) stave.addTimeSignature(spec.timeSignature);
        stave.setContext(ctx).draw();

        const notes = spec.notes.map((n) => {
          const note = new StaveNote({
            keys: n.keys,
            duration: n.duration,
            clef: spec.clef,
          });
          n.keys.forEach((key, i) => {
            const acc = accidentalOf(key);
            if (acc) note.addModifier(new Accidental(acc), i);
          });
          if (n.lyric) {
            note.addModifier(
              new Annotation(n.lyric)
                .setVerticalJustification(Annotation.VerticalJustify.BOTTOM),
              0,
            );
          }
          return note;
        });

        // Ovoz qat'iy taktga bo'linmasligi uchun tekshiruv o'chiriladi —
        // darslardagi misollar ko'pincha to'liq takt emas.
        const voice = new Voice({ numBeats: 4, beatValue: 4 });
        voice.setStrict(false);
        voice.addTickables(notes);
        new Formatter().joinVoices([voice]).format([voice], STAVE_WIDTH - NOTE_START - 40);
        voice.draw(ctx, stave);

        if (!cancelled) {
          setReady(true);
          setError(null);
        }
      } catch (cause) {
        console.error(cause);
        if (!cancelled) setError("Nota yozuvini chizib bo'lmadi.");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [spec]);

  return (
    <figure className={cn("flex flex-col gap-2", className)}>
      <div className="overflow-x-auto rounded-xl border border-border-subtle bg-white p-2">
        <div ref={hostRef} className="min-w-[620px]" aria-hidden="true" />
        {!ready && !error && (
          <p className="px-2 pb-2 text-xs text-ink-muted">Nota chizilmoqda…</p>
        )}
        {error && (
          <p role="alert" className="px-2 pb-2 text-xs text-danger-ink">
            {error}
          </p>
        )}
      </div>

      {/* Nota yozuvi SVG — ekran o'quvchi uchun matnli muqobil va
          klaviatura bilan chalish imkoniyati */}
      {onNoteClick && (
        <div className="flex flex-wrap gap-1.5">
          {spec.notes.map((n, i) => {
            const tones = n.keys.map(vexKeyToTone);
            const yorliq = n.lyric ?? n.keys.map(vexKeyToUzbek).join("+");
            return (
              <button
                key={`${n.keys.join("-")}-${i}`}
                type="button"
                onClick={() => onNoteClick(tones, i)}
                aria-label={`${yorliq} — eshitish`}
                className={cn(
                  "rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors",
                  activeIndex === i
                    ? "border-primary bg-primary-solid text-white"
                    : "border-border-subtle bg-surface text-ink-muted hover:border-primary/40 hover:bg-primary-soft",
                )}
              >
                {yorliq}
              </button>
            );
          })}
        </div>
      )}

      {caption && (
        <figcaption className="text-sm text-ink-muted">{caption}</figcaption>
      )}
    </figure>
  );
}
