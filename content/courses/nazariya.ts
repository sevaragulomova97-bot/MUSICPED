import type { Course } from "@/content/lesson-types";

/**
 * Musiqa nazariyasi kursi.
 *
 * Nota savodidan maqom tahliligacha: har bir dars modulning aniq o'quv
 * natijasiga bog'langan (`outcomeId`) — konstruktiv moslashuv talabi.
 */

export const NAZARIYA: Course = {
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

    {
      id: "naz-5",
      slug: "maqom-lad-asoslari",
      title: "Mavzu 5: Maqom va uning lad asoslari",
      summary:
        "O'zbek maqom san'ati, lad tushunchasi, usul va avj; maqom namunasini lad asosida tahlil qilish.",
      durationMin: 45,
      bloom: "tahlil",
      outcomeId: "on-naz-5",
      area: "nazariya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Shu paytgacha biz tovushlarni Yevropa musiqa nazariyasi tilida — major va minor orqali ko'rib chiqdik. Lekin o'zbek musiqasining asosiy klassik tizimi boshqacha qurilgan. Uni maqom deb ataymiz.",
            },
            {
              kind: "matn",
              text: "Bu dars nazariy bilimni milliy musiqa bilan bog'laydi. Maktab dasturida maqom mavzusi bor, va uni o'qituvchi «bu bizning musiqamiz» deb aytibgina qo'ymasligi, balki tuzilishini tushuntira olishi kerak.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Maqom — bu bitta kuy emas, balki o'zaro bog'langan asarlar turkumi. Har bir maqomning o'z lad asosi, o'z usullari va o'ziga xos ohang burilishlari bor.",
            },
            {
              kind: "royxat",
              items: [
                "Shashmaqom — Buxoro-Samarqand an'anasidagi olti maqom: Buzruk, Rost, Navo, Dugoh, Segoh, Iroq",
                "Xorazm maqomlari — Xorazm an'anasi, o'ziga xos ijro uslubi bilan",
                "Farg'ona-Toshkent maqom yo'llari — uchinchi yirik mahalliy an'ana",
              ],
            },
            {
              kind: "eslatma",
              text: "Shashmaqom YUNESKOning nomoddiy madaniy meros ro'yxatiga kiritilgan. Bu uni «muzeyga qo'yilgan» narsa qilmaydi: u bugun ham ijro etiladi va o'qitiladi.",
            },
            {
              kind: "matn",
              text: "Lad — tovushlarning o'zaro munosabati tizimi. Yevropa musiqasida lad asosan major va minorga keladi; maqomda esa ladni uch narsa belgilaydi: tovushqator, tayanch tovush va xarakterli ohang burilishlari.",
            },
            {
              kind: "royxat",
              items: [
                "Tovushqator — maqomda ishlatiladigan tovushlar to'plami va ularning tartibi",
                "Tayanch tovush — ohang qaytib keladigan va to'xtaydigan markaz",
                "Xarakterli burilish — shu maqomni boshqasidan ajratadigan ohang shakli",
                "Avj — asarning eng yuqori va eng kuchli cho'qqisi; maqomning dramatik markazi",
                "Usul — doirada chalinadigan ritmik formula; har bir qismning o'z usuli bor",
              ],
            },
            {
              kind: "nota",
              caption:
                "Shartli misol: tayanch tovush atrofida aylanuvchi ohang (haqiqiy maqom namunasi emas)",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["d/4"], duration: "q", lyric: "tayanch" },
                  { keys: ["e/4"], duration: "8" },
                  { keys: ["f/4"], duration: "8" },
                  { keys: ["e/4"], duration: "q" },
                  { keys: ["d/4"], duration: "q", lyric: "qaytish" },
                  { keys: ["g/4"], duration: "q" },
                  { keys: ["f/4"], duration: "8" },
                  { keys: ["e/4"], duration: "8" },
                  { keys: ["d/4"], duration: "h", lyric: "to'xtash" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Diqqat: yuqoridagi nota — o'quv maqsadida tuzilgan shartli misol, haqiqiy maqom asaridan ko'chirma emas. U faqat bitta g'oyani ko'rsatadi: ohang tayanch tovushdan uzoqlashadi va unga qaytadi.",
            },
            {
              kind: "matn",
              text: "Maqom tuzilmasi ham muhim. Shashmaqomning har bir maqomi ikki katta bo'limga bo'linadi: Mushkilot (cholg'u bo'limi) va Nasr (ashula bo'limi). Ularning ichida shu'balar — kichikroq qismlar turadi.",
            },
            {
              kind: "eslatma",
              text: "Avjni topish — tahlilning eng oson kirish nuqtasi. Asarni tinglang va ohang eng yuqoriga ko'tarilgan, kuchlanish eng baland bo'lgan joyni belgilang. Odatda u asarning oxirgi uchdan birida bo'ladi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Rubobda maqom yo'nalishidagi mashqni bajaring. Chalayotganda ikki narsaga e'tibor bering: qaysi tovushga qayta-qayta qaytyapsiz (tayanch) va ohang qayerda eng yuqoriga chiqadi (avj).",
              instrument: "rubob",
              exerciseId: "r-maqom",
            },
            {
              kind: "mashq",
              text: "Doirada asosiy usulni chalib ko'ring. Usul — maqomning «skeleti»: ohang o'zgarsa ham usul saqlanadi.",
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
                  id: "naz5-t1",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Shashmaqom tarkibida nechta maqom bor?",
                  options: [
                    { id: "a", text: "To'rtta" },
                    { id: "b", text: "Oltita" },
                    { id: "c", text: "O'n ikkita" },
                    { id: "d", text: "Yigirma to'rtta" },
                  ],
                  correctId: "b",
                  explanation:
                    "«Shash» — olti degani: Buzruk, Rost, Navo, Dugoh, Segoh, Iroq.",
                },
                {
                  id: "naz5-t2",
                  area: "nazariya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Avj nima?",
                  options: [
                    { id: "a", text: "Asarning boshlanish qismi" },
                    { id: "b", text: "Doirada chalinadigan ritmik formula" },
                    { id: "c", text: "Ohangning eng yuqori va kuchli cho'qqisi" },
                    { id: "d", text: "Maqomning cholg'u bo'limi" },
                  ],
                  correctId: "c",
                  explanation:
                    "Avj — maqomning dramatik markazi; odatda asarning oxirgi uchdan birida keladi.",
                },
                {
                  id: "naz5-t3",
                  area: "nazariya",
                  bloom: "tushunish",
                  kind: "multiple",
                  prompt: "Maqomda ladni belgilaydigan omillarni tanlang.",
                  options: [
                    { id: "a", text: "Tovushqator" },
                    { id: "b", text: "Tayanch tovush" },
                    { id: "c", text: "Xarakterli ohang burilishlari" },
                    { id: "d", text: "Ijrochining yoshi" },
                  ],
                  correctIds: ["a", "b", "c"],
                },
                {
                  id: "naz5-t4",
                  area: "nazariya",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Ohang bir necha marta bitta tovushga qaytib, o'sha tovushda to'xtaydi. Bu tovush tahlilda qanday ataladi?",
                  options: [
                    { id: "a", text: "Avj" },
                    { id: "b", text: "Usul" },
                    { id: "c", text: "Tayanch tovush" },
                    { id: "d", text: "Shu'ba" },
                  ],
                  correctId: "c",
                },
                {
                  id: "naz5-t5",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Mushkilot va Nasr — bular nima?",
                  options: [
                    { id: "a", text: "Ikki xil doira usuli" },
                    { id: "b", text: "Maqomning cholg'u va ashula bo'limlari" },
                    { id: "c", text: "Ikki xil cholg'u nomi" },
                    { id: "d", text: "Lad turlari" },
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
                "Maqom — bitta kuy emas, turkum: o'z ladi, usullari va tuzilmasi bilan",
                "Ladni tovushqator, tayanch tovush va xarakterli burilishlar belgilaydi",
                "Avj — asarning cho'qqisi; tahlilni undan boshlash oson",
                "Usul ohangdan mustaqil: ohang o'zgarsa ham usul saqlanadi",
                "Shashmaqom — Buzruk, Rost, Navo, Dugoh, Segoh, Iroq",
              ],
            },
            {
              kind: "eslatma",
              text: "Keyingi qadam: «Maqom namunasi tahlili» topshirig'ida tanlagan asaringizni shu to'rt savol bo'yicha yozma tahlil qilasiz — tayanch tovush, tovushqator, avj va usul.",
            },
          ],
        },
      ],
      reflection: [
        "Maqom ladini Yevropa major/minor tizimidan nimasi bilan farq qiladi deb tushundingiz?",
        "Maktab o'quvchisiga avj nima ekanini qanday tushuntirgan bo'lardingiz — ta'rif bilanmi yoki tinglatibmi?",
        "Milliy musiqani o'qitishda eng katta qiyinchilik nima deb o'ylaysiz?",
      ],
    },
  ],
};
