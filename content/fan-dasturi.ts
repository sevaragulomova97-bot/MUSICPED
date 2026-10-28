/**
 * «Musiqa o'qitish metodikasi. Maktab repertuari» fanining o'quv dasturi.
 *
 * Manba: Qo'qon davlat universiteti, San'at va sport fakulteti, Musiqa
 * nazariyasi kafedrasi. Fan kodi `MO'Met.MR13409`, 2026/2027 o'quv yili,
 * 3–4 semestr, 9 ECTS.
 *
 * Bu fayl — **dasturning o'zi**, qayta yozilgan sharhi emas: mavzular,
 * soatlar, ta'lim natijalari va baholash mezonlari hujjatdagidek
 * saqlanadi. Darslar, topshiriqlar va baholash shu ma'lumotga
 * tayanadi, ya'ni dastur o'zgarsa bitta joyda tuzatiladi.
 *
 * Nega alohida fayl: dastur rasmiy hujjat va uni o'qituvchi tekshiradi.
 * Dars matnlari orasiga sochib yuborilsa, nimaga amal qilinayotganini
 * tekshirib bo'lmaydi.
 */

/** Mashg'ulot turi — dasturdagi bo'linish. */
export type MashgulotTuri = "maruza" | "amaliy" | "kurs-ishi" | "mustaqil";

export const MASHGULOT_NOMI: Record<MashgulotTuri, string> = {
  maruza: "Ma'ruza",
  amaliy: "Amaliy mashg'ulot",
  "kurs-ishi": "Kurs ishi",
  mustaqil: "Mustaqil ta'lim",
};

export type DasturMavzusi = {
  /** Dasturdagi kod: M1, A1, KI1, MT1 */
  kod: string;
  tur: MashgulotTuri;
  sarlavha: string;
  /** Dasturda yozilgan mazmun */
  mazmun?: string;
  soat: number;
  /** Adabiyot ro'yxatidagi raqamlar, masalan [3, 4, 7] */
  adabiyot?: number[];
};

/* ───────────────────────── Fan ma'lumotlari ───────────────────────── */

export const FAN = {
  kod: "MO'Met.MR13409",
  nom: "Musiqa o'qitish metodikasi. Maktab repertuari",
  oquvYili: "2026/2027",
  semestr: "3-4",
  ects: 9,
  tili: "O'zbek",
  turi: "Majburiy",
  yonalish: "60110600 — Musiqa ta'limi",
  haftadagiSoat: 10,
  soat: {
    jami: 270,
    auditoriya: 120,
    maruza: 60,
    amaliy: 60,
    laboratoriya: 0,
    seminar: 0,
    kursIshi: 30,
    mustaqil: 120,
  },
  maqsad:
    "«Musiqiy ta'lim» ta'lim yo'nalishi talabalarini musiqa madaniyati " +
    "o'qituvchisi amaliy faoliyatiga tayyorlash. Fan doirasida repertuar " +
    "tanlash va ijro mahoratini shakllantiradi; talabalarda maktab " +
    "repertuarini tanlash, tahlil qilish va ijro etish malakalarini " +
    "rivojlantiradi hamda musiqa darslarini samarali tashkil etishga " +
    "tayyorlaydi.",
} as const;

/* ───────────────────────── Ta'lim natijalari ───────────────────────── */

export type TaLimNatijasi = {
  kod: string;
  matn: string;
  tur: "kompetensiya" | "konikma";
};

