import type { BloomLevel, DiagnosticArea } from "@/lib/domain/types";

/**
 * Boshlang'ich diagnostika savollar banki.
 *
 * Savollar 8 ta yo'nalish bo'yicha taqsimlangan. Har bir savolda Blum darajasi
 * ko'rsatilgan — shu orqali diagnostika faqat "biladi/bilmaydi" emas, balki
 * qaysi kognitiv darajada ishlay olishini ham ko'rsatadi.
 *
 * Savol turlari:
 *  • `single`   — bitta to'g'ri javob
 *  • `multiple` — bir nechta to'g'ri javob (qisman ball beriladi)
 *  • `likert`   — 1–5 shkala, to'g'ri javob yo'q (motivatsiya va o'z-o'zini baholash)
 *
 * Eshituv va ritmni **ovoz orqali** tekshiradigan interaktiv savollar B3
 * bosqichida shu bankka qo'shiladi — savol banki oddiy ma'lumot bo'lgani uchun
 * kodga tegmasdan kengaytiriladi.
 */

export type QuestionOption = {
  id: string;
  text: string;
};

/**
 * Parallel shakllar — «A», «B» va «C».
 *
 * Dissertatsiya tajribasi boshlang'ich va yakuniy o'lchovni taqqoslaydi
 * (`lib/research.ts` da juftlashgan t-mezon). Agar ikkala o'lchovda aynan
 * bir xil savollar berilsa, ikkinchi natija qisman **savolni eslab
 * qolish** hisobiga ko'tariladi va o'sishni metodikaga bog'lab bo'lmaydi.
 *
 * Shuning uchun bank uchta teng shaklga bo'lingan: har bir yo'nalishda
 * A, B va C da 4 tadan savol bor. O'lchov turi shaklni belgilaydi
 * (`variantForKind`): boshlang'ich — A, oraliq nazorat — B, yakuniy — C.
 * Shu bilan uchala o'lchov ham bir-biridan mustaqil bo'ladi va bitta
 * o'lchov baribir 32 savoldan iborat qoladi.
 *
 * Moslik **mazmun va daraja** bo'yicha qilingan, empirik qiyinlik
 * bo'yicha emas — buning uchun pilot ma'lumot kerak bo'lardi. Shuni
 * hisobotda ko'rsatish kerak.
 */
export type QuestionVariant = "A" | "B" | "C";

type Base = {
  id: string;
  area: DiagnosticArea;
  bloom: BloomLevel;
  prompt: string;
  /** Javobdan keyin ko'rsatiladigan izoh */
  explanation?: string;
  /** Savolning og'irligi (standart 1) */
  points?: number;
};

export type Question =
  | (Base & { kind: "single"; options: QuestionOption[]; correctId: string })
  | (Base & { kind: "multiple"; options: QuestionOption[]; correctIds: string[] })
  | (Base & {
      kind: "likert";
      lowLabel: string;
      highLabel: string;
      /**
       * Teskari baholanadigan band.
       *
       * Likert shkalasida hamma bandga «5» qo'yib chiqish eng oson yo'l
       * (rozilik moyilligi). Teskari bandda yuqori ball **past**
       * motivatsiyani bildiradi, shuning uchun o'ylamay to'ldirilgan
       * varaqa o'rtacha natija beradi va bu ko'rinib qoladi.
       */
      reverse?: boolean;
    });

/**
 * Diagnostika banki elementi.
 *
 * `variant` aynan shu bankka tegishli: darslar va topshiriqlar ichidagi
 * test savollarida parallel shakl tushunchasi yo'q, shuning uchun u
 * umumiy `Question` tipiga emas, shu yerga qo'shiladi.
 */
export type DiagnosticQuestion = Question & { variant: QuestionVariant };

const t = (id: string, text: string): QuestionOption => ({ id, text });

