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
 * Parallel shakl — «A» va «B».
 *
 * Dissertatsiya tajribasi boshlang'ich va yakuniy o'lchovni taqqoslaydi
 * (`lib/research.ts` da juftlashgan t-mezon). Agar ikkala o'lchovda aynan
 * bir xil savollar berilsa, ikkinchi natija qisman **savolni eslab
 * qolish** hisobiga ko'tariladi va o'sishni metodikaga bog'lab bo'lmaydi.
 *
 * Shuning uchun bank ikkita teng shaklga bo'lingan: har bir yo'nalishda
 * A da ham, B da ham 4 tadan savol bor va ular Blum darajasi bo'yicha
 * moslashtirilgan. Birinchi o'lchov A shaklida, keyingisi B shaklida
 * o'tkaziladi.
 *
 * Moslik **mazmun va daraja** bo'yicha qilingan, empirik qiyinlik
 * bo'yicha emas — buning uchun pilot ma'lumot kerak bo'lardi. Shuni
 * hisobotda ko'rsatish kerak.
 */
export type QuestionVariant = "A" | "B";

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
    prompt: "Do mažor gammasida nechta alteratsiya belgisi (diez yoki bemol) bor?",
    options: [t("a", "Bitta ham yo'q"), t("b", "Bitta"), t("c", "Ikkita"), t("d", "Uchta")],
    correctId: "a",
    explanation: "Do mažor — kalit belgilarisiz yagona mažor gamma, faqat oq klavishlardan iborat.",
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
    prompt: "Mažor trezvuk qanday intervallardan tuzilgan?",
    options: [
      t("a", "Kichik terstiya + katta terstiya"),
      t("b", "Katta terstiya + kichik terstiya"),
      t("c", "Ikki katta terstiya"),
      t("d", "Ikki kichik terstiya"),
    ],
    correctId: "b",
    explanation:
      "Mažor trezvuk pastdan yuqoriga katta terstiya, so'ng kichik terstiyadan tuziladi. Minor trezvukda tartib teskari.",
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
    prompt: "Mažor va minor trezvuklar bir-biridan qaysi tovush bilan farq qiladi?",
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
    prompt: "Sinkopa nima?",
    options: [
      t("a", "Tempning sekinlashishi"),
      t("b", "Urg'uning kuchsiz zarbga ko'chishi"),
      t("c", "Pauza turi"),
      t("d", "O'lchovning o'zgarishi"),
    ],
    correctId: "b",
    explanation:
      "Sinkopada urg'u kutilgan kuchli zarbdan kuchsiz zarbga siljiydi — shuning uchun u «itarib yuborgandek» eshitiladi.",
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
];

export const SAVOL_SONI = DIAGNOSTIKA_SAVOLLARI.length;
