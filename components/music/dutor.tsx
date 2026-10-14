"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Dutor grifi.
 *
 * Dutor — ikki torli cholg'u. Har bir tor bo'ylab pardalar joylashgan;
 * bo'sh tor (0-parda) ham chalinadi. Notalar an'anaviy sozlashga yaqin
 * tanlangan: pastki tor G3, yuqorigisi C4 dan boshlanadi.
 */

const PARDA_SONI = 7;

/** Har bir tor uchun pardalardagi notalar (0 — bo'sh tor). */
const TORLAR: Array<{ nom: string; notalar: string[] }> = [
  {
    nom: "Past tor",
    notalar: ["G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4"],
  },
  {
    nom: "Baland tor",
    notalar: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
  },
];

export function Dutor({
  active,
  onPluck,
  targetNote,
  feedback,
}: {
  active: ReadonlySet<string>;
  onPluck: (note: string) => void;
  targetNote?: string;
  feedback?: "togri" | "xato" | null;
}) {
  return (
    <div className="flex flex-col gap-5">
      {/* Cholg'u tasviri — o'zimiz chizgan SVG */}
      <div className="flex justify-center">
        <svg
          viewBox="0 0 320 110"
          className="h-24 w-full max-w-sm"
          role="img"
          aria-label="Dutor tasviri"
        >
          {/* Dastasi */}
          <rect x="96" y="48" width="176" height="13" rx="4" fill="#8b5e34" />
          {/* Korpusi */}
          <ellipse cx="62" cy="55" rx="58" ry="42" fill="#a9733f" />
          <ellipse cx="62" cy="55" rx="46" ry="32" fill="#c08a4e" />
          <circle cx="62" cy="55" r="13" fill="#5c3a1c" />
          {/* Kalla va quloqlar */}
          <rect x="268" y="40" width="34" height="28" rx="6" fill="#6f4a26" />
          <circle cx="284" cy="36" r="4.5" fill="#e8d6bd" />
          <circle cx="296" cy="50" r="4.5" fill="#e8d6bd" />
          {/* Torlar */}
          <line x1="40" y1="51" x2="296" y2="50" stroke="#f1e4cf" strokeWidth="1.6" />
          <line x1="40" y1="59" x2="296" y2="58" stroke="#f1e4cf" strokeWidth="1.6" />
        </svg>
      </div>

      {/* Interaktiv grif */}
      <div
        className="overflow-x-auto pb-2"
        role="group"
        aria-label="Dutor grifi — pardalar"
      >
        <div className="min-w-[560px]">
          {/* Parda raqamlari */}
          <div className="mb-1.5 flex gap-1.5 pl-24">
            {Array.from({ length: PARDA_SONI + 1 }, (_, i) => (
              <span
                key={i}
                className="flex-1 text-center text-[11px] text-ink-muted"
              >
                {i === 0 ? "bo'sh" : i}
              </span>
            ))}
          </div>

          {TORLAR.map((tor) => (
            <div key={tor.nom} className="mb-2 flex items-center gap-1.5">
              <span className="w-[88px] shrink-0 text-xs font-medium text-ink-muted">
                {tor.nom}
              </span>
              {tor.notalar.map((note, parda) => {
                const bosilgan = active.has(note);
                const nishon = targetNote === note;
                return (
                  <button
                    key={`${tor.nom}-${parda}`}
                    type="button"
                    onPointerDown={(e) => {
                      e.preventDefault();
                      onPluck(note);
                    }}
                    aria-label={`${tor.nom}, ${parda === 0 ? "bo'sh tor" : `${parda}-parda`}, ${note}`}
                    className={cn(
                      "h-11 flex-1 rounded-lg border text-xs font-medium transition-colors",
                      bosilgan && "border-primary bg-primary text-white",
                      !bosilgan && nishon && feedback === "togri" && "border-success bg-success text-white",
                      !bosilgan && nishon && feedback === "xato" && "border-danger bg-danger text-white",
                      !bosilgan && nishon && !feedback && "border-warning bg-warning-soft text-ink",
                      !bosilgan && !nishon && "border-border-subtle bg-surface text-ink-muted hover:border-primary/40 hover:bg-primary-soft",
                    )}
                  >
                    {note}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
