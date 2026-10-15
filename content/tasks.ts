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
