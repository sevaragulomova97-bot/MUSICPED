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
];
