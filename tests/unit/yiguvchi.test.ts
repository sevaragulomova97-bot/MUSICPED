import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  avtomatikUrinilsinmi,
  MAX_URINISH,
  NAVBAT_KALITI,
  navbatdanOlib,
  navbatgaQosh,
  navbatniOqi,
  navbatniYoz,
  sozlangan,
  xabarMatni,
  yubor,
  type Navbatdagi,
} from "@/lib/sync/yiguvchi";

/**
 * Yig'uvchi server — natijalarni o'qituvchiga internetdan yuborish.
 *
 * Eng muhim talab: **ish yo'qolmasligi**. Internet yo'q bo'lsa paket
 * navbatda qoladi, server xato bersa ham qoladi. Shuning uchun
 * navbatning o'zi sof funksiyalar bilan boshqariladi va brauzersiz
 * sinaladi.
 */

function xotiraSaqlash(): Storage {
  const m = new Map<string, string>();
  return {
    get length() {
      return m.size;
    },
    clear: () => m.clear(),
    getItem: (k: string) => m.get(k) ?? null,
    key: (i: number) => [...m.keys()][i] ?? null,
    removeItem: (k: string) => void m.delete(k),
    setItem: (k: string, v: string) => void m.set(k, v),
  } as Storage;
}

const NAMUNA: Navbatdagi = {
  paket: { app: "musicped", kind: "natijalar" },
  talabaId: "talaba-1",
  ism: "Sinov Talabasi",
  guruh: "MT-24",
  qoshilgan: "2026-10-25T10:00:00.000Z",
  urinish: 0,
};

beforeEach(() => {
  vi.stubGlobal("localStorage", xotiraSaqlash());
});

describe("sozlama", () => {
  it("to'liq sozlama qabul qilinadi", () => {
    expect(sozlangan({ url: "https://x.supabase.co/rest/v1/natijalar", kalit: "k" })).toBe(true);
  });

  it("bo'sh yoki chala sozlama rad etiladi", () => {
    expect(sozlangan(null)).toBe(false);
    expect(sozlangan({ url: "", kalit: "" })).toBe(false);
    expect(sozlangan({ url: "https://x", kalit: "" })).toBe(false);
    expect(sozlangan({ url: "", kalit: "k" })).toBe(false);
  });

  it("https bo'lmagan manzil rad etiladi", () => {
    // Shifrlanmagan ulanishda talabaning ishi ochiq ketadi.
    expect(sozlangan({ url: "http://x.uz/yigish", kalit: "k" })).toBe(false);
    expect(sozlangan({ url: "http://192.168.1.5/yigish", kalit: "k" })).toBe(false);
  });

  it("o'z kompyuteridagi manzil sinov uchun qabul qilinadi", () => {
    expect(sozlangan({ url: "http://127.0.0.1:4182/", kalit: "k" })).toBe(true);
    expect(sozlangan({ url: "http://localhost:4182/yigish", kalit: "k" })).toBe(true);
  });
});

