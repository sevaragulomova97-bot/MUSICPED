"""
Dutor fizik modeli — raqamli to'lqin yo'li (digital waveguide).

Dutorning akustik xususiyatlari modelga shunday kiritilgan:

  • Ikki tor, kvarta oralig'ida sozlanadi. Ikkinchi tor chalinmasa ham
    birinchisi bilan birga tebranadi (simpatik rezonans) — dutorning
    o'ziga xos "jarangi" shundan.
  • Ipak/nayloniy tor: yuqori garmonikalar tez so'nadi, tovush yumshoq.
  • Uzun dasta (~0,9 m) va past tortilish: zarb yumshoq, hujum sekinroq.
  • Kichik nok shaklidagi tut yog'ochli korpus: havo rezonansi gitaradan
    yuqorida (~250 Hz), yupqa qopqoq rezonansi ~430 Hz.
  • "Dimog'i" (nasal) tembr: 1,2 kHz atrofidagi formant.
  • Barmoq (nokka emas) bilan chertish: boshlang'ich shovqin kuchsiz va
    past chastotali.
"""

import numpy as np
from scipy import signal

FS = 44100
DUR = 2.6           # soniya
PLUCK_POS = 0.22    # chertish nuqtasi (tor uzunligining ulushi)


def _pluck_excitation(n: int, beta: float, rng: np.random.Generator) -> np.ndarray:
    """Chertilgan torning boshlang'ich holati.

    Sof shovqin ishlatilsa, garmonikalar nisbati tasodifiy chiqadi va har bir
    nota boshqacha tembr beradi — sinovda aynan shunday bo'ldi. Haqiqiy torda
    esa boshlang'ich holat aniq: barmoq tortgan joyda (beta) cho'qqisi bo'lgan
    **uchburchak**. Shu shakl garmonikalarni fizik jihatdan to'g'ri taqsimlaydi
    (amplituda ~ 1/n², chertish nuqtasiga bog'liq nol nuqtalar bilan).

    Ustiga ozgina yumshatilgan shovqin qo'shiladi — barmoqning torga tegish
    shovqini.
    """
    k = max(1, min(n - 1, int(round(beta * n))))
    tri = np.empty(n)
    tri[:k] = np.linspace(0.0, 1.0, k, endpoint=False)
    tri[k:] = np.linspace(1.0, 0.0, n - k, endpoint=False)

    noise = rng.standard_normal(n)
    b, a = signal.butter(2, 1800 / (FS / 2), btype="low")
    noise = signal.lfilter(b, a, noise)
    noise /= np.max(np.abs(noise)) + 1e-12

    y = tri + 0.08 * noise
    # To'lqin yo'lida doimiy tashkiluvchi qolmasligi kerak
    y -= y.mean()
    return y / (np.max(np.abs(y)) + 1e-12)



def _string(f0: float, dur: float, rng: np.random.Generator,
            damping: float, loop_gain: float, drive: np.ndarray | None = None,
            delay_trim: float = 0.0) -> np.ndarray:
    """Bitta torning to'lqin yo'li modeli.

    Halqa uch qismdan iborat:

      1. Butun sonli kechikish chizig'i — tovush balandligining asosi.
      2. **Allpass** kasr kechikish. Avval chiziqli interpolatsiya ishlatilgan
         edi, lekin u yuqori chastotalarni har aylanishda susaytiradi; sekundiga
         yuzlab aylana bo'lgani uchun baland notalarda garmonikalar butunlay
         yo'qolib, tovush sof sinusga aylanib qolgandi. Allpass faqat fazani
         o'zgartiradi, amplitudani emas.
      3. Bir qutbli past o'tkazgich — yuqori garmonikalar tezroq so'nadi
         (haqiqiy torda ham shunday).

    `delay_trim` — sozlashni aniq moslash uchun (sentlarda o'lchanib tanlanadi).
    """
    n_out = int(FS * dur)
    period = FS / f0

    # Har bir bo'g'inning kechikishini hisobga olamiz
    lp_delay = damping / (1.0 - damping)
    target = period - lp_delay + delay_trim

    n_delay = int(np.floor(target)) - 1
    frac = target - n_delay
    # Allpass 0,1..1,1 oralig'ida eng barqaror ishlaydi
    while frac >= 1.1:
        n_delay += 1
        frac -= 1.0
    while frac < 0.1:
        n_delay -= 1
        frac += 1.0
    n_delay = max(2, n_delay)

    ap_coef = (1.0 - frac) / (1.0 + frac)

    size = n_delay + 2
    buf = np.zeros(size)
    exc = _pluck_excitation(n_delay, PLUCK_POS, rng)
    buf[:len(exc)] = exc

    out = np.zeros(n_out)
    w = n_delay
    lp_state = 0.0
    ap_x1 = 0.0
    ap_y1 = 0.0

    for i in range(n_out):
        s = buf[(w - n_delay) % size]
        out[i] = s
        if drive is not None:
            s += drive[i]

        # Allpass kasr kechikish: y[n] = a*x[n] + x[n-1] - a*y[n-1]
        ap_y = ap_coef * s + ap_x1 - ap_coef * ap_y1
        ap_x1 = s
        ap_y1 = ap_y

        lp_state = (1.0 - damping) * ap_y + damping * lp_state
        buf[w] = lp_state * loop_gain
        w = (w + 1) % size

    return out


