import { defineConfig, devices } from "@playwright/test";

/**
 * Uchdan-uchiga (e2e) testlar sozlamasi.
 *
 * Testlar **qurilgan statik sayt** ustida ishlaydi (`npm run build` →
 * `out/`), chunki platforma aynan shu ko'rinishda GitHub Pages'ga
 * joylanadi. `next dev` ustida sinash boshqa kodni sinash bo'lardi:
 * xizmat ishchisi (service worker) faqat ishlab chiqarish qurilishida
 * ro'yxatdan o'tadi va statik eksportda yo'llar `trailingSlash` bilan
 * yoziladi.
 *
 * Brauzer: faqat Chromium. Sabab — testlar brauzerlararo farqni emas,
 * ilovaning mantiqini tekshiradi; uchta brauzerda yurgizish vaqtni uch
 * baravar oshirib, hech narsa qo'shmaydi.
 */

const PORT = Number(process.env.PW_PORT ?? 4180);
const baseURL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "./tests/e2e",
  // Ilova IndexedDB ga yozadi; testlar bir-biriga xalaqit bermasligi uchun
  // har bir fayl o'z brauzer konteksti bilan ketma-ket ishlaydi.
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : [["list"]],

  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    // Konteyner muhitida brauzer boshqa joyda turadi; yo'l o'zgaruvchi
    // orqali beriladi, aks holda Playwright o'zinikini qidiradi.
    launchOptions: process.env.PW_CHROMIUM_PATH
      ? { executablePath: process.env.PW_CHROMIUM_PATH }
      : {},
  },

  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],

  webServer: {
    command: `npx serve out -l ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
