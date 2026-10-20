"""
Cholg'u namunalari bankini render qiladi, o'lchaydi va `bank.json` yozadi.

Ishlatish:
    python3 -I render.py dutor
    python3 -I render.py rubob
    python3 -I render.py doira
    python3 -I render.py hammasi

Natija `wav/<cholgu>/` ga tushadi; MP3 ga o'tkazish `pack.sh` da.

Bank uch o'lchov bo'yicha quriladi:

  1. **Balandlik** — har yarim tonda alohida namuna. Ilgari har 3 yarim
     tonda bittasi olinardi va oraliq notalar namunani cho'zish bilan
     hosil qilinardi; cho'zish esa korpus rezonanslarini ham surib
     yuboradi, shuning uchun bir xil cholg'u turli notada boshqacha
     o'lchamdagi cholg'uga o'xshab qolardi.
  2. **Ijro kuchi** — uch qatlam. Har biri alohida render qilinadi,
     chunki kuch ortganda tembr ham o'zgaradi (qarang `strings.Dynamic`,
     `membrane.Force`).
  3. **Variant** (faqat doira) — bir zarbning uch xil ijrosi. Ketma-ket
     zarblarda navbat bilan chalinadi, shuning uchun takror mexanik
     eshitilmaydi.
"""

import json
import pathlib as _pathlib
import sys as _sys
import wave

# `python3 -I` izolyatsiya rejimida skript papkasi yo'lga qo'shilmaydi
_sys.path.insert(0, str(_pathlib.Path(__file__).resolve().parent))

import numpy as np

import membrane as MB
import strings as ST

FS = ST.FS

NOTA_HARFLARI = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]

# Har bir cholg'uning namuna olinadigan diapazoni — chalish mumkin bo'lgan
# diapazondan bir yarim ton keng (`content/instrument-range.ts`).
DIAPAZON = {
    "dutor": ("Gb3", "Db5"),
    "rubob": ("Db3", "Eb5"),
}

BANK_NOMI = {
    "dutor": "Dutor — fizik model",
    "rubob": "Qashqar rubobi — fizik model",
    "doira": "Doira — fizik model",
}

LITSENZIYA = "MusicPed loyihasi — tashqi yozuvdan olinmagan, cheklovsiz"
MANBA = "tools/instrument-models/ (raqamli to'lqin yo'li / modal sintez)"


def midi_number(note: str) -> int:
    letter, octave = note[:-1], int(note[-1])
    return (octave + 1) * 12 + NOTA_HARFLARI.index(letter)


def note_name(midi: int) -> str:
    return f"{NOTA_HARFLARI[midi % 12]}{midi // 12 - 1}"


def frequency(midi: int) -> float:
    return 440.0 * 2 ** ((midi - 69) / 12)


def register(f0: float) -> str:
    """Registr — bank metadatasida va interfeysda ko'rsatish uchun."""
    if f0 < 200:
        return "past"
    return "orta" if f0 < 500 else "baland"


def chromatic(lo: str, hi: str) -> list[str]:
    return [note_name(m) for m in range(midi_number(lo), midi_number(hi) + 1)]


# ─────────────────────────── O'lchovlar ───────────────────────────

