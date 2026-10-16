import type { Course } from "@/content/lesson-types";

/**
 * Pedagogik amaliyot kursi.
 *
 * Kuzatuvdan mustaqil darsgacha. Kurs `content/mentorship.ts` dagi uch
 * bosqich bilan bir mantiqqa quriladi: avval ustoz bilan, keyin yordam
 * bilan, oxirida mustaqil.
 */

export const AMALIYOT: Course = {
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

    {
      id: "ama-2",
      slug: "mikro-dars-otkazish",
      title: "Mavzu 2: Mikro-dars bo'lagini o'tkazish",
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
      id: "ama-3",
      slug: "toliq-darsni-loyihalash",
      title: "Mavzu 3: To'liq darsni mustaqil loyihalash va o'tkazish",
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
      id: "ama-4",
      slug: "mentor-teskari-aloqasi",
      title: "Mavzu 4: Mentor teskari aloqasi bilan ishlash",
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
      id: "ama-5",
      slug: "pedagogik-refleksiya",
      title: "Mavzu 5: Pedagogik refleksiya yozish",
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
  ],
};
