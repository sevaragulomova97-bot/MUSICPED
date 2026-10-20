#!/usr/bin/env bash
# WAV namunalarni MP3 ga o'tkazadi va `public/audio/<cholgu>-model/` ga
# joylaydi. `bank.json` ham ko'chiriladi — namunalar va ular haqidagi
# ma'lumot doim birga yuradi.
set -euo pipefail
cd "$(dirname "$0")"

for inst in "$@"; do
  src="wav/$inst"
  dst="../../public/audio/${inst}-model"
  [ -d "$src" ] || { echo "yo'q: $src" >&2; exit 1; }
  mkdir -p "$dst"
  rm -f "$dst"/*.mp3
  for f in "$src"/*.wav; do
    ffmpeg -loglevel error -y -i "$f" -codec:a libmp3lame -b:a 64k -ac 1 \
      "$dst/$(basename "$f" .wav).mp3"
  done
  cp "$src/bank.json" "$dst/bank.json"
  echo "$inst: $(ls "$dst"/*.mp3 | wc -l) namuna, $(du -sh "$dst" | cut -f1)"
done
