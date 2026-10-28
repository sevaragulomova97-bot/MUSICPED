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
];
