import type { Question } from "@/content/diagnostic";
import type { InstrumentKind } from "@/lib/domain/instruments";
import type { BloomLevel, DiagnosticArea, TaskType } from "@/lib/domain/types";

/**
 * Topshiriqlar banki.
 *
 * Har bir topshiriq modul, Blum darajasi, kompetensiya yo'nalishi va baholash
 * mezoniga bog'langan — J. Biggsning konstruktiv moslashuvi talabi.
 *
 * Baholash ikki xil:
 *  • `test` — avtomatik baholanadi (savollar banki orqali);
 *  • `loyiha` / `ijro` — o'qituvchi **rubrika** bo'yicha baholaydi, shuning
 *    uchun talaba qanday baholanishini oldindan ko'radi.
 */

export type RubricCriterion = {
  id: string;
  title: string;
  description: string;
  maxPoints: number;
};

export type Rubric = {
  criteria: RubricCriterion[];
};

export type Task = {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: TaskType;
  moduleId: string;
  outcomeId: string;
  area: DiagnosticArea;
  bloom: BloomLevel;
  /** Ko'rsatiladigan muddat matni */
  duration: string;
  /** Taymer uchun daqiqa; berilmasa taymer yo'q */
  timerMin?: number;
  /** Talaba nima topshiradi */
  submission: "test" | "fayl" | "matn" | "ijro";
  questions?: Question[];
  rubric?: Rubric;
  instrument?: InstrumentKind;
  exerciseId?: string;
  /** Ruxsat etilgan fayl turlari */
  accept?: string;
};

const RUBRIKA_DARS: Rubric = {
  criteria: [
    {
      id: "maqsad",
      title: "O'quv maqsadi",
      description:
        "Maqsad o'lchanadigan fe'l bilan yozilgan va Blum darajasi aniq ko'rsatilgan",
      maxPoints: 25,
    },
    {
      id: "tuzilma",
      title: "Dars tuzilmasi",
      description:
        "Bosqichlar mantiqiy ketma-ketlikda, vaqt taqsimoti real va asoslangan",
      maxPoints: 25,
    },
    {
      id: "faoliyat",
      title: "O'quvchi faoliyati",
      description:
        "O'quvchilar faol ishtirok etadigan topshiriqlar bor, faqat tinglash emas",
      maxPoints: 25,
    },
    {
      id: "baholash",
      title: "Baholash mosligi",
      description:
        "Baholash usuli aynan qo'yilgan maqsadni tekshiradi (konstruktiv moslashuv)",
      maxPoints: 25,
    },
  ],
};

const RUBRIKA_IJRO: Rubric = {
  criteria: [
    {
      id: "aniqlik",
      title: "Nota aniqligi",
      description: "Notalar va ritm xatosiz, to'xtashlarsiz ijro etilgan",
      maxPoints: 30,
    },
    {
      id: "temp",
      title: "Temp barqarorligi",
      description: "Temp boshidan oxirigacha bir xil saqlangan",
      maxPoints: 25,
    },
    {
      id: "tovush",
      title: "Tovush sifati",
      description: "Tovush toza, zarb erkin, dinamika mavjud",
      maxPoints: 25,
    },
    {
      id: "ifoda",
      title: "Musiqiy ifoda",
      description: "Ohangning mazmuni yetkazilgan, iboralar ajratilgan",
      maxPoints: 20,
    },
  ],
};

const RUBRIKA_TAHLIL: Rubric = {
  criteria: [
    {
      id: "shakl",
      title: "Shakl tahlili",
      description: "Asarning tuzilmasi va qismlari to'g'ri aniqlangan",
      maxPoints: 30,
    },
    {
      id: "garmoniya",
      title: "Lad va garmoniya",
      description: "Tonallik, lad asosi va asosiy garmonik burilishlar ko'rsatilgan",
      maxPoints: 30,
    },
    {
      id: "xulosa",
      title: "Xulosa asoslanganligi",
      description: "Fikrlar asar matnidagi aniq misollar bilan asoslangan",
      maxPoints: 40,
    },
  ],
};

/**
 * Refleksiv va tahliliy yozma ishlar uchun rubrika.
 *
 * `RUBRIKA_TAHLIL` musiqa asarini tahlil qilishga mo'ljallangan; bu esa
 * pedagogik matnlar uchun — kuzatuv varaqasi, teskari aloqa tahlili,
 * refleksiv esse. Farqi mezonlarda: bu yerda dalil asar matnidan emas,
 * dars amaliyotidan olinadi.
 */
const RUBRIKA_REFLEKSIYA: Rubric = {
  criteria: [
    {
      id: "aniqlik",
      title: "Kuzatuvning aniqligi",
      description:
        "Fikrlar umumiy emas: aniq lahza, aniq xatti-harakat va uning ta'siri ko'rsatilgan",
      maxPoints: 30,
    },
    {
      id: "asos",
      title: "Nazariy asos",
      description:
        "Xulosalar o'rganilgan tamoyillarga (Blum, konstruktiv moslashuv, ZPD) bog'langan",
      maxPoints: 25,
    },
    {
      id: "oztahlil",
      title: "O'z-o'zini tahlil",
      description:
        "Muvaffaqiyat ham, kamchilik ham ko'rsatilgan; sabab izlangan, bahona emas",
      maxPoints: 25,
    },
    {
      id: "keyingi",
      title: "Keyingi qadam",
      description: "Aniq, bajariladigan va o'lchanadigan vazifa belgilangan",
      maxPoints: 20,
    },
  ],
};

