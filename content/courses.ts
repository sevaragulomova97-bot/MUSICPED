import type { Course } from "@/content/lesson-types";

/**
 * O'quv kurslari va darslar.
 *
 * Har bir dars modulning aniq o'quv natijasiga bog'langan (`outcomeId`) —
 * konstruktiv moslashuv talabi.
 */

const NAZARIYA: Course = {
  slug: "musiqa-nazariyasi",
  moduleId: "mod-nazariya",
  title: "Musiqa nazariyasi",
  description:
    "Nota savodidan maqom tahliligacha: musiqiy tafakkurning nazariy asosi.",
  lessons: [
    {
      id: "naz-1",
      slug: "nota-chiziqlari",
      title: "Mavzu 1: Nota chiziqlari va kalitlar",
      summary: "Nota stani, skripka va bas kalitlari, tovush balandligini yozish.",
      durationMin: 25,
      bloom: "bilish",
      outcomeId: "on-naz-1",
      area: "nazariya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Musiqa tovushlari qog'ozda maxsus belgilar — notalar orqali yoziladi. Notalar beshta parallel chiziqdan iborat nota stanida joylashadi. Chiziqlar pastdan yuqoriga sanaladi: eng pastkisi birinchi chiziq.",
            },
            {
              kind: "matn",
              text: "Nota chiziqdan qanchalik yuqorida tursa, tovush shunchalik baland bo'ladi. Lekin aniq qaysi tovush ekanini bilish uchun stan boshida kalit turishi kerak.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Skripka (sol) kaliti ikkinchi chiziqdan boshlanadi va shu chiziqdagi nota birinchi oktava «sol» ekanini bildiradi. Baland tovushli cholg'ular va ovozlar shu kalitda yoziladi.",
            },
            {
              kind: "nota",
              caption: "Skripka kalitida do mažor gammasi — notani bosib eshiting",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4"], duration: "q", lyric: "Do" },
                  { keys: ["d/4"], duration: "q", lyric: "Re" },
                  { keys: ["e/4"], duration: "q", lyric: "Mi" },
                  { keys: ["f/4"], duration: "q", lyric: "Fa" },
                  { keys: ["g/4"], duration: "q", lyric: "Sol" },
                  { keys: ["a/4"], duration: "q", lyric: "Lya" },
                  { keys: ["b/4"], duration: "q", lyric: "Si" },
                  { keys: ["c/5"], duration: "q", lyric: "Do" },
                ],
              },
            },
            {
              kind: "eslatma",
              text: "Kalit — notalarning nomini aniqlash uchun xizmat qiladi. Kalitsiz bir xil chiziqdagi nota turli balandlikni bildirishi mumkin.",
            },
            {
              kind: "matn",
              text: "Bas (fa) kaliti to'rtinchi chiziqdan boshlanadi va past tovushlarni yozish uchun ishlatiladi: chap qo'l partiyasi, violonchel, kontrabas.",
            },
            {
              kind: "nota",
              caption: "Bas kalitida past registr",
              playable: true,
              spec: {
                clef: "bass",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/3"], duration: "q", lyric: "Do" },
                  { keys: ["e/3"], duration: "q", lyric: "Mi" },
                  { keys: ["g/3"], duration: "q", lyric: "Sol" },
                  { keys: ["c/4"], duration: "q", lyric: "Do" },
                ],
              },
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Virtual pianinoda do mažor gammasini pastdan yuqoriga va yuqoridan pastga chalib chiqing. Har bir notani ovoz chiqarib nomlang.",
              instrument: "pianino",
              exerciseId: "p-do-re-mi",
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
                  id: "naz1-t1",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Nota stani nechta chiziqdan iborat?",
                  options: [
                    { id: "a", text: "To'rtta" },
                    { id: "b", text: "Beshta" },
                    { id: "c", text: "Oltita" },
                    { id: "d", text: "Yettita" },
                  ],
                  correctId: "b",
                  explanation: "Nota stani beshta parallel chiziqdan iborat.",
                },
                {
                  id: "naz1-t2",
                  area: "nazariya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Bas kaliti qaysi chiziqdan boshlanadi?",
                  options: [
                    { id: "a", text: "Ikkinchi" },
                    { id: "b", text: "Uchinchi" },
                    { id: "c", text: "To'rtinchi" },
                    { id: "d", text: "Beshinchi" },
                  ],
                  correctId: "c",
                  explanation:
                    "Bas (fa) kaliti to'rtinchi chiziqdan boshlanadi — shu chiziqdagi nota kichik oktava «fa» si.",
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
                "Nota stani — beshta chiziq, pastdan yuqoriga sanaladi",
                "Kalit notaning aniq nomini belgilaydi",
                "Skripka kaliti — 2-chiziq, bas kaliti — 4-chiziq",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Skripka va bas kalitlarini bir-biridan qanday ajratasiz?",
        "Kalit bo'lmasa nima bo'lardi?",
      ],
    },

    {
      id: "naz-2",
      slug: "ritm-va-olchov",
      title: "Mavzu 2: Ritm va o'lchov",
      summary: "Nota davomiyliklari, takt, o'lchov va sinkopa.",
      durationMin: 30,
      bloom: "tushunish",
      outcomeId: "on-naz-2",
      area: "ritm",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Tovushning balandligi qanchalik muhim bo'lsa, uning davomiyligi ham shunchalik muhim. Ritm — tovushlarning vaqt bo'yicha tashkil etilishi.",
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
                "Butun nota — eng uzun asosiy davomiylik",
                "Yarim nota — butunning yarmi",
                "Chorak nota — butunning to'rtdan biri",
                "Sakkizlik — butunning sakkizdan biri",
              ],
            },
            {
              kind: "nota",
              caption: "Davomiyliklar: butun, yarim, chorak, sakkizlik",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4"], duration: "w" },
                  { keys: ["d/4"], duration: "h" },
                  { keys: ["e/4"], duration: "h" },
                  { keys: ["f/4"], duration: "q" },
                  { keys: ["g/4"], duration: "q" },
                  { keys: ["a/4"], duration: "q" },
                  { keys: ["b/4"], duration: "q" },
                ],
              },
            },
            {
              kind: "eslatma",
              text: "O'lchov belgisi (masalan 4/4) bir taktda nechta va qanday davomiylik borligini bildiradi: yuqoridagi raqam — zarblar soni, pastdagisi — qaysi nota bir zarb.",
            },
            {
              kind: "matn",
              text: "Sinkopa — urg'uning kuchli zarbdan kuchsiz zarbga ko'chishi. U ritmga jonlilik beradi va o'zbek musiqasidagi ko'plab usullarning asosida yotadi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Virtual doirada «Asosiy zarb» mashqini bajaring: namunani eshiting va aniq takrorlang. Natijangiz vaqt aniqligi bo'yicha baholanadi.",
              instrument: "doira",
              exerciseId: "doira-asosiy",
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
                  id: "naz2-t1",
                  area: "ritm",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "3/4 o'lchovda bir taktga nechta chorak nota sig'adi?",
                  options: [
                    { id: "a", text: "Ikkita" },
                    { id: "b", text: "Uchta" },
                    { id: "c", text: "To'rtta" },
                    { id: "d", text: "Oltita" },
                  ],
                  correctId: "b",
                  explanation: "Yuqoridagi 3 — zarblar soni, pastdagi 4 — chorak nota.",
                },
                {
                  id: "naz2-t2",
                  area: "ritm",
                  bloom: "tushunish",
                  kind: "multiple",
                  prompt: "Quyidagilardan qaysilari davomiylikni uzaytiradi?",
                  options: [
                    { id: "a", text: "Notadan keyingi nuqta" },
                    { id: "b", text: "Liga (bog'lov)" },
                    { id: "c", text: "Diez" },
                    { id: "d", text: "Pauza" },
                  ],
                  correctIds: ["a", "b"],
                  explanation:
                    "Nuqta davomiylikni yarmiga uzaytiradi, liga ikki notani birlashtiradi. Diez balandlikni, pauza esa sukutni bildiradi.",
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
                "Davomiylik tovushning vaqtini belgilaydi",
                "O'lchov belgisi taktning tuzilishini beradi",
                "Sinkopa — urg'uning kuchsiz zarbga siljishi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Ritmni aniq ushlashda sizga nima yordam berdi?",
        "Sinkopani o'quvchiga qanday tushuntirgan bo'lardingiz?",
      ],
    },

    {
      id: "naz-3",
      slug: "nota-savodi",
      title: "Mavzu 3: Nota savodi",
      summary:
        "Alteratsiya belgilari, kalit belgilari va nota yozuvini erkin o'qish.",
      durationMin: 35,
      bloom: "qollash",
      outcomeId: "on-naz-3",
      area: "nazariya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Musiqa tovushlari massa belgilar orqali yoziladi. Bu belgilar nota deb ataladi. Nota savodi — ularni erkin o'qiy va yoza olish demakdir.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "nota",
              caption: "Nota chiziqlari va kalit",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4"], duration: "q", lyric: "Do" },
                  { keys: ["d/4"], duration: "q", lyric: "Re" },
                  { keys: ["e/4"], duration: "q", lyric: "Mi" },
                  { keys: ["f/4"], duration: "q", lyric: "Fa" },
                  { keys: ["g/4"], duration: "q", lyric: "Sol" },
                  { keys: ["a/4"], duration: "q", lyric: "Lya" },
                  { keys: ["b/4"], duration: "q", lyric: "Si" },
                ],
              },
            },
            {
              kind: "eslatma",
              text: "Kalit — notalarning nomini aniqlash uchun xizmat qiladi.",
            },
            {
              kind: "matn",
              text: "Alteratsiya belgilari tovushni yarim tonga o'zgartiradi: diez (♯) ko'taradi, bemol (♭) tushiradi, bekar (♮) esa avvalgi o'zgarishni bekor qiladi.",
            },
            {
              kind: "nota",
              caption: "Diez va bemol bilan yozilgan notalar",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["f#/4"], duration: "q", lyric: "Fa♯" },
                  { keys: ["g/4"], duration: "q", lyric: "Sol" },
                  { keys: ["bb/4"], duration: "q", lyric: "Si♭" },
                  { keys: ["a/4"], duration: "q", lyric: "Lya" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Agar belgi stan boshida tursa, u kalit belgisi bo'ladi va butun asar davomida amal qiladi. Takt ichida uchrasa — faqat shu taktga tegishli.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Virtual pianinoda yuqoridagi nota yo'lini chalib chiqing. Qora klavishlarga e'tibor bering: fa♯ va si♭ qayerda joylashganini toping.",
              instrument: "pianino",
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
                  id: "naz3-t1",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Bekar belgisi nima qiladi?",
                  options: [
                    { id: "a", text: "Tovushni yarim tonga ko'taradi" },
                    { id: "b", text: "Tovushni yarim tonga tushiradi" },
                    { id: "c", text: "Avvalgi alteratsiyani bekor qiladi" },
                    { id: "d", text: "Davomiylikni uzaytiradi" },
                  ],
                  correctId: "c",
                },
                {
                  id: "naz3-t2",
                  area: "nazariya",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Stan boshida bitta diez turibdi. Bu nimani bildiradi?",
                  options: [
                    { id: "a", text: "Faqat birinchi nota ko'tariladi" },
                    { id: "b", text: "Butun asar davomida fa notasi fa♯ bo'lib chalinadi" },
                    { id: "c", text: "Faqat birinchi takt o'zgaradi" },
                    { id: "d", text: "Hech qanday ta'siri yo'q" },
                  ],
                  correctId: "b",
                  explanation:
                    "Stan boshidagi belgi — kalit belgisi, u butun asarga amal qiladi. Bitta diez sol mažor (yoki mi minor) tonalligini bildiradi.",
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
                "Diez ko'taradi, bemol tushiradi, bekar bekor qiladi",
                "Stan boshidagi belgi butun asarga, takt ichidagisi faqat shu taktga amal qiladi",
                "Nota savodi — o'qish va yozishning ikkalasi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Nota savodida sizga eng qiyin kelgan jihat nima bo'ldi?",
        "Kalit belgilarini o'quvchilarga qanday eslab qolishni o'rgatasiz?",
      ],
    },

    {
      id: "naz-4",
      slug: "interval-va-akkord",
      title: "Mavzu 4: Interval va akkordlar",
      summary: "Intervallarning tuzilishi, trezvuklar va ularni eshitib aniqlash.",
      durationMin: 35,
      bloom: "tahlil",
      outcomeId: "on-naz-4",
      area: "eshituv",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Interval — ikki tovush orasidagi masofa. U garmoniyaning eng kichik birligi: akkordlar ham intervallardan quriladi.",
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
                "Prima — bir xil tovush (0 yarim ton)",
                "Terstiya — uch pog'ona; katta (4 yarim ton) va kichik (3 yarim ton)",
                "Kvinta — besh pog'ona (7 yarim ton)",
                "Oktava — sakkiz pog'ona (12 yarim ton)",
              ],
            },
            {
              kind: "nota",
              caption: "Do dan boshlangan intervallar: terstiya, kvinta, oktava",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4", "e/4"], duration: "h", lyric: "terstiya" },
                  { keys: ["c/4", "g/4"], duration: "h", lyric: "kvinta" },
                  { keys: ["c/4", "c/5"], duration: "w", lyric: "oktava" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Trezvuk — uch tovushli akkord, terstiyalardan tuziladi. Mažor trezvuk: katta terstiya + kichik terstiya. Minor trezvuk: kichik terstiya + katta terstiya.",
            },
            {
              kind: "nota",
              caption: "Do mažor va do minor trezvuklari",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4", "e/4", "g/4"], duration: "h", lyric: "mažor" },
                  { keys: ["c/4", "eb/4", "g/4"], duration: "h", lyric: "minor" },
                ],
              },
            },
            {
              kind: "eslatma",
              text: "Mažor va minor trezvuklarda prima va kvinta bir xil — faqat o'rtadagi terstiya akkordning bo'yog'ini belgilaydi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Virtual pianinoda do mažor va do minor trezvuklarini navbatma-navbat chaling. Farqni quloq bilan eslab qoling.",
              instrument: "pianino",
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
                  id: "naz4-t1",
                  area: "eshituv",
                  bloom: "tahlil",
                  kind: "single",
                  prompt: "Mažor trezvuk qanday tuzilgan?",
                  options: [
                    { id: "a", text: "Kichik terstiya + katta terstiya" },
                    { id: "b", text: "Katta terstiya + kichik terstiya" },
                    { id: "c", text: "Ikki katta terstiya" },
                    { id: "d", text: "Kvinta + terstiya" },
                  ],
                  correctId: "b",
                },
                {
                  id: "naz4-t2",
                  area: "eshituv",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Sof kvinta nechta yarim tondan iborat?",
                  options: [
                    { id: "a", text: "5" },
                    { id: "b", text: "6" },
                    { id: "c", text: "7" },
                    { id: "d", text: "8" },
                  ],
                  correctId: "c",
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
                "Interval — ikki tovush orasidagi masofa",
                "Trezvuk terstiyalardan quriladi",
                "Akkord bo'yog'ini o'rtadagi terstiya belgilaydi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Mažor va minorni quloq bilan qanday farqlaysiz?",
        "Intervallarni o'rganishda qaysi usul sizga qulay keldi?",
      ],
    },
  ],
};

