import { describe, expect, it } from "vitest";
import {
  exercisesFor,
  findExercise,
  MASHQLAR,
  RITM_MAX_OGISH_MS,
  scoreRhythm,
} from "@/content/practice";

describe("mashqlar banki", () => {
  it("har bir cholg'uda 3 ta mashq bor", () => {
    expect(exercisesFor("pianino")).toHaveLength(3);
    expect(exercisesFor("dutor")).toHaveLength(3);
    expect(exercisesFor("doira")).toHaveLength(3);
  });

  it("identifikatorlar takrorlanmaydi", () => {
    expect(new Set(MASHQLAR.map((m) => m.id)).size).toBe(MASHQLAR.length);
  });

  it("ketma-ket rejimdagi mashqda nota ketma-ketligi bor", () => {
    for (const m of MASHQLAR.filter((m) => m.mode === "ketma-ket")) {
      expect(m.sequence?.length).toBeGreaterThan(0);
    }
  });

  it("ritm rejimidagi mashqda naqsh bor va vaqtlar o'sib boradi", () => {
    for (const m of MASHQLAR.filter((m) => m.mode === "ritm")) {
      const times = m.pattern!.map((p) => p.timeMs);
      expect(times.length).toBeGreaterThan(0);
      expect([...times].sort((a, b) => a - b)).toEqual(times);
    }
  });

  it("findExercise mavjud mashqni topadi", () => {
    expect(findExercise("p-do-re-mi")?.title).toBe("Do–Re–Mi");
    expect(findExercise("yoq")).toBeUndefined();
  });
});

describe("scoreRhythm — ritm aniqligi", () => {
  const pattern = [
    { stroke: "bum", timeMs: 0 },
    { stroke: "tak", timeMs: 600 },
    { stroke: "bum", timeMs: 1200 },
    { stroke: "tak", timeMs: 1800 },
  ];

  it("mukammal takrorlash — 100%", () => {
    const r = scoreRhythm(pattern, pattern);
    expect(r.accuracy).toBe(100);
    expect(r.averageOffsetMs).toBe(0);
    expect(r.matched).toBe(4);
  });

  it("kichik kechikish ballni biroz pasaytiradi", () => {
    const played = pattern.map((p) => ({ ...p, timeMs: p.timeMs + 40 }));
    const r = scoreRhythm(pattern, played);
    expect(r.averageOffsetMs).toBe(40);
    expect(r.accuracy).toBeGreaterThan(85);
    expect(r.accuracy).toBeLessThan(100);
  });

  it("chegaradan katta chetlanish zarb hisobga olinmaydi", () => {
    const played = pattern.map((p) => ({
      ...p,
      timeMs: p.timeMs + RITM_MAX_OGISH_MS + 100,
    }));
    expect(scoreRhythm(pattern, played).matched).toBe(0);
  });

  it("noto'g'ri zona bosilsa, zarb sanalmaydi", () => {
    const played = pattern.map((p) => ({ ...p, stroke: "qarsak" }));
    const r = scoreRhythm(pattern, played);
    expect(r.matched).toBe(0);
    expect(r.accuracy).toBe(0);
  });

  it("yarim naqsh chalinsa, qamrov ballni pasaytiradi", () => {
    const r = scoreRhythm(pattern, pattern.slice(0, 2));
    expect(r.matched).toBe(2);
    expect(r.accuracy).toBe(50); // qamrov 0.5 x vaqt aniqligi 1.0
  });

  it("bitta chalingan zarb ikki namunaga sanalmaydi", () => {
    // Namunada ikkita "bum" bor (0 va 1200 ms). Chalingan yagona zarb 300 ms da:
    // u birinchisiga mos keladi (chetlanish 300 ms), ikkinchisi esa javobsiz qoladi.
    const r = scoreRhythm(pattern, [{ stroke: "bum", timeMs: 300 }]);
    expect(r.matched).toBe(1);
    expect(r.averageOffsetMs).toBe(300);
  });

  it("hech narsa chalinmasa — 0%", () => {
    expect(scoreRhythm(pattern, []).accuracy).toBe(0);
  });

  it("bo'sh namuna xavfsiz ishlaydi", () => {
    expect(scoreRhythm([], [{ stroke: "bum", timeMs: 0 }]).accuracy).toBe(0);
  });
});
