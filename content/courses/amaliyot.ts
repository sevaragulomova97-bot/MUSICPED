import type { Course } from "@/content/lesson-types";

/**
 * Pedagogik amaliyot kursi.
 *
 * Kuzatuvdan mustaqil darsgacha. Kurs `content/mentorship.ts` dagi uch
 * bosqich bilan bir mantiqqa quriladi: avval ustoz bilan, keyin yordam
 * bilan, oxirida mustaqil.
 *
 * Shu o'q atrofida maktabdagi haqiqiy ish ham beriladi: tayyorgarlik va
 * hujjatlar, ota-ona va hamkasblar bilan munosabat, inklyuziv ta'lim,
 * to'garak va tadbir, kasbiy etika. Kurs portfolio va yakuniy hisobot
 * bilan yakunlanadi.
 */

export const AMALIYOT: Course = {
  slug: "pedagogik-amaliyot",
  moduleId: "mod-amaliyot",
  title: "Pedagogik amaliyot",
  description:
    "Tayyorgarlikdan portfoliogacha: kuzatuv, mikro-dars, mustaqil dars, maktab muhiti, inklyuziya, tadbir va kasbiy etika.",
  lessons: [
    {
      id: "ama-1",
      slug: "amaliyotga-tayyorgarlik",
      title: "Mavzu 1: Amaliyotga tayyorgarlik",
      summary:
        "Maktab bilan tanishuv, hujjatlar, amaliyot kundaligi va birinchi hafta rejasi.",
      durationMin: 30,
      bloom: "tushunish",
      outcomeId: "on-ama-6",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Amaliyotning birinchi kuni ko'pincha behuda ketadi: talaba maktabga keladi, kimni qidirishini bilmaydi, qayerga o'tirishini bilmaydi va dars kuzatuvini bo'sh daftarda boshlaydi.",
            },
            {
              kind: "matn",
              text: "Buning oldini olish uchun tayyorgarlik amaliyot boshlanishidan oldin qilinadi. Bu bir soatlik ish, lekin u birinchi haftani butunlay o'zgartiradi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Birinchi qadam — maktab bilan tanishuv. Bu rasmiyatchilik emas: siz ishlaydigan muhitning qoidalarini bilmasdan dars o'tib bo'lmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Mentor o'qituvchi kim, u qaysi sinflarga kiradi va qachon bo'sh bo'ladi",
                "Musiqa xonasi qayerda, unda qanday cholg'u va texnika bor, kaliti kimda",
                "Qo'ng'iroq jadvali, tanaffus tartibi va navbatchilik qoidalari",
                "Maktabning musiqa bo'yicha repertuar an'anasi va yaqinlashayotgan tadbirlar",
                "Kiyinish, telefon va ijtimoiy tarmoq bo'yicha maktab qoidalari",
              ],
            },
            {
              kind: "eslatma",
              text: "Alohida so'rab oling: qaysi sinfda e'tibor talab qiladigan o'quvchilar bor. Inklyuziv ehtiyoj, tilni bilmaslik, oilaviy vaziyat — bularni darsdan oldin bilish kerak, dars o'rtasida emas.",
            },
            {
              kind: "matn",
              text: "Hujjatlar ro'yxati odatda universitet tomonidan beriladi, lekin ularning mazmuni talabaning o'zidan chiqadi. Shuning uchun ularni oxirgi kecha to'ldirish — eng keng tarqalgan va eng ko'p ball yo'qotadigan xato.",
            },
            {
              kind: "royxat",
              items: [
                "Amaliyot kundaligi — har kuni to'ldiriladi, haftada bir marta emas",
                "Dars kuzatuv varaqalari — kuzatilgan har bir dars uchun alohida",
                "O'z darslaringizning ishlanmasi — o'tkazishdan oldin mentorga ko'rsatiladi",
                "Mentor xulosasi va baho varaqasi",
                "Yakuniy hisobot va portfolio",
              ],
            },
            {
              kind: "matn",
              text: "Amaliyot kundaligi — eng kam baholanadigan va eng foydali hujjat. U hisobot uchun emas, o'zingiz uchun yuritiladi: yakuniy refleksiyani yozishda butun material shu yerdan olinadi.",
            },
            {
              kind: "royxat",
              items: [
                "Har kuni uch qator yetarli: nima bo'ldi, nima ishladi, nima ishlamadi",
                "Aniq lahzani yozing: «6-A sinfda, qo'shiqning ikkinchi kupletida bolalar tarqab ketdi»",
                "Savollarni ham yozib boring — mentor bilan uchrashuvda ular kerak bo'ladi",
                "Hissiyotni yashirmang: qaysi dars sizni charchatdi, qaysi biri quvontirdi",
                "Haftasiga bir marta o'qib chiqing: takrorlanayotgan naqsh shu yerda ko'rinadi",
              ],
            },
            {
              kind: "eslatma",
              text: "Kundalikda bolalarning to'liq ismini yozmang. Tahlil uchun «7-B dagi bitta o'quvchi» degani yetarli — bu hujjat keyin boshqalar qo'liga tushishi mumkin.",
            },
            {
              kind: "matn",
              text: "Birinchi haftaning rejasi oddiy bo'lsin: kuzatish, tanishish, yordam berish. Birinchi kundan dars o'tishga intilish ko'pincha yomon tugaydi.",
            },
            {
              kind: "royxat",
              items: [
                "1–2 kun: faqat kuzatuv, turli sinflarda",
                "3–4 kun: mentorga yordam — tarqatish, yig'ish, guruh bilan ishlash",
                "5-kun: kichik bo'lak o'tkazish (sozlash yoki bitta mashq)",
                "Ikkinchi hafta: mikro-dars; uchinchi hafta: to'liq dars",
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
              text: "Maktab bilan tanishuv uchun savollar ro'yxatini tuzing — kamida o'nta. Ularni birinchi kuni mentorga va maktab ma'muriyatiga berish mumkin bo'lsin.",
            },
            {
              kind: "mashq",
              text: "Amaliyot kundaligingizning birinchi sahifasini hozir to'ldiring: amaliyotdan nimani kutyapsiz, nimadan hadiksiragansiz va o'zingizga qanday uchta maqsad qo'yasiz?",
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
                  id: "ama6-t1",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Amaliyot kundaligi qanchalik tez-tez to'ldiriladi?",
                  options: [
                    { id: "a", text: "Har kuni" },
                    { id: "b", text: "Haftada bir marta" },
                    { id: "c", text: "Amaliyot oxirida" },
                    { id: "d", text: "Mentor so'raganda" },
                  ],
                  correctId: "a",
                  explanation:
                    "Kunlik yozuv tafsilotni saqlaydi; bir hafta o'tgach aniq lahzalar esdan chiqadi va yozuv umumiy gapga aylanadi.",
                },
                {
                  id: "ama6-t2",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Kundalikda qaysi yozuv foydaliroq?",
                  options: [
                    { id: "a", text: "«Dars yaxshi o'tdi»" },
                    { id: "b", text: "«6-A sinfda, qo'shiqning ikkinchi kupletida bolalar tarqab ketdi»" },
                    { id: "c", text: "«Bolalar tartibsiz edi»" },
                    { id: "d", text: "«Hammasi rejadagidek»" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama6-t3",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Nega kundalikda o'quvchilarning to'liq ismi yozilmaydi?",
                  options: [
                    { id: "a", text: "Joy tejash uchun" },
                    { id: "b", text: "Hujjat keyin boshqalar qo'liga tushishi mumkin" },
                    { id: "c", text: "Ismlarni eslab qolish qiyin" },
                    { id: "d", text: "Qoida yo'q, yozsa bo'ladi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama6-t4",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Amaliyotning birinchi kunida eng to'g'ri ish qaysi?",
                  options: [
                    { id: "a", text: "Darhol dars o'tishni so'rash" },
                    { id: "b", text: "Kuzatish va maktab tartibi bilan tanishish" },
                    { id: "c", text: "Hujjatlarni to'ldirib o'tirish" },
                    { id: "d", text: "O'z repertuarini tayyorlash" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama6-t5",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt:
                    "Birinchi kuni maktabdan nimalarni aniqlab olish kerak?",
                  options: [
                    { id: "a", text: "Musiqa xonasidagi cholg'u va texnika" },
                    { id: "b", text: "Qo'ng'iroq jadvali" },
                    { id: "c", text: "E'tibor talab qiladigan o'quvchilar bor-yo'qligi" },
                    { id: "d", text: "O'quvchilarning baholari" },
                  ],
                  correctIds: ["a", "b", "c"],
                },
                {
                  id: "ama6-t6",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Hujjatlarni amaliyot oxirida bir kunda to'ldirish nega yomon?",
                  options: [
                    { id: "a", text: "Ko'p vaqt oladi" },
                    { id: "b", text: "Material yo'qoladi: aniq lahzalar esdan chiqadi va yozuv umumiy gapga aylanadi" },
                    { id: "c", text: "Mentor norozi bo'ladi" },
                    { id: "d", text: "Qog'oz yetmaydi" },
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
                "Tayyorgarlik amaliyot boshlanishidan oldin qilinadi",
                "Maktab bilan tanishuv: mentor, xona, jadval, qoidalar, e'tibor talab qiladigan o'quvchilar",
                "Kundalik har kuni, aniq lahzalar bilan, ismlarsiz",
                "Birinchi hafta: kuzatuv -> yordam -> kichik bo'lak",
                "Hujjat oxirida emas, jarayonda to'ldiriladi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Amaliyotdan eng ko'p nimadan hadiksiraysiz va bu hadikni kamaytirish uchun hozir nima qila olasiz?",
        "Maktabga beradigan savollaringizdan qaysi biri eng muhim deb o'ylaysiz?",
      ],
    },

    {
      id: "ama-2",
      slug: "dars-kuzatuvi",
      title: "Mavzu 2: Dars kuzatuvi",
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

    {
      id: "ama-3",
      slug: "mikro-dars-otkazish",
      title: "Mavzu 3: Mikro-dars bo'lagini o'tkazish",
      summary:
        "Tayyorgarlik, vaqtni boshqarish, savol berish texnikasi va sinf bilan aloqa.",
      durationMin: 40,
      bloom: "qollash",
      outcomeId: "on-ama-2",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Kuzatuv bosqichida siz boshqalarning darsini tahlil qildingiz. Endi navbat o'zingizga keldi. Bu bosqichda to'liq dars emas, uning bo'lagi o'tiladi — shuning uchun xatoning narxi past.",
            },
            {
              kind: "eslatma",
              text: "Bu Vigotskiy mantig'ining amaliy izi: avval ustoz bilan (kuzatuv), keyin yordam bilan (mikro-dars), oxirida mustaqil (to'liq dars). O'rtadagi qadamni tashlab o'tib bo'lmaydi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Mikro-darsda ikkita narsa birdan sinaladi: material ustidan hokimiyat va sinf bilan aloqa. Birinchisi tayyorgarlik bilan hal bo'ladi, ikkinchisi — faqat amaliyot bilan.",
            },
            {
              kind: "royxat",
              items: [
                "Tayyorgarlik — material yod bilinadi, chunki qog'ozga qarab turgan o'qituvchi sinfni yo'qotadi",
                "Kirish — birinchi 30 soniyada diqqat yig'iladi: savol, tovush yoki kutilmagan narsa",
                "Vaqt — har bosqich uchun daqiqa belgilanadi va soatga qaraladi",
                "Yakun — bo'lak albatta yakunlanadi, «vaqt tugadi» bilan uzilmaydi",
              ],
            },
            {
              kind: "matn",
              text: "Savol berish — eng ko'p xato qilinadigan joy. Tajribasiz o'qituvchi savol beradi va bir soniya kutib, o'zi javob beradi. Natijada bolalar o'ylashni to'xtatadi: baribir o'qituvchi aytadi.",
            },
            {
              kind: "royxat",
              items: [
                "Savoldan keyin kamida 3–5 soniya kuting — bu uzoq tuyuladi, lekin zarur",
                "Savolni butun sinfga bering, keyin aniq bolani chaqiring (teskarisi emas)",
                "«Kim biladi?» emas, «Nima deb o'ylaysan?» — ikkinchisiga javob berish xavfsizroq",
                "Noto'g'ri javobni «yo'q» bilan kesmang: «qiziq, nega shunday deb o'yladingiz?»",
              ],
            },
            {
              kind: "eslatma",
              text: "Musiqa darsining o'ziga xosligi: tushuntirishdan ko'ra ko'rsatish kuchliroq. Intervalni ta'riflab bergandan ko'ra chalib ko'rsatish, ritmni aytgandan ko'ra qarsak bilan berish samaraliroq.",
            },
            {
              kind: "matn",
              text: "Hayajon normal holat. Uni yashirishga urinish emas, boshqarish kerak: birinchi jumlani yod oling, sekin gapiring, nafasni tenglang. Birinchi daqiqadan keyin hayajon o'z-o'zidan kamayadi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "10 daqiqalik bo'lak uchun faqat birinchi 30 soniyani yozing va yod oling: qanday boshlaysiz, qanday savol berasiz. Uni ovozga yozib tinglang — sekin gapiryapsizmi yoki shoshyapsizmi?",
            },
            {
              kind: "mashq",
              text: "Pianinoda tushuntirmoqchi bo'lgan misolingizni chalib ko'ring. Ko'rsatish tushuntirishdan kuchliroq — misol tayyor bo'lsin.",
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
                  id: "ama2-t1",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Savol berganingizdan keyin qancha kutish kerak?",
                  options: [
                    { id: "a", text: "Kutish shart emas" },
                    { id: "b", text: "1 soniya" },
                    { id: "c", text: "Kamida 3–5 soniya" },
                    { id: "d", text: "Bir daqiqa" },
                  ],
                  correctId: "c",
                  explanation:
                    "Kutish vaqti qisqa bo'lsa, bolalar o'ylashni to'xtatadi — baribir o'qituvchi javob beradi deb biladi.",
                },
                {
                  id: "ama2-t2",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Savolni to'g'ri berish tartibi qaysi?",
                  options: [
                    { id: "a", text: "Avval bolani chaqirib, keyin savol berish" },
                    { id: "b", text: "Savolni butun sinfga berib, kutib, keyin chaqirish" },
                    { id: "c", text: "Faqat qo'l ko'targanlardan so'rash" },
                    { id: "d", text: "Savolni takrorlamaslik" },
                  ],
                  correctId: "b",
                  explanation:
                    "Ism avval aytilsa, qolganlar o'ylashni to'xtatadi — savol ularga tegishli emas deb hisoblaydi.",
                },
                {
                  id: "ama2-t3",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "O'quvchi noto'g'ri javob berdi. Eng foydali javobingiz qaysi?",
                  options: [
                    { id: "a", text: "«Yo'q, noto'g'ri. Kim biladi?»" },
                    { id: "b", text: "«Nega shunday deb o'yladingiz?»" },
                    { id: "c", text: "Javobni e'tiborsiz qoldirish" },
                    { id: "d", text: "To'g'ri javobni darhol aytish" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama2-t4",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Musiqa darsida yangi tushunchani berishning eng samarali yo'li qaysi?",
                  options: [
                    { id: "a", text: "Ta'rifni aytib, daftarga yozdirish" },
                    { id: "b", text: "Chalib ko'rsatish, keyin nomlash" },
                    { id: "c", text: "Darslikdan o'qitish" },
                    { id: "d", text: "Uyga vazifa qilib berish" },
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
                "Material yod bilinadi — qog'ozga qaragan o'qituvchi sinfni yo'qotadi",
                "Birinchi 30 soniya diqqatni yig'adi",
                "Savol: butun sinfga → 3–5 soniya kutish → aniq bola",
                "Musiqa darsida ko'rsatish tushuntirishdan kuchli",
                "Hayajonni yashirish emas, boshqarish kerak",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Mikro-darsingizning qaysi lahzasida o'zingizni eng ishonchli his qildingiz?",
        "Savoldan keyin kutish sizga qiyin bo'ldimi — nega?",
      ],
    },

    {
      id: "ama-4",
      slug: "maktab-muhiti",
      title: "Mavzu 4: Maktab muhiti — ota-ona, hamkasb va ma'muriyat",
      summary:
        "Musiqa o'qituvchisining maktabdagi o'rni, ota-ona bilan suhbat, hamkasblar bilan hamkorlik va ma'muriyat talablari.",
      durationMin: 35,
      bloom: "tahlil",
      outcomeId: "on-ama-9",
      area: "motivatsiya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Amaliyotda ko'pchilik talaba bir narsadan hayratlanadi: sinfda dars o'tish ishning faqat yarmi ekan. Qolgan yarmi — odamlar bilan munosabat.",
            },
            {
              kind: "matn",
              text: "Musiqa o'qituvchisi uchun bu ayniqsa shunday: u bayram tashkil qiladi, boshqa fan o'qituvchilari bilan kesishadi, ota-onalardan ko'ngilli yordam so'raydi va ma'muriyatga hisobot beradi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Musiqa darsining maktabdagi mavqei boshqa fanlardan farq qiladi va bu farqni tushunish ko'p noqulay holatni oldindan tushuntirib beradi.",
            },
            {
              kind: "royxat",
              items: [
                "Soat kam: ko'pincha haftada bir dars — har bir dars og'irroq vaznga ega",
                "O'qituvchi butun maktabni biladi, lekin har bir bolani kam ko'radi",
                "Tadbirlar musiqa o'qituvchisidan kutiladi: bayram, konsert, bitiruv",
                "Musiqa xonasi ko'pincha umumiy resurs — zal, texnika, repetitsiya vaqti bo'lishadi",
                "Shu sabablardan rejalashtirish va kelishuv ko'nikmasi fan bilimi qadar muhim",
              ],
            },
            {
              kind: "matn",
              text: "Ota-ona bilan suhbat — eng ko'p hadik tug'diradigan qism. Aslida uning ham tuzilmasi bor va unga tayyorlanish mumkin.",
            },
            {
              kind: "royxat",
              items: [
                "Suhbatni bolaning kuchli tomonidan boshlang — bu maqtov emas, kontekst",
                "Muammoni xatti-harakat tilida ayting: «darsda kuylamaydi», «qobiliyatsiz» emas",
                "Aniq misol keltiring: qachon, qaysi darsda, nima bo'ldi",
                "Ota-onani ayblamang va ulardan ham javob talab qilmang — birga yechim qidiring",
                "Bitta aniq keyingi qadam bilan tugating va uni yozib qo'ying",
                "Hissiyot ko'tarilsa, suhbatni boshqa vaqtga ko'chiring — bu mag'lubiyat emas",
              ],
            },
            {
              kind: "eslatma",
              text: "«Bolangizda qobiliyat yo'q» — musiqa o'qituvchisi aytishi mumkin bo'lgan eng zararli jumla. U ko'pincha umrbod esda qoladi va odamni musiqadan butunlay uzoqlashtiradi. Qobiliyat emas, hozirgi daraja va keyingi qadam haqida gapiring.",
            },
            {
              kind: "matn",
              text: "Hamkasblar bilan munosabatda musiqa o'qituvchisining o'ziga xos vaziyati bor: u boshqalarning dars vaqtini so'raydi — repetitsiya, tadbir, tayyorgarlik uchun.",
            },
            {
              kind: "royxat",
              items: [
                "Vaqt so'rashda oldindan va yozma murojaat qiling, dars oldidan emas",
                "Nima uchun va qancha vaqt kerakligini aniq ayting",
                "O'zingiz ham yordam taklif qiling: boshqa fanlar bilan birga loyiha musiqa darsini kuchaytiradi",
                "Rad javobini shaxsiy qabul qilmang — hammaning o'z rejasi bor",
                "Kelishuvni yozib qo'ying; og'zaki kelishuv unutiladi",
              ],
            },
            {
              kind: "matn",
              text: "Ma'muriyat bilan ishda asosiy tamoyil — hujjat va muddat. Talabaning ko'z o'ngida bu byurokratiya ko'rinadi, lekin aslida bu maktabning ishlash tili.",
            },
            {
              kind: "royxat",
              items: [
                "Tadbir rejasini oldindan va yozma taqdim eting",
                "Zal, texnika va vaqtni rasmiy so'rang — og'zaki kelishuv konflikt tug'diradi",
                "Xavfsizlik talablarini oldindan aniqlang: sahna, elektr, bolalarning harakati",
                "Hisobotni tadbirdan keyin darhol yozing — surat va ro'yxat shu paytda qo'lingizda bo'ladi",
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
              text: "Quyidagi holatga suhbat matnini yozing: bola darsda umuman kuylamaydi, ota-ona esa «u uyda doim kuylaydi» deydi. Suhbatni kuchli tomondan boshlang va bitta aniq keyingi qadam bilan tugating.",
            },
            {
              kind: "mashq",
              text: "Maktab bayrami uchun zal va repetitsiya vaqti so'rash murojaatini yozing: nima, qachon, qancha vaqt, kim ishtirok etadi va qanday xavfsizlik talablari bor.",
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
                  id: "ama9-t1",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Ota-ona bilan suhbatni nimadan boshlash to'g'ri?",
                  options: [
                    { id: "a", text: "Muammoni darhol aytishdan" },
                    { id: "b", text: "Bolaning kuchli tomonidan" },
                    { id: "c", text: "Baho ko'rsatkichlaridan" },
                    { id: "d", text: "Maktab qoidalarini eslatishdan" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama9-t2",
                  area: "motivatsiya",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Qaysi jumla eng zararli va nega?",
                  options: [
                    { id: "a", text: "«Darsda ikkinchi kupletda qo'shilmayapti»" },
                    { id: "b", text: "«Bolangizda musiqaga qobiliyat yo'q»" },
                    { id: "c", text: "«Uyda qo'shiqni birga tinglashni taklif qilaman»" },
                    { id: "d", text: "«Bu hafta diapazon mashqini qildik»" },
                  ],
                  correctId: "b",
                  explanation:
                    "Qobiliyat haqidagi hukm o'zgarmas sifat sifatida qabul qilinadi va odamni musiqadan uzoqlashtiradi.",
                },
                {
                  id: "ama9-t3",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Hamkasbdan repetitsiya uchun dars vaqtini qanday so'rash kerak?",
                  options: [
                    { id: "a", text: "Dars oldidan og'zaki" },
                    { id: "b", text: "Oldindan, yozma, aniq sabab va vaqt bilan" },
                    { id: "c", text: "Ma'muriyat orqali majburan" },
                    { id: "d", text: "So'ramay, bolalarni olib ketish" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama9-t4",
                  area: "motivatsiya",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Nega musiqa o'qituvchisining har bir darsi «og'irroq vaznga» ega?",
                  options: [
                    { id: "a", text: "Dars uzunroq" },
                    { id: "b", text: "Soat kam — ko'pincha haftada bir dars" },
                    { id: "c", text: "Bolalar ko'proq" },
                    { id: "d", text: "Baho qo'yish qiyin" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama9-t5",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt:
                    "Tadbir tashkil qilishda ma'muriyat bilan nimalar oldindan kelishiladi?",
                  options: [
                    { id: "a", text: "Zal va vaqt" },
                    { id: "b", text: "Texnika" },
                    { id: "c", text: "Xavfsizlik talablari" },
                    { id: "d", text: "O'quvchilarning baholari" },
                  ],
                  correctIds: ["a", "b", "c"],
                },
                {
                  id: "ama9-t6",
                  area: "motivatsiya",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Ota-ona bilan suhbatda hissiyot ko'tarilib ketdi. Eng oqilona qaror?",
                  options: [
                    { id: "a", text: "Suhbatni davom ettirib, o'z fikrimni isbotlayman" },
                    { id: "b", text: "Suhbatni boshqa vaqtga ko'chiraman" },
                    { id: "c", text: "Ma'muriyatni chaqiraman" },
                    { id: "d", text: "Suhbatni butunlay to'xtataman va qaytmayman" },
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
                "Sinfdagi dars ishning yarmi; qolgani — munosabat va kelishuv",
                "Ota-ona bilan: kuchli tomondan boshlash, xatti-harakat tili, aniq misol, bitta qadam",
                "«Qobiliyat yo'q» — aytilmaydigan jumla",
                "Hamkasbdan vaqt oldindan va yozma so'raladi; kelishuv qayd etiladi",
                "Ma'muriyat bilan: reja, zal, texnika va xavfsizlik oldindan hal qilinadi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'z maktab tajribangizda musiqa o'qituvchisi qanday mavqega ega edi?",
        "Ota-ona bilan qiyin suhbatga tayyorlanish uchun o'zingizga qanday qoida qo'yasiz?",
      ],
    },

    {
      id: "ama-5",
      slug: "inklyuziv-talim",
      title: "Mavzu 5: Inklyuziv ta'lim musiqa darsida",
      summary:
        "Alohida ehtiyojli o'quvchi bilan ishlash: moslashtirish turlari, eshitish va ko'rish bo'yicha yechimlar, xulq-atvor va til to'siqlari.",
      durationMin: 40,
      bloom: "qollash",
      outcomeId: "on-ama-7",
      area: "motivatsiya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Musiqa darsi inklyuziya uchun maktabdagi eng qulay fan: unda baho yozma ishga bog'liq emas, ishtirok shakllari ko'p va natija darhol eshitiladi.",
            },
            {
              kind: "matn",
              text: "Shu bilan birga u eng ko'p chetda qoldiradigan fan ham bo'lishi mumkin — agar yagona ishtirok shakli «hamma birga kuylaydi» bo'lsa.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Inklyuziya — bolani sinfga qo'shib qo'yish emas, unga haqiqiy ishtirok yo'lini ochish. Farqni bitta savol ko'rsatadi: bola darsda nima qildi?",
            },
            {
              kind: "royxat",
              items: [
                "Moslashtirish (akkomodatsiya) — maqsad o'zgarmaydi, yo'l o'zgaradi: boshqa cholg'u, boshqa joy, ko'proq vaqt",
                "O'zgartirish (modifikatsiya) — maqsadning o'zi shu bola uchun boshqacha qo'yiladi",
                "Ko'pchilik holatda moslashtirish yetarli; o'zgartirish kamroq kerak bo'ladi",
                "Har ikkisi ham yozma reja asosida va mutaxassis bilan kelishilgan holda qilinadi",
              ],
            },
            {
              kind: "eslatma",
              text: "Birinchi qadam har doim bir xil: sinf rahbari, maktab psixologi yoki defektologdan bolaning rejasini so'rang. Taxmin bilan moslashtirish ko'pincha zarar keltiradi.",
            },
            {
              kind: "matn",
              text: "Eshitishda qiyinchilik bo'lgan o'quvchi uchun musiqa darsi yopiq emas: tovush faqat quloq bilan emas, teri va suyak orqali ham qabul qilinadi.",
            },
            {
              kind: "royxat",
              items: [
                "Tebranishni his qilish: pianino yonida turish, doira yoki rezonator yuzaga qo'l qo'yish",
                "Past chastotalar yaxshiroq seziladi — zarbli va bas partiyasi bering",
                "Ko'rish signali: dirijyorlik ishorasi, qo'l belgilari, rangli kartochka",
                "Yuzingiz ko'rinib tursin: ko'pchilik lab harakatidan ham o'qiydi",
                "Eshitish apparati bo'lsa — baland dinamika zarar qiladi, pasaytiring",
              ],
            },
            {
              kind: "matn",
              text: "Ko'rishda qiyinchilik bo'lgan o'quvchi uchun aksincha: musiqa eng kam to'siq bo'lgan fanlardan biri. Asosiy moslashtirish — nota matniga bog'liqlikni kamaytirish.",
            },
            {
              kind: "royxat",
              items: [
                "Eshitib o'rganish usuli: aks-sado, takrorlash, og'zaki ko'rsatma",
                "Nota kerak bo'lsa — yirik shrift yoki relyefli yozuv",
                "Xonadagi joyni o'zgartirmang; cholg'u har doim bir joyda tursin",
                "Og'zaki tasvirlang: «qo'lni ikki parda yuqoriga», «uchinchi torga»",
                "Harakat mashqlarida juft tayinlang va xona bo'ylab yo'lni oldindan ayting",
              ],
            },
            {
              kind: "matn",
              text: "Xulq-atvor va diqqat bilan bog'liq ehtiyojlar musiqa darsida alohida e'tibor talab qiladi: bu yerda shovqin baland, harakat ko'p va kutilmagan tovushlar bo'ladi.",
            },
            {
              kind: "royxat",
              items: [
                "Tartibni oldindan ayting: bugun nima bo'ladi, nechta bo'lak bo'ladi",
                "Kutilmagan baland tovushdan ogohlantiring — sezgirlik keng tarqalgan",
                "Qisqa vazifalar va aniq boshlanish-tugash signali bering",
                "Chiqib turish imkoni bo'lsin: ortiqcha qo'zg'alish paytida tinch burchak yoki koridor",
                "Zarbli cholg'u ko'pincha eng qulay ishtirok shakli bo'ladi — u aniq, ritmli va natijasi darhol",
              ],
            },
            {
              kind: "matn",
              text: "Til to'sig'i ham inklyuziv masala: maktabda o'qitish tilini yangi o'rganayotgan bola bo'lishi mumkin. Musiqa bu yerda eng qulay kirish nuqtasi.",
            },
            {
              kind: "royxat",
              items: [
                "Ohang so'zdan oldin o'rganiladi: avval kuylatib, keyin matnni ochish mumkin",
                "Ko'rsatib bering — tarjima qilishdan tez ishlaydi",
                "Bolaning o'z tilidagi qo'shig'ini sinfga olib kiring: u bir lahzada mutaxassisga aylanadi",
              ],
            },
            {
              kind: "eslatma",
              text: "Umumiy qoida: har bir bola uchun kamida bitta haqiqiy ishtirok shakli bo'lsin. Yonida o'tirish ishtirok emas.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Doirada asosiy zarbni chaling va uning tebranishini kaft bilan his qilib ko'ring. Eshitishda qiyinchilik bo'lgan bola uchun ishtirok aynan shu kanal orqali ochiladi.",
              instrument: "doira",
              exerciseId: "doira-asosiy",
            },
            {
              kind: "mashq",
              text: "Bitta qo'shiq oling va unga to'rt xil ishtirok shaklini yozing: kuylash, zarb, harakat va tebranishni his qilish. Hech bir shakl «tomosha qilish» bo'lmasin.",
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
                  id: "ama7-t1",
                  area: "motivatsiya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Moslashtirish (akkomodatsiya) va o'zgartirish (modifikatsiya) farqi nimada?",
                  options: [
                    { id: "a", text: "Farqi yo'q" },
                    { id: "b", text: "Moslashtirishda maqsad o'zgarmaydi, yo'l o'zgaradi; o'zgartirishda maqsadning o'zi boshqa bo'ladi" },
                    { id: "c", text: "Moslashtirish faqat jismoniy ehtiyojlar uchun" },
                    { id: "d", text: "O'zgartirish faqat baho qo'yishga tegishli" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama7-t2",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Sinfingizga eshitishda qiyinchiligi bor o'quvchi keldi. Birinchi qadam qaysi?",
                  options: [
                    { id: "a", text: "Darhol zarbli cholg'u berish" },
                    { id: "b", text: "Sinf rahbari yoki mutaxassisdan bolaning rejasini so'rash" },
                    { id: "c", text: "Dinamikani balandlatish" },
                    { id: "d", text: "Uni tinglovchi sifatida o'tqazish" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama7-t3",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt:
                    "Eshitishda qiyinchilik bo'lganda qaysi yo'llar ishlaydi?",
                  options: [
                    { id: "a", text: "Tebranishni qo'l bilan his qilish" },
                    { id: "b", text: "Past chastotali partiya berish" },
                    { id: "c", text: "Dinamikani imkon qadar balandlatish" },
                    { id: "d", text: "Ko'rish signali — dirijyorlik ishorasi" },
                  ],
                  correctIds: ["a", "b", "d"],
                  explanation:
                    "Eshitish apparati bo'lgan bolada baland dinamika zarar keltiradi.",
                },
                {
                  id: "ama7-t4",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Ko'rishda qiyinchiligi bor o'quvchi uchun xonada nimaga e'tibor berasiz?",
                  options: [
                    { id: "a", text: "Yorug'likni kuchaytiraman" },
                    { id: "b", text: "Joylashuvni o'zgartirmayman: cholg'u va o'rindiq doim bir joyda tursin" },
                    { id: "c", text: "Uni eshik yoniga o'tqazaman" },
                    { id: "d", text: "Nota matnini ko'proq ishlataman" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama7-t5",
                  area: "motivatsiya",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Diqqat va xulq bilan bog'liq ehtiyoji bor bola darsda qo'zg'aldi. Qaysi yechim to'g'ri?",
                  options: [
                    { id: "a", text: "Sinfdan chiqarib yuborish" },
                    { id: "b", text: "Oldindan kelishilgan tinch joyga chiqib turish imkonini berish" },
                    { id: "c", text: "Baho pasaytirish" },
                    { id: "d", text: "E'tibor bermaslik" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama7-t6",
                  area: "motivatsiya",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Bola butun dars davomida sinfda o'tirdi, lekin hech narsa qilmadi. Bu inklyuziyami?",
                  options: [
                    { id: "a", text: "Ha, u sinfda edi" },
                    { id: "b", text: "Yo'q: yonida o'tirish ishtirok emas" },
                    { id: "c", text: "Ha, agar u tinglagan bo'lsa" },
                    { id: "d", text: "Bu bolaning o'z tanlovi" },
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
                "Inklyuziya — qo'shib qo'yish emas, ishtirok yo'lini ochish",
                "Birinchi qadam — mutaxassisdan bolaning rejasini so'rash",
                "Eshitish: tebranish, past chastota, ko'rish signali; baland dinamika emas",
                "Ko'rish: eshitib o'rganish, o'zgarmas joylashuv, og'zaki tasvir",
                "Xulq va diqqat: oldindan tartib, qisqa vazifa, chiqib turish imkoni",
                "Har bir bola uchun kamida bitta haqiqiy ishtirok shakli",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Yoddagi bitta darsingizda kim chetda qolgan bo'lishi mumkin edi?",
        "«Yonida o'tirish ishtirok emas» qoidasini o'z darsingizda qanday tekshirasiz?",
      ],
    },

    {
      id: "ama-6",
      slug: "toliq-darsni-loyihalash",
      title: "Mavzu 6: To'liq darsni mustaqil loyihalash va o'tkazish",
      summary:
        "Ishlanmadan ijroga: vaqtni boshqarish, rejadan chetlanish va qaror qabul qilish.",
      durationMin: 45,
      bloom: "sintez",
      outcomeId: "on-ama-3",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "To'liq dars — mikro-darsdan uch marta uzun emas, balki sifat jihatidan boshqa vazifa. Unda bosqichlarni ulash, tempni boshqarish va kutilmagan vaziyatga javob berish kerak bo'ladi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Reja darsni boshqaradi, lekin darsni rejaga majburlab bo'lmaydi. Tajribali o'qituvchi rejani bajaradi; yaxshi o'qituvchi esa qachon undan chetga chiqish kerakligini biladi.",
            },
            {
              kind: "royxat",
              items: [
                "Reja A — asosiy ketma-ketlik, vaqt bilan",
                "Reja B — vaqt yetmasa nimani qisqartirasiz (oldindan belgilanadi)",
                "Zaxira — erta tugasa nima qilasiz (qo'shimcha mashq tayyor turadi)",
                "Chetlanish nuqtasi — qiziqarli savol chiqsa, unga qancha vaqt berasiz",
              ],
            },
            {
              kind: "eslatma",
              text: "Reja B ni oldindan yozib qo'yish — tajribasiz o'qituvchining eng foydali odati. Vaqt yetmayotganini darsning o'rtasida payqab, nimani tashlashni o'sha yerda hal qilish qiyin va odatda noto'g'ri chiqadi.",
            },
            {
              kind: "matn",
              text: "Eng ko'p uchraydigan uchta vaziyat va ularga javob:",
            },
            {
              kind: "royxat",
              items: [
                "Vaqt yetmayapti → Reja B: amaliy faoliyatni emas, tushuntirishni qisqartiring",
                "Bolalar tushunmadi → oldinga ketmang; boshqa misol bilan qayta tushuntiring",
                "Dars rejadan erta tugadi → zaxira mashq; «erkin vaqt» berish diqqatni buzadi",
                "Tartib buzildi → ovozni ko'tarmang, aksincha pasaytiring va pauza qiling",
              ],
            },
            {
              kind: "matn",
              text: "Darsdan keyin darhol, xotira yangiligida, uch savolga javob yozing: nima rejalashtirilganidek ketdi, nima ketmadi, keyingi darsda nimani o'zgartiraman. Bir kun o'tsa, tafsilotlar yo'qoladi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "O'z ishlanmangizni oling va unga ikki ustun qo'shing: «Reja B — nimani qisqartiraman» va «Zaxira — erta tugasa nima qilaman». Har bir bosqich uchun to'ldiring.",
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
                  id: "ama3-t1",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Darsda vaqt yetmayapti. Nimani qisqartirish to'g'ri?",
                  options: [
                    { id: "a", text: "Amaliy faoliyatni" },
                    { id: "b", text: "Tushuntirishni" },
                    { id: "c", text: "Yakunlash bosqichini" },
                    { id: "d", text: "Tashkiliy qismni" },
                  ],
                  correctId: "b",
                  explanation:
                    "Musiqa darsida ko'nikma amaliy faoliyatda shakllanadi; tushuntirishni keyingi darsga ko'chirish mumkin.",
                },
                {
                  id: "ama3-t2",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Sinf yangi materialni tushunmadi, lekin rejada keyingi mavzu bor. Nima qilasiz?",
                  options: [
                    { id: "a", text: "Rejaga amal qilib, oldinga ketasiz" },
                    { id: "b", text: "Boshqa misol bilan qayta tushuntirasiz" },
                    { id: "c", text: "Uyga vazifa qilib berasiz" },
                    { id: "d", text: "Darsni tugatasiz" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama3-t3",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Sinfda tartib buzildi. Qaysi javob samaraliroq?",
                  options: [
                    { id: "a", text: "Ovozni ko'tarish" },
                    { id: "b", text: "Ovozni pasaytirish va pauza qilish" },
                    { id: "c", text: "Darsni to'xtatish" },
                    { id: "d", text: "E'tibor bermaslik" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama3-t4",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt: "Dars tahlilini qachon yozish kerak?",
                  options: [
                    { id: "a", text: "Bir hafta o'tgach, xotira tinchlangach" },
                    { id: "b", text: "Darsdan keyin darhol, xotira yangiligida" },
                    { id: "c", text: "Chorak oxirida" },
                    { id: "d", text: "Mentor so'raganda" },
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
                "Reja darsni boshqaradi, lekin darsni rejaga majburlab bo'lmaydi",
                "Reja B va zaxira oldindan yoziladi",
                "Vaqt yetmasa tushuntirish qisqaradi, amaliy faoliyat emas",
                "Tushunilmagan material — oldinga ketish uchun sabab emas",
                "Tahlil darsdan keyin darhol yoziladi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Darsingiz rejadan qaysi joyda chetga chiqdi va siz qanday qaror qabul qildingiz?",
        "Reja B ni oldindan yozish sizga yordam berdimi?",
      ],
    },

    {
      id: "ama-7",
      slug: "mentor-teskari-aloqasi",
      title: "Mavzu 7: Mentor teskari aloqasi bilan ishlash",
      summary:
        "Tanqidni qabul qilish, aniqlashtiruvchi savol berish va fikrni amalga aylantirish.",
      durationMin: 30,
      bloom: "baholash",
      outcomeId: "on-ama-4",
      area: "motivatsiya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Teskari aloqa — amaliyotdagi eng qimmatli, lekin eng noqulay resurs. Uning qiymati eshitilganda emas, qo'llanganda paydo bo'ladi.",
            },
            {
              kind: "eslatma",
              text: "Birinchi reaksiya deyarli har doim himoyalanish bo'ladi — bu normal va deyarli hamma bilan sodir bo'ladi. Mahorat bu reaksiyani yo'qotishda emas, uni payqab, keyin savol berishda.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Teskari aloqani qabul qilishning to'rt qadami bor. Ularni tartib bilan bajarish fikrni bahsga aylantirmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "1. Tinglang va yozib oling — bo'lmang, bahslashmang, izoh bermang",
                "2. Aniqlashtiring — «qaysi lahzada shunday bo'ldi?», «nimani boshqacha qilishim mumkin edi?»",
                "3. Ajrating — qaysi fikr xatti-harakatga, qaysi biri didga tegishli",
                "4. Tanlang — hammasini emas, bir-ikkitasini keyingi darsga vazifa qilib oling",
              ],
            },
            {
              kind: "matn",
              text: "Uchinchi qadam alohida e'tibor talab qiladi. «Ovozingiz past edi, orqa parta eshitmadi» — bu xatti-harakat haqida, uni tuzatish mumkin. «Menga bunday boshlash yoqmaydi» — bu did; uni hisobga olish mumkin, lekin bajarish shart emas.",
            },
            {
              kind: "eslatma",
              text: "Hamma fikrni bir vaqtda bajarishga urinish eng keng tarqalgan xato. Besh ko'rsatma olgan talaba odatda birortasini ham bajarmaydi. Ikkitasini tanlab, keyingi darsda aynan shularni ko'rsating — mentor buni sezadi.",
            },
            {
              kind: "matn",
              text: "Teskari aloqa bir tomonlama emas. Mentordan so'rashga haqlisiz: «sizning o'rningizda men nima qilgan bo'lardim?» yoki «shu holatni o'zingiz qanday hal qilasiz?» Bunday savollar tajribani ochadi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Oxirgi olgan teskari aloqangizni yozing. Har bir fikrni ikki ustunga ajrating: «xatti-harakat» va «did». So'ng xatti-harakat ustunidan ikkitasini tanlab, keyingi dars uchun aniq vazifa qilib yozing.",
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
                  id: "ama4-t1",
                  area: "motivatsiya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Mentor fikr bildirayotganda birinchi navbatda nima qilish kerak?",
                  options: [
                    { id: "a", text: "O'z pozitsiyangizni tushuntirish" },
                    { id: "b", text: "Tinglash va yozib olish" },
                    { id: "c", text: "Rozi bo'lmaslikni bildirish" },
                    { id: "d", text: "Boshqa talabalar bilan solishtirish" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama4-t2",
                  area: "motivatsiya",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Qaysi fikr xatti-harakatga tegishli (ya'ni aniq tuzatiladi)?",
                  options: [
                    { id: "a", text: "«Menga bunday boshlash yoqmaydi»" },
                    { id: "b", text: "«Ovozingiz past edi, orqa parta eshitmadi»" },
                    { id: "c", text: "«Siz o'qituvchilikka mos emassiz»" },
                    { id: "d", text: "«Dars qiziq o'tmadi»" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama4-t3",
                  area: "motivatsiya",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Mentor beshta ko'rsatma berdi. Keyingi darsga nechtasini olish to'g'ri?",
                  options: [
                    { id: "a", text: "Beshalasini" },
                    { id: "b", text: "Bir-ikkitasini, lekin aniq bajarib" },
                    { id: "c", text: "Hech birini" },
                    { id: "d", text: "Eng osonini" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama4-t4",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt: "Aniqlashtiruvchi savollarni tanlang.",
                  options: [
                    { id: "a", text: "«Qaysi lahzada shunday bo'ldi?»" },
                    { id: "b", text: "«Nimani boshqacha qilishim mumkin edi?»" },
                    { id: "c", text: "«Siz ham xato qilasizmi?»" },
                    { id: "d", text: "«Shu holatni o'zingiz qanday hal qilasiz?»" },
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
                "To'rt qadam: tingla → aniqlashtir → ajrat → tanla",
                "Xatti-harakat haqidagi fikr tuzatiladi, did haqidagisi hisobga olinadi",
                "Hamma fikrni birdan bajarishga urinish hech birini bajarmaydi",
                "Mentordan savol so'rash uning tajribasini ochadi",
                "Teskari aloqaning qiymati qo'llanganda paydo bo'ladi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Teskari aloqa eshitganda ichki reaksiyangiz qanday bo'ldi va uni qanday boshqardingiz?",
        "Qaysi ikki ko'rsatmani tanladingiz va nega aynan ularni?",
      ],
    },

    {
      id: "ama-8",
      slug: "sinfdan-tashqari-ish",
      title: "Mavzu 8: Sinfdan tashqari ish — to'garak, bayram va konsert",
      summary:
        "To'garakni tashkil etish, tadbir rejasi, repetitsiya jadvali, sahna tartibi va kutilmagan holatlarga tayyorgarlik.",
      durationMin: 45,
      bloom: "sintez",
      outcomeId: "on-ama-8",
      area: "sahna",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Maktabda musiqa o'qituvchisini ko'pincha darsidan emas, bayramidan taniydilar. Konsert, bitiruv, yangi yil — bular uning imzosi.",
            },
            {
              kind: "matn",
              text: "Shu bilan birga aynan shu ish eng ko'p vaqtni yeydi va eng kam o'rgatiladi. Tadbir tashkil qilish — alohida ko'nikma va uning o'z texnologiyasi bor.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "To'garak darsdan ikki jihati bilan farq qiladi: unga kelish ixtiyoriy va unda daraja aralash bo'ladi. Shuning uchun uni dars kabi qurib bo'lmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Ixtiyoriylik — qiziqish yo'qolsa bola kelmaydi; natija har mashg'ulotda eshitilishi kerak",
                "Aralash daraja — partiyalar turli murakkablikda bo'ladi (farqlashtirish shu yerda hayotiy zarurat)",
                "Aniq maqsad — «to'garakka boramiz» emas, «dekabrda shu dasturni ijro etamiz»",
                "Barqaror vaqt va joy — ko'chib yuradigan to'garak tez tarqaladi",
                "Har bolaning o'z o'rni bo'lsin: yakkaxon bitta, qolganlar «fon» emas",
              ],
            },
            {
              kind: "matn",
              text: "Tadbir rejasi orqaga qarab tuziladi: sana belgilanadi va undan ortga hisoblanadi. Oldinga qarab rejalashtirish deyarli har doim vaqt yetishmasligi bilan tugaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Sana va joyni rasman tasdiqlang; zal va texnikani shu kuniyoq band qiling",
                "Dasturni tuzing: nechta raqam, kim ishtirok etadi, umumiy davomiylik",
                "Repertuarni 6–8 hafta oldin yakunlang — keyin o'zgartirish ishlamaydi",
                "Repetitsiya jadvalini yozing: alohida guruhlar, keyin umumiy, oxirida zalda",
                "Zalda kamida ikki marta repetitsiya qiling — sahna boshqa akustika va boshqa masofa",
                "Fonogramma, mikrofon va kiyim masalasini oxirgi haftaga qoldirmang",
              ],
            },
            {
              kind: "eslatma",
              text: "Dastur davomiyligi bo'yicha oddiy qoida: boshlang'ich sinf tomoshabini uchun 40 daqiqa chegara. Undan uzun konsert oxirida zalda ham, sahnada ham tartib buziladi.",
            },
            {
              kind: "matn",
              text: "Sahna tartibi — tadbirning ko'rinmaydigan qismi va aynan u yerda eng ko'p chalkashlik bo'ladi. Uni oldindan yozib, repetitsiyada sinash kerak.",
            },
            {
              kind: "royxat",
              items: [
                "Kim qayerdan chiqadi va qayerga qaytadi — har raqam uchun alohida yoziladi",
                "Sahna ortida navbat ro'yxati osib qo'yiladi va unda kattalar navbatchi bo'ladi",
                "Cholg'u va rekvizit oldindan joylashtiriladi; sahnada ularni izlash vaqt yo'qotadi",
                "Raqamlar orasidagi pauza 20 soniyadan oshmasin — tomoshabin diqqati shu yerda yo'qoladi",
                "Boshlovchi matni yozilgan va repetitsiya qilingan bo'lsin",
              ],
            },
            {
              kind: "matn",
              text: "Kutilmagan holat bo'lmasligi mumkin emas. Shuning uchun tayyorgarlik «muammo bo'lmaydi» rejasiga emas, «muammo bo'lsa nima qilamiz» rejasiga quriladi.",
            },
            {
              kind: "royxat",
              items: [
                "Fonogramma ishlamasa — jonli jo'r tayyor tursin (shuning uchun tonallik oldindan ma'lum bo'lishi kerak)",
                "Yakkaxon kasal bo'lsa — zaxira ijrochi bilan oldindan mashq qilingan bo'lsin",
                "Mikrofon o'chsa — ijro davom etadi; bolalarga buni oldindan aytib qo'ying",
                "Elektr uzilsa — jo'rsiz ijro etiladigan bitta raqam bo'lsin",
                "Vaqt cho'zilsa — qaysi raqamni tushirib qoldirishni oldindan hal qiling",
              ],
            },
            {
              kind: "eslatma",
              text: "Tadbirdan keyin ikki narsa darhol qilinadi: hisobot yoziladi va bolalarga teskari aloqa beriladi. Bir hafta o'tgach ikkalasi ham ma'nosini yo'qotadi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Bitta maktab tadbirini tanlang va uning rejasini orqaga qarab tuzing: sanadan boshlab 8 hafta ortga — har haftada nima bajarilishi kerak?",
            },
            {
              kind: "mashq",
              text: "Dutorda erkin ijroni mashq qiling va uni zaxira raqam sifatida tayyorlang: elektr uzilsa yoki fonogramma ishlamasa, jo'rsiz ijro etiladigan bitta raqam har doim kerak bo'ladi.",
              instrument: "dutor",
              exerciseId: "d-erkin",
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
                  id: "ama8-t1",
                  area: "sahna",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "To'garak darsdan nimasi bilan tubdan farq qiladi?",
                  options: [
                    { id: "a", text: "Unda baho qo'yilmaydi" },
                    { id: "b", text: "Unga kelish ixtiyoriy va daraja aralash" },
                    { id: "c", text: "U uzunroq bo'ladi" },
                    { id: "d", text: "Unda faqat kuylanadi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama8-t2",
                  area: "sahna",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Tadbir rejasi qanday tuziladi?",
                  options: [
                    { id: "a", text: "Bugundan boshlab oldinga qarab" },
                    { id: "b", text: "Sanadan boshlab orqaga qarab hisoblab" },
                    { id: "c", text: "Repertuar tayyor bo'lganda" },
                    { id: "d", text: "Ma'muriyat aytganda" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama8-t3",
                  area: "sahna",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Boshlang'ich sinf tomoshabini uchun konsert davomiyligi qancha bo'lgani ma'qul?",
                  options: [
                    { id: "a", text: "15 daqiqagacha" },
                    { id: "b", text: "40 daqiqagacha" },
                    { id: "c", text: "1,5 soat" },
                    { id: "d", text: "Chegara yo'q" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama8-t4",
                  area: "sahna",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Konsertda raqamlar orasidagi pauza uzayib ketdi. Nima bo'ladi?",
                  options: [
                    { id: "a", text: "Hech narsa, tomoshabin dam oladi" },
                    { id: "b", text: "Tomoshabin diqqati yo'qoladi va zalda tartib buziladi" },
                    { id: "c", text: "Ijro sifati oshadi" },
                    { id: "d", text: "Bolalar tinchlanadi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama8-t5",
                  area: "sahna",
                  bloom: "sintez",
                  kind: "multiple",
                  prompt:
                    "«Muammo bo'lsa nima qilamiz» rejasiga nimalar kiradi?",
                  options: [
                    { id: "a", text: "Jonli jo'r tayyor turishi" },
                    { id: "b", text: "Zaxira yakkaxon bilan oldindan mashq" },
                    { id: "c", text: "Jo'rsiz ijro etiladigan bitta raqam" },
                    { id: "d", text: "Tadbirni bekor qilish rejasi" },
                  ],
                  correctIds: ["a", "b", "c"],
                },
                {
                  id: "ama8-t6",
                  area: "sahna",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "To'garakda bir necha bola «fon» rolida qoldi va ikki haftadan keyin kelmay qo'ydi. Asosiy sabab nima?",
                  options: [
                    { id: "a", text: "Ular qiziqmaydi" },
                    { id: "b", text: "Har bolaning o'z o'rni bo'lmagan: ixtiyoriy mashg'ulotda natija har safar eshitilishi kerak" },
                    { id: "c", text: "Mashg'ulot vaqti noqulay" },
                    { id: "d", text: "Repertuar qiyin" },
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
                "To'garak ixtiyoriy va aralash darajali: har bolaning o'z o'rni bo'lsin",
                "Reja sanadan orqaga qarab tuziladi; repertuar 6–8 hafta oldin yakunlanadi",
                "Zalda kamida ikki repetitsiya — sahna boshqa akustika",
                "Sahna tartibi yoziladi: kim qayerdan chiqadi, navbat ro'yxati, 20 soniyalik pauza",
                "Zaxira reja majburiy: jonli jo'r, zaxira ijrochi, jo'rsiz raqam",
                "Tadbirdan keyin darhol: hisobot va bolalarga teskari aloqa",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Ko'rgan maktab konsertlaringizda eng ko'p qanday nosozlik bo'lgan?",
        "To'garakda «fon» rolini butunlay yo'qotish uchun repertuarni qanday tanlagan bo'lardingiz?",
      ],
    },

    {
      id: "ama-9",
      slug: "pedagogik-etika",
      title: "Mavzu 9: Pedagogik etika va o'z-o'zini asrash",
      summary:
        "Kasbiy chegaralar, bola bilan muloqot, ijtimoiy tarmoq, konflikt holatlari va kasbiy charchashning oldini olish.",
      durationMin: 40,
      bloom: "baholash",
      outcomeId: "on-ama-10",
      area: "motivatsiya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Musiqa o'qituvchisi bola bilan boshqa fan o'qituvchisidan ko'ra yaqinroq ishlaydi: yakka mashg'ulot, repetitsiya, kech qolgan tayyorgarlik, safar. Bu yaqinlik kasbning kuchi ham, xavfi ham.",
            },
            {
              kind: "matn",
              text: "Shuning uchun chegaralar oldindan belgilanadi — holat yuzaga kelganda emas. Chegarasi aniq o'qituvchi o'zini ham, bolani ham himoya qiladi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Kasbiy chegara — sovuqlik emas. Bu munosabatning qaysi qismi kasbga, qaysi qismi shaxsiy hayotga tegishli ekanini aniq ajratish.",
            },
            {
              kind: "royxat",
              items: [
                "Yakka mashg'ulot ochiq eshik ortida yoki boshqa kattalar bor joyda o'tkaziladi",
                "Bola bilan yolg'iz qolish holatini imkon qadar kamaytiring; bo'lsa — ma'lum qiling",
                "Muloqot rasmiy kanal orqali: maktab guruhi yoki ota-ona orqali, shaxsiy yozishmalar emas",
                "Jismoniy tegish faqat zarurat va ruxsat bilan: cholg'uda qo'l qo'yilishini tuzatish ham oldindan aytiladi",
                "Sovg'a, pul va shaxsiy xizmat masalalarida maktab qoidasiga amal qiling",
                "Ijtimoiy tarmoqda o'quvchi bilan shaxsiy do'stlik — chegara buzilishining eng keng tarqalgan shakli",
              ],
            },
            {
              kind: "eslatma",
              text: "Oddiy mezon: bu harakatni hamkasb, ota-ona va direktor ko'rsa, uni qanday tushuntirgan bo'lardingiz? Tushuntirish noqulay bo'lsa — chegara allaqachon buzilgan.",
            },
            {
              kind: "matn",
              text: "Bolaning sizga ishonib aytgan gapi alohida holat. Musiqa o'qituvchisi ko'pincha shunday ishonchga ega bo'ladi va u bilan nima qilishni bilish kerak.",
            },
            {
              kind: "royxat",
              items: [
                "«Hech kimga aytmayman» deb va'da bermang — bunday va'dani bajarib bo'lmaydi",
                "Tinglang va baholamang; savolni ko'paytirmang",
                "Bolaning hayoti yoki xavfsizligiga tegishli bo'lsa — maktab psixologi yoki mas'ul shaxsga darhol xabar bering",
                "Yozib qo'ying: qachon, nima aytildi, kimga xabar berdingiz",
                "O'zingiz yechishga urinmang: bu sizning vakolatingizdan tashqarida",
              ],
            },
            {
              kind: "matn",
              text: "Konflikt holatlari — ota-ona bilan, hamkasb bilan yoki o'quvchi bilan — har bir o'qituvchida bo'ladi. Ularni kasbiy yo'l bilan hal qilish mumkin.",
            },
            {
              kind: "royxat",
              items: [
                "Hissiyot cho'qqisida qaror qabul qilmang va javob yozmang",
                "Faktni fikrdan ajrating: nima bo'ldi va siz buni qanday talqin qilyapsiz",
                "Guvoh bo'lgan holatni yozib qo'ying — xotira o'zgaradi",
                "Yolg'iz hal qilishga urinmang: mentor yoki ma'muriyatga ayting",
                "Kechirim so'rash kerak bo'lsa — so'rang; bu obro'ni tushirmaydi, ko'taradi",
              ],
            },
            {
              kind: "matn",
              text: "Nihoyat — o'z-o'zini asrash. Musiqa o'qituvchisi ovozi bilan ishlaydi, kuniga bir necha sinf ko'radi, tadbir tashkil qiladi va ko'pincha ortiqcha soat oladi. Kasbiy charchash bu kasbda tez keladi.",
            },
            {
              kind: "royxat",
              items: [
                "Belgilari: darsga borishni istamaslik, bolalardan asabiylashish, hamma narsa befarq tuyulishi, uyqu buzilishi",
                "Ovozga dam berish — jismoniy zarurat; darsdan keyin bir necha daqiqa jimlik",
                "«Yo'q» deyishni o'rganing: har bir tadbirni o'z zimmangizga olish mumkin emas",
                "Ish va uy orasida chegara: kechqurun ota-onalarga javob yozmaslik ham qoida bo'la oladi",
                "Hamkasb bilan gaplashish — eng oson va eng kam ishlatiladigan yordam",
                "O'z musiqangiz uchun vaqt qoldiring: o'qituvchi ijrochiligini yo'qotsa, kasbdan zavq ham yo'qoladi",
              ],
            },
            {
              kind: "eslatma",
              text: "Charchash dangasalik emas va u o'z-o'zidan o'tmaydi. Belgilarni payqash — zaiflik emas, kasbiy ko'nikma.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Quyidagi holatlarni baholang va har biriga javobingizni yozing: (1) o'quvchi sizga ijtimoiy tarmoqda shaxsiy xabar yozdi; (2) ota-ona konsertdan keyin sovg'a berdi; (3) bola sizga uydagi muammosi haqida aytdi va «hech kimga aytmang» dedi.",
            },
            {
              kind: "mashq",
              text: "O'zingiz uchun uchta chegara yozing — ish va shaxsiy hayot orasida. Har biri aniq va tekshiriladigan bo'lsin, masalan: «soat 20:00 dan keyin ish yozishmalariga javob bermayman».",
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
                  id: "ama10-t1",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Yakka mashg'ulot qanday o'tkazilishi kerak?",
                  options: [
                    { id: "a", text: "Yopiq xonada, chalg'imaslik uchun" },
                    { id: "b", text: "Ochiq eshik ortida yoki boshqa kattalar bor joyda" },
                    { id: "c", text: "Dars tugagach, maktab bo'shaganda" },
                    { id: "d", text: "O'quvchining uyida" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama10-t2",
                  area: "motivatsiya",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Chegara buzilgan-buzilmaganini tekshiradigan oddiy mezon qaysi?",
                  options: [
                    { id: "a", text: "Bolaga yoqdimi" },
                    { id: "b", text: "Buni hamkasb, ota-ona va direktor ko'rsa, qanday tushuntirgan bo'lardingiz" },
                    { id: "c", text: "Qoidada yozilganmi" },
                    { id: "d", text: "Boshqalar ham shunday qiladimi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama10-t3",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Bola sizga jiddiy muammo haqida aytdi va «hech kimga aytmang» dedi. Nima qilasiz?",
                  options: [
                    { id: "a", text: "Va'da beraman va o'zim yechishga urinaman" },
                    { id: "b", text: "Va'da bermayman; tinglayman va mas'ul shaxsga xabar beraman" },
                    { id: "c", text: "Sinfga aytaman" },
                    { id: "d", text: "E'tibor bermayman" },
                  ],
                  correctId: "b",
                  explanation:
                    "Sir saqlash va'dasini bajarib bo'lmaydi; bolaning xavfsizligi mas'ul mutaxassis vakolatiga kiradi.",
                },
                {
                  id: "ama10-t4",
                  area: "motivatsiya",
                  bloom: "tahlil",
                  kind: "multiple",
                  prompt: "Kasbiy charchashning belgilari qaysilar?",
                  options: [
                    { id: "a", text: "Darsga borishni istamaslik" },
                    { id: "b", text: "Bolalardan asabiylashish" },
                    { id: "c", text: "Hamma narsa befarq tuyulishi" },
                    { id: "d", text: "Yangi repertuarga qiziqish" },
                  ],
                  correctIds: ["a", "b", "c"],
                },
                {
                  id: "ama10-t5",
                  area: "motivatsiya",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Konflikt holatida birinchi qoida qaysi?",
                  options: [
                    { id: "a", text: "Darhol javob berish" },
                    { id: "b", text: "Hissiyot cho'qqisida qaror qabul qilmaslik" },
                    { id: "c", text: "Ma'muriyatga shikoyat qilish" },
                    { id: "d", text: "E'tibor bermaslik" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama10-t6",
                  area: "motivatsiya",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "«Men hamma tadbirni o'z zimmamga olaman, chunki rad etsam yomon o'qituvchi bo'lib ko'rinaman». Bu fikrni qanday baholaysiz?",
                  options: [
                    { id: "a", text: "To'g'ri: fidoyilik kasbiy sifat" },
                    { id: "b", text: "Xavfli: bu charchashga olib keladigan eng keng tarqalgan yo'l" },
                    { id: "c", text: "Farqi yo'q" },
                    { id: "d", text: "To'g'ri, agar qo'shimcha haq to'lansa" },
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
                "Chegara oldindan belgilanadi; u sovuqlik emas, himoya",
                "Mezon: buni direktor ko'rsa, qanday tushuntirasiz?",
                "«Hech kimga aytmayman» va'dasi berilmaydi; mas'ul shaxsga xabar beriladi",
                "Konfliktda: hissiyot cho'qqisida qaror yo'q, fakt fikrdan ajratiladi, yozib qo'yiladi",
                "Charchash belgilarini bilish — kasbiy ko'nikma; «yo'q» deyish ham shunga kiradi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'zingizga qo'ygan chegaralardan qaysi biri sizga eng qiyin bo'ladi deb o'ylaysiz?",
        "Charchash belgilarini o'zingizda payqasangiz, birinchi navbatda kimga murojaat qilasiz?",
      ],
    },

    {
      id: "ama-10",
      slug: "pedagogik-refleksiya",
      title: "Mavzu 10: Pedagogik refleksiya yozish",
      summary:
        "Hisobot emas, tahlil: dalilga tayangan, sababni izlaydigan va keyingi qadamni belgilaydigan matn.",
      durationMin: 35,
      bloom: "baholash",
      outcomeId: "on-ama-5",
      area: "motivatsiya",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Amaliyot kundaligiga «Dars yaxshi o'tdi, o'quvchilar faol qatnashdi» deb yozish oson. Bunday matn hech narsa bermaydi: uni har qanday dars haqida yozsa bo'ladi.",
            },
            {
              kind: "eslatma",
              text: "D. Schön ikki xil refleksiyani ajratadi: ish ustida (reflection-in-action) — darsning o'zida qaror qabul qilish; ish ustidan keyin (reflection-on-action) — tugagach tahlil qilish. Yozma refleksiya ikkinchisi, lekin u birinchisini o'stiradi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Foydali refleksiya to'rt qismdan iborat. Har birisiz matn hisobotga aylanadi.",
            },
            {
              kind: "royxat",
              items: [
                "1. Tasvir — nima bo'ldi, aniq lahza va aniq dalil bilan (kim nima dedi, qancha vaqt ketdi)",
                "2. Sabab — nega shunday bo'ldi; bahona emas, mexanizm",
                "3. Nazariy bog'lanish — bu qaysi tamoyilga tegishli (ZPD, Blum, konstruktiv moslashuv)",
                "4. Keyingi qadam — aniq, bajariladigan va tekshiriladigan vazifa",
              ],
            },
            {
              kind: "matn",
              text: "Farqni misolda ko'rish oson.",
            },
            {
              kind: "royxat",
              items: [
                "Hisobot: «Ritm mashqi yaxshi o'tdi»",
                "Refleksiya: «Ritm mashqida sinfning yarmi 4/4 naqshni to'g'ri takrorladi, qolgani adashdi. Men naqshni bir marta ko'rsatib, darhol birga bajarishga o'tdim — bo'laklarga ajratmadim. Bu ZPD talabiga zid: topshiriq yordamsiz bajariladigan darajadan yuqori edi. Keyingi darsda naqshni ikki zarbli bo'lakka ajratib, har birini alohida mustahkamlayman.»",
              ],
            },
            {
              kind: "eslatma",
              text: "Muvaffaqiyatni ham tahlil qiling, faqat kamchilikni emas. «Nega ishladi?» degan savol «nega ishlamadi?» dan kam foydali emas — takrorlash uchun sababni bilish kerak.",
            },
            {
              kind: "matn",
              text: "Refleksiya shaxsiy matn, lekin u o'zini ayblash maydoni emas. «Men yomon o'qituvchiman» — bu tahlil emas, bu to'xtash. Tahlil har doim xatti-harakat haqida: nima qildim, nima natija berdi, nimani boshqacha qilaman.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Oxirgi o'tgan yoki kuzatgan darsingizdan bitta aniq lahzani tanlang. Uni to'rt qism bo'yicha yozing: tasvir, sabab, nazariy bog'lanish, keyingi qadam. Matn qisqa bo'lsin — besh-olti jumla yetarli, lekin har bir qism bo'lsin.",
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
                  id: "ama5-t1",
                  area: "motivatsiya",
                  bloom: "baholash",
                  kind: "single",
                  prompt: "Qaysi yozuv refleksiya hisoblanadi?",
                  options: [
                    { id: "a", text: "«Dars rejaga muvofiq o'tdi»" },
                    { id: "b", text: "«O'quvchilar faol qatnashdi»" },
                    { id: "c", text: "«Naqshni bo'laklamaganim uchun sinfning yarmi adashdi; keyingi darsda ikki zarbli bo'lakka ajrataman»" },
                    { id: "d", text: "«Hammasi yaxshi bo'ldi»" },
                  ],
                  correctId: "c",
                },
                {
                  id: "ama5-t2",
                  area: "motivatsiya",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Schön bo'yicha «reflection-in-action» nima?",
                  options: [
                    { id: "a", text: "Darsdan keyin yozma tahlil" },
                    { id: "b", text: "Darsning o'zida, vaziyatga qarab qaror qabul qilish" },
                    { id: "c", text: "Mentor bilan suhbat" },
                    { id: "d", text: "Chorak yakunidagi hisobot" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama5-t3",
                  area: "motivatsiya",
                  bloom: "baholash",
                  kind: "multiple",
                  prompt: "Foydali refleksiyaning qismlarini tanlang.",
                  options: [
                    { id: "a", text: "Aniq dalil bilan tasvir" },
                    { id: "b", text: "Sabab (mexanizm)" },
                    { id: "c", text: "Nazariy tamoyilga bog'lanish" },
                    { id: "d", text: "Aniq keyingi qadam" },
                    { id: "e", text: "O'zini ayblash" },
                  ],
                  correctIds: ["a", "b", "c", "d"],
                },
                {
                  id: "ama5-t4",
                  area: "motivatsiya",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Dars juda yaxshi o'tdi. Refleksiya yozish kerakmi?",
                  options: [
                    { id: "a", text: "Yo'q, muammo bo'lmasa yozilmaydi" },
                    { id: "b", text: "Ha — «nega ishladi?» degan savol takrorlash uchun zarur" },
                    { id: "c", text: "Faqat mentor so'rasa" },
                    { id: "d", text: "Qisqa «yaxshi o'tdi» deb yozish yetarli" },
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
                "Refleksiya hisobot emas: dalil, sabab, nazariya va keyingi qadam",
                "Tahlil xatti-harakat haqida, shaxs haqida emas",
                "Muvaffaqiyatni ham tahlil qilish kerak — takrorlash uchun",
                "Qisqa, lekin to'rt qismli matn uzun hisobotdan foydali",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'z refleksiyangizda qaysi qism eng qiyin yozildi — sabab topishmi yoki keyingi qadammi?",
        "Amaliyot davomida o'zingizda qanday o'zgarishni payqadingiz?",
      ],
    },

    {
      id: "ama-11",
      slug: "amaliyot-portfoliosi",
      title: "Mavzu 11: Amaliyot portfoliosi va yakuniy hisobot",
      summary:
        "Portfolio nima uchun kerak, unga nima kiradi, dalillarni qanday tanlash va hisobotni qanday yozish kerak.",
      durationMin: 40,
      bloom: "sintez",
      outcomeId: "on-ama-11",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Amaliyot tugaydi, taassurot esa bir necha haftada xiralashadi. Portfolio — shu taassurotni dalilga aylantiradigan yagona vosita.",
            },
            {
              kind: "matn",
              text: "U ikki vazifani bajaradi: amaliyotni baholash uchun asos bo'ladi va ishga kirishda sizning o'rniga gapiradi. Ikkinchisi uzoqroq ishlaydi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Portfolio — to'plangan hujjatlar papkasi emas. Uning farqi tanlovda: har bir material biror narsani isbotlash uchun qo'yiladi.",
            },
            {
              kind: "royxat",
              items: [
                "To'plam — nima bo'lsa shuni yig'adi; portfolio — nimani ko'rsatmoqchi bo'lsa shuni tanlaydi",
                "Har bir material yoniga izoh: bu nimani ko'rsatadi va nega shu tanlandi",
                "Kam, lekin kuchli: o'nta tanlangan dalil ellikta tasodifiy fayldan ko'ra ko'proq gapiradi",
                "Rivojlanish ko'rinsin: birinchi va oxirgi dars yonma-yon qo'yilsa, o'sish o'zi ko'rinadi",
              ],
            },
            {
              kind: "eslatma",
              text: "Shu platformaning portfolio bo'limi aynan shu mantiqda ishlaydi: u sizning diagnostika natijangizni, bajarilgan topshiriqlaringizni va ijro yozuvlaringizni bir joyda saqlaydi, PDF sertifikat esa ularni yakunlab beradi.",
            },
            {
              kind: "matn",
              text: "Amaliyot portfoliosining tarkibi odatda quyidagicha bo'ladi. Ro'yxat universitetda o'zgarishi mumkin, lekin mantiq bir xil qoladi.",
            },
            {
              kind: "royxat",
              items: [
                "Amaliyot kundaligi yoki undan tanlangan parchalar",
                "Kuzatilgan darslarning varaqalari va ulardan chiqarilgan xulosalar",
                "O'zingiz o'tkazgan darslarning ishlanmasi — avvalgi va keyingi variantlari bilan",
                "Dars yoki mikro-dars yozuvi (ruxsat bilan) yoki uning tahlili",
                "O'quvchi ishlari namunasi — ismsiz, ruxsat bilan",
                "Mentor va o'z-o'zini baholash varaqalari",
                "Tadbir yoki to'garak materiallari, agar ishtirok etgan bo'lsangiz",
                "Yakuniy refleksiya",
              ],
            },
            {
              kind: "eslatma",
              text: "O'quvchi ishlari va yozuvlarida ruxsat va ismsizlik qoidasi portfolioda ham amal qiladi: portfolio komissiyadan tashqarida ham ko'rilishi mumkin.",
            },
            {
              kind: "matn",
              text: "Dalilni tanlashda eng ko'p qilinadigan xato — faqat muvaffaqiyatni ko'rsatish. Aslida yiqilgan dars va undan chiqarilgan xulosa eng kuchli dalil bo'ladi.",
            },
            {
              kind: "royxat",
              items: [
                "Yaxshi chiqqan darsni ko'rsating — lekin nega yaxshi chiqqanini tushuntiring",
                "Yiqilgan darsni ham ko'rsating va undan keyin nima o'zgarganini qo'shing",
                "Mentor tanqidiga javoban qilgan o'zgartirishingizni ko'rsating",
                "Bitta narsani ikki marta isbotlamang: har dalil o'z vazifasiga ega bo'lsin",
              ],
            },
            {
              kind: "matn",
              text: "Yakuniy hisobot — portfolio ustidagi matn. U sanab o'tmaydi, balki javob beradi. Quyidagi tuzilma deyarli har qanday talabga mos keladi.",
            },
            {
              kind: "royxat",
              items: [
                "Kontekst: qaysi maktab, qaysi sinflar, qancha dars kuzatildi va o'tkazildi",
                "Maqsadlar: amaliyot boshida o'zingizga qanday uchta maqsad qo'ygandingiz",
                "Natija: ularning qaysi biri bajarildi, qaysi biri yo'q va nega",
                "Dalil: har bir xulosa portfoliodagi aniq materialga havola qilsin",
                "Qiyinchilik: eng qiyin holat va siz nima qilganingiz",
                "Keyingi qadam: kasbiy rivojlanish uchun ikki-uchta aniq vazifa",
              ],
            },
            {
              kind: "eslatma",
              text: "Hisobotdagi eng kuchsiz jumlalar — «ko'p narsa o'rgandim» va «amaliyot foydali bo'ldi». Ular hech narsani isbotlamaydi. Ularning o'rniga aniq o'zgarishni yozing: nimani boshqacha qila boshladingiz.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Portfolioga qo'yiladigan beshta dalilni tanlang va har biriga bir jumlalik izoh yozing: bu nimani ko'rsatadi? Kamida bittasi muvaffaqiyatsiz tajriba bo'lsin.",
            },
            {
              kind: "mashq",
              text: "Platformaning «Portfolio» bo'limini oching va hozirgi holatini ko'rib chiqing. Unda nima bor va amaliyot hisobotingizga qaysi material to'g'ridan-to'g'ri o'tadi?",
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
                  id: "ama11-t1",
                  area: "metodika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Portfolio to'plamdan nimasi bilan farq qiladi?",
                  options: [
                    { id: "a", text: "Hajmi kattaroq" },
                    { id: "b", text: "Materiallar tanlanadi va har biri biror narsani isbotlaydi" },
                    { id: "c", text: "U elektron bo'ladi" },
                    { id: "d", text: "Unda faqat yaxshi ishlar bo'ladi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama11-t2",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Portfolioga muvaffaqiyatsiz dars qo'yish kerakmi?",
                  options: [
                    { id: "a", text: "Yo'q, u bahoni tushiradi" },
                    { id: "b", text: "Ha, agar undan keyin nima o'zgargani ko'rsatilsa" },
                    { id: "c", text: "Faqat mentor talab qilsa" },
                    { id: "d", text: "Faqat yozuvsiz, matn bilan" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama11-t3",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Hisobotdagi qaysi jumla eng kuchsiz?",
                  options: [
                    { id: "a", text: "«Mentor tanqididan keyin ko'rsatmalarni ikki marta qisqartirdim»" },
                    { id: "b", text: "«Amaliyot foydali bo'ldi va ko'p narsa o'rgandim»" },
                    { id: "c", text: "«Birinchi darsda vaqtni noto'g'ri taqsimladim: sozlash 15 daqiqa oldi»" },
                    { id: "d", text: "«Oxirgi darsda har bola ovoz chiqardi»" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama11-t4",
                  area: "metodika",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt: "Portfolioga o'quvchi ishini qo'yishda nimaga amal qilinadi?",
                  options: [
                    { id: "a", text: "Ruxsat olinadi" },
                    { id: "b", text: "Ism olib tashlanadi" },
                    { id: "c", text: "To'liq ism-sharif yoziladi" },
                    { id: "d", text: "Portfolio komissiyadan tashqarida ham ko'rilishi hisobga olinadi" },
                  ],
                  correctIds: ["a", "b", "d"],
                },
                {
                  id: "ama11-t5",
                  area: "metodika",
                  bloom: "sintez",
                  kind: "single",
                  prompt:
                    "Hisobotda har bir xulosa nimaga tayanishi kerak?",
                  options: [
                    { id: "a", text: "Umumiy taassurotga" },
                    { id: "b", text: "Portfoliodagi aniq materialga" },
                    { id: "c", text: "Mentor bahosiga" },
                    { id: "d", text: "Nazariy adabiyotga" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ama11-t6",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Ellikta fayl va o'nta tanlangan dalil — qaysi portfolio kuchliroq?",
                  options: [
                    { id: "a", text: "Ellikta: material ko'p" },
                    { id: "b", text: "O'nta: har biri aniq vazifaga ega va o'qiladi" },
                    { id: "c", text: "Farqi yo'q" },
                    { id: "d", text: "Ellikta, agar tartiblangan bo'lsa" },
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
                "Portfolio — tanlov: har dalil biror narsani isbotlaydi",
                "Kam, lekin kuchli; rivojlanish ko'rinsin",
                "Muvaffaqiyatsiz tajriba undan chiqarilgan xulosa bilan birga kuchli dalil",
                "O'quvchi materiallari ruxsat bilan va ismsiz",
                "Hisobot tuzilmasi: kontekst, maqsad, natija, dalil, qiyinchilik, keyingi qadam",
                "«Ko'p narsa o'rgandim» o'rniga aniq o'zgarishni yozing",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Portfolioingizdagi qaysi dalil sizni eng yaxshi ko'rsatadi deb o'ylaysiz?",
        "Amaliyotdan keyin o'zingizga qanday ikkita aniq kasbiy vazifa qo'yasiz?",
      ],
    },
  ],
};
