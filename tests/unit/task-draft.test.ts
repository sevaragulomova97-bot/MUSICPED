import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  ESKIRISH_SOATI,
  kalit,
  taskQoralamaBormi,
  taskQoralamaniOqi,
  taskQoralamaniSaqla,
  taskQoralamaniTozala,
} from "@/lib/task-draft";

/**
 * Yarim qolgan topshiriqning qoralamasi.
 *
 * Matnli topshiriq — dars ishlanmasi yoki asar tahlili — uzun
 * yoziladi, shuning uchun uni yo'qotish eng og'ir kamchilik bo'lardi.
 */

/**
 * Sinov vaqti **doim hozirgi payt** bo'ladi.
 *
 * Ilgari bu yerda qat'iy sana turardi va saqlash `new Date()` ni
 * ishlatardi: kun almashgani bilanoq qoralama «kelajakdan» kelgan
 * bo'lib ko'rinib, testlar yiqildi. Qat'iy sana faqat eskirishni
 * tekshiradigan joylarda, undan hisoblab olinadi.
 */
const HOZIR = new Date();

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

it("yozilgan matn qaytib keladi", () => {
  taskQoralamaniSaqla("u1", "task-1", {}, "Dars ishlanmasi: kirish qismi…");
  expect(taskQoralamaniOqi("u1", "task-1", HOZIR)?.text).toBe(
    "Dars ishlanmasi: kirish qismi…",
  );
});

it("test javoblari qaytib keladi", () => {
  taskQoralamaniSaqla("u1", "task-2", { "q-1": "a", "q-2": ["b", "c"] }, "");
  expect(taskQoralamaniOqi("u1", "task-2", HOZIR)?.answers).toEqual({
    "q-1": "a",
    "q-2": ["b", "c"],
  });
});

it("topshiriqlar bir-biriga aralashmaydi", () => {
  taskQoralamaniSaqla("u1", "task-1", {}, "birinchi");
  taskQoralamaniSaqla("u1", "task-2", {}, "ikkinchi");
  expect(taskQoralamaniOqi("u1", "task-1", HOZIR)?.text).toBe("birinchi");
  expect(taskQoralamaniOqi("u2", "task-1", HOZIR)).toBeNull();
});

it("tozalangandan keyin qaytmaydi", () => {
  taskQoralamaniSaqla("u1", "task-1", {}, "matn");
  taskQoralamaniTozala("u1", "task-1");
  expect(taskQoralamaniOqi("u1", "task-1", HOZIR)).toBeNull();
});

it("eskirgani tiklanmaydi", () => {
  const eski = new Date(HOZIR.getTime() - (ESKIRISH_SOATI + 1) * 3_600_000);
  localStorage.setItem(
    kalit("u1", "task-1"),
    JSON.stringify({ qiymat: { answers: {}, text: "eski" }, updatedAt: eski.toISOString() }),
  );
  expect(taskQoralamaniOqi("u1", "task-1", HOZIR)).toBeNull();
});

it("buzuq ma'lumotda xato tashlamaydi", () => {
  localStorage.setItem(kalit("u1", "task-1"), "{ json emas");
  expect(() => taskQoralamaniOqi("u1", "task-1", HOZIR)).not.toThrow();
  expect(taskQoralamaniOqi("u1", "task-1", HOZIR)).toBeNull();
});

describe("bo'sh qoralama", () => {
  it("bo'sh matn va bo'sh javoblar — ish yo'q", () => {
    expect(taskQoralamaBormi({ answers: {}, text: "   " })).toBe(false);
    expect(taskQoralamaBormi({ answers: { a: [] }, text: "" })).toBe(false);
  });

  it("matn yoki javob bo'lsa — ish bor", () => {
    expect(taskQoralamaBormi({ answers: {}, text: "x" })).toBe(true);
    expect(taskQoralamaBormi({ answers: { a: "x" }, text: "" })).toBe(true);
  });
});

/**
 * Vaqt chegarasi bor topshiriqda taymer boshlangan vaqt ham qoralama
 * bilan birga saqlanadi — aks holda sahifani yangilash vaqtni qaytadan
 * berardi va vaqtli test o'lchov sifatida ma'nosiz bo'lib qolardi.
 */
describe("taymer boshlangan vaqti", () => {
  it("saqlanadi va qaytib o'qiladi", () => {
    taskQoralamaniSaqla("u1", "task-vaqt", {}, "", 1_700_000_000_000);
    expect(taskQoralamaniOqi("u1", "task-vaqt")?.startedAt).toBe(
      1_700_000_000_000,
    );
  });

  it("berilmasa `undefined` bo'ladi — vaqtsiz topshiriqlar uchun", () => {
    taskQoralamaniSaqla("u1", "task-oddiy", {}, "matn");
    const q = taskQoralamaniOqi("u1", "task-oddiy");
    expect(q?.text).toBe("matn");
    expect(q?.startedAt).toBeUndefined();
  });

  it("buzuq qiymatli qoralama qabul qilinmaydi", () => {
    taskQoralamaniSaqla("u1", "task-buzuq", {}, "matn", 1_700_000_000_000);
    const kalitNomi = kalit("u1", "task-buzuq");
    const xom = JSON.parse(globalThis.localStorage.getItem(kalitNomi)!);
    xom.qiymat.startedAt = "kecha";
    globalThis.localStorage.setItem(kalitNomi, JSON.stringify(xom));
    expect(taskQoralamaniOqi("u1", "task-buzuq")).toBeNull();
  });
});