export const TALIM_NATIJALARI: TaLimNatijasi[] = [
  {
    kod: "TN1",
    tur: "kompetensiya",
    matn:
      "«Musiqa o'qitish metodikasi. Maktab repertuari» o'qitishda zamonaviy " +
      "pedagogik yondashuvlar, innovatsion ta'lim texnologiyalari hamda " +
      "interfaol metodlarni qo'llash uchun zarur bo'ladigan nazariy bilim va " +
      "amaliy ko'nikmalarni ega bo'ladi",
  },
  {
    kod: "TN2",
    tur: "kompetensiya",
    matn:
      "Musiqa darslari va maktab repertuarini o'qitish jarayonida zamonaviy " +
      "ta'lim vositalari, multimedia texnologiyalari, axborot-kommunikatsiya " +
      "texnologiyalari hamda raqamli ta'lim platformalaridan samarali " +
      "foydalanishni biladi",
  },
  {
    kod: "TN3",
    tur: "kompetensiya",
    matn:
      "Umumiy o'rta ta'lim maktablari uchun musiqa darslarini va repertuar " +
      "asosidagi mashg'ulotlarni zamonaviy pedagogik talablar asosida " +
      "rejalashtirish, tashkil etish, boshqarish hamda o'quvchilarning yosh " +
      "va individual xususiyatlarini hisobga olgan holda samarali olib " +
      "borishni biladi",
  },
  {
    kod: "TN4",
    tur: "kompetensiya",
    matn:
      "Maktab repertuarini tanlash, o'rgatish va ijro etish metodikasi, " +
      "o'quvchilarda musiqiy madaniyat, estetik did, ijrochilik ko'nikmalari " +
      "hamda ijodiy qobiliyatlarni rivojlantirishga xizmat qiluvchi " +
      "zamonaviy metodlar, innovatsion pedagogik yondashuvlar va ta'lim " +
      "texnologiyalarini amaliy faoliyatda qo'llashni bilishi va ulardan " +
      "samarali foydalana oladi",
  },
  {
    kod: "TN5",
    tur: "konikma",
    matn:
      "«Musiqa o'qitish metodikasi. Maktab repertuari» asosida " +
      "o'quvchilarning musiqiy qobiliyatlari, estetik didi, ijodiy tafakkuri " +
      "hamda ijrochilik malakalarini rivojlantirish metodlarini amaliyotda " +
      "qo'llay oladi",
  },
  {
    kod: "TN6",
    tur: "konikma",
    matn:
      "«Musiqa o'qitish metodikasi. Maktab repertuari» fanini o'qitishda " +
      "zamonaviy pedagogik, didaktik va metodik talablarni amaliy faoliyatda " +
      "samarali qo'llay olishi, interfaol metodlar hamda innovatsion ta'lim " +
      "texnologiyalaridan foydalana oladi",
  },
  {
    kod: "TN7",
    tur: "konikma",
    matn:
      "Umumiy o'rta ta'lim maktablari uchun repertuar tanlash, vokal-xor va " +
      "musiqiy asarlarni o'rgatish, ularni tahlil qilish, dars va sinfdan " +
      "tashqari musiqiy mashg'ulotlarni samarali tashkil etish hamda " +
      "o'quv-uslubiy resurslardan oqilona foydalana oladi",
  },
  {
    kod: "TN8",
    tur: "konikma",
    matn:
      "Audio va video materiallar, darsliklar, taqdimotlar, internet " +
      "resurslari, raqamli ta'lim platformalari hamda o'quv-uslubiy " +
      "materiallardan samarali foydalana oladi",
  },
];

export const TN_BY_KOD = new Map(TALIM_NATIJALARI.map((t) => [t.kod, t]));

/* ───────────────────────── Ma'ruzalar (60 soat) ───────────────────────── */