export const DIAGNOSTIKA_SAVOLLARI: DiagnosticQuestion[] = [
  /* ───────────────────── Nazariy bilim ───────────────────── */
  {
    id: "q-naz-1",
    variant: "A",
    area: "nazariya",
    bloom: "bilish",
    kind: "single",
    prompt: "Skripka (violin) kaliti nota chizig'ining qaysi chizig'idan boshlanadi?",
    options: [t("a", "1-chiziq"), t("b", "2-chiziq"), t("c", "3-chiziq"), t("d", "4-chiziq")],
    correctId: "b",
    explanation:
      "Skripka kaliti 2-chiziqdan boshlanadi va shu chiziqda birinchi oktava «sol» notasi joylashadi. Shuning uchun u «sol kaliti» ham deyiladi.",
  },
  {
    id: "q-naz-2",
    variant: "B",
    area: "nazariya",
    bloom: "bilish",
    kind: "single",
    prompt: "Do major gammasida nechta alteratsiya belgisi (diez yoki bemol) bor?",
    options: [t("a", "Bitta ham yo'q"), t("b", "Bitta"), t("c", "Ikkita"), t("d", "Uchta")],
    correctId: "a",
    explanation: "Do major — kalit belgilarisiz yagona major gamma, faqat oq klavishlardan iborat.",
  },
  {
    id: "q-naz-3",
    variant: "A",
    area: "nazariya",
    bloom: "tushunish",
    kind: "single",
    prompt: "Sof kvinta intervali necha pog'onani qamrab oladi?",
    options: [t("a", "To'rt"), t("b", "Besh"), t("c", "Olti"), t("d", "Yetti")],
    correctId: "b",
    explanation: "Kvinta — besh pog'onali interval, masalan do–sol. U 7 yarim tondan iborat.",
  },
  {
    id: "q-naz-4",
    variant: "B",
    area: "nazariya",
    bloom: "tushunish",
    kind: "single",
    prompt: "Major trezvuk qanday intervallardan tuzilgan?",
    options: [
      t("a", "Kichik terstiya + katta terstiya"),
      t("b", "Katta terstiya + kichik terstiya"),
      t("c", "Ikki katta terstiya"),
      t("d", "Ikki kichik terstiya"),
    ],
    correctId: "b",
    explanation:
      "Major trezvuk pastdan yuqoriga katta terstiya, so'ng kichik terstiyadan tuziladi. Minor trezvukda tartib teskari.",
  },
  {
    id: "q-naz-5",
    variant: "A",
    area: "nazariya",
    bloom: "qollash",
    kind: "multiple",
    prompt: "Quyidagilardan qaysilari kalit belgisi bo'la oladi? (bir nechta javob)",
    options: [t("a", "Diez"), t("b", "Bemol"), t("c", "Bekar"), t("d", "Fermata")],
    correctIds: ["a", "b"],
    explanation:
      "Kalit belgisi sifatida faqat diez va bemol yoziladi. Bekar — vaqtinchalik bekor qilish belgisi, fermata esa davomiylikni uzaytiradi.",
  },

  {
    id: "q-naz-6",
    variant: "A",
    area: "nazariya",
    bloom: "tushunish",
    kind: "single",
    prompt: "Parallel tonalliklarning umumiy jihati nima?",
    options: [
      t("a", "Tonikasi bir xil"),
      t("b", "Kalit belgilari bir xil"),
      t("c", "Lad turi bir xil"),
      t("d", "Tempi bir xil"),
    ],
    correctId: "b",
    explanation:
      "Parallel tonalliklarda kalit belgilari bir xil, tonika esa kichik tersiya farq qiladi: do major va lya minor.",
  },
  {
    id: "q-naz-7",
    variant: "B",
    area: "nazariya",
    bloom: "qollash",
    kind: "single",
    prompt: "Kalitda ikkita diez (fa♯, do♯) turibdi. Bu qaysi major tonallik?",
    options: [t("a", "Sol major"), t("b", "Re major"), t("c", "Lya major"), t("d", "Mi major")],
    correctId: "b",
    explanation:
      "Oxirgi diezdan yarim ton yuqorisi major tonikasi: do♯ dan yarim ton yuqorida re turadi.",
  },
  {
    id: "q-naz-8",
    variant: "B",
    area: "nazariya",
    bloom: "tahlil",
    kind: "single",
    prompt: "Musiqiy jumla dominantadan tonikaga o'tib tugadi. Bu qanday kadans?",
    options: [
      t("a", "Plagal kadans"),
      t("b", "Yarim kadans"),
      t("c", "To'liq (avtentik) kadans"),
      t("d", "Uzilgan kadans"),
    ],
    correctId: "c",
    explanation:
      "D → T — eng ishonchli yakun, «nuqta». Plagal kadansda S → T, yarim kadansda esa jumla dominantada to'xtaydi.",
  },

  {
    id: "q-naz-9",
    variant: "C",
    area: "nazariya",
    bloom: "bilish",
    kind: "single",
    prompt: "Kalitda bemollar qanday tartibda qo'yiladi?",
    options: [
      t("a", "fa · do · sol · re · lya · mi · si"),
      t("b", "si · mi · lya · re · sol · do · fa"),
      t("c", "do · re · mi · fa · sol · lya · si"),
      t("d", "Tartib yo'q, ixtiyoriy"),
    ],
    correctId: "b",
    explanation: "Bemollar tartibi diezlarnikiga teskari o'qiladi.",
  },
  {
    id: "q-naz-10",
    variant: "C",
    area: "nazariya",
    bloom: "tushunish",
    kind: "single",
    prompt: "Garmonik minorda qaysi bosqich o'zgaradi?",
    options: [
      t("a", "Ikkinchi bosqich pasayadi"),
      t("b", "Uchinchi bosqich ko'tariladi"),
      t("c", "Yettinchi bosqich yarim tonga ko'tariladi"),
      t("d", "Beshinchi bosqich pasayadi"),
    ],
    correctId: "c",
    explanation:
      "Ko'tarilgan yettinchi bosqich tonikaga tortishishni kuchaytiradi va dominanta akkordida ishlatiladi.",
  },
  {
    id: "q-naz-11",
    variant: "C",
    area: "nazariya",
    bloom: "qollash",
    kind: "single",
    prompt: "Do major tonalligida subdominanta qaysi bosqichda quriladi?",
    options: [t("a", "I bosqich"), t("b", "IV bosqich"), t("c", "V bosqich"), t("d", "VII bosqich")],
    correctId: "b",
    explanation: "Subdominanta — IV bosqich akkordi; do majorda u fa major trezvugi bo'ladi.",
  },
  {
    id: "q-naz-12",
    variant: "C",
    area: "nazariya",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "Sakkiz taktli qurilma ikki jumlaga bo'linadi: birinchisi dominantada to'xtaydi, ikkinchisi tonikada tugaydi. Bu qanday shakl?",
    options: [
      t("a", "Variatsiya"),
      t("b", "Period"),
      t("c", "Rondo"),
      t("d", "Kanon"),
    ],
    correctId: "b",
    explanation:
      "Period — ikki jumladan iborat qurilma: birinchisi «savol» (yarim kadans), ikkinchisi «javob» (to'liq kadans).",
  },

  /* ───────────────────── Musiqiy eshituv ───────────────────── */
  {
    id: "q-esh-1",
    variant: "A",
    area: "eshituv",
    bloom: "bilish",
    kind: "single",
    prompt: "Bir oktava ichida nechta yarim ton bor?",
    options: [t("a", "7"), t("b", "8"), t("c", "12"), t("d", "14")],
    correctId: "c",
    explanation: "Temperatsiyalangan tizimda oktava 12 ta teng yarim tonga bo'linadi.",
  },
  {
    id: "q-esh-2",
    variant: "B",
    area: "eshituv",
    bloom: "tushunish",
    kind: "single",
    prompt: "Katta terstiya bilan kichik terstiya orasidagi farq qancha?",
    options: [t("a", "Yarim ton"), t("b", "Bir ton"), t("c", "Bir yarim ton"), t("d", "Farq yo'q")],
    correctId: "a",
    explanation: "Katta terstiya 4 yarim ton, kichik terstiya 3 yarim ton — farq aynan bitta yarim ton.",
  },
  {
    id: "q-esh-3",
    variant: "A",
    area: "eshituv",
    bloom: "bilish",
    kind: "single",
    prompt: "Unison deganda nima tushuniladi?",
    options: [
      t("a", "Bir xil balandlikdagi ikki tovush"),
      t("b", "Oktava oralig'idagi ikki tovush"),
      t("c", "Uch tovushdan iborat akkord"),
      t("d", "Pauzadan keyingi tovush"),
    ],
    correctId: "a",
    explanation: "Unison — balandligi bir xil bo'lgan tovushlarning birga yangrashi.",
  },
  {
    id: "q-esh-4",
    variant: "B",
    area: "eshituv",
    bloom: "tahlil",
    kind: "single",
    prompt: "Major va minor trezvuklar bir-biridan qaysi tovush bilan farq qiladi?",
    options: [t("a", "Prima"), t("b", "Terstiya"), t("c", "Kvinta"), t("d", "Oktava")],
    correctId: "b",
    explanation:
      "Prima va kvinta ikkalasida bir xil; faqat o'rtadagi terstiya tovushi akkord bo'yog'ini belgilaydi.",
  },

  {
    id: "q-esh-5",
    variant: "A",
    area: "eshituv",
    bloom: "tushunish",
    kind: "single",
    prompt:
      "Ikki trezvuk chalindi: biri quvnoq, ikkinchisi g'amgin eshitildi. Farq qaysi tovushda?",
    options: [
      t("a", "Birinchi bosqichda"),
      t("b", "Uchinchi bosqichda"),
      t("c", "Beshinchi bosqichda"),
      t("d", "Farq balandlikda, tovushda emas"),
    ],
    correctId: "b",
    explanation:
      "Major va minorni tonikadan uchinchi bosqichgacha bo'lgan masofa ajratadi: katta yoki kichik tersiya.",
  },
  {
    id: "q-esh-6",
    variant: "B",
    area: "eshituv",
    bloom: "qollash",
    kind: "single",
    prompt: "Eshituv diktantida birinchi qadam qaysi?",
    options: [
      t("a", "Birinchi notani darhol yozish"),
      t("b", "Hech narsa yozmay, umumiy shakl va kayfiyatni tutish"),
      t("c", "Oxirgi notadan boshlash"),
      t("d", "Kalit belgilarini taxmin qilish"),
    ],
    correctId: "b",
    explanation:
      "Birinchi tinglashda yozishga urinish deyarli har doim muvaffaqiyatsiz tugaydi: avval butun, keyin tafsilot.",
  },
  {
    id: "q-esh-7",
    variant: "A",
    area: "eshituv",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "Bitta asarning ikki ijrosi tinglandi. Notalar bir xil, lekin ikkinchisi «gapiryapti». Farq nimada?",
    options: [
      t("a", "Ikkinchisi balandroq chalingan"),
      t("b", "Frazirovka va dinamik reja bor"),
      t("c", "Ikkinchisi tezroq chalingan"),
      t("d", "Boshqa cholg'uda chalingan"),
    ],
    correctId: "b",
    explanation:
      "Bir xil notalarni ma'noli qiladigan narsa — fraza chegaralari, kulminatsiya va dinamika.",
  },
  {
    id: "q-esh-8",
    variant: "B",
    area: "eshituv",
    bloom: "bilish",
    kind: "single",
    prompt: "Nisbiy solmizatsiyada «do» bo'g'ini nimani bildiradi?",
    options: [
      t("a", "Har doim do tovushini"),
      t("b", "Har doim tonikani"),
      t("c", "Eng past tovushni"),
      t("d", "Kalit belgisini"),
    ],
    correctId: "b",
    explanation:
      "Tonallik o'zgarsa ham bo'g'inlar o'zgarmaydi — Kodai tizimining asosiy qulayligi shunda.",
  },

  {
    id: "q-esh-9",
    variant: "C",
    area: "eshituv",
    bloom: "bilish",
    kind: "single",
    prompt: "«Do» dan «sol» gacha bo'lgan interval qanday nomlanadi?",
    options: [t("a", "Kvarta"), t("b", "Kvinta"), t("c", "Seksta"), t("d", "Tersiya")],
    correctId: "b",
    explanation: "Do–sol besh pog'onani qamrab oladi, shuning uchun u kvinta deb ataladi.",
  },
  {
    id: "q-esh-10",
    variant: "C",
    area: "eshituv",
    bloom: "tushunish",
    kind: "single",
    prompt:
      "Bir xil ohang avval past, keyin baland balandlikda chalindi. Quloq uni nega baribir «o'sha ohang» deb taniydi?",
    options: [
      t("a", "Tembr o'zgarmagani uchun"),
      t("b", "Tovushlar orasidagi intervallar saqlangani uchun"),
      t("c", "Temp bir xil bo'lgani uchun"),
      t("d", "Dinamika bir xil bo'lgani uchun"),
    ],
    correctId: "b",
    explanation:
      "Ohangni tanib olishda balandlik emas, tovushlar orasidagi munosabat hal qiladi — transponirovkaning asosi ham shu.",
  },
  {
    id: "q-esh-11",
    variant: "C",
    area: "eshituv",
    bloom: "qollash",
    kind: "single",
    prompt:
      "Ikki ovozli qo'shiqda o'quvchi doim asosiy ohangga «sirg'alib» ketadi. Birinchi navbatda nima qilasiz?",
    options: [
      t("a", "Uni asosiy ovozga o'tkazaman"),
      t("b", "O'z partiyasini alohida, jo'r bilan mustahkamlataman"),
      t("c", "Baland kuylashni so'rayman"),
      t("d", "Ikki ovozdan voz kechaman"),
    ],
    correctId: "b",
    explanation:
      "Ikkinchi ovoz avval alohida mustahkamlanadi: o'z chizig'ini ichida eshitmagan bola uni ansamblda ham ushlab turolmaydi.",
  },
  {
    id: "q-esh-12",
    variant: "C",
    area: "eshituv",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "Sinf qo'shiqni asta-sekin pasaytirib kuylay boshladi. Eng ehtimolli sabab qaysi?",
    options: [
      t("a", "Tonallik juda past olingan"),
      t("b", "Nafas yetmayapti va tovush qo'llab-quvvatlanmayapti"),
      t("c", "Temp juda tez"),
      t("d", "Matn qiyin"),
    ],
    correctId: "b",
    explanation:
      "Intonatsiyaning pasayishi ko'pincha nafas va tayanchning yo'qolishidan kelib chiqadi, quloq xatosidan emas.",
  },

  /* ───────────────────────── Ritm hissi ───────────────────────── */
  {
    id: "q-rit-1",
    variant: "A",
    area: "ritm",
    bloom: "bilish",
    kind: "single",
    prompt: "4/4 o'lchovda butun nota necha zarb davom etadi?",
    options: [t("a", "1"), t("b", "2"), t("c", "3"), t("d", "4")],
    correctId: "d",
    explanation: "4/4 da butun nota to'rt chorak zarbga teng, ya'ni butun taktni egallaydi.",
  },
  {
    id: "q-rit-2",
    variant: "B",
    area: "ritm",
    bloom: "tushunish",
    kind: "single",
    prompt: "Notadan keyin qo'yilgan nuqta nimani bildiradi?",
    options: [
      t("a", "Notani qisqartiradi"),
      t("b", "Davomiylikni yarmiga uzaytiradi"),
      t("c", "Notani ikki barobar uzaytiradi"),
      t("d", "Urg'uni bildiradi"),
    ],
    correctId: "b",
    explanation: "Nuqta nota davomiyligini o'z qiymatining yarmiga uzaytiradi: chorak + nuqta = chorak + sakkizlik.",
  },
  {
    id: "q-rit-3",
    variant: "A",
    area: "ritm",
    bloom: "tushunish",
    kind: "single",
    prompt: "Sinkopa nima?",
    options: [
      t("a", "Tempning tezlashishi"),
      t("b", "Urg'uning kuchsiz zarbga ko'chishi"),
      t("c", "Ovoz balandligining pasayishi"),
      t("d", "Pauzaning uzayishi"),
    ],
    correctId: "b",
    explanation:
      "Sinkopada metrik urg'u kutilgan kuchli zarbdan kuchsiz zarbga siljiydi — bu ritmga jonlilik beradi.",
  },
  {
    id: "q-rit-4",
    variant: "B",
    area: "ritm",
    bloom: "qollash",
    kind: "single",
    prompt: "Metronom 60 BPM ga qo'yilgan. Bitta zarb qancha davom etadi?",
    options: [t("a", "0,5 soniya"), t("b", "1 soniya"), t("c", "1,5 soniya"), t("d", "2 soniya")],
    correctId: "b",
    explanation: "60 BPM — daqiqasiga 60 zarb, demak har bir zarb aniq 1 soniya.",
  },

  {
    id: "q-rit-5",
    variant: "A",
    area: "ritm",
    bloom: "tushunish",
    kind: "single",
    prompt: "Metr va temp orasidagi farq nimada?",
    options: [
      t("a", "Farqi yo'q, ikkalasi bir narsa"),
      t("b", "Metr — zarblarning tartibi, temp — ularning tezligi"),
      t("c", "Metr — tezlik, temp — o'lchov"),
      t("d", "Metr faqat vokal asarlarda bo'ladi"),
    ],
    correctId: "b",
    explanation:
      "Bitta metr (masalan 4/4) istalgan tempda yangrashi mumkin: o'lchov tuzilmani, temp esa tezlikni belgilaydi.",
  },
  {
    id: "q-rit-6",
    variant: "B",
    area: "ritm",
    bloom: "qollash",
    kind: "single",
    prompt: "6/8 o'lchovida kuchli zarblar qayerda bo'ladi?",
    options: [
      t("a", "Faqat birinchi sakkizlikda"),
      t("b", "Birinchi va to'rtinchi sakkizlikda"),
      t("c", "Har bir sakkizlikda"),
      t("d", "Ikkinchi va beshinchi sakkizlikda"),
    ],
    correctId: "b",
    explanation:
      "6/8 ikkita uchlikka bo'linadi, shuning uchun unda ikkita urg'u bor: 1 va 4.",
  },
  {
    id: "q-rit-7",
    variant: "A",
    area: "ritm",
    bloom: "qollash",
    kind: "single",
    prompt: "Nuqtali chorak nota necha sakkizlikka teng?",
    options: [t("a", "Ikkita"), t("b", "Uchta"), t("c", "To'rtta"), t("d", "Bittasiga")],
    correctId: "b",
    explanation:
      "Nuqta notaning davomiyligini yarmiga uzaytiradi: chorak (2 sakkizlik) + yarmi (1 sakkizlik) = 3 sakkizlik.",
  },
  {
    id: "q-rit-8",
    variant: "B",
    area: "ritm",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "Doirada usul «bum — tak-tak — bum — tak» tarzida takrorlanmoqda va har takrorda to'rtta zarb bor. Bu qaysi o'lchovga mos?",
    options: [t("a", "3/4"), t("b", "4/4"), t("c", "6/8"), t("d", "5/4")],
    correctId: "b",
    explanation:
      "Takrorlanish davri to'rt zarbdan iborat bo'lsa, u to'rt choraklik o'lchovga tushadi.",
  },

  {
    id: "q-rit-9",
    variant: "C",
    area: "ritm",
    bloom: "bilish",
    kind: "single",
    prompt: "Pauza nimani bildiradi?",
    options: [
      t("a", "Tempning o'zgarishini"),
      t("b", "Belgilangan davomiylikdagi jimlikni"),
      t("c", "Dinamikaning pasayishini"),
      t("d", "Asarning tugashini"),
    ],
    correctId: "b",
    explanation: "Pauza — o'lchanadigan jimlik; u ham ritmning bir qismi.",
  },
  {
    id: "q-rit-10",
    variant: "C",
    area: "ritm",
    bloom: "tushunish",
    kind: "single",
    prompt: "3/4 va 6/8 o'lchovlari orasidagi asosiy farq nimada?",
    options: [
      t("a", "3/4 da uchta urg'u, 6/8 da oltita urg'u bor"),
      t("b", "3/4 da bitta urg'u va uch chorak, 6/8 da ikkita urg'u va ikki uchlik bor"),
      t("c", "Farqi yo'q, bir xil hisoblanadi"),
      t("d", "6/8 faqat tez asarlarda ishlatiladi"),
    ],
    correctId: "b",
  },
  {
    id: "q-rit-11",
    variant: "C",
    area: "ritm",
    bloom: "qollash",
    kind: "single",
    prompt:
      "Sinf ritmik naqshni qarsak bilan takrorlay olmayapti. Qaysi qadam birinchi bo'lishi kerak?",
    options: [
      t("a", "Tempni oshirish"),
      t("b", "Naqshni qisqartirib, sekin tempda bo'laklab berish"),
      t("c", "Nota yozuvini ko'rsatish"),
      t("d", "Boshqa naqshga o'tish"),
    ],
    correctId: "b",
    explanation:
      "Bo'lak kichrayganda va temp sekinlashganda naqsh ushlanadi; keyin asta tezlashtiriladi.",
  },
  {
    id: "q-rit-12",
    variant: "C",
    area: "ritm",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "Ansamblda temp asta-sekin tezlashib ketdi. Buning eng keng tarqalgan sababi nima?",
    options: [
      t("a", "Metronom noto'g'ri sozlangan"),
      t("b", "Hayajon va bir-birini quvish: har kim oldingisidan ilgarilaydi"),
      t("c", "O'lchov noto'g'ri yozilgan"),
      t("d", "Asar juda qisqa"),
    ],
    correctId: "b",
    explanation:
      "Sahnada temp deyarli har doim tezlashadi; shuning uchun mashqda yakuniy tempdan bir oz tezroq ham ishlanadi.",
  },

  /* ──────────────────────── Ijro texnikasi ──────────────────────── */
  {
    id: "q-tex-1",
    variant: "A",
    area: "texnika",
    bloom: "bilish",
    kind: "single",
    prompt: "Dutor nechta torga ega?",
    options: [t("a", "Bitta"), t("b", "Ikkita"), t("c", "Uchta"), t("d", "To'rtta")],
    correctId: "b",
    explanation: "Dutor ikki torli cholg'u; nomi ham forscha «du tor» — «ikki tor» degani.",
  },
  {
    id: "q-tex-2",
    variant: "B",
    area: "texnika",
    bloom: "bilish",
    kind: "single",
    prompt: "Fortepianoda bir oktava nechta klavishdan iborat?",
    options: [t("a", "7 ta"), t("b", "10 ta"), t("c", "12 ta"), t("d", "14 ta")],
    correctId: "c",
    explanation: "Bir oktavada 7 ta oq va 5 ta qora klavish — jami 12 ta.",
  },
  {
    id: "q-tex-3",
    variant: "A",
    area: "texnika",
    bloom: "qollash",
    kind: "single",
    prompt: "Doirada «bum» tovushi qayerga urilganda hosil bo'ladi?",
    options: [
      t("a", "Membrananing markaziga"),
      t("b", "Membrananing chetiga"),
      t("c", "Yog'och gardishga"),
      t("d", "Qo'ng'iroqchalarga"),
    ],
    correctId: "a",
    explanation:
      "Markazga urilganda past va to'liq «bum», chetiga urilganda esa baland va qisqa «tak» tovushi chiqadi.",
  },

  {
    id: "q-tex-4",
    variant: "A",
    area: "texnika",
    bloom: "tushunish",
    kind: "single",
    prompt: "Kuylashda nafas olganda yelka ko'tarilsa, bu nimani bildiradi?",
    options: [
      t("a", "Nafas to'g'ri olingan"),
      t("b", "Nafas yuzaki; diafragma ishlamayapti"),
      t("c", "Diapazon keng"),
      t("d", "Ovoz isingan"),
    ],
    correctId: "b",
    explanation:
      "To'g'ri nafasda bel va qovurg'alar yon tomonga kengayadi, yelka esa joyida qoladi.",
  },
  {
    id: "q-tex-5",
    variant: "B",
    area: "texnika",
    bloom: "qollash",
    kind: "single",
    prompt: "Asarda bitta qiyin o'tish joyi bor. Eng samarali yo'l qaysi?",
    options: [
      t("a", "Asarni boshidan oxirigacha ko'p marta chalish"),
      t("b", "Shu ikki-uch taktni ajratib, sekin tempda mashq qilish"),
      t("c", "O'sha joyni tezroq chalib o'tib ketish"),
      t("d", "Asarni osonrog'iga almashtirish"),
    ],
    correctId: "b",
    explanation:
      "Boshidan haydash xatoni ham takrorlaydi; ajratilgan bo'lak sekin tempda tuzatiladi.",
  },
  {
    id: "q-tex-6",
    variant: "A",
    area: "texnika",
    bloom: "bilish",
    kind: "single",
    prompt: "8–10 yoshli bolalarning qulay vokal diapazoni qaysi?",
    options: [
      t("a", "sol – do³"),
      t("b", "do¹ – re²"),
      t("c", "fa – lya²"),
      t("d", "Yoshga bog'liq emas"),
    ],
    correctId: "b",
    explanation:
      "Bu chegaradan tashqarida bola yetolmagan notani qichqirib oladi va boylamlarini shikastlaydi.",
  },
  {
    id: "q-tex-7",
    variant: "B",
    area: "texnika",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "Talaba bitta joyda har safar qoqiladi va har safar boshqa barmoq bilan chaladi. Asosiy sabab nima?",
    options: [
      t("a", "Ritm aniq emas"),
      t("b", "Applikatura belgilanmagan"),
      t("c", "Temp juda sekin"),
      t("d", "Cholg'u sozlanmagan"),
    ],
    correctId: "b",
    explanation:
      "O'zgarib turadigan barmoq tartibi motor xotirani shakllantirmaydi — avval applikatura yoziladi.",
  },
  {
    id: "q-tex-8",
    variant: "B",
    area: "texnika",
    bloom: "qollash",
    kind: "multiple",
    prompt: "Ovoz gigiyenasi qoidalaridan qaysilari to'g'ri?",
    options: [
      t("a", "Shamollaganda baland kuylamaslik"),
      t("b", "Sovuq ovoz bilan darhol baland kuylash"),
      t("c", "Sinfni jim qildirish uchun ovozni pasaytirish"),
      t("d", "Kun davomida iliq suv ichish"),
    ],
    correctIds: ["a", "c", "d"],
    explanation:
      "Sozlanmagan ovoz bilan baland kuylash — boylam shikastining eng keng tarqalgan sababi.",
  },

  {
    id: "q-tex-9",
    variant: "C",
    area: "texnika",
    bloom: "bilish",
    kind: "single",
    prompt: "Ovoz apparatining qaysi qismi tovushga tembr beradi?",
    options: [
      t("a", "Diafragma"),
      t("b", "Ovoz boylamlari"),
      t("c", "Rezonator bo'shliqlari"),
      t("d", "O'pka"),
    ],
    correctId: "c",
    explanation:
      "Boylamlar dastlabki tovushni hosil qiladi, rezonatorlar esa uni kuchaytirib, tembrini shakllantiradi.",
  },
  {
    id: "q-tex-10",
    variant: "C",
    area: "texnika",
    bloom: "tushunish",
    kind: "single",
    prompt: "Mutatsiya davrida ovozga qanday munosabatda bo'lish to'g'ri?",
    options: [
      t("a", "Baland notalarni ko'proq mashq qildirish"),
      t("b", "Kuylashni butunlay taqiqlash"),
      t("c", "Yukni kamaytirib, tor diapazonda davom ettirish"),
      t("d", "Hech narsani o'zgartirmaslik"),
    ],
    correctId: "c",
    explanation:
      "Mutatsiya kasallik emas, o'sish; lekin shu davrda ovozga tushadigan yuk eng xavflisi bo'ladi.",
  },
  {
    id: "q-tex-11",
    variant: "C",
    area: "texnika",
    bloom: "qollash",
    kind: "single",
    prompt:
      "25 daqiqalik mashq vaqtingiz bor. Qaysi taqsimot samaraliroq?",
    options: [
      t("a", "25 daqiqa asarni boshidan oxirigacha haydash"),
      t("b", "Isinish, qiyin bo'lak, ulash va to'xtamasdan to'liq ijro"),
      t("c", "Faqat eng yoqqan joyni takrorlash"),
      t("d", "Faqat yangi asar o'qish"),
    ],
    correctId: "b",
  },
  {
    id: "q-tex-12",
    variant: "C",
    area: "texnika",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "Uzoq mashqdan keyin bilak va yelka og'riyapti. Birinchi tekshiriladigan narsa qaysi?",
    options: [
      t("a", "Cholg'u sozlanganmi"),
      t("b", "Qo'l qo'yilishi va erkinlik — zarbdan keyin barmoq bo'shashyaptimi"),
      t("c", "Repertuar qiyinmi"),
      t("d", "Xona yorug'ligi"),
    ],
    correctId: "b",
    explanation:
      "Og'riq deyarli har doim siqilgan qo'ldan kelib chiqadi: tezlik emas, erkinlik texnikaning asosi.",
  },

  /* ─────────────────────── Sahna madaniyati ─────────────────────── */
  {
    id: "q-sah-1",
    variant: "A",
    area: "sahna",
    bloom: "qollash",
    kind: "single",
    prompt: "Ijro paytida kichik xatoga yo'l qo'ysangiz, eng to'g'ri yo'l qaysi?",
    options: [
      t("a", "To'xtab, boshidan boshlash"),
      t("b", "Xatoni e'tiborsiz qoldirib, ijroni davom ettirish"),
      t("c", "Tomoshabindan uzr so'rash"),
      t("d", "Tempni sekinlashtirib, xatoni tuzatish"),
    ],
    correctId: "b",
    explanation:
      "Sahna madaniyatida ijro oqimini saqlash birinchi o'rinda. Ko'pchilik tinglovchi kichik xatoni sezmaydi, to'xtash esa albatta seziladi.",
  },
  {
    id: "q-sah-2",
    variant: "B",
    area: "sahna",
    bloom: "tushunish",
    kind: "multiple",
    prompt: "Sahnaga chiqishdan oldingi tayyorgarlikka nimalar kiradi? (bir nechta javob)",
    options: [
      t("a", "Cholg'uni oldindan sozlash"),
      t("b", "Nafas va tana holatini rostlash"),
      t("c", "Dasturni oxirgi daqiqada o'zgartirish"),
      t("d", "Sahnaga chiqish va ta'zim tartibini bilish"),
    ],
    correctIds: ["a", "b", "d"],
    explanation:
      "Dasturni oxirgi daqiqada o'zgartirish hayajonni oshiradi va xatolar ehtimolini ko'paytiradi.",
  },
  {
    id: "q-sah-3",
    variant: "A",
    area: "sahna",
    bloom: "baholash",
    kind: "single",
    prompt: "O'quvchilar oldida ijro etayotgan o'qituvchi uchun eng muhim jihat nima?",
    options: [
      t("a", "Texnik murakkablikni ko'rsatish"),
      t("b", "Musiqiy mazmunni ishonarli yetkazish"),
      t("c", "Imkon qadar tez ijro etish"),
      t("d", "Faqat notaga qat'iy amal qilish"),
    ],
    correctId: "b",
    explanation:
      "O'qituvchining ijrosi — namuna. Texnika vosita, maqsad esa musiqiy obrazni yetkazish.",
  },

  {
    id: "q-sah-4",
    variant: "A",
    area: "sahna",
    bloom: "tushunish",
    kind: "single",
    prompt: "Musiqadagi fraza nimaga o'xshaydi?",
    options: [
      t("a", "Bitta tovushga"),
      t("b", "Bir nafasda aytiladigan musiqiy jumlaga"),
      t("c", "Bitta taktga"),
      t("d", "Butun asarga"),
    ],
    correctId: "b",
    explanation:
      "Takt — o'lchov birligi, fraza — ma'no birligi. Qo'shiqda fraza odatda matn satriga to'g'ri keladi.",
  },
  {
    id: "q-sah-5",
    variant: "B",
    area: "sahna",
    bloom: "qollash",
    kind: "single",
    prompt:
      "Ijrochi fraza oxirida sekinlashdi, keyin temp tiklanmadi. Bu nima?",
    options: [
      t("a", "To'g'ri agogika"),
      t("b", "Temp nazoratining yo'qolishi"),
      t("c", "Yangi temp belgisi"),
      t("d", "Kulminatsiya"),
    ],
    correctId: "b",
    explanation:
      "Agogikada sekinlashuvdan keyin temp albatta qaytadi; qaytmasa — bu ifoda emas, boshqaruvning uzilishi.",
  },
  {
    id: "q-sah-6",
    variant: "A",
    area: "sahna",
    bloom: "qollash",
    kind: "single",
    prompt: "Sahnada ijro paytida xato qildingiz. Eng to'g'ri harakat qaysi?",
    options: [
      t("a", "To'xtab, o'sha joydan qaytadan boshlash"),
      t("b", "To'xtamay davom etish"),
      t("c", "Uzr so'rab, boshidan boshlash"),
      t("d", "Ijroni tugatib, sahnadan chiqish"),
    ],
    correctId: "b",
    explanation:
      "Tomoshabin ko'pincha xatoni emas, to'xtashni sezadi. To'xtamaslik odati mashq paytida shakllanadi.",
  },
  {
    id: "q-sah-7",
    variant: "B",
    area: "sahna",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "Boshlang'ich sinf tomoshabini uchun konsert davomiyligi qancha bo'lgani ma'qul?",
    options: [
      t("a", "15 daqiqagacha"),
      t("b", "40 daqiqagacha"),
      t("c", "1,5 soat"),
      t("d", "Chegara yo'q"),
    ],
    correctId: "b",
    explanation:
      "Undan uzun konsertda oxirga borib zalda ham, sahnada ham tartib buziladi.",
  },
  {
    id: "q-sah-8",
    variant: "B",
    area: "sahna",
    bloom: "baholash",
    kind: "multiple",
    prompt: "Tadbirning zaxira rejasiga nimalar kirishi kerak?",
    options: [
      t("a", "Fonogramma ishlamasa — jonli jo'r"),
      t("b", "Yakkaxon kelmasa — oldindan mashq qilgan zaxira ijrochi"),
      t("c", "Elektr uzilsa — jo'rsiz ijro etiladigan raqam"),
      t("d", "Muammo bo'lsa — tadbirni bekor qilish"),
    ],
    correctIds: ["a", "b", "c"],
    explanation:
      "Zaxira reja tadbirni saqlash uchun tuziladi; bekor qilish reja emas, uning yo'qligi.",
  },

  {
    id: "q-sah-9",
    variant: "C",
    area: "sahna",
    bloom: "tushunish",
    kind: "single",
    prompt: "Frazadagi kulminatsiya nima?",
    options: [
      t("a", "Frazaning birinchi tovushi"),
      t("b", "Fraza cho'qqisi — unga qarab o'siladi va undan pasayiladi"),
      t("c", "Eng past tovush"),
      t("d", "Pauza joyi"),
    ],
    correctId: "b",
  },
  {
    id: "q-sah-10",
    variant: "C",
    area: "sahna",
    bloom: "qollash",
    kind: "single",
    prompt: "Staccato artikulyatsiyasi qanday ijro etiladi?",
    options: [
      t("a", "Tovushlar uzilmasdan ulanadi"),
      t("b", "Har tovush qisqa va yengil"),
      t("c", "Har tovushga urg'u beriladi"),
      t("d", "Tovushlar uzaytiriladi"),
    ],
    correctId: "b",
  },
  {
    id: "q-sah-11",
    variant: "C",
    area: "sahna",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "Sahnada hayajondan qo'l titrayapti va nafas yetishmayapti. Qaysi yondashuv ishlaydi?",
    options: [
      t("a", "Hayajonni butunlay yo'qotishga urinish"),
      t("b", "Chiqishdan oldin nafasni sozlash va birinchi frazani yoddan, aniq rejalashtirib qo'yish"),
      t("c", "Tempni tezlashtirish"),
      t("d", "Ijroni qisqartirish"),
    ],
    correctId: "b",
    explanation:
      "Hayajon yo'qolmaydi, u boshqariladi: nafas va aniq boshlanish rejasi uni ishga aylantiradi.",
  },
  {
    id: "q-sah-12",
    variant: "C",
    area: "sahna",
    bloom: "baholash",
    kind: "single",
    prompt:
      "Konsertda ijro mashqdagidan sezilarli tez chiqdi. Keyingi safar nima qilgan ma'qul?",
    options: [
      t("a", "Hech narsa — sahnada shunday bo'ladi"),
      t("b", "Mashqda yakuniy tempdan bir oz tezroq ham ishlash va boshlanish tempini oldindan belgilab olish"),
      t("c", "Asarni osonrog'iga almashtirish"),
      t("d", "Fonogramma bilan ijro etish"),
    ],
    correctId: "b",
  },

  /* ──────────────── Ijodkorlik va improvizatsiya ──────────────── */
  {
    id: "q-ijo-1",
    variant: "A",
    area: "ijodkorlik",
    bloom: "bilish",
    kind: "single",
    prompt: "Improvizatsiya nima?",
    options: [
      t("a", "Yozilgan asarni yod olish"),
      t("b", "Ijro paytida musiqani bevosita yaratish"),
      t("c", "Asarni boshqa tonallikka ko'chirish"),
      t("d", "Partiturani qayta yozish"),
    ],
    correctId: "b",
    explanation: "Improvizatsiya — oldindan yozilmagan musiqani ijro vaqtining o'zida yaratish.",
  },
  {
    id: "q-ijo-2",
    variant: "B",
    area: "ijodkorlik",
    bloom: "tushunish",
    kind: "single",
    prompt: "Aranjirovka qanday ish?",
    options: [
      t("a", "Yangi asar yaratish"),
      t("b", "Mavjud asarni boshqa tarkib yoki uslubga moslashtirish"),
      t("c", "Asarni tahlil qilish"),
      t("d", "Asarni yod olish"),
    ],
    correctId: "b",
    explanation:
      "Aranjirovkada asar mazmuni saqlanadi, lekin ijro tarkibi, faktura yoki uslub o'zgartiriladi.",
  },
  {
    id: "q-ijo-3",
    variant: "A",
    area: "ijodkorlik",
    bloom: "tahlil",
    kind: "single",
    prompt: "Variatsiya shakli nimaga asoslanadi?",
    options: [
      t("a", "Ikki qarama-qarshi mavzuga"),
      t("b", "Bitta mavzuning takroriy o'zgartirilishiga"),
      t("c", "Mavzusiz erkin ijroga"),
      t("d", "Faqat ritmik takrorga"),
    ],
    correctId: "b",
    explanation:
      "Variatsiyada bitta mavzu ketma-ket o'zgartirilib takrorlanadi: garmoniya, faktura, ritm yoki temp o'zgaradi.",
  },

  {
    id: "q-ijo-4",
    variant: "A",
    area: "ijodkorlik",
    bloom: "qollash",
    kind: "single",
    prompt:
      "Do majorda ohangning kuchli zarbidagi tovush — «fa». Jo'r uchun qaysi akkord birinchi nomzod?",
    options: [
      t("a", "Do major (T)"),
      t("b", "Fa major (S)"),
      t("c", "Lya minor"),
      t("d", "Mi major"),
    ],
    correctId: "b",
    explanation:
      "Akkord ohang tovushi uning tarkibida bor-yo'qligiga qarab tanlanadi; «fa» — subdominantaning asosi.",
  },
  {
    id: "q-ijo-5",
    variant: "B",
    area: "ijodkorlik",
    bloom: "tushunish",
    kind: "single",
    prompt: "Sinf kuylayotganda jo'rning dinamikasi qanday bo'lishi kerak?",
    options: [
      t("a", "Kuylashdan baland — temp aniq bo'lsin"),
      t("b", "Kuylashdan bir pog'ona past"),
      t("c", "Imkon qadar baland"),
      t("d", "Ahamiyati yo'q"),
    ],
    correctId: "b",
    explanation:
      "Baland jo'r bolalarga o'z ovozini eshitishga xalaqit beradi va intonatsiyani tuzatish imkonini yo'qotadi.",
  },
  {
    id: "q-ijo-6",
    variant: "A",
    area: "ijodkorlik",
    bloom: "tahlil",
    kind: "single",
    prompt: "Ansamblda ostinato partiyasining asosiy foydasi nima?",
    options: [
      t("a", "Asarni uzaytiradi"),
      t("b", "Eng kam tayyorgarlikka ega bola ham ansamblga qo'shila oladi"),
      t("c", "Tempni tezlashtiradi"),
      t("d", "Nota o'qishni mashq qildiradi"),
    ],
    correctId: "b",
    explanation:
      "Takrorlanuvchi qisqa naqsh orqali hech kim chetda qolmaydi — Orf tizimining asosiy g'oyalaridan biri.",
  },
  {
    id: "q-ijo-7",
    variant: "B",
    area: "ijodkorlik",
    bloom: "qollash",
    kind: "single",
    prompt: "Qo'shiqni boshqa tonallikka ko'chirganda nima o'zgarmaydi?",
    options: [
      t("a", "Kalit belgilari"),
      t("b", "Tovushlar balandligi"),
      t("c", "Tovushlar orasidagi intervallar"),
      t("d", "Barmoq tartibi"),
    ],
    correctId: "c",
    explanation:
      "Transponirovkada butun ohang bir xil intervalga siljiydi, ichki munosabatlar saqlanadi — shuning uchun ohang tanib olinadi.",
  },
  {
    id: "q-ijo-8",
    variant: "B",
    area: "ijodkorlik",
    bloom: "baholash",
    kind: "single",
    prompt:
      "Maktab konserti videosini internetga joylamoqchisiz. Material bo'yicha eng xavfsiz yo'l qaysi?",
    options: [
      t("a", "Mashhur studiya yozuvini fon qilib qo'yish"),
      t("b", "O'z ijroingiz yoki ochiq litsenziyali materialdan foydalanish"),
      t("c", "Manbani ko'rsatmay ishlatish"),
      t("d", "Asar nomini o'zgartirib qo'yish"),
    ],
    correctId: "b",
    explanation:
      "O'zingiz yozgan ijroning yozuv huquqi sizda bo'ladi; ochiq litsenziya esa ruxsatni oldindan beradi.",
  },

  {
    id: "q-ijo-9",
    variant: "C",
    area: "ijodkorlik",
    bloom: "tushunish",
    kind: "single",
    prompt: "Jo'r fakturasi nimani belgilaydi?",
    options: [
      t("a", "Qo'shiqning tonalligini"),
      t("b", "Akkordlar qanday taqsimlanishini va shu orqali xarakterni"),
      t("c", "Qo'shiqning uzunligini"),
      t("d", "Matnning mazmunini"),
    ],
    correctId: "b",
    explanation:
      "Bir xil akkordlar arpedjio, bas+akkord yoki blok akkord shaklida butunlay boshqa kayfiyat beradi.",
  },
  {
    id: "q-ijo-10",
    variant: "C",
    area: "ijodkorlik",
    bloom: "qollash",
    kind: "single",
    prompt: "Jo'rdagi kirish qismi nima uchun kerak?",
    options: [
      t("a", "Qo'shiqni uzaytirish uchun"),
      t("b", "Sinfga tonallik va tempni berish uchun"),
      t("c", "O'qituvchining isinishi uchun"),
      t("d", "An'ana uchun, musiqiy ma'nosi yo'q"),
    ],
    correctId: "b",
  },
  {
    id: "q-ijo-11",
    variant: "C",
    area: "ijodkorlik",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "Naqarotni kupletdan ajratib ko'rsatmoqchisiz. Qaysi vosita xavfsiz va samarali?",
    options: [
      t("a", "Tonallikni qo'shiq o'rtasida almashtirish"),
      t("b", "Fakturani va dinamikani o'zgartirish"),
      t("c", "Tempni ikki barobar tezlashtirish"),
      t("d", "Jo'rni butunlay to'xtatish"),
    ],
    correctId: "b",
    explanation:
      "Tonallikni o'rtada almashtirish sinfni adashtiradi; faktura va dinamika esa xavfsiz vositalar.",
  },
  {
    id: "q-ijo-12",
    variant: "C",
    area: "ijodkorlik",
    bloom: "baholash",
    kind: "single",
    prompt:
      "Konsert videosini joylashga ruxsat bor, lekin bir o'quvchining oilasi rad etdi. Eng to'g'ri qaror qaysi?",
    options: [
      t("a", "Baribir joylayman — qolganlarning ruxsati bor"),
      t("b", "O'sha o'quvchi ko'rinmaydigan montaj qilaman yoki videoni joylamayman"),
      t("c", "Ism yozmayman, shunda muammo yo'q"),
      t("d", "Oiladan qayta so'rab, baribir joylayman"),
    ],
    correctId: "b",
    explanation:
      "Bitta rad javobi butun materialga taalluqli: rad etgan bolaning tasviri e'lon qilinmaydi.",
  },

  /* ──────────────────── Pedagogik metodika ──────────────────── */
  {
    id: "q-met-1",
    variant: "A",
    area: "metodika",
    bloom: "bilish",
    kind: "single",
    prompt: "Blum taksonomiyasining eng quyi darajasi qaysi?",
    options: [t("a", "Tahlil"), t("b", "Qo'llash"), t("c", "Bilish"), t("d", "Baholash")],
    correctId: "c",
    explanation: "Tartib: bilish → tushunish → qo'llash → tahlil → sintez → baholash.",
  },
  {
    id: "q-met-2",
    variant: "B",
    area: "metodika",
    bloom: "tushunish",
    kind: "single",
    prompt: "Formativ (shakllantiruvchi) baholashning asosiy maqsadi nima?",
    options: [
      t("a", "Yakuniy baho qo'yish"),
      t("b", "O'quvchini boshqalar bilan taqqoslash"),
      t("c", "O'rganish jarayonida yo'naltirish va qo'llab-quvvatlash"),
      t("d", "Reyting tuzish"),
    ],
    correctId: "c",
    explanation:
      "Formativ baholash o'quv jarayoni davomida o'tkaziladi va asosiy vazifasi — baho qo'yish emas, yo'nalish berish.",
  },
  {
    id: "q-met-3",
    variant: "A",
    area: "metodika",
    bloom: "tushunish",
    kind: "single",
    prompt: "Rubrika nima?",
    options: [
      t("a", "Dars rejasining nomi"),
      t("b", "Mezonlar va darajalar bo'yicha tuzilgan baholash jadvali"),
      t("c", "O'quvchilar ro'yxati"),
      t("d", "Darslik bo'limi"),
    ],
    correctId: "b",
    explanation:
      "Rubrika har bir mezon bo'yicha qanday natija qaysi bahoga mos kelishini oldindan aniq belgilaydi — baholash shaffof bo'ladi.",
  },
  {
    id: "q-met-4",
    variant: "B",
    area: "metodika",
    bloom: "qollash",
    kind: "multiple",
    prompt: "Yaxshi yozilgan o'quv maqsadi qanday bo'ladi? (bir nechta javob)",
    options: [
      t("a", "O'lchanadigan fe'l bilan ifodalanadi"),
      t("b", "O'quvchi nimani bajara olishini bildiradi"),
      t("c", "«O'quvchi mavzuni biladi» tarzida umumiy yoziladi"),
      t("d", "Baholash usuliga bog'lanadi"),
    ],
    correctIds: ["a", "b", "d"],
    explanation:
      "«Biladi» o'lchanmaydi. Konstruktiv moslashuv talabiga ko'ra maqsad, faoliyat va baholash bir-biriga bog'lanishi kerak.",
  },
  {
    id: "q-met-5",
    variant: "A",
    area: "metodika",
    bloom: "baholash",
    kind: "single",
    prompt:
      "Pedagogik vaziyat: o'quvchi ovozi yaxshi, lekin sinf oldida kuylashdan uyaladi. Eng to'g'ri yondashuv qaysi?",
    options: [
      t("a", "Baho pasaytirish bilan majburlash"),
      t("b", "Kichik guruhda kuylashdan boshlab, asta-sekin auditoriyani kengaytirish"),
      t("c", "Umuman kuylatmaslik"),
      t("d", "Sinf oldida darhol yakka kuylatish"),
    ],
    correctId: "b",
    explanation:
      "Bu — yaqin rivojlanish zonasi tamoyilining amaliy qo'llanishi: vazifa murakkabligi talabaning hozirgi imkoniyatidan bir qadam oldinda bo'ladi va yordam asta kamayadi.",
  },

  {
    id: "q-met-6",
    variant: "A",
    area: "metodika",
    bloom: "qollash",
    kind: "single",
    prompt: "Qo'shiq o'rgatish qaysi bosqichdan boshlanadi?",
    options: [
      t("a", "Ohangni bo'lak-bo'lak o'rgatishdan"),
      t("b", "O'qituvchining to'liq va ifodali ijrosidan"),
      t("c", "Matnni yozdirishdan"),
      t("d", "Qiyin joy ustida ishlashdan"),
    ],
    correctId: "b",
    explanation:
      "Birinchi taassurot eng kuchli bo'ladi, shuning uchun tanishtirish namuna sifatida ijro etiladi.",
  },
  {
    id: "q-met-7",
    variant: "B",
    area: "metodika",
    bloom: "qollash",
    kind: "single",
    prompt: "Tinglash darsida qaysi savol muhokamani yaxshiroq ochadi?",
    options: [
      t("a", "Sizga yoqdimi?"),
      t("b", "Bastakor kim?"),
      t("c", "Kayfiyat qaysi joyda o'zgardi?"),
      t("d", "Asar necha yilda yozilgan?"),
    ],
    correctId: "c",
    explanation:
      "«Yoqdimi?» savoliga «ha» yoki «yo'q» deb javob berib bo'ladi; kuzatishga yo'naltirgan savol esa javobni musiqada izlatadi.",
  },
  {
    id: "q-met-8",
    variant: "B",
    area: "metodika",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "«Kuchlilarga 10 ta mashq, kuchsizlarga 5 ta mashq» — bu farqlashtirishmi?",
    options: [
      t("a", "Ha, bu klassik farqlashtirish"),
      t("b", "Yo'q: faqat miqdor o'zgargan, vazifaning turi va qo'llab-quvvatlash o'zgarmagan"),
      t("c", "Ha, agar baho ham farqlansa"),
      t("d", "Yo'q, chunki mashqlar soni teng bo'lishi shart"),
    ],
    correctId: "b",
    explanation:
      "Farqlashtirish sifat masalasi: mazmun, jarayon, mahsulot yoki muhit o'zgaradi, hajm emas.",
  },

  {
    id: "q-met-9",
    variant: "C",
    area: "metodika",
    bloom: "tushunish",
    kind: "single",
    prompt:
      "Baholashning formativ yoki summativ ekanini nima belgilaydi?",
    options: [
      t("a", "Ball qo'yilgani"),
      t("b", "O'quvchiga hali tuzatish imkoni qolgani"),
      t("c", "Baholash yozma bo'lgani"),
      t("d", "Jurnalga yozilgani"),
    ],
    correctId: "b",
  },
  {
    id: "q-met-10",
    variant: "C",
    area: "metodika",
    bloom: "qollash",
    kind: "single",
    prompt: "Sinf bilan ovoz sozlash odatda qancha vaqt olishi kerak?",
    options: [
      t("a", "1–2 daqiqa"),
      t("b", "5–7 daqiqa"),
      t("c", "15–20 daqiqa"),
      t("d", "Butun dars davomida"),
    ],
    correctId: "b",
    explanation:
      "Qisqa sozlash ovozni ochadi; haddan tashqari uzun sozlash uni toliqtiradi va darsga vaqt qoldirmaydi.",
  },
  {
    id: "q-met-11",
    variant: "C",
    area: "metodika",
    bloom: "tahlil",
    kind: "single",
    prompt:
      "Alohida ehtiyojli o'quvchi butun dars davomida sinfda o'tirdi, lekin hech qanday musiqiy faoliyatda qatnashmadi. Bu inklyuziyami?",
    options: [
      t("a", "Ha, u sinfda edi"),
      t("b", "Yo'q: yonida o'tirish ishtirok emas"),
      t("c", "Ha, agar u tinglagan bo'lsa"),
      t("d", "Bu bolaning o'z tanlovi"),
    ],
    correctId: "b",
    explanation:
      "Inklyuziya — qo'shib qo'yish emas, ishtirok yo'lini ochish: har bola uchun kamida bitta haqiqiy faoliyat bo'lishi kerak.",
  },
  {
    id: "q-met-12",
    variant: "C",
    area: "metodika",
    bloom: "baholash",
    kind: "single",
    prompt: "Qaysi teskari aloqa eng foydali?",
    options: [
      t("a", "«Zo'r chaldingiz!»"),
      t("b", "«Bo'lmadi, yana mashq qiling»"),
      t("c", "«Uchinchi taktdagi sakrash past olindi — keyingi urinishda o'sha tovushni oldindan ichingizda eshiting»"),
      t("d", "«Sizda qobiliyat bor, lekin tirishmaysiz»"),
    ],
    correctId: "c",
    explanation:
      "Aniq, xatti-harakatga qaratilgan va bitta bajarib bo'ladigan qadam ko'rsatilgan.",
  },

  /* ─────────────────────── Motivatsiya (Likert) ─────────────────────── */
  {
    id: "q-mot-1",
    variant: "A",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Kelajakda musiqa o'qituvchisi bo'lib ishlashni xohlayman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
  },
  {
    id: "q-mot-2",
    variant: "B",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Dars jadvalidan tashqari mustaqil mashq qilishga muntazam vaqt ajrataman",
    lowLabel: "Deyarli hech qachon",
    highLabel: "Har kuni",
  },
  {
    id: "q-mot-3",
    variant: "A",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Qiyin topshiriq menga qiziqarli tuyuladi, undan cho'chimayman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
  },
  {
    id: "q-mot-4",
    variant: "B",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Xatolarim haqidagi tanqidni rivojlanish uchun imkoniyat deb qabul qilaman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
  },
  {
    id: "q-mot-5",
    variant: "A",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Kasbiy rivojlanishim uchun aniq reja tuzaman va unga amal qilaman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
  },
  {
    id: "q-mot-6",
    variant: "A",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Mashq qilishni ko'pincha oxirgi kunga qoldiraman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
    reverse: true,
  },
  {
    id: "q-mot-7",
    variant: "B",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Darsda xato qilishdan cho'chiyman, shuning uchun ko'pincha jim turaman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
    reverse: true,
  },
  {
    id: "q-mot-8",
    variant: "B",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Boshqa o'qituvchilarning darsini kuzatish va tajriba almashishga vaqt ajrataman",
    lowLabel: "Deyarli hech qachon",
    highLabel: "Muntazam",
  },
  {
    id: "q-mot-9",
    variant: "C",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Yangi asarni o'rganishni boshlash menga qiyinchilik tug'dirmaydi",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
  },
  {
    id: "q-mot-10",
    variant: "C",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Natija darhol ko'rinmasa, ishni tashlab qo'yaman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
    reverse: true,
  },
  {
    id: "q-mot-11",
    variant: "C",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Bolalar bilan ishlash menga qiziq va men bundan quvvat olaman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
  },
  {
    id: "q-mot-12",
    variant: "C",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Kasbiy adabiyot va yangi metodikalarni mustaqil o'rganaman",
    lowLabel: "Deyarli hech qachon",
    highLabel: "Muntazam",
  },
];

export const SAVOL_SONI = DIAGNOSTIKA_SAVOLLARI.length;
