#!/usr/bin/env bash
#
# Yig'uvchi server oqimini sinaydi: talaba yuboradi -> o'qituvchi
# yuklaydi. Sayt yig'uvchi manzili qo'yilgan holda quriladi, server
# o'rnida esa `tools/soxta-yiguvchi.mjs` ishlaydi (tashqi xizmat
# kerak emas).
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> yig'uvchi manzili bilan qurilmoqda"
NEXT_PUBLIC_YIGUVCHI_URL="http://127.0.0.1:${PW_SOXTA_PORT:-4182}/" \
NEXT_PUBLIC_YIGUVCHI_KALIT="yozish-kaliti" \
  npm run build >/dev/null

echo "==> sinov"
npx playwright test --config playwright.yiguvchi.config.ts "$@"

echo "==> oddiy (yig'uvchisiz) build tiklanmoqda"
npm run build >/dev/null
