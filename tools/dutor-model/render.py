"""Dutor namunalarini render qiladi, sozlashni kalibrlaydi va tekshiradi."""
import pathlib as _pathlib
import sys as _sys

# `python3 -I` izolyatsiya rejimida skript papkasi yo'lga qo'shilmaydi
_sys.path.insert(0, str(_pathlib.Path(__file__).resolve().parent))

import numpy as np
import model as M

FS = M.FS
NOTES = {  # Tone.Sampler kutadigan notalar
    "C2": 65.41, "Eb2": 77.78, "Gb2": 92.50, "A2": 110.00,
    "C3": 130.81, "Eb3": 155.56, "Gb3": 185.00, "A3": 220.00,
    "C4": 261.63, "Eb4": 311.13, "Gb4": 369.99, "A4": 440.00,
    "C5": 523.25, "Eb5": 622.25, "Gb5": 739.99, "A5": 880.00,
    "C6": 1046.50,
}


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


def harmonics_db(y: np.ndarray, period: float, count: int = 6):
    """Davrga sinxron spektr — garmonikalar binlar orasiga tarqalmaydi.

    Tahlil oynasi aniq butun sonli davrga teng qilib olinadi, shunda har bir
    garmonika o'z biniga tushadi va amplitudasi to'g'ri o'lchanadi.
    """
    cycles = max(8, int(0.25 * FS / period))
    n = int(round(cycles * period))
    seg = y[1500:1500 + n].astype(np.float64)
    if len(seg) < n:
        return [float("nan")] * count
    seg = seg - seg.mean()
    sp = np.abs(np.fft.rfft(seg))
    h = [sp[k * cycles] if k * cycles < len(sp) else 0.0 for k in range(1, count + 1)]
    ref = h[0] if h[0] > 0 else 1.0
    return [float(20 * np.log10(v / ref + 1e-12)) for v in h]


def calibrate(f0: float, seed: int) -> float:
    """`delay_trim` ni tanlaydi: o'lchangan balandlik nishonga 1 sentdan yaqin.

    Allpass kechikishi chastotaga bog'liq, shuning uchun uni formula bilan
    aniq hisoblab bo'lmaydi — eng ishonchli yo'l o'lchab tanlash.
    """
    lo, hi = -3.0, 3.0
    best, best_err = 0.0, float("inf")
    for _ in range(26):
        mid = (lo + hi) / 2
        # Kalibrlash uchun qisqa render yetarli — tezroq bo'ladi
        y = M.render_note(f0, seed, delay_trim=mid, dur=0.9)
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
    return best


def write_wav(path, y, fs=FS):
    """16-bit PCM WAV — ffmpeg keyin MP3 ga o'tkazadi."""
    import struct, wave
    data = np.clip(y, -1.0, 1.0)
    pcm = (data * 32767).astype("<i2").tobytes()
    with wave.open(str(path), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(fs)
        w.writeframes(pcm)
    del struct


if __name__ == "__main__":
    import pathlib, sys
    out = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "out")
    out.mkdir(parents=True, exist_ok=True)
    print(f"{'nota':5s} {'trim':>6s} {'xato':>8s}   garmonikalar (dB, 1..6)")
    bad = 0
    for i, (name, f0) in enumerate(NOTES.items()):
        trim = calibrate(f0, 7 + i)
        y = M.render_note(f0, 7 + i, delay_trim=trim)
        fm = measured_pitch(y, f0)
        cents = 1200 * np.log2(fm / f0)
        db = harmonics_db(y, FS / fm)
        peak = float(np.max(np.abs(y)))
        flag = ""
        if abs(cents) > 2:
            flag, bad = "  ⚠ SOZLASH", bad + 1
        if peak >= 1.0:
            flag, bad = flag + "  ⚠ CLIPPING", bad + 1
        write_wav(out / f"{name}.wav", y)
        print(f"{name:5s} {trim:+6.2f} {cents:+7.2f}c   "
              + " ".join(f"{d:6.1f}" for d in db) + flag)
    print(f"\n{len(NOTES)} ta nota yozildi, muammoli: {bad}")
