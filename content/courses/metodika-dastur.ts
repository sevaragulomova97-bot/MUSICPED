import type { Lesson } from "@/content/lesson-types";

/**
 * «Musiqa o'qitish metodikasi. Maktab repertuari» fan dasturidagi
 * ma'ruzalar — M1 dan boshlab.
 *
 * Alohida fayl: bu darslar rasmiy dasturga (`content/fan-dasturi.ts`)
 * bir-biriga mos qilib yoziladi va har birida `dasturKodi` turadi.
 * Platformaning eski metodika darslari o'z o'rnida qoladi — ular
 * dasturdan oldin yozilgan va mazmuni kengroq; hamma 30 ta ma'ruza
 * tayyor bo'lgach, takrorlanadigan joylari birlashtiriladi.
 *
 * Har bir dars dasturdagi mazmun bandini qoplaydi, lekin uni
 * ko'chirmaydi: dasturda mavzu nomlari, bu yerda esa o'quv matni,
 * mashq, test va refleksiya.
 */
export const DASTUR_MARUZALARI: Lesson[] = [
  /* ──────────────────────────── M1 ──────────────────────────── */
  {
    id: "met-m1",
    slug: "m1-fan-predmeti",
    title: "M1: Fanning predmeti, maqsadi va vazifalari",
    summary:
      "Musiqa o'qitish metodikasi nimani o'rganadi, u qaysi fanlarga tayanadi va «maktab repertuari» nima uchun alohida tushuncha.",
    durationMin: 80,
    bloom: "tushunish",
    outcomeId: "on-met-12",
    area: "metodika",
    dasturKodi: "M1",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN1"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Musiqani yaxshi biladigan odam darsni yaxshi o'tadi deb o'ylash tabiiy. Lekin amalda ikki xil mahorat bor: asarni o'zi ijro eta olish va uni boshqa odamga o'rgata olish. Ikkinchisi birinchisidan avtomatik kelib chiqmaydi.",
          },
          {
            kind: "matn",
            text: "Metodika aynan shu ikkinchi mahoratni o'rganadi: nimani, qanday ketma-ketlikda va qaysi yosh uchun berish kerakligini. Usiz o'qituvchi o'zi qanday o'rgangan bo'lsa, shuni takrorlaydi — bu esa tasodifga tayanish demak.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Fanning obyekti — umumiy o'rta ta'lim maktabidagi musiqa ta'limi jarayoni. Predmeti esa torroq: shu jarayonni samarali tashkil etish qonuniyatlari, usullari va vositalari. Obyekt — nimaga qaraladi, predmet — nimasi o'rganiladi.",
          },
          {
            kind: "matn",
            text: "Fanning maqsadi — bo'lajak o'qituvchini maktabda ishlashga tayyorlash: dars rejalashtirish, repertuar tanlash, ijro etish va o'quvchi natijasini baholash.",
          },
          {
            kind: "royxat",
            items: [
              "Musiqa o'qitishning didaktik asoslarini va o'ziga xos xususiyatlarini o'rgatish",
              "Maktab repertuarining o'quvchi musiqiy madaniyatini shakllantirishdagi o'rnini tushuntirish",
              "Musiqa o'qitishning prinsiplari, metodlari va zamonaviy pedagogik texnologiyalarini o'rgatish",
              "Musiqa darslarini rejalashtirish va samarali tashkil etish ko'nikmasini shakllantirish",
              "O'quvchilarda ijrochilik, ijodkorlik va musiqiy qobiliyatlarni rivojlantirish metodlarini o'rgatish",
              "Maktab repertuaridagi asarlarni o'qitish metodikasini amaliyotga tatbiq etishga o'rgatish",
            ],
          },
          {
            kind: "matn",
            text: "Metodika mustaqil fan emas, chorrahada turadi. Pedagogikadan — ta'lim tamoyillari va dars tuzilmasi; psixologiyadan — yosh xususiyatlari, idrok va xotira; musiqashunoslikdan — asar tahlili va janr bilimi. Metodika shularni bitta savolga birlashtiradi: «Shu bolaga, shu sinfda, shu asarni qanday o'rgataman?»",
          },
          {
            kind: "eslatma",
            text: "Uchta manbadan bittasi tushib qolsa, dars qiyshayadi: faqat musiqashunoslik — bola tushunmaydi; faqat pedagogika — musiqa yo'qoladi; faqat psixologiya — mazmun qolmaydi.",
          },
          {
            kind: "matn",
            text: "Maktab repertuari — darslikka kiritilgan va dars jarayonida o'rganiladigan asarlar majmui. U shunchaki qo'shiqlar ro'yxati emas: har bir asar ma'lum sinfning yoshiga, ovoz diapazoniga va tarbiyaviy maqsadiga qarab tanlangan. Shuning uchun repertuar bilan ishlash alohida kasbiy ko'nikma hisoblanadi.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: metodika qanday fan",
        blocks: [
          {
            kind: "matn",
            text: "Pedagogikada ikki qatlam bor. Umumiy didaktika barcha fanlar uchun bir xil savollarga javob beradi: dars qanday quriladi, bilim qanday mustahkamlanadi, baho nima uchun qo'yiladi. Xususiy metodika esa shu javoblarni bitta fanga moslaydi. Musiqa o'qitish metodikasi — xususiy metodika, ya'ni didaktikaning musiqa fanidagi ko'rinishi.",
          },
          {
            kind: "matn",
            text: "Shu sababli metodikaning har bir qoidasi ikki tomonlama asoslanadi: bir tomondan umumiy didaktik tamoyil (masalan, oddiydan murakkabga), ikkinchi tomondan musiqaning o'ziga xosligi (ohangni avval eshitish, keyin nomlash). Ikki asosdan biri tushib qolsa, qoida ishlamay qoladi.",
          },
          {
            kind: "matn",
            text: "Fanning obyekti va predmetini ajratish shu yerda muhim bo'ladi. Obyekt — maktabdagi musiqa ta'limi jarayonining o'zi: dars, o'quvchi, o'qituvchi, repertuar. Predmet esa shu jarayonning faqat bir qirrasi: uni samarali tashkil etish qonuniyatlari, metodlari va vositalari. Bitta obyektni bir necha fan o'rganishi mumkin — psixolog ham shu darsga qaraydi, lekin uning predmeti boshqa: bolaning idroki.",
          },
          {
            kind: "matn",
            text: "Metodika tuzilishi jihatidan ikkiga bo'linadi. Umumiy metodika barcha musiqa darslariga taalluqli masalalarni ko'radi: dars tuzilmasi, maqsad qo'yish, baholash. Xususiy metodika esa ayrim faoliyat turlari bo'yicha ishlaydi: qo'shiq o'rgatish metodikasi, musiqa tinglash metodikasi, musiqa savodi metodikasi, musiqiy-ritmik harakatlar metodikasi.",
          },
          {
            kind: "matn",
            text: "Metodika — tavsiyalar to'plami emas, tadqiqot usullariga ega fan. Uning asosiy usullari: pedagogik kuzatish (darsni maqsadli kuzatib, belgilangan ko'rsatkichni qayd etish), suhbat va so'rovnoma, o'quvchi ishlarini tahlil qilish, pedagogik tajriba-sinov (yangi usulni nazorat guruh bilan solishtirib tekshirish) va olingan natijani miqdoriy qayta ishlash.",
          },
          {
            kind: "eslatma",
            text: "Shu ro'yxat dissertatsiya ishi uchun ham asos bo'ladi: «yangi usul yaxshiroq» degan gap tajriba-sinov va o'lchov bilan tasdiqlanmasa, u hali ilmiy xulosa emas, taassurot.",
          },
        ],
      },
      {
        id: "aloqa",
        title: "Qo'shni fanlar bilan aloqa",
        blocks: [
          {
            kind: "matn",
            text: "Metodika mustaqil ravishda ta'lim qonuniyatlarini kashf etmaydi — u ularni qo'shni fanlardan oladi va musiqa darsiga moslaydi. Har bir fan unga aniq narsa beradi:",
          },
          {
            kind: "royxat",
            items: [
              "Pedagogika — ta'lim tamoyillari, dars tuzilmasi, metodlar tasnifi, baholash nazariyasi",
              "Yosh va pedagogik psixologiya — idrok, diqqat, xotira va tafakkurning yoshga bog'liq xususiyatlari; motivatsiya qonuniyatlari",
              "Musiqa psixologiyasi — musiqiy qobiliyatlar tuzilishi: ladli his, ritm hissi, musiqiy eshituv va musiqiy xotira",
              "Musiqashunoslik — asar tahlili, janr va shakl haqidagi bilim, musiqa tarixi",
              "Fiziologiya va ovoz gigiyenasi — bolalar ovoz apparati, diapazon chegaralari, mutatsiya davri, yuklama me'yori",
              "Estetika — badiiy did, go'zallikni idrok etish va baholash mezonlari",
            ],
          },
          {
            kind: "matn",
            text: "Amalda bu aloqalar bitta qarorda birlashadi. O'qituvchi 2-sinf uchun qo'shiq tanlaganda bir vaqtning o'zida musiqashunoslik (asar qanday tuzilgan), fiziologiya (bu diapazon shu yoshga mos keladimi), psixologiya (matn bolaga qiziqmi) va pedagogika (bu qo'shiq qaysi o'quv maqsadiga xizmat qiladi) savollariga javob beradi.",
          },
          {
            kind: "eslatma",
            text: "Shuning uchun metodikadagi ko'p xatolar «bilmaslik» emas, «bir tomonlama qarash» natijasi bo'ladi: asar go'zal, lekin yoshga og'ir; maqsad to'g'ri, lekin musiqa yo'qolgan.",
          },
        ],
      },
      {
        id: "repertuar",
        title: "Maktab repertuari nima uchun alohida tushuncha",
        blocks: [
          {
            kind: "matn",
            text: "Boshqa fanlarda o'quv materiali matn yoki masala bo'ladi. Musiqada esa u badiiy asar — ya'ni o'z qiymatiga ega, o'quv maqsadidan mustaqil mavjud bo'lgan narsa. Shuning uchun maktab repertuari ikki talabni bir vaqtda qondirishi kerak: badiiy jihatdan qimmatli bo'lish va pedagogik jihatdan bajarib bo'ladigan bo'lish.",
          },
          {
            kind: "matn",
            text: "Repertuar tanlashda odatda quyidagi mezonlar qo'llaniladi:",
          },
          {
            kind: "royxat",
            items: [
              "Badiiy qimmat — asar did shakllantiradimi yoki shunchaki vaqt to'ldiradimi",
              "Yoshga moslik — diapazon, matn hajmi, obrazning tushunarliligi",
              "Tarbiyaviy yo'nalish — asar qanday qadriyatni olib keladi",
              "Bajarib bo'ladiganlik — sinf imkoniyati, mashq uchun ajratilgan vaqt",
              "Dastur talabiga muvofiqlik — DTS va darslik ro'yxati",
              "Milliy va jahon merosining muvozanati",
            ],
          },
          {
            kind: "matn",
            text: "Shu olti mezon bir-biriga qarshi chiqishi mumkin: badiiy kuchli asar yoshga og'ir bo'lishi, oson asar esa did shakllantirmasligi mumkin. Repertuar tanlash — ana shu ziddiyatni har safar qaytadan hal qilish. Aynan shuning uchun u alohida kasbiy ko'nikma deb qaraladi va dasturda unga 60 soat amaliy mashg'ulot ajratilgan.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Metodika — muayyan fanni o'qitish qonuniyatlari, metodlari va vositalari haqidagi pedagogik fan",
              "Obyekt — fan o'rganadigan voqelik sohasi (bu yerda: maktabdagi musiqa ta'limi jarayoni)",
              "Predmet — shu voqelikning aynan shu fan o'rganadigan qirrasi",
              "Xususiy metodika — umumiy didaktikaning bitta o'quv fanidagi ko'rinishi",
              "Maktab repertuari — dars jarayonida o'rganiladigan, yosh va maqsadga qarab tanlangan asarlar majmui",
              "Pedagogik tajriba-sinov — yangi usul samarasini nazorat guruh bilan solishtirib tekshirish usuli",
              "Musiqiy madaniyat — musiqani idrok etish, baholash va ijro eta olish qobiliyatlarining yaxlitligi",
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
            text: "O'zingiz maktabda o'qigan bitta musiqa darsini eslang. Unda o'qituvchi qilgan uchta harakatni yozing va har birining yonida qaysi bilim ishlaganini belgilang: pedagogika, psixologiya yoki musiqashunoslik. Uchala ustun ham to'ldimi?",
          },
          {
            kind: "mashq",
            text: "Bitta tanish maktab qo'shig'ini oling. Uni «ijrochi sifatida» tavsiflang (qanday kuylanadi), so'ng «o'qituvchi sifatida» tavsiflang (qanday o'rgatiladi). Ikki tavsif qayerda ajralib ketdi? Shu ajralgan joy — metodikaning predmeti.",
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
                id: "m1-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "Musiqa o'qitish metodikasining obyekti nima?",
                options: [
                  { id: "a", text: "Musiqa asarining tuzilishi" },
                  { id: "b", text: "Maktabdagi musiqa ta'limi jarayoni" },
                  { id: "c", text: "O'qituvchining ijro mahorati" },
                  { id: "d", text: "Bastakorlar ijodi" },
                ],
                correctId: "b",
                explanation:
                  "Obyekt — ta'lim jarayonining o'zi; predmet esa shu jarayonni samarali tashkil etish qonuniyatlari.",
              },
              {
                id: "m1-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Nima uchun musiqani yaxshi ijro etish o'qituvchilik uchun yetarli emas?",
                options: [
                  { id: "a", text: "Chunki maktabda cholg'u bo'lmaydi" },
                  { id: "b", text: "Chunki o'rgatish alohida mahorat: ketma-ketlik, yosh va usul tanlashni talab qiladi" },
                  { id: "c", text: "Chunki darslikda nota yo'q" },
                  { id: "d", text: "Chunki bolalar musiqani yoqtirmaydi" },
                ],
                correctId: "b",
              },
              {
                id: "m1-t3",
                area: "metodika",
                bloom: "tushunish",
                kind: "multiple",
                prompt: "Metodika qaysi fanlarga tayanadi?",
                options: [
                  { id: "a", text: "Pedagogika" },
                  { id: "b", text: "Psixologiya" },
                  { id: "c", text: "Musiqashunoslik" },
                  { id: "d", text: "Arxitektura" },
                ],
                correctIds: ["a", "b", "c"],
                explanation:
                  "Uchalasi birga ishlaydi: tamoyil, yosh xususiyati va musiqiy mazmun.",
              },
              {
                id: "m1-t4",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "O'qituvchi 2-sinfda murakkab, keng diapazonli qo'shiqni tanladi va bolalar kuylay olmadi. Qaysi bilim yetishmagan?",
                options: [
                  { id: "a", text: "Musiqashunoslik — asar tahlili" },
                  { id: "b", text: "Psixologiya va yosh xususiyatlari — ovoz diapazoni" },
                  { id: "c", text: "Cholg'u ijrosi" },
                  { id: "d", text: "Nota savodi" },
                ],
                correctId: "b",
                explanation:
                  "Asar yaxshi bo'lishi mumkin, lekin yoshga mos bo'lmasa dars maqsadiga xizmat qilmaydi.",
              },
              {
                id: "m1-t5",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt: "«Maktab repertuari» tushunchasining eng to'g'ri ta'rifi qaysi?",
                options: [
                  { id: "a", text: "O'qituvchi yoqtirgan qo'shiqlar ro'yxati" },
                  { id: "b", text: "Darslikka kiritilgan va yosh, diapazon hamda tarbiyaviy maqsadga qarab tanlangan asarlar majmui" },
                  { id: "c", text: "Konsertda ijro etiladigan asarlar" },
                  { id: "d", text: "Faqat xalq qo'shiqlari" },
                ],
                correctId: "b",
              },
              {
                id: "m1-t6",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "«Men o'zim qanday o'rgangan bo'lsam, shunday o'rgataman» degan yondashuvning asosiy kamchiligi nimada?",
                options: [
                  { id: "a", text: "U eski usullarga asoslangan" },
                  { id: "b", text: "U tanlovni tasodifga qoldiradi: o'z tajribasi bitta misol, sinf esa boshqacha" },
                  { id: "c", text: "U ko'p vaqt oladi" },
                  { id: "d", text: "U darslikka mos kelmaydi" },
                ],
                correctId: "b",
                explanation:
                  "Shaxsiy tajriba qimmatli, lekin u bitta holat. Metodika esa turli sinf va yosh uchun asoslangan tanlov beradi.",
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
              "Obyekt — maktabdagi musiqa ta'limi jarayoni; predmet — uni samarali tashkil etish qonuniyatlari",
              "Ijro mahorati va o'rgatish mahorati — ikki xil narsa",
              "Metodika pedagogika, psixologiya va musiqashunoslik chorrahasida turadi",
              "Maktab repertuari — yosh, diapazon va tarbiyaviy maqsadga qarab tanlangan asarlar majmui",
              "Fanning maqsadi — dars rejalashtirish, repertuar tanlash, ijro etish va baholashga tayyorlash",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'zingiz o'qigan musiqa darslarida o'qituvchining qaysi qarori endi sizga metodik qaror bo'lib ko'rinmoqda?",
      "Ijro mahoratingiz kuchli bo'lgan joyda o'rgatish qiyin bo'lishi mumkinmi? Nima uchun?",
    ],
  },
  /* ──────────────────────────── M2 ──────────────────────────── */
  {
    id: "met-m2",
    slug: "m2-shaxs-kamoloti",
    title: "M2: Musiqa san'atining shaxs kamolotidagi o'rni",
    summary:
      "Musiqa estetik, axloqiy va vatanparvarlik tarbiyasiga qanday ta'sir qiladi va bu ta'sir qaysi pedagogik shart bilan ishlaydi.",
    durationMin: 80,
    bloom: "tahlil",
    outcomeId: "on-met-14",
    area: "metodika",
    dasturKodi: "M2",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN5"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "«Musiqa bolani tarbiyalaydi» — ko'p eshitilgan gap. Lekin agar u o'z-o'zidan tarbiyalaganida, naushnikda kun bo'yi musiqa tinglaydigan har bir o'smir eng tarbiyali inson bo'lib chiqardi. Demak, ta'sir bor, lekin u shartli.",
          },
          {
            kind: "matn",
            text: "Bu darsda shu shart nimadan iborat ekanini ko'rib chiqamiz: musiqa qachon tarbiyaviy vositaga aylanadi va o'qituvchi bu jarayonda nima qiladi.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Musiqaning estetik mohiyati shundaki, u voqelikni tushuncha orqali emas, **kechinma** orqali yetkazadi. Bola «vatanni sevish kerak» degan jumlani yodlashi mumkin, lekin madhiyani jamoa bo'lib kuylaganda u buni boshqacha — tanasi bilan — his qiladi.",
          },
          {
            kind: "matn",
            text: "Shu sababli musiqa tarbiyasi ta'limning boshqa sohalaridan farq qiladi: u avval his qildiradi, keyin tushuntiradi. Tartibni teskari qo'ysangiz — avval uzun tushuntirish, keyin tinglash — ta'sir yo'qoladi.",
          },
          {
            kind: "royxat",
            items: [
              "Estetik tarbiya — go'zallikni farqlash va baholash qobiliyati; did shakllanadi",
              "Axloqiy tarbiya — asar qahramonining xatti-harakatiga munosabat bildirish orqali",
              "Vatanparvarlik tarbiyasi — milliy musiqa, madhiya va xalq qo'shiqlari orqali mansublik tuyg'usi",
              "Emotsional rivojlanish — his-tuyg'uni tanish va nomlash ko'nikmasi",
              "Jamoaviylik — xor va ansamblda birga ishlash tajribasi",
            ],
          },
          {
            kind: "eslatma",
            text: "Tarbiyaviy ta'sir asarning o'zidan emas, **asar bilan ishlashdan** kelib chiqadi. Bitta qo'shiqni shunchaki qo'yib qo'yish va uni mazmunini muhokama qilib, so'ng birga kuylash — ikki xil natija beradi.",
          },
          {
            kind: "matn",
            text: "O'qituvchining vazifasi — tanlash va yo'naltirish. Tanlash: asar yoshga, mavzuga va dars maqsadiga mosmi. Yo'naltirish: tinglashdan oldin savol qo'yiladi, keyin muhokama qilinadi. Savolsiz tinglash — fon musiqasi, savol bilan tinglash — ta'lim.",
          },
          {
            kind: "matn",
            text: "Shu bilan birga, musiqani faqat tarbiya vositasi deb qarash ham xato. Agar har bir asar «qanday xulosa chiqaramiz?» degan savolga olib kelsa, bola musiqani sevmay qo'yadi. Badiiy zavq — mustaqil qiymat; tarbiya undan o'sib chiqadi, uning o'rniga qo'yilmaydi.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: musiqaning estetik mohiyati",
        blocks: [
          {
            kind: "matn",
            text: "Musiqa — ijtimoiy ongning badiiy shakllaridan biri. U voqelikni so'z yoki tasvir bilan emas, tovush va vaqt orqali aks ettiradi. Shu sababli uning ta'sir yo'li ham boshqacha: tushunchadan emas, kechinmadan boshlanadi.",
          },
          {
            kind: "matn",
            text: "Musiqaning ikki xususiyati uning tarbiyaviy kuchini belgilaydi. Birinchisi — intonatsion tabiat: musiqiy ohang inson nutqining ko'tarilish-tushishi, so'rash, iltijo, quvonch ohangiga yaqin, shuning uchun u izohsiz tushuniladi. Ikkinchisi — vaqtga bog'liqligi: asar bir zumda emas, davom etib idrok qilinadi, tinglovchi uning oqimiga qo'shilib boradi.",
          },
          {
            kind: "matn",
            text: "Shu ikki xususiyatdan uchinchisi kelib chiqadi: musiqa to'g'ridan-to'g'ri emotsional ta'sir qiladi. Rasmdan yuz o'girish mumkin, kitobni yopish mumkin, musiqa esa yangrab turgan vaqtda tinglovchini o'z holatiga tortadi. Tarbiyada bu ham imkoniyat, ham mas'uliyat: bolaga qanday musiqa berilayotgani befarq narsa emas.",
          },
          {
            kind: "matn",
            text: "Shuning uchun estetik tarbiya musiqa darsida alohida maqsad sifatida emas, har bir faoliyat ichida amalga oshadi: bola qo'shiqni ifodali kuylaganda, tinglagan asari haqida fikr aytganda, bir ijroni ikkinchisidan afzal ko'rib sabab ko'rsatganda — har safar did shakllanadi.",
          },
        ],
      },
      {
        id: "vazifalar",
        title: "Musiqaning tarbiyaviy vazifalari",
        blocks: [
          {
            kind: "matn",
            text: "Musiqa darsining tarbiyaviy imkoniyatini tartibga solish uchun uning vazifalari ajratib ko'rsatiladi. Ular bir-birini inkor etmaydi, bitta darsda bir nechtasi birga ishlaydi:",
          },
          {
            kind: "royxat",
            items: [
              "Estetik — go'zallikni idrok etish, baholash va undan zavqlanish qobiliyatini shakllantirish",
              "Axloqiy — asar obrazi orqali qadriyatni his qildirish: mehr, do'stlik, mehnat, halollik",
              "Vatanparvarlik — milliy musiqa merosi va davlat ramzlari orqali yurtga daxldorlik tuyg'usi",
              "Emotsional — his-tuyg'uni tanish, nomlash va boshqarish tajribasi",
              "Kommunikativ — birgalikda kuylash va ijro orqali jamoada ishlash ko'nikmasi",
              "Rivojlantiruvchi — diqqat, xotira, tasavvur va nutqning o'sishi",
            ],
          },
          {
            kind: "matn",
            text: "Bu ro'yxat dars maqsadini yozishda bevosita ishlatiladi. «Qo'shiqni o'rgatish» — faoliyat, maqsad emas. Maqsad esa shu faoliyat orqali qaysi vazifa bajarilishini ko'rsatadi: masalan, «asar matni va ohangi orqali o'quvchida ona yurtga mehr tuyg'usini mustahkamlash».",
          },
          {
            kind: "eslatma",
            text: "Tarbiyaviy imkoniyat asarning o'zida tayyor holda turmaydi: u o'qituvchining savoli, suhbati va ijro talabi orqali ochiladi. Shuning uchun bir xil qo'shiq ikki darsda butunlay boshqacha natija beradi.",
          },
        ],
      },
      {
        id: "kamolot",
        title: "Shaxs kamoloti va musiqiy faoliyat",
        blocks: [
          {
            kind: "matn",
            text: "Shaxs kamoloti musiqa darsida uch yo'nalishda boradi. Birinchisi — emotsional soha: bola o'z kechinmasini tanishni va uni ifodalashni o'rganadi. Ikkinchisi — irodaviy soha: mashq qilish, takrorlash, natijaga yetguncha ishlash. Uchinchisi — ijtimoiy soha: xor yoki ansamblda o'z ovozini boshqalarnikiga moslash.",
          },
          {
            kind: "matn",
            text: "Uchinchi yo'nalish ko'pincha e'tibordan chetda qoladi, holbuki u eng kuchlisi. Birgalikda kuylashda bola o'z ovozini eshitishdan tashqari boshqalarni eshitishga majbur bo'ladi, umumiy natija uchun o'z xohishini cheklaydi va shu orqali amaliy tarzda jamoaviy mas'uliyatni o'rganadi.",
          },
          {
            kind: "matn",
            text: "Milliy musiqa merosi bu jarayonda alohida o'rin tutadi: alla, bolalar folklori, xalq qo'shiqlari va marosim kuylari bolaga o'z madaniyatining ohangini beradi. Jahon merosi esa qiyoslash imkonini beradi — did faqat taqqoslash orqali o'sadi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Estetik tarbiya — go'zallikni idrok etish, baholash va yaratish qobiliyatini shakllantirish jarayoni",
              "Badiiy did — san'at asarining qimmatini mustaqil baholay olish qobiliyati",
              "Intonatsiya — musiqiy fikrning eng kichik ifodali birligi; nutq ohangiga yaqinligi bilan tushunarli",
              "Musiqiy idrok — asarni eshitib, uning obrazini va tuzilishini anglash jarayoni",
              "Emotsional javob — asar uyg'otgan his-tuyg'uli munosabat; musiqiy tarbiyaning boshlanish nuqtasi",
              "Tarbiyaviy imkoniyat — asarning dars maqsadiga xizmat qila olish darajasi",
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
            text: "Maktab darsligidan bitta qo'shiq tanlang. Uch ustun yozing: (1) asarning badiiy mazmuni, (2) undan kelib chiqadigan tarbiyaviy imkoniyat, (3) shu imkoniyatni ochadigan bitta savol. Uchinchi ustun — eng muhimi: savolsiz imkoniyat ochilmaydi.",
          },
          {
            kind: "mashq",
            text: "Bitta asarni ikki xil kiritib ko'ring: avval «hozir tinglaymiz» deb, keyin «tinglayotganda qahramonning kayfiyati necha marta o'zgarishini sanang» deb. Ikki holatda sinfning diqqati qanday farq qilishini taxmin qiling va sababini yozing.",
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
                id: "m2-t1",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Musiqaning estetik mohiyati nimada deb ko'rsatiladi?",
                options: [
                  { id: "a", text: "Voqelikni tushuncha orqali yetkazishda" },
                  { id: "b", text: "Voqelikni kechinma orqali yetkazishda" },
                  { id: "c", text: "Nota yozuvining aniqligida" },
                  { id: "d", text: "Ijro texnikasining murakkabligida" },
                ],
                correctId: "b",
              },
              {
                id: "m2-t2",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Nega kun bo'yi musiqa tinglash o'z-o'zidan tarbiyalamaydi?",
                options: [
                  { id: "a", text: "Chunki musiqa sifatsiz bo'ladi" },
                  { id: "b", text: "Chunki tarbiyaviy ta'sir asar bilan ishlashdan — tanlov, savol va muhokamadan kelib chiqadi" },
                  { id: "c", text: "Chunki naushnikda ovoz past bo'ladi" },
                  { id: "d", text: "Chunki yoshlar klassik musiqa tinglamaydi" },
                ],
                correctId: "b",
              },
              {
                id: "m2-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "O'qituvchi asarni qo'ydi va darhol «bundan qanday xulosa chiqaramiz?» deb so'radi. Bu yondashuvning xavfi nimada?",
                options: [
                  { id: "a", text: "Savol juda oson" },
                  { id: "b", text: "Badiiy zavq xulosaga almashtiriladi va bola musiqadan sovishi mumkin" },
                  { id: "c", text: "Vaqt ko'p ketadi" },
                  { id: "d", text: "Bolalar javobni bilmaydi" },
                ],
                correctId: "b",
                explanation:
                  "Tarbiya badiiy taassurotdan o'sib chiqadi; uning o'rniga qo'yilsa, musiqa axloq darsiga aylanib qoladi.",
              },
              {
                id: "m2-t4",
                area: "metodika",
                bloom: "tushunish",
                kind: "multiple",
                prompt:
                  "Musiqa darsida vatanparvarlik tarbiyasi qaysi yo'llar bilan amalga oshadi?",
                options: [
                  { id: "a", text: "Davlat madhiyasini ongli va ifodali kuylash orqali" },
                  { id: "b", text: "Milliy musiqa va xalq qo'shiqlari bilan tanishish orqali" },
                  { id: "c", text: "Faqat bayram tadbirlarida qatnashish orqali" },
                  { id: "d", text: "Milliy cholg'ular sadosini tanish orqali" },
                ],
                correctIds: ["a", "b", "d"],
                explanation:
                  "Tadbir — qo'shimcha shakl; asosiy ish muntazam darsda bo'ladi.",
              },
              {
                id: "m2-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Tinglashdan oldin savol qo'yishning asosiy sababi nima?",
                options: [
                  { id: "a", text: "Dars rejasini to'ldirish uchun" },
                  { id: "b", text: "Diqqatni yo'naltirish uchun: savolsiz tinglash fonga aylanadi" },
                  { id: "c", text: "Bolalarni tekshirish uchun" },
                  { id: "d", text: "Vaqtni cho'zish uchun" },
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
              "Musiqa voqelikni kechinma orqali yetkazadi — avval his qildiradi, keyin tushuntiradi",
              "Tarbiyaviy ta'sir asarning o'zidan emas, u bilan ishlashdan kelib chiqadi",
              "O'qituvchining ikki asosiy harakati: mos asarni tanlash va diqqatni savol bilan yo'naltirish",
              "Estetik, axloqiy, vatanparvarlik, emotsional va jamoaviy tarbiya — bitta darsda birga ishlaydi",
              "Badiiy zavq mustaqil qiymat; tarbiya undan o'sib chiqadi, uning o'rniga qo'yilmaydi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "Sizga kuchli ta'sir qilgan bitta asarni eslang: o'sha paytda ta'sirni kuchaytirgan tashqi shart nima edi?",
      "Darsda tarbiyaviy maqsadni ochiq aytish kerakmi yoki asar o'zi gapirishi kerakmi? Javobingizni asoslang.",
    ],
  },

  /* ──────────────────────────── M3 ──────────────────────────── */
  {
    id: "met-m3",
    slug: "m3-musiqa-talimini-organish",
    title: "M3: Musiqa ta'limining maqsadi, tamoyillari va mazmuni",
    summary:
      "Bilim, ko'nikma va kompetensiya farqi; musiqa ta'limining tamoyillari va ular darsda qanday ko'rinadi.",
    durationMin: 80,
    bloom: "tushunish",
    outcomeId: "on-met-12",
    area: "metodika",
    dasturKodi: "M3",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN1"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "«Musiqa darsining maqsadi nima?» degan savolga ko'pincha «musiqani sevdirish» deb javob beriladi. Bu to'g'ri, lekin o'lchab bo'lmaydi: sevdiKmi yoki yo'qmi — darsning oxirida tekshirib bo'lmaydi.",
          },
          {
            kind: "matn",
            text: "Shuning uchun maqsad uch qatlamga ajratiladi: nimani **biladi**, nimani **qila oladi** va qanday vaziyatda buni **mustaqil qo'llaydi**. Uchalasi ham tekshiriladi.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Bilim — xotirada saqlanadigan ma'lumot: nota nomi, janr belgisi, bastakor ismi. Ko'nikma — takrorlash natijasida shakllangan harakat: toza kuylash, ritmni qarsak bilan berish. Kompetensiya — bilim va ko'nikmani **yangi vaziyatda** mustaqil qo'llay olish.",
          },
          {
            kind: "royxat",
            items: [
              "Bilim: «2/4 o'lchov ikki hissadan iborat»",
              "Ko'nikma: 2/4 o'lchovdagi qo'shiqni to'g'ri urg'u bilan kuylaydi",
              "Kompetensiya: notanish qo'shiqni eshitib, o'lchovini aniqlaydi va unga mos harakat o'ylab topadi",
            ],
          },
          {
            kind: "eslatma",
            text: "Uch qatlamni ajratish amaliy ahamiyatga ega: test bilimni, ijro ko'nikmani, ijodiy topshiriq esa kompetensiyani tekshiradi. Faqat test qo'yilsa, dars natijasi birinchi qatlamda qolib ketadi.",
          },
          {
            kind: "matn",
            text: "Musiqa ta'limining tamoyillari dars qurilishini belgilaydi. Ular umumiy didaktikadan olingan, lekin musiqada o'ziga xos ko'rinadi.",
          },
          {
            kind: "royxat",
            items: [
              "Badiiylik — darsda o'rganiladigan material yuqori badiiy qiymatga ega bo'lishi kerak",
              "Yoshga moslik — diapazon, matn murakkabligi va asar davomiyligi sinfga mos bo'lishi",
              "Ketma-ketlik — oddiydan murakkabga: avval eshitish, keyin kuylash, so'ng yozuv",
              "Ko'rgazmalilik — musiqada bu eshitish ko'rgazmaliligi: asarni jonli yoki yozuvda eshittirish",
              "Faollik — bola tinglovchi emas, ishtirokchi: kuylaydi, chaladi, harakat qiladi",
              "Milliy va umuminsoniy uyg'unligi — o'z xalq merosi va jahon musiqasi birga",
            ],
          },
          {
            kind: "matn",
            text: "Ta'lim mazmuni esa to'rt faoliyat turiga taqsimlanadi: musiqa tinglash, vokal-xor ijrochiligi, musiqa savodi va musiqiy-ritmik harakatlar. Yaxshi dars bitta faoliyatdan iborat bo'lmaydi — u bir necha turni almashtirib boradi, chunki bolaning diqqati bir xil ishda uzoq turmaydi.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: ta'lim tamoyillari",
        blocks: [
          {
            kind: "matn",
            text: "Tamoyil — bu metod emas, balki metod tanlashni boshqaradigan qoida. Musiqa darsida umumdidaktik tamoyillar ham, fanga xos tamoyillar ham birga ishlaydi.",
          },
          {
            kind: "matn",
            text: "Umumdidaktik tamoyillar barcha fanlar uchun bir xil, lekin musiqada o'ziga xos ko'rinish oladi:",
          },
          {
            kind: "royxat",
            items: [
              "Ilmiylik — atamalar to'g'ri ishlatiladi, soddalashtirish mazmunni buzmaydi",
              "Tizimlilik va izchillik — har bir yangi material oldingisiga tayanadi: eshitish, keyin kuylash, keyin nomlash",
              "Onglilik va faollik — bola nimani nega qilayotganini biladi va o'zi harakat qiladi, nusxa ko'chirmaydi",
              "Ko'rgazmalilik — musiqada u birinchi navbatda eshitish ko'rgazmaliligi: tirik ijro namunasi",
              "Mustahkamlik — material turli faoliyatda takrorlanadi, bir xil mashqda emas",
              "Yoshga va individual xususiyatga moslik — diapazon, matn hajmi, mashq davomiyligi",
            ],
          },
          {
            kind: "matn",
            text: "Fanga xos tamoyillar esa musiqa darsining o'ziga tegishli: badiiylik (dars material emas, asar atrofida quriladi), emotsionallik (his-tuyg'usiz idrok yo'q), musiqiy faoliyat turlarining birligi (kuylash, tinglash, savod va harakat bir-birini to'ldiradi) va amaliy yo'nalganlik (bola musiqa haqida gapirmaydi, musiqa qiladi).",
          },
          {
            kind: "eslatma",
            text: "«Ko'rgazmalilik» musiqada plakat yoki slayd degani emas. Asosiy ko'rgazma — tovushning o'zi. Yozuv ham ishlaydi, lekin o'qituvchining tirik ijrosi kuchliroq ta'sir qiladi: bola uni takrorlash mumkinligini ko'radi.",
          },
        ],
      },
      {
        id: "mazmun",
        title: "Ta'lim mazmuni va faoliyat turlari",
        blocks: [
          {
            kind: "matn",
            text: "Musiqa ta'limi mazmuni to'rt komponentdan iborat: bilim (nota savodi, janr, bastakor), ko'nikma (kuylash, eshitib aniqlash, ritmni bajarish), ijodiy faoliyat tajribasi (improvizatsiya, o'z variantini topish) va musiqaga emotsional-qadriyatli munosabat.",
          },
          {
            kind: "matn",
            text: "To'rtinchi komponent eng muhimi va eng qiyin baholanadigani. Birinchi uchtasi topshiriq bilan tekshiriladi, to'rtinchisi esa faqat bolaning tanlovi, savoli va ifodali ijrosi orqali ko'rinadi.",
          },
          {
            kind: "matn",
            text: "Mazmun darsda to'rt faoliyat turi orqali amalga oshadi:",
          },
          {
            kind: "royxat",
            items: [
              "Qo'shiq kuylash — eng faol va eng ko'p vaqt oladigan faoliyat",
              "Musiqa tinglash — idrok va tahlil, yo'naltiruvchi savollar bilan",
              "Musiqa savodi — eshitishdan yozuvga boradigan ketma-ketlikda",
              "Musiqiy-ritmik harakat va bolalar cholg'ularida ijro — ritmni tana bilan his qilish",
            ],
          },
          {
            kind: "matn",
            text: "To'rtalasi bitta darsda bo'lishi shart emas, lekin bitta chorak ichida muvozanatda bo'lishi kerak. Faqat kuylash bilan cheklangan dars o'quvchining idrokini ham, ritm hissini ham rivojlantirmaydi.",
          },
        ],
      },
      {
        id: "texnologiya",
        title: "Zamonaviy texnologiyalar va kompetensiya",
        blocks: [
          {
            kind: "matn",
            text: "Kompetensiya — bilim, ko'nikma va munosabatning amaliy vaziyatda birga ishlashi. «Nota nomlarini biladi» — bilim; «notanish sodda ohangni nota bo'yicha kuylay oladi» — kompetensiya. Dastur natijalari (TN1-TN8) aynan shu ikkinchi darajada yozilgan.",
          },
          {
            kind: "matn",
            text: "Kompetensiya tayyor holda uzatilmaydi — u faoliyat ichida shakllanadi. Shuning uchun zamonaviy texnologiyalarning umumiy jihati bitta: o'quvchini tinglovchidan ishtirokchiga aylantirish.",
          },
          {
            kind: "royxat",
            items: [
              "Interfaol metodlar — aqliy hujum, kichik guruhlarda ish, rolli o'yin, «aylanma stol»",
              "Muammoli ta'lim — dars savol bilan boshlanadi, javob tayyor berilmaydi",
              "Loyihaviy ta'lim — natija sifatida tayyor mahsulot: konsert, taqdimot, to'plam",
              "Flipped Classroom — tanishish uyda, ishlov sinfda",
              "Raqamli vositalar — audio yozuv, nota dasturi, platforma topshiriqlari",
              "Differensial yondashuv — bir material, turli darajadagi topshiriq",
            ],
          },
          {
            kind: "eslatma",
            text: "Texnologiya maqsadni almashtirmaydi. Agar dars maqsadi «qo'shiqni ifodali kuylash» bo'lsa, slayd va o'yin shu maqsadga xizmat qilgan taqdirdagina o'rinli. Aks holda ular darsni to'ldiradi, lekin natija bermaydi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Didaktik tamoyil — ta'lim jarayonini qurishda metod tanlashni boshqaradigan umumiy qoida",
              "Ta'lim mazmuni — o'zlashtirilishi kerak bo'lgan bilim, ko'nikma, ijodiy tajriba va munosabat majmui",
              "Kompetensiya — bilim va ko'nikmani notanish amaliy vaziyatda qo'llay olish qobiliyati",
              "Musiqiy faoliyat turlari — kuylash, tinglash, musiqa savodi, musiqiy-ritmik harakat va cholg'uda ijro",
              "Interfaol metod — o'quvchilarning o'zaro ta'siriga asoslangan o'qitish usuli",
              "Muammoli vaziyat — javobi oldindan berilmagan, izlanish talab qiladigan o'quv holati",
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
            text: "Bitta mavzu tanlang (masalan, «ritm va o'lchov»). Unga uchta natija yozing: bilim, ko'nikma va kompetensiya darajasida. Har biri uchun qanday topshiriq bilan tekshirishingizni ham yozing.",
          },
          {
            kind: "mashq",
            text: "45 daqiqalik darsni to'rt faoliyat turiga taqsimlang: tinglash, kuylash, savod, harakat. Qaysi biriga eng ko'p vaqt berdingiz va nima uchun? Taqsimotingizni sinf yoshi bilan asoslang.",
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
                id: "m3-t1",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt: "Kompetensiya bilim va ko'nikmadan nimasi bilan farq qiladi?",
                options: [
                  { id: "a", text: "U faqat nazariy bo'ladi" },
                  { id: "b", text: "U bilim va ko'nikmani yangi vaziyatda mustaqil qo'llashni bildiradi" },
                  { id: "c", text: "U faqat ijroga tegishli" },
                  { id: "d", text: "U test bilan o'lchanadi" },
                ],
                correctId: "b",
              },
              {
                id: "m3-t2",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "«Notanish qo'shiqni eshitib, o'lchovini aniqlaydi» — bu qaysi daraja?",
                options: [
                  { id: "a", text: "Bilim" },
                  { id: "b", text: "Ko'nikma" },
                  { id: "c", text: "Kompetensiya" },
                  { id: "d", text: "Malaka emas" },
                ],
                correctId: "c",
                explanation:
                  "Yangi material ustida mustaqil qo'llash — kompetensiya darajasi.",
              },
              {
                id: "m3-t3",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt: "Musiqada ko'rgazmalilik tamoyili avvalo nimani bildiradi?",
                options: [
                  { id: "a", text: "Plakat va rasmlardan foydalanish" },
                  { id: "b", text: "Eshitish ko'rgazmaliligi — asarni jonli yoki yozuvda eshittirish" },
                  { id: "c", text: "Doskaga yozish" },
                  { id: "d", text: "Videoproyektor ishlatish" },
                ],
                correctId: "b",
              },
              {
                id: "m3-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "O'qituvchi butun darsni faqat test bilan baholadi. Qaysi daraja tekshirilmay qoldi?",
                options: [
                  { id: "a", text: "Bilim" },
                  { id: "b", text: "Ko'nikma va kompetensiya" },
                  { id: "c", text: "Hech qaysi" },
                  { id: "d", text: "Faqat kompetensiya" },
                ],
                correctId: "b",
                explanation:
                  "Ijro ko'nikmani, ijodiy topshiriq esa kompetensiyani ko'rsatadi; test birinchi qatlamda qoladi.",
              },
              {
                id: "m3-t5",
                area: "metodika",
                bloom: "bilish",
                kind: "multiple",
                prompt: "Musiqa ta'limi mazmuniga kiradigan faoliyat turlari qaysilar?",
                options: [
                  { id: "a", text: "Musiqa tinglash" },
                  { id: "b", text: "Vokal-xor ijrochiligi" },
                  { id: "c", text: "Musiqa savodi" },
                  { id: "d", text: "Musiqiy-ritmik harakatlar" },
                  { id: "e", text: "Bastakorlar biografiyasini yodlash" },
                ],
                correctIds: ["a", "b", "c", "d"],
                explanation:
                  "Biografiya — material, faoliyat turi emas: u tinglash yoki savod darsining ichida uchraydi.",
              },
              {
                id: "m3-t6",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Nega bitta darsda faoliyat turlari almashtirib boriladi?",
                options: [
                  { id: "a", text: "Dastur shuni talab qilgani uchun" },
                  { id: "b", text: "Bolaning diqqati bir xil ishda uzoq turmaydi" },
                  { id: "c", text: "Vaqtni to'ldirish uchun" },
                  { id: "d", text: "Baholash osonlashsin uchun" },
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
              "Maqsad uch qatlamda: bilim — ko'nikma — kompetensiya; har biri o'z vositasi bilan tekshiriladi",
              "Tamoyillar: badiiylik, yoshga moslik, ketma-ketlik, ko'rgazmalilik, faollik, milliy va umuminsoniy uyg'unligi",
              "Mazmun to'rt faoliyatdan: tinglash, vokal-xor, musiqa savodi, ritmik harakatlar",
              "Yaxshi dars faoliyat turlarini almashtirib boradi",
              "Faqat test bilan baholash natijani birinchi qatlamda qoldiradi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'z darsingizda qaysi faoliyat turiga eng kam vaqt ajratishingiz mumkin va nima uchun?",
      "«Musiqani sevdirish» maqsadini qanday qilib tekshiriladigan natijaga aylantirasiz?",
    ],
  },

  /* ──────────────────────────── M4 ──────────────────────────── */
  {
    id: "met-m4",
    slug: "m4-meyoriy-huquqiy-asoslar",
    title: "M4: Me'yoriy-huquqiy asoslar, DTS va o'quv dasturlari",
    summary:
      "Qonundan dars ishlanmasigacha bo'lgan hujjatlar zanjiri va DTS talabini dars maqsadiga aylantirish.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-13",
    area: "metodika",
    dasturKodi: "M4",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN3"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Yosh o'qituvchi odatda bitta savol bilan keladi: «Nimani o'tishim kerak?» Javob dars ishlanmasida emas, undan yuqoridagi hujjatlarda turadi. Ular bir-biriga ulanib, keng talabdan aniq darsgacha torayib boradi.",
          },
          {
            kind: "matn",
            text: "Bu zanjirni bilmaslik ikki xil xatoga olib keladi: yo o'qituvchi o'zi bilganini o'tadi va talabdan chetga chiqadi, yo hujjatni so'zma-so'z ko'chiradi va dars jonsiz bo'lib qoladi.",
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
              "Ta'lim to'g'risidagi qonunchilik — umumiy huquqiy asos",
              "Davlat ta'lim standarti (DTS) — bitiruvchi nimani bilishi va qila olishi kerakligi",
              "Namunaviy o'quv dasturi — fan bo'yicha mavzular va soatlar taqsimoti",
              "Malaka talablari — har bir sinf uchun kutilayotgan natijalar",
              "Taqvim-mavzu reja — o'quv yili davomida mavzular ketma-ketligi",
              "Dars ishlanmasi — bitta darsning aniq loyihasi",
            ],
          },
          {
            kind: "matn",
            text: "Zanjirning har bir bo'g'ini yuqoridagiga tayanadi. DTS «nima natija» deydi, dastur «qaysi mavzuda» deydi, taqvim-mavzu reja «qaysi haftada» deydi, ishlanma esa «bu darsda aniq qanday» deydi.",
          },
          {
            kind: "eslatma",
            text: "DTS natijani belgilaydi, usulni emas. Qaysi metod, qaysi asar va qanday mashq bilan borishni o'qituvchi tanlaydi — shuning uchun bir xil talab ostida ikki xil, lekin ikkalasi ham to'g'ri dars bo'lishi mumkin.",
          },
          {
            kind: "matn",
            text: "Standart talabini dars maqsadiga aylantirish uchun uch qadam bor: talabni o'qish, uni kuzatiladigan harakatga aylantirish, so'ng shu harakatni tekshiradigan topshiriq tanlash.",
          },
          {
            kind: "royxat",
            items: [
              "Talab: «o'quvchi xalq qo'shiqlarining janr xususiyatlarini biladi»",
              "Kuzatiladigan harakat: «ikki xalq qo'shig'ini eshitib, janrini aytadi va bitta belgisini asoslaydi»",
              "Tekshiruv: tinglash topshirig'i + og'zaki asos",
            ],
          },
          {
            kind: "matn",
            text: "O'quv dasturi va fan dasturini ishlab chiqishda bir nechta tamoyilga amal qilinadi: natijaga yo'naltirilganlik, mazmun va soatning muvofiqligi, baholashning ta'lim natijasiga bog'langanligi, hamda uzluksizlik — oldingi sinf natijasi keyingisining poydevori bo'lishi.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: hujjatlar zanjiri",
        blocks: [
          {
            kind: "matn",
            text: "Maktabdagi har bir dars o'zidan yuqoridagi hujjatga tayanadi. Bu zanjir umumiydan xususiyga qarab torayib boradi va uning har bir bo'g'ini o'z savoliga javob beradi.",
          },
          {
            kind: "royxat",
            items: [
              "Ta'lim to'g'risidagi qonunchilik — ta'lim tizimining umumiy huquqiy asosi",
              "Davlat ta'lim standarti (DTS) — bitiruvchidan nima talab qilinadi",
              "Namunaviy o'quv reja — qaysi fan, qaysi sinfda, haftasiga necha soat",
              "Fan dasturi — shu fan bo'yicha mavzular, soat taqsimoti va ta'lim natijalari",
              "Darslik va o'quv-metodik majmua — mazmunning o'quvchiga yetadigan ko'rinishi",
              "Taqvim-mavzu reja — mavzularning o'quv yili bo'ylab taqsimoti",
              "Dars ishlanmasi — bitta darsning maqsadi, bosqichlari va baholash usuli",
            ],
          },
          {
            kind: "matn",
            text: "Zanjirning ma'nosi shunda: o'qituvchi dars maqsadini o'zidan to'qimaydi, uni standart talabidan chiqaradi. Teskarisi ham to'g'ri — standart talabi dars maqsadiga aylanmaguncha, u qog'ozda qoladi.",
          },
          {
            kind: "matn",
            text: "Shu sababli metodikada asosiy ko'nikmalardan biri — talabni maqsadga aylantirish. Standartdagi «o'quvchi musiqa asarini idrok eta oladi» degan umumiy talab bitta dars uchun kuzatiladigan maqsadga aylantiriladi: «o'quvchi tinglangan asarning tempi va kayfiyatini ikki so'z bilan ta'riflay oladi».",
          },
        ],
      },
      {
        id: "dts",
        title: "DTS va malaka talablari",
        blocks: [
          {
            kind: "matn",
            text: "Davlat ta'lim standarti ta'lim natijasini belgilaydi: bitiruvchi nimani bilishi va qila olishi kerak. U dars qanday o'tilishini aytmaydi — usul tanlash o'qituvchi ixtiyorida qoladi. Standart javobgarlikni natijaga bog'laydi, jarayonga emas.",
          },
          {
            kind: "matn",
            text: "Standart talablari odatda uch darajada beriladi: bilish darajasi (atama, nom, qoida), qo'llash darajasi (tanish vaziyatda bajarish) va mustaqil faoliyat darajasi (notanish vaziyatda ishlatish). Dars maqsadi qaysi darajaga qaratilganini aniqlash baholash usulini ham belgilab beradi.",
          },
          {
            kind: "matn",
            text: "Malaka talablari esa o'qituvchining o'ziga qo'yiladi: qaysi kompetensiyalarga ega bo'lishi kerak. Fan dasturidagi TN1-TN8 natijalari aynan shu toifadagi hujjat: ular talabadan nima kutilishini aytadi.",
          },
          {
            kind: "eslatma",
            text: "Me'yoriy hujjatlar yangilanib turadi: standart tahrirlanadi, o'quv reja o'zgaradi, darslik qayta nashr etiladi. Shuning uchun dars ishlanmasini yozishdan oldin hujjatning joriy tahririni tekshirish kerak — platformadagi tavsif tartibni tushuntiradi, hujjatning o'rnini bosmaydi.",
          },
        ],
      },
      {
        id: "amalda",
        title: "Talabni maqsadga aylantirish",
        blocks: [
          {
            kind: "matn",
            text: "Amalda bu ish uch bosqichda bajariladi. Birinchi bosqichda standart talabi topiladi va u qaysi darajaga tegishli ekani aniqlanadi. Ikkinchi bosqichda talab kuzatiladigan fe'l bilan qayta yoziladi: «tushunadi» emas, «ajrata oladi», «ko'rsata oladi», «ifodali kuylaydi». Uchinchi bosqichda maqsad qanday tekshirilishi yoziladi.",
          },
          {
            kind: "matn",
            text: "Uchinchi bosqich eng ko'p tashlab ketiladi. Holbuki tekshirish usuli yozilmagan maqsad — maqsad emas, niyat. «O'quvchilarda vatanparvarlik tuyg'usini shakllantirish» darsning yakunida qanday ko'rinadi? Agar javob yo'q bo'lsa, maqsadni toraytirish kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Talab: o'quvchi musiqa asarini idrok eta oladi",
              "Daraja: qo'llash",
              "Dars maqsadi: tinglangan asarning kayfiyati va tempini ikki so'z bilan ta'riflay oladi",
              "Tekshirish: har bir o'quvchi daftarga ikki so'z yozadi, uchtasi ovoz chiqarib o'qiydi",
              "Mezon: so'z asar xarakteriga mos va sabab bilan izohlangan",
            ],
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Davlat ta'lim standarti — ta'lim natijasiga qo'yiladigan majburiy talablar hujjati",
              "O'quv reja — fanlar va ularga ajratilgan soatlar taqsimoti",
              "Fan dasturi — fan bo'yicha mavzular, soatlar va ta'lim natijalari hujjati",
              "Taqvim-mavzu reja — mavzularning o'quv yili bo'ylab taqsimlangan jadvali",
              "Dars ishlanmasi — bitta darsning maqsadi, bosqichlari, metodlari va baholash usuli yozilgan hujjat",
              "Kuzatiladigan maqsad — bajarilgani dars oxirida aniq ko'rinadigan qilib yozilgan maqsad",
              "Malaka talablari — o'qituvchidan talab qilinadigan kasbiy kompetensiyalar ro'yxati",
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
            text: "Bitta sinf uchun DTS dagi bitta talabni oling. Uni uch qadam bo'yicha ishlang: talab → kuzatiladigan harakat → tekshirish usuli. Harakatni yozishda «biladi», «tushunadi» kabi fe'llardan qoching — ular ko'rinmaydi.",
          },
          {
            kind: "mashq",
            text: "Taqvim-mavzu rejadan bitta haftani oling va shu haftaga mos uchta asar taklif qiling. Har bir tanlovingizni DTS talabi bilan bog'lab, bir jumlada asoslang.",
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
                id: "m4-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "Davlat ta'lim standarti nimani belgilaydi?",
                options: [
                  { id: "a", text: "Har bir darsda qaysi asar ijro etilishini" },
                  { id: "b", text: "Bitiruvchi nimani bilishi va qila olishi kerakligini" },
                  { id: "c", text: "O'qituvchining ish haqini" },
                  { id: "d", text: "Darslik muqovasining rangini" },
                ],
                correctId: "b",
              },
              {
                id: "m4-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Nega bir xil DTS talabi ostida ikki xil dars ham to'g'ri bo'lishi mumkin?",
                options: [
                  { id: "a", text: "Chunki DTS natijani belgilaydi, usulni emas" },
                  { id: "b", text: "Chunki DTS tavsiya xarakterida" },
                  { id: "c", text: "Chunki maktablar farq qiladi" },
                  { id: "d", text: "Chunki o'qituvchi o'zi hal qiladi" },
                ],
                correctId: "a",
              },
              {
                id: "m4-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Quyidagi maqsadlardan qaysi biri kuzatiladigan tarzda yozilgan?",
                options: [
                  { id: "a", text: "O'quvchi xalq qo'shig'ini tushunadi" },
                  { id: "b", text: "O'quvchi xalq qo'shig'ini sevadi" },
                  { id: "c", text: "O'quvchi ikki xalq qo'shig'ini eshitib, janrini aytadi va bitta belgisini asoslaydi" },
                  { id: "d", text: "O'quvchi xalq qo'shig'ini biladi" },
                ],
                correctId: "c",
                explanation:
                  "«Tushunadi», «biladi», «sevadi» — ko'rinmaydi. «Aytadi va asoslaydi» — kuzatiladi va tekshiriladi.",
              },
              {
                id: "m4-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt: "Hujjatlar zanjirining to'g'ri ketma-ketligi qaysi?",
                options: [
                  { id: "a", text: "Dars ishlanmasi → taqvim-mavzu reja → o'quv dasturi → DTS" },
                  { id: "b", text: "DTS → namunaviy o'quv dasturi → taqvim-mavzu reja → dars ishlanmasi" },
                  { id: "c", text: "O'quv dasturi → DTS → dars ishlanmasi → taqvim-mavzu reja" },
                  { id: "d", text: "Taqvim-mavzu reja → DTS → o'quv dasturi → dars ishlanmasi" },
                ],
                correctId: "b",
              },
              {
                id: "m4-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "O'qituvchi dars ishlanmasiga DTS talabini so'zma-so'z ko'chirib qo'ydi. Asosiy muammo nimada?",
                options: [
                  { id: "a", text: "Hujjat uzun bo'lib ketadi" },
                  { id: "b", text: "Talab umumiy, dars esa aniq harakatni talab qiladi — maqsad tekshirib bo'lmaydigan bo'lib qoladi" },
                  { id: "c", text: "Bu qoidabuzarlik" },
                  { id: "d", text: "Bolalar tushunmaydi" },
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
              "Zanjir: qonunchilik → DTS → namunaviy o'quv dasturi → taqvim-mavzu reja → dars ishlanmasi",
              "DTS natijani belgilaydi, usulni o'qituvchi tanlaydi",
              "Talabni dars maqsadiga aylantirish: talab → kuzatiladigan harakat → tekshirish usuli",
              "«Biladi», «tushunadi» kabi fe'llar maqsadni ko'rinmas qiladi",
              "Dastur tamoyillari: natijaga yo'naltirilganlik, mazmun-soat muvofiqligi, baholashning natijaga bog'liqligi, uzluksizlik",
            ],
          },
        ],
      },
    ],
    reflection: [
      "Hujjatlar zanjirining qaysi bo'g'ini siz uchun hozir eng noaniq va buni qanday aniqlashtirasiz?",
      "Dars maqsadini yozishda qaysi fe'llardan foydalanasiz? Uchtasini yozing.",
    ],
  },

  /* ──────────────────────────── M5 ──────────────────────────── */
  {
    id: "met-m5",
    slug: "m5-dars-tuzilishi-turlari",
    title: "M5: Musiqa madaniyati darsining tuzilishi va turlari",
    summary:
      "Darsning tarkibiy qismlari, turlari va musiqa darsining boshqa fanlardan farqi; integrallashgan dars.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-1",
    area: "metodika",
    dasturKodi: "M5",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN3"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Musiqa darsi boshqa darslardan bir narsasi bilan jiddiy farq qiladi: unda bola nafaqat biladi, balki **ijro etadi**. Ya'ni dars davomida sinfda ovoz chiqadi, harakat bo'ladi va bu tartibsizlik emas — bu darsning mazmuni.",
          },
          {
            kind: "matn",
            text: "Shuning uchun musiqa darsining tuzilmasi ham boshqacha quriladi: unda tayyorgarlik (ovozni ochish), almashinuv (faoliyat turlari) va emotsional cho'qqi bo'ladi.",
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
              "Tashkiliy qism — musiqiy salomlashuv, diqqatni yig'ish (2–3 daqiqa)",
              "Ovoz sozlash — nafas va distikatsiya mashqlari, ovozni ochish (3–5 daqiqa)",
              "Asosiy qism — yangi material: tinglash, qo'shiq o'rganish, musiqa savodi (25–30 daqiqa)",
              "Mustahkamlash — takrorlash, ijodiy topshiriq (5–7 daqiqa)",
              "Yakun — xulosa, baholash, uyga vazifa (3–5 daqiqa)",
            ],
          },
          {
            kind: "matn",
            text: "Bu taqsimot qat'iy emas: dars turiga qarab o'zgaradi. Yangi material beriladigan darsda asosiy qism uzun, takrorlash darsida esa mustahkamlash kengayadi.",
          },
          {
            kind: "royxat",
            items: [
              "Yangi bilim beruvchi dars — yangi asar yoki tushuncha kiritiladi",
              "Mustahkamlash darsi — o'rganilgan repertuar ustida ishlash, ijro sifatini oshirish",
              "Takrorlash-umumlashtirish darsi — chorak yoki bo'lim yakunida",
              "Nazorat darsi — ijro va bilim baholanadi",
              "Integrallashgan dars — adabiyot, tarix, tasviriy san'at bilan birga",
              "Noan'anaviy shakllar — konsert-dars, sayohat-dars, musiqiy ertak",
            ],
          },
          {
            kind: "eslatma",
            text: "Musiqa darsida «emotsional cho'qqi» tushunchasi bor: darsning bir nuqtasida sinf eng yuqori qiziqish va birlikni his qiladi. Odatda bu — butun sinf birga kuylaydigan lahza. Uni darsning oxiriga qoldirish kerak emas: charchagan sinfda cho'qqi bo'lmaydi.",
          },
          {
            kind: "matn",
            text: "Integrallashgan dars musiqani boshqa fan bilan bog'laydi: she'r matni — adabiyot, asar yaratilgan davr — tarix, kuyning kayfiyati — rang va tasvir. Bunday dars mazmunni chuqurlashtiradi, lekin bir shartda: musiqa yordamchi bezak bo'lib qolmasligi kerak. Agar darsning musiqiy maqsadini olib tashlasa ham dars buzilmasa, demak u integratsiya emas, illyustratsiya bo'lgan.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: darsning tarkibiy qismlari",
        blocks: [
          {
            kind: "matn",
            text: "Musiqa madaniyati darsi boshqa darslar kabi tashkiliy tuzilmaga ega, lekin uning ichki mantig'i boshqacha: dars material bo'yicha emas, badiiy obraz bo'yicha quriladi. Shuning uchun bosqichlar ketma-ketligi mazmunan emas, emotsional jihatdan ham o'ylab chiqiladi.",
          },
          {
            kind: "matn",
            text: "Darsning odatdagi tarkibiy qismlari:",
          },
          {
            kind: "royxat",
            items: [
              "Tashkiliy qism va musiqiy salomlashuv — sinfni ish holatiga keltirish",
              "Ovoz va nafas mashqlari (qizdirish) — kuylashdan oldin majburiy",
              "O'tilganni takrorlash — avvalgi qo'shiq yoki material",
              "Yangi material ustida ish — yangi qo'shiq yoki tinglash uchun asar",
              "Mustahkamlash — boshqa faoliyat turida takrorlash",
              "Yakun va baholash — nima o'rganildi, nima qoldi",
              "Uyga vazifa — ko'pincha tinglash yoki kuzatish topshirig'i",
            ],
          },
          {
            kind: "matn",
            text: "Bu ro'yxat qat'iy tartib emas, balki tekshiruv ro'yxati: qaysi qism tushib qolsa, dars nimani yo'qotishini ko'rsatadi. Qizdirishsiz kuylash ovozga zarar beradi; yakunsiz dars esa o'quvchida nima o'rganganini qoldirmaydi.",
          },
        ],
      },
      {
        id: "turlari",
        title: "Dars turlari va shakllari",
        blocks: [
          {
            kind: "matn",
            text: "Dars turi uning asosiy didaktik maqsadiga qarab belgilanadi:",
          },
          {
            kind: "royxat",
            items: [
              "Yangi bilim beruvchi dars — yangi qo'shiq, yangi tushuncha yoki yangi janr bilan tanishtirish",
              "Mustahkamlovchi dars — o'rganilgan materialni turli faoliyatda qaytarish",
              "Takrorlash va umumlashtiruvchi dars — chorak yoki bo'lim yakunida bog'lash",
              "Nazorat darsi — natijani o'lchash",
              "Aralash dars — bir nechta maqsad birga; maktabda eng ko'p uchraydigan turi",
              "Integrallashgan dars — boshqa fan bilan birga: adabiyot, tarix, tasviriy san'at",
            ],
          },
          {
            kind: "matn",
            text: "Shakl esa boshqa narsani bildiradi: ish qanday tashkil etilgani. Frontal (butun sinf birga), guruhli, juftlikda va individual shakllar bitta dars ichida almashib turadi. Faqat frontal shaklda o'tgan darsda sust o'quvchi butunlay ko'rinmay qoladi.",
          },
          {
            kind: "matn",
            text: "Integrallashgan dars alohida e'tibor talab qiladi. U ikki fanning mavzusini mexanik qo'shish emas: integratsiya faqat ikkala fan ham bitta savolga javob berganda ishlaydi. Masalan, «Vatan» mavzusi adabiyotda she'r, musiqada qo'shiq orqali ochilsa — bu integratsiya; shunchaki darsda she'r o'qish esa — bezak.",
          },
        ],
      },
      {
        id: "farqi",
        title: "Musiqa darsining boshqa fanlardan farqi",
        blocks: [
          {
            kind: "matn",
            text: "Musiqa darsining o'ziga xosligi to'rt nuqtada ko'rinadi.",
          },
          {
            kind: "royxat",
            items: [
              "Badiiy yaxlitlik — dars bo'laklarga bo'lingan bo'lsa ham, bitta obraz atrofida birlashadi",
              "Emotsional rivojlanish — darsda eng kuchli taassurot qoldiradigan nuqta bo'ladi va u odatda o'rtadan keyinroqqa rejalashtiriladi",
              "Amaliy faollik — o'quvchi vaqtining katta qismida musiqa qiladi, musiqa haqida eshitmaydi",
              "Baholashning o'ziga xosligi — ijro sifati rubrika bilan baholanadi, chunki unda bitta to'g'ri javob yo'q",
            ],
          },
          {
            kind: "matn",
            text: "Ikkinchi nuqta ko'pincha «emotsional cho'qqi» deb ataladi. Atama shartli, lekin ortidagi talab aniq: dars bir tekis emas, ko'tarilish bilan qurilishi kerak. Agar eng kuchli asar dars boshida berilsa, qolgan qismi sustlashadi; oxiriga qoldirilsa, unga vaqt yetmay qoladi.",
          },
          {
            kind: "eslatma",
            text: "Shuning uchun dars ishlanmasini yozganda faqat «nima qilinadi» emas, «qaysi daqiqada eng qiziq bo'ladi» degan savolga ham javob berish kerak.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dars turi — darsning asosiy didaktik maqsadiga ko'ra belgilanadigan toifasi",
              "Dars shakli — o'quv ishini tashkil etish usuli: frontal, guruhli, juftlikda, individual",
              "Aralash dars — bir nechta didaktik maqsadni birlashtirgan, maktabda eng keng tarqalgan dars turi",
              "Integrallashgan dars — ikki yoki undan ortiq fan mazmunini bitta savol atrofida birlashtirgan dars",
              "Qizdirish — kuylashdan oldingi ovoz va nafas mashqlari majmui",
              "Emotsional cho'qqi — darsning eng kuchli taassurot qoldiradigan nuqtasi",
              "Badiiy yaxlitlik — dars bosqichlarining bitta obraz atrofida birlashishi",
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
            text: "45 daqiqalik yangi bilim beruvchi darsning vaqt taqsimotini yozing: har bir qismga necha daqiqa va nima bo'lishini. So'ng shu darsni «mustahkamlash darsi» ga aylantiring — qaysi qismlar o'zgardi?",
          },
          {
            kind: "mashq",
            text: "Bitta integrallashgan dars g'oyasini yozing (musiqa + boshqa fan). So'ng o'zingizni tekshiring: musiqiy maqsadni olib tashlasangiz, dars qulaydimi? Qulamasa — g'oyani qayta ishlang.",
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
                id: "m5-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "Musiqa darsida ovoz sozlash qismining vazifasi nima?",
                options: [
                  { id: "a", text: "Dars boshlanganini bildirish" },
                  { id: "b", text: "Nafas va ovoz apparatini kuylashga tayyorlash" },
                  { id: "c", text: "Davomatni tekshirish" },
                  { id: "d", text: "Uyga vazifani so'rash" },
                ],
                correctId: "b",
              },
              {
                id: "m5-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Musiqa darsining boshqa fanlardan asosiy farqi nimada?",
                options: [
                  { id: "a", text: "Unda baho qo'yilmaydi" },
                  { id: "b", text: "Unda o'quvchi bilim olish bilan birga ijro etadi — ovoz va harakat darsning mazmuni" },
                  { id: "c", text: "U qisqaroq bo'ladi" },
                  { id: "d", text: "Unda uyga vazifa bo'lmaydi" },
                ],
                correctId: "b",
              },
              {
                id: "m5-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Chorak yakunida o'tkaziladigan, bir necha mavzuni birlashtiradigan dars qaysi turga kiradi?",
                options: [
                  { id: "a", text: "Yangi bilim beruvchi dars" },
                  { id: "b", text: "Takrorlash-umumlashtirish darsi" },
                  { id: "c", text: "Integrallashgan dars" },
                  { id: "d", text: "Konsert-dars" },
                ],
                correctId: "b",
              },
              {
                id: "m5-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Darsda emotsional cho'qqini oxirgi daqiqalarga qo'yishning xavfi nimada?",
                options: [
                  { id: "a", text: "Qo'ng'iroq chalinib qoladi" },
                  { id: "b", text: "Charchagan sinfda cho'qqi bo'lmaydi — lahza yo'qoladi" },
                  { id: "c", text: "Baho qo'yishga ulgurilmaydi" },
                  { id: "d", text: "Uyga vazifa berilmay qoladi" },
                ],
                correctId: "b",
              },
              {
                id: "m5-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Integrallashgan dars qachon haqiqiy integratsiya hisoblanadi?",
                options: [
                  { id: "a", text: "Ikki fan nomi dars mavzusida bo'lsa" },
                  { id: "b", text: "Musiqiy maqsad olib tashlansa, dars buzilib qolsa" },
                  { id: "c", text: "Ikki o'qituvchi birga kirsa" },
                  { id: "d", text: "Taqdimot ishlatilsa" },
                ],
                correctId: "b",
                explanation:
                  "Aks holda musiqa illyustratsiya bo'lib qoladi: uni olib tashlasa ham dars o'z maqsadiga yetaveradi.",
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
              "Qismlar: tashkiliy, ovoz sozlash, asosiy, mustahkamlash, yakun — nisbati dars turiga qarab o'zgaradi",
              "Turlari: yangi bilim, mustahkamlash, takrorlash-umumlashtirish, nazorat, integrallashgan, noan'anaviy",
              "Musiqa darsining farqi — bola ijro etadi; ovoz va harakat mazmunning bir qismi",
              "Emotsional cho'qqi rejalashtiriladi va charchash nuqtasiga qoldirilmaydi",
              "Integratsiya mezoni: musiqiy maqsadni olib tashlasa, dars buzilishi kerak",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'z darsingizda emotsional cho'qqini qaysi daqiqaga rejalashtirasiz va nima bilan?",
      "Qaysi dars turini o'tish siz uchun eng qiyin bo'ladi deb o'ylaysiz? Nima uchun?",
    ],
  },
  /* ──────────────────────────── M6 ──────────────────────────── */
  {
    id: "met-m6",
    slug: "m6-ijodiy-musiqiy-mahorat",
    title: "M6: Ijodiy musiqiy mahorat",
    summary:
      "Ijodkorlik, ijrochilik va improvizatsiyaning o'zaro bog'liqligi hamda ularni bo'lajak o'qituvchida rivojlantirish yo'llari.",
    durationMin: 80,
    bloom: "sintez",
    outcomeId: "on-met-15",
    area: "metodika",
    dasturKodi: "M6",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN5"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "«Ijodkorlik — tug'ma qobiliyat» degan qarash o'qituvchi uchun qulay, lekin zararli: u mas'uliyatni olib tashlaydi. Agar ijodkorlik faqat tug'ma bo'lsa, uni rivojlantirishga urinish ham shart emas.",
          },
          {
            kind: "matn",
            text: "Amalda ijodiy musiqiy mahorat bir necha komponentdan iborat va ularning har biri alohida mashq bilan o'sadi. Shuning uchun uni tarkibiy qismlarga ajratib qarash kerak.",
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
              "Musiqiy tasavvur — eshitilmagan ohangni ichki quloq bilan «ko'rish»",
              "Ijrochilik — tasavvurni tovushga aylantirish texnikasi",
              "Improvizatsiya — tayyor matnsiz, shu yerda yaratish",
              "Kompozitsion fikrlash — material tanlash va uni shaklga solish",
              "Baholovchi quloq — o'z ijrosini tanqidiy eshitish",
            ],
          },
          {
            kind: "matn",
            text: "Uchta asosiy komponent bir-biriga bog'langan. Ijrochiliksiz improvizatsiya chala qoladi: tasavvur bor, lekin uni chiqarish qo'ldan kelmaydi. Improvizatsiyasiz ijrochilik esa takrorlashga aylanadi: o'rgangan narsa yaxshi, lekin yangisi yo'q.",
          },
          {
            kind: "eslatma",
            text: "Improvizatsiya «nimani xohlasang shuni chal» degani emas. U doim chegara bilan boshlanadi: faqat uchta tovush, faqat bitta ritmik naqsh, faqat to'rt takt. Chegara qanchalik aniq bo'lsa, bola shunchalik erkin ishlaydi — chunki qayerdan boshlashni biladi.",
          },
          {
            kind: "matn",
            text: "Bo'lajak o'qituvchida ijodiy mahorat ikki sababdan kerak. Birinchisi — o'zi uchun: darsda doim kutilmagan holat bo'ladi va tayyor qolip yetmaydi. Ikkinchisi — bola uchun: o'zi ijod qilmaydigan o'qituvchi bolaning ijodini ham tanimaydi, chunki uni baholash mezoni yo'q.",
          },
          {
            kind: "matn",
            text: "Rivojlanish bosqichlari odatda shunday ketadi: taqlid → o'zgartirish → mustaqil yaratish. Har bosqichda topshiriq turi o'zgaradi: avval «xuddi shunday takrorlang», keyin «oxirini o'zgartiring», so'ng «shu kayfiyatda o'zingiz tuzing».",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: ijodiy mahorat tuzilishi",
        blocks: [
          {
            kind: "matn",
            text: "Ijodiy musiqiy mahorat — tayyor namunani takrorlash emas, musiqiy materialdan o'z yechimini yarata olish qobiliyati. U bir butun ko'nikma emas, bir nechta komponentdan tashkil topadi va har biri alohida rivojlanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Musiqiy idrok — asarni eshitib, uning obrazi va tuzilishini anglash",
              "Ijrochilik — o'z ovozi yoki cholg'usi bilan badiiy natijaga erisha olish",
              "Improvizatsiya — tayyorgarliksiz, shu zahoti musiqiy javob topish",
              "Kompozitsion tafakkur — ohang yoki ritmni o'ylab topib, uni tugallangan shaklga keltirish",
              "Refleksiya — o'z ijrosini tanqidiy eshitish va nima o'zgarishi kerakligini ayta olish",
            ],
          },
          {
            kind: "matn",
            text: "Uch komponent — idrok, ijrochilik va improvizatsiya — o'zaro bog'liq va bir-birini oziqlantiradi. Ko'p eshitgan bola ko'proq ijro variantini biladi; ko'p ijro qilgan bola eshitganini chuqurroq tushunadi; improvizatsiya esa ikkisini birlashtiradi, chunki unda eshitgan narsa darhol ijroga aylanadi.",
          },
          {
            kind: "matn",
            text: "Rivojlanish bosqichlari odatda shunday ketadi: taqlid (namunani takrorlash) — o'zgartirish (namunaga o'z elementini qo'shish) — mustaqil yaratish (o'z materialini topish). Bosqichni o'tkazib yuborib bo'lmaydi: taqlid tajribasisiz improvizatsiya ko'pincha tasodifiy tovushlarga aylanadi.",
          },
        ],
      },
      {
        id: "metodlar",
        title: "Rivojlantirish metodlari",
        blocks: [
          {
            kind: "matn",
            text: "Ijodkorlikni «rivojlantirish» uchun alohida dars kerak emas — u oddiy topshiriqning shaklini o'zgartirish orqali hosil bo'ladi. Yopiq topshiriqning bitta to'g'ri javobi bor, ochiq topshiriqda esa bir nechta to'g'ri yechim mumkin.",
          },
          {
            kind: "royxat",
            items: [
              "Savol-javob (aks-sado emas) — o'qituvchi ikki taktli savol kuylaydi, o'quvchi o'z javobini topadi",
              "Ohangni tugatish — boshlangan ibora beriladi, oxiri o'quvchi tomonidan o'ylab topiladi",
              "Ritmik improvizatsiya — berilgan she'riy satrga ritmik naqsh topish",
              "Tembr tanlash — asar obraziga mos cholg'uni tanlab, tanlovni asoslash",
              "Harakat bilan ifodalash — asar xarakterini plastik harakatda ko'rsatish",
              "Variant yaratish — tanish qo'shiqni boshqa kayfiyatda ijro etish va farqni tushuntirish",
            ],
          },
          {
            kind: "matn",
            text: "Har bir topshiriqda bitta cheklov bo'lishi kerak: cheklovsiz ijod chalkashlikka aylanadi. «Nima xohlasang, shuni qil» o'rniga «to'rt zarbli ritm o'ylab top, oxirgi zarb cho'ziq bo'lsin» deyilsa, natija ham ijodiy, ham baholanadigan bo'ladi.",
          },
          {
            kind: "eslatma",
            text: "Ijodiy ish «to'g'ri javob» mezoni bilan baholanmaydi. Baholash mezonlari boshqacha bo'ladi: topshiriq shartiga mosligi, g'oyaning o'ziga xosligi, ijro aniqligi va o'z tanlovini asoslay olish.",
          },
        ],
      },
      {
        id: "meros",
        title: "Milliy va jahon merosi ijodiy faoliyatda",
        blocks: [
          {
            kind: "matn",
            text: "Improvizatsiya o'zbek musiqa an'anasida begona tushuncha emas: maqom ijrochiligida ham, xalq cholg'u ijrochiligida ham ijrochi matnni aynan takrorlamaydi, uni o'z uslubida talqin qiladi. Ustoz-shogird an'anasining o'zagi ham shu — shogird avval taqlid qiladi, keyin o'z ovozini topadi.",
          },
          {
            kind: "matn",
            text: "Shu an'ana maktab darsida ham ishlaydi: bola xalq qo'shig'ini o'rganib, keyin unga o'z ritmik jo'rligini topsa, u ham milliy merosga, ham ijodiy faoliyatga bir vaqtda kiradi.",
          },
          {
            kind: "matn",
            text: "Jahon tajribasidan esa ijodkorlikni tizimli rivojlantirish usullari olinadi: Orf yondashuvida bola oddiy cholg'ular bilan birga musiqa yaratadi, Kodai tizimida ovoz va ichki eshituv birinchi o'ringa qo'yiladi, Dalkroz tizimida musiqa harakat orqali his qilinadi. Uchalasi ham bitta fikrga keladi: bola musiqani faqat eshitib emas, qilib o'rganadi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Ijodiy musiqiy mahorat — musiqiy materialdan o'z badiiy yechimini yarata olish qobiliyati",
              "Improvizatsiya — oldindan tayyorlanmagan, ijro paytida yaratiladigan musiqa",
              "Ochiq topshiriq — bir nechta to'g'ri yechimga yo'l qo'yadigan o'quv topshirig'i",
              "Taqlid bosqichi — namunani takrorlash orqali o'rganish; ijodiy rivojlanishning birinchi bosqichi",
              "Refleksiya — o'z faoliyatini tahlil qilib, nimani o'zgartirish kerakligini anglash",
              "Ustoz-shogird an'anasi — bilimni bevosita namuna va birgalikda ijro orqali uzatish an'anasi",
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
            text: "Uchta tovush tanlang (masalan do-re-mi). Shu uch tovushdan to'rt taktlik javob-ohang tuzing: savol-ohangni o'qituvchi beradi, siz javob berasiz. So'ng xuddi shu topshiriqni 2-sinf uchun qanday soddalashtirishingizni yozing.",
            instrument: "pianino",
          },
          {
            kind: "mashq",
            text: "Bitta tanish qo'shiqni oling va uni uch bosqichda topshiriqqa aylantiring: taqlid (takrorlash), o'zgartirish (oxirgi frazani boshqacha tugating), yaratish (shu kayfiyatda yangi fraza). Har bosqich uchun qanday yordam berasiz — yozing.",
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
                id: "m6-t1",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt: "Nega improvizatsiya chegara bilan boshlanadi?",
                options: [
                  { id: "a", text: "Tartibni saqlash uchun" },
                  { id: "b", text: "Chegara qayerdan boshlashni ko'rsatadi va shu bilan erkinlik beradi" },
                  { id: "c", text: "Vaqtni tejash uchun" },
                  { id: "d", text: "Baholashni osonlashtirish uchun" },
                ],
                correctId: "b",
              },
              {
                id: "m6-t2",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Improvizatsiyasiz ijrochilik nimaga aylanib qoladi?",
                options: [
                  { id: "a", text: "Tahlilga" },
                  { id: "b", text: "Takrorlashga — o'rgangan narsa bor, yangisi yo'q" },
                  { id: "c", text: "Kompozitsiyaga" },
                  { id: "d", text: "Tinglashga" },
                ],
                correctId: "b",
              },
              {
                id: "m6-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "«Oxirgi frazani boshqacha tugating» topshirig'i qaysi bosqichga mos?",
                options: [
                  { id: "a", text: "Taqlid" },
                  { id: "b", text: "O'zgartirish" },
                  { id: "c", text: "Mustaqil yaratish" },
                  { id: "d", text: "Baholash" },
                ],
                correctId: "b",
              },
              {
                id: "m6-t4",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Nega o'zi ijod qilmaydigan o'qituvchi bolaning ijodini baholashda qiynaladi?",
                options: [
                  { id: "a", text: "Chunki vaqti yo'q" },
                  { id: "b", text: "Chunki jarayonni ichdan bilmaydi va mezoni shakllanmagan" },
                  { id: "c", text: "Chunki dastur ruxsat bermaydi" },
                  { id: "d", text: "Chunki bolalar uyaladi" },
                ],
                correctId: "b",
              },
              {
                id: "m6-t5",
                area: "metodika",
                bloom: "bilish",
                kind: "multiple",
                prompt: "Ijodiy musiqiy mahoratning komponentlari qaysilar?",
                options: [
                  { id: "a", text: "Musiqiy tasavvur" },
                  { id: "b", text: "Ijrochilik" },
                  { id: "c", text: "Improvizatsiya" },
                  { id: "d", text: "Nota yozuvini chiroyli yozish" },
                ],
                correctIds: ["a", "b", "c"],
                explanation:
                  "Xattotlik foydali ko'nikma, lekin ijodiy mahorat komponenti emas.",
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
              "Ijodkorlik tarkibiy qismlarga ajraladi va har biri mashq bilan o'sadi",
              "Tasavvur, ijrochilik va improvizatsiya bir-birisiz chala qoladi",
              "Improvizatsiya aniq chegaradan boshlanadi — chegara erkinlik beradi",
              "Bosqichlar: taqlid → o'zgartirish → mustaqil yaratish",
              "O'zi ijod qilmaydigan o'qituvchining baholash mezoni shakllanmaydi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'zingizning ijodiy mahoratingizda qaysi komponent kuchli, qaysi biri zaif?",
      "Sinfda «men ijod qila olmayman» deydigan bolaga birinchi qanday topshiriq berasiz?",
    ],
  },

  /* ──────────────────────────── M7 ──────────────────────────── */
  {
    id: "met-m7",
    slug: "m7-zamonaviy-texnologiyalar",
    title: "M7: Zamonaviy pedagogik texnologiyalar va interfaol metodlar",
    summary:
      "Teskari sinf, muammoli ta'lim, loyiha asosida ta'lim, STEAM, gamifikatsiya va AI — qaysi biri qachon ishlaydi.",
    durationMin: 80,
    bloom: "baholash",
    outcomeId: "on-met-16",
    area: "metodika",
    dasturKodi: "M7",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN1", "TN2"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Yangi texnologiya haqida eshitgan o'qituvchi ko'pincha uni darhol qo'llamoqchi bo'ladi. Natijada gamifikatsiya o'yinga, loyiha esa uy vazifasiga aylanib qoladi — nomi bor, mazmuni yo'q.",
          },
          {
            kind: "matn",
            text: "Shuning uchun har bir texnologiyani «qanday qo'llanadi» emas, «qaysi muammoni yechadi» degan savol bilan o'rganish kerak. Muammo bo'lmasa, texnologiya ortiqcha yuk.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Teskari sinf (Flipped Classroom) — nazariy qism uyda (yozuv, video, matn), darsda esa amaliyot. Musiqa darsida bu ayniqsa qulay: qo'shiq matni va yozuvi oldindan tanish bo'lsa, darsda ishlashga ko'proq vaqt qoladi.",
          },
          {
            kind: "royxat",
            items: [
              "Muammoli ta'lim — javob emas, savol beriladi: «Nega bu kuy g'amgin eshitiladi?»",
              "Loyiha asosida ta'lim — uzoq muddatli, natijasi ko'rsatiladigan ish (konsert, to'plam, taqdimot)",
              "STEAM — musiqani fan, texnologiya va san'at bilan bog'lash (tovush fizikasi, ritm va matematika)",
              "Gamifikatsiya — o'yin mexanikasi: daraja, ball, musobaqa — lekin maqsad o'yin emas, mashq",
              "Aralash ta'lim (Blended) — sinfdagi ish va raqamli resurs birga",
              "Sun'iy intellekt — jo'rlik yaratish, matn tahlili, mashq generatori; natijani o'qituvchi tekshiradi",
            ],
          },
          {
            kind: "eslatma",
            text: "Teskari sinf uyda internet va qurilma bor deb hisoblaydi. Agar sinfning bir qismida bu yo'q bo'lsa, metod tengsizlikni kuchaytiradi. Shuning uchun uy materiali doim darsda ham qisqa ko'rib chiqiladigan bo'lishi kerak.",
          },
          {
            kind: "matn",
            text: "Tanlov mezoni oddiy: texnologiya dars maqsadiga xizmat qilsa qo'llanadi, qilmasa — yo'q. «Zamonaviy bo'lsin» degan sabab yetarli emas, chunki har bir yangi vosita vaqt oladi, vaqt esa darsda eng tanqis resurs.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: texnologiya va metod farqi",
        blocks: [
          {
            kind: "matn",
            text: "Pedagogik texnologiya bilan metodni ajratish kerak. Metod — bitta o'qitish usuli (aks-sado, suhbat, namoyish). Texnologiya esa butun jarayonning tuzilmasi: kirish shartlari, bosqichlar ketma-ketligi, natijani o'lchash usuli. Texnologiyaning asosiy belgisi — takrorlanuvchanlik: uni boshqa o'qituvchi ham xuddi shunday bajarib, o'xshash natija ololadi.",
          },
          {
            kind: "matn",
            text: "Innovatsion texnologiyalarning umumiy o'zagi bitta: o'quvchini passiv tinglovchidan faol ishtirokchiga aylantirish. Ular bir-biridan shu faollikni qanday tashkil etishi bilan farq qiladi.",
          },
          {
            kind: "eslatma",
            text: "Texnologiya tanlash dars maqsadidan keyin keladi, undan oldin emas. «Bugun gamifikatsiya qilamiz» degan qaror — maqsadni vositaga bo'ysundirish demak.",
          },
        ],
      },
      {
        id: "texnologiyalar",
        title: "Asosiy texnologiyalar va ularning musiqa darsidagi o'rni",
        blocks: [
          {
            kind: "matn",
            text: "Quyidagi texnologiyalar dasturda alohida ko'rsatilgan. Har biri uchun musiqa darsidagi tipik qo'llanishi va cheklovi keltirilgan.",
          },
          {
            kind: "royxat",
            items: [
              "Muammoli ta'lim — dars javob bilan emas, savol bilan boshlanadi: «Nega bu ikki asar bir xil so'zda, lekin boshqacha kayfiyatda?». Cheklovi: har bir mavzu muammoga aylanavermaydi",
              "Teskari sinf (Flipped Classroom) — asar bilan tanishish uyda, tahlil va ijro sinfda. Cheklovi: uyda tayyorgarlik bajarilmasa, dars bo'shab qoladi — shuning uchun tekshirish usuli oldindan o'ylanadi",
              "Loyiha asosida ta'lim (Project-Based Learning) — natija sifatida tayyor mahsulot: sinf konserti, qo'shiqlar to'plami, bayram ssenariysi. Cheklovi: vaqt ko'p ketadi, bitta chorakda bitta loyiha yetarli",
              "STEAM — musiqa fan va texnika bilan bog'lanadi: tovush to'lqini, cholg'u tuzilishi, akustika, tovush yozish. Cheklovi: musiqiy maqsad fan tajribasi ostida qolib ketmasligi kerak",
              "Gamifikatsiya — o'yin mexanikasi: ball, daraja, musobaqa. Cheklovi: o'yin motivatsiyani ko'taradi, lekin musiqiy sifatni o'zi oshirmaydi",
              "Aralash ta'lim (Blended Learning) — sinfdagi ish va raqamli platformadagi mustaqil ish birga. Cheklovi: platformadagi qism baholanmasa, u bajarilmaydi",
              "Sun'iy intellekt vositalari — jo'rlik yaratish, nota tanish, ijroni tahlil qilish uchun yordamchi. Cheklovi: natija tekshirilishi shart, chunki vosita xato qilishi mumkin",
            ],
          },
        ],
      },
      {
        id: "tanlov",
        title: "Texnologiyani maqsadga qarab tanlash",
        blocks: [
          {
            kind: "matn",
            text: "Texnologiya tanlashda uch savolga javob beriladi: dars maqsadi qaysi darajada (bilish, qo'llash, ijod), sinfda qanday sharoit bor (vaqt, texnika, o'quvchilar soni) va natija qanday tekshiriladi.",
          },
          {
            kind: "royxat",
            items: [
              "Maqsad «tanishtirish» bo'lsa — namoyish va suhbat yetarli, murakkab texnologiya ortiqcha",
              "Maqsad «ko'nikma shakllantirish» bo'lsa — mashq va aks-sado, keyin differensial topshiriq",
              "Maqsad «qo'llash» bo'lsa — muammoli vaziyat yoki teskari sinf",
              "Maqsad «yaratish» bo'lsa — loyiha yoki ochiq ijodiy topshiriq",
            ],
          },
          {
            kind: "matn",
            text: "Shu jadval metodik tanlovni asoslashga yordam beradi. Imtihonda ham, dars tahlilida ham savol bir xil bo'ladi: «Nega aynan shu texnologiya?» Javob dars maqsadiga ishora qilishi kerak.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Pedagogik texnologiya — natijaga olib boradigan, takrorlanadigan va o'lchanadigan o'quv jarayoni tuzilmasi",
              "Interfaol metod — o'quvchilarning o'zaro ta'siriga asoslangan o'qitish usuli",
              "Muammoli ta'lim — javobi tayyor berilmagan vaziyat orqali o'qitish",
              "Teskari sinf (Flipped Classroom) — tanishish uyda, ishlov sinfda bo'ladigan ta'lim modeli",
              "Loyiha asosida ta'lim — yakuniy mahsulot yaratishga qaratilgan o'quv jarayoni",
              "STEAM — fan, texnologiya, muhandislik, san'at va matematikani birlashtirgan yondashuv",
              "Gamifikatsiya — o'quv jarayoniga o'yin mexanikasini kiritish",
              "Aralash ta'lim — an'anaviy dars va raqamli mustaqil ishning birgalikdagi modeli",
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
            text: "Bitta dars maqsadini yozing. So'ng ikkita texnologiyani tanlab, har biri shu maqsadga qanday xizmat qilishini bir jumlada yozing. Oxirida bittasini tanlang va nega ikkinchisidan voz kechganingizni asoslang.",
          },
          {
            kind: "mashq",
            text: "Teskari sinf uchun 3 daqiqalik uy materialini rejalashtiring: nima yuboriladi, bola nima qiladi, darsda bundan qanday foydalaniladi. Qurilmasi yo'q bola uchun zaxira yo'lni ham yozing.",
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
                id: "m7-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "Teskari sinf metodida nima uyda bajariladi?",
                options: [
                  { id: "a", text: "Amaliy mashq va ijro" },
                  { id: "b", text: "Nazariy qism bilan tanishish" },
                  { id: "c", text: "Baholash" },
                  { id: "d", text: "Guruh ishi" },
                ],
                correctId: "b",
              },
              {
                id: "m7-t2",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Teskari sinfning asosiy xavfi nimada?",
                options: [
                  { id: "a", text: "Ko'p vaqt oladi" },
                  { id: "b", text: "Uyda qurilma va internet bo'lmasa tengsizlikni kuchaytiradi" },
                  { id: "c", text: "Bolalar zerikadi" },
                  { id: "d", text: "Dasturga mos kelmaydi" },
                ],
                correctId: "b",
              },
              {
                id: "m7-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "«Nega bu kuy g'amgin eshitiladi?» — bu qaysi yondashuvga misol?",
                options: [
                  { id: "a", text: "Gamifikatsiya" },
                  { id: "b", text: "Muammoli ta'lim" },
                  { id: "c", text: "STEAM" },
                  { id: "d", text: "Loyiha asosida ta'lim" },
                ],
                correctId: "b",
              },
              {
                id: "m7-t4",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Texnologiyani tanlashda eng to'g'ri mezon qaysi?",
                options: [
                  { id: "a", text: "Zamonaviy va yangi bo'lishi" },
                  { id: "b", text: "Dars maqsadiga xizmat qilishi" },
                  { id: "c", text: "Bolalarga qiziq bo'lishi" },
                  { id: "d", text: "Boshqa o'qituvchilar qo'llayotgani" },
                ],
                correctId: "b",
                explanation:
                  "Har bir vosita vaqt oladi; vaqt esa darsdagi eng tanqis resurs.",
              },
              {
                id: "m7-t5",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Gamifikatsiya qachon o'z maqsadidan chetga chiqadi?",
                options: [
                  { id: "a", text: "Ball qo'yilganda" },
                  { id: "b", text: "O'yin mashqning o'rnini egallab, musiqiy natija yo'qolganda" },
                  { id: "c", text: "Guruhlar tuzilganda" },
                  { id: "d", text: "Musobaqa bo'lganda" },
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
              "Har bir texnologiyani «qaysi muammoni yechadi» savoli bilan o'rganish kerak",
              "Teskari sinf musiqada qulay, lekin qurilma tengsizligini hisobga oladi",
              "Muammoli ta'lim javob emas, savol beradi",
              "Gamifikatsiyada maqsad o'yin emas, mashq",
              "Tanlov mezoni — dars maqsadiga xizmat qilishi; «zamonaviylik» sabab emas",
            ],
          },
        ],
      },
    ],
    reflection: [
      "Qaysi texnologiya sizning dars uslubingizga eng yaqin va nega?",
      "Internetsiz sinfda teskari sinfni qanday moslashtirgan bo'lardingiz?",
    ],
  },
  /* ──────────────────────────── M8 ──────────────────────────── */
  {
    id: "met-m8",
    slug: "m8-kompetensiyaviy-yondashuv",
    title: "M8: Kompetensiyaviy yondashuv va integratsion ta'lim",
    summary:
      "Tayanch va fanga oid kompetensiyalar, ularni dars natijasiga aylantirish va fanlararo integratsiya.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-16",
    area: "metodika",
    dasturKodi: "M8",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN1"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Kompetensiyaviy yondashuv savolni ko'chiradi: «Bola nimani o'rgandi?» o'rniga «Bola buni qayerda ishlata oladi?» degan savol qo'yiladi.",
          },
          {
            kind: "matn",
            text: "Musiqada bu farq ayniqsa ko'rinadi: nota nomlarini biladigan bola notanish qo'shiqni eshitib o'lchovini aniqlay olmasligi mumkin. Birinchisi — bilim, ikkinchisi — kompetensiya.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Tayanch kompetensiyalar barcha fanlarga tegishli: kommunikativ, axborot bilan ishlash, o'z-o'zini rivojlantirish, ijtimoiy faollik, milliy va umummadaniy, matematik savodxonlik.",
          },
          {
            kind: "matn",
            text: "Fanga oid kompetensiyalar esa musiqaning o'ziga xos: musiqiy asarni idrok etish va tahlil qilish, ijro etish, musiqiy savodxonlik va ijodiy faoliyat.",
          },
          {
            kind: "royxat",
            items: [
              "Idrok va tahlil — asar kayfiyatini, janrini va vositalarini aniqlash",
              "Ijrochilik — toza kuylash, ansamblda birga ishlash",
              "Musiqiy savodxonlik — yozuvni o'qish va eshitganini yozuv bilan bog'lash",
              "Ijodiy faoliyat — o'zgartirish, tuzish, improvizatsiya",
            ],
          },
          {
            kind: "eslatma",
            text: "Tayanch kompetensiya musiqa darsida «qo'shimcha» emas: xorda kuylash — kommunikativ va ijtimoiy kompetensiya, ritmni ulushlarga bo'lish — matematik savodxonlik. Ularni alohida dars qilib o'tish shart emas, ular faoliyat ichida shakllanadi.",
          },
          {
            kind: "matn",
            text: "Integratsion ta'lim fanlar orasidagi devorni pasaytiradi. Lekin M5 dagi mezon bu yerda ham amal qiladi: agar musiqiy maqsadni olib tashlaganda dars buzilmasa, bu integratsiya emas — musiqa bezak bo'lib qolgan.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: kompetensiyaviy yondashuv",
        blocks: [
          {
            kind: "matn",
            text: "Kompetensiyaviy yondashuv ta'lim natijasini boshqacha ta'riflaydi. Bilim yondashuvida savol «nimani biladi?» edi; kompetensiyaviy yondashuvda savol «nimani qila oladi?» ga aylanadi. Farq atamada emas, baholashda: bilimni so'rab tekshirish mumkin, kompetensiyani esa faqat vazifa berib.",
          },
          {
            kind: "matn",
            text: "Kompetensiya uch qismdan iborat: bilim (nimani biladi), ko'nikma (qanday bajaradi) va munosabat (nega buni qiladi, qanday mas'uliyat bilan). Uchinchi qism ko'pincha unutiladi, holbuki musiqa ta'limida u hal qiluvchi: did va munosabatsiz texnik ko'nikma quruq qoladi.",
          },
          {
            kind: "matn",
            text: "Kompetensiyalar ikki qatlamga bo'linadi. Tayanch kompetensiyalar barcha fanlar orqali shakllanadi: kommunikativ, axborot bilan ishlash, o'z-o'zini rivojlantirish, ijtimoiy faollik, milliy va umummadaniy kompetensiya. Fanga oid kompetensiyalar esa faqat shu fan beradi.",
          },
          {
            kind: "royxat",
            items: [
              "Musiqiy idrok kompetensiyasi — asarni tinglab, uning xarakteri, janri va tuzilishini ajrata olish",
              "Ijrochilik kompetensiyasi — qo'shiqni ifodali va toza kuylay olish, ansamblda ishlay olish",
              "Musiqiy savod kompetensiyasi — nota yozuvini o'qiy olish va eshitganini yoza olish",
              "Ijodiy kompetensiya — sodda ohang, ritm yoki jo'rlik yarata olish",
              "Qadriyatli kompetensiya — milliy va jahon musiqa merosiga ongli munosabat",
            ],
          },
        ],
      },
      {
        id: "integratsiya",
        title: "Integratsion ta'lim",
        blocks: [
          {
            kind: "matn",
            text: "Integratsiya — ikki fanni bir darsga qo'shish emas, bitta savolni ikki fan vositasi bilan ochish. Mezon oddiy: agar bir fanni olib tashlaganda savol javobsiz qolsa — integratsiya bor; agar dars baribir to'liq bo'lsa — bu shunchaki bezak edi.",
          },
          {
            kind: "matn",
            text: "Musiqa darsi integratsiya uchun qulay, chunki uning obrazlari boshqa sohalarda ham mavjud:",
          },
          {
            kind: "royxat",
            items: [
              "Adabiyot — she'r va qo'shiq matni, obraz, kayfiyat; bir mavzu ikki san'atda",
              "Tarix — asarning yaratilgan davri, marosim va bayram an'analari",
              "Tasviriy san'at — rang va tovush, manzara obrazini ikki tilda ifodalash",
              "Jismoniy tarbiya — ritm, harakat muvofiqligi, nafas",
              "Matematika — ritmdagi ulush, o'lchov, takt tuzilmasi",
              "Informatika va fizika — tovush yozish, akustika, raqamli vositalar",
            ],
          },
          {
            kind: "matn",
            text: "Integratsiyaning uch darajasi bor: fanlararo bog'lanish (dars davomida boshqa fanga havola), integrallashgan dars (ikki fan bitta mavzuni birga ochadi) va integratsion loyiha (bir nechta fan uzoq muddatli umumiy natija ustida ishlaydi).",
          },
          {
            kind: "eslatma",
            text: "Integrallashgan darsda musiqa yordamchi vositaga aylanib qolish xavfi bor: she'r o'qildi, rasm chizildi, musiqa esa fon bo'lib qoldi. Darsni rejalashtirganda musiqiy natija alohida yozib qo'yilsa, bu xavf kamayadi.",
          },
        ],
      },
      {
        id: "baholash",
        title: "Kompetensiyani qanday baholash mumkin",
        blocks: [
          {
            kind: "matn",
            text: "Kompetensiya bitta savol bilan tekshirilmaydi, chunki u vaziyatda namoyon bo'ladi. Shuning uchun baholash vositalari ham boshqacha bo'ladi:",
          },
          {
            kind: "royxat",
            items: [
              "Amaliy topshiriq — notanish sodda ohangni kuylash, tanish qo'shiqqa jo'rlik topish",
              "Rubrika — natija bitta ball bilan emas, bir nechta mezon bo'yicha baholanadi",
              "Portfolio — vaqt davomidagi ishlar to'plami, o'sish ko'rinadi",
              "O'z-o'zini baholash — o'quvchi o'z ijrosini mezon bo'yicha tahlil qiladi",
              "Kuzatuv varaqasi — ansambldagi xulq va ishtirok qayd etiladi",
            ],
          },
          {
            kind: "matn",
            text: "Shu vositalarning umumiy jihati: ular jarayonni ham, natijani ham ko'rsatadi. Faqat yakuniy ijro bahosi bolaning qancha yo'l bosganini yashiradi — bu esa musiqada ayniqsa adolatsiz, chunki boshlang'ich daraja juda har xil bo'ladi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Kompetensiyaviy yondashuv — ta'lim natijasini amaliy faoliyat qobiliyati orqali ta'riflash",
              "Tayanch kompetensiya — barcha fanlar orqali shakllanadigan umumiy qobiliyat",
              "Fanga oid kompetensiya — faqat shu o'quv fani beradigan qobiliyat",
              "Integratsiya — bitta o'quv savolini bir nechta fan vositasi bilan ochish",
              "Fanlararo bog'lanish — dars davomida boshqa fan mazmuniga asoslangan havola",
              "Rubrika — natijani bir nechta mezon bo'yicha baholash jadvali",
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
            text: "Bitta dars bo'lagini oling va unda shakllanadigan ikkita tayanch va bitta fanga oid kompetensiyani ko'rsating. Har biri qaysi aniq faoliyatda shakllanishini yozing — «umuman shakllanadi» deb yozmang.",
          },
          {
            kind: "mashq",
            text: "Musiqa va matematika integratsiyasi uchun bitta topshiriq tuzing (masalan, ritmik ulushlar). So'ng o'zingizni tekshiring: musiqiy maqsad olib tashlansa, topshiriq qoladimi? Qolsa — qayta ishlang.",
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
                id: "m8-t1",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Kompetensiyaviy yondashuv qaysi savolni birinchi o'ringa qo'yadi?",
                options: [
                  { id: "a", text: "Bola nimani yodladi?" },
                  { id: "b", text: "Bola buni qayerda ishlata oladi?" },
                  { id: "c", text: "Dastur bajarildimi?" },
                  { id: "d", text: "Baho nechchi?" },
                ],
                correctId: "b",
              },
              {
                id: "m8-t2",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Xorda birga kuylash qaysi tayanch kompetensiyani shakllantiradi?",
                options: [
                  { id: "a", text: "Matematik savodxonlik" },
                  { id: "b", text: "Kommunikativ va ijtimoiy faollik" },
                  { id: "c", text: "Axborot bilan ishlash" },
                  { id: "d", text: "Hech qaysi" },
                ],
                correctId: "b",
              },
              {
                id: "m8-t3",
                area: "metodika",
                bloom: "tahlil",
                kind: "multiple",
                prompt: "Musiqa fanining o'ziga xos kompetensiyalari qaysilar?",
                options: [
                  { id: "a", text: "Asarni idrok etish va tahlil qilish" },
                  { id: "b", text: "Ijro etish" },
                  { id: "c", text: "Musiqiy savodxonlik" },
                  { id: "d", text: "Chet tilida muloqot" },
                ],
                correctIds: ["a", "b", "c"],
              },
              {
                id: "m8-t4",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Integratsion dars qachon illyustratsiyaga aylanadi?",
                options: [
                  { id: "a", text: "Ikki fan birga kelganda" },
                  { id: "b", text: "Musiqiy maqsad olib tashlansa ham dars buzilmaganda" },
                  { id: "c", text: "Dars uzun bo'lganda" },
                  { id: "d", text: "Taqdimot ishlatilganda" },
                ],
                correctId: "b",
              },
              {
                id: "m8-t5",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Tayanch kompetensiyalarni musiqa darsida qanday shakllantirish to'g'ri?",
                options: [
                  { id: "a", text: "Ular uchun alohida dars ajratib" },
                  { id: "b", text: "Musiqiy faoliyat ichida — xor, ritm, tahlil orqali" },
                  { id: "c", text: "Uyga vazifa sifatida" },
                  { id: "d", text: "Ular musiqa darsiga tegishli emas" },
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
              "Kompetensiya — bilimni yangi vaziyatda qo'llay olish",
              "Tayanch kompetensiyalar musiqiy faoliyat ichida shakllanadi, alohida dars talab qilmaydi",
              "Fanga oid kompetensiyalar: idrok va tahlil, ijro, savodxonlik, ijodiy faoliyat",
              "Integratsiya mezoni: musiqiy maqsadni olib tashlasa, dars buzilishi kerak",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'z darsingizda qaysi tayanch kompetensiya o'z-o'zidan shakllanadi va qaysi biri ataylab rejalashtirishni talab qiladi?",
      "Integratsiya qaysi fan bilan sizga eng tabiiy ko'rinadi? Nima uchun?",
    ],
  },

  /* ──────────────────────────── M9 ──────────────────────────── */
  {
    id: "met-m9",
    slug: "m9-tinglash-faoliyati",
    title: "M9: Musiqa tinglash faoliyatini tashkil etish metodikasi",
    summary:
      "Tinglashning bosqichlari, asar tanlash mezonlari va tinglash madaniyatini shakllantirish.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-8",
    area: "metodika",
    dasturKodi: "M9",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Tinglash — musiqa darsidagi eng qiyin faoliyat, garchi tashqaridan eng oson ko'rinsa ham. Bola jim o'tiradi, lekin uning ichida nima bo'layotganini o'qituvchi ko'rmaydi.",
          },
          {
            kind: "matn",
            text: "Shuning uchun tinglash tashkil etiladi: tayyorgarlik, yo'naltirilgan tinglash va keyingi ish. Tayyorgarliksiz tinglash — fon musiqasi.",
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
              "Tayyorgarlik — kayfiyat yaratish, savol qo'yish, kerakli atamani eslatish",
              "Birinchi tinglash — yaxlit idrok, to'xtatmasdan",
              "Muhokama — savolga javob, taassurotni so'z bilan ifodalash",
              "Ikkinchi tinglash — endi tafsilotga e'tibor: vosita, shakl, cholg'u",
              "Mustahkamlash — harakat, chizma, ijro yoki yozma fikr",
            ],
          },
          {
            kind: "matn",
            text: "Asar tanlashning asosiy mezonlari: badiiy qiymat, yoshga moslik, davomiylik va dars mavzusiga bog'liqlik. Boshlang'ich sinfda 1,5–2 daqiqalik asar yetarli; o'rta sinfda 3–4 daqiqagacha chiqish mumkin.",
          },
          {
            kind: "eslatma",
            text: "Savol tinglashdan **oldin** beriladi, keyin emas. Oldin berilgan savol diqqatni yo'naltiradi; keyin berilgani esa xotirani tekshiradi — bu boshqa vazifa.",
          },
          {
            kind: "matn",
            text: "Tinglash madaniyati — jim o'tirish emas. U uch ko'nikmadan iborat: oxirigacha eshita olish, taassurotni so'z bilan ifodalay olish va boshqaning fikrini tinglay olish. Uchalasi ham mashq qilinadi.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: tinglash — faoliyat turi",
        blocks: [
          {
            kind: "matn",
            text: "Musiqa tinglash darsdagi dam olish qismi emas, mustaqil faoliyat turi. Uning farqi shunda: tashqi ko'rinishda bola harakatsiz o'tiradi, ichki ish esa eng zo'r — u obrazni tutishga, taqqoslashga va eslab qolishga urinadi. Shuning uchun tinglash topshiriqsiz berilsa, u tez eshitmaslikka aylanadi.",
          },
          {
            kind: "matn",
            text: "Tinglash faoliyatining maqsadi — musiqiy idrok madaniyatini shakllantirish: bola asarni oxirigacha eshita olishi, uning xarakterini aytib bera olishi va boshqa asar bilan taqqoslay olishi kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni oxirigacha diqqat bilan eshitish ko'nikmasi",
              "Xarakter va kayfiyatni so'z bilan ifodalash",
              "Janr va ijro tarkibini ajrata olish",
              "O'z taassurotini sabab bilan asoslash",
              "Musiqa haqida gapirishda to'g'ri atama ishlatish",
            ],
          },
        ],
      },
      {
        id: "bosqichlar",
        title: "Tinglashning bosqichlari",
        blocks: [
          {
            kind: "matn",
            text: "Tinglash uch bosqichda tashkil etiladi va har bosqichning o'z vazifasi bor.",
          },
          {
            kind: "royxat",
            items: [
              "Tinglashdan oldin — yo'naltiruvchi savol beriladi: nimaga e'tibor berish kerakligini bola oldindan biladi",
              "Tinglash paytida — jimlik, uzilishsiz; o'qituvchi gapirmaydi va izoh bermaydi",
              "Tinglashdan keyin — savolga javob, taqqoslash, atama kiritish, kerak bo'lsa qayta tinglash",
            ],
          },
          {
            kind: "matn",
            text: "Eng ko'p xato birinchi bosqichda qilinadi: asar «shunchaki» qo'yiladi. Yo'naltiruvchi savol esa diqqatni ushlab turadigan yagona vosita. Savol aniq bo'lishi kerak — «asar sizga yoqdimi?» emas, «asar boshi va oxiri bir xil kayfiyatdami?».",
          },
          {
            kind: "matn",
            text: "Qayta tinglash odatda zarur: birinchi eshitishda umumiy taassurot, ikkinchisida tafsilot paydo bo'ladi. Lekin har safar yangi savol bilan — bir xil topshiriq bilan qayta tinglash zerikarli bo'ladi.",
          },
          {
            kind: "eslatma",
            text: "Boshlang'ich sinflarda tinglash uchun asar davomiyligi qisqa bo'lishi kerak. Umumiy qoida: asar bolaning diqqatini ushlab tura oladigan vaqtdan uzun bo'lmasin; uzun asardan parcha olinadi va bu aytiladi.",
          },
        ],
      },
      {
        id: "tanlash",
        title: "Asar tanlash va tinglash madaniyati",
        blocks: [
          {
            kind: "matn",
            text: "Tinglash uchun asar tanlash mezonlari kuylash repertuaridan biroz farq qiladi: diapazon muhim emas, lekin obrazning aniqligi va davomiylik hal qiluvchi bo'ladi.",
          },
          {
            kind: "royxat",
            items: [
              "Obraz aniq va tanib olinadigan bo'lsin — bolaga tasvirlash oson",
              "Davomiylik yoshga mos bo'lsin; uzun asardan tugallangan parcha olinadi",
              "Ijro sifati yuqori bo'lsin — sifatsiz yozuv idrokni buzadi",
              "Milliy va jahon merosi muvozanatda bo'lsin",
              "Asar dars mavzusiga xizmat qilsin, shunchaki to'ldirmasin",
            ],
          },
          {
            kind: "matn",
            text: "Tinglash madaniyati esa qoidalar bilan emas, odat bilan shakllanadi: har safar bir xil tartib takrorlanadi — savol, jimlik, javob. Bir necha dars o'tgach bolalar o'zlari jim bo'ladi, chunki ular nima bo'lishini biladi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Musiqa tinglash — asarni maqsadli idrok etishga qaratilgan mustaqil musiqiy faoliyat turi",
              "Yo'naltiruvchi savol — tinglashdan oldin beriladigan, diqqatni aniq belgiga qaratadigan savol",
              "Qayta tinglash — yangi topshiriq bilan takroran eshitish",
              "Tinglash madaniyati — asarni uzilishsiz, diqqat bilan eshita olish odati",
              "Musiqiy taassurot — asar uyg'otgan birinchi emotsional javob",
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
            text: "Bitta asar tanlang va unga uchta savol yozing: biri tinglashdan oldin, biri birinchi tinglashdan keyin, biri ikkinchisidan keyin. Savollar bir-birini takrorlamasin — har biri boshqa narsani ochsin.",
          },
          {
            kind: "mashq",
            text: "3-sinf uchun 10 daqiqalik tinglash bo'lagini rejalashtiring: qaysi asar, necha marta, oraliqda nima qilinadi. Vaqt taqsimotini daqiqalarda yozing.",
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
                id: "m9-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "Birinchi tinglashning vazifasi nima?",
                options: [
                  { id: "a", text: "Tafsilotlarni tahlil qilish" },
                  { id: "b", text: "Asarni yaxlit idrok etish" },
                  { id: "c", text: "Notani kuzatib borish" },
                  { id: "d", text: "Baho qo'yish" },
                ],
                correctId: "b",
              },
              {
                id: "m9-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt: "Nega savol tinglashdan oldin beriladi?",
                options: [
                  { id: "a", text: "Vaqtni tejash uchun" },
                  { id: "b", text: "Diqqatni yo'naltirish uchun; keyin berilgan savol xotirani tekshiradi" },
                  { id: "c", text: "Bolalar unutmasligi uchun" },
                  { id: "d", text: "Dastur talabi" },
                ],
                correctId: "b",
              },
              {
                id: "m9-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "1-sinf uchun tinglash asarining maqbul davomiyligi qaysi?",
                options: [
                  { id: "a", text: "30 soniyagacha" },
                  { id: "b", text: "1,5–2 daqiqa" },
                  { id: "c", text: "5–6 daqiqa" },
                  { id: "d", text: "10 daqiqa" },
                ],
                correctId: "b",
              },
              {
                id: "m9-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "multiple",
                prompt: "Tinglash madaniyati qaysi ko'nikmalardan iborat?",
                options: [
                  { id: "a", text: "Oxirigacha eshita olish" },
                  { id: "b", text: "Taassurotni so'z bilan ifodalay olish" },
                  { id: "c", text: "Boshqaning fikrini tinglay olish" },
                  { id: "d", text: "Asar nomini yodlash" },
                ],
                correctIds: ["a", "b", "c"],
              },
              {
                id: "m9-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "O'qituvchi asarni qo'ydi, hech narsa demadi va tugagach darhol keyingi ishga o'tdi. Nima yo'qoldi?",
                options: [
                  { id: "a", text: "Hech narsa, asar eshitildi" },
                  { id: "b", text: "Tayyorgarlik va keyingi ish — tinglash fonga aylandi" },
                  { id: "c", text: "Faqat vaqt" },
                  { id: "d", text: "Baholash imkoni" },
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
              "Bosqichlar: tayyorgarlik → birinchi tinglash → muhokama → ikkinchi tinglash → mustahkamlash",
              "Savol tinglashdan oldin beriladi",
              "Tanlov mezonlari: badiiy qiymat, yoshga moslik, davomiylik, mavzuga bog'liqlik",
              "Tinglash madaniyati — uch ko'nikma, ularning har biri mashq qilinadi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "Tinglash bo'lagida sinf diqqati tarqalsa, birinchi nimani o'zgartirasiz?",
      "O'zingiz uchun taassurotni so'z bilan ifodalash oson bormi? Bu bolalarga nimani o'rgatadi?",
    ],
  },

  /* ──────────────────────────── M10 ──────────────────────────── */
  {
    id: "met-m10",
    slug: "m10-idrok-va-tafakkur",
    title: "M10: Musiqiy idrok va musiqiy tafakkurni rivojlantirish",
    summary:
      "Musiqiy idrok bosqichlari, tahlil elementlari va badiiy obrazni anglash usullari.",
    durationMin: 80,
    bloom: "tahlil",
    outcomeId: "on-met-8",
    area: "metodika",
    dasturKodi: "M10",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN4"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "«Bu kuy g'amgin» — bola shunday deydi. Bu idrok. «Chunki u sekin va past registrda» — bu allaqachon tafakkur: taassurot sababga bog'landi.",
          },
          {
            kind: "matn",
            text: "O'qituvchining vazifasi — birinchisidan ikkinchisiga ko'prik qurish. Bu ko'prik savollar bilan quriladi.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Musiqiy idrok — tovushni shunchaki eshitish emas, uni ma'noli yaxlitlik sifatida qabul qilish. U bosqichma-bosqich chuqurlashadi: avval umumiy kayfiyat, keyin tanish elementlar, so'ng tuzilma.",
          },
          {
            kind: "royxat",
            items: [
              "Temp — tez yoki sekin; harakat tezligi",
              "Registr — past, o'rta, baland",
              "Dinamika — kuchli yoki past ovoz",
              "Lad — major va minorning kayfiyatdagi farqi",
              "Tembr — qaysi ovoz yoki cholg'u",
              "Shakl — takrorlanish va qarama-qarshilik",
            ],
          },
          {
            kind: "eslatma",
            text: "Tahlil elementlari bolaga ro'yxat sifatida berilmaydi. Ular savol ichida yashiringan bo'ladi: «Kuy tezlashganda kayfiyat o'zgardimi?» — bu temp haqidagi savol, lekin atama talab qilmaydi.",
          },
          {
            kind: "matn",
            text: "Musiqiy tafakkurni rivojlantirishning asosiy usuli — qiyoslash. Bitta asarni tahlil qilish qiyin, ikkitasini solishtirish esa osonroq: farq ko'rinadi va shu farq orqali belgi nomlanadi.",
          },
          {
            kind: "matn",
            text: "Badiiy obraz — asarning so'z bilan to'liq aytib bo'lmaydigan mazmuni. Shuning uchun uni «asar nima haqida?» degan savol bilan emas, «qanday holat tasvirlangan?» yoki «bu musiqa qaysi rasmga mos keladi?» kabi savollar bilan ochish samaraliroq.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: musiqiy idrok",
        blocks: [
          {
            kind: "matn",
            text: "Musiqiy idrok — tovushni eshitish emas, uni obraz sifatida anglash. Eshitish fiziologik jarayon, idrok esa psixologik: unda xotira, tajriba va diqqat ishtirok etadi. Shuning uchun bir asarni ikki odam turlicha idrok qiladi, uchinchisi esa umuman «eshitmaydi».",
          },
          {
            kind: "matn",
            text: "Idrokning uch darajasi ajratiladi. Birinchi darajada bola faqat umumiy kayfiyatni tutadi: quvnoq yoki g'amgin. Ikkinchi darajada u vositalarni payqaydi: temp tez, ovoz past, cholg'u baland. Uchinchi darajada vosita bilan obrazni bog'laydi: «temp sekinlashgani uchun kayfiyat og'irlashdi».",
          },
          {
            kind: "matn",
            text: "Metodikaning vazifasi — bolani birinchi darajadan uchinchisiga olib chiqish. Bu o'z-o'zidan bo'lmaydi: u savol va atama orqali amalga oshadi. Bolada «sekin» so'zi paydo bo'lmaguncha, u tempni ajratmaydi.",
          },
          {
            kind: "eslatma",
            text: "Shu sababli musiqa darsidagi atama lug'ati muhim: har bir yangi atama bola idrok qila oladigan yangi belgini ochadi.",
          },
        ],
      },
      {
        id: "tafakkur",
        title: "Musiqiy tafakkurni rivojlantirish",
        blocks: [
          {
            kind: "matn",
            text: "Musiqiy tafakkur — tovush materiali bilan fikrlash: taqqoslash, umumlashtirish, bog'lash va xulosa chiqarish. U og'zaki tafakkurdan farq qiladi, chunki materiali so'z emas, intonatsiya.",
          },
          {
            kind: "matn",
            text: "Uni rivojlantiradigan asosiy metodlar — taqqoslashga asoslangan:",
          },
          {
            kind: "royxat",
            items: [
              "Taqqoslash metodi — ikki asar yoki bir asarning ikki ijrosi solishtiriladi",
              "Umumlashtirish — bir nechta asardan umumiy belgini topish: janr, xarakter, uslub",
              "Variantlash — bir ohangni turli temp va dinamikada eshitib, farqni tushuntirish",
              "Musiqiy savol-javob — o'qituvchi ohang bilan savol beradi, bola ohang bilan javob qaytaradi",
              "Obrazni so'zga ko'chirish — tasvir, harakat yoki qisqa hikoya orqali ifodalash",
              "Tuzilmani kuzatish — qism qayerda tugadi, qayerda takrorlandi",
            ],
          },
          {
            kind: "matn",
            text: "Taqqoslash eng kuchli metod, chunki farq doim bitta belgidan ko'rinadi. Bitta asarni tahlil qilish qiyin, ikkitasini solishtirish esa boshlang'ich sinfda ham ishlaydi.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil elementlari va badiiy mazmun",
        blocks: [
          {
            kind: "matn",
            text: "Maktabdagi musiqiy tahlil ilmiy tahlil emas: unda bola asarni bo'laklarga ajratmaydi, balki uning ta'sirini tushuntiradi. Shu sababli tahlil elementlari sodda va eshitiladigan bo'lishi kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Xarakter va kayfiyat — asar nimani his qildiradi",
              "Temp — tez, o'rtacha, sekin; o'zgaradimi",
              "Dinamika — baland, past; kuchayish va pasayish bormi",
              "Registr — yuqori, o'rta, past tovushlar",
              "Tembr — qaysi ovoz yoki cholg'u",
              "Shakl — takrorlanadigan qism bormi, nechta qism bor",
            ],
          },
          {
            kind: "matn",
            text: "Badiiy mazmunni anglash shu belgilardan keyin keladi: bola avval nimani eshitganini aytadi, keyin nega shunday ta'sir qilganini tushuntiradi. Teskari tartibda — avval «asar vatan haqida» deb aytib, keyin eshittirish — idrokni emas, takrorlashni o'rgatadi.",
          },
          {
            kind: "eslatma",
            text: "Tahlil javoblari «to'g'ri-noto'g'ri» emas, «asoslangan-asoslanmagan» mezoni bilan qabul qilinadi. Bola g'alati javob bersa, savol bitta: «buni qayerdan eshitding?»",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Musiqiy idrok — musiqani badiiy obraz sifatida anglash jarayoni",
              "Musiqiy tafakkur — tovush materiali bilan taqqoslash, umumlashtirish va xulosa chiqarish",
              "Taqqoslash metodi — ikki asar yoki ikki ijroni solishtirishga asoslangan o'qitish usuli",
              "Musiqiy obraz — asarda ifodalangan badiiy mazmun",
              "Ifoda vositalari — temp, dinamika, registr, tembr, ritm, lad",
              "Registr — tovush balandligi bo'yicha diapazonning qismi: yuqori, o'rta, past",
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
            text: "Kayfiyati qarama-qarshi ikkita qisqa asar tanlang. Ularni solishtirish uchun uchta savol yozing. Savollarda atama ishlatmang — bola atamani javobdan keyin olsin.",
          },
          {
            kind: "mashq",
            text: "Bitta asarni oling va uning badiiy obrazini ochadigan uchta boshqa-boshqa savol yozing: biri rangga, biri harakatga, biri holatga bog'liq bo'lsin.",
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
                id: "m10-t1",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "«Kuy g'amgin, chunki u sekin va past registrda» — bu qaysi darajaga misol?",
                options: [
                  { id: "a", text: "Idrok" },
                  { id: "b", text: "Musiqiy tafakkur — taassurot sababga bog'landi" },
                  { id: "c", text: "Xotira" },
                  { id: "d", text: "Ijro" },
                ],
                correctId: "b",
              },
              {
                id: "m10-t2",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Musiqiy tafakkurni rivojlantirishning eng samarali usuli qaysi?",
                options: [
                  { id: "a", text: "Atamalarni yodlatish" },
                  { id: "b", text: "Ikki asarni qiyoslash — farq orqali belgi nomlanadi" },
                  { id: "c", text: "Bir asarni ko'p marta tinglatish" },
                  { id: "d", text: "Bastakor biografiyasini o'qish" },
                ],
                correctId: "b",
              },
              {
                id: "m10-t3",
                area: "metodika",
                bloom: "bilish",
                kind: "multiple",
                prompt: "Musiqiy tahlil elementlari qaysilar?",
                options: [
                  { id: "a", text: "Temp va registr" },
                  { id: "b", text: "Dinamika va lad" },
                  { id: "c", text: "Tembr va shakl" },
                  { id: "d", text: "Asarning sotilgan nusxalari soni" },
                ],
                correctIds: ["a", "b", "c"],
              },
              {
                id: "m10-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Nega tahlil elementlari bolaga ro'yxat sifatida berilmaydi?",
                options: [
                  { id: "a", text: "Ro'yxat uzun bo'ladi" },
                  { id: "b", text: "Atama idrokdan keyin kelishi kerak: avval sezadi, keyin nomlaydi" },
                  { id: "c", text: "Bolalar yodlay olmaydi" },
                  { id: "d", text: "Dastur ruxsat bermaydi" },
                ],
                correctId: "b",
              },
              {
                id: "m10-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "«Bu asar nima haqida?» savoli nega ko'pincha ishlamaydi?",
                options: [
                  { id: "a", text: "Juda qiyin" },
                  { id: "b", text: "Badiiy obrazni so'z bilan to'liq aytib bo'lmaydi; aniqroq savol kerak" },
                  { id: "c", text: "Bolalar javobni biladi" },
                  { id: "d", text: "Vaqt ko'p ketadi" },
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
              "Idrok — ma'noli yaxlitlikni qabul qilish; tafakkur — taassurotni sababga bog'lash",
              "Tahlil elementlari: temp, registr, dinamika, lad, tembr, shakl",
              "Atama idrokdan keyin keladi: avval sezadi, keyin nomlaydi",
              "Qiyoslash — tafakkurni rivojlantirishning eng ishonchli usuli",
              "Badiiy obraz aniq savollar bilan ochiladi, umumiy savol bilan emas",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'zingiz asarni tinglaganda birinchi nimaga e'tibor berasiz? Bu bolalarga ham tegishlimi?",
      "Qiyoslash uchun qanday asar juftligini tanlagan bo'lardingiz?",
    ],
  },
  /* ──────────────────────────── M11 ──────────────────────────── */
  {
    id: "met-m11",
    slug: "m11-vokal-xor-malakalari",
    title: "M11: Vokal-xor malakalarini shakllantirish metodikasi",
    summary:
      "Nafas, ovoz hosil qilish, diksiya va ansambl: bolalar ovozi bilan ishlashning asosiy qoidalari.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-7",
    area: "metodika",
    dasturKodi: "M11",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Bolalar ovozi — rivojlanayotgan asbob. Uni kattalar ovozi kabi ishlatish mumkin emas: diapazon tor, nafas qisqa, ligamentlar ingichka. Noto'g'ri yuklama esa uzoq muddatli zarar yetkazadi.",
          },
          {
            kind: "matn",
            text: "Shuning uchun vokal ish ikki tomonlama: bir tomondan ovozni rivojlantirish, ikkinchi tomondan uni asrash.",
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
              "Kuylash holati — yelka bo'sh, bel tik, boshni ko'tarib turish",
              "Nafas — qorin-diafragma nafasi, yelkani ko'tarmasdan",
              "Ovoz hosil qilish — yumshoq hujum, baqirmasdan",
              "Diksiya — undoshlar aniq, unlilar cho'ziladi",
              "Ansambl — birga boshlash, birga tugatish, bir tekis ovoz",
              "Stroy — toza intonatsiya, ovozlar bir-biriga moslashadi",
            ],
          },
          {
            kind: "matn",
            text: "Ish ketma-ketligi: avval kuylash holati, keyin nafas, so'ng ovoz hosil qilish, undan keyin diksiya va faqat shundan so'ng ansambl ustida ishlanadi. Tartibni buzish ko'p uchraydigan xato: sinf hali toza kuylay olmaydi, o'qituvchi esa allaqachon ikki ovozga o'tadi.",
          },
          {
            kind: "eslatma",
            text: "Baqirib kuylash — eng xavfli odat. U ko'pincha asar juda baland tonallikda olingani yoki jo'rlik ovozi kuchli bo'lgani uchun paydo bo'ladi. Birinchi yechim — tonallikni tushirish, ikkinchisi — jo'rlikni pasaytirish, uchinchisi esa bolaga «sekinroq» deyish emas, balki boshqa vazifa berish.",
          },
          {
            kind: "matn",
            text: "Ovoz sozlash mashqlari qisqa bo'ladi: 3–5 daqiqa. Ular oddiy va eslab qolinadigan bo'lishi kerak, chunki maqsad — ovozni ochish, yangi material o'rgatish emas.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: bolalar ovozi",
        blocks: [
          {
            kind: "matn",
            text: "Vokal-xor ishining asosi — bolalar ovozi kattalar ovozining kichik nusxasi emasligini tushunish. Bolalar ovoz apparati shakllanish jarayonida bo'ladi: ovoz pardalari qisqa va nozik, nafas hajmi kichik, rezonatorlar to'liq ishlamaydi. Shuning uchun kattalar uchun oddiy bo'lgan talab bola uchun zararli bo'lishi mumkin.",
          },
          {
            kind: "matn",
            text: "Yosh bo'yicha o'zgarish taxminan shunday boradi: boshlang'ich sinflarda ovoz yengil va tiniq, diapazon tor; o'rta sinflarda ovoz kuchayadi, diapazon kengayadi; 12-14 yosh atrofida esa mutatsiya — ovoz sinishi davri boshlanadi va bu davrda yuklama keskin cheklanadi.",
          },
          {
            kind: "eslatma",
            text: "Diapazon chegarasi har bir sinf uchun taxminiy beriladi va u bolaga emas, sinfga qaraladi. Aniq chegara darslik, DTS va eng ishonchlisi — sinfni kuylatib ko'rish orqali belgilanadi.",
          },
          {
            kind: "matn",
            text: "Shundan ikki amaliy qoida kelib chiqadi. Birinchisi: tonallik asarga emas, sinfga moslanadi — asarni bir-ikki parda pastga olish metodik yechim, yengillik emas. Ikkinchisi: baland ovozda uzoq kuylash taqiqlanadi, chunki u ovoz pardalarini charchatadi.",
          },
        ],
      },
      {
        id: "nafas",
        title: "Nafas va ovoz hosil qilish",
        blocks: [
          {
            kind: "matn",
            text: "Kuylashda nafas tabiiy nafasdan farq qiladi: olish tez va jim, chiqarish esa uzoq va boshqariladigan bo'ladi. Bolaga buni tushuntirishning eng ishonchli yo'li — his qildirish, ta'riflash emas.",
          },
          {
            kind: "royxat",
            items: [
              "Nafasni qo'l bilan his qilish — qorin ustiga qo'l qo'yib, nafas olganda qo'l oldinga siljiydi",
              "Uzun chiqarish mashqi — sekin va bir tekis ovoz bilan nafas chiqarish, sanab turish",
              "Iboraga nafas — nafas joyi matn ma'nosiga qarab belgilanadi, tasodifiy joyda emas",
              "Jim nafas — yelka ko'tarilmaydi, shovqin eshitilmaydi",
            ],
          },
          {
            kind: "matn",
            text: "Ovoz hosil qilishda asosiy talablar: erkin tomoq, aniq boshlanish (hujum), tekis tovush va so'z oxirlarini yo'qotmaslik. Bolalar ovozida eng ko'p uchraydigan nuqson — qichqirib kuylash; u odatda jo'rlik baland bo'lganda yoki sinf katta bo'lganda paydo bo'ladi.",
          },
          {
            kind: "matn",
            text: "Qizdirish har bir kuylash darsida majburiy. U qisqa bo'lishi mumkin (3-5 daqiqa), lekin tushib qolmasligi kerak: sovuq ovoz bilan kuylash — ovozga zarar, ijroga esa xato.",
          },
        ],
      },
      {
        id: "ansambl",
        title: "Ansambl va xor malakalari",
        blocks: [
          {
            kind: "matn",
            text: "Xor — ovozlar yig'indisi emas, ularning muvofiqligi. Shuning uchun xor malakalari alohida o'rgatiladi va ular individual kuylash ko'nikmasidan farq qiladi.",
          },
          {
            kind: "royxat",
            items: [
              "Unison — hammaning bir xil balandlikda, bir xil tembr yo'nalishida kuylashi",
              "Ansambl — temp, dinamika va ritmning muvofiqligi; birga boshlash va birga tugatish",
              "Stroy — intonatsiya tozaligi: gorizontal (ohang bo'ylab) va vertikal (ovozlar orasida)",
              "Diksiya — so'zlarning hamma tomonidan bir xil va aniq talaffuzi",
              "Dirijyor ishorasiga javob — kirish, to'xtash, dinamika o'zgarishi",
            ],
          },
          {
            kind: "matn",
            text: "Ikki ovozlilik odatda 5-6 sinfdan boshlanadi va eng xavfsiz yo'li — kanon: u bitta ohang bo'lgani uchun yod olish oson, lekin ovozlarni eshitib turishni talab qiladi. Keyingi bosqich — ostinato (doimiy takrorlanuvchi ikkinchi qatlam), undan keyin haqiqiy ikki ovozlilik.",
          },
          {
            kind: "eslatma",
            text: "Ansambl muammolarining ko'pchiligi ovoz emas, eshitish muammosi: bola o'zini eshitadi, qo'shnisini eshitmaydi. Shuning uchun mashq ovozni kuchaytirishga emas, pasaytirishga qaratiladi — past dinamikada eshitish osonlashadi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Vokal-xor malakalari — kuylash va jamoada ijro etish bo'yicha ko'nikmalar majmui",
              "Diapazon — ovoz chiqara oladigan eng past va eng baland tovush orasidagi masofa",
              "Tessitura — asarning asosiy qismi joylashgan tovush balandligi sohasi",
              "Mutatsiya — o'smirlik davrida ovozning sinishi va qayta shakllanishi",
              "Unison — barcha ijrochilarning bir xil balandlikda kuylashi",
              "Stroy — ijrodagi intonatsiya tozaligi",
              "Ansambl — ijrochilar orasidagi temp, dinamika va ritm muvofiqligi",
              "Kanon — bir ohangni ovozlar navbat bilan boshlaydigan ko'p ovozlilik shakli",
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
            text: "Uchta ovoz sozlash mashqini tanlang: biri nafas uchun, biri ovoz hosil qilish uchun, biri diksiya uchun. Har birining vaqtini va qanday ko'rsatma berishingizni yozing.",
            instrument: "pianino",
          },
          {
            kind: "mashq",
            text: "Sinf baqirib kuylayapti. Uchta sabab va har biriga bitta aniq harakatni yozing. «Sekinroq kuylanglar» degan ko'rsatma nega yetarli emasligini tushuntiring.",
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
                id: "m11-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "Kuylash uchun to'g'ri nafas qaysi?",
                options: [
                  { id: "a", text: "Yelkani ko'tarib, ko'krak bilan" },
                  { id: "b", text: "Qorin-diafragma nafasi, yelka tinch" },
                  { id: "c", text: "Qisqa va tez nafas" },
                  { id: "d", text: "Og'izdan chuqur nafas olmasdan" },
                ],
                correctId: "b",
              },
              {
                id: "m11-t2",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Sinf baqirib kuylayapti. Qaysi harakat birinchi tekshiriladi?",
                options: [
                  { id: "a", text: "Bolalarga tanbeh berish" },
                  { id: "b", text: "Asar tonalligi baland emasligini tekshirish" },
                  { id: "c", text: "Qo'shiqni almashtirish" },
                  { id: "d", text: "Ovoz sozlashni to'xtatish" },
                ],
                correctId: "b",
                explanation:
                  "Baqirish ko'pincha texnik sabab bilan bog'liq: baland tonallik yoki kuchli jo'rlik.",
              },
              {
                id: "m11-t3",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Vokal ish ketma-ketligida qaysi tartib to'g'ri?",
                options: [
                  { id: "a", text: "Ansambl → nafas → holat → diksiya" },
                  { id: "b", text: "Holat → nafas → ovoz hosil qilish → diksiya → ansambl" },
                  { id: "c", text: "Diksiya → ansambl → nafas → holat" },
                  { id: "d", text: "Nafas → ansambl → holat → ovoz" },
                ],
                correctId: "b",
              },
              {
                id: "m11-t4",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt: "Ovoz sozlash mashqlari nega qisqa bo'ladi?",
                options: [
                  { id: "a", text: "Vaqt yetishmaydi" },
                  { id: "b", text: "Maqsad ovozni ochish, yangi material o'rgatish emas" },
                  { id: "c", text: "Bolalar zerikadi" },
                  { id: "d", text: "Dastur shunday talab qiladi" },
                ],
                correctId: "b",
              },
              {
                id: "m11-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "multiple",
                prompt: "Ansambl ko'nikmasi nimalarni o'z ichiga oladi?",
                options: [
                  { id: "a", text: "Birga boshlash va birga tugatish" },
                  { id: "b", text: "Bir tekis ovoz kuchi" },
                  { id: "c", text: "Boshqalarni eshitib turish" },
                  { id: "d", text: "Eng baland kuylash" },
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
              "Bolalar ovozi rivojlanayotgan asbob: rivojlantirish va asrash birga boradi",
              "Tartib: holat → nafas → ovoz hosil qilish → diksiya → ansambl",
              "Baqirish — texnik muammo belgisi: tonallik yoki jo'rlik tekshiriladi",
              "Ovoz sozlash 3–5 daqiqa, oddiy va eslab qolinadigan",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'z ovozingiz bilan ishlashda qaysi element eng qiyin va bu sizga bolalar haqida nima deydi?",
      "Tonallikni tushirish qachon yechim bo'lmaydi? Nima qilasiz?",
    ],
  },

  /* ──────────────────────────── M12 ──────────────────────────── */
  {
    id: "met-m12",
    slug: "m12-musiqa-savodi",
    title: "M12: Musiqa savodini o'qitish metodikasi",
    summary:
      "Nota yozuvi, ritm va metr, lad va tonallik: eshitishdan yozuvga boradigan ketma-ketlik.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-17",
    area: "metodika",
    dasturKodi: "M12",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN1", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Musiqa savodi darsning eng zerikarli qismi bo'lib qolishi mumkin — agar u notani yodlashdan boshlansa. Bola belgi nomini biladi, lekin u nimani bildirishini eshitmaydi.",
          },
          {
            kind: "matn",
            text: "To'g'ri ketma-ketlik teskari: avval eshitadi, keyin kuylaydi, so'ngra belgini ko'radi. Yozuv — eshitilgan narsaning nomi, aksincha emas.",
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
              "Eshitish — tovushni farqlash: baland-past, uzun-qisqa",
              "Harakat va ovoz — qo'l bilan ko'rsatish, bo'g'in bilan kuylash",
              "Belgi — endi ko'rilgan narsaga nom beriladi",
              "O'qish — tanish belgini ko'rib, tovushni tasavvur qilish",
              "Yozish — eshitganini belgi bilan qayd etish",
            ],
          },
          {
            kind: "matn",
            text: "Ritm odatda tovush balandligidan oldin o'rganiladi, chunki u harakat bilan bog'lanadi: yurish — chorak, yugurish — sakkizlik. Bola ritmni tanasi bilan sezadi, keyin esa uni belgida ko'radi.",
          },
          {
            kind: "eslatma",
            text: "Lad va tonallikni ta'rif bilan boshlash samarasiz. Major va minorni bola juda erta farqlaydi — faqat nomini bilmaydi. Shuning uchun avval ikki qisqa namunani solishtirish, keyin nom berish kerak.",
          },
          {
            kind: "matn",
            text: "Musiqa savodi alohida dars emas, u boshqa faoliyatlar ichiga joylashadi: qo'shiq o'rganilayotganda ritmik naqsh ajratiladi, tinglash paytida lad farqi ko'rsatiladi. Alohida 15 daqiqalik «nazariya bo'lagi» bolaning diqqatini yo'qotadi.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: savod nima uchun kerak",
        blocks: [
          {
            kind: "matn",
            text: "Musiqa savodi maktabda mustaqil maqsad emas, vosita: u bolaga eshitganini belgilash va belgilanganni eshitish imkonini beradi. Shuning uchun savod darsi nota nomlarini yodlashdan emas, tovushni farqlashdan boshlanadi.",
          },
          {
            kind: "matn",
            text: "Metodikaning asosiy qoidasi shu yerda: eshitishdan yozuvga. Avval bola tovushni eshitadi va farqlaydi, keyin unga nom beradi, eng oxirida belgi bilan yozadi. Teskari tartibda — avval belgi, keyin tovush — bola nota o'qiydi, lekin eshitmaydi.",
          },
          {
            kind: "royxat",
            items: [
              "Eshitish — ikki tovushdan qaysi biri baland, qaysi ohang yuqoriga ketdi",
              "Harakat yoki ishora — tovush balandligini qo'l bilan ko'rsatish",
              "Nomlash — tovushga nom berish (do, re, mi yoki boshqa tizim)",
              "Yozuv — belgini qog'ozga tushirish",
              "O'qish — yozilganni ovozda tiklash",
            ],
          },
          {
            kind: "matn",
            text: "Shu besh bosqich har bir yangi element uchun qayta takrorlanadi: yangi nota ham, yangi ritmik ulush ham, yangi lad ham shu yo'ldan o'tadi.",
          },
        ],
      },
      {
        id: "elementlar",
        title: "Savodning asosiy elementlari",
        blocks: [
          {
            kind: "matn",
            text: "Maktab savodi uch blokdan iborat va ular parallel boradi, ketma-ket emas.",
          },
          {
            kind: "royxat",
            items: [
              "Nota yozuvi — notalar joylashuvi, kalit, cho'zim belgilari, pauza",
              "Ritm va metr — zarb, urg'uli va urg'usiz zarb, o'lchov, takt, ritmik naqsh",
              "Lad va tonallik — barqaror va beqaror tovushlar, mayor va minor xarakteri, tonika",
            ],
          },
          {
            kind: "matn",
            text: "Ritm odatda birinchi o'zlashtiriladi, chunki u tana bilan his qilinadi: qadam, chapak, harakat. Balandlik undan keyin keladi, lad esa eng oxirida, chunki u eng mavhum tushuncha.",
          },
          {
            kind: "matn",
            text: "Ladni tushuntirishda ta'rif emas, tajriba ishlaydi: ohangni tonikada tugatmasdan to'xtatib, bolalardan «tugadimi?» deb so'rash — mana shu beqarorlik hissi ladning o'zi. Mayor va minor farqini esa ikki qisqa namunani solishtirib ko'rsatish yetarli.",
          },
          {
            kind: "eslatma",
            text: "Savod elementi hech qachon alohida mashq sifatida qolmasligi kerak: yangi ritmik naqsh o'rganilgan bo'lsa, u o'sha darsdagi qo'shiqda uchrashi kerak. Aks holda bola uni dars uchun o'rganadi, musiqa uchun emas.",
          },
        ],
      },
      {
        id: "metodlar",
        title: "Zamonaviy metodlar",
        blocks: [
          {
            kind: "matn",
            text: "Jahon amaliyotida savod o'rgatishning bir nechta tizimi mavjud va ular bir-birini inkor etmaydi — maktabda ko'pincha aralash qo'llaniladi.",
          },
          {
            kind: "royxat",
            items: [
              "Nisbiy solmizatsiya (Kodai yo'nalishi) — bo'g'in nomlari va qo'l ishoralari orqali ladli hisni rivojlantirish",
              "Ritmik bo'g'inlar — cho'zimlarni ta'rif bilan emas, bo'g'in bilan aytish",
              "Orf yondashuvi — ritmni so'z va tana harakati orqali, keyin cholg'uda mustahkamlash",
              "Dalkroz ritmikasi — metr va ritmni harakatda his qilish",
              "Raqamli vositalar — nota dasturi, eshitish mashqlari, platformadagi test",
            ],
          },
          {
            kind: "matn",
            text: "Tizim tanlashda mezon bitta: u bolaning eshitishini rivojlantiradimi yoki faqat belgini tanishga o'rgatadimi. Ikkinchisi tezroq natija beradi, lekin musiqiy savodga olib kelmaydi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Musiqa savodi — musiqiy yozuvni o'qish va eshitilganni belgilash ko'nikmasi",
              "Metr — urg'uli va urg'usiz zarblarning muntazam almashinuvi",
              "Ritm — tovush cho'zimlarining ketma-ketligi",
              "O'lchov — taktdagi zarblar soni va ularning cho'zimi",
              "Lad — tovushlarning barqaror va beqaror munosabati tizimi",
              "Tonika — ladning asosiy, eng barqaror tovushi",
              "Solmizatsiya — bo'g'in nomlari bilan kuylash usuli",
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
            text: "Bitta ritmik naqshni tanlang. Uni to'rt bosqichda o'rgatish rejasini yozing: eshitish → harakat → bo'g'in bilan aytish → belgida ko'rsatish. Har bosqichga necha daqiqa?",
          },
          {
            kind: "mashq",
            text: "Major va minorni tanishtirish uchun ikkita qisqa namuna tanlang va uchta savol yozing. Birinchi savolda «major» va «minor» so'zlari bo'lmasin.",
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
                id: "m12-t1",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt: "Musiqa savodida to'g'ri ketma-ketlik qaysi?",
                options: [
                  { id: "a", text: "Belgi → eshitish → kuylash" },
                  { id: "b", text: "Eshitish → kuylash → belgi" },
                  { id: "c", text: "Yozish → o'qish → eshitish" },
                  { id: "d", text: "Ta'rif → mashq → belgi" },
                ],
                correctId: "b",
              },
              {
                id: "m12-t2",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt: "Nega ritm tovush balandligidan oldin o'rganiladi?",
                options: [
                  { id: "a", text: "U osonroq" },
                  { id: "b", text: "U harakat bilan bog'lanadi va tanada seziladi" },
                  { id: "c", text: "Dasturda shunday" },
                  { id: "d", text: "Nota yozuvi talab qiladi" },
                ],
                correctId: "b",
              },
              {
                id: "m12-t3",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Lad tushunchasini tanishtirishda qaysi yo'l samaraliroq?",
                options: [
                  { id: "a", text: "Ta'rifni yozdirish" },
                  { id: "b", text: "Ikki namunani solishtirib, keyin nom berish" },
                  { id: "c", text: "Gammani yodlatish" },
                  { id: "d", text: "Nota daftarida belgilash" },
                ],
                correctId: "b",
              },
              {
                id: "m12-t4",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Nega musiqa savodi alohida uzun bo'lak qilib berilmaydi?",
                options: [
                  { id: "a", text: "Vaqt yetmaydi" },
                  { id: "b", text: "U boshqa faoliyatlar ichida ma'noga ega bo'ladi; ajratilgan nazariya diqqatni yo'qotadi" },
                  { id: "c", text: "Bolalar notani yoqtirmaydi" },
                  { id: "d", text: "Darslikda yo'q" },
                ],
                correctId: "b",
              },
              {
                id: "m12-t5",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "«Yurish — chorak, yugurish — sakkizlik» qaysi bosqichga misol?",
                options: [
                  { id: "a", text: "Belgi bilan tanishtirish" },
                  { id: "b", text: "Harakat orqali sezdirish" },
                  { id: "c", text: "Yozish" },
                  { id: "d", text: "Baholash" },
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
              "Yozuv — eshitilgan narsaning nomi, aksincha emas",
              "Ketma-ketlik: eshitish → harakat va ovoz → belgi → o'qish → yozish",
              "Ritm tovush balandligidan oldin: u tanada seziladi",
              "Lad ta'rif bilan emas, qiyoslash bilan tanishtiriladi",
              "Savod boshqa faoliyatlar ichiga joylashadi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'zingiz nota savodini qanday o'rgangansiz — eshitishdanmi yoki belgidanmi?",
      "Qaysi savod elementi sinfda eng ko'p qiyinchilik tug'diradi deb o'ylaysiz?",
    ],
  },
  /* ──────────────────────────── M13 ──────────────────────────── */
  {
    id: "met-m13",
    slug: "m13-ritmik-harakatlar",
    title: "M13: Musiqiy-ritmik harakatlar va ularni o'qitish",
    summary:
      "Harakat va musiqa uyg'unligi, ritmika mashqlari va ularni darsda tashkil etish.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-18",
    area: "ritm",
    dasturKodi: "M13",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN5"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Bola ritmni avval tanasi bilan tushunadi. Chaqaloq musiqa eshitganda tebranadi — hech kim o'rgatmagan. Ritmika shu tabiiy javobni ta'lim vositasiga aylantiradi.",
          },
          {
            kind: "matn",
            text: "Shu sababli harakat musiqa darsida «dam olish» emas: u o'lchov, temp va shaklni o'rgatishning eng tez yo'li.",
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
              "Metrni yurish bilan sezish — har hissaga bir qadam",
              "Ritmik naqshni qarsak yoki qadam bilan takrorlash",
              "Tempni harakat tezligi bilan ko'rsatish",
              "Dinamikani harakat kengligi bilan ifodalash",
              "Shaklni almashuv bilan ko'rsatish: A qismda yurish, B qismda aylanish",
            ],
          },
          {
            kind: "matn",
            text: "Harakat topshirig'i doim aniq bo'lishi kerak. «Musiqaga mos harakat qiling» degan ko'rsatma sinfni tartibsizlikka olib keladi, chunki mezon yo'q. «Har kuchli hissada qadam tashlang» — bu tekshiriladigan vazifa.",
          },
          {
            kind: "eslatma",
            text: "Sinf hajmi chegara qo'yadi: 30 bola parta orasida yura olmaydi. Shuning uchun ritmika mashqlari ikki turda rejalashtiriladi — o'tirgan holda (qarsak, barmoq, yelka) va turgan holda (qadam, aylanish). Ikkinchisi joy bo'lsa qo'llanadi.",
          },
          {
            kind: "matn",
            text: "Yosh bo'yicha farq: 1–2-sinfda harakat ko'p va erkin, 5–7-sinfda esa bolalar uyala boshlaydi. Katta sinfda harakat kichikroq bo'ladi — qarsak, barmoq urish, boshqarish imo-ishorasi.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: nega harakat kerak",
        blocks: [
          {
            kind: "matn",
            text: "Musiqiy-ritmik harakat musiqa darsining to'rtinchi faoliyat turi. Uning asosi oddiy: ritm avval tana bilan his qilinadi, keyin ong bilan tushuniladi. Bola qadam bosa olsa, u zarbni biladi — hatto «zarb» so'zini bilmasa ham.",
          },
          {
            kind: "matn",
            text: "Pedagogik ahamiyati bir nechta yo'nalishda ko'rinadi:",
          },
          {
            kind: "royxat",
            items: [
              "Ritm hissi — eng tez va ishonchli yo'l harakat orqali",
              "Diqqat va reaksiya — musiqa o'zgarganda harakatni o'zgartirish",
              "Koordinatsiya — qo'l, oyoq va ovozni muvofiqlashtirish",
              "Emotsional erkinlik — tortinchoq bola harakatda ochiladi",
              "Shaklni his qilish — qism almashganda harakat ham almashadi",
              "Jamoaviylik — umumiy harakatda o'z o'rnini topish",
            ],
          },
          {
            kind: "matn",
            text: "Dalkroz tizimi aynan shu g'oyaga qurilgan: musiqani tushunish uchun uni boshdan kechirish kerak, boshdan kechirishning eng tabiiy yo'li esa harakat. Orf yondashuvi bunga cholg'uni qo'shadi: harakat ritmi keyin zarbli cholg'uga o'tadi.",
          },
        ],
      },
      {
        id: "mashqlar",
        title: "Ritmika mashqlari",
        blocks: [
          {
            kind: "matn",
            text: "Mashqlar murakkablik bo'yicha bosqichma-bosqich beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "Zarb bosqichi — musiqa ostida bir tekis qadam yoki chapak",
              "Urg'u bosqichi — kuchli zarbni ajratib ko'rsatish (qadam-chapak)",
              "Ritmik naqsh — so'z yoki ism ritmini takrorlash",
              "Shaklni ko'rsatish — qism o'zgarganda harakat yo'nalishini o'zgartirish",
              "Dinamika va temp — harakat kattaligi va tezligi musiqaga ergashadi",
              "Ijodiy bosqich — bolaning o'zi harakat topadi va uni asoslaydi",
            ],
          },
          {
            kind: "matn",
            text: "Har bir bosqichda bitta yangi talab qo'yiladi. Ikki yangi talab birga berilsa (yangi ritm va yangi harakat), bolalar ikkalasini ham bajara olmaydi.",
          },
          {
            kind: "eslatma",
            text: "Harakatli mashq sinfni qo'zg'atadi. Shuning uchun uning oxirida sokinlashtiruvchi bosqich rejalashtiriladi: sekin harakat, nafas mashqi yoki jim tinglash — aks holda keyingi faoliyat buziladi.",
          },
        ],
      },
      {
        id: "tashkil",
        title: "Harakatli faoliyatni tashkil etish",
        blocks: [
          {
            kind: "matn",
            text: "Tashkiliy tomon mazmundan kam ahamiyatli emas. Sinf xonasida joy cheklangan, shuning uchun harakat turi joyga qarab tanlanadi: partada o'tirib bajariladigan harakatlar (chapak, qo'l, barmoq), joyda turib bajariladigan harakatlar va erkin harakatlar.",
          },
          {
            kind: "royxat",
            items: [
              "Joy va xavfsizlik oldindan tekshiriladi",
              "Harakat ko'rsatib tushuntiriladi, so'z bilan emas",
              "Avval musiqasiz, keyin musiqa bilan bajariladi",
              "Sekin tempdan boshlanadi",
              "Tugash ishorasi oldindan kelishiladi",
            ],
          },
          {
            kind: "matn",
            text: "Baholashda ham o'ziga xoslik bor: harakatning chiroyliligi emas, musiqaga mosligi baholanadi. Noqulay harakat qilgan, lekin ritmni aniq ushlagan bola — maqsadni bajargan bola.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Musiqiy-ritmik harakat — musiqa ostida bajariladigan, uning ritmi va xarakteriga mos harakat",
              "Ritmika — musiqani harakat orqali idrok etishga asoslangan ta'lim yo'nalishi",
              "Zarb — metrning bir tekis takrorlanuvchi birligi",
              "Urg'u — kuchli zarb; metr tuzilmasining asosi",
              "Koordinatsiya — bir vaqtda bajariladigan harakatlarning muvofiqligi",
              "Sokinlashtiruvchi bosqich — harakatli mashqdan keyin diqqatni qaytaradigan qism",
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
            text: "Bitta qo'shiq tanlang va unga ikkita harakat topshirig'i tuzing: biri o'tirgan holda, biri turgan holda. Har birida vazifa aniq va tekshiriladigan bo'lsin.",
            instrument: "doira",
          },
          {
            kind: "mashq",
            text: "6-sinf uchun ritmik mashq tuzing. Yosh xususiyatini hisobga oling: harakat qanday o'zgaradi va nega? Javobingizni ikki jumlada asoslang.",
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
                id: "m13-t1",
                area: "ritm",
                bloom: "tushunish",
                kind: "single",
                prompt: "Musiqa darsida harakatning asosiy vazifasi nima?",
                options: [
                  { id: "a", text: "Bolalarni dam oldirish" },
                  { id: "b", text: "O'lchov, temp va shaklni tanada sezdirish" },
                  { id: "c", text: "Tartibni saqlash" },
                  { id: "d", text: "Vaqtni to'ldirish" },
                ],
                correctId: "b",
              },
              {
                id: "m13-t2",
                area: "ritm",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Qaysi ko'rsatma tekshiriladigan vazifa hisoblanadi?",
                options: [
                  { id: "a", text: "Musiqaga mos harakat qiling" },
                  { id: "b", text: "Har kuchli hissada qadam tashlang" },
                  { id: "c", text: "Erkin raqsga tushing" },
                  { id: "d", text: "Musiqani his qiling" },
                ],
                correctId: "b",
              },
              {
                id: "m13-t3",
                area: "ritm",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "5–7-sinfda harakat mashqlari nega kichikroq bo'ladi?",
                options: [
                  { id: "a", text: "Dastur ruxsat bermaydi" },
                  { id: "b", text: "Yoshga xos uyalish paydo bo'ladi; kichik harakat qulayroq" },
                  { id: "c", text: "Sinf xonasi kichik" },
                  { id: "d", text: "Ular ritmni biladi" },
                ],
                correctId: "b",
              },
              {
                id: "m13-t4",
                area: "ritm",
                bloom: "qollash",
                kind: "multiple",
                prompt: "O'tirgan holda bajariladigan ritmik harakatlar qaysilar?",
                options: [
                  { id: "a", text: "Qarsak" },
                  { id: "b", text: "Barmoq bilan parta ustida urish" },
                  { id: "c", text: "Yelka harakati" },
                  { id: "d", text: "Aylanib yurish" },
                ],
                correctIds: ["a", "b", "c"],
              },
              {
                id: "m13-t5",
                area: "ritm",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Shaklni harakat bilan ko'rsatishga eng mos misol qaysi?",
                options: [
                  { id: "a", text: "Doim bir xil qadam" },
                  { id: "b", text: "A qismda yurish, B qismda aylanish" },
                  { id: "c", text: "Faqat qarsak" },
                  { id: "d", text: "Ovozni balandlatish" },
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
              "Harakat — dam olish emas, o'lchov va shaklni o'rgatish vositasi",
              "Topshiriq aniq va tekshiriladigan bo'lishi kerak",
              "Sinf hajmi uchun ikki tur: o'tirgan va turgan holda",
              "Yosh ortgan sari harakat kichrayadi, lekin yo'qolmaydi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "Sinfda harakat mashqi tartibsizlikka aylanib ketsa, birinchi nimani tekshirasiz?",
      "Katta sinfda harakatni qanday qilib «bolalarcha» ko'rinishdan chiqarasiz?",
    ],
  },

  /* ──────────────────────────── M14 ──────────────────────────── */
  {
    id: "met-m14",
    slug: "m14-bolalar-cholgulari",
    title: "M14: Bolalar cholg'u asboblarida jo'r bo'lishni o'rgatish",
    summary:
      "Cholg'u turlari, ansambl ijrochiligi va jo'rlikdan musiqa darsida foydalanish.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-18",
    area: "ritm",
    dasturKodi: "M14",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN5", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Cholg'u darsda ikki vazifani bajaradi: u kuylay olmaydigan bolani jarayonga qo'shadi va ritmik tuyg'uni mustahkamlaydi. Shu sababli cholg'u ansambli «qo'shimcha o'yin» emas, to'liq huquqli faoliyat turi.",
          },
          {
            kind: "matn",
            text: "Asosiy shart — partiya oddiy bo'lsin. Murakkab partiya bolani cholg'uga emas, o'z qo'liga qaratib qo'yadi va ansambl buziladi.",
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
              "Zarbli, balandligi aniqlanmagan: doira, marakas, treugolnik, qoshiq",
              "Zarbli, balandligi aniq: metallofon, ksilofon",
              "Milliy cholg'ular: doira, qayroq, safoil",
              "Shovqinli (o'z qo'li bilan yasalgan): guruchli quticha, qog'oz",
            ],
          },
          {
            kind: "matn",
            text: "Jo'rlik qurishning eng ishonchli usuli — ostinato: bitta qisqa naqsh butun asar davomida takrorlanadi. U har qanday darajadagi bolaga mos keladi va ansamblni ushlab turadi.",
          },
          {
            kind: "eslatma",
            text: "Cholg'u tarqatish tartibi oldindan o'ylanadi. Aks holda bolalar cholg'uni olishi bilan chala boshlaydi va darsni qaytarib olish qiyin. Qoida oddiy: cholg'u tizzada jim turadi, faqat ishora berilganda ko'tariladi.",
          },
          {
            kind: "matn",
            text: "Partiyalarni taqsimlashda ham pedagogik tanlov bor: diqqati tez tarqaladigan bolaga aniq va tez-tez takrorlanadigan partiya beriladi, chunki u bo'sh vaqt qolmasligi uchun band bo'ladi.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: cholg'u darsda nima beradi",
        blocks: [
          {
            kind: "matn",
            text: "Bolalar cholg'ulari darsda ikki vazifani bajaradi. Birinchisi — jo'rlik: qo'shiqni boyitadi va tempni ushlab turadi. Ikkinchisi va muhimrog'i — har bir bolaga faol ijro imkoni beradi: kuylashga tortinadigan bola cholg'uda ishtirok etadi.",
          },
          {
            kind: "matn",
            text: "Bolalar cholg'ulari odatda uch guruhga bo'linadi:",
          },
          {
            kind: "royxat",
            items: [
              "Zarbli, aniq balandliksiz — doira, baraban, marakas, qoshiq, treugolnik, qayroq",
              "Zarbli, aniq balandlikli — metallofon, ksilofon, qo'ng'iroqlar",
              "Dam beriladigan va boshqa sodda cholg'ular — hushtak, nay turlari (maktab sharoitiga qarab)",
            ],
          },
          {
            kind: "matn",
            text: "Milliy cholg'ulardan doira maktab darsida eng qulayi: u usulni aniq beradi, o'rgatish oson va o'zbek musiqa an'anasining tabiiy qismi. Doira usuli bilan ishlash bola uchun ham ritmik mashq, ham milliy merosga kirish bo'ladi.",
          },
          {
            kind: "eslatma",
            text: "Cholg'u yo'q bo'lsa, faoliyat yo'qolmaydi: chapak, barmoq zarbi, parta zarbi va tanadagi boshqa tovushlar (body percussion) xuddi shu maqsadga xizmat qiladi.",
          },
        ],
      },
      {
        id: "jorlik",
        title: "Jo'r bo'lish malakasini shakllantirish",
        blocks: [
          {
            kind: "matn",
            text: "Jo'rlik — qo'shiqqa qo'shimcha qatlam, shuning uchun u qo'shiqdan oldin emas, keyin o'rgatiladi. Ketma-ketlik buzilsa, bolalar cholg'uga qiziqib, ohangni tashlab qo'yadi.",
          },
          {
            kind: "royxat",
            items: [
              "Qo'shiq ohangi mustahkamlanadi — jo'rliksiz, aniq",
              "Jo'rlik naqshi musiqasiz o'rgatiladi — qo'l yoki chapak bilan",
              "Naqsh cholg'uga o'tkaziladi — hali qo'shiqsiz",
              "Kichik guruh jo'rlik qiladi, qolganlar kuylaydi",
              "Rollar almashtiriladi — hamma ikki tomonni sinab ko'radi",
              "To'liq birlashtirish — kuylash va jo'rlik birga",
            ],
          },
          {
            kind: "matn",
            text: "Jo'rlik naqshi sodda bo'lishi kerak: bir yoki ikki elementdan ortiq bo'lmasin va takrorlanadigan bo'lsin (ostinato). Murakkab jo'rlik qo'shiqni bosib ketadi.",
          },
          {
            kind: "matn",
            text: "Ansambl ijrosida asosiy talab — balans: jo'rlik ohangni to'ldiradi, uni yopmaydi. Buni tekshirishning eng oddiy yo'li: jo'rlik ostida qo'shiq so'zlari tushunarli eshitiladimi?",
          },
        ],
      },
      {
        id: "darsda",
        title: "Cholg'u jo'rligidan darsda foydalanish",
        blocks: [
          {
            kind: "matn",
            text: "Cholg'u darsda uch xil o'rinda ishlatiladi: qo'shiqqa jo'rlik, tinglash asarining ritmini aniqlash va ijodiy topshiriq (o'z jo'rligini topish).",
          },
          {
            kind: "royxat",
            items: [
              "Jo'rlik — qo'shiqning naqoratiga yoki ikkinchi bandiga qo'shiladi, boshidan emas",
              "Ritmni aniqlash — tinglangan asarning usulini cholg'uda takrorlash",
              "Ijodiy topshiriq — berilgan shartga mos jo'rlik o'ylab topish",
              "Tashkiliy foydalanish — cholg'u tovushi ishora sifatida: boshlash, to'xtash",
            ],
          },
          {
            kind: "matn",
            text: "Tashkiliy tomoni: cholg'ular tarqatish va yig'ish tartibi oldindan belgilanadi, aks holda darsning besh daqiqasi shovqinda ketadi. Eng sodda yechim — cholg'u faoliyat boshlanganda tarqatiladi va darhol yig'iladi.",
          },
          {
            kind: "eslatma",
            text: "Cholg'u sinfda tartibni buzuvchi vositaga aylanishi mumkin. Shuning uchun birinchi darsda bitta qoida o'rnatiladi: cholg'u faqat ishora berilganda tovush chiqaradi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Bolalar cholg'ulari — maktab darsida qo'llanadigan, maxsus tayyorgarlik talab qilmaydigan sodda cholg'ular",
              "Jo'rlik — asosiy ohangni to'ldiruvchi musiqiy qatlam",
              "Ostinato — bir xil takrorlanuvchi qisqa ritmik yoki melodik naqsh",
              "Usul — o'zbek musiqasida doira yoki boshqa zarbli cholg'uda beriladigan ritmik formula",
              "Ansambl balansi — ovozlar va cholg'ular kuchining muvofiqligi",
              "Body percussion — tana yordamida tovush chiqarish: chapak, barmoq, zarb",
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
            text: "Bitta qo'shiqqa uch partiyali cholg'u jo'rligi tuzing: bittasi ostinato, bittasi faqat kuchli hissada, bittasi faqat qismlar chegarasida. Qaysi partiyani kimga berishingizni asoslang.",
            instrument: "doira",
            exerciseId: "doira-asosiy",
          },
          {
            kind: "mashq",
            text: "Cholg'u tarqatish va yig'ish tartibini yozing: kim tarqatadi, qanday signal bilan boshlanadi va tugaydi, qoidabuzarlikda nima qilinadi.",
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
                id: "m14-t1",
                area: "ritm",
                bloom: "tushunish",
                kind: "single",
                prompt: "Cholg'u darsdagi qaysi muammoni yechadi?",
                options: [
                  { id: "a", text: "Vaqtni to'ldiradi" },
                  { id: "b", text: "Kuylay olmaydigan bolani jarayonga qo'shadi" },
                  { id: "c", text: "Nota savodini almashtiradi" },
                  { id: "d", text: "Baholashni osonlashtiradi" },
                ],
                correctId: "b",
              },
              {
                id: "m14-t2",
                area: "ritm",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Ansamblni ushlab turishning eng ishonchli usuli qaysi?",
                options: [
                  { id: "a", text: "Murakkab partiya berish" },
                  { id: "b", text: "Ostinato — qisqa naqshning takrorlanishi" },
                  { id: "c", text: "Har bolaga alohida partiya" },
                  { id: "d", text: "Tezroq temp" },
                ],
                correctId: "b",
              },
              {
                id: "m14-t3",
                area: "ritm",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Diqqati tez tarqaladigan bolaga qanday partiya berish maqsadga muvofiq?",
                options: [
                  { id: "a", text: "Kam uchraydigan, uzun kutishli" },
                  { id: "b", text: "Aniq va tez-tez takrorlanadigan — bo'sh vaqt qolmasin" },
                  { id: "c", text: "Hech qanday partiya bermaslik" },
                  { id: "d", text: "Eng murakkabi" },
                ],
                correctId: "b",
              },
              {
                id: "m14-t4",
                area: "ritm",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Nega cholg'u partiyasi oddiy bo'lishi kerak?",
                options: [
                  { id: "a", text: "Bolalar qobiliyatsiz" },
                  { id: "b", text: "Murakkab partiya diqqatni ansambldan o'z qo'liga ko'chiradi" },
                  { id: "c", text: "Cholg'ular sifatsiz" },
                  { id: "d", text: "Vaqt yetmaydi" },
                ],
                correctId: "b",
              },
              {
                id: "m14-t5",
                area: "ritm",
                bloom: "bilish",
                kind: "multiple",
                prompt: "Balandligi aniqlanmagan zarbli cholg'ular qaysilar?",
                options: [
                  { id: "a", text: "Doira" },
                  { id: "b", text: "Marakas" },
                  { id: "c", text: "Treugolnik" },
                  { id: "d", text: "Metallofon" },
                ],
                correctIds: ["a", "b", "c"],
                explanation:
                  "Metallofonda har plastinka aniq balandlikka ega.",
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
              "Cholg'u — to'liq huquqli faoliyat turi, qo'shimcha o'yin emas",
              "Ostinato — ansamblni ushlab turadigan eng ishonchli naqsh",
              "Partiya oddiy bo'lsin: murakkablik ansamblni buzadi",
              "Tarqatish tartibi va signal oldindan kelishiladi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "Cholg'u yetishmasa nima qilasiz? Ikki yechim yozing.",
      "Qaysi bolaga qaysi partiyani berish — bu qanday pedagogik qaror?",
    ],
  },

  /* ──────────────────────────── M15 ──────────────────────────── */
  {
    id: "met-m15",
    slug: "m15-rejalashtirish-ishlanma",
    title: "M15: Darslarni rejalashtirish va ishlanma tayyorlash",
    summary:
      "Taqvim-mavzu reja, texnologik xarita, dars ishlanmasining tarkibi va samaradorlik mezonlari.",
    durationMin: 80,
    bloom: "sintez",
    outcomeId: "on-met-3",
    area: "metodika",
    dasturKodi: "M15",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN3"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Dars ishlanmasi — hujjat emas, **vosita**. Uning vazifasi tekshiruvchiga ko'rsatish emas, o'qituvchining o'ziga darsni oldindan boshdan kechirishga yordam berish.",
          },
          {
            kind: "matn",
            text: "Shuning uchun yaxshi ishlanmaning belgisi — uni o'qib, darsni tasavvur qila olish. Agar matndan dars ko'rinmasa, ishlanma shaklan to'g'ri bo'lsa ham ishlamaydi.",
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
              "Taqvim-mavzu reja — o'quv yili davomida mavzular va soatlar",
              "Texnologik xarita — darsning bosqichlari, vaqti, o'qituvchi va o'quvchi faoliyati",
              "Dars ishlanmasi — bitta darsning to'liq loyihasi",
            ],
          },
          {
            kind: "matn",
            text: "Ishlanmaning tarkibi: mavzu; maqsad (ta'limiy, tarbiyaviy, rivojlantiruvchi); kutilayotgan natija; jihozlar; dars bosqichlari vaqti bilan; baholash usuli; uyga vazifa.",
          },
          {
            kind: "eslatma",
            text: "Eng ko'p uchraydigan xato — maqsad va natijaning bir xil yozilishi. Maqsad o'qituvchining niyati («qo'shiqni o'rgatish»), natija esa o'quvchining kuzatiladigan harakati («o'quvchi qo'shiqni toza va ifodali kuylaydi»).",
          },
          {
            kind: "matn",
            text: "Vaqt rejalashtirishda zaxira qoldiriladi. 45 daqiqaning 40 tasiga reja tuziladi, 5 daqiqa esa kutilmagan holat uchun: texnika ishlamadi, savol ko'paydi, sinf kech keldi. Zaxirasiz reja birinchi uzilishda qulaydi.",
          },
          {
            kind: "matn",
            text: "Dars samaradorligi mezoni oddiy: kutilayotgan natijaga nechta o'quvchi yetdi va buni qanday bilib oldingiz. Agar javob «his qildim» bo'lsa, mezon yo'q demakdir.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: rejalashtirishning uch qatlami",
        blocks: [
          {
            kind: "matn",
            text: "Rejalashtirish uch qatlamda boradi va har bir qatlam o'z savoliga javob beradi. Yillik (taqvim-mavzu) reja — mavzular yil bo'ylab qanday taqsimlangani. Chorak rejasi — chorak natijasi nima bo'lishi. Dars ishlanmasi — bitta darsda nima bo'lishi.",
          },
          {
            kind: "matn",
            text: "Rejalashtirish mantig'i yuqoridan pastga: yillik reja fan dasturidan chiqadi, dars ishlanmasi esa yillik rejadan. Teskari yo'l — darsdan rejaga — natijani tasodifga qoldiradi: har bir dars alohida yaxshi bo'lishi mumkin, lekin yil yakunida natija yig'ilmaydi.",
          },
          {
            kind: "royxat",
            items: [
              "Taqvim-mavzu reja — mavzu, soat, sana, o'quv natijasi, nazorat shakli",
              "Texnologik xarita — darsning bosqichlari, vaqt, o'qituvchi va o'quvchi faoliyati, kutilayotgan natija",
              "Dars ishlanmasi — maqsad, jihoz, bosqichlar, metodlar, baholash, uyga vazifa",
            ],
          },
          {
            kind: "matn",
            text: "Texnologik xarita ishlanmaning jadval ko'rinishi: unda har bir bosqich yonida vaqt va o'quvchi nima qilishi yozib boriladi. Uning afzalligi — darsning qaysi qismida o'quvchi faol, qaysi qismida passiv ekani darhol ko'rinadi.",
          },
        ],
      },
      {
        id: "ishlanma",
        title: "Dars ishlanmasining tarkibi",
        blocks: [
          {
            kind: "matn",
            text: "Ishlanma quyidagi qismlardan iborat bo'ladi. Ro'yxat rasmiy shakl emas, balki tekshiruv: qaysi qism yozilmasa, darsda nima noaniq qolishini ko'rsatadi.",
          },
          {
            kind: "royxat",
            items: [
              "Mavzu va sinf",
              "Maqsad — kuzatiladigan fe'l bilan; ta'limiy, tarbiyaviy va rivojlantiruvchi qismlari",
              "Kutilayotgan natija — dars oxirida o'quvchi nimani qila oladi",
              "Jihoz va vositalar — cholg'u, yozuv, taqdimot, nota",
              "Dars turi va qo'llanadigan metodlar",
              "Bosqichlar va vaqt taqsimoti",
              "Baholash usuli va mezonlari",
              "Uyga vazifa",
              "Dars yakunidagi o'z-o'zini tahlil uchun joy",
            ],
          },
          {
            kind: "matn",
            text: "Eng ko'p xato maqsad qismida bo'ladi: faoliyat maqsad o'rniga yoziladi. «Qo'shiqni o'rgatish» — o'qituvchining ishi; maqsad esa o'quvchi tomonidan yoziladi: «o'quvchi qo'shiqning birinchi bandini ifodali va toza kuylay oladi».",
          },
          {
            kind: "eslatma",
            text: "Vaqt taqsimoti haqiqatga mos bo'lishi kerak. 45 daqiqalik darsda qizdirish 3-5, yangi qo'shiq ustida ish 15-20, tinglash 7-10, yakun va baholash 5 daqiqa atrofida bo'ladi. Rejada 60 daqiqalik ish yozilgan bo'lsa, u reja emas, ro'yxat.",
          },
        ],
      },
      {
        id: "samaradorlik",
        title: "Dars samaradorligini baholash",
        blocks: [
          {
            kind: "matn",
            text: "Dars samaradorligi «qiziqarli bo'ldimi» bilan emas, natija bilan o'lchanadi. Tahlil uchun odatda quyidagi mezonlar qo'llaniladi:",
          },
          {
            kind: "royxat",
            items: [
              "Maqsadga erishilganmi — dars oxirida kutilgan natija ko'rindimi",
              "O'quvchi faolligi — vaqtning qancha qismida o'quvchi musiqa qildi",
              "Musiqiy sifat — ijro tozaligi va ifodaliligi oshdimi",
              "Vaqt taqsimoti — rejadagidek bordimi, qaysi bosqich cho'zildi",
              "Farqlashtirish — turli darajadagi o'quvchilar uchun ish bo'ldimi",
              "Teskari aloqa — o'quvchi nimani to'g'ri, nimani noto'g'ri qilganini bildimi",
              "Dars yaxlitligi — bosqichlar bitta obraz atrofida birlashdimi",
            ],
          },
          {
            kind: "matn",
            text: "O'z-o'zini tahlil — ishlanmaning majburiy qismi. Unda uch savolga javob beriladi: nima rejadagidek bo'ldi, nima bo'lmadi, keyingi darsda nima o'zgaradi. Shu uch javob yozib borilsa, ishlanmalar to'plami o'qituvchining kasbiy o'sish yozuvnomasiga aylanadi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Taqvim-mavzu reja — mavzularning o'quv yili bo'ylab sana va soat bilan taqsimlangan jadvali",
              "Texnologik xarita — dars bosqichlarini vaqt va faoliyat bo'yicha ko'rsatuvchi jadval",
              "Dars ishlanmasi — bitta darsning to'liq yozma rejasi",
              "Kutilayotgan natija — dars oxirida o'quvchi bajara oladigan aniq harakat",
              "O'z-o'zini tahlil — dars yakunida o'qituvchining o'z ishini baholashi",
              "Farqlashtirish — bir material bo'yicha turli darajadagi topshiriq berish",
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
            text: "Bitta dars uchun texnologik xarita tuzing: bosqich, vaqt, o'qituvchi faoliyati, o'quvchi faoliyati, kutilayotgan natija. Zaxira vaqtni ham ko'rsating.",
          },
          {
            kind: "mashq",
            text: "Bitta maqsad va bitta natijani yozing, so'ng ularni solishtiring: ikkisi bir xil bo'lib qolmadimi? Natijani kuzatiladigan fe'l bilan qayta yozing.",
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
                id: "m15-t1",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt: "Dars ishlanmasining asosiy vazifasi nima?",
                options: [
                  { id: "a", text: "Tekshiruvchiga hisobot berish" },
                  { id: "b", text: "O'qituvchiga darsni oldindan boshdan kechirishga yordam berish" },
                  { id: "c", text: "Dasturni to'ldirish" },
                  { id: "d", text: "Baho qo'yish" },
                ],
                correctId: "b",
              },
              {
                id: "m15-t2",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt: "Maqsad va kutilayotgan natija farqi nimada?",
                options: [
                  { id: "a", text: "Farqi yo'q" },
                  { id: "b", text: "Maqsad — o'qituvchining niyati, natija — o'quvchining kuzatiladigan harakati" },
                  { id: "c", text: "Maqsad qisqaroq yoziladi" },
                  { id: "d", text: "Natija faqat nazorat darsida bo'ladi" },
                ],
                correctId: "b",
              },
              {
                id: "m15-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt: "45 daqiqalik darsda rejaga necha daqiqa qo'yiladi?",
                options: [
                  { id: "a", text: "45 — to'liq" },
                  { id: "b", text: "Taxminan 40, qolgani zaxira" },
                  { id: "c", text: "30" },
                  { id: "d", text: "Vaqt rejalashtirilmaydi" },
                ],
                correctId: "b",
              },
              {
                id: "m15-t4",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "«Dars yaxshi o'tdi, his qildim» — bu nima uchun samaradorlik mezoni emas?",
                options: [
                  { id: "a", text: "Juda qisqa" },
                  { id: "b", text: "Unda kutilayotgan natijaga nechta o'quvchi yetgani ko'rsatilmagan" },
                  { id: "c", text: "Rasmiy emas" },
                  { id: "d", text: "O'qituvchi xato qilgan" },
                ],
                correctId: "b",
              },
              {
                id: "m15-t5",
                area: "metodika",
                bloom: "bilish",
                kind: "multiple",
                prompt: "Dars ishlanmasiga nimalar kiradi?",
                options: [
                  { id: "a", text: "Maqsad va kutilayotgan natija" },
                  { id: "b", text: "Bosqichlar va vaqt" },
                  { id: "c", text: "Baholash usuli" },
                  { id: "d", text: "O'qituvchining ish haqi" },
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
              "Ishlanma — hujjat emas, o'qituvchi uchun vosita",
              "Maqsad niyat, natija esa kuzatiladigan harakat",
              "Rejaga 40 daqiqa, 5 daqiqa zaxira",
              "Samaradorlik mezoni: natijaga nechta o'quvchi yetdi va buni qanday bildingiz",
            ],
          },
        ],
      },
    ],
    reflection: [
      "Ishlanma yozishda sizga eng qiyin band qaysi bo'ladi deb o'ylaysiz?",
      "Darsda reja buzilsa, qaysi bandni birinchi qurbon qilasiz va nega?",
    ],
  },
  /* ──────────────────────────── M16 ──────────────────────────── */
  {
    id: "met-m16",
    slug: "m16-repertuar-kompetensiyasi",
    title: "M16: Repertuar bilan ishlash kompetensiyasi va pedagogik mahorat",
    summary:
      "O'qituvchining kasbiy kompetensiyalari, pedagogik odob va asarni metodik tahlil qilish tamoyillari.",
    durationMin: 80,
    bloom: "baholash",
    outcomeId: "on-met-19",
    area: "metodika",
    dasturKodi: "M16",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN4", "TN6"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Repertuar bilan ishlash — o'qituvchining kundalik ishi, lekin u ko'pincha e'tibordan chetda qoladi: «darslikda nima bo'lsa, shuni o'tamiz». Aslida darslik tanlov beradi, tanlovni esa o'qituvchi qiladi.",
          },
          {
            kind: "matn",
            text: "Bu dars shu tanlovni ongli qilishga qaratilgan: asarni qaysi mezon bo'yicha ko'rib chiqish va qanday tahlil qilish kerak.",
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
              "Predmetli kompetensiya — asarni o'zi ijro eta olish va tahlil qila olish",
              "Metodik kompetensiya — uni sinfga yetkazish yo'lini tuza olish",
              "Psixologik-pedagogik — yosh va individual farqni hisobga olish",
              "Kommunikativ — sinf bilan muloqot, ko'rsatma berish, teskari aloqa",
              "Refleksiv — o'z darsini tahlil qila olish va o'zgartirish",
            ],
          },
          {
            kind: "matn",
            text: "Asarni metodik tahlil qilish bosqichlari: badiiy mazmun → musiqiy vositalar → ijro qiyinchiliklari → yoshga moslik → dars maqsadiga bog'lash.",
          },
          {
            kind: "eslatma",
            text: "«Ijro qiyinchiliklari» bandi ko'pincha tushib qoladi. Aslida u eng amaliy band: qaysi joyda sinf adashadi, qaysi sakrash qiyin, qaysi so'z talaffuzda chalkashadi. Buni oldindan aniqlash darsning yarmini tejaydi.",
          },
          {
            kind: "matn",
            text: "Pedagogik odob — o'qituvchining bolaga munosabatidagi me'yor. Musiqa darsida u ayniqsa sezilarli: toza kuylay olmagan bolani kulgi obyektiga aylantirish bir lahzada bo'ladi, oqibati esa yillar davom etadi.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: kasbiy kompetensiyalar",
        blocks: [
          {
            kind: "matn",
            text: "Musiqa o'qituvchisining kasbiy tayyorgarligi uch qatlamdan iborat: musiqiy-ijrochilik tayyorgarligi, pedagogik tayyorgarligi va shu ikkisini bir-biriga bog'laydigan metodik tayyorgarlik. Uchinchisi yo'q bo'lsa, birinchi ikkisi darsda uchrashmaydi.",
          },
          {
            kind: "royxat",
            items: [
              "Musiqiy-ijrochilik — kuylash, cholg'uda ijro, dirijyorlik ishorasi, notadan o'qish",
              "Pedagogik — dars loyihalash, sinfni boshqarish, baholash, teskari aloqa",
              "Metodik — material tanlash, o'rgatish ketma-ketligini belgilash, xatoni tashxislash",
              "Psixologik — yosh xususiyatlarini hisobga olish, motivatsiyani boshqarish",
              "Madaniy-ma'rifiy — milliy va jahon merosini bilish, did",
              "Raqamli — audio, nota va platforma vositalaridan foydalanish",
            ],
          },
          {
            kind: "matn",
            text: "Pedagogik mahorat esa bu kompetensiyalarning yig'indisi emas, ularning vaziyatga qarab ishlashi. Uning ko'rinadigan belgilari: dars ritmini ushlab turish, kutilmagan holatga tez javob topish, ovoz va ishora bilan boshqarish, har bir bolani ko'rish.",
          },
          {
            kind: "eslatma",
            text: "Pedagogik mahorat tajriba bilan o'sadi, lekin o'z-o'zidan emas: faqat refleksiya bilan. Tahlil qilinmagan o'n yillik tajriba bir yillik tajribaning o'n marta takrorlanishi bo'lib qolishi mumkin.",
          },
        ],
      },
      {
        id: "repertuar",
        title: "Repertuar bilan ishlash tamoyillari",
        blocks: [
          {
            kind: "matn",
            text: "Repertuar bilan ishlash — bir martalik tanlov emas, davomiy jarayon: tanlash, tahlil qilish, moslashtirish, o'rgatish va natijani baholash. Uning tamoyillari quyidagicha.",
          },
          {
            kind: "royxat",
            items: [
              "Maqsadga bog'liqlik — har bir asar aniq o'quv maqsadiga xizmat qiladi",
              "Yoshga moslik — diapazon, matn, davomiylik va obraz sinfga mos",
              "Badiiy qimmat — asar did shakllantiradi",
              "Bosqichma-bosqich murakkablashish — yil davomida talab asta oshadi",
              "Xilma-xillik — janr, xarakter va faoliyat turi bo'yicha muvozanat",
              "Milliy asos — repertuarning o'zagi milliy meros, jahon namunalari uni to'ldiradi",
              "Bajarib bo'ladiganlik — mashq uchun real vaqt hisobga olinadi",
            ],
          },
          {
            kind: "matn",
            text: "Moslashtirish alohida ko'nikma: tonallikni o'zgartirish, bandlar sonini kamaytirish, murakkab joyni soddalashtirish yoki asarni guruhlarga bo'lib berish. Moslashtirish asarni buzish emas — chegarasi bitta: asarning xarakteri va ma'nosi saqlanishi kerak.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Metodik tahlilning o'rni",
        blocks: [
          {
            kind: "matn",
            text: "Metodik tahlil badiiy tahlildan farq qiladi. Badiiy tahlil savoli: asar qanday qurilgan va nima ifodalaydi. Metodik tahlil savoli: bu asarni shu sinfga qanday o'rgataman va qaysi joyda qiyinchilik chiqadi.",
          },
          {
            kind: "royxat",
            items: [
              "Qiyinchilikni oldindan topish — eng qiyin ikki takt yoki ibora",
              "Qiyinchilik sababini aniqlash — diapazon, sakrash, ritm, so'z yoki nafas",
              "Yechim tanlash — alohida mashq, sekin temp, moslashtirish yoki guruhlarga bo'lish",
              "Ketma-ketlikni belgilash — nimadan boshlanadi, nima keyin qo'shiladi",
              "Vaqtni taqsimlash — necha darsda o'rganiladi",
            ],
          },
          {
            kind: "matn",
            text: "Shu besh qadam har bir asar uchun bajarilsa, o'qituvchi darsga «qo'shiqni o'rgatamiz» degan niyat bilan emas, aniq reja bilan keladi. Aynan shu farq tajribali o'qituvchini boshlovchidan ajratib turadi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Kasbiy kompetensiya — kasbiy vazifani mustaqil bajarishga yetarli bilim, ko'nikma va munosabat",
              "Pedagogik mahorat — kompetensiyalarning aniq o'quv vaziyatida muvofiq ishlashi",
              "Metodik tahlil — asarni o'rgatish nuqtai nazaridan tekshirish",
              "Moslashtirish — asarni sinf imkoniyatiga sozlash (tonallik, hajm, murakkablik)",
              "Refleksiya — o'z kasbiy faoliyatini tahlil qilish va xulosa chiqarish",
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
            text: "Bitta asarni beshta bosqich bo'yicha tahlil qiling: mazmun, vositalar, ijro qiyinchiliklari, yoshga moslik, dars maqsadi. «Ijro qiyinchiliklari» bandida kamida uchta aniq joy ko'rsating.",
          },
          {
            kind: "mashq",
            text: "Toza kuylay olmaydigan bolaga dars davomida bera oladigan uchta vazifani yozing — shunday vazifalarki, u jarayondan chiqib qolmasin va kamsitilmasin.",
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
                id: "m16-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt:
                  "Metodik tahlilda «ijro qiyinchiliklari» bandining amaliy foydasi nima?",
                options: [
                  { id: "a", text: "Hujjatni to'ldiradi" },
                  { id: "b", text: "Sinf adashadigan joylarni oldindan aniqlab, dars vaqtini tejaydi" },
                  { id: "c", text: "Asar tarixini ko'rsatadi" },
                  { id: "d", text: "Baholashni osonlashtiradi" },
                ],
                correctId: "b",
              },
              {
                id: "m16-t2",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt: "Metodik tahlil bosqichlarining to'g'ri tartibi qaysi?",
                options: [
                  { id: "a", text: "Dars maqsadi → mazmun → vositalar → qiyinchilik" },
                  { id: "b", text: "Mazmun → vositalar → ijro qiyinchiliklari → yoshga moslik → dars maqsadi" },
                  { id: "c", text: "Qiyinchilik → mazmun → yosh → vositalar" },
                  { id: "d", text: "Yosh → maqsad → mazmun → vositalar" },
                ],
                correctId: "b",
              },
              {
                id: "m16-t3",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "«Darslikda nima bo'lsa shuni o'tamiz» yondashuvi nega yetarli emas?",
                options: [
                  { id: "a", text: "Darslik eskirgan" },
                  { id: "b", text: "Darslik tanlov beradi; tanlovni sinfga qarab o'qituvchi qiladi" },
                  { id: "c", text: "Darslikda asar kam" },
                  { id: "d", text: "Dastur boshqacha talab qiladi" },
                ],
                correctId: "b",
              },
              {
                id: "m16-t4",
                area: "metodika",
                bloom: "qollash",
                kind: "multiple",
                prompt:
                  "O'qituvchining kasbiy kompetensiyalari qaysilar?",
                options: [
                  { id: "a", text: "Predmetli va metodik" },
                  { id: "b", text: "Psixologik-pedagogik" },
                  { id: "c", text: "Kommunikativ va refleksiv" },
                  { id: "d", text: "Buxgalteriya hisobi" },
                ],
                correctIds: ["a", "b", "c"],
              },
              {
                id: "m16-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Toza kuylay olmagan bolaga nisbatan eng to'g'ri pedagogik harakat qaysi?",
                options: [
                  { id: "a", text: "Jim o'tirishini so'rash" },
                  { id: "b", text: "Jarayonda qoladigan boshqa vazifa berish — ritm, cholg'u, boshqaruv" },
                  { id: "c", text: "Sinf oldida qayta kuylatish" },
                  { id: "d", text: "Baho pasaytirish" },
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
              "Kompetensiyalar: predmetli, metodik, psixologik-pedagogik, kommunikativ, refleksiv",
              "Tahlil bosqichlari: mazmun → vositalar → qiyinchiliklar → yosh → maqsad",
              "«Ijro qiyinchiliklari» — eng amaliy band, tushirib qoldirilmaydi",
              "Pedagogik odob musiqa darsida ayniqsa sezilarli",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'z kompetensiyalaringiz ichida qaysi biri eng kuchli va qaysi biri rivojlanishga muhtoj?",
      "Asarni tahlil qilishda qaysi bosqichni o'tkazib yuborishingiz mumkin? Nega?",
    ],
  },

  /* ──────────────────────────── M17 ──────────────────────────── */
  {
    id: "met-m17",
    slug: "m17-musiqiy-qobiliyatlar",
    title: "M17: O'quvchilarning musiqiy qobiliyatlari va ularni rivojlantirish",
    summary:
      "Musiqiy eshituv, ritm sezgisi va musiqiy xotira; individual yondashuv va ijodkorlikni rivojlantirish.",
    durationMin: 80,
    bloom: "tahlil",
    outcomeId: "on-met-9",
    area: "metodika",
    dasturKodi: "M17",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN5"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "«Bu bolada qobiliyat yo'q» — musiqa darsida tez-tez eshitiladigan hukm. U xavfli, chunki ko'pincha qobiliyat emas, **tajriba** yetishmaydi: uyda musiqa eshitilmagan, hech kim u bilan kuylamagan.",
          },
          {
            kind: "matn",
            text: "Musiqiy qobiliyatlar rivojlanadi. Savol — qaysi qobiliyat, qanday mashq bilan va qancha vaqtda.",
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
              "Ladli eshituv — ohangni lad ichida his qilish, tonikaga intilishni sezish",
              "Musiqiy-ritmik sezgi — metr va ritmni aniq idrok etish va takrorlash",
              "Musiqiy xotira — eshitganini saqlash va qayta tiklash",
              "Intonatsion eshituv — tovush balandligini aniq farqlash va toza kuylash",
              "Tembr va dinamik eshituv — ovoz bo'yog'i va kuchini farqlash",
            ],
          },
          {
            kind: "matn",
            text: "Tashxis oddiy mashqlar bilan qilinadi: qisqa ohangni takrorlash (intonatsion eshituv), qarsak naqshini qaytarish (ritmik sezgi), ikki tovushdan qaysi biri baland ekanini aytish (balandlik farqi).",
          },
          {
            kind: "eslatma",
            text: "Toza kuylay olmaslik ikki xil sababdan bo'ladi: eshitmaydi yoki eshitadi-yu, ovozi bilan topa olmaydi. Ikkinchisi ancha ko'p uchraydi va ancha tez tuzaladi — bola o'z ovozini boshqarishni o'rganishi kerak, xolos.",
          },
          {
            kind: "matn",
            text: "Individual yondashuv sinfda alohida dars o'tkazish degani emas. U bir xil material ichida turli vazifa berishdir: kuchli bola ikkinchi ovozni oladi, qiynalayotgan bola asosiy ohangni, uchinchisi ritmik jo'rlikni.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: musiqiy qobiliyatlar tuzilishi",
        blocks: [
          {
            kind: "matn",
            text: "Musiqiy qobiliyat yagona narsa emas — u bir nechta mustaqil komponentdan iborat va ular bir odamda turli darajada rivojlangan bo'ladi. Shuning uchun «musiqaga qobiliyati yo'q» degan xulosa deyarli har doim xato: biror komponent sust, boshqasi esa kuchli bo'lishi mumkin.",
          },
          {
            kind: "royxat",
            items: [
              "Ladli his — ohangni lad asosida eshitish, tugaganini va tugamaganini sezish",
              "Musiqiy eshituv — balandlikni farqlash; absolyut va nisbiy ko'rinishlari bor",
              "Ichki eshituv — tovushni eshitmasdan, ichda tasavvur qilish",
              "Ritm hissi — zarbni tutish va ritmik naqshni aniq takrorlash",
              "Musiqiy xotira — ohang va ritmni eslab qolish va tiklash",
              "Emotsional javobgarlik — musiqaga his bilan javob berish",
            ],
          },
          {
            kind: "matn",
            text: "Oxirgi komponent asos hisoblanadi: emotsional javobsiz qolgan beshtasi texnik ko'nikmaga aylanadi. Shuning uchun diagnostika faqat «aniq kuyladimi» degan savol bilan cheklanmaydi.",
          },
          {
            kind: "eslatma",
            text: "Qobiliyat tug'ma emas, rivojlanadigan narsa. Boshlang'ich daraja turlicha bo'ladi, lekin har bir komponent mashq bilan o'sadi — bu musiqa pedagogikasining asosiy amaliy xulosasi.",
          },
        ],
      },
      {
        id: "rivojlantirish",
        title: "Har bir komponentni rivojlantirish yo'llari",
        blocks: [
          {
            kind: "matn",
            text: "Qobiliyatni «umuman» rivojlantirish mumkin emas — har bir komponent o'z mashqini talab qiladi.",
          },
          {
            kind: "royxat",
            items: [
              "Ladli his — tonikaga qaytmaydigan ohangni to'xtatib, tugamaganini sezdirish; sodda ohanglarni solmizatsiya bilan kuylash",
              "Eshituv — ikki tovushni taqqoslash, intervalni eshitib aniqlash, jo'rliksiz kuylash",
              "Ichki eshituv — ohangni ichda kuylab, so'ng ovozda davom ettirish (jim-ovozli almashinuv)",
              "Ritm hissi — harakat, chapak, ritmik bo'g'inlar, so'z ritmini takrorlash",
              "Musiqiy xotira — qisqa naqshni eshitib takrorlash, har safar uzaytirib borish",
              "Emotsional javob — tinglashdan keyin taassurotni so'z, rang yoki harakat bilan ifodalash",
            ],
          },
          {
            kind: "matn",
            text: "Mashqning umumiy qoidasi: qisqa, lekin muntazam. Har darsda besh daqiqalik maqsadli mashq chorakda bir martalik uzun mashqdan samaraliroq.",
          },
        ],
      },
      {
        id: "individual",
        title: "Individual yondashuv",
        blocks: [
          {
            kind: "matn",
            text: "Individual yondashuv — har bir bolaga alohida dars berish emas (sinfda bu imkonsiz), balki bir material bo'yicha turli darajadagi talab qo'yish.",
          },
          {
            kind: "royxat",
            items: [
              "Bir qo'shiq — turli vazifa: biri ohangni kuylaydi, ikkinchisi ostinato qiladi, uchinchisi ikkinchi ovozni oladi",
              "Rol taqsimoti — tortinchoq bola cholg'uda yoki guruh bilan ishtirok etadi",
              "Qiyinlik darajasi — ayni mashq uch darajada beriladi",
              "Natijani o'z o'sishiga nisbatan baholash — sinf o'rtachasiga emas",
              "Kuchli tomondan boshlash — bola nimani yaxshi qiladi, shundan boshlab ishonch beriladi",
            ],
          },
          {
            kind: "matn",
            text: "Shaxsga yo'naltirilgan ta'limning o'zagi aynan shu: bola bir xil topshiriqning kichraytirilgan ko'rinishini emas, o'z darajasiga mos, lekin shu bilan birga o'sishga undaydigan vazifani oladi.",
          },
          {
            kind: "eslatma",
            text: "Topshiriq hajmini kamaytirish farqlashtirish hisoblanmaydi: ikki band o'rniga bir band berish bolaga osonlik beradi, lekin yangi narsa o'rgatmaydi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Ladli his — ohangni lad munosabatlari asosida eshitish qobiliyati",
              "Nisbiy eshituv — tovush balandligini boshqa tovushga nisbatan aniqlash",
              "Absolyut eshituv — tovush balandligini tayanchsiz aniqlash",
              "Ichki eshituv — tovushni ovozsiz tasavvur qilish qobiliyati",
              "Ritm hissi — metr va ritmik naqshni aniq idrok etish va takrorlash",
              "Musiqiy xotira — musiqiy materialni eslab qolish va tiklash",
              "Individual yondashuv — bir material bo'yicha o'quvchi darajasiga mos talab qo'yish",
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
            text: "Uchta qisqa tashxis mashqini tayyorlang: intonatsion eshituv, ritmik sezgi va musiqiy xotira uchun. Har birida natijani qanday qayd etishingizni yozing.",
            instrument: "pianino",
          },
          {
            kind: "mashq",
            text: "Bitta qo'shiq va uchta turli darajadagi bola uchun uch xil vazifa yozing — hammasi bitta asar ustida ishlasin, lekin har biri o'z darajasida.",
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
                id: "m17-t1",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "«Bu bolada qobiliyat yo'q» degan hukmning asosiy xatosi nimada?",
                options: [
                  { id: "a", text: "U juda qattiq aytilgan" },
                  { id: "b", text: "Ko'pincha qobiliyat emas, musiqiy tajriba yetishmaydi" },
                  { id: "c", text: "Qobiliyat o'lchab bo'lmaydi" },
                  { id: "d", text: "Ota-onaga aytish mumkin emas" },
                ],
                correctId: "b",
              },
              {
                id: "m17-t2",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Qarsak naqshini qaytarish mashqi qaysi qobiliyatni tekshiradi?",
                options: [
                  { id: "a", text: "Ladli eshituv" },
                  { id: "b", text: "Musiqiy-ritmik sezgi" },
                  { id: "c", text: "Tembr eshituvi" },
                  { id: "d", text: "Musiqiy xotira" },
                ],
                correctId: "b",
              },
              {
                id: "m17-t3",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Toza kuylay olmaslikning ko'proq uchraydigan sababi qaysi?",
                options: [
                  { id: "a", text: "Eshitmaydi" },
                  { id: "b", text: "Eshitadi, lekin ovozi bilan topa olmaydi" },
                  { id: "c", text: "Qiziqmaydi" },
                  { id: "d", text: "Matnni bilmaydi" },
                ],
                correctId: "b",
                explanation:
                  "Bu ovozni boshqarish masalasi va u nisbatan tez tuzaladi.",
              },
              {
                id: "m17-t4",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt: "Sinfda individual yondashuv qanday amalga oshadi?",
                options: [
                  { id: "a", text: "Har bolaga alohida dars o'tkazib" },
                  { id: "b", text: "Bir material ichida turli vazifa berib" },
                  { id: "c", text: "Kuchlilarni alohida guruhga ajratib" },
                  { id: "d", text: "Faqat kuchlilar bilan ishlab" },
                ],
                correctId: "b",
              },
              {
                id: "m17-t5",
                area: "metodika",
                bloom: "bilish",
                kind: "multiple",
                prompt: "Musiqiy qobiliyatlarga nimalar kiradi?",
                options: [
                  { id: "a", text: "Ladli eshituv" },
                  { id: "b", text: "Musiqiy-ritmik sezgi" },
                  { id: "c", text: "Musiqiy xotira" },
                  { id: "d", text: "Qo'l yozuvi go'zalligi" },
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
              "Qobiliyat rivojlanadi; ko'pincha yetishmaydigan narsa — tajriba",
              "Asosiy qobiliyatlar: ladli eshituv, ritmik sezgi, musiqiy xotira, intonatsion eshituv",
              "Tashxis qisqa mashqlar bilan qilinadi va qayd etiladi",
              "Individual yondashuv — bir material, turli vazifa",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'z sinfingizda qobiliyat farqini qanday aniqlaysiz — qaysi uchta mashq bilan?",
      "Kuchli bolaga qanday vazifa berasiz, toki u zerikmasin va boshqalardan ajralib ketmasin?",
    ],
  },
  /* ──────────────────────────── M18 ──────────────────────────── */
  {
    id: "met-m18",
    slug: "m18-repertuar-mezonlari",
    title: "M18: Maktab repertuarini tanlashning pedagogik va badiiy mezonlari",
    summary:
      "Repertuar tanlashda nimaga qaraladi: badiiy qiymat, yosh, diapazon, matn va milliy-jahon muvozanati.",
    durationMin: 80,
    bloom: "baholash",
    outcomeId: "on-met-19",
    area: "metodika",
    dasturKodi: "M18",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Repertuar — o'quv dasturining eng ko'rinadigan qismi. Bola yillar o'tib dars mavzusini unutadi, lekin kuylagan qo'shig'ini eslab qoladi. Shuning uchun tanlov tasodifiy bo'lmasligi kerak.",
          },
          {
            kind: "matn",
            text: "Tanlovda ikki guruh mezon ishlaydi: badiiy (asarning o'zi qanday) va pedagogik (u shu sinfga mosmi).",
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
              "Badiiy qiymat — ohangning ifodaliligi, shaklning aniqligi, matn sifati",
              "Yoshga moslik — mazmun bola tajribasiga yaqin bo'lishi",
              "Diapazon — ovoz imkoniyatiga sig'ishi",
              "Matn — talaffuzi qulay, ma'nosi tushunarli, so'z boyligi mos",
              "Davomiylik — bir darsda ishlab bo'ladigan hajm",
              "Tarbiyaviy imkoniyat — dars maqsadiga bog'lanishi",
            ],
          },
          {
            kind: "matn",
            text: "Diapazon amalda eng ko'p e'tibordan chetda qoladigan mezon. Boshlang'ich sinfda ovoz imkoniyati tor bo'ladi va kengayib boradi; asar shu oraliqdan chiqsa, bola baqirishga yoki jim turishga majbur bo'ladi.",
          },
          {
            kind: "eslatma",
            text: "Asarni tonallikni o'zgartirib moslashtirish mumkin — bu oddiy va samarali yechim. Lekin tonallik o'zgarsa, jo'rlik ham o'zgaradi: buni oldindan tayyorlab qo'yish kerak, darsda emas.",
          },
          {
            kind: "matn",
            text: "Milliy va jahon merosining muvozanati alohida mezon. Faqat milliy material dunyoqarashni toraytiradi, faqat jahon materiali esa o'z merosidan uzadi. Dastur ikkalasini ham talab qiladi.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: repertuar tanlash nega qiyin",
        blocks: [
          {
            kind: "matn",
            text: "Repertuar tanlash qiyinligining sababi — mezonlarning bir-biriga qarshi chiqishi. Badiiy kuchli asar yoshga og'ir bo'lishi mumkin; sinfga qulay asar did shakllantirmasligi mumkin; dastur talab qilgan asar esa sinf imkoniyatiga to'g'ri kelmasligi mumkin. Tanlov — shu qarama-qarshilikni har safar hal qilish.",
          },
          {
            kind: "matn",
            text: "Shuning uchun tanlov asoslanishi kerak. «Menga yoqdi» yoki «har yili shu kuylanadi» — asos emas. Asos ikki qismdan iborat bo'ladi: asar qaysi o'quv maqsadiga xizmat qiladi va nega aynan shu sinfga mos.",
          },
          {
            kind: "royxat",
            items: [
              "Pedagogik mezonlar — maqsadga muvofiqlik, yoshga moslik, bajarib bo'ladiganlik, tarbiyaviy imkoniyat",
              "Badiiy mezonlar — ohangning sifati, matnning badiiyligi, obrazning aniqligi, uslub tozaligi",
            ],
          },
          {
            kind: "matn",
            text: "Ikki guruh mezon teng huquqli: faqat pedagogik mezon bilan tanlangan repertuar qulay, lekin qiziq emas; faqat badiiy mezon bilan tanlangani esa chiroyli, lekin bajarilmaydi.",
          },
        ],
      },
      {
        id: "yosh",
        title: "Yosh xususiyatlari va mezon jadvali",
        blocks: [
          {
            kind: "matn",
            text: "Yosh xususiyatlari tanlovda eng aniq chegarani belgilaydi. Ularni uch guruhga ajratib qarash qulay.",
          },
          {
            kind: "royxat",
            items: [
              "1-2 sinf — ovoz yengil, diapazon tor, nafas qisqa; matn sodda va tasvirli, qo'shiq qisqa bo'lishi kerak",
              "3-4 sinf — ovoz kuchayadi, nafas uzayadi; ikki ovozlilik elementlari (kanon, ostinato) kiritiladi",
              "5-6 sinf — ifodali ijro talab qilinadi, ikki ovozlilik mustahkamlanadi, obraz murakkablashadi",
              "7 sinf — ovoz mutatsiyasi davri; tessitura ehtiyotkor tanlanadi, yuklama cheklanadi",
            ],
          },
          {
            kind: "matn",
            text: "Tanlovni tekshirish uchun qisqa jadval ishlatish qulay. Har bir asar bo'yicha oltita savolga javob yoziladi: maqsad qaysi, diapazon mosmi, matn tushunarlimi, davomiylik mosmi, tarbiyaviy imkoniyat nima, mashq uchun vaqt yetadimi. Oltitasidan ikkitasiga «yo'q» chiqsa, asar o'zgartiriladi yoki moslashtiriladi.",
          },
          {
            kind: "eslatma",
            text: "Yosh chegaralari o'rtacha ko'rsatkich: bitta sinf boshqa sinfdan sezilarli farq qiladi. Shuning uchun oxirgi tekshiruv har doim bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "meros",
        title: "Milliy va jahon namunalarining muvozanati",
        blocks: [
          {
            kind: "matn",
            text: "Repertuarning o'zagi milliy meros bo'ladi: xalq qo'shiqlari, bolalar folklori, milliy bastakorlar asarlari va davlat ramzlari. Sabab pedagogik: bola o'z madaniyatining ohang tizimida o'sadi, u unga tanish va tabiiy.",
          },
          {
            kind: "matn",
            text: "Jahon namunalari esa qiyoslash imkonini beradi. Did faqat taqqoslash orqali o'sadi: bola boshqa uslubni eshitgandan keyin o'zining uslubini ham aniqroq idrok qiladi.",
          },
          {
            kind: "royxat",
            items: [
              "Xalq qo'shiqlari va bolalar folklori — alla, o'yin qo'shiqlari, marosim kuylari",
              "Milliy bastakorlar asarlari — maktab repertuarining asosiy qismi",
              "Davlat ramzlari — madhiya; alohida tartib bilan o'rgatiladi",
              "Jahon bolalar musiqasi va klassik namunalar — tinglash uchun ko'proq",
            ],
          },
          {
            kind: "matn",
            text: "Muvozanat raqam bilan belgilanmaydi, lekin amaliy qoida bor: har bir chorakda ikki tur ham uchrashi kerak. Faqat bir turdan iborat chorak bolaning idrok doirasini toraytiradi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Repertuar mezonlari — asar tanlashda qo'llanadigan pedagogik va badiiy talablar majmui",
              "Pedagogik mezon — asarning o'quv maqsadiga va sinf imkoniyatiga muvofiqligi",
              "Badiiy mezon — asarning did shakllantirish qobiliyati va uslub tozaligi",
              "Tessitura — asarning asosiy qismi joylashgan tovush balandligi sohasi",
              "Moslashtirish — asarni sinf imkoniyatiga sozlash",
              "Repertuar muvozanati — janr, xarakter, milliy va jahon namunalari nisbati",
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
            text: "Bitta sinf uchun uchta asar tanlang va har birini oltita mezon bo'yicha baholang. Qaysi mezon bo'yicha eng ko'p muammo chiqdi?",
          },
          {
            kind: "mashq",
            text: "Diapazoni sinfga sig'maydigan asarni oling. Uni moslashtirishning ikki yo'lini yozing va har birining narxini ko'rsating: nimadan voz kechasiz?",
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
                id: "m18-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt:
                  "Boshlang'ich sinfda eng ko'p e'tibordan chetda qoladigan mezon qaysi?",
                options: [
                  { id: "a", text: "Matn ma'nosi" },
                  { id: "b", text: "Ovoz diapazoni" },
                  { id: "c", text: "Asar nomi" },
                  { id: "d", text: "Bastakor shuhrati" },
                ],
                correctId: "b",
              },
              {
                id: "m18-t2",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Asar diapazoni sinfga to'g'ri kelmasa, birinchi yechim qaysi?",
                options: [
                  { id: "a", text: "Asardan voz kechish" },
                  { id: "b", text: "Tonallikni o'zgartirish, jo'rlikni oldindan tayyorlab" },
                  { id: "c", text: "Faqat kuchli bolalarga kuylatish" },
                  { id: "d", text: "Tezroq kuylash" },
                ],
                correctId: "b",
              },
              {
                id: "m18-t3",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Faqat milliy materialdan iborat repertuarning kamchiligi nimada?",
                options: [
                  { id: "a", text: "Bolalarga qiziq emas" },
                  { id: "b", text: "Dunyoqarashni toraytiradi; dastur muvozanatni talab qiladi" },
                  { id: "c", text: "Qiyin bo'ladi" },
                  { id: "d", text: "Kamchiligi yo'q" },
                ],
                correctId: "b",
              },
              {
                id: "m18-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "multiple",
                prompt: "Badiiy mezonlarga nimalar kiradi?",
                options: [
                  { id: "a", text: "Ohangning ifodaliligi" },
                  { id: "b", text: "Shaklning aniqligi" },
                  { id: "c", text: "Matn sifati" },
                  { id: "d", text: "Asarning mashhurligi" },
                ],
                correctIds: ["a", "b", "c"],
                explanation:
                  "Mashhurlik tanlovga yordam berishi mumkin, lekin badiiy qiymat mezoni emas.",
              },
              {
                id: "m18-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Tonallikni o'zgartirishning «narxi» nimada?",
                options: [
                  { id: "a", text: "Asar buziladi" },
                  { id: "b", text: "Jo'rlik qayta tayyorlanishi kerak" },
                  { id: "c", text: "Matn o'zgaradi" },
                  { id: "d", text: "Hech qanday narxi yo'q" },
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
              "Ikki guruh mezon: badiiy (asarning o'zi) va pedagogik (sinfga mosligi)",
              "Diapazon — eng ko'p unutiladigan, lekin eng aniq chegara",
              "Tonallikni o'zgartirish ishlaydi, lekin jo'rlik qayta tayyorlanadi",
              "Milliy va jahon merosi muvozanatda bo'ladi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'zingiz maktabda kuylagan qaysi qo'shiq esingizda qolgan va nega aynan u?",
      "Badiiy qiymat va «bolalarga qiziq» mezonlari to'qnashsa, qaysi birini tanlaysiz?",
    ],
  },

  /* ──────────────────────────── M19 ──────────────────────────── */
  {
    id: "met-m19",
    slug: "m19-repertuar-metodik-tahlili",
    title: "M19: Boshlang'ich va o'rta sinf repertuarining metodik tahlili",
    summary:
      "Repertuarni metodik tahlil qilish bosqichlari va qo'shiqni o'rgatish metodikasi.",
    durationMin: 80,
    bloom: "tahlil",
    outcomeId: "on-met-19",
    area: "metodika",
    dasturKodi: "M19",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Metodik tahlil — asarni «o'qituvchi ko'zi bilan» ko'rish. Tinglovchi asarni yaxlit qabul qiladi, o'qituvchi esa uni bosqichlarga ajratadi: qayerdan boshlanadi, qayerda qiyinlashadi, qayerda nafas olinadi.",
          },
          {
            kind: "matn",
            text: "Shunday tahlilsiz qo'shiq o'rgatish «ko'p marta takrorlash» ga aylanadi — vaqt ketadi, natija esa tasodifiy bo'ladi.",
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
              "Umumiy tavsif — janr, kayfiyat, mavzu, muallif",
              "Matn tahlili — ma'no, so'z boyligi, talaffuzi qiyin joylar",
              "Ohang tahlili — diapazon, sakrashlar, takrorlanuvchi naqshlar",
              "Ritm va o'lchov — qiyin ritmik figuralar, urg'u",
              "Shakl — qismlar, naqorat, takrorlanish",
              "Ijro rejasi — temp, dinamika, nafas joylari, cho'qqi",
            ],
          },
          {
            kind: "matn",
            text: "Qo'shiq o'rgatishning odatiy ketma-ketligi: namoyish (o'qituvchi to'liq ijro etadi) → matn bilan tanishish → frazalab o'rganish (aks-sado usuli) → qismlarni birlashtirish → ifoda ustida ishlash → mustahkamlash.",
          },
          {
            kind: "eslatma",
            text: "Birinchi namoyish sifati butun ishni belgilaydi. Bola asarni birinchi marta qanday eshitsa, shu tasavvur qoladi. Shuning uchun namoyishga tayyorgarlik — o'qituvchining uy ishi, darsdagi emas.",
          },
          {
            kind: "matn",
            text: "Qiyin joyni alohida ajratib ishlash — tejamkor usul. Butun qo'shiqni o'ntadan takrorlashdan ko'ra, qiyin ikki taktni beshta turli yo'l bilan mashq qilish samaraliroq: sekin, bo'g'in bilan, faqat ritm, qarama-qarshi yo'nalishda, so'ng kontekstda.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: metodik tahlil bosqichlari",
        blocks: [
          {
            kind: "matn",
            text: "Metodik tahlil — asarni o'rgatishdan oldin bajariladigan ish. Uning maqsadi aniq: qiyinchilikni darsdan oldin topish. Darsda topilgan qiyinchilik vaqtni oladi va o'quvchi ishonchini pasaytiradi.",
          },
          {
            kind: "matn",
            text: "Tahlil olti band bo'yicha boradi va bu tartib platformadagi barcha amaliy mashg'ulotlarda (A1-A30) takrorlanadi:",
          },
          {
            kind: "royxat",
            items: [
              "Umumiy tavsif — muallif, janr, sinf, mavzu, davomiylik",
              "Matn — ma'no, notanish so'zlar, talaffuzi qiyin joylar, urg'u",
              "Ohang — diapazon, sakrashlar, takrorlanuvchi naqshlar, eng baland nota",
              "Ritm va o'lchov — o'lchov, asosiy naqsh, qiyin ritmik joy",
              "Shakl — qism va naqorat, takrorlar, o'tish joylari",
              "Ijro rejasi — temp, dinamika, nafas joylari, cho'qqi",
            ],
          },
          {
            kind: "matn",
            text: "Oltinchi band natijadir: oldingi beshtasi uning asosi. Ijro rejasi yozilmagan tahlil chala qoladi — u asarni tushuntiradi, lekin nima qilishni aytmaydi.",
          },
        ],
      },
      {
        id: "boshlangich",
        title: "Boshlang'ich va o'rta sinf repertuarining farqi",
        blocks: [
          {
            kind: "matn",
            text: "Bir asar boshlang'ich sinfda ham, o'rta sinfda ham uchrashi mumkin, lekin talab boshqacha bo'ladi. Farqni ko'rish uchun uch o'lchovga qarash kerak: musiqiy murakkablik, matn murakkabligi va ijro talabi.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlang'ich sinf — tor diapazon, qisqa iboralar, unison, sodda ritm, tasvirli matn",
              "O'rta sinf — kengroq diapazon, uzun iboralar, ikki ovozlilik, ifodali ijro, mavhum obraz",
              "Boshlang'ichda maqsad — qiziqish va asosiy ko'nikma",
              "O'rta sinfda maqsad — ifoda, ansambl va mustaqil tahlil",
            ],
          },
          {
            kind: "matn",
            text: "Shu sababli qo'shiq o'rgatish metodikasi ham ikki yoshda farq qiladi. Boshlang'ich sinfda aks-sado usuli va harakat yetakchi; o'rta sinfda notadan tayanch, matn tahlili va dinamik reja ustida ish ko'proq o'rin oladi.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Qo'shiq o'rgatish ketma-ketligi",
        blocks: [
          {
            kind: "matn",
            text: "Qo'shiq o'rgatish tartibi deyarli o'zgarmaydi — faqat har bosqichning ulushi yoshga qarab siljiydi.",
          },
          {
            kind: "royxat",
            items: [
              "Tanishtirish — o'qituvchi asarni to'liq va ifodali ijro etadi; yozuv emas, tirik namuna kuchliroq",
              "Matn bilan ish — ma'no, notanish so'zlar, ifodali o'qish",
              "Bo'laklab o'rgatish — ibora ikki taktdan oshmasin, aks-sado usuli, sekin temp",
              "Qiyin joy ustida alohida ish — ajratib, boshqa usulda takrorlash",
              "Birlashtirish — iboralar qismga, qismlar butun asarga",
              "Ifoda ustida ish — temp, dinamika, nafas, cho'qqi; faqat ohang mustahkam bo'lgandan keyin",
            ],
          },
          {
            kind: "matn",
            text: "Har bir takrorda bitta aniq vazifa bo'lishi kerak: «yana bir marta kuylaymiz» emas, «bu safar oxirgi so'zni yo'qotmaymiz». Vazifasiz takror charchoq keltiradi va xatoni mustahkamlaydi.",
          },
          {
            kind: "eslatma",
            text: "Takrorning xilma-xilligi muhim: ayni material ritm bilan aytilsa, qo'l bilan chizilsa, qatorlar navbatlashsa — bola o'n marta takrorlaydi, lekin zerikmaydi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Metodik tahlil — asarni o'rgatish nuqtai nazaridan olti band bo'yicha tekshirish",
              "Ijro rejasi — temp, dinamika, nafas joylari va cho'qqini belgilagan reja",
              "Aks-sado usuli — o'qituvchi ijro etadi, o'quvchilar takrorlaydi",
              "Cho'qqi — asarning eng kuchli ifodali nuqtasi",
              "Vazifali takror — har safar bitta aniq talab qo'yilgan takrorlash",
              "Tanishtirish bosqichi — asar bilan birinchi, to'liq va ifodali tanishuv",
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
            text: "Bitta qo'shiqni olti band bo'yicha tahlil qiling. «Ijro rejasi» bandida nafas joylarini va cho'qqini aniq belgilang.",
          },
          {
            kind: "mashq",
            text: "Shu qo'shiqdagi eng qiyin ikki taktni tanlang va uni o'rgatishning uch xil yo'lini yozing. Har biri qancha vaqt oladi?",
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
                id: "m19-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "Qo'shiq o'rgatish qaysi bosqichdan boshlanadi?",
                options: [
                  { id: "a", text: "Matnni yozdirish" },
                  { id: "b", text: "O'qituvchining to'liq namoyishi" },
                  { id: "c", text: "Frazalab o'rganish" },
                  { id: "d", text: "Nota tahlili" },
                ],
                correctId: "b",
              },
              {
                id: "m19-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt: "Nega birinchi namoyish sifati muhim?",
                options: [
                  { id: "a", text: "Baho qo'yiladi" },
                  { id: "b", text: "Bola asarni birinchi eshitganicha eslab qoladi" },
                  { id: "c", text: "Vaqt tejaladi" },
                  { id: "d", text: "Dastur talabi" },
                ],
                correctId: "b",
              },
              {
                id: "m19-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Qiyin ikki taktni o'rgatishda eng samarali yo'l qaysi?",
                options: [
                  { id: "a", text: "Butun qo'shiqni ko'p marta takrorlash" },
                  { id: "b", text: "Shu ikki taktni turli usullarda mashq qilib, so'ng kontekstga qaytarish" },
                  { id: "c", text: "O'sha joyni tushirib qoldirish" },
                  { id: "d", text: "Tezroq kuylash" },
                ],
                correctId: "b",
              },
              {
                id: "m19-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "multiple",
                prompt: "Metodik tahlilning «ijro rejasi» bandiga nimalar kiradi?",
                options: [
                  { id: "a", text: "Temp va dinamika" },
                  { id: "b", text: "Nafas joylari" },
                  { id: "c", text: "Cho'qqi nuqtasi" },
                  { id: "d", text: "Bastakorning tug'ilgan yili" },
                ],
                correctIds: ["a", "b", "c"],
              },
              {
                id: "m19-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Metodik tahlilsiz qo'shiq o'rgatish nimaga aylanadi?",
                options: [
                  { id: "a", text: "Tez va samarali ishga" },
                  { id: "b", text: "Ko'p marta takrorlashga: vaqt ketadi, natija tasodifiy" },
                  { id: "c", text: "Ijodiy jarayonga" },
                  { id: "d", text: "Mustaqil ishga" },
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
              "Tahlil bandlari: umumiy tavsif, matn, ohang, ritm, shakl, ijro rejasi",
              "O'rgatish: namoyish → matn → frazalab → birlashtirish → ifoda → mustahkamlash",
              "Birinchi namoyish — o'qituvchining uy ishi",
              "Qiyin joy alohida va turli usullarda ishlanadi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "Namoyishga tayyorlanishga qancha vaqt ajratasiz? Bu yetarlimi?",
      "Qaysi tahlil bandi sizga eng ko'p yangilik beradi deb o'ylaysiz?",
    ],
  },
  /* ──────────────────────────── M20 ──────────────────────────── */
  {
    id: "met-m20",
    slug: "m20-1-sinf-repertuari",
    title: "M20: 1-sinf uchun repertuar tanlash va tahlil qilish",
    summary:
      "1-sinf o'quvchisining musiqiy tavsifnomasi, ovoz imkoniyati va unga mos repertuar.",
    durationMin: 80,
    bloom: "baholash",
    outcomeId: "on-met-20",
    area: "metodika",
    dasturKodi: "M20",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN3", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Repertuar tanlash har bir sinf uchun qaytadan hal qilinadi. 1-sinf (6–7 yosh) o'z tavsifnomasiga ega va undan oldingi yoki keyingi sinf uchun mos asar bu yerda ishlamasligi mumkin.",
          },
          {
            kind: "matn",
            text: "Bu darsda uch narsa ko'rib chiqiladi: shu yoshning musiqiy tavsifnomasi, ovoz imkoniyati va shunga mos repertuar belgilari.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Yosh xususiyatlari: Diqqat 10–15 daqiqa; o'yin va harakat asosiy vosita; o'qish ko'nikmasi endi shakllanmoqda, shuning uchun matn og'zaki beriladi.",
          },
          {
            kind: "royxat",
            items: [
              "Yosh: 6–7 yosh",
              "Ovoz diapazoni: taxminan do1 – la1 (tor oraliq)",
              "Repertuar belgilari: Qisqa, bir qismli qo'shiqlar; takrorlanuvchi naqsh; o'yin qo'shiqlari va allalar.",
            ],
          },
          {
            kind: "eslatma",
            text: "Diapazon raqamlari taxminiy va yo'naltiruvchi: aniq chegara sinfning o'ziga, darslik va DTS talablariga qarab belgilanadi. Amalda eng ishonchli tekshiruv — sinfni kuylatib ko'rish.",
          },
          {
            kind: "matn",
            text: "Amaliy maslahat: Qo'shiq 8–16 taktdan oshmasin; har darsda harakat bo'lsin; matn rasm yoki imo-ishora bilan mustahkamlansin.",
          },
          {
            kind: "matn",
            text: "Ijodiy topshiriqlar shu yoshda musiqiy taassurotni mustahkamlaydi: asar kayfiyatini chizish, matnga davom topish, ritmik jo'rlik o'ylab topish. Ular baholanadi, lekin «to'g'ri javob» mezoni bilan emas — ishtirok va asoslash bilan.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: 1-sinf tavsifnomasi qanday o'qiladi",
        blocks: [
          {
            kind: "matn",
            text: "Yosh tavsifnomasi — ro'yxat emas, qaror qabul qilish vositasi. Uni to'rt o'q bo'yicha o'qish kerak va har bir o'q repertuar hamda dars tuzilmasida aniq natijaga olib keladi.",
          },
          {
            kind: "royxat",
            items: [
              "Ovoz imkoniyati — diapazon, nafas va yuklama chegarasi; repertuar tonalligini belgilaydi",
              "Diqqat barqarorligi — bitta faoliyat necha daqiqa davom etishi mumkinligini belgilaydi",
              "Idrok darajasi — matn mavhum bo'lishi mumkinmi yoki tasvirli bo'lishi kerakmi",
              "Motivatsiya manbayi — bolani nima qiziqtiradi: o'yin, musobaqa, jamoa yoki o'z fikri",
            ],
          },
          {
            kind: "matn",
            text: "1-sinf uchun (6-7 yosh) birinchi o'q shunday ko'rinadi: Ovoz apparati juda nozik: diapazon tor, nafas qisqa, baland kuylash tez charchatadi.",
          },
          {
            kind: "matn",
            text: "Ikkinchi o'q — diqqat: bu yoshda bitta faoliyat taxminan 10-15 daqiqa davom etishi mumkin. Shu raqam darsni rejalashtirishda bevosita ishlatiladi: faoliyat shu muddatdan uzun bo'lsa, oxirgi daqiqalar behuda ketadi.",
          },
          {
            kind: "eslatma",
            text: "Eng ko'p uchraydigan xato: Uzun qo'shiq va uzoq tushuntirish. Diqqat tugagandan keyin bolalar «eshitmaydi», o'qituvchi esa buni tartibsizlik deb tushunadi.",
          },
        ],
      },
      {
        id: "faoliyat",
        title: "Faoliyat turlarining taqsimoti",
        blocks: [
          {
            kind: "matn",
            text: "45 daqiqalik darsda to'rt faoliyat turi 1-sinf uchun taxminan quyidagicha taqsimlanadi. Raqamlar qat'iy emas, lekin nisbat muhim — u yoshning imkoniyatidan chiqadi.",
          },
          {
            kind: "royxat",
            items: [
              "Kuylash — 15-18 daqiqa, lekin uzluksiz emas: ikki-uch marta qisqa bo'lak",
              "Musiqiy-ritmik harakat — 8-10 daqiqa; bu yoshda eng samarali faoliyat",
              "Tinglash — 3-5 daqiqa, bitta qisqa asar, bitta savol",
              "Musiqa savodi — alohida emas, qo'shiq ichida: zarb, baland-past",
            ],
          },
          {
            kind: "matn",
            text: "Taqsimotni tekshirishning oddiy yo'li bor: dars rejasida o'quvchi necha daqiqa musiqa qilgani va necha daqiqa eshitib o'tirgani hisoblanadi. Ikkinchisi birinchisidan ko'p bo'lsa, reja qayta ko'riladi.",
          },
          {
            kind: "matn",
            text: "Baholash ham yoshga bog'lanadi. Baholash og'zaki va ijobiy: nima yaxshi chiqdi, nimaga e'tibor beramiz. Ball bu yoshda rag'batlantiruvchi vosita emas.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "O'yin qo'shig'i — harakat va o'yin qoidasi bilan birga ijro etiladigan qo'shiq",
              "Aks-sado usuli — o'qituvchi kuylaydi, bolalar takrorlaydi",
              "Og'zaki o'rgatish — matn yozma emas, eshitish orqali beriladi",
              "Yosh tavsifnomasi — muayyan yoshning ovoz, diqqat, idrok va motivatsiya xususiyatlari majmui",
              "Faoliyat taqsimoti — dars vaqtining musiqiy faoliyat turlari bo'yicha bo'linishi",
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
            text: "1-sinf uchun darslikdan ikkita asar tanlang. Har birini diapazon, matn va davomiylik bo'yicha tekshiring. Qaysi biri moslashtirishni talab qiladi va qanday?",
          },
          {
            kind: "mashq",
            text: "Shu sinf uchun bitta ijodiy topshiriq tuzing va uni qanday baholashingizni yozing — ball emas, mezon bilan.",
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
                id: "m20-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "1-sinf o'quvchisining yoshi qaysi?",
                options: [
                  { id: "a", text: "6–7 yosh" },
                  { id: "b", text: "14–15 yosh" },
                  { id: "c", text: "4–5 yosh" },
                  { id: "d", text: "16–17 yosh" },
                ],
                correctId: "a",
              },
              {
                id: "m20-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Nega diapazon raqamlari taxminiy deb beriladi?",
                options: [
                  { id: "a", text: "Hali o'rganilmagan" },
                  { id: "b", text: "Aniq chegara sinfga, darslik va DTS talabiga qarab belgilanadi" },
                  { id: "c", text: "Ular ahamiyatsiz" },
                  { id: "d", text: "Darslikda yo'q" },
                ],
                correctId: "b",
              },
              {
                id: "m20-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "1-sinfda repertuar tanlashda qaysi maslahat o'rinli?",
                options: [
                  { id: "a", text: "Qo'shiq 8–16 taktdan oshmasin; har darsda harakat bo'lsin; matn rasm yoki imo-ishora bilan mustahkamlansin." },
                  { id: "b", text: "Imkon qadar murakkab asar tanlash" },
                  { id: "c", text: "Faqat kattalar repertuaridan olish" },
                  { id: "d", text: "Diapazonga e'tibor bermaslik" },
                ],
                correctId: "a",
              },
              {
                id: "m20-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Repertuar tanlashda eng ishonchli amaliy tekshiruv qaysi?",
                options: [
                  { id: "a", text: "Asar mashhurligi" },
                  { id: "b", text: "Sinfni kuylatib ko'rish" },
                  { id: "c", text: "Nota murakkabligi" },
                  { id: "d", text: "Bastakor nomi" },
                ],
                correctId: "b",
              },
              {
                id: "m20-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Ijodiy topshiriq qanday baholanadi?",
                options: [
                  { id: "a", text: "Faqat «to'g'ri javob» mezoni bilan" },
                  { id: "b", text: "Ishtirok va o'z tanlovini asoslash bo'yicha" },
                  { id: "c", text: "Baholanmaydi" },
                  { id: "d", text: "Faqat ijro tozaligi bilan" },
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
              "1-sinf: 6–7 yosh, diapazon — taxminan do1 – la1 (tor oraliq)",
              "Repertuar belgilari: Qisqa, bir qismli qo'shiqlar; takrorlanuvchi naqsh; o'yin qo'shiqlari va allalar.",
              "Diapazon raqamlari yo'naltiruvchi; aniqligi sinfda tekshiriladi",
              "Ijodiy topshiriq ishtirok va asoslash bo'yicha baholanadi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "1-sinf uchun repertuar tanlashda sizga eng ko'p nima qiyinchilik tug'diradi?",
      "Shu yoshdagi bolaning qiziqishini qanday bilib olasiz?",
    ],
  },

  /* ──────────────────────────── M21 ──────────────────────────── */
  {
    id: "met-m21",
    slug: "m21-2-sinf-repertuari",
    title: "M21: 2-sinf uchun repertuar tanlash va tahlil qilish",
    summary:
      "2-sinf o'quvchisining musiqiy tavsifnomasi, ovoz imkoniyati va unga mos repertuar.",
    durationMin: 80,
    bloom: "baholash",
    outcomeId: "on-met-20",
    area: "metodika",
    dasturKodi: "M21",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN3", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Repertuar tanlash har bir sinf uchun qaytadan hal qilinadi. 2-sinf (7–8 yosh) o'z tavsifnomasiga ega va undan oldingi yoki keyingi sinf uchun mos asar bu yerda ishlamasligi mumkin.",
          },
          {
            kind: "matn",
            text: "Bu darsda uch narsa ko'rib chiqiladi: shu yoshning musiqiy tavsifnomasi, ovoz imkoniyati va shunga mos repertuar belgilari.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Yosh xususiyatlari: Diqqat uzayadi; o'qish ko'nikmasi mustahkamlanadi; jamoaviy ish qiziqarli bo'ladi.",
          },
          {
            kind: "royxat",
            items: [
              "Yosh: 7–8 yosh",
              "Ovoz diapazoni: taxminan si (kichik oktava) – si1",
              "Repertuar belgilari: Ikki qismli shakl, naqoratli qo'shiqlar; marsh va raqs xarakteridagi kuylar.",
            ],
          },
          {
            kind: "eslatma",
            text: "Diapazon raqamlari taxminiy va yo'naltiruvchi: aniq chegara sinfning o'ziga, darslik va DTS talablariga qarab belgilanadi. Amalda eng ishonchli tekshiruv — sinfni kuylatib ko'rish.",
          },
          {
            kind: "matn",
            text: "Amaliy maslahat: Naqorat avval o'rganiladi — u takrorlanadi va sinfni birlashtiradi; kuplet keyin.",
          },
          {
            kind: "matn",
            text: "Ijodiy topshiriqlar shu yoshda musiqiy taassurotni mustahkamlaydi: asar kayfiyatini chizish, matnga davom topish, ritmik jo'rlik o'ylab topish. Ular baholanadi, lekin «to'g'ri javob» mezoni bilan emas — ishtirok va asoslash bilan.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: 2-sinf tavsifnomasi qanday o'qiladi",
        blocks: [
          {
            kind: "matn",
            text: "Yosh tavsifnomasi — ro'yxat emas, qaror qabul qilish vositasi. Uni to'rt o'q bo'yicha o'qish kerak va har bir o'q repertuar hamda dars tuzilmasida aniq natijaga olib keladi.",
          },
          {
            kind: "royxat",
            items: [
              "Ovoz imkoniyati — diapazon, nafas va yuklama chegarasi; repertuar tonalligini belgilaydi",
              "Diqqat barqarorligi — bitta faoliyat necha daqiqa davom etishi mumkinligini belgilaydi",
              "Idrok darajasi — matn mavhum bo'lishi mumkinmi yoki tasvirli bo'lishi kerakmi",
              "Motivatsiya manbayi — bolani nima qiziqtiradi: o'yin, musobaqa, jamoa yoki o'z fikri",
            ],
          },
          {
            kind: "matn",
            text: "2-sinf uchun (7-8 yosh) birinchi o'q shunday ko'rinadi: Ovoz ishonchliroq, nafas uzayadi; lekin diapazon hali tor va baland notalar zo'riqish beradi.",
          },
          {
            kind: "matn",
            text: "Ikkinchi o'q — diqqat: bu yoshda bitta faoliyat taxminan 15-20 daqiqa davom etishi mumkin. Shu raqam darsni rejalashtirishda bevosita ishlatiladi: faoliyat shu muddatdan uzun bo'lsa, oxirgi daqiqalar behuda ketadi.",
          },
          {
            kind: "eslatma",
            text: "Eng ko'p uchraydigan xato: Kupletni naqoratdan oldin o'rgatish. Naqorat takrorlanadi va yod bo'lishi oson, shuning uchun u birinchi o'rganiladi.",
          },
        ],
      },
      {
        id: "faoliyat",
        title: "Faoliyat turlarining taqsimoti",
        blocks: [
          {
            kind: "matn",
            text: "45 daqiqalik darsda to'rt faoliyat turi 2-sinf uchun taxminan quyidagicha taqsimlanadi. Raqamlar qat'iy emas, lekin nisbat muhim — u yoshning imkoniyatidan chiqadi.",
          },
          {
            kind: "royxat",
            items: [
              "Kuylash — 18-20 daqiqa; naqorat va kuplet ajratib ishlanadi",
              "Harakat — 7-8 daqiqa; marsh va raqs xarakteridagi material qulay",
              "Tinglash — 5-7 daqiqa, yo'naltiruvchi savol bilan",
              "Musiqa savodi — 5 daqiqa: zarb, urg'u, baland-past, qisqa-cho'ziq",
            ],
          },
          {
            kind: "matn",
            text: "Taqsimotni tekshirishning oddiy yo'li bor: dars rejasida o'quvchi necha daqiqa musiqa qilgani va necha daqiqa eshitib o'tirgani hisoblanadi. Ikkinchisi birinchisidan ko'p bo'lsa, reja qayta ko'riladi.",
          },
          {
            kind: "matn",
            text: "Baholash ham yoshga bog'lanadi. Mezon oldin aytiladi: nimani tekshirishimizni bolalar biladi. Shu yoshda o'z-o'zini baholashning birinchi shakllari kiritiladi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Naqorat — qo'shiqda takrorlanadigan qism",
              "Kuplet — matni o'zgarib turadigan band",
              "Yo'naltiruvchi savol — tinglashdan oldin beriladigan, diqqatni qaratadigan savol",
              "Yosh tavsifnomasi — muayyan yoshning ovoz, diqqat, idrok va motivatsiya xususiyatlari majmui",
              "Faoliyat taqsimoti — dars vaqtining musiqiy faoliyat turlari bo'yicha bo'linishi",
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
            text: "2-sinf uchun darslikdan ikkita asar tanlang. Har birini diapazon, matn va davomiylik bo'yicha tekshiring. Qaysi biri moslashtirishni talab qiladi va qanday?",
          },
          {
            kind: "mashq",
            text: "Shu sinf uchun bitta ijodiy topshiriq tuzing va uni qanday baholashingizni yozing — ball emas, mezon bilan.",
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
                id: "m21-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "2-sinf o'quvchisining yoshi qaysi?",
                options: [
                  { id: "a", text: "7–8 yosh" },
                  { id: "b", text: "14–15 yosh" },
                  { id: "c", text: "4–5 yosh" },
                  { id: "d", text: "16–17 yosh" },
                ],
                correctId: "a",
              },
              {
                id: "m21-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Nega diapazon raqamlari taxminiy deb beriladi?",
                options: [
                  { id: "a", text: "Hali o'rganilmagan" },
                  { id: "b", text: "Aniq chegara sinfga, darslik va DTS talabiga qarab belgilanadi" },
                  { id: "c", text: "Ular ahamiyatsiz" },
                  { id: "d", text: "Darslikda yo'q" },
                ],
                correctId: "b",
              },
              {
                id: "m21-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "2-sinfda repertuar tanlashda qaysi maslahat o'rinli?",
                options: [
                  { id: "a", text: "Naqorat avval o'rganiladi — u takrorlanadi va sinfni birlashtiradi; kuplet keyin." },
                  { id: "b", text: "Imkon qadar murakkab asar tanlash" },
                  { id: "c", text: "Faqat kattalar repertuaridan olish" },
                  { id: "d", text: "Diapazonga e'tibor bermaslik" },
                ],
                correctId: "a",
              },
              {
                id: "m21-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Repertuar tanlashda eng ishonchli amaliy tekshiruv qaysi?",
                options: [
                  { id: "a", text: "Asar mashhurligi" },
                  { id: "b", text: "Sinfni kuylatib ko'rish" },
                  { id: "c", text: "Nota murakkabligi" },
                  { id: "d", text: "Bastakor nomi" },
                ],
                correctId: "b",
              },
              {
                id: "m21-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Ijodiy topshiriq qanday baholanadi?",
                options: [
                  { id: "a", text: "Faqat «to'g'ri javob» mezoni bilan" },
                  { id: "b", text: "Ishtirok va o'z tanlovini asoslash bo'yicha" },
                  { id: "c", text: "Baholanmaydi" },
                  { id: "d", text: "Faqat ijro tozaligi bilan" },
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
              "2-sinf: 7–8 yosh, diapazon — taxminan si (kichik oktava) – si1",
              "Repertuar belgilari: Ikki qismli shakl, naqoratli qo'shiqlar; marsh va raqs xarakteridagi kuylar.",
              "Diapazon raqamlari yo'naltiruvchi; aniqligi sinfda tekshiriladi",
              "Ijodiy topshiriq ishtirok va asoslash bo'yicha baholanadi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "2-sinf uchun repertuar tanlashda sizga eng ko'p nima qiyinchilik tug'diradi?",
      "Shu yoshdagi bolaning qiziqishini qanday bilib olasiz?",
    ],
  },

  /* ──────────────────────────── M22 ──────────────────────────── */
  {
    id: "met-m22",
    slug: "m22-3-sinf-repertuari",
    title: "M22: 3-sinf uchun repertuar tanlash va tahlil qilish",
    summary:
      "3-sinf o'quvchisining musiqiy tavsifnomasi, ovoz imkoniyati va unga mos repertuar.",
    durationMin: 80,
    bloom: "baholash",
    outcomeId: "on-met-20",
    area: "metodika",
    dasturKodi: "M22",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN3", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Repertuar tanlash har bir sinf uchun qaytadan hal qilinadi. 3-sinf (8–9 yosh) o'z tavsifnomasiga ega va undan oldingi yoki keyingi sinf uchun mos asar bu yerda ishlamasligi mumkin.",
          },
          {
            kind: "matn",
            text: "Bu darsda uch narsa ko'rib chiqiladi: shu yoshning musiqiy tavsifnomasi, ovoz imkoniyati va shunga mos repertuar belgilari.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Yosh xususiyatlari: Ritmik sezgi barqarorlashadi; bola o'z ijrosini baholay boshlaydi; musobaqa qiziqtiradi.",
          },
          {
            kind: "royxat",
            items: [
              "Yosh: 8–9 yosh",
              "Ovoz diapazoni: taxminan si – do2",
              "Repertuar belgilari: Xalq qo'shiqlari va bayram kuylari; aniq ritmli, o'rtacha tempdagi asarlar.",
            ],
          },
          {
            kind: "eslatma",
            text: "Diapazon raqamlari taxminiy va yo'naltiruvchi: aniq chegara sinfning o'ziga, darslik va DTS talablariga qarab belgilanadi. Amalda eng ishonchli tekshiruv — sinfni kuylatib ko'rish.",
          },
          {
            kind: "matn",
            text: "Amaliy maslahat: Ritmik jo'rlik qo'shish mumkin; qo'shiqni guruhlarga bo'lib ijro etish yaxshi ishlaydi.",
          },
          {
            kind: "matn",
            text: "Ijodiy topshiriqlar shu yoshda musiqiy taassurotni mustahkamlaydi: asar kayfiyatini chizish, matnga davom topish, ritmik jo'rlik o'ylab topish. Ular baholanadi, lekin «to'g'ri javob» mezoni bilan emas — ishtirok va asoslash bilan.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: 3-sinf tavsifnomasi qanday o'qiladi",
        blocks: [
          {
            kind: "matn",
            text: "Yosh tavsifnomasi — ro'yxat emas, qaror qabul qilish vositasi. Uni to'rt o'q bo'yicha o'qish kerak va har bir o'q repertuar hamda dars tuzilmasida aniq natijaga olib keladi.",
          },
          {
            kind: "royxat",
            items: [
              "Ovoz imkoniyati — diapazon, nafas va yuklama chegarasi; repertuar tonalligini belgilaydi",
              "Diqqat barqarorligi — bitta faoliyat necha daqiqa davom etishi mumkinligini belgilaydi",
              "Idrok darajasi — matn mavhum bo'lishi mumkinmi yoki tasvirli bo'lishi kerakmi",
              "Motivatsiya manbayi — bolani nima qiziqtiradi: o'yin, musobaqa, jamoa yoki o'z fikri",
            ],
          },
          {
            kind: "matn",
            text: "3-sinf uchun (8-9 yosh) birinchi o'q shunday ko'rinadi: Ovoz kuchayadi, tembr aniqlashadi; ansambl talabi jiddiy qo'yilishi mumkin.",
          },
          {
            kind: "matn",
            text: "Ikkinchi o'q — diqqat: bu yoshda bitta faoliyat taxminan 20 daqiqa davom etishi mumkin. Shu raqam darsni rejalashtirishda bevosita ishlatiladi: faoliyat shu muddatdan uzun bo'lsa, oxirgi daqiqalar behuda ketadi.",
          },
          {
            kind: "eslatma",
            text: "Eng ko'p uchraydigan xato: Guruhli ishni musobaqaga aylantirib yuborish. Musobaqa qiziqtiradi, lekin g'olib aniqlanmasa yoki mezon noaniq bo'lsa, u janjalga olib keladi.",
          },
        ],
      },
      {
        id: "faoliyat",
        title: "Faoliyat turlarining taqsimoti",
        blocks: [
          {
            kind: "matn",
            text: "45 daqiqalik darsda to'rt faoliyat turi 3-sinf uchun taxminan quyidagicha taqsimlanadi. Raqamlar qat'iy emas, lekin nisbat muhim — u yoshning imkoniyatidan chiqadi.",
          },
          {
            kind: "royxat",
            items: [
              "Kuylash — 18-20 daqiqa; ansambl aniqligi ustida ish boshlanadi",
              "Cholg'u va ritmik jo'rlik — 7-10 daqiqa; ritmik sezgi barqarorlashgani uchun samarali",
              "Tinglash — 7 daqiqa, taqqoslash topshirig'i bilan",
              "Musiqa savodi — 5-7 daqiqa: o'lchov, ritmik naqsh, nota yozuvining boshlanishi",
            ],
          },
          {
            kind: "matn",
            text: "Taqsimotni tekshirishning oddiy yo'li bor: dars rejasida o'quvchi necha daqiqa musiqa qilgani va necha daqiqa eshitib o'tirgani hisoblanadi. Ikkinchisi birinchisidan ko'p bo'lsa, reja qayta ko'riladi.",
          },
          {
            kind: "matn",
            text: "Baholash ham yoshga bog'lanadi. Rubrikaning sodda ko'rinishi kiritiladi: uch mezon, har biriga uch daraja. Bola o'z natijasini mezon bilan solishtira oladi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Ritmik jo'rlik — qo'shiqqa zarbli cholg'u yoki chapak bilan qo'shiladigan qatlam",
              "Ansambl aniqligi — birga boshlash, birga tugatish, bir xil temp",
              "Taqqoslash topshirig'i — ikki asar yoki ijroni solishtirishga asoslangan vazifa",
              "Yosh tavsifnomasi — muayyan yoshning ovoz, diqqat, idrok va motivatsiya xususiyatlari majmui",
              "Faoliyat taqsimoti — dars vaqtining musiqiy faoliyat turlari bo'yicha bo'linishi",
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
            text: "3-sinf uchun darslikdan ikkita asar tanlang. Har birini diapazon, matn va davomiylik bo'yicha tekshiring. Qaysi biri moslashtirishni talab qiladi va qanday?",
          },
          {
            kind: "mashq",
            text: "Shu sinf uchun bitta ijodiy topshiriq tuzing va uni qanday baholashingizni yozing — ball emas, mezon bilan.",
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
                id: "m22-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "3-sinf o'quvchisining yoshi qaysi?",
                options: [
                  { id: "a", text: "8–9 yosh" },
                  { id: "b", text: "14–15 yosh" },
                  { id: "c", text: "4–5 yosh" },
                  { id: "d", text: "16–17 yosh" },
                ],
                correctId: "a",
              },
              {
                id: "m22-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Nega diapazon raqamlari taxminiy deb beriladi?",
                options: [
                  { id: "a", text: "Hali o'rganilmagan" },
                  { id: "b", text: "Aniq chegara sinfga, darslik va DTS talabiga qarab belgilanadi" },
                  { id: "c", text: "Ular ahamiyatsiz" },
                  { id: "d", text: "Darslikda yo'q" },
                ],
                correctId: "b",
              },
              {
                id: "m22-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "3-sinfda repertuar tanlashda qaysi maslahat o'rinli?",
                options: [
                  { id: "a", text: "Ritmik jo'rlik qo'shish mumkin; qo'shiqni guruhlarga bo'lib ijro etish yaxshi ishlaydi." },
                  { id: "b", text: "Imkon qadar murakkab asar tanlash" },
                  { id: "c", text: "Faqat kattalar repertuaridan olish" },
                  { id: "d", text: "Diapazonga e'tibor bermaslik" },
                ],
                correctId: "a",
              },
              {
                id: "m22-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Repertuar tanlashda eng ishonchli amaliy tekshiruv qaysi?",
                options: [
                  { id: "a", text: "Asar mashhurligi" },
                  { id: "b", text: "Sinfni kuylatib ko'rish" },
                  { id: "c", text: "Nota murakkabligi" },
                  { id: "d", text: "Bastakor nomi" },
                ],
                correctId: "b",
              },
              {
                id: "m22-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Ijodiy topshiriq qanday baholanadi?",
                options: [
                  { id: "a", text: "Faqat «to'g'ri javob» mezoni bilan" },
                  { id: "b", text: "Ishtirok va o'z tanlovini asoslash bo'yicha" },
                  { id: "c", text: "Baholanmaydi" },
                  { id: "d", text: "Faqat ijro tozaligi bilan" },
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
              "3-sinf: 8–9 yosh, diapazon — taxminan si – do2",
              "Repertuar belgilari: Xalq qo'shiqlari va bayram kuylari; aniq ritmli, o'rtacha tempdagi asarlar.",
              "Diapazon raqamlari yo'naltiruvchi; aniqligi sinfda tekshiriladi",
              "Ijodiy topshiriq ishtirok va asoslash bo'yicha baholanadi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "3-sinf uchun repertuar tanlashda sizga eng ko'p nima qiyinchilik tug'diradi?",
      "Shu yoshdagi bolaning qiziqishini qanday bilib olasiz?",
    ],
  },

  /* ──────────────────────────── M23 ──────────────────────────── */
  {
    id: "met-m23",
    slug: "m23-4-sinf-repertuari",
    title: "M23: 4-sinf uchun repertuar tanlash va tahlil qilish",
    summary:
      "4-sinf o'quvchisining musiqiy tavsifnomasi, ovoz imkoniyati va unga mos repertuar.",
    durationMin: 80,
    bloom: "baholash",
    outcomeId: "on-met-20",
    area: "metodika",
    dasturKodi: "M23",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN3", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Repertuar tanlash har bir sinf uchun qaytadan hal qilinadi. 4-sinf (9–10 yosh) o'z tavsifnomasiga ega va undan oldingi yoki keyingi sinf uchun mos asar bu yerda ishlamasligi mumkin.",
          },
          {
            kind: "matn",
            text: "Bu darsda uch narsa ko'rib chiqiladi: shu yoshning musiqiy tavsifnomasi, ovoz imkoniyati va shunga mos repertuar belgilari.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Yosh xususiyatlari: Ovoz kuchayadi, nafas uzayadi; mavhum tushunchalarni qabul qila boshlaydi.",
          },
          {
            kind: "royxat",
            items: [
              "Yosh: 9–10 yosh",
              "Ovoz diapazoni: taxminan si – re2",
              "Repertuar belgilari: Kengroq diapazonli, ifodali asarlar; ikki ovozlilik elementlari (kanon, ostinato).",
            ],
          },
          {
            kind: "eslatma",
            text: "Diapazon raqamlari taxminiy va yo'naltiruvchi: aniq chegara sinfning o'ziga, darslik va DTS talablariga qarab belgilanadi. Amalda eng ishonchli tekshiruv — sinfni kuylatib ko'rish.",
          },
          {
            kind: "matn",
            text: "Amaliy maslahat: Ikki ovozlilikni kanondan boshlang — u bitta ohang bo'lgani uchun xavfsiz.",
          },
          {
            kind: "matn",
            text: "Ijodiy topshiriqlar shu yoshda musiqiy taassurotni mustahkamlaydi: asar kayfiyatini chizish, matnga davom topish, ritmik jo'rlik o'ylab topish. Ular baholanadi, lekin «to'g'ri javob» mezoni bilan emas — ishtirok va asoslash bilan.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: 4-sinf tavsifnomasi qanday o'qiladi",
        blocks: [
          {
            kind: "matn",
            text: "Yosh tavsifnomasi — ro'yxat emas, qaror qabul qilish vositasi. Uni to'rt o'q bo'yicha o'qish kerak va har bir o'q repertuar hamda dars tuzilmasida aniq natijaga olib keladi.",
          },
          {
            kind: "royxat",
            items: [
              "Ovoz imkoniyati — diapazon, nafas va yuklama chegarasi; repertuar tonalligini belgilaydi",
              "Diqqat barqarorligi — bitta faoliyat necha daqiqa davom etishi mumkinligini belgilaydi",
              "Idrok darajasi — matn mavhum bo'lishi mumkinmi yoki tasvirli bo'lishi kerakmi",
              "Motivatsiya manbayi — bolani nima qiziqtiradi: o'yin, musobaqa, jamoa yoki o'z fikri",
            ],
          },
          {
            kind: "matn",
            text: "4-sinf uchun (9-10 yosh) birinchi o'q shunday ko'rinadi: Nafas uzayadi va diapazon kengayadi — ikki ovozlilik elementlarini kiritish mumkin bo'ladi.",
          },
          {
            kind: "matn",
            text: "Ikkinchi o'q — diqqat: bu yoshda bitta faoliyat taxminan 20-25 daqiqa davom etishi mumkin. Shu raqam darsni rejalashtirishda bevosita ishlatiladi: faoliyat shu muddatdan uzun bo'lsa, oxirgi daqiqalar behuda ketadi.",
          },
          {
            kind: "eslatma",
            text: "Eng ko'p uchraydigan xato: Ikki ovozlilikni haqiqiy ikki ovozdan boshlash. To'g'ri yo'l — kanon, keyin ostinato, eng oxirida mustaqil ikkinchi ovoz.",
          },
        ],
      },
      {
        id: "faoliyat",
        title: "Faoliyat turlarining taqsimoti",
        blocks: [
          {
            kind: "matn",
            text: "45 daqiqalik darsda to'rt faoliyat turi 4-sinf uchun taxminan quyidagicha taqsimlanadi. Raqamlar qat'iy emas, lekin nisbat muhim — u yoshning imkoniyatidan chiqadi.",
          },
          {
            kind: "royxat",
            items: [
              "Kuylash — 18-20 daqiqa; kanon yoki ostinato ustida ish",
              "Tinglash va tahlil — 8-10 daqiqa; mavhum tushunchalar qabul qilinadi",
              "Harakat yoki cholg'u — 5-7 daqiqa",
              "Musiqa savodi — 5-7 daqiqa: lad xarakteri, tonika hissi",
            ],
          },
          {
            kind: "matn",
            text: "Taqsimotni tekshirishning oddiy yo'li bor: dars rejasida o'quvchi necha daqiqa musiqa qilgani va necha daqiqa eshitib o'tirgani hisoblanadi. Ikkinchisi birinchisidan ko'p bo'lsa, reja qayta ko'riladi.",
          },
          {
            kind: "matn",
            text: "Baholash ham yoshga bog'lanadi. Ijro bahosiga ifodalilik mezoni qo'shiladi: faqat tozalik emas, matn ma'nosiga mos ijro ham baholanadi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Kanon — bir ohangni ovozlar navbat bilan boshlaydigan shakl",
              "Ostinato — doimiy takrorlanuvchi qisqa naqsh",
              "Ifodalilik — ijroning matn ma'nosi va asar xarakteriga mosligi",
              "Yosh tavsifnomasi — muayyan yoshning ovoz, diqqat, idrok va motivatsiya xususiyatlari majmui",
              "Faoliyat taqsimoti — dars vaqtining musiqiy faoliyat turlari bo'yicha bo'linishi",
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
            text: "4-sinf uchun darslikdan ikkita asar tanlang. Har birini diapazon, matn va davomiylik bo'yicha tekshiring. Qaysi biri moslashtirishni talab qiladi va qanday?",
          },
          {
            kind: "mashq",
            text: "Shu sinf uchun bitta ijodiy topshiriq tuzing va uni qanday baholashingizni yozing — ball emas, mezon bilan.",
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
                id: "m23-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "4-sinf o'quvchisining yoshi qaysi?",
                options: [
                  { id: "a", text: "9–10 yosh" },
                  { id: "b", text: "14–15 yosh" },
                  { id: "c", text: "4–5 yosh" },
                  { id: "d", text: "16–17 yosh" },
                ],
                correctId: "a",
              },
              {
                id: "m23-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Nega diapazon raqamlari taxminiy deb beriladi?",
                options: [
                  { id: "a", text: "Hali o'rganilmagan" },
                  { id: "b", text: "Aniq chegara sinfga, darslik va DTS talabiga qarab belgilanadi" },
                  { id: "c", text: "Ular ahamiyatsiz" },
                  { id: "d", text: "Darslikda yo'q" },
                ],
                correctId: "b",
              },
              {
                id: "m23-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "4-sinfda repertuar tanlashda qaysi maslahat o'rinli?",
                options: [
                  { id: "a", text: "Ikki ovozlilikni kanondan boshlang — u bitta ohang bo'lgani uchun xavfsiz." },
                  { id: "b", text: "Imkon qadar murakkab asar tanlash" },
                  { id: "c", text: "Faqat kattalar repertuaridan olish" },
                  { id: "d", text: "Diapazonga e'tibor bermaslik" },
                ],
                correctId: "a",
              },
              {
                id: "m23-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Repertuar tanlashda eng ishonchli amaliy tekshiruv qaysi?",
                options: [
                  { id: "a", text: "Asar mashhurligi" },
                  { id: "b", text: "Sinfni kuylatib ko'rish" },
                  { id: "c", text: "Nota murakkabligi" },
                  { id: "d", text: "Bastakor nomi" },
                ],
                correctId: "b",
              },
              {
                id: "m23-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Ijodiy topshiriq qanday baholanadi?",
                options: [
                  { id: "a", text: "Faqat «to'g'ri javob» mezoni bilan" },
                  { id: "b", text: "Ishtirok va o'z tanlovini asoslash bo'yicha" },
                  { id: "c", text: "Baholanmaydi" },
                  { id: "d", text: "Faqat ijro tozaligi bilan" },
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
              "4-sinf: 9–10 yosh, diapazon — taxminan si – re2",
              "Repertuar belgilari: Kengroq diapazonli, ifodali asarlar; ikki ovozlilik elementlari (kanon, ostinato).",
              "Diapazon raqamlari yo'naltiruvchi; aniqligi sinfda tekshiriladi",
              "Ijodiy topshiriq ishtirok va asoslash bo'yicha baholanadi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "4-sinf uchun repertuar tanlashda sizga eng ko'p nima qiyinchilik tug'diradi?",
      "Shu yoshdagi bolaning qiziqishini qanday bilib olasiz?",
    ],
  },

  /* ──────────────────────────── M24 ──────────────────────────── */
  {
    id: "met-m24",
    slug: "m24-5-sinf-repertuari",
    title: "M24: 5-sinf uchun repertuar tanlash va tahlil qilish",
    summary:
      "5-sinf o'quvchisining musiqiy tavsifnomasi, ovoz imkoniyati va unga mos repertuar.",
    durationMin: 80,
    bloom: "baholash",
    outcomeId: "on-met-20",
    area: "metodika",
    dasturKodi: "M24",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN3", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Repertuar tanlash har bir sinf uchun qaytadan hal qilinadi. 5-sinf (10–11 yosh) o'z tavsifnomasiga ega va undan oldingi yoki keyingi sinf uchun mos asar bu yerda ishlamasligi mumkin.",
          },
          {
            kind: "matn",
            text: "Bu darsda uch narsa ko'rib chiqiladi: shu yoshning musiqiy tavsifnomasi, ovoz imkoniyati va shunga mos repertuar belgilari.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Yosh xususiyatlari: O'smirlik ostonasi; jamoa fikri muhim bo'lib qoladi; ayrim o'g'il bolalarda ovoz o'zgarishi belgilari paydo bo'lishi mumkin.",
          },
          {
            kind: "royxat",
            items: [
              "Yosh: 10–11 yosh",
              "Ovoz diapazoni: taxminan lya (kichik oktava) – re2",
              "Repertuar belgilari: Jiddiyroq mavzular, milliy kuylar (lazgi, yallama yorim kabi) va zamonaviy bolalar qo'shiqlari.",
            ],
          },
          {
            kind: "eslatma",
            text: "Diapazon raqamlari taxminiy va yo'naltiruvchi: aniq chegara sinfning o'ziga, darslik va DTS talablariga qarab belgilanadi. Amalda eng ishonchli tekshiruv — sinfni kuylatib ko'rish.",
          },
          {
            kind: "matn",
            text: "Amaliy maslahat: Ovozi o'zgarayotgan bolaga past partiya yoki ritmik vazifa bering — jarayondan chiqarmang.",
          },
          {
            kind: "matn",
            text: "Ijodiy topshiriqlar shu yoshda musiqiy taassurotni mustahkamlaydi: asar kayfiyatini chizish, matnga davom topish, ritmik jo'rlik o'ylab topish. Ular baholanadi, lekin «to'g'ri javob» mezoni bilan emas — ishtirok va asoslash bilan.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: 5-sinf tavsifnomasi qanday o'qiladi",
        blocks: [
          {
            kind: "matn",
            text: "Yosh tavsifnomasi — ro'yxat emas, qaror qabul qilish vositasi. Uni to'rt o'q bo'yicha o'qish kerak va har bir o'q repertuar hamda dars tuzilmasida aniq natijaga olib keladi.",
          },
          {
            kind: "royxat",
            items: [
              "Ovoz imkoniyati — diapazon, nafas va yuklama chegarasi; repertuar tonalligini belgilaydi",
              "Diqqat barqarorligi — bitta faoliyat necha daqiqa davom etishi mumkinligini belgilaydi",
              "Idrok darajasi — matn mavhum bo'lishi mumkinmi yoki tasvirli bo'lishi kerakmi",
              "Motivatsiya manbayi — bolani nima qiziqtiradi: o'yin, musobaqa, jamoa yoki o'z fikri",
            ],
          },
          {
            kind: "matn",
            text: "5-sinf uchun (10-11 yosh) birinchi o'q shunday ko'rinadi: O'smirlik ostonasi: ayrim o'g'il bolalarda ovoz o'zgarishining birinchi belgilari paydo bo'lishi mumkin. Shu bolalarga past partiya yoki ritmik vazifa beriladi.",
          },
          {
            kind: "matn",
            text: "Ikkinchi o'q — diqqat: bu yoshda bitta faoliyat taxminan 25 daqiqa davom etishi mumkin. Shu raqam darsni rejalashtirishda bevosita ishlatiladi: faoliyat shu muddatdan uzun bo'lsa, oxirgi daqiqalar behuda ketadi.",
          },
          {
            kind: "eslatma",
            text: "Eng ko'p uchraydigan xato: Ovozi o'zgarayotgan bolani kuylashdan chiqarib yuborish. U faoliyatda qoladi, lekin boshqa vazifa bilan — aks holda musiqadan uzoqlashadi.",
          },
        ],
      },
      {
        id: "faoliyat",
        title: "Faoliyat turlarining taqsimoti",
        blocks: [
          {
            kind: "matn",
            text: "45 daqiqalik darsda to'rt faoliyat turi 5-sinf uchun taxminan quyidagicha taqsimlanadi. Raqamlar qat'iy emas, lekin nisbat muhim — u yoshning imkoniyatidan chiqadi.",
          },
          {
            kind: "royxat",
            items: [
              "Kuylash — 15-18 daqiqa; ikki ovozlilik mustahkamlanadi",
              "Tinglash va tahlil — 10 daqiqa; milliy kuylar va uslub masalasi",
              "Cholg'u yoki harakat — 5-7 daqiqa; doira usuli bilan ish",
              "Musiqa savodi — 5 daqiqa; nota o'qish ko'nikmasi",
            ],
          },
          {
            kind: "matn",
            text: "Taqsimotni tekshirishning oddiy yo'li bor: dars rejasida o'quvchi necha daqiqa musiqa qilgani va necha daqiqa eshitib o'tirgani hisoblanadi. Ikkinchisi birinchisidan ko'p bo'lsa, reja qayta ko'riladi.",
          },
          {
            kind: "matn",
            text: "Baholash ham yoshga bog'lanadi. Jamoa fikri muhim bo'lgan yosh: baholash guruh natijasini ham hisobga oladi, lekin individual o'sish asosiy qoladi.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Mutatsiya belgilari — ovoz tembri va diapazonining o'zgarishi boshlanishi",
              "Past partiya — mutatsiya davridagi bola uchun qulay, tor diapazondagi ovoz yo'li",
              "Uslub — musiqiy ifodaning tarixiy yoki milliy an'anaga xos ko'rinishi",
              "Yosh tavsifnomasi — muayyan yoshning ovoz, diqqat, idrok va motivatsiya xususiyatlari majmui",
              "Faoliyat taqsimoti — dars vaqtining musiqiy faoliyat turlari bo'yicha bo'linishi",
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
            text: "5-sinf uchun darslikdan ikkita asar tanlang. Har birini diapazon, matn va davomiylik bo'yicha tekshiring. Qaysi biri moslashtirishni talab qiladi va qanday?",
          },
          {
            kind: "mashq",
            text: "Shu sinf uchun bitta ijodiy topshiriq tuzing va uni qanday baholashingizni yozing — ball emas, mezon bilan.",
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
                id: "m24-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "5-sinf o'quvchisining yoshi qaysi?",
                options: [
                  { id: "a", text: "10–11 yosh" },
                  { id: "b", text: "14–15 yosh" },
                  { id: "c", text: "4–5 yosh" },
                  { id: "d", text: "16–17 yosh" },
                ],
                correctId: "a",
              },
              {
                id: "m24-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Nega diapazon raqamlari taxminiy deb beriladi?",
                options: [
                  { id: "a", text: "Hali o'rganilmagan" },
                  { id: "b", text: "Aniq chegara sinfga, darslik va DTS talabiga qarab belgilanadi" },
                  { id: "c", text: "Ular ahamiyatsiz" },
                  { id: "d", text: "Darslikda yo'q" },
                ],
                correctId: "b",
              },
              {
                id: "m24-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "5-sinfda repertuar tanlashda qaysi maslahat o'rinli?",
                options: [
                  { id: "a", text: "Ovozi o'zgarayotgan bolaga past partiya yoki ritmik vazifa bering — jarayondan chiqarmang." },
                  { id: "b", text: "Imkon qadar murakkab asar tanlash" },
                  { id: "c", text: "Faqat kattalar repertuaridan olish" },
                  { id: "d", text: "Diapazonga e'tibor bermaslik" },
                ],
                correctId: "a",
              },
              {
                id: "m24-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Repertuar tanlashda eng ishonchli amaliy tekshiruv qaysi?",
                options: [
                  { id: "a", text: "Asar mashhurligi" },
                  { id: "b", text: "Sinfni kuylatib ko'rish" },
                  { id: "c", text: "Nota murakkabligi" },
                  { id: "d", text: "Bastakor nomi" },
                ],
                correctId: "b",
              },
              {
                id: "m24-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Ijodiy topshiriq qanday baholanadi?",
                options: [
                  { id: "a", text: "Faqat «to'g'ri javob» mezoni bilan" },
                  { id: "b", text: "Ishtirok va o'z tanlovini asoslash bo'yicha" },
                  { id: "c", text: "Baholanmaydi" },
                  { id: "d", text: "Faqat ijro tozaligi bilan" },
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
              "5-sinf: 10–11 yosh, diapazon — taxminan lya (kichik oktava) – re2",
              "Repertuar belgilari: Jiddiyroq mavzular, milliy kuylar (lazgi, yallama yorim kabi) va zamonaviy bolalar qo'shiqlari.",
              "Diapazon raqamlari yo'naltiruvchi; aniqligi sinfda tekshiriladi",
              "Ijodiy topshiriq ishtirok va asoslash bo'yicha baholanadi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "5-sinf uchun repertuar tanlashda sizga eng ko'p nima qiyinchilik tug'diradi?",
      "Shu yoshdagi bolaning qiziqishini qanday bilib olasiz?",
    ],
  },

  /* ──────────────────────────── M25 ──────────────────────────── */
  {
    id: "met-m25",
    slug: "m25-6-sinf-repertuari",
    title: "M25: 6-sinf uchun repertuar tanlash va tahlil qilish",
    summary:
      "6-sinf o'quvchisining musiqiy tavsifnomasi, ovoz imkoniyati va unga mos repertuar.",
    durationMin: 80,
    bloom: "baholash",
    outcomeId: "on-met-20",
    area: "metodika",
    dasturKodi: "M25",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN3", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Repertuar tanlash har bir sinf uchun qaytadan hal qilinadi. 6-sinf (11–12 yosh) o'z tavsifnomasiga ega va undan oldingi yoki keyingi sinf uchun mos asar bu yerda ishlamasligi mumkin.",
          },
          {
            kind: "matn",
            text: "Bu darsda uch narsa ko'rib chiqiladi: shu yoshning musiqiy tavsifnomasi, ovoz imkoniyati va shunga mos repertuar belgilari.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Yosh xususiyatlari: Ovoz mutatsiyasi davri boshlanadi: tembr o'zgaradi, diapazon vaqtincha torayadi, charchash tez keladi.",
          },
          {
            kind: "royxat",
            items: [
              "Yosh: 11–12 yosh",
              "Ovoz diapazoni: ovoz mutatsiyasi tufayli individual; umumiy oraliq toraytiriladi",
              "Repertuar belgilari: O'rtacha diapazonli, uzoq cho'zilmaydigan asarlar; tinglash va tahlil ulushi oshadi.",
            ],
          },
          {
            kind: "eslatma",
            text: "Diapazon raqamlari taxminiy va yo'naltiruvchi: aniq chegara sinfning o'ziga, darslik va DTS talablariga qarab belgilanadi. Amalda eng ishonchli tekshiruv — sinfni kuylatib ko'rish.",
          },
          {
            kind: "matn",
            text: "Amaliy maslahat: Baland va uzun notalardan qoching; kuylash vaqtini qisqartirib, tahlil va ijodiy ishni ko'paytiring.",
          },
          {
            kind: "matn",
            text: "Ijodiy topshiriqlar shu yoshda musiqiy taassurotni mustahkamlaydi: asar kayfiyatini chizish, matnga davom topish, ritmik jo'rlik o'ylab topish. Ular baholanadi, lekin «to'g'ri javob» mezoni bilan emas — ishtirok va asoslash bilan.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: 6-sinf tavsifnomasi qanday o'qiladi",
        blocks: [
          {
            kind: "matn",
            text: "Yosh tavsifnomasi — ro'yxat emas, qaror qabul qilish vositasi. Uni to'rt o'q bo'yicha o'qish kerak va har bir o'q repertuar hamda dars tuzilmasida aniq natijaga olib keladi.",
          },
          {
            kind: "royxat",
            items: [
              "Ovoz imkoniyati — diapazon, nafas va yuklama chegarasi; repertuar tonalligini belgilaydi",
              "Diqqat barqarorligi — bitta faoliyat necha daqiqa davom etishi mumkinligini belgilaydi",
              "Idrok darajasi — matn mavhum bo'lishi mumkinmi yoki tasvirli bo'lishi kerakmi",
              "Motivatsiya manbayi — bolani nima qiziqtiradi: o'yin, musobaqa, jamoa yoki o'z fikri",
            ],
          },
          {
            kind: "matn",
            text: "6-sinf uchun (11-12 yosh) birinchi o'q shunday ko'rinadi: Ovoz mutatsiyasi davri: tembr o'zgaradi, diapazon vaqtincha torayadi, charchash tez keladi. Diapazon sinf uchun emas, har bola uchun alohida aniqlanadi.",
          },
          {
            kind: "matn",
            text: "Ikkinchi o'q — diqqat: bu yoshda bitta faoliyat taxminan 25-30 daqiqa davom etishi mumkin. Shu raqam darsni rejalashtirishda bevosita ishlatiladi: faoliyat shu muddatdan uzun bo'lsa, oxirgi daqiqalar behuda ketadi.",
          },
          {
            kind: "eslatma",
            text: "Eng ko'p uchraydigan xato: Mutatsiya davrida odatdagi yuklamani saqlab qolish. Baland va uzun notalar, uzoq kuylash bu davrda ovozga zarar beradi.",
          },
        ],
      },
      {
        id: "faoliyat",
        title: "Faoliyat turlarining taqsimoti",
        blocks: [
          {
            kind: "matn",
            text: "45 daqiqalik darsda to'rt faoliyat turi 6-sinf uchun taxminan quyidagicha taqsimlanadi. Raqamlar qat'iy emas, lekin nisbat muhim — u yoshning imkoniyatidan chiqadi.",
          },
          {
            kind: "royxat",
            items: [
              "Kuylash — 12-15 daqiqa; qisqa bo'laklar, dam olish bilan",
              "Tinglash va tahlil — 12-15 daqiqa; ulush ataylab oshiriladi",
              "Ijodiy ish — 7-10 daqiqa; jo'rlik, variant, tahlil yozuvi",
              "Musiqa savodi — 5 daqiqa",
            ],
          },
          {
            kind: "matn",
            text: "Taqsimotni tekshirishning oddiy yo'li bor: dars rejasida o'quvchi necha daqiqa musiqa qilgani va necha daqiqa eshitib o'tirgani hisoblanadi. Ikkinchisi birinchisidan ko'p bo'lsa, reja qayta ko'riladi.",
          },
          {
            kind: "matn",
            text: "Baholash ham yoshga bog'lanadi. Kuylash bahosining ulushi pasayadi, tahlil va ijodiy ishning ulushi oshadi — bu adolat masalasi, yengillik emas.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Mutatsiya — o'smirlik davrida ovozning sinishi va qayta shakllanishi",
              "Ovoz gigiyenasi — ovozni asrash qoidalari: yuklama, davomiylik, dinamika chegarasi",
              "Individual diapazon — har bir o'quvchi uchun alohida aniqlanadigan ovoz oralig'i",
              "Yosh tavsifnomasi — muayyan yoshning ovoz, diqqat, idrok va motivatsiya xususiyatlari majmui",
              "Faoliyat taqsimoti — dars vaqtining musiqiy faoliyat turlari bo'yicha bo'linishi",
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
            text: "6-sinf uchun darslikdan ikkita asar tanlang. Har birini diapazon, matn va davomiylik bo'yicha tekshiring. Qaysi biri moslashtirishni talab qiladi va qanday?",
          },
          {
            kind: "mashq",
            text: "Shu sinf uchun bitta ijodiy topshiriq tuzing va uni qanday baholashingizni yozing — ball emas, mezon bilan.",
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
                id: "m25-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "6-sinf o'quvchisining yoshi qaysi?",
                options: [
                  { id: "a", text: "11–12 yosh" },
                  { id: "b", text: "14–15 yosh" },
                  { id: "c", text: "4–5 yosh" },
                  { id: "d", text: "16–17 yosh" },
                ],
                correctId: "a",
              },
              {
                id: "m25-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Nega diapazon raqamlari taxminiy deb beriladi?",
                options: [
                  { id: "a", text: "Hali o'rganilmagan" },
                  { id: "b", text: "Aniq chegara sinfga, darslik va DTS talabiga qarab belgilanadi" },
                  { id: "c", text: "Ular ahamiyatsiz" },
                  { id: "d", text: "Darslikda yo'q" },
                ],
                correctId: "b",
              },
              {
                id: "m25-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "6-sinfda repertuar tanlashda qaysi maslahat o'rinli?",
                options: [
                  { id: "a", text: "Baland va uzun notalardan qoching; kuylash vaqtini qisqartirib, tahlil va ijodiy ishni ko'paytiring." },
                  { id: "b", text: "Imkon qadar murakkab asar tanlash" },
                  { id: "c", text: "Faqat kattalar repertuaridan olish" },
                  { id: "d", text: "Diapazonga e'tibor bermaslik" },
                ],
                correctId: "a",
              },
              {
                id: "m25-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Repertuar tanlashda eng ishonchli amaliy tekshiruv qaysi?",
                options: [
                  { id: "a", text: "Asar mashhurligi" },
                  { id: "b", text: "Sinfni kuylatib ko'rish" },
                  { id: "c", text: "Nota murakkabligi" },
                  { id: "d", text: "Bastakor nomi" },
                ],
                correctId: "b",
              },
              {
                id: "m25-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Ijodiy topshiriq qanday baholanadi?",
                options: [
                  { id: "a", text: "Faqat «to'g'ri javob» mezoni bilan" },
                  { id: "b", text: "Ishtirok va o'z tanlovini asoslash bo'yicha" },
                  { id: "c", text: "Baholanmaydi" },
                  { id: "d", text: "Faqat ijro tozaligi bilan" },
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
              "6-sinf: 11–12 yosh, diapazon — ovoz mutatsiyasi tufayli individual; umumiy oraliq toraytiriladi",
              "Repertuar belgilari: O'rtacha diapazonli, uzoq cho'zilmaydigan asarlar; tinglash va tahlil ulushi oshadi.",
              "Diapazon raqamlari yo'naltiruvchi; aniqligi sinfda tekshiriladi",
              "Ijodiy topshiriq ishtirok va asoslash bo'yicha baholanadi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "6-sinf uchun repertuar tanlashda sizga eng ko'p nima qiyinchilik tug'diradi?",
      "Shu yoshdagi bolaning qiziqishini qanday bilib olasiz?",
    ],
  },

  /* ──────────────────────────── M26 ──────────────────────────── */
  {
    id: "met-m26",
    slug: "m26-7-sinf-repertuari",
    title: "M26: 7-sinf uchun repertuar tanlash va tahlil qilish",
    summary:
      "7-sinf o'quvchisining musiqiy tavsifnomasi, ovoz imkoniyati va unga mos repertuar.",
    durationMin: 80,
    bloom: "baholash",
    outcomeId: "on-met-20",
    area: "metodika",
    dasturKodi: "M26",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN3", "TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Repertuar tanlash har bir sinf uchun qaytadan hal qilinadi. 7-sinf (12–13 yosh) o'z tavsifnomasiga ega va undan oldingi yoki keyingi sinf uchun mos asar bu yerda ishlamasligi mumkin.",
          },
          {
            kind: "matn",
            text: "Bu darsda uch narsa ko'rib chiqiladi: shu yoshning musiqiy tavsifnomasi, ovoz imkoniyati va shunga mos repertuar belgilari.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "Yosh xususiyatlari: Tanqidiy fikr kuchayadi; «bolalarcha» material rad etiladi; musiqiy didi shakllanmoqda.",
          },
          {
            kind: "royxat",
            items: [
              "Yosh: 12–13 yosh",
              "Ovoz diapazoni: mutatsiya davom etadi; har bolaga alohida qaraladi",
              "Repertuar belgilari: Vatan, ona tili, do'stlik mavzularidagi jiddiy asarlar; jahon va milliy klassikadan tinglash.",
            ],
          },
          {
            kind: "eslatma",
            text: "Diapazon raqamlari taxminiy va yo'naltiruvchi: aniq chegara sinfning o'ziga, darslik va DTS talablariga qarab belgilanadi. Amalda eng ishonchli tekshiruv — sinfni kuylatib ko'rish.",
          },
          {
            kind: "matn",
            text: "Amaliy maslahat: Repertuarni tanlashda bolalarning fikrini so'rang — bu yoshda ishtirok motivatsiyani belgilaydi.",
          },
          {
            kind: "matn",
            text: "Ijodiy topshiriqlar shu yoshda musiqiy taassurotni mustahkamlaydi: asar kayfiyatini chizish, matnga davom topish, ritmik jo'rlik o'ylab topish. Ular baholanadi, lekin «to'g'ri javob» mezoni bilan emas — ishtirok va asoslash bilan.",
          },
        ],
      },
      {
        id: "nazariya",
        title: "Nazariy bayon: 7-sinf tavsifnomasi qanday o'qiladi",
        blocks: [
          {
            kind: "matn",
            text: "Yosh tavsifnomasi — ro'yxat emas, qaror qabul qilish vositasi. Uni to'rt o'q bo'yicha o'qish kerak va har bir o'q repertuar hamda dars tuzilmasida aniq natijaga olib keladi.",
          },
          {
            kind: "royxat",
            items: [
              "Ovoz imkoniyati — diapazon, nafas va yuklama chegarasi; repertuar tonalligini belgilaydi",
              "Diqqat barqarorligi — bitta faoliyat necha daqiqa davom etishi mumkinligini belgilaydi",
              "Idrok darajasi — matn mavhum bo'lishi mumkinmi yoki tasvirli bo'lishi kerakmi",
              "Motivatsiya manbayi — bolani nima qiziqtiradi: o'yin, musobaqa, jamoa yoki o'z fikri",
            ],
          },
          {
            kind: "matn",
            text: "7-sinf uchun (12-13 yosh) birinchi o'q shunday ko'rinadi: Mutatsiya davom etadi; ovoz turi aniqlanib bora boshlaydi. Tessitura ehtiyotkor tanlanadi, dinamika cheklanadi.",
          },
          {
            kind: "matn",
            text: "Ikkinchi o'q — diqqat: bu yoshda bitta faoliyat taxminan 30 daqiqa davom etishi mumkin. Shu raqam darsni rejalashtirishda bevosita ishlatiladi: faoliyat shu muddatdan uzun bo'lsa, oxirgi daqiqalar behuda ketadi.",
          },
          {
            kind: "eslatma",
            text: "Eng ko'p uchraydigan xato: Bolalarcha material taklif qilish. Bu yoshda tanqidiy fikr kuchli: mos kelmagan material rad etiladi va motivatsiya yo'qoladi.",
          },
        ],
      },
      {
        id: "faoliyat",
        title: "Faoliyat turlarining taqsimoti",
        blocks: [
          {
            kind: "matn",
            text: "45 daqiqalik darsda to'rt faoliyat turi 7-sinf uchun taxminan quyidagicha taqsimlanadi. Raqamlar qat'iy emas, lekin nisbat muhim — u yoshning imkoniyatidan chiqadi.",
          },
          {
            kind: "royxat",
            items: [
              "Kuylash — 12-15 daqiqa; tessitura va yuklama nazoratda",
              "Tinglash va tahlil — 15 daqiqa; jahon va milliy klassika",
              "Ijodiy va loyihaviy ish — 10 daqiqa; tadbir, taqdimot, to'plam",
              "Musiqa savodi — qo'shiq va tahlil ichida",
            ],
          },
          {
            kind: "matn",
            text: "Taqsimotni tekshirishning oddiy yo'li bor: dars rejasida o'quvchi necha daqiqa musiqa qilgani va necha daqiqa eshitib o'tirgani hisoblanadi. Ikkinchisi birinchisidan ko'p bo'lsa, reja qayta ko'riladi.",
          },
          {
            kind: "matn",
            text: "Baholash ham yoshga bog'lanadi. Baholashda o'z fikrini asoslash alohida mezonga aylanadi: nima uchun shu ijro yoki shu asar afzal.",
          },
        ],
      },
      {
        id: "atamalar",
        title: "Asosiy atamalar",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Tessitura — asarning asosiy qismi joylashgan tovush balandligi sohasi",
              "Tanqidiy idrok — asarni baholab, fikrini asoslab aytish qobiliyati",
              "Loyihaviy ish — yakuniy mahsulot yaratishga qaratilgan uzoq muddatli vazifa",
              "Yosh tavsifnomasi — muayyan yoshning ovoz, diqqat, idrok va motivatsiya xususiyatlari majmui",
              "Faoliyat taqsimoti — dars vaqtining musiqiy faoliyat turlari bo'yicha bo'linishi",
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
            text: "7-sinf uchun darslikdan ikkita asar tanlang. Har birini diapazon, matn va davomiylik bo'yicha tekshiring. Qaysi biri moslashtirishni talab qiladi va qanday?",
          },
          {
            kind: "mashq",
            text: "Shu sinf uchun bitta ijodiy topshiriq tuzing va uni qanday baholashingizni yozing — ball emas, mezon bilan.",
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
                id: "m26-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "7-sinf o'quvchisining yoshi qaysi?",
                options: [
                  { id: "a", text: "12–13 yosh" },
                  { id: "b", text: "14–15 yosh" },
                  { id: "c", text: "4–5 yosh" },
                  { id: "d", text: "16–17 yosh" },
                ],
                correctId: "a",
              },
              {
                id: "m26-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Nega diapazon raqamlari taxminiy deb beriladi?",
                options: [
                  { id: "a", text: "Hali o'rganilmagan" },
                  { id: "b", text: "Aniq chegara sinfga, darslik va DTS talabiga qarab belgilanadi" },
                  { id: "c", text: "Ular ahamiyatsiz" },
                  { id: "d", text: "Darslikda yo'q" },
                ],
                correctId: "b",
              },
              {
                id: "m26-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "7-sinfda repertuar tanlashda qaysi maslahat o'rinli?",
                options: [
                  { id: "a", text: "Repertuarni tanlashda bolalarning fikrini so'rang — bu yoshda ishtirok motivatsiyani belgilaydi." },
                  { id: "b", text: "Imkon qadar murakkab asar tanlash" },
                  { id: "c", text: "Faqat kattalar repertuaridan olish" },
                  { id: "d", text: "Diapazonga e'tibor bermaslik" },
                ],
                correctId: "a",
              },
              {
                id: "m26-t4",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Repertuar tanlashda eng ishonchli amaliy tekshiruv qaysi?",
                options: [
                  { id: "a", text: "Asar mashhurligi" },
                  { id: "b", text: "Sinfni kuylatib ko'rish" },
                  { id: "c", text: "Nota murakkabligi" },
                  { id: "d", text: "Bastakor nomi" },
                ],
                correctId: "b",
              },
              {
                id: "m26-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Ijodiy topshiriq qanday baholanadi?",
                options: [
                  { id: "a", text: "Faqat «to'g'ri javob» mezoni bilan" },
                  { id: "b", text: "Ishtirok va o'z tanlovini asoslash bo'yicha" },
                  { id: "c", text: "Baholanmaydi" },
                  { id: "d", text: "Faqat ijro tozaligi bilan" },
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
              "7-sinf: 12–13 yosh, diapazon — mutatsiya davom etadi; har bolaga alohida qaraladi",
              "Repertuar belgilari: Vatan, ona tili, do'stlik mavzularidagi jiddiy asarlar; jahon va milliy klassikadan tinglash.",
              "Diapazon raqamlari yo'naltiruvchi; aniqligi sinfda tekshiriladi",
              "Ijodiy topshiriq ishtirok va asoslash bo'yicha baholanadi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "7-sinf uchun repertuar tanlashda sizga eng ko'p nima qiyinchilik tug'diradi?",
      "Shu yoshdagi bolaning qiziqishini qanday bilib olasiz?",
    ],
  },
  /* ──────────────────────────── M27 ──────────────────────────── */
  {
    id: "met-m27",
    slug: "m27-musiqiy-togaraklar",
    title: "M27: Maktabda musiqiy to'garaklarni tashkil etish",
    summary:
      "To'garak turlari, rejalashtirish va ommaviy musiqiy tadbirlarni tashkil qilish.",
    durationMin: 80,
    bloom: "sintez",
    outcomeId: "on-met-21",
    area: "metodika",
    dasturKodi: "M27",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN7"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "To'garak — darsning davomi emas, boshqa narsa. Darsda hamma qatnashadi va dastur bajariladi; to'garakka esa xohlagan keladi va u yerda chuqurroq ishlanadi.",
          },
          {
            kind: "matn",
            text: "Shu farqni unutish eng keng tarqalgan xato: to'garak «qo'shimcha dars» ga aylansa, bolalar kelmay qo'yadi.",
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
              "Xor to'garagi — jamoaviy kuylash, ko'p ovozlilik",
              "Vokal ansambl — kichik guruh, individual ish ko'proq",
              "Cholg'u ansambli — milliy yoki bolalar cholg'ulari",
              "Folklor to'garagi — xalq qo'shiq va raqslari",
              "Musiqa tinglash klubi — tahlil va muhokama",
            ],
          },
          {
            kind: "matn",
            text: "Rejalashtirish uch savoldan boshlanadi: yakuniy natija nima (konsert, tanlov, yozuv), unga qancha vaqt bor, haftasiga necha marta uchrashiladi. Natijasiz to'garak tez so'nadi — ishtirokchi nima uchun kelayotganini bilmaydi.",
          },
          {
            kind: "eslatma",
            text: "Ommaviy tadbirda eng ko'p e'tibordan chetda qoladigan narsa — tayyorgarlikning oxirgi bosqichi: sahnada turish, mikrofon, kirish va chiqish tartibi. Yaxshi tayyorlangan jamoa shu bosqich tufayli yomon chiqish qilishi mumkin.",
          },
          {
            kind: "matn",
            text: "To'garak dasturi yil davomida bir necha cho'qqiga mo'ljallanadi: kuzgi tadbir, qishki bayram, bahorgi tanlov, yakuniy konsert. Har cho'qqi oralig'ida yangi material o'rganiladi.",
          },
        ],
      },
      {
        id: "mashq",
        title: "Amaliy mashq",
        blocks: [
          {
            kind: "mashq",
            text: "Bitta to'garak turini tanlang va bir chorakka reja tuzing: yakuniy natija, hafta bo'yicha material, mashg'ulot soni. Rejada kamida bitta ochiq chiqish bo'lsin.",
          },
          {
            kind: "mashq",
            text: "Ommaviy tadbir uchun sahna tartibini yozing: kim qachon chiqadi, qayerda turadi, jo'rlik qanday beriladi, nosozlikda zaxira yo'l qanday.",
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
                id: "m27-t1",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt: "To'garakning darsdan asosiy farqi nimada?",
                options: [
                  { id: "a", text: "Uzunroq bo'ladi" },
                  { id: "b", text: "Ixtiyoriy va chuqurroq ishlanadi; dastur bajarish majburiyati yo'q" },
                  { id: "c", text: "Baho qo'yilmaydi" },
                  { id: "d", text: "Maktabdan tashqarida bo'ladi" },
                ],
                correctId: "b",
              },
              {
                id: "m27-t2",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt: "Natijasiz to'garak nega tez so'nadi?",
                options: [
                  { id: "a", text: "Mablag' yetmaydi" },
                  { id: "b", text: "Ishtirokchi nima uchun kelayotganini bilmaydi" },
                  { id: "c", text: "O'qituvchi charchaydi" },
                  { id: "d", text: "Xona topilmaydi" },
                ],
                correctId: "b",
              },
              {
                id: "m27-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Ommaviy tadbirda ko'pincha qaysi bosqich e'tibordan chetda qoladi?",
                options: [
                  { id: "a", text: "Material o'rganish" },
                  { id: "b", text: "Sahnada turish, kirish-chiqish va texnik tartib" },
                  { id: "c", text: "Repertuar tanlash" },
                  { id: "d", text: "Mashg'ulot jadvali" },
                ],
                correctId: "b",
              },
              {
                id: "m27-t4",
                area: "metodika",
                bloom: "bilish",
                kind: "multiple",
                prompt: "Maktab musiqiy to'garaklarining turlari qaysilar?",
                options: [
                  { id: "a", text: "Xor to'garagi" },
                  { id: "b", text: "Vokal ansambl" },
                  { id: "c", text: "Cholg'u ansambli va folklor to'garagi" },
                  { id: "d", text: "Matematika klubi" },
                ],
                correctIds: ["a", "b", "c"],
              },
              {
                id: "m27-t5",
                area: "metodika",
                bloom: "sintez",
                kind: "single",
                prompt:
                  "Yillik to'garak dasturi qanday quriladi?",
                options: [
                  { id: "a", text: "Bir xil material yil davomida" },
                  { id: "b", text: "Bir necha cho'qqi (tadbir) va ular oralig'ida yangi material" },
                  { id: "c", text: "Faqat yakuniy konsertga tayyorgarlik" },
                  { id: "d", text: "Rejasiz, ehtiyojga qarab" },
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
              "To'garak ixtiyoriy va chuqurroq: «qo'shimcha dars» emas",
              "Reja yakuniy natijadan boshlanadi",
              "Sahna tartibi — tayyorgarlikning teng huquqli qismi",
              "Yil bir necha cho'qqiga mo'ljallanadi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "Qaysi to'garak turini o'zingiz yuritgan bo'lardingiz va nega?",
      "Bolalar to'garakka kelishdan to'xtasa, birinchi nimani tekshirasiz?",
    ],
  },

  /* ──────────────────────────── M28 ──────────────────────────── */
  {
    id: "met-m28",
    slug: "m28-ozbekiston-musiqa-talimi",
    title: "M28: O'zbekiston musiqa ta'limi tizimi",
    summary:
      "Uzluksiz ta'lim bosqichlari: maktabgacha, umumta'lim, bolalar musiqa maktablari, o'rta maxsus va oliy ta'lim.",
    durationMin: 80,
    bloom: "tushunish",
    outcomeId: "on-met-12",
    area: "metodika",
    dasturKodi: "M28",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN1"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Maktab musiqa darsi — katta tizimning bitta bo'g'ini. Undan oldin maktabgacha ta'lim, yonida bolalar musiqa va san'at maktablari, keyin esa o'rta maxsus va oliy ta'lim turadi.",
          },
          {
            kind: "matn",
            text: "O'qituvchi shu tizimni bilsa, bolaga to'g'ri yo'l ko'rsata oladi: qobiliyatli o'quvchini qayerga yo'naltirish kerakligini biladi.",
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
              "Maktabgacha ta'lim — musiqiy tarbiyaning boshlanishi: o'yin, qo'shiq, harakat",
              "Umumiy o'rta ta'lim — musiqa madaniyati fani, 1–7-sinflar",
              "Bolalar musiqa va san'at maktablari — ixtisoslashgan qo'shimcha ta'lim",
              "O'rta maxsus ta'lim — musiqa kollejlari",
              "Oliy ta'lim — konservatoriya va pedagogika oliygohlari",
            ],
          },
          {
            kind: "matn",
            text: "Umumta'lim maktabi va bolalar musiqa maktabi vazifalari har xil. Birinchisi — **umumiy musiqiy madaniyat**: hamma uchun. Ikkinchisi — **kasbiy poydevor**: tanlagan uchun. Shuning uchun ularni bir xil mezon bilan baholash noto'g'ri.",
          },
          {
            kind: "eslatma",
            text: "Maktab o'qituvchisi uchun bu farqning amaliy ma'nosi bor: sinfda musiqa maktabida o'qiyotgan bola bo'lishi mumkin. Unga alohida vazifa berilmasa zerikadi; lekin uni «namuna» qilib ko'rsatish boshqalarni cheklaydi.",
          },
          {
            kind: "matn",
            text: "Milliy musiqa ta'limining rivojlanish yo'nalishlari: an'anaviy ijrochilik maktabini saqlash, raqamli resurslardan foydalanish va o'qituvchi tayyorlash sifatini oshirish.",
          },
        ],
      },
      {
        id: "mashq",
        title: "Amaliy mashq",
        blocks: [
          {
            kind: "mashq",
            text: "Tizim bosqichlarini chizmada ko'rsating va har biriga bitta vazifa yozing. Qaysi bosqichlar bir-biriga parallel ketadi?",
          },
          {
            kind: "mashq",
            text: "Sinfingizda musiqa maktabida o'qiyotgan bola bor deb faraz qiling. Unga darsda beradigan uchta vazifani yozing — shunday vazifalarki, boshqalarni cheklab qo'ymasin.",
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
                id: "m28-t1",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt:
                  "Umumta'lim maktabidagi musiqa darsining asosiy vazifasi nima?",
                options: [
                  { id: "a", text: "Professional musiqachi tayyorlash" },
                  { id: "b", text: "Umumiy musiqiy madaniyatni shakllantirish" },
                  { id: "c", text: "Konsertga tayyorlash" },
                  { id: "d", text: "Nota savodini to'liq o'rgatish" },
                ],
                correctId: "b",
              },
              {
                id: "m28-t2",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Nega maktab va bolalar musiqa maktabini bir xil mezon bilan baholash noto'g'ri?",
                options: [
                  { id: "a", text: "Ular turli vazirlikka bo'ysunadi" },
                  { id: "b", text: "Birinchisi hamma uchun umumiy madaniyat, ikkinchisi tanlaganlar uchun kasbiy poydevor" },
                  { id: "c", text: "Soatlari farq qiladi" },
                  { id: "d", text: "O'qituvchilari boshqacha" },
                ],
                correctId: "b",
              },
              {
                id: "m28-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Sinfda musiqa maktabida o'qiyotgan bola bor. Eng to'g'ri yondashuv qaysi?",
                options: [
                  { id: "a", text: "Uni doim namuna qilib ko'rsatish" },
                  { id: "b", text: "Alohida, murakkabroq vazifa berish — lekin boshqalarni cheklab qo'ymaydigan" },
                  { id: "c", text: "E'tibor bermaslik" },
                  { id: "d", text: "Dars o'tishini topshirish" },
                ],
                correctId: "b",
              },
              {
                id: "m28-t4",
                area: "metodika",
                bloom: "bilish",
                kind: "multiple",
                prompt: "Musiqa ta'limi tizimining bo'g'inlari qaysilar?",
                options: [
                  { id: "a", text: "Maktabgacha ta'lim" },
                  { id: "b", text: "Umumiy o'rta ta'lim" },
                  { id: "c", text: "Bolalar musiqa va san'at maktablari" },
                  { id: "d", text: "Sport maktablari" },
                ],
                correctIds: ["a", "b", "c"],
              },
              {
                id: "m28-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "single",
                prompt:
                  "Tizimni bilish maktab o'qituvchisiga amalda nima beradi?",
                options: [
                  { id: "a", text: "Hujjat to'ldirishni osonlashtiradi" },
                  { id: "b", text: "Qobiliyatli o'quvchini to'g'ri yo'naltirish imkonini beradi" },
                  { id: "c", text: "Ish haqini oshiradi" },
                  { id: "d", text: "Dars soatini kamaytiradi" },
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
              "Tizim: maktabgacha → umumta'lim → (parallel) musiqa maktabi → kollej → oliy ta'lim",
              "Maktab — umumiy madaniyat, musiqa maktabi — kasbiy poydevor",
              "Tizimni bilish qobiliyatli bolani yo'naltirish imkonini beradi",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'zingiz shu tizimning qaysi bo'g'inlaridan o'tgansiz?",
      "Sinfdagi qobiliyatli bolani qayerga yo'naltirishni qanday hal qilasiz?",
    ],
  },
  /* ──────────────────────────── M29 ──────────────────────────── */
  {
    id: "met-m29",
    slug: "m29-dunyo-musiqa-talimi",
    title: "M29: Dunyo musiqa ta'limi tizimlari",
    summary:
      "Kabalevskiy, Kodai, Orf va Jak-Dalkroz tizimlari hamda ularni qiyosiy tahlil qilish.",
    durationMin: 80,
    bloom: "tahlil",
    outcomeId: "on-met-6",
    area: "metodika",
    dasturKodi: "M29",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN1", "TN6"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Har bir tizim bitta savolga javob beradi: «Musiqa ta'limi nimadan boshlanadi?» Javoblar har xil — ovozdan, harakatdan, ijoddan yoki idrokdan. Shuning uchun ularni «qaysi biri to'g'ri» deb emas, «qaysi biri qachon kerak» deb o'rganiladi.",
          },
        ],
      },
      {
        id: "tushunchalar",
        title: "Asosiy tushunchalar",
        blocks: [
          {
            kind: "matn",
            text: "D. Kabalevskiy (Rossiya) tizimi markazida — musiqani **idrok etish**. Uning «uch kit» g'oyasi mashhur: qo'shiq, raqs va marsh — bolaga tanish uchta asos, qolgan hamma narsa shulardan o'sib chiqadi.",
          },
          {
            kind: "matn",
            text: "Z. Kodai (Vengriya) — ovoz va xalq qo'shig'i; nisbiy solmizatsiya va qo'l belgilari. K. Orf (Germaniya) — so'z, ritm, harakat va improvizatsiya; bola ijodkor. E. Jak-Dalkroz (Shveytsariya) — ritmni tana bilan his qilish, harakat orqali musiqani anglash.",
          },
          {
            kind: "royxat",
            items: [
              "Kabalevskiy — idrok, «uch kit», asarni jonli eshitish",
              "Kodai — ovoz, xalq qo'shig'i, nisbiy solmizatsiya",
              "Orf — ijodkorlik, ostinato, zarbli cholg'ular",
              "Jak-Dalkroz — ritmika, harakat, metrni tanada sezish",
              "Yaponiya (Suzuki) — ona tili modeli: eshitish, takrorlash, oila ishtiroki",
            ],
          },
          {
            kind: "eslatma",
            text: "Tizimlarni to'liq ko'chirib bo'lmaydi: ularning har biri o'z madaniy muhitida tug'ilgan. Kodai tizimi venger xalq qo'shig'iga tayanadi — o'zbek maktabida u o'zbek xalq qo'shig'i bilan ishlaydi, aks holda g'oya saqlanmaydi.",
          },
          {
            kind: "matn",
            text: "Qiyosiy tahlil mezoni: nimadan boshlanadi, qaysi faoliyat ustun, nota qachon kiritiladi, bolaning roli qanday (takrorlovchimi yoki yaratuvchimi).",
          },
        ],
      },
      {
        id: "mashq",
        title: "Amaliy mashq",
        blocks: [
          {
            kind: "mashq",
            text: "To'rt tizimni jadvalga soling: nimadan boshlanadi, ustun faoliyat, nota qachon, bolaning roli. Jadvaldan keyin bitta xulosa yozing.",
          },
          {
            kind: "mashq",
            text: "Bitta tizim g'oyasini o'zbek materiali bilan moslashtiring: masalan, Kodai yondashuvini o'zbek xalq qo'shig'i bilan. Nimani o'zgartirdingiz va nimani saqladingiz?",
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
                id: "m29-t1",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt: "Kabalevskiyning «uch kit» g'oyasi nimani bildiradi?",
                options: [
                  { id: "a", text: "Uchta cholg'u" },
                  { id: "b", text: "Qo'shiq, raqs va marsh — bolaga tanish uchta asos" },
                  { id: "c", text: "Uchta dars turi" },
                  { id: "d", text: "Uchta baholash mezoni" },
                ],
                correctId: "b",
              },
              {
                id: "m29-t2",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt: "Orf tizimida bolaning roli qanday?",
                options: [
                  { id: "a", text: "Takrorlovchi" },
                  { id: "b", text: "Yaratuvchi — improvizatsiya va o'z variantini topish" },
                  { id: "c", text: "Tinglovchi" },
                  { id: "d", text: "Nota o'quvchi" },
                ],
                correctId: "b",
              },
              {
                id: "m29-t3",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Nega chet el tizimini to'liq ko'chirib bo'lmaydi?",
                options: [
                  { id: "a", text: "Mualliflik huquqi tufayli" },
                  { id: "b", text: "Har biri o'z madaniy muhitida tug'ilgan; material almashtirilsa, g'oya saqlanishi kerak" },
                  { id: "c", text: "Tarjima qiyin" },
                  { id: "d", text: "Dastur ruxsat bermaydi" },
                ],
                correctId: "b",
              },
              {
                id: "m29-t4",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Sinf metrni his qilmayapti. Qaysi tizim usuli to'g'ri keladi?",
                options: [
                  { id: "a", text: "Kodai — qo'l belgilari" },
                  { id: "b", text: "Jak-Dalkroz — metrni harakat bilan sezdirish" },
                  { id: "c", text: "Kabalevskiy — idrok" },
                  { id: "d", text: "Suzuki — takrorlash" },
                ],
                correctId: "b",
              },
              {
                id: "m29-t5",
                area: "metodika",
                bloom: "baholash",
                kind: "multiple",
                prompt: "Qiyosiy tahlil mezonlari qaysilar?",
                options: [
                  { id: "a", text: "Nimadan boshlanadi" },
                  { id: "b", text: "Qaysi faoliyat ustun" },
                  { id: "c", text: "Bolaning roli" },
                  { id: "d", text: "Mualliflarning tug'ilgan yili" },
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
              "Kabalevskiy — idrok va «uch kit»; Kodai — ovoz va xalq qo'shig'i",
              "Orf — ijodkorlik va ostinato; Jak-Dalkroz — ritmni tanada sezish",
              "Tizim ko'chirilmaydi, moslashtiriladi: material o'zgaradi, g'oya saqlanadi",
              "Qiyos mezonlari: boshlanish nuqtasi, ustun faoliyat, nota vaqti, bolaning roli",
            ],
          },
        ],
      },
    ],
    reflection: [
      "Qaysi tizim sizning tasavvuringizdagi darsga eng yaqin?",
      "O'zbek musiqa an'anasi qaysi tizimga eng yaqin turadi deb o'ylaysiz? Nega?",
    ],
  },

  /* ──────────────────────────── M30 ──────────────────────────── */
  {
    id: "met-m30",
    slug: "m30-sinfdan-tashqari-tadbirlar",
    title: "M30: Sinfdan va maktabdan tashqari musiqiy-ma'rifiy tadbirlar",
    summary:
      "Bayram, festival, tanlov va konsertlarni tashkil etish; musiqiy-ma'rifiy loyihalarni rejalashtirish.",
    durationMin: 80,
    bloom: "sintez",
    outcomeId: "on-met-21",
    area: "metodika",
    dasturKodi: "M30",
    dasturTuri: "maruza",
    dasturSoati: 2,
    tn: ["TN7", "TN8"],
    sections: [
      {
        id: "kirish",
        title: "Kirish",
        blocks: [
          {
            kind: "matn",
            text: "Tadbir — maktabdagi musiqiy ishning ko'rinadigan qismi. Ota-ona darsga kirmaydi, lekin konsertga keladi; shuning uchun tadbir maktabdagi musiqa ta'limining yuzi bo'lib qoladi.",
          },
          {
            kind: "matn",
            text: "Shu bilan birga, tadbir ta'lim maqsadidan uzilib qolishi mumkin: ko'rsatuv chiroyli, lekin bola uchun yangi narsa yo'q. Yaxshi tadbir — o'rganilgan narsaning natijasi, undan ajralgan hodisa emas.",
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
              "Bayram ertaliklari — mavsumiy, butun maktab ishtirokida",
              "Konsert — to'garak va ansambllarning hisobot chiqishi",
              "Tanlov — musobaqa elementi, individual ijro",
              "Festival — bir necha jamoa, ko'p janrli",
              "Ijodiy uchrashuv — bastakor, ijrochi yoki ustoz bilan",
              "Musiqiy-ma'rifiy loyiha — uzoq muddatli ish, natijasi ommaga ko'rsatiladi",
            ],
          },
          {
            kind: "matn",
            text: "Tadbirni rejalashtirish ketma-ketligi: maqsad → ishtirokchilar → repertuar → jadval → texnik tayyorgarlik → mashq → o'tkazish → tahlil. Oxirgi band ko'pincha tashlab yuboriladi, lekin aynan u keyingi tadbirni yaxshilaydi.",
          },
          {
            kind: "eslatma",
            text: "Ishtirok tanlovida pedagogik qoida bor: tadbir faqat eng kuchlilar uchun bo'lsa, qolganlar uchun musiqa «meniki emas» bo'lib qoladi. Shuning uchun har bir tadbirda hamma uchun rol bo'lishi kerak — ijro, jo'rlik, boshqaruv, texnik yordam yoki bezash.",
          },
          {
            kind: "matn",
            text: "Musiqiy-ma'rifiy loyiha — tadbirdan kengroq: u bir necha hafta davom etadi va natijasi moddiy bo'ladi (to'plam, yozuv, ko'rgazma, maktab radiosi). Loyiha bolani tashkilotchi sifatida ham o'stiradi.",
          },
        ],
      },
      {
        id: "mashq",
        title: "Amaliy mashq",
        blocks: [
          {
            kind: "mashq",
            text: "Bitta tadbirni sakkiz bosqich bo'yicha rejalashtiring. «Tahlil» bandida qanday uchta savolga javob berishingizni yozing.",
          },
          {
            kind: "mashq",
            text: "Tadbirda ishtirok etmaydigan bolalar uchun uchta rol o'ylab toping — ijrodan tashqari, lekin haqiqiy mas'uliyat bilan.",
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
                id: "m30-t1",
                area: "metodika",
                bloom: "tushunish",
                kind: "single",
                prompt: "Yaxshi tadbirning asosiy belgisi nima?",
                options: [
                  { id: "a", text: "Ko'rkam bezatilgani" },
                  { id: "b", text: "O'rganilgan narsaning natijasi bo'lishi" },
                  { id: "c", text: "Uzoq davom etishi" },
                  { id: "d", text: "Ko'p mehmon kelishi" },
                ],
                correctId: "b",
              },
              {
                id: "m30-t2",
                area: "metodika",
                bloom: "tahlil",
                kind: "single",
                prompt:
                  "Tadbir faqat eng kuchli o'quvchilar uchun bo'lsa, qanday oqibat kelib chiqadi?",
                options: [
                  { id: "a", text: "Sifat oshadi" },
                  { id: "b", text: "Qolganlar uchun musiqa «meniki emas» bo'lib qoladi" },
                  { id: "c", text: "Vaqt tejaladi" },
                  { id: "d", text: "Hech qanday oqibat yo'q" },
                ],
                correctId: "b",
              },
              {
                id: "m30-t3",
                area: "metodika",
                bloom: "qollash",
                kind: "single",
                prompt:
                  "Tadbirni rejalashtirishda ko'pincha qaysi band tashlab yuboriladi?",
                options: [
                  { id: "a", text: "Repertuar tanlash" },
                  { id: "b", text: "O'tkazilgandan keyingi tahlil" },
                  { id: "c", text: "Mashq jadvali" },
                  { id: "d", text: "Texnik tayyorgarlik" },
                ],
                correctId: "b",
              },
              {
                id: "m30-t4",
                area: "metodika",
                bloom: "bilish",
                kind: "single",
                prompt:
                  "Musiqiy-ma'rifiy loyihaning tadbirdan farqi nimada?",
                options: [
                  { id: "a", text: "Qisqaroq bo'ladi" },
                  { id: "b", text: "Bir necha hafta davom etadi va moddiy natijasi bo'ladi" },
                  { id: "c", text: "Faqat o'qituvchi bajaradi" },
                  { id: "d", text: "Baholanmaydi" },
                ],
                correctId: "b",
              },
              {
                id: "m30-t5",
                area: "metodika",
                bloom: "sintez",
                kind: "multiple",
                prompt:
                  "Ijro etmaydigan o'quvchiga tadbirda qanday rol berish mumkin?",
                options: [
                  { id: "a", text: "Jo'rlik yoki ritmik guruh" },
                  { id: "b", text: "Boshlovchi yoki tashkilotchi" },
                  { id: "c", text: "Texnik yordam va bezash" },
                  { id: "d", text: "Tomoshabin sifatida o'tirish" },
                ],
                correctIds: ["a", "b", "c"],
                explanation:
                  "Tomoshabinlik rol emas — unda mas'uliyat va hissa yo'q.",
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
              "Tadbir — o'rganilgan narsaning natijasi, undan ajralgan hodisa emas",
              "Ketma-ketlik: maqsad → ishtirokchi → repertuar → jadval → texnika → mashq → o'tkazish → tahlil",
              "Har bir tadbirda hamma uchun rol bo'lishi kerak",
              "Loyiha tadbirdan kengroq: uzoq muddatli va moddiy natijali",
            ],
          },
        ],
      },
    ],
    reflection: [
      "O'zingiz qatnashgan maktab tadbiri esingizdami? Unda sizning rolingiz qanday edi?",
      "Tadbirdan keyingi tahlilga qanday uchta savol qo'yasiz?",
    ],
  },
];
