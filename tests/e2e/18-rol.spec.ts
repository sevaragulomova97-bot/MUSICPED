import { expect, test } from "@playwright/test";
import { ADMIN, OQITUVCHI, sessiyaBer, TALABA } from "./yordamchi";

/**
 * Rol bo'yicha bo'limlar.
 *
 * Bu **xavfsizlik chorasi emas**: platforma serversiz, kirish parolsiz
 * va har bir profilning ma'lumoti faqat o'z brauzerida yotadi — bu
 * yerda yashiriladigan maxfiy narsa yo'q. Tekshiriladigan narsa
 * boshqa: havola orqali boshqa rolning bo'limiga tushgan foydalanuvchi
 * **bo'sh kabinetni** emas, **sababni** ko'rishi kerak. Ilgari talaba
 * `/oqituvchi/` ga tushsa, nol raqamlar bilan to'la kabinet chiqardi va
 * «ma'lumotim yo'qolibdi» degan xulosaga olib kelishi mumkin edi.
 */

const OQITUVCHI_YOLLARI = [
  "/oqituvchi/",
  "/oqituvchi/talabalar/",
  "/oqituvchi/tadqiqot/",
  "/oqituvchi/mentorlik/",
];
const ADMIN_YOLLARI = ["/admin/", "/admin/jurnal/", "/admin/kontent/"];

test("talabaga o'qituvchi va admin bo'limlari sabab bilan yopiladi", async ({
  page,
}) => {
  test.slow();
  await sessiyaBer(page, TALABA);
  for (const yol of [...OQITUVCHI_YOLLARI, ...ADMIN_YOLLARI]) {
    await page.goto(yol, { waitUntil: "networkidle" });
    await expect(page.locator("main"), yol).toContainText(
      /Talaba profilidasiz/,
    );
    await expect(
      page.getByRole("link", { name: "Boshqa profil bilan kirish" }),
      yol,
    ).toBeVisible();
    // Sahifa sarlavhasiz qolmasligi kerak.
    await expect(page.locator("h1"), yol).toHaveCount(1);
  }
});

test("o'qituvchi o'z bo'limlarini ko'radi, admin panelini ko'rmaydi", async ({
  page,
}) => {
  test.slow();
  await sessiyaBer(page, OQITUVCHI);
  for (const yol of OQITUVCHI_YOLLARI) {
    await page.goto(yol, { waitUntil: "networkidle" });
    await expect(page.locator("main"), yol).not.toContainText(
      /profilidasiz \(/,
    );
  }
  await page.goto("/admin/", { waitUntil: "networkidle" });
  await expect(page.locator("main")).toContainText(/O'qituvchi profilidasiz/);
});

test("admin hamma bo'limni ko'radi", async ({ page }) => {
  test.slow();
  await sessiyaBer(page, ADMIN);
  for (const yol of [...ADMIN_YOLLARI, ...OQITUVCHI_YOLLARI]) {
    await page.goto(yol, { waitUntil: "networkidle" });
    await expect(page.locator("main"), yol).not.toContainText(
      /profilidasiz \(/,
    );
  }
});
