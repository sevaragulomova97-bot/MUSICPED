import { defineConfig, devices } from "@playwright/test";

/**
 * `basePath` bilan qurilgan saytni sinash.
 *
 * Oddiy e2e to'plami saytni ildizdan (`/`) xizmat qiladigan build
 * ustida ishlaydi, GitHub Pages esa uni `/<ombor>/` ostidan beradi.
 * Ya'ni amalda joylanadigan variant hech qachon sinalmagan edi: yo'l
 * prefiksi bilan bog'liq xato (havolalar, audio fayllar, xizmat
 * ishchisi, manifest) faqat jonli saytda bilinardi.
 *
 * Qurish va papkaga joylashtirishni `tools/basepath-sinov.sh` bajaradi.
 */

const PORT = Number(process.env.PW_BASEPATH_PORT ?? 4181);
const KATALOG = process.env.PW_BASEPATH_DIR ?? "";

export default defineConfig({
  testDir: "./tests/basepath",
  forbidOnly: !!process.env.CI,
  reporter: [["list"]],
  use: {
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    launchOptions: process.env.PW_CHROMIUM_PATH
      ? { executablePath: process.env.PW_CHROMIUM_PATH }
      : {},
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `npx serve ${KATALOG} -l ${PORT}`,
    url: `http://127.0.0.1:${PORT}/MUSICPED/`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
