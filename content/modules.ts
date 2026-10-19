import type { BloomLevel, DiagnosticArea, MainDirection } from "@/lib/domain/types";

/**
 * O'quv modullari — dissertatsiyadagi 5 modul, ECTS kreditlari bilan.
 *
 * Har bir modulda o'quv natijalari (learning outcomes) va kompetensiyalar
 * ko'rsatilgan. J. Biggsning konstruktiv moslashuvi (constructive alignment)
 * tamoyiliga ko'ra, har bir topshiriq aynan shu o'quv natijalaridan biriga
 * bog'lanadi — ya'ni "nima o'rgatiladi", "qanday mashq qilinadi" va
 * "qanday baholanadi" bir-biriga mos keladi.
 */

export type LearningOutcome = {
  id: string;
  text: string;
  bloom: BloomLevel;
};

export type Module = {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** ECTS kredit */
  credits: number;
  direction: MainDirection;
  /** Modul qaysi diagnostika yo'nalishlarini rivojlantiradi */
  areas: DiagnosticArea[];
  outcomes: LearningOutcome[];
};

export const MODULLAR: Module[] = [
  {
    id: "mod-nazariya",
    slug: "musiqa-nazariyasi",
    title: "Musiqa nazariyasi",
    description:
      "Nota savodi, ritm, lad va tonallik, interval va akkordlar, garmoniya, musiqa shakllari, solfedjio va maqom tahlili — musiqiy tafakkurning nazariy asosi.",
    credits: 5,
    direction: "nazariya",
    areas: ["nazariya", "eshituv", "ritm"],
    outcomes: [
      { id: "on-naz-1", text: "Nota chiziqlari, kalit va alteratsiya belgilarini to'g'ri o'qiy oladi", bloom: "bilish" },
      { id: "on-naz-2", text: "Nota davomiyliklari, takt va o'lchov tizimini tushuntira oladi", bloom: "tushunish" },
      { id: "on-naz-3", text: "Interval va akkordlarni eshitib hamda nota yozuvida aniqlay oladi", bloom: "qollash" },
      { id: "on-naz-4", text: "Musiqa asarining shakli va garmonik tuzilishini tahlil qila oladi", bloom: "tahlil" },
      { id: "on-naz-5", text: "O'zbek maqom namunalarini lad asosida tahlil qila oladi", bloom: "tahlil" },
      { id: "on-naz-6", text: "Lad va tonallik tizimini — major, minor, kvinta doirasi va kalit belgilarini — tushuntira oladi", bloom: "tushunish" },
      { id: "on-naz-7", text: "Garmonik funksiyalar va kadanslarni aniqlab, ohangga oddiy jo'r tuza oladi", bloom: "qollash" },
      { id: "on-naz-8", text: "Temp, dinamika va ifoda atamalarini biladi va ularni nota matnida o'qiy oladi", bloom: "bilish" },
      { id: "on-naz-9", text: "Solfedjio mashqlarini kuylay oladi va oddiy ohangni eshitib yozib ola oladi", bloom: "qollash" },
    ],
  },
  {
    id: "mod-ijro",
    slug: "ijro-amaliyoti",
    title: "Ijro amaliyoti",
    description:
      "Cholg'u texnikasi, ovoz va nafas, mashq metodikasi, ifodali ijro, ansambl, qo'shiqqa jo'r bo'lish va sahna madaniyati.",
    credits: 7,
    direction: "ijro",
    areas: ["texnika", "ritm", "sahna", "ijodkorlik"],
    outcomes: [
      { id: "on-ijr-1", text: "Cholg'uda to'g'ri qo'l qo'yilishi va asosiy texnikani namoyish eta oladi", bloom: "qollash" },
      { id: "on-ijr-2", text: "Berilgan ritmik naqshni aniq tempda takrorlay oladi", bloom: "qollash" },
      { id: "on-ijr-3", text: "Ansamblda boshqa ijrochilar bilan muvofiq ijro eta oladi", bloom: "qollash" },
      { id: "on-ijr-4", text: "O'z ijrosini yozib olib, kamchiliklarini tahlil qila oladi", bloom: "tahlil" },
      { id: "on-ijr-5", text: "Tomoshabin oldida ishonchli va madaniy ijro eta oladi", bloom: "qollash" },
      { id: "on-ijr-6", text: "Ovoz apparati tuzilishi, bolalar ovozi diapazoni va ovoz gigiyenasi qoidalarini tushuntira oladi", bloom: "tushunish" },
      { id: "on-ijr-7", text: "Nafas va ovoz sozlash mashqlarini to'g'ri bajaradi hamda guruh bilan o'tkaza oladi", bloom: "qollash" },
      { id: "on-ijr-8", text: "Asardagi qiyin bo'lakni aniqlab, sababini tahlil qiladi va mashq rejasini tuza oladi", bloom: "tahlil" },
      { id: "on-ijr-9", text: "Ohangni frazalarga ajratib, dinamika va artikulyatsiya bilan ifodali ijro eta oladi", bloom: "qollash" },
      { id: "on-ijr-10", text: "Bolalar qo'shig'iga oddiy jo'r tuzib, sinf kuylashiga jo'r bo'la oladi", bloom: "sintez" },
      { id: "on-ijr-11", text: "Yosh guruhiga mos repertuar va tonallikni tanlab, tanlovini asoslay oladi", bloom: "baholash" },
    ],
  },
  {
    id: "mod-metodika",
    slug: "musiqa-talimi-metodikasi",
    title: "Musiqa ta'limi metodikasi",
    description:
      "O'qitish tizimlari, dars tuzilmasi va maqsadi, qo'shiq o'rgatish va tinglash metodikasi, sinfni boshqarish, farqlashtirilgan ta'lim, baholash va mikro-o'qitish.",
    credits: 6,
    direction: "metodika",
    areas: ["metodika", "motivatsiya"],
    outcomes: [
      { id: "on-met-1", text: "Musiqa darsining tuzilmasi va bosqichlarini biladi", bloom: "bilish" },
      { id: "on-met-2", text: "O'quv maqsadlarini Blum taksonomiyasi bo'yicha shakllantira oladi", bloom: "sintez" },
      { id: "on-met-3", text: "Sinf uchun to'liq dars ishlanmasi tuza oladi", bloom: "sintez" },
      { id: "on-met-4", text: "Mikro-dars o'tkazib, hamkasblar fikrini hisobga ola oladi", bloom: "qollash" },
      { id: "on-met-5", text: "O'quvchi natijasini rubrika bo'yicha asoslab baholay oladi", bloom: "baholash" },
      { id: "on-met-6", text: "Musiqa o'qitishning asosiy tizimlari — Kodai, Orf, Dalkroz va ustoz-shogird — tamoyillarini qiyoslab tushuntira oladi", bloom: "tushunish" },
      { id: "on-met-7", text: "Qo'shiqni sinfga bosqichma-bosqich o'rgata oladi", bloom: "qollash" },
      { id: "on-met-8", text: "Musiqa tinglash darsini yo'naltiruvchi savollar asosida tashkil eta oladi", bloom: "qollash" },
      { id: "on-met-9", text: "Sinfdagi daraja farqini hisobga olib, topshiriqni farqlashtira oladi va shaxsga yo'naltirilgan dars loyihalay oladi", bloom: "sintez" },
      { id: "on-met-10", text: "Shakllantiruvchi baholashni qo'llaydi va rivojlantiruvchi teskari aloqa bera oladi", bloom: "qollash" },
      { id: "on-met-11", text: "Musiqa sinfida tartib va motivatsiyani boshqarish yo'llarini tahlil qila oladi", bloom: "tahlil" },
    ],
  },
  {
    id: "mod-texnologiya",
    slug: "musiqa-texnologiyalari",
    title: "Musiqa texnologiyalari",
    description:
      "Nota yozuv dasturlari, tovush yozish va tahrirlash, fonogramma, aranjirovka, mualliflik huquqi, raqamli xavfsizlik va masofaviy dars.",
    credits: 4,
    direction: "kasbiy",
    areas: ["ijodkorlik", "nazariya", "metodika"],
    outcomes: [
      { id: "on-tex-1", text: "Nota yozuv dasturida partiturani tayyorlay oladi", bloom: "qollash" },
      { id: "on-tex-2", text: "Oddiy audio yozuvni tahrirlab, darsga tayyorlay oladi", bloom: "qollash" },
      { id: "on-tex-3", text: "Raqamli vositalarni dars maqsadiga mos tanlay oladi", bloom: "baholash" },
      { id: "on-tex-4", text: "O'z aranjirovkasini yaratib, taqdim eta oladi", bloom: "sintez" },
      { id: "on-tex-5", text: "Mualliflik huquqi va ochiq litsenziyalar qoidalari asosida darsga qonuniy material tanlay oladi", bloom: "tushunish" },
      { id: "on-tex-6", text: "Bolalar yozuvi va suratlarini e'lon qilish bo'yicha huquqiy hamda axloqiy talablarni baholab, qaror qabul qila oladi", bloom: "baholash" },
      { id: "on-tex-7", text: "Yakka ijro yoki sinf ijrosini mikrofon va xona talablariga rioya qilib toza yozib ola oladi", bloom: "qollash" },
      { id: "on-tex-8", text: "Maktab tadbiri uchun jo'r fonogramma yaratib, uni zalda sinab tayyorlay oladi", bloom: "sintez" },
      { id: "on-tex-9", text: "Masofaviy musiqa darsini kechikish cheklovlarini hisobga olgan holda tashkil eta oladi", bloom: "qollash" },
    ],
  },
  {
    id: "mod-amaliyot",
    slug: "pedagogik-amaliyot",
    title: "Pedagogik amaliyot",
    description:
      "Tayyorgarlikdan portfoliogacha: kuzatuv, mikro-o'qitish, mustaqil dars, maktab muhiti, inklyuziv ta'lim, sinfdan tashqari ish, kasbiy etika va refleksiya.",
    credits: 10,
    direction: "kasbiy",
    areas: ["metodika", "sahna", "motivatsiya"],
    outcomes: [
      { id: "on-ama-1", text: "Tajribali o'qituvchi darsini mezonlar bo'yicha kuzata oladi", bloom: "tahlil" },
      { id: "on-ama-2", text: "Mikro-dars bo'lagini mustaqil o'tkaza oladi", bloom: "qollash" },
      { id: "on-ama-3", text: "To'liq darsni mustaqil loyihalab, o'tkaza oladi", bloom: "sintez" },
      { id: "on-ama-4", text: "Mentor feedbackini qabul qilib, darsini takomillashtira oladi", bloom: "baholash" },
      { id: "on-ama-5", text: "O'z pedagogik faoliyatiga refleksiya yoza oladi", bloom: "baholash" },
      { id: "on-ama-6", text: "Amaliyotga hujjat, kundalik va maktab bilan tanishuv orqali tayyorlana oladi", bloom: "tushunish" },
      { id: "on-ama-7", text: "Alohida ehtiyojli o'quvchi uchun musiqa darsida haqiqiy ishtirok yo'lini tashkil eta oladi", bloom: "qollash" },
      { id: "on-ama-8", text: "To'garak yoki maktab tadbirini rejadan hisobotgacha tashkil eta oladi", bloom: "sintez" },
      { id: "on-ama-9", text: "Ota-ona, hamkasb va ma'muriyat bilan kasbiy muloqotni tahlil qila oladi", bloom: "tahlil" },
      { id: "on-ama-10", text: "Kasbiy chegaralar va o'z-o'zini asrash bo'yicha holatlarni baholab, qaror qabul qila oladi", bloom: "baholash" },
      { id: "on-ama-11", text: "Amaliyot portfoliosini dalillar asosida tuzib, yakuniy hisobot yoza oladi", bloom: "sintez" },
    ],
  },
];

export const MODUL_BY_SLUG = new Map(MODULLAR.map((m) => [m.slug, m]));
export const MODUL_BY_ID = new Map(MODULLAR.map((m) => [m.id, m]));

/** Barcha o'quv natijalari — topshiriqlarni bog'lashda ishlatiladi. */
export const OQUV_NATIJALARI = new Map(
  MODULLAR.flatMap((m) => m.outcomes.map((o) => [o.id, { ...o, moduleId: m.id }] as const)),
);

export const JAMI_KREDIT = MODULLAR.reduce((sum, m) => sum + m.credits, 0);