export const MARUZALAR: DasturMavzusi[] = [
  {
    kod: "M1",
    tur: "maruza",
    soat: 2,
    adabiyot: [1, 3],
    sarlavha:
      "Musiqa o'qitish metodikasi va maktab repertuari fanining predmeti, maqsadi va vazifalari",
    mazmun:
      "Musiqa o'qitish metodikasi va maktab repertuari fanining predmeti va obyekti. Fanning maqsadi va vazifalari. Musiqa pedagogikasi tizimida tutgan o'rni. Musiqa o'qitish metodikasining pedagogika, psixologiya va musiqa fanlari bilan aloqadorligi. Maktab repertuari tushunchasi va uning musiqa ta'limidagi ahamiyati.",
  },
  {
    kod: "M2",
    tur: "maruza",
    soat: 2,
    adabiyot: [1, 5],
    sarlavha: "Musiqa san'atining shaxs kamolotidagi o'rni va tarbiyaviy ahamiyati",
    mazmun:
      "Musiqa san'atining estetik mohiyati. Musiqaning shaxs ma'naviy kamolotidagi o'rni. Musiqa orqali estetik, axloqiy va vatanparvarlik tarbiyasini shakllantirish. Musiqa san'atining yosh avlod tarbiyasidagi pedagogik imkoniyatlari.",
  },
  {
    kod: "M3",
    tur: "maruza",
    soat: 2,
    adabiyot: [3, 4, 7],
    sarlavha: "Musiqa ta'limini o'rganish",
    mazmun:
      "Musiqa ta'limining maqsad va vazifalari, tamoyillari hamda mazmuni. Musiqiy bilim, ko'nikma va kompetensiyalarni shakllantirish usullari. Musiqa ta'limida zamonaviy pedagogik texnologiyalar va innovatsion yondashuvlardan foydalanish. Musiqa ta'limining pedagogika, psixologiya va musiqa fanlari bilan aloqadorligi.",
  },
  {
    kod: "M4",
    tur: "maruza",
    soat: 2,
    adabiyot: [3, 6],
    sarlavha:
      "Musiqa ta'limining me'yoriy-huquqiy asoslari. Davlat ta'lim standarti va o'quv dasturlari",
    mazmun:
      "Musiqa ta'limining me'yoriy-huquqiy hujjatlari. Davlat ta'lim standarti mazmuni. Namunaviy o'quv dasturlari va malaka talablari. O'quv rejalari hamda fan dasturlarini ishlab chiqish tamoyillari.",
  },
  {
    kod: "M5",
    tur: "maruza",
    soat: 2,
    adabiyot: [3, 6],
    sarlavha: "Musiqa madaniyati darsining tuzilishi, turlari va o'ziga xos xususiyatlari",
    mazmun:
      "Musiqa madaniyati darsining tarkibiy qismlari. Darsning turlari va shakllari. Musiqa darsining boshqa fanlardan farqli jihatlari. Integrallashgan musiqa darslarini tashkil etish.",
  },
  {
    kod: "M6",
    tur: "maruza",
    soat: 2,
    adabiyot: [2, 4, 6],
    sarlavha: "Ijodiy musiqiy mahorat",
    mazmun:
      "Ijodiy musiqiy mahoratning mohiyati, tarkibiy komponentlari va rivojlanish bosqichlari. Musiqiy ijodkorlik, ijrochilik va improvizatsiyaning o'zaro bog'liqligi. Bo'lajak musiqa o'qituvchilarida ijodiy musiqiy mahoratni rivojlantirish metodlari hamda zamonaviy pedagogik texnologiyalardan foydalanish. Ijodiy musiqiy faoliyatda milliy va jahon musiqa merosining o'rni.",
  },
  {
    kod: "M7",
    tur: "maruza",
    soat: 2,
    adabiyot: [1, 6, 7],
    sarlavha: "Musiqa ta'limida zamonaviy pedagogik texnologiyalar va interfaol metodlar",
    mazmun:
      "Innovatsion pedagogik texnologiyalar. Interfaol metodlar. Muammoli ta'lim, teskari sinf (Flipped Classroom), loyiha asosida ta'lim (Project-Based Learning), STEAM yondashuvi, gamifikatsiya, aralash ta'lim (Blended Learning) va sun'iy intellekt (AI) texnologiyalarining musiqa ta'limida qo'llanilishi.",
  },
  {
    kod: "M8",
    tur: "maruza",
    soat: 2,
    adabiyot: [1, 6, 8],
    sarlavha: "Musiqa ta'limida kompetensiyaviy yondashuv va integratsion ta'lim",
    mazmun:
      "Kompetensiyaviy yondashuvning mazmuni. Tayanch va fanga oid kompetensiyalar. Muammoli ta'lim, teskari sinf (Flipped Classroom), loyiha asosida ta'lim (Project-Based Learning), STEAM yondashuvi, gamifikatsiya, aralash ta'lim (Blended Learning) va sun'iy intellekt (AI) texnologiyalarining musiqa ta'limida qo'llanilishi.",
  },
  {
    kod: "M9",
    tur: "maruza",
    soat: 2,
    adabiyot: [4, 5],
    sarlavha: "Musiqa tinglash faoliyatini tashkil etish metodikasi",
    mazmun:
      "Musiqa tinglashning maqsadi va vazifalari. Musiqa tinglash bosqichlari. Musiqa asarlarini tanlash mezonlari. Tinglash madaniyatini shakllantirish metodlari.",
  },
  {
    kod: "M10",
    tur: "maruza",
    soat: 2,
    adabiyot: [4, 5],
    sarlavha:
      "Musiqa asarlarini idrok etish va musiqiy tafakkurni rivojlantirish metodikasi",
    mazmun:
      "Musiqiy idrok tushunchasi. Musiqiy tafakkurni rivojlantirish metodlari. Musiqiy tahlil elementlari. Musiqiy obraz va badiiy mazmunni anglash usullari.",
  },
  {
    kod: "M11",
    tur: "maruza",
    soat: 2,
    adabiyot: [4, 6, 7],
    sarlavha: "Vokal-xor malakalarini shakllantirish metodikasi",
    mazmun:
      "Vokal-xor faoliyatining maqsadi. Nafas olish texnikasi. Ovoz apparatini rivojlantirish. Ansambl va xor malakalarini shakllantirish metodlari.",
  },
  {
    kod: "M12",
    tur: "maruza",
    soat: 2,
    adabiyot: [4, 6],
    sarlavha: "Musiqa savodini o'qitish metodikasi",
    mazmun:
      "Nota yozuvi asoslari. Ritm va metr. Lad va tonallik. Musiqa savodi elementlarini o'qitishning zamonaviy metodlari.",
  },
  {
    kod: "M13",
    tur: "maruza",
    soat: 2,
    adabiyot: [4, 5],
    sarlavha: "Musiqiy ritmik harakatlar va ularni o'qitish metodikasi",
    mazmun:
      "Musiqiy ritmik harakatlarning pedagogik ahamiyati. Ritmika mashqlari. Harakat va musiqa uyg'unligi. Ritmik faoliyatni tashkil etish metodlari.",
  },
  {
    kod: "M14",
    tur: "maruza",
    soat: 2,
    adabiyot: [4, 5, 7],
    sarlavha: "Bolalar cholg'u asboblarida jo'r bo'lishni o'rgatish metodikasi",
    mazmun:
      "Bolalar cholg'u asboblarining turlari. Ansambl ijrochiligi. Jo'r bo'lish malakasini shakllantirish metodlari. Cholg'u jo'rligidan musiqa darsida foydalanish.",
  },
  {
    kod: "M15",
    tur: "maruza",
    soat: 2,
    adabiyot: [2, 6, 8],
    sarlavha:
      "Musiqa madaniyati darslarini rejalashtirish va ishlanmalar tayyorlash metodikasi",
    mazmun:
      "Taqvim-mavzu reja. Texnologik xarita. Dars ishlanmasining tarkibi. Dars samaradorligini baholash mezonlari.",
  },
  {
    kod: "M16",
    tur: "maruza",
    soat: 2,
    adabiyot: [1, 3, 4],
    sarlavha:
      "Musiqa o'qituvchisining maktab repertuari bilan ishlash kompetensiyalari va pedagogik mahorati",
    mazmun:
      "Musiqa o'qituvchisining kasbiy kompetensiyalari. Pedagogik edagog. Repertuar bilan ishlash tamoyillari. Musiqiy asarlarni tanlash va metodik tahlil qilish.",
  },
  {
    kod: "M17",
    tur: "maruza",
    soat: 2,
    adabiyot: [4, 5],
    sarlavha: "O'quvchilarning musiqiy qobiliyatlari va ularni rivojlantirish yo'llari",
    mazmun:
      "Musiqiy eshituv. Ritm sezgisi. Musiqiy xotira. Ijodkorlikni rivojlantirish metodlari. Individual yondashuv.",
  },
  {
    kod: "M18",
    tur: "maruza",
    soat: 2,
    adabiyot: [3, 4, 7],
    sarlavha: "Maktab repertuarini tanlashning pedagogik va badiiy mezonlari",
    mazmun:
      "Maktab repertuari tushunchasi. Repertuar tanlash mezonlari. Yosh xususiyatlari. Milliy va jahon musiqa namunalaridan foydalanish.",
  },
  {
    kod: "M19",
    tur: "maruza",
    soat: 2,
    adabiyot: [4, 5, 7],
    sarlavha:
      "Boshlang'ich va o'rta sinflar uchun maktab repertuari va uning metodik tahlili",
    mazmun:
      "Boshlang'ich va o'rta sinf repertuarining mazmuni. Repertuarni metodik tahlil qilish bosqichlari. Qo'shiqlarni o'qitish metodikasi.",
  },
];

