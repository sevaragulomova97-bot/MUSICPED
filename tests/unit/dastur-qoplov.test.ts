import { describe, expect, it } from "vitest";
import { dasturQoplovi, jnTaklifi } from "@/lib/teacher";
import { BARCHA_DARSLAR } from "@/content/courses";
import { NAZORATLAR } from "@/lib/baholash-rasmiy";
import type { TransferSubmission } from "@/lib/transfer";

/**
 * O'qituvchiga ko'rinadigan ikki hisob: dastur qoplovi va JN taklifi.
 *
 * Qoplov «qancha dars tugatdi» degan umumiy raqamni almashtiradi:
 * platformada dasturga kirmaydigan darslar ham bor va ular aralashib
 * ketsa, o'qituvchi talabaning dastur bo'yicha qayerda turganini
 * bilmaydi.
 */

const maruzalar = BARCHA_DARSLAR.filter((d) => d.dasturTuri === "maruza");
const amaliylar = BARCHA_DARSLAR.filter((d) => d.dasturTuri === "amaliy");
const boshqalar = BARCHA_DARSLAR.filter((d) => !d.dasturKodi);

const tugagan = (ids: string[]) =>
  ids.map((lessonId) => ({ lessonId, percent: 100 }));

describe("dastur qoplovi", () => {
  it("bo'sh progressda hammasi qolgan deb ko'rsatiladi", () => {
    const q = dasturQoplovi([]);
    expect(q.maruza.jami).toBe(30);
    expect(q.amaliy.jami).toBe(30);
    expect(q.maruza.bajarildi).toBe(0);
    expect(q.maruza.qolgan).toHaveLength(30);
  });

  it("yakunlangan dars bajarilgan deb sanaladi", () => {
    const q = dasturQoplovi(tugagan([maruzalar[0].id, amaliylar[0].id]));
    expect(q.maruza.bajarildi).toBe(1);
    expect(q.amaliy.bajarildi).toBe(1);
    expect(q.maruza.qolgan).not.toContain(maruzalar[0].dasturKodi);
  });

  it("chala dars bajarilgan hisoblanmaydi", () => {
    const q = dasturQoplovi([{ lessonId: maruzalar[0].id, percent: 99 }]);
    expect(q.maruza.bajarildi).toBe(0);
  });

  it("dasturga kirmaydigan dars qoplovga qo'shilmaydi", () => {
    // Aynan shu aralashuv eski «tugagan darslar soni» raqamini
    // ishonchsiz qilardi.
    expect(boshqalar.length).toBeGreaterThan(0);
    const q = dasturQoplovi(tugagan(boshqalar.map((d) => d.id)));
    expect(q.maruza.bajarildi).toBe(0);
    expect(q.amaliy.bajarildi).toBe(0);
  });

  it("qolgan mavzular dastur tartibida chiqadi", () => {
    const q = dasturQoplovi([]);
    const raqam = (k: string) => Number(k.replace(/^\D+/, ""));
    const raqamlar = q.amaliy.qolgan.map(raqam);
    expect(raqamlar).toEqual([...raqamlar].sort((a, b) => a - b));
    expect(q.amaliy.qolgan[0]).toBe("A1");
  });
});

describe("JN taklifi", () => {
  const max = NAZORATLAR.find((n) => n.kod === "JN")!.max;
  const ish = (score?: number): TransferSubmission => ({
    id: Math.random().toString(36),
    taskId: "t",
    taskType: "loyiha",
    area: "metodika",
    bloom: "tahlil",
    score,
    submittedAt: "2026-01-01T00:00:00.000Z",
  });

  it("baholangan ish bo'lmasa taklif berilmaydi", () => {
    expect(jnTaklifi([], max)).toBeNull();
    expect(jnTaklifi([ish(undefined)], max)).toBeNull();
    // Manfiy ball — «baho kutmoqda» belgisi, o'rtachaga kirmaydi.
    expect(jnTaklifi([ish(-1)], max)).toBeNull();
  });

  it("foizdan ballga aylantiradi", () => {
    expect(jnTaklifi([ish(100)], max)).toBe(max);
    expect(jnTaklifi([ish(50)], max)).toBe(max / 2);
    expect(jnTaklifi([ish(80), ish(60)], max)).toBe(21);
  });

  it("baho kutayotgan ishlar o'rtachani pasaytirmaydi", () => {
    // Aks holda baholanmagan ish nol kabi ishlab, taklif adolatsiz
    // past chiqardi.
    expect(jnTaklifi([ish(90), ish(-1), ish(undefined)], max)).toBe(27);
  });
});