def _biquad_peak(f0: float, q: float, gain_db: float):
    """Rezonans cho'qqisi (korpus rezonanslari uchun)."""
    a = 10 ** (gain_db / 40)
    w0 = 2 * np.pi * f0 / FS
    alpha = np.sin(w0) / (2 * q)
    b = [1 + alpha * a, -2 * np.cos(w0), 1 - alpha * a]
    a_ = [1 + alpha / a, -2 * np.cos(w0), 1 - alpha / a]
    return np.array(b) / a_[0], np.array(a_) / a_[0]


def _body(x: np.ndarray) -> np.ndarray:
    """Dutor korpusining tovushga ta'siri.

    Gitaraning katta korpusi 100 Hz atrofida kuchli rezonans beradi;
    dutorniki kichik, shuning uchun past chastotalar kesiladi va
    rezonanslar yuqoriroqqa qo'yiladi.
    """
    y = x
    # Kichik korpus — pastki chastotalar kam
    b, a = signal.butter(2, 130 / (FS / 2), btype="high")
    y = signal.lfilter(b, a, y)

    for f, q, g in [
        (250, 1.2, 5.0),    # havo (Helmholtz) rezonansi
        (430, 1.6, 3.5),    # yupqa qopqoq rezonansi
        (1200, 1.1, 4.0),   # "dimog'i" formanti — dutorning belgisi
        (2600, 2.0, -3.0),  # o'tkirlikni yumshatish
    ]:
        bb, aa = _biquad_peak(f, q, g)
        y = signal.lfilter(bb, aa, y)

    # Ipak tor — yuqori chastotalar kam
    b, a = signal.butter(2, 5200 / (FS / 2), btype="low")
    y = signal.lfilter(b, a, y)
    return y


def render_note(f0: float, seed: int, delay_trim: float = 0.0,
                dur: float = DUR) -> np.ndarray:
    """Bitta notani render qiladi (asosiy tor + simpatik tor + korpus)."""
    rng = np.random.default_rng(seed)

    # Damping tovush balandligiga qarab kamayadi.
    # Sekundiga aylanalar soni f0 ga teng, shuning uchun bir xil damping
    # baland notalarda ancha kuchliroq ta'sir qiladi va ularni sinusga
    # aylantirib qo'yadi. Shkala shuni muvozanatlaydi.
    damp = float(np.clip(0.42 * (220.0 / f0) ** 0.5, 0.06, 0.52))

    # Asosiy tor
    main = _string(f0, dur, rng, damping=damp, loop_gain=0.9965,
                   delay_trim=delay_trim)

    # Simpatik tor — kvarta pastda, asosiy tordan kuchsiz quvvatlanadi.
    # Dutorning ikkinchi tori chalinmasa ham tebranadi va tovushga
    # o'ziga xos "quyruq" qo'shadi.
    coupling = main * 0.045
    symp = _string(f0 * 0.75, dur, np.random.default_rng(seed + 1),
                   damping=min(0.6, damp * 1.3), loop_gain=0.995, drive=coupling)

    mix = main + symp * 0.35
    y = _body(mix)

    # Oxiridagi kesilishni yumshatamiz
    fade = int(FS * 0.12)
    y[-fade:] *= np.linspace(1, 0, fade)

    peak = np.max(np.abs(y))
    if peak > 0:
        y = y / peak * 0.82
    return y.astype(np.float32)
