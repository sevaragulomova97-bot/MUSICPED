/**
 * Individual rivojlanish yo'nalishi (IRY) algoritmi.
 *
 * Dissertatsiyaning nazariy modelini kodga aylantiradi:
 *
 *  • L.S. Vigotskiy — yaqin rivojlanish zonasi: har bir yo'nalish uchun talabaning
 *    joriy darajasi uch zonadan biriga tushadi (asosiy / ZPD / mustaqil) va
 *    topshiriq aynan shu zonaga moslab tanlanadi.
 *  • B. Blum taksonomiyasi — topshiriq darajasi bosqichma-bosqich ko'tariladi:
 *    talaba joriy darajada 80%+ natija ko'rsatgandagina keyingisiga o'tadi.
 *  • K. Rojers — eng kuchli yo'nalishga ijodiy topshiriq qo'shiladi (motivatsiya).
 *  • D. Schön — har bir element refleksiya savoli bilan birga keladi.
 *
 * Butun modul — **sof funksiyalar**: tashqi holat, sana yoki tasodif yo'q
 * (sana kerak bo'lsa argument sifatida uzatiladi). Shu sababli natija har doim
 * takrorlanadi va unit-testlar bilan to'liq qoplanadi.
 */

import {
  BLOOM_DARAJALARI,
  type AreaScores,
  type BloomLevel,
  type DiagnosticArea,
  DIAGNOSTIKA_YONALISHLARI,
  groupScores,
  overallScore,
  type StudentProfileType,
  type TaskType,
  YONALISH_NOMI,
  type ZpdZone,
  zpdZone,
} from "@/lib/domain/types";

/* ───────────────────────────── Turlar ───────────────────────────── */

/** Bajarilgan topshiriq natijasi — adaptiv qayta hisoblash uchun. */
export type TaskResult = {
  area: DiagnosticArea;
  bloom: BloomLevel;
  /** 0–100 */
  score: number;
  /** ISO sana-vaqt */
  completedAt: string;
};

export type LearningPathItem = {
  /** Barqaror identifikator — bir xil kirishda doim bir xil bo'ladi. */
  id: string;
  area: DiagnosticArea;
  zone: ZpdZone;
  bloom: BloomLevel;
  taskType: TaskType;
  /** 1 — eng ustuvor */
  priority: number;
  /** Nega aynan shu topshiriq tavsiya etilgani — talabaga ko'rsatiladi */
  reason: string;
  /** Bosqichli yordam (scaffolding) — zona pastroq bo'lsa, ko'proq qadam */
  scaffolding: string[];
  /** Refleksiya savoli (Schön) */
  reflection: string;
};

export type LearningPath = {
  profileType: StudentProfileType;
  /** Eng kuchli yo'nalishlar (kamayish tartibida, ko'pi bilan 2 ta) */
  strengths: DiagnosticArea[];
  /** Eng zaif yo'nalishlar (o'sish tartibida, ko'pi bilan 2 ta) */
  weaknesses: DiagnosticArea[];
  items: LearningPathItem[];
  /** Matnli shaxsiy tavsiyalar */
  recommendations: string[];
};

export type PersonalizationInput = {
  scores: AreaScores;
  /** Oldingi topshiriqlar natijasi — Blum darajasini ko'tarish uchun */
  history?: TaskResult[];
  /** Rejadagi elementlar soni (ijodiy topshiriqdan tashqari) */
  maxItems?: number;
};

/* ──────────────────── Blum darajasini tanlash ──────────────────── */

/** Zona bo'yicha boshlang'ich Blum darajasi. */
const ZONA_BOSHLANGICH_BLOOM: Record<ZpdZone, BloomLevel> = {
  asosiy: "bilish",
  zpd: "qollash",
  mustaqil: "tahlil",
};

/** Keyingi darajaga o'tish uchun kerakli natija (foiz). */
export const BLOOM_OTISH_CHEGARASI = 80;

/** Darajani o'rnatilgan deb hisoblash uchun kerakli urinishlar soni. */
export const BLOOM_MIN_URINISH = 2;