const IJRO: Course = {
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
  ],
};

const METODIKA: Course = {
  slug: "musiqa-talimi-metodikasi",
  moduleId: "mod-metodika",
  title: "Musiqa ta'limi metodikasi",
  description: "Dars loyihalash, o'quv maqsadlari va baholash mezonlari.",
  lessons: [
    {
      id: "met-1",
      slug: "dars-maqsadi",
      title: "Mavzu 1: O'quv maqsadini shakllantirish",
      summary: "Blum taksonomiyasi asosida o'lchanadigan maqsad yozish.",
      durationMin: 30,
      bloom: "sintez",
      outcomeId: "on-met-2",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "«O'quvchi mavzuni biladi» — bu maqsad emas, chunki uni o'lchab bo'lmaydi. Yaxshi maqsad o'quvchi nimani bajara olishini aytadi.",
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
                "Bilish — nomlaydi, sanab beradi, takrorlaydi",
                "Tushunish — tushuntiradi, o'z so'zi bilan aytadi",
                "Qo'llash — bajaradi, ko'rsatadi, chalib beradi",
                "Tahlil — qiyoslaydi, ajratadi, aniqlaydi",
                "Sintez — tuzadi, yaratadi, loyihalaydi",
                "Baholash — asoslaydi, tanlaydi, baho beradi",
              ],
            },
            {
              kind: "eslatma",
              text: "Konstruktiv moslashuv: maqsad, faoliyat va baholash bir-biriga mos kelishi shart. Maqsad «tahlil qiladi» bo'lsa, test «eslab qolgan»ni tekshirsa — moslik buziladi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "5-sinf uchun «Nota savodi» mavzusida uchta maqsad yozing: bilish, qo'llash va tahlil darajalarida. Har biriga mos baholash usulini ko'rsating.",
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
                  id: "met1-t1",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt: "Qaysi fe'llar o'lchanadigan maqsad uchun mos?",
                  options: [
                    { id: "a", text: "Chalib beradi" },
                    { id: "b", text: "Tushunadi" },
                    { id: "c", text: "Qiyoslaydi" },
                    { id: "d", text: "Biladi" },
                  ],
                  correctIds: ["a", "c"],
                  explanation:
                    "«Biladi» va «tushunadi» ichki holat — kuzatib bo'lmaydi. «Chalib beradi» va «qiyoslaydi» esa kuzatiladigan harakat.",
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
                "Maqsad o'lchanadigan fe'l bilan yoziladi",
                "Blum darajasi faoliyat turini belgilaydi",
                "Maqsad, faoliyat va baholash bir-biriga bog'lanadi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Qaysi Blum darajasida maqsad yozish sizga qiyin bo'ldi?",
        "O'z darsingizda baholash maqsadga mos keladimi?",
      ],
    },
  ],
};

