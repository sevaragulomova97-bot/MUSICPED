import { defineConfig, devices } from "@playwright/test";

/**
 * Yig'uvchi server oqimini sinash.
 *
 * Haqiqiy tarmoq bilan, lekin tashqi xizmatsiz: `tools/soxta-yiguvchi.mjs`
 * Supabase ning shu loyihada ishlatiladigan qismini takrorlaydi.
 * Sayt esa yig'uvchi manzili qo'yilgan holda quriladi — shuning uchun
 * bu sozlama alohida (`tools/yiguvchi-sinov.sh` buni bajaradi).
 */

const PORT = Number(process.env.PW_YIGUVCHI_PORT ?? 4183);
const SERVER_PORT = Number(process.env.PW_SOXTA_PORT ?? 4182);
const baseURL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "./tests/yiguvchi",
  forbidOnly: !!process.env.CI,
  reporter: [["list"]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    launchOptions: process.env.PW_CHROMIUM_PATH
      ? { executablePath: process.env.PW_CHROMIUM_PATH }
      : {},
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: [
    {
      command: `npx serve out -l ${PORT}`,
      url: baseURL,
      reuseExistingServer: !process.env.CI,
      timeout: 60_000,
    },
    {
      command: `node tools/soxta-yiguvchi.mjs`,
      url: `http://127.0.0.1:${SERVER_PORT}/?select=*`,
      reuseExistingServer: !process.env.CI,
      timeout: 30_000,
      env: {
        PORT: String(SERVER_PORT),
        YOZISH_KALITI: "yozish-kaliti",
        OQISH_KALITI: "oqish-kaliti",
      },
    },
  ],
});
