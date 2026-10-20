"""
Torli cholg'ular uchun umumiy fizik model — raqamli to'lqin yo'li.

Dutor va rubob bir oiladan, lekin akustikasi jiddiy farq qiladi:

| | Dutor | Rubob |
|---|---|---|
| Tor | Ipak/nayloniy — yumshoq, tez so'nadi | Metall — yorqin, uzoq jaranglaydi |
| Chertish | Barmoq — yumshoq, keng tegish | Nokka — o'tkir, tor tegish |
| Korpus | Yupqa tut yog'ochi qopqoq | Teri qoplangan kosa |
| Simpatik tor | Bitta (kvarta pastda) | Bir nechta |

Shuning uchun model parametrlar bilan beriladi (`StringSpec`), har bir cholg'u
esa o'z qiymatlarini belgilaydi.
"""

from dataclasses import dataclass

import numpy as np
from scipy import signal

FS = 44100


@dataclass(frozen=True)
class Sympathetic:
    """Chalinmasa ham tebranadigan yordamchi tor."""
    ratio: float          # asosiy torga nisbatan chastota
    coupling: float       # asosiy tordan qancha quvvat oladi
    gain: float           # aralashmadagi ulushi
    damping_mult: float = 1.3


@dataclass(frozen=True)
class Dynamic:
    """Ijro kuchining bir qatlami (yumshoq / o'rta / kuchli).

    Haqiqiy samplerda har bir nota bir necha kuch bilan **alohida** yoziladi.
    Sababi fizik: kuch ortganda tovush faqat balandlashmaydi, tembri ham
    o'zgaradi. Shuning uchun qatlamlar bitta namunaning balandligini
    o'zgartirish bilan emas, modelni boshqa parametrlar bilan qayta
    ishga tushirish bilan hosil qilinadi.
    """
    id: str
    label: str
    velocity: float        # 0..1 — klaviatura/ijro kuchi
    contact: float         # tegish kengligi (tor uzunligining ulushi)
    noise_mult: float      # tegish shovqinining ko'payishi
    pluck_shift: float     # chertish nuqtasining ko'prikka siljishi
    peak: float            # yakuniy normalizatsiya cho'qqisi


# Uchta kuch qatlami. `contact` kamayib borishi — asosiy o'zgarish:
# yumshoq ijroda barmoq keng tegadi, kuchli ijroda deyarli nuqtaviy.
DYNAMICS = (
    Dynamic("yumshoq", "Yumshoq", 0.35, contact=0.085, noise_mult=0.55,
            pluck_shift=+0.030, peak=0.42),
    Dynamic("orta", "O'rta", 0.70, contact=0.035, noise_mult=1.00,
            pluck_shift=0.000, peak=0.66),
    Dynamic("kuchli", "Kuchli", 1.00, contact=0.010, noise_mult=1.60,
            pluck_shift=-0.025, peak=0.88),
)


@dataclass(frozen=True)
class StringSpec:
    """Bitta torli cholg'uning akustik parametrlari."""
    name: str
    dur: float
    pluck_pos: float              # chertish nuqtasi (tor uzunligining ulushi)
    damping_base: float           # 220 Hz dagi halqa damping qiymati
    damping_exp: float            # tovush balandligi bo'yicha shkala darajasi
    loop_gain: float
    noise_mix: float              # turtkidagi shovqin ulushi (barmoq / nokka)
    noise_cutoff: float           # shovqinning past o'tkazgich chegarasi, Hz
    highpass: float               # korpus hajmi — pastki chegarasi
    lowpass: float
    body: tuple                   # ((chastota, Q, dB), ...)
    sympathetics: tuple = ()
    damping_min: float = 0.06
    damping_max: float = 0.52
    # Tegish kengligining cholg'uga xos masshtabi. Dutor barmoq bilan
    # chertiladi — tegish yuzasi keng; rubob nokka bilan — deyarli
    # nuqtaviy. Shuning uchun kuch qatlamlari orasidagi tembr farqi
    # dutorda boshqa oraliqda bo'ladi.
    contact_scale: float = 1.0


