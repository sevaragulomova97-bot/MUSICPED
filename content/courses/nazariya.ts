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
              caption: "Skripka kalitida do major gammasi — notani bosib eshiting",
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
              text: "Virtual pianinoda do major gammasini pastdan yuqoriga va yuqoridan pastga chalib chiqing. Har bir notani ovoz chiqarib nomlang.",
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
      slug: "nota-savodi",
      title: "Mavzu 2: Nota savodi",
      summary:
        "Alteratsiya belgilari, kalit belgilari va nota yozuvini erkin o'qish.",
      durationMin: 35,
      bloom: "qollash",
      outcomeId: "on-naz-1",
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
                    "Stan boshidagi belgi — kalit belgisi, u butun asarga amal qiladi. Bitta diez sol major (yoki mi minor) tonalligini bildiradi.",
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
      id: "naz-3",
      slug: "ritm-va-olchov",
      title: "Mavzu 3: Ritm va o'lchov",
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
      id: "naz-4",
      slug: "lad-va-tonallik",
      title: "Mavzu 4: Lad va tonallik",
      summary:
        "Major va minor tuzilishi, parallel va bir nomli tonalliklar, kvinta doirasi va kalit belgilari.",
      durationMin: 40,
      bloom: "tushunish",
      outcomeId: "on-naz-6",
      area: "nazariya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Bir xil yetti tovushdan tuzilgan ikki kuy butunlay boshqacha eshitilishi mumkin: biri quvnoq, ikkinchisi g'amgin. Farq tovushlarda emas, ularning o'zaro munosabatida — ya'ni ladda.",
            },
            {
              kind: "matn",
              text: "Bu dars nazariyaning eng amaliy qismi: tonallikni bilmasdan na jo'r tuzib bo'ladi, na asarni bolalar ovoziga ko'chirib bo'ladi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Lad — tovushlarning tayanch tovush atrofida tartiblangan tizimi. Tonallik esa ladning aniq balandlikdagi ko'rinishi: lad turi (major yoki minor) va tonika nomi birga aytiladi — «do major», «lya minor».",
            },
            {
              kind: "eslatma",
              text: "Major va minorni ajratadigan narsa — tonikadan uchinchi bosqichgacha bo'lgan masofa. Majorda u katta tersiya (ikki butun ton), minorda kichik tersiya (bir yarim ton). Butun kayfiyat farqi shu bitta tovushdan boshlanadi.",
            },
            {
              kind: "royxat",
              items: [
                "Natural major: butun-butun-yarim-butun-butun-butun-yarim",
                "Natural minor: butun-yarim-butun-butun-yarim-butun-butun",
                "Garmonik minor: yettinchi bosqich yarim tonga ko'tariladi — dominantaga tortishish kuchayadi",
                "Melodik minor: yuqoriga ko'tarilganda oltinchi va yettinchi bosqich ko'tariladi, pastga tushganda natural holatga qaytadi",
              ],
            },
            {
              kind: "nota",
              caption: "Do major gammasi — yarim tonlar mi–fa va si–do orasida",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4"], duration: "q", lyric: "do" },
                  { keys: ["d/4"], duration: "q", lyric: "re" },
                  { keys: ["e/4"], duration: "q", lyric: "mi" },
                  { keys: ["f/4"], duration: "q", lyric: "fa" },
                  { keys: ["g/4"], duration: "q", lyric: "sol" },
                  { keys: ["a/4"], duration: "q", lyric: "lya" },
                  { keys: ["b/4"], duration: "q", lyric: "si" },
                  { keys: ["c/5"], duration: "q", lyric: "do" },
                ],
              },
            },
            {
              kind: "nota",
              caption: "Lya minor gammasi — bir xil tovushlar, boshqa tayanch",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["a/4"], duration: "q", lyric: "lya" },
                  { keys: ["b/4"], duration: "q", lyric: "si" },
                  { keys: ["c/5"], duration: "q", lyric: "do" },
                  { keys: ["d/5"], duration: "q", lyric: "re" },
                  { keys: ["e/5"], duration: "q", lyric: "mi" },
                  { keys: ["f/5"], duration: "q", lyric: "fa" },
                  { keys: ["g/5"], duration: "q", lyric: "sol" },
                  { keys: ["a/5"], duration: "q", lyric: "lya" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Ikkala gammada ham aynan bir xil tovushlar bor — bitta ham diez yoki bemol yo'q. Ular parallel tonalliklar deyiladi: kalit belgilari bir xil, tonikasi boshqa.",
            },
            {
              kind: "royxat",
              items: [
                "Parallel tonalliklar — kalit belgilari bir xil; minorning tonikasi majornikidan kichik tersiya past (do major ↔ lya minor)",
                "Bir nomli tonalliklar — tonikasi bir xil, lad turi boshqa (do major ↔ do minor)",
                "Parallelni topish: major tonikasidan uch yarim ton pastga tushing",
              ],
            },
            {
              kind: "matn",
              text: "Kvinta doirasi — tonalliklarni tartibga soluvchi xarita. Har safar sof kvinta yuqoriga ko'tarilsangiz, kalitga bitta diez qo'shiladi; kvinta pastga tushsangiz, bitta bemol qo'shiladi.",
            },
            {
              kind: "royxat",
              items: [
                "Diezlar tartibi: fa · do · sol · re · lya · mi · si",
                "Bemollar tartibi — xuddi teskarisi: si · mi · lya · re · sol · do · fa",
                "Diezli tonallikni topish: oxirgi diezdan yarim ton yuqorisi — major tonikasi",
                "Bemolli tonallikni topish: oxirgidan oldingi bemol — major tonikasi (bitta bemolda — fa major, buni yod olinadi)",
              ],
            },
            {
              kind: "eslatma",
              text: "Bu qoidalarni yodlashning hojati yo'q — ularni bir necha marta qo'llasangiz o'zi esda qoladi. Darsda o'quvchilarga ham shunday yondashing: qoidani aytib emas, misolda topqizib o'rgating.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Pianinoda do majordan boshlab gamma chaling, so'ng aynan o'sha oq klavishlarda lya dan boshlab chaling. Quloq bilan eshiting: tovushlar bir xil, lekin kayfiyat boshqacha. Sabab — tayanch tovush o'zgardi.",
              instrument: "pianino",
              exerciseId: "p-do-re-mi",
            },
            {
              kind: "mashq",
              text: "Nayda gamma mashqini bajaring va har bir bosqichni ovoz bilan ham ayting — qaysi joyda yarim ton borligini quloq bilan toping.",
              instrument: "nay",
              exerciseId: "n-gamma",
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
                  id: "naz6-t1",
                  area: "nazariya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Major va minorni birinchi navbatda nima ajratadi?",
                  options: [
                    { id: "a", text: "Tempi" },
                    { id: "b", text: "Tonikadan uchinchi bosqichgacha bo'lgan masofa" },
                    { id: "c", text: "Tovushlar soni" },
                    { id: "d", text: "Kalit turi" },
                  ],
                  correctId: "b",
                  explanation:
                    "Majorda katta tersiya (ikki butun ton), minorda kichik tersiya (bir yarim ton).",
                },
                {
                  id: "naz6-t2",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Do majorning parallel tonalligi qaysi?",
                  options: [
                    { id: "a", text: "Do minor" },
                    { id: "b", text: "Sol major" },
                    { id: "c", text: "Lya minor" },
                    { id: "d", text: "Fa major" },
                  ],
                  correctId: "c",
                  explanation:
                    "Parallel minor major tonikasidan kichik tersiya pastda turadi va kalit belgilari bir xil bo'ladi.",
                },
                {
                  id: "naz6-t3",
                  area: "nazariya",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Kalitda bitta diez (fa♯) turibdi. Bu qaysi major tonallik?",
                  options: [
                    { id: "a", text: "Fa major" },
                    { id: "b", text: "Re major" },
                    { id: "c", text: "Sol major" },
                    { id: "d", text: "Do major" },
                  ],
                  correctId: "c",
                  explanation:
                    "Oxirgi diezdan yarim ton yuqorisi major tonikasi: fa♯ dan yarim ton yuqorida sol turadi.",
                },
                {
                  id: "naz6-t4",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Diezlar kalitda qanday tartibda qo'yiladi?",
                  options: [
                    { id: "a", text: "do · re · mi · fa · sol · lya · si" },
                    { id: "b", text: "fa · do · sol · re · lya · mi · si" },
                    { id: "c", text: "si · mi · lya · re · sol · do · fa" },
                    { id: "d", text: "Tartib yo'q, ixtiyoriy" },
                  ],
                  correctId: "b",
                },
                {
                  id: "naz6-t5",
                  area: "nazariya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Garmonik minorda qaysi bosqich o'zgaradi?",
                  options: [
                    { id: "a", text: "Ikkinchi bosqich pasayadi" },
                    { id: "b", text: "Yettinchi bosqich yarim tonga ko'tariladi" },
                    { id: "c", text: "Uchinchi bosqich ko'tariladi" },
                    { id: "d", text: "Beshinchi bosqich pasayadi" },
                  ],
                  correctId: "b",
                  explanation:
                    "Ko'tarilgan yettinchi bosqich tonikaga tortishishni kuchaytiradi — shuning uchun u dominanta akkordida ishlatiladi.",
                },
                {
                  id: "naz6-t6",
                  area: "nazariya",
                  bloom: "tahlil",
                  kind: "multiple",
                  prompt:
                    "Do major va do minor haqida qaysi fikrlar to'g'ri?",
                  options: [
                    { id: "a", text: "Ular bir nomli tonalliklar" },
                    { id: "b", text: "Ularning tonikasi bir xil" },
                    { id: "c", text: "Ularning kalit belgilari bir xil" },
                    { id: "d", text: "Ularning uchinchi bosqichi farq qiladi" },
                  ],
                  correctIds: ["a", "b", "d"],
                  explanation:
                    "Kalit belgilari farq qiladi: do majorda belgi yo'q, do minorda uchta bemol.",
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
                "Lad — tovushlarning tayanch atrofida tartibi; tonallik — uning aniq balandlikdagi ko'rinishi",
                "Major va minor farqi uchinchi bosqichdan boshlanadi",
                "Parallel tonalliklarda kalit belgilari bir xil, tonika boshqa",
                "Bir nomli tonalliklarda tonika bir xil, kalit belgilari boshqa",
                "Kvinta doirasi tonalliklarni tartibga soladi: har kvinta — bitta yangi belgi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Parallel va bir nomli tonallik farqini o'quvchiga qanday misol bilan tushuntirasiz?",
        "Kalit belgilarini yodlatish o'rniga topqizish uchun qanday mashq o'ylab topa olasiz?",
      ],
    },

    {
      id: "naz-5",
      slug: "interval-va-akkord",
      title: "Mavzu 5: Interval va akkordlar",
      summary: "Intervallarning tuzilishi, trezvuklar va ularni eshitib aniqlash.",
      durationMin: 35,
      bloom: "tahlil",
      outcomeId: "on-naz-3",
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
              text: "Trezvuk — uch tovushli akkord, terstiyalardan tuziladi. Major trezvuk: katta terstiya + kichik terstiya. Minor trezvuk: kichik terstiya + katta terstiya.",
            },
            {
              kind: "nota",
              caption: "Do major va do minor trezvuklari",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4", "e/4", "g/4"], duration: "h", lyric: "major" },
                  { keys: ["c/4", "eb/4", "g/4"], duration: "h", lyric: "minor" },
                ],
              },
            },
            {
              kind: "eslatma",
              text: "Major va minor trezvuklarda prima va kvinta bir xil — faqat o'rtadagi terstiya akkordning bo'yog'ini belgilaydi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Virtual pianinoda do major va do minor trezvuklarini navbatma-navbat chaling. Farqni quloq bilan eslab qoling.",
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
                  prompt: "Major trezvuk qanday tuzilgan?",
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
        "Major va minorni quloq bilan qanday farqlaysiz?",
        "Intervallarni o'rganishda qaysi usul sizga qulay keldi?",
      ],
    },

    {
      id: "naz-6",
      slug: "garmoniya-va-kadanslar",
      title: "Mavzu 6: Garmonik funksiyalar va kadanslar",
      summary:
        "Tonika, subdominanta va dominanta; asosiy kadanslar va ohangga oddiy jo'r tuzish.",
      durationMin: 45,
      bloom: "qollash",
      outcomeId: "on-naz-7",
      area: "nazariya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Maktab o'qituvchisi uchun garmoniya mavhum fan emas, kundalik ehtiyoj: bolalar kuylayotgan qo'shiqqa jo'r topish kerak bo'ladi. Buning uchun butun garmoniya kursini bilish shart emas — uchta funksiya yetadi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Gammaning har bir bosqichida trezvuk (uch tovushli akkord) qurish mumkin. Ularning uchtasi asosiy hisoblanadi, chunki ular gammaning barcha yetti tovushini qamrab oladi.",
            },
            {
              kind: "royxat",
              items: [
                "Tonika (T) — I bosqich akkordi. Tinchlik, tugallanganlik. Do majorda: do–mi–sol",
                "Subdominanta (S) — IV bosqich. Tonikadan uzoqlashish. Do majorda: fa–lya–do",
                "Dominanta (D) — V bosqich. Eng katta kuchlanish, tonikaga qaytishni talab qiladi. Do majorda: sol–si–re",
              ],
            },
            {
              kind: "eslatma",
              text: "Bu uchlikning mantiqi oddiy: tinchlik → uzoqlashish → kuchlanish → tinchlik. Aynan shu harakat musiqaga «yo'l» beradi. T–S–D–T formulasi dunyodagi qo'shiqlarning katta qismida ishlaydi.",
            },
            {
              kind: "nota",
              caption: "Do majorda uchta asosiy akkord: T – S – D – T",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4", "e/4", "g/4"], duration: "q", lyric: "T" },
                  { keys: ["f/4", "a/4", "c/5"], duration: "q", lyric: "S" },
                  { keys: ["g/4", "b/4", "d/5"], duration: "q", lyric: "D" },
                  { keys: ["c/4", "e/4", "g/4"], duration: "q", lyric: "T" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Kadans — musiqiy jumlani yakunlovchi akkordlar burilishi. U tinish belgisiga o'xshaydi: biri nuqta qo'yadi, biri vergul.",
            },
            {
              kind: "royxat",
              items: [
                "To'liq (avtentik) kadans: D → T. Eng ishonchli yakun — «nuqta»",
                "Plagal kadans: S → T. Yumshoqroq yakun; cherkov va xalq musiqasida keng tarqalgan",
                "Yarim kadans: jumla dominantada to'xtaydi. Bu «vergul» — davomi kutiladi",
                "Kutilmagan (uzilgan) kadans: D → VI bosqich. Tinglovchi tonikani kutadi, lekin boshqa akkord keladi",
              ],
            },
            {
              kind: "matn",
              text: "Ohangga jo'r tanlashning amaliy usuli bor va u uch qadamdan iborat.",
            },
            {
              kind: "royxat",
              items: [
                "1. Tonallikni aniqlang — kalit belgilari va oxirgi tovush bo'yicha",
                "2. Har bir taktdagi kuchli zarbdagi tovushni toping",
                "3. Shu tovush qaysi asosiy akkord tarkibida bor — o'sha akkordni qo'ying",
              ],
            },
            {
              kind: "eslatma",
              text: "Agar tovush ikki akkordda ham bo'lsa (masalan do tovushi T da ham, S da ham bor), quloqqa tayaning: ikkalasini chalib ko'ring va qaysi biri tabiiyroq eshitilishini tanlang. Qoida quloqning o'rnini bosmaydi.",
            },
            {
              kind: "nota",
              caption: "Ohang va unga mos jo'r: kuchli zarbdagi tovush akkordni belgilaydi",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["e/4"], duration: "q", lyric: "T" },
                  { keys: ["d/4"], duration: "q" },
                  { keys: ["c/4"], duration: "q", lyric: "T" },
                  { keys: ["f/4"], duration: "q", lyric: "S" },
                  { keys: ["e/4"], duration: "q" },
                  { keys: ["d/4"], duration: "q", lyric: "D" },
                  { keys: ["c/4"], duration: "h", lyric: "T" },
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
              text: "Gitarada T–S–D–T ketma-ketligini chaling va takrorlang. Uni eslab qolguningizcha mashq qiling — bu sizga maktabda eng ko'p kerak bo'ladigan ketma-ketlik.",
              instrument: "gitara",
              exerciseId: "g-akkordlar",
            },
            {
              kind: "mashq",
              text: "Pianinoda tanish bir qo'shiqni chalib, har bir taktning kuchli zarbidagi tovushni toping va unga akkord tanlang. Ikki variantni ham chalib ko'ring — qaysi biri tabiiyroq eshitiladi?",
              instrument: "pianino",
              exerciseId: "p-oddiy-kuy",
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
                  id: "naz7-t1",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Do majorda dominanta akkordi qaysi tovushlardan iborat?",
                  options: [
                    { id: "a", text: "do–mi–sol" },
                    { id: "b", text: "fa–lya–do" },
                    { id: "c", text: "sol–si–re" },
                    { id: "d", text: "re–fa–lya" },
                  ],
                  correctId: "c",
                  explanation: "Dominanta — V bosqich akkordi; do majorda V bosqich sol.",
                },
                {
                  id: "naz7-t2",
                  area: "nazariya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Qaysi kadans eng ishonchli yakun beradi?",
                  options: [
                    { id: "a", text: "Plagal (S → T)" },
                    { id: "b", text: "To'liq avtentik (D → T)" },
                    { id: "c", text: "Yarim kadans (D da to'xtash)" },
                    { id: "d", text: "Kutilmagan (D → VI)" },
                  ],
                  correctId: "b",
                },
                {
                  id: "naz7-t3",
                  area: "nazariya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Jumla dominantada to'xtadi va davomi kutilmoqda. Bu qanday kadans?",
                  options: [
                    { id: "a", text: "To'liq" },
                    { id: "b", text: "Plagal" },
                    { id: "c", text: "Yarim" },
                    { id: "d", text: "Kutilmagan" },
                  ],
                  correctId: "c",
                  explanation:
                    "Yarim kadans — musiqadagi «vergul»: jumla tugamaydi, davomi kutiladi.",
                },
                {
                  id: "naz7-t4",
                  area: "nazariya",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Do majorda taktning kuchli zarbida fa tovushi turibdi. Qaysi asosiy akkord mos keladi?",
                  options: [
                    { id: "a", text: "Tonika (do–mi–sol)" },
                    { id: "b", text: "Subdominanta (fa–lya–do)" },
                    { id: "c", text: "Dominanta (sol–si–re)" },
                    { id: "d", text: "Hech qaysi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "naz7-t5",
                  area: "nazariya",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt: "Ohangga jo'r tanlash qadamlarini tanlang.",
                  options: [
                    { id: "a", text: "Tonallikni aniqlash" },
                    { id: "b", text: "Kuchli zarbdagi tovushni topish" },
                    { id: "c", text: "Shu tovush kirgan akkordni qo'yish" },
                    { id: "d", text: "Tempni o'zgartirish" },
                  ],
                  correctIds: ["a", "b", "c"],
                },
                {
                  id: "naz7-t6",
                  area: "nazariya",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Tinglovchi tonikani kutyapti, lekin dominantadan keyin boshqa akkord keldi. Bu qaysi kadans va u nima beradi?",
                  options: [
                    { id: "a", text: "Plagal — yumshoq yakun" },
                    { id: "b", text: "Kutilmagan — musiqa davom etishini bildiradi" },
                    { id: "c", text: "To'liq — qat'iy yakun" },
                    { id: "d", text: "Yarim — jumla o'rtasi" },
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
                "Uchta asosiy funksiya yetarli: T (tinchlik), S (uzoqlashish), D (kuchlanish)",
                "T–S–D–T harakati musiqaga yo'nalish beradi",
                "Kadans — musiqiy tinish belgisi: to'liq, plagal, yarim, kutilmagan",
                "Jo'r tanlash: tonallik → kuchli zarbdagi tovush → mos akkord",
                "Ikki variant mos kelsa, qoida emas, quloq hal qiladi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Jo'r tanlashda qaysi qadam sizga eng qiyin bo'ldi?",
        "Bolalarga akkord tushunchasini qanday qilib nazariyasiz, quloq orqali bergan bo'lardingiz?",
      ],
    },

    {
      id: "naz-7",
      slug: "musiqa-shakllari",
      title: "Mavzu 7: Musiqa shakllari",
      summary:
        "Motiv, fraza va jumladan periodgacha; ikki va uch qismli shakllarni ajratish.",
      durationMin: 40,
      bloom: "tahlil",
      outcomeId: "on-naz-4",
      area: "nazariya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Musiqa vaqt ichida yashaydi: uni rasm kabi bir qarashda qamrab bo'lmaydi. Shuning uchun bastakor tinglovchiga mo'ljal beradi — takrorlash, qarama-qarshilik va qaytish. Bu mo'ljallar yig'indisi shakl deyiladi.",
            },
            {
              kind: "eslatma",
              text: "Shaklni bilish tahlil uchun emas, ijro uchun ham kerak: qayerda kuchlanish o'sadi, qayerda nafas olinadi — bularning hammasi shakldan kelib chiqadi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Shakl kichik birliklardan quriladi. Ularni kattalik tartibida ko'rib chiqamiz — xuddi harf, so'z, gap va xatboshi kabi.",
            },
            {
              kind: "royxat",
              items: [
                "Motiv — eng kichik ma'noli birlik, odatda bir-ikki takt. Uni ohangning «so'zi» deb tasavvur qiling",
                "Fraza — ikki-to'rt takt; bir nafasda kuylanadigan bo'lak",
                "Jumla — odatda to'rt takt; nisbatan tugallangan fikr",
                "Period — ikki jumladan iborat tugallangan tuzilma, ko'pincha 8 takt",
              ],
            },
            {
              kind: "matn",
              text: "Periodning ikki jumlasi bir-biriga savol va javob kabi munosabatda bo'ladi. Birinchi jumla ko'pincha yarim kadans bilan tugaydi («vergul»), ikkinchisi to'liq kadans bilan («nuqta»).",
            },
            {
              kind: "nota",
              caption: "Period: birinchi jumla savol (yarim kadans), ikkinchisi javob (to'liq kadans)",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4"], duration: "q", lyric: "savol" },
                  { keys: ["e/4"], duration: "q" },
                  { keys: ["g/4"], duration: "q" },
                  { keys: ["g/4"], duration: "q" },
                  { keys: ["a/4"], duration: "q" },
                  { keys: ["g/4"], duration: "q" },
                  { keys: ["d/4"], duration: "h", lyric: "vergul" },
                  { keys: ["c/4"], duration: "q", lyric: "javob" },
                  { keys: ["e/4"], duration: "q" },
                  { keys: ["g/4"], duration: "q" },
                  { keys: ["f/4"], duration: "q" },
                  { keys: ["e/4"], duration: "q" },
                  { keys: ["d/4"], duration: "q" },
                  { keys: ["c/4"], duration: "h", lyric: "nuqta" },
                ],
              },
            },
            {
              kind: "royxat",
              items: [
                "Kvadrat period — jumlalar teng (4+4 yoki 8+8). Qo'shiq va raqs musiqasida keng tarqalgan",
                "Kvadrat bo'lmagan period — jumlalar teng emas; ikkinchisi ko'pincha cho'ziladi",
              ],
            },
            {
              kind: "matn",
              text: "Periodlardan kattaroq shakllar quriladi. Maktab dasturidagi asarlarning aksariyati shu ikki shakldan biriga kiradi.",
            },
            {
              kind: "royxat",
              items: [
                "Ikki qismli shakl (AB) — ikki qism qarama-qarshi qo'yiladi; ikkinchisi ko'pincha boshqa tonallikda boshlanadi",
                "Uch qismli shakl (ABA) — o'rtadagi qism kontrast, so'ng birinchi qism qaytadi. Qaytish repriza deyiladi",
                "Kuplet shakli — qo'shiqlarda: bir xil musiqa turli matn bilan takrorlanadi",
              ],
            },
            {
              kind: "eslatma",
              text: "Shaklni aniqlashning eng oson yo'li — quloq bilan takrorlanishni kuzatish. Birinchi tinglashda faqat bitta savolga javob bering: «bu material avval eshitilganmi?» Shu savol bilan ABA ni AB dan ajratish mumkin.",
            },
            {
              kind: "matn",
              text: "Tahlilni yozishda uch narsani ko'rsating: qismlarning chegaralari (takt raqamlari bilan), har bir qismning tonalligi va qaytish bor-yo'qligi. Shu uchtasi bo'lsa, tahlil asosli bo'ladi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Pianinoda yuqoridagi periodni chaling. Ikki jumla orasidagi farqni eshiting: birinchisi to'xtaydi, lekin tugamaydi; ikkinchisi tugaydi.",
              instrument: "pianino",
              exerciseId: "p-oddiy-kuy",
            },
            {
              kind: "mashq",
              text: "Tanish bir qo'shiqni eslang va uni qismlarga ajrating: qayerda yangi material boshlanadi, qayerda eski qaytadi? Daftaringizda harflar bilan belgilang (A, B, A).",
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
                  id: "naz8-t1",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Eng kichik ma'noli musiqiy birlik qanday ataladi?",
                  options: [
                    { id: "a", text: "Fraza" },
                    { id: "b", text: "Motiv" },
                    { id: "c", text: "Period" },
                    { id: "d", text: "Jumla" },
                  ],
                  correctId: "b",
                },
                {
                  id: "naz8-t2",
                  area: "nazariya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Period odatda nimadan iborat?",
                  options: [
                    { id: "a", text: "Bitta motivdan" },
                    { id: "b", text: "Ikki jumladan" },
                    { id: "c", text: "Uch qismdan" },
                    { id: "d", text: "To'rt frazadan, har biri turli tonallikda" },
                  ],
                  correctId: "b",
                  explanation:
                    "Ikki jumla savol-javob munosabatida bo'ladi: birinchisi yarim kadans, ikkinchisi to'liq kadans bilan tugaydi.",
                },
                {
                  id: "naz8-t3",
                  area: "nazariya",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Asarda yangi material eshitildi, so'ng boshidagi material qaytdi. Bu qanday shakl?",
                  options: [
                    { id: "a", text: "Ikki qismli (AB)" },
                    { id: "b", text: "Uch qismli (ABA)" },
                    { id: "c", text: "Period" },
                    { id: "d", text: "Motiv" },
                  ],
                  correctId: "b",
                },
                {
                  id: "naz8-t4",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Repriza nima?",
                  options: [
                    { id: "a", text: "Asarning eng baland joyi" },
                    { id: "b", text: "Boshlang'ich materialning qaytishi" },
                    { id: "c", text: "Yangi tonallikka o'tish" },
                    { id: "d", text: "Tempning sekinlashishi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "naz8-t5",
                  area: "nazariya",
                  bloom: "tahlil",
                  kind: "multiple",
                  prompt: "Shakl tahlilida nimalarni ko'rsatish kerak?",
                  options: [
                    { id: "a", text: "Qismlarning chegaralari (takt raqamlari bilan)" },
                    { id: "b", text: "Har bir qismning tonalligi" },
                    { id: "c", text: "Qaytish (repriza) bor-yo'qligi" },
                    { id: "d", text: "Bastakorning tug'ilgan yili" },
                  ],
                  correctIds: ["a", "b", "c"],
                },
                {
                  id: "naz8-t6",
                  area: "nazariya",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Periodning jumlalari 4 va 4 taktdan iborat. Bu qanday period?",
                  options: [
                    { id: "a", text: "Kvadrat" },
                    { id: "b", text: "Kvadrat bo'lmagan" },
                    { id: "c", text: "Uch qismli" },
                    { id: "d", text: "Kuplet" },
                  ],
                  correctId: "a",
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
                "Motiv → fraza → jumla → period: shakl kichikdan kattaga quriladi",
                "Periodning ikki jumlasi savol va javob kabi ishlaydi",
                "AB — qarama-qarshilik; ABA — qarama-qarshilik va qaytish",
                "Shaklni aniqlashning kaliti: «bu material avval eshitilganmi?»",
                "Tahlil chegaralar, tonallik va qaytish orqali asoslanadi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Qaysi tanish asarda ABA shaklini aniq eshitdingiz?",
        "Boshlang'ich sinf o'quvchisiga «qaytish» tushunchasini qanday ko'rsatgan bo'lardingiz?",
      ],
    },

    {
      id: "naz-8",
      slug: "temp-dinamika-ifoda",
      title: "Mavzu 8: Temp, dinamika va ifoda belgilari",
      summary:
        "Nota matnidagi ko'rsatmalar: temp atamalari, kuchlanish darajalari va shtrixlar.",
      durationMin: 30,
      bloom: "bilish",
      outcomeId: "on-naz-8",
      area: "nazariya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Nota faqat qaysi tovush va qancha davom etishini yozadi. Qanday chalish kerakligini esa alohida belgilar aytadi — tezlik, kuch va zarb usuli. Ularsiz nota matni yarim o'qilgan bo'ladi.",
            },
            {
              kind: "eslatma",
              text: "Bu atamalar deyarli hammasi italyan tilidan. Sabab tarixiy: nota nashri Yevropada aynan Italiyada shakllangan va atamalar o'zgarmay qolgan.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Temp — asarning tezligi. U so'z bilan (italyan atamasi) yoki metronom raqami bilan ko'rsatiladi. Quyidagi raqamlar taxminiy: ular qat'iy chegara emas, mo'ljal.",
            },
            {
              kind: "royxat",
              items: [
                "Largo — juda sekin, keng (taxminan 40–60 zarba/daqiqa)",
                "Adagio — sekin, bosiq (66–76)",
                "Andante — yurish tezligida (76–108)",
                "Moderato — o'rtacha (108–120)",
                "Allegro — tez, quvnoq (120–168)",
                "Presto — juda tez (168 dan yuqori)",
              ],
            },
            {
              kind: "royxat",
              items: [
                "accelerando (accel.) — asta tezlashtirib",
                "ritardando (rit.) — asta sekinlashtirib",
                "a tempo — avvalgi tempga qaytish",
                "fermata — tovushni belgilangan davomiylikdan uzunroq ushlab turish",
              ],
            },
            {
              kind: "matn",
              text: "Dinamika — tovushning kuchi. U ham so'z, ham belgi bilan beriladi va ijroning eng ta'sirchan vositalaridan biri.",
            },
            {
              kind: "royxat",
              items: [
                "pp (pianissimo) — juda sekin",
                "p (piano) — sekin",
                "mp (mezzo piano) — o'rtacha sekin",
                "mf (mezzo forte) — o'rtacha kuchli",
                "f (forte) — kuchli",
                "ff (fortissimo) — juda kuchli",
                "crescendo (cresc.) — asta kuchaytirib",
                "diminuendo (dim.) yoki decrescendo — asta pasaytirib",
              ],
            },
            {
              kind: "eslatma",
              text: "Dinamika nisbiy tushuncha: forte skripkada va forte xorda butunlay boshqa tovush kuchi. Belgi «qancha desibel» emas, «shu asarda, shu joyda qanchalik kuchli» degani.",
            },
            {
              kind: "matn",
              text: "Shtrix — tovushni hosil qilish usuli. U ohangning xarakterini butunlay o'zgartiradi: bir xil notalar legato bilan kuylanadi, staccato bilan esa raqsga aylanadi.",
            },
            {
              kind: "royxat",
              items: [
                "legato — tovushlarni uzmasdan, bog'lab (liga belgisi bilan)",
                "staccato — qisqa, ajratib (nota ustida nuqta)",
                "marcato — ta'kidlab, aniq zarb bilan",
                "akzent (>) — alohida tovushni kuchaytirib",
              ],
            },
            {
              kind: "nota",
              caption: "Bir xil ohang, lekin ifoda ko'rsatmalari bilan",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["g/4"], duration: "q", lyric: "p" },
                  { keys: ["a/4"], duration: "q" },
                  { keys: ["b/4"], duration: "q", lyric: "cresc." },
                  { keys: ["c/5"], duration: "q" },
                  { keys: ["d/5"], duration: "h", lyric: "f" },
                  { keys: ["b/4"], duration: "q", lyric: "dim." },
                  { keys: ["g/4"], duration: "h", lyric: "p" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Darsda bu belgilarni ro'yxat qilib yodlatish samarasiz. Ularni farq orqali ko'rsating: bir xil ibora avval legato, keyin staccato chalinsa, bola farqni bir eshitishda tushunadi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Nayda qisqa ohangni ikki marta chaling: birinchi marta sekin va yumshoq (p, legato), ikkinchi marta tez va aniq (f, staccato). Ikki yozuvni solishtiring — nota bir xil, musiqa esa boshqa.",
              instrument: "nay",
              exerciseId: "n-ohang",
            },
            {
              kind: "mashq",
              text: "Pianinoda bitta iborani crescendo bilan, keyin diminuendo bilan chaling. Kuchlanishni bir tekis o'sayotganini quloq bilan nazorat qiling.",
              instrument: "pianino",
              exerciseId: "p-oddiy-kuy",
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
                  id: "naz9-t1",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Qaysi temp eng sekin?",
                  options: [
                    { id: "a", text: "Allegro" },
                    { id: "b", text: "Moderato" },
                    { id: "c", text: "Largo" },
                    { id: "d", text: "Andante" },
                  ],
                  correctId: "c",
                },
                {
                  id: "naz9-t2",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "mf belgisi nimani bildiradi?",
                  options: [
                    { id: "a", text: "Juda sekin" },
                    { id: "b", text: "O'rtacha kuchli" },
                    { id: "c", text: "Juda kuchli" },
                    { id: "d", text: "Asta kuchaytirib" },
                  ],
                  correctId: "b",
                },
                {
                  id: "naz9-t3",
                  area: "nazariya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Nota ustidagi nuqta nimani bildiradi?",
                  options: [
                    { id: "a", text: "Tovushni uzaytirish" },
                    { id: "b", text: "Staccato — qisqa, ajratib chalish" },
                    { id: "c", text: "Tovushni pasaytirish" },
                    { id: "d", text: "Takrorlash" },
                  ],
                  correctId: "b",
                  explanation:
                    "Nota yonidagi (o'ng tomonidagi) nuqta davomiylikni uzaytiradi, ustidagi nuqta esa staccato belgisidir — ikkisini aralashtirmaslik kerak.",
                },
                {
                  id: "naz9-t4",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "ritardando nimani talab qiladi?",
                  options: [
                    { id: "a", text: "Asta tezlashtirish" },
                    { id: "b", text: "Asta sekinlashtirish" },
                    { id: "c", text: "Kuchaytirish" },
                    { id: "d", text: "Avvalgi tempga qaytish" },
                  ],
                  correctId: "b",
                },
                {
                  id: "naz9-t5",
                  area: "nazariya",
                  bloom: "tushunish",
                  kind: "multiple",
                  prompt: "Dinamika belgilarini tanlang.",
                  options: [
                    { id: "a", text: "pp" },
                    { id: "b", text: "crescendo" },
                    { id: "c", text: "Allegro" },
                    { id: "d", text: "ff" },
                  ],
                  correctIds: ["a", "b", "d"],
                  explanation: "Allegro — dinamika emas, temp atamasi.",
                },
                {
                  id: "naz9-t6",
                  area: "nazariya",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Nima uchun forte skripkada va forte xorda bir xil tovush kuchi emas?",
                  options: [
                    { id: "a", text: "Belgi noto'g'ri yozilgan" },
                    { id: "b", text: "Dinamika nisbiy: u shu asar va shu ijrochi doirasida o'lchanadi" },
                    { id: "c", text: "Xor har doim balandroq chiqadi" },
                    { id: "d", text: "Farqi yo'q, bir xil" },
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
                "Nota nimani chalishni, ifoda belgilari esa qanday chalishni aytadi",
                "Temp: Largo → Adagio → Andante → Moderato → Allegro → Presto",
                "Dinamika pp dan ff gacha; u nisbiy tushuncha",
                "Shtrix ohangning xarakterini o'zgartiradi: legato kuylaydi, staccato raqsga soladi",
                "Darsda belgilarni yodlatmang — farqni eshittiring",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Qaysi ifoda belgisi ijroingizni eng ko'p o'zgartirdi?",
        "Staccato va legato farqini bolalarga so'zsiz qanday ko'rsatgan bo'lardingiz?",
      ],
    },

    {
      id: "naz-9",
      slug: "solfedjio-va-diktant",
      title: "Mavzu 9: Solfedjio va eshituv diktanti",
      summary:
        "Notadan kuylash, bosqichlarni eshitib tanish va ohangni eshitib yozib olish usuli.",
      durationMin: 40,
      bloom: "qollash",
      outcomeId: "on-naz-9",
      area: "eshituv",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Nazariyani bilish va uni eshita olish — ikki boshqa narsa. Solfedjio aynan shu ikkisini bog'laydi: ko'z bilan ko'rgan notani ovozga, quloq bilan eshitgan tovushni notaga aylantirishni o'rgatadi.",
            },
            {
              kind: "eslatma",
              text: "Musiqa o'qituvchisi uchun bu malaka kundalik: bola noto'g'ri kuylaganda qaysi tovush xato ekanini darhol aytish kerak bo'ladi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Solfedjio — notani bo'g'in nomlari bilan kuylash: do, re, mi, fa, sol, lya, si. Ikki yondashuv mavjud va ikkalasi ham ishlatiladi.",
            },
            {
              kind: "royxat",
              items: [
                "Mutlaq (absolyut) solmizatsiya — «do» har doim do tovushi. Cholg'uchilar uchun qulay",
                "Nisbiy (relyativ) solmizatsiya — «do» har doim tonika. Xor va umumta'lim maktabi uchun qulay: tonallik o'zgarsa ham bo'g'inlar o'zgarmaydi",
              ],
            },
            {
              kind: "matn",
              text: "Bosqichlarni eshitib tanish uchun har bir bosqichning «xarakterini» eslab qolish kerak. Ular rang kabi: birini ikkinchisidan tajriba orqali ajratasiz.",
            },
            {
              kind: "royxat",
              items: [
                "I bosqich (tonika) — tinch, tayanch; ohang unda to'xtashga intiladi",
                "III bosqich — lad turini ochib beradi: major yoki minor ekani shundan bilinadi",
                "V bosqich — mustahkam, tonikadan keyin eng barqaror",
                "VII bosqich — tortishuvchi: tonikaga ko'tarilishni talab qiladi",
              ],
            },
            {
              kind: "nota",
              caption: "Tayanch bosqichlar: I – III – V – I (do majorda)",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4"], duration: "q", lyric: "I" },
                  { keys: ["e/4"], duration: "q", lyric: "III" },
                  { keys: ["g/4"], duration: "q", lyric: "V" },
                  { keys: ["c/5"], duration: "q", lyric: "I" },
                  { keys: ["b/4"], duration: "q", lyric: "VII" },
                  { keys: ["c/5"], duration: "h", lyric: "I" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Eshituv diktanti — ohangni eshitib, nota yozuviga tushirish. Uni tartibsiz yozishga urinish deyarli har doim muvaffaqiyatsiz tugaydi. Quyidagi ketma-ketlik esa ishlaydi.",
            },
            {
              kind: "royxat",
              items: [
                "1. Birinchi tinglash — hech narsa yozmang. Faqat umumiy shaklni va kayfiyatni tuting",
                "2. O'lchov va tonallikni aniqlang: kuchli zarb qayerda, oxirgi tovush qanday",
                "3. Birinchi va oxirgi tovushni yozing — ular odatda tayanch bosqichlar",
                "4. Ritmni yozing, balandliksiz: faqat davomiyliklar",
                "5. Balandlikni to'ldiring — bo'laklab, bir-ikki taktdan",
                "6. Tekshiring: yozganingizni kuylab, asl bilan solishtiring",
              ],
            },
            {
              kind: "eslatma",
              text: "Eng keng tarqalgan xato — darhol birinchi notadan boshlab yozishga urinish. Shunda bitta xato butun diktantni buzadi. To'g'ri yo'l — «ramkadan ichkariga»: avval chegaralar, keyin ritm, oxirida balandlik.",
            },
            {
              kind: "matn",
              text: "Diktant o'quvchi uchun qiyin bo'lsa, uni osonlashtirishning yo'li bor: ohangni qisqartirish emas, tinglashlar sonini oshirish va ritmni alohida mashq qilish. Qiyinlik darajasi yaqin rivojlanish zonasiga mos bo'lishi kerak.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Pianinoda do–re–mi mashqini chalib, har bir tovushni ovoz bilan ham ayting. Keyin notaga qaramasdan takrorlang.",
              instrument: "pianino",
              exerciseId: "p-do-re-mi",
            },
            {
              kind: "mashq",
              text: "Diktant mashqi: nayda qisqa ohang chalib yozib oling, bir kun o'tgach yozuvni tinglang va uni notaga tushirishga urinib ko'ring. So'ng o'z yozuvingiz bilan solishtiring — bu o'ziga diktant yozishning eng oddiy usuli.",
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
                  id: "naz10-t1",
                  area: "eshituv",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Nisbiy (relyativ) solmizatsiyada «do» nimani bildiradi?",
                  options: [
                    { id: "a", text: "Har doim do tovushini" },
                    { id: "b", text: "Har doim tonikani" },
                    { id: "c", text: "Har doim eng past tovushni" },
                    { id: "d", text: "Dominantani" },
                  ],
                  correctId: "b",
                  explanation:
                    "Shuning uchun tonallik o'zgarsa ham bo'g'inlar o'zgarmaydi — bu xor ishida qulay.",
                },
                {
                  id: "naz10-t2",
                  area: "eshituv",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Qaysi bosqich lad turini (major yoki minor) ochib beradi?",
                  options: [
                    { id: "a", text: "I" },
                    { id: "b", text: "III" },
                    { id: "c", text: "V" },
                    { id: "d", text: "VII" },
                  ],
                  correctId: "b",
                },
                {
                  id: "naz10-t3",
                  area: "eshituv",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Diktantni yozishni nimadan boshlash kerak?",
                  options: [
                    { id: "a", text: "Birinchi notadan ketma-ket yozishdan" },
                    { id: "b", text: "Hech narsa yozmasdan, umumiy shaklni tutishdan" },
                    { id: "c", text: "Oxirgi taktdan" },
                    { id: "d", text: "Kalit belgilarini yozishdan" },
                  ],
                  correctId: "b",
                },
                {
                  id: "naz10-t4",
                  area: "eshituv",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Diktantda balandlikdan oldin nimani yozish tavsiya etiladi?",
                  options: [
                    { id: "a", text: "Dinamikani" },
                    { id: "b", text: "Ritmni" },
                    { id: "c", text: "Tempni" },
                    { id: "d", text: "Bastakor nomini" },
                  ],
                  correctId: "b",
                  explanation:
                    "Ritm «ramka» beradi; balandlikni tayyor ramkaga joylash ancha oson.",
                },
                {
                  id: "naz10-t5",
                  area: "eshituv",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "O'quvchi uchun diktant juda qiyin. Qaysi yechim to'g'riroq?",
                  options: [
                    { id: "a", text: "Diktantni butunlay bekor qilish" },
                    { id: "b", text: "Tinglashlar sonini oshirish va ritmni alohida mashq qilish" },
                    { id: "c", text: "Javobni aytib qo'yish" },
                    { id: "d", text: "Boshqa o'quvchidan ko'chirishga ruxsat berish" },
                  ],
                  correctId: "b",
                  explanation:
                    "Topshiriq yaqin rivojlanish zonasida qolishi kerak: yordam beriladi, lekin ish talabaning o'zida qoladi.",
                },
                {
                  id: "naz10-t6",
                  area: "eshituv",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "VII bosqichning xarakterli xususiyati nima?",
                  options: [
                    { id: "a", text: "Eng barqaror tovush" },
                    { id: "b", text: "Tonikaga tortishadi" },
                    { id: "c", text: "Lad turini belgilaydi" },
                    { id: "d", text: "Har doim pastda turadi" },
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
                "Solfedjio ko'rish bilan eshitishni bog'laydi",
                "Mutlaq solmizatsiya cholg'uchiga, nisbiy solmizatsiya xorga qulay",
                "Bosqichlarning o'z xarakteri bor: I tinch, III lad turini ochadi, V barqaror, VII tortishadi",
                "Diktant tartibi: shakl → o'lchov va tonallik → chegara tovushlar → ritm → balandlik → tekshirish",
                "Qiyin diktant qisqartirilmaydi — tinglash soni oshiriladi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Diktant yozishda qaysi qadam sizga eng ko'p yordam berdi?",
        "Bosqichlarni eshitib tanishni mashq qilish uchun qanday o'yin o'ylab topa olasiz?",
      ],
    },

    {
      id: "naz-10",
      slug: "maqom-lad-asoslari",
      title: "Mavzu 10: Maqom va uning lad asoslari",
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
