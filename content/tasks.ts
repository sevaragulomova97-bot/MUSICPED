import type { Question } from "@/content/diagnostic";
import type { InstrumentKind } from "@/lib/domain/instruments";
import type { BloomLevel, DiagnosticArea, TaskType } from "@/lib/domain/types";

/**
 * Topshiriqlar banki.
 *
 * Har bir topshiriq modul, Blum darajasi, kompetensiya yo'nalishi va baholash
 * mezoniga bog'langan — J. Biggsning konstruktiv moslashuvi talabi.
 *
 * Baholash ikki xil:
 *  • `test` — avtomatik baholanadi (savollar banki orqali);
 *  • `loyiha` / `ijro` — o'qituvchi **rubrika** bo'yicha baholaydi, shuning
 *    uchun talaba qanday baholanishini oldindan ko'radi.
 */

export type RubricCriterion = {
  id: string;
  title: string;
  description: string;
  maxPoints: number;
};

export type Rubric = {
  criteria: RubricCriterion[];
};

export type Task = {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: TaskType;
  moduleId: string;
  outcomeId: string;
  area: DiagnosticArea;
  bloom: BloomLevel;
  /** Ko'rsatiladigan muddat matni */
  duration: string;
  /** Taymer uchun daqiqa; berilmasa taymer yo'q */
  timerMin?: number;
  /** Talaba nima topshiradi */
  submission: "test" | "fayl" | "matn" | "ijro";
  questions?: Question[];
  rubric?: Rubric;
  instrument?: InstrumentKind;
  exerciseId?: string;
  /** Ruxsat etilgan fayl turlari */
  accept?: string;
};

const RUBRIKA_DARS: Rubric = {
  criteria: [
    {
      id: "maqsad",
      title: "O'quv maqsadi",
      description:
        "Maqsad o'lchanadigan fe'l bilan yozilgan va Blum darajasi aniq ko'rsatilgan",
      maxPoints: 25,
    },
    {
      id: "tuzilma",
      title: "Dars tuzilmasi",
      description:
        "Bosqichlar mantiqiy ketma-ketlikda, vaqt taqsimoti real va asoslangan",
      maxPoints: 25,
    },
    {
      id: "faoliyat",
      title: "O'quvchi faoliyati",
      description:
        "O'quvchilar faol ishtirok etadigan topshiriqlar bor, faqat tinglash emas",
      maxPoints: 25,
    },
    {
      id: "baholash",
      title: "Baholash mosligi",
      description:
        "Baholash usuli aynan qo'yilgan maqsadni tekshiradi (konstruktiv moslashuv)",
      maxPoints: 25,
    },
  ],
};

const RUBRIKA_IJRO: Rubric = {
  criteria: [
    {
      id: "aniqlik",
      title: "Nota aniqligi",
      description: "Notalar va ritm xatosiz, to'xtashlarsiz ijro etilgan",
      maxPoints: 30,
    },
    {
      id: "temp",
      title: "Temp barqarorligi",
      description: "Temp boshidan oxirigacha bir xil saqlangan",
      maxPoints: 25,
    },
    {
      id: "tovush",
      title: "Tovush sifati",
      description: "Tovush toza, zarb erkin, dinamika mavjud",
      maxPoints: 25,
    },
    {
      id: "ifoda",
      title: "Musiqiy ifoda",
      description: "Ohangning mazmuni yetkazilgan, iboralar ajratilgan",
      maxPoints: 20,
    },
  ],
};

const RUBRIKA_TAHLIL: Rubric = {
  criteria: [
    {
      id: "shakl",
      title: "Shakl tahlili",
      description: "Asarning tuzilmasi va qismlari to'g'ri aniqlangan",
      maxPoints: 30,
    },
    {
      id: "garmoniya",
      title: "Lad va garmoniya",
      description: "Tonallik, lad asosi va asosiy garmonik burilishlar ko'rsatilgan",
      maxPoints: 30,
    },
    {
      id: "xulosa",
      title: "Xulosa asoslanganligi",
      description: "Fikrlar asar matnidagi aniq misollar bilan asoslangan",
      maxPoints: 40,
    },
  ],
};

/**
 * Refleksiv va tahliliy yozma ishlar uchun rubrika.
 *
 * `RUBRIKA_TAHLIL` musiqa asarini tahlil qilishga mo'ljallangan; bu esa
 * pedagogik matnlar uchun — kuzatuv varaqasi, teskari aloqa tahlili,
 * refleksiv esse. Farqi mezonlarda: bu yerda dalil asar matnidan emas,
 * dars amaliyotidan olinadi.
 */
const RUBRIKA_REFLEKSIYA: Rubric = {
  criteria: [
    {
      id: "aniqlik",
      title: "Kuzatuvning aniqligi",
      description:
        "Fikrlar umumiy emas: aniq lahza, aniq xatti-harakat va uning ta'siri ko'rsatilgan",
      maxPoints: 30,
    },
    {
      id: "asos",
      title: "Nazariy asos",
      description:
        "Xulosalar o'rganilgan tamoyillarga (Blum, konstruktiv moslashuv, ZPD) bog'langan",
      maxPoints: 25,
    },
    {
      id: "oztahlil",
      title: "O'z-o'zini tahlil",
      description:
        "Muvaffaqiyat ham, kamchilik ham ko'rsatilgan; sabab izlangan, bahona emas",
      maxPoints: 25,
    },
    {
      id: "keyingi",
      title: "Keyingi qadam",
      description: "Aniq, bajariladigan va o'lchanadigan vazifa belgilangan",
      maxPoints: 20,
    },
  ],
};

/**
 * Raqamli mahsulot (partitura, audio, aranjirovka) uchun rubrika.
 *
 * Bu yerda texnik bajarilish ham, pedagogik maqsadga moslik ham
 * baholanadi: chiroyli qilingan, lekin darsda ishlatib bo'lmaydigan
 * mahsulot maqsadga xizmat qilmaydi.
 */
const RUBRIKA_TEXNOLOGIYA: Rubric = {
  criteria: [
    {
      id: "texnik",
      title: "Texnik bajarilish",
      description:
        "Fayl to'g'ri formatda, toza va xatosiz; nota yozuvida kalit, o'lchov va davomiyliklar to'g'ri",
      maxPoints: 30,
    },
    {
      id: "maqsad",
      title: "Pedagogik maqsadga moslik",
      description:
        "Mahsulot aniq dars vazifasini bajaradi va sinf imkoniyatiga mos keladi",
      maxPoints: 30,
    },
    {
      id: "mustaqillik",
      title: "Mustaqillik va o'zlashtirish",
      description:
        "Vositaning imkoniyatlari ongli ishlatilgan (transpozitsiya, partiyalar, normalizatsiya)",
      maxPoints: 20,
    },
    {
      id: "huquq",
      title: "Manba va litsenziya",
      description:
        "Ishlatilgan materialning manbasi ko'rsatilgan va undan foydalanishga ruxsat bor",
      maxPoints: 20,
    },
  ],
};

/**
 * Ovoz sozlashni o'tkazish — bu yerda ijro emas, **boshqaruv** baholanadi:
 * mashqning o'zi to'g'ri bo'lsa ham, uni noto'g'ri olib borish ovozga zarar
 * yetkazadi.
 */
const RUBRIKA_OVOZ: Rubric = {
  criteria: [
    {
      id: "nafas",
      title: "Nafas texnikasi",
      description:
        "Nafas diafragmal: yelka ko'tarilmaydi, chiqarish teng va uzoq; namoyish to'g'ri ko'rsatilgan",
      maxPoints: 25,
    },
    {
      id: "ketmaketlik",
      title: "Mashqlar ketma-ketligi",
      description:
        "Tartib mantiqiy: tana — nafas — yopiq tovush — unlilar — gamma — matn; har mashqda bitta vazifa",
      maxPoints: 25,
    },
    {
      id: "diapazon",
      title: "Diapazon va dinamika nazorati",
      description:
        "O'rta tovushdan boshlangan, ikki tomonga harakatlangan, dinamika past saqlangan",
      maxPoints: 25,
    },
    {
      id: "boshqaruv",
      title: "Guruhni boshqarish",
      description:
        "Ko'rsatib berish, kirish ishorasi va vaqt chegarasi (5–7 daqiqa) saqlangan",
      maxPoints: 25,
    },
  ],
};

/**
 * Mashq rejasi — asosiy baho **tashxisga** beriladi. Reja qanchalik chiroyli
 * yozilmasin, qiyin joy noto'g'ri aniqlangan bo'lsa u ishlamaydi.
 */
const RUBRIKA_MASHQ: Rubric = {
  criteria: [
    {
      id: "tashxis",
      title: "Tashxisning aniqligi",
      description:
        "Qiyin bo'lak aniq ko'rsatilgan (takt raqami bilan), «umuman qiyin» emas",
      maxPoints: 30,
    },
    {
      id: "sabab",
      title: "Sabab tahlili",
      description:
        "Qiyinlik sababi nomlangan: applikatura, sakrash, ritm, nota o'qish yoki siqilish",
      maxPoints: 25,
    },
    {
      id: "reja",
      title: "Rejaning bajarilishi",
      description:
        "Har bir sababga aniq harakat mos kelgan; boshlang'ich temp va tezlashtirish mezoni ko'rsatilgan",
      maxPoints: 25,
    },
    {
      id: "vaqt",
      title: "Vaqt taqsimoti",
      description:
        "Mashq vaqti bosqichlarga bo'lingan va taqsimot real; oxirgi takrorlash to'xtamasdan rejalashtirilgan",
      maxPoints: 20,
    },
  ],
};

/**
 * Jo'r baholanganda yakka ijro mezonlari ishlamaydi: bu yerda savol
 * «qanchalik yaxshi chaldi» emas, «kuylashga qanchalik qulay bo'ldi».
 */
const RUBRIKA_JOR: Rubric = {
  criteria: [
    {
      id: "garmoniya",
      title: "Garmoniya to'g'riligi",
      description:
        "Akkordlar ohangga mos, kadanslar joyida; T, S va D funksiyalari to'g'ri qo'llangan",
      maxPoints: 30,
    },
    {
      id: "faktura",
      title: "Faktura mosligi",
      description:
        "Tanlangan faktura qo'shiq xarakteriga mos; kuplet va naqarot farqlangan",
      maxPoints: 25,
    },
    {
      id: "kirish",
      title: "Kirish va temp",
      description:
        "Kirish tonallik va tempni aniq beradi; temp butun qo'shiq davomida barqaror",
      maxPoints: 25,
    },
    {
      id: "qollab",
      title: "Kuylashni qo'llab-quvvatlash",
      description:
        "Jo'r dinamikasi kuylashdan past; ohang bosib ketilmagan, kuylovchi erkin eshitiladi",
      maxPoints: 20,
    },
  ],
};

/**
 * Repertuar tanlovida eng muhimi — **asoslash**. To'g'ri tanlangan, lekin
 * tasodifan to'g'ri tanlangan qo'shiq keyingi safar xato tanlanadi.
 */
const RUBRIKA_REPERTUAR: Rubric = {
  criteria: [
    {
      id: "diapazon",
      title: "Diapazon hisobi",
      description:
        "Qo'shiqning eng past va eng baland notasi aniqlangan va yosh guruhi chegarasi bilan solishtirilgan",
      maxPoints: 30,
    },
    {
      id: "kochirish",
      title: "Transponirovka to'g'riligi",
      description:
        "Interval to'g'ri hisoblangan, yangi kalit belgilari ko'rsatilgan, ikkala chegara qayta tekshirilgan",
      maxPoints: 30,
    },
    {
      id: "mezonlar",
      title: "Qolgan mezonlar",
      description:
        "Matn, sakrashlar, nafas joylari va davomiylik bo'yicha baho berilgan",
      maxPoints: 20,
    },
    {
      id: "asos",
      title: "Tanlovning asoslanishi",
      description:
        "Nega aynan shu qo'shiq va shu tonallik — javob did bilan emas, mezonlar bilan berilgan",
      maxPoints: 20,
    },
  ],
};

