import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  ESKIRISH_SOATI,
  kalit,
  qoralamaniOqi,
  qoralamaniSaqla,
  qoralamaniTozala,
  qoralamaSoni,
} from "@/lib/diagnostic-draft";

/**
 * Yarim qolgan diagnostikaning qoralamasi.
 *
 * Qoida sodda ko'rinadi, lekin unda ikkita jiddiy xavf bor:
 * eskirgan qoralamani tiklash (bir hafta oldingi javoblar bugungisi
 * bilan aralashib ketadi) va saqlash bloklanganda qulash. Ikkalasi
 * ham shu yerda tekshiriladi.
 */

const HOZIR = new Date("2026-10-22T12:00:00Z");

function soatOldin(n: number) {
  return new Date(HOZIR.getTime() - n * 3_600_000).toISOString();
}

/** Oddiy xotiradagi `localStorage` — test muhitida brauzer yo'q. */
function xotiraSaqlash() {
  const map = new Map<string, string>();
  return {
    getItem: (k: string) => map.get(k) ?? null,
    setItem: (k: string, v: string) => void map.set(k, v),
    removeItem: (k: string) => void map.delete(k),
    clear: () => map.clear(),
    key: () => null,
    length: 0,
  };
}

beforeEach(() => {
  vi.unstubAllGlobals();
  vi.stubGlobal("localStorage", xotiraSaqlash());
});

describe("saqlash va o'qish", () => {
  it("saqlangan javoblar qaytib keladi", () => {
    qoralamaniSaqla("u1", "boshlangich", { "q-1": "a", "q-2": 4 }, 2);
    const q = qoralamaniOqi("u1", "boshlangich", HOZIR);
    expect(q?.answers).toEqual({ "q-1": "a", "q-2": 4 });
    expect(q?.step).toBe(2);
  });

  it("boshqa foydalanuvchi va boshqa tur aralashmaydi", () => {
    qoralamaniSaqla("u1", "boshlangich", { "q-1": "a" }, 0);
    expect(qoralamaniOqi("u2", "boshlangich", HOZIR)).toBeNull();
    expect(qoralamaniOqi("u1", "yakuniy", HOZIR)).toBeNull();
    expect(kalit("u1", "boshlangich")).not.toBe(kalit("u1", "yakuniy"));
  });

  it("tozalangandan keyin qaytmaydi", () => {
    qoralamaniSaqla("u1", "oraliq", { "q-1": "a" }, 1);
    qoralamaniTozala("u1", "oraliq");
    expect(qoralamaniOqi("u1", "oraliq", HOZIR)).toBeNull();
  });
});

describe("eskirish", () => {
  it("chegaradan oldingisi tiklanadi", () => {
    localStorage.setItem(
      kalit("u1", "boshlangich"),
      JSON.stringify({ qiymat: { answers: { "q-1": "a" }, step: 0 }, updatedAt: soatOldin(ESKIRISH_SOATI - 1) }),
    );
    expect(qoralamaniOqi("u1", "boshlangich", HOZIR)).not.toBeNull();
  });

  it("eskirgani tiklanmaydi", () => {
    localStorage.setItem(
      kalit("u1", "boshlangich"),
      JSON.stringify({ qiymat: { answers: { "q-1": "a" }, step: 0 }, updatedAt: soatOldin(ESKIRISH_SOATI + 1) }),
    );
    expect(qoralamaniOqi("u1", "boshlangich", HOZIR)).toBeNull();
  });
});

describe("buzuq ma'lumot", () => {
  for (const [nom, qiymat] of [
    ["JSON emas", "{ bu json emas"],
    ["bo'sh obyekt", "{}"],
    ["javoblari yo'q", JSON.stringify({ qiymat: { step: 1 }, updatedAt: new Date().toISOString() })],
    ["sanasi yo'q", JSON.stringify({ qiymat: { answers: {}, step: 1 } })],
    ["sanasi noto'g'ri", JSON.stringify({ qiymat: { answers: {}, step: 1 }, updatedAt: "kecha" })],
  ] as const) {
    it(`${nom} — null qaytaradi, xato tashlamaydi`, () => {
      localStorage.setItem(kalit("u1", "boshlangich"), qiymat);
      expect(() => qoralamaniOqi("u1", "boshlangich", HOZIR)).not.toThrow();
      expect(qoralamaniOqi("u1", "boshlangich", HOZIR)).toBeNull();
    });
  }
});

describe("saqlash bloklangan brauzer", () => {
  it("saqlash ham, o'qish ham qulamaydi", () => {
    const buzuq = {
      getItem() {
        throw new Error("blok");
      },
      setItem() {
        throw new Error("blok");
      },
      removeItem() {
        throw new Error("blok");
      },
    };
    vi.stubGlobal("localStorage", buzuq);
    expect(() => qoralamaniSaqla("u1", "boshlangich", { a: 1 }, 0)).not.toThrow();
    expect(qoralamaniOqi("u1", "boshlangich", HOZIR)).toBeNull();
    expect(() => qoralamaniTozala("u1", "boshlangich")).not.toThrow();
  });
});

describe("javoblar soni", () => {
  it("bo'sh ro'yxatni javob deb sanamaydi", () => {
    expect(
      qoralamaSoni({
        answers: { a: "x", b: [], c: ["m"], d: undefined },
        step: 0,
      }),
    ).toBe(2);
  });
});