/** 1–7-sinflar uchun repertuar tanlash ma'ruzalari (M20–M26). */
const SINF_MARUZALARI: DasturMavzusi[] = [20, 21, 22, 23, 24, 25, 26].map(
  (kod, i) => {
    const sinf = i + 1;
    return {
      kod: `M${kod}`,
      tur: "maruza" as const,
      soat: 2,
      adabiyot: sinf >= 5 ? [3, 4, 5, 7] : [3, 4, 5],
      sarlavha: `${sinf}-sinflar uchun maktab repertuarini tanlash va tahlil qilish metodikasi`,
      mazmun:
        `${sinf}-sinf o'quvchilarining umumiy pedagogik, psixologik va musiqiy ` +
        "tavsifnomasi. Musiqiy faoliyat turlari. Ijodiy topshiriqlar asosida " +
        "o'quvchilarning musiqiy taassurotlari va ijodiy qobiliyatlarini " +
        `rivojlantirish. DTS va o'quv dasturining mazmuni hamda talablari. ` +
        `${sinf}-sinfda musiqa ta'limining maqsadi, vazifalari va mazmuni.`,
    };
  },
);

MARUZALAR.push(
  ...SINF_MARUZALARI,
  {
    kod: "M27",
    tur: "maruza",
    soat: 2,
    adabiyot: [3, 6, 7],
    sarlavha:
      "Maktabda musiqiy to'garaklarni tashkil etishning maqsadi, vazifalari va shakllari",
    mazmun:
      "Musiqiy to'garaklarning turlari. Tashkil etish metodikasi. Rejalashtirish. Ommaviy musiqiy tadbirlarni tashkil qilish.",
  },
  {
    kod: "M28",
    tur: "maruza",
    soat: 2,
    adabiyot: [1, 3, 6],
    sarlavha: "O'zbekiston musiqa ta'limi tizimi",
    mazmun:
      "O'zbekiston Respublikasida musiqa ta'limining uzluksiz tizimi. Bolalar musiqa va san'at maktablari. Professional va oliy musiqa ta'limi. Milliy musiqa ta'limining rivojlanish istiqbollari.",
  },
  {
    kod: "M29",
    tur: "maruza",
    soat: 2,
    adabiyot: [1, 2, 5],
    sarlavha: "Dunyo musiqasi (Rossiya, Yaponiya, Shvetsariya)",
    mazmun:
      "Rossiya, Yaponiya va Shvetsariya musiqa ta'limining o'ziga xos xususiyatlari. D.Kabalevskiy, Z.Koday, K.Orf, E.Jak-Dalkroz pedagogik tizimlari. Xalqaro tajribalarni qiyosiy tahlil qilish.",
  },
  {
    kod: "M30",
    tur: "maruza",
    soat: 2,
    adabiyot: [2, 3, 6, 8],
    sarlavha:
      "Sinfdan va maktabdan tashqari musiqiy-ma'rifiy tadbirlarni tashkil etish metodikasi",
    mazmun:
      "Sinfdan tashqari musiqiy tarbiyaning maqsadi va vazifalari. Bayramlar, festivallar, tanlovlar, konsertlar va ijodiy uchrashuvlarni tashkil etish. Musiqiy-ma'rifiy loyihalarni rejalashtirish va amalga oshirish.",
  },
);

