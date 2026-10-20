"""
Erkin litsenziyali **haqiqiy cholg'u yozuvlari**ni yuklab oladi.

Ishlatish:
    python3 -I tools/samples/fetch.py

Fayllar `tools/samples/dl/` ga tushadi (git ga kiritilmaydi). Manbalar va
ularning litsenziyalari `manbalar.json` da e'lon qilingan va shu yerdan
`bank.json` ga ko'chiriladi — ya'ni yetkaziladigan har bir namunaning
kelib chiqishi hujjatda qoladi.

Nega aynan shu ikki manba: boshqalarini bu muhitdan ochib bo'lmadi
(tarmoq siyosati faqat paket registrlari va GitHub ga ruxsat beradi), va
tekshirilganlari ichida faqat shu ikkitasida mos cholg'ular bor.
"""

import json
import pathlib
import sys
import urllib.parse
import urllib.request

BU = pathlib.Path(__file__).resolve().parent
DL = BU / "dl"


def yukla(url: str, dst: pathlib.Path) -> bool:
    if dst.exists() and dst.stat().st_size > 0:
        return True
    dst.parent.mkdir(parents=True, exist_ok=True)
    try:
        with urllib.request.urlopen(url, timeout=120) as r:
            dst.write_bytes(r.read())
        return True
    except Exception as cause:  # noqa: BLE001 — sabab chop etiladi
        print(f"  XATO {dst.name}: {cause}", file=sys.stderr)
        return False


def main() -> int:
    cfg = json.loads((BU / "manbalar.json").read_text(encoding="utf-8"))
    xato = 0

    vcsl = cfg["manbalar"]["vcsl"]["asos"]
    print(f"VCSL ({cfg['manbalar']['vcsl']['litsenziya']}):")
    for yol in cfg["vcsl_fayllar"]:
        nom = yol.split("/")[-1]
        url = f"{vcsl}/{urllib.parse.quote(yol)}"
        ok = yukla(url, DL / "vcsl" / nom)
        xato += 0 if ok else 1
        if ok:
            print(f"  {nom}  {(DL / 'vcsl' / nom).stat().st_size // 1024} KB")

    sf = cfg["manbalar"]["musyngkite"]["asos"]
    print(f"\nMusyngKite ({cfg['manbalar']['musyngkite']['litsenziya']}):")
    for inst in cfg["soundfont_cholgular"]:
        dst = DL / "sf" / f"{inst}.js"
        ok = yukla(f"{sf}/{inst}-mp3.js", dst)
        xato += 0 if ok else 1
        if ok:
            print(f"  {inst}  {dst.stat().st_size // 1024} KB")

    print(f"\nMuammoli: {xato}")
    return 1 if xato else 0


if __name__ == "__main__":
    sys.exit(main())
