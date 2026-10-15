import { expect, test } from "@playwright/test";

/**
 * Kirish oqimi: landing → profil tanlash → rolga mos bosh sahifa.
 *
 * Bu — foydalanuvchi ko'radigan birinchi ekran, shuning uchun u to'liq
 * oqim sifatida (localStorage ga qisqa yo'lsiz) sinaladi.
 */
test.describe("Kirish", () => {
  test("landing sahifa ochiladi va kirishga o'tadi", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText(/serversiz|brauzer/i).first()).toBeVisible();

    await page.getByRole("link", { name: /boshlash|kirish/i }).first().click();
    await expect(page).toHaveURL(/\/kirish\/?$/);
  });

  test("talaba profili tanlanadi va bosh sahifaga o'tadi", async ({ page }) => {
    await page.goto("/kirish/");

    await page.getByText("Sevaraxon Egamnazarova").click();
    await page.getByRole("button", { name: /davom|kirish/i }).click();

    await expect(page).toHaveURL(/\/bosh-sahifa\/?$/);
    await expect(page.getByText("Sevaraxon Egamnazarova").first()).toBeVisible();
  });

  test("o'qituvchi o'z kabinetiga tushadi", async ({ page }) => {
    await page.goto("/kirish/");

    await page.getByText("Dilnoza Rahimova").click();
    await page.getByRole("button", { name: /davom|kirish/i }).click();

    await expect(page).toHaveURL(/\/oqituvchi\/?$/);
    await expect(page.getByRole("heading", { name: /o'qituvchi kabineti/i })).toBeVisible();
  });
});
