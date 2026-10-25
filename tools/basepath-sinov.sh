#!/usr/bin/env bash
#
# Saytni `basePath` bilan quradi va aynan GitHub Pages'dagi shaklda
# (`/MUSICPED/` ostida) sinaydi.
#
# Oddiy e2e to'plami ildizdan xizmat qilinadigan build ustida ishlaydi,
# ya'ni yo'l prefiksi bilan bog'liq xato u yerda ko'rinmaydi.
set -euo pipefail

cd "$(dirname "$0")/.."

KATALOG="$(mktemp -d)"
trap 'rm -rf "$KATALOG"' EXIT

echo "==> basePath bilan qurilmoqda"
NEXT_PUBLIC_BASE_PATH=/MUSICPED npm run build >/dev/null

echo "==> $KATALOG/MUSICPED ga joylashtirilmoqda"
mkdir -p "$KATALOG/MUSICPED"
cp -r out/. "$KATALOG/MUSICPED/"

echo "==> sinov"
PW_BASEPATH_DIR="$KATALOG" npx playwright test --config playwright.basepath.config.ts "$@"

echo "==> oddiy (prefikssiz) build tiklanmoqda"
npm run build >/dev/null
