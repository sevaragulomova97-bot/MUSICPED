import type { Course } from "@/content/lesson-types";

/**
 * Musiqa texnologiyalari kursi.
 *
 * Faqat erkin litsenziyali dasturlar tavsiya etiladi (MuseScore, Audacity):
 * platformaning o'zi kabi, ular ham hech qanday obuna talab qilmaydi.
 */

export const TEXNOLOGIYA: Course = {
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

    {
      id: "tex-2",
      slug: "nota-yozuv-dasturi",
      title: "Mavzu 2: Nota yozuv dasturida ishlash",
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
      id: "tex-3",
      slug: "audio-tahrirlash",
      title: "Mavzu 3: Audio yozuvni darsga tayyorlash",
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
      id: "tex-4",
      slug: "aranjirovka-asoslari",
      title: "Mavzu 4: Aranjirovka asoslari",
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
  ],
};