/**
 * O'quv maqsadi — kichik matn, lekin butun darsni belgilaydi. Shuning uchun
 * u alohida baholanadi: maqsad noto'g'ri yozilgan bo'lsa, undan keyingi
 * hamma narsa ham noto'g'ri quriladi.
 */
const RUBRIKA_MAQSAD: Rubric = {
  criteria: [
    {
      id: "fel",
      title: "O'lchanadigan fe'l",
      description:
        "Maqsad kuzatiladigan fe'l bilan yozilgan («aniqlay oladi», «ijro eta oladi»), «biladi», «tushunadi» kabi noaniq fe'llar ishlatilmagan",
      maxPoints: 30,
    },
    {
      id: "bloom",
      title: "Blum darajasining mosligi",
      description:
        "Ko'rsatilgan daraja fe'lga va kutilayotgan natijaga mos; daraja sun'iy ko'tarilmagan",
      maxPoints: 25,
    },
    {
      id: "shart",
      title: "Shart va mezon",
      description:
        "Maqsadda bajarish sharti va muvaffaqiyat mezoni ko'rsatilgan (nima bilan, qanchalik aniq)",
      maxPoints: 25,
    },
    {
      id: "moslik",
      title: "Baholash bilan moslik",
      description:
        "Taklif qilingan baholash usuli aynan shu maqsadni tekshiradi (konstruktiv moslashuv)",
      maxPoints: 20,
    },
  ],
};

/**
 * Qo'shiq o'rgatishda baho **bosqichlar tartibiga** va aks-sado texnikasiga
 * beriladi — natijaviy ijroga emas. Sinf qanday kuylagani o'qituvchining
 * ishidan ko'ra ko'proq qo'shiq tanloviga bog'liq.
 */
const RUBRIKA_QOSHIQ: Rubric = {
  criteria: [
    {
      id: "tayyorgarlik",
      title: "Tayyorgarlik",
      description:
        "Tonallik sinf diapazoniga moslangan, qiyin joy oldindan aniqlangan va belgilab qo'yilgan",
      maxPoints: 25,
    },
    {
      id: "bosqichlar",
      title: "Bosqichlar ketma-ketligi",
      description:
        "Tanishtirish — matn — bo'lak-bo'lak — qiyin joy — birlashtirish — ifoda tartibi saqlangan, birortasi tashlab ketilmagan",
      maxPoints: 30,
    },
    {
      id: "aksado",
      title: "Aks-sado texnikasi",
      description:
        "Fraza ikki taktdan oshmagan, temp sekin, dinamika past; har takrorda bitta aniq vazifa qo'yilgan",
      maxPoints: 25,
    },
    {
      id: "xilmaxillik",
      title: "Takrorning xilma-xilligi",
      description:
        "Ayni material turli usulda takrorlangan: ritm bilan aytish, qo'l bilan chizish, qatorlar navbatlashishi",
      maxPoints: 20,
    },
  ],
};

/**
 * Farqlashtirish rubrikasi dissertatsiyaning o'zak g'oyasini o'lchaydi.
 * Shuning uchun undagi eng katta ball «miqdor emas, sifat» tamoyiliga
 * beriladi: vazifa hajmini kamaytirish farqlashtirish hisoblanmaydi.
 */
const RUBRIKA_FARQLASH: Rubric = {
  criteria: [
    {
      id: "diagnostika",
      title: "Diagnostikaga tayanish",
      description:
        "Darajalar taxmin bilan emas, aniq ma'lumotga (diagnostika, kuzatuv, oldingi natija) tayanib belgilangan",
      maxPoints: 25,
    },
    {
      id: "darajalar",
      title: "Darajalar sifati",
      description:
        "Har daraja uchun vazifaning turi va qo'llab-quvvatlash darajasi o'zgargan; faqat hajm kamaytirilmagan",
      maxPoints: 30,
    },
    {
      id: "yarz",
      title: "Yaqin rivojlanish zonasi",
      description:
        "Har bir vazifa o'z guruhi uchun yengil ham, yetib bo'lmas ham emas; yordam vaqtinchalik rejalashtirilgan",
      maxPoints: 25,
    },
    {
      id: "yaxlitlik",
      title: "Darsning yaxlitligi",
      description:
        "Turli darajadagi partiyalar bitta asarda birlashadi; hech bir guruh jarayondan chetda qolmaydi",
      maxPoints: 20,
    },
  ],
};

/**
 * Teskari aloqa rubrikasi matnning **shakliga** qaraydi: «aniq, xatti-
 * harakatga qaratilgan, bajarib bo'ladigan» mezonlari aynan shu yerda
 * tekshiriladi, chunki ularni o'quvchi yozgan matndan ko'rish mumkin.
 */
const RUBRIKA_FEEDBACK: Rubric = {
  criteria: [
    {
      id: "aniqlik",
      title: "Aniqlik",
      description:
        "Nima aynan ishladi va nima ishlamadi — takt, fraza yoki lahza ko'rsatilgan; «yaxshi», «bo'lmadi» kabi umumiy so'zlar yo'q",
      maxPoints: 30,
    },
    {
      id: "yonalish",
      title: "Xatti-harakatga qaratilganlik",
      description:
        "Baho ishga beriladi, shaxsga emas; qobiliyat yoki xarakter haqida hukm yo'q",
      maxPoints: 25,
    },
    {
      id: "qadam",
      title: "Keyingi qadam",
      description:
        "Bitta aniq, bajarib bo'ladigan qadam taklif qilingan; beshta tavsiya berilmagan",
      maxPoints: 25,
    },
    {
      id: "javob",
      title: "Javob uchun joy",
      description:
        "O'quvchiga tuzatib, qayta urinish imkoni rejalashtirilgan — teskari aloqa yakun emas, qadam",
      maxPoints: 20,
    },
  ],
};

/**
 * Fonogramma yakka ijro kabi baholanmaydi: u sahnada **bolalar bilan
 * birga** ishlashi kerak. Shuning uchun oxirgi mezon zalda sinashga
 * beriladi — naushnikda yaxshi eshitilgan fayl u yerda boshqacha chiqadi.
 */
const RUBRIKA_FONOGRAMMA: Rubric = {
  criteria: [
    {
      id: "asos",
      title: "Tonallik va temp",
      description:
        "Tonallik sinf diapazoniga moslangan, temp barqaror va hayajonni hisobga olgan holda vazmin olingan",
      maxPoints: 25,
    },
    {
      id: "tuzilma",
      title: "Tuzilma",
      description:
        "Tanib olinadigan kirish, kuplet va naqarot orasida aniq o'tish, tugalangan oxir mavjud",
      maxPoints: 25,
    },
    {
      id: "muvozanat",
      title: "Muvozanat",
      description:
        "Faktura qalin emas, dinamika kuylovchi ovozini bosmaydi; bas zalda ortib ketmaydi",
      maxPoints: 30,
    },
    {
      id: "tayyorlik",
      title: "Sahnaga tayyorlik",
      description:
        "Zalda sinalgan, ikki nusxada saqlangan, fayl nomida tonallik va temp ko'rsatilgan",
      maxPoints: 20,
    },
  ],
};

/**
 * Bu rubrika **qaror**ni baholaydi, mahsulotni emas. Shuning uchun eng
 * katta ball «yo'q demaslik» qiyin bo'lgan joyga — rad javobini hurmat
 * qilishga beriladi.
 */
const RUBRIKA_XAVFSIZLIK: Rubric = {
  criteria: [
    {
      id: "ruxsat",
      title: "Ruxsat masalasi",
      description:
        "Ruxsat yozma, aniq joy uchun va qaytarib olinadigan qilib tashkil etilgan; kimdan olinishi to'g'ri ko'rsatilgan",
      maxPoints: 25,
    },
    {
      id: "kamlik",
      title: "Ma'lumotning kamligi",
      description:
        "E'lon qilinadigan ma'lumot zarur minimumga tushirilgan: ism, manzil, geolokatsiya va boshqa tafsilotlar",
      maxPoints: 25,
    },
    {
      id: "rad",
      title: "Rad javobiga munosabat",
      description:
        "Bitta rad javobi butun materialga taalluqli ekani tushunilgan va amaliy yechim taklif qilingan",
      maxPoints: 30,
    },
    {
      id: "saqlash",
      title: "Saqlash va muddat",
      description:
        "Saqlash joyi, muddati va kimga ulashilgani oldindan belgilangan",
      maxPoints: 20,
    },
  ],
};

/**
 * Inklyuziv rejada eng muhimi — **ishtirok**. Shuning uchun «tomosha
 * qilish» hech qanday mezon bo'yicha ball olmaydi: yonida o'tirish
 * ishtirok emas.
 */
const RUBRIKA_INKLYUZIYA: Rubric = {
  criteria: [
    {
      id: "manba",
      title: "Ma'lumotga tayanish",
      description:
        "Reja taxminga emas, mutaxassis yoki sinf rahbari bergan ma'lumotga tayangan",
      maxPoints: 20,
    },
    {
      id: "ishtirok",
      title: "Haqiqiy ishtirok",
      description:
        "Bola uchun aniq musiqiy faoliyat belgilangan — tinglash yoki kuzatish emas",
      maxPoints: 35,
    },
    {
      id: "moslashtirish",
      title: "Moslashtirishning mosligi",
      description:
        "Tanlangan yechim aynan shu ehtiyojga javob beradi (tebranish, ko'rish signali, og'zaki tasvir, qisqa vazifa)",
      maxPoints: 25,
    },
    {
      id: "sinf",
      title: "Sinf bilan yaxlitlik",
      description:
        "Moslashtirish bolani ajratib qo'ymaydi: u umumiy ishning bir qismi bo'lib qoladi",
      maxPoints: 20,
    },
  ],
};

/**
 * Tadbir rejasida eng ko'p unutiladigan narsa — **zaxira reja**. Shuning
 * uchun u alohida mezon sifatida ajratilgan: fonogramma ishlamasligi
 * kutilmagan holat emas, kutiladigan holat.
 */
const RUBRIKA_TADBIR: Rubric = {
  criteria: [
    {
      id: "reja",
      title: "Orqaga qarab rejalashtirish",
      description:
        "Sanadan ortga hisoblangan jadval bor: repertuar muddati, repetitsiyalar, zalda sinash",
      maxPoints: 25,
    },
    {
      id: "ishtirok",
      title: "Ishtirok taqsimoti",
      description:
        "Har bir bolaning o'z o'rni bor; «fon» roli yo'q, partiyalar daraja bo'yicha taqsimlangan",
      maxPoints: 25,
    },
    {
      id: "sahna",
      title: "Sahna tartibi",
      description:
        "Chiqish-qaytish tartibi, navbat ro'yxati, rekvizit joylashuvi va pauza uzunligi yozilgan",
      maxPoints: 25,
    },
    {
      id: "zaxira",
      title: "Zaxira reja",
      description:
        "Fonogramma, yakkaxon, mikrofon va elektr bo'yicha muqobil yechimlar oldindan tayyorlangan",
      maxPoints: 25,
    },
  ],
};

/**
 * Etika holatlarida «to'g'ri javob» ro'yxatini yodlash ish bermaydi.
 * Shuning uchun baho **asoslashga** beriladi: qaysi tamoyilga tayanib
 * shunday qaror qilindi va uni kimga qanday tushuntirish mumkin.
 */