function nextBloom(level: BloomLevel): BloomLevel {
  const i = BLOOM_DARAJALARI.indexOf(level);
  return BLOOM_DARAJALARI[Math.min(i + 1, BLOOM_DARAJALARI.length - 1)];
}

/**
 * Yo'nalish uchun keyingi Blum darajasini aniqlaydi.
 *
 * Zona bergan boshlang'ich darajadan boshlanadi va tarixga qarab ko'tariladi:
 * talaba shu darajada kamida {@link BLOOM_MIN_URINISH} marta ishlagan va
 * o'rtacha natijasi {@link BLOOM_OTISH_CHEGARASI} dan kam bo'lmasa — keyingisiga o'tadi.
 */
export function resolveBloom(
  area: DiagnosticArea,
  zone: ZpdZone,
  history: TaskResult[] = [],
): BloomLevel {
  let level = ZONA_BOSHLANGICH_BLOOM[zone];

  // Eng yuqori darajaga yetgunicha ko'tarilib boramiz.
  for (let step = 0; step < BLOOM_DARAJALARI.length; step += 1) {
    const attempts = history.filter((h) => h.area === area && h.bloom === level);
    if (attempts.length < BLOOM_MIN_URINISH) break;

    const average =
      attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length;
    if (average < BLOOM_OTISH_CHEGARASI) break;

    const higher = nextBloom(level);
    if (higher === level) break; // allaqachon eng yuqori daraja
    level = higher;
  }

  return level;
}

/* ──────────────────── Topshiriq turi va yordam ──────────────────── */

/** Zona va yo'nalishga mos topshiriq turi. */
function resolveTaskType(area: DiagnosticArea, zone: ZpdZone): TaskType {
  const amaliyYonalish =
    area === "texnika" || area === "ritm" || area === "sahna";

  if (zone === "asosiy") return amaliyYonalish ? "mashq" : "test";
  if (zone === "zpd") return amaliyYonalish ? "ijro" : "mashq";
  return amaliyYonalish ? "ijro" : "loyiha";
}

/**
 * Bosqichli yordam (scaffolding).
 *
 * Vigotskiy modeliga ko'ra yordam miqdori zonaga teskari proporsional:
 * asosiy zonada eng ko'p, mustaqil zonada deyarli yo'q.
 */
function buildScaffolding(area: DiagnosticArea, zone: ZpdZone): string[] {
  const nom = YONALISH_NOMI[area].toLowerCase();

  if (zone === "asosiy") {
    return [
      `${YONALISH_NOMI[area]} bo'yicha asosiy tushunchalarni takrorlang`,
      "Namunani o'qituvchi bilan birga tahlil qiling",
      "Sodda misolda mustaqil sinab ko'ring",
      "Xatolaringizni belgilab, qayta bajaring",
    ];
  }

  if (zone === "zpd") {
    return [
      `Topshiriqni ${nom} bo'yicha namunaga qarab boshlang`,
      "Qiyin joyda maslahat tugmasidan foydalaning",
      "Natijani o'zingiz tekshirib, keyin topshiring",
    ];
  }

  return ["Topshiriqni mustaqil bajaring va yondashuvingizni asoslang"];
}

function buildReflection(area: DiagnosticArea, zone: ZpdZone): string {
  if (zone === "asosiy") {
    return `${YONALISH_NOMI[area]} bo'yicha bugun nimani tushundingiz va qaysi joyi qiyin bo'ldi?`;
  }
  if (zone === "zpd") {
    return `Qaysi yordam sizga eng foydali bo'ldi va keyingi safar undan voz kecha olasizmi?`;
  }
  return `Bu topshiriqda tanlagan yechimingizni qanday asoslaysiz? Boshqa qanday yo'l bor edi?`;
}

/* ─────────────────────── Profil turini aniqlash ─────────────────────── */

/**
 * Talaba profil turini aniqlaydi.
 *
 * Qoidalar **tartib bilan** tekshiriladi — birinchi mos kelgani g'olib.
 * Tartib dissertatsiyadagi tipik profillar ta'rifidan kelib chiqadi.
 */
