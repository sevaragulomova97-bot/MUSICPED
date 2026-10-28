import { DASTUR_AMALIYLARI } from "@/content/courses/metodika-amaliy";
import { DASTUR_MARUZALARI } from "@/content/courses/metodika-dastur";
import type { Course } from "@/content/lesson-types";

/**
 * Musiqa ta'limi metodikasi kursi.
 *
 * Kurs uch qatlamdan iborat: avval **asos** (o'qitish tizimlari, dars
 * tuzilmasi, maqsad), keyin **sinfdagi ish** (qo'shiq o'rgatish, tinglash
 * darsi, boshqaruv, farqlashtirish), oxirida **baholash va yakun**
 * (shakllantiruvchi baholash, rubrika, dars ishlanmasi, mikro-o'qitish).
 *
 * Dars ishlanmasi va mikro-o'qitish ataylab oxirida: ularni yozish uchun
 * avval sinfda nima qilinishini bilish kerak.
 */

export const METODIKA: Course = {
  slug: "musiqa-talimi-metodikasi",
  moduleId: "mod-metodika",
  title: "Musiqa ta'limi metodikasi",
  description:
    "O'qitish tizimlari, dars loyihalash, qo'shiq va tinglash metodikasi, sinfni boshqarish, farqlashtirilgan ta'lim va baholash.",
  lessons: [
    /*
      Rasmiy fan dasturidagi ma'ruzalar birinchi turadi: kurs endi
      dastur tartibida o'qiladi. Pastdagi «Mavzu N» darslari dasturdan
      oldin yozilgan va hozircha o'z o'rnida qoladi — ularning mazmuni
      kengroq va dasturning keyingi ma'ruzalari bilan birlashtiriladi.
    */
    ...DASTUR_MARUZALARI,

    /*
      Ma'ruzadan keyin amaliy mashg'ulotlar: dasturda har bir asar
      alohida mashg'ulot (A1-A30, 60 soat). Tartib dasturdagidek.
    */
    ...DASTUR_AMALIYLARI,

    {
      id: "met-1",
      slug: "oqitish-tizimlari",
      title: "Mavzu 1: Musiqa o'qitish tizimlari",
      summary:
        "Kodai, Orf, Dalkroz va Suzuki tizimlari hamda o'zbek ustoz-shogird an'anasi: nimani birinchi o'ringa qo'yadi va qachon ishlaydi.",
      durationMin: 40,
      bloom: "tushunish",
      outcomeId: "on-met-6",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Har bir o'qituvchi qandaydir usulda o'qitadi. Savol — bu usul ongli tanlovmi yoki shunchaki o'zi qanday o'rgangan bo'lsa, shundayligicha takrorlanmoqdami.",
            },
            {
              kind: "matn",
              text: "Bir asr davomida bir necha tizim shakllandi va millionlab bolada sinaldi. Ularni bilish qaytadan kashf etishdan saqlaydi: har biri «birinchi nima keladi» degan savolga o'z javobini bergan.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Zoltan Kodai (Vengriya) tizimining markazida ovoz turadi: bu — har bir bolada tug'ilishidan bor bo'lgan yagona cholg'u. Cholg'u sotib olish shart emas, demak hech kim chetda qolmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Avval kuylash, keyin nota — eshitib bilgan narsagina yozuvda ma'noga ega bo'ladi",
                "Nisbiy solmizatsiya: «do» har doim tonika, shuning uchun tonallik o'zgarsa ham bo'g'inlar o'zgarmaydi",
                "Qo'l belgilari — tovush balandligini ko'z va harakat bilan mustahkamlaydi",
                "Xalq qo'shig'i — musiqaning ona tili; o'rganish undan boshlanadi",
                "Har kuni kuylash: haftada bir marta emas",
              ],
            },
            {
              kind: "nota",
              caption: "Nisbiy solmizatsiya: bo'g'inlar tonikaga nisbatan nomlanadi",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4"], duration: "q", lyric: "do" },
                  { keys: ["d/4"], duration: "q", lyric: "re" },
                  { keys: ["e/4"], duration: "q", lyric: "mi" },
                  { keys: ["g/4"], duration: "q", lyric: "sol" },
                  { keys: ["a/4"], duration: "h", lyric: "lya" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Karl Orf (Germaniya) boshqa yo'ldan bordi: uning tizimida bola musiqani tinglovchi emas, yaratuvchi sifatida o'rganadi. «Elementar musiqa» — so'z, ritm, harakat va sodda cholg'u bir butun bo'lgan holat.",
            },
            {
              kind: "royxat",
              items: [
                "Ketma-ketlik: so'z va nutq ritmi -> qarsak va harakat -> sodda cholg'u -> ohang",
                "Ostinato — takrorlanuvchi qisqa naqsh; eng kuchsiz o'quvchi ham shu orqali ansamblga qo'shiladi",
                "Improvizatsiya birinchi darsdanoq boshlanadi, «tayyor bo'lgach» emas",
                "Xato — materialning bir qismi, jazolanadigan narsa emas",
              ],
            },
            {
              kind: "matn",
              text: "Emil Jak-Dalkroz (Shveytsariya) ritmni ong emas, tana oldin tushunishini payqadi. Uning ritmika tizimida metr va temp avval harakatda yashab ko'riladi, keyin nomlanadi.",
            },
            {
              kind: "royxat",
              items: [
                "Yurish — chorak, yugurish — sakkizlik: temp va davomiylik oyoq bilan o'lchanadi",
                "Reaksiya mashqlari: musiqa o'zgarganda harakat ham darhol o'zgaradi",
                "Ichki eshituv: musiqa to'xtaydi, bola uni ichida davom ettiradi",
              ],
            },
            {
              kind: "matn",
              text: "Sinichi Suzuki (Yaponiya) cholg'u o'rgatishni ona tilini o'rganishga qiyos qildi: bola avval eshitadi, keyin takrorlaydi, yozuv esa ancha keyin keladi.",
            },
            {
              kind: "royxat",
              items: [
                "Ko'p marta eshitish — asar ijro qilinishidan ancha oldin tanish bo'ladi",
                "Ota-ona ishtiroki: u ham darsda qatnashadi va uyda mashqni tashkil qiladi",
                "Erta boshlash va kichik qadamlar; takrorlash — asosiy vosita",
                "Taqqoslash boshqa bola bilan emas, bolaning kechagi holati bilan qilinadi",
              ],
            },
            {
              kind: "matn",
              text: "O'zbek an'anasidagi ustoz-shogird tizimi ham aynan shu asosga tayanadi — og'zaki uzatish va taqlid. Maqom, ashula va cholg'u yo'llari asrlar davomida nota orqali emas, ustoz ijrosini eshitib o'zlashtirilgan.",
            },
            {
              kind: "royxat",
              items: [
                "Ustoz ijro etadi, shogird qaytaradi — nota oraliq bo'g'in sifatida qatnashmaydi",
                "O'rganish uzoq va birga yashab o'tiladi: faqat ijro emas, munosabat va odob ham uzatiladi",
                "Repertuar bosqichma-bosqich ochiladi; har yo'l o'z vaqtida beriladi",
                "Kuchli tomoni — tembr, ifoda va milliy uslubning aniq uzatilishi; cheklovi — yozuv savodi alohida ishlanishi kerak",
              ],
            },
            {
              kind: "eslatma",
              text: "Bu tizimlarning «eng to'g'ri»si yo'q. Maktab darsida ular odatda birga ishlaydi: kuylash uchun Kodai, ijodkorlik uchun Orf, ritm uchun Dalkroz, cholg'u va milliy repertuar uchun ustoz-shogird yondashuvi.",
            },
            {
              kind: "matn",
              text: "Tanlashning amaliy mezoni oddiy: bu dars bo'lagida siz nimani birinchi o'ringa qo'yyapsiz — intonatsiyanimi, ijodkorlikmi, ritmmi yoki uslubni?",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Doirada asosiy zarbni chaling va uni ostinato sifatida takrorlang. Orf tizimining mohiyati shu: bir xil qisqa naqsh butun guruhni ansamblga qo'shadi, murakkab partiya shart emas.",
              instrument: "doira",
              exerciseId: "doira-asosiy",
            },
            {
              kind: "mashq",
              text: "Pianinoda do-re-mi mashqini chaling, lekin notalar nomini emas, nisbiy bo'g'inlarni ayting. So'ng aynan shu naqshni boshqa tovushdan boshlang — bo'g'inlar o'zgarmasligini sezing. Bu Kodai tizimining asosiy g'oyasi.",
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
                  id: "met6-t1",
                  area: "metodika",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Kodai tizimi nimani birinchi o'ringa qo'yadi?",
                  options: [
                    { id: "a", text: "Cholg'u ijrosini" },
                    { id: "b", text: "Ovoz va kuylashni" },
                    { id: "c", text: "Nota yozuvini" },
                    { id: "d", text: "Improvizatsiyani" },
                  ],
                  correctId: "b",
                  explanation:
                    "Ovoz — har bir bolada bor bo'lgan cholg'u, shuning uchun u hech kimni chetda qoldirmaydi.",
                },
                {
                  id: "met6-t2",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Nisbiy solmizatsiyaning afzalligi nimada?",
                  options: [
                    { id: "a", text: "Nota o'qishni butunlay shart qilmaydi" },
                    { id: "b", text: "Tonallik o'zgarsa ham bo'g'inlar o'zgarmaydi" },
                    { id: "c", text: "Faqat xalq qo'shiqlariga mos" },
                    { id: "d", text: "Diapazonni kengaytiradi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met6-t3",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Orf tizimida ostinato nima uchun ishlatiladi?",
                  options: [
                    { id: "a", text: "Asarni uzaytirish uchun" },
                    { id: "b", text: "Eng kuchsiz o'quvchi ham ansamblga qo'shila olishi uchun" },
                    { id: "c", text: "Tempni tezlashtirish uchun" },
                    { id: "d", text: "Nota o'qishni mashq qilish uchun" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met6-t4",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Sinf o'lchovni his qilmayapti: qarsak tushib ketyapti. Qaysi tizimning usuli eng mos keladi?",
                  options: [
                    { id: "a", text: "Suzuki — ko'p marta eshittirish" },
                    { id: "b", text: "Dalkroz — metrni yurish va harakat bilan his qildirish" },
                    { id: "c", text: "Kodai — qo'l belgilari" },
                    { id: "d", text: "Ustoz-shogird — ustoz ijrosini takrorlatish" },
                  ],
                  correctId: "b",
                  explanation:
                    "Dalkroz tizimida metr avval tanada yashab ko'riladi: yurish — chorak, yugurish — sakkizlik.",
                },
                {
                  id: "met6-t5",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "multiple",
                  prompt:
                    "Ustoz-shogird an'anasi va Suzuki tizimida qanday umumiylik bor?",
                  options: [
                    { id: "a", text: "Ikkalasida ham eshitish yozuvdan oldin keladi" },
                    { id: "b", text: "Ikkalasida ham takrorlash asosiy vosita" },
                    { id: "c", text: "Ikkalasi ham nota savodini birinchi o'ringa qo'yadi" },
                    { id: "d", text: "Ikkalasida ham taqlid orqali o'rganiladi" },
                  ],
                  correctIds: ["a", "b", "d"],
                  explanation:
                    "Ikkala yondashuvda ham nota keyin keladi; shuning uchun yozuv savodi alohida rejalashtirilishi kerak.",
                },
                {
                  id: "met6-t6",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "«Qaysi tizim eng to'g'ri?» degan savolga eng asosli javob qaysi?",
                  options: [
                    { id: "a", text: "Kodai — chunki u eng keng tarqalgan" },
                    { id: "b", text: "Eng to'g'risi yo'q; tanlov dars bo'lagining maqsadiga bog'liq" },
                    { id: "c", text: "Ustoz-shogird — chunki u milliy an'ana" },
                    { id: "d", text: "Orf — chunki bolalarga qiziq" },
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
                "Kodai — avval ovoz va kuylash, nisbiy solmizatsiya, xalq qo'shig'i",
                "Orf — bola yaratuvchi: so'z, ritm, harakat, ostinato va improvizatsiya",
                "Dalkroz — ritmni tana oldin tushunadi; metr harakatda yashab ko'riladi",
                "Suzuki — ona tili modeli: eshitish, takrorlash, ota-ona ishtiroki",
                "Ustoz-shogird — og'zaki uzatish, taqlid, uslub va odobning birga berilishi",
                "Maktab darsida tizimlar birga ishlaydi; tanlov maqsadga qarab qilinadi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'zingiz o'qigan musiqa darslarida qaysi tizimning izlari bor edi?",
        "Sinfingizda cholg'usi yo'q bolalar bo'lsa, qaysi yondashuv ularni jarayondan chiqarib yubormaydi?",
      ],
    },

    {
      id: "met-2",
      slug: "dars-tuzilmasi",
      title: "Mavzu 2: Musiqa darsining tuzilmasi",
      summary:
        "Darsning bosqichlari, vaqt taqsimoti va har bir bosqichning vazifasi.",
      durationMin: 30,
      bloom: "bilish",
      outcomeId: "on-met-1",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Yaxshi dars — tasodif emas, tuzilma. Tajribasiz o'qituvchi odatda bitta xatoga yo'l qo'yadi: materialni ko'p rejalashtiradi va vaqt yetmaydi. Tuzilmani bilish shu xatoning oldini oladi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "45 daqiqalik musiqa darsi odatda besh bosqichdan iborat. Har bir bosqichning o'z vazifasi bor va uni boshqasi bajara olmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "1. Tashkiliy qism va musiqiy salomlashuv (3–5 daqiqa) — diqqatni yig'ish, ovozni uyg'otish",
                "2. Takrorlash va uyga vazifani tekshirish (5–7 daqiqa) — yangi material uchun poydevor",
                "3. Yangi material (12–15 daqiqa) — darsning yadrosi; faqat shu bosqichda yangi tushuncha beriladi",
                "4. Amaliy faoliyat: kuylash, chalish, ritm mashqi (12–15 daqiqa) — bilim ko'nikmaga aylanadigan joy",
                "5. Yakunlash va baholash (5 daqiqa) — nima o'rganildi, uyga vazifa",
              ],
            },
            {
              kind: "eslatma",
              text: "Diqqat qiling: amaliy faoliyat yangi materialdan kam vaqt olmaydi. Musiqa darsida bola tinglabgina o'rganmaydi — u kuylashi, chalishi, harakat qilishi kerak.",
            },
            {
              kind: "matn",
              text: "Musiqa darsining o'ziga xosligi — unda faoliyat turlari tez almashadi. Boshlang'ich sinfda bitta faoliyat 7–10 daqiqadan oshmasligi kerak, aks holda diqqat tarqaladi.",
            },
            {
              kind: "royxat",
              items: [
                "Tinglash — musiqani idrok etish va u haqida gapirish",
                "Kuylash — xor yoki yakka ashula",
                "Ritmik va harakatli mashqlar — tanani ishga solish",
                "Cholg'uda chalish — oddiy zarbli yoki milliy cholg'ular",
                "Ijodiy faoliyat — improvizatsiya, ohang to'qish",
              ],
            },
            {
              kind: "eslatma",
              text: "Bosqichlar ketma-ketligi qat'iy emas, lekin ularning har biri bo'lishi kerak. Agar darsda amaliy faoliyat bo'lmasa — bu musiqa darsi emas, musiqa haqidagi ma'ruza.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Daftaringizda 45 daqiqalik darsning vaqt chizmasini chizing: beshta bosqich, har biriga daqiqa qo'ying. So'ng o'zingizga savol bering — amaliy faoliyatga qancha vaqt qoldi?",
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
                  id: "met2-t1",
                  area: "metodika",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Darsning qaysi bosqichida yangi tushuncha beriladi?",
                  options: [
                    { id: "a", text: "Tashkiliy qismda" },
                    { id: "b", text: "Takrorlash bosqichida" },
                    { id: "c", text: "Yangi material bosqichida" },
                    { id: "d", text: "Yakunlashda" },
                  ],
                  correctId: "c",
                },
                {
                  id: "met2-t2",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Boshlang'ich sinfda bitta faoliyat turi qancha davom etishi tavsiya etiladi?",
                  options: [
                    { id: "a", text: "2–3 daqiqa" },
                    { id: "b", text: "7–10 daqiqa" },
                    { id: "c", text: "20 daqiqa" },
                    { id: "d", text: "Butun dars" },
                  ],
                  correctId: "b",
                  explanation:
                    "Uzoqroq davom etsa diqqat tarqaladi; qisqaroq bo'lsa faoliyat tugallanmay qoladi.",
                },
                {
                  id: "met2-t3",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Darsda 30 daqiqa yangi material tushuntirildi, 5 daqiqa kuylandi. Asosiy kamchilik nima?",
                  options: [
                    { id: "a", text: "Dars juda qisqa" },
                    { id: "b", text: "Amaliy faoliyatga vaqt yetmagan — bu ma'ruzaga aylangan" },
                    { id: "c", text: "Takrorlash bosqichi uzun" },
                    { id: "d", text: "Hech qanday kamchilik yo'q" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met2-t4",
                  area: "metodika",
                  bloom: "bilish",
                  kind: "multiple",
                  prompt:
                    "Musiqa darsining o'quv faoliyat turlarini tanlang (hammasi emas).",
                  options: [
                    { id: "a", text: "Tinglash" },
                    { id: "b", text: "Kuylash" },
                    { id: "c", text: "Ritmik mashqlar" },
                    { id: "d", text: "Ijodiy faoliyat" },
                    { id: "e", text: "Sinf jurnalini to'ldirish" },
                    { id: "f", text: "Ota-onalar yig'ilishini o'tkazish" },
                  ],
                  correctIds: ["a", "b", "c", "d"],
                  explanation:
                    "Jurnal to'ldirish va ota-onalar yig'ilishi — o'qituvchining tashkiliy ishi, dars faoliyati emas.",
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
                "Dars besh bosqichdan iborat, har birining o'z vazifasi bor",
                "Amaliy faoliyat yangi materialdan kam vaqt olmaydi",
                "Boshlang'ich sinfda faoliyat 7–10 daqiqada almashadi",
                "Amaliy faoliyatsiz dars — musiqa haqidagi ma'ruza",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'zingiz o'qigan musiqa darslarida qaysi bosqich ko'proq vaqt olardi?",
        "Vaqt yetmay qolsa, qaysi bosqichni qisqartirgan bo'lardingiz va nega?",
      ],
    },

    {
      id: "met-3",
      slug: "dars-maqsadi",
      title: "Mavzu 3: O'quv maqsadini shakllantirish",
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

    {
      id: "met-4",
      slug: "qoshiq-orgatish",
      title: "Mavzu 4: Qo'shiq o'rgatish metodikasi",
      summary:
        "Tayyorgarlikdan ifodali ijrogacha: tanishtirish, aks-sado usuli, qiyin joy ustida ish va vaqt taqsimoti.",
      durationMin: 40,
      bloom: "qollash",
      outcomeId: "on-met-7",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Qo'shiq o'rgatish — maktab musiqa darsidagi eng chastotali ish. Va eng ko'p noto'g'ri bajariladigani ham shu: yozuvni qo'yib, «takrorlang» deb yigirma marta aytish.",
            },
            {
              kind: "matn",
              text: "Bunday darsdan keyin bolalar qo'shiqni «biladi», lekin matnini tushunmaydi, intonatsiyasi noaniq va ifodasi yo'q. Qo'shiq o'rgatishning o'z bosqichlari bor va ularning tartibi tasodifiy emas.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Tayyorgarlik darsdan oldin tugaydi. O'qituvchi qo'shiqni yoddan biladi, tonallikni sinf diapazoniga moslagan va qaysi joy qiyin bo'lishini oldindan belgilab qo'ygan.",
            },
            {
              kind: "eslatma",
              text: "Qiyin joyni darsda kashf qilish kech: shu payt o'qituvchi improvizatsiya qilishga majbur bo'ladi va sinf vaqtini yo'qotadi.",
            },
            {
              kind: "matn",
              text: "O'rgatish olti bosqichdan iborat. Birinchi taassurot eng kuchli bo'lgani uchun tanishtirish alohida ahamiyatga ega.",
            },
            {
              kind: "royxat",
              items: [
                "1. Tanishtirish — o'qituvchi qo'shiqni to'liq va ifodali ijro etadi. Bu namuna, «shunchaki eshittirish» emas",
                "2. Matn va mazmun — so'zlar tushuntiriladi, notanish so'zlar ochiladi, qo'shiq nima haqida ekani aniqlanadi",
                "3. Ohangni bo'lak-bo'lak o'rgatish — aks-sado usuli bilan, qisqa frazalarda",
                "4. Qiyin joy ustida alohida ish — sakrash, uzun nota, murakkab ritm",
                "5. Birlashtirish — frazalar kupletga, kupletlar butun qo'shiqqa ulanadi",
                "6. Ifodali ijro — dinamika, temp, xarakter; bu bosqich tashlab ketilmaydi",
              ],
            },
            {
              kind: "matn",
              text: "Aks-sado usuli — o'rgatishning asosiy vositasi: o'qituvchi ikki taktni kuylaydi, sinf xuddi shu bo'lakni qaytaradi. Fraza qisqa bo'lgani uchun bola uni bir eshitishda ushlab qoladi.",
            },
            {
              kind: "nota",
              caption: "Aks-sado uchun ikki taktli fraza — o'qituvchi kuylaydi, sinf qaytaradi",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["e/4"], duration: "q" },
                  { keys: ["g/4"], duration: "q" },
                  { keys: ["g/4"], duration: "q" },
                  { keys: ["e/4"], duration: "q" },
                  { keys: ["d/4"], duration: "q" },
                  { keys: ["e/4"], duration: "q" },
                  { keys: ["c/4"], duration: "h" },
                ],
              },
            },
            {
              kind: "royxat",
              items: [
                "Fraza 2 taktdan oshmasin; uzun bo'lsa — ikkiga bo'ling",
                "Sekin tempda o'rgating, asar tempi oxirgi bosqichda tiklanadi",
                "Past dinamikada ishlang: o'rgatish paytida baland kuylash intonatsiyani buzadi",
                "Har takrorda bitta vazifa qo'ying — «endi faqat oxirgi tovushni uzaytiramiz»",
              ],
            },
            {
              kind: "matn",
              text: "Bir xil takrorlash tez zeriktiradi. Shuning uchun ayni bir frazani turli yo'l bilan takrorlatish kerak — vazifa o'zgaradi, material esa o'zgarmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Qo'l bilan ohang chizig'ini havoda chizib kuylash",
                "Matnni avval ritm bilan aytish, keyin ohangga solish",
                "Qatorlar bo'yicha navbatlashish: bir fraza — birinchi qator, keyingisi — ikkinchi qator",
                "Ichki eshituv: bir frazani ichda kuylash, keyingisini ovoz chiqarib",
                "O'g'il va qiz bolalar navbatlashishi — tinglash ham o'rganish",
              ],
            },
            {
              kind: "eslatma",
              text: "Eng ko'p uchraydigan uchta xato: yozuvni qo'yib qo'yib sinfdan takrorlashni talab qilish; matn mazmunini tushuntirmaslik; butun qo'shiqni bitta darsda tugatishga urinish.",
            },
            {
              kind: "matn",
              text: "Vaqt bo'yicha qoida: bitta darsda qo'shiq ustida 10–15 daqiqa ishlanadi va o'rganish 2–3 darsga taqsimlanadi. Taqsimlangan takrorlash uzluksizidan mustahkamroq saqlanadi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Pianinoda oddiy kuyni ikki taktli frazalarga bo'ling va har bir frazani alohida chaling. Har fraza oxirida to'xtab, «sinf qaytaradi» deb tasavvur qilingan pauza qoldiring — aks-sado usulining tempi shunday hosil bo'ladi.",
              instrument: "pianino",
              exerciseId: "p-oddiy-kuy",
            },
            {
              kind: "mashq",
              text: "Doirada qo'shiq jo'rligi usulini bajaring va shu usul ustida matnni ritm bilan ayting. Bu — ohangga o'tishdan oldingi oraliq qadam.",
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
                  id: "met7-t1",
                  area: "metodika",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Qo'shiq o'rgatish qaysi bosqichdan boshlanadi?",
                  options: [
                    { id: "a", text: "Ohangni bo'lak-bo'lak o'rgatishdan" },
                    { id: "b", text: "O'qituvchining to'liq va ifodali ijrosidan" },
                    { id: "c", text: "Matnni yozdirishdan" },
                    { id: "d", text: "Qiyin joy ustida ishlashdan" },
                  ],
                  correctId: "b",
                  explanation:
                    "Birinchi taassurot eng kuchli bo'ladi; shuning uchun tanishtirish namuna sifatida ijro etiladi.",
                },
                {
                  id: "met7-t2",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Aks-sado usulida fraza qancha bo'lishi kerak?",
                  options: [
                    { id: "a", text: "Butun kuplet" },
                    { id: "b", text: "Ikki taktdan oshmasin" },
                    { id: "c", text: "Bitta tovush" },
                    { id: "d", text: "Qancha bo'lsa ham farqi yo'q" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met7-t3",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Sinf ayni bir frazani uchinchi marta takrorlayapti va zerika boshladi. Nima qilasiz?",
                  options: [
                    { id: "a", text: "Boshqa frazaga o'tib ketaman" },
                    { id: "b", text: "Material o'sha, lekin vazifani o'zgartiraman — ritm bilan aytish, qo'l bilan chizish, qatorlar navbatlashishi" },
                    { id: "c", text: "Yanada ko'proq takrorlataman" },
                    { id: "d", text: "Qo'shiqni tashlab, boshqasini boshlayman" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met7-t4",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "O'rgatish paytida sinf baland kuylayapti va intonatsiya buzilmoqda. Sabab nima?",
                  options: [
                    { id: "a", text: "Qo'shiq juda oson" },
                    { id: "b", text: "Baland dinamika o'z ovozini eshitishga xalaqit beradi" },
                    { id: "c", text: "Temp juda sekin" },
                    { id: "d", text: "Matn uzun" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met7-t5",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Bitta darsda qo'shiq ustida qancha ishlash maqsadga muvofiq?",
                  options: [
                    { id: "a", text: "Butun dars davomida, to tugaguncha" },
                    { id: "b", text: "10–15 daqiqa, o'rganishni 2–3 darsga taqsimlab" },
                    { id: "c", text: "3–5 daqiqa" },
                    { id: "d", text: "Vaqtning ahamiyati yo'q" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met7-t6",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "multiple",
                  prompt: "Qo'shiq o'rgatishdagi tipik xatolar qaysilar?",
                  options: [
                    { id: "a", text: "Yozuvni qo'yib, sinfdan takrorlashni talab qilish" },
                    { id: "b", text: "Matn mazmunini tushuntirmaslik" },
                    { id: "c", text: "Qiyin joyni oldindan belgilab qo'yish" },
                    { id: "d", text: "Butun qo'shiqni bitta darsda tugatishga urinish" },
                  ],
                  correctIds: ["a", "b", "d"],
                  explanation:
                    "Qiyin joyni oldindan belgilash — xato emas, aksincha tayyorgarlikning asosiy qismi.",
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
                "Tayyorgarlik darsdan oldin tugaydi: yoddan bilish, tonallik, qiyin joy",
                "Olti bosqich: tanishtirish — matn — bo'lak-bo'lak — qiyin joy — birlashtirish — ifoda",
                "Aks-sado usulida fraza ikki taktdan oshmaydi",
                "Takrorlash material emas, vazifa o'zgarishi bilan yangilanadi",
                "10–15 daqiqa, 2–3 darsga taqsimlab",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'zingiz qo'shiq o'rganganingizda qaysi bosqich tashlab ketilgan edi?",
        "Matn mazmunini ochish uchun boshlang'ich sinfda qanday savol berasiz?",
      ],
    },

    {
      id: "met-5",
      slug: "musiqa-tinglash-darsi",
      title: "Mavzu 5: Musiqa tinglash darsi",
      summary:
        "Tinglashni faol jarayonga aylantirish: yo'naltiruvchi savol, uch bosqich, takroriy tinglash va hissiyot lug'ati.",
      durationMin: 35,
      bloom: "qollash",
      outcomeId: "on-met-8",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "«Hozir musiqa tinglaymiz» deb qo'yib yuborilgan yozuv — hali dars emas. Vazifasiz tinglagan bola ovoz eshitadi, musiqani emas.",
            },
            {
              kind: "matn",
              text: "Tinglash — faol jarayon va u savol bilan boshqariladi. To'g'ri qo'yilgan bitta savol o'n daqiqalik tushuntirishdan ko'proq ish qiladi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Tinglash darsi uch bosqichdan iborat va ularning har biri o'z vazifasini bajaradi.",
            },
            {
              kind: "royxat",
              items: [
                "Tinglashdan oldin — yo'naltiruvchi savol beriladi va zarur kontekst qisqa aytiladi. Savol tinglashga «ko'z» bo'lib xizmat qiladi",
                "Tinglash paytida — bolada aniq vazifa bo'ladi: qismni sanash, kayfiyat o'zgarganda qo'l ko'tarish, asosiy ohangni qarsak bilan kuzatish",
                "Tinglashdan keyin — muhokama, taqqoslash yoki ijodiy javob: chizish, harakat, o'z ohangini to'qish",
              ],
            },
            {
              kind: "eslatma",
              text: "Kontekstni oldindan uzoq aytish — keng tarqalgan xato. Bastakorning tarjimai holi tinglashdan oldin emas, keyin, bolaning o'z savoli paydo bo'lgach qiziq bo'ladi.",
            },
            {
              kind: "matn",
              text: "Yo'naltiruvchi savolning sifati butun darsni belgilaydi. «Yoqdimi?» degan savol muhokamani darhol tugatadi, chunki unga «ha» yoki «yo'q» deb javob berib bo'ladi.",
            },
            {
              kind: "royxat",
              items: [
                "Bitta aniq savol bo'lsin — uchta savol diqqatni bo'lib yuboradi",
                "Javobi musiqada eshitiladigan bo'lsin: «Nechta qism bor?», «Qaysi cholg'u asosiy ohangni olib boradi?»",
                "Kuzatishga yo'naltirsin: «Kayfiyat qaysi joyda o'zgardi?», «Temp o'zgardimi?»",
                "Taqqoslash kuchli ishlaydi: ikki ijroni yoki ikki asarni yonma-yon qo'ying",
                "«Yoqdimi?» savoli faqat oxirida, boshqa savollardan keyin o'rinli",
              ],
            },
            {
              kind: "matn",
              text: "Asar uzunligi yoshga qarab tanlanadi. Boshlang'ich sinfda bir yarim–ikki daqiqalik bo'lak yetarli; butun simfoniya qo'yish diqqatni emas, chidamni sinaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Boshlang'ich sinf: 1,5–2 daqiqa; o'rta sinf: 3–4 daqiqa",
                "Bir asar 2–3 marta tinglanadi, lekin har safar yangi vazifa bilan",
                "Birinchi tinglash — umumiy taassurot; ikkinchisi — tuzilma; uchinchisi — tafsilot",
                "Jonli ijro yozuvdan kuchliroq: o'qituvchi o'zi chalsa, bola ijro jarayonini ham ko'radi",
              ],
            },
            {
              kind: "matn",
              text: "Bola o'z taassurotini aytolmasligining sababi ko'pincha his-tuyg'u emas, so'z yetishmasligi. Shuning uchun lug'at beriladi: avval tanlash uchun so'zlar, keyin mustaqil ifoda.",
            },
            {
              kind: "royxat",
              items: [
                "Kayfiyat: tinch, quvnoq, g'amgin, tantanali, hayajonli, sirli",
                "Harakat: shoshqaloq, vazmin, tebranuvchi, keskin",
                "Tovush: yorqin, yumshoq, qattiq, uzoqdan kelayotgandek",
                "Boshida tanlov ro'yxatini bering, keyinroq bolalar o'z so'zini qo'shadi",
              ],
            },
            {
              kind: "eslatma",
              text: "«Noto'g'ri javob» bu yerda deyarli yo'q: agar bola javobini musiqadagi aniq joy bilan asoslay olsa, uning eshitgani haqiqiy. Asoslashni talab qiling — javobning o'zini emas.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Nayda lirik ohangni ikki marta chaling: birinchi marta tekis, ikkinchi marta dinamika va temp o'zgarishi bilan. Shu ikki ijroga mos yo'naltiruvchi savol o'ylab toping — javobi musiqada eshitiladigan bo'lsin.",
              instrument: "nay",
              exerciseId: "n-ohang",
            },
            {
              kind: "mashq",
              text: "Rubobda maqom ohangini chaling. Uni tinglatish uchun qanday savol berardingiz: tuzilma haqidami, kayfiyat haqidami yoki cholg'u tembri haqida?",
              instrument: "rubob",
              exerciseId: "r-maqom",
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
                  id: "met8-t1",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Tinglashdan oldingi bosqichning asosiy vazifasi nima?",
                  options: [
                    { id: "a", text: "Bastakorning tarjimai holini to'liq aytish" },
                    { id: "b", text: "Yo'naltiruvchi savol berish" },
                    { id: "c", text: "Asarni notadan ko'rsatish" },
                    { id: "d", text: "Bolalarni jim qildirish" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met8-t2",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Qaysi savol tinglashni yaxshiroq yo'naltiradi?",
                  options: [
                    { id: "a", text: "Sizga yoqdimi?" },
                    { id: "b", text: "Bu asar sizga nimani eslatdi?" },
                    { id: "c", text: "Kayfiyat qaysi joyda o'zgardi?" },
                    { id: "d", text: "Bastakor kim?" },
                  ],
                  correctId: "c",
                  explanation:
                    "Javobi musiqaning o'zida eshitiladi va uni aniq joy bilan asoslash mumkin.",
                },
                {
                  id: "met8-t3",
                  area: "metodika",
                  bloom: "bilish",
                  kind: "single",
                  prompt:
                    "Boshlang'ich sinf uchun tinglash parchasining qulay uzunligi qancha?",
                  options: [
                    { id: "a", text: "20–30 soniya" },
                    { id: "b", text: "1,5–2 daqiqa" },
                    { id: "c", text: "8–10 daqiqa" },
                    { id: "d", text: "Butun asar, qancha bo'lsa ham" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met8-t4",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Bir asarni ikkinchi marta tinglatyapsiz. To'g'ri yondashuv qaysi?",
                  options: [
                    { id: "a", text: "Hech narsa demay, yana qo'yaman" },
                    { id: "b", text: "Yangi vazifa beraman — bu safar tuzilmaga e'tibor qarataman" },
                    { id: "c", text: "Ovozni balandlataman" },
                    { id: "d", text: "Ikkinchi marta tinglatish kerak emas" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met8-t5",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Bola «menga qo'rqinchli tuyuldi» dedi, siz esa asarni tantanali deb hisoblaysiz. Nima qilasiz?",
                  options: [
                    { id: "a", text: "Javobni noto'g'ri deb tuzataman" },
                    { id: "b", text: "Musiqaning qaysi joyi shunday tuyulganini so'rayman" },
                    { id: "c", text: "E'tibor bermayman" },
                    { id: "d", text: "To'g'ri javobni aytib beraman" },
                  ],
                  correctId: "b",
                  explanation:
                    "Talab qilinadigan narsa — javob emas, asoslash. Aniq joy bilan asoslangan taassurot haqiqiy hisoblanadi.",
                },
                {
                  id: "met8-t6",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "multiple",
                  prompt: "Tinglash darsini faollashtiradigan usullar qaysilar?",
                  options: [
                    { id: "a", text: "Tinglash paytida qismlarni sanash" },
                    { id: "b", text: "Ikki ijroni taqqoslash" },
                    { id: "c", text: "Tinglashdan oldin uzun ma'ruza o'qish" },
                    { id: "d", text: "Kayfiyat o'zgarganda qo'l ko'tarish" },
                  ],
                  correctIds: ["a", "b", "d"],
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
                "Tinglash faol jarayon; uni savol boshqaradi",
                "Uch bosqich: savol — vazifali tinglash — muhokama yoki ijodiy javob",
                "Savol bitta, aniq va javobi musiqada eshitiladigan bo'lsin",
                "Bir asar 2–3 marta, har safar yangi vazifa bilan",
                "Hissiyot lug'ati beriladi; javob emas, asoslash talab qilinadi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Oxirgi tinglagan asaringizga qanday yo'naltiruvchi savol tuzgan bo'lardingiz?",
        "Jonli ijro va yozuv orasida tanlov bo'lsa, qaysi holatlarda yozuvni tanlaysiz?",
      ],
    },

    {
      id: "met-6",
      slug: "sinfni-boshqarish",
      title: "Mavzu 6: Sinfni boshqarish va motivatsiya",
      summary:
        "Musiqa sinfidagi tartib qoidalari, ovozsiz signallar, cholg'u bilan ishlash tartibi va ichki motivatsiyaning uch ustuni.",
      durationMin: 35,
      bloom: "tahlil",
      outcomeId: "on-met-11",
      area: "motivatsiya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Musiqa xonasi maktabdagi eng shovqinli sinf: bu yerda cholg'u bor, harakat bor, kuylash bor. Jimlikka intilish bu yerda maqsad emas — boshqariladigan shovqin maqsad.",
            },
            {
              kind: "matn",
              text: "Shuning uchun musiqa darsida tartib boshqa fanlardagidan farq qiladi: u taqiq bilan emas, kelishuv va signallar bilan ushlanadi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Qoidalar birinchi darsda, sinf bilan birga tuziladi. O'quvchi o'zi ishtirok etgan qoidani boshqalarning qoidasi sifatida emas, o'z qoidasi sifatida qabul qiladi.",
            },
            {
              kind: "royxat",
              items: [
                "Qoida kam bo'lsin — to'rt-beshtadan oshmasin, aks holda esda qolmaydi",
                "Taqiq emas, harakat tilida yozilsin: «jim o'tir» emas, «cholg'u tizzada — biz tinglaymiz»",
                "Ko'rinadigan joyda tursin va bir xil so'z bilan eslatilsin",
                "Eng muhimi — qoidani o'qituvchining o'zi buzmasligi",
              ],
            },
            {
              kind: "matn",
              text: "Ovozni ko'tarish — eng tez ishlaydigan va eng tez eskiradigan vosita. Uning o'rniga ovozsiz signallar ishlatiladi: ular shovqin ustidan emas, shovqin ichidan o'tadi.",
            },
            {
              kind: "royxat",
              items: [
                "Ritm qarsagi: o'qituvchi qisqa naqshni qarsak qiladi, sinf uni qaytaradi va shu bilan jim bo'ladi",
                "Akkord signali: pianinoda bir xil akkord — «to'xtadik» degani",
                "Qo'l ko'tarish: sinf asta-sekin qo'shilib, ovoz o'zi pasayadi",
                "Sanoq emas, kutish: o'qituvchi jim turib kutsa, sinf o'zini tartibga soladi",
              ],
            },
            {
              kind: "nota",
              caption:
                "Signal qarsagi — ritm bo'g'inlari bilan: ti-ti ta, ti-ti ta. Sinf uni qaytaradi",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/5"], duration: "8", lyric: "ti" },
                  { keys: ["c/5"], duration: "8", lyric: "ti" },
                  { keys: ["c/5"], duration: "q", lyric: "ta" },
                  { keys: ["c/5"], duration: "8", lyric: "ti" },
                  { keys: ["c/5"], duration: "8", lyric: "ti" },
                  { keys: ["c/5"], duration: "q", lyric: "ta" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Cholg'u tarqatilgan payt — tartibsizlikning eng ko'p boshlanadigan lahzasi. Sabab oddiy: bolaning qo'lida tovush chiqaradigan narsa bor, ko'rsatma esa hali berilmagan.",
            },
            {
              kind: "royxat",
              items: [
                "Avval ko'rsatma, keyin cholg'u — teskarisi emas",
                "«Cholg'u tizzada» holati oldindan mashq qilinadi va signal bilan chaqiriladi",
                "Tarqatish va yig'ish tartibi bir xil saqlanadi; buning uchun navbatchi tayinlanadi",
                "Ovoz chiqarish uchun alohida, qisqa ruxsat vaqti bering — taqiqlash kutishdan osonroq",
              ],
            },
            {
              kind: "eslatma",
              text: "Tartibsizlikning katta qismi yomon niyatdan emas, zerikishdan kelib chiqadi. Vazifa yetarlicha qiziq va yetarlicha qiyin bo'lsa, tartib o'z-o'zidan tiklanadi — bu reaktiv emas, proaktiv boshqaruv.",
            },
            {
              kind: "matn",
              text: "Motivatsiya ikki xil: tashqi (baho, maqtov, mukofot) va ichki (qiziqish, qoniqish). Musiqada ichki motivatsiya kuchli, chunki natija darhol eshitiladi — bola o'z ishining samarasini shu zahoti biladi.",
            },
            {
              kind: "royxat",
              items: [
                "Avtonomiya — tanlov berish: qaysi cholg'uda, qaysi partiyada, qaysi qo'shiqda",
                "Kompetentlik — bajarib bo'ladigan, lekin yengil bo'lmagan vazifa (yaqin rivojlanish zonasi)",
                "Bog'liqlik — guruh bilan birga ishlash, ansambl, umumiy natija",
              ],
            },
            {
              kind: "eslatma",
              text: "Baho bilan qo'rqitish qisqa muddatda ishlaydi va uzoq muddatda ichki motivatsiyani buzadi. Musiqa darsida bu ayniqsa xavfli: bola fandan emas, musiqaning o'zidan uzoqlashadi.",
            },
            {
              kind: "matn",
              text: "Oxirgi, lekin amalda eng muhim qoida: har bir darsda har bir bola ovoz chiqarishi kerak. Butun chorak davomida jim o'tirgan o'quvchi — boshqarilgan sinf emas, yo'qotilgan o'quvchi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Doirada qisqa signal naqshini o'ylab toping va uni bir necha marta bir xil chaling. Signal shunday bo'lsinki, uni shovqin ichida ham tanib olish mumkin bo'lsin — qisqa, aniq va o'zgarmas.",
              instrument: "doira",
              exerciseId: "doira-asosiy",
            },
            {
              kind: "mashq",
              text: "Gitarada birinchi akkordlarni chaling va ulardan bittasini «to'xtadik» signali sifatida belgilang. Signal musiqiy bo'lsa, u darsni buzmaydi — darsning bir qismi bo'lib qoladi.",
              instrument: "gitara",
              exerciseId: "g-akkordlar",
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
                  id: "met11-t1",
                  area: "motivatsiya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Musiqa darsida tartibning maqsadi nima?",
                  options: [
                    { id: "a", text: "To'liq jimlik" },
                    { id: "b", text: "Boshqariladigan shovqin" },
                    { id: "c", text: "Cholg'ulardan voz kechish" },
                    { id: "d", text: "Harakatni taqiqlash" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met11-t2",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Sinf shovqinli. Eng barqaror ishlaydigan yo'l qaysi?",
                  options: [
                    { id: "a", text: "Ovozni ko'tarish" },
                    { id: "b", text: "Oldindan kelishilgan ovozsiz signal — ritm qarsagi yoki akkord" },
                    { id: "c", text: "Butun sinfga baho pasaytirish" },
                    { id: "d", text: "Darsni to'xtatib kutib turish, hech narsa demay" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met11-t3",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Cholg'ularni qachon tarqatish to'g'ri?",
                  options: [
                    { id: "a", text: "Dars boshida, ko'rsatmadan oldin" },
                    { id: "b", text: "Ko'rsatma berilgandan keyin" },
                    { id: "c", text: "Bolalar so'raganda" },
                    { id: "d", text: "Dars oxirida" },
                  ],
                  correctId: "b",
                  explanation:
                    "Qo'lida tovush chiqaradigan narsa bo'lgan bola ko'rsatmani eshitmaydi.",
                },
                {
                  id: "met11-t4",
                  area: "motivatsiya",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Sinfning orqa qatorida tartibsizlik boshlandi. Birinchi tekshiriladigan sabab qaysi?",
                  options: [
                    { id: "a", text: "Bolalar tarbiyasiz" },
                    { id: "b", text: "Vazifa ular uchun juda oson yoki ular jarayondan chetda qolgan" },
                    { id: "c", text: "Sinfda issiq" },
                    { id: "d", text: "Dars juda qisqa" },
                  ],
                  correctId: "b",
                  explanation:
                    "Tartibsizlikning katta qismi zerikishdan; proaktiv boshqaruv avval vazifani tekshiradi.",
                },
                {
                  id: "met11-t5",
                  area: "motivatsiya",
                  bloom: "tahlil",
                  kind: "multiple",
                  prompt: "Ichki motivatsiyani oshiradigan omillar qaysilar?",
                  options: [
                    { id: "a", text: "Tanlov berish (avtonomiya)" },
                    { id: "b", text: "Bajarib bo'ladigan, lekin yengil bo'lmagan vazifa" },
                    { id: "c", text: "Yomon baho bilan qo'rqitish" },
                    { id: "d", text: "Guruh bilan birga ishlash" },
                  ],
                  correctIds: ["a", "b", "d"],
                },
                {
                  id: "met11-t6",
                  area: "motivatsiya",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "O'quvchi butun chorak davomida darsda jim o'tirdi va hech qachon tartibni buzmadi. Buni qanday baholaysiz?",
                  options: [
                    { id: "a", text: "Namunali o'quvchi" },
                    { id: "b", text: "Boshqaruv muvaffaqiyati" },
                    { id: "c", text: "Xavotirli belgi: bola jarayondan chetda qolgan" },
                    { id: "d", text: "Tabiiy holat, hamma bola faol bo'lolmaydi" },
                  ],
                  correctId: "c",
                  explanation:
                    "Musiqa darsining o'lchovi — tartib emas, ishtirok. Har darsda har bola ovoz chiqarishi kerak.",
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
                "Maqsad — jimlik emas, boshqariladigan shovqin",
                "Qoida sinf bilan birga tuziladi, kam bo'ladi va harakat tilida yoziladi",
                "Ovozsiz signallar ovoz ko'tarishdan barqarorroq",
                "Avval ko'rsatma, keyin cholg'u",
                "Ichki motivatsiyaning uch ustuni: avtonomiya, kompetentlik, bog'liqlik",
                "Har darsda har bola ovoz chiqarishi kerak",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'z darsingiz uchun qanday ovozsiz signal tanlagan bo'lardingiz va nega aynan u?",
        "Sinfdagi eng jim o'quvchini jarayonga qanday qaytarasiz?",
      ],
    },

    {
      id: "met-7",
      slug: "farqlashtirilgan-dars",
      title: "Mavzu 7: Farqlashtirilgan va shaxsga yo'naltirilgan dars",
      summary:
        "Rojers va Vigotskiy asoslari, farqlashtirishning to'rt yo'li va bitta qo'shiqdan to'rt darajali vazifa qurish.",
      durationMin: 45,
      bloom: "sintez",
      outcomeId: "on-met-9",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Bitta sinfda uch yil musiqa maktabida o'qigan bola ham, hayotida cholg'uni qo'liga olmagan bola ham o'tiradi. Ikkalasiga bir xil vazifa berilsa, ulardan biri darsni behuda o'tkazadi.",
            },
            {
              kind: "matn",
              text: "Kuchlisi zerikadi va qiziqishini yo'qotadi, kuchsizi esa yetolmay qoladi va «men qila olmayman» degan xulosaga keladi. Ikkala holatda ham dars o'z vazifasini bajarmaydi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Shaxsga yo'naltirilgan ta'limning asosi K. Rojersda: o'quvchi ta'sir ob'ekti emas, o'z o'rganishining sub'ekti. O'qituvchi esa bilim uzatuvchi emas, sharoit yaratuvchi (fasilitator).",
            },
            {
              kind: "royxat",
              items: [
                "Qabul qilish — bolani hozirgi darajasi bilan, shartsiz qabul qilish",
                "Empatiya — uning qiyinchiligini uning o'rnida turib ko'rish",
                "Samimiylik — o'qituvchi rol o'ynamaydi, o'zi bo'lib qoladi",
                "Natija: bola xato qilishdan qo'rqmaydi, demak o'rganadi",
              ],
            },
            {
              kind: "matn",
              text: "Ikkinchi asos — L. Vigotskiyning yaqin rivojlanish zonasi (YaRZ). Vazifa bolaning hozirgi darajasidan bir oz yuqori bo'lishi kerak: bugun yordam bilan bajarganini ertaga mustaqil bajaradi.",
            },
            {
              kind: "royxat",
              items: [
                "Juda oson vazifa — rivojlanish yo'q, zerikish bor",
                "Juda qiyin vazifa — rivojlanish yo'q, qo'rquv bor",
                "YaRZ — aynan oradagi tor yo'lak; farqlashtirish shu yo'lakni har bola uchun alohida topishdir",
                "Yordam (skaffolding) vaqtincha beriladi va asta olib tashlanadi",
              ],
            },
            {
              kind: "eslatma",
              text: "Shu sababli farqlashtirish diagnostikadan boshlanadi. Bolaning darajasini bilmasdan YaRZ ni topib bo'lmaydi — platformadagi boshlang'ich diagnostika va individual rivojlanish yo'li aynan shu uchun qurilgan.",
            },
            {
              kind: "matn",
              text: "Farqlashtirishning to'rt yo'li bor. Amalda ular birga ishlatiladi, lekin bitta darsda bittasini tanlash kifoya — hammasini birdan o'zgartirish o'qituvchini ham, sinfni ham chalkashtiradi.",
            },
            {
              kind: "royxat",
              items: [
                "Mazmun — nimani o'rganadi: bir xil qo'shiq, lekin turli partiya yoki turli murakkablikdagi jo'r",
                "Jarayon — qanday o'rganadi: biri notadan, biri eshitib, biri harakat orqali",
                "Mahsulot — nimani ko'rsatadi: kuylaydi, chaladi, ritm beradi yoki tahlil qilib aytib beradi",
                "Muhit — qanday sharoitda: yakka, juft yoki guruh; sinfning qaysi burchagida",
              ],
            },
            {
              kind: "matn",
              text: "Musiqa darsi farqlashtirish uchun qulay fan: bitta asardan bir vaqtning o'zida bir necha darajadagi partiya chiqaradi va ularning hammasi birga yangraydi.",
            },
            {
              kind: "nota",
              caption: "Bitta qo'shiq — turli daraja: ohang, ikkinchi ovoz va ostinato bir vaqtda yangraydi",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4", "e/4", "g/4"], duration: "q", lyric: "hammasi" },
                  { keys: ["e/4"], duration: "q", lyric: "ohang" },
                  { keys: ["c/4"], duration: "q", lyric: "ostinato" },
                  { keys: ["g/4"], duration: "q", lyric: "2-ovoz" },
                ],
              },
            },
            {
              kind: "royxat",
              items: [
                "1-daraja — ostinato: bir yoki ikki tovushli takrorlanuvchi naqsh, doirada yoki cholg'uda",
                "2-daraja — asosiy ohangni kuylash",
                "3-daraja — ikkinchi ovoz yoki oddiy jo'r",
                "4-daraja — to'liq jo'r, kirish va improvizatsiya bo'lagi",
                "Hammasi bitta asarda birlashadi: hech kim chetda qolmaydi va hech kim zerikmaydi",
              ],
            },
            {
              kind: "matn",
              text: "Guruhlash farqlashtirishning vositasi, lekin u doimiy bo'lmasligi kerak. «Kuchlilar» va «kuchsizlar» degan doimiy guruh yorliqqa aylanadi va bolaning o'zi haqidagi tasavvurini belgilab qo'yadi.",
            },
            {
              kind: "royxat",
              items: [
                "Guruh vazifaga qarab o'zgaradi: ritm vazifasida boshqa, intonatsiyada boshqa tarkib",
                "Aralash guruh ham foydali: kuchliroq bola tushuntirganda o'zi ham chuqurroq o'rganadi",
                "Tanlovni bolaning o'ziga qoldirish mumkin — bu avtonomiyani oshiradi",
              ],
            },
            {
              kind: "eslatma",
              text: "Eng keng tarqalgan xato — farqlashtirishni miqdor deb tushunish: «kuchlilarga ko'proq, kuchsizlarga kamroq». Farqlashtirish miqdor emas, sifat masalasi: vazifaning hajmi emas, turi va qo'llab-quvvatlash darajasi o'zgaradi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Doirada qo'shiq jo'rligi usulini bajaring va uni eng sodda ko'rinishgacha qisqartiring — bitta zarb bir taktda. Bu 1-daraja partiyasi: hech qanday tayyorgarliksiz bola ham ansamblga qo'shila oladi.",
              instrument: "doira",
              exerciseId: "doira-jorlik",
            },
            {
              kind: "mashq",
              text: "Pianinoda o'z kuyingizni yarating, so'ng unga ikki xil jo'r o'ylab toping: biri bitta tovushli, ikkinchisi akkordli. Bitta asarda ikki daraja — farqlashtirishning amaldagi ko'rinishi shu.",
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
                  id: "met9-t1",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Shaxsga yo'naltirilgan ta'limda o'qituvchining roli qanday ta'riflanadi?",
                  options: [
                    { id: "a", text: "Bilim uzatuvchi" },
                    { id: "b", text: "Sharoit yaratuvchi (fasilitator)" },
                    { id: "c", text: "Nazoratchi" },
                    { id: "d", text: "Baholovchi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met9-t2",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Yaqin rivojlanish zonasi nimani bildiradi?",
                  options: [
                    { id: "a", text: "Bola mustaqil bajara oladigan vazifalar doirasi" },
                    { id: "b", text: "Bola yordam bilan bajara oladigan, mustaqil esa hali bajarolmaydigan oraliq" },
                    { id: "c", text: "Bolaning yosh guruhi" },
                    { id: "d", text: "Dasturda belgilangan minimal daraja" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met9-t3",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Sinfda bitta qo'shiq o'rganilyapti. Hech kim chetda qolmasligi uchun eng yaxshi yechim qaysi?",
                  options: [
                    { id: "a", text: "Kuchsizlarni tinglashga qo'yish" },
                    { id: "b", text: "Bir asarda bir necha darajadagi partiya berish: ostinato, ohang, ikkinchi ovoz, jo'r" },
                    { id: "c", text: "Qo'shiqni osonlashtirish" },
                    { id: "d", text: "Kuchlilarga qo'shimcha qo'shiq berish" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met9-t4",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "«Kuchlilarga 10 ta mashq, kuchsizlarga 5 ta mashq» — bu farqlashtirishmi?",
                  options: [
                    { id: "a", text: "Ha, bu klassik farqlashtirish" },
                    { id: "b", text: "Yo'q: bu miqdor o'zgarishi, vazifaning turi va qo'llab-quvvatlash esa o'zgarmagan" },
                    { id: "c", text: "Ha, agar baho ham farqlansa" },
                    { id: "d", text: "Yo'q, chunki mashqlar soni teng bo'lishi shart" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met9-t5",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "multiple",
                  prompt:
                    "K. Tomlinson bo'yicha farqlashtirishning to'rt yo'li qaysilar? (ro'yxatda ortiqchasi ham bor)",
                  options: [
                    { id: "a", text: "Mazmun" },
                    { id: "b", text: "Jarayon" },
                    { id: "c", text: "Mahsulot" },
                    { id: "d", text: "Muhit" },
                    { id: "e", text: "Dars davomiyligi" },
                    { id: "f", text: "Sinf hajmi" },
                  ],
                  correctIds: ["a", "b", "c", "d"],
                  explanation:
                    "Dars davomiyligi va sinf hajmi — tashkiliy shart-sharoit; farqlashtirish ular orqali emas, mazmun, jarayon, mahsulot va muhit orqali amalga oshiriladi.",
                },
                {
                  id: "met9-t6",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Sinfni butun yil «kuchlilar» va «kuchsizlar» guruhiga doimiy bo'lish nima uchun xavfli?",
                  options: [
                    { id: "a", text: "Jadval tuzish qiyinlashadi" },
                    { id: "b", text: "Guruh yorliqqa aylanadi va bolaning o'zi haqidagi tasavvurini belgilab qo'yadi" },
                    { id: "c", text: "Ota-onalar norozi bo'ladi" },
                    { id: "d", text: "Xavfli emas, bu samarali usul" },
                  ],
                  correctId: "b",
                  explanation:
                    "Guruh vazifaga qarab o'zgarishi kerak; doimiy guruh rivojlanish yo'lini yopadi.",
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
                "Rojers: o'quvchi — sub'ekt, o'qituvchi — fasilitator; qabul qilish, empatiya, samimiylik",
                "Vigotskiy: vazifa yaqin rivojlanish zonasida bo'lsin",
                "Farqlashtirish diagnostikadan boshlanadi",
                "To'rt yo'l: mazmun, jarayon, mahsulot, muhit",
                "Musiqada bir asar — bir necha daraja: ostinato, ohang, ikkinchi ovoz, jo'r",
                "Guruh vazifaga qarab o'zgaradi; farqlashtirish miqdor emas, sifat",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'z tajribangizda vazifa juda oson yoki juda qiyin bo'lgan darsni eslang: o'zingizni qanday his qilgandingiz?",
        "Yoddagi bitta qo'shiqni oling va unga to'rt darajali partiya tuzib ko'ring — qaysi daraja eng qiyin chiqdi?",
      ],
    },

    {
      id: "met-8",
      slug: "shakllantiruvchi-baholash",
      title: "Mavzu 8: Shakllantiruvchi baholash va teskari aloqa",
      summary:
        "Summativ va formativ baholash farqi, musiqa darsidagi tez usullar va rivojlantiruvchi teskari aloqaning besh qoidasi.",
      durationMin: 40,
      bloom: "qollash",
      outcomeId: "on-met-10",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Baho qo'yish — yo'lning oxiri. Shakllantiruvchi baholash esa yo'l davomidagi yo'l ko'rsatkich: u natijani qayd etmaydi, uni o'zgartiradi.",
            },
            {
              kind: "matn",
              text: "Farqni bitta savol ajratadi: bu baholash o'quvchiga hali ulgurish imkonini beradimi? Beradigan bo'lsa — formativ, bermaydigan bo'lsa — summativ.",
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
                "Summativ baholash — jarayon yakunida, natijani qayd etish uchun: chorak bahosi, yakuniy ijro, imtihon",
                "Formativ baholash — jarayon ichida, o'rganishni yo'naltirish uchun: dars davomidagi savol, qisqa tinglov, o'zaro tekshiruv",
                "Ikkalasi ham kerak; xato — faqat birinchisi bilan cheklanish",
              ],
            },
            {
              kind: "eslatma",
              text: "Formativ baholash albatta ballga aylanishi shart emas. Aksincha: ball qo'yilgan payt o'quvchi diqqati izohdan ballga ko'chadi va izoh o'qilmay qoladi.",
            },
            {
              kind: "matn",
              text: "Musiqa darsida formativ baholash tez bo'lishi kerak — dars davomida uch-to'rt marta, har biri bir-ikki daqiqada. Quyidagi usullar aynan shunday ishlaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Bosh barmoq signali: tushundim / qisman / hali yo'q — butun sinf bir lahzada javob beradi",
                "Qisqa yakka tinglov: ikki-uch o'quvchi bir fraza kuylaydi, qolganlar tinglaydi",
                "O'zaro tinglash juftlikda: mezon oldindan aytiladi, masalan «oxirgi tovush uzaytirildimi?»",
                "Yozib olib birga tinglash: bola o'z ijrosini tashqaridan eshitadi — bu eng kuchli teskari aloqa",
                "Chiqish chiptasi: dars oxirida bitta savolga bir og'iz javob — «bugun nima oson chiqdi, nima qiyin?»",
              ],
            },
            {
              kind: "matn",
              text: "Teskari aloqaning sifati uning hajmiga bog'liq emas. «Yaxshi», «zo'r», «bo'lmadi» kabi so'zlar hech narsani o'zgartirmaydi, chunki ulardan keyin nima qilish kerakligi noma'lum.",
            },
            {
              kind: "royxat",
              items: [
                "1. Aniq bo'lsin — nima aynan yaxshi yoki nima aynan ishlamadi: «uchinchi taktdagi sakrash past olindi»",
                "2. Xatti-harakatga qaratilsin, shaxsga emas: «bu joyda nafas yetmadi», «sen qobiliyatsizsan» emas",
                "3. Bajarib bo'ladigan bo'lsin — bitta keyingi qadam, beshta emas",
                "4. Darhol berilsin — ijrodan keyingi birinchi daqiqada, bir hafta o'tib emas",
                "5. Javob uchun vaqt qoldirilsin — o'quvchi tuzatib ko'rishi va qayta urinishi kerak",
              ],
            },
            {
              kind: "eslatma",
              text: "«Ikki yulduz va bitta tilak» — eng oson va eng ishonchli shakl: ikkita aniq yutuq nomlanadi, keyin bitta aniq keyingi qadam aytiladi. Bolalar bu shaklni bir-biriga teskari aloqa berishda ham ishlata oladi.",
            },
            {
              kind: "matn",
              text: "O'z-o'zini va o'zaro baholash faqat bitta shartda ishlaydi: mezon oldindan ma'lum bo'lishi kerak. Mezonsiz o'quvchi «yaxshi chaldi» deyishdan nariga o'tolmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Mezon kam bo'lsin — bir yoki ikkita, butun rubrika emas",
                "Mezon kuzatiladigan bo'lsin: «temp bir xil saqlandimi?» — ha yoki yo'q",
                "Avval o'qituvchi namuna ko'rsatadi, keyin bolalar mustaqil qo'llaydi",
              ],
            },
            {
              kind: "matn",
              text: "D. Shyonning refleksiya tushunchasi shu yerga ulanadi: amaliyot ichidagi refleksiya (ijro paytida o'zini eshitib tuzatish) va amaliyotdan keyingi refleksiya (yozuvni tinglab tahlil qilish). Ikkinchisiga o'rgatish oson, birinchisi esa asosiy maqsad.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Pianinoda oddiy kuyni chaling va o'zingizga «ikki yulduz va bitta tilak» shaklida teskari aloqa bering. Tilak bitta va bajarib bo'ladigan bo'lsin — keyingi urinishda aynan shuni tuzating.",
              instrument: "pianino",
              exerciseId: "p-oddiy-kuy",
            },
            {
              kind: "mashq",
              text: "Dutorda barmoq mashqini bajarib, bitta kuzatiladigan mezon tanlang (masalan, «har bir pardada tovush toza chiqdimi»). Shu mezon bo'yicha o'zingizni baholang — mezonli baho mezonsizidan qancha aniq ekanini taqqoslang.",
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
                  id: "met10-t1",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Formativ va summativ baholashni ajratadigan asosiy savol qaysi?",
                  options: [
                    { id: "a", text: "Ball qo'yiladimi?" },
                    { id: "b", text: "O'quvchiga hali tuzatish imkoni qoladimi?" },
                    { id: "c", text: "Baholash yozma bo'ladimi?" },
                    { id: "d", text: "Ota-onaga xabar beriladimi?" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met10-t2",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt: "Qaysilari formativ baholash usullari?",
                  options: [
                    { id: "a", text: "Bosh barmoq signali" },
                    { id: "b", text: "Chorak bahosi" },
                    { id: "c", text: "Juftlikda o'zaro tinglash" },
                    { id: "d", text: "Chiqish chiptasi" },
                  ],
                  correctIds: ["a", "c", "d"],
                },
                {
                  id: "met10-t3",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt: "Qaysi teskari aloqa eng foydali?",
                  options: [
                    { id: "a", text: "«Zo'r chaldingiz!»" },
                    { id: "b", text: "«Bo'lmadi, yana mashq qiling»" },
                    { id: "c", text: "«Uchinchi taktdagi sakrash past olindi — keyingi urinishda o'sha tovushni oldindan ichingizda eshiting»" },
                    { id: "d", text: "«Sizda qobiliyat bor, lekin tirishmaysiz»" },
                  ],
                  correctId: "c",
                  explanation:
                    "Aniq, xatti-harakatga qaratilgan va bitta bajarib bo'ladigan qadam ko'rsatilgan.",
                },
                {
                  id: "met10-t4",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Nega formativ baholashga ball qo'ymaslik tavsiya etiladi?",
                  options: [
                    { id: "a", text: "Ball qo'yish ko'p vaqt oladi" },
                    { id: "b", text: "O'quvchi diqqati izohdan ballga ko'chadi va izoh o'qilmay qoladi" },
                    { id: "c", text: "Ball jurnalga sig'maydi" },
                    { id: "d", text: "Ball faqat imtihonda qo'yiladi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met10-t5",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "O'zaro baholash ishlashi uchun eng muhim shart nima?",
                  options: [
                    { id: "a", text: "Bolalar do'st bo'lishi" },
                    { id: "b", text: "Mezon oldindan ma'lum va kuzatiladigan bo'lishi" },
                    { id: "c", text: "Baho jurnalga qo'yilishi" },
                    { id: "d", text: "O'qituvchi xonada bo'lmasligi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met10-t6",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "O'quvchi ijro etdi, siz batafsil izoh berdingiz va darhol keyingi o'quvchiga o'tdingiz. Nima yetishmadi?",
                  options: [
                    { id: "a", text: "Izoh qisqaroq bo'lishi kerak edi" },
                    { id: "b", text: "O'quvchiga tuzatib, qayta urinish uchun vaqt berilmadi" },
                    { id: "c", text: "Baho qo'yilmadi" },
                    { id: "d", text: "Hamma narsa to'g'ri bajarildi" },
                  ],
                  correctId: "b",
                  explanation:
                    "Javob berilmagan teskari aloqa formativ bo'lmay qoladi: u o'rganishni o'zgartirmaydi.",
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
                "Formativ — jarayon ichida, tuzatish imkoni bilan; summativ — yakunda",
                "Formativ baholashga ball qo'yish izohni ko'rinmas qiladi",
                "Tez usullar: bosh barmoq, qisqa tinglov, o'zaro tekshiruv, yozuv, chiqish chiptasi",
                "Teskari aloqa: aniq, xatti-harakatga, bitta qadam, darhol, javob uchun vaqt bilan",
                "O'zaro baholash mezon oldindan ma'lum bo'lgandagina ishlaydi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Sizga berilgan teskari aloqalardan qaysi biri haqiqatan nimanidir o'zgartirdi — va u qanday aytilgandi?",
        "Dars davomida uch marta formativ baholash o'tkazish uchun qaysi uch lahzani tanlagan bo'lardingiz?",
      ],
    },

    {
      id: "met-9",
      slug: "rubrika-bilan-baholash",
      title: "Mavzu 9: Rubrika bilan baholash",
      summary:
        "Baholash mezonlarini tuzish, daraja ta'riflarini yozish va bahoni asoslash.",
      durationMin: 40,
      bloom: "baholash",
      outcomeId: "on-met-5",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "«Ijodiy ishni baholab bo'lmaydi» degan fikr keng tarqalgan. Aslida muammo boshqacha: ijodiy ishni mezonsiz baholab bo'lmaydi. Mezon bo'lsa — baholash mumkin va adolatli bo'ladi.",
            },
            {
              kind: "eslatma",
              text: "Rubrika o'quvchiga topshiriqdan oldin ko'rsatiladi. Yashirin mezon bilan baholash — bahoni lotereyaga aylantiradi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Rubrika — jadval. Qatorlarda mezonlar, ustunlarda darajalar, kataklarda esa har bir darajaning ta'rifi turadi.",
            },
            {
              kind: "royxat",
              items: [
                "Mezon — ishning baholanadigan jihati (masalan «ritmik aniqlik»)",
                "Daraja — bajarilish sifati (masalan 1 dan 5 gacha yoki «boshlang'ich / yetarli / yaxshi / namunali»)",
                "Ta'rif — shu darajada ish qanday ko'rinishi; kuzatiladigan tilda yoziladi",
                "Og'irlik — mezonning umumiy balldagi ulushi",
              ],
            },
            {
              kind: "matn",
              text: "Yaxshi mezonning uchta belgisi bor: u kuzatiladi, u maqsadga bog'langan va u mustaqil (boshqa mezon bilan bir narsani o'lchamaydi).",
            },
            {
              kind: "royxat",
              items: [
                "Noto'g'ri mezon: «Ijodiy yondashuv» — kuzatilmaydi, har kim o'zicha tushunadi",
                "To'g'ri mezon: «Ohangda kamida bitta o'z motivi bor va u takrorlanadi»",
                "Noto'g'ri ta'rif: «Yaxshi bajarilgan»",
                "To'g'ri ta'rif: «Barcha zarblar o'z vaqtida, chetlanish sezilmaydi»",
              ],
            },
            {
              kind: "eslatma",
              text: "Mezonlar soni 3 dan 6 gacha bo'lgani ma'qul. Kamroq bo'lsa baho qo'pol chiqadi, ko'proq bo'lsa o'qituvchi ularni amalda qo'llay olmaydi.",
            },
            {
              kind: "matn",
              text: "Bahoni asoslash — rubrikaning ikkinchi vazifasi. O'quvchiga «4 oldingiz» deyish kam; «ritmda 5, ifodada 3 oldingiz, chunki iboralar ajratilmagan» deyish esa keyingi qadamni ko'rsatadi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "«O'quvchi o'z ohangini to'qiydi» topshirig'i uchun uchta mezon yozing. Har biri uchun eng past va eng yuqori darajaning ta'rifini tuzing. So'ng tekshiring: ta'riflar kuzatiladimi yoki baho beradimi?",
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
                  id: "met5-t1",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt: "Qaysi mezon to'g'ri yozilgan?",
                  options: [
                    { id: "a", text: "Ijodiy yondashuv" },
                    { id: "b", text: "Yaxshi ijro" },
                    { id: "c", text: "Ohangda kamida bitta o'z motivi bor va u takrorlanadi" },
                    { id: "d", text: "Umumiy taassurot" },
                  ],
                  correctId: "c",
                },
                {
                  id: "met5-t2",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Rubrika qachon o'quvchiga ko'rsatiladi?",
                  options: [
                    { id: "a", text: "Baho qo'yilgandan keyin" },
                    { id: "b", text: "Topshiriq berilayotganda, ish boshlanishidan oldin" },
                    { id: "c", text: "Faqat o'qituvchi uchun, ko'rsatilmaydi" },
                    { id: "d", text: "Chorak oxirida" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met5-t3",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Rubrikada nechta mezon bo'lgani ma'qul?",
                  options: [
                    { id: "a", text: "Bitta" },
                    { id: "b", text: "3 dan 6 gacha" },
                    { id: "c", text: "10 dan ortiq" },
                    { id: "d", text: "Soni ahamiyatsiz" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met5-t4",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "multiple",
                  prompt: "Yaxshi mezonning belgilarini tanlang.",
                  options: [
                    { id: "a", text: "Kuzatiladi" },
                    { id: "b", text: "O'quv maqsadiga bog'langan" },
                    { id: "c", text: "Boshqa mezon bilan bir narsani o'lchamaydi" },
                    { id: "d", text: "Imkon qadar umumiy yozilgan" },
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
                "Ijodiy ishni mezonsiz emas, mezon bilan baholash mumkin",
                "Rubrika topshiriqdan oldin ko'rsatiladi",
                "Mezon kuzatiladi, maqsadga bog'lanadi va mustaqil bo'ladi",
                "3–6 mezon — amalda qo'llanadigan oraliq",
                "Baho asoslanganda keyingi qadamni ko'rsatadi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'zingiz olgan baholardan qaysi biri sizga nimani yaxshilash kerakligini ko'rsatgan edi?",
        "Mezon yozishda «kuzatiladigan til» talabi sizga qiyin bo'ldimi?",
      ],
    },

    {
      id: "met-10",
      slug: "dars-ishlanmasini-tuzish",
      title: "Mavzu 10: Dars ishlanmasini tuzish",
      summary:
        "Maqsaddan baholashgacha: konstruktiv moslashuv asosida to'liq ishlanma tuzish.",
      durationMin: 45,
      bloom: "sintez",
      outcomeId: "on-met-3",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Ishlanma — bu «dars matni» emas. U uchta savolga javob beradigan hujjat: nimaga erishmoqchiman, buni qanday qilaman va erishganimni qanday bilaman?",
            },
            {
              kind: "eslatma",
              text: "J. Biggsning konstruktiv moslashuvi shu uch javobning bir-biriga mos bo'lishini talab qiladi. Agar maqsad «ijod qila oladi» bo'lsa, baholash testda bo'lmasligi kerak.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Ishlanmaning majburiy qismlari quyidagilar. Ular tartib bilan yoziladi, chunki har biri oldingisidan kelib chiqadi.",
            },
            {
              kind: "royxat",
              items: [
                "Mavzu va sinf",
                "O'quv maqsadi — o'lchanadigan fe'l bilan, Blum darajasi ko'rsatilgan",
                "Kutilayotgan natija — dars oxirida o'quvchi nimani qila oladi",
                "Kerakli jihozlar — cholg'u, audio, tarqatma material",
                "Bosqichlar va vaqt — har bir bosqichda o'qituvchi va o'quvchi nima qiladi",
                "Baholash — maqsadga erishilganini qanday tekshirasiz",
                "Uyga vazifa",
                "Differensiatsiya — kuchli va qiynalayotgan o'quvchi uchun nima o'zgaradi",
              ],
            },
            {
              kind: "eslatma",
              text: "Differensiatsiya qismini ko'pchilik tashlab ketadi. Aynan u shaxsga yo'naltirilgan ta'limning ishlanmadagi izi: bitta sinfda darajalar har xil, demak topshiriq ham bir xil bo'la olmaydi.",
            },
            {
              kind: "matn",
              text: "Bosqichlar jadvali ikki ustunli bo'lishi kerak: «O'qituvchi» va «O'quvchi». Agar o'ng ustun bo'sh qolsa — bu bosqichda bola passiv, demak uni qayta ko'rib chiqish kerak.",
            },
            {
              kind: "royxat",
              items: [
                "Noto'g'ri: «Interval haqida tushuncha berish» — bu o'qituvchining ishi, maqsad emas",
                "To'g'ri: «O'quvchi berilgan ikki tovush orasidagi intervalni nomlay oladi» — o'lchanadi",
                "Noto'g'ri: «O'quvchilar musiqani sevadilar» — o'lchab bo'lmaydi",
                "To'g'ri: «O'quvchi tinglagan asarining kayfiyatini uchta so'z bilan ta'riflay oladi»",
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
              text: "O'zingiz tanlagan mavzu uchun faqat uch qatorni yozing: maqsad, asosiy faoliyat va baholash usuli. So'ng tekshiring — baholash aynan shu maqsadni o'lchaydimi? Agar yo'q bo'lsa, ikkisidan birini o'zgartiring.",
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
                  id: "met3-t1",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Maqsad: «O'quvchi o'z ohangini to'qiy oladi». Qaysi baholash usuli bunga mos?",
                  options: [
                    { id: "a", text: "Yopiq savolli test" },
                    { id: "b", text: "O'quvchi to'qigan ohangni rubrika bo'yicha baholash" },
                    { id: "c", text: "Nota nomlarini so'rash" },
                    { id: "d", text: "Davomatni tekshirish" },
                  ],
                  correctId: "b",
                  explanation:
                    "Konstruktiv moslashuv: ijodiy maqsad ijodiy mahsulot orqali baholanadi.",
                },
                {
                  id: "met3-t2",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt: "Qaysi maqsad to'g'ri yozilgan?",
                  options: [
                    { id: "a", text: "Ritm haqida tushuncha berish" },
                    { id: "b", text: "O'quvchilarga musiqani sevdirish" },
                    { id: "c", text: "O'quvchi berilgan ritmik naqshni qarsak bilan takrorlay oladi" },
                    { id: "d", text: "Yangi mavzuni o'tish" },
                  ],
                  correctId: "c",
                },
                {
                  id: "met3-t3",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Ishlanmadagi differensiatsiya qismi nima uchun kerak?",
                  options: [
                    { id: "a", text: "Hujjat to'liq ko'rinishi uchun" },
                    { id: "b", text: "Sinfdagi darajalar har xil — topshiriq ham moslashishi kerak" },
                    { id: "c", text: "Direktor talab qilgani uchun" },
                    { id: "d", text: "Vaqtni to'ldirish uchun" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met3-t4",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Bosqichlar jadvalining «O'quvchi» ustuni bo'sh qolgan. Bu nimani bildiradi?",
                  options: [
                    { id: "a", text: "Jadval to'liq to'ldirilmagan, lekin dars yaxshi" },
                    { id: "b", text: "Shu bosqichda o'quvchi passiv — bosqichni qayta ko'rish kerak" },
                    { id: "c", text: "Bu normal holat" },
                    { id: "d", text: "O'qituvchi ko'p gapiradi, demak dars samarali" },
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
                "Ishlanma uch savolga javob beradi: nimaga, qanday, qanday bilaman",
                "Maqsad o'lchanadigan fe'l bilan yoziladi",
                "Baholash maqsadga mos bo'lishi shart (konstruktiv moslashuv)",
                "Differensiatsiyasiz ishlanma shaxsga yo'naltirilgan bo'la olmaydi",
                "«O'quvchi» ustuni bo'sh bosqich — qayta ko'rib chiqiladi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Ishlanma tuzishda sizga eng qiyin bo'lgan qism qaysi bo'ldi?",
        "Maqsad va baholashni moslashtirish uchun nimani o'zgartirishga to'g'ri keldi?",
      ],
    },

    {
      id: "met-11",
      slug: "mikro-oqitish",
      title: "Mavzu 11: Mikro-o'qitish",
      summary:
        "Darsning kichik bo'lagini o'tish, teskari aloqa olish va ikkinchi urinishda tuzatish.",
      durationMin: 35,
      bloom: "qollash",
      outcomeId: "on-met-4",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Mikro-o'qitish — 10–15 daqiqalik dars bo'lagini kichik guruhda o'tish. Uning mazmuni oddiy: xato narxi past bo'lgan sharoitda mashq qilish.",
            },
            {
              kind: "eslatma",
              text: "Bu bosqichning qiymati birinchi urinishda emas, ikkinchisida. Teskari aloqadan keyin qayta o'tish — mikro-o'qitishning butun mazmuni shunda.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Mikro-dars tsikli to'rt qadamdan iborat va ular aylanma tartibda takrorlanadi.",
            },
            {
              kind: "royxat",
              items: [
                "1. Loyihalash — kichik, lekin to'liq bo'lak: maqsad, faoliyat, yakun",
                "2. O'tish — guruhdoshlar oldida, videoga yozib",
                "3. Teskari aloqa — guruh va mentor fikri, mezonlar bo'yicha",
                "4. Qayta o'tish — tuzatilgan variant",
              ],
            },
            {
              kind: "matn",
              text: "Teskari aloqa berishning ham qoidasi bor. «Yaxshi bo'ldi» foydasiz; «sizda ovoz past» esa shaxsga qaratilgan. To'g'ri shakl — xatti-harakatni tasvirlash va uning ta'sirini aytish.",
            },
            {
              kind: "royxat",
              items: [
                "Noto'g'ri: «Siz yomon tushuntirdingiz»",
                "To'g'ri: «Interval ta'rifini bir marta aytdingiz va darhol mashqqa o'tdingiz — men ulgurmadim»",
                "Noto'g'ri: «Hammasi zo'r edi»",
                "To'g'ri: «Misolni pianinoda chalib ko'rsatganingiz tushunishimga yordam berdi»",
              ],
            },
            {
              kind: "eslatma",
              text: "Teskari aloqa qabul qilish ham ko'nikma. Birinchi reaksiya — himoyalanish; buni bosib, savol berish kerak: «qaysi lahzada shunday bo'ldi?» Aniq lahza topilsa, tuzatish ham aniq bo'ladi.",
            },
            {
              kind: "matn",
              text: "Mikro-darsda vaqt juda tor: 10 daqiqada bitta tushuncha va bitta mashqdan ortig'i sig'maydi. Ko'p material olish — bu bosqichdagi eng keng tarqalgan xato.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "10 daqiqalik mikro-dars bo'lagini rejalashtiring: bitta maqsad, bitta tushuntirish, bitta mashq, bitta yakuniy savol. Uni ovozga yozib oling va o'zingiz tinglang — vaqtga sig'dingizmi?",
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
                  id: "met4-t1",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Mikro-o'qitishning asosiy qiymati nimada?",
                  options: [
                    { id: "a", text: "Dars vaqtini tejashda" },
                    { id: "b", text: "Teskari aloqadan keyin qayta o'tishda" },
                    { id: "c", text: "Baho olishda" },
                    { id: "d", text: "Video yozib olishda" },
                  ],
                  correctId: "b",
                },
                {
                  id: "met4-t2",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt: "Qaysi teskari aloqa to'g'ri shaklda berilgan?",
                  options: [
                    { id: "a", text: "«Siz juda sekin gapirasiz»" },
                    { id: "b", text: "«Dars qiziq o'tdi»" },
                    { id: "c", text: "«Savol berganingizdan keyin darhol o'zingiz javob berdingiz — o'ylashga ulgurmadim»" },
                    { id: "d", text: "«Yaxshi, davom eting»" },
                  ],
                  correctId: "c",
                  explanation:
                    "To'g'ri teskari aloqa aniq xatti-harakatni va uning ta'sirini ko'rsatadi, shaxsni emas.",
                },
                {
                  id: "met4-t3",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "10 daqiqalik mikro-darsga qancha material olish to'g'ri?",
                  options: [
                    { id: "a", text: "Butun mavzu" },
                    { id: "b", text: "Bitta tushuncha va bitta mashq" },
                    { id: "c", text: "Uch-to'rt tushuncha" },
                    { id: "d", text: "Faqat nazariya" },
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
                "Mikro-o'qitish — xato narxi past sharoitda mashq",
                "Tsikl: loyihalash → o'tish → teskari aloqa → qayta o'tish",
                "Teskari aloqa xatti-harakatni tasvirlaydi, shaxsni emas",
                "10 daqiqaga bitta tushuncha va bitta mashq sig'adi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Teskari aloqa eshitganda birinchi reaksiyangiz qanday bo'ldi?",
        "Ikkinchi urinishda nimani o'zgartirdingiz va natija qanday bo'ldi?",
      ],
    },
  ],
};