const RUBRIKA_ETIKA: Rubric = {
  criteria: [
    {
      id: "chegara",
      title: "Chegarani ko'rish",
      description:
        "Holatdagi kasbiy chegara aniq nomlangan va u qayerda buzilishi mumkinligi ko'rsatilgan",
      maxPoints: 30,
    },
    {
      id: "qaror",
      title: "Qarorning amaliyligi",
      description:
        "Taklif qilingan harakat bajarib bo'ladigan va maktab sharoitiga mos",
      maxPoints: 25,
    },
    {
      id: "asos",
      title: "Asoslash",
      description:
        "Qaror «shunday to'g'ri» emas, tamoyil bilan asoslangan; uchinchi shaxsga tushuntirib bo'ladi",
      maxPoints: 25,
    },
    {
      id: "himoya",
      title: "Bolaning himoyasi",
      description:
        "Qaror avvalo bolaning manfaatini himoya qiladi, o'qituvchining qulayligini emas",
      maxPoints: 20,
    },
  ],
};

/**
 * Portfolio rubrikasi **tanlov**ni baholaydi. Ko'p material yig'ish oson,
 * shuning uchun hajm ball bermaydi: har bir dalil nimani isbotlashi
 * kerakligi ko'rsatilgan bo'lsin.
 */
const RUBRIKA_PORTFOLIO: Rubric = {
  criteria: [
    {
      id: "tanlov",
      title: "Dalillar tanlovi",
      description:
        "Har bir material nimani isbotlashi izohlangan; takrorlanuvchi va tasodifiy fayllar yo'q",
      maxPoints: 30,
    },
    {
      id: "osish",
      title: "O'sishning ko'rinishi",
      description:
        "Boshlang'ich va keyingi holat solishtirilgan; muvaffaqiyatsiz tajriba ham xulosasi bilan berilgan",
      maxPoints: 25,
    },
    {
      id: "hisobot",
      title: "Hisobotning tuzilmasi",
      description:
        "Kontekst, maqsad, natija, qiyinchilik va keyingi qadam bor; har xulosa aniq materialga tayanadi",
      maxPoints: 25,
    },
    {
      id: "axloq",
      title: "Ruxsat va ismsizlik",
      description:
        "O'quvchi materiallari ruxsat bilan va ismsiz berilgan",
      maxPoints: 20,
    },
  ],
};