export function detectProfileType(scores: AreaScores): StudentProfileType {
  const guruh = groupScores(scores);
  const umumiy = overallScore(scores);
  const farq = guruh.ijro - guruh.nazariya;

  // 1. "Ijodkor, lekin tartibsiz" — ijodkorlik yuqori, ammo tizimli ish sust.
  if (
    scores.ijodkorlik >= 75 &&
    Math.min(scores.nazariya, scores.metodika) < 60
  ) {
    return "ijodkor";
  }

  // 2. "Ijrochilikda kuchli, nazariyada sust"
  if (farq >= 15) return "ijrochi";

  // 3. "Nazariyasi mustahkam, ijroda o'rtacha"
  if (farq <= -15) return "nazariyotchi";

  // 4. "Mehnatkash, tabiiy qobiliyat o'rtacha" — motivatsiya yuqori, natija o'rtacha.
  if (scores.motivatsiya >= 75 && umumiy <= 70) return "mehnatkash";

  // 5. Qolgan hollar — yo'nalishlar nisbatan tekis rivojlangan.
  return "muvozanatli";
}

/* ───────────────────────── Tartiblash ───────────────────────── */

/**
 * Yo'nalishlarni ball bo'yicha o'sish tartibida tartiblaydi.
 * Ballar teng bo'lsa — {@link DIAGNOSTIKA_YONALISHLARI} dagi qat'iy tartib
 * hal qiladi, shunda natija har doim bir xil chiqadi.
 */
function sortByScoreAsc(scores: AreaScores): DiagnosticArea[] {
  return [...DIAGNOSTIKA_YONALISHLARI].sort((a, b) => {
    const diff = scores[a] - scores[b];
    if (diff !== 0) return diff;
    return DIAGNOSTIKA_YONALISHLARI.indexOf(a) - DIAGNOSTIKA_YONALISHLARI.indexOf(b);
  });
}

/* ─────────────────────── Tavsiya matnlari ─────────────────────── */

const TAVSIYA_MATNI: Record<DiagnosticArea, string> = {
  eshituv: "Har kuni 10 daqiqa interval va akkordlarni eshitib aniqlash mashqini bajaring",
  ritm: "Metronom bilan sekin tempdan boshlab ritmik naqshlarni mustahkamlang",
  texnika: "Barmoq mashqlarini kundalik rejaga kiriting va tempni asta oshiring",
  sahna: "Mashqlaringizni yozib oling va o'zingizni tashqaridan baholang",
  ijodkorlik: "Har hafta qisqa improvizatsiya yaratib, portfolioga qo'shing",
  motivatsiya: "Qisqa va aniq haftalik maqsad qo'ying, natijani kundalikka yozing",
  nazariya: "Nota savodida asosiy tushunchalarni mustahkamlang",
  metodika: "Dars ishlanmasi tuzish bo'yicha ko'proq amaliy topshiriq bajaring",
};

const PROFIL_TAVSIYASI: Record<StudentProfileType, string> = {
  ijrochi:
    "Ijro mahoratingiz kuchli — endi uni nazariy asos bilan mustahkamlasangiz, o'qituvchi sifatida tushuntirish qobiliyatingiz ham ortadi",
  nazariyotchi:
    "Nazariy bilimingiz mustahkam — uni amaliy ijroda qo'llashga ko'proq vaqt ajrating",
  ijodkor:
    "Ijodiy salohiyatingiz yuqori — uni tizimli reja bilan birlashtirsangiz, natija sezilarli oshadi",
  mehnatkash:
    "Mehnatsevarligingiz asosiy kuchingiz — kichik, lekin muntazam qadamlar bilan barqaror o'sishga erishasiz",
  muvozanatli:
    "Yo'nalishlaringiz tekis rivojlangan — endi o'zingiz tanlagan sohada chuqurlashishingiz mumkin",
};

/* ───────────────────────── Asosiy funksiya ───────────────────────── */

export const IRY_DEFAULT_ITEMS = 5;