const TEXNOLOGIYA: Course = {
  slug: "musiqa-texnologiyalari",
  moduleId: "mod-texnologiya",
  title: "Musiqa texnologiyalari",
  description: "Raqamli vositalar va ularni dars jarayonida qo'llash.",
  lessons: [
    {
      id: "tex-1",
      slug: "raqamli-vositalar",
      title: "Mavzu 1: Darsda raqamli vositalar",
      summary: "Nota yozuv dasturlari, audio tahrir va ularni tanlash mezonlari.",
      durationMin: 25,
      bloom: "baholash",
      outcomeId: "on-tex-3",
      area: "ijodkorlik",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Raqamli vosita darsni avtomatik yaxshilamaydi. U faqat aniq o'quv maqsadiga xizmat qilgandagina foydali bo'ladi.",
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
                "Nota yozuv dasturlari — partitura tayyorlash",
                "DAW — yozib olish, tahrirlash, aranjirovka",
                "Virtual cholg'ular — cholg'u bo'lmaganda mashq qilish",
                "Interaktiv testlar — tezkor qaytar aloqa",
              ],
            },
            {
              kind: "eslatma",
              text: "Vositani tanlashdan oldin savol bering: bu o'quvchiga nimani o'rganishga yordam beradi? Javob topilmasa — vosita kerak emas.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Virtual pianinoda qisqa kuy yarating, yozib oling va portfolioga saqlang. So'ng uni darsda qanday ishlatishingizni yozing.",
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
                  id: "tex1-t1",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt: "Raqamli vositani tanlashda asosiy mezon nima?",
                  options: [
                    { id: "a", text: "Zamonaviyligi" },
                    { id: "b", text: "O'quv maqsadiga mosligi" },
                    { id: "c", text: "Narxi" },
                    { id: "d", text: "O'quvchilarga yoqishi" },
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
                "Vosita maqsadga xizmat qiladi, aksincha emas",
                "Virtual cholg'u — cholg'u yo'qligida real yechim",
                "Tezkor qaytar aloqa o'rganishni tezlashtiradi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Qaysi vositani o'z darsingizda sinab ko'rmoqchisiz?",
        "Vositasiz ham shu maqsadga erishib bo'ladimi?",
      ],
    },
  ],
};