def measured_pitch(y: np.ndarray, f0: float) -> float:
    """Avtokorrelyatsiya bilan haqiqiy tovush balandligini o'lchaydi."""
    seg = y[1500:1500 + FS // 2].astype(np.float64)
    seg = seg - seg.mean()
    ac = np.correlate(seg, seg, "full")[len(seg) - 1:]
    lo, hi = int(FS / (f0 * 1.5)), int(FS / (f0 * 0.67))
    lag = lo + int(np.argmax(ac[lo:hi]))
    a, b, c = ac[lag - 1], ac[lag], ac[lag + 1]
    denom = a - 2 * b + c
    if denom != 0:
        lag = lag + 0.5 * (a - c) / denom
    return FS / lag


def centroid(y: np.ndarray, seconds: float = 0.05) -> float:
    """Spektr markazi — «yorqinlik» ning sonli o'lchovi."""
    n = int(FS * seconds)
    seg = y[1500:1500 + n].astype(np.float64)
    if len(seg) < 16:
        return float("nan")
    sp = np.abs(np.fft.rfft(seg * np.hanning(len(seg))))
    fr = np.fft.rfftfreq(len(seg), 1 / FS)
    return float((sp * fr).sum() / (sp.sum() + 1e-12))


def decay_time(y: np.ndarray, level_db: float = -20.0) -> float:
    d = y.astype(np.float64)
    w = int(FS * 0.01)
    rms = np.sqrt(np.convolve(d ** 2, np.ones(w) / w, "same"))
    db = 20 * np.log10(rms / (rms.max() + 1e-12) + 1e-12)
    i = int(np.argmax(db < level_db))
    return (i if i else len(d)) / FS


def low_high_balance(y: np.ndarray) -> float:
    n = min(len(y), int(FS * 0.4))
    sp = np.abs(np.fft.rfft(y[:n].astype(np.float64) * np.hanning(n)))
    fr = np.fft.rfftfreq(n, 1 / FS)
    return float(sp[(fr > 40) & (fr < 300)].sum() / (sp[fr > 2000].sum() + 1e-9))


def calibrate(spec, f0: float, seed: int) -> tuple[float, float]:
    """`delay_trim` ni tanlaydi: o'lchangan balandlik nishonga 1 sentdan yaqin.

    Allpass kechikishi chastotaga bog'liq, shuning uchun uni formula bilan
    aniq hisoblab bo'lmaydi — eng ishonchli yo'l o'lchab tanlash. Tegish
    kengligi balandlikka ta'sir qilmaydi, shuning uchun kalibratsiya bir
    marta (o'rta kuchda) yuritiladi va uchala qatlamga qo'llanadi.
    """
    lo, hi = -3.0, 3.0
    best, best_err = 0.0, float("inf")
    for _ in range(26):
        mid = (lo + hi) / 2
        y = ST.render_note(spec, f0, seed, delay_trim=mid, dur=0.9)
        cents = 1200 * np.log2(measured_pitch(y, f0) / f0)
        if abs(cents) < best_err:
            best, best_err = mid, abs(cents)
        if best_err < 0.5:
            break
        # Kechikish uzaysa — tovush pasayadi
        if cents > 0:
            lo = mid
        else:
            hi = mid
    return best, best_err


def write_wav(path, y, fs=FS):
    """16-bit PCM WAV — ffmpeg keyin MP3 ga o'tkazadi."""
    pcm = (np.clip(y, -1.0, 1.0) * 32767).astype("<i2").tobytes()
    with wave.open(str(path), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(fs)
        w.writeframes(pcm)


# ─────────────────────────── Render ───────────────────────────

def render_strings(name: str, out: _pathlib.Path) -> tuple[dict, int]:
    spec = ST.SPECS[name]
    notes = chromatic(*DIAPAZON[name])
    print(f"{name}: {len(notes)} nota x {len(ST.DYNAMICS)} kuch qatlami")
    print(f"{'nota':5s} {'xato':>7s}  " +
          "  ".join(f"{d.id:>18s}" for d in ST.DYNAMICS))

    samples, bad = [], 0
    for i, note in enumerate(notes):
        f0 = frequency(midi_number(note))
        trim, err = calibrate(spec, f0, 7 + i)
        if err > 2:
            bad += 1
        cells = []
        for d in ST.DYNAMICS:
            y = ST.render_note(spec, f0, 7 + i, delay_trim=trim, dynamic=d)
            if float(np.max(np.abs(y))) >= 1.0:
                bad += 1
                cells.append("  ⚠ CLIPPING")
                continue
            fname = f"{note}-{d.id}.wav"
            write_wav(out / fname, y)
            samples.append({
                "fayl": fname.replace(".wav", ".mp3"),
                "nota": note,
                "f0": round(f0, 2),
                "registr": register(f0),
                "kuch": d.id,
                "variant": 1,
                "davomiylik": round(len(y) / FS, 2),
                "loop": None,
            })
            cells.append(f"{centroid(y):8.0f} Hz {np.abs(y).max():5.2f}")
        print(f"{note:5s} {err:+6.2f}c  " + "  ".join(cells))

    bank = {
        "cholgu": name,
        "nom": BANK_NOMI[name],
        "tur": "model",
        "turi_izoh": "haqiqiy cholg'u yozuvi emas, raqamli model bilan hosil qilingan",
        "manba": MANBA,
        "litsenziya": LITSENZIYA,
        "sampleRate": FS,
        "kuchlar": [
            {"id": d.id, "nom": d.label, "velocity": d.velocity}
            for d in ST.DYNAMICS
        ],
        "zarblar": [],
        "namunalar": samples,
    }
    return bank, bad


# Har bir zarbning uch varianti: urug' va zarb joyining kichik siljishi.
VARIANTLAR = ((0, 0.000), (1, 0.018), (2, -0.015))


def render_doira(out: _pathlib.Path) -> tuple[dict, int]:
    print(f"doira: {len(MB.STROKES)} zarb x {len(MB.FORCES)} kuch x "
          f"{len(VARIANTLAR)} variant")
    print(f"{'zarb':8s} {'kuch':8s} {'T-20dB':>7s} {'past/yuqori':>12s} "
          f"{'cho_qqi':>9s}  variantlar farqi")

    samples, bad = [], 0
    for si, stroke in enumerate(MB.STROKES):
        for fi, force in enumerate(MB.FORCES):
            tails = []
            for vi, jitter in VARIANTLAR:
                seed = 11 + si * 31 + fi * 7 + vi
                y = MB.render_stroke(MB.DOIRA, stroke, seed,
                                     force=force, jitter=jitter)
                if float(np.max(np.abs(y))) >= 1.0:
                    bad += 1
                    continue
                fname = f"{stroke}-{force.id}-{vi + 1}.wav"
                write_wav(out / fname, y)
                samples.append({
                    "fayl": fname.replace(".wav", ".mp3"),
                    "zarb": stroke,
                    "kuch": force.id,
                    "variant": vi + 1,
                    "registr": register(MB.DOIRA.f0 if stroke in ("bum", "bosiq")
                                        else 400.0),
                    "davomiylik": round(len(y) / FS, 2),
                    "loop": None,
                })
                tails.append((decay_time(y), low_high_balance(y)))
            if not tails:
                continue
            t0, b0 = tails[0]
            spread = max(abs(t - t0) for t, _ in tails)
            sp = np.abs(np.fft.rfft(y[:int(FS * 0.4)] * np.hanning(int(FS * 0.4))))
            fr = np.fft.rfftfreq(int(FS * 0.4), 1 / FS)
            print(f"{stroke:8s} {force.id:8s} {t0:6.2f}s {b0:12.2f} "
                  f"{fr[int(np.argmax(sp))]:8.0f}Hz  ±{spread * 1000:.0f} ms")

    bank = {
        "cholgu": "doira",
        "nom": BANK_NOMI["doira"],
        "tur": "model",
        "turi_izoh": "haqiqiy cholg'u yozuvi emas, raqamli model bilan hosil qilingan",
        "manba": MANBA,
        "litsenziya": LITSENZIYA,
        "sampleRate": FS,
        "kuchlar": [
            {"id": f.id, "nom": f.label, "velocity": f.velocity}
            for f in MB.FORCES
        ],
        "zarblar": list(MB.STROKES),
        "namunalar": samples,
    }
    return bank, bad


def run(name: str) -> int:
    out = _pathlib.Path(f"wav/{name}")
    out.mkdir(parents=True, exist_ok=True)
    for old in out.glob("*.wav"):
        old.unlink()

    bank, bad = (render_doira(out) if name == "doira"
                 else render_strings(name, out))
    (out / "bank.json").write_text(
        json.dumps(bank, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"\n{name}: {len(bank['namunalar'])} namuna -> {out}, muammoli: {bad}")
    return bad


if __name__ == "__main__":
    names = _sys.argv[1:] or ["dutor"]
    if names == ["hammasi"]:
        names = ["dutor", "rubob", "doira"]
    total = sum(run(n) for n in names)
    print(f"\nJami muammoli: {total}")
    _sys.exit(1 if total else 0)