/* ───────────────────── Amaliy mashg'ulotlar (60 soat) ───────────────────── */

/**
 * Amaliy mashg'ulotdagi asar.
 *
 * **Diqqat:** bu yerda faqat asar haqidagi ma'lumot turadi — nomi,
 * mualliflari, sinfi va qaysi darslikdan olingani. Asarning nota matni
 * yoki audio yozuvi platformaga **qo'yilmaydi**: bular hozirgi zamon
 * mualliflarining asarlari va ularning huquqi himoyalangan. Talabada
 * darslik bor; platforma asarni emas, **uni o'rgatish metodikasini**
 * beradi.
 */
export type Asar = {
  /** Dasturdagi amaliy mashg'ulot kodi */
  kod: string;
  nom: string;
  /** She'r muallifi */
  sher?: string;
  /** Musiqa muallifi */
  musiqa?: string;
  /** Qaysi sinf darsligida; madhiya uchun yo'q */
  sinf?: number;
  turi: "muallif" | "xalq" | "madhiya";
  /** Dasturda ko'rsatilgan ta'lim metodi */
  metod: string;
};

const FC = "Flipped Classroom";

export const ASARLAR: Asar[] = [
  { kod: "A1", nom: "O'zbekiston Respublikasi Davlat madhiyasi", sher: "A.Oripov", musiqa: "M.Burhonov", turi: "madhiya", metod: FC },
  { kod: "A2", nom: "Maktabim", sher: "I.Muslim", musiqa: "F.Nazarov", sinf: 1, turi: "muallif", metod: FC },
  { kod: "A3", nom: "Alifbo", sher: "P.Mo'min", musiqa: "D.Omonullayeva", sinf: 1, turi: "muallif", metod: FC },
  { kod: "A4", nom: "O'zbekiston bayrog'i", sher: "I.Mirzo", musiqa: "M.Nurmatov", sinf: 1, turi: "muallif", metod: FC },
  { kod: "A5", nom: "Alla", sinf: 1, turi: "xalq", metod: FC },
  { kod: "A6", nom: "Vatanjonim-vatanim", sher: "P.Mo'min", musiqa: "D.Omonullayeva", sinf: 2, turi: "muallif", metod: FC },
  { kod: "A7", nom: "Sog'lom avlod qo'shig'i", sher: "T.Bahromov", musiqa: "Sh.Yormatov", sinf: 2, turi: "muallif", metod: FC },
  { kod: "A8", nom: "Obod vatanim", sher: "J.Jabborov", musiqa: "Sh.Yormatov", sinf: 3, turi: "muallif", metod: FC },
  { kod: "A9", nom: "Doira dum dum", sinf: 3, turi: "xalq", metod: FC },
  { kod: "A10", nom: "Tinchlik bo'lsin", sher: "H.Ahmedov", musiqa: "X.Hasanova", sinf: 3, turi: "muallif", metod: FC },
  { kod: "A11", nom: "Handalak", sher: "P.Mo'min", musiqa: "D.Omonullayeva", sinf: 4, turi: "muallif", metod: FC },
  { kod: "A12", nom: "Muzqaymoq", sher: "N.Qayumov", musiqa: "A.Mansurov", sinf: 4, turi: "muallif", metod: FC },
  { kod: "A13", nom: "Aka-singil", sinf: 4, turi: "xalq", metod: FC },
  { kod: "A14", nom: "Bizdan sizga kim kerak?", sher: "Y.Qurbonova", musiqa: "M.Nasimova", sinf: 4, turi: "muallif", metod: FC },
  { kod: "A15", nom: "Bayram qo'shig'i", sinf: 4, turi: "xalq", metod: FC },
  { kod: "A16", nom: "O'zbekiston Respublikasi Davlat madhiyasi", sher: "A.Oripov", musiqa: "M.Burhonov", turi: "madhiya", metod: FC },
  { kod: "A17", nom: "Aziz ustozlar", sher: "To'lqin", musiqa: "S.Bofoyev", sinf: 5, turi: "muallif", metod: FC },
  { kod: "A18", nom: "Otin kuz qo'shig'i", sher: "N.Nazrullayev", musiqa: "A.Mansurov", sinf: 5, turi: "muallif", metod: FC },
  { kod: "A19", nom: "Lazgi, Yallama yorim", sinf: 5, turi: "xalq", metod: FC },
  { kod: "A20", nom: "Barkamol avlod", sher: "I.Mirzo", musiqa: "I.Yuldoshev", sinf: 5, turi: "muallif", metod: FC },
  { kod: "A21", nom: "Bolalar", sher: "J.Jabborov", musiqa: "H.Rahimov", sinf: 6, turi: "muallif", metod: FC },
  { kod: "A22", nom: "Toshkent", sher: "U.Qo'chqor", musiqa: "X.Hasanova", sinf: 6, turi: "muallif", metod: FC },
  { kod: "A23", nom: "O'zbegimdan aylanay", sher: "D.A'zamova", musiqa: "G.Qo'chqarova", sinf: 6, turi: "muallif", metod: FC },
  { kod: "A24", nom: "Kim epchil-u, kim chaqqon", sher: "A.Obidjonov", musiqa: "A.Mansurov", sinf: 6, turi: "muallif", metod: FC },
  { kod: "A25", nom: "Diyorim", sher: "R.Xo'jayev", musiqa: "N.Norxo'jayev", sinf: 6, turi: "muallif", metod: FC },
  { kod: "A26", nom: "O'zbekiston - onajon", sher: "Qambar ota", musiqa: "M.Otajonov", sinf: 7, turi: "muallif", metod: FC },
  { kod: "A27", nom: "Tinchlik bo'lsin", sher: "H.Ahmedova", musiqa: "X.Hasanova", sinf: 7, turi: "muallif", metod: FC },
  { kod: "A28", nom: "Toshkent shahrim", sher: "P.Mo'min", musiqa: "N.Norxo'jayev", sinf: 7, turi: "muallif", metod: FC },
  { kod: "A29", nom: "Shodiyona", sher: "N.Isroilov", musiqa: "X.Hasanova", sinf: 7, turi: "muallif", metod: FC },
  { kod: "A30", nom: "Ona tilim - O'zbek tilim", sher: "P.Mo'min", musiqa: "F.Alimov", sinf: 7, turi: "muallif", metod: FC },
];

