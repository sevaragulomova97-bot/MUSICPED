import { expect, test, type Page } from "@playwright/test";
import { ADMIN, OQITUVCHI, sessiyaBer, TALABA } from "./yordamchi";

/**
 * Nosoz muhit va nosoz ma'lumotda ilovaning xatti-harakati.
 *
 * Bu holatlar kamdan-kam uchraydi, lekin uchraganda **jim** kechadi:
 * sahifa ochiladi, interfeys ko'rinadi, faqat hech narsa ishlamaydi.
 * Aynan shunday nosozlikni foydalanuvchi tushuna olmaydi, shuning uchun
 * ular alohida tekshiriladi.
 */

test.describe("Saqlash bloklangan muhit", () => {
  test.beforeEach(async ({ page }) => {
    // Ayrim brauzerlar shaxsiy rejimda IndexedDB ga murojaatni
    // DOMException bilan rad etadi.
    await page.addInitScript(() => {
      Object.defineProperty(window, "indexedDB", {
        get() {
          throw new DOMException("bloklangan", "SecurityError");
        },
      });
    });
  });

  test("kirish sahifasi baribir ochiladi", async ({ page }) => {
    await page.goto("/kirish/");
    await expect(page.getByRole("heading", { name: "Platformaga kirish" })).toBeVisible();
  });

  test("ilova «Yuklanmoqda…» da osilib qolmaydi, sabab ko'rsatiladi", async ({
    page,
  }) => {
    await page.goto("/kirish/");
    await page.getByRole("radio", { name: /Bobur Akbarov/ }).click();
    await page.getByRole("button", { name: "Davom etish" }).click();

    await expect(
      page.getByRole("heading", { name: /ma'lumot saqlashga ruxsat bermayapti/i }),
    ).toBeVisible({ timeout: 20_000 });
    // Nima qilish kerakligi ham yoziladi — xato xabari o'zi yetarli emas.
    await expect(page.getByText(/inkognito/i)).toBeVisible();
    await expect(page.getByText(/Yuklanmoqda/)).toHaveCount(0);
  });
});

test.describe("Nosoz fayl import qilish", () => {
  test("o'qituvchi kabineti buzuq JSON ga tushunarli xato beradi", async ({
    page,
  }) => {
    await sessiyaBer(page, OQITUVCHI);
    await page.goto("/oqituvchi/");

    await page.setInputFiles("#talaba-fayllari", {
      name: "buzuq.json",
      mimeType: "application/json",
      buffer: Buffer.from("{ bu JSON emas"),
    });

    // Sahifa qulamasligi va sababni aytishi kerak.
    await expect(
      page.getByText("Fayl JSON formatida emas yoki buzilgan."),
    ).toBeVisible({ timeout: 15_000 });
  });

  test("talaba sozlamalarida ham buzuq fayl qulatmaydi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/sozlamalar/");

    await page.setInputFiles("#import-fayl", {
      name: "buzuq.json",
      mimeType: "application/json",
      buffer: Buffer.from('{"versiya": 999}'),
    });

    await expect(page.getByText("Bu fayl MusicPed eksporti emas.")).toBeVisible({
      timeout: 15_000,
    });
  });
});