/**
 * Diagnostika natijasidan individual o'quv rejasini quradi.
 *
 * Tartib:
 *  1. Eng zaif 2 yo'nalish ustuvor (1- va 2-o'rin);
 *  2. qolgan yo'nalishlar ball bo'yicha o'sish tartibida;
 *  3. eng kuchli yo'nalishga bitta ijodiy topshiriq qo'shiladi — motivatsiya uchun.
 */
export function buildLearningPath({
  scores,
  history = [],
  maxItems = IRY_DEFAULT_ITEMS,
}: PersonalizationInput): LearningPath {
  const tartiblangan = sortByScoreAsc(scores);
  const weaknesses = tartiblangan.slice(0, 2);
  const strengths = [...tartiblangan].reverse().slice(0, 2);

  const tanlangan = tartiblangan.slice(0, Math.max(0, maxItems));

  const items: LearningPathItem[] = tanlangan.map((area, index) => {
    const zone = zpdZone(scores[area]);
    const bloom = resolveBloom(area, zone, history);
    const ustuvorlik = ["birinchi", "ikkinchi"][index];

    return {
      id: `iry-${area}-${bloom}`,
      area,
      zone,
      bloom,
      taskType: resolveTaskType(area, zone),
      priority: index + 1,
      reason: ustuvorlik
        ? `${YONALISH_NOMI[area]} — eng zaif yo'nalishlaringizdan biri (${scores[area]}%), shuning uchun ${ustuvorlik} o'rinda`
        : `${YONALISH_NOMI[area]} bo'yicha natijangiz ${scores[area]}% — bu yo'nalishni mustahkamlash foydali`,
      scaffolding: buildScaffolding(area, zone),
      reflection: buildReflection(area, zone),
    };
  });

  // Eng kuchli yo'nalishga ijodiy topshiriq — Rojersning motivatsion tamoyili.
  const engKuchli = strengths[0];
  if (engKuchli !== undefined) {
    const zone = zpdZone(scores[engKuchli]);
    items.push({
      id: `iry-ijodiy-${engKuchli}`,
      area: engKuchli,
      zone,
      // Ijodiy topshiriq doim yuqori Blum darajasida bo'ladi.
      bloom: "sintez",
      taskType: "loyiha",
      priority: items.length + 1,
      reason: `${YONALISH_NOMI[engKuchli]} — eng kuchli tomoningiz (${scores[engKuchli]}%). Bu yerda ijodiy topshiriq bajarib, natijangizni portfolioga qo'shing`,
      scaffolding: ["G'oyangizni erkin tanlang va natijani portfolioga yuklang"],
      reflection: `Bu ishni yaratishda nimadan ilhom oldingiz va uni darsda qanday ishlatgan bo'lardingiz?`,
    });
  }

  return {
    profileType: detectProfileType(scores),
    strengths,
    weaknesses,
    items,
    recommendations: buildRecommendations(scores, weaknesses),
  };
}

function buildRecommendations(
  scores: AreaScores,
  weaknesses: DiagnosticArea[],
): string[] {
  const profil = detectProfileType(scores);
  return [PROFIL_TAVSIYASI[profil], ...weaknesses.map((a) => TAVSIYA_MATNI[a])];
}

/* ──────────────────── Adaptivlik: ballni yangilash ──────────────────── */

/** Yangi natijaning umumiy ballga ta'sir ulushi (0–1). */
export const YANGI_NATIJA_VAZNI = 0.4;

/**
 * Topshiriq natijasidan keyin yo'nalish ballini yangilaydi.
 *
 * Eksponensial silliqlash ishlatiladi: bitta tasodifiy muvaffaqiyat yoki
 * muvaffaqiyatsizlik butun rejani ag'darib yubormasligi uchun yangi natija
 * to'liq emas, {@link YANGI_NATIJA_VAZNI} ulushida hisobga olinadi.
 */
export function applyResult(scores: AreaScores, result: TaskResult): AreaScores {
  const oldingi = scores[result.area];
  const yangi = Math.round(
    oldingi * (1 - YANGI_NATIJA_VAZNI) + result.score * YANGI_NATIJA_VAZNI,
  );
  return { ...scores, [result.area]: Math.max(0, Math.min(100, yangi)) };
}
