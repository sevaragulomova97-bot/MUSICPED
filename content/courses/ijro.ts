import type { Course } from "@/content/lesson-types";

/**
 * Ijro amaliyoti kursi.
 *
 * Qo'l qo'yilishidan ansambl ijrosigacha. Darslar virtual cholg'ular va
 * mashqlar banki (`content/practice.ts`) bilan bog'langan.
 */

export const IJRO: Course = {
  slug: "ijro-amaliyoti",
  moduleId: "mod-ijro",
  title: "Ijro amaliyoti",
  description: "Cholg'u texnikasi, ansambl va sahna madaniyati.",
  lessons: [
    {
      id: "ijr-1",
      slug: "qol-qoyilishi",
      title: "Mavzu 1: To'g'ri qo'l qo'yilishi",
      summary: "Cholg'uda tabiiy va erkin qo'l holati, barmoqlarning mustaqilligi.",
      durationMin: 25,
      bloom: "qollash",
      outcomeId: "on-ijr-1",
      area: "texnika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Texnikaning asosi — erkinlik. Siqilgan qo'l tez charchaydi, tovush qattiq va jonsiz chiqadi. To'g'ri qo'yilgan qo'lda og'irlik barmoqqa tabiiy tushadi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "royxat",
              items: [
                "Yelka va bilak bo'sh, ko'tarilmagan holatda",
                "Bilak klaviatura (yoki grif) bilan bir chiziqda",
                "Barmoqlar yumaloq, uchlari bilan tegadi",
                "Zarbdan keyin barmoq darhol bo'shashadi",
              ],
            },
            {
              kind: "eslatma",
              text: "Mashqni sekin tempda boshlang. Tezlik — to'g'ri harakatning natijasi, maqsadi emas.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Virtual pianinoda «Do-Re-Mi» mashqini sekin tempda bajaring, keyin tempni asta oshiring.",
              instrument: "pianino",
              exerciseId: "p-do-re-mi",
            },
            {
              kind: "mashq",
              text: "Dutorda «Barmoq mashqlari» ni bajaring — pardalarni ketma-ket bosib chiqing.",
              instrument: "dutor",
              exerciseId: "d-barmoq",
            },
          ],
        },
        {
          id: "test",
          title: "Test",
          blocks: [
            {
              kind: "test",
              questions: [
                {
                  id: "ijr1-t1",
                  area: "texnika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Mashqni qaysi tempda boshlash to'g'ri?",
                  options: [
                    { id: "a", text: "Imkon qadar tez" },
                    { id: "b", text: "Sekin, harakat to'g'ri bo'lguncha" },
                    { id: "c", text: "Asar tempida" },
                    { id: "d", text: "Tempga ahamiyat bermay" },
                  ],
                  correctId: "b",
                },
              ],
            },
          ],
        },
        {
          id: "xulosa",
          title: "Xulosa",
          blocks: [
            {
              kind: "royxat",
              items: [
                "Erkinlik — texnikaning asosi",
                "Sekin tempdan boshlash shart",
                "Zarbdan keyin barmoq bo'shashadi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Mashq paytida qo'lingiz qayerda siqildi?",
        "Sekin temp sizga nimani ko'rsatdi?",
      ],
    },
    {
      id: "ijr-2",
      slug: "sahna-madaniyati",
      title: "Mavzu 2: Sahna madaniyati",
      summary: "Chiqish, hayajonni boshqarish va ijro paytidagi xatti-harakat.",
      durationMin: 20,
      bloom: "qollash",
      outcomeId: "on-ijr-5",
      area: "sahna",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Sahnada ijro — faqat notalarni chalish emas. Tomoshabin ijrochining ishonchini, tayyorgarligini va asarga munosabatini ko'radi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "royxat",
              items: [
                "Sahnaga xotirjam chiqish, ta'zim qilish",
                "Cholg'uni oldindan sozlash — sahnada emas",
                "Nafasni rostlab, keyin boshlash",
                "Xato bo'lsa to'xtamay davom etish",
                "Ijro tugagach shoshmaslik, ta'zim qilish",
              ],
            },
            {
              kind: "eslatma",
              text: "Hayajon — dushman emas. U energiya beradi; vazifa uni ijroga yo'naltirish.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "O'rgangan asaringizni yozib oling, keyin o'zingizni tashqaridan tinglang. Qaysi joyda shoshdingiz?",
              instrument: "pianino",
              exerciseId: "p-oz-kuy",
            },
          ],
        },
        {
          id: "test",
          title: "Test",
          blocks: [
            {
              kind: "test",
              questions: [
                {
                  id: "ijr2-t1",
                  area: "sahna",
                  bloom: "baholash",
                  kind: "single",
                  prompt: "Ijro paytida kichik xato bo'ldi. Eng to'g'ri yo'l?",
                  options: [
                    { id: "a", text: "To'xtab boshidan boshlash" },
                    { id: "b", text: "Davom etish, e'tibor qaratmaslik" },
                    { id: "c", text: "Uzr so'rash" },
                    { id: "d", text: "Tempni sekinlatish" },
                  ],
                  correctId: "b",
                  explanation:
                    "Ijro oqimini saqlash birinchi o'rinda — ko'pchilik tinglovchi kichik xatoni sezmaydi, to'xtash esa albatta seziladi.",
                },
              ],
            },
          ],
        },
        {
          id: "xulosa",
          title: "Xulosa",
          blocks: [
            {
              kind: "royxat",
              items: [
                "Tayyorgarlik sahnadan oldin tugaydi",
                "Oqimni saqlash xatoni tuzatishdan muhimroq",
                "Yozib olish — eng halol o'qituvchi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Yozuvni tinglaganda o'zingizda nimani payqadingiz?",
        "Hayajonni kamaytirish uchun nima yordam beradi?",
      ],
    },

    {
      id: "ijr-3",
      slug: "ritmik-naqshlar",
      title: "Mavzu 3: Ritmik naqsh va usul",
      summary:
        "Usul tushunchasi, tempni ushlab turish, murakkab ritmni bo'laklarga ajratib o'rganish.",
      durationMin: 35,
      bloom: "qollash",
      outcomeId: "on-ijr-2",
      area: "ritm",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Ijroda eng ko'p uchraydigan kamchilik — noto'g'ri nota emas, noto'g'ri vaqt. Tinglovchi xato notani kechiradi, lekin «qoqilgan» ritmni darhol sezadi.",
            },
            {
              kind: "matn",
              text: "Bu darsda ritmni «his qilish» emas, uni ongli ravishda qurish o'rganiladi: naqshni bo'laklarga ajratish, sekin tempda mustahkamlash va faqat shundan keyin tezlatish.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Usul — o'zbek musiqasida doirada chalinadigan ritmik formula. U asarning butun davomida takrorlanadi va uning «skeleti» bo'lib xizmat qiladi: ohang o'zgarsa ham usul saqlanadi.",
            },
            {
              kind: "royxat",
              items: [
                "Bum — doiraning markaziga urish, past va to'la tovush",
                "Tak — chetga urish, baland va qisqa tovush",
                "Usul odatda bum va taklarning takrorlanuvchi tartibidan iborat",
              ],
            },
            {
              kind: "nota",
              caption: "Oddiy ritmik naqsh: kuchli va kuchsiz zarblar (4/4)",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4"], duration: "q", lyric: "BUM" },
                  { keys: ["c/4"], duration: "8", lyric: "tak" },
                  { keys: ["c/4"], duration: "8", lyric: "tak" },
                  { keys: ["c/4"], duration: "q", lyric: "BUM" },
                  { keys: ["c/4"], duration: "q", lyric: "tak" },
                ],
              },
            },
            {
              kind: "eslatma",
              text: "Murakkab naqshni butunligicha o'rganishga urinmang. Uni ikki yoki to'rt zarbli bo'laklarga ajrating, har bir bo'lakni alohida mustahkamlang, keyin ulang. Bu usul ritmni tez va mustahkam o'rgatadi.",
            },
            {
              kind: "matn",
              text: "Temp — bir daqiqadagi zarblar soni (BPM). O'rganishni haqiqiy tempdan 30–40% sekin boshlang. Qoida oddiy: naqshni uch marta ketma-ket xatosiz chalgandan keyingina tempni 5–10 BPM ga oshiring.",
            },
            {
              kind: "royxat",
              items: [
                "Sekin temp — xatoni ko'rsatadi; tez temp — uni yashiradi",
                "Har bir tezlashdan oldin uch marta toza ijro sharti",
                "Xato paydo bo'lsa — oldingi tempga qayting, «o'tib ketish» yordam bermaydi",
              ],
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Doirada asosiy usulni chaling. Platforma har bir zarbning vaqtini o'lchaydi va aniqlikni foizda ko'rsatadi.",
              instrument: "doira",
              exerciseId: "doira-asosiy",
            },
            {
              kind: "mashq",
              text: "Asosiy usul 80% dan yuqori chiqqandan keyin murakkabroq naqshga o'ting.",
              instrument: "doira",
              exerciseId: "doira-murakkab",
            },
          ],
        },
        {
          id: "test",
          title: "Test",
          blocks: [
            {
              kind: "test",
              questions: [
                {
                  id: "ijr3-t1",
                  area: "ritm",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Doirada «bum» qanday hosil qilinadi?",
                  options: [
                    { id: "a", text: "Membrananing chetiga urib" },
                    { id: "b", text: "Membrananing markaziga urib" },
                    { id: "c", text: "Ramkaga urib" },
                    { id: "d", text: "Barmoq bilan sirpanib" },
                  ],
                  correctId: "b",
                  explanation:
                    "Markazga urilganda past chastotali rejimlar uyg'onadi — tovush past va to'la chiqadi.",
                },
                {
                  id: "ijr3-t2",
                  area: "ritm",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Murakkab ritmik naqshni o'rganishning eng samarali yo'li qaysi?",
                  options: [
                    { id: "a", text: "Haqiqiy tempda ko'p marta takrorlash" },
                    { id: "b", text: "Bo'laklarga ajratib, sekin tempda mustahkamlab, keyin ulash" },
                    { id: "c", text: "Faqat tinglash" },
                    { id: "d", text: "Notani yod olish" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr3-t3",
                  area: "ritm",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Naqshni haqiqiy tempda chalganda xato chiqyapti. Nima qilish kerak?",
                  options: [
                    { id: "a", text: "Tezroq chalib, mashq qilishda davom etish" },
                    { id: "b", text: "Tempni pasaytirib, toza ijroga erishgach asta oshirish" },
                    { id: "c", text: "Naqshni soddalashtirib qo'yish" },
                    { id: "d", text: "Boshqa mashqqa o'tish" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr3-t4",
                  area: "ritm",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Usul bilan ohang o'rtasidagi munosabat qanday?",
                  options: [
                    { id: "a", text: "Usul ohangdan kelib chiqadi va u bilan o'zgaradi" },
                    { id: "b", text: "Usul mustaqil: ohang o'zgarsa ham u saqlanadi" },
                    { id: "c", text: "Ular bir xil narsa" },
                    { id: "d", text: "Usul faqat ashula qismida bo'ladi" },
                  ],
                  correctId: "b",
                },
              ],
            },
          ],
        },
        {
          id: "xulosa",
          title: "Xulosa",
          blocks: [
            {
              kind: "royxat",
              items: [
                "Usul — asarning ritmik skeleti, ohangdan mustaqil",
                "Murakkab naqsh bo'laklarga ajratilib o'rganiladi",
                "Sekin temp xatoni ko'rsatadi, tez temp uni yashiradi",
                "Tezlashtirish sharti — uch marta ketma-ket toza ijro",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Qaysi tempda xatolaringiz yo'qoldi va bu sizga nima deydi?",
        "O'quvchi ritmni «his qilolmasa», unga qanday yondashgan bo'lardingiz?",
      ],
    },

    {
      id: "ijr-4",
      slug: "ansambl-ijrosi",
      title: "Mavzu 4: Ansamblda ijro",
      summary:
        "Birga kirish, muvozanat, boshqa ijrochini tinglash va umumiy tempni ushlab turish.",
      durationMin: 35,
      bloom: "qollash",
      outcomeId: "on-ijr-3",
      area: "ritm",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Yakka ijroda siz faqat o'zingizni eshitasiz. Ansamblda esa asosiy mahorat boshqacha: o'z partiyangizni chalayotib, bir vaqtning o'zida boshqalarni tinglay olish.",
            },
            {
              kind: "eslatma",
              text: "Bu maktab o'qituvchisi uchun to'g'ridan-to'g'ri kasbiy ko'nikma: sinf ansambli yoki xor bilan ishlashda aynan shu malaka kerak bo'ladi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "royxat",
              items: [
                "Birga kirish — barcha ijrochilar bir vaqtda boshlaydi; buning uchun oldindan nafas yoki ishora kelishiladi",
                "Muvozanat — hech bir partiya boshqasini bosib ketmaydi; jo'r partiya asosiy ohangdan past turadi",
                "Umumiy temp — tempni kim ushlab turishi oldindan kelishiladi (odatda ritm guruhi)",
                "Tinglash — o'z partiyangizni emas, umumiy natijani eshitish",
              ],
            },
            {
              kind: "matn",
              text: "Ansamblda eng ko'p uchraydigan xato — «tezlashib ketish». U odatda hayajondan paydo bo'ladi va bitta ijrochidan boshlanib, butun guruhga tarqaladi. Qarshi chora: ritm guruhini aniq belgilash va unga ergashish.",
            },
            {
              kind: "nota",
              caption: "Ikki partiya: asosiy ohang va jo'r (shartli misol)",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4", "e/4"], duration: "q", lyric: "birga" },
                  { keys: ["d/4", "f/4"], duration: "q" },
                  { keys: ["e/4", "g/4"], duration: "q" },
                  { keys: ["c/4", "e/4"], duration: "q", lyric: "qaytish" },
                ],
              },
            },
            {
              kind: "eslatma",
              text: "Mashq qilishning oddiy usuli: avval partiyani yakka o'zingiz mukammal o'rganing. Ansamblga «o'rganilmagan» partiya bilan kelish — butun guruhning vaqtini yo'qotish.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Gitarada akkordlar mashqini bajaring — bu jo'r partiya uchun asos. Diqqat: akkord almashuvi aniq zarbga tushsin, kechikmasin.",
              instrument: "gitara",
              exerciseId: "g-akkordlar",
            },
            {
              kind: "mashq",
              text: "So'ng nayda ohang mashqini chaling va o'zingizni yozib oling. Keyin yozuvni qayta chalib, uning ustiga gitarada jo'r qo'shing — bu ansamblning eng sodda shakli.",
              instrument: "nay",
              exerciseId: "n-ohang",
            },
          ],
        },
        {
          id: "test",
          title: "Test",
          blocks: [
            {
              kind: "test",
              questions: [
                {
                  id: "ijr4-t1",
                  area: "ritm",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Ansamblda muvozanat nima degani?",
                  options: [
                    { id: "a", text: "Hamma bir xil baland chaladi" },
                    { id: "b", text: "Jo'r partiya asosiy ohangni bosib ketmaydi" },
                    { id: "c", text: "Hamma bir xil notani chaladi" },
                    { id: "d", text: "Tempni har kim o'zi tanlaydi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr4-t2",
                  area: "ritm",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Ansambl ijro davomida asta-sekin tezlashib ketdi. Eng ehtimolli sabab nima?",
                  options: [
                    { id: "a", text: "Asar juda qiyin" },
                    { id: "b", text: "Hayajon va umumiy tempni ushlovchi aniq belgilanmagan" },
                    { id: "c", text: "Cholg'ular sozlanmagan" },
                    { id: "d", text: "Nota noto'g'ri yozilgan" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr4-t3",
                  area: "ritm",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt: "Ansambl mashg'ulotiga tayyorgarlikka nimalar kiradi?",
                  options: [
                    { id: "a", text: "O'z partiyangizni yakka holda mukammal o'rganish" },
                    { id: "b", text: "Kirish ishorasini oldindan kelishish" },
                    { id: "c", text: "Kim tempni ushlashini belgilash" },
                    { id: "d", text: "Mashg'ulotda birinchi marta notani ko'rish" },
                  ],
                  correctIds: ["a", "b", "c"],
                },
              ],
            },
          ],
        },
        {
          id: "xulosa",
          title: "Xulosa",
          blocks: [
            {
              kind: "royxat",
              items: [
                "Ansamblda asosiy mahorat — chalayotib tinglash",
                "Kirish, temp va muvozanat oldindan kelishiladi",
                "Tezlashib ketish hayajondan paydo bo'ladi; ritm guruhi unga qarshi chora",
                "Ansamblga o'rganilgan partiya bilan kelinadi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Boshqa ijrochini tinglash sizga qiyin bo'ldimi — nega?",
        "Sinf ansamblida tempni kim ushlab turishi kerak deb o'ylaysiz?",
      ],
    },

    {
      id: "ijr-5",
      slug: "ijroni-yozib-tahlil-qilish",
      title: "Mavzu 5: O'z ijrosini yozib tahlil qilish",
      summary:
        "Yozuvni tinglash, kamchiliklarni mezon bo'yicha aniqlash va keyingi mashq rejasini tuzish.",
      durationMin: 30,
      bloom: "tahlil",
      outcomeId: "on-ijr-4",
      area: "texnika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Chalayotganda siz o'zingizni to'liq eshitmaysiz: diqqatingiz barmoqlarda, notada va keyingi zarbda bo'ladi. Shuning uchun ijrochining o'ziga eng foydali asbob — yozuv.",
            },
            {
              kind: "eslatma",
              text: "Bu D. Schönning «o'ylaydigan amaliyotchi» g'oyasining amaliy shakli: ish ustida emas, ish ustidan keyin o'ylash (reflection-on-action).",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Yozuvni «yoqdi / yoqmadi» deb baholash foydasiz. Tahlil mezonlarga tayanishi kerak — shunda natija aniq vazifaga aylanadi.",
            },
            {
              kind: "royxat",
              items: [
                "Vaqt — temp bir tekismi, qayerda tezlashdi yoki sekinlashdi",
                "Tovush — toza chiqdimi, ortiqcha shovqin yoki bo'g'iq joy bormi",
                "Ifoda — iboralar ajralganmi, dinamika bormi yoki hammasi bir xil balandlikdami",
                "Xatolar — qayerda va nima uchun (barmoq, nafas, diqqat)",
              ],
            },
            {
              kind: "matn",
              text: "Tahlil natijasi — ro'yxat emas, reja. «Ikkinchi iborada tezlashib ketdim» degan kuzatuvdan «shu iborani metronom bilan 60 BPM da o'n marta chalaman» degan vazifa chiqishi kerak.",
            },
            {
              kind: "eslatma",
              text: "Bitta mashg'ulotda bitta vazifa ustida ishlang. Bir vaqtda uchta kamchilikni tuzatishga urinish odatda hech birini tuzatmaydi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Istalgan cholg'uda qisqa ohangni chalib, «Yozib olish» tugmasi bilan saqlang. Yozuv portfolioga tushadi.",
              instrument: "dutor",
              exerciseId: "d-oddiy-kuy",
            },
            {
              kind: "mashq",
              text: "Yozuvni qayta tinglang va yuqoridagi to'rt mezon bo'yicha o'zingizga baho bering. So'ng bitta aniq vazifa belgilab, o'sha joyni qayta chaling va yana yozing — ikki yozuvni solishtiring.",
              instrument: "dutor",
              exerciseId: "d-oddiy-kuy",
            },
          ],
        },
        {
          id: "test",
          title: "Test",
          blocks: [
            {
              kind: "test",
              questions: [
                {
                  id: "ijr5-t1",
                  area: "texnika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Nima uchun ijrochi o'zini yozib tinglashi kerak?",
                  options: [
                    { id: "a", text: "Yozuvni boshqalarga ko'rsatish uchun" },
                    { id: "b", text: "Chalayotganda diqqat boshqa narsada bo'lgani uchun o'zini to'liq eshitmaydi" },
                    { id: "c", text: "Yozuv ijroni avtomatik yaxshilaydi" },
                    { id: "d", text: "Nota yozishni osonlashtirish uchun" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr5-t2",
                  area: "texnika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Qaysi xulosa foydali tahlil hisoblanadi?",
                  options: [
                    { id: "a", text: "«Ijro yomon chiqdi»" },
                    { id: "b", text: "«Uchinchi iborada temp tezlashdi, uni 60 BPM da mustahkamlayman»" },
                    { id: "c", text: "«Keyingi safar yaxshiroq chalaman»" },
                    { id: "d", text: "«Bu asar menga mos emas»" },
                  ],
                  correctId: "b",
                  explanation:
                    "Foydali tahlil aniq joyni, aniq muammoni va aniq vazifani ko'rsatadi.",
                },
                {
                  id: "ijr5-t3",
                  area: "texnika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Yozuvda uchta kamchilik topildi. Keyingi mashg'ulotda nima qilish to'g'ri?",
                  options: [
                    { id: "a", text: "Uchalasini bir vaqtda tuzatishga urinish" },
                    { id: "b", text: "Eng muhim bittasini tanlab, shu ustida ishlash" },
                    { id: "c", text: "Boshqa asarga o'tish" },
                    { id: "d", text: "Hech narsa qilmaslik, o'zi tuzaladi" },
                  ],
                  correctId: "b",
                },
              ],
            },
          ],
        },
        {
          id: "xulosa",
          title: "Xulosa",
          blocks: [
            {
              kind: "royxat",
              items: [
                "Yozuv — ijrochining o'zini ko'rish vositasi",
                "Tahlil mezonlarga tayanadi: vaqt, tovush, ifoda, xatolar",
                "Tahlil natijasi — ro'yxat emas, aniq mashq vazifasi",
                "Bitta mashg'ulot — bitta vazifa",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'z yozuvingizni tinglash sizga qanday tuyuldi?",
        "Topgan kamchiligingizdan qanday aniq vazifa tuzdingiz?",
      ],
    },
  ],
};
