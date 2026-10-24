import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Playwright'ning yiqilgan testdan qoldiradigan artefaktlari:
    // iz (trace) ichida saytning o'z JS'i yotadi va uni tekshirish
    // minglab ogohlantirish beradi. Bu kod emas — hisobot.
    "test-results/**",
    "playwright-report/**",
  ]),
]);

export default eslintConfig;
