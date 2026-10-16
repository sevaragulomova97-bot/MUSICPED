import type { Course } from "@/content/lesson-types";

/**
 * Musiqa ta'limi metodikasi kursi.
 *
 * Dars tuzilmasi, o'quv maqsadi, ishlanma, mikro-o'qitish va rubrika bilan
 * baholash — kasbiy faoliyatning metodik yadrosi.
 */

export const METODIKA: Course = {
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
                  prompt: "Musiqa darsidagi faoliyat turlarini tanlang.",
                  options: [
                    { id: "a", text: "Tinglash" },
                    { id: "b", text: "Kuylash" },
                    { id: "c", text: "Ritmik mashqlar" },
                    { id: "d", text: "Ijodiy faoliyat" },
                  ],
                  correctIds: ["a", "b", "c", "d"],
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
      slug: "dars-ishlanmasini-tuzish",
      title: "Mavzu 3: Dars ishlanmasini tuzish",
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
      id: "met-4",
      slug: "mikro-oqitish",
      title: "Mavzu 4: Mikro-o'qitish",
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

    {
      id: "met-5",
      slug: "rubrika-bilan-baholash",
      title: "Mavzu 5: Rubrika bilan baholash",
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
  ],
};