/** Amaliy mashg'ulotlar — har bir asar bo'yicha bitta mashg'ulot. */
export const AMALIYLAR: DasturMavzusi[] = ASARLAR.map((a) => ({
  kod: a.kod,
  tur: "amaliy" as const,
  soat: 2,
  sarlavha: `«${a.nom}»${a.sinf ? ` (${a.sinf}-sinf)` : ""} — ifodali kuylab ijro etish va tahlil qilish`,
  mazmun:
    `${asarMuallifi(a)} «${a.nom}»${a.sinf ? ` (${a.sinf}-sinf)` : ""} ` +
    `(${a.metod}) ta'lim metodi asosida qo'shiqni ifodali kuylab ijro etish ` +
    "hamda uning mazmunini tahlil qilish.",
}));

/** Asarning muallifini dasturdagi ko'rinishda yozadi. */
export function asarMuallifi(a: Asar): string {
  if (a.turi === "xalq") return "Xalq qo'shig'i";
  const qismlar: string[] = [];
  if (a.sher) qismlar.push(`${a.sher} she'ri`);
  if (a.musiqa) qismlar.push(`${a.musiqa} musiqasi`);
  return qismlar.join(", ") || "Muallifi ko'rsatilmagan";
}

/* ───────────────────────── Kurs ishi (30 soat) ───────────────────────── */

