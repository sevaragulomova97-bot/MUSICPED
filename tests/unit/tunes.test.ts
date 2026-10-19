import { describe, expect, it } from "vitest";
import { KUYLAR, tuneDurationMs, tunesFor } from "@/content/tunes";
import { CHOLGU_NOTALARI } from "@/content/instrument-range";
import { CHOLGULAR } from "@/lib/domain/instruments";

/**
 * Kuylar banki.
 *
 * Eng muhim shart — **chalinadiganlik**: kuydagi har bir nota o'sha
 * cholg'uda mavjud bo'lishi kerak. Aks holda «yonadigan klavish» hech
 * qayerda yonmaydi va talaba nimani bosishini bilmaydi. Xato jim
 * kechadi: sahifa ochiladi, kuy ham «chalinadi», faqat ko'rinmaydi.
 */

describe("kuylar banki", () => {
  it("har bir cholg'uda kamida uchta kuy bor", () => {
    for (const kind of CHOLGULAR) {
      expect(tunesFor(kind).length, kind).toBeGreaterThanOrEqual(3);
    }
  });

  it("har bir nota o'z cholg'usida chalinadi", () => {
    const yomon: string[] = [];
    for (const kuy of KUYLAR) {
      const mavjud = new Set(CHOLGU_NOTALARI[kuy.instrument]);
      for (const n of kuy.notes) {
        if (!mavjud.has(n.note)) yomon.push(`${kuy.id}: ${n.note}`);
      }
    }
    expect(yomon, yomon.join(", ")).toEqual([]);
  });

  it("identifikatorlar takrorlanmaydi", () => {
    const ids = KUYLAR.map((k) => k.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("har bir kuyda manba ko'rsatilgan", () => {
    for (const k of KUYLAR) {
      expect(k.manba.length, k.id).toBeGreaterThan(20);
    }
  });

  it("davomiylik va temp mantiqiy", () => {
    for (const k of KUYLAR) {
      expect(k.notes.length, k.id).toBeGreaterThanOrEqual(7);
      expect(k.bpm, k.id).toBeGreaterThanOrEqual(50);
      expect(k.bpm, k.id).toBeLessThanOrEqual(180);
      for (const n of k.notes) expect(n.beats, `${k.id}/${n.note}`).toBeGreaterThan(0);
      // Mashq uchun qulay uzunlik: bir necha soniya, lekin bir daqiqadan kam.
      const ms = tuneDurationMs(k);
      expect(ms, k.id).toBeGreaterThan(3_000);
      expect(ms, k.id).toBeLessThan(60_000);
    }
  });

  it("doira kuylarida faqat zarb nomlari ishlatiladi", () => {
    for (const k of tunesFor("doira")) {
      for (const n of k.notes) {
        expect(["bum", "tak", "qarsak"], `${k.id}`).toContain(n.note);
      }
    }
  });
});
