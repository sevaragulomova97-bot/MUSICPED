import { type InstrumentKind } from "@/lib/domain/instruments";

/**
 * Namuna banki — audio namunalarining ro'yxati va ular haqidagi ma'lumot.
 *
 * Bank `public/audio/<papka>/bank.json` da turadi va **ma'lumot** sifatida
 * o'qiladi, kodda qotirilmaydi. Sabab oddiy: haqiqiy cholg'u yozuvlari
 * qo'lga kirganda ularni qo'shish uchun kodni emas, faqat papkani va shu
 * faylni almashtirish kerak bo'ladi.
 *
 * Bank uch o'lchov bo'yicha quriladi:
 *
 *  1. **Balandlik** — har bir nota uchun alohida namuna. Namunani cho'zish
 *     tovush balandligi bilan birga korpus rezonanslarini ham suradi,
 *     shuning uchun cho'zish qancha kam bo'lsa, shuncha yaxshi.
 *  2. **Ijro kuchi** — bir nechta qatlam. Kuchli ijro faqat balandroq
 *     emas, **yorqinroq** ham bo'ladi; buni balandlikni oshirish bilan
 *     taqlid qilib bo'lmaydi.
 *  3. **Variant** — bitta zarbning bir nechta ijrosi. Zarbli cholg'uda
 *     bitta namunani qayta-qayta chalish darhol mexanik eshitiladi.
 *
 * Bu fayl `"use client"` emas va brauzer API siga tegmaydi: tanlov
 * qoidalari sof funksiya bo'lib, test bilan to'liq qoplanadi.
 */

/**
 * Bankning kelib chiqishi — interfeysda ham ko'rsatiladi.
 *
 *  • `yozuv` — aynan shu cholg'uning haqiqiy yozuvi;
 *  • `qarindosh` — boshqa, lekin akustik jihatdan yaqin cholg'uning
 *    haqiqiy yozuvi (masalan doira uchun ramkali baraban);
 *  • `model` — fizik model, yozuv emas.
 *
 * Uchinchi qiymat ataylab kiritilgan: erkin litsenziyali o'zbek
 * cholg'ulari yozuvlari topilmagani uchun qarindosh cholg'u yozuvi
 * ishlatiladi, va uni «haqiqiy dutor yozuvi» deb ko'rsatish mumkin emas.
 */
export type BankTuri = "yozuv" | "qarindosh" | "model";

export type KuchQatlami = {
  id: string;
  nom: string;
  /** 0–1 — shu qatlam qaysi ijro kuchiga mos keladi */
  velocity: number;
};

export type BankNamuna = {
  fayl: string;
  /** Torli/klavishli cholg'ularda — nota nomi ("A3") */
  nota?: string;
  /** Asosiy chastota, Gts */
  f0?: number;
  /** Zarbli cholg'ularda — zarb nomi ("bum") */
  zarb?: string;
  registr: string;
  kuch: string;
  variant: number;
  /** Soniya */
  davomiylik: number;
  loop: { boshi: number; oxiri: number } | null;
  /**
   * Namuna qanday hosil bo'lgani: `yozuv` — to'g'ridan-to'g'ri yozuvdan,
   * `filtr` — mavjud yozuvdan filtr bilan olingan.
   *
   * Ijro kuchining har bir darajasi uchun alohida yozuv har doim ham
   * mavjud bo'lmaydi. Yo'q joyda filtr ishlatiladi, lekin buni yashirish
   * noto'g'ri bo'lardi: bank har bir namuna uchun ochiq aytadi.
   */
  hosil?: "yozuv" | "filtr";
};

export type SampleBank = {
  cholgu: InstrumentKind;
  nom: string;
  tur: BankTuri;
  turiIzoh: string;
  manba: string;
  litsenziya: string;
  sampleRate: number;
  kuchlar: KuchQatlami[];
  zarblar: string[];
  namunalar: BankNamuna[];
};

/* ───────────────────────── Nota nomlari ───────────────────────── */

const HARFLAR: Record<string, number> = {
  C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5,
  "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11,
};

/**
 * Nota nomini MIDI raqamiga o'giradi.
 *
 * Diyez ham, bemol ham qabul qilinadi: kontent fayllarida «Gb4», Tone.js
 * misollarida esa «F#4» uchraydi va ikkalasi bitta tovush.
 */
