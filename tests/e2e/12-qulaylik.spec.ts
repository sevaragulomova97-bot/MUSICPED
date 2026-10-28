import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { ADMIN, OQITUVCHI, sessiyaBer, TALABA } from "./yordamchi";

/**
 * Qulaylik (WCAG 2.1 AA) va sahifalarning yaxlitligi.
 *
 * Nega avtomatik tekshiruv kerak: rang kontrasti, maydon nomlari va
 * `aria` atributlari **ko'z bilan ko'rinmaydigan** kamchiliklar. Ular
 * sahifani buzmaydi — sayt chiroyli ko'rinib turaveradi, lekin ekran
 * o'quvchi bilan ishlaydigan yoki rangni farqlay olmaydigan
 * foydalanuvchi uchun ayrim qismlar yopiq bo'lib qoladi.
 *
 * Birinchi o'tkazishda 55 ta buzilish topilgan edi: eng ko'pi — kulrang
 * matn va holat ranglarining kontrasti (yorqin yashil oq fonda 2,28 : 1
 * berardi), shuningdek nomsiz fayl maydonlari va nomsiz progressbarlar.
 */

const TALABA_SAHIFALARI = [
  "/kirish/",
  "/bosh-sahifa/",
  "/diagnostika/",
  "/yolnalish/",
  "/kurslar/",
  "/kurslar/musiqa-nazariyasi/",
  "/kurslar/musiqa-nazariyasi/nota-savodi/",
  "/asboblar/",
  "/asboblar/pianino/",
  "/asboblar/doira/",
  "/asboblar/rubob/",
  "/topshiriqlar/",
  "/topshiriqlar/nota-savodi-test/",
  "/natijalar/",
  "/portfolio/",
  "/profil/",
  "/sozlamalar/",
  "/qollanma/",
  "/bildirishnomalar/",
  "/dastur/",
];

const OQITUVCHI_SAHIFALARI = [
  "/oqituvchi/",
  "/oqituvchi/talabalar/",
  "/oqituvchi/topshiriqlar/",
  "/oqituvchi/tadqiqot/",
  "/oqituvchi/mentorlik/",
];

const ADMIN_SAHIFALARI = [
  "/admin/",
  "/admin/kontent/",
  "/admin/foydalanuvchilar/",
  "/admin/jurnal/",
];

async function buzilishlar(page: Page, yollar: string[]) {
  const natija: string[] = [];
  for (const yol of yollar) {
    const javob = await page.goto(yol, { waitUntil: "networkidle" });
    expect(javob?.status(), yol).toBeLessThan(400);
    const r = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    for (const v of r.violations) {
      natija.push(
        `${yol} [${v.impact}] ${v.id} (${v.nodes.length} ta): ${v.nodes[0]?.html.slice(0, 120)}`,
      );
    }
  }
  return natija;
}

test.describe("Qulaylik", () => {
  test("talaba sahifalarida WCAG AA buzilishi yo'q", async ({ page }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    const xato = await buzilishlar(page, TALABA_SAHIFALARI);
    expect(xato.join("\n")).toBe("");
  });

  test("o'qituvchi va admin sahifalarida WCAG AA buzilishi yo'q", async ({
    page,
  }) => {
    test.slow();
    await sessiyaBer(page, OQITUVCHI);
    const xato = await buzilishlar(page, OQITUVCHI_SAHIFALARI);
    await sessiyaBer(page, ADMIN);
    xato.push(...(await buzilishlar(page, ADMIN_SAHIFALARI)));
    expect(xato.join("\n")).toBe("");
  });

  test("qorong'i mavzuda ham buzilish yo'q", async ({ page }) => {
    test.slow();
    await page.emulateMedia({ colorScheme: "dark" });
    await sessiyaBer(page, TALABA);
    const xato = await buzilishlar(page, [
      "/bosh-sahifa/",
      "/kurslar/",
      "/asboblar/doira/",
      "/natijalar/",
      "/sozlamalar/",
    ]);
    expect(xato.join("\n")).toBe("");
  });
});

test.describe("Sahifalarning yaxlitligi", () => {
  test("390px ekranda gorizontal surish yo'q va har sahifada bitta h1", async ({
    page,
  }) => {
    test.slow();
    const xato: string[] = [];
    // Konsol xatosi — ko'rinmaydigan nosozlikning eng ishonchli belgisi.
    page.on("pageerror", (e) =>
      xato.push(`${page.url()}: ${e.message.slice(0, 120)}`),
    );
    page.on("console", (m) => {
      if (m.type() === "error")
        xato.push(`${page.url()}: ${m.text().slice(0, 120)}`);
    });

    await page.setViewportSize({ width: 390, height: 844 });

    /*
      O'qituvchi va admin sahifalari ham tekshiriladi. Avval faqat
      talaba sahifalari tekshirilardi va shu sababli ikkita kamchilik
      o'tib ketgan edi: ma'lumot yuklanmagan o'qituvchida
      `/oqituvchi/talabalar/` va `/oqituvchi/tadqiqot/` sahifalarida
      bitta ham `h1` bo'lmasdi — bo'sh holat kartasi sarlavhasiz
      chiqardi.
    */
    const rollar = [
      { profil: TALABA, yollar: TALABA_SAHIFALARI },
      { profil: OQITUVCHI, yollar: OQITUVCHI_SAHIFALARI },
      { profil: ADMIN, yollar: ADMIN_SAHIFALARI },
    ];

    for (const rol of rollar) {
      await sessiyaBer(page, rol.profil);
      for (const yol of rol.yollar) {
        await page.goto(yol, { waitUntil: "networkidle" });
        const surish = await page.evaluate(
          () =>
            document.documentElement.scrollWidth -
            document.documentElement.clientWidth,
        );
        if (surish > 1) xato.push(`${yol}: gorizontal surish +${surish}px`);
        const h1 = await page.locator("h1").count();
        if (h1 !== 1) xato.push(`${yol}: h1 soni ${h1}`);
      }
    }
    expect([...new Set(xato)].join("\n")).toBe("");
  });
});

test.describe("Qo'llanma", () => {
  test("yon paneldan ochiladi va matni ko'rinadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/bosh-sahifa/");
    await page.getByRole("link", { name: "Qo'llanma" }).first().click();
    await expect(page).toHaveURL(/\/qollanma\/?$/);

    // Hujjatning mazmuni haqiqatan chizilgan bo'lsin.
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Qo'llanma",
    );
    await expect(
      page.getByText(/Platformada \*?\*?server yo'q/i).first(),
    ).toBeVisible();
    await expect(page.locator("table").first()).toBeVisible();

    // O'qituvchi qo'llanmasiga o'tish.
    await page
      .getByRole("button", { name: /O'qituvchi va tadqiqotchi/ })
      .click();
    await expect(page.getByText(/o'qituvchi/i).first()).toBeVisible();
  });

  test("oflayn rejimda ham ochiladi", async ({ page, context }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/qollanma/");
    await expect(page.locator("table").first()).toBeVisible();

    // Xizmat ishchisi faollashmaguncha kesh bo'sh bo'ladi.
    await page.waitForFunction(
      async () => {
        const r = await navigator.serviceWorker.getRegistration();
        return r?.active?.state === "activated";
      },
      undefined,
      { timeout: 20_000 },
    );
    await page.reload();
    await page.waitForLoadState("networkidle");

    // Qo'llanma matni sahifaning ichida — tarmoqsiz ham ko'rinishi kerak.
    await context.setOffline(true);
    await page.reload();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Qo'llanma",
      {
        timeout: 15_000,
      },
    );
    await context.setOffline(false);
  });
});
