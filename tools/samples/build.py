"""
Yuklab olingan haqiqiy yozuvlardan namuna banki quradi.

Ishlatish:
    python3 -I tools/samples/fetch.py
    python3 -I tools/samples/build.py

Natija: `public/audio/{doira,rubob,dutor}-yozuv/` papkalari va ularning
`bank.json` fayllari.

Nega bu banklar kerak: fizik model sozlanishi jihatidan aniq, lekin
quloqqa baribir sintetik eshitiladi. Haqiqiy yozuvda cholg'uning
korpusi, xonaning akustikasi va ijrochining qo'li bor — buni model
bilan hosil qilib bo'lmaydi.

Nega «qarindosh» deb belgilanadi: erkin litsenziyali **o'zbek doirasi,
dutori va qashqar rubobi yozuvlari topilmadi**. Shuning uchun eng yaqin
akustik qarindoshlarning haqiqiy yozuvlari olinadi va bank buni ochiq
e'lon qiladi — hech qayerda «o'zbek dutorining yozuvi» deb
ko'rsatilmaydi.
"""

import base64
import json
import pathlib
import re
import subprocess
import sys
import wave

import numpy as np
from scipy import signal

BU = pathlib.Path(__file__).resolve().parent
DL = BU / "dl"
CHIQISH = BU.parent.parent / "public" / "audio"
FS = 44100

NOTA_HARFLARI = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]

# Kuch qatlamlari — model banklari bilan bir xil nomlanadi, shunda
# foydalanuvchi tembrni almashtirganda boshqaruv o'zgarmaydi.
QATLAMLAR = [
    {"id": "yumshoq", "nom": "Yumshoq", "velocity": 0.35, "peak": 0.42},
    {"id": "orta", "nom": "O'rta", "velocity": 0.70, "peak": 0.66},
    {"id": "kuchli", "nom": "Kuchli", "velocity": 1.00, "peak": 0.88},
]


# ─────────────────────────── Audio yordamchilari ───────────────────────────

def wav_oqi(path: pathlib.Path) -> np.ndarray:
    with wave.open(str(path), "rb") as w:
        ch, sw, fs, n = (w.getnchannels(), w.getsampwidth(),
                         w.getframerate(), w.getnframes())
        raw = w.readframes(n)
    if sw != 2:
        raise ValueError(f"{path.name}: faqat 16-bit kutilgan, keldi {sw * 8}")
    x = np.frombuffer(raw, dtype="<i2").astype(np.float64) / 32768.0
    if ch > 1:
        x = x.reshape(-1, ch).mean(axis=1)
    if fs != FS:
        x = signal.resample_poly(x, FS, fs)
    return x


def mp3_oqi(data: bytes, tmp: pathlib.Path) -> np.ndarray:
    """MP3 ni ffmpeg orqali ochadi (MP3 dekoderi numpy'da yo'q)."""
    tmp.write_bytes(data)
    out = tmp.with_suffix(".dec.wav")
    subprocess.run(
        ["ffmpeg", "-loglevel", "error", "-y", "-i", str(tmp),
         "-ac", "1", "-ar", str(FS), str(out)],
        check=True,
    )
    x = wav_oqi(out)
    tmp.unlink(missing_ok=True)
    out.unlink(missing_ok=True)
    return x


def jimlikni_kes(x: np.ndarray, chegara_db: float = -60.0,
                 oldin_ms: float = 5.0) -> np.ndarray:
    """Boshidagi va oxiridagi jimlikni kesadi.

    Yozuvlar kutubxonada bir necha o'nlab millisekund jimlik bilan
    boshlanadi. Namuna chalinganda bu kechikishga aylanadi — klavish
    bosilgandan keyin tovush kechikib chiqadi va ijro «sust» bo'lib
    qoladi. Shuning uchun kesish shart.
    """
    cho_qqi = np.abs(x).max()
    if cho_qqi <= 0:
        return x
    chegara = cho_qqi * 10 ** (chegara_db / 20)
    ustida = np.flatnonzero(np.abs(x) > chegara)
    if not len(ustida):
        return x
    bosh = max(0, ustida[0] - int(FS * oldin_ms / 1000))
    return x[bosh:ustida[-1] + 1]


def qisqartir(x: np.ndarray, maks_s: float, fade_s: float = 0.08) -> np.ndarray:
    n = int(FS * maks_s)
    if len(x) > n:
        x = x[:n].copy()
    f = min(len(x), int(FS * fade_s))
    if f > 1:
        x[-f:] = x[-f:] * np.linspace(1, 0, f)
    return x


