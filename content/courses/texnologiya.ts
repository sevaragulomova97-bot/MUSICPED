import type { Course } from "@/content/lesson-types";

/**
 * Musiqa texnologiyalari kursi.
 *
 * Faqat erkin litsenziyali dasturlar tavsiya etiladi (MuseScore, Audacity):
 * platformaning o'zi kabi, ular ham hech qanday obuna talab qilmaydi.
 *
 * Kurs uch chiziqni birga olib boradi: **yaratish** (nota, yozuv, tahrir,
 * fonogramma, aranjirovka), **huquq** (mualliflik huquqi, bolalar
 * ma'lumotlari) va **yetkazish** (masofaviy dars). Huquq darsi ataylab
 * boshida: nimadir yaratishdan oldin nimani olish mumkinligini bilish kerak.
 */

export const TEXNOLOGIYA: Course = {
  slug: "musiqa-texnologiyalari",
  moduleId: "mod-texnologiya",
  title: "Musiqa texnologiyalari",
  description:
    "Nota dasturlari, tovush yozish va tahrir, fonogramma, aranjirovka, mualliflik huquqi, raqamli xavfsizlik va masofaviy dars.",
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

    {
      id: "tex-2",
      slug: "mualliflik-huquqi",
      title: "Mavzu 2: Mualliflik huquqi va ochiq litsenziyalar",
      summary:
        "Darsda va onlaynda qaysi materialni qonuniy ishlatish mumkin: huquq turlari, ochiq litsenziyalar va manba yozuvi.",
      durationMin: 35,
      bloom: "tushunish",
      outcomeId: "on-tex-5",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Sinfda yozuv qo'yish, konsert videosini internetga joylash, taqdimotga nota rasmini qo'yish — bularning har biri mualliflik huquqiga tegadi. Ko'pchilik buni o'ylab ham ko'rmaydi.",
            },
            {
              kind: "matn",
              text: "Bu dars yuridik ma'ruza emas. Maqsadi oddiy: qaysi materialni bemalol olish mumkin, qaysisiga ruxsat kerak va qanday qilib keyinroq muammo chiqmasligini bilish.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Bitta musiqa asarida bir nechta huquq birga yashaydi. Shuning uchun «bu kuy juda eski» degan dalil ko'pincha yetarli bo'lmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Asar huquqi — bastakor va matn muallifiga tegishli (ohang va so'z)",
                "Yozuv huquqi — aniq bir ijro yozuvining egasiga tegishli (studiya, ijrochi, nashriyot)",
                "Nashr huquqi — chop etilgan nota matnining tartibi, aranjirovkasi va dizayniga tegishli",
                "Eski xalq kuyi erkin bo'lishi mumkin, lekin uning zamonaviy yozuvi va aranjirovkasi — yo'q",
              ],
            },
            {
              kind: "eslatma",
              text: "Amaliy xulosa: «ohangni o'zim chalsam» va «tayyor yozuvni qo'ysam» — ikki xil holat. Birinchisida yozuv huquqi umuman qatnashmaydi.",
            },
            {
              kind: "matn",
              text: "Ochiq litsenziyalar — muallif o'zi oldindan bergan ruxsat. Eng keng tarqalgani Creative Commons oilasi; ularning shartlari qisqartmalarda yoziladi.",
            },
            {
              kind: "royxat",
              items: [
                "CC0 — mualliflik huquqidan voz kechilgan; deyarli hamma narsa mumkin",
                "BY — muallifni ko'rsatish sharti bilan erkin foydalanish",
                "BY-SA — ko'rsatish va hosila ishni xuddi shu litsenziya bilan tarqatish",
                "BY-NC — tijorat maqsadida ishlatib bo'lmaydi (pullik konsert, reklama)",
                "BY-ND — o'zgartirish mumkin emas: aranjirovka ham, qisqartirish ham",
              ],
            },
            {
              kind: "eslatma",
              text: "Maktab darsi uchun odatda BY yoki BY-SA yetarli. NC va ND belgilarini e'tiborsiz qoldirmang: pullik tadbir yoki aranjirovka qilish — aynan ular taqiqlaydigan holatlar.",
            },
            {
              kind: "matn",
              text: "Ta'lim maqsadidagi foydalanish ko'p mamlakatda yengillikka ega, lekin bu yengillik cheksiz emas. Chegara odatda shu yerdan o'tadi: material sinf ichida qoladimi yoki ochiq internetga chiqadimi.",
            },
            {
              kind: "royxat",
              items: [
                "Sinf ichida tinglatish — eng xavfsiz holat",
                "Maktab konsertida ijro etish — odatda mumkin, lekin tadbir pullik bo'lsa shartlar o'zgaradi",
                "Yozib olib internetga joylash — bu allaqachon nashr; ruxsat yoki ochiq litsenziya kerak",
                "Nota matnini ko'chirib tarqatish — nashr huquqiga tegadi, ruxsat talab qilinadi",
              ],
            },
            {
              kind: "matn",
              text: "Eng ishonchli yo'l — muammoni boshidan chetlab o'tish: o'zingiz yozgan, o'zingiz ijro etgan yoki ochiq litsenziyali material ishlating.",
            },
            {
              kind: "royxat",
              items: [
                "O'z ijroingizni o'zingiz yozib oling — yozuv huquqi sizda bo'ladi",
                "Ochiq nota kutubxonalaridan foydalaning va litsenziya belgisini tekshiring",
                "Xalq kuyini o'zingiz qayta yozib chiqing — zamonaviy nashrdan ko'chirmang",
                "Har bir manbani yozib boring: nomi, muallifi, manzili, litsenziyasi, olingan sana",
              ],
            },
            {
              kind: "eslatma",
              text: "Manba ro'yxatini keyin tiklab bo'lmaydi. Materialni olgan payting bir qator yozib qo'yish — bir yildan keyin bir soatlik izlanishdan arzon. Shu platformaning o'zi ham aynan shunday yuritiladi: barcha tashqi material `CREDITS.md` faylida qayd etiladi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Oxirgi darsingizda yoki taqdimotingizda ishlatgan uchta materialni oling (yozuv, nota, rasm). Har biri uchun javob bering: muallifi kim, qaysi huquq turi tegishli, qanday asosda ishlatdingiz?",
            },
            {
              kind: "mashq",
              text: "Pianinoda bitta xalq kuyini o'zingiz chalib yozib oling. Endi taqqoslang: shu yozuvni internetga joylash bilan tayyor studiya yozuvini joylash orasida huquqiy jihatdan qanday farq bor?",
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
                  id: "tex5-t1",
                  area: "metodika",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "«BY» belgisi nimani anglatadi?",
                  options: [
                    { id: "a", text: "Tijorat maqsadida ishlatib bo'lmaydi" },
                    { id: "b", text: "Muallifni ko'rsatish sharti bilan erkin foydalanish" },
                    { id: "c", text: "O'zgartirish taqiqlangan" },
                    { id: "d", text: "Mualliflik huquqidan voz kechilgan" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex5-t2",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Xalq kuyining zamonaviy studiya yozuvini darsda tinglatdingiz va uni internetga joyladingiz. Qaysi huquq qatnashadi?",
                  options: [
                    { id: "a", text: "Hech qanday — kuy xalqniki" },
                    { id: "b", text: "Yozuv huquqi: aniq ijro yozuvi himoyalangan" },
                    { id: "c", text: "Faqat asar huquqi" },
                    { id: "d", text: "Faqat nashr huquqi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex5-t3",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Asarga aranjirovka qilmoqchisiz. Qaysi litsenziya belgisi buni taqiqlaydi?",
                  options: [
                    { id: "a", text: "BY" },
                    { id: "b", text: "SA" },
                    { id: "c", text: "ND" },
                    { id: "d", text: "CC0" },
                  ],
                  correctId: "c",
                  explanation:
                    "ND — «hosila ish yaratilmasin»: aranjirovka ham, qisqartirish ham shunga kiradi.",
                },
                {
                  id: "tex5-t4",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Qaysi holat huquqiy jihatdan eng xavfli?",
                  options: [
                    { id: "a", text: "Sinf ichida yozuv tinglatish" },
                    { id: "b", text: "O'z ijroingizni yozib, internetga joylash" },
                    { id: "c", text: "Tayyor studiya yozuvini konsert videosiga qo'shib internetga joylash" },
                    { id: "d", text: "Ochiq litsenziyali notadan foydalanish" },
                  ],
                  correctId: "c",
                },
                {
                  id: "tex5-t5",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt: "Qaysi yo'llar muammoni boshidan chetlab o'tadi?",
                  options: [
                    { id: "a", text: "O'z ijroingizni o'zingiz yozib olish" },
                    { id: "b", text: "Ochiq litsenziyali manbalardan foydalanish" },
                    { id: "c", text: "Internetdan topilgan har qanday yozuvni olish" },
                    { id: "d", text: "Har bir manbani litsenziyasi bilan qayd etib borish" },
                  ],
                  correctIds: ["a", "b", "d"],
                },
                {
                  id: "tex5-t6",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Nega manbani olgan payting yozib qo'yish kerak, keyin emas?",
                  options: [
                    { id: "a", text: "Shunday qoida bor" },
                    { id: "b", text: "Keyinroq manba va litsenziyani tiklash deyarli imkonsiz bo'lib qoladi" },
                    { id: "c", text: "Fayl hajmi kamayadi" },
                    { id: "d", text: "Kerak emas, keyin ham topiladi" },
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
                "Bitta asarda uch huquq birga yashaydi: asar, yozuv, nashr",
                "CC belgilari: CC0, BY, SA, NC, ND — NC va ND eng ko'p e'tibordan chetda qoladi",
                "Chegara sinf ichi va ochiq internet orasidan o'tadi",
                "Eng ishonchli yo'l — o'z yozuving yoki ochiq litsenziyali material",
                "Manba olingan payti qayd etiladi, keyin emas",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Darsingizda ishlatadigan materiallardan qaysi birining litsenziyasini bilmaysiz?",
        "Maktabingizda manba qayd etish tartibi bormi — bo'lmasa, uni qanday joriy qilgan bo'lardingiz?",
      ],
    },

    {
      id: "tex-3",
      slug: "nota-yozuv-dasturi",
      title: "Mavzu 3: Nota yozuv dasturida ishlash",
      summary:
        "Partiturani tayyorlash: stan, kalit, o'lchov, partiyalar va chop etishga tayyorlash.",
      durationMin: 40,
      bloom: "qollash",
      outcomeId: "on-tex-1",
      area: "nazariya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Qo'lda yozilgan nota ham ishlaydi, lekin uni ko'paytirish, tuzatish va transpozitsiya qilish qiyin. Dasturda yozilgan partitura esa bir necha soniyada boshqa tonallikka o'tadi va har bir cholg'u uchun alohida partiya chiqaradi.",
            },
            {
              kind: "eslatma",
              text: "Bu kursda faqat erkin (bepul va ochiq kodli) dasturlar tavsiya etiladi: MuseScore — nota yozuvi uchun, Audacity — audio uchun. Ikkalasi ham obuna talab qilmaydi va maktab kompyuteriga qonuniy o'rnatiladi. Platformaning o'zi ham shu tamoyil asosida qurilgan.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Har qanday nota yozuv dasturida ish tartibi bir xil. Dastur o'zgarsa ham, bu ketma-ketlik o'zgarmaydi — shuning uchun uni o'rganish muhimroq.",
            },
            {
              kind: "royxat",
              items: [
                "1. Yangi hujjat: cholg'ular tanlanadi (har biri alohida stan oladi)",
                "2. Kalit, tonallik va o'lchov belgilanadi",
                "3. Notalar kiritiladi — klaviatura yoki sichqoncha bilan",
                "4. Ifoda belgilari qo'yiladi: dinamika, liga, temp",
                "5. Tekshirish — dastur partiturani chalib beradi",
                "6. Chop etish yoki PDF ga eksport",
              ],
            },
            {
              kind: "eslatma",
              text: "Eng ko'p vaqt yo'qotadigan joy — notalarni sichqoncha bilan kiritish. Klaviaturadan foydalaning: balandlik harf tugmalari bilan (A–G), davomiylik raqamlar bilan tanlanadi. Bu usul bir necha barobar tez.",
            },
            {
              kind: "nota",
              caption: "Partiturada yoziladigan eng oddiy element: o'lchov va kalit",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "3/4",
                notes: [
                  { keys: ["g/4"], duration: "q" },
                  { keys: ["a/4"], duration: "q" },
                  { keys: ["b/4"], duration: "q" },
                  { keys: ["c/5"], duration: "h" },
                  { keys: ["b/4"], duration: "q" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Transpozitsiya — dasturning eng foydali imkoniyati. Asar bolalar ovoziga baland bo'lsa, uni bir necha tugma bilan pastroq tonallikka ko'chirasiz. Qo'lda bu butun partiturani qayta yozish demakdir.",
            },
            {
              kind: "royxat",
              items: [
                "Partitura — barcha partiyalar birga ko'rinadigan to'liq yozuv",
                "Partiya — bitta ijrochi uchun ajratilgan yozuv; dastur uni avtomatik chiqaradi",
                "Transpozitsiya — butun asarni boshqa tonallikka ko'chirish",
                "MIDI eksport — partiturani tovush fayliga aylantirish",
              ],
            },
            {
              kind: "eslatma",
              text: "Ish faylini (dastur formati) va PDF ni alohida saqlang. PDF — tarqatish uchun, ish fayli — tahrirlash uchun. Faqat PDF saqlansa, keyingi tuzatish uchun hamma narsa qaytadan yoziladi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Platformadagi pianinoda sakkiz notali qisqa ohang to'qing va yozib oling. So'ng shu ohangni nota yozuv dasturida tering: kalit, o'lchov va notalarni kiriting, dasturga chaltirib tekshiring.",
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
                  id: "tex2-t1",
                  area: "nazariya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Partitura va partiya o'rtasidagi farq nima?",
                  options: [
                    { id: "a", text: "Farqi yo'q, bir xil narsa" },
                    { id: "b", text: "Partitura — barcha partiyalar birga; partiya — bitta ijrochi uchun" },
                    { id: "c", text: "Partitura — qo'lda, partiya — dasturda yoziladi" },
                    { id: "d", text: "Partiya — faqat ashula uchun" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex2-t2",
                  area: "nazariya",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Asar bolalar ovoziga baland chiqdi. Dasturda eng tez yechim qaysi?",
                  options: [
                    { id: "a", text: "Partiturani qaytadan yozish" },
                    { id: "b", text: "Transpozitsiya qilish" },
                    { id: "c", text: "Tempni sekinlashtirish" },
                    { id: "d", text: "Dinamikani pasaytirish" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex2-t3",
                  area: "nazariya",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Nima uchun ish fayli va PDF ni alohida saqlash kerak?",
                  options: [
                    { id: "a", text: "PDF ko'proq joy egallaydi" },
                    { id: "b", text: "PDF ni tahrirlab bo'lmaydi — tuzatish uchun ish fayli kerak" },
                    { id: "c", text: "PDF chop etilmaydi" },
                    { id: "d", text: "Hech qanday sabab yo'q" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex2-t4",
                  area: "nazariya",
                  bloom: "bilish",
                  kind: "single",
                  prompt:
                    "Notalarni kiritishning eng tez usuli qaysi?",
                  options: [
                    { id: "a", text: "Sichqoncha bilan har bir notani qo'yish" },
                    { id: "b", text: "Klaviaturadan: balandlik harf, davomiylik raqam bilan" },
                    { id: "c", text: "Skanerdan o'tkazish" },
                    { id: "d", text: "Qo'lda yozib, rasmga olish" },
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
                "Ish tartibi dasturdan qat'i nazar bir xil — uni o'rganish muhimroq",
                "Klaviaturadan kiritish sichqonchadan bir necha barobar tez",
                "Transpozitsiya — dasturning eng foydali imkoniyati",
                "Ish fayli va PDF alohida saqlanadi",
                "Erkin dasturlar (MuseScore) maktab uchun yetarli va qonuniy",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Nota dasturida ishlash qo'lda yozishdan nimasi bilan qulay bo'ldi?",
        "Darsda partiturani o'quvchilarga qanday ko'rinishda bergan bo'lardingiz?",
      ],
    },

    {
      id: "tex-4",
      slug: "tovush-yozish",
      title: "Mavzu 4: Tovush yozish asoslari",
      summary:
        "Mikrofon turlari va joylashuvi, xona akustikasi, yozuv darajasi va sinf yoki yakka ijroni toza yozib olish.",
      durationMin: 40,
      bloom: "qollash",
      outcomeId: "on-tex-7",
      area: "ijodkorlik",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Yomon yozilgan tovushni tahrirlab tuzatib bo'lmaydi. Shovqin, aks-sado va buzilgan daraja — bular effekt bilan yopiladigan kamchilik emas, yozuvning ichiga kirib ketgan nuqson.",
            },
            {
              kind: "matn",
              text: "Shuning uchun tahrirlashdan oldin yozib olishni o'rganish kerak. Yaxshi xabar shuki, maktab sharoitida natijani belgilaydigan narsalar qimmat jihoz emas — joylashuv, xona va daraja.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Mikrofon turi vazifaga qarab tanlanadi. Maktabda odatda ikki tur uchraydi va ularning xatti-harakati butunlay boshqacha.",
            },
            {
              kind: "royxat",
              items: [
                "Dinamik mikrofon — mustahkam, shovqinga chidamli, yaqindan yozishga qulay; sinf shovqinida ishonchli",
                "Kondensator mikrofon — nozik va sezgir, tafsilotni yaxshi oladi; tinch xona talab qiladi",
                "Telefon yoki noutbuk mikrofoni — faqat zarurat uchun; yo'nalishi keng, shuning uchun xona shovqinini ham oladi",
                "Yo'nalish naqshi muhim: kardioid faqat oldidagi tovushni oladi, keng naqsh esa butun xonani",
              ],
            },
            {
              kind: "eslatma",
              text: "Mikrofon qanchalik qimmat bo'lsa ham, noto'g'ri joyga qo'yilsa arzonidan yomon yozadi. Joylashuv — yozuv sifatiga ta'sir qiluvchi eng kuchli omil.",
            },
            {
              kind: "royxat",
              items: [
                "Yakka ovoz: og'izdan 20–30 sm, biroz yon tomondan — «p» va «b» tovushlari havo zarbini bermaydi",
                "Pianino: ochiq qopqoq ostidan, torlardan 30–50 sm balandlikda",
                "Dutor, rubob, gitara: tovush teshigi ro'parasiga emas, grif tomonga biroz og'dirib — aks holda bass ortib ketadi",
                "Sinf xori: oldingi qatordan 1,5–2 m uzoqlikda va bosh balandligidan yuqoriroq",
                "Doira va zarbli: uzoqroqdan, kamida 1 m — yaqin masofa zarbni buzadi",
              ],
            },
            {
              kind: "matn",
              text: "Xona mikrofondan ko'ra ko'proq ahamiyatga ega. Bo'sh devorli sinf xonasida aks-sado uzun bo'ladi va yozuv «quvurning ichida» eshitiladi.",
            },
            {
              kind: "royxat",
              items: [
                "Yumshoq narsa aks-sadoni yutadi: parda, kiyim, palos, kitob javoni",
                "Xonaning markazida emas, burchakka yaqinroq, lekin devorga tegib turmasdan yozing",
                "Deraza va koridor tomonni yoping; eng ko'p shovqin shu yerdan keladi",
                "Konditsioner, proyektor va kompyuter kulerini o'chiring — ular yozuvda doimiy g'uvillash qoldiradi",
              ],
            },
            {
              kind: "matn",
              text: "Daraja (level) — yozuvdagi eng ko'p uchraydigan texnik xato. Juda past yozilgan tovushni ko'targanda shovqin ham ko'tariladi; juda baland yozilgan tovush esa qirqilib, buzilib qoladi.",
            },
            {
              kind: "royxat",
              items: [
                "Eng baland joyda ko'rsatkich taxminan -6 dB atrofida tursin, 0 ga yetmasin",
                "Avval eng baland bo'lagini sinab yozing, keyin darajani belgilang",
                "Qizil chiroq yonsa — tovush qirqilgan; uni keyin tuzatib bo'lmaydi, qayta yozish kerak",
                "Yozuvdan oldin 5 soniya jimlik qoldiring: tahrirlashda xona shovqinini tozalash uchun namuna bo'ladi",
              ],
            },
            {
              kind: "eslatma",
              text: "Sinf bilan yozayotganda bolalarga mikrofon «sehrli» ko'rinadi. Shuning uchun yozuvdan oldin bir marta sinab yozib, ularga eshittiring — qiziqish qondiriladi va asosiy yozuvda tartib buzilmaydi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Bitta qisqa ohangni uch xil joylashuvda yozib oling: mikrofon juda yaqin, to'g'ri masofada va juda uzoq. Uchalasini ketma-ket tinglang va farqni so'z bilan ta'riflang.",
            },
            {
              kind: "mashq",
              text: "Nayda lirik ohangni chalib yozing. Nafas shovqini qaysi masofada eshitilmay qoladi va qaysi masofadan tovush «quruq» bo'lib qoladi — shu ikki chegarani toping.",
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
                  id: "tex7-t1",
                  area: "ijodkorlik",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Sinf shovqini bor xonada qaysi mikrofon ishonchliroq?",
                  options: [
                    { id: "a", text: "Sezgir kondensator mikrofon" },
                    { id: "b", text: "Dinamik mikrofon" },
                    { id: "c", text: "Noutbukning ichki mikrofoni" },
                    { id: "d", text: "Farqi yo'q" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex7-t2",
                  area: "ijodkorlik",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Yozuvda eng baland joyda ko'rsatkich qayerda turishi kerak?",
                  options: [
                    { id: "a", text: "0 dB da, imkon qadar baland" },
                    { id: "b", text: "Taxminan -6 dB atrofida" },
                    { id: "c", text: "-40 dB dan past" },
                    { id: "d", text: "Ahamiyati yo'q, keyin ko'tariladi" },
                  ],
                  correctId: "b",
                  explanation:
                    "0 ga yetgan tovush qirqiladi va buni keyin tuzatib bo'lmaydi; juda past daraja esa ko'tarilganda shovqinni ham ko'taradi.",
                },
                {
                  id: "tex7-t3",
                  area: "ijodkorlik",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Yozuv «quvurning ichida» eshitilyapti. Sabab nima?",
                  options: [
                    { id: "a", text: "Mikrofon arzon" },
                    { id: "b", text: "Xonada aks-sado uzun: yumshoq yutuvchi yuza yo'q" },
                    { id: "c", text: "Daraja past" },
                    { id: "d", text: "Fayl formati noto'g'ri" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex7-t4",
                  area: "ijodkorlik",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Yozuvdan oldin 5 soniya jimlik nima uchun qoldiriladi?",
                  options: [
                    { id: "a", text: "Ijrochi tayyorlanishi uchun" },
                    { id: "b", text: "Xona shovqinining namunasi sifatida — keyin uni tozalash uchun ishlatiladi" },
                    { id: "c", text: "Fayl boshida bo'shliq kerak" },
                    { id: "d", text: "Dastur shuni talab qiladi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex7-t5",
                  area: "ijodkorlik",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt: "Yozuvdan oldin xonada nimalarni o'chirish kerak?",
                  options: [
                    { id: "a", text: "Konditsioner" },
                    { id: "b", text: "Proyektor" },
                    { id: "c", text: "Xona yoritgichi" },
                    { id: "d", text: "Kompyuter kuleri eshitilsa — kompyuter" },
                  ],
                  correctIds: ["a", "b", "d"],
                },
                {
                  id: "tex7-t6",
                  area: "ijodkorlik",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Qimmat mikrofon oldingiz, lekin yozuv sifati yaxshilanmadi. Birinchi tekshiriladigan narsa qaysi?",
                  options: [
                    { id: "a", text: "Mikrofon nuqsonli" },
                    { id: "b", text: "Joylashuv va xona" },
                    { id: "c", text: "Fayl formati" },
                    { id: "d", text: "Dastur versiyasi" },
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
                "Yomon yozilgan tovushni tahrirlab tuzatib bo'lmaydi",
                "Mikrofon turi vazifaga qarab: dinamik — shovqinli joyga, kondensator — tinch xonaga",
                "Joylashuv narxdan muhimroq",
                "Xona aks-sadosi yumshoq yuzalar bilan kamaytiriladi",
                "Daraja eng baland joyda -6 dB atrofida; 0 ga yetgan tovush qirqiladi",
                "Boshida 5 soniya jimlik — shovqinni tozalash uchun namuna",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Maktabingizdagi qaysi xona yozuv uchun eng mos va nega?",
        "Sinf bilan yozuvga tayyorgarlikda qanday qoida kiritgan bo'lardingiz?",
      ],
    },

    {
      id: "tex-5",
      slug: "audio-tahrirlash",
      title: "Mavzu 5: Audio yozuvni darsga tayyorlash",
      summary:
        "Kesish, balandlikni tenglash, shovqinni kamaytirish va fayl formatini to'g'ri tanlash.",
      durationMin: 35,
      bloom: "qollash",
      outcomeId: "on-tex-2",
      area: "ijodkorlik",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Darsga olib kelingan audio ko'pincha tayyor emas: boshida ortiqcha sukunat, oxirida keraksiz qism, balandligi esa boshqa fayllardan farq qiladi. Bir necha daqiqalik tahrir bu muammolarni yechadi.",
            },
            {
              kind: "eslatma",
              text: "Diqqat: boshqa mualliflarning yozuvlaridan foydalanishda mualliflik huquqi masalasi bor. Dars uchun o'z yozuvingizni yoki erkin litsenziyali (Creative Commons, jamoat mulki) materialni ishlating va manbasini ko'rsating.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Audio tahrirning darsga kerakli to'rtta amali bor. Ularning hammasi erkin dasturda (Audacity) bajariladi.",
            },
            {
              kind: "royxat",
              items: [
                "Kesish — kerakli bo'lakni ajratib olish; boshidagi va oxiridagi ortiqchani olib tashlash",
                "Balandlikni tenglash (normalizatsiya) — barcha fayllar bir xil balandlikda yangrasin",
                "Shovqinni kamaytirish — avval sof shovqin namunasi olinadi, keyin butun yozuvdan ayiriladi",
                "Sekin kirish va chiqish (fade) — bo'lak keskin boshlanmasin va keskin uzilmasin",
              ],
            },
            {
              kind: "eslatma",
              text: "Shovqinni kamaytirishda o'lchovni bilish kerak: kuchli qo'llansa, musiqa «suv ostida» yangraydi. Qoida — eshitiladigan shovqin qolgani yaxshi, lekin tovush buzilmagan bo'lsin.",
            },
            {
              kind: "matn",
              text: "Format tanlash ham amaliy masala. WAV — siqilmagan, sifati to'liq, lekin o'nlab megabayt. MP3 — siqilgan, sifati yetarli, hajmi kichik. Darsga tarqatish uchun MP3, arxivga saqlash uchun WAV.",
            },
            {
              kind: "royxat",
              items: [
                "Namuna chastotasi (44,1 kGts) — standart; o'zgartirishga ehtiyoj kam",
                "Bitreyt (MP3 uchun 192 kbit/s) — dars uchun yetarli sifat",
                "Mono yoki stereo — nutq uchun mono, musiqa uchun stereo",
              ],
            },
            {
              kind: "eslatma",
              text: "Har doim nusxada ishlang. Asl faylni saqlab qo'ying: tahrirni qaytarib bo'lmaydigan holat (masalan ortiqcha kesilgan bo'lak) kutilganidan tez-tez uchraydi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Nayda qisqa ohang chalib yozib oling. Yozuvni kompyuterga olib, audio dasturda boshidagi sukunatni kesing, balandlikni tenglang va 192 kbit/s MP3 ga eksport qiling.",
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
                  id: "tex3-t1",
                  area: "ijodkorlik",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Normalizatsiya nima qiladi?",
                  options: [
                    { id: "a", text: "Shovqinni olib tashlaydi" },
                    { id: "b", text: "Yozuvning balandligini standart darajaga keltiradi" },
                    { id: "c", text: "Faylni siqadi" },
                    { id: "d", text: "Tempni o'zgartiradi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex3-t2",
                  area: "ijodkorlik",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Darsda tarqatish uchun qaysi format qulayroq?",
                  options: [
                    { id: "a", text: "WAV — sifati to'liq" },
                    { id: "b", text: "MP3 — sifati yetarli, hajmi kichik" },
                    { id: "c", text: "Format ahamiyatsiz" },
                    { id: "d", text: "Faqat video format" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex3-t3",
                  area: "ijodkorlik",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Shovqinni kamaytirgandan keyin musiqa «suv ostida» yangrayapti. Sabab nima?",
                  options: [
                    { id: "a", text: "Fayl buzilgan" },
                    { id: "b", text: "Shovqin kamaytirish juda kuchli qo'llangan" },
                    { id: "c", text: "Format noto'g'ri" },
                    { id: "d", text: "Balandlik past" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex3-t4",
                  area: "ijodkorlik",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Darsda boshqa muallifning yozuvidan foydalanmoqchisiz. To'g'ri yo'l qaysi?",
                  options: [
                    { id: "a", text: "Istalgan yozuvni olib ishlatish" },
                    { id: "b", text: "O'z yozuvingizni yoki erkin litsenziyali materialni ishlatib, manbasini ko'rsatish" },
                    { id: "c", text: "Yozuvni biroz o'zgartirib ishlatish" },
                    { id: "d", text: "Manbani ko'rsatmasdan ishlatish" },
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
                "To'rt amal yetarli: kesish, balandlikni tenglash, shovqin, fade",
                "Shovqin kamaytirishda o'lchov muhim — tovush buzilmasin",
                "Tarqatish uchun MP3, arxiv uchun WAV",
                "Har doim nusxada ishlang, aslini saqlang",
                "Mualliflik huquqi: o'z yozuvi yoki erkin litsenziyali material",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Tahrirdan oldin va keyin yozuvni solishtirganda nimani payqadingiz?",
        "Maktabda audio tayyorlash uchun qancha vaqt ketadi deb o'ylaysiz?",
      ],
    },

    {
      id: "tex-6",
      slug: "fonogramma-tayyorlash",
      title: "Mavzu 6: Fonogramma tayyorlash va sahna tovushi",
      summary:
        "Maktab tadbiri uchun jo'r fonogramma yaratish: tonallik, temp, kirish, dinamika va zalda sinash.",
      durationMin: 45,
      bloom: "sintez",
      outcomeId: "on-tex-8",
      area: "ijodkorlik",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Maktab bayrami, konsert, sinf tadbiri — bularning deyarli hammasida fonogramma kerak bo'ladi. Tayyor fonogrammani topish esa odatda ikki muammoga uriladi: tonallik mos kelmaydi yoki huquqi noma'lum.",
            },
            {
              kind: "matn",
              text: "O'zi tayyorlangan fonogramma ikkala muammoni ham yechadi. Ustiga-ustak u sinfning aniq imkoniyatiga moslanadi — bu tayyor yozuvda hech qachon bo'lmaydi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Fonogramma — kuylovchiga xizmat qiladigan jo'r. Uning qoidalari jonli jo'rnikiga o'xshaydi, lekin bitta jiddiy farq bor: fonogramma kutmaydi va moslashmaydi. Shuning uchun hamma qaror oldindan qabul qilinadi.",
            },
            {
              kind: "royxat",
              items: [
                "Tonallik sinf diapazoniga oldindan moslanadi — sahnada uni o'zgartirib bo'lmaydi",
                "Temp bir oz vazminroq olinadi: hayajonda bolalar odatda shoshadi",
                "Kirish albatta bo'lsin va u tanilsin — bolalar qachon boshlashni eshitishi kerak",
                "Kuplet va naqarot orasidagi o'tish aniq eshitilsin",
                "Oxiri tugalangan bo'lsin: birdan uzilgan fonogramma sahnada chalkashlik tug'diradi",
              ],
            },
            {
              kind: "eslatma",
              text: "Eng ko'p uchraydigan xato — fonogrammani «chiroyli» qilishga urinish. Qalin aranjirovka, ko'p cholg'u va baland dinamika bolalar ovozini bosib ketadi; zalda esa faqat fonogramma eshitiladi.",
            },
            {
              kind: "matn",
              text: "Tayyorlash tartibi oddiy va u har doim bir xil: avval asos, keyin bezak. Teskarisi qilinsa, oxirida hamma narsani qaytadan sozlashga to'g'ri keladi.",
            },
            {
              kind: "royxat",
              items: [
                "1. Tonallik va tempni belgilang; metronom bilan yozib, uni oxirigacha o'zgartirmang",
                "2. Garmonik asosni yozing — T, S, D akkordlari, sodda fakturada",
                "3. Bas chizig'ini qo'shing: u metrni ushlab turadi",
                "4. Zarb qo'shing, lekin yengil — doira yoki oddiy naqsh yetarli",
                "5. Kirish va tugashni yozing",
                "6. Dinamikani tekislang: naqarot kupletdan biroz baland, lekin ovozdan past",
                "7. Boshi va oxiriga bir soniya jimlik qoldiring",
              ],
            },
            {
              kind: "matn",
              text: "Tayyor bo'lgach, fonogrammani naushnikda emas, zalda sinash kerak. Naushnikdagi muvozanat zal akustikasida butunlay boshqacha eshitiladi.",
            },
            {
              kind: "royxat",
              items: [
                "Zalda, haqiqiy kolonkada va haqiqiy balandlikda tinglang",
                "Bolalar bilan birga bir marta boshdan oxir ijro qilib ko'ring",
                "Past chastotalar zalda kuchayadi — bas ko'pincha kamaytirilishi kerak bo'ladi",
                "Faylni ikki nusxada saqlang va tadbirga ikkita qurilmada olib boring",
                "Fayl nomida qo'shiq nomi, tonallik va temp yozilsin: sahna ortida izlashga vaqt bo'lmaydi",
              ],
            },
            {
              kind: "eslatma",
              text: "Huquqiy tomoni ham shu yerda hal bo'ladi: o'zingiz yozgan fonogrammaning yozuv huquqi sizda bo'ladi. Asar o'zi himoyalangan bo'lsa, ijro uchun ruxsat masalasi baribir qoladi — buni oldingi darsdagi qoidalar bo'yicha tekshiring.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Pianinoda T – S – D7 – T ketma-ketligini metronom bilan, bir xil tempda yozib oling. Bu — fonogrammaning garmonik asosi; uning ustiga qolgan hamma narsa quriladi.",
              instrument: "pianino",
              exerciseId: "p-oz-kuy",
            },
            {
              kind: "mashq",
              text: "Doirada yengil jo'r naqshini yozing va uni garmonik asosga qo'shing. Zarb qanchalik baland bo'lsa, bolalar ovozi shunchalik yo'qoladi — muvozanatni quloq bilan toping.",
              instrument: "doira",
              exerciseId: "doira-jorlik",
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
                  id: "tex8-t1",
                  area: "ijodkorlik",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Fonogramma jonli jo'rdan qaysi jihati bilan tubdan farq qiladi?",
                  options: [
                    { id: "a", text: "Baland yangraydi" },
                    { id: "b", text: "U kutmaydi va moslashmaydi — hamma qaror oldindan qabul qilinadi" },
                    { id: "c", text: "Unda akkordlar boshqacha" },
                    { id: "d", text: "U faqat tadbirlarda ishlatiladi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex8-t2",
                  area: "ijodkorlik",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Fonogramma tempini qanday tanlaysiz?",
                  options: [
                    { id: "a", text: "Asar tempidan tezroq — sahnada qiziqarli bo'ladi" },
                    { id: "b", text: "Bir oz vazminroq: hayajonda bolalar shoshadi" },
                    { id: "c", text: "Eng sekin tempda" },
                    { id: "d", text: "Har kupletda o'zgartiraman" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex8-t3",
                  area: "ijodkorlik",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Konsertda zalda faqat fonogramma eshitildi, bolalar ovozi yo'qoldi. Eng ehtimolli sabab?",
                  options: [
                    { id: "a", text: "Bolalar sekin kuyladi" },
                    { id: "b", text: "Aranjirovka qalin va dinamika baland — jo'r ovozni bosdi" },
                    { id: "c", text: "Tonallik past edi" },
                    { id: "d", text: "Fayl formati siqilgan" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex8-t4",
                  area: "ijodkorlik",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Fonogrammani qayerda sinab ko'rish kerak?",
                  options: [
                    { id: "a", text: "Naushnikda — eng aniq eshitiladi" },
                    { id: "b", text: "Zalda, haqiqiy kolonkada va haqiqiy balandlikda" },
                    { id: "c", text: "Telefon dinamikasida" },
                    { id: "d", text: "Sinash shart emas" },
                  ],
                  correctId: "b",
                  explanation:
                    "Zal akustikasi past chastotalarni kuchaytiradi; naushnikdagi muvozanat u yerda boshqacha eshitiladi.",
                },
                {
                  id: "tex8-t5",
                  area: "ijodkorlik",
                  bloom: "sintez",
                  kind: "multiple",
                  prompt: "Fonogrammada nimalar albatta bo'lishi kerak?",
                  options: [
                    { id: "a", text: "Tanib olinadigan kirish" },
                    { id: "b", text: "Kuplet va naqarot orasida aniq o'tish" },
                    { id: "c", text: "Tugalangan oxir" },
                    { id: "d", text: "Har kupletda temp o'zgarishi" },
                  ],
                  correctIds: ["a", "b", "c"],
                },
                {
                  id: "tex8-t6",
                  area: "ijodkorlik",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Nega fayl nomiga tonallik va temp yoziladi?",
                  options: [
                    { id: "a", text: "Chiroyli ko'rinadi" },
                    { id: "b", text: "Sahna ortida izlashga va tekshirishga vaqt bo'lmaydi" },
                    { id: "c", text: "Dastur talab qiladi" },
                    { id: "d", text: "Fayl hajmi kamayadi" },
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
                "Fonogramma kutmaydi: tonallik, temp va tuzilma oldindan hal qilinadi",
                "Tartib: asos -> bas -> zarb -> kirish va tugash -> dinamika",
                "Qalin aranjirovka bolalar ovozini bosadi",
                "Sinash zalda, haqiqiy kolonkada bo'ladi",
                "Ikki nusxa, ikki qurilma; fayl nomida tonallik va temp",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Oxirgi ko'rgan maktab tadbirida fonogramma bilan bog'liq qanday muammo bo'ldi?",
        "O'z fonogrammangizni tayyorlash uchun qaysi bosqich siz uchun eng qiyin bo'ladi deb o'ylaysiz?",
      ],
    },

    {
      id: "tex-7",
      slug: "aranjirovka-asoslari",
      title: "Mavzu 7: Aranjirovka asoslari",
      summary:
        "Ohangni sinf imkoniyatiga moslash: partiyalar, diapazon, qiyinlik darajasi va tuzilma.",
      durationMin: 45,
      bloom: "sintez",
      outcomeId: "on-tex-4",
      area: "ijodkorlik",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Aranjirovka — tayyor ohangni muayyan ijrochilar uchun qayta tartiblash. Maktab o'qituvchisi uchun bu kundalik ish: sinfda beshta turli cholg'u va turli darajadagi bolalar bor, tayyor nota esa ularga mos kelmaydi.",
            },
            {
              kind: "eslatma",
              text: "Aranjirovka — shaxsga yo'naltirilgan ta'limning amaliy shakli: bir xil asarda kuchli o'quvchi murakkab partiyani, endi boshlagani esa ikki notali partiyani oladi, lekin ikkalasi ham bitta musiqada ishtirok etadi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Aranjirovka uch savoldan boshlanadi: kim chaladi, qanday darajada va qancha vaqt mashq qilinadi? Javoblarsiz aranjirovka «chiroyli, lekin ijro etib bo'lmaydigan» chiqadi.",
            },
            {
              kind: "royxat",
              items: [
                "Diapazon — har bir cholg'u va ovozning chegarasi; undan chiqib ketgan nota ijro etilmaydi",
                "Partiyalar taqsimoti — asosiy ohang, jo'r, bas va ritm",
                "Qiyinlik darajalash — bir asarda oson va murakkab partiyalar birga bo'lishi mumkin",
                "Tuzilma — kirish, asosiy qism, kontrast qism, yakun",
              ],
            },
            {
              kind: "matn",
              text: "Eng sodda va eng ishonchli tuzilma — uch qatlam: ohang, jo'r va ritm. Ohangni kuchli ijrochilar yoki nay oladi; jo'rni gitara yoki pianino akkordlari; ritmni doira. Shu uchligi bilan har qanday sinfda musiqa yig'iladi.",
            },
            {
              kind: "nota",
              caption: "Uch qatlam: ohang yuqorida, jo'r pastda (shartli misol)",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["e/4", "g/4", "c/5"], duration: "q", lyric: "I" },
                  { keys: ["f/4", "a/4", "c/5"], duration: "q", lyric: "IV" },
                  { keys: ["d/4", "g/4", "b/4"], duration: "q", lyric: "V" },
                  { keys: ["e/4", "g/4", "c/5"], duration: "q", lyric: "I" },
                ],
              },
            },
            {
              kind: "eslatma",
              text: "Endi boshlagan o'quvchi uchun partiya ikki-uch notadan iborat bo'lishi mumkin — masalan faqat kuchli zarblarda bitta tovush. Bu «kam» emas: u umumiy natijaga qo'shiladi va bola o'zini ansambl a'zosi deb his qiladi.",
            },
            {
              kind: "matn",
              text: "Aranjirovkani tekshirishning oddiy usuli bor: har bir partiyani alohida chalib ko'ring. Agar biror partiya o'z-o'zicha ma'nosiz va zerikarli bo'lsa, uni qayta yozing — ijrochi ham shuni his qiladi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Tanish bir ohangni oling va uni uch qatlamga ajrating. Gitarada jo'r akkordlarni mashq qiling — bu aranjirovkangizning o'rta qatlami.",
              instrument: "gitara",
              exerciseId: "g-akkordlar",
            },
            {
              kind: "mashq",
              text: "Doirada ritm qatlamini qo'shing. So'ng uch qatlamni tasavvur qiling: har biri alohida chalganda ham ma'noli eshitiladimi?",
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
                  id: "tex4-t1",
                  area: "ijodkorlik",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Aranjirovka qaysi uch savoldan boshlanadi?",
                  options: [
                    { id: "a", text: "Qancha turadi, qayerda chalinadi, kim tinglaydi" },
                    { id: "b", text: "Kim chaladi, qanday darajada, qancha mashq qilinadi" },
                    { id: "c", text: "Qaysi tonallik, qaysi temp, qaysi o'lchov" },
                    { id: "d", text: "Qaysi dastur, qaysi format, qaysi fayl" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex4-t2",
                  area: "ijodkorlik",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Sinfda endi boshlagan o'quvchi bor. Unga qanday partiya berish to'g'ri?",
                  options: [
                    { id: "a", text: "Umuman partiya bermaslik" },
                    { id: "b", text: "Kuchli zarblarda bitta tovushdan iborat oddiy partiya" },
                    { id: "c", text: "Asosiy ohangni to'liq berish" },
                    { id: "d", text: "Faqat tinglashni taklif qilish" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex4-t3",
                  area: "ijodkorlik",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Yozilgan partiya ijrochining diapazonidan chiqib ketdi. Natija qanday bo'ladi?",
                  options: [
                    { id: "a", text: "Ijrochi baribir chalaveradi" },
                    { id: "b", text: "Partiyani ijro etib bo'lmaydi — uni ko'chirish kerak" },
                    { id: "c", text: "Tovush balandroq chiqadi" },
                    { id: "d", text: "Hech narsa o'zgarmaydi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex4-t4",
                  area: "ijodkorlik",
                  bloom: "baholash",
                  kind: "multiple",
                  prompt: "Uch qatlamli aranjirovkada qaysi qatlamlar bo'ladi?",
                  options: [
                    { id: "a", text: "Ohang" },
                    { id: "b", text: "Jo'r (garmoniya)" },
                    { id: "c", text: "Ritm" },
                    { id: "d", text: "Matn" },
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
                "Aranjirovka — ohangni muayyan ijrochilarga moslash",
                "Uch qatlam yetarli: ohang, jo'r, ritm",
                "Diapazondan chiqqan partiya ijro etilmaydi",
                "Darajalash — bir asarda oson va murakkab partiyalar birga",
                "Har bir partiya alohida ham ma'noli bo'lishi kerak",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Aranjirovkada eng qiyin qaror nima bo'ldi?",
        "Sinfdagi eng kuchsiz o'quvchiga qanday partiya yozgan bo'lardingiz?",
      ],
    },

    {
      id: "tex-8",
      slug: "bolalar-yozuvlari-va-xavfsizlik",
      title: "Mavzu 8: Bolalar yozuvlari va raqamli xavfsizlik",
      summary:
        "Bolaning ovozi, surati va ismini e'lon qilishdagi ruxsat, saqlash tartibi va onlayn xavfsizlik qarorlari.",
      durationMin: 35,
      bloom: "baholash",
      outcomeId: "on-tex-6",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Konsert videosi, sinf xori yozuvi, bayram suratlari — musiqa o'qituvchisi boshqa fan o'qituvchisiga qaraganda ancha ko'p bola tasviri va ovozi bilan ishlaydi.",
            },
            {
              kind: "matn",
              text: "Shuning uchun savol texnik emas, axloqiy va huquqiy: buni e'lon qilishga haqqim bormi, kim ruxsat beradi va bu material keyin qayerda qoladi?",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Voyaga yetmagan bolaning tasviri va ovozi — shaxsiy ma'lumot. Undan foydalanishga ruxsatni bolaning o'zi emas, qonuniy vakili beradi.",
            },
            {
              kind: "royxat",
              items: [
                "Ruxsat yozma bo'lsin — og'zaki kelishuv keyin isbotlanmaydi",
                "Ruxsat aniq bo'lsin: nima yoziladi, qayerda e'lon qilinadi, qancha vaqt turadi",
                "«Hamma narsa uchun» degan umumiy ruxsat yaroqsiz: maktab saytiga ruxsat ijtimoiy tarmoqqa ruxsat emas",
                "Ruxsatni qaytarib olish mumkin — bu holda material olib tashlanadi",
                "Bolaning o'zi ham so'raladi: rasmiy kuchi bo'lmasa ham, uning roziligi axloqiy talab",
              ],
            },
            {
              kind: "eslatma",
              text: "Sinfda doim bitta-ikkita bola bo'ladiki, uning surati e'lon qilinishi mumkin emas — oilaviy sabablarga ko'ra. Buni oldindan bilish kerak, kameradan keyin emas.",
            },
            {
              kind: "matn",
              text: "Qanchalik kam ma'lumot e'lon qilinsa, shunchalik xavfsiz. Bu qoida oddiy, lekin amalda tez-tez buziladi — ayniqsa izohlarda.",
            },
            {
              kind: "royxat",
              items: [
                "To'liq ism-sharif o'rniga faqat ism yoki sinf nomi yozing",
                "Maktab raqami, sinf jadvali va manzilni tasvirga tushirmang",
                "Umumiy plandagi suratlar yakka portretdan xavfsizroq",
                "Faqat ovoz yozuvi — suratdan xavfsizroq variant; musiqa darsida ko'pincha yetarli",
                "Geolokatsiya belgisini o'chiring: u surat faylining ichida yashiringan bo'ladi",
              ],
            },
            {
              kind: "matn",
              text: "Material qayerda saqlanishi ham qaror talab qiladi. Shaxsiy telefon va tasodifiy bulut xizmati — eng keng tarqalgan va eng zaif variant.",
            },
            {
              kind: "royxat",
              items: [
                "Maktabning rasmiy saqlash joyi bo'lsa — faqat o'sha yerda saqlang",
                "Shaxsiy qurilmada vaqtincha qolsa — parol va qulf bo'lsin, tadbirdan keyin ko'chiring",
                "Saqlash muddatini oldindan belgilang va muddati o'tganini o'chiring",
                "Kimga ulashilganini yozib boring; «hammaga havola» eng xavfli sozlama",
                "Yozuvni tarqatishda havola yopiq bo'lsin — qidiruvga tushmasin",
              ],
            },
            {
              kind: "eslatma",
              text: "Internetga chiqqan material qaytarib olinmaydi. «Keyin o'chiraman» rejasi ishlamaydi: nusxa olingan bo'lishi mumkin. Shuning uchun qaror e'lon qilishdan oldin qabul qilinadi.",
            },
            {
              kind: "matn",
              text: "Qaror qabul qilishda uchta savol yetarli. Agar uchalasiga ham ishonch bilan javob bera olmasangiz — e'lon qilmang.",
            },
            {
              kind: "royxat",
              items: [
                "Bu materialni e'lon qilishga yozma ruxsat bormi va u aynan shu joy uchunmi?",
                "Bu material bola uchun bugun ham, besh yildan keyin ham xavfsizmi?",
                "E'lon qilish o'quvchiga nima beradi — yoki faqat maktab hisobotiga keraksimi?",
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
              text: "Maktab konserti uchun ruxsat varaqasining matnini yozing: nima yoziladi, qayerda e'lon qilinadi, qancha vaqt turadi va ruxsatni qanday qaytarib olish mumkin. Matn ota-onaga tushunarli bo'lsin — yuridik til emas.",
            },
            {
              kind: "mashq",
              text: "Yoddagi bitta maktab tadbirini oling va uchta savol bo'yicha tekshiring. Qaysi material e'lon qilinardi, qaysisi faqat ichkarida qolardi?",
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
                  id: "tex6-t1",
                  area: "metodika",
                  bloom: "bilish",
                  kind: "single",
                  prompt:
                    "Voyaga yetmagan bolaning yozuvini e'lon qilishga kim ruxsat beradi?",
                  options: [
                    { id: "a", text: "Bolaning o'zi" },
                    { id: "b", text: "Qonuniy vakili — ota-ona yoki vasiy" },
                    { id: "c", text: "Sinf rahbari" },
                    { id: "d", text: "Ruxsat talab qilinmaydi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex6-t2",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Maktab saytiga e'lon qilishga ruxsat olingan. Ijtimoiy tarmoqqa joylasa bo'ladimi?",
                  options: [
                    { id: "a", text: "Ha, ruxsat bir marta olinadi" },
                    { id: "b", text: "Yo'q: ruxsat aniq joy uchun beriladi" },
                    { id: "c", text: "Ha, agar ism yozilmasa" },
                    { id: "d", text: "Ha, maktab nomidan bo'lsa" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex6-t3",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt: "Qaysi amallar xavfni kamaytiradi?",
                  options: [
                    { id: "a", text: "To'liq ism-sharif o'rniga faqat ism yozish" },
                    { id: "b", text: "Yakka portret o'rniga umumiy plan" },
                    { id: "c", text: "Surat o'rniga faqat ovoz yozuvi" },
                    { id: "d", text: "Havolani «hammaga ochiq» qilib qo'yish" },
                  ],
                  correctIds: ["a", "b", "c"],
                },
                {
                  id: "tex6-t4",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "«Keyin o'chiraman» rejasi nega ishlamaydi?",
                  options: [
                    { id: "a", text: "O'chirish texnik jihatdan qiyin" },
                    { id: "b", text: "Internetga chiqqan materialdan nusxa olingan bo'lishi mumkin" },
                    { id: "c", text: "Ruxsat qaytarilmaydi" },
                    { id: "d", text: "Ishlaydi, muammo yo'q" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex6-t5",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Suratni e'lon qilishdan oldin faylda nimani o'chirish kerak?",
                  options: [
                    { id: "a", text: "Fayl nomini" },
                    { id: "b", text: "Geolokatsiya belgisini" },
                    { id: "c", text: "Ranglar profilini" },
                    { id: "d", text: "Hech narsani" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex6-t6",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Konsert videosini joylashga ruxsat bor, lekin bir o'quvchining oilasi rad etdi. Eng to'g'ri qaror qaysi?",
                  options: [
                    { id: "a", text: "Baribir joylayman — qolganlarning ruxsati bor" },
                    { id: "b", text: "O'sha o'quvchi ko'rinmaydigan montaj qilaman yoki videoni joylamayman" },
                    { id: "c", text: "Ism yozmayman, shunda muammo yo'q" },
                    { id: "d", text: "Oiladan qayta so'rayman va joylayveraman" },
                  ],
                  correctId: "b",
                  explanation:
                    "Bitta rad javobi butun materialga taalluqli: rad etgan bolaning tasviri e'lon qilinmaydi.",
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
                "Bola tasviri va ovozi — shaxsiy ma'lumot; ruxsatni qonuniy vakil beradi",
                "Ruxsat yozma, aniq joy uchun va qaytarib olinadigan bo'ladi",
                "Kam ma'lumot — kam xavf: ism qisqa, manzil yo'q, geolokatsiya o'chirilgan",
                "Saqlash joyi, muddati va kimga ulashilgani oldindan belgilanadi",
                "Uch savol: ruxsat bormi, besh yildan keyin ham xavfsizmi, o'quvchiga nima beradi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Maktabingizda ruxsat olish tartibi qanday yo'lga qo'yilgan?",
        "«O'quvchiga nima beradi?» savoliga javob topolmagan holat bo'lganmi?",
      ],
    },

    {
      id: "tex-9",
      slug: "onlayn-musiqa-darsi",
      title: "Mavzu 9: Onlayn va masofaviy musiqa darsi",
      summary:
        "Kechikish nega birga kuylashni imkonsiz qiladi, buning o'rniga nima ishlaydi va masofaviy darsni qanday qurish kerak.",
      durationMin: 35,
      bloom: "qollash",
      outcomeId: "on-tex-9",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Masofaviy musiqa darsining birinchi urinishi deyarli har doim bir xil tugaydi: o'qituvchi jo'r chaladi, bolalar kuylaydi va natija chalkashlikka aylanadi.",
            },
            {
              kind: "matn",
              text: "Bu o'qituvchining yoki internetning aybi emas. Sabab texnik va uni o'zgartirib bo'lmaydi — shuning uchun darsni shu sababga moslab qurish kerak.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Kechikish (latency) — tovushning mikrofondan boshqa odamning quloqigacha yetib borish vaqti. Oddiy aloqa dasturlarida u 150–300 millisekundni tashkil qiladi.",
            },
            {
              kind: "royxat",
              items: [
                "Birga kuylash uchun kechikish taxminan 25 ms dan oshmasligi kerak",
                "150 ms — bu 90 tempda chorak notaning yarmidan ko'pi: ansambl tarqab ketadi",
                "Kechikishni «tezroq internet» bilan nolga tushirib bo'lmaydi: u masofa va qayta ishlashdan kelib chiqadi",
                "Shuning uchun onlayn darsda bir vaqtda birga ijro etish — ishlamaydigan format",
              ],
            },
            {
              kind: "eslatma",
              text: "Bundan tashqari aloqa dasturlari tovushni nutq uchun moslaydi: ular jimlikni kesadi, aks-sadoni yo'qotadi va dinamikani tekislaydi. Natijada musiqa buziladi — ayniqsa sokin joylar yo'qoladi.",
            },
            {
              kind: "matn",
              text: "Yechim — darsni kechikish muammo bo'lmagan ish turlariga qurish. Ular kam emas va ularning ba'zilari hatto sinfdagidan samaraliroq ishlaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Navbatma-navbat ijro: bir vaqtda faqat bitta odam chaladi, qolganlar tinglaydi",
                "O'qituvchi jo'r chaladi, bolalar mikrofonini o'chirib kuylaydi — har kim o'zini eshitadi",
                "Yozib yuborish: bola uyda yozadi, o'qituvchi tinglab teskari aloqa beradi",
                "Tinglash va tahlil darsi — kechikish bunga umuman xalaqit bermaydi",
                "Nota va ritm ustida ish, qarsak va harakat mashqlari (har kim o'z joyida)",
                "Yozuvlardan birga montaj: har bir bola o'z partiyasini yozadi, o'qituvchi birlashtiradi",
              ],
            },
            {
              kind: "eslatma",
              text: "Oxirgi usul — virtual xor — mehnat talab qiladi, lekin natijasi bolalar uchun kuchli motivatsiya bo'ladi va u aynan masofaviy formatda tug'ilgan.",
            },
            {
              kind: "matn",
              text: "Texnik tomondan bir necha sozlama darsni sezilarli yaxshilaydi. Ular bepul va bir marta qilinadi.",
            },
            {
              kind: "royxat",
              items: [
                "Dasturning «musiqa rejimi» yoki «original tovush» sozlamasini yoqing — shovqin bostirishni o'chiradi",
                "Naushnik majburiy: aks holda kolonka tovushi mikrofonga qaytib, aks-sado hosil qiladi",
                "Simli internet simsizdan barqarorroq",
                "Kamera va ekranni birga uzatish og'ir bo'lsa, kamerani o'chirib tovushni saqlang — musiqa darsida tovush muhimroq",
                "Darsdan oldin tovushni bir marta sinab ko'ring; bu besh daqiqa darsning yarmini tejaydi",
              ],
            },
            {
              kind: "matn",
              text: "Masofaviy darsning tuzilmasi ham boshqacha bo'ladi: diqqat tezroq charchaydi, shuning uchun bo'laklar qisqaroq va faoliyat tez-tez almashadi.",
            },
            {
              kind: "royxat",
              items: [
                "Bo'lak uzunligi 7–10 daqiqadan oshmasin",
                "Har bo'lakda bolaning aniq harakati bo'lsin: kuylash, qarsak, yozish, javob berish",
                "Ism bilan murojaat qiling — onlaynda «kim javob beradi?» savoli javobsiz qoladi",
                "Vazifani matn bilan ham yuboring: tovush uzilsa, ko'rsatma yo'qolmaydi",
                "Dars yozuvini saqlang — kasal bolalar va qayta ko'rish uchun",
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
              text: "30 daqiqalik masofaviy dars rejasini tuzing: uchta bo'lak, har biri 7–10 daqiqa. Har bo'lak uchun yozing — bolalar aynan nima qiladi va kechikish bunga xalaqit beradimi?",
            },
            {
              kind: "mashq",
              text: "Pianinoda qisqa jo'r chalib yozib oling va uni vazifa sifatida yuborishga tayyorlang. Bola uyda shu yozuv ostida kuylaydi — bu kechikishdan butunlay xoli format.",
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
                  id: "tex9-t1",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Nega onlayn darsda birga kuylash ishlamaydi?",
                  options: [
                    { id: "a", text: "Mikrofonlar sifatsiz" },
                    { id: "b", text: "Kechikish ansambl uchun zarur bo'lgan chegaradan bir necha barobar katta" },
                    { id: "c", text: "Bolalar diqqatsiz" },
                    { id: "d", text: "Dastur buni taqiqlaydi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex9-t2",
                  area: "metodika",
                  bloom: "bilish",
                  kind: "single",
                  prompt:
                    "Aloqa dasturlarida «musiqa rejimi» nima qiladi?",
                  options: [
                    { id: "a", text: "Tovushni balandlatadi" },
                    { id: "b", text: "Shovqin bostirish va dinamika tekislashni o'chiradi" },
                    { id: "c", text: "Kechikishni nolga tushiradi" },
                    { id: "d", text: "Avtomatik jo'r qo'shadi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex9-t3",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt:
                    "Qaysi ish turlariga kechikish xalaqit bermaydi?",
                  options: [
                    { id: "a", text: "Navbatma-navbat yakka ijro" },
                    { id: "b", text: "Bir vaqtda birga kuylash" },
                    { id: "c", text: "Tinglash va tahlil" },
                    { id: "d", text: "Yozib yuborilgan ishga teskari aloqa" },
                  ],
                  correctIds: ["a", "c", "d"],
                },
                {
                  id: "tex9-t4",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Naushnik nega majburiy?",
                  options: [
                    { id: "a", text: "Tovush sifatli bo'ladi" },
                    { id: "b", text: "Kolonka tovushi mikrofonga qaytib, aks-sado hosil qiladi" },
                    { id: "c", text: "Internet tezlashadi" },
                    { id: "d", text: "Majburiy emas" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex9-t5",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Masofaviy darsda bo'lak uzunligi qancha bo'lgani ma'qul?",
                  options: [
                    { id: "a", text: "Butun dars bir bo'lak" },
                    { id: "b", text: "7–10 daqiqa" },
                    { id: "c", text: "20–25 daqiqa" },
                    { id: "d", text: "2 daqiqa" },
                  ],
                  correctId: "b",
                },
                {
                  id: "tex9-t6",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Internet zaif: kamera va tovushni birga uzatib bo'lmayapti. Musiqa darsida nimani saqlaysiz?",
                  options: [
                    { id: "a", text: "Kamerani — bolalar meni ko'rishi kerak" },
                    { id: "b", text: "Tovushni — musiqa darsida u muhimroq" },
                    { id: "c", text: "Ikkalasini pasaytiraman" },
                    { id: "d", text: "Darsni bekor qilaman" },
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
                "Kechikish 150–300 ms; ansambl uchun 25 ms kerak — birga ijro ishlamaydi",
                "Dars kechikishdan xoli ish turlariga quriladi: navbatma-navbat, tinglash, yozib yuborish",
                "Musiqa rejimi, naushnik va simli internet — uch asosiy sozlama",
                "Bo'laklar qisqa, har bo'lakda aniq harakat, ism bilan murojaat",
                "Ko'rsatma matn bilan ham yuboriladi; dars yozuvi saqlanadi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Masofaviy darsda qaysi ish turi sizga sinfdagidan ham samaraliroq tuyuldi?",
        "Virtual xor loyihasini sinfingizda qanday tashkil qilgan bo'lardingiz?",
      ],
    },
  ],
};