def _pluck_excitation(n: int, beta: float, rng: np.random.Generator,
                      noise_mix: float, noise_cutoff: float,
                      contact: float = 0.0) -> np.ndarray:
    """Chertilgan torning boshlang'ich holati.

    Sof shovqin ishlatilsa, garmonikalar nisbati tasodifiy chiqadi va har bir
    nota boshqacha tembr beradi — sinovda aynan shunday bo'ldi. Haqiqiy torda
    esa boshlang'ich holat aniq: barmoq tortgan joyda (beta) cho'qqisi bo'lgan
    **uchburchak**. Shu shakl garmonikalarni fizik jihatdan to'g'ri taqsimlaydi
    (amplituda ~ 1/n², chertish nuqtasiga bog'liq nol nuqtalar bilan).

    `contact` — barmoq yoki nokkaning tor bilan **tegish kengligi** (tor
    uzunligining ulushi). Bu ijro kuchining asosiy fizik ko'rsatkichi:
    yumshoq chertilganda barmoq tordan sekin sirg'alib tushadi va burchak
    yumaloqlanadi — yuqori garmonikalar yo'qoladi; kuchli chertilganda
    tegish deyarli nuqtaviy bo'ladi va burchak o'tkir qoladi — tembr
    yorqinlashadi.

    Shu sababli ijro kuchi faqat balandlik bilan emas, **spektr** bilan ham
    farqlanadi. Bitta namunani balandroq chalish haqiqiy kuchli ijro emas:
    haqiqiy torda kuch ortganda tembr ham o'zgaradi.

    Ustiga shovqin qo'shiladi — barmoq yoki nokkaning torga tegish shovqini.
    Barmoqda u kuchsiz va past chastotali, nokkada kuchliroq va o'tkirroq.
    """
    k = max(1, min(n - 1, int(round(beta * n))))
    tri = np.empty(n)
    tri[:k] = np.linspace(0.0, 1.0, k, endpoint=False)
    tri[k:] = np.linspace(1.0, 0.0, n - k, endpoint=False)

    if contact > 0:
        # Tegish kengligi — ko'tarilgan kosinus oynasi bilan silliqlash.
        w = max(3, int(round(contact * n)) | 1)
        win = np.hanning(w)
        win /= win.sum()
        # Tor halqa shaklida — chetlarni davriy ulab silliqlaymiz, aks holda
        # boshi va oxirida sun'iy uzilish qoladi.
        tri = np.convolve(np.concatenate([tri, tri, tri]), win, "same")[n:2 * n]

    noise = rng.standard_normal(n)
    b, a = signal.butter(2, min(noise_cutoff, FS / 2 - 100) / (FS / 2), btype="low")
    noise = signal.lfilter(b, a, noise)
    noise /= np.max(np.abs(noise)) + 1e-12

    y = tri + noise_mix * noise
    # To'lqin yo'lida doimiy tashkiluvchi qolmasligi kerak
    y -= y.mean()
    return y / (np.max(np.abs(y)) + 1e-12)



def _string(f0: float, dur: float, rng: np.random.Generator,
            damping: float, loop_gain: float, pluck_pos: float,
            noise_mix: float, noise_cutoff: float,
            drive: np.ndarray | None = None,
            delay_trim: float = 0.0, contact: float = 0.0) -> np.ndarray:
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
    exc = _pluck_excitation(n_delay, pluck_pos, rng, noise_mix, noise_cutoff,
                            contact=contact)
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


def _body(x: np.ndarray, spec: "StringSpec") -> np.ndarray:
    """Korpusning tovushga ta'siri.

    Korpus hajmi pastki chegarani belgilaydi (kichik korpusda past chastotalar
    kam), rezonans cho'qqilari esa tembrning "shaxsiyatini" beradi.
    """
    b, a = signal.butter(2, spec.highpass / (FS / 2), btype="high")
    y = signal.lfilter(b, a, x)

    for f, q, g in spec.body:
        bb, aa = _biquad_peak(f, q, g)
        y = signal.lfilter(bb, aa, y)

    b, a = signal.butter(2, min(spec.lowpass, FS / 2 - 200) / (FS / 2), btype="low")
    return signal.lfilter(b, a, y)