export const TOPSHIRIQLAR: Task[] = [
  {
    id: "task-nota-test",
    slug: "nota-savodi-test",
    title: "Nota savodi bo'yicha test",
    description:
      "Nota chiziqlari, kalitlar va alteratsiya belgilari bo'yicha bilimni tekshiradi.",
    type: "test",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-1",
    area: "nazariya",
    bloom: "bilish",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "tt1",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "Skripka kaliti qaysi chiziqdan boshlanadi?",
        options: [
          { id: "a", text: "1-chiziq" },
          { id: "b", text: "2-chiziq" },
          { id: "c", text: "3-chiziq" },
          { id: "d", text: "4-chiziq" },
        ],
        correctId: "b",
        explanation: "Skripka (sol) kaliti 2-chiziqdan boshlanadi.",
      },
      {
        id: "tt2",
        area: "nazariya",
        bloom: "tushunish",
        kind: "single",
        prompt: "Bemol belgisi tovushni qanday o'zgartiradi?",
        options: [
          { id: "a", text: "Yarim tonga ko'taradi" },
          { id: "b", text: "Yarim tonga tushiradi" },
          { id: "c", text: "Bir tonga ko'taradi" },
          { id: "d", text: "O'zgartirmaydi" },
        ],
        correctId: "b",
      },
      {
        id: "tt3",
        area: "nazariya",
        bloom: "qollash",
        kind: "multiple",
        prompt: "Qaysilari kalit belgisi bo'la oladi?",
        options: [
          { id: "a", text: "Diez" },
          { id: "b", text: "Bemol" },
          { id: "c", text: "Bekar" },
          { id: "d", text: "Fermata" },
        ],
        correctIds: ["a", "b"],
        explanation:
          "Kalit belgisi sifatida faqat diez va bemol yoziladi.",
      },
      {
        id: "tt4",
        area: "nazariya",
        bloom: "tushunish",
        kind: "single",
        prompt: "Takt ichida qo'yilgan alteratsiya belgisi qancha amal qiladi?",
        options: [
          { id: "a", text: "Faqat o'sha notaga" },
          { id: "b", text: "Shu takt oxirigacha" },
          { id: "c", text: "Butun asar davomida" },
          { id: "d", text: "Keyingi taktgacha" },
        ],
        correctId: "b",
      },
      {
        id: "tt5",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "Nota stani nechta chiziqdan iborat?",
        options: [
          { id: "a", text: "4" },
          { id: "b", text: "5" },
          { id: "c", text: "6" },
          { id: "d", text: "7" },
        ],
        correctId: "b",
      },
    ],
  },

  {
    id: "task-dutor-mashq",
    slug: "dutor-amaliy-mashq",
    title: "Dutor uchun amaliy mashq",
    description:
      "Dutorda barmoq mashqlarini bajarib, natijani yozib oling va topshiring.",
    type: "mashq",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-1",
    area: "texnika",
    bloom: "qollash",
    duration: "20 daqiqa",
    submission: "ijro",
    instrument: "dutor",
    exerciseId: "d-barmoq",
  },

  {
    id: "task-dars-ishlanma",
    slug: "dars-ishlanmasi",
    title: "Dars ishlanmasi loyihasi",
    description:
      "5-sinf uchun to'liq musiqa darsi ishlanmasini tuzing: maqsad, bosqichlar, faoliyat va baholash.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-3",
    area: "metodika",
    bloom: "sintez",
    duration: "1 hafta",
    submission: "fayl",
    accept: ".pdf,.doc,.docx,.odt",
    rubric: RUBRIKA_DARS,
  },

  {
    id: "task-asar-tahlil",
    slug: "musiqa-asarlari-tahlili",
    title: "Musiqa asarlari tahlili",
    description:
      "Tanlagan asarning shakli, ladi va garmonik tuzilishini yozma tahlil qiling.",
    type: "loyiha",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-4",
    area: "nazariya",
    bloom: "tahlil",
    duration: "30 daqiqa",
    timerMin: 30,
    submission: "matn",
    rubric: RUBRIKA_TAHLIL,
  },

  {
    id: "task-ritm-test",
    slug: "ritm-va-olchov-test",
    title: "Ritm va o'lchov testi",
    description: "Davomiyliklar, o'lchov belgilari va sinkopa bo'yicha test.",
    type: "test",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-2",
    area: "ritm",
    bloom: "tushunish",
    duration: "10 daqiqa",
    timerMin: 10,
    submission: "test",
    questions: [
      {
        id: "rt1",
        area: "ritm",
        bloom: "bilish",
        kind: "single",
        prompt: "6/8 o'lchovda bir taktda nechta sakkizlik nota bor?",
        options: [
          { id: "a", text: "3" },
          { id: "b", text: "4" },
          { id: "c", text: "6" },
          { id: "d", text: "8" },
        ],
        correctId: "c",
      },
      {
        id: "rt2",
        area: "ritm",
        bloom: "tushunish",
        kind: "single",
        prompt: "Metronom 120 BPM da bir zarb qancha davom etadi?",
        options: [
          { id: "a", text: "0,25 s" },
          { id: "b", text: "0,5 s" },
          { id: "c", text: "1 s" },
          { id: "d", text: "2 s" },
        ],
        correctId: "b",
        explanation: "120 zarb / 60 soniya = 2 zarb bir soniyada, demak har biri 0,5 s.",
      },
      {
        id: "rt3",
        area: "ritm",
        bloom: "tahlil",
        kind: "single",
        prompt: "Sinkopa nimani anglatadi?",
        options: [
          { id: "a", text: "Tempning o'zgarishi" },
          { id: "b", text: "Urg'uning kuchsiz zarbga ko'chishi" },
          { id: "c", text: "Pauzaning uzayishi" },
          { id: "d", text: "O'lchovning almashishi" },
        ],
        correctId: "b",
      },
    ],
  },

  {
    id: "task-ijro-yozuv",
    slug: "ijro-yozuvi",
    title: "Ijro yozuvini topshirish",
    description:
      "O'rgangan asaringizni virtual cholg'uda ijro eting, yozib oling va rubrika bo'yicha baholash uchun topshiring.",
    type: "ijro",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-4",
    area: "sahna",
    bloom: "tahlil",
    duration: "25 daqiqa",
    submission: "ijro",
    instrument: "pianino",
    exerciseId: "p-oddiy-kuy",
    rubric: RUBRIKA_IJRO,
  },

  {
    id: "task-doira-ritm",
    slug: "doira-ritm-mashq",
    title: "Doirada ritm mashqi",
    description:
      "Murakkab ritm naqshini eshiting va takrorlang. Natija vaqt aniqligi bo'yicha avtomatik baholanadi.",
    type: "mashq",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-2",
    area: "ritm",
    bloom: "qollash",
    duration: "15 daqiqa",
    submission: "ijro",
    instrument: "doira",
    exerciseId: "doira-murakkab",
  },

  {
    id: "task-metodika-test",
    slug: "baholash-testi",
    title: "Baholash bo'yicha test",
    description:
      "Shakllantiruvchi va yakuniy baholash farqi, rubrikaning vazifasi va teskari aloqa qoidalari bo'yicha test.",
    type: "test",
    moduleId: "mod-metodika",
    outcomeId: "on-met-10",
    area: "metodika",
    bloom: "tushunish",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "mt1",
        area: "metodika",
        bloom: "tushunish",
        kind: "single",
        prompt:
          "Baholashning formativ yoki summativ ekanini nima belgilaydi?",
        options: [
          { id: "a", text: "Ball qo'yilgani" },
          { id: "b", text: "O'quvchiga tuzatib, qayta urinish imkoni qolgani" },
          { id: "c", text: "Baholash yozma bo'lgani" },
          { id: "d", text: "Jurnalga yozilgani" },
        ],
        correctId: "b",
        explanation:
          "Formativ baholash jarayon ichida turadi va o'rganishni o'zgartiradi; summativ baholash natijani qayd etadi.",
      },
      {
        id: "mt2",
        area: "metodika",
        bloom: "tushunish",
        kind: "single",
        prompt: "Rubrikaning asosiy foydasi nimada?",
        options: [
          { id: "a", text: "Baho qo'yishni tezlashtiradi" },
          { id: "b", text: "Baholashni shaffof va oldindan ma'lum qiladi" },
          { id: "c", text: "O'quvchilarni taqqoslaydi" },
          { id: "d", text: "Hujjat talabini bajaradi" },
        ],
        correctId: "b",
      },
      {
        id: "mt3",
        area: "metodika",
        bloom: "qollash",
        kind: "multiple",
        prompt: "Formativ baholashga nimalar kiradi?",
        options: [
          { id: "a", text: "Dars davomidagi qisqa savollar" },
          { id: "b", text: "Yakuniy imtihon" },
          { id: "c", text: "O'zaro baholash" },
          { id: "d", text: "Mashq paytidagi qaytar aloqa" },
        ],
        correctIds: ["a", "c", "d"],
        explanation:
          "Yakuniy imtihon — summativ baholash; qolganlari o'quv jarayoni davomida yo'naltiradi.",
      },
    ],
  },

  {
    id: "task-interval-yozuv",
    slug: "interval-yozuv-testi",
    title: "Interval yozuvi testi",
    description:
      "Berilgan ohangda intervallarni aniqlash va ularni nota yozuvida to'g'ri ko'rsatish.",
    type: "test",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-3",
    area: "nazariya",
    bloom: "qollash",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "iy1",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt: "Do va mi notalari orasidagi interval qanday ataladi?",
        options: [
          { id: "a", text: "Katta tersiya" },
          { id: "b", text: "Kichik tersiya" },
          { id: "c", text: "Kvarta" },
          { id: "d", text: "Sekunda" },
        ],
        correctId: "a",
        explanation: "Do–mi orasida ikki butun ton bor — bu katta tersiya.",
      },
      {
        id: "iy2",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt: "Do va fa orasidagi interval nechta yarim tondan iborat?",
        options: [
          { id: "a", text: "To'rtta" },
          { id: "b", text: "Beshta" },
          { id: "c", text: "Oltita" },
          { id: "d", text: "Yettita" },
        ],
        correctId: "b",
        explanation: "Sof kvarta — besh yarim ton (do–do♯–re–re♯–mi–fa).",
      },
      {
        id: "iy3",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt:
          "Re notasidan yuqoriga sof kvinta qurilsa, yuqorigi nota qaysi bo'ladi?",
        options: [
          { id: "a", text: "Lya" },
          { id: "b", text: "Sol" },
          { id: "c", text: "Si" },
          { id: "d", text: "Do" },
        ],
        correctId: "a",
        explanation: "Sof kvinta — yetti yarim ton; re dan yetti yarim ton yuqorida lya turadi.",
      },
      {
        id: "iy4",
        area: "nazariya",
        bloom: "qollash",
        kind: "multiple",
        prompt: "Sof intervallarni tanlang.",
        options: [
          { id: "a", text: "Prima" },
          { id: "b", text: "Tersiya" },
          { id: "c", text: "Kvarta" },
          { id: "d", text: "Kvinta" },
          { id: "e", text: "Oktava" },
        ],
        correctIds: ["a", "c", "d", "e"],
        explanation:
          "Prima, kvarta, kvinta va oktava sof bo'ladi; sekunda, tersiya, seksta va septima katta yoki kichik bo'ladi.",
      },
      {
        id: "iy5",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt:
          "Nota yozuvida mi va sol orasidagi intervalni yozmoqchisiz. Qaysi ta'rif to'g'ri?",
        options: [
          { id: "a", text: "Katta tersiya, to'rt yarim ton" },
          { id: "b", text: "Kichik tersiya, uch yarim ton" },
          { id: "c", text: "Sof kvarta, besh yarim ton" },
          { id: "d", text: "Katta sekunda, ikki yarim ton" },
        ],
        correctId: "b",
        explanation:
          "Mi–fa orasida yarim ton, fa–sol orasida butun ton — jami uch yarim ton, ya'ni kichik tersiya.",
      },
      {
        id: "iy6",
        area: "eshituv",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Ohangda ketma-ket do–mi–sol tovushlari yangradi. Bu nima?",
        options: [
          { id: "a", text: "Minor trezvuchiye" },
          { id: "b", text: "Major trezvuchiye" },
          { id: "c", text: "Kvarta-kvinta ketma-ketligi" },
          { id: "d", text: "Xromatik qator" },
        ],
        correctId: "b",
        explanation:
          "Do–mi katta tersiya, mi–sol kichik tersiya — bu major trezvuchiyening tuzilishi.",
      },
    ],
  },

  {
    id: "task-maqom-tahlil",
    slug: "maqom-namunasi-tahlili",
    title: "Maqom namunasi tahlili",
    description:
      "Tanlagan maqom namunasini lad asosida yozma tahlil qiling: tovushqator, tayanch tovush, avj va usul. Tahlilni asar matnidagi aniq joylarga tayanib asoslang.",
    type: "loyiha",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-5",
    area: "nazariya",
    bloom: "tahlil",
    duration: "40 daqiqa",
    timerMin: 40,
    submission: "matn",
    rubric: RUBRIKA_TAHLIL,
  },


  {
    id: "task-ansambl-ijro",
    slug: "ansambl-ijrosi",
    title: "Ansambl ijrosi",
    description:
      "Ikki partiyali qisqa asar tayyorlang: avval jo'r partiyani yozib oling, so'ng uning ustiga asosiy ohangni chaling. Muvozanat va birga kirishga alohida e'tibor bering.",
    type: "ijro",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-3",
    area: "ritm",
    bloom: "qollash",
    duration: "30 daqiqa",
    submission: "ijro",
    instrument: "gitara",
    exerciseId: "g-akkordlar",
    rubric: RUBRIKA_IJRO,
  },

  {
    id: "task-sahna-ijro",
    slug: "sahna-ijrosi",
    title: "Sahna ijrosi",
    description:
      "Tanlagan asarni boshidan oxirigacha to'xtamasdan ijro eting va yozib oling. Baholashda xatoning o'zi emas, undan keyin ijroni davom ettira olish ham hisobga olinadi — sahnada to'xtab qolish eng katta kamchilik.",
    type: "ijro",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-5",
    area: "sahna",
    bloom: "qollash",
    duration: "20 daqiqa",
    submission: "ijro",
    instrument: "dutor",
    exerciseId: "d-erkin",
    rubric: RUBRIKA_IJRO,
  },


  {
    id: "task-dars-tuzilmasi-test",
    slug: "dars-tuzilmasi-testi",
    title: "Dars tuzilmasi testi",
    description:
      "Musiqa darsining bosqichlari, vaqt taqsimoti va faoliyat turlari bo'yicha test.",
    type: "test",
    moduleId: "mod-metodika",
    outcomeId: "on-met-1",
    area: "metodika",
    bloom: "bilish",
    duration: "12 daqiqa",
    timerMin: 12,
    submission: "test",
    questions: [
      {
        id: "dt1",
        area: "metodika",
        bloom: "bilish",
        kind: "single",
        prompt: "45 daqiqalik musiqa darsi odatda nechta bosqichdan iborat?",
        options: [
          { id: "a", text: "Ikkita" },
          { id: "b", text: "Uchta" },
          { id: "c", text: "Beshta" },
          { id: "d", text: "O'nta" },
        ],
        correctId: "c",
      },
      {
        id: "dt2",
        area: "metodika",
        bloom: "tushunish",
        kind: "single",
        prompt: "Tashkiliy qism va musiqiy salomlashuvning vazifasi nima?",
        options: [
          { id: "a", text: "Yangi material berish" },
          { id: "b", text: "Diqqatni yig'ish va ovozni uyg'otish" },
          { id: "c", text: "Baho qo'yish" },
          { id: "d", text: "Uyga vazifa berish" },
        ],
        correctId: "b",
      },
      {
        id: "dt3",
        area: "metodika",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Darsda 30 daqiqa nazariya tushuntirildi va 5 daqiqa kuylandi. Asosiy kamchilik nima?",
        options: [
          { id: "a", text: "Takrorlash bosqichi yo'q" },
          { id: "b", text: "Amaliy faoliyatga vaqt yetmagan" },
          { id: "c", text: "Dars juda qisqa" },
          { id: "d", text: "Uyga vazifa berilmagan" },
        ],
        correctId: "b",
        explanation:
          "Musiqa darsida amaliy faoliyat yangi materialdan kam vaqt olmaydi — aks holda u ma'ruzaga aylanadi.",
      },
      {
        id: "dt4",
        area: "metodika",
        bloom: "qollash",
        kind: "single",
        prompt:
          "Boshlang'ich sinfda bitta faoliyat turi qancha davom etgani ma'qul?",
        options: [
          { id: "a", text: "2–3 daqiqa" },
          { id: "b", text: "7–10 daqiqa" },
          { id: "c", text: "15–20 daqiqa" },
          { id: "d", text: "Butun dars davomida" },
        ],
        correctId: "b",
      },
      {
        id: "dt5",
        area: "metodika",
        bloom: "bilish",
        kind: "multiple",
        prompt: "Musiqa darsidagi faoliyat turlarini tanlang.",
        options: [
          { id: "a", text: "Tinglash va musiqa haqida gapirish" },
          { id: "b", text: "Kuylash" },
          { id: "c", text: "Ritmik va harakatli mashqlar" },
          { id: "d", text: "Cholg'uda chalish" },
          { id: "e", text: "Ijodiy faoliyat" },
        ],
        correctIds: ["a", "b", "c", "d", "e"],
      },
      {
        id: "dt6",
        area: "metodika",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Ishlanmadagi bosqichlar jadvalining «O'quvchi» ustuni bo'sh. Bu nimani ko'rsatadi?",
        options: [
          { id: "a", text: "Jadval shakli noto'g'ri tanlangan" },
          { id: "b", text: "Shu bosqichda o'quvchi passiv" },
          { id: "c", text: "O'qituvchi yaxshi tayyorlangan" },
          { id: "d", text: "Hech narsani" },
        ],
        correctId: "b",
      },
    ],
  },

  {
    id: "task-mikro-dars",
    slug: "mikro-dars-otkazish",
    title: "Mikro-dars o'tkazish",
    description:
      "10–15 daqiqalik dars bo'lagini o'tkazing va yozib oling. Ishni ikki qismda topshiring: birinchi urinish, guruhdoshlar teskari aloqasi va tuzatilgan ikkinchi urinish. Baholashda ikkinchi urinishdagi o'zgarish alohida hisobga olinadi.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-4",
    area: "metodika",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "fayl",
    accept: ".mp4,.mov,.mp3,.m4a,.pdf",
    rubric: RUBRIKA_DARS,
  },

  {
    id: "task-rubrika-tuzish",
    slug: "rubrika-tuzish",
    title: "Baholash rubrikasini tuzish",
    description:
      "O'zingiz tanlagan ijodiy topshiriq uchun 3–5 mezonli rubrika tuzing. Har bir mezon uchun eng past va eng yuqori darajaning ta'rifini yozing va mezonlarning og'irligini asoslang. Ta'riflar kuzatiladigan tilda bo'lishi shart.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-5",
    area: "metodika",
    bloom: "baholash",
    duration: "45 daqiqa",
    timerMin: 45,
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },


  {
    id: "task-partitura",
    slug: "partitura-tayyorlash",
    title: "Partitura tayyorlash",
    description:
      "Nota yozuv dasturida 8–16 taktli ikki partiyali partitura tayyorlang: kalit, o'lchov, tonallik va ifoda belgilari bilan. Ish faylini va PDF ni birga topshiring. Erkin dastur (masalan MuseScore) yetarli.",
    type: "loyiha",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-1",
    area: "nazariya",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "fayl",
    accept: ".pdf,.mscz,.musicxml,.xml,.mid",
    rubric: RUBRIKA_TEXNOLOGIYA,
  },

  {
    id: "task-audio-tahrir",
    slug: "audio-tahrirlash",
    title: "Audio yozuvni darsga tayyorlash",
    description:
      "O'z ijrongizni yozib oling va darsda ishlatishga tayyorlang: ortiqcha qismni kesing, balandlikni tenglang, kirish va chiqishni silliqlang, 192 kbit/s MP3 ga eksport qiling. Tahrirdan oldingi va keyingi faylni birga topshiring.",
    type: "loyiha",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-2",
    area: "ijodkorlik",
    bloom: "qollash",
    duration: "45 daqiqa",
    submission: "fayl",
    accept: ".mp3,.wav,.m4a,.ogg",
    rubric: RUBRIKA_TEXNOLOGIYA,
  },

  {
    id: "task-vosita-tanlovi",
    slug: "raqamli-vosita-tanlovi",
    title: "Raqamli vositani tanlash va asoslash",
    description:
      "Aniq bir dars mavzusini oling va unga raqamli vosita tanlang. Tanlovni asoslang: vosita qaysi o'quv maqsadiga xizmat qiladi, uning o'rniga nima ishlatish mumkin edi va nega aynan shu yaxshiroq. Narxi, litsenziyasi va maktab sharoitidagi imkoniyatini ham hisobga oling.",
    type: "loyiha",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-3",
    area: "ijodkorlik",
    bloom: "baholash",
    duration: "30 daqiqa",
    timerMin: 30,
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },

  {
    id: "task-aranjirovka",
    slug: "aranjirovka-loyihasi",
    title: "Aranjirovka loyihasi",
    description:
      "Tanish ohangni sinf ansambli uchun aranjirovka qiling. Kamida uch qatlam bo'lsin (ohang, jo'r, ritm) va partiyalar darajalangan bo'lsin: endi boshlagan o'quvchi uchun ham, kuchli o'quvchi uchun ham partiya bo'lsin. Partitura va qisqa izoh topshiriladi.",
    type: "loyiha",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-4",
    area: "ijodkorlik",
    bloom: "sintez",
    duration: "2 hafta",
    submission: "fayl",
    accept: ".pdf,.mscz,.musicxml,.xml,.mp3",
    rubric: RUBRIKA_TEXNOLOGIYA,
  },


  {
    id: "task-kuzatuv-varaqasi",
    slug: "dars-kuzatuv-varaqasi",
    title: "Dars kuzatuv varaqasi",
    description:
      "Tajribali o'qituvchining bitta darsini kuzatib, mezonlar bo'yicha yozma tahlil tayyorlang: darsning maqsadi, bosqichlari va vaqt taqsimoti, qo'llangan kamida uchta metodik usul va ularning ta'siri, hamda bitta kutilmagan vaziyat va o'qituvchining javobi.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-1",
    area: "metodika",
    bloom: "tahlil",
    duration: "45 daqiqa",
    timerMin: 45,
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },

  {
    id: "task-mikro-dars-ijro",
    slug: "mikro-dars-ijrosi",
    title: "Mikro-dars o'tkazish (amaliyot)",
    description:
      "Haqiqiy yoki o'quv guruhida 10–15 daqiqalik dars bo'lagini mustaqil o'tkazing va yozib oling. Yozuv bilan birga qisqa izoh topshiring: maqsad nima edi, unga erishildimi va buni qanday bildingiz.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-2",
    area: "metodika",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "fayl",
    accept: ".mp4,.mov,.mp3,.m4a,.pdf",
    rubric: RUBRIKA_DARS,
  },

  {
    id: "task-mustaqil-dars",
    slug: "mustaqil-dars",
    title: "To'liq darsni mustaqil o'tkazish",
    description:
      "To'liq darsni mustaqil loyihalang va o'tkazing. Uch hujjat topshiriladi: ishlanma (Reja B va zaxira bilan), dars yozuvi yoki mentor kuzatuv varaqasi, va darsdan keyin darhol yozilgan tahlil.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-3",
    area: "metodika",
    bloom: "sintez",
    duration: "2 hafta",
    submission: "fayl",
    accept: ".pdf,.doc,.docx,.odt,.mp4,.mov",
    rubric: RUBRIKA_DARS,
  },

  {
    id: "task-feedback-tahlili",
    slug: "teskari-aloqa-tahlili",
    title: "Mentor teskari aloqasining tahlili",
    description:
      "Mentordan olgan teskari aloqangizni tahlil qiling: har bir fikrni xatti-harakat yoki did sifatida ajrating, ikkitasini keyingi dars uchun tanlang va tanlovingizni asoslang. Qaysi fikr bilan rozi bo'lmaganingizni ham yozing — sababi bilan.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-4",
    area: "motivatsiya",
    bloom: "baholash",
    duration: "30 daqiqa",
    timerMin: 30,
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },

  {
    id: "task-refleksiv-esse",
    slug: "refleksiv-esse",
    title: "Amaliyot bo'yicha refleksiv esse",
    description:
      "Pedagogik amaliyot yakunida refleksiv esse yozing. To'rt qismni saqlang: aniq dalil bilan tasvir, sabab, nazariy bog'lanish (ZPD, Blum, konstruktiv moslashuv) va keyingi qadam. Kamida bitta muvaffaqiyatni ham tahlil qiling — nega ishlaganini tushuntiring.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-5",
    area: "motivatsiya",
    bloom: "baholash",
    duration: "1 soat",
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },


  {
    id: "task-lad-tonallik-test",
    slug: "lad-va-tonallik-testi",
    title: "Lad va tonallik testi",
    description:
      "Major va minor tuzilishi, parallel va bir nomli tonalliklar, kvinta doirasi va kalit belgilari bo'yicha test.",
    type: "test",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-6",
    area: "nazariya",
    bloom: "tushunish",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "lt1",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "Natural major gammasining tuzilishi qanday?",
        options: [
          { id: "a", text: "butun-butun-yarim-butun-butun-butun-yarim" },
          { id: "b", text: "butun-yarim-butun-butun-yarim-butun-butun" },
          { id: "c", text: "yarim-butun-butun-yarim-butun-butun-butun" },
          { id: "d", text: "Barcha masofalar teng" },
        ],
        correctId: "a",
      },
      {
        id: "lt2",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt: "Fa majorning kalitida nechta va qanday belgi bor?",
        options: [
          { id: "a", text: "Bitta diez (fa♯)" },
          { id: "b", text: "Bitta bemol (si♭)" },
          { id: "c", text: "Ikkita bemol" },
          { id: "d", text: "Belgi yo'q" },
        ],
        correctId: "b",
        explanation:
          "Bitta bemolli tonallik — fa major; uning paralleli re minor.",
      },
      {
        id: "lt3",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt: "Sol majorning parallel minori qaysi?",
        options: [
          { id: "a", text: "Mi minor" },
          { id: "b", text: "Sol minor" },
          { id: "c", text: "Re minor" },
          { id: "d", text: "Lya minor" },
        ],
        correctId: "a",
        explanation:
          "Parallel minor major tonikasidan kichik tersiya pastda: sol dan mi gacha.",
      },
      {
        id: "lt4",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "Bemollar kalitda qanday tartibda qo'yiladi?",
        options: [
          { id: "a", text: "fa · do · sol · re · lya · mi · si" },
          { id: "b", text: "si · mi · lya · re · sol · do · fa" },
          { id: "c", text: "do · re · mi · fa · sol · lya · si" },
          { id: "d", text: "Tartibsiz" },
        ],
        correctId: "b",
      },
      {
        id: "lt5",
        area: "nazariya",
        bloom: "tushunish",
        kind: "multiple",
        prompt: "Parallel tonalliklar haqida qaysi fikrlar to'g'ri?",
        options: [
          { id: "a", text: "Kalit belgilari bir xil" },
          { id: "b", text: "Tonikasi bir xil" },
          { id: "c", text: "Minor tonikasi majordan kichik tersiya pastda" },
          { id: "d", text: "Tovush tarkibi bir xil" },
        ],
        correctIds: ["a", "c", "d"],
        explanation:
          "Tonikasi bir xil bo'lgani — bir nomli tonalliklar, parallel emas.",
      },
      {
        id: "lt6",
        area: "nazariya",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Asar lya minorda yozilgan, lekin ohangda sol♯ tovushi uchrayapti. Bu nima?",
        options: [
          { id: "a", text: "Xato yozuv" },
          { id: "b", text: "Garmonik minor — yettinchi bosqich ko'tarilgan" },
          { id: "c", text: "Tonallik o'zgargan" },
          { id: "d", text: "Major gammasi" },
        ],
        correctId: "b",
      },
    ],
  },

  {
    id: "task-jor-tuzish",
    slug: "ohangga-jor-tuzish",
    title: "Ohangga jo'r tuzish",
    description:
      "Berilgan yoki o'zingiz tanlagan sodda ohangga uchta asosiy akkord (T, S, D) yordamida jo'r tuzing. Har bir takt uchun tanlagan akkordingizni yozing va nega aynan shuni tanlaganingizni kuchli zarbdagi tovushga tayanib asoslang. Oxirida qanday kadans ishlatganingizni ko'rsating.",
    type: "loyiha",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-7",
    area: "nazariya",
    bloom: "qollash",
    duration: "40 daqiqa",
    timerMin: 40,
    submission: "matn",
    rubric: RUBRIKA_TAHLIL,
  },

  {
    id: "task-temp-dinamika-test",
    slug: "temp-va-dinamika-testi",
    title: "Temp, dinamika va ifoda belgilari testi",
    description:
      "Nota matnidagi ko'rsatmalar: temp atamalari, dinamika belgilari va shtrixlar bo'yicha test.",
    type: "test",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-8",
    area: "nazariya",
    bloom: "bilish",
    duration: "10 daqiqa",
    timerMin: 10,
    submission: "test",
    questions: [
      {
        id: "td1",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "Temp atamalarini sekindan tezga qarab to'g'ri tartiblang.",
        options: [
          { id: "a", text: "Allegro → Andante → Largo" },
          { id: "b", text: "Largo → Andante → Allegro" },
          { id: "c", text: "Andante → Largo → Presto" },
          { id: "d", text: "Presto → Allegro → Moderato" },
        ],
        correctId: "b",
      },
      {
        id: "td2",
        area: "nazariya",
        bloom: "bilish",
        kind: "single",
        prompt: "pp belgisi nimani bildiradi?",
        options: [
          { id: "a", text: "Juda kuchli" },
          { id: "b", text: "Juda sekin" },
          { id: "c", text: "O'rtacha kuchli" },
          { id: "d", text: "Asta pasaytirib" },
        ],
        correctId: "b",
      },
      {
        id: "td3",
        area: "nazariya",
        bloom: "tushunish",
        kind: "single",
        prompt: "legato qanday ijroni talab qiladi?",
        options: [
          { id: "a", text: "Qisqa, ajratib" },
          { id: "b", text: "Uzmasdan, bog'lab" },
          { id: "c", text: "Juda tez" },
          { id: "d", text: "Ta'kidlab, zarb bilan" },
        ],
        correctId: "b",
      },
      {
        id: "td4",
        area: "nazariya",
        bloom: "qollash",
        kind: "single",
        prompt:
          "Nota matnida «rit.» va undan keyin «a tempo» yozilgan. Ijro qanday bo'ladi?",
        options: [
          { id: "a", text: "Tezlashtiriladi, keyin yana tezlashtiriladi" },
          { id: "b", text: "Sekinlashtiriladi, keyin avvalgi tempga qaytiladi" },
          { id: "c", text: "Kuchaytiriladi, keyin pasaytiriladi" },
          { id: "d", text: "To'xtatiladi" },
        ],
        correctId: "b",
      },
      {
        id: "td5",
        area: "nazariya",
        bloom: "tushunish",
        kind: "multiple",
        prompt: "Qaysilari shtrix (tovush hosil qilish usuli) hisoblanadi?",
        options: [
          { id: "a", text: "legato" },
          { id: "b", text: "staccato" },
          { id: "c", text: "marcato" },
          { id: "d", text: "crescendo" },
        ],
        correctIds: ["a", "b", "c"],
        explanation: "crescendo — dinamika, shtrix emas.",
      },
      {
        id: "td6",
        area: "nazariya",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Notaning o'ng tomonida nuqta bor. Bu nimani bildiradi?",
        options: [
          { id: "a", text: "Staccato" },
          { id: "b", text: "Davomiylik yarmiga uzayadi" },
          { id: "c", text: "Akzent" },
          { id: "d", text: "Fermata" },
        ],
        correctId: "b",
        explanation:
          "Nota yonidagi nuqta davomiylikni yarmiga uzaytiradi; staccato belgisi esa nota ustida turadi.",
      },
    ],
  },

  {
    id: "task-diktant",
    slug: "solfedjio-va-diktant",
    title: "Solfedjio va eshituv diktanti",
    description:
      "Ikki qismli amaliy ish. Birinchi qism: platformadagi cholg'uda 4–8 taktli sodda ohang chalib, uni yozib oling. Ikkinchi qism: bir kun o'tgach yozuvni tinglab, ohangni notaga tushiring (o'lchov, tonallik, ritm va balandlik bilan), so'ng o'z yozuvingiz bilan solishtirib, qayerda xato qilganingizni va nega shunday bo'lganini yozing.",
    type: "ijro",
    moduleId: "mod-nazariya",
    outcomeId: "on-naz-9",
    area: "eshituv",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "ijro",
    instrument: "nay",
    exerciseId: "n-ohang",
    rubric: RUBRIKA_IJRO,
  },

  {
    id: "task-ovoz-gigiyena-test",
    slug: "ovoz-va-gigiyena-testi",
    title: "Ovoz apparati va gigiyena testi",
    description:
      "Ovoz qanday hosil bo'lishi, yosh guruhlarining diapazoni, mutatsiya davri va ovozni asrash qoidalari bo'yicha test.",
    type: "test",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-6",
    area: "texnika",
    bloom: "tushunish",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "tov-1",
        area: "texnika",
        bloom: "bilish",
        kind: "single",
        prompt: "Ovoz apparatining qaysi qismi havo oqimini beradi?",
        options: [
          { id: "a", text: "Rezonatorlar" },
          { id: "b", text: "Nafas apparati — o'pka va diafragma" },
          { id: "c", text: "Ovoz boylamlari" },
          { id: "d", text: "Til va lablar" },
        ],
        correctId: "b",
      },
      {
        id: "tov-2",
        area: "texnika",
        bloom: "tushunish",
        kind: "single",
        prompt: "6–7 yoshli bolalarning diapazoni qanday?",
        options: [
          { id: "a", text: "Keng, kattalarnikiga yaqin" },
          { id: "b", text: "Tor, taxminan re¹ – si¹" },
          { id: "c", text: "Faqat past registrda" },
          { id: "d", text: "Yoshga bog'liq emas" },
        ],
        correctId: "b",
        explanation:
          "Bu yoshda ovoz yengil va diapazon tor; uzoq va baland kuylash tez charchatadi.",
      },
      {
        id: "tov-3",
        area: "texnika",
        bloom: "qollash",
        kind: "single",
        prompt:
          "Dars boshlanishida sinf darhol qo'shiqning eng baland joyidan kuylay boshladi. Bu nimaga olib keladi?",
        options: [
          { id: "a", text: "Ovoz tez ochiladi" },
          { id: "b", text: "Sozlanmagan boylamlar zo'riqadi va shikastlanish xavfi tug'iladi" },
          { id: "c", text: "Intonatsiya yaxshilanadi" },
          { id: "d", text: "Hech qanday ta'siri yo'q" },
        ],
        correctId: "b",
      },
      {
        id: "tov-4",
        area: "texnika",
        bloom: "tushunish",
        kind: "single",
        prompt: "Mutatsiya davri nima?",
        options: [
          { id: "a", text: "Ovoz kasalligi" },
          { id: "b", text: "O'smirlikda ovozning o'zgarishi, sinishi" },
          { id: "c", text: "Diapazonning kengayishi" },
          { id: "d", text: "Tembrning yo'qolishi" },
        ],
        correctId: "b",
      },
      {
        id: "tov-5",
        area: "texnika",
        bloom: "qollash",
        kind: "multiple",
        prompt: "Ovoz gigiyenasiga nimalar kiradi?",
        options: [
          { id: "a", text: "Shamollaganda kuylamaslik" },
          { id: "b", text: "Qichqirmaslik" },
          { id: "c", text: "Darsdan keyin ovozga dam berish" },
          { id: "d", text: "Har kuni diapazonning chetki notalarini mashq qilish" },
        ],
        correctIds: ["a", "b", "c"],
        explanation:
          "Chegaradagi notalarni har kuni zo'riqtirib mashq qilish — foyda emas, yuk.",
      },
      {
        id: "tov-6",
        area: "texnika",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Mutatsiya davridagi o'quvchi uchun eng to'g'ri yondashuv qaysi?",
        options: [
          { id: "a", text: "Kuylashdan butunlay chetlatish" },
          { id: "b", text: "Yukni kamaytirib, lekin musiqiy faoliyatda qoldirish" },
          { id: "c", text: "Diapazonni majburan kengaytirish" },
          { id: "d", text: "Faqat baland partiyani berish" },
        ],
        correctId: "b",
      },
    ],
  },

  {
    id: "task-ovoz-sozlash",
    slug: "ovoz-sozlash-mashqi",
    title: "Ovoz sozlashni o'tkazish",
    description:
      "5–7 daqiqalik ovoz sozlash majmuasini tuzing va uni o'tkazib, yozib oling (audio yoki video). Yozuv bilan birga qisqa izoh bering: har bir mashq nima uchun, qaysi tovushdan boshladingiz va diapazonni qaysi tomonga harakatlantirdingiz. Yozuvda o'zingiz kuylab ko'rsatishingiz eshitilishi shart.",
    type: "ijro",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-7",
    area: "texnika",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "fayl",
    accept: ".mp3,.wav,.m4a,.ogg,.mp4,.mov",
    rubric: RUBRIKA_OVOZ,
  },

  {
    id: "task-mashq-rejasi",
    slug: "mashq-rejasi",
    title: "Asar ustida mashq rejasi",
    description:
      "O'zingiz hozir o'rganayotgan asarni oling. Uni boshidan oxirigacha chalib, qayerda to'xtaganingizni, sekinlashganingizni va qo'l siqilganini belgilang. Keyin eng qiyin bo'lakni takt raqami bilan ko'rsating, qiyinlik sababini nomlang va shu sababga mos ikki haftalik mashq rejasini tuzing: boshlang'ich temp, tezlashtirish mezoni va 25 daqiqalik mashqning vaqt taqsimoti bilan.",
    type: "loyiha",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-8",
    area: "texnika",
    bloom: "tahlil",
    duration: "5 kun",
    submission: "matn",
    rubric: RUBRIKA_MASHQ,
  },

  {
    id: "task-frazirovka",
    slug: "ifodali-ijro",
    title: "Ifodali ijro: frazirovka rejasi",
    description:
      "Sodda ohangni ikki marta ijro eting va yozib oling. Birinchi yozuv — frazirovkasiz, bir xil dinamikada. Ikkinchi yozuv — fraza chegaralari, kulminatsiya va dinamik reja bilan. Yozuvlarga qisqa izoh qo'shing: frazalarni qayerdan ajratdingiz, kulminatsiyani qaysi notaga qo'ydingiz va nega.",
    type: "ijro",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-9",
    area: "sahna",
    bloom: "qollash",
    duration: "5 kun",
    submission: "ijro",
    instrument: "pianino",
    exerciseId: "p-oddiy-kuy",
    rubric: RUBRIKA_IJRO,
  },

  {
    id: "task-qoshiq-jori",
    slug: "qoshiqqa-jor-tuzish",
    title: "Bolalar qo'shig'iga jo'r tuzish",
    description:
      "Boshlang'ich sinfga mo'ljallangan bitta bolalar qo'shig'ini tanlang. Unga T, S va D akkordlari asosida jo'r tuzing: har bir taktga akkordni belgilang, kuplet va naqarot uchun turli faktura tanlang va ikki taktli kirish yozing. Jo'rni ijro etib yozib oling hamda akkord belgilari qo'yilgan nota yoki sxemani ilova qiling.",
    type: "loyiha",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-10",
    area: "ijodkorlik",
    bloom: "sintez",
    duration: "2 hafta",
    submission: "fayl",
    accept: ".pdf,.mp3,.wav,.m4a,.mp4,.musicxml,.xml,.mscz",
    rubric: RUBRIKA_JOR,
  },

  {
    id: "task-repertuar-tanlovi",
    slug: "repertuar-va-transponirovka",
    title: "Repertuar tanlash va transponirovka",
    description:
      "Aniq bir yosh guruhini tanlang (masalan, 8–10 yosh) va unga uchta qo'shiq nomzodini ko'rib chiqing. Har biri uchun eng past va eng baland notani yozing, oltita mezon bo'yicha baho bering va bittasini tanlang. Tanlangan qo'shiq diapazonga sig'masa — uni mos tonallikka ko'chiring: intervalni hisoblang, yangi kalit belgilarini ko'rsating va ikkala chegarani qayta tekshiring. Tanlovingizni mezonlar bilan asoslang.",
    type: "loyiha",
    moduleId: "mod-ijro",
    outcomeId: "on-ijr-11",
    area: "ijodkorlik",
    bloom: "baholash",
    duration: "2 hafta",
    submission: "fayl",
    accept: ".pdf,.doc,.docx,.odt,.musicxml,.xml,.mscz",
    rubric: RUBRIKA_REPERTUAR,
  },

  {
    id: "task-oqitish-tizimlari-test",
    slug: "oqitish-tizimlari-testi",
    title: "Musiqa o'qitish tizimlari testi",
    description:
      "Kodai, Orf, Dalkroz, Suzuki tizimlari va ustoz-shogird an'anasining tamoyillari hamda ularni qachon qo'llash bo'yicha test.",
    type: "test",
    moduleId: "mod-metodika",
    outcomeId: "on-met-6",
    area: "metodika",
    bloom: "tushunish",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "ot-1",
        area: "metodika",
        bloom: "bilish",
        kind: "single",
        prompt: "Qaysi tizimda o'rganish nutq ritmi va harakatdan boshlanadi?",
        options: [
          { id: "a", text: "Kodai" },
          { id: "b", text: "Orf" },
          { id: "c", text: "Suzuki" },
          { id: "d", text: "Ustoz-shogird" },
        ],
        correctId: "b",
      },
      {
        id: "ot-2",
        area: "metodika",
        bloom: "tushunish",
        kind: "single",
        prompt:
          "Kodai tizimida xalq qo'shig'i nega materialning asosi qilib olingan?",
        options: [
          { id: "a", text: "U osonroq" },
          { id: "b", text: "U bola uchun musiqaning ona tili — tanish intonatsiya va tuzilma" },
          { id: "c", text: "Uning notasi sodda" },
          { id: "d", text: "U qisqaroq" },
        ],
        correctId: "b",
      },
      {
        id: "ot-3",
        area: "metodika",
        bloom: "qollash",
        kind: "single",
        prompt:
          "Sinfda cholg'u savodi past, lekin bolalar ohangni quloq bilan yaxshi ushlaydi. Qaysi yondashuv darhol natija beradi?",
        options: [
          { id: "a", text: "Avval butun nota savodini o'rgatish" },
          { id: "b", text: "Eshitib o'rganishdan boshlash, nota keyinroq kiritiladi" },
          { id: "c", text: "Faqat tinglash darslari o'tkazish" },
          { id: "d", text: "Repertuarni soddalashtirish" },
        ],
        correctId: "b",
        explanation:
          "Suzuki va ustoz-shogird yondashuvlari aynan shu ketma-ketlikka tayanadi: eshitish — takrorlash — yozuv.",
      },
      {
        id: "ot-4",
        area: "metodika",
        bloom: "tahlil",
        kind: "multiple",
        prompt: "Dalkroz tizimining belgilari qaysilar?",
        options: [
          { id: "a", text: "Metr va temp harakat bilan his qilinadi" },
          { id: "b", text: "Reaksiya mashqlari ishlatiladi" },
          { id: "c", text: "Nisbiy solmizatsiya asosiy vosita" },
          { id: "d", text: "Ichki eshituv rivojlantiriladi" },
        ],
        correctIds: ["a", "b", "d"],
        explanation: "Nisbiy solmizatsiya — Kodai tizimining asosiy vositasi.",
      },
      {
        id: "ot-5",
        area: "metodika",
        bloom: "baholash",
        kind: "single",
        prompt:
          "Ustoz-shogird an'anasining kuchli tomoni va cheklovi qaysi javobda to'g'ri ko'rsatilgan?",
        options: [
          { id: "a", text: "Kuchli tomoni — tez natija; cheklovi — repertuar torligi" },
          { id: "b", text: "Kuchli tomoni — uslub va tembrning aniq uzatilishi; cheklovi — yozuv savodi alohida ishlanishi kerakligi" },
          { id: "c", text: "Kuchli tomoni — nota savodi; cheklovi — vaqt" },
          { id: "d", text: "Cheklovi yo'q" },
        ],
        correctId: "b",
      },
      {
        id: "ot-6",
        area: "metodika",
        bloom: "baholash",
        kind: "single",
        prompt: "Maktab darsida tizimlarni qanday ishlatish to'g'ri?",
        options: [
          { id: "a", text: "Bittasini tanlab, faqat unga amal qilish" },
          { id: "b", text: "Dars bo'lagining maqsadiga qarab birlashtirib ishlatish" },
          { id: "c", text: "Hech qaysisini ishlatmaslik" },
          { id: "d", text: "Har chorakda bittasini almashtirib turish" },
        ],
        correctId: "b",
      },
    ],
  },

  {
    id: "task-oquv-maqsadlari",
    slug: "oquv-maqsadlarini-yozish",
    title: "O'quv maqsadlarini yozish",
    description:
      "Bitta musiqa darsi uchun uchta o'quv maqsadi yozing — har biri Blum taksonomiyasining turli darajasida. Har bir maqsadda o'lchanadigan fe'l, bajarish sharti va muvaffaqiyat mezoni bo'lsin. Har bir maqsad yoniga uni aynan tekshiradigan baholash usulini ko'rsating va nega aynan shu usul mos kelishini bir jumlada asoslang.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-2",
    area: "metodika",
    bloom: "sintez",
    duration: "5 kun",
    submission: "matn",
    rubric: RUBRIKA_MAQSAD,
  },

  {
    id: "task-qoshiq-orgatish",
    slug: "qoshiq-orgatish-rejasi",
    title: "Qo'shiq o'rgatish rejasi va namoyishi",
    description:
      "Aniq bir sinf uchun qo'shiq tanlang va uni o'rgatish rejasini tuzing: tonallik, qiyin joy, frazalarga bo'linish va olti bosqichning har biriga ajratilgan vaqt. So'ng rejaning uchinchi bosqichini — aks-sado usulida ohang o'rgatishni — ijro etib yozib oling (audio yoki video). Yozuvda frazalar qisqa, temp sekin va har takrorda bitta vazifa qo'yilgani eshitilishi kerak.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-7",
    area: "metodika",
    bloom: "qollash",
    duration: "2 hafta",
    submission: "fayl",
    accept: ".pdf,.doc,.docx,.odt,.mp3,.wav,.m4a,.mp4,.mov",
    rubric: RUBRIKA_QOSHIQ,
  },

  {
    id: "task-tinglash-darsi",
    slug: "tinglash-darsi-bolagi",
    title: "Musiqa tinglash darsi bo'lagi",
    description:
      "15 daqiqalik tinglash bo'lagini loyihalang. Asarni va uning uzunligini ko'rsating, uch bosqichni yozing: tinglashdan oldingi yo'naltiruvchi savol, tinglash paytidagi aniq vazifa va tinglashdan keyingi muhokama yoki ijodiy javob. Asar necha marta tinglanishini va har safar qanday yangi vazifa berilishini aniq yozing. Bolalarga beriladigan hissiyot lug'atini ham ilova qiling.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-8",
    area: "metodika",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "matn",
    rubric: RUBRIKA_DARS,
  },

  {
    id: "task-sinf-boshqaruvi",
    slug: "sinf-boshqaruvi-tahlili",
    title: "Sinfni boshqarish: holat tahlili",
    description:
      "Kuzatgan yoki boshdan kechirgan bitta aniq tartibsizlik holatini tasvirlang: nima bo'ldi, qachon va kim ishtirok etdi. So'ng sababini tahlil qiling — vazifa darajasi, ko'rsatma tartibi, cholg'u tarqatilishi yoki ishtirokdan chetda qolish. Shundan keyin shu sinf uchun to'rt-beshta qoida va bitta ovozsiz signal taklif qiling hamda ularning qanday joriy etilishini yozing. Oxirida ichki motivatsiyaning uch ustuni shu darsda qanday ta'minlanishini ko'rsating.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-11",
    area: "motivatsiya",
    bloom: "tahlil",
    duration: "1 hafta",
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },

  {
    id: "task-farqlashtirilgan-dars",
    slug: "farqlashtirilgan-dars-loyihasi",
    title: "Farqlashtirilgan dars loyihasi",
    description:
      "Bitta qo'shiq yoki asar tanlang va uni aralash darajali sinf uchun loyihalang. Avval sinfdagi darajalarni nimaga tayanib ajratganingizni yozing (diagnostika, kuzatuv, oldingi natija). So'ng to'rt darajali partiya tuzing — ostinato, asosiy ohang, ikkinchi ovoz, to'liq jo'r — va har daraja uchun qanday yordam beriladi hamda u qachon olib tashlanadi, ko'rsating. Barcha partiyalar bitta asarda birlashishi va hech bir guruh chetda qolmasligi shart.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-9",
    area: "metodika",
    bloom: "sintez",
    duration: "2 hafta",
    submission: "fayl",
    accept: ".pdf,.doc,.docx,.odt,.musicxml,.xml,.mscz",
    rubric: RUBRIKA_FARQLASH,
  },

  {
    id: "task-teskari-aloqa",
    slug: "teskari-aloqa-mashqi",
    title: "Rivojlantiruvchi teskari aloqa",
    description:
      "Uchta turli ijro holatini oling (o'z yozuvingiz, kursdoshingizning ijrosi va o'quvchi ijrosi bo'lishi mumkin). Har biriga «ikki yulduz va bitta tilak» shaklida teskari aloqa yozing: ikkita aniq yutuq va bitta bajarib bo'ladigan keyingi qadam. Har bir matn ostida qaysi qoidaga amal qilganingizni va o'quvchiga qayta urinish uchun qanday imkon berishingizni ko'rsating.",
    type: "loyiha",
    moduleId: "mod-metodika",
    outcomeId: "on-met-10",
    area: "metodika",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "matn",
    rubric: RUBRIKA_FEEDBACK,
  },

  {
    id: "task-mualliflik-test",
    slug: "mualliflik-huquqi-testi",
    title: "Mualliflik huquqi va litsenziyalar testi",
    description:
      "Asar, yozuv va nashr huquqi, Creative Commons belgilari hamda darsda qonuniy foydalanish chegaralari bo'yicha test.",
    type: "test",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-5",
    area: "metodika",
    bloom: "tushunish",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "mh-1",
        area: "metodika",
        bloom: "bilish",
        kind: "single",
        prompt: "Bitta qo'shiqda qaysi huquqlar birga yashaydi?",
        options: [
          { id: "a", text: "Faqat asar huquqi" },
          { id: "b", text: "Asar, yozuv va nashr huquqi" },
          { id: "c", text: "Faqat yozuv huquqi" },
          { id: "d", text: "Huquq faqat zamonaviy asarlarda bo'ladi" },
        ],
        correctId: "b",
      },
      {
        id: "mh-2",
        area: "metodika",
        bloom: "tushunish",
        kind: "single",
        prompt: "«NC» belgisi nimani taqiqlaydi?",
        options: [
          { id: "a", text: "O'zgartirishni" },
          { id: "b", text: "Tijorat maqsadida foydalanishni" },
          { id: "c", text: "Muallifni ko'rsatmaslikni" },
          { id: "d", text: "Nusxa ko'chirishni" },
        ],
        correctId: "b",
      },
      {
        id: "mh-3",
        area: "metodika",
        bloom: "qollash",
        kind: "single",
        prompt:
          "Xalq kuyini o'zingiz chalib yozdingiz va internetga joyladingiz. Yozuv huquqi kimda?",
        options: [
          { id: "a", text: "Hech kimda" },
          { id: "b", text: "Sizda" },
          { id: "c", text: "Davlatda" },
          { id: "d", text: "Kuyni birinchi yozgan studiyada" },
        ],
        correctId: "b",
      },
      {
        id: "mh-4",
        area: "metodika",
        bloom: "tahlil",
        kind: "multiple",
        prompt: "Qaysi holatlar «nashr» hisoblanadi va ruxsat talab qiladi?",
        options: [
          { id: "a", text: "Konsert videosini internetga joylash" },
          { id: "b", text: "Sinf ichida yozuv tinglatish" },
          { id: "c", text: "Nota matnini ko'chirib tarqatish" },
          { id: "d", text: "Yozuvni ochiq havola bilan ulashish" },
        ],
        correctIds: ["a", "c", "d"],
      },
      {
        id: "mh-5",
        area: "metodika",
        bloom: "baholash",
        kind: "single",
        prompt:
          "Maktab tadbiri uchun material tanlayapsiz. Eng xavfsiz yo'l qaysi?",
        options: [
          { id: "a", text: "Internetdan topilgan mashhur yozuvni olish" },
          { id: "b", text: "O'z ijroingizni yozish yoki ochiq litsenziyali materialdan foydalanish" },
          { id: "c", text: "Manbani ko'rsatmay ishlatish" },
          { id: "d", text: "Nomini o'zgartirib qo'yish" },
        ],
        correctId: "b",
      },
      {
        id: "mh-6",
        area: "metodika",
        bloom: "qollash",
        kind: "single",
        prompt: "Manba qachon qayd etiladi?",
        options: [
          { id: "a", text: "Material olingan paytda" },
          { id: "b", text: "Loyiha tugagach" },
          { id: "c", text: "Faqat so'ralganda" },
          { id: "d", text: "Qayd etish shart emas" },
        ],
        correctId: "a",
      },
    ],
  },

  {
    id: "task-tovush-yozish",
    slug: "tovush-yozish-ishi",
    title: "Toza yozuv tayyorlash",
    description:
      "Bitta ijroni (yakka yoki guruh) yozib oling va darsda ishlatishga tayyorlang. Yozuv bilan birga qisqa texnik izoh bering: qaysi mikrofon, qanday masofa va burchak, xonani qanday tayyorladingiz, daraja qanday belgilandi. Boshida 5 soniya jimlik qoldirilgan bo'lsin. Ishlatilgan materialning manbasi va litsenziyasini ham ko'rsating.",
    type: "ijro",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-7",
    area: "ijodkorlik",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "fayl",
    accept: ".mp3,.wav,.m4a,.ogg,.flac",
    rubric: RUBRIKA_TEXNOLOGIYA,
  },

  {
    id: "task-fonogramma",
    slug: "fonogramma-loyihasi",
    title: "Maktab tadbiri uchun fonogramma",
    description:
      "Bitta qo'shiq uchun jo'r fonogramma tayyorlang. Tonallikni sinf diapazoniga moslang, tempni belgilang va uni oxirigacha saqlang. Fonogrammada tanib olinadigan kirish, kuplet va naqarot orasida aniq o'tish hamda tugalangan oxir bo'lsin. Tayyor faylni zalda yoki kolonkada sinab ko'ring va nima o'zgartirganingizni yozing. Fayl nomida qo'shiq nomi, tonallik va temp ko'rsatilsin.",
    type: "loyiha",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-8",
    area: "ijodkorlik",
    bloom: "sintez",
    duration: "2 hafta",
    submission: "fayl",
    accept: ".mp3,.wav,.m4a,.ogg,.pdf",
    rubric: RUBRIKA_FONOGRAMMA,
  },

  {
    id: "task-raqamli-xavfsizlik",
    slug: "raqamli-xavfsizlik-qarori",
    title: "Bolalar yozuvlari: qaror va ruxsat varaqasi",
    description:
      "Ikki qismli ish. Birinchi qism: maktab konserti uchun ruxsat varaqasining matnini yozing — nima yoziladi, qayerda e'lon qilinadi, qancha vaqt turadi va ruxsatni qanday qaytarib olish mumkin. Matn ota-onaga tushunarli tilda bo'lsin. Ikkinchi qism: uchta holatni baholang va har biriga qaroringizni asoslang — (1) bir o'quvchining oilasi rad etdi, (2) video allaqachon joylangan va ruxsat qaytarib olindi, (3) hamkasb sizdan konsert yozuvini shaxsiy sahifasiga joylashni so'radi.",
    type: "loyiha",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-6",
    area: "metodika",
    bloom: "baholash",
    duration: "1 hafta",
    submission: "matn",
    rubric: RUBRIKA_XAVFSIZLIK,
  },

  {
    id: "task-masofaviy-dars",
    slug: "masofaviy-dars-rejasi",
    title: "Masofaviy musiqa darsi rejasi",
    description:
      "30 daqiqalik masofaviy dars rejasini tuzing: uchta bo'lak, har biri 7–10 daqiqa. Har bo'lak uchun yozing — maqsad, bolalar aynan nima qiladi va kechikish bunga xalaqit beradimi. Kamida bitta bo'lak yozib yuborish yoki navbatma-navbat ijro formatida bo'lsin. Rejaga texnik tayyorgarlik ro'yxatini ham qo'shing va tovush uzilgan holatda ko'rsatma qanday yetkazilishini ko'rsating.",
    type: "loyiha",
    moduleId: "mod-texnologiya",
    outcomeId: "on-tex-9",
    area: "metodika",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "matn",
    rubric: RUBRIKA_DARS,
  },

  {
    id: "task-amaliyot-tayyorgarlik-test",
    slug: "amaliyotga-tayyorgarlik-testi",
    title: "Amaliyotga tayyorgarlik testi",
    description:
      "Amaliyot hujjatlari, kundalik yuritish qoidalari va birinchi hafta tartibi bo'yicha test.",
    type: "test",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-6",
    area: "metodika",
    bloom: "tushunish",
    duration: "15 daqiqa",
    timerMin: 15,
    submission: "test",
    questions: [
      {
        id: "at-1",
        area: "metodika",
        bloom: "bilish",
        kind: "single",
        prompt: "Amaliyot kundaligi qachon to'ldiriladi?",
        options: [
          { id: "a", text: "Har kuni" },
          { id: "b", text: "Haftada bir marta" },
          { id: "c", text: "Amaliyot oxirida" },
          { id: "d", text: "Mentor so'raganda" },
        ],
        correctId: "a",
      },
      {
        id: "at-2",
        area: "metodika",
        bloom: "tushunish",
        kind: "single",
        prompt:
          "Birinchi kuni maktabdan nimani aniqlab olish eng muhim?",
        options: [
          { id: "a", text: "O'quvchilarning baholarini" },
          { id: "b", text: "Mentor, xona, jadval va e'tibor talab qiladigan o'quvchilar" },
          { id: "c", text: "Maktab byudjetini" },
          { id: "d", text: "Boshqa talabalarning jadvalini" },
        ],
        correctId: "b",
      },
      {
        id: "at-3",
        area: "metodika",
        bloom: "qollash",
        kind: "single",
        prompt: "Kundalikda o'quvchilarning to'liq ismi nega yozilmaydi?",
        options: [
          { id: "a", text: "Joy tejash uchun" },
          { id: "b", text: "Hujjat keyin boshqalar qo'liga tushishi mumkin" },
          { id: "c", text: "Mentor taqiqlaydi" },
          { id: "d", text: "Ismlar baribir o'zgaradi" },
        ],
        correctId: "b",
      },
      {
        id: "at-4",
        area: "metodika",
        bloom: "tushunish",
        kind: "single",
        prompt: "Amaliyotning birinchi kunida eng to'g'ri ish qaysi?",
        options: [
          { id: "a", text: "Darhol dars o'tish" },
          { id: "b", text: "Kuzatish va maktab tartibi bilan tanishish" },
          { id: "c", text: "Hujjatlarni to'ldirish" },
          { id: "d", text: "Repertuar tanlash" },
        ],
        correctId: "b",
      },
      {
        id: "at-5",
        area: "metodika",
        bloom: "qollash",
        kind: "multiple",
        prompt: "Amaliyot hujjatlari ro'yxatiga nimalar kiradi?",
        options: [
          { id: "a", text: "Amaliyot kundaligi" },
          { id: "b", text: "Dars kuzatuv varaqalari" },
          { id: "c", text: "O'z darslaringiz ishlanmasi" },
          { id: "d", text: "O'quvchilarning shaxsiy ishlari" },
        ],
        correctIds: ["a", "b", "c"],
      },
      {
        id: "at-6",
        area: "metodika",
        bloom: "tahlil",
        kind: "single",
        prompt:
          "Hujjatlarni amaliyot oxirida bir kunda to'ldirishning asosiy zarari nima?",
        options: [
          { id: "a", text: "Ko'p vaqt oladi" },
          { id: "b", text: "Aniq lahzalar esdan chiqadi va yozuv umumiy gapga aylanadi" },
          { id: "c", text: "Mentor imzo qo'ymaydi" },
          { id: "d", text: "Zarari yo'q" },
        ],
        correctId: "b",
      },
    ],
  },

  {
    id: "task-inklyuziv-reja",
    slug: "inklyuziv-dars-rejasi",
    title: "Inklyuziv ishtirok rejasi",
    description:
      "Aniq bir ehtiyojni tanlang (eshitish, ko'rish, diqqat va xulq, yoki til to'sig'i) va bitta musiqa darsi uchun shu o'quvchining ishtirok rejasini tuzing. Avval ma'lumotni qayerdan olganingizni yozing. So'ng ko'rsating: bola darsning har bosqichida aynan nima qiladi, qanday moslashtirish qo'llaniladi va bu uni sinfdan ajratib qo'ymasligini qanday ta'minlaysiz. Rejada «tinglab o'tiradi» degan bosqich bo'lmasin.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-7",
    area: "motivatsiya",
    bloom: "qollash",
    duration: "1 hafta",
    submission: "matn",
    rubric: RUBRIKA_INKLYUZIYA,
  },

  {
    id: "task-tadbir-loyihasi",
    slug: "tadbir-loyihasi",
    title: "Maktab tadbiri loyihasi",
    description:
      "Bitta maktab tadbirini loyihalang. Sanadan orqaga qarab 8 haftalik jadval tuzing: repertuarni yakunlash muddati, repetitsiyalar, zalda sinash. Dasturni yozing — nechta raqam, kim ishtirok etadi, umumiy davomiylik. Sahna tartibini alohida ko'rsating: kim qayerdan chiqadi va qaytadi, navbat ro'yxati, rekvizit joylashuvi. Oxirida zaxira rejani yozing: fonogramma, yakkaxon, mikrofon va elektr bo'yicha muqobil yechimlar.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-8",
    area: "sahna",
    bloom: "sintez",
    duration: "2 hafta",
    submission: "fayl",
    accept: ".pdf,.doc,.docx,.odt",
    rubric: RUBRIKA_TADBIR,
  },

  {
    id: "task-maktab-muhiti",
    slug: "kasbiy-muloqot-tahlili",
    title: "Kasbiy muloqot tahlili",
    description:
      "Amaliyot davomida kuzatgan yoki ishtirok etgan bitta kasbiy muloqot holatini oling — ota-ona, hamkasb yoki ma'muriyat bilan. Holatni tasvirlang: kim, qachon, nima bo'ldi. So'ng tahlil qiling: faktni fikrdan ajrating, muloqot qaysi nuqtada qiyinlashdi va nega. Oxirida shu holat uchun muqobil suhbat matnini yozing — kuchli tomondan boshlab, xatti-harakat tilida va bitta aniq keyingi qadam bilan tugatib.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-9",
    area: "motivatsiya",
    bloom: "tahlil",
    duration: "1 hafta",
    submission: "matn",
    rubric: RUBRIKA_REFLEKSIYA,
  },

  {
    id: "task-etika-holatlari",
    slug: "etika-holatlari",
    title: "Kasbiy etika: holatlar tahlili",
    description:
      "To'rtta holatni baholang va har biri uchun qaroringizni asoslang: (1) o'quvchi sizga ijtimoiy tarmoqda shaxsiy xabar yozdi; (2) yakka mashg'ulot maktab bo'shagandan keyinga belgilandi; (3) bola sizga uydagi jiddiy muammo haqida aytdi va «hech kimga aytmang» dedi; (4) ota-ona qimmat sovg'a berdi. Har bir javobda kasbiy chegarani nomlang, amaliy harakatni ko'rsating va qarorni tamoyil bilan asoslang. Oxirida o'zingiz uchun uchta tekshiriladigan chegara yozing.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-10",
    area: "motivatsiya",
    bloom: "baholash",
    duration: "1 hafta",
    submission: "matn",
    rubric: RUBRIKA_ETIKA,
  },

  {
    id: "task-amaliyot-portfoliosi",
    slug: "amaliyot-portfoliosi",
    title: "Amaliyot portfoliosi va yakuniy hisobot",
    description:
      "Amaliyot portfoliosini tuzing. Kamida sakkizta dalil tanlang va har biriga bir jumlalik izoh yozing: bu nimani ko'rsatadi va nega shu tanlandi. Kamida bittasi muvaffaqiyatsiz tajriba va undan chiqarilgan xulosa bo'lsin. Portfolioga yakuniy hisobotni qo'shing: kontekst, o'zingizga qo'ygan maqsadlar, natija, eng qiyin holat va keyingi ikki-uchta kasbiy vazifa. Har bir xulosa portfoliodagi aniq materialga havola qilsin. O'quvchi materiallari ruxsat bilan va ismsiz berilsin.",
    type: "loyiha",
    moduleId: "mod-amaliyot",
    outcomeId: "on-ama-11",
    area: "metodika",
    bloom: "sintez",
    duration: "Amaliyot yakunida",
    submission: "fayl",
    accept: ".pdf,.doc,.docx,.odt,.zip",
    rubric: RUBRIKA_PORTFOLIO,
  },

];

export const TOPSHIRIQ_BY_SLUG = new Map(TOPSHIRIQLAR.map((t) => [t.slug, t]));
export const TOPSHIRIQ_BY_ID = new Map(TOPSHIRIQLAR.map((t) => [t.id, t]));

export function tasksByType(type: TaskType | "barcha"): Task[] {
  return type === "barcha"
    ? TOPSHIRIQLAR
    : TOPSHIRIQLAR.filter((t) => t.type === type);
}

/** Rubrikaning jami bali — baholashda foizga aylantirish uchun. */
export function rubricMax(rubric: Rubric): number {
  return rubric.criteria.reduce((s, c) => s + c.maxPoints, 0);
}