const AMALIYOT: Course = {
  slug: "pedagogik-amaliyot",
  moduleId: "mod-amaliyot",
  title: "Pedagogik amaliyot",
  description: "Kuzatuvdan mustaqil darsgacha: amaliyotning uch bosqichi.",
  lessons: [
    {
      id: "ama-1",
      slug: "dars-kuzatuvi",
      title: "Mavzu 1: Dars kuzatuvi",
      summary: "Tajribali o'qituvchi darsini mezonlar bo'yicha kuzatish.",
      durationMin: 30,
      bloom: "tahlil",
      outcomeId: "on-ama-1",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Kuzatuv — shunchaki darsda o'tirish emas. Aniq mezonlarsiz kuzatuvchi faqat umumiy taassurot oladi va undan o'rganib bo'lmaydi.",
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
                "Dars maqsadi aniq aytildimi va o'quvchilarga tushunarlimi",
                "Vaqt bosqichlar bo'yicha qanday taqsimlandi",
                "O'quvchilarning faol ishtiroki qanday ta'minlandi",
                "Qaytar aloqa qanday berildi",
                "Dars yakunida natija tekshirildimi",
              ],
            },
            {
              kind: "eslatma",
              text: "Kuzatuv varaqasi baho qo'yish uchun emas — o'z darsingizga g'oya olish uchun to'ldiriladi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Bitta musiqa darsini yuqoridagi besh mezon bo'yicha kuzating. Har bir mezonga bitta aniq misol yozing — umumiy gap emas.",
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
                  id: "ama1-t1",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt: "Kuzatuv yozuvi qanday bo'lsa foydaliroq?",
                  options: [
                    { id: "a", text: "«Dars qiziqarli o'tdi»" },
                    { id: "b", text: "«O'qituvchi 7-daqiqada savol berib, 4 o'quvchini jalb qildi»" },
                    { id: "c", text: "«O'qituvchi yaxshi tayyorlangan»" },
                    { id: "d", text: "«Sinf intizomli»" },
                  ],
                  correctId: "b",
                  explanation:
                    "Aniq, vaqt va raqam bilan qayd etilgan kuzatuvdan xulosa chiqarish mumkin; umumiy taassurotdan esa yo'q.",
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
                "Kuzatuv mezonlar bilan olib boriladi",
                "Aniq misol umumiy bahodan qimmatliroq",
                "Maqsad — baho emas, o'z darsingiz uchun g'oya",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Kuzatuvda qaysi mezon bo'yicha yozish qiyin bo'ldi?",
        "Ko'rgan narsangizdan qaysi birini o'z darsingizda qo'llaysiz?",
      ],
    },
  ],
};

export const KURSLAR: Course[] = [NAZARIYA, IJRO, METODIKA, TEXNOLOGIYA, AMALIYOT];

export const KURS_BY_SLUG = new Map(KURSLAR.map((k) => [k.slug, k]));

export const BARCHA_DARSLAR = KURSLAR.flatMap((kurs) =>
  kurs.lessons.map((lesson) => ({ ...lesson, courseSlug: kurs.slug, courseTitle: kurs.title })),
);

export function findLesson(courseSlug: string, lessonSlug: string) {
  return KURS_BY_SLUG.get(courseSlug)?.lessons.find((l) => l.slug === lessonSlug);
}

/** Kursdagi darsning tartibi — «oldingi / keyingi» tugmalari uchun. */
export function lessonNeighbours(courseSlug: string, lessonSlug: string) {
  const lessons = KURS_BY_SLUG.get(courseSlug)?.lessons ?? [];
  const i = lessons.findIndex((l) => l.slug === lessonSlug);
  return {
    prev: i > 0 ? lessons[i - 1] : undefined,
    next: i >= 0 && i < lessons.length - 1 ? lessons[i + 1] : undefined,
    index: i,
    total: lessons.length,
  };
}
