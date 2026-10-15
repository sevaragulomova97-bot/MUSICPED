import type { BloomLevel } from "@/lib/domain/types";

/**
 * Pedagogik amaliyot (mentorlik) bosqichlari.
 *
 * Dissertatsiyada kasbiy tayyorgarlik faqat bilim bilan o'lchanmaydi —
 * talaba haqiqiy sinfda ishlashni bosqichma-bosqich o'zlashtiradi.
 * Bu uch bosqich **D. Schön** ning «reflective practitioner» g'oyasiga
 * tayanadi: har bosqichda kuzatish, bajarish va o'z ishini tahlil qilish
 * birga boradi.
 *
 * Bosqichlar ketma-ketligi Vigotskiyning yaqin rivojlanish zonasiga ham
 * mos: avval ustoz bilan (kuzatuv), keyin yordam bilan (mikro-o'qitish),
 * oxirida mustaqil (to'liq dars).
 */

export type MentorshipCriterion = {
  id: string;
  title: string;
  description: string;
};

export type MentorshipStage = {
  id: string;
  title: string;
  /** Qisqa maqsad — nima uchun bu bosqich bor */
  goal: string;
  /** Taxminiy davomiylik */
  duration: string;
  bloom: BloomLevel;
  /** Talaba nima qiladi */
  tasks: string[];
  /** Kuzatuv varaqasi mezonlari (har biri 1–5 ball) */
  criteria: MentorshipCriterion[];
  /** Bosqich oxirida talaba javob beradigan refleksiya savollari */
  reflection: string[];
};