const KURS_ISHI_MAVZULARI = [
  "Musiqa o'qitish metodikasi va maktab repertuari fanining predmeti, maqsadi va vazifalari",
  "Musiqa san'atining yosh avlod tarbiyasidagi pedagogik imkoniyatlari",
  "Musiqaning shaxs ma'naviy kamolotidagi o'rni",
  "Musiqa orqali estetik, axloqiy va vatanparvarlik tarbiyasini shakllantirish",
  "Musiqa san'atining yosh avlod tarbiyasidagi pedagogik imkoniyatlari",
  "Musiqa o'qitish metodikasining pedagogika, psixologiya va musiqa fanlari bilan aloqadorligi",
  "Musiqa madaniyati darsining tarkibiy qismlari",
  "Bo'lajak musiqa o'qituvchilarida ijodiy musiqiy mahoratni rivojlantirish metodlari",
  "Musiqa darslarida innovatsion pedagogik texnologiyalarni qo'llash metodikasi",
  "Musiqa tinglash faoliyatini tashkil etish metodikasi",
  "1-2-sinflar uchun maktab repertuarini tanlash va tahlil qilish metodikasi",
  "3-4-sinflar uchun maktab repertuarini tanlash va tahlil qilish metodikasi",
  "5-6-sinflar uchun maktab repertuarini tanlash va tahlil qilish metodikasi",
  "7-sinflar uchun maktab repertuarini tanlash va tahlil qilish metodikasi",
  "Maktabda musiqiy to'garaklarni tashkil etishning maqsadi, vazifalari va shakllari",
];

export const KURS_ISHLARI: DasturMavzusi[] = KURS_ISHI_MAVZULARI.map(
  (sarlavha, i) => ({
    kod: `KI${i + 1}`,
    tur: "kurs-ishi" as const,
    soat: 2,
    sarlavha,
  }),
);

/* ──────────────────── Mustaqil ta'lim (120 soat) ──────────────────── */

