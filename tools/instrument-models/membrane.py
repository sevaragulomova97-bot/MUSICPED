"""
Doira — aylana membrana fizik modeli (modal sintez).

Doira torli cholg'u emas, shuning uchun to'lqin yo'li modeli mos kelmaydi.
Taranglashtirilgan aylana membrana **garmonik bo'lmagan** xususiy chastotalarda
tebranadi: ular Bessel funksiyalarining nollari bilan belgilanadi
(1,000 · 1,593 · 2,136 · 2,295 · 2,653 …). Aynan shu garmonik bo'lmaganlik
barabanni torli cholg'udan ajratib turadi — uni sinus garmonikalari bilan
taqlid qilib bo'lmaydi.

Modelda uch narsa bor:

1. **Membrana rejimlari** — har biri o'z chastotasi va so'nish vaqti bilan.
   Zarb joyi qaysi rejim qanchalik qo'zg'alishini belgilaydi: markazga
   urilganda faqat radial simmetrik rejimlar (m=0) uyg'onadi, shuning uchun
   "bum" chuqur va toza chiqadi.
2. **Yog'och gardish** — zarbning qisqa "taq" transienti.
3. **Jiringlagich halqalar** — doiraning ichki gardishidagi metall halqalar;
   yuqori chastotali, tez so'nadigan jarang.
"""

from dataclasses import dataclass

import numpy as np
from scipy import signal
from scipy.special import jn_zeros, jv

FS = 44100


@dataclass(frozen=True)
class DoiraSpec:
    f0: float                      # asosiy rejim chastotasi (Gts)
    dur: float
    n_modes: int = 14
    decay0: float = 0.72           # asosiy rejimning so'nishi (soniya)
    decay_exp: float = 1.25        # yuqori rejimlar tezroq so'nadi
    tension_flatten: float = 0.06  # havo yuki rejimlarni biroz pastga tortadi


# Zarb turlari.
#
# `low_damp` — pastki rejimlarning so'ndirilishi. Chetga qo'l bilan urilganda
# barmoqlar membranani bosib turadi va asosiy tebranishni bo'g'adi; shuning
# uchun "tak" baland va quruq, "bum" esa chuqur chiqadi.
STROKES = {
    #                r/R    so'nish  gardish (Hz, kuch)  jarang  past rejim
    "bum":    dict(r=0.00, decay=1.00, knock=(900, 0.18), jingle=0.03, low_damp=1.00),
    "tak":    dict(r=0.82, decay=0.26, knock=(2600, 0.50), jingle=0.20, low_damp=0.18),
    "qarsak": dict(r=0.97, decay=0.14, knock=(4200, 0.32), jingle=1.00, low_damp=0.07),
}


def _modes(spec: DoiraSpec):
    """Membrana rejimlari: (chastota nisbati, m — burchak tartibi, Bessel noli)."""
    rows = []
    z01 = jn_zeros(0, 1)[0]
    for m in range(0, 6):
        for z in jn_zeros(m, 4):
            # Haqiqiy barabanlarda havo yuki yuqori rejimlarni pastga tortadi
            ratio = (z / z01) ** (1.0 - spec.tension_flatten)
            rows.append((ratio, m, z))
    rows.sort(key=lambda r: r[0])
    return rows[: spec.n_modes]


def _strike_amplitudes(rows, r_rel: float):
    """Zarb joyiga qarab har bir rejimning amplitudasi.

    (m, n) rejimining r radiusdagi shakli J_m(z_mn · r/R) ga proporsional.
    Markazda (r=0) faqat m=0 rejimlari noldan farqli — fizik jihatdan shuning
    uchun markazga urilgan zarb "toza" va chuqur chiqadi.
    """
    amps = []
    for _ratio, m, z in rows:
        a = abs(float(jv(m, z * r_rel)))
        if m > 0:
            a *= 0.7          # burchak bo'yicha o'rtachalash
        amps.append(a)
    peak = max(amps) if amps else 1.0
    return [a / (peak + 1e-12) for a in amps]


def _frame_knock(n: int, rng, cutoff: float, decay: float) -> np.ndarray:
    """Yog'och gardishning qisqa zarb transienti."""
    x = rng.standard_normal(n)
    b, a = signal.butter(2, min(cutoff, FS / 2 - 100) / (FS / 2), btype="low")
    x = signal.lfilter(b, a, x)
    return x * np.exp(-np.arange(n) / (FS * decay))


def _jingles(n: int, rng, count: int = 9) -> np.ndarray:
    """Metall halqalarning jarangi.

    Halqalar bir-biriga urilib, 2–8 kHz oralig'ida tartibsiz joylashgan tor
    chastotali tebranishlar beradi; ular juda tez so'nadi.
    """
    t = np.arange(n) / FS
    out = np.zeros(n)
    for _ in range(count):
        f = rng.uniform(2200, 7800)
        dec = rng.uniform(0.05, 0.22)
        out += np.sin(2 * np.pi * f * t + rng.uniform(0, 2 * np.pi)) * np.exp(-t / dec)
    noise = rng.standard_normal(n)
    b, a = signal.butter(2, 3000 / (FS / 2), btype="high")
    noise = signal.lfilter(b, a, noise) * np.exp(-t / 0.05)
    return out / count + noise * 0.35


def render_stroke(spec: DoiraSpec, stroke: str, seed: int) -> np.ndarray:
    """Bitta zarbni render qiladi: `bum`, `tak` yoki `qarsak`."""
    if stroke not in STROKES:
        raise ValueError(f"noma'lum zarb: {stroke}")
    cfg = STROKES[stroke]

    rng = np.random.default_rng(seed)
    n = int(FS * spec.dur)
    t = np.arange(n) / FS
    rows = _modes(spec)
    amps = _strike_amplitudes(rows, cfg["r"])

    out = np.zeros(n)
    for (ratio, _m, _z), amp in zip(rows, amps):
        f = spec.f0 * ratio
        if f > FS / 2 * 0.9:
            continue
        gain = amp * (cfg["low_damp"] if ratio < 1.8 else 1.0)
        decay = spec.decay0 * cfg["decay"] / (ratio ** spec.decay_exp)
        out += gain * np.sin(2 * np.pi * f * t + rng.uniform(0, 2 * np.pi)) * np.exp(-t / decay)

    peak = np.max(np.abs(out))
    if peak > 0:
        out /= peak

    knock_cut, knock_gain = cfg["knock"]
    out += _frame_knock(n, rng, knock_cut, 0.012) * knock_gain
    if cfg["jingle"] > 0:
        out += _jingles(n, rng) * cfg["jingle"]

    # Karnay chiqara olmaydigan juda past chastotalarni kesamiz
    b, a = signal.butter(2, 45 / (FS / 2), btype="high")
    out = signal.lfilter(b, a, out)

    fade = min(n, int(FS * 0.05))
    out[-fade:] *= np.linspace(1, 0, fade)

    peak = np.max(np.abs(out))
    if peak > 0:
        out = out / peak * 0.85
    return out.astype(np.float32)


DOIRA = DoiraSpec(f0=98.0, dur=1.6)