def normalla(x: np.ndarray, peak: float) -> np.ndarray:
    m = np.abs(x).max()
    return x * (peak / m) if m > 0 else x


def pastga(x: np.ndarray, hz: float) -> np.ndarray:
    b, a = signal.butter(2, min(hz, FS / 2 - 200) / (FS / 2), btype="low")
    return signal.lfilter(b, a, x)


def yorqinlik(x: np.ndarray, db: float, hz: float = 4000.0, q: float = 0.9):
    """Peaking EQ — «kuchli» qatlamni yorqinroq qiladi."""
    A = 10 ** (db / 40)
    w0 = 2 * np.pi * hz / FS
    alpha = np.sin(w0) / (2 * q)
    b = np.array([1 + alpha * A, -2 * np.cos(w0), 1 - alpha * A])
    a = np.array([1 + alpha / A, -2 * np.cos(w0), 1 - alpha / A])
    return signal.lfilter(b / a[0], a / a[0], x)


def wav_yoz(path: pathlib.Path, x: np.ndarray):
    pcm = (np.clip(x, -1.0, 1.0) * 32767).astype("<i2").tobytes()
    with wave.open(str(path), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(FS)
        w.writeframes(pcm)


def mp3_yoz(path: pathlib.Path, x: np.ndarray, kbps: int = 64):
    tmp = path.with_suffix(".tmp.wav")
    wav_yoz(tmp, x)
    subprocess.run(
        ["ffmpeg", "-loglevel", "error", "-y", "-i", str(tmp),
         "-codec:a", "libmp3lame", "-b:a", f"{kbps}k", "-ac", "1", str(path)],
        check=True,
    )
    tmp.unlink(missing_ok=True)


# ─────────────────────────── Nota nomlari ───────────────────────────

def midi(note: str) -> int:
    return (int(note[-1]) + 1) * 12 + NOTA_HARFLARI.index(note[:-1])


def nomi(m: int) -> str:
    return f"{NOTA_HARFLARI[m % 12]}{m // 12 - 1}"


def chastota(m: int) -> float:
    return 440.0 * 2 ** ((m - 69) / 12)


def registr(f0: float) -> str:
    return "past" if f0 < 200 else ("orta" if f0 < 500 else "baland")


def soundfont_notalar(path: pathlib.Path) -> dict[str, bytes]:
    text = path.read_text(encoding="utf-8", errors="replace")
    out: dict[str, bytes] = {}
    for m in re.finditer(
        r'"([A-G]b?-?\d)"\s*:\s*"data:audio/mp3;base64,([A-Za-z0-9+/=]+)"', text
    ):
        out[m.group(1)] = base64.b64decode(m.group(2))
    return out


# ─────────────────────────── Doira ───────────────────────────

# Zarb -> (qatlam -> VCSL fayllari). Moslik akustik:
#   bum    — katta ramkali barabanning ochiq zarbi (88 Hz atrofida)
#   bosiq  — o'sha barabanning bo'g'ilgan zarbi (tez so'nadi)
#   tak    — kichik barabanning ochiq zarbi (225 Hz atrofida)
#   qarsak — dafchaning halqalari (doiradagi metall halqalarga mos)
DOIRA_XARITASI = {
    "bum": {
        "yumshoq": ["HDrumL_Hand_rr1_Sum.wav"],
        "orta": ["HDrumL_Hit_v2_rr1_Sum.wav", "HDrumL_Hit_v2_rr2_Sum.wav"],
        "kuchli": ["HDrumL_Hit_v3_rr1_Sum.wav", "HDrumL_Hit_v3_rr2_Sum.wav"],
    },
    "bosiq": {
        # Kutubxonada bo'g'iq zarbning yumshoq ijrosi yo'q — shu qatlam
        # filtr bilan hosil qilinadi va `hosil: "filtr"` deb belgilanadi.
        "yumshoq": ["HDrumL_HitMuted_v2_rr1_Sum.wav", "*filtr"],
        "orta": ["HDrumL_HitMuted_v2_rr1_Sum.wav", "HDrumL_HitMuted_v2_rr2_Sum.wav"],
        "kuchli": ["HDrumL_HitMuted_v3_rr1_Sum.wav", "HDrumL_HitMuted_v3_rr2_Sum.wav"],
    },
    "tak": {
        "yumshoq": ["HDrumS_Hand_v1_rr1_Sum.wav"],
        "orta": ["HDrumS_Hit_v2_rr1_Sum.wav", "HDrumS_Hit_v2_rr2_Sum.wav"],
        "kuchli": ["HDrumS_Hit_v3_rr1_Sum.wav", "HDrumS_Hit_v3_rr2_Sum.wav"],
    },
    "qarsak": {
        "yumshoq": ["Tamb1_Hit_v1_rr1_Mid.wav", "Tamb1_Shake_rr1_Mid.wav"],
        "orta": ["Tamb1_Hit_v2_rr1_Mid.wav", "Tamb1_Shake_rr2_Mid.wav"],
        # Dafchada uchinchi kuch darajasi yozilmagan — yorqinlik filtri.
        "kuchli": ["Tamb1_Hit_v2_rr1_Mid.wav*filtr", "Tamb1_Shake_rr2_Mid.wav*filtr"],
    },
}

DOIRA_UZUNLIK = {"bum": 1.9, "bosiq": 0.9, "tak": 1.2, "qarsak": 1.4}


def doira_qur(cfg: dict) -> dict:
    papka = CHIQISH / "doira-yozuv"
    papka.mkdir(parents=True, exist_ok=True)
    for eski in papka.glob("*.mp3"):
        eski.unlink()

    namunalar = []
    print(f"{'zarb':8s} {'kuch':8s} {'variant':>8s} {'uzunlik':>8s} {'cho_qqi':>8s}")
    for zarb, qatlamlar in DOIRA_XARITASI.items():
        for q in QATLAMLAR:
            fayllar = [f for f in qatlamlar[q["id"]] if f != "*filtr"]
            # `*filtr` — shu qatlam uchun alohida yozuv yo'q, filtr bilan
            # hosil qilinadi. Belgini yo'qotmaslik muhim: bank.json da u
            # `hosil` maydoni bo'lib qoladi.
            filtrli = "*filtr" in qatlamlar[q["id"]]
            for i, nom in enumerate(fayllar):
                xom = nom.replace("*filtr", "")
                hosil = "filtr" if (filtrli or nom.endswith("*filtr")) else "yozuv"
                x = wav_oqi(DL / "vcsl" / xom)
                x = qisqartir(jimlikni_kes(x), DOIRA_UZUNLIK[zarb])
                if hosil == "filtr":
                    x = pastga(x, 3200) if q["id"] == "yumshoq" else yorqinlik(x, 3.5)
                x = normalla(x, q["peak"])
                chiqar = f"{zarb}-{q['id']}-{i + 1}.mp3"
                mp3_yoz(papka / chiqar, x)
                namunalar.append({
                    "fayl": chiqar,
                    "zarb": zarb,
                    "kuch": q["id"],
                    "variant": i + 1,
                    "registr": "past" if zarb in ("bum", "bosiq") else "baland",
                    "davomiylik": round(len(x) / FS, 2),
                    "loop": None,
                    "asl": xom,
                    "hosil": hosil,
                })
                print(f"{zarb:8s} {q['id']:8s} {i + 1:8d} {len(x) / FS:7.2f}s "
                      f"{np.abs(x).max():8.2f}  {hosil}")

    v = cfg["manbalar"]["vcsl"]
    return {
        "cholgu": "doira",
        "nom": "Doira — ramkali baraban yozuvi",
        "tur": "qarindosh",
        "turi_izoh": (
            "haqiqiy ramkali baraban va dafcha yozuvi; o'zbek doirasining "
            "o'z yozuvi emas"
        ),
        "manba": f"{v['nom']} ({v['havola']})",
        "litsenziya": v["litsenziya"],
        "sampleRate": FS,
        "kuchlar": [
            {"id": q["id"], "nom": q["nom"], "velocity": q["velocity"]}
            for q in QATLAMLAR
        ],
        "zarblar": list(DOIRA_XARITASI),
        "namunalar": namunalar,
    }


# ─────────────────────────── Torli cholg'ular ───────────────────────────

# Cholg'u -> (soundfont manbasi, diapazon, uzunlik, nega shu manba)
TOR_XARITASI = {
    "rubob": {
        "manba": "sitar",
        "manba_nomi": "sitor",
        "diapazon": ("Db3", "Eb5"),
        "uzunlik": 3.0,
        "sabab": (
            "metall tor, nokka bilan chertish, simpatik torlar va rezonator "
            "kosa — qashqar rubobiga eng yaqin akustik qarindosh"
        ),
    },
    "dutor": {
        "manba": "acoustic_guitar_nylon",
        "manba_nomi": "nayloniy torli akustik cholg'u",
        "diapazon": ("Gb3", "Db5"),
        "uzunlik": 2.6,
        "sabab": (
            "nayloniy tor va yog'och qopqoq, barmoq bilan chertish — "
            "dutorning ipak tori va tut yog'ochli korpusiga eng yaqin"
        ),
    },
}


def tor_qur(cholgu: str, cfg: dict) -> dict:
    spec = TOR_XARITASI[cholgu]
    notalar = soundfont_notalar(DL / "sf" / f"{spec['manba']}.js")
    papka = CHIQISH / f"{cholgu}-yozuv"
    papka.mkdir(parents=True, exist_ok=True)
    for eski in papka.glob("*.mp3"):
        eski.unlink()

    lo, hi = (midi(n) for n in spec["diapazon"])
    tmp = papka / "_tmp.mp3"
    namunalar = []
    print(f"\n{cholgu} <- {spec['manba']}")
    print(f"{'nota':5s} " + "  ".join(f"{q['id']:>14s}" for q in QATLAMLAR))

    for m in range(lo, hi + 1):
        note = nomi(m)
        xom = notalar.get(note)
        if xom is None:
            raise SystemExit(f"{spec['manba']} da {note} yo'q")
        asos = qisqartir(jimlikni_kes(mp3_oqi(xom, tmp)), spec["uzunlik"])
        hujayra = []
        for q in QATLAMLAR:
            # Qatlamlar bitta yozuvdan **filtr bilan** hosil qilinadi:
            # soundfont da ijro kuchi bo'yicha alohida yozuv yo'q. Bu
            # bank.json da `hosil: "filtr"` deb belgilanadi — namuna
            # alohida yozilgan deb ko'rsatilmaydi.
            if q["id"] == "yumshoq":
                y = pastga(asos, 2600)
            elif q["id"] == "kuchli":
                y = yorqinlik(asos, 3.0)
            else:
                y = asos
            y = normalla(y, q["peak"])
            chiqar = f"{note}-{q['id']}.mp3"
            mp3_yoz(papka / chiqar, y)
            namunalar.append({
                "fayl": chiqar,
                "nota": note,
                "f0": round(chastota(m), 2),
                "registr": registr(chastota(m)),
                "kuch": q["id"],
                "variant": 1,
                "davomiylik": round(len(y) / FS, 2),
                "loop": None,
                "hosil": "yozuv" if q["id"] == "orta" else "filtr",
            })
            n = int(FS * 0.05)
            sp = np.abs(np.fft.rfft(y[:n] * np.hanning(n)))
            fr = np.fft.rfftfreq(n, 1 / FS)
            hujayra.append(f"{(sp * fr).sum() / (sp.sum() + 1e-12):9.0f} Hz")
        print(f"{note:5s} " + "  ".join(hujayra))

    tmp.unlink(missing_ok=True)
    s = cfg["manbalar"]["musyngkite"]
    return {
        "cholgu": cholgu,
        "nom": f"{cholgu.capitalize()} — {spec['manba_nomi']} yozuvi",
        "tur": "qarindosh",
        "turi_izoh": (
            f"haqiqiy {spec['manba_nomi']} yozuvi; {spec['sabab']}. "
            f"Ijro kuchi qatlamlari filtr bilan hosil qilingan."
        ),
        "manba": f"{s['nom']} / {spec['manba']} ({s['havola']})",
        "litsenziya": s["litsenziya"],
        "sampleRate": FS,
        "kuchlar": [
            {"id": q["id"], "nom": q["nom"], "velocity": q["velocity"]}
            for q in QATLAMLAR
        ],
        "zarblar": [],
        "namunalar": namunalar,
    }


def main() -> int:
    cfg = json.loads((BU / "manbalar.json").read_text(encoding="utf-8"))
    kerak = sys.argv[1:] or ["doira", "rubob", "dutor"]
    for nom in kerak:
        bank = doira_qur(cfg) if nom == "doira" else tor_qur(nom, cfg)
        papka = CHIQISH / f"{nom}-yozuv"
        (papka / "bank.json").write_text(
            json.dumps(bank, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        hajm = sum(f.stat().st_size for f in papka.glob("*.mp3")) // 1024
        print(f"\n{nom}: {len(bank['namunalar'])} namuna, {hajm} KB -> {papka}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
