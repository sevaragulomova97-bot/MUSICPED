import { expect, test } from "@playwright/test";
import { bazaniTozala, OQITUVCHI, sessiyaBer } from "./yordamchi";

/**
 * Tadqiqot bo'limi — dissertatsiyaning 3-bobi shu sahifadan oziqlanadi,
 * shuning uchun u statistik natijalar bilan birga sinaladi.
 */
test("namunaviy ma'lumotdan to'liq tahlil quriladi", async ({ page }) => {
  await sessiyaBer(page, OQITUVCHI);
  await bazaniTozala(page);

  await page.goto("/oqituvchi/");
  await page.getByRole("button", { name: /namunaviy ma'lumot/i }).click();
  await expect(page.getByText(/24 ta namunaviy talaba/i)).toBeVisible({ timeout: 20_000 });

  await page.goto("/oqituvchi/tadqiqot/");
  await expect(page.getByRole("heading", { name: /tajriba-sinov tahlili/i })).toBeVisible();

  // 1-qadam: guruhlar boshida bir xil bo'lishi kerak — demo ma'lumot
  // ataylab shunday generatsiya qilingan.
  await expect(page.getByText("Guruhlar bir xil", { exact: true })).toBeVisible();

  // 2-qadam: yakunda farq ahamiyatli.
  await expect(page.getByText(/statistik ahamiyatli/i).first()).toBeVisible();
  await expect(page.getByText(/mann–uitni/i)).toBeVisible();

  // Yo'nalishlar jadvali: umumiy + 8 yo'nalish.
  const qatorlar = page.locator("table").first().locator("tbody tr");
  await expect(qatorlar).toHaveCount(9);

  // 4-qadam: χ² jadvali va ogohlantirish mexanizmi.
  await expect(page.getByText(/daraja taqsimoti/i).first()).toBeVisible();
  await expect(page.getByText(/kramer v/i).first()).toBeVisible();

  // Namunaviy ma'lumot ishlatilgani yashirilmaydi.
  await expect(page.getByText(/namunaviy.*ilmiy xulosa uchun emas/i)).toBeVisible();
});

test("tadqiqot hisoboti PDF va CSV sifatida yuklanadi", async ({ page }) => {
  await sessiyaBer(page, OQITUVCHI);
  await bazaniTozala(page);

  await page.goto("/oqituvchi/");
  await page.getByRole("button", { name: /namunaviy ma'lumot/i }).click();
  await expect(page.getByText(/24 ta namunaviy talaba/i)).toBeVisible({ timeout: 20_000 });

  await page.goto("/oqituvchi/tadqiqot/");

  const [csv] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: /^csv$/i }).click(),
  ]);
  expect(csv.suggestedFilename()).toBe("tadqiqot-tahlili.csv");

  const [pdf] = await Promise.all([
    page.waitForEvent("download", { timeout: 30_000 }),
    page.getByRole("button", { name: /pdf hisobot/i }).click(),
  ]);
  expect(pdf.suggestedFilename()).toBe("tadqiqot-hisoboti.pdf");
});