test.describe("Bildirishnomalar", () => {
  test("yangi foydalanuvchiga diagnostika eslatiladi va qo'ng'iroqda raqam chiqadi", async ({
    page,
  }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/bosh-sahifa/");

    // Qo'ng'iroq yonidagi raqam — muhim eslatmalar soni.
    const qongiroq = page.getByRole("link", { name: /Bildirishnomalar/ });
    await expect(qongiroq).toHaveAttribute("aria-label", /muhim eslatma/, {
      timeout: 15_000,
    });

    await qongiroq.click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Bildirishnomalar",
    );
    // «Hali tayyor emas» o'rniga haqiqiy eslatma bo'lishi kerak.
    await expect(page.getByText(/tayyor emas/i)).toHaveCount(0);
    const eslatma = page.getByRole("link", { name: /Diagnostikadan o'ting/ });
    await expect(eslatma).toBeVisible();
    await eslatma.click();
    await expect(page).toHaveURL(/\/diagnostika\/?$/);
  });
});

test.describe("Kurs sahifasi", () => {
  test("ro'yxatdan kursga, kursdan darsga va orqaga o'tiladi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/");

    // Kurs sarlavhasi — kurs sahifasiga havola.
    await page.getByRole("link", { name: "Musiqa nazariyasi", exact: true }).click();
    await expect(page).toHaveURL(/\/kurslar\/musiqa-nazariyasi\/?$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Musiqa nazariyasi",
    );
    // Kurs sahifasida o'quv natijalari ham bo'lishi kerak.
    await expect(page.getByText("O'quv natijalari")).toBeVisible();

    // Darsga o'tish.
    await page.getByRole("link", { name: /Nota savodi/ }).first().click();
    await expect(page).toHaveURL(/\/kurslar\/musiqa-nazariyasi\/[a-z-]+\/?$/);

    // Yo'l ko'rsatkichi orqali kursga qaytish.
    await page
      .getByRole("navigation", { name: "Yo'l" })
      .getByRole("link", { name: "Musiqa nazariyasi" })
      .click();
    await expect(page).toHaveURL(/\/kurslar\/musiqa-nazariyasi\/?$/);
  });

  test("beshala kursning sahifasi ochiladi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    for (const slug of [
      "musiqa-nazariyasi",
      "ijro-amaliyoti",
      "musiqa-talimi-metodikasi",
      "musiqa-texnologiyalari",
      "pedagogik-amaliyot",
    ]) {
      const javob = await page.goto(`/kurslar/${slug}/`);
      expect(javob?.status(), slug).toBeLessThan(400);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  });
});

/**
 * Ishlamaydigan havolalar.
 *
 * Statik eksportda yo'q marshrutga havola **jim** kechadi: Next.js
 * yo'naltiruvchisi uni oldindan yuklashga urinib xato oladi, qo'lda
 * kirilganda esa 404 chiqadi. Aynan shunday kamchilik `/kurslar/<kurs>/`
 * da bor edi — ro'yxatdan to'g'ridan-to'g'ri darsga o'tilardi va oraliq
 * sahifa umuman yaratilmagandi.
 */
const INDEKSLAR = [
  "/bosh-sahifa/",
  "/kurslar/",
  "/kurslar/musiqa-nazariyasi/",
  "/kurslar/ijro-amaliyoti/",
  "/kurslar/musiqa-talimi-metodikasi/",
  "/kurslar/musiqa-texnologiyalari/",
  "/kurslar/pedagogik-amaliyot/",
  "/asboblar/",
  "/topshiriqlar/",
  "/natijalar/",
  "/portfolio/",
  "/profil/",
  "/sozlamalar/",
  "/qollanma/",
  "/bildirishnomalar/",
  "/yolnalish/",
  "/diagnostika/",
];
const OQITUVCHI_INDEKSLARI = [
  "/oqituvchi/",
  "/oqituvchi/talabalar/",
  "/oqituvchi/topshiriqlar/",
  "/oqituvchi/tadqiqot/",
  "/oqituvchi/mentorlik/",
];
const ADMIN_INDEKSLARI = [
  "/admin/",
  "/admin/kontent/",
  "/admin/foydalanuvchilar/",
  "/admin/jurnal/",
];

/** Berilgan sahifalardagi barcha ichki havolalarni yig'adi. */
async function havolalar(page: Page, yollar: string[]) {
  const set = new Set<string>();
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
  return set;
}

test.describe("Havolalar", () => {
  test("uchala rolda ham ishlamaydigan havola yo'q", async ({ page }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    const hammasi = await havolalar(page, INDEKSLAR);
    await sessiyaBer(page, OQITUVCHI);
    for (const h of await havolalar(page, OQITUVCHI_INDEKSLARI)) hammasi.add(h);
    await sessiyaBer(page, ADMIN);
    for (const h of await havolalar(page, ADMIN_INDEKSLARI)) hammasi.add(h);

    // Havolalar soni kutilganidan kam bo'lsa, test o'zi ishlamay
    // qolgan degani — bo'sh ro'yxatni tekshirish hech narsa bermaydi.
    expect(hammasi.size).toBeGreaterThan(100);

    const yoq: string[] = [];
    for (const h of hammasi) {
      const r = await page.request.get(h);
      if (r.status() >= 400) yoq.push(`${h} -> ${r.status()}`);
    }
    expect(yoq.join("\n")).toBe("");
  });
});