describe("navbat", () => {
  it("bo'sh saqlashda bo'sh ro'yxat qaytadi", () => {
    expect(navbatniOqi()).toEqual([]);
  });

  it("yozilgan navbat qaytib o'qiladi", () => {
    navbatniYoz([NAMUNA]);
    expect(navbatniOqi()).toHaveLength(1);
    expect(navbatniOqi()[0].talabaId).toBe("talaba-1");
  });

  it("buzuq yozuv e'tiborga olinmaydi", () => {
    globalThis.localStorage.setItem(NAVBAT_KALITI, "{ bu JSON emas");
    expect(navbatniOqi()).toEqual([]);
    globalThis.localStorage.setItem(NAVBAT_KALITI, JSON.stringify([{ ism: "faqat ism" }]));
    expect(navbatniOqi()).toEqual([]);
  });

  it("bitta talabaning eski paketi yangisi bilan almashtiriladi", () => {
    // Serverga eng so'nggi holat kerak, oraliq nusxalar emas.
    const eski = { ...NAMUNA, qoshilgan: "2026-10-25T09:00:00.000Z" };
    const yangi = { ...NAMUNA, qoshilgan: "2026-10-25T11:00:00.000Z" };
    const n = navbatgaQosh(navbatgaQosh([], eski), yangi);
    expect(n).toHaveLength(1);
    expect(n[0].qoshilgan).toBe("2026-10-25T11:00:00.000Z");
  });

  it("boshqa talabaning paketi saqlanib qoladi", () => {
    const boshqa = { ...NAMUNA, talabaId: "talaba-2", ism: "Boshqa" };
    const n = navbatgaQosh(navbatgaQosh([], NAMUNA), boshqa);
    expect(n.map((x) => x.talabaId)).toEqual(["talaba-1", "talaba-2"]);
  });

  it("yuborilgan paket navbatdan chiqadi", () => {
    const n = navbatdanOlib([NAMUNA], "talaba-1");
    expect(n).toEqual([]);
  });

  it("urinishlar chegaradan oshsa avtomatik urinish to'xtaydi", () => {
    expect(avtomatikUrinilsinmi({ ...NAMUNA, urinish: 0 })).toBe(true);
    expect(avtomatikUrinilsinmi({ ...NAMUNA, urinish: MAX_URINISH - 1 })).toBe(true);
    expect(avtomatikUrinilsinmi({ ...NAMUNA, urinish: MAX_URINISH })).toBe(false);
  });
});

describe("yuborish", () => {
  const sozlama = { url: "https://x.supabase.co/rest/v1/natijalar", kalit: "ochiq-kalit" };

  it("muvaffaqiyatli javobda ok qaytadi", async () => {
    const chaqiruvlar: Array<[string, RequestInit | undefined]> = [];
    const soxta = (async (u: string, o?: RequestInit) => {
      chaqiruvlar.push([u, o]);
      return { ok: true, status: 201 } as Response;
    }) as unknown as typeof fetch;

    const natija = await yubor(sozlama, NAMUNA, soxta);
    expect(natija).toEqual({ ok: true });
    expect(chaqiruvlar[0][0]).toBe(sozlama.url);

    const body = JSON.parse(String(chaqiruvlar[0][1]?.body));
    expect(body.talaba_id).toBe("talaba-1");
    expect(body.ism).toBe("Sinov Talabasi");
    expect(body.paket).toEqual({ app: "musicped", kind: "natijalar" });

    const h = chaqiruvlar[0][1]?.headers as Record<string, string>;
    expect(h.apikey).toBe("ochiq-kalit");
  });

  it("server xato qaytarsa sabab tushunarli bo'ladi", async () => {
    const soxta = (async () => ({ ok: false, status: 401 }) as Response) as unknown as typeof fetch;
    const natija = await yubor(sozlama, NAMUNA, soxta);
    expect(natija).toEqual({ ok: false, sabab: "Server 401 javob qaytardi" });
  });

  it("tarmoq uzilsa ham qulamaydi", async () => {
    const soxta = (async () => {
      throw new TypeError("Failed to fetch");
    }) as unknown as typeof fetch;
    const natija = await yubor(sozlama, NAMUNA, soxta);
    expect(natija.ok).toBe(false);
    if (!natija.ok) expect(natija.sabab).toBe("Failed to fetch");
  });
});

describe("xabar matni", () => {
  it("navbatda qolgani sababi bilan aytiladi", () => {
    const m = xabarMatni({ holat: "navbatda", sabab: "Internetga ulanib bo'lmadi" });
    expect(m).toMatch(/navbatga qo'yildi/);
    expect(m).toMatch(/Internetga ulanib bo'lmadi/);
    // Foydalanuvchi sahifani ochiq qoldirishi shart emasligi aytiladi.
    expect(m).toMatch(/ochiq qoldirishingiz shart emas/);
  });
});