/**
 * Raqamli mahsulot (partitura, audio, aranjirovka) uchun rubrika.
 *
 * Bu yerda texnik bajarilish ham, pedagogik maqsadga moslik ham
 * baholanadi: chiroyli qilingan, lekin darsda ishlatib bo'lmaydigan
 * mahsulot maqsadga xizmat qilmaydi.
 */
const RUBRIKA_TEXNOLOGIYA: Rubric = {
  criteria: [
    {
      id: "texnik",
      title: "Texnik bajarilish",
      description:
        "Fayl to'g'ri formatda, toza va xatosiz; nota yozuvida kalit, o'lchov va davomiyliklar to'g'ri",
      maxPoints: 30,
    },
    {
      id: "maqsad",
      title: "Pedagogik maqsadga moslik",
      description:
        "Mahsulot aniq dars vazifasini bajaradi va sinf imkoniyatiga mos keladi",
      maxPoints: 30,
    },
    {
      id: "mustaqillik",
      title: "Mustaqillik va o'zlashtirish",
      description:
        "Vositaning imkoniyatlari ongli ishlatilgan (transpozitsiya, partiyalar, normalizatsiya)",
      maxPoints: 20,
    },
    {
      id: "huquq",
      title: "Manba va litsenziya",
      description:
        "Ishlatilgan materialning manbasi ko'rsatilgan va undan foydalanishga ruxsat bor",
      maxPoints: 20,
    },
  ],
};

