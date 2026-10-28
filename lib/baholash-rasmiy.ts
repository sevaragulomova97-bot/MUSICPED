/**
 * Fan dasturidagi **rasmiy** baholash tizimi.
 *
 * Platformaning o'z bali (topshiriqlar o'rtachasi) o'qish jarayonini
 * kuzatish uchun. Rasmiy baho esa boshqa narsa: u JN/ON/YaN bo'yicha
 * yig'iladi, har birining **saralash** chegarasi bor va ular
 * bir-birini qoplamaydi. Universitetga topshiriladigan raqam shu.
 *
 * Qoidalar `docs/` dagi fan dasturidan olingan va bu yerda bitta
 * joyda turadi — hisob sahifalar bo'ylab tarqalib ketsa, dastur
 * o'zgarganda qayerni tuzatish kerakligi noma'lum bo'lib qoladi.
 */

export type NazoratKodi = "JN" | "ON" | "YaN";

export type NazoratTuri = {
  kod: NazoratKodi;
  nom: string;
  /** Maksimal ball */
  max: number;
  /** Saralash balli — shundan past bo'lsa fan o'zlashtirilmagan */
  saralash: number;
  /** Dasturda ko'rsatilgan baholash vositalari */
  vosita: string;
};

export const NAZORATLAR: NazoratTuri[] = [
  {
    kod: "JN",
    nom: "Joriy nazorat",
    max: 30,
    saralash: 18,
    vosita: "Amaliy / seminar mashg'ulotlari, taqdimot tayyorlash",
  },
  {
    kod: "ON",
    nom: "Oraliq nazorat",
    max: 20,
    saralash: 12,
    vosita: "Oraliq nazorat yozma ish / test",
  },
  {
    kod: "YaN",
    nom: "Yakuniy nazorat",
    max: 50,
    saralash: 30,
    vosita: "Yozma ish / test sinovi",
  },
];

export const NAZORAT_BY_KOD = new Map(NAZORATLAR.map((n) => [n.kod, n]));

/** Jami maksimal ball — dasturda 100. */
export const JAMI_MAX = NAZORATLAR.reduce((s, n) => s + n.max, 0);

/* ───────────────────────── Rubrikalar ───────────────────────── */

export type RubrikaMezoni = {
  nom: string;
  max: number;
  /** Daraja tavsiflari — dasturdagi to'rt ustun */
  darajalar: {
    yuqori: string;
    yetarli: string;
    minimal: string;
    erishilmagan: string;
  };
};

/** Joriy nazorat rubrikasi — 30 ball. */
export const JN_RUBRIKA: RubrikaMezoni[] = [
  {
    nom: "Nazariy bilim",
    max: 10,
    darajalar: {
      yuqori: "10-9: Nazariy bilim mukammal",
      yetarli: "8-7: Nazariy bilimga ega, yetarli",
      minimal: "6-4: Nazariy bilimga deyarli ega, xato fikrlar mavjud",
      erishilmagan: "3-0: Nazariy bilimga ega emas",
    },
  },
  {
    nom: "Badiiy ijro va pedagogik nutq",
    max: 10,
    darajalar: {
      yuqori: "10-9: Asarni chitka qila oladi, pedagogik nutqi ravon va tushunarli",
      yetarli: "8-7: Asarni chitka qila oladi, so'zlarini jo'r bo'lib kuylashda adashib ketadi",
      minimal: "6-4: Chitkani solo tarzda ijro etadi",
      erishilmagan: "3-0: Chitka qila olmaydi, so'zlarini yodlay olmagan, pedagogik nutqi mavjud emas",
    },
  },
  {
    nom: "Mustaqil ta'lim topshirig'i",
    max: 10,
    darajalar: {
      yuqori: "10-9: Berilgan topshiriqni mukammal bajara oladi",
      yetarli: "8-7: Berilgan topshiriqni deyarli bajara oladi",
      minimal: "6-4: Berilgan topshiriqni e'tiborsiz bajaradi",
      erishilmagan: "3-0: Berilgan topshiriqni bajarmaydi",
    },
  },
];

/** Oraliq nazorat rubrikasi — 20 ball. */
export const ON_RUBRIKA: RubrikaMezoni[] = [
  {
    nom: "Maktab repertuari ijrosi",
    max: 10,
    darajalar: {
      yuqori: "10-9: O'tilgan maktab repertuarini yoddan chala va kuylay oladi; kurs ishini Nizom asosida mukammal va to'liq yozadi",
      yetarli: "8-7: O'tilgan maktab repertuari ijro eta oladi, qo'shiqni kuylashda adashadi; kurs ishini Nizom asosida yozadi",
      minimal: "6-4: O'tilgan maktab repertuarini yod olmagan, notaga qarab ijro eta oladi; kurs ishi Nizom talablariga rioya etilmagan",
      erishilmagan: "3-0: O'tilgan maktab repertuarini bilmaydi, chala olmaydi va kuylamaydi; kurs ishini yozmagan",
    },
  },
  {
    nom: "Kurs ishi va asarni taqdimot asosidagi tahlili",
    max: 10,
    darajalar: {
      yuqori: "10-9: Taqdimot asosidagi tahlili mukammal; kurs ishini Nizom asosida yozadi",
      yetarli: "8-7: Taqdimot asosidagi tahlili yaxshi",
      minimal: "6-4: Taqdimot asosidagi tahlili qoniqarli",
      erishilmagan: "3-0: Taqdimot asosidagi tahlili qoniqarsiz",
    },
  },
];