export function notaMidi(note: string): number | null {
  const m = /^([A-G][#b]?)(-?\d+)$/.exec(note.trim());
  if (!m) return null;
  const harf = HARFLAR[m[1]];
  if (harf === undefined) return null;
  return (Number(m[2]) + 1) * 12 + harf;
}

/** Ikki nota orasidagi tezlik nisbati (namunani cho'zish koeffitsiyenti). */
export function tezlikNisbati(fromMidi: number, toMidi: number): number {
  return 2 ** ((toMidi - fromMidi) / 12);
}

/* ───────────────────────── Bankni o'qish ───────────────────────── */

function xato(nima: string): never {
  throw new Error(`Namuna banki noto'g'ri: ${nima}`);
}

function matn(v: unknown, nima: string): string {
  if (typeof v !== "string" || !v.trim()) xato(nima);
  return v;
}

function son(v: unknown, nima: string): number {
  if (typeof v !== "number" || !Number.isFinite(v)) xato(nima);
  return v;
}

/**
 * JSON ni tekshirib bankka aylantiradi.
 *
 * Tekshiruv qattiq: litsenziya va manba ham **majburiy**. Bu shunchaki
 * rasmiyatchilik emas — audio namunaning kelib chiqishi noma'lum bo'lsa,
 * uni saytga qo'yib bo'lmaydi, shuning uchun bank uni e'lon qilishga
 * majbur.
 */
export function parseBank(raw: unknown): SampleBank {
  if (!raw || typeof raw !== "object") xato("obyekt emas");
  const o = raw as Record<string, unknown>;

  const tur = matn(o.tur, "«tur» yo'q");
  if (tur !== "yozuv" && tur !== "qarindosh" && tur !== "model") {
    xato(`«tur» faqat «yozuv», «qarindosh» yoki «model» bo'ladi, kelgani: ${tur}`);
  }

  const kuchlarRaw = Array.isArray(o.kuchlar) ? o.kuchlar : xato("«kuchlar» ro'yxat emas");
  if (!kuchlarRaw.length) xato("kuch qatlamlari yo'q");
  const kuchlar: KuchQatlami[] = kuchlarRaw.map((k) => {
    const kk = k as Record<string, unknown>;
    return {
      id: matn(kk.id, "kuch qatlamida «id» yo'q"),
      nom: matn(kk.nom, "kuch qatlamida «nom» yo'q"),
      velocity: son(kk.velocity, "kuch qatlamida «velocity» yo'q"),
    };
  });

  const namunalarRaw = Array.isArray(o.namunalar)
    ? o.namunalar
    : xato("«namunalar» ro'yxat emas");
  if (!namunalarRaw.length) xato("namunalar yo'q");

  const kuchIdlari = new Set(kuchlar.map((k) => k.id));
  const namunalar: BankNamuna[] = namunalarRaw.map((n) => {
    const nn = n as Record<string, unknown>;
    const kuch = matn(nn.kuch, "namunada «kuch» yo'q");
    if (!kuchIdlari.has(kuch)) xato(`namunada noma'lum kuch qatlami: ${kuch}`);
    const nota = typeof nn.nota === "string" ? nn.nota : undefined;
    const zarb = typeof nn.zarb === "string" ? nn.zarb : undefined;
    if (!nota && !zarb) xato("namunada «nota» ham, «zarb» ham yo'q");
    if (nota && notaMidi(nota) === null) xato(`nota nomi tushunarsiz: ${nota}`);
    return {
      fayl: matn(nn.fayl, "namunada «fayl» yo'q"),
      nota,
      f0: typeof nn.f0 === "number" ? nn.f0 : undefined,
      zarb,
      registr: matn(nn.registr, "namunada «registr» yo'q"),
      kuch,
      variant: son(nn.variant, "namunada «variant» yo'q"),
      davomiylik: son(nn.davomiylik, "namunada «davomiylik» yo'q"),
      loop: (nn.loop as BankNamuna["loop"]) ?? null,
      hosil: nn.hosil === "filtr" ? "filtr" : "yozuv",
    };
  });

  return {
    cholgu: matn(o.cholgu, "«cholgu» yo'q") as InstrumentKind,
    nom: matn(o.nom, "«nom» yo'q"),
    tur,
    turiIzoh: matn(o.turi_izoh ?? o.turiIzoh, "«turi_izoh» yo'q"),
    manba: matn(o.manba, "«manba» yo'q"),
    litsenziya: matn(o.litsenziya, "«litsenziya» yo'q"),
    sampleRate: son(o.sampleRate, "«sampleRate» yo'q"),
    kuchlar,
    zarblar: Array.isArray(o.zarblar) ? (o.zarblar as string[]) : [],
    namunalar,
  };
}

/* ───────────────────────── Namuna tanlash ───────────────────────── */

/**
 * Ijro kuchiga eng mos qatlamni tanlaydi.
 *
 * «Eng yaqin» qoidasi ishlatiladi, «ostidagi eng kattasi» emas: qatlamlar
 * orasidagi masofa katta (0,35 / 0,70 / 1,00), shuning uchun 0,69 ni
 * yumshoq qatlamga tushirish sezilarli xato bo'lardi.
 */
export function kuchQatlami(bank: SampleBank, velocity: number): KuchQatlami {
  let eng = bank.kuchlar[0];
  let farq = Math.abs(eng.velocity - velocity);
  for (const k of bank.kuchlar) {
    const d = Math.abs(k.velocity - velocity);
    if (d < farq) {
      eng = k;
      farq = d;
    }
  }
  return eng;
}

export type Tanlov = {
  namuna: BankNamuna;
  /** Namunani qancha cho'zish kerak (1 = cho'zilmaydi) */
  tezlik: number;
  /**
   * Tanlangan namuna qaysi kuch qatlamidan olingani.
   *
   * Dvigatel balandlikni shu qatlamga **nisbatan** hisoblaydi:
   * `velocity / qatlam.velocity`. Shu sababli ijro kuchi qatlamlar
   * orasida ham uzluksiz o'zgaradi — aks holda cholg'uda atigi uch
   * xil balandlik bo'lib qolardi.
   */
  qatlam: KuchQatlami;
};

/**
 * Nota uchun namuna tanlaydi.
 *
 * `mavjud` — hozir xotiraga yuklangan fayllar. Dvigatel qatlamlarni
 * ketma-ket yuklaydi, shuning uchun kerakli qatlam hali kelmagan bo'lishi
 * mumkin; bunday holatda jim qolish o'rniga boshqa qatlamdagi namuna
 * olinadi va balandlik bilan tuzatiladi. Talaba kutib o'tirmaydi.
 */
export function notaTanlovi(
  bank: SampleBank,
  nota: string,
  velocity: number,
  mavjud?: ReadonlySet<string>,
): Tanlov | null {
  const midi = notaMidi(nota);
  if (midi === null) return null;

  const kerak = kuchQatlami(bank, velocity);
  const tayyor = (n: BankNamuna) => !mavjud || mavjud.has(n.fayl);

  const nomzodlar = bank.namunalar.filter((n) => n.nota && tayyor(n));
  if (!nomzodlar.length) return null;

  // Avval balandlik: cho'zish eng kam bo'lgan namuna. Keyin shu balandlik
  // ichida kerakli kuch qatlami.
  let eng: BankNamuna | null = null;
  let engBaho = Infinity;
  for (const n of nomzodlar) {
    const nMidi = notaMidi(n.nota as string);
    if (nMidi === null) continue;
    // Cho'zish — asosiy mezon (yarim ton = 1 ball), qatlam farqi esa
    // undan ancha arzon (to'liq qatlam farqi = 0,4 ball).
    const baho = Math.abs(nMidi - midi) + Math.abs(
      bank.kuchlar.findIndex((k) => k.id === n.kuch)
      - bank.kuchlar.findIndex((k) => k.id === kerak.id),
    ) * 0.4;
    if (baho < engBaho) {
      eng = n;
      engBaho = baho;
    }
  }
  if (!eng) return null;

  const engMidi = notaMidi(eng.nota as string) as number;
  return {
    namuna: eng,
    tezlik: tezlikNisbati(engMidi, midi),
    qatlam: bank.kuchlar.find((k) => k.id === eng.kuch) ?? kerak,
  };
}

/**
 * Zarb uchun namuna tanlaydi va variantlarni navbat bilan beradi.
 *
 * `navbat` — shu zarb uchun necha marta chalinganini sanab boradigan
 * raqam. Variantni tasodifiy tanlash yomonroq: tasodif ketma-ket ikki
 * marta bitta variantni berib qo'yishi mumkin, aynan shunda takror
 * eshitiladi.
 */
export function zarbTanlovi(
  bank: SampleBank,
  zarb: string,
  velocity: number,
  navbat: number,
  mavjud?: ReadonlySet<string>,
): Tanlov | null {
  const kerak = kuchQatlami(bank, velocity);
  const tayyor = (n: BankNamuna) => !mavjud || mavjud.has(n.fayl);

  const shuZarb = bank.namunalar.filter((n) => n.zarb === zarb && tayyor(n));
  if (!shuZarb.length) return null;

  let qatlam = shuZarb.filter((n) => n.kuch === kerak.id);
  let olinganKuch = kerak;
  if (!qatlam.length) {
    // Kerakli qatlam hali yuklanmagan — eng yaqin yuklanganini olamiz.
    const bor = bank.kuchlar.filter((k) => shuZarb.some((n) => n.kuch === k.id));
    olinganKuch = bor.reduce((a, b) =>
      Math.abs(a.velocity - velocity) <= Math.abs(b.velocity - velocity) ? a : b,
    );
    qatlam = shuZarb.filter((n) => n.kuch === olinganKuch.id);
  }

  const tartib = [...qatlam].sort((a, b) => a.variant - b.variant);
  return {
    namuna: tartib[navbat % tartib.length],
    tezlik: 1,
    qatlam: olinganKuch,
  };
}

/** Birinchi yuklanadigan qatlam — o'rtacha kuch (eng ko'p ishlatiladi). */
export function asosiyQatlam(bank: SampleBank): KuchQatlami {
  return kuchQatlami(bank, 0.7);
}