export const TOPSHIRIQLAR: Task[] = [
  {
    id: "task-nota-test",
    slug: "nota-savodi-test",
    title: "Nota savodi bo'yicha test",
    description:
      "Nota chiziqlari, kalitlar va alteratsiya belgilari bo'yicha bilimni tekshiradi.",
    type: "test",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-1",
    area: "nazariya",
    bloom: "bilish",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "tt1",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "Skripka kaliti qaysi chiziqdan boshlanadi?",
        options: [
          { id: "a", text: "1-chiziq" },
          { id: "b", text: "2-chiziq" },
          { id: "c", text: "3-chiziq" },
          { id: "d", text: "4-chiziq" },
        ],
        correctId: "b",
        explanation: "Skripka (sol) kaliti 2-chiziqdan boshlanadi.",
      },
      {
        id: "tt2",
        area: "nazariya",
        bloom: "tushunish",
        kind: "single",
        prompt: "Bemol belgisi tovushni qanday o'zgartiradi?",
        options: [
          { id: "a", text: "Yarim tonga ko'taradi" },
          { id: "b", text: "Yarim tonga tushiradi" },
          { id: "c", text: "Bir tonga ko'taradi" },
          { id: "d", text: "O'zgartirmaydi" },
        ],
        correctId: "b",
      },
      {
        id: "tt3",
        area: "nazariya",
        bloom: "qollash",
        kind: "multiple",
        prompt: "Qaysilari kalit belgisi bo'la oladi?",
        options: [
          { id: "a", text: "Diez" },
          { id: "b", text: "Bemol" },
          { id: "c", text: "Bekar" },
          { id: "d", text: "Fermata" },
        ],
        correctIds: ["a", "b"],
        explanation:
          "Kalit belgisi sifatida faqat diez va bemol yoziladi.",
      },
      {
        id: "tt4",
        area: "nazariya",
        bloom: "tushunish",
        kind: "single",
        prompt: "Takt ichida qo'yilgan alteratsiya belgisi qancha amal qiladi?",
        options: [
          { id: "a", text: "Faqat o'sha notaga" },
          { id: "b", text: "Shu takt oxirigacha" },
          { id: "c", text: "Butun asar davomida" },
          { id: "d", text: "Keyingi taktgacha" },
        ],
        correctId: "b",
      },
      {
        id: "tt5",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "Nota stani nechta chiziqdan iborat?",
        options: [
          { id: "a", text: "4" },
          { id: "b", text: "5" },
          { id: "c", text: "6" },
          { id: "d", text: "7" },
        ],
        correctId: "b",
      },
    ],
  },

  {
    id: "task-dutor-mashq",
    slug: "dutor-amaliy-mashq",
    title: "Dutor uchun amaliy mashq",
    description:
      "Dutorda barmoq mashqlarini bajarib, natijani yozib oling va topshiring.",
    type: "mashq",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-1",
    area: "texnika",
    bloom: "qollash",
    duration: "20 daqiqa",
    submission: "ijro",
    instrument: "dutor",
    exerciseId: "d-barmoq",
  },

  {
    id: "task-dars-ishlanma",
    slug: "dars-ishlanmasi",
    title: "Dars ishlanmasi loyihasi",
    description:
      "5-sinf uchun to'liq musiqa darsi ishlanmasini tuzing: maqsad, bosqichlar, faoliyat va baholash.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-3",
    area: "metodika",
    bloom: "sintez",
    duration: "1 hafta",
    submission: "fayl",
    accept: ".pdf,.doc,.docx,.odt",
    rubric: RUBRIKA_DARS,
  },

  {
    id: "task-asar-tahlil",
    slug: "musiqa-asarlari-tahlili",
    title: "Musiqa asarlari tahlili",
    description:
      "Tanlagan asarning shakli, ladi va garmonik tuzilishini yozma tahlil qiling.",
    type: "loyiha",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-4",
    area: "nazariya",
    bloom: "tahlil",
    duration: "30 daqiqa",
    timerMin: 30,
    submission: "matn",
    rubric: RUBRIKA_TAHLIL,
  },

  {
    id: "task-ritm-test",
    slug: "ritm-va-olchov-test",
    title: "Ritm va o'lchov testi",
    description: "Davomiyliklar, o'lchov belgilari va sinkopa bo'yicha test.",
    type: "test",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-2",
    area: "ritm",
    bloom: "tushunish",
    duration: "10 daqiqa",
    timerMin: 10,
    submission: "test",
    questions: [
      {
        id: "rt1",
        area: "ritm",
        bloom: "bilish",
        kind: "single",
        prompt: "6/8 o'lchovda bir taktda nechta sakkizlik nota bor?",
        options: [
          { id: "a", text: "3" },
          { id: "b", text: "4" },
          { id: "c", text: "6" },
          { id: "d", text: "8" },
        ],
        correctId: "c",
      },
      {
        id: "rt2",
        area: "ritm",
        bloom: "tushunish",
        kind: "single",
        prompt: "Metronom 120 BPM da bir zarb qancha davom etadi?",
        options: [
          { id: "a", text: "0,25 s" },
          { id: "b", text: "0,5 s" },
          { id: "c", text: "1 s" },
          { id: "d", text: "2 s" },
        ],
        correctId: "b",
        explanation: "120 zarb / 60 soniya = 2 zarb bir soniyada, demak har biri 0,5 s.",
      },
      {
        id: "rt3",
        area: "ritm",
        bloom: "tahlil",
        kind: "single",
        prompt: "Sinkopa nimani anglatadi?",
        options: [
          { id: "a", text: "Tempning o'zgarishi" },
          { id: "b", text: "Urg'uning kuchsiz zarbga ko'chishi" },
          { id: "c", text: "Pauzaning uzayishi" },
          { id: "d", text: "O'lchovning almashishi" },
        ],
        correctId: "b",
      },
    ],
  },

  {
    id: "task-ijro-yozuv",
    slug: "ijro-yozuvi",
    title: "Ijro yozuvini topshirish",
    description:
      "O'rgangan asaringizni virtual cholg'uda ijro eting, yozib oling va rubrika bo'yicha baholash uchun topshiring.",
    type: "ijro",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-4",
    area: "sahna",
    bloom: "tahlil",
    duration: "25 daqiqa",
    submission: "ijro",
    instrument: "pianino",
    exerciseId: "p-oddiy-kuy",
    rubric: RUBRIKA_IJRO,
  },

  {
    id: "task-doira-ritm",
    slug: "doira-ritm-mashq",
    title: "Doirada ritm mashqi",
    description:
      "Murakkab ritm naqshini eshiting va takrorlang. Natija vaqt aniqligi bo'yicha avtomatik baholanadi.",
    type: "mashq",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-2",
    area: "ritm",
    bloom: "qollash",
    duration: "15 daqiqa",
    submission: "ijro",
    instrument: "doira",
    exerciseId: "doira-murakkab",
  },

  {
    id: "task-metodika-test",
    slug: "metodika-test",
    title: "Pedagogik metodika testi",
    description: "Blum taksonomiyasi, formativ baholash va rubrika bo'yicha test.",
    type: "test",
    moduleId: "mod-metodika",
    outcomeId: "on-met-2",
    area: "metodika",
    bloom: "tushunish",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "mt1",
        area: "metodika",
        bloom: "bilish",
        kind: "single",
        prompt: "Blum taksonomiyasining eng yuqori darajasi qaysi?",
        options: [
          { id: "a", text: "Sintez" },
          { id: "b", text: "Tahlil" },
          { id: "c", text: "Baholash" },
          { id: "d", text: "Qo'llash" },
        ],
        correctId: "c",
      },
      {
        id: "mt2",
        area: "metodika",
        bloom: "tushunish",
        kind: "single",
        prompt: "Rubrikaning asosiy foydasi nimada?",
        options: [
          { id: "a", text: "Baho qo'yishni tezlashtiradi" },
          { id: "b", text: "Baholashni shaffof va oldindan ma'lum qiladi" },
          { id: "c", text: "O'quvchilarni taqqoslaydi" },
          { id: "d", text: "Hujjat talabini bajaradi" },
        ],
        correctId: "b",
      },
      {
        id: "mt3",
        area: "metodika",
        bloom: "qollash",
        kind: "multiple",
        prompt: "Formativ baholashga nimalar kiradi?",
        options: [
          { id: "a", text: "Dars davomidagi qisqa savollar" },
          { id: "b", text: "Yakuniy imtihon" },
          { id: "c", text: "O'zaro baholash" },
          { id: "d", text: "Mashq paytidagi qaytar aloqa" },
        ],
        correctIds: ["a", "c", "d"],
        explanation:
          "Yakuniy imtihon — summativ baholash; qolganlari o'quv jarayoni davomida yo'naltiradi.",
      },
    ],
  },

  {
    id: "task-interval-yozuv",
    slug: "interval-yozuv-testi",
    title: "Interval yozuvi testi",
    description:
      "Berilgan ohangda intervallarni aniqlash va ularni nota yozuvida to'g'ri ko'rsatish.",
    type: "test",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-3",
    area: "nazariya",
    bloom: "qollash",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "iy1",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt: "Do va mi notalari orasidagi interval qanday ataladi?",
        options: [
          { id: "a", text: "Katta tersiya" },
          { id: "b", text: "Kichik tersiya" },
          { id: "c", text: "Kvarta" },
          { id: "d", text: "Sekunda" },
        ],
        correctId: "a",
        explanation: "Do–mi orasida ikki butun ton bor — bu katta tersiya.",
      },
      {
        id: "iy2",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt: "Do va fa orasidagi interval nechta yarim tondan iborat?",
        options: [
          { id: "a", text: "To'rtta" },
          { id: "b", text: "Beshta" },
          { id: "c", text: "Oltita" },
          { id: "d", text: "Yettita" },
        ],
        correctId: "b",
        explanation: "Sof kvarta — besh yarim ton (do–do♯–re–re♯–mi–fa).",
      },
      {
        id: "iy3",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt:
          "Re notasidan yuqoriga sof kvinta qurilsa, yuqorigi nota qaysi bo'ladi?",
        options: [
          { id: "a", text: "Lya" },
          { id: "b", text: "Sol" },
          { id: "c", text: "Si" },
          { id: "d", text: "Do" },
        ],
        correctId: "a",
        explanation: "Sof kvinta — yetti yarim ton; re dan yetti yarim ton yuqorida lya turadi.",
      },
      {
        id: "iy4",
        area: "nazariya",
        bloom: "qollash",
        kind: "multiple",
        prompt: "Sof intervallarni tanlang.",
        options: [
          { id: "a", text: "Prima" },
          { id: "b", text: "Tersiya" },
          { id: "c", text: "Kvarta" },
          { id: "d", text: "Kvinta" },
          { id: "e", text: "Oktava" },
        ],
        correctIds: ["a", "c", "d", "e"],
        explanation:
          "Prima, kvarta, kvinta va oktava sof bo'ladi; sekunda, tersiya, seksta va septima katta yoki kichik bo'ladi.",
      },
      {
        id: "iy5",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt:
          "Nota yozuvida mi va sol orasidagi intervalni yozmoqchisiz. Qaysi ta'rif to'g'ri?",
        options: [
          { id: "a", text: "Katta tersiya, to'rt yarim ton" },
          { id: "b", text: "Kichik tersiya, uch yarim ton" },
          { id: "c", text: "Sof kvarta, besh yarim ton" },
          { id: "d", text: "Katta sekunda, ikki yarim ton" },
        ],
        correctId: "b",
        explanation:
          "Mi–fa orasida yarim ton, fa–sol orasida butun ton — jami uch yarim ton, ya'ni kichik tersiya.",
      },
      {
        id: "iy6",
        area: "eshituv",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Ohangda ketma-ket do–mi–sol tovushlari yangradi. Bu nima?",
        options: [
          { id: "a", text: "Minor trezvuchiye" },
          { id: "b", text: "Major trezvuchiye" },
          { id: "c", text: "Kvarta-kvinta ketma-ketligi" },
          { id: "d", text: "Xromatik qator" },
        ],
        correctId: "b",
        explanation:
          "Do–mi katta tersiya, mi–sol kichik tersiya — bu major trezvuchiyening tuzilishi.",
      },
    ],
  },

  {
    id: "task-maqom-tahlil",
    slug: "maqom-namunasi-tahlili",
    title: "Maqom namunasi tahlili",
    description:
      "Tanlagan maqom namunasini lad asosida yozma tahlil qiling: tovushqator, tayanch tovush, avj va usul. Tahlilni asar matnidagi aniq joylarga tayanib asoslang.",
    type: "loyiha",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-5",
    area: "nazariya",
    bloom: "tahlil",
    duration: "40 daqiqa",
    timerMin: 40,
    submission: "matn",
    rubric: RUBRIKA_TAHLIL,
  },


  {
    id: "task-ansambl-ijro",
    slug: "ansambl-ijrosi",
    title: "Ansambl ijrosi",
    description:
      "Ikki partiyali qisqa asar tayyorlang: avval jo'r partiyani yozib oling, so'ng uning ustiga asosiy ohangni chaling. Muvozanat va birga kirishga alohida e'tibor bering.",
    type: "ijro",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-3",
    area: "ritm",
    bloom: "qollash",
    duration: "30 daqiqa",
    submission: "ijro",
    instrument: "gitara",
    exerciseId: "g-akkordlar",
    rubric: RUBRIKA_IJRO,
  },

  {
    id: "task-sahna-ijro",
    slug: "sahna-ijrosi",
    title: "Sahna ijrosi",
    description:
      "Tanlagan asarni boshidan oxirigacha to'xtamasdan ijro eting va yozib oling. Baholashda xatoning o'zi emas, undan keyin ijroni davom ettira olish ham hisobga olinadi — sahnada to'xtab qolish eng katta kamchilik.",
    type: "ijro",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-5",
    area: "sahna",
    bloom: "qollash",
    duration: "20 daqiqa",
    submission: "ijro",
    instrument: "dutor",
    exerciseId: "d-erkin",
    rubric: RUBRIKA_IJRO,
  },


  {
    id: "task-dars-tuzilmasi-test",
    slug: "dars-tuzilmasi-testi",
    title: "Dars tuzilmasi testi",
    description:
      "Musiqa darsining bosqichlari, vaqt taqsimoti va faoliyat turlari bo'yicha test.",
    type: "test",
    moduleId: "mod-metodika",
    outcomeId: "on-met-1",
    area: "metodika",
    bloom: "bilish",
    duration: "12 daqiqa",
    timerMin: 12,
    submission: "test",
    questions: [
      {
        id: "dt1",
        area: "metodika",
        bloom: "bilish",
        kind: "single",
        prompt: "45 daqiqalik musiqa darsi odatda nechta bosqichdan iborat?",
        options: [
          { id: "a", text: "Ikkita" },
          { id: "b", text: "Uchta" },
          { id: "c", text: "Beshta" },
          { id: "d", text: "O'nta" },
        ],
        correctId: "c",
      },
      {
        id: "dt2",
        area: "metodika",
        bloom: "tushunish",
        kind: "single",
        prompt: "Tashkiliy qism va musiqiy salomlashuvning vazifasi nima?",
        options: [
          { id: "a", text: "Yangi material berish" },
          { id: "b", text: "Diqqatni yig'ish va ovozni uyg'otish" },
          { id: "c", text: "Baho qo'yish" },
          { id: "d", text: "Uyga vazifa berish" },
        ],
        correctId: "b",
      },
      {
        id: "dt3",
        area: "metodika",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Darsda 30 daqiqa nazariya tushuntirildi va 5 daqiqa kuylandi. Asosiy kamchilik nima?",
        options: [
          { id: "a", text: "Takrorlash bosqichi yo'q" },
          { id: "b", text: "Amaliy faoliyatga vaqt yetmagan" },
          { id: "c", text: "Dars juda qisqa" },
          { id: "d", text: "Uyga vazifa berilmagan" },
        ],
        correctId: "b",
        explanation:
          "Musiqa darsida amaliy faoliyat yangi materialdan kam vaqt olmaydi — aks holda u ma'ruzaga aylanadi.",
      },
      {
        id: "dt4",
        area: "metodika",
        bloom: "qollash",
        kind: "single",
        prompt:
          "Boshlang'ich sinfda bitta faoliyat turi qancha davom etgani ma'qul?",
        options: [
          { id: "a", text: "2–3 daqiqa" },
          { id: "b", text: "7–10 daqiqa" },
          { id: "c", text: "15–20 daqiqa" },
          { id: "d", text: "Butun dars davomida" },
        ],
        correctId: "b",
      },
      {
        id: "dt5",
        area: "metodika",
        bloom: "bilish",
        kind: "multiple",
        prompt: "Musiqa darsidagi faoliyat turlarini tanlang.",
        options: [
          { id: "a", text: "Tinglash va musiqa haqida gapirish" },
          { id: "b", text: "Kuylash" },
          { id: "c", text: "Ritmik va harakatli mashqlar" },
          { id: "d", text: "Cholg'uda chalish" },
          { id: "e", text: "Ijodiy faoliyat" },
        ],
        correctIds: ["a", "b", "c", "d", "e"],
      },
      {
        id: "dt6",
        area: "metodika",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Ishlanmadagi bosqichlar jadvalining «O'quvchi» ustuni bo'sh. Bu nimani ko'rsatadi?",
        options: [
          { id: "a", text: "Jadval shakli noto'g'ri tanlangan" },
          { id: "b", text: "Shu bosqichda o'quvchi passiv" },
          { id: "c", text: "O'qituvchi yaxshi tayyorlangan" },
          { id: "d", text: "Hech narsani" },
        ],
        correctId: "b",
      },
    ],
  },

  {
    id: "task-mikro-dars",
    slug: "mikro-dars-otkazish",
    title: "Mikro-dars o'tkazish",
    description:
      "10–15 daqiqalik dars bo'lagini o'tkazing va yozib oling. Ishni ikki qismda topshiring: birinchi urinish, guruhdoshlar teskari aloqasi va tuzatilgan ikkinchi urinish. Baholashda ikkinchi urinishdagi o'zgarish alohida hisobga olinadi.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-4",
    area: "metodika",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "fayl",
    accept: ".mp4,.mov,.mp3,.m4a,.pdf",
    rubric: RUBRIKA_DARS,
  },

  {
    id: "task-rubrika-tuzish",
    slug: "rubrika-tuzish",
    title: "Baholash rubrikasini tuzish",
    description:
      "O'zingiz tanlagan ijodiy topshiriq uchun 3–5 mezonli rubrika tuzing. Har bir mezon uchun eng past va eng yuqori darajaning ta'rifini yozing va mezonlarning og'irligini asoslang. Ta'riflar kuzatiladigan tilda bo'lishi shart.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-5",
    area: "metodika",
    bloom: "baholash",
    duration: "45 daqiqa",
    timerMin: 45,
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },


  {
    id: "task-partitura",
    slug: "partitura-tayyorlash",
    title: "Partitura tayyorlash",
    description:
      "Nota yozuv dasturida 8–16 taktli ikki partiyali partitura tayyorlang: kalit, o'lchov, tonallik va ifoda belgilari bilan. Ish faylini va PDF ni birga topshiring. Erkin dastur (masalan MuseScore) yetarli.",
    type: "loyiha",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-1",
    area: "nazariya",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "fayl",
    accept: ".pdf,.mscz,.musicxml,.xml,.mid",
    rubric: RUBRIKA_TEXNOLOGIYA,
  },

  {
    id: "task-audio-tahrir",
    slug: "audio-tahrirlash",
    title: "Audio yozuvni darsga tayyorlash",
    description:
      "O'z ijrongizni yozib oling va darsda ishlatishga tayyorlang: ortiqcha qismni kesing, balandlikni tenglang, kirish va chiqishni silliqlang, 192 kbit/s MP3 ga eksport qiling. Tahrirdan oldingi va keyingi faylni birga topshiring.",
    type: "loyiha",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-2",
    area: "ijodkorlik",
    bloom: "qollash",
    duration: "45 daqiqa",
    submission: "fayl",
    accept: ".mp3,.wav,.m4a,.ogg",
    rubric: RUBRIKA_TEXNOLOGIYA,
  },

  {
    id: "task-vosita-tanlovi",
    slug: "raqamli-vosita-tanlovi",
    title: "Raqamli vositani tanlash va asoslash",
    description:
      "Aniq bir dars mavzusini oling va unga raqamli vosita tanlang. Tanlovni asoslang: vosita qaysi o'quv maqsadiga xizmat qiladi, uning o'rniga nima ishlatish mumkin edi va nega aynan shu yaxshiroq. Narxi, litsenziyasi va maktab sharoitidagi imkoniyatini ham hisobga oling.",
    type: "loyiha",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-3",
    area: "ijodkorlik",
    bloom: "baholash",
    duration: "30 daqiqa",
    timerMin: 30,
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },

  {
    id: "task-aranjirovka",
    slug: "aranjirovka-loyihasi",
    title: "Aranjirovka loyihasi",
    description:
      "Tanish ohangni sinf ansambli uchun aranjirovka qiling. Kamida uch qatlam bo'lsin (ohang, jo'r, ritm) va partiyalar darajalangan bo'lsin: endi boshlagan o'quvchi uchun ham, kuchli o'quvchi uchun ham partiya bo'lsin. Partitura va qisqa izoh topshiriladi.",
    type: "loyiha",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-4",
    area: "ijodkorlik",
    bloom: "sintez",
    duration: "2 hafta",
    submission: "fayl",
    accept: ".pdf,.mscz,.musicxml,.xml,.mp3",
    rubric: RUBRIKA_TEXNOLOGIYA,
  },


  {
    id: "task-kuzatuv-varaqasi",
    slug: "dars-kuzatuv-varaqasi",
    title: "Dars kuzatuv varaqasi",
    description:
      "Tajribali o'qituvchining bitta darsini kuzatib, mezonlar bo'yicha yozma tahlil tayyorlang: darsning maqsadi, bosqichlari va vaqt taqsimoti, qo'llangan kamida uchta metodik usul va ularning ta'siri, hamda bitta kutilmagan vaziyat va o'qituvchining javobi.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-1",
    area: "metodika",
    bloom: "tahlil",
    duration: "45 daqiqa",
    timerMin: 45,
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },

  {
    id: "task-mikro-dars-ijro",
    slug: "mikro-dars-ijrosi",
    title: "Mikro-dars o'tkazish (amaliyot)",
    description:
      "Haqiqiy yoki o'quv guruhida 10–15 daqiqalik dars bo'lagini mustaqil o'tkazing va yozib oling. Yozuv bilan birga qisqa izoh topshiring: maqsad nima edi, unga erishildimi va buni qanday bildingiz.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-2",
    area: "metodika",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "fayl",
    accept: ".mp4,.mov,.mp3,.m4a,.pdf",
    rubric: RUBRIKA_DARS,
  },

  {
    id: "task-mustaqil-dars",
    slug: "mustaqil-dars",
    title: "To'liq darsni mustaqil o'tkazish",
    description:
      "To'liq darsni mustaqil loyihalang va o'tkazing. Uch hujjat topshiriladi: ishlanma (Reja B va zaxira bilan), dars yozuvi yoki mentor kuzatuv varaqasi, va darsdan keyin darhol yozilgan tahlil.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-3",
    area: "metodika",
    bloom: "sintez",
    duration: "2 hafta",
    submission: "fayl",
    accept: ".pdf,.doc,.docx,.odt,.mp4,.mov",
    rubric: RUBRIKA_DARS,
  },

  {
    id: "task-feedback-tahlili",
    slug: "teskari-aloqa-tahlili",
    title: "Mentor teskari aloqasining tahlili",
    description:
      "Mentordan olgan teskari aloqangizni tahlil qiling: har bir fikrni xatti-harakat yoki did sifatida ajrating, ikkitasini keyingi dars uchun tanlang va tanlovingizni asoslang. Qaysi fikr bilan rozi bo'lmaganingizni ham yozing — sababi bilan.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-4",
    area: "motivatsiya",
    bloom: "baholash",
    duration: "30 daqiqa",
    timerMin: 30,
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },

  {
    id: "task-refleksiv-esse",
    slug: "refleksiv-esse",
    title: "Amaliyot bo'yicha refleksiv esse",
    description:
      "Pedagogik amaliyot yakunida refleksiv esse yozing. To'rt qismni saqlang: aniq dalil bilan tasvir, sabab, nazariy bog'lanish (ZPD, Blum, konstruktiv moslashuv) va keyingi qadam. Kamida bitta muvaffaqiyatni ham tahlil qiling — nega ishlaganini tushuntiring.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-5",
    area: "motivatsiya",
    bloom: "baholash",
    duration: "1 soat",
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },


  {
    id: "task-lad-tonallik-test",
    slug: "lad-va-tonallik-testi",
    title: "Lad va tonallik testi",
    description:
      "Major va minor tuzilishi, parallel va bir nomli tonalliklar, kvinta doirasi va kalit belgilari bo'yicha test.",
    type: "test",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-6",
    area: "nazariya",
    bloom: "tushunish",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "lt1",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "Natural major gammasining tuzilishi qanday?",
        options: [
          { id: "a", text: "butun-butun-yarim-butun-butun-butun-yarim" },
          { id: "b", text: "butun-yarim-butun-butun-yarim-butun-butun" },
          { id: "c", text: "yarim-butun-butun-yarim-butun-butun-butun" },
          { id: "d", text: "Barcha masofalar teng" },
        ],
        correctId: "a",
      },
      {
        id: "lt2",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt: "Fa majorning kalitida nechta va qanday belgi bor?",
        options: [
          { id: "a", text: "Bitta diez (fa♯)" },
          { id: "b", text: "Bitta bemol (si♭)" },
          { id: "c", text: "Ikkita bemol" },
          { id: "d", text: "Belgi yo'q" },
        ],
        correctId: "b",
        explanation:
          "Bitta bemolli tonallik — fa major; uning paralleli re minor.",
      },
      {
        id: "lt3",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt: "Sol majorning parallel minori qaysi?",
        options: [
          { id: "a", text: "Mi minor" },
          { id: "b", text: "Sol minor" },
          { id: "c", text: "Re minor" },
          { id: "d", text: "Lya minor" },
        ],
        correctId: "a",
        explanation:
          "Parallel minor major tonikasidan kichik tersiya pastda: sol dan mi gacha.",
      },
      {
        id: "lt4",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "Bemollar kalitda qanday tartibda qo'yiladi?",
        options: [
          { id: "a", text: "fa · do · sol · re · lya · mi · si" },
          { id: "b", text: "si · mi · lya · re · sol · do · fa" },
          { id: "c", text: "do · re · mi · fa · sol · lya · si" },
          { id: "d", text: "Tartibsiz" },
        ],
        correctId: "b",
      },
      {
        id: "lt5",
        area: "nazariya",
        bloom: "tushunish",
        kind: "multiple",
        prompt: "Parallel tonalliklar haqida qaysi fikrlar to'g'ri?",
        options: [
          { id: "a", text: "Kalit belgilari bir xil" },
          { id: "b", text: "Tonikasi bir xil" },
          { id: "c", text: "Minor tonikasi majordan kichik tersiya pastda" },
          { id: "d", text: "Tovush tarkibi bir xil" },
        ],
        correctIds: ["a", "c", "d"],
        explanation:
          "Tonikasi bir xil bo'lgani — bir nomli tonalliklar, parallel emas.",
      },
      {
        id: "lt6",
        area: "nazariya",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Asar lya minorda yozilgan, lekin ohangda sol♯ tovushi uchrayapti. Bu nima?",
        options: [
          { id: "a", text: "Xato yozuv" },
          { id: "b", text: "Garmonik minor — yettinchi bosqich ko'tarilgan" },
          { id: "c", text: "Tonallik o'zgargan" },
          { id: "d", text: "Major gammasi" },
        ],
        correctId: "b",
      },
    ],
  },

  {
    id: "task-jor-tuzish",
    slug: "ohangga-jor-tuzish",
    title: "Ohangga jo'r tuzish",
    description:
      "Berilgan yoki o'zingiz tanlagan sodda ohangga uchta asosiy akkord (T, S, D) yordamida jo'r tuzing. Har bir takt uchun tanlagan akkordingizni yozing va nega aynan shuni tanlaganingizni kuchli zarbdagi tovushga tayanib asoslang. Oxirida qanday kadans ishlatganingizni ko'rsating.",
    type: "loyiha",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-7",
    area: "nazariya",
    bloom: "qollash",
    duration: "40 daqiqa",
    timerMin: 40,
    submission: "matn",
    rubric: RUBRIKA_TAHLIL,
  },

  {
    id: "task-temp-dinamika-test",
    slug: "temp-va-dinamika-testi",
    title: "Temp, dinamika va ifoda belgilari testi",
    description:
      "Nota matnidagi ko'rsatmalar: temp atamalari, dinamika belgilari va shtrixlar bo'yicha test.",
    type: "test",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-8",
    area: "nazariya",
    bloom: "bilish",
    duration: "10 daqiqa",
    timerMin: 10,
    submission: "test",
    questions: [
      {
        id: "td1",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "Temp atamalarini sekindan tezga qarab to'g'ri tartiblang.",
        options: [
          { id: "a", text: "Allegro → Andante → Largo" },
          { id: "b", text: "Largo → Andante → Allegro" },
          { id: "c", text: "Andante → Largo → Presto" },
          { id: "d", text: "Presto → Allegro → Moderato" },
        ],
        correctId: "b",
      },
      {
        id: "td2",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "pp belgisi nimani bildiradi?",
        options: [
          { id: "a", text: "Juda kuchli" },
          { id: "b", text: "Juda sekin" },
          { id: "c", text: "O'rtacha kuchli" },
          { id: "d", text: "Asta pasaytirib" },
        ],
        correctId: "b",
      },
      {
        id: "td3",
        area: "nazariya",
        bloom: "tushunish",
        kind: "single",
        prompt: "legato qanday ijroni talab qiladi?",
        options: [
          { id: "a", text: "Qisqa, ajratib" },
          { id: "b", text: "Uzmasdan, bog'lab" },
          { id: "c", text: "Juda tez" },
          { id: "d", text: "Ta'kidlab, zarb bilan" },
        ],
        correctId: "b",
      },
      {
        id: "td4",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt:
          "Nota matnida «rit.» va undan keyin «a tempo» yozilgan. Ijro qanday bo'ladi?",
        options: [
          { id: "a", text: "Tezlashtiriladi, keyin yana tezlashtiriladi" },
          { id: "b", text: "Sekinlashtiriladi, keyin avvalgi tempga qaytiladi" },
          { id: "c", text: "Kuchaytiriladi, keyin pasaytiriladi" },
          { id: "d", text: "To'xtatiladi" },
        ],
        correctId: "b",
      },
      {
        id: "td5",
        area: "nazariya",
        bloom: "tushunish",
        kind: "multiple",
        prompt: "Qaysilari shtrix (tovush hosil qilish usuli) hisoblanadi?",
        options: [
          { id: "a", text: "legato" },
          { id: "b", text: "staccato" },
          { id: "c", text: "marcato" },
          { id: "d", text: "crescendo" },
        ],
        correctIds: ["a", "b", "c"],
        explanation: "crescendo — dinamika, shtrix emas.",
      },
      {
        id: "td6",
        area: "nazariya",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Notaning o'ng tomonida nuqta bor. Bu nimani bildiradi?",
        options: [
          { id: "a", text: "Staccato" },
          { id: "b", text: "Davomiylik yarmiga uzayadi" },
          { id: "c", text: "Akzent" },
          { id: "d", text: "Fermata" },
        ],
        correctId: "b",
        explanation:
          "Nota yonidagi nuqta davomiylikni yarmiga uzaytiradi; staccato belgisi esa nota ustida turadi.",
      },
    ],
  },

  {
    id: "task-diktant",
    slug: "solfedjio-va-diktant",
    title: "Solfedjio va eshituv diktanti",
    description:
      "Ikki qismli amaliy ish. Birinchi qism: platformadagi cholg'uda 4–8 taktli sodda ohang chalib, uni yozib oling. Ikkinchi qism: bir kun o'tgach yozuvni tinglab, ohangni notaga tushiring (o'lchov, tonallik, ritm va balandlik bilan), so'ng o'z yozuvingiz bilan solishtirib, qayerda xato qilganingizni va nega shunday bo'lganini yozing.",
    type: "ijro",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-9",
    area: "eshituv",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "ijro",
    instrument: "nay",
    exerciseId: "n-ohang",
    rubric: RUBRIKA_IJRO,
  },

];

export const TOPSHIRIQ_BY_SLUG = new Map(TOPSHIRIQLAR.map((t) => [t.slug, t]));
export const TOPSHIRIQ_BY_ID = new Map(TOPSHIRIQLAR.map((t) => [t.id, t]));

export function tasksByType(type: TaskType | "barcha"): Task[] {
  return type === "barcha"
    ? TOPSHIRIQLAR
    : TOPSHIRIQLAR.filter((t) => t.type === type);
}

/** Rubrikaning jami bali — baholashda foizga aylantirish uchun. */
export function rubricMax(rubric: Rubric): number {
  return rubric.criteria.reduce((s, c) => s + c.maxPoints, 0);
}
