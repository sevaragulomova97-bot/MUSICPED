import { expect, test, type Page } from "@playwright/test";
import { ADMIN, OQITUVCHI, sessiyaBer, TALABA } from "./yordamchi";

/**
 * Har bir sahifa **brauzerda** ochiladimi.
 *
 * `13-chidamlilik` dagi havolalar testi faqat HTTP holatini tekshiradi:
 * statik eksportda fayl bor ekan, javob 200 bo'ladi. Lekin sahifaning
 * butun mazmuni mijoz tomonida yasaladi — Dexie so'rovi, `useSession`,
 * kontent qidiruvi. Shu joyda xato chiqsa, fayl baribir 200 qaytaradi,
 * sahifa esa bo'sh yoki «Yuklanmoqda…» da qolib ketadi. Serversiz
 * platformada bu xatoni hech kim ko'rmaydi: log yo'q, foydalanuvchi esa
 * «sayt ishlamadi» deydi.
 *
 * Shuning uchun bu test har bir rol uchun sahifalarni yon paneldagi
 * havolalardan yig'ib chiqadi va **brauzerda** ochadi, so'ng talab
 * qiladi: konsolda xato yo'q, bitta `h1` bor, `main` bo'sh emas va
 * «Yuklanmoqda…» da osilib qolmagan.
 *
 * Shu tekshiruv ikkita kamchilikni topdi: ma'lumot yuklanmagan
 * o'qituvchida `/oqituvchi/talabalar/` va `/oqituvchi/tadqiqot/`
 * sahifalari sarlavhasiz chiqardi.
 */

const ROLLAR = [
  { nom: "talaba", profil: TALABA, boshlash: ["/bosh-sahifa/"] },
  { nom: "o'qituvchi", profil: OQITUVCHI, boshlash: ["/oqituvchi/"] },
  { nom: "admin", profil: ADMIN, boshlash: ["/admin/"] },
];

/** Berilgan sahifalardagi ichki havolalarni (va o'zlarini) yig'adi. */
async function ichkiHavolalar(page: Page, yollar: string[]) {
  const set = new Set<string>(yollar);
  for (const y of yollar) {
    await page.goto(y, { waitUntil: "networkidle" });
    const topildi = await page
      .locator('a[href^="/"]')
      .evaluateAll((els) =>
        els.map((e) => (e as HTMLAnchorElement).getAttribute("href") ?? ""),
      );
    for (const l of topildi) {
      const c = l.split("#")[0].split("?")[0];
      if (c) set.add(c.endsWith("/") ? c : `${c}/`);
    }
  }
  return [...set];
}

for (const rol of ROLLAR) {
  test(`${rol.nom}: har bir sahifa brauzerda xatosiz ochiladi`, async ({
    page,
  }) => {
    // Talaba rolida 120 dan ortiq sahifa ochiladi (har bir dars va
    // topshiriq) — shuning uchun oddiy chegaradan ko'proq vaqt kerak.
    test.setTimeout(600_000);
    await sessiyaBer(page, rol.profil);
    // Ikki qadam: indeks sahifalardan havolalar, so'ng ulardan ham
    // (dars va topshiriq sahifalariga shunday yetib boriladi).
    const hammasi = await ichkiHavolalar(
      page,
      await ichkiHavolalar(page, rol.boshlash),
    );
    // Ro'yxat kutilganidan kichik bo'lsa, test o'zi ishlamay qolgan
    // degani — bo'sh ro'yxatni tekshirish hech narsa bermaydi.
    expect(hammasi.length).toBeGreaterThan(8);

    const muammolar: string[] = [];
    for (const yol of hammasi) {
      const xatolar: string[] = [];
      const konsol = (m: { type(): string; text(): string }) => {
        if (m.type() === "error")
          xatolar.push(`konsol: ${m.text().slice(0, 160)}`);
      };
      const sahifaXatosi = (e: Error) =>
        xatolar.push(`pageerror: ${e.message.slice(0, 160)}`);
      page.on("console", konsol);
      page.on("pageerror", sahifaXatosi);
      try {
        await page.goto(yol, { waitUntil: "networkidle", timeout: 30_000 });
        const h1 = await page.locator("h1").count();
        const main = (await page.locator("main").textContent()) ?? "";
        if (h1 !== 1) xatolar.push(`h1 soni ${h1}`);
        if (main.trim().length < 20)
          xatolar.push(`main bo'sh (${main.trim().length} belgi)`);
        if (/Yuklanmoqda/.test(main))
          xatolar.push("«Yuklanmoqda…» da qolib ketdi");
      } catch (e) {
        xatolar.push(`ochilmadi: ${(e as Error).message.slice(0, 160)}`);
      }
      page.off("console", konsol);
      page.off("pageerror", sahifaXatosi);
      if (xatolar.length)
        muammolar.push(`${yol}\n    ${xatolar.join("\n    ")}`);
    }
    expect(muammolar.join("\n")).toBe("");
  });
}