/**
 * Mustaqil ta'lim topshirig'i.
 *
 * Har biri 10 soat va bitta naqsh bo'yicha: **asarni mustaqil tahlil
 * qilish + dars ishlanma tayyorlash**. Shuning uchun asar ma'lumoti
 * alohida saqlanadi — topshiriq matni undan hosil qilinadi.
 */
export type MustaqilTopshiriq = DasturMavzusi & {
  /** Tahlil qilinadigan asar */
  asar: Asar;
};

const MUSTAQIL_ASARLAR: Asar[] = [
  { kod: "MT1", nom: "O'zbekiston Respublikasi Davlat madhiyasi", sher: "A.Oripov", musiqa: "M.Burhonov", turi: "madhiya", metod: FC },
  { kod: "MT2", nom: "Olmani qarang", sher: "P.Mo'min", musiqa: "D.Omonullayeva", sinf: 1, turi: "muallif", metod: FC },
  { kod: "MT3", nom: "Dadajon", sher: "P.Mo'min", musiqa: "D.Omonullayeva", sinf: 1, turi: "muallif", metod: FC },
  { kod: "MT4", nom: "Kelajakmiz", sher: "Azizbek", musiqa: "Sh.Zokirov", sinf: 1, turi: "muallif", metod: FC },
  { kod: "MT5", nom: "Saf qo'shig'i", sher: "Z.Hasanova", musiqa: "X.Hasanova", sinf: 2, turi: "muallif", metod: FC },
  { kod: "MT6", nom: "Yomg'ir yog'aloq", sinf: 2, turi: "xalq", metod: FC },
  { kod: "MT7", nom: "Oppoq qish-e, oppoq qish", sher: "P.Mo'min", musiqa: "A.Varelas", sinf: 3, turi: "muallif", metod: FC },
  { kod: "MT8", nom: "Aka-singil", sinf: 4, turi: "xalq", metod: FC },
  { kod: "MT9", nom: "Navro'z", sher: "K.Turdiyeva", musiqa: "N.Qurbonova", sinf: 4, turi: "muallif", metod: FC },
  { kod: "MT10", nom: "Qaldirg'och", sher: "Dilnur", musiqa: "H.Hasanova", sinf: 5, turi: "muallif", metod: FC },
  { kod: "MT11", nom: "Sharq taronasi", sher: "U.Azim", musiqa: "D.Omonullayeva", sinf: 6, turi: "muallif", metod: FC },
  { kod: "MT12", nom: "Vatanginam", sher: "P.Mo'min", musiqa: "A.Mansur", sinf: 7, turi: "muallif", metod: FC },
];

export const MUSTAQIL_TOPSHIRIQLAR: MustaqilTopshiriq[] = MUSTAQIL_ASARLAR.map(
  (asar) => ({
    kod: asar.kod,
    tur: "mustaqil" as const,
    soat: 10,
    asar,
    sarlavha:
      asar.turi === "madhiya"
        ? "Davlat madhiyasini tahlil etish va dars ishlanma tayyorlash"
        : `«${asar.nom}» (${asar.sinf}-sinf) asarini tahlil etish va dars ishlanma tayyorlash`,
    mazmun:
      asar.turi === "madhiya"
        ? "O'zbekiston Respublikasi Davlat madhiyasining yaratilish tarixi, " +
          "mazmuni va ijro xususiyatlarini mustaqil tahlil etish hamda dars " +
          "ishlanma tayyorlash."
        : `${asar.sinf}-sinf darsligiga kiritilgan ${asarMuallifi(asar)} ` +
          `«${asar.nom}» asarini mustaqil tahlil etish va dars ishlanma tayyorlash.`,
  }),
);

/* ───────────────────────── Umumiy ro'yxat ───────────────────────── */

export const DASTUR_MAVZULARI: DasturMavzusi[] = [
  ...MARUZALAR,
  ...AMALIYLAR,
  ...KURS_ISHLARI,
  ...MUSTAQIL_TOPSHIRIQLAR,
];

export const MAVZU_BY_KOD = new Map(DASTUR_MAVZULARI.map((m) => [m.kod, m]));

/** Tur bo'yicha jami soat — dasturdagi raqam bilan solishtirish uchun. */
export function soatJami(tur: MashgulotTuri): number {
  return DASTUR_MAVZULARI.filter((m) => m.tur === tur).reduce(
    (s, m) => s + m.soat,
    0,
  );
}