export const MENTORLIK_BOSQICHLARI: MentorshipStage[] = [
  {
    id: "kuzatuv",
    title: "1-bosqich. Kuzatuv",
    goal:
      "Tajribali o'qituvchining darsini maqsadli kuzatish va metodik qarorlarni ko'rib o'rganish",
    duration: "2 hafta · 6–8 dars",
    bloom: "tahlil",
    tasks: [
      "Har bir darsni kuzatuv varaqasi bilan yozib chiqish",
      "Darsning maqsadi, bosqichlari va vaqt taqsimotini chizmada ko'rsatish",
      "O'qituvchi qo'llagan kamida uchta metodik usulni nomlash va nima uchun ishlaganini izohlash",
      "Bitta «kutilmagan vaziyat» va o'qituvchining javobini tahlil qilish",
    ],
    criteria: [
      {
        id: "maqsad-ajratish",
        title: "Dars maqsadini ajratish",
        description: "Kuzatuvchi darsning o'quv maqsadini aniq va to'g'ri nomlagan",
      },
      {
        id: "bosqich",
        title: "Bosqichlarni aniqlash",
        description: "Darsning tuzilmasi va vaqt taqsimoti to'g'ri qayd etilgan",
      },
      {
        id: "usul",
        title: "Metodik usullarni tanish",
        description: "Qo'llangan usullar nomlangan va ta'siri izohlangan",
      },
      {
        id: "yozuv",
        title: "Yozuv sifati",
        description: "Kuzatuv varaqasi to'liq, aniq va o'qiladigan holda yuritilgan",
      },
    ],
    reflection: [
      "Kuzatgan darsda sizni eng ko'p nima hayratga soldi?",
      "O'zingiz shu darsni o'tganingizda nimani boshqacha qilgan bo'lardingiz va nega?",
    ],
  },
  {
    id: "mikro",
    title: "2-bosqich. Mikro-o'qitish",
    goal:
      "Darsning bir bo'lagini kichik guruhda o'tib ko'rish — xatolar narxi past bo'lgan sharoitda",
    duration: "3 hafta · 3 ta mikro-dars",
    bloom: "qollash",
    tasks: [
      "10–15 daqiqalik dars bo'lagini loyihalash (maqsad, bosqich, baholash)",
      "Guruhdoshlar oldida o'tish va videoga yozib olish",
      "Guruhdoshlar va mentordan teskari aloqa olish",
      "Teskari aloqadan keyin ishlanmani qayta tuzish va ikkinchi marta o'tish",
    ],
    criteria: [
      {
        id: "loyiha",
        title: "Ishlanma sifati",
        description: "Maqsad o'lchanadigan, bosqichlar maqsadga mos, vaqt real",
      },
      {
        id: "tushuntirish",
        title: "Tushuntirish aniqligi",
        description: "Material bosqichma-bosqich, misollar bilan tushuntirilgan",
      },
      {
        id: "aloqa",
        title: "Sinf bilan aloqa",
        description: "Savol beradi, javobni kutadi, diqqatni ushlab turadi",
      },
      {
        id: "ijro",
        title: "Musiqiy ijro",
        description: "Cholg'uda yoki ovozda namuna toza va ishonchli ko'rsatilgan",
      },
      {
        id: "tuzatish",
        title: "Teskari aloqani qo'llash",
        description: "Ikkinchi urinishda birinchi marta aytilgan kamchilik tuzatilgan",
      },
    ],
    reflection: [
      "Birinchi va ikkinchi urinish o'rtasida nimani o'zgartirdingiz?",
      "Qaysi lahzada o'zingizni eng noqulay sezdingiz va bunga nima sabab bo'ldi?",
    ],
  },
  {
    id: "mustaqil",
    title: "3-bosqich. Mustaqil dars",
    goal:
      "Haqiqiy sinfda to'liq darsni mustaqil loyihalash, o'tish va o'zini baholash",
    duration: "4 hafta · 4–6 to'liq dars",
    bloom: "baholash",
    tasks: [
      "To'liq dars ishlanmasini tayyorlash va mentor bilan kelishish",
      "Darsni mustaqil o'tish",
      "O'quvchilarning natijasini o'zi tuzgan mezon bilan baholash",
      "Dars tahlilini yozish: nima ishladi, nima ishlamadi, keyingi darsda nima o'zgaradi",
    ],
    criteria: [
      {
        id: "loyihalash",
        title: "Loyihalash mustaqilligi",
        description: "Ishlanma mustaqil tuzilgan, o'quv natijasiga bog'langan",
      },
      {
        id: "boshqarish",
        title: "Sinfni boshqarish",
        description: "Vaqt, tartib va o'quvchilar faolligi nazoratda",
      },
      {
        id: "individual",
        title: "Individual yondashuv",
        description: "Turli darajadagi o'quvchilarga mos topshiriq berilgan",
      },
      {
        id: "baholash",
        title: "Baholash asosliligi",
        description: "Baho mezonga tayanadi va o'quvchiga tushuntirilgan",
      },
      {
        id: "refleksiya",
        title: "Refleksiya chuqurligi",
        description: "Tahlil aniq dalillarga tayanadi, keyingi qadam belgilangan",
      },
    ],
    reflection: [
      "Darsning qaysi qismi rejadan chetga chiqdi va siz qanday qaror qabul qildingiz?",
      "Shu dars sizning o'qituvchi sifatidagi qaysi kuchli tomoningizni ko'rsatdi?",
      "Keyingi darsda aniq nimani boshqacha qilasiz?",
    ],
  },
];

export const BOSQICH_BY_ID = new Map(MENTORLIK_BOSQICHLARI.map((b) => [b.id, b]));

/** Kuzatuv varaqasidagi har bir mezon 1 dan 5 gacha baholanadi. */
export const MEZON_MAX = 5;

export const MEZON_IZOHI: Record<number, string> = {
  1: "Boshlang'ich — ko'rsatma bilan bajaradi",
  2: "Rivojlanmoqda — ayrim qadamlarda yordam kerak",
  3: "Yetarli — mustaqil bajaradi, kamchiliklar bor",
  4: "Yaxshi — ishonchli va izchil bajaradi",
  5: "Namunali — boshqalarga ko'rsatish mumkin",
};

/** Bosqichdagi barcha mezonlar bo'yicha maksimal ball. */
export function stageMax(stage: MentorshipStage): number {
  return stage.criteria.length * MEZON_MAX;
}
