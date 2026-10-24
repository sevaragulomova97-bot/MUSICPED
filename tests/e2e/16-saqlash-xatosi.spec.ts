import { expect, test, type Page } from "@playwright/test";
import { OQITUVCHI, sessiyaBer, TALABA } from "./yordamchi";

/**
 * Saqlash yiqilganda foydalanuvchi buni **ko'rishi** kerak.
 *
 * Platforma serversiz: har bir yozuv brauzer xotirasiga tushadi. Shu
 * yozuv yiqilsa (joy tugadi, shaxsiy rejim, korporativ siyosat), ilova
 * tashqaridan xuddi ishlayotgandek ko'rinadi — tugma bosiladi, sahifa
 * o'zgarmaydi, ish esa hech qayerga yozilmaydi. Uchta joyda aynan
 * shunday bo'lardi: dars refleksiyasi xatoni faqat konsolga yozardi,
 * mentorlik varaqasi va profil formasida esa umuman tutib olinmasdi
 * (tugma «Saqlanmoqda…» da muzlab qolardi).
 *
 * Bu test IndexedDB ga yozishni ataylab buzadi va har uchala joyda
 * sabab ko'rinishini talab qiladi.
 */

/** `put` chaqiruvini berilgan jadvallarda xatoga uchratadi. */
async function yozuvniBuz(page: Page, jadvallar: string[]) {
  await page.addInitScript((nomlar: string[]) => {
    const asl = IDBObjectStore.prototype.put;
    IDBObjectStore.prototype.put = function (
      this: IDBObjectStore,
      ...args: unknown[]
    ) {
      if (nomlar.includes(this.name)) {
        throw new DOMException("joy yetmadi", "QuotaExceededError");
      }
      return (asl as (...a: unknown[]) => IDBRequest).apply(this, args);
    };
  }, jadvallar);
}

test("dars refleksiyasi saqlanmasa, sabab ko'rinadi", async ({ page }) => {
  test.slow();
  await yozuvniBuz(page, ["reflections", "progress"]);
  await sessiyaBer(page, TALABA);
  await page.goto("/kurslar/musiqa-nazariyasi/nota-savodi/");
  await page.waitForLoadState("networkidle");

  // Refleksiya oxirgi bo'limda — bo'limlarni bosib o'tamiz.
  for (let i = 0; i < 12; i += 1) {
    const keyingi = page.getByRole("button", { name: /Keyingi/ }).first();
    if (!(await keyingi.count()) || !(await keyingi.isEnabled())) break;
    await keyingi.click();
    await page.waitForTimeout(150);
  }
  const maydon = page.locator("textarea").first();
  if (await maydon.count()) await maydon.fill("Sinov javobi");

  await page.getByRole("button", { name: /Refleksiyani saqlash/ }).click();
  await expect(page.locator("main").getByRole("alert")).toContainText(
    /Saqlab bo'lmadi/,
    { timeout: 15_000 },
  );
  // Yozilgan matn yo'qolmasligi kerak — foydalanuvchi qayta urinib ko'radi.
  if (await maydon.count()) await expect(maydon).toHaveValue("Sinov javobi");
  await expect(page.getByText("Dars yakunlandi")).toHaveCount(0);
});

test("mentorlik varaqasi saqlanmasa, sabab ko'rinadi", async ({ page }) => {
  test.slow();
  await sessiyaBer(page, OQITUVCHI);
  // Namunaviy talaba qo'shamiz — varaqa shundan keyin chiqadi.
  await page.goto("/oqituvchi/");
  await page.waitForLoadState("networkidle");
  await page
    .getByRole("button", { name: /Namunaviy ma'lumot/i })
    .first()
    .click();
  await page.waitForTimeout(1200);

  await yozuvniBuz(page, ["mentorship"]);
  await page.goto("/oqituvchi/mentorlik/");
  await page.waitForLoadState("networkidle");

  // Varaqa talaba tanlangandan keyin chiqadi.
  await page
    .locator("main")
    .getByRole("combobox", { name: "Talaba" })
    .selectOption({ index: 1 });
  await expect(
    page.getByRole("button", { name: "Varaqani saqlash" }).first(),
  ).toBeVisible();
  await page.getByRole("button", { name: "Varaqani saqlash" }).first().click();
  await expect(page.locator("main").getByRole("alert")).toContainText(
    /Saqlab bo'lmadi/,
    { timeout: 15_000 },
  );
});

test("profil saqlanmasa, tugma muzlab qolmaydi va sabab ko'rinadi", async ({
  page,
}) => {
  test.slow();
  await yozuvniBuz(page, ["profiles"]);
  await sessiyaBer(page, TALABA);
  await page.goto("/profil/");
  await page.waitForLoadState("networkidle");

  await page.getByRole("button", { name: "Saqlash" }).first().click();
  await expect(page.locator("main").getByRole("alert")).toContainText(
    /Saqlab bo'lmadi/,
    { timeout: 15_000 },
  );
  // Tugma yana bosiladigan holatga qaytishi kerak.
  await expect(
    page.getByRole("button", { name: "Saqlash" }).first(),
  ).toBeEnabled();
});
