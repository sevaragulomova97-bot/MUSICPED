import { describe, expect, it } from "vitest";
import { chiqariladiganlar, type KeshElementi } from "@/lib/audio/lru";

/**
 * Audio keshining chegarasi.
 *
 * Chegara ishlamasa, kamchilik **sekin** namoyon bo'ladi: bir necha
 * cholg'uni aylangan talabaning yorlig'i kuchsiz telefonda yopiladi.
 * Shuning uchun qoida sof funksiyaga ajratilgan va to'g'ridan-to'g'ri
 * tekshiriladi.
 */

const MB = 1024 * 1024;

function el(kalit: string, mb: number, navbat: number): KeshElementi {
  return { kalit, bayt: mb * MB, navbat };
}

describe("kesh chegarasi", () => {
  it("chegaraga sig'sa, hech narsa chiqarilmaydi", () => {
    expect(chiqariladiganlar([el("a", 10, 1), el("b", 10, 2)], 48 * MB)).toEqual([]);
  });

  it("eng uzoq ishlatilmagani birinchi chiqariladi", () => {
    const chiqdi = chiqariladiganlar(
      [el("yangi", 30, 10), el("eski", 30, 1), el("orta", 30, 5)],
      48 * MB,
    );
    expect(chiqdi).toEqual(["eski", "orta"]);
  });

  it("chegaraga tushgach to'xtaydi — ortiqcha chiqarmaydi", () => {
    const chiqdi = chiqariladiganlar(
      [el("a", 20, 1), el("b", 20, 2), el("c", 20, 3)],
      48 * MB,
    );
    expect(chiqdi).toEqual(["a"]);
  });

  it("bo'sh keshda ishlaydi", () => {
    expect(chiqariladiganlar([], 48 * MB)).toEqual([]);
  });

  it("bitta element chegaradan katta bo'lsa, u ham chiqariladi", () => {
    // Aks holda kesh abadiy chegaradan oshib turardi.
    expect(chiqariladiganlar([el("katta", 60, 1)], 48 * MB)).toEqual(["katta"]);
  });

  it("asl ro'yxatni o'zgartirmaydi", () => {
    const royxat = [el("a", 30, 3), el("b", 30, 1)];
    const nusxa = JSON.parse(JSON.stringify(royxat));
    chiqariladiganlar(royxat, 48 * MB);
    expect(royxat).toEqual(nusxa);
  });
});