/** Yakuniy nazorat — test, 50 ball. */
export const YAN_RUBRIKA: RubrikaMezoni[] = [
  {
    nom: "Olingan nazariy va amaliy bilimlar yuzasidan test topshirig'ini bajardi",
    max: 50,
    darajalar: {
      yuqori: "50-46: 2 ta xato uchun",
      yetarli: "44-40: 4 ta xato uchun",
      minimal: "38-30: 10 ta xato uchun",
      erishilmagan: "28-0: 10 tadan ko'p bo'lgan xato uchun",
    },
  },
];

export const RUBRIKA_BY_NAZORAT: Record<NazoratKodi, RubrikaMezoni[]> = {
  JN: JN_RUBRIKA,
  ON: ON_RUBRIKA,
  YaN: YAN_RUBRIKA,
};

/* ───────────────────────── Yakuniy baho ───────────────────────── */

export type Baho = "A'lo" | "Yaxshi" | "Qoniqarli" | "Qoniqarsiz";

export type BahoDarajasi = {
  baho: Baho;
  /** Quyi chegara (shu ball va undan yuqori) */
  min: number;
  tavsif: string;
};

export const BAHO_JADVALI: BahoDarajasi[] = [
  {
    baho: "A'lo",
    min: 90,
    tavsif:
      "Ta'lim natijalarini yuqori darajada egallagan; bilimni mustaqil tahlil qiladi va yangi vaziyatlarda qo'llaydi.",
  },
  {
    baho: "Yaxshi",
    min: 70,
    tavsif:
      "Asosiy ta'lim natijalarini barqaror egallagan; bilim va ko'nikmalarni amaliy vaziyatlarda qo'llaydi.",
  },
  {
    baho: "Qoniqarli",
    min: 60,
    tavsif:
      "Minimal talab etiladigan ta'lim natijalariga erishgan, biroq tahlil, asoslash yoki mustaqil qo'llashda cheklovlar mavjud.",
  },
  {
    baho: "Qoniqarsiz",
    min: 0,
    tavsif: "Minimal ta'lim natijalariga yetarli darajada erishmagan.",
  },
];

export type Ballar = Partial<Record<NazoratKodi, number>>;

export type RasmiyNatija = {
  /** Har bir nazorat bo'yicha qo'yilgan ball */
  ballar: Record<NazoratKodi, number>;
  jami: number;
  baho: Baho;
  /** Saralashdan o'tmagan nazoratlar */
  otmagan: NazoratKodi[];
  /** Fan o'zlashtirildimi */
  ozlashtirdi: boolean;
  /** Hali qo'yilmagan nazoratlar */
  qoyilmagan: NazoratKodi[];
};

/** Ballni nazorat chegarasida ushlaydi. */
function chegarala(kod: NazoratKodi, ball: number): number {
  const n = NAZORAT_BY_KOD.get(kod);
  const max = n?.max ?? 0;
  if (!Number.isFinite(ball)) return 0;
  return Math.max(0, Math.min(max, ball));
}

export function bahoniAniqla(jami: number): Baho {
  for (const d of BAHO_JADVALI) if (jami >= d.min) return d.baho;
  return "Qoniqarsiz";
}

/**
 * Rasmiy natijani hisoblaydi.
 *
 * **Saralash alohida qo'llaniladi:** dasturda ochiq yozilgan — bir
 * nazorat turidagi yetishmagan ball boshqa nazorat turidagi yuqori
 * ball hisobiga qoplanmaydi. Ya'ni jami 75 ball to'plagan, lekin
 * yakuniy nazoratdan 30 ga yetmagan talaba fanni o'zlashtirmagan
 * hisoblanadi. Buni o'rtacha bilan hisoblab bo'lmaydi.
 */
export function rasmiyNatija(kirish: Ballar): RasmiyNatija {
  const ballar = {} as Record<NazoratKodi, number>;
  const qoyilmagan: NazoratKodi[] = [];
  const otmagan: NazoratKodi[] = [];

  for (const n of NAZORATLAR) {
    const xom = kirish[n.kod];
    if (xom === undefined || xom === null) {
      qoyilmagan.push(n.kod);
      ballar[n.kod] = 0;
      continue;
    }
    const ball = chegarala(n.kod, xom);
    ballar[n.kod] = ball;
    if (ball < n.saralash) otmagan.push(n.kod);
  }

  const jami = NAZORATLAR.reduce((s, n) => s + ballar[n.kod], 0);
  return {
    ballar,
    jami: Math.round(jami * 10) / 10,
    baho: bahoniAniqla(jami),
    otmagan,
    // Hamma nazorat qo'yilgan va hammasi saralashdan o'tgan bo'lsa.
    ozlashtirdi: qoyilmagan.length === 0 && otmagan.length === 0,
    qoyilmagan,
  };
}

/** Rubrika mezonlari yig'indisi nazorat maksimaliga teng bo'lishi kerak. */
export function rubrikaMaxJami(kod: NazoratKodi): number {
  return RUBRIKA_BY_NAZORAT[kod].reduce((s, m) => s + m.max, 0);
}
