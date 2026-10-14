"use client";

import { cn } from "@/lib/utils";

/**
 * Torli cholg'ular uchun umumiy grif.
 *
 * Dutor, rubob va gitara bir xil mantiqda ishlaydi — faqat torlar soni,
 * sozlanishi va pardalar soni farq qiladi.
 */

export type StringSpec = {
  nom: string;
  /** Pardalardagi notalar; birinchisi — bo'sh tor */
  notalar: string[];
};

export function Fretboard({
  strings,
  active,
  onPluck,
  targetNote,
  feedback,
  illustration,
}: {
  strings: StringSpec[];
  active: ReadonlySet<string>;
  onPluck: (note: string) => void;
  targetNote?: string;
  feedback?: "togri" | "xato" | null;
  illustration?: React.ReactNode;
}) {
  const pardaSoni = Math.max(...strings.map((s) => s.notalar.length));

  return (
    <div className="flex flex-col gap-5">
      {illustration && <div className="flex justify-center">{illustration}</div>}

      <div className="overflow-x-auto pb-2" role="group" aria-label="Grif — pardalar">
        <div className="min-w-[600px]">
          <div className="mb-1.5 flex gap-1.5 pl-24">
            {Array.from({ length: pardaSoni }, (_, i) => (
              <span key={i} className="flex-1 text-center text-[11px] text-ink-muted">
                {i === 0 ? "bo'sh" : i}
              </span>
            ))}
          </div>

          {strings.map((tor) => (
            <div key={tor.nom} className="mb-2 flex items-center gap-1.5">
              <span className="w-[88px] shrink-0 truncate text-xs font-medium text-ink-muted">
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
                      "h-10 flex-1 rounded-lg border text-xs font-medium transition-colors",
                      bosilgan && "border-primary bg-primary text-white",
                      !bosilgan && nishon && feedback === "togri" && "border-success bg-success text-white",
                      !bosilgan && nishon && feedback === "xato" && "border-danger bg-danger text-white",
                      !bosilgan && nishon && !feedback && "border-warning bg-warning-soft text-ink",
                      !bosilgan && !nishon &&
                        "border-border-subtle bg-surface text-ink-muted hover:border-primary/40 hover:bg-primary-soft",
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

/* ───────────────────── Cholg'u tasvirlari (SVG) ───────────────────── */

export function DutorSvg() {
  return (
    <svg viewBox="0 0 320 110" className="h-24 w-full max-w-sm" role="img" aria-label="Dutor tasviri">
      <rect x="96" y="48" width="176" height="13" rx="4" fill="#8b5e34" />
      <ellipse cx="62" cy="55" rx="58" ry="42" fill="#a9733f" />
      <ellipse cx="62" cy="55" rx="46" ry="32" fill="#c08a4e" />
      <circle cx="62" cy="55" r="13" fill="#5c3a1c" />
      <rect x="268" y="40" width="34" height="28" rx="6" fill="#6f4a26" />
      <circle cx="284" cy="36" r="4.5" fill="#e8d6bd" />
      <circle cx="296" cy="50" r="4.5" fill="#e8d6bd" />
      <line x1="40" y1="51" x2="296" y2="50" stroke="#f1e4cf" strokeWidth="1.6" />
      <line x1="40" y1="59" x2="296" y2="58" stroke="#f1e4cf" strokeWidth="1.6" />
    </svg>
  );
}

export function RubobSvg() {
  return (
    <svg viewBox="0 0 320 110" className="h-24 w-full max-w-sm" role="img" aria-label="Rubob tasviri">
      {/* Rubobning korpusi kichik va chuqur, dastasi uzun */}
      <rect x="86" y="48" width="196" height="12" rx="4" fill="#6b4423" />
      <path d="M18 55 Q18 20 52 24 Q86 28 86 55 Q86 82 52 86 Q18 90 18 55 Z" fill="#8b5a2b" />
      <ellipse cx="50" cy="55" rx="26" ry="24" fill="#c9a06a" />
      <circle cx="50" cy="55" r="8" fill="#4a2f16" />
      <rect x="276" y="42" width="30" height="26" rx="5" fill="#5c3a1c" />
      <circle cx="290" cy="38" r="4" fill="#e8d6bd" />
      <circle cx="300" cy="52" r="4" fill="#e8d6bd" />
      {[50, 55, 60].map((y) => (
        <line key={y} x1="30" y1={y} x2="300" y2={y - 1} stroke="#e9e2d2" strokeWidth="1.3" />
      ))}
    </svg>
  );
}

export function GitaraSvg() {
  return (
    <svg viewBox="0 0 320 110" className="h-24 w-full max-w-sm" role="img" aria-label="Gitara tasviri">
      <rect x="110" y="49" width="166" height="11" rx="3" fill="#8b5e34" />
      {/* Gitara korpusi — ikki aylananing qo'shilishi */}
      <ellipse cx="52" cy="55" rx="44" ry="38" fill="#c08a4e" />
      <ellipse cx="96" cy="55" rx="30" ry="28" fill="#c08a4e" />
      <ellipse cx="52" cy="55" rx="34" ry="28" fill="#d8a164" />
      <circle cx="72" cy="55" r="12" fill="#5c3a1c" />
      <rect x="272" y="42" width="30" height="25" rx="5" fill="#6f4a26" />
      {[46, 50, 53, 57, 60, 64].map((y) => (
        <line key={y} x1="30" y1={y} x2="298" y2={y} stroke="#f1e4cf" strokeWidth="1.1" />
      ))}
    </svg>
  );
}

export function NaySvg() {
  return (
    <svg viewBox="0 0 320 110" className="h-24 w-full max-w-sm" role="img" aria-label="Nay tasviri">
      <rect x="20" y="46" width="280" height="18" rx="9" fill="#c9a06a" />
      <rect x="20" y="46" width="280" height="6" rx="3" fill="#dcb880" />
      {[70, 110, 150, 190, 230, 266].map((x) => (
        <circle key={x} cx={x} cy="55" r="6" fill="#5c3a1c" />
      ))}
      <circle cx="42" cy="55" r="5" fill="#4a2f16" />
      {[52, 170, 250].map((x) => (
        <rect key={x} x={x} y="44" width="4" height="22" rx="2" fill="#8b5e34" />
      ))}
    </svg>
  );
}
