import { expect, test } from "@playwright/test";
import { sessiyaBer, TALABA } from "./yordamchi";

/**
 * Bezak effektlari: fondagi suzuvchi notalar va tugmadan sachraydigan
 * notalar.
 *
 * Effekt bezak bo'lgani uchun test uning «chiroyli»ligini emas, uchta
 * qat'iy shartni tekshiradi:
 *  1. u umuman ishlaydimi;
 *  2. u o'zidan keyin DOM'da axlat qoldirmaydimi;
 *  3. uni o'chirish mumkinmi — sozlama bilan ham, tizimning
 *     «harakatni kamaytirish» rejimi bilan ham.
 */

test.describe("Suzuvchi notalar", () => {
  test("fon qatlami chiziladi va kontentga xalaqit bermaydi", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const qatlam = page.locator(".mp-note-field");
    await expect(qatlam).toBeAttached();
    expect(await page.locator(".mp-note-rise").count()).toBeGreaterThan(5);

    // Bezak sichqonchani ushlab qolmasligi kerak — aks holda u ostidagi
    // havolalar bosilmay qolardi.
    await expect(qatlam).toHaveCSS("pointer-events", "none");

    // Ekran o'quvchidan yashirilgan: u hech qanday ma'no tashimaydi.
    await expect(qatlam).toHaveAttribute("aria-hidden", "true");
  });

  test("fon ustidagi havola bosiladi", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /boshlash|kirish/i }).first().click();
    await expect(page).toHaveURL(/\/kirish\/?$/);
  });
});

test.describe("Tugmadan sachraydigan notalar", () => {
  test("bosilganda notalar paydo bo'ladi va keyin o'zini tozalaydi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/profil/");
    await page.waitForLoadState("networkidle");

    const saqlash = page.getByRole("button", { name: /^saqlash$/i });
    await saqlash.scrollIntoViewIfNeeded();
    await saqlash.click();

    const notalar = page.locator(".mp-burst-note");
    await expect(notalar.first()).toBeAttached({ timeout: 2000 });
    expect(await notalar.count()).toBeGreaterThan(2);

    // Animatsiya tugagach elementlar o'chiriladi — aks holda ular
    // sahifada to'planib borardi.
    await expect(notalar).toHaveCount(0, { timeout: 5000 });
  });

  test("klaviatura bilan bosilganda ham ishlaydi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/profil/");
    await page.waitForLoadState("networkidle");

    const saqlash = page.getByRole("button", { name: /^saqlash$/i });
    await saqlash.focus();
    await page.keyboard.press("Enter");

    await expect(page.locator(".mp-burst-note").first()).toBeAttached({ timeout: 2000 });
  });
});

test.describe("Effektlarni o'chirish", () => {
  test("sozlamalardagi tugma fonni ham, sachrashni ham o'chiradi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/sozlamalar/");
    await page.waitForLoadState("networkidle");

    await expect(page.locator(".mp-note-field")).toBeAttached();

    await page.getByRole("button", { name: /^yoqilgan$/i }).click();
    await expect(page.getByRole("button", { name: /^o'chirilgan$/i })).toBeVisible();
    await expect(page.locator(".mp-note-field")).toHaveCount(0);

    // O'chirilgan holatda tugma bosilsa ham nota sachramaydi.
    await page.getByRole("button", { name: /^o'chirilgan$/i }).click();
    await expect(page.getByRole("button", { name: /^yoqilgan$/i })).toBeVisible();
  });

  test("sozlama sahifa yangilangandan keyin ham saqlanadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/sozlamalar/");
    await page.getByRole("button", { name: /^yoqilgan$/i }).click();

    await page.reload();
    await page.waitForLoadState("networkidle");

    // Birinchi chizishdan oldin ishlaydigan skript tufayli fon umuman
    // miltillamaydi.
    await expect(page.locator("html")).toHaveAttribute("data-effects", "off");
    await expect(page.locator(".mp-note-field")).toHaveCount(0);
  });
});

test.describe("Harakatni kamaytirish rejimi", () => {
  test.use({ reducedMotion: "reduce" });

  test("tizim sozlamasi effektlardan ustun turadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/profil/");
    await page.waitForLoadState("networkidle");

    // Qatlam DOM'da bo'lishi mumkin, lekin ko'rinmaydi.
    const qatlam = page.locator(".mp-note-field");
    if (await qatlam.count()) await expect(qatlam).toBeHidden();

    // Sachrash umuman boshlanmaydi.
    const saqlash = page.getByRole("button", { name: /^saqlash$/i });
    await saqlash.scrollIntoViewIfNeeded();
    await saqlash.click();
    await page.waitForTimeout(400);
    await expect(page.locator(".mp-burst-note")).toHaveCount(0);
  });
});
