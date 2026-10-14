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
  | (Base & { kind: "likert"; lowLabel: string; highLabel: string });

const t = (id: string, text: string): QuestionOption => ({ id, text });

export const DIAGNOSTIKA_SAVOLLARI: Question[] = [
  /* ───────────────────── Nazariy bilim ───────────────────── */
  {
    id: "q-naz-1",
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
    area: "nazariya",
    bloom: "qollash",
    kind: "multiple",
    prompt: "Quyidagilardan qaysilari kalit belgisi bo'la oladi? (bir nechta javob)",
    options: [t("a", "Diez"), t("b", "Bemol"), t("c", "Bekar"), t("d", "Fermata")],
    correctIds: ["a", "b"],
    explanation:
      "Kalit belgisi sifatida faqat diez va bemol yoziladi. Bekar — vaqtinchalik bekor qilish belgisi, fermata esa davomiylikni uzaytiradi.",
  },

  /* ───────────────────── Musiqiy eshituv ───────────────────── */
  {
    id: "q-esh-1",
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
    area: "eshituv",
    bloom: "tahlil",
    kind: "single",
    prompt: "Mažor va minor trezvuklar bir-biridan qaysi tovush bilan farq qiladi?",
    options: [t("a", "Prima"), t("b", "Terstiya"), t("c", "Kvinta"), t("d", "Oktava")],
    correctId: "b",
    explanation:
      "Prima va kvinta ikkalasida bir xil; faqat o'rtadagi terstiya tovushi akkord bo'yog'ini belgilaydi.",
  },

  /* ───────────────────────── Ritm hissi ───────────────────────── */
  {
    id: "q-rit-1",
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
    area: "ritm",
    bloom: "qollash",
    kind: "single",
    prompt: "Metronom 60 BPM ga qo'yilgan. Bitta zarb qancha davom etadi?",
    options: [t("a", "0,5 soniya"), t("b", "1 soniya"), t("c", "1,5 soniya"), t("d", "2 soniya")],
    correctId: "b",
    explanation: "60 BPM — daqiqasiga 60 zarb, demak har bir zarb aniq 1 soniya.",
  },

  /* ──────────────────────── Ijro texnikasi ──────────────────────── */
  {
    id: "q-tex-1",
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

  /* ─────────────────────── Sahna madaniyati ─────────────────────── */
  {
    id: "q-sah-1",
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

  /* ──────────────── Ijodkorlik va improvizatsiya ──────────────── */
  {
    id: "q-ijo-1",
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

  /* ──────────────────── Pedagogik metodika ──────────────────── */
  {
    id: "q-met-1",
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

  /* ─────────────────────── Motivatsiya (Likert) ─────────────────────── */
  {
    id: "q-mot-1",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Kelajakda musiqa o'qituvchisi bo'lib ishlashni xohlayman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
  },
  {
    id: "q-mot-2",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Dars jadvalidan tashqari mustaqil mashq qilishga muntazam vaqt ajrataman",
    lowLabel: "Deyarli hech qachon",
    highLabel: "Har kuni",
  },
  {
    id: "q-mot-3",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Qiyin topshiriq menga qiziqarli tuyuladi, undan cho'chimayman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
  },
  {
    id: "q-mot-4",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Xatolarim haqidagi tanqidni rivojlanish uchun imkoniyat deb qabul qilaman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
  },
  {
    id: "q-mot-5",
    area: "motivatsiya",
    bloom: "bilish",
    kind: "likert",
    prompt: "Kasbiy rivojlanishim uchun aniq reja tuzaman va unga amal qilaman",
    lowLabel: "Umuman rozi emasman",
    highLabel: "To'liq roziman",
  },
];

export const SAVOL_SONI = DIAGNOSTIKA_SAVOLLARI.length;
