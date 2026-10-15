"""
Cholg'u namunalarini render qiladi, sozlashni kalibrlaydi va tekshiradi.

Ishlatish:
    python3 render.py dutor  wav/dutor
    python3 render.py rubob  wav/rubob
    python3 render.py doira  wav/doira
"""

import pathlib as _pathlib
import sys as _sys
import wave

# `python3 -I` izolyatsiya rejimida skript papkasi yo'lga qo'shilmaydi
_sys.path.insert(0, str(_pathlib.Path(__file__).resolve().parent))

import numpy as np

import membrane as MB
import strings as ST

FS = ST.FS

NOTES = {  # Tone.Sampler kutadigan notalar (har 3 yarim tonda bitta)
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

    Tahlil oynasi aniq butun sonli davrga teng olinadi, shunda har bir
    garmonika o'z biniga tushadi va amplitudasi to'g'ri o'lchanadi. Oddiy
    oyna bilan o'lchash noto'g'ri xulosaga olib keladi.
    """
    cycles = max(8, int(0.25 * FS / period))
    n = int(round(cycles * period))
    seg = y[1500:1500 + n].astype(np.float64)
    if len(seg) < n:
        return [float("nan")] * count
    sp = np.abs(np.fft.rfft(seg - seg.mean()))
    h = [sp[k * cycles] if k * cycles < len(sp) else 0.0 for k in range(1, count + 1)]
    ref = h[0] if h[0] > 0 else 1.0
    return [float(20 * np.log10(v / ref + 1e-12)) for v in h]


def calibrate(spec, f0: float, seed: int) -> float:
    """`delay_trim` ni tanlaydi: o'lchangan balandlik nishonga 1 sentdan yaqin.

    Allpass kechikishi chastotaga bog'liq, shuning uchun uni formula bilan
    aniq hisoblab bo'lmaydi — eng ishonchli yo'l o'lchab tanlash.
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
    return best


def write_wav(path, y, fs=FS):
    """16-bit PCM WAV — ffmpeg keyin MP3 ga o'tkazadi."""
    pcm = (np.clip(y, -1.0, 1.0) * 32767).astype("<i2").tobytes()
    with wave.open(str(path), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(fs)
        w.writeframes(pcm)


def render_strings(name: str, out: _pathlib.Path) -> int:
    spec = ST.SPECS[name]
    print(f"{'nota':5s} {'trim':>6s} {'xato':>8s}   garmonikalar (dB, 1..6)")
    bad = 0
    for i, (note, f0) in enumerate(NOTES.items()):
        trim = calibrate(spec, f0, 7 + i)
        y = ST.render_note(spec, f0, 7 + i, delay_trim=trim)
        cents = 1200 * np.log2(measured_pitch(y, f0) / f0)
        db = harmonics_db(y, FS / measured_pitch(y, f0))
        flag = ""
        if abs(cents) > 2:
            flag, bad = "  ⚠ SOZLASH", bad + 1
        if float(np.max(np.abs(y))) >= 1.0:
            flag, bad = flag + "  ⚠ CLIPPING", bad + 1
        write_wav(out / f"{note}.wav", y)
        print(f"{note:5s} {trim:+6.2f} {cents:+7.2f}c   "
              + " ".join(f"{d:6.1f}" for d in db) + flag)
    return bad


def render_doira(out: _pathlib.Path) -> int:
    """Doira zarblarini render qiladi va ularning farqini o'lchaydi."""
    print(f"{'zarb':8s} {'T-20dB':>7s} {'T-40dB':>7s} {'cho_qqi':>9s} {'past/yuqori':>12s}")
    bad = 0
    for i, stroke in enumerate(MB.STROKES):
        y = MB.render_stroke(MB.DOIRA, stroke, 11 + i)
        d = y.astype(np.float64)
        w = int(FS * 0.01)
        rms = np.sqrt(np.convolve(d ** 2, np.ones(w) / w, "same"))
        db = 20 * np.log10(rms / rms.max() + 1e-12)

        def t_at(x):
            i = int(np.argmax(db < x))
            return (i if i else len(d)) / FS

        n = int(FS * 0.4)
        sp = np.abs(np.fft.rfft(d[:n] * np.hanning(n)))
        fr = np.fft.rfftfreq(n, 1 / FS)
        lo = sp[(fr > 40) & (fr < 300)].sum()
        hi = sp[fr > 2000].sum()
        flag = "" if float(np.max(np.abs(y))) < 1.0 else "  ⚠ CLIPPING"
        if flag:
            bad += 1
        write_wav(out / f"{stroke}.wav", y)
        print(f"{stroke:8s} {t_at(-20):6.2f}s {t_at(-40):6.2f}s "
              f"{fr[np.argmax(sp)]:8.0f}Hz {lo / (hi + 1e-9):12.2f}{flag}")
    return bad


if __name__ == "__main__":
    name = _sys.argv[1] if len(_sys.argv) > 1 else "dutor"
    out = _pathlib.Path(_sys.argv[2] if len(_sys.argv) > 2 else f"wav/{name}")
    out.mkdir(parents=True, exist_ok=True)

    bad = render_doira(out) if name == "doira" else render_strings(name, out)
    print(f"\n{name}: yozildi -> {out}, muammoli: {bad}")