def render_note(spec: StringSpec, f0: float, seed: int,
                delay_trim: float = 0.0, dur: float | None = None,
                dynamic: Dynamic | None = None) -> np.ndarray:
    """Bitta notani render qiladi: asosiy tor + simpatik torlar + korpus.

    `dynamic` berilmasa, o'rta kuch ishlatiladi — sozlash kalibratsiyasi
    shu qatlamda yuradi (tegish kengligi balandlikka ta'sir qilmaydi,
    shuning uchun bitta kalibratsiya uchala qatlamga yetadi).
    """
    dyn = DYNAMICS[1] if dynamic is None else dynamic
    rng = np.random.default_rng(seed)
    dur = spec.dur if dur is None else dur

    # Damping tovush balandligiga qarab kamayadi.
    # Sekundiga aylanalar soni f0 ga teng, shuning uchun bir xil damping
    # baland notalarda ancha kuchliroq ta'sir qiladi va ularni sinusga
    # aylantirib qo'yadi. Shkala shuni muvozanatlaydi.
    damp = float(np.clip(
        spec.damping_base * (220.0 / f0) ** spec.damping_exp,
        spec.damping_min, spec.damping_max,
    ))

    pluck = float(np.clip(spec.pluck_pos + dyn.pluck_shift, 0.05, 0.45))
    contact = dyn.contact * spec.contact_scale
    main = _string(f0, dur, rng, damping=damp, loop_gain=spec.loop_gain,
                   pluck_pos=pluck, noise_mix=spec.noise_mix * dyn.noise_mult,
                   noise_cutoff=spec.noise_cutoff, delay_trim=delay_trim,
                   contact=contact)

    mix = main.copy()
    for i, sym in enumerate(spec.sympathetics):
        # Simpatik tor asosiy tordan kuchsiz quvvatlanadi va o'z chastotasida
        # tebranadi — cholg'uga "quyruq" va jarang qo'shadi.
        drive = main * sym.coupling
        sig = _string(f0 * sym.ratio, dur, np.random.default_rng(seed + 101 + i),
                      damping=min(0.62, damp * sym.damping_mult),
                      loop_gain=min(0.9995, spec.loop_gain),
                      pluck_pos=pluck, noise_mix=0.0,
                      noise_cutoff=spec.noise_cutoff, drive=drive,
                      contact=contact)
        mix += sig * sym.gain

    y = _body(mix, spec)

    fade = int(FS * 0.12)
    y[-fade:] *= np.linspace(1, 0, fade)

    # Qatlamlar bir xil cho'qqiga normallanmaydi: yumshoq ijro jimroq
    # eshitilishi kerak. Spektr farqi modeldan, balandlik farqi shu yerdan.
    peak = np.max(np.abs(y))
    if peak > 0:
        y = y / peak * dyn.peak
    return y.astype(np.float32)


# ───────────────────────────── Cholg'ular ─────────────────────────────

DUTOR = StringSpec(
    name="dutor",
    dur=2.6,
    pluck_pos=0.22,        # barmoq o'rtaroqda tortadi
    damping_base=0.42,     # ipak tor — yuqori garmonikalar tez so'nadi
    damping_exp=0.5,
    loop_gain=0.9965,
    contact_scale=2.4,     # barmoq keng tegadi
    noise_mix=0.08,        # barmoq — kuchsiz tegish shovqini
    noise_cutoff=1800,
    highpass=130,          # kichik yog'och korpus
    lowpass=5200,
    body=(
        (250, 1.2, 5.0),    # havo (Helmholtz) rezonansi
        (430, 1.6, 3.5),    # yupqa qopqoq rezonansi
        (1200, 1.1, 4.0),   # "dimog'i" formanti — dutorning belgisi
        (2600, 2.0, -3.0),  # o'tkirlikni yumshatish
    ),
    sympathetics=(
        Sympathetic(ratio=0.75, coupling=0.045, gain=0.35),
    ),
)

RUBOB = StringSpec(
    name="rubob",
    dur=3.4,               # metall tor uzoqroq jaranglaydi
    pluck_pos=0.12,        # nokka ko'prikka yaqin uradi -> yorqinroq
    damping_base=0.20,     # metall tor — yuqori garmonikalar saqlanadi
    damping_exp=0.42,
    loop_gain=0.9986,      # uzun so'nish
    contact_scale=1.0,     # nokka — deyarli nuqtaviy tegish
    noise_mix=0.20,        # nokka — kuchli va o'tkir tegish shovqini
    noise_cutoff=6000,
    highpass=150,          # kichik kosa
    lowpass=9000,          # metall tor yorqin
    body=(
        (320, 1.0, 4.5),    # kosaning havo rezonansi
        (800, 0.9, 3.0),    # teri qopqoq — keng va past Q
        (2000, 1.3, 3.5),   # metall jarangi
        (4200, 1.8, 2.0),   # nokka zarbining yorqinligi
    ),
    sympathetics=(
        # Rubobda bir nechta simpatik tor bor — jarangli "shleyf" shundan
        Sympathetic(ratio=1.002, coupling=0.030, gain=0.22, damping_mult=1.1),
        Sympathetic(ratio=1.500, coupling=0.022, gain=0.16, damping_mult=1.2),
        Sympathetic(ratio=0.750, coupling=0.018, gain=0.14, damping_mult=1.2),
    ),
)

SPECS = {"dutor": DUTOR, "rubob": RUBOB}
