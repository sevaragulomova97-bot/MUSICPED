"use client";

import { NoteGlyph, type NotaBelgisi } from "@/components/decor/note-glyphs";
import { useEffectsEnabled, useSyncEffectsAttribute } from "@/lib/effects";

/**
 * Fondagi suzuvchi notalar.
 *
 * Kompozitsiya uch qatlamdan iborat — uzoq, o'rta va yaqin. Uzoqdagi
 * notalar kichik, xira va sekin; yaqindagilari kattaroq, aniqroq va
 * tezroq harakatlanadi. Shu farq tekis sahifaga chuqurlik beradi.
 *
 * Harakat ikki bosqichli: tashqi element pastdan yuqoriga ko'taradi,
 * ichkisi esa yon tomonga tebranadi va sekin aylanadi. Natijada yo'l
 * to'g'ri chiziq emas, tabiiy «suzish» bo'lib chiqadi.
 *
 * **Joylashuv qat'iy berilgan, tasodifiy emas.** Agar koordinatalar
 * render paytida tasodifiy hisoblansa, serverdagi va brauzerdagi HTML
 * mos kelmaydi (hydration mismatch). Qolaversa, qat'iy kompozitsiya
 * tasodifiydan ko'ra chiroyliroq: notalar bir joyga to'planib qolmaydi.
 */

type Nota = {
  kind: NotaBelgisi;
  /** Ekran kengligiga nisbatan boshlang'ich joy (%) */
  left: number;
  /** Qatlam: 1 — eng uzoq, 3 — eng yaqin */
  depth: 1 | 2 | 3;
  /** Piksel o'lchami */
  size: number;
  /** Ko'tarilish davomiyligi (soniya) */
  duration: number;
  /** Boshlanish kechikishi (soniya) — manfiy: animatsiya o'rtasidan boshlanadi */
  delay: number;
  /** Yon tebranish davomiyligi (soniya) */
  sway: number;
  /** Rang tokeni */
  tone: "primary" | "secondary" | "ijro";
  /** Kichik ekranda ko'rsatilmaydi — batareya va diqqat uchun */
  mobile: boolean;
};

const NOTALAR: Nota[] = [
  { kind: "kalit",     left: 6,  depth: 3, size: 46, duration: 52, delay: -4,  sway: 13, tone: "primary",   mobile: true },
  { kind: "chorak",    left: 14, depth: 1, size: 18, duration: 86, delay: -30, sway: 17, tone: "ijro",      mobile: false },
  { kind: "juft",      left: 21, depth: 2, size: 30, duration: 64, delay: -48, sway: 11, tone: "secondary", mobile: true },
  { kind: "bemol",     left: 28, depth: 1, size: 20, duration: 92, delay: -12, sway: 19, tone: "primary",   mobile: false },
  { kind: "sakkizlik", left: 35, depth: 3, size: 38, duration: 48, delay: -26, sway: 9,  tone: "ijro",      mobile: true },
  { kind: "diez",      left: 43, depth: 1, size: 17, duration: 78, delay: -58, sway: 15, tone: "secondary", mobile: false },
  { kind: "chorak",    left: 50, depth: 2, size: 27, duration: 68, delay: -8,  sway: 12, tone: "primary",   mobile: true },
  { kind: "kalit",     left: 57, depth: 1, size: 22, duration: 96, delay: -40, sway: 21, tone: "secondary", mobile: false },
  { kind: "bekar",     left: 64, depth: 2, size: 25, duration: 60, delay: -20, sway: 14, tone: "ijro",      mobile: false },
  { kind: "juft",      left: 71, depth: 3, size: 42, duration: 50, delay: -36, sway: 10, tone: "primary",   mobile: true },
  { kind: "sakkizlik", left: 78, depth: 1, size: 19, duration: 88, delay: -2,  sway: 18, tone: "secondary", mobile: false },
  { kind: "diez",      left: 84, depth: 2, size: 24, duration: 72, delay: -54, sway: 13, tone: "primary",   mobile: false },
  { kind: "chorak",    left: 90, depth: 3, size: 36, duration: 56, delay: -16, sway: 11, tone: "ijro",      mobile: true },
  { kind: "bemol",     left: 95, depth: 1, size: 21, duration: 94, delay: -44, sway: 20, tone: "secondary", mobile: false },
  { kind: "bekar",     left: 10, depth: 2, size: 26, duration: 74, delay: -62, sway: 16, tone: "primary",   mobile: false },
  { kind: "sakkizlik", left: 25, depth: 3, size: 34, duration: 58, delay: -70, sway: 10, tone: "secondary", mobile: true },
  { kind: "kalit",     left: 39, depth: 2, size: 29, duration: 66, delay: -24, sway: 12, tone: "ijro",      mobile: false },
  { kind: "juft",      left: 54, depth: 1, size: 23, duration: 90, delay: -76, sway: 18, tone: "primary",   mobile: false },
  { kind: "chorak",    left: 67, depth: 3, size: 40, duration: 54, delay: -50, sway: 9,  tone: "secondary", mobile: true },
  { kind: "diez",      left: 88, depth: 1, size: 18, duration: 84, delay: -34, sway: 17, tone: "ijro",      mobile: false },
];

/** Nota qog'ozi chiziqlari — ekranning yuqori va pastki uchdan birida. */
const STAV_QATORLARI = [26, 72];

const RANG: Record<Nota["tone"], string> = {
  primary: "var(--mp-primary)",
  secondary: "var(--mp-secondary)",
  ijro: "var(--mp-dir-ijro)",
};

export function NoteField() {
  // Saqlangan sozlamani `<html>` atributiga yozib turadi — CSS va
  // React'dan tashqaridagi kod shu atributga qaraydi.
  useSyncEffectsAttribute();
  const yoqilgan = useEffectsEnabled();

  if (!yoqilgan) return null;

  return (
    <div className="mp-note-field" aria-hidden="true">
      {/* Yumshoq rangli yoritish — notalar «havoda» turganday ko'rinadi */}
      <span className="mp-note-glow mp-note-glow-1" />
      <span className="mp-note-glow mp-note-glow-2" />

      {/* Nota qog'ozi motivi */}
      {STAV_QATORLARI.map((top) => (
        <span key={top} className="mp-staff" style={{ top: `${top}%` }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} style={{ top: `${i * 11}px` }} />
          ))}
        </span>
      ))}

      {NOTALAR.map((n, i) => (
        <span
          key={i}
          className={`mp-note-rise mp-note-depth-${n.depth}${n.mobile ? "" : " mp-note-wide"}`}
          style={
            {
              left: `${n.left}%`,
              animationDuration: `${n.duration}s`,
              animationDelay: `${n.delay}s`,
            } as React.CSSProperties
          }
        >
          <span
            className="mp-note-sway"
            style={
              {
                animationDuration: `${n.sway}s`,
                animationDelay: `${n.delay / 2}s`,
              } as React.CSSProperties
            }
          >
            <NoteGlyph
              kind={n.kind}
              style={{ width: n.size, height: n.size, color: RANG[n.tone] }}
            />
          </span>
        </span>
      ))}
    </div>
  );
}
