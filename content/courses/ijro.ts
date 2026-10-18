import type { Course } from "@/content/lesson-types";

/**
 * Ijro amaliyoti kursi.
 *
 * Qo'l qo'yilishi va ovozdan sahna ijrosigacha. Kurs ikki chiziqni birga
 * olib boradi: o'qituvchining o'z ijro mahorati (texnika, mashq metodikasi,
 * ifodalilik) va uning sinf bilan ishlashi (ovoz sozlash, jo'r bo'lish,
 * repertuar tanlash). Darslar virtual cholg'ular va mashqlar banki
 * (`content/practice.ts`) bilan bog'langan.
 */

export const IJRO: Course = {
  slug: "ijro-amaliyoti",
  moduleId: "mod-ijro",
  title: "Ijro amaliyoti",
  description:
    "Cholg'u texnikasi, ovoz va nafas, mashq metodikasi, ifodali ijro, ansambl, jo'r bo'lish va sahna madaniyati.",
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
      slug: "ovoz-apparati",
      title: "Mavzu 2: Ovoz apparati va ovoz gigiyenasi",
      summary:
        "Ovoz qanday hosil bo'ladi, bolalar ovozi diapazoni, mutatsiya davri va ovozni asrash qoidalari.",
      durationMin: 30,
      bloom: "tushunish",
      outcomeId: "on-ijr-6",
      area: "texnika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Musiqa o'qituvchisining asosiy cholg'usi — pianino ham, dutor ham emas, o'z ovozi. U kuniga besh-olti soat gapiradi, ko'rsatib kuylaydi, sinfning shovqinidan baland chiqadi.",
            },
            {
              kind: "matn",
              text: "Ovoz esa cholg'u emas: uni ta'mirlab bo'lmaydi va zaxirasi yo'q. Shuning uchun bu dars mashqdan emas, ovozning qanday ishlashidan boshlanadi — nimani asrash kerakligini bilmasdan asrab bo'lmaydi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Ovoz apparati uchta qismdan iborat va ularning har biri boshqasiga bog'liq. Bitta joydagi siqilish butun tizimga uriladi.",
            },
            {
              kind: "royxat",
              items: [
                "Nafas apparati — o'pka, diafragma, qovurg'alararo mushaklar. Bu tovushning «dvigateli»: havo oqimi bo'lmasa tovush ham yo'q",
                "Tovush manbai — bo'g'iz va ovoz boylamlari. Havo oqimi ularni tebratadi, shundan dastlabki, hali kuchsiz tovush hosil bo'ladi",
                "Rezonatorlar — tomoq, og'iz, burun va peshona bo'shliqlari. Ular tovushni kuchaytiradi va unga tembr beradi",
              ],
            },
            {
              kind: "eslatma",
              text: "Baland ovoz kuch bilan emas, rezonans bilan chiqadi. Qichqirgan odam bo'g'izini zo'riqtiradi, kuylagan odam esa bo'shliqlarni ishlatadi — natijada ikkinchisi balandroq eshitiladi va charchamaydi.",
            },
            {
              kind: "matn",
              text: "Bolalar ovozi kattalarnikidan kichik va nozik. Eng keng tarqalgan pedagogik xato — kattalar diapazonidagi qo'shiqni bolalarga berish. Bola yetolmagan notani qichqirib oladi, bu esa boylamlarni shikastlaydi.",
            },
            {
              kind: "royxat",
              items: [
                "6–7 yosh: taxminan re¹ – si¹. Diapazon tor, ovoz yengil, uzoq kuylay olmaydi",
                "8–10 yosh: taxminan do¹ – re². Ovoz mustahkamlanadi, ikki qismli kuylash boshlanadi",
                "11–12 yosh: taxminan si – mi². Tembr boyiydi, nafas uzayadi",
                "13–15 yosh: mutatsiya (ovoz sinishi) davri. O'g'il bolalarda keskin, qizlarda yumshoqroq kechadi",
              ],
            },
            {
              kind: "nota",
              caption: "8–10 yosh guruhining qulay diapazoni: do¹ dan re² gacha",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4"], duration: "w", lyric: "eng past" },
                  { keys: ["d/5"], duration: "w", lyric: "eng baland" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Mutatsiya davrida ovoz nazoratdan chiqadi: tovush sinadi, diapazon torayadi, bola o'z ovozidan uyaladi. Bu kasallik emas, o'sish — lekin shu davrda ovozga tushadigan yuk eng xavflisi.",
            },
            {
              kind: "royxat",
              items: [
                "Mutatsiya davrida kuylashni butunlay taqiqlash shart emas — tor diapazonda, past dinamikada davom ettiriladi",
                "Bolani «baland ol» deb majburlash mumkin emas: aynan shu davrda baland tovush shikast yetkazadi",
                "Ovozi singan bolaga sinfda boshqa vazifa bering — jo'r, ritm guruhi, dirijyorlik. Jarayondan chiqarib yubormang",
              ],
            },
            {
              kind: "matn",
              text: "Ovoz gigiyenasi — o'qituvchining o'z ovozi uchun ham, sinf uchun ham bir xil amal qiladigan oddiy qoidalar to'plami.",
            },
            {
              kind: "royxat",
              items: [
                "Sovuq ovoz bilan baland kuylamang — avval sozlash mashqlari",
                "Shamollaganda kuylamang: yallig'langan boylam tez shikastlanadi",
                "Qichqirmang. Sinfni jim qildirish uchun ovozni ko'tarish emas, pasaytirish samaraliroq",
                "Kun davomida iliq suv iching; quruq havo boylamlarni quritadi",
                "Har 40–45 daqiqalik darsdan keyin ovozga bir necha daqiqa dam bering",
                "Ovoz xirillashi ikki haftadan oshsa — fonopedga murojaat qiling",
              ],
            },
            {
              kind: "eslatma",
              text: "Bu qoidalarni o'quvchilarga ham aytib boring. Ovozni asrashni o'rgatish — musiqa darsining ko'rinmaydigan, lekin umrbod qoladigan natijasi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Nayda do major gammasini chaling va har bir tovushni o'z ovozingiz bilan ham takrorlang. Qaysi tovushdan boshlab zo'riqish boshlanadi — o'z diapazoningizning chegarasi shu yerda.",
              instrument: "nay",
              exerciseId: "n-gamma",
            },
            {
              kind: "mashq",
              text: "Pianinoda do¹ va re² tovushlarini chaling. Shu ikki tovush orasidagi masofa — 8–10 yoshli sinfning ish maydoni. Yoddagi bolalar qo'shig'ini eslang: u shu chegaraga sig'adimi?",
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
                  id: "ijr6-t1",
                  area: "texnika",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Ovoz apparatining qaysi qismi tovushga tembr beradi?",
                  options: [
                    { id: "a", text: "Diafragma" },
                    { id: "b", text: "Ovoz boylamlari" },
                    { id: "c", text: "Rezonator bo'shliqlari" },
                    { id: "d", text: "O'pka" },
                  ],
                  correctId: "c",
                  explanation:
                    "Boylamlar dastlabki tovushni hosil qiladi, rezonatorlar esa uni kuchaytirib, tembrini shakllantiradi.",
                },
                {
                  id: "ijr6-t2",
                  area: "texnika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "8–10 yoshli sinf uchun qo'shiq tanlayapsiz. Qaysi diapazon xavfsiz?",
                  options: [
                    { id: "a", text: "sol – do³" },
                    { id: "b", text: "do¹ – re²" },
                    { id: "c", text: "fa – lya²" },
                    { id: "d", text: "Diapazonning ahamiyati yo'q" },
                  ],
                  correctId: "b",
                  explanation:
                    "Bu yoshdagi bolalarning qulay diapazoni taxminan do¹ dan re² gacha. Undan tashqarida bola qichqirishga o'tadi.",
                },
                {
                  id: "ijr6-t3",
                  area: "texnika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Sinfdagi o'g'il bolaning ovozi sinib turibdi va u kuylashdan uyaladi. Eng to'g'ri yo'l qaysi?",
                  options: [
                    { id: "a", text: "Baland notalarni mashq qildirish — ovoz mustahkamlanadi" },
                    { id: "b", text: "Kuylashdan butunlay chetlatish" },
                    { id: "c", text: "Tor diapazonda, past dinamikada kuylatish va unga jo'r yoki ritm vazifasini ham berish" },
                    { id: "d", text: "Baland kuylashga majburlash, o'rganib ketadi" },
                  ],
                  correctId: "c",
                  explanation:
                    "Mutatsiya davrida yuk kamaytiriladi, lekin bola jarayondan chiqarilmaydi — aks holda musiqadan butunlay uzoqlashadi.",
                },
                {
                  id: "ijr6-t4",
                  area: "texnika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Nega baland tovushni qichqirib emas, rezonans bilan olish kerak?",
                  options: [
                    { id: "a", text: "Qichqirish chiroyli ko'rinmaydi" },
                    { id: "b", text: "Qichqirganda bo'g'iz zo'riqadi va boylamlar shikastlanadi" },
                    { id: "c", text: "Qichqirgan tovush pastroq eshitiladi" },
                    { id: "d", text: "Rezonans faqat professional xonandalarga tegishli" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr6-t5",
                  area: "texnika",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt: "Ovoz gigiyenasi qoidalaridan qaysilari to'g'ri?",
                  options: [
                    { id: "a", text: "Shamollaganda kuylamaslik" },
                    { id: "b", text: "Sovuq ovoz bilan darhol baland kuylash" },
                    { id: "c", text: "Kun davomida iliq suv ichish" },
                    { id: "d", text: "Sinfni jim qildirish uchun ovozni pasaytirish" },
                  ],
                  correctIds: ["a", "c", "d"],
                  explanation:
                    "Sozlanmagan ovoz bilan baland kuylash — boylam shikastining eng keng tarqalgan sababi.",
                },
                {
                  id: "ijr6-t6",
                  area: "texnika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "O'qituvchining ovozi uch hafta davomida xirillab turibdi. Bu nimani bildiradi?",
                  options: [
                    { id: "a", text: "Oddiy charchoq, o'zi o'tib ketadi" },
                    { id: "b", text: "Ovoz mustahkamlanmoqda" },
                    { id: "c", text: "Mutaxassisga murojaat qilish kerak bo'lgan belgi" },
                    { id: "d", text: "Ko'proq kuylash kerak" },
                  ],
                  correctId: "c",
                  explanation:
                    "Ikki haftadan ortiq davom etgan xirillash — boylamdagi o'zgarishning belgisi; o'z-o'zini davolash emas, ko'rik kerak.",
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
                "Ovoz apparati uch qism: nafas, boylamlar, rezonatorlar",
                "Baland tovush kuch bilan emas, rezonans bilan olinadi",
                "Har yosh guruhining o'z diapazoni bor; undan tashqarida bola qichqiradi",
                "Mutatsiya davrida yuk kamaytiriladi, lekin bola jarayondan chiqarilmaydi",
                "Ovoz gigiyenasi — o'qituvchining kasbiy xavfsizlik texnikasi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'z ovozingizda charchoqni qaysi belgidan bilasiz?",
        "Sinfda ovozi singan bolaga qanday vazifa bersangiz, u o'zini ortiqcha his qilmaydi?",
      ],
    },

    {
      id: "ijr-3",
      slug: "nafas-va-ovoz-sozlash",
      title: "Mavzu 3: Nafas va ovoz sozlash",
      summary:
        "Diafragmal nafas, ovoz sozlashning ketma-ketligi va uni sinf bilan o'tkazish qoidalari.",
      durationMin: 35,
      bloom: "qollash",
      outcomeId: "on-ijr-7",
      area: "texnika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Ovoz sozlash — darsning marosimi emas, xavfsizlik qoidasi. Sovuq mushak cho'zilganda yirtiladi; sozlanmagan ovoz baland kuylaganda shikastlanadi.",
            },
            {
              kind: "matn",
              text: "Shu bilan birga sozlash — sinfni darsga kiritishning eng tez yo'li. Besh daqiqalik birgalikdagi nafas va tovush bolalarni tanaffusdan musiqaga olib o'tadi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Kuylashdagi nafas kundalik nafasdan ikki narsa bilan farq qiladi: havo tez olinadi, lekin juda sekin va teng sarflanadi.",
            },
            {
              kind: "royxat",
              items: [
                "Olish — og'iz orqali, tez va shovqinsiz. Yelka ko'tarilmaydi, bel va qovurg'alar yon tomonga kengayadi",
                "Ushlab turish — bir lahza. Bu nafasni «qo'lga olish» pallasi, zo'riqish emas",
                "Chiqarish — teng va uzoq. Aynan shu bosqich tovush uzunligini va tekisligini belgilaydi",
              ],
            },
            {
              kind: "eslatma",
              text: "Tekshirishning eng oddiy usuli: kaftni qorin ustiga qo'ying. Nafas olganda kaft oldinga siljisa — diafragma ishlayapti. Yelka ko'tarilsa — nafas yuzaki, tovush ham siqilgan chiqadi.",
            },
            {
              kind: "matn",
              text: "Ovoz sozlash tartibi tasodifiy emas: har bir qadam keyingisiga tayyorlaydi. Tanadan boshlanadi, tovushga o'tadi, diapazonni asta kengaytiradi va matn bilan tugaydi.",
            },
            {
              kind: "royxat",
              items: [
                "1. Tanani bo'shashtirish — yelka aylanasi, bo'yin burish, esnash. 30 soniya",
                "2. Nafas mashqi — «sh» tovushi bilan teng chiqarish, 4 hisobda olish, 8 hisobda chiqarish",
                "3. Yopiq og'izda «m» — bo'g'iz ochilmaydi, tovush peshonada tebranadi. Rezonatorlarni uyg'otadi",
                "4. Bitta tovushda «mi–me–ma–mo–mu» — unlilarning bir xil joyda yangrashi",
                "5. Beshlik ichida gamma — do–re–mi–fa–sol–fa–mi–re–do, yarim tondan ko'tarib takrorlanadi",
                "6. Sakrash mashqi — do–mi–sol–mi–do, intonatsiya aniqligi uchun",
                "7. Matnli kichik fraza — qo'shiqning bir satri, allaqachon isingan ovozda",
              ],
            },
            {
              kind: "nota",
              caption: "Beshlik ichidagi sozlash mashqi — har safar yarim ton yuqoridan takrorlanadi",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4"], duration: "q", lyric: "do" },
                  { keys: ["d/4"], duration: "q", lyric: "re" },
                  { keys: ["e/4"], duration: "q", lyric: "mi" },
                  { keys: ["f/4"], duration: "q", lyric: "fa" },
                  { keys: ["g/4"], duration: "h", lyric: "sol" },
                  { keys: ["f/4"], duration: "q", lyric: "fa" },
                  { keys: ["e/4"], duration: "q", lyric: "mi" },
                  { keys: ["d/4"], duration: "q", lyric: "re" },
                  { keys: ["c/4"], duration: "q", lyric: "do" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Sinf bilan o'tkazishda mashqning o'zi emas, uni boshqarish usuli hal qiladi. Bolalar ko'rsatilgan narsani takrorlaydi — tushuntirilganini emas.",
            },
            {
              kind: "royxat",
              items: [
                "Avval o'zingiz kuylab ko'rsating, keyin birga, so'ng ular yakka",
                "Qulay, o'rta tovushdan boshlang — pastdan ham, balanddan ham emas",
                "Diapazonni yarim tondan ko'taring va pastga ham tushiring; faqat yuqoriga ketish charchatadi",
                "Jami 5–7 daqiqa. Undan uzun sozlash darsni yeb qo'yadi va ovozni toliqtiradi",
                "Dinamika past: sozlash baland kuylash emas, tovushni topish",
                "Har mashqda bitta vazifa bo'lsin — bir vaqtda ham nafas, ham intonatsiya, ham diksiya tuzatilmaydi",
              ],
            },
            {
              kind: "eslatma",
              text: "Jarayonni kuzatish uchun bitta savol yetadi: bolalarning yelkasi ko'tarilyaptimi? Ko'tarilsa — temp tez, mashq baland yoki nafas tushuntirilmagan.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Pianinoda do–re–mi–fa–sol ketma-ketligini chaling va har safar yarim ton yuqoridan takrorlang. Har takrorda o'z ovozingiz bilan birga kuylang — qaysi balandlikda nafas yetmay qolganini belgilang.",
              instrument: "pianino",
              exerciseId: "p-do-re-mi",
            },
            {
              kind: "mashq",
              text: "Nayda lirik ohangni chaling. Nay ham xuddi ovoz kabi nafasga bog'liq: frazani bo'lmasdan chalib ko'ring va nafasni qayerda olish kerakligini aniqlang.",
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
                  id: "ijr7-t1",
                  area: "texnika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Kuylashdagi to'g'ri nafasning belgisi qaysi?",
                  options: [
                    { id: "a", text: "Yelka yuqoriga ko'tariladi" },
                    { id: "b", text: "Bel va qovurg'alar yon tomonga kengayadi" },
                    { id: "c", text: "Qorin ichkariga tortiladi" },
                    { id: "d", text: "Nafas burun orqali sekin olinadi" },
                  ],
                  correctId: "b",
                  explanation:
                    "Diafragmal nafasda havo pastga tushadi va qovurg'alar yon tomonga kengayadi; yelkaning ko'tarilishi — yuzaki nafas belgisi.",
                },
                {
                  id: "ijr7-t2",
                  area: "texnika",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Ovoz sozlash odatda qancha vaqt olishi kerak?",
                  options: [
                    { id: "a", text: "1–2 daqiqa" },
                    { id: "b", text: "5–7 daqiqa" },
                    { id: "c", text: "15–20 daqiqa" },
                    { id: "d", text: "Butun dars davomida" },
                  ],
                  correctId: "b",
                  explanation:
                    "Qisqa sozlash ovozni ochadi; haddan tashqari uzun sozlash uni toliqtiradi va darsga vaqt qoldirmaydi.",
                },
                {
                  id: "ijr7-t3",
                  area: "texnika",
                  bloom: "qollash",
                  kind: "single",
                  prompt: "Sozlashni qaysi tovushdan boshlash to'g'ri?",
                  options: [
                    { id: "a", text: "Diapazonning eng pastidan" },
                    { id: "b", text: "Diapazonning eng balandidan" },
                    { id: "c", text: "Qulay o'rta tovushdan" },
                    { id: "d", text: "Qo'shiqning eng baland notasidan" },
                  ],
                  correctId: "c",
                  explanation:
                    "O'rta registr eng kam zo'riqish talab qiladi; chegaralar isinganidan keyin ochiladi.",
                },
                {
                  id: "ijr7-t4",
                  area: "texnika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Yopiq og'izda «m» tovushi bilan kuylash nima uchun kerak?",
                  options: [
                    { id: "a", text: "Diksiyani mashq qilish uchun" },
                    { id: "b", text: "Rezonator bo'shliqlarini uyg'otish uchun" },
                    { id: "c", text: "Diapazonni kengaytirish uchun" },
                    { id: "d", text: "Tempni mustahkamlash uchun" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr7-t5",
                  area: "texnika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Sozlash paytida bolalarning yelkasi ko'tarilyapti. Bu nimani ko'rsatadi?",
                  options: [
                    { id: "a", text: "Mashq to'g'ri bajarilmoqda" },
                    { id: "b", text: "Nafas yuzaki; mashq baland yoki temp tez" },
                    { id: "c", text: "Bolalar charchagan, darsni tugatish kerak" },
                    { id: "d", text: "Diapazonni yanada kengaytirish kerak" },
                  ],
                  correctId: "b",
                  explanation:
                    "Yelkaning ko'tarilishi — klavikulyar (yuzaki) nafas belgisi. Tovushni pasaytirish va tempni sekinlashtirish kerak.",
                },
                {
                  id: "ijr7-t6",
                  area: "texnika",
                  bloom: "qollash",
                  kind: "multiple",
                  prompt: "Sinf bilan sozlash o'tkazishda qaysi qoidalar to'g'ri?",
                  options: [
                    { id: "a", text: "Avval o'zi kuylab ko'rsatish" },
                    { id: "b", text: "Har mashqda bitta aniq vazifa qo'yish" },
                    { id: "c", text: "Diapazonni faqat yuqoriga ko'tarib borish" },
                    { id: "d", text: "Past dinamikada ishlash" },
                  ],
                  correctIds: ["a", "b", "d"],
                  explanation:
                    "Faqat yuqoriga ketish ovozni toliqtiradi — diapazon ikki tomonga ham ochiladi.",
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
                "Kuylash nafasi: tez olish, teng va uzoq chiqarish",
                "Yelka ko'tarilsa — nafas yuzaki",
                "Sozlash tartibi: tana → nafas → «m» → unlilar → beshlik → sakrash → matn",
                "5–7 daqiqa, past dinamikada, o'rta tovushdan boshlab",
                "Har mashqda bitta vazifa; ko'rsatish tushuntirishdan kuchli",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'z sozlash mashqlaringizdan qaysi biri sinfda eng tez ishladi va nega?",
        "Nafasni tushuntirish uchun bolalarga qanday obraz (masalan, shamni o'chirmaslik) ishlatgan bo'lardingiz?",
      ],
    },

    {
      id: "ijr-4",
      slug: "ritmik-naqshlar",
      title: "Mavzu 4: Ritmik naqsh va usul",
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
      id: "ijr-5",
      slug: "mashq-metodikasi",
      title: "Mavzu 5: Mashq metodikasi — asarni o'rganish",
      summary:
        "Qiyin joyni aniqlash, sababini tahlil qilish, sekin tempdan tezlashtirish va mashq vaqtini taqsimlash.",
      durationMin: 40,
      bloom: "tahlil",
      outcomeId: "on-ijr-8",
      area: "texnika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "«Ko'p mashq qilish» — reja emas. Asarni boshidan oxirigacha qirq daqiqa haydab chiqqan talaba, aslida, o'zining xatolarini qirq marta mustahkamlaydi.",
            },
            {
              kind: "matn",
              text: "Farq miqdorda emas, tashxisda: qayerda qoqilayotganini va nega qoqilayotganini bilgan odam yigirma daqiqada ko'proq ish bitiradi. Bu dars — aynan shu tashxis haqida.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Asarni boshidan chalish — tekshiruv, mashq emas. Mashq boshlanishidan oldin asar bo'laklarga ajratiladi: fraza, takt guruhi yoki hatto bitta o'tish joyi.",
            },
            {
              kind: "royxat",
              items: [
                "Bo'lak chegarasi musiqiy bo'lsin: fraza boshi va oxiri, takt chizig'i emas",
                "Bo'lak kichik bo'lsin — 2–4 takt. Katta bo'lak ichida xato yashirinib qoladi",
                "Har bo'lakning o'z vazifasi bo'lsin: bu yerda applikatura, u yerda ritm",
              ],
            },
            {
              kind: "matn",
              text: "Qiyin joyni topish uchun o'zingizni kuzating. Uchta belgi deyarli har doim ishlaydi: qayerda to'xtaysiz, qayerda sekinlashasiz, qayerda qo'l siqiladi.",
            },
            {
              kind: "eslatma",
              text: "Topilgan joyni nota ustiga belgilab qo'ying. Yodda saqlangan tashxis ertaga yo'qoladi; qalam bilan qo'yilgan belgi esa keyingi mashqni boshlab beradi.",
            },
            {
              kind: "matn",
              text: "Keyingi savol — nega. «Qiyin» degan javob yetarli emas, chunki undan hech qanday harakat kelib chiqmaydi. Sabablar ro'yxati esa darhol nima qilishni aytadi.",
            },
            {
              kind: "royxat",
              items: [
                "Applikatura noto'g'ri yoki har safar boshqacha — barmoq tartibini yozib qo'ying va o'zgartirmang",
                "Sakrash tayyorlanmagan — qo'lni oldindan siljitishni alohida mashq qiling",
                "Ritm aniq emas — notalarsiz, faqat qarsak bilan bajaring",
                "Nota o'qilmagan — sekin tempda baland ovozda nota nomlarini ayting",
                "Qo'l siqilgan — bo'lakni ikki barobar sekin, kuchsiz dinamikada chaling",
                "Quloq bilmaydi — avval ohangni kuylang, keyin chaling",
              ],
            },
            {
              kind: "matn",
              text: "Sekin temp — jazo emas, o'lchov asbobi. Boshlang'ich tempni shunday tanlang: shu tempda bo'lakni ketma-ket uch marta xatosiz chalasiz. Uch martadan kam bo'lsa — temp hali tez.",
            },
            {
              kind: "royxat",
              items: [
                "Ketma-ket uch marta toza ijro — tezlashtirish uchun ruxsat",
                "Har qadamda metronomni 4–6 zarbga oshiring, ko'p emas",
                "Xato qaytsa — avvalgi tempga tushing, boshidan boshlamang",
                "Yakuniy tempdan bir oz tezroq ham mashq qiling: sahnada temp odatda o'zidan tez ketadi",
              ],
            },
            {
              kind: "matn",
              text: "Yod olish bir emas, to'rt xil xotiraga tayanadi. Ularning faqat bittasiga ishongan ijrochi sahnada adashganda qaytib kira olmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Eshituv xotirasi — ohangni ichingizda eshitasiz",
                "Motor xotirasi — qo'l harakatni o'zi biladi",
                "Ko'rish xotirasi — nota sahifasini ko'z oldingizga keltirasiz",
                "Tahliliy xotira — qaysi akkord, qaysi fraza, qaysi tonallik ekanini bilasiz",
              ],
            },
            {
              kind: "eslatma",
              text: "Sahnadagi «unutib qo'yish» ko'pincha motor xotiraning uzilishi bo'ladi. Tahliliy xotira esa — yagona zaxira yo'l: asarni bo'laklab bilgan odam istalgan joydan davom ettira oladi.",
            },
            {
              kind: "matn",
              text: "Nihoyat — vaqt. Bir soatlik uzluksiz mashq uch marta yigirma daqiqalikdan samarasizroq: diqqat yigirma daqiqadan keyin pasayadi, dam esa o'rganilganni mustahkamlaydi.",
            },
            {
              kind: "royxat",
              items: [
                "25 daqiqalik mashqning namunaviy taqsimoti:",
                "5 daqiqa — isinish va nafas, cholg'u bilan tanishuv",
                "10 daqiqa — eng qiyin bo'lak, sekin tempda",
                "5 daqiqa — qiyin bo'lakni oldingi va keyingi fraza bilan ulash",
                "5 daqiqa — to'liq ijro, to'xtamasdan, xatoni tuzatmasdan",
              ],
            },
            {
              kind: "eslatma",
              text: "Oxirgi besh daqiqada to'xtamaslik muhim: sahnada xatodan keyin to'xtash odati aynan mashq paytida shakllanadi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Pianinoda oddiy kuyni chaling va qayerda to'xtaganingizni belgilang. Shu ikki taktni alohida, ikki barobar sekin tempda uch marta xatosiz chaling, keyingina tezlashtiring.",
              instrument: "pianino",
              exerciseId: "p-oddiy-kuy",
            },
            {
              kind: "mashq",
              text: "Dutorda barmoq mashqini bajaring, lekin avval barmoq tartibini ovoz chiqarib ayting. Applikaturani har safar bir xil saqlang — aynan shu o'zgarmaslik tezlikni beradi.",
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
                  id: "ijr8-t1",
                  area: "texnika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Asarni har safar boshidan oxirigacha chalish nega samarasiz?",
                  options: [
                    { id: "a", text: "Ko'p vaqt oladi" },
                    { id: "b", text: "Xato har safar takrorlanib, mustahkamlanadi" },
                    { id: "c", text: "Cholg'u tez eskiradi" },
                    { id: "d", text: "Temp o'zgarib ketadi" },
                  ],
                  correctId: "b",
                  explanation:
                    "Takrorlash o'rganilganni mustahkamlaydi — to'g'risini ham, xatosini ham. Shuning uchun avval tuzatiladi, keyin takrorlanadi.",
                },
                {
                  id: "ijr8-t2",
                  area: "texnika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Boshlang'ich mashq tempini qanday tanlaysiz?",
                  options: [
                    { id: "a", text: "Asar tempidan biroz sekinroq" },
                    { id: "b", text: "Bo'lakni ketma-ket uch marta xatosiz chala oladigan tempda" },
                    { id: "c", text: "Metronomning eng past raqamida" },
                    { id: "d", text: "O'zingizga yoqqan tempda" },
                  ],
                  correctId: "b",
                  explanation:
                    "Toza ijroning uch marta takrorlanishi — tempning to'g'riligini ko'rsatadigan yagona ob'ektiv belgi.",
                },
                {
                  id: "ijr8-t3",
                  area: "texnika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Talaba bitta o'tish joyida har safar qoqiladi va har safar boshqa barmoq bilan chaladi. Sabab nima?",
                  options: [
                    { id: "a", text: "Ritm aniq emas" },
                    { id: "b", text: "Applikatura belgilanmagan" },
                    { id: "c", text: "Quloq ohangni bilmaydi" },
                    { id: "d", text: "Temp juda sekin" },
                  ],
                  correctId: "b",
                  explanation:
                    "O'zgarib turadigan barmoq tartibi motor xotirani shakllantirmaydi — avval applikatura yoziladi, keyin mashq qilinadi.",
                },
                {
                  id: "ijr8-t4",
                  area: "texnika",
                  bloom: "tushunish",
                  kind: "single",
                  prompt:
                    "Sahnada asarni «unutib qo'yish» ko'pincha qaysi xotira turining uzilishi bo'ladi?",
                  options: [
                    { id: "a", text: "Tahliliy xotira" },
                    { id: "b", text: "Motor xotira" },
                    { id: "c", text: "Eshituv xotirasi" },
                    { id: "d", text: "Ko'rish xotirasi" },
                  ],
                  correctId: "b",
                  explanation:
                    "Faqat qo'l harakatiga ishongan ijro bir lahzalik chalg'ishda uziladi; tahliliy xotira esa istalgan joydan davom ettirish imkonini beradi.",
                },
                {
                  id: "ijr8-t5",
                  area: "texnika",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Bir soat vaqtingiz bor. Qaysi taqsimot samaraliroq?",
                  options: [
                    { id: "a", text: "Bir soat uzluksiz mashq" },
                    { id: "b", text: "Uch marta 20 daqiqa, orasida dam" },
                    { id: "c", text: "Oxirgi kuni 3 soat" },
                    { id: "d", text: "Har kuni 5 daqiqa" },
                  ],
                  correctId: "b",
                  explanation:
                    "Taqsimlangan mashq diqqatni saqlaydi va dam paytida o'rganilgan material mustahkamlanadi.",
                },
                {
                  id: "ijr8-t6",
                  area: "texnika",
                  bloom: "tahlil",
                  kind: "multiple",
                  prompt:
                    "Qiyin bo'lakni topish uchun qaysi belgilarga qaraysiz?",
                  options: [
                    { id: "a", text: "Qayerda to'xtab qolasiz" },
                    { id: "b", text: "Qayerda beixtiyor sekinlashasiz" },
                    { id: "c", text: "Qayerda qo'l siqiladi" },
                    { id: "d", text: "Qayerda asar baland yangraydi" },
                  ],
                  correctIds: ["a", "b", "c"],
                  explanation:
                    "Dinamikaning balandligi qiyinlik belgisi emas — to'xtash, sekinlashish va siqilish esa aynan shu.",
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
                "Mashq tashxisdan boshlanadi: qayerda va nega qoqilasiz",
                "Bo'lak kichik bo'lsin — 2–4 takt, chegarasi musiqiy",
                "Sekin temp — o'lchov asbobi: uch marta toza ijro tezlashtirish uchun ruxsat",
                "To'rt xil xotira birga ishlaydi; tahliliy xotira — zaxira yo'l",
                "Taqsimlangan mashq uzluksizidan samarali; oxirgi takrorlash to'xtamasdan",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Oxirgi mashqingizda qancha vaqt tashxisga, qancha vaqt takrorlashga ketdi?",
        "O'quvchiga «ko'proq mashq qil» deyish o'rniga qanday aniq ko'rsatma bergan bo'lardingiz?",
      ],
    },

    {
      id: "ijr-6",
      slug: "ifodali-ijro",
      title: "Mavzu 6: Ifodali ijro — fraza, dinamika, artikulyatsiya",
      summary:
        "Ohangni frazalarga ajratish, kulminatsiyani topish, dinamik reja tuzish va artikulyatsiya turlari.",
      durationMin: 35,
      bloom: "qollash",
      outcomeId: "on-ijr-9",
      area: "sahna",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Hamma nota to'g'ri, temp barqaror, xato yo'q — lekin tinglovchi zerikadi. Bunday ijro harflarni to'g'ri aytib, so'z hosil qilmagan o'qishga o'xshaydi.",
            },
            {
              kind: "matn",
              text: "Harflarni so'zga aylantiradigan narsa — fraza. Musiqada ham xuddi nutqdagidek jumla, urg'u, nafas va tinish belgilari bor; ularsiz matn o'qiladi, lekin tushunilmaydi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Fraza — musiqiy jumla, ya'ni bir nafasda aytiladigan bo'lak. Bolalar qo'shiqlarida u odatda ikki yoki to'rt takt bo'ladi va matn satriga to'g'ri keladi.",
            },
            {
              kind: "royxat",
              items: [
                "Fraza chegarasini topishning eng oson yo'li — matnni ovoz chiqarib o'qish: nafas olgan joyingiz fraza oxiri",
                "Cholg'u asarida chegara ko'pincha uzun nota, pauza yoki ohang yo'nalishining o'zgarishi bilan belgilanadi",
                "Frazani takt chizig'i bilan adashtirmang: takt — o'lchov birligi, fraza — ma'no birligi",
              ],
            },
            {
              kind: "matn",
              text: "Har bir frazada bitta cho'qqi — kulminatsiya bor. Ohang unga qarab o'sadi va undan keyin pasayadi. Kulminatsiya ko'pincha frazaning eng baland yoki eng uzun notasiga to'g'ri keladi.",
            },
            {
              kind: "nota",
              caption: "To'rt taktli fraza: o'sish sol notasigacha, keyin pasayish",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4"], duration: "q", lyric: "p" },
                  { keys: ["e/4"], duration: "q" },
                  { keys: ["g/4"], duration: "q", lyric: "cho'qqi" },
                  { keys: ["e/4"], duration: "q" },
                  { keys: ["f/4"], duration: "q" },
                  { keys: ["d/4"], duration: "q" },
                  { keys: ["c/4"], duration: "h", lyric: "pp" },
                ],
              },
            },
            {
              kind: "eslatma",
              text: "Dinamik reja — bu «qayerda baland, qayerda past» degan qaror. Uni boshda, nota ustiga belgilab oling. Rejasiz ijro butun asarni bitta mf da chalib chiqadi, bu esa eng zerikarli variant.",
            },
            {
              kind: "royxat",
              items: [
                "Kulminatsiyaga qarab asta o'sish (crescendo), undan keyin pasayish (diminuendo)",
                "Butun asarning ham bitta bosh kulminatsiyasi bo'ladi — odatda uchdan ikki qismidan keyin",
                "Pianissimo pianoning «sal pasti» emas, boshqa rang: uni oldindan tayyorlash kerak",
                "Takrorlangan frazani aynan bir xil chalmang — takrorda yo kuchliroq, yo yumshoqroq bo'lsin",
              ],
            },
            {
              kind: "matn",
              text: "Artikulyatsiya — tovushning qanday «aytilishi». Bir xil notalar artikulyatsiyaga qarab butunlay boshqacha ma'no beradi.",
            },
            {
              kind: "royxat",
              items: [
                "Legato — tovushlar uzilmasdan ulanadi; qo'shiqsimon, yumshoq",
                "Non legato — har tovush alohida, lekin qisqartirilmaydi; neytral aytilish",
                "Staccato — qisqa va yengil; o'ynoqi, raqsga xos",
                "Aksent — bitta tovushga urg'u; frazaning boshi yoki kulminatsiyasida ishlatiladi",
              ],
            },
            {
              kind: "matn",
              text: "Agogika — tempning kichik, ifoda uchun qilinadigan egilishi. Fraza oxirida biroz sekinlashish tabiiy, chunki nutqda ham jumla oxirida sekinlashamiz.",
            },
            {
              kind: "eslatma",
              text: "Agogikani temp qulashi bilan adashtirmaslik kerak. Qoida oddiy: sekinlashgan joydan keyin temp albatta qaytib tiklanadi. Tiklanmasa — bu ifoda emas, nazoratning yo'qolishi.",
            },
            {
              kind: "matn",
              text: "Eng ko'p uchraydigan xato — frazaning oxirgi tovushini qisqartirish. Ijrochi keyingi bo'lakka shoshiladi va jumla tugamay qoladi; tinglovchi esa «chala gap» eshitadi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Pianinoda oddiy kuyni ikki marta chaling: birinchi marta hammasini bir xil kuchda, ikkinchi marta frazani belgilab, kulminatsiyaga o'sib. Farqni eshiting va o'zingizga ayting: qaysi biri «gapiryapti»?",
              instrument: "pianino",
              exerciseId: "p-oddiy-kuy",
            },
            {
              kind: "mashq",
              text: "Nayda lirik ohangni chaling. Nafas olish joyi bu yerda fizik jihatdan majburiy — shuning uchun nay frazani eshitishni eng yaxshi o'rgatadigan cholg'u.",
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
                  id: "ijr9-t1",
                  area: "sahna",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Fraza bilan takt orasidagi farq nimada?",
                  options: [
                    { id: "a", text: "Farq yo'q, ikkalasi ham bir xil" },
                    { id: "b", text: "Takt — o'lchov birligi, fraza — ma'no birligi" },
                    { id: "c", text: "Fraza har doim bitta taktga teng" },
                    { id: "d", text: "Fraza faqat vokal asarlarda bo'ladi" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr9-t2",
                  area: "sahna",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Qo'shiq matnida fraza chegarasini qanday topasiz?",
                  options: [
                    { id: "a", text: "Har to'rt taktdan keyin" },
                    { id: "b", text: "Matnni ovoz chiqarib o'qib, nafas olgan joyingizdan" },
                    { id: "c", text: "Eng baland notadan" },
                    { id: "d", text: "Kalit belgilaridan" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr9-t3",
                  area: "sahna",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Qaysi artikulyatsiya tovushlarni uzilmasdan ulaydi?",
                  options: [
                    { id: "a", text: "Staccato" },
                    { id: "b", text: "Non legato" },
                    { id: "c", text: "Legato" },
                    { id: "d", text: "Aksent" },
                  ],
                  correctId: "c",
                },
                {
                  id: "ijr9-t4",
                  area: "sahna",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Talaba fraza oxirida sekinlashdi, lekin keyin ham temp tiklanmadi. Bu nima?",
                  options: [
                    { id: "a", text: "To'g'ri agogika" },
                    { id: "b", text: "Temp nazoratining yo'qolishi" },
                    { id: "c", text: "Yangi temp belgisi" },
                    { id: "d", text: "Kulminatsiya belgisi" },
                  ],
                  correctId: "b",
                  explanation:
                    "Agogikada sekinlashuvdan keyin temp albatta qaytadi; qaytmasa — bu ifoda emas, boshqaruvning uzilishi.",
                },
                {
                  id: "ijr9-t5",
                  area: "sahna",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Bir xil fraza asarda ikki marta takrorlanadi. Eng yaxshi yechim qaysi?",
                  options: [
                    { id: "a", text: "Ikkala marta aynan bir xil chalish" },
                    { id: "b", text: "Takrorda dinamikani o'zgartirish" },
                    { id: "c", text: "Takrorni tezroq chalish" },
                    { id: "d", text: "Takrorni tashlab ketish" },
                  ],
                  correctId: "b",
                  explanation:
                    "Aynan takrorlanish tinglovchi diqqatini yo'qotadi; dinamik farq esa takrorni ma'noli qiladi.",
                },
                {
                  id: "ijr9-t6",
                  area: "sahna",
                  bloom: "tahlil",
                  kind: "multiple",
                  prompt: "Ifodali ijroning belgilari qaysilar?",
                  options: [
                    { id: "a", text: "Fraza chegaralari eshitiladi" },
                    { id: "b", text: "Kulminatsiya aniq" },
                    { id: "c", text: "Butun asar bir xil kuchda chalinadi" },
                    { id: "d", text: "Artikulyatsiya asar xarakteriga mos" },
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
                "Fraza — musiqiy jumla; uni matndagi nafas joyidan topish eng oson",
                "Har frazada bitta kulminatsiya bor: unga o'siladi, undan pasayiladi",
                "Dinamik reja oldindan tuziladi va nota ustiga belgilanadi",
                "Artikulyatsiya tovushning aytilishini belgilaydi: legato, non legato, staccato, aksent",
                "Agogikadan keyin temp tiklanadi; frazaning oxirgi tovushi qisqartirilmaydi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'z ijrongizda fraza oxirlarini qisqartirish odati bormi — qanday tekshirdingiz?",
        "Kulminatsiya tushunchasini boshlang'ich sinf o'quvchisiga qanday so'z bilan tushuntirasiz?",
      ],
    },

    {
      id: "ijr-7",
      slug: "ansambl-ijrosi",
      title: "Mavzu 7: Ansamblda ijro",
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
      id: "ijr-8",
      slug: "qoshiqqa-jor-bolish",
      title: "Mavzu 8: Qo'shiqqa jo'r bo'lish",
      summary:
        "Uchta asosiy akkord bilan jo'r tuzish, faktura turlari, kirish qismi va sinf kuylashini qo'llab-quvvatlash.",
      durationMin: 45,
      bloom: "sintez",
      outcomeId: "on-ijr-10",
      area: "ijodkorlik",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Maktab musiqa o'qituvchisi ish vaqtining katta qismini yakka ijroda emas, jo'r bo'lishda o'tkazadi. Sinf kuylaydi — u qo'llab turadi.",
            },
            {
              kind: "matn",
              text: "Shuning uchun jo'r mahorati «qo'shimcha ko'nikma» emas, kasbning markazi. Va u yakka ijrodan boshqacha qoidalarga bo'ysunadi: bu yerda maqsad ko'rsatish emas, qulaylik yaratish.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Jo'rning uchta vazifasi bor va ularning uchalasi ham kuylovchiga xizmat qiladi.",
            },
            {
              kind: "royxat",
              items: [
                "Tonallikni ushlab turish — sinf intonatsiyadan chiqsa, jo'r uni qaytaradi",
                "Temp va metrni berish — qachon boshlash, qayerda nafas olish shu yerdan bilinadi",
                "Kayfiyatni qo'llab-quvvatlash — qo'shiqning xarakterini faktura orqali ko'rsatish",
              ],
            },
            {
              kind: "eslatma",
              text: "To'rtinchi vazifa yo'q. Jo'r ohangni bosib ketmaydi, murakkab figuralar bilan diqqatni o'ziga tortmaydi va kuylovchini quvib yurmaydi.",
            },
            {
              kind: "matn",
              text: "Bolalar qo'shiqlarining katta qismiga uchta akkord yetarli: tonika, subdominanta va dominanta. Do majorda ular — do, fa va sol7.",
            },
            {
              kind: "nota",
              caption: "Do majordagi uchta tayanch akkord: T – S – D7 – T",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/4", "e/4", "g/4"], duration: "q", lyric: "T" },
                  { keys: ["f/4", "a/4", "c/5"], duration: "q", lyric: "S" },
                  { keys: ["g/4", "b/4", "f/5"], duration: "q", lyric: "D7" },
                  { keys: ["c/4", "e/4", "g/4"], duration: "q", lyric: "T" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Akkordni tanlash qoidasi oddiy: shu paytda yangrayotgan ohang tovushi qaysi akkord tarkibida bor — o'sha akkord mos keladi. Ikkitasi mos kelsa, frazaning kuchli zarbidagi tovushga qarang.",
            },
            {
              kind: "royxat",
              items: [
                "Fraza boshi va oxiri odatda tonikada",
                "Fraza o'rtasidagi kuchlanish — dominantada",
                "Subdominanta tonikadan uzoqlashish uchun, ko'pincha ikkinchi taktda",
                "Oxirgi takt deyarli har doim D – T (to'liq kadans)",
              ],
            },
            {
              kind: "matn",
              text: "Faktura — jo'rning «to'qimasi», ya'ni akkordlar qanday taqsimlangani. Bitta akkord ketma-ketligi turli fakturada butunlay boshqa xarakter beradi.",
            },
            {
              kind: "royxat",
              items: [
                "Bas + akkord — chap qo'lda bas, o'ng qo'lda akkord. Vals va marshga mos, eng universal",
                "Takrorlanuvchi akkord — bir xil akkord choraklab urib turiladi. Tez, quvnoq qo'shiqlarga",
                "Arpedjio — akkord tovushlari ketma-ket chalinadi. Lirik, sokin qo'shiqlarga",
                "Blok akkord — har zarbda to'liq akkord. Tantanali, madhiyaga o'xshash xarakterga",
              ],
            },
            {
              kind: "eslatma",
              text: "Bitta qo'shiq ichida fakturani o'zgartirish mumkin va ko'pincha kerak: kupletda sokin arpedjio, naqarotda blok akkord — shu bilan naqarot ko'tariladi.",
            },
            {
              kind: "matn",
              text: "Kirish — qo'shiq boshlanishidan oldin chalinadigan, sinfga tonallik va tempni beradigan bir necha takt. Usiz bolalar qaysi tovushdan va qanday tezlikda boshlashni bilmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Eng oddiy kirish — qo'shiqning oxirgi ikki takti",
                "Yana bir variant — T – D – T akkordlari, qo'shiq tempida",
                "Kirishni albatta qo'shiq tempida chaling: temp ko'rsatish uning asosiy vazifasi",
                "Oxirgi akkorddan keyin bosh irg'ab yoki qo'l bilan kirish ishorasini bering",
              ],
            },
            {
              kind: "matn",
              text: "Dinamika masalasi oxirida turadi, lekin eng ko'p xato shu yerda qilinadi: jo'r kuylashdan past bo'lishi kerak. Bolalar o'z ovozini eshitmasa, intonatsiyani tuzata olmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Jo'r dinamikasi — kuylashdan bir pog'ona past",
                "Sinf adashganda jo'r balandlamaydi, aksincha, ohang chizig'ini aniq ko'rsatadi",
                "Doira yoki boshqa zarbli cholg'u bilan jo'r ham mumkin: usul tanlanadi va o'zgartirilmaydi",
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
              text: "Pianinoda T – S – D7 – T ketma-ketligini uch xil fakturada chaling: bas+akkord, arpedjio, blok akkord. Har birining xarakteri qanday o'zgarishini eshiting.",
              instrument: "pianino",
              exerciseId: "p-oz-kuy",
            },
            {
              kind: "mashq",
              text: "Gitarada birinchi akkordlarni mashq qiling va ularni bitta bolalar qo'shig'iga jo'r sifatida ulang. Akkord almashinuvi kuylashni to'xtatib qo'ymasligi kerak.",
              instrument: "gitara",
              exerciseId: "g-akkordlar",
            },
            {
              kind: "mashq",
              text: "Doirada qo'shiq jo'rligi usulini bajaring. Usulni tanlagach, butun qo'shiq davomida uni o'zgartirmang — jo'rning barqarorligi aynan shunda.",
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
                  id: "ijr10-t1",
                  area: "ijodkorlik",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Jo'rning asosiy vazifasi nima?",
                  options: [
                    { id: "a", text: "O'qituvchining ijro mahoratini ko'rsatish" },
                    { id: "b", text: "Tonallik, temp va kayfiyatni ushlab, kuylashni qo'llab-quvvatlash" },
                    { id: "c", text: "Qo'shiqni murakkablashtirish" },
                    { id: "d", text: "Sinfdan baland yangrash" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr10-t2",
                  area: "ijodkorlik",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Do majorda ohangning kuchli zarbidagi tovush — «fa». Qaysi akkord eng mos keladi?",
                  options: [
                    { id: "a", text: "Do major (T)" },
                    { id: "b", text: "Fa major (S)" },
                    { id: "c", text: "Lya minor" },
                    { id: "d", text: "Mi major" },
                  ],
                  correctId: "b",
                  explanation:
                    "«Fa» tovushi subdominanta akkordining asosi; shu sababli u birinchi nomzod bo'ladi.",
                },
                {
                  id: "ijr10-t3",
                  area: "ijodkorlik",
                  bloom: "bilish",
                  kind: "single",
                  prompt: "Jo'rdagi kirish nima uchun kerak?",
                  options: [
                    { id: "a", text: "Qo'shiqni uzaytirish uchun" },
                    { id: "b", text: "Sinfga tonallik va tempni berish uchun" },
                    { id: "c", text: "O'qituvchining isinishi uchun" },
                    { id: "d", text: "Tartib uchun, musiqiy ma'nosi yo'q" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr10-t4",
                  area: "ijodkorlik",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Sinf kuylayotganda intonatsiyadan chiqib ketdi. Jo'rda nima qilasiz?",
                  options: [
                    { id: "a", text: "Jo'rni balandlataman" },
                    { id: "b", text: "Tempni tezlashtiraman" },
                    { id: "c", text: "Ohang chizig'ini aniq ko'rsataman, dinamikani oshirmayman" },
                    { id: "d", text: "To'xtatib, boshidan boshlayman" },
                  ],
                  correctId: "c",
                  explanation:
                    "Baland jo'r bolalarga o'z ovozini eshitishga xalaqit beradi — intonatsiyani tuzatish imkoni yo'qoladi.",
                },
                {
                  id: "ijr10-t5",
                  area: "ijodkorlik",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Sokin, lirik kuplet uchun qaysi faktura mos keladi?",
                  options: [
                    { id: "a", text: "Har zarbda blok akkord" },
                    { id: "b", text: "Arpedjio" },
                    { id: "c", text: "Tez takrorlanuvchi akkord" },
                    { id: "d", text: "Faqat bas tovushlari" },
                  ],
                  correctId: "b",
                },
                {
                  id: "ijr10-t6",
                  area: "ijodkorlik",
                  bloom: "sintez",
                  kind: "multiple",
                  prompt:
                    "Naqarotni kupletdan ajratib ko'rsatish uchun jo'rda nima qilish mumkin?",
                  options: [
                    { id: "a", text: "Fakturani blok akkordga o'zgartirish" },
                    { id: "b", text: "Dinamikani biroz ko'tarish" },
                    { id: "c", text: "Tonallikni butunlay almashtirish" },
                    { id: "d", text: "Bas chizig'ini faollashtirish" },
                  ],
                  correctIds: ["a", "b", "d"],
                  explanation:
                    "Tonallikni qo'shiq o'rtasida almashtirish sinfni adashtiradi; faktura va dinamika esa xavfsiz vositalar.",
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
                "Jo'r kuylovchiga xizmat qiladi: tonallik, temp, kayfiyat",
                "Bolalar qo'shiqlarining ko'pchiligiga T, S va D7 yetadi",
                "Akkord ohangning kuchli zarbidagi tovushiga qarab tanlanadi",
                "Faktura xarakterni belgilaydi; kuplet va naqarotda uni o'zgartirish mumkin",
                "Kirish tonallik va tempni beradi; jo'r dinamikasi kuylashdan past",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Yoddagi bitta bolalar qo'shig'ini oling: uning qaysi taktlarida subdominanta kerak bo'ladi?",
        "Sinf jo'rni eshitmay qolsa, buni qaysi belgidan bilasiz?",
      ],
    },

    {
      id: "ijr-9",
      slug: "repertuar-va-tonallik",
      title: "Mavzu 9: Repertuar va tonallikni tanlash",
      summary:
        "Yosh guruhiga mos qo'shiq tanlash mezonlari, diapazonni tekshirish va tonallikni ko'chirish (transponirovka).",
      durationMin: 40,
      bloom: "baholash",
      outcomeId: "on-ijr-11",
      area: "ijodkorlik",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Chiroyli, lekin sinf diapazonidan chiqib ketgan qo'shiq bolalarni qichqirishga o'rgatadi. Shuning uchun repertuar tanlash — did masalasi emas, kasbiy qaror.",
            },
            {
              kind: "matn",
              text: "Bu qaror ikki qadamdan iborat: avval qo'shiqni tanlash, keyin uni sinfga moslashtirish. Ikkinchi qadam ko'pincha tashlab ketiladi — aynan shu yerda tonallikni ko'chirish kerak bo'ladi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "matn",
              text: "Qo'shiqni baholashda oltita mezon bor. Ularning birinchisi — diapazon: qolganlari qanchalik yaxshi bo'lmasin, diapazon mos kelmasa qo'shiq olinmaydi.",
            },
            {
              kind: "royxat",
              items: [
                "Diapazon — eng past va eng baland nota sinf imkoniyatiga sig'adimi",
                "Matn — yoshga mos, tushunarli va tarbiyaviy mazmunga ega",
                "Sakrashlar — ko'p va keng sakrash boshlang'ich sinfga og'irlik qiladi",
                "Nafas joylari — fraza uzunligi bolaning nafasiga to'g'ri keladimi",
                "Davomiylik — bitta darsda o'rganib bo'ladimi yoki bir necha darsga bo'linadimi",
                "Madaniy qiymat — milliy va jahon repertuari muvozanati",
              ],
            },
            {
              kind: "eslatma",
              text: "Diapazonni tekshirish bir daqiqalik ish: qo'shiqning eng past va eng baland notasini toping va ularni sinf diapazoni bilan solishtiring. Shu bitta amal eng ko'p pedagogik xatoning oldini oladi.",
            },
            {
              kind: "matn",
              text: "Faraz qilaylik, qo'shiq re majorda yozilgan va eng baland notasi fa♯². 8–10 yoshli sinf uchun bu baland: ularning qulay chegarasi taxminan re². Yechim — qo'shiqni pastroq tonallikka ko'chirish.",
            },
            {
              kind: "nota",
              caption: "Asl holat — do majorda, eng baland nota mi²",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["c/5"], duration: "q", lyric: "do" },
                  { keys: ["d/5"], duration: "q", lyric: "re" },
                  { keys: ["e/5"], duration: "h", lyric: "mi" },
                  { keys: ["d/5"], duration: "q", lyric: "re" },
                  { keys: ["c/5"], duration: "h", lyric: "do" },
                ],
              },
            },
            {
              kind: "nota",
              caption: "Katta tersiya pastga ko'chirilgan — lya♭ majorda, eng baland nota do²",
              playable: true,
              spec: {
                clef: "treble",
                timeSignature: "4/4",
                notes: [
                  { keys: ["ab/4"], duration: "q", lyric: "lya♭" },
                  { keys: ["bb/4"], duration: "q", lyric: "si♭" },
                  { keys: ["c/5"], duration: "h", lyric: "do" },
                  { keys: ["bb/4"], duration: "q", lyric: "si♭" },
                  { keys: ["ab/4"], duration: "h", lyric: "lya♭" },
                ],
              },
            },
            {
              kind: "matn",
              text: "Ohang bir xil — barcha tovushlar orasidagi masofa saqlangan. O'zgargani faqat balandlik. Transponirovkaning butun mohiyati shu: intervallar o'zgarmaydi, tayanch nuqta siljiydi.",
            },
            {
              kind: "royxat",
              items: [
                "1. Qo'shiqning eng past va eng baland notasini aniqlang",
                "2. Sinf diapazoni bilan solishtiring: qancha past yoki baland ketyapti",
                "3. Kerakli intervalni hisoblang — odatda sekunda, tersiya yoki kvarta yetadi",
                "4. Yangi tonallikning kalit belgilarini yozing",
                "5. Har bir notani o'sha intervalga siljiting va alteratsiyani tekshiring",
                "6. Chalib ko'ring: quloq xatoni ko'zdan tez topadi",
              ],
            },
            {
              kind: "eslatma",
              text: "Ijro uchun eng qulay tonalliklar — do, fa va sol major. Agar hisob-kitob sizni besh bemolli tonallikka olib kelsa, bir qadam orqaga qayting: ko'pincha yarim ton farq bilan qulayroq tonallik topiladi.",
            },
            {
              kind: "matn",
              text: "Eng keng tarqalgan ikkita xato bir-biriga qarama-qarshi. Birinchisi — qo'shiqni har doim o'ziga qulay tonallikda chalish; ikkinchisi — tonallikni ko'chirib, keyin uni tekshirmaslik.",
            },
            {
              kind: "royxat",
              items: [
                "Faqat o'ziga qulay tonallikda chalish — sinfni o'z diapazoniga majburlash demakdir",
                "Ko'chirgandan keyin tekshirmaslik — pastki chegaradan chiqib ketish xavfi: past tovushlar bolalarda umuman yangramaydi",
                "Ikki tomonni ham tekshiring: yuqori chegara ham, pastki chegara ham sinfga sig'ishi kerak",
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
              text: "Pianinoda oddiy kuyni avval do majorda, keyin uni butun ton pastga — si♭ majorda chaling. Barmoq tartibi o'zgaradi, ohang esa o'zgarmaydi: aynan shu farqni sezish transponirovkani o'rgatadi.",
              instrument: "pianino",
              exerciseId: "p-oddiy-kuy",
            },
            {
              kind: "mashq",
              text: "Nayda lirik ohangni chaling va uning eng past hamda eng baland notasini aniqlang. Bu ohang 8–10 yoshli sinfga mos keladimi — javobingizni asoslang.",
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
                  id: "ijr11-t1",
                  area: "ijodkorlik",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Repertuar tanlashda birinchi tekshiriladigan mezon qaysi?",
                  options: [
                    { id: "a", text: "Qo'shiqning mashhurligi" },
                    { id: "b", text: "Diapazonning sinfga mosligi" },
                    { id: "c", text: "Jo'rning murakkabligi" },
                    { id: "d", text: "Qo'shiq muallifi" },
                  ],
                  correctId: "b",
                  explanation:
                    "Diapazon mos kelmasa, qolgan barcha afzalliklar ahamiyatini yo'qotadi — bola baribir qichqirishga o'tadi.",
                },
                {
                  id: "ijr11-t2",
                  area: "ijodkorlik",
                  bloom: "tushunish",
                  kind: "single",
                  prompt: "Transponirovkada nima o'zgarmaydi?",
                  options: [
                    { id: "a", text: "Tovushlar balandligi" },
                    { id: "b", text: "Kalit belgilari" },
                    { id: "c", text: "Tovushlar orasidagi intervallar" },
                    { id: "d", text: "Barmoq tartibi" },
                  ],
                  correctId: "c",
                  explanation:
                    "Transponirovka butun ohangni bir xil intervalga siljitadi; ichki munosabatlar saqlanadi, shuning uchun ohang tanib olinadi.",
                },
                {
                  id: "ijr11-t3",
                  area: "ijodkorlik",
                  bloom: "qollash",
                  kind: "single",
                  prompt:
                    "Qo'shiqning eng baland notasi fa♯², sinfning chegarasi esa re². Nima qilasiz?",
                  options: [
                    { id: "a", text: "Shu holicha o'rgataman, bolalar ko'nikadi" },
                    { id: "b", text: "Qo'shiqni kamida kichik tersiya pastga ko'chiraman" },
                    { id: "c", text: "Baland joyni men kuylayman, bolalar jim turadi" },
                    { id: "d", text: "Tempni sekinlashtiraman" },
                  ],
                  correctId: "b",
                  explanation:
                    "Fa♯² dan re² gacha kichik tersiya; shu intervalga ko'chirish qo'shiqni chegaraga qaytaradi.",
                },
                {
                  id: "ijr11-t4",
                  area: "ijodkorlik",
                  bloom: "tahlil",
                  kind: "single",
                  prompt:
                    "Qo'shiqni kvarta pastga ko'chirdingiz, endi eng past notasi sol ga tushdi. Bu nimani bildiradi?",
                  options: [
                    { id: "a", text: "Hammasi joyida, baland chegara qulay bo'ldi" },
                    { id: "b", text: "Pastki chegaradan chiqib ketildi — past tovushlar bolalarda yangramaydi" },
                    { id: "c", text: "Tonallik har doim shunday tanlanadi" },
                    { id: "d", text: "Diapazon kengaygan, bu yaxshi" },
                  ],
                  correctId: "b",
                  explanation:
                    "Transponirovkadan keyin ikkala chegara ham qayta tekshiriladi: pastga ortiqcha ko'chirish ham xato.",
                },
                {
                  id: "ijr11-t5",
                  area: "ijodkorlik",
                  bloom: "baholash",
                  kind: "multiple",
                  prompt:
                    "Boshlang'ich sinf uchun qo'shiq tanlayapsiz. Qaysi belgilar uni mos qiladi?",
                  options: [
                    { id: "a", text: "Diapazon do¹ – re² oralig'ida" },
                    { id: "b", text: "Frazalar qisqa, nafas olish joylari aniq" },
                    { id: "c", text: "Ko'p va keng sakrashlar bor" },
                    { id: "d", text: "Matn yoshga mos va tushunarli" },
                  ],
                  correctIds: ["a", "b", "d"],
                },
                {
                  id: "ijr11-t6",
                  area: "ijodkorlik",
                  bloom: "baholash",
                  kind: "single",
                  prompt:
                    "Hisob-kitob sizni besh bemolli tonallikka olib keldi. Eng oqilona qaror qaysi?",
                  options: [
                    { id: "a", text: "Shu tonallikda qoldirish — hisob to'g'ri" },
                    { id: "b", text: "Yarim ton farq bilan qulayroq tonallik topish" },
                    { id: "c", text: "Qo'shiqdan voz kechish" },
                    { id: "d", text: "Kalit belgilarini yozmasdan chalish" },
                  ],
                  correctId: "b",
                  explanation:
                    "Diapazon talabi odatda bir necha tonallikni ruxsat etadi; ulardan ijro uchun qulayrog'i tanlanadi.",
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
                "Repertuar tanlash — kasbiy qaror, did masalasi emas",
                "Birinchi mezon — diapazon; qolganlari undan keyin keladi",
                "Transponirovkada intervallar saqlanadi, balandlik siljiydi",
                "Ko'chirgandan keyin ikkala chegara ham qayta tekshiriladi",
                "Ijro uchun qulay tonalliklar — do, fa, sol major",
              ],
            },
          ],
        },
      ],
      reflection: [
        "O'zingiz biladigan qo'shiqlardan qaysi biri sinfingiz diapazoniga tushmaydi — va uni necha pog'ona ko'chirish kerak?",
        "Repertuarda milliy va jahon musiqasi nisbatini qanday saqlagan bo'lardingiz?",
      ],
    },

    {
      id: "ijr-10",
      slug: "ijroni-yozib-tahlil-qilish",
      title: "Mavzu 10: O'z ijrosini yozib tahlil qilish",
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

    {
      id: "ijr-11",
      slug: "sahna-madaniyati",
      title: "Mavzu 11: Sahna madaniyati",
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
