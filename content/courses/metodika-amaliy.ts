import type { Lesson } from "@/content/lesson-types";

/**
 * Rasmiy fan dasturidagi **amaliy mashg'ulotlar** (A1-A30, 60 soat).
 *
 * Dasturda har bir amaliy mashg'ulot bitta maktab repertuari asariga
 * bag'ishlangan: «asarni Flipped Classroom metodi asosida ifodali kuylab
 * ijro etish hamda mazmunini tahlil qilish». Shu sababli har bir dars
 * bir xil olti bandli tahlil tartibi (M19) bo'yicha quriladi, lekin
 * asarga xos qism — mavzu, ijro fokusi, qiyin joyi va o'rgatish yo'li —
 * har birida boshqacha.
 *
 * **Mualliflik huquqi.** Bu yerda asarning notasi, she'r matni yoki
 * audio yozuvi yo'q va bo'lmaydi: platforma faqat ish usulini beradi,
 * asarning o'zi maktab darsligidan olinadi. `content/fan-dasturi.ts`
 * dagi `Asar` tipida ham ataylab nota/audio maydoni yo'q va buni unit
 * test qo'riqlaydi.
 */

export const DASTUR_AMALIYLARI: Lesson[] = [
  {
    id: "met-a1",
    slug: "a1-davlat-madhiyasi",
    title: "A1: «O'zbekiston Respublikasi Davlat madhiyasi» — ifodali ijro va tahlil",
    summary: "A.Oripov she'ri, M.Burhonov musiqasi, «O'zbekiston Respublikasi Davlat madhiyasi». Davlat ramzi, vatanga sadoqat. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A1",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: A.Oripov she'ri, M.Burhonov musiqasi, «O'zbekiston Respublikasi Davlat madhiyasi».",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A1 (amaliy mashg'ulot, 2 soat)",
              "Muallif: A.Oripov she'ri, M.Burhonov musiqasi",
              "Sinf: barcha sinflar (davlat ramzi)",
              "Turi: davlat madhiyasi",
              "Mavzu: davlat ramzi, vatanga sadoqat",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Davlat madhiyasi — qo'shiq emas, davlat ramzi. Shuning uchun uni o'rgatishda ikki narsa birga boradi: aniq ijro va ijro tartibi. O'quvchi madhiyani birinchi sinfdan boshlab eshitadi, lekin uni «qanday turish, qachon boshlash, qanday tugatish» qoidasi bilan birga o'rganadi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 6-7 yosh: oraliq tor, nafas qisqa. Baland nota tez charchatadi.",
          },
          {
            kind: "nota",
            caption: "do1 - do2: 1-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["a/4"], duration: "q", lyric: "lya" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: ramziy so'zlarni (vatan, ozod, buyuk) ajratib, har birining ma'nosini o'quvchiga qanday tushuntirishni yozib qo'ying.",
              "Ohang: eng baland va eng past notani belgilang; ularning orasidagi masofa sinfning diapazoniga sig'adimi?",
              "Ritm va o'lchov: o'lchovni va asosiy ritmik naqshni yozib oling; cho'ziq notalar qayerda tugaydi?",
              "Shakl: qism va naqoratni ajratib, ularning xarakter farqini aniqlang.",
              "Xarakter: tantanavorlik qanday vositalar bilan hosil bo'ladi — temp, dinamika, registr?",
              "Ijro rejasi: nafas joylarini belgilab, bitta eng kuchli joyni (cho'qqi) tanlang.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: iboralar uzun, nafasni taqsimlash kerak; diapazon bolalar ovozi uchun keng. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Tantanavor ritm: cho'ziq notalar ko'p, temp sekin va barqaror.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "q", lyric: "uch" },
                { keys: ["f/4"], duration: "q", lyric: "to'rt" },
                { keys: ["f/4"], duration: "w", lyric: "bir-ik-uch-to'rt" },
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "tantanavor, lekin baqirmaydigan ovoz",
              "aniq diksiya — har bir so'z tushunarli",
              "boshdan oxirigacha bir xil temp",
            ],
          },
          {
            kind: "mashq",
            text: "Madhiyaning birinchi iborasini uch xil tempda kuylab ko'ring: juda sekin, o'zingizga qulay, juda tez. Qaysi tempda so'zlar eng tushunarli chiqdi? Shuni asosiy temp qilib yozib qo'ying.",
          },
          {
            kind: "mashq",
            text: "Madhiyani boshlashdan oldingi uch soniyani mashq qiling: sinfga qarash, nafas olish, qo'l ishorasi. Shu uch soniya ijroning yarmini belgilaydi.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: iboralar uzun, nafasni taqsimlash kerak; diapazon bolalar ovozi uchun keng. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Nafas mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "4 zarb" },
                { keys: ["e/4"], duration: "w", lyric: "4 zarb" },
                { keys: ["g/4"], duration: "w", lyric: "4 zarb" },
                { keys: ["e/4"], duration: "w", lyric: "nafas" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Nafas mashqi: har bir nota to'rt zarb ushlanadi. Tovush oxirigacha tekis qolishi kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Madhiyani bo'laklab emas, butun iboralar bilan o'rgatish kerak: ramziy matn bo'lingan joyda ma'nosini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlikni sekin oling: madhiya tezlashib ketsa tantanavorligini yo'qotadi.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«O'zbekiston Respublikasi Davlat madhiyasi» — davlat ramzi, vatanga sadoqat mavzusida, barcha sinflar (davlat ramzi) uchun.",
              "Ijroda asosiy e'tibor: tantanavor, lekin baqirmaydigan ovoz.",
              "Eng ko'p xato qilinadigan joy: iboralar uzun, nafasni taqsimlash kerak; diapazon bolalar ovozi uchun keng.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«O'zbekiston Respublikasi Davlat madhiyasi» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Madhiyani o'rgatishda musiqiy aniqlik bilan ramziy ma'no o'rtasida qaysi birini birinchi qo'yasiz va nega?",
    ],
  },
  {
    id: "met-a2",
    slug: "a2-maktabim",
    title: "A2: «Maktabim» (1-sinf) — ifodali ijro va tahlil",
    summary: "I.Muslim she'ri, F.Nazarov musiqasi, «Maktabim». Maktab, birinchi sinf taassurotlari. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A2",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN3", "TN4"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: I.Muslim she'ri, F.Nazarov musiqasi, «Maktabim» (1-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A2 (amaliy mashg'ulot, 2 soat)",
              "Muallif: I.Muslim she'ri, F.Nazarov musiqasi",
              "Sinf: 1-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: maktab, birinchi sinf taassurotlari",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Birinchi sinfning birinchi qo'shiqlaridan biri. Bu yerda vazifa qo'shiqni «to'g'ri» kuylashdan ko'ra ko'proq maktabga ijobiy munosabat uyg'otish: bola qo'shiq orqali o'zini maktabning bir qismi deb his qiladi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 6-7 yosh: oraliq tor, nafas qisqa. Baland nota tez charchatadi.",
          },
          {
            kind: "nota",
            caption: "do1 - lya1: 1-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "eng past" },
                { keys: ["a/4"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: 1-sinf bolasi tushunmaydigan so'z bormi? Bo'lsa, uni qanday tushuntirasiz?",
              "Ohang: ohang asosan yuqoriga ko'tariladimi yoki pastga tushadimi? Diapazonni yozib oling.",
              "Ritm va o'lchov: ritmik naqsh takrorlanadimi? Takrorlanuvchi joy o'rgatishni osonlashtiradi.",
              "Shakl: necha band va necha naqorat bor? 1-sinf uchun hammasini o'rganish shartmi?",
              "Xarakter: qo'shiq quvnoqmi, mayinmi? Buni bolaga qanday so'z bilan aytasiz?",
              "Ijro rejasi: nafas joylari va harakatlar (qo'l, qadam) qaysi joyga tushadi?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: 1-sinf o'quvchisi matnni yodlashga ulgurmaydi; ohang esa unga tanish bo'lmaydi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "O'yin ritmi: tez va aniq. Avval sekin aytib, keyin tezlashtiriladi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "2/4",
              notes: [
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ti" },
                { keys: ["e/4"], duration: "8", lyric: "ti" },
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ti" },
                { keys: ["e/4"], duration: "q", lyric: "ta" },
                { keys: ["e/4"], duration: "q", lyric: "ta" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "quvnoq, yengil bolalar ovozi",
              "qisqa iboralar — bir nafasga bitta ibora",
              "so'z oxirlarini yemaslik",
            ],
          },
          {
            kind: "mashq",
            text: "Qo'shiqning birinchi ikki iborasini aks-sado usulida mashq qiling: o'zingiz kuylang, keyin o'zingizning yozib olingan ijroingizdan takrorlang. Qaysi joyda takrorlash qiyin bo'ldi?",
          },
          {
            kind: "mashq",
            text: "Matndan bitta so'z tanlab, unga harakat o'ylab toping. Shu harakat bilan butun bandni kuylang.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: 1-sinf o'quvchisi matnni yodlashga ulgurmaydi; ohang esa unga tanish bo'lmaydi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Yuqori notaga chiqish",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "q" },
                { keys: ["f/4"], duration: "q" },
                { keys: ["g/4"], duration: "q" },
                { keys: ["a/4"], duration: "q" },
                { keys: ["a/4"], duration: "h", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Yuqori notaga chiqish: pog'onama-pog'ona ko'tarilinadi, sakrab emas. Tomoq erkin qolsin.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "«Aks-sado» usuli bilan ishlang: siz bir iborani kuylaysiz, sinf takrorlaydi. Matnni rasm yoki harakat bilan bog'lang — yod olish shu bilan tezlashadi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlik sifatida yengil chapak yoki marakas yetarli — 1-sinfda ortiqcha jo'rlik ohangni bo'g'adi.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Maktabim» — maktab, birinchi sinf taassurotlari mavzusida, 1-sinf uchun.",
              "Ijroda asosiy e'tibor: quvnoq, yengil bolalar ovozi.",
              "Eng ko'p xato qilinadigan joy: 1-sinf o'quvchisi matnni yodlashga ulgurmaydi; ohang esa unga tanish bo'lmaydi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Maktabim» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "1-sinfda qo'shiqni «to'g'ri» kuylash muhimmi yoki unga qiziqish uyg'otish? Javobingizni shu qo'shiq misolida asoslang.",
    ],
  },
  {
    id: "met-a3",
    slug: "a3-alifbo",
    title: "A3: «Alifbo» (1-sinf) — ifodali ijro va tahlil",
    summary: "P.Mo'min she'ri, D.Omonullayeva musiqasi, «Alifbo». Harflar, savod chiqarish. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A3",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN3", "TN4"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: P.Mo'min she'ri, D.Omonullayeva musiqasi, «Alifbo» (1-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A3 (amaliy mashg'ulot, 2 soat)",
              "Muallif: P.Mo'min she'ri, D.Omonullayeva musiqasi",
              "Sinf: 1-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: harflar, savod chiqarish",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Qo'shiq ikki vazifani birga bajaradi: musiqiy va savod. Shu sababli bu yerda diksiya — asosiy ish. Harflar aniq aytilmasa, qo'shiqning o'quv ma'nosi yo'qoladi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 6-7 yosh: oraliq tor, nafas qisqa. Baland nota tez charchatadi.",
          },
          {
            kind: "nota",
            caption: "do1 - lya1: 1-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "eng past" },
                { keys: ["a/4"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: eng ko'p bo'g'in to'plangan joyni toping — aynan u yerda temp sekinlashtiriladi.",
              "Ohang: ohang bir joyda turadimi yoki sakrab yuradimi? Sakrash bo'lsa, uni qanday mashq qilasiz?",
              "Ritm va o'lchov: so'z urg'usi musiqa urg'usiga to'g'ri keladimi? Nomuvofiq joyni belgilang.",
              "Shakl: takrorlanuvchi qism bormi? U sinfga tayanch bo'ladi.",
              "Xarakter: qo'shiq o'yinmi, marshmi, hikoyami?",
              "Ijro rejasi: tempni qaysi joydan tezlatish mumkin va qaysi joyda sekin qolishi kerak?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: matn tez va bo'g'inlarga to'la; bolalar shoshilib, harflarni yeb qo'yadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "O'yin ritmi: tez va aniq. Avval sekin aytib, keyin tezlashtiriladi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "2/4",
              notes: [
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ti" },
                { keys: ["e/4"], duration: "8", lyric: "ti" },
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ti" },
                { keys: ["e/4"], duration: "q", lyric: "ta" },
                { keys: ["e/4"], duration: "q", lyric: "ta" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "har bir harf va bo'g'inni aniq aytish",
              "sekin tempdan boshlab asta tezlatish",
              "so'z oxiridagi undoshlarni yo'qotmaslik",
            ],
          },
          {
            kind: "mashq",
            text: "Matnni musiqasiz, bir xil ritmda aytib chiqing — birinchi marta sekin, ikkinchi marta ikki barobar tez. Tez variantda qaysi bo'g'in yo'qoldi?",
          },
          {
            kind: "mashq",
            text: "Bitta bandni kuylab, telefonga yozib oling va eshitib, tushunarsiz chiqqan uchta so'zni yozib qo'ying.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: matn tez va bo'g'inlarga to'la; bolalar shoshilib, harflarni yeb qo'yadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Diksiya mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "2/4",
              notes: [
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ka" },
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ka" },
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ka" },
                { keys: ["e/4"], duration: "q", lyric: "ta" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Diksiya mashqi: bo'g'inlar aniq va bir xil. Sekin boshlanadi, keyin tezlashtiriladi.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Avval matnni musiqasiz, ritmda aytib chiqing (ritmik deklamatsiya), keyin ohangga qo'shing. Tezligi asta oshirilsin.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Har bir bo'g'inga bitta zarb — doira yoki chapak bilan bo'g'inni belgilash diksiyani mustahkamlaydi.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Alifbo» — harflar, savod chiqarish mavzusida, 1-sinf uchun.",
              "Ijroda asosiy e'tibor: har bir harf va bo'g'inni aniq aytish.",
              "Eng ko'p xato qilinadigan joy: matn tez va bo'g'inlarga to'la; bolalar shoshilib, harflarni yeb qo'yadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Alifbo» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Diksiya ustida ishlash ohang ustida ishlashdan oldin kelishi kerakmi? Shu qo'shiq misolida javob bering.",
    ],
  },
  {
    id: "met-a4",
    slug: "a4-ozbekiston-bayrogi",
    title: "A4: «O'zbekiston bayrog'i» (1-sinf) — ifodali ijro va tahlil",
    summary: "I.Mirzo she'ri, M.Nurmatov musiqasi, «O'zbekiston bayrog'i». Davlat ramzi — bayroq. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A4",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN3", "TN4"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: I.Mirzo she'ri, M.Nurmatov musiqasi, «O'zbekiston bayrog'i» (1-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A4 (amaliy mashg'ulot, 2 soat)",
              "Muallif: I.Mirzo she'ri, M.Nurmatov musiqasi",
              "Sinf: 1-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: davlat ramzi — bayroq",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Ramziy mavzudagi qo'shiq birinchi sinfda. Vazifa — tantanavorlikni bolalarcha yengillik bilan birga saqlash: 1-sinf ovozi bilan «ulug'vor» ijro talab qilinsa, ovoz zo'riqadi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 6-7 yosh: oraliq tor, nafas qisqa. Baland nota tez charchatadi.",
          },
          {
            kind: "nota",
            caption: "do1 - lya1: 1-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "eng past" },
                { keys: ["a/4"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: ramziy so'zlarni ro'yxatga oling va har biriga bitta sodda izoh yozing.",
              "Ohang: eng baland nota qaysi so'zga to'g'ri keladi? U so'z matnning eng muhim so'zimi?",
              "Ritm va o'lchov: o'lchov marshga yaqinmi? Qadam bilan sinab ko'ring.",
              "Shakl: qism va naqorat farqi nimada — dinamikada, registrda yoki ritmda?",
              "Xarakter: qo'shiqning kayfiyatini uch so'z bilan yozing.",
              "Ijro rejasi: nafas joylari va eng kuchli joyni belgilang.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: ramziy so'zlar (ramz, mustaqil, hur) 1-sinf uchun notanish bo'lishi mumkin. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Marsh ritmi: zarb bir tekis, kuchli zarb aniq bilinadi. Qadam bilan sinab ko'ring.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "q", lyric: "bir" },
                { keys: ["e/4"], duration: "q", lyric: "ik" },
                { keys: ["e/4"], duration: "q", lyric: "uch" },
                { keys: ["e/4"], duration: "q", lyric: "to'rt" },
                { keys: ["e/4"], duration: "8", lyric: "bir" },
                { keys: ["e/4"], duration: "8", lyric: "va" },
                { keys: ["e/4"], duration: "q", lyric: "ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "tantanavor, lekin yengil ovoz",
              "bayroq so'zini aniq va hurmat bilan aytish",
              "bir xil, shoshilmaydigan temp",
            ],
          },
          {
            kind: "mashq",
            text: "Birinchi bandni ikki xil dinamikada kuylang: oddiy va tantanavor. Farqni nima hosil qildi — baland ovozmi yoki boshqa narsa? Javobingizni yozib qo'ying.",
          },
          {
            kind: "mashq",
            text: "Bayroq haqidagi ikki daqiqalik suhbat rejasini tuzing: uch savol va kutilayotgan javob.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: ramziy so'zlar (ramz, mustaqil, hur) 1-sinf uchun notanish bo'lishi mumkin. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Temp mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "q", lyric: "1" },
                { keys: ["e/4"], duration: "q", lyric: "2" },
                { keys: ["e/4"], duration: "q", lyric: "3" },
                { keys: ["e/4"], duration: "q", lyric: "4" },
                { keys: ["e/4"], duration: "q", lyric: "1" },
                { keys: ["e/4"], duration: "q", lyric: "2" },
                { keys: ["e/4"], duration: "q", lyric: "3" },
                { keys: ["e/4"], duration: "q", lyric: "4" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Temp mashqi: sakkiz zarb bir xil tezlikda. Oxirgi zarb birinchisi bilan bir xil bo'lishi kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Qo'shiqdan oldin bayroq rangi va ramzi haqida qisqa suhbat o'tkazing — matn shundan keyin ma'noli bo'ladi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlik sodda bo'lsin; tantanavorlik tempda va dinamikada, jo'rlikning qalinligida emas.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«O'zbekiston bayrog'i» — davlat ramzi — bayroq mavzusida, 1-sinf uchun.",
              "Ijroda asosiy e'tibor: tantanavor, lekin yengil ovoz.",
              "Eng ko'p xato qilinadigan joy: ramziy so'zlar (ramz, mustaqil, hur) 1-sinf uchun notanish bo'lishi mumkin.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«O'zbekiston bayrog'i» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Ramziy mavzudagi qo'shiqni 1-sinfda o'rgatishda eng katta xato nima bo'lishi mumkin?",
    ],
  },
  {
    id: "met-a5",
    slug: "a5-alla",
    title: "A5: «Alla» (1-sinf) — ifodali ijro va tahlil",
    summary: "Xalq qo'shig'i, «Alla». Alla janri, ona mehri. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A5",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: Xalq qo'shig'i, «Alla» (1-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A5 (amaliy mashg'ulot, 2 soat)",
              "Muallif: Xalq qo'shig'i",
              "Sinf: 1-sinf",
              "Turi: xalq qo'shig'i",
              "Mavzu: alla janri, ona mehri",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Alla — o'zbek xalq musiqasining eng qadimgi janrlaridan biri va bola birinchi eshitgan musiqa. Mashg'ulotning qiymati shunda: talaba bu yerda past dinamikada, yumshoq tembrda ishlashni o'rganadi — bu ko'nikma keyin barcha mayin asarlarga o'tadi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 6-7 yosh: oraliq tor, nafas qisqa. Baland nota tez charchatadi.",
          },
          {
            kind: "nota",
            caption: "do1 - lya1: 1-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "eng past" },
                { keys: ["a/4"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: takrorlanuvchi bo'g'in yoki so'z (alla, hu-hu) qanday vazifa bajaradi?",
              "Ohang: ohang tor diapazonda yuradimi? Alla uchun bu qanday ma'no beradi?",
              "Ritm va o'lchov: tebranish hissi qanday hosil bo'ladi — o'lchovdan yoki ritmik naqshdan?",
              "Shakl: ohang necha marta takrorlanadi? Takror alla uchun nega muhim?",
              "Xarakter: qanday vositalar mayinlikni hosil qiladi?",
              "Ijro rejasi: dinamika chegarasini belgilang — eng baland joy ham qanchalik past qolishi kerak?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: sekin tempni ushlab turish; bolalar allani ham quvnoq qo'shiqdek tezlatib yuboradi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Alla tebranishi: ikki zarbli yumshoq tebranish. Temp sekin va o'zgarmas.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "6/8",
              notes: [
                { keys: ["e/4"], duration: "q", lyric: "al" },
                { keys: ["e/4"], duration: "8", lyric: "la" },
                { keys: ["e/4"], duration: "q", lyric: "al" },
                { keys: ["e/4"], duration: "8", lyric: "la" },
                { keys: ["e/4"], duration: "q", lyric: "hu" },
                { keys: ["e/4"], duration: "8", lyric: "hu" },
                { keys: ["e/4"], duration: "h", lyric: "al-la" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "yumshoq, past dinamika (pianissimo yo'nalishida)",
              "legato — tovushlar uzilmasin",
              "sekin, tebranuvchi temp",
            ],
          },
          {
            kind: "mashq",
            text: "Allani ikki marta kuylang: birinchi marta oddiy ovozda, ikkinchi marta imkon qadar past dinamikada, lekin tovush yo'qolmasin. Ikkinchisi qiyinroq bo'ldimi — nega?",
          },
          {
            kind: "mashq",
            text: "Tebranish harakati bilan kuylab, tempni metronomsiz bir xil ushlab turishga harakat qiling; yozib oling va boshi bilan oxirini solishtiring.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: sekin tempni ushlab turish; bolalar allani ham quvnoq qo'shiqdek tezlatib yuboradi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Legato mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "h" },
                { keys: ["f/4"], duration: "h" },
                { keys: ["g/4"], duration: "h" },
                { keys: ["f/4"], duration: "h" },
                { keys: ["e/4"], duration: "h" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Legato mashqi: notalar uzilmaydi, nafas bir tekis sarflanadi. Dinamika past.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Tebranish harakatini qo'shing: qo'l yoki tanani sekin tebratib kuylash tempni o'z-o'zidan ushlab turadi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rliksiz, a cappella kuylash eng mosi; kerak bo'lsa juda sekin doira yoki qo'l tebranishi.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Alla» — alla janri, ona mehri mavzusida, 1-sinf uchun.",
              "Ijroda asosiy e'tibor: yumshoq, past dinamika (pianissimo yo'nalishida).",
              "Eng ko'p xato qilinadigan joy: sekin tempni ushlab turish; bolalar allani ham quvnoq qo'shiqdek tezlatib yuboradi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Alla» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Past dinamikada kuylash baland kuylashdan qiyinroqmi? Shu mashg'ulot tajribasidan kelib chiqib javob bering.",
    ],
  },
  {
    id: "met-a6",
    slug: "a6-vatanjonim-vatanim",
    title: "A6: «Vatanjonim-vatanim» (2-sinf) — ifodali ijro va tahlil",
    summary: "P.Mo'min she'ri, D.Omonullayeva musiqasi, «Vatanjonim-vatanim». Vatan tuyg'usi. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A6",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: P.Mo'min she'ri, D.Omonullayeva musiqasi, «Vatanjonim-vatanim» (2-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A6 (amaliy mashg'ulot, 2 soat)",
              "Muallif: P.Mo'min she'ri, D.Omonullayeva musiqasi",
              "Sinf: 2-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: vatan tuyg'usi",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "2-sinfda ovoz 1-sinfdagiga qaraganda ishonchliroq, nafas uzunroq. Shuning uchun bu yerda birinchi marta «ifodali ijro» talabini jiddiy qo'yish mumkin: nafaqat to'g'ri, balki ma'noga mos kuylash.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 7-8 yosh: ovoz ishonchliroq, lekin yuqori chegara hali past.",
          },
          {
            kind: "nota",
            caption: "si (kichik oktava) - si1: 2-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "eng past" },
                { keys: ["b/4"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: eng kuchli ma'noli so'zni toping va uni belgilang.",
              "Ohang: eng baland nota matnning eng kuchli so'ziga to'g'ri keladimi?",
              "Ritm va o'lchov: ritmda cho'ziq notalar qayerda — ular ma'noga mos joydami?",
              "Shakl: qism va naqoratni ajratib, qaysi biri yodda tezroq qolishini aniqlang.",
              "Xarakter: kayfiyat band va naqoratda o'zgaradimi?",
              "Ijro rejasi: dinamikani chizib chiqing — qaysi joydan kuchayadi, qaysi joydan pasayadi?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: cho'qqini topmaslik: qo'shiq boshdan oxir bir xil balandlikda kuylanib qolishi mumkin. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Lirik ritm: ibora uzun, cho'ziq nota ibora oxirini ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["e/4"], duration: "q", lyric: "bir" },
                { keys: ["e/4"], duration: "q", lyric: "ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["e/4"], duration: "w", lyric: "to'rt zarb" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "iliq, ifodali ovoz",
              "iboralarni ma'noga qarab bo'lish",
              "cho'qqiga asta kelish",
            ],
          },
          {
            kind: "mashq",
            text: "Matnni she'r kabi ifodali o'qib, eng kuchli so'zni belgilang. Keyin kuylab, cho'qqi aynan shu so'zga tushishini tekshiring.",
          },
          {
            kind: "mashq",
            text: "Bitta bandni dinamik rejasiz va reja bilan kuylab, ikki yozuvni solishtiring.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: cho'qqini topmaslik: qo'shiq boshdan oxir bir xil balandlikda kuylanib qolishi mumkin. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Dinamika mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "h", lyric: "sekin" },
                { keys: ["f/4"], duration: "h", lyric: "o'rta" },
                { keys: ["g/4"], duration: "h", lyric: "to'liq" },
                { keys: ["f/4"], duration: "h", lyric: "o'rta" },
                { keys: ["e/4"], duration: "h", lyric: "sekin" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Dinamika mashqi: balandlik emas, kuch o'zgaradi. Tovush sifati hamma bosqichda bir xil.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Avval matnni she'r kabi ifodali o'qitib ko'ring: qaysi so'z eng kuchli aytildi — musiqiy cho'qqi ham odatda shu yerda.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Yengil jo'rlik yetarli; cho'qqida jo'rlikni bir pog'ona kuchaytirish mumkin.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Vatanjonim-vatanim» — vatan tuyg'usi mavzusida, 2-sinf uchun.",
              "Ijroda asosiy e'tibor: iliq, ifodali ovoz.",
              "Eng ko'p xato qilinadigan joy: cho'qqini topmaslik: qo'shiq boshdan oxir bir xil balandlikda kuylanib qolishi mumkin.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Vatanjonim-vatanim» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Ifodali ijro bilan «baland ijro» o'rtasidagi farqni shu qo'shiq misolida qanday tushuntirasiz?",
    ],
  },
  {
    id: "met-a7",
    slug: "a7-soglom-avlod-qoshigi",
    title: "A7: «Sog'lom avlod qo'shig'i» (2-sinf) — ifodali ijro va tahlil",
    summary: "T.Bahromov she'ri, Sh.Yormatov musiqasi, «Sog'lom avlod qo'shig'i». Salomatlik, sport, faol turmush. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A7",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: T.Bahromov she'ri, Sh.Yormatov musiqasi, «Sog'lom avlod qo'shig'i» (2-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A7 (amaliy mashg'ulot, 2 soat)",
              "Muallif: T.Bahromov she'ri, Sh.Yormatov musiqasi",
              "Sinf: 2-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: salomatlik, sport, faol turmush",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Marsh xarakteridagi qo'shiq. U harakat bilan birga kuylash uchun qulay — ya'ni musiqiy-ritmik harakatlar metodikasini (M14) amalda sinab ko'rish imkoniyati.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 7-8 yosh: ovoz ishonchliroq, lekin yuqori chegara hali past.",
          },
          {
            kind: "nota",
            caption: "si (kichik oktava) - si1: 2-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "eng past" },
                { keys: ["b/4"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: buyruq yoki chaqiriq ohangidagi so'zlar bormi? Ular ritmga qanday ta'sir qiladi?",
              "Ohang: ohang marshga xos sakrashlarga egami?",
              "Ritm va o'lchov: o'lchovni aniqlang va qadam naqshini yozib oling.",
              "Shakl: naqorat band bilan taqqoslanganda qanchalik faolroq?",
              "Xarakter: qo'shiq chaqiradimi, hisobot beradimi, quvnaytiradimi?",
              "Ijro rejasi: harakat qaysi joyda qo'shiladi va qaysi joyda to'xtaydi?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: harakat qo'shilganda nafas yetmaydi va ohang buziladi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Marsh ritmi: zarb bir tekis, kuchli zarb aniq bilinadi. Qadam bilan sinab ko'ring.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "q", lyric: "bir" },
                { keys: ["e/4"], duration: "q", lyric: "ik" },
                { keys: ["e/4"], duration: "q", lyric: "uch" },
                { keys: ["e/4"], duration: "q", lyric: "to'rt" },
                { keys: ["e/4"], duration: "8", lyric: "bir" },
                { keys: ["e/4"], duration: "8", lyric: "va" },
                { keys: ["e/4"], duration: "q", lyric: "ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "aniq, chegarasi bilinadigan ritm",
              "qadam bilan birga kuylash",
              "faol, lekin zo'riqmagan ovoz",
            ],
          },
          {
            kind: "mashq",
            text: "Qo'shiqni joyda qadam bosib kuylang. Nafas yetmay qolgan joyni belgilang va u yerga nafas belgisi qo'ying.",
          },
          {
            kind: "mashq",
            text: "Naqoratga mos sodda harakat ketma-ketligi o'ylab toping (to'rtta harakatdan oshmasin) va yozib qo'ying.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: harakat qo'shilganda nafas yetmaydi va ohang buziladi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Nafas mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "4 zarb" },
                { keys: ["d/4"], duration: "w", lyric: "4 zarb" },
                { keys: ["f/4"], duration: "w", lyric: "4 zarb" },
                { keys: ["d/4"], duration: "w", lyric: "nafas" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Nafas mashqi: har bir nota to'rt zarb ushlanadi. Tovush oxirigacha tekis qolishi kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Avval joyda qadam bilan ritmni mustahkamlang, keyin ohang qo'shing — teskari tartibda ikkisi ham buziladi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Doira yoki baraban ritmni ushlab turadi; chapakni faqat naqoratga qo'shing.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Sog'lom avlod qo'shig'i» — salomatlik, sport, faol turmush mavzusida, 2-sinf uchun.",
              "Ijroda asosiy e'tibor: aniq, chegarasi bilinadigan ritm.",
              "Eng ko'p xato qilinadigan joy: harakat qo'shilganda nafas yetmaydi va ohang buziladi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Sog'lom avlod qo'shig'i» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Harakat qo'shilganda ijro sifati pasaydimi yoki yaxshilandimi? Nega?",
    ],
  },
  {
    id: "met-a8",
    slug: "a8-obod-vatanim",
    title: "A8: «Obod vatanim» (3-sinf) — ifodali ijro va tahlil",
    summary: "J.Jabborov she'ri, Sh.Yormatov musiqasi, «Obod vatanim». Obodlik, mehnat va vatan. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A8",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: J.Jabborov she'ri, Sh.Yormatov musiqasi, «Obod vatanim» (3-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A8 (amaliy mashg'ulot, 2 soat)",
              "Muallif: J.Jabborov she'ri, Sh.Yormatov musiqasi",
              "Sinf: 3-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: obodlik, mehnat va vatan",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "3-sinfda ovoz kuchayadi va bolalar uzunroq iborani bir nafasga sig'dira oladi. Shuning uchun bu yerda keng, ohangdor iboralar bilan ishlash mumkin.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 8-9 yosh: ovoz kuchayadi, ansambl talabi qo'yish mumkin.",
          },
          {
            kind: "nota",
            caption: "si (kichik oktava) - do2: 3-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: qo'shiq nimani maqtaydi — joyni, odamni yoki mehnatni?",
              "Ohang: eng baland notani aniqlang va u sinf diapazoniga sig'ishini tekshiring.",
              "Ritm va o'lchov: cho'ziq notalar iboralarni qanday bo'ladi?",
              "Shakl: ikki qismli shaklni ajratib, o'tish joyini belgilang.",
              "Xarakter: band va naqorat o'rtasidagi kayfiyat farqi qanday?",
              "Ijro rejasi: nafas joylarini belgilab, naqorat uchun alohida reja yozing.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: naqoratdagi eng baland nota — 3-sinf uchun chegaraga yaqin bo'lishi mumkin. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Lirik ritm: ibora uzun, cho'ziq nota ibora oxirini ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "q", lyric: "bir" },
                { keys: ["f/4"], duration: "q", lyric: "ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "w", lyric: "to'rt zarb" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "keng, ohangdor iboralar",
              "nafasni iboraga yetkazish",
              "naqoratdagi yuqori notani zo'riqmasdan olish",
            ],
          },
          {
            kind: "mashq",
            text: "Naqoratni asl balandlikda va bir yarim parda pastda kuylab ko'ring. Qaysi variant sinf uchun qulay? Javobni asoslang.",
          },
          {
            kind: "mashq",
            text: "Bitta iborani bir nafasga kuylashga harakat qiling; yetmasa, iborani qayerdan bo'lish mumkinligini belgilang.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: naqoratdagi eng baland nota — 3-sinf uchun chegaraga yaqin bo'lishi mumkin. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Yuqori notaga chiqish",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "q" },
                { keys: ["g/4"], duration: "q" },
                { keys: ["a/4"], duration: "q" },
                { keys: ["b/4"], duration: "q" },
                { keys: ["c/5"], duration: "q" },
                { keys: ["c/5"], duration: "h", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Yuqori notaga chiqish: pog'onama-pog'ona ko'tarilinadi, sakrab emas. Tomoq erkin qolsin.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Naqoratni alohida, past tonallikda o'rgatib, keyin asl balandlikka ko'tarish mumkin.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlik ohangni qo'llab-quvvatlasin; naqoratda to'liq jo'rlik.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Obod vatanim» — obodlik, mehnat va vatan mavzusida, 3-sinf uchun.",
              "Ijroda asosiy e'tibor: keng, ohangdor iboralar.",
              "Eng ko'p xato qilinadigan joy: naqoratdagi eng baland nota — 3-sinf uchun chegaraga yaqin bo'lishi mumkin.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Obod vatanim» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Asarni sinf diapazoniga moslashtirish uchun tonallikni o'zgartirish mumkinmi? Bu tahlilga qanday ta'sir qiladi?",
    ],
  },
  {
    id: "met-a9",
    slug: "a9-doira-dum-dum",
    title: "A9: «Doira dum dum» (3-sinf) — ifodali ijro va tahlil",
    summary: "Xalq qo'shig'i, «Doira dum dum». Doira, zarb va xalq usullari. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A9",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: Xalq qo'shig'i, «Doira dum dum» (3-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A9 (amaliy mashg'ulot, 2 soat)",
              "Muallif: Xalq qo'shig'i",
              "Sinf: 3-sinf",
              "Turi: xalq qo'shig'i",
              "Mavzu: doira, zarb va xalq usullari",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Bu mashg'ulot ritm ustida ishlash uchun eng qulay: qo'shiqning o'zi doira zarbini taqlid qiladi. Talaba bu yerda bolalar cholg'ulari (Orf cholg'ulari, doira) bilan ishlashni amalda sinaydi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 8-9 yosh: ovoz kuchayadi, ansambl talabi qo'yish mumkin.",
          },
          {
            kind: "nota",
            caption: "si (kichik oktava) - do2: 3-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: taqlidiy so'zlar (dum, dum-dum) musiqiy vazifani bajaradimi?",
              "Ohang: ohang tor diapazondami? Bu ritmga e'tiborni qanday o'zgartiradi?",
              "Ritm va o'lchov: asosiy usul naqshini yozib oling va uni qo'l bilan urib chiqing.",
              "Shakl: takrorlanuvchi bo'lim bormi? U guruhlarga bo'lish uchun qulaymi?",
              "Xarakter: qo'shiq o'yinmi yoki mehnat qo'shig'imi?",
              "Ijro rejasi: zarb qaysi joydan kiradi va qaysi joyda to'xtaydi?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: so'z va zarb bir vaqtda bajarilganda ikkisidan biri buziladi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Doira usuli: olti zarbli formula. Avval qo'l bilan, keyin doirada mashq qilinadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "6/8",
              notes: [
                { keys: ["f/4"], duration: "8", lyric: "bum" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
                { keys: ["f/4"], duration: "8", lyric: "bum" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
                { keys: ["f/4"], duration: "q", lyric: "bum" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "zarb bilan so'zni bir vaqtda ushlab turish",
              "usulni tezlatmaslik",
              "aniq, quruq diksiya",
            ],
          },
          {
            kind: "mashq",
            text: "Asosiy usulni qo'l bilan urib, bir vaqtda matnni ayting (kuylamasdan). Ikkisi birga chiqqandan keyingina ohangni qo'shing.",
          },
          {
            kind: "mashq",
            text: "Tempni metronom yoki sanoq bilan bir xil ushlab, boshidan oxirigacha yozib oling. Oxiri boshidan tezroq chiqdimi?",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: so'z va zarb bir vaqtda bajarilganda ikkisidan biri buziladi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Temp mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "q", lyric: "1" },
                { keys: ["f/4"], duration: "q", lyric: "2" },
                { keys: ["f/4"], duration: "q", lyric: "3" },
                { keys: ["f/4"], duration: "q", lyric: "4" },
                { keys: ["f/4"], duration: "q", lyric: "1" },
                { keys: ["f/4"], duration: "q", lyric: "2" },
                { keys: ["f/4"], duration: "q", lyric: "3" },
                { keys: ["f/4"], duration: "q", lyric: "4" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Temp mashqi: sakkiz zarb bir xil tezlikda. Oxirgi zarb birinchisi bilan bir xil bo'lishi kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Sinfni ikkiga bo'ling: bir guruh zarb beradi, ikkinchisi kuylaydi; keyin almashtiring. Ikkisini birga faqat shundan keyin qo'shing.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Doira asosiy jo'rlik; yo'q bo'lsa stol yoki tizza zarbi ham bo'ladi.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Doira dum dum» — doira, zarb va xalq usullari mavzusida, 3-sinf uchun.",
              "Ijroda asosiy e'tibor: zarb bilan so'zni bir vaqtda ushlab turish.",
              "Eng ko'p xato qilinadigan joy: so'z va zarb bir vaqtda bajarilganda ikkisidan biri buziladi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Doira dum dum» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Ritmni so'zdan oldin yoki keyin o'rgatish kerak? Shu qo'shiq tajribasidan javob bering.",
    ],
  },
  {
    id: "met-a10",
    slug: "a10-tinchlik-bolsin-3-sinf",
    title: "A10: «Tinchlik bo'lsin» (3-sinf) — ifodali ijro va tahlil",
    summary: "H.Ahmedov she'ri, X.Hasanova musiqasi, «Tinchlik bo'lsin». Tinchlik, do'stlik. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A10",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: H.Ahmedov she'ri, X.Hasanova musiqasi, «Tinchlik bo'lsin» (3-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A10 (amaliy mashg'ulot, 2 soat)",
              "Muallif: H.Ahmedov she'ri, X.Hasanova musiqasi",
              "Sinf: 3-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: tinchlik, do'stlik",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Tinchlik mavzusi dasturda ikki marta uchraydi: 3-sinfda (shu mashg'ulot) va 7-sinfda (A27). Ikkisini solishtirish talaba uchun foydali: bir mavzu ikki yosh darajasida qanday boshqacha ishlanadi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 8-9 yosh: ovoz kuchayadi, ansambl talabi qo'yish mumkin.",
          },
          {
            kind: "nota",
            caption: "si (kichik oktava) - do2: 3-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: tinchlik tushunchasi qanday obrazlar bilan berilgan?",
              "Ohang: ohang bosqichma-bosqich yuradimi yoki sakraydimi?",
              "Ritm va o'lchov: ritm bir xilmi? Bir xillik ijroga qanday xavf tug'diradi?",
              "Shakl: qismlar soni va ularning o'xshashlik darajasi qanday?",
              "Xarakter: xotirjamlik qanday vositalar bilan hosil qilingan?",
              "Ijro rejasi: diqqatni ushlab turish uchun qaysi joyga kichik o'zgarish (dinamika, tembr) kiritasiz?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: qo'shiq xotirjam bo'lgani uchun diqqat susayadi va ijro «yuvilib» ketadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Lirik ritm: ibora uzun, cho'ziq nota ibora oxirini ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "q", lyric: "bir" },
                { keys: ["f/4"], duration: "q", lyric: "ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "w", lyric: "to'rt zarb" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "xotirjam, ravon ijro",
              "bir xil dinamikani ushlab turish",
              "iboralar oxirini yumshoq tugatish",
            ],
          },
          {
            kind: "mashq",
            text: "Qo'shiqni ikki marta kuylang: ikkinchi marta uchta joyga kichik dinamik o'zgarish kiritib. Qaysi variant qiziqroq eshitildi?",
          },
          {
            kind: "mashq",
            text: "Oddiy kanon sinab ko'ring: ikki guruh bir necha zarb farq bilan boshlaydi. Mos keladimi? Natijani yozib qo'ying.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: qo'shiq xotirjam bo'lgani uchun diqqat susayadi va ijro «yuvilib» ketadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Dinamika mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "sekin" },
                { keys: ["g/4"], duration: "h", lyric: "o'rta" },
                { keys: ["a/4"], duration: "h", lyric: "to'liq" },
                { keys: ["g/4"], duration: "h", lyric: "o'rta" },
                { keys: ["f/4"], duration: "h", lyric: "sekin" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Dinamika mashqi: balandlik emas, kuch o'zgaradi. Tovush sifati hamma bosqichda bir xil.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Yo'naltiruvchi savol bilan boshlang: tinchlikni musiqada qanday ko'rsatish mumkin? Javoblar ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Sodda, ushlab turuvchi jo'rlik; kanon elementlarini keyin qo'shish mumkin.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Tinchlik bo'lsin» — tinchlik, do'stlik mavzusida, 3-sinf uchun.",
              "Ijroda asosiy e'tibor: xotirjam, ravon ijro.",
              "Eng ko'p xato qilinadigan joy: qo'shiq xotirjam bo'lgani uchun diqqat susayadi va ijro «yuvilib» ketadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Tinchlik bo'lsin» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Xotirjam asarda tinglovchi diqqatini qanday ushlab turasiz?",
    ],
  },
  {
    id: "met-a11",
    slug: "a11-handalak",
    title: "A11: «Handalak» (4-sinf) — ifodali ijro va tahlil",
    summary: "P.Mo'min she'ri, D.Omonullayeva musiqasi, «Handalak». Meva, yoz, dehqon mehnati. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A11",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: P.Mo'min she'ri, D.Omonullayeva musiqasi, «Handalak» (4-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A11 (amaliy mashg'ulot, 2 soat)",
              "Muallif: P.Mo'min she'ri, D.Omonullayeva musiqasi",
              "Sinf: 4-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: meva, yoz, dehqon mehnati",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Tasviriy mavzudagi quvnoq qo'shiq. 4-sinfda bolalar obrazni ovoz bilan ko'rsatishga qodir — ya'ni bu yerda tembr va artikulyatsiya bilan o'ynash mumkin.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 9-10 yosh: nafas uzayadi, ikki ovozlilik elementlari kiritiladi.",
          },
          {
            kind: "nota",
            caption: "si (kichik oktava) - re2: 4-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "eng past" },
                { keys: ["d/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: tasviriy so'zlarni ajratib, har biriga ovoz rangi tanlang.",
              "Ohang: o'ynoqilik ohangning qaysi xususiyatidan kelib chiqadi?",
              "Ritm va o'lchov: eng tez ritmik naqshni toping va uni sekin tempda mashq qiling.",
              "Shakl: band va naqorat xarakterda farq qiladimi?",
              "Xarakter: qo'shiq hazilmi yoki maqtovmi?",
              "Ijro rejasi: artikulyatsiya rejasini yozing — qaysi joy staccato, qaysi joy legato?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: tez joylarda so'zlar tushib qoladi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "O'yin ritmi: tez va aniq. Avval sekin aytib, keyin tezlashtiriladi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "2/4",
              notes: [
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "q", lyric: "ta" },
                { keys: ["f/4"], duration: "q", lyric: "ta" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "quvnoq, o'ynoqi xarakter",
              "tez bo'g'inlarda aniq diksiya",
              "obrazni ovoz rangi bilan ko'rsatish",
            ],
          },
          {
            kind: "mashq",
            text: "Eng tez iborani sekin tempda o'n marta aniq ayting, keyin asl tempga olib chiqing. Qaysi bo'g'in oxirigacha qiyin qoldi?",
          },
          {
            kind: "mashq",
            text: "Bitta bandni ikki xil ovoz rangi bilan kuylab yozib oling va qaysi biri obrazga mos kelganini yozib qo'ying.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: tez joylarda so'zlar tushib qoladi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Diksiya mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "2/4",
              notes: [
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ka" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ka" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ka" },
                { keys: ["f/4"], duration: "q", lyric: "ta" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Diksiya mashqi: bo'g'inlar aniq va bir xil. Sekin boshlanadi, keyin tezlashtiriladi.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Tasviriy so'zlarni harakat yoki ishora bilan bog'lang; bolalar obrazni avval tana bilan, keyin ovoz bilan ko'rsatadi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Yengil zarbli cholg'ular (marakas, qoshiq) obrazni kuchaytiradi.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Handalak» — meva, yoz, dehqon mehnati mavzusida, 4-sinf uchun.",
              "Ijroda asosiy e'tibor: quvnoq, o'ynoqi xarakter.",
              "Eng ko'p xato qilinadigan joy: tez joylarda so'zlar tushib qoladi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Handalak» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Tasviriy qo'shiqda ovoz rangi bilan o'ynash qachon ortiqcha bo'lib qoladi?",
    ],
  },
  {
    id: "met-a12",
    slug: "a12-muzqaymoq",
    title: "A12: «Muzqaymoq» (4-sinf) — ifodali ijro va tahlil",
    summary: "N.Qayumov she'ri, A.Mansurov musiqasi, «Muzqaymoq». Bolalar sevimli shirinligi, yoz. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A12",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: N.Qayumov she'ri, A.Mansurov musiqasi, «Muzqaymoq» (4-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A12 (amaliy mashg'ulot, 2 soat)",
              "Muallif: N.Qayumov she'ri, A.Mansurov musiqasi",
              "Sinf: 4-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: bolalar sevimli shirinligi, yoz",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Hazil ohangidagi qo'shiq. Metodik qiymati: talaba hazilni ijroda qanday o'lchov bilan berishni o'rganadi — ortiqcha qilinsa, qo'shiq qiliqqa aylanadi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 9-10 yosh: nafas uzayadi, ikki ovozlilik elementlari kiritiladi.",
          },
          {
            kind: "nota",
            caption: "si (kichik oktava) - re2: 4-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "eng past" },
                { keys: ["d/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: hazil qaysi so'zlarda yashiringan?",
              "Ohang: kutilmagan sakrash yoki to'xtam bormi?",
              "Ritm va o'lchov: pauzalar qayerda va ular hazilga qanday xizmat qiladi?",
              "Shakl: takror qismlarda o'zgarish bormi?",
              "Xarakter: hazil yengil-mayinmi yoki shaddodmi?",
              "Ijro rejasi: dinamik qarama-qarshiliklarni belgilang.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: hazil xarakteri ortiqcha bajarilib, ijro buzilishi mumkin. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "O'yin ritmi: tez va aniq. Avval sekin aytib, keyin tezlashtiriladi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "2/4",
              notes: [
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "q", lyric: "ta" },
                { keys: ["f/4"], duration: "q", lyric: "ta" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "yengil, hazil xarakteri",
              "dinamik qarama-qarshilik (sekin-baland)",
              "to'xtamlarni (pauza) aniq bajarish",
            ],
          },
          {
            kind: "mashq",
            text: "Qo'shiqni bir marta jiddiy, bir marta hazil bilan kuylab yozib oling. Hazil qaysi vositalar bilan hosil bo'ldi — temp, dinamika yoki artikulyatsiya?",
          },
          {
            kind: "mashq",
            text: "Pauzalarni ataylab uzaytirib kuylab ko'ring. Qachon bu kulgili, qachon xunuk eshitiladi?",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: hazil xarakteri ortiqcha bajarilib, ijro buzilishi mumkin. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Dinamika mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "sekin" },
                { keys: ["g/4"], duration: "h", lyric: "o'rta" },
                { keys: ["a/4"], duration: "h", lyric: "to'liq" },
                { keys: ["g/4"], duration: "h", lyric: "o'rta" },
                { keys: ["f/4"], duration: "h", lyric: "sekin" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Dinamika mashqi: balandlik emas, kuch o'zgaradi. Tovush sifati hamma bosqichda bir xil.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "«Ikki variant» usuli: bir marta jiddiy, bir marta hazil bilan kuylatib, sinfning o'zi mosini tanlaydi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Qisqa zarbli urg'ular hazilni ko'rsatadi; jo'rlik ortiqcha qalin bo'lmasin.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Muzqaymoq» — bolalar sevimli shirinligi, yoz mavzusida, 4-sinf uchun.",
              "Ijroda asosiy e'tibor: yengil, hazil xarakteri.",
              "Eng ko'p xato qilinadigan joy: hazil xarakteri ortiqcha bajarilib, ijro buzilishi mumkin.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Muzqaymoq» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Hazil xarakteridagi asarda o'lchovni qanday saqlaysiz?",
    ],
  },
  {
    id: "met-a13",
    slug: "a13-aka-singil",
    title: "A13: «Aka-singil» (4-sinf) — ifodali ijro va tahlil",
    summary: "Xalq qo'shig'i, «Aka-singil». Oila, aka-singil mehri. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A13",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: Xalq qo'shig'i, «Aka-singil» (4-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A13 (amaliy mashg'ulot, 2 soat)",
              "Muallif: Xalq qo'shig'i",
              "Sinf: 4-sinf",
              "Turi: xalq qo'shig'i",
              "Mavzu: oila, aka-singil mehri",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Dialog shaklidagi xalq qo'shig'i — guruhlarga bo'lib ishlash uchun tabiiy material. Talaba bu yerda ansambl boshqarishni mashq qiladi: kirish ishorasi, almashish, birgalikda tugatish.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 9-10 yosh: nafas uzayadi, ikki ovozlilik elementlari kiritiladi.",
          },
          {
            kind: "nota",
            caption: "si (kichik oktava) - re2: 4-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "eng past" },
                { keys: ["d/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: savol qaysi, javob qaysi? Rollarni ajratib yozing.",
              "Ohang: savol va javob ohangi bir xilmi yoki farq qiladimi?",
              "Ritm va o'lchov: almashinuv joyida ritm qanday?",
              "Shakl: dialog necha marta takrorlanadi?",
              "Xarakter: suhbat ohangi iliqmi, hazilmi, jiddiymi?",
              "Ijro rejasi: kirish ishoralarini va birga tugatish joyini belgilang.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: guruhlar kirish joyini kechiktiradi yoki bir-birini bosib ketadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Dialog ritmi: savol va javob ikki guruhga bo'linadi. Ikkinchi guruh aniq vaqtda kiradi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "q", lyric: "sa" },
                { keys: ["f/4"], duration: "q", lyric: "vol" },
                { keys: ["f/4"], duration: "h", lyric: "?" },
                { keys: ["f/4"], duration: "q", lyric: "ja" },
                { keys: ["f/4"], duration: "q", lyric: "vob" },
                { keys: ["f/4"], duration: "h", lyric: "." },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "guruhlar almashinuvining aniqligi",
              "savol-javob xarakterini ovozda ko'rsatish",
              "birga tugatish",
            ],
          },
          {
            kind: "mashq",
            text: "Ikki rolni ham o'zingiz kuylab yozib oling (ikki yozuvni ketma-ket qo'ying). Almashinuv joyida uzilish bormi?",
          },
          {
            kind: "mashq",
            text: "Kirish ishorasini oynaga qarab mashq qiling: ko'z, nafas, qo'l. Uchta elementning ketma-ketligini yozib qo'ying.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: guruhlar kirish joyini kechiktiradi yoki bir-birini bosib ketadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Kanon mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "q", lyric: "1" },
                { keys: ["g/4"], duration: "q", lyric: "2" },
                { keys: ["a/4"], duration: "q", lyric: "3" },
                { keys: ["f/4"], duration: "q", lyric: "4" },
                { keys: ["a/4"], duration: "q", lyric: "5" },
                { keys: ["c/5"], duration: "q", lyric: "6" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Kanon mashqi: ikkinchi guruh shu iborani ikki zarb kechikib boshlaydi.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Sinfni ikki guruhga bo'lib, kirish ishorasini qo'l bilan aniq bering. Guruhlarni almashtirib, ikkala rolni ham sinab ko'rsinlar.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlik minimal bo'lsin — dialog aniq eshitilishi kerak.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Aka-singil» — oila, aka-singil mehri mavzusida, 4-sinf uchun.",
              "Ijroda asosiy e'tibor: guruhlar almashinuvining aniqligi.",
              "Eng ko'p xato qilinadigan joy: guruhlar kirish joyini kechiktiradi yoki bir-birini bosib ketadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Aka-singil» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Ansamblda kirish ishorasi nega ovozdan muhimroq bo'lib qoladi?",
    ],
  },
  {
    id: "met-a14",
    slug: "a14-bizdan-sizga-kim-kerak",
    title: "A14: «Bizdan sizga kim kerak?» (4-sinf) — ifodali ijro va tahlil",
    summary: "Y.Qurbonova she'ri, M.Nasimova musiqasi, «Bizdan sizga kim kerak?». O'yin-qo'shiq, tanishuv. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A14",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: Y.Qurbonova she'ri, M.Nasimova musiqasi, «Bizdan sizga kim kerak?» (4-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A14 (amaliy mashg'ulot, 2 soat)",
              "Muallif: Y.Qurbonova she'ri, M.Nasimova musiqasi",
              "Sinf: 4-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: o'yin-qo'shiq, tanishuv",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "O'yin-qo'shiq: ijro harakat va o'yin qoidasi bilan birga boradi. Metodik qiymati — talaba o'yin paytida musiqiy sifatni ushlab turishni o'rganadi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 9-10 yosh: nafas uzayadi, ikki ovozlilik elementlari kiritiladi.",
          },
          {
            kind: "nota",
            caption: "si (kichik oktava) - re2: 4-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "eng past" },
                { keys: ["d/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: savol-javob tuzilmasi qanday?",
              "Ohang: ohang oddiy va tez yod bo'ladiganmi?",
              "Ritm va o'lchov: harakat ritmga mos keladimi?",
              "Shakl: o'yin necha bosqichdan iborat?",
              "Xarakter: qo'shiq raqobatlimi yoki do'stonami?",
              "Ijro rejasi: o'yin qoidasi bilan ijro talabini bir varaqqa yozing.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: o'yin qizib ketganda ijro qichqiriqqa aylanadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "O'yin ritmi: tez va aniq. Avval sekin aytib, keyin tezlashtiriladi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "2/4",
              notes: [
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "q", lyric: "ta" },
                { keys: ["f/4"], duration: "q", lyric: "ta" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "o'yin paytida ohangni buzmaslik",
              "guruh savoliga guruh javobi",
              "o'yin qoidasini qisqa tushuntirish",
            ],
          },
          {
            kind: "mashq",
            text: "O'yin qoidasini 60 soniyada tushuntirish matnini yozib, ovoz chiqarib o'qib vaqtini o'lchang.",
          },
          {
            kind: "mashq",
            text: "Qo'shiqni harakat bilan kuylab yozib oling: ohang qaysi joyda buzildi?",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: o'yin qizib ketganda ijro qichqiriqqa aylanadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Temp mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "q", lyric: "1" },
                { keys: ["f/4"], duration: "q", lyric: "2" },
                { keys: ["f/4"], duration: "q", lyric: "3" },
                { keys: ["f/4"], duration: "q", lyric: "4" },
                { keys: ["f/4"], duration: "q", lyric: "1" },
                { keys: ["f/4"], duration: "q", lyric: "2" },
                { keys: ["f/4"], duration: "q", lyric: "3" },
                { keys: ["f/4"], duration: "q", lyric: "4" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Temp mashqi: sakkiz zarb bir xil tezlikda. Oxirgi zarb birinchisi bilan bir xil bo'lishi kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "O'yin qoidasini qo'shiqdan oldin, bir daqiqada tushuntiring. Qoida uzoq tushuntirilsa, dars o'yinga aylanib, musiqa qoladi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rliksiz ham bo'ladi; zarb faqat tempni ushlash uchun.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Bizdan sizga kim kerak?» — o'yin-qo'shiq, tanishuv mavzusida, 4-sinf uchun.",
              "Ijroda asosiy e'tibor: o'yin paytida ohangni buzmaslik.",
              "Eng ko'p xato qilinadigan joy: o'yin qizib ketganda ijro qichqiriqqa aylanadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Bizdan sizga kim kerak?» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "O'yin-qo'shiqda musiqiy sifatni qanday saqlab qolasiz?",
    ],
  },
  {
    id: "met-a15",
    slug: "a15-bayram-qoshigi",
    title: "A15: «Bayram qo'shig'i» (4-sinf) — ifodali ijro va tahlil",
    summary: "Xalq qo'shig'i, «Bayram qo'shig'i». Bayram, xalq sayli. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A15",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: Xalq qo'shig'i, «Bayram qo'shig'i» (4-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A15 (amaliy mashg'ulot, 2 soat)",
              "Muallif: Xalq qo'shig'i",
              "Sinf: 4-sinf",
              "Turi: xalq qo'shig'i",
              "Mavzu: bayram, xalq sayli",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Bayram qo'shig'i ommaviy ijro uchun: sinf, maktab yoki tadbir sahnasida. Shuning uchun bu yerda ansambl aniqligi va temp barqarorligi birinchi o'ringa chiqadi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 9-10 yosh: nafas uzayadi, ikki ovozlilik elementlari kiritiladi.",
          },
          {
            kind: "nota",
            caption: "si (kichik oktava) - re2: 4-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "eng past" },
                { keys: ["d/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: bayram obrazi qanday so'zlar bilan berilgan?",
              "Ohang: ohang ommaviy ijroga qulaymi — diapazon tor emasmi?",
              "Ritm va o'lchov: chapak naqshini yozib oling.",
              "Shakl: naqorat hammaga mo'ljallanganmi?",
              "Xarakter: tantanavorlik bilan quvnoqlik qanday nisbatda?",
              "Ijro rejasi: temp nazoratini kim ushlab turadi va qanday?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: ommaviy ijroda temp asta tezlashib ketadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Bayram ritmi: chapak va zarb navbatlashadi. Tayanch guruh tempni ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "8", lyric: "cha" },
                { keys: ["f/4"], duration: "8", lyric: "pak" },
                { keys: ["f/4"], duration: "q", lyric: "zarb" },
                { keys: ["f/4"], duration: "8", lyric: "cha" },
                { keys: ["f/4"], duration: "8", lyric: "pak" },
                { keys: ["f/4"], duration: "q", lyric: "zarb" },
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "tantanavor-quvnoq xarakter",
              "temp barqarorligi",
              "ommaviy ijroda ansambl aniqligi",
            ],
          },
          {
            kind: "mashq",
            text: "Qo'shiqni boshidan oxirigacha yozib oling va boshidagi hamda oxiridagi tempni sanab solishtiring. Farq bo'lsa, qancha?",
          },
          {
            kind: "mashq",
            text: "Chapak naqshini o'ylab topib, uni qo'shiq bilan birga bajaring; naqsh ohangga xalaqit bermasligini tekshiring.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: ommaviy ijroda temp asta tezlashib ketadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Temp mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "q", lyric: "1" },
                { keys: ["f/4"], duration: "q", lyric: "2" },
                { keys: ["f/4"], duration: "q", lyric: "3" },
                { keys: ["f/4"], duration: "q", lyric: "4" },
                { keys: ["f/4"], duration: "q", lyric: "1" },
                { keys: ["f/4"], duration: "q", lyric: "2" },
                { keys: ["f/4"], duration: "q", lyric: "3" },
                { keys: ["f/4"], duration: "q", lyric: "4" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Temp mashqi: sakkiz zarb bir xil tezlikda. Oxirgi zarb birinchisi bilan bir xil bo'lishi kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Doira yoki chapak bilan tempni ushlab turadigan «tayanch guruh» ajratib qo'ying.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Doira va chapak; naqoratda hamma qo'shiladi.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Bayram qo'shig'i» — bayram, xalq sayli mavzusida, 4-sinf uchun.",
              "Ijroda asosiy e'tibor: tantanavor-quvnoq xarakter.",
              "Eng ko'p xato qilinadigan joy: ommaviy ijroda temp asta tezlashib ketadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Bayram qo'shig'i» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Ommaviy ijroda temp nazoratini kimga ishonib topshirasiz va nega?",
    ],
  },
  {
    id: "met-a16",
    slug: "a16-davlat-madhiyasi-yuqori-sinf",
    title: "A16: «O'zbekiston Respublikasi Davlat madhiyasi» — ifodali ijro va tahlil",
    summary: "A.Oripov she'ri, M.Burhonov musiqasi, «O'zbekiston Respublikasi Davlat madhiyasi». Davlat ramzi — yuqori sinflar darajasida. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A16",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: A.Oripov she'ri, M.Burhonov musiqasi, «O'zbekiston Respublikasi Davlat madhiyasi».",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A16 (amaliy mashg'ulot, 2 soat)",
              "Muallif: A.Oripov she'ri, M.Burhonov musiqasi",
              "Sinf: barcha sinflar (davlat ramzi)",
              "Turi: davlat madhiyasi",
              "Mavzu: davlat ramzi — yuqori sinflar darajasida",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Dasturda Davlat madhiyasi ikki marta beriladi: A1 (boshlang'ich daraja) va shu mashg'ulot. Takror xato emas — yuqori sinflarda talab boshqacha: to'liq diapazon, uzun nafas, ansambl aniqligi va ijro tartibini mustaqil tushuntirib bera olish.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 12-13 yosh: mutatsiya davom etadi, tessitura ehtiyotkor tanlanadi.",
          },
          {
            kind: "nota",
            caption: "si (kichik oktava) - re2: 7-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "eng past" },
                { keys: ["d/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: ramziy so'zlarni yuqori sinf darajasida qanday izohlaysiz?",
              "Ohang: eng baland nota mutatsiya davridagi ovoz uchun qanday xavf tug'diradi?",
              "Ritm va o'lchov: cho'ziq notalarni oxirigacha ushlash qancha nafas talab qiladi?",
              "Shakl: qism va naqorat o'tishini aniq belgilang.",
              "Xarakter: tantanavorlikni ortiqcha kuch bilan emas, nima bilan berasiz?",
              "Ijro rejasi: nafas joylarini yozib, ularni butun sinf uchun bir xil qiling.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: yuqori registr va 7-sinf atrofidagi ovoz mutatsiyasi davri. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Tantanavor ritm: cho'ziq notalar ko'p, temp sekin va barqaror.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "q", lyric: "uch" },
                { keys: ["f/4"], duration: "q", lyric: "to'rt" },
                { keys: ["f/4"], duration: "w", lyric: "bir-ik-uch-to'rt" },
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "to'liq diapazonda zo'riqmasdan ijro",
              "uzun iboralarda nafas taqsimi",
              "unison aniqligi",
            ],
          },
          {
            kind: "mashq",
            text: "Madhiyaning eng uzun iborasini bir nafasga kuylashga harakat qiling. Yetmasa, nafas joyini qayerga qo'yish mumkin — ma'noni buzmaydigan joyni toping.",
          },
          {
            kind: "mashq",
            text: "Ijro tartibini (tik turish, boshlash, tugatish, keyin nima bo'ladi) yozib, uni bir daqiqada tushuntirib berishga mashq qiling.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: yuqori registr va 7-sinf atrofidagi ovoz mutatsiyasi davri. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Nafas mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["b/3"], duration: "w", lyric: "4 zarb" },
                { keys: ["d/4"], duration: "w", lyric: "4 zarb" },
                { keys: ["f/4"], duration: "w", lyric: "4 zarb" },
                { keys: ["d/4"], duration: "w", lyric: "nafas" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Nafas mashqi: har bir nota to'rt zarb ushlanadi. Tovush oxirigacha tekis qolishi kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Yuqori sinflarda madhiyani o'rgatish emas, aniqlashtirish kerak: nima allaqachon bilinadi, qaysi joy aniq emas — shuni toping va shu bilan ishlang.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Rasmiy jo'rlik yozuvi bo'lsa, u bilan ishlang; tempi o'zgarmaydi.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«O'zbekiston Respublikasi Davlat madhiyasi» — davlat ramzi — yuqori sinflar darajasida mavzusida, barcha sinflar (davlat ramzi) uchun.",
              "Ijroda asosiy e'tibor: to'liq diapazonda zo'riqmasdan ijro.",
              "Eng ko'p xato qilinadigan joy: yuqori registr va 7-sinf atrofidagi ovoz mutatsiyasi davri.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«O'zbekiston Respublikasi Davlat madhiyasi» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Madhiyani yuqori sinfda o'rgatish bilan boshlang'ich sinfda o'rgatish o'rtasidagi asosiy farq nima?",
    ],
  },
  {
    id: "met-a17",
    slug: "a17-aziz-ustozlar",
    title: "A17: «Aziz ustozlar» (5-sinf) — ifodali ijro va tahlil",
    summary: "To'lqin she'ri, S.Bofoyev musiqasi, «Aziz ustozlar». Ustoz hurmati, o'qituvchilar kuni. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A17",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: To'lqin she'ri, S.Bofoyev musiqasi, «Aziz ustozlar» (5-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A17 (amaliy mashg'ulot, 2 soat)",
              "Muallif: To'lqin she'ri, S.Bofoyev musiqasi",
              "Sinf: 5-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: ustoz hurmati, O'qituvchilar kuni",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Bayram repertuariga kiradigan qo'shiq. Shuning uchun mashg'ulotda ikki narsa birga ishlanadi: ifodali ijro va sahnaga tayyorlash tartibi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 10-11 yosh: ayrim bolalarda ovoz o'zgarishi belgilari paydo bo'ladi.",
          },
          {
            kind: "nota",
            caption: "lya (kichik oktava) - re2: 5-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["a/3"], duration: "w", lyric: "eng past" },
                { keys: ["d/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["b/3"], duration: "q", lyric: "si" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["b/3"], duration: "q", lyric: "si" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: murojaat kimga va qanday ohangda?",
              "Ohang: ohangdagi eng ifodali joy qaysi?",
              "Ritm va o'lchov: ritm qo'shiqni marshga yoki qo'shiq-murojaatga yaqinlashtiradimi?",
              "Shakl: necha band sahnada ijro etiladi?",
              "Xarakter: hurmatni qanday vositalar bilan ko'rsatasiz?",
              "Ijro rejasi: sahna uchun alohida reja — kirish, ijro, tugatish va tashakkur.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: bayram ijrosida bolalar ovozni zo'riqtirib yuboradi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Lirik ritm: ibora uzun, cho'ziq nota ibora oxirini ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "q", lyric: "bir" },
                { keys: ["f/4"], duration: "q", lyric: "ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "w", lyric: "to'rt zarb" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "hurmat ohangi — mayin, lekin ishonchli",
              "iboralarni ma'noga qarab bo'lish",
              "sahnada turish va qarash",
            ],
          },
          {
            kind: "mashq",
            text: "Bitta bandni mikrofonsiz va telefon mikrofoniga yaqin kuylab yozib oling. Dinamikani qanday o'zgartirish kerak bo'ldi?",
          },
          {
            kind: "mashq",
            text: "Sahnaga chiqish-tushish tartibini yozib, uni bir marta ovoz chiqarib mashq qiling.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: bayram ijrosida bolalar ovozni zo'riqtirib yuboradi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Dinamika mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "sekin" },
                { keys: ["g/4"], duration: "h", lyric: "o'rta" },
                { keys: ["a/4"], duration: "h", lyric: "to'liq" },
                { keys: ["g/4"], duration: "h", lyric: "o'rta" },
                { keys: ["f/4"], duration: "h", lyric: "sekin" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Dinamika mashqi: balandlik emas, kuch o'zgaradi. Tovush sifati hamma bosqichda bir xil.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Matnni kimga qaratilganini aniqlashtirib oling: qo'shiq ustozga murojaat. Murojaat ohangi dinamikani o'zi belgilaydi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlik mayin; sahnada mikrofon bo'lsa, dinamikani pasaytirish kerak.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Aziz ustozlar» — ustoz hurmati, O'qituvchilar kuni mavzusida, 5-sinf uchun.",
              "Ijroda asosiy e'tibor: hurmat ohangi — mayin, lekin ishonchli.",
              "Eng ko'p xato qilinadigan joy: bayram ijrosida bolalar ovozni zo'riqtirib yuboradi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Aziz ustozlar» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Bayram ijrosida ovozni zo'riqtirmaslik uchun oldindan nima qilish kerak?",
    ],
  },
  {
    id: "met-a18",
    slug: "a18-otin-kuz-qoshigi",
    title: "A18: «Otin kuz qo'shig'i» (5-sinf) — ifodali ijro va tahlil",
    summary: "N.Nazrullayev she'ri, A.Mansurov musiqasi, «Otin kuz qo'shig'i». Kuz manzarasi, tabiat. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A18",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: N.Nazrullayev she'ri, A.Mansurov musiqasi, «Otin kuz qo'shig'i» (5-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A18 (amaliy mashg'ulot, 2 soat)",
              "Muallif: N.Nazrullayev she'ri, A.Mansurov musiqasi",
              "Sinf: 5-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: kuz manzarasi, tabiat",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Tasviriy-manzara qo'shig'i. Metodik qiymati: talaba dinamika va tembr bilan manzara yaratishni mashq qiladi — bu musiqa tinglash darsiga ham o'tadigan ko'nikma.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 10-11 yosh: ayrim bolalarda ovoz o'zgarishi belgilari paydo bo'ladi.",
          },
          {
            kind: "nota",
            caption: "lya (kichik oktava) - re2: 5-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["a/3"], duration: "w", lyric: "eng past" },
                { keys: ["d/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["b/3"], duration: "q", lyric: "si" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["b/3"], duration: "q", lyric: "si" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: qanday manzara chiziladi — ro'yxat tuzing.",
              "Ohang: ohang manzaraga mos harakat qiladimi (yuqoriga, pastga)?",
              "Ritm va o'lchov: ritm sokinmi? Sokinlik qanday saqlanadi?",
              "Shakl: bandlar o'rtasida o'zgarish bormi?",
              "Xarakter: kuz kayfiyati — xotirjammi, g'amginmi, to'kinmi?",
              "Ijro rejasi: har bir bandga alohida dinamika yozing.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: manzara qo'shig'i bir xil kuylansa, zerikarli chiqadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Lirik ritm: ibora uzun, cho'ziq nota ibora oxirini ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "q", lyric: "bir" },
                { keys: ["f/4"], duration: "q", lyric: "ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "w", lyric: "to'rt zarb" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "tasviriy dinamika",
              "mayin tembr",
              "iboralarni cho'zib, shoshilmasdan",
            ],
          },
          {
            kind: "mashq",
            text: "Har bir bandga bitta rang tanlab, dinamika rejasini yozing va shu reja bilan kuylab yozib oling.",
          },
          {
            kind: "mashq",
            text: "Bitta iborani uch xil tembrda kuylang (yumshoq, ochiq, nay kabi). Manzaraga qaysi biri mos?",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: manzara qo'shig'i bir xil kuylansa, zerikarli chiqadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Legato mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h" },
                { keys: ["g/4"], duration: "h" },
                { keys: ["a/4"], duration: "h" },
                { keys: ["g/4"], duration: "h" },
                { keys: ["f/4"], duration: "h" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Legato mashqi: notalar uzilmaydi, nafas bir tekis sarflanadi. Dinamika past.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Rang-tasvir bilan bog'lang: har bir bandga bitta rang tanlab, dinamikani shu rangga moslashtiring.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Yumshoq jo'rlik; zarbli cholg'u kerak emas.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Otin kuz qo'shig'i» — kuz manzarasi, tabiat mavzusida, 5-sinf uchun.",
              "Ijroda asosiy e'tibor: tasviriy dinamika.",
              "Eng ko'p xato qilinadigan joy: manzara qo'shig'i bir xil kuylansa, zerikarli chiqadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Otin kuz qo'shig'i» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Tasviriy asarda dinamika rejasi bo'lmasa, ijro nima yo'qotadi?",
    ],
  },
  {
    id: "met-a19",
    slug: "a19-lazgi-yallama-yorim",
    title: "A19: «Lazgi, Yallama yorim» (5-sinf) — ifodali ijro va tahlil",
    summary: "Xalq qo'shig'i, «Lazgi, Yallama yorim». Xorazm lazgisi va xalq raqs-qo'shiqlari. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A19",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: Xalq qo'shig'i, «Lazgi, Yallama yorim» (5-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A19 (amaliy mashg'ulot, 2 soat)",
              "Muallif: Xalq qo'shig'i",
              "Sinf: 5-sinf",
              "Turi: xalq qo'shig'i",
              "Mavzu: Xorazm lazgisi va xalq raqs-qo'shiqlari",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulotda ikki xalq namunasi birga beriladi. Ularning umumiy jihati — usul (ritmik formula) va raqs harakati bilan bog'liqligi. Talaba bu yerda xalq usuli bilan ishlashni mashq qiladi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 10-11 yosh: ayrim bolalarda ovoz o'zgarishi belgilari paydo bo'ladi.",
          },
          {
            kind: "nota",
            caption: "lya (kichik oktava) - re2: 5-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["a/3"], duration: "w", lyric: "eng past" },
                { keys: ["d/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["b/3"], duration: "q", lyric: "si" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["b/3"], duration: "q", lyric: "si" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: takrorlanuvchi so'zlar va naqorat qanday vazifa bajaradi?",
              "Ohang: ohangda bezak (melizm) bormi? Ularni sinf uchun soddalashtirish mumkinmi?",
              "Ritm va o'lchov: usul naqshini yozib oling va qo'l bilan urib chiqing.",
              "Shakl: ikki asar o'rtasidagi o'tish qanday bo'ladi?",
              "Xarakter: raqs xarakteri ijro tempini qanday chegaralaydi?",
              "Ijro rejasi: usul, ohang va harakat qatlamlarini qaysi tartibda qo'shasiz?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: usul asta tezlashadi; raqs harakati qo'shilganda nafas yetmaydi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Doira usuli: olti zarbli formula. Avval qo'l bilan, keyin doirada mashq qilinadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "6/8",
              notes: [
                { keys: ["f/4"], duration: "8", lyric: "bum" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
                { keys: ["f/4"], duration: "8", lyric: "bum" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
                { keys: ["f/4"], duration: "q", lyric: "bum" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "usulni aniq va o'zgarmas ushlash",
              "raqs harakati bilan ijro",
              "milliy ijro uslubi elementlari",
            ],
          },
          {
            kind: "mashq",
            text: "Usulni doirada yoki qo'l bilan bir daqiqa davomida bir xil tempda urib turing (sanab tekshiring). Tezlashdimi?",
          },
          {
            kind: "mashq",
            text: "Bezakli joyni avval bezaksiz, keyin bezak bilan kuylang. Sinf uchun qaysi variantdan boshlaysiz?",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: usul asta tezlashadi; raqs harakati qo'shilganda nafas yetmaydi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Temp mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "q", lyric: "1" },
                { keys: ["f/4"], duration: "q", lyric: "2" },
                { keys: ["f/4"], duration: "q", lyric: "3" },
                { keys: ["f/4"], duration: "q", lyric: "4" },
                { keys: ["f/4"], duration: "q", lyric: "1" },
                { keys: ["f/4"], duration: "q", lyric: "2" },
                { keys: ["f/4"], duration: "q", lyric: "3" },
                { keys: ["f/4"], duration: "q", lyric: "4" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Temp mashqi: sakkiz zarb bir xil tezlikda. Oxirgi zarb birinchisi bilan bir xil bo'lishi kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Usulni avval doirada yoki qo'l bilan mustahkamlang, keyin ohang, eng oxirida harakat. Uch qatlam bir vaqtda o'rgatilmaydi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Doira — asosiy; lazgi usuli doirasiz to'liq eshitilmaydi.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Lazgi, Yallama yorim» — Xorazm lazgisi va xalq raqs-qo'shiqlari mavzusida, 5-sinf uchun.",
              "Ijroda asosiy e'tibor: usulni aniq va o'zgarmas ushlash.",
              "Eng ko'p xato qilinadigan joy: usul asta tezlashadi; raqs harakati qo'shilganda nafas yetmaydi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Lazgi, Yallama yorim» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Xalq asarini sinf uchun soddalashtirish qaysi chegaradan oshganda asar o'z qiyofasini yo'qotadi?",
    ],
  },
  {
    id: "met-a20",
    slug: "a20-barkamol-avlod",
    title: "A20: «Barkamol avlod» (5-sinf) — ifodali ijro va tahlil",
    summary: "I.Mirzo she'ri, I.Yuldoshev musiqasi, «Barkamol avlod». Barkamollik, maqsad va intilish. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A20",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: I.Mirzo she'ri, I.Yuldoshev musiqasi, «Barkamol avlod» (5-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A20 (amaliy mashg'ulot, 2 soat)",
              "Muallif: I.Mirzo she'ri, I.Yuldoshev musiqasi",
              "Sinf: 5-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: barkamollik, maqsad va intilish",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Gimn-marsh xarakteridagi qo'shiq. Bu yerda xor bo'lib unison kuylash aniqligi asosiy ish: ko'p so'zli matn va marsh ritmi ansambldan talab qiladi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 10-11 yosh: ayrim bolalarda ovoz o'zgarishi belgilari paydo bo'ladi.",
          },
          {
            kind: "nota",
            caption: "lya (kichik oktava) - re2: 5-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["a/3"], duration: "w", lyric: "eng past" },
                { keys: ["d/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["b/3"], duration: "q", lyric: "si" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["b/3"], duration: "q", lyric: "si" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: eng zich bo'g'inli iborani toping.",
              "Ohang: ohang unison uchun qulaymi?",
              "Ritm va o'lchov: marsh naqshi qanday? Qadam bilan tekshiring.",
              "Shakl: naqorat bandga nisbatan qanchalik kuchli?",
              "Xarakter: ko'tarinkilik qanday hosil bo'ladi?",
              "Ijro rejasi: so'zlarni birga tugatish uchun qanday ishora berasiz?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: matn zich; so'zlar ansamblda bir vaqtda chiqmaydi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Marsh ritmi: zarb bir tekis, kuchli zarb aniq bilinadi. Qadam bilan sinab ko'ring.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "q", lyric: "bir" },
                { keys: ["f/4"], duration: "q", lyric: "ik" },
                { keys: ["f/4"], duration: "q", lyric: "uch" },
                { keys: ["f/4"], duration: "q", lyric: "to'rt" },
                { keys: ["f/4"], duration: "8", lyric: "bir" },
                { keys: ["f/4"], duration: "8", lyric: "va" },
                { keys: ["f/4"], duration: "q", lyric: "ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "unison aniqligi",
              "ko'p so'zli matnda diksiya",
              "marsh xarakterida barqaror temp",
            ],
          },
          {
            kind: "mashq",
            text: "Eng zich iborani hamma birga ritmda aytib mashq qiling (kuylamasdan), keyin ohangga qo'shing.",
          },
          {
            kind: "mashq",
            text: "Ikki marta yozib oling: ishorasiz va kirish-tugatish ishorasi bilan. Farqni yozib qo'ying.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: matn zich; so'zlar ansamblda bir vaqtda chiqmaydi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Diksiya mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "2/4",
              notes: [
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ka" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ka" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ka" },
                { keys: ["f/4"], duration: "q", lyric: "ta" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Diksiya mashqi: bo'g'inlar aniq va bir xil. Sekin boshlanadi, keyin tezlashtiriladi.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Matnni ritmik deklamatsiya bilan, hamma birga aytib mashq qiling — unison avval so'zda, keyin ohangda tug'iladi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Aniq zarb jo'rligi; naqoratda to'liq.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Barkamol avlod» — barkamollik, maqsad va intilish mavzusida, 5-sinf uchun.",
              "Ijroda asosiy e'tibor: unison aniqligi.",
              "Eng ko'p xato qilinadigan joy: matn zich; so'zlar ansamblda bir vaqtda chiqmaydi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Barkamol avlod» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Unison aniqligi ohangdan oldin so'zda hal bo'ladi degan fikrga qo'shilasizmi?",
    ],
  },
  {
    id: "met-a21",
    slug: "a21-bolalar",
    title: "A21: «Bolalar» (6-sinf) — ifodali ijro va tahlil",
    summary: "J.Jabborov she'ri, H.Rahimov musiqasi, «Bolalar». Bolalik, do'stlik. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A21",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: J.Jabborov she'ri, H.Rahimov musiqasi, «Bolalar» (6-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A21 (amaliy mashg'ulot, 2 soat)",
              "Muallif: J.Jabborov she'ri, H.Rahimov musiqasi",
              "Sinf: 6-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: bolalik, do'stlik",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "6-sinfda ikki ovozlilik elementlarini kiritish mumkin. Shu mashg'ulotda kanon yoki ostinato bilan ishlash sinab ko'riladi — eng xavfsiz ikki ovozlilik shakli.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 11-12 yosh: mutatsiya davri — oraliq toraytiriladi, har bolaga alohida qaraladi.",
          },
          {
            kind: "nota",
            caption: "do1 - do2: 6-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["a/4"], duration: "q", lyric: "lya" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: qaysi iborani kanonga olish mumkin?",
              "Ohang: ohang kanonga mos keladimi (takrorlanganda mos eshitiladimi)?",
              "Ritm va o'lchov: kanon kirishi necha zarb farq bilan bo'ladi?",
              "Shakl: ikki ovozlilik qaysi qismda qo'llaniladi?",
              "Xarakter: ikki ovoz qo'shilganda xarakter o'zgaradimi?",
              "Ijro rejasi: guruhlar balansini qanday tekshirasiz?",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: ikkinchi ovoz birinchi ovozga «yopishib» ketadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Lirik ritm: ibora uzun, cho'ziq nota ibora oxirini ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "q", lyric: "bir" },
                { keys: ["f/4"], duration: "q", lyric: "ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "w", lyric: "to'rt zarb" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "ikki ovozlilikda o'z partiyasini ushlash",
              "boshqa ovozni eshitib turish",
              "ansambl balansi",
            ],
          },
          {
            kind: "mashq",
            text: "Kanonni o'zingiz bilan mashq qiling: birinchi ovozni yozib oling va uning ustiga ikkinchi ovozni kuylang. Mos keldimi?",
          },
          {
            kind: "mashq",
            text: "Ikki guruh balansini tekshirish uchun uchta savol yozing (kim baland, kim eshitilmaydi, qayerda uzilish bor).",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: ikkinchi ovoz birinchi ovozga «yopishib» ketadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Kanon mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "q", lyric: "1" },
                { keys: ["g/4"], duration: "q", lyric: "2" },
                { keys: ["a/4"], duration: "q", lyric: "3" },
                { keys: ["f/4"], duration: "q", lyric: "4" },
                { keys: ["a/4"], duration: "q", lyric: "5" },
                { keys: ["c/5"], duration: "q", lyric: "6" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Kanon mashqi: ikkinchi guruh shu iborani ikki zarb kechikib boshlaydi.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Kanondan boshlang: u bitta ohang bo'lgani uchun yod olish osonroq. Haqiqiy ikki ovozlilikka keyin o'tiladi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlik ikki ovozni ajratib ko'rsatmasin — balansni ovozlar o'zi topishi kerak.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Bolalar» — bolalik, do'stlik mavzusida, 6-sinf uchun.",
              "Ijroda asosiy e'tibor: ikki ovozlilikda o'z partiyasini ushlash.",
              "Eng ko'p xato qilinadigan joy: ikkinchi ovoz birinchi ovozga «yopishib» ketadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Bolalar» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Ikki ovozlilikni o'rgatishda eng birinchi qanday ko'nikma kerak — kuylash yoki eshitish?",
    ],
  },
  {
    id: "met-a22",
    slug: "a22-toshkent",
    title: "A22: «Toshkent» (6-sinf) — ifodali ijro va tahlil",
    summary: "U.Qo'chqor she'ri, X.Hasanova musiqasi, «Toshkent». Poytaxt, shahar obrazi. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A22",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: U.Qo'chqor she'ri, X.Hasanova musiqasi, «Toshkent» (6-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A22 (amaliy mashg'ulot, 2 soat)",
              "Muallif: U.Qo'chqor she'ri, X.Hasanova musiqasi",
              "Sinf: 6-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: poytaxt, shahar obrazi",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Keng ohangli, tantanavor qo'shiq. Metodik qiymati: keng sakrashlar bilan ishlash — intonatsiya aniqligini mashq qilish uchun yaxshi material.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 11-12 yosh: mutatsiya davri — oraliq toraytiriladi, har bolaga alohida qaraladi.",
          },
          {
            kind: "nota",
            caption: "do1 - do2: 6-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["a/4"], duration: "q", lyric: "lya" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: shahar obrazi qanday chiziladi?",
              "Ohang: eng keng sakrashni toping va uning oralig'ini aniqlang.",
              "Ritm va o'lchov: cho'ziq notalar iborani qanday ushlab turadi?",
              "Shakl: qism va naqoratning registr farqi qanday?",
              "Xarakter: tantanavorlik bilan iliqlik qanday birlashadi?",
              "Ijro rejasi: sakrashlarga tayyorgarlik nafasini belgilang.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: keng sakrashlarda nota aniqligi yo'qoladi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Tantanavor ritm: cho'ziq notalar ko'p, temp sekin va barqaror.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "q", lyric: "uch" },
                { keys: ["f/4"], duration: "q", lyric: "to'rt" },
                { keys: ["f/4"], duration: "w", lyric: "bir-ik-uch-to'rt" },
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "keng sakrashlarda intonatsiya aniqligi",
              "tantanavor, ochiq ovoz",
              "iboralarni oxirigacha olib borish",
            ],
          },
          {
            kind: "mashq",
            text: "Eng keng sakrashni avval bosqichma-bosqich, keyin to'g'ridan-to'g'ri kuylang. Aniqlikni yozib olib tekshiring.",
          },
          {
            kind: "mashq",
            text: "Bitta iborani jo'rliksiz kuylab, tonallikdan chiqib ketmaganingizni tekshiring.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: keng sakrashlarda nota aniqligi yo'qoladi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Sakrash mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "q", lyric: "past" },
                { keys: ["e/4"], duration: "q" },
                { keys: ["c/4"], duration: "q", lyric: "past" },
                { keys: ["g/4"], duration: "q" },
                { keys: ["c/4"], duration: "q", lyric: "past" },
                { keys: ["b/4"], duration: "h", lyric: "keng sakrash" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Sakrash mashqi: oraliq asta kengayadi. Har safar past notaga qaytib, quloqni tiklang.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Sakrashlarni alohida mashq qiling: pastdan yuqoriga oraliqni avval bo'lib (bosqichma-bosqich), keyin to'g'ridan-to'g'ri.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "To'liq jo'rlik mos; lekin sakrashlarni mashq qilganda jo'rliksiz ishlang.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Toshkent» — poytaxt, shahar obrazi mavzusida, 6-sinf uchun.",
              "Ijroda asosiy e'tibor: keng sakrashlarda intonatsiya aniqligi.",
              "Eng ko'p xato qilinadigan joy: keng sakrashlarda nota aniqligi yo'qoladi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Toshkent» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Intonatsiya aniqligini jo'rlik bilan mashq qilish nega xavfli bo'lishi mumkin?",
    ],
  },
  {
    id: "met-a23",
    slug: "a23-ozbegimdan-aylanay",
    title: "A23: «O'zbegimdan aylanay» (6-sinf) — ifodali ijro va tahlil",
    summary: "D.A'zamova she'ri, G.Qo'chqarova musiqasi, «O'zbegimdan aylanay». Milliy g'urur, yurt. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A23",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: D.A'zamova she'ri, G.Qo'chqarova musiqasi, «O'zbegimdan aylanay» (6-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A23 (amaliy mashg'ulot, 2 soat)",
              "Muallif: D.A'zamova she'ri, G.Qo'chqarova musiqasi",
              "Sinf: 6-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: milliy g'urur, yurt",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Milliy uslubga yaqin qo'shiq. Metodik qiymati: talaba xalq ijro uslubi elementlarini (bezak, cho'zim) bolalar ijrosiga qanday moslashtirishni o'rganadi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 11-12 yosh: mutatsiya davri — oraliq toraytiriladi, har bolaga alohida qaraladi.",
          },
          {
            kind: "nota",
            caption: "do1 - do2: 6-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["a/4"], duration: "q", lyric: "lya" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: his-hayajon qaysi so'zlarda to'plangan?",
              "Ohang: bezakli joylarni belgilang va ularni soddalashtirish variantini yozing.",
              "Ritm va o'lchov: erkin cho'zimlar bormi? Ular ansamblga qanday ta'sir qiladi?",
              "Shakl: naqorat milliy uslubni qanchalik ko'rsatadi?",
              "Xarakter: g'urur tuyg'usini ovozda qanday berasiz?",
              "Ijro rejasi: bezak qo'shiladigan ikki joyni tanlab asoslang.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: bezaklar ortiqcha qilinsa, bolalar ijrosi sun'iy chiqadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Raqs usuli: kuchli va kuchsiz zarb almashadi. Doirada «bum» past, «bak» baland zarb.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "8", lyric: "bum" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
                { keys: ["f/4"], duration: "q", lyric: "bum" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
                { keys: ["f/4"], duration: "8", lyric: "bak" },
                { keys: ["f/4"], duration: "q", lyric: "bum" },
                { keys: ["f/4"], duration: "q", lyric: "bak" },
                { keys: ["f/4"], duration: "q", lyric: "bum" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "milliy ohang bezaklarini o'rinli qo'llash",
              "cho'zimlarni oxirigacha ushlash",
              "ifodali, iliq ovoz",
            ],
          },
          {
            kind: "mashq",
            text: "Asosiy ohangni bezaksiz kuylab mustahkamlang, keyin ikki joyga bezak qo'shib yozib oling. Farqni solishtiring.",
          },
          {
            kind: "mashq",
            text: "Bitta cho'zimni sanab, oxirigacha ushlashni mashq qiling.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: bezaklar ortiqcha qilinsa, bolalar ijrosi sun'iy chiqadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Legato mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h" },
                { keys: ["g/4"], duration: "h" },
                { keys: ["a/4"], duration: "h" },
                { keys: ["g/4"], duration: "h" },
                { keys: ["f/4"], duration: "h" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Legato mashqi: notalar uzilmaydi, nafas bir tekis sarflanadi. Dinamika past.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Bezakni avval tashlab, asosiy ohangni mustahkamlang; bezakni keyin, faqat ikki-uch joyga qo'shing.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Milliy cholg'u yozuvi bo'lsa, uslub namunasi sifatida tinglatish mumkin.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«O'zbegimdan aylanay» — milliy g'urur, yurt mavzusida, 6-sinf uchun.",
              "Ijroda asosiy e'tibor: milliy ohang bezaklarini o'rinli qo'llash.",
              "Eng ko'p xato qilinadigan joy: bezaklar ortiqcha qilinsa, bolalar ijrosi sun'iy chiqadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«O'zbegimdan aylanay» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Xalq uslubidagi bezaklarni bolalar ijrosiga qanday o'lchov bilan kiritasiz?",
    ],
  },
  {
    id: "met-a24",
    slug: "a24-kim-epchil-u-kim-chaqqon",
    title: "A24: «Kim epchil-u, kim chaqqon» (6-sinf) — ifodali ijro va tahlil",
    summary: "A.Obidjonov she'ri, A.Mansurov musiqasi, «Kim epchil-u, kim chaqqon». O'yin, chaqqonlik, musobaqa. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A24",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN5", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: A.Obidjonov she'ri, A.Mansurov musiqasi, «Kim epchil-u, kim chaqqon» (6-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A24 (amaliy mashg'ulot, 2 soat)",
              "Muallif: A.Obidjonov she'ri, A.Mansurov musiqasi",
              "Sinf: 6-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: o'yin, chaqqonlik, musobaqa",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Tez tempdagi o'yin qo'shig'i. Bu yerda asosiy ish — tezlikda diksiya va ansambl aniqligini saqlash.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 11-12 yosh: mutatsiya davri — oraliq toraytiriladi, har bolaga alohida qaraladi.",
          },
          {
            kind: "nota",
            caption: "do1 - do2: 6-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["a/4"], duration: "q", lyric: "lya" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: eng tez aytiladigan iborani toping.",
              "Ohang: ohang tez tempda ham aniq eshitiladimi?",
              "Ritm va o'lchov: ritmik naqshni yozib oling.",
              "Shakl: musobaqa elementi shaklda ko'rinadimi?",
              "Xarakter: chaqqonlik qanday vositalar bilan beriladi?",
              "Ijro rejasi: temp pog'onalarini yozing (sekin, o'rtacha, asl).",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: tez tempda so'zlar bir-biriga qo'shilib ketadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "O'yin ritmi: tez va aniq. Avval sekin aytib, keyin tezlashtiriladi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "2/4",
              notes: [
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ti" },
                { keys: ["f/4"], duration: "q", lyric: "ta" },
                { keys: ["f/4"], duration: "q", lyric: "ta" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "tez tempda aniq diksiya",
              "ansamblning bir vaqtda kirishi",
              "ritmik aniqlik",
            ],
          },
          {
            kind: "mashq",
            text: "Eng tez iborani uch pog'onali tempda mashq qiling va har pog'onada yozib olib, diksiyani tekshiring.",
          },
          {
            kind: "mashq",
            text: "Guruh bo'lib kirish ishorasini mashq qiling: aniq bir vaqtda boshlash.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: tez tempda so'zlar bir-biriga qo'shilib ketadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Diksiya mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "2/4",
              notes: [
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ka" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ka" },
                { keys: ["f/4"], duration: "8", lyric: "ta" },
                { keys: ["f/4"], duration: "8", lyric: "ka" },
                { keys: ["f/4"], duration: "q", lyric: "ta" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Diksiya mashqi: bo'g'inlar aniq va bir xil. Sekin boshlanadi, keyin tezlashtiriladi.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Tempni asta oshirib boradigan «pog'ona» usuli: sekin, o'rtacha, asl temp. Har pog'onada diksiyani tekshirib o'ting.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Zarb tempni ushlab turadi; jo'rlik yengil.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Kim epchil-u, kim chaqqon» — o'yin, chaqqonlik, musobaqa mavzusida, 6-sinf uchun.",
              "Ijroda asosiy e'tibor: tez tempda aniq diksiya.",
              "Eng ko'p xato qilinadigan joy: tez tempda so'zlar bir-biriga qo'shilib ketadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Kim epchil-u, kim chaqqon» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Tez tempda diksiya bilan ansambl o'rtasida qaysi birini birinchi tuzatasiz?",
    ],
  },
  {
    id: "met-a25",
    slug: "a25-diyorim",
    title: "A25: «Diyorim» (6-sinf) — ifodali ijro va tahlil",
    summary: "R.Xo'jayev she'ri, N.Norxo'jayev musiqasi, «Diyorim». Tug'ilgan yurt, diyor. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A25",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: R.Xo'jayev she'ri, N.Norxo'jayev musiqasi, «Diyorim» (6-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A25 (amaliy mashg'ulot, 2 soat)",
              "Muallif: R.Xo'jayev she'ri, N.Norxo'jayev musiqasi",
              "Sinf: 6-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: tug'ilgan yurt, diyor",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Liro-epik xarakterdagi qo'shiq: uzun iboralar, keng nafas. Metodik qiymati — nafas taqsimi va cho'qqi ustida ishlash.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 11-12 yosh: mutatsiya davri — oraliq toraytiriladi, har bolaga alohida qaraladi.",
          },
          {
            kind: "nota",
            caption: "do1 - do2: 6-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["g/4"], duration: "q", lyric: "sol" },
                { keys: ["a/4"], duration: "q", lyric: "lya" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: iboralarni ma'no bo'yicha bo'lib chiqing.",
              "Ohang: cho'qqi qaysi joyda? U matnning eng kuchli so'ziga tushadimi?",
              "Ritm va o'lchov: cho'ziq notalar nafasni qanday chegaralaydi?",
              "Shakl: qism va naqoratning nafas talabi farq qiladimi?",
              "Xarakter: liro-epik xarakter tempni qanday belgilaydi?",
              "Ijro rejasi: nafas joylarini va cho'qqini yozib chiqing.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: uzun iboralarda nafas yetmaydi va ibora o'rtasida uzilib qoladi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Lirik ritm: ibora uzun, cho'ziq nota ibora oxirini ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["f/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "q", lyric: "bir" },
                { keys: ["f/4"], duration: "q", lyric: "ik" },
                { keys: ["f/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["f/4"], duration: "w", lyric: "to'rt zarb" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "uzun iboralarda nafas taqsimi",
              "cho'qqiga asta olib borish",
              "ifodali, to'liq ovoz",
            ],
          },
          {
            kind: "mashq",
            text: "Eng uzun iborani bir nafasga kuylashga harakat qiling; yetmasa, ma'noni buzmaydigan nafas joyini toping va belgilang.",
          },
          {
            kind: "mashq",
            text: "Cho'qqiga olib boruvchi dinamik rejani yozib, shu reja bilan kuylab yozib oling.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: uzun iboralarda nafas yetmaydi va ibora o'rtasida uzilib qoladi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Nafas mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["c/4"], duration: "w", lyric: "4 zarb" },
                { keys: ["e/4"], duration: "w", lyric: "4 zarb" },
                { keys: ["g/4"], duration: "w", lyric: "4 zarb" },
                { keys: ["e/4"], duration: "w", lyric: "nafas" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Nafas mashqi: har bir nota to'rt zarb ushlanadi. Tovush oxirigacha tekis qolishi kerak.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Nafas joylarini butun sinf uchun bir xil belgilab chiqing va ularni notaga yozib qo'ying — aks holda har kim o'z joyida nafas oladi va ansambl buziladi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlik iborani ushlab turishga yordam bersin.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Diyorim» — tug'ilgan yurt, diyor mavzusida, 6-sinf uchun.",
              "Ijroda asosiy e'tibor: uzun iboralarda nafas taqsimi.",
              "Eng ko'p xato qilinadigan joy: uzun iboralarda nafas yetmaydi va ibora o'rtasida uzilib qoladi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Diyorim» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Nafas joylarini butun sinf uchun bir xil qilish nega kerak?",
    ],
  },
  {
    id: "met-a26",
    slug: "a26-ozbekiston-onajon",
    title: "A26: «O'zbekiston - onajon» (7-sinf) — ifodali ijro va tahlil",
    summary: "Qambar ota she'ri, M.Otajonov musiqasi, «O'zbekiston - onajon». Vatan — ona metaforasi. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A26",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN3", "TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: Qambar ota she'ri, M.Otajonov musiqasi, «O'zbekiston - onajon» (7-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A26 (amaliy mashg'ulot, 2 soat)",
              "Muallif: Qambar ota she'ri, M.Otajonov musiqasi",
              "Sinf: 7-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: vatan — ona metaforasi",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "7-sinf — ovoz mutatsiyasi davri. Shuning uchun bu mashg'ulotda ijro talabi bilan birga ovozni asrash qoidasi o'rgatiladi: tessitura, dinamika chegarasi, mashq davomiyligi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 12-13 yosh: mutatsiya davom etadi, tessitura ehtiyotkor tanlanadi.",
          },
          {
            kind: "nota",
            caption: "lya (kichik oktava) - do2: 7-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["a/3"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["b/3"], duration: "q", lyric: "si" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["b/3"], duration: "q", lyric: "si" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: vatan-ona metaforasi qanday ochilgan?",
              "Ohang: diapazon va tessiturani yozib oling; mutatsiya davridagi ovozga mosmi?",
              "Ritm va o'lchov: ritm ifodani qanday qo'llaydi?",
              "Shakl: cho'qqi qaysi qismda?",
              "Xarakter: chuqur tuyg'uni ortiqcha dinamikasiz qanday berasiz?",
              "Ijro rejasi: tonallik, dinamika chegarasi va mashq davomiyligini belgilang.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: mutatsiya davrida yuqori notalar og'riqli yoki beqaror bo'lishi mumkin. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Lirik ritm: ibora uzun, cho'ziq nota ibora oxirini ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["e/4"], duration: "q", lyric: "bir" },
                { keys: ["e/4"], duration: "q", lyric: "ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["e/4"], duration: "w", lyric: "to'rt zarb" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "chuqur, ifodali ijro",
              "tessituraga mos tonallik",
              "ovozni zo'riqtirmaslik",
            ],
          },
          {
            kind: "mashq",
            text: "Qo'shiqni asl tonallikda va bir-ikki parda pastda kuylab ko'ring. Qaysi variant ovozga qulay? Javobni asoslang.",
          },
          {
            kind: "mashq",
            text: "Mutatsiya davri uchun mashq qoidalarini (davomiylik, dinamika, dam olish) beshta band bilan yozib qo'ying.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: mutatsiya davrida yuqori notalar og'riqli yoki beqaror bo'lishi mumkin. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Mutatsiya davri uchun",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "q" },
                { keys: ["f/4"], duration: "q" },
                { keys: ["g/4"], duration: "q" },
                { keys: ["f/4"], duration: "q" },
                { keys: ["e/4"], duration: "q" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Mutatsiya davri uchun: tor oraliqda, o'rta registrda, past dinamikada. Zo'riqish bo'lmasin.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Tonallikni sinfga moslashtirishdan tortinmang. Mutatsiya davrida to'g'ri tonallik — metodik talab, yengillik emas.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlik tonallikka moslashtiriladi.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«O'zbekiston - onajon» — vatan — ona metaforasi mavzusida, 7-sinf uchun.",
              "Ijroda asosiy e'tibor: chuqur, ifodali ijro.",
              "Eng ko'p xato qilinadigan joy: mutatsiya davrida yuqori notalar og'riqli yoki beqaror bo'lishi mumkin.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«O'zbekiston - onajon» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Mutatsiya davridagi o'quvchiga qanday repertuar talabi qo'yilmaydi?",
    ],
  },
  {
    id: "met-a27",
    slug: "a27-tinchlik-bolsin-7-sinf",
    title: "A27: «Tinchlik bo'lsin» (7-sinf) — ifodali ijro va tahlil",
    summary: "H.Ahmedov she'ri, X.Hasanova musiqasi, «Tinchlik bo'lsin». Tinchlik — yuqori sinf darajasida. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A27",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN3", "TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: H.Ahmedov she'ri, X.Hasanova musiqasi, «Tinchlik bo'lsin» (7-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A27 (amaliy mashg'ulot, 2 soat)",
              "Muallif: H.Ahmedov she'ri, X.Hasanova musiqasi",
              "Sinf: 7-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: tinchlik — yuqori sinf darajasida",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Bu qo'shiq A10 (3-sinf) bilan bir nomda. Mashg'ulotning alohida qiymati — ikki darajani solishtirish: bir mavzu 3-sinfda va 7-sinfda qanday boshqacha ishlanadi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 12-13 yosh: mutatsiya davom etadi, tessitura ehtiyotkor tanlanadi.",
          },
          {
            kind: "nota",
            caption: "lya (kichik oktava) - do2: 7-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["a/3"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["b/3"], duration: "q", lyric: "si" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["b/3"], duration: "q", lyric: "si" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: 3-sinf variantiga nisbatan matn qanchalik murakkab?",
              "Ohang: ikki ovozli joylarni belgilang.",
              "Ritm va o'lchov: ovozlar ritmda mos keladimi yoki ajraladimi?",
              "Shakl: ikki ovozlilik qaysi qismdan boshlanadi?",
              "Xarakter: yuqori sinfda tinchlik mavzusi qanday ifodalanadi?",
              "Ijro rejasi: ovozlar taqsimotini va balansni yozib chiqing.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: ikki ovoz va mutatsiya davri birga kelganda ansambl beqarorlashadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Lirik ritm: ibora uzun, cho'ziq nota ibora oxirini ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["e/4"], duration: "q", lyric: "bir" },
                { keys: ["e/4"], duration: "q", lyric: "ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["e/4"], duration: "w", lyric: "to'rt zarb" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "ikki ovozli ijro aniqligi",
              "mazmunni tushunib ifodalash",
              "mutatsiya davrida ehtiyotkor dinamika",
            ],
          },
          {
            kind: "mashq",
            text: "A10 (3-sinf) va shu qo'shiq talablarini ikki ustunga yozib solishtiring: diapazon, matn, ovozlar soni, ijro talabi.",
          },
          {
            kind: "mashq",
            text: "Ikkinchi ovozni alohida kuylab yozib oling va birinchi ovoz ustiga qo'yib tekshiring.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: ikki ovoz va mutatsiya davri birga kelganda ansambl beqarorlashadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Kanon mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "q", lyric: "1" },
                { keys: ["f/4"], duration: "q", lyric: "2" },
                { keys: ["g/4"], duration: "q", lyric: "3" },
                { keys: ["e/4"], duration: "q", lyric: "4" },
                { keys: ["g/4"], duration: "q", lyric: "5" },
                { keys: ["b/4"], duration: "q", lyric: "6" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Kanon mashqi: ikkinchi guruh shu iborani ikki zarb kechikib boshlaydi.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Ovozlarni mutatsiya holatiga qarab taqsimlang, yoshga yoki jinsga qarab emas: kim qaysi registrda qulay — shunga qarang.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlik ikkinchi ovozni qo'llab-quvvatlasin.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Tinchlik bo'lsin» — tinchlik — yuqori sinf darajasida mavzusida, 7-sinf uchun.",
              "Ijroda asosiy e'tibor: ikki ovozli ijro aniqligi.",
              "Eng ko'p xato qilinadigan joy: ikki ovoz va mutatsiya davri birga kelganda ansambl beqarorlashadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Tinchlik bo'lsin» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Bir mavzudagi asar yosh darajasiga qarab qanday o'zgaradi — shu ikki qo'shiq misolida ayting.",
    ],
  },
  {
    id: "met-a28",
    slug: "a28-toshkent-shahrim",
    title: "A28: «Toshkent shahrim» (7-sinf) — ifodali ijro va tahlil",
    summary: "P.Mo'min she'ri, N.Norxo'jayev musiqasi, «Toshkent shahrim». Poytaxt, shahar tarixi. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A28",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: P.Mo'min she'ri, N.Norxo'jayev musiqasi, «Toshkent shahrim» (7-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A28 (amaliy mashg'ulot, 2 soat)",
              "Muallif: P.Mo'min she'ri, N.Norxo'jayev musiqasi",
              "Sinf: 7-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: poytaxt, shahar tarixi",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "A22 (6-sinf, «Toshkent») bilan bir mavzuda, lekin yuqori sinf uchun. Mashg'ulotda ansambl aniqligi va registr nazorati ustida ishlanadi.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 12-13 yosh: mutatsiya davom etadi, tessitura ehtiyotkor tanlanadi.",
          },
          {
            kind: "nota",
            caption: "lya (kichik oktava) - do2: 7-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["a/3"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["b/3"], duration: "q", lyric: "si" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["b/3"], duration: "q", lyric: "si" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: shahar obrazi A22 dagiga nisbatan qanday boshqacha?",
              "Ohang: registr talabini yozib oling.",
              "Ritm va o'lchov: birga tugatish joylarini belgilang.",
              "Shakl: qismlar soni va ularning talabi.",
              "Xarakter: qanday vositalar bilan tantanavorlik beriladi?",
              "Ijro rejasi: jo'rliksiz va jo'rlik bilan mashq bosqichlarini rejalashtiring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: yuqori registr mutatsiya davrida beqarorlashadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Tantanavor ritm: cho'ziq notalar ko'p, temp sekin va barqaror.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["e/4"], duration: "q", lyric: "uch" },
                { keys: ["e/4"], duration: "q", lyric: "to'rt" },
                { keys: ["e/4"], duration: "w", lyric: "bir-ik-uch-to'rt" },
                { keys: ["e/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "ansambl aniqligi",
              "registr nazorati",
              "iboralarni birga tugatish",
            ],
          },
          {
            kind: "mashq",
            text: "Bitta qismni jo'rliksiz kuylab yozib oling; tonallikdan chiqish bormi?",
          },
          {
            kind: "mashq",
            text: "A22 va A28 talablarini solishtirib, ikkita asosiy farqni yozib qo'ying.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: yuqori registr mutatsiya davrida beqarorlashadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Mutatsiya davri uchun",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "q" },
                { keys: ["f/4"], duration: "q" },
                { keys: ["g/4"], duration: "q" },
                { keys: ["f/4"], duration: "q" },
                { keys: ["e/4"], duration: "q" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Mutatsiya davri uchun: tor oraliqda, o'rta registrda, past dinamikada. Zo'riqish bo'lmasin.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Ansambl mashqini jo'rliksiz boshlang: jo'rlik xatolarni yashiradi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlikni faqat yakuniy bosqichda qo'shing.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Toshkent shahrim» — poytaxt, shahar tarixi mavzusida, 7-sinf uchun.",
              "Ijroda asosiy e'tibor: ansambl aniqligi.",
              "Eng ko'p xato qilinadigan joy: yuqori registr mutatsiya davrida beqarorlashadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Toshkent shahrim» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Jo'rlik ansambl xatolarini qanday yashiradi va bundan qanday foydalanmaslik kerak?",
    ],
  },
  {
    id: "met-a29",
    slug: "a29-shodiyona",
    title: "A29: «Shodiyona» (7-sinf) — ifodali ijro va tahlil",
    summary: "N.Isroilov she'ri, X.Hasanova musiqasi, «Shodiyona». Bayram, shodiyona kayfiyat. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A29",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7", "TN8"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: N.Isroilov she'ri, X.Hasanova musiqasi, «Shodiyona» (7-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A29 (amaliy mashg'ulot, 2 soat)",
              "Muallif: N.Isroilov she'ri, X.Hasanova musiqasi",
              "Sinf: 7-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: bayram, shodiyona kayfiyat",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Ommaviy tadbir repertuariga mos qo'shiq. Shuning uchun mashg'ulot sahna va ovozni asrash masalasini birga ko'radi: tantanavor ijro ovozni zo'riqtirmasligi kerak.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 12-13 yosh: mutatsiya davom etadi, tessitura ehtiyotkor tanlanadi.",
          },
          {
            kind: "nota",
            caption: "lya (kichik oktava) - do2: 7-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["a/3"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["b/3"], duration: "q", lyric: "si" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["b/3"], duration: "q", lyric: "si" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: bayram obrazi qanday so'zlar bilan beriladi?",
              "Ohang: tessiturani aniqlang — uzoq ijroga mosmi?",
              "Ritm va o'lchov: tantanavor ritm naqshi qanday?",
              "Shakl: ommaviy ijro uchun qaysi qism qulay?",
              "Xarakter: ko'tarinkilik dinamikadan boshqa nima bilan beriladi?",
              "Ijro rejasi: sahna uchun dinamika chegarasini yozib qo'ying.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: tadbir ijrosida bolalar baqirib yuboradi va ovoz charchaydi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Bayram ritmi: chapak va zarb navbatlashadi. Tayanch guruh tempni ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "8", lyric: "cha" },
                { keys: ["e/4"], duration: "8", lyric: "pak" },
                { keys: ["e/4"], duration: "q", lyric: "zarb" },
                { keys: ["e/4"], duration: "8", lyric: "cha" },
                { keys: ["e/4"], duration: "8", lyric: "pak" },
                { keys: ["e/4"], duration: "q", lyric: "zarb" },
                { keys: ["e/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "ko'tarinki, tantanavor xarakter",
              "ovozni zo'riqtirmasdan to'liq ovoz",
              "sahnada ansambl",
            ],
          },
          {
            kind: "mashq",
            text: "Bitta iborani «to'liq ovoz» va «baland ovoz» bilan kuylab yozib oling. Farqni so'z bilan tushuntiring.",
          },
          {
            kind: "mashq",
            text: "Tadbirdan oldingi ovoz qizdirish mashqini (5 daqiqa) rejalashtirib yozing.",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: tadbir ijrosida bolalar baqirib yuboradi va ovoz charchaydi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Dinamika mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "h", lyric: "sekin" },
                { keys: ["f/4"], duration: "h", lyric: "o'rta" },
                { keys: ["g/4"], duration: "h", lyric: "to'liq" },
                { keys: ["f/4"], duration: "h", lyric: "o'rta" },
                { keys: ["e/4"], duration: "h", lyric: "sekin" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Dinamika mashqi: balandlik emas, kuch o'zgaradi. Tovush sifati hamma bosqichda bir xil.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "«To'liq ovoz» bilan «baland ovoz» farqini amalda ko'rsatib bering: ikki variantni yozib olib eshittirish eng ishonchli usul.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlik tantanavorlikni ko'taradi; dinamikani jo'rlik bilan muvozanatlang.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Shodiyona» — bayram, shodiyona kayfiyat mavzusida, 7-sinf uchun.",
              "Ijroda asosiy e'tibor: ko'tarinki, tantanavor xarakter.",
              "Eng ko'p xato qilinadigan joy: tadbir ijrosida bolalar baqirib yuboradi va ovoz charchaydi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Shodiyona» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Tadbir ijrosida ovozni asrash uchun o'qituvchi nimani oldindan nazorat qiladi?",
    ],
  },
  {
    id: "met-a30",
    slug: "a30-ona-tilim-ozbek-tilim",
    title: "A30: «Ona tilim - O'zbek tilim» (7-sinf) — ifodali ijro va tahlil",
    summary: "P.Mo'min she'ri, F.Alimov musiqasi, «Ona tilim - O'zbek tilim». Ona tili, til bayrami. Flipped Classroom metodida tahlil, ijro va o'rgatish rejasi.",
    durationMin: 80,
    bloom: "qollash",
    outcomeId: "on-met-22",
    area: "sahna",
    dasturKodi: "A30",
    dasturTuri: "amaliy",
    dasturSoati: 2,
    tn: ["TN4", "TN7"],
    sections: [
      {
        id: "tayyorgarlik",
        title: "Darsgacha tayyorgarlik (Flipped Classroom)",
        blocks: [
          {
            kind: "matn",
            text: "Bu mashg'ulot «aylantirilgan sinf» (Flipped Classroom) metodida o'tadi: asar bilan tanishish uyda, sinfda esa ijro va tahlil. Darsga tayyorlanmagan holda kelish mashg'ulotning yarmini yo'qotadi.",
          },
          {
            kind: "royxat",
            items: [
              "Asarni maktab darsligidan toping: P.Mo'min she'ri, F.Alimov musiqasi, «Ona tilim - O'zbek tilim» (7-sinf).",
              "Matnni ovoz chiqarib o'qing; tushunmagan so'zlarni yozib qo'ying.",
              "Ohangni ikki-uch marta tinglang va qaysi joy yodda qolganini belgilang.",
              "Diapazonni aniqlang: eng past va eng baland nota qaysi? Ovozingizga qulaymi?",
              "O'z ijroingizni telefonga yozib, bir marta eshitib ko'ring.",
            ],
          },
          {
            kind: "eslatma",
            text: "Platformada asarning o'z notasi, she'r matni va audio yozuvi saqlanmaydi — ular mualliflik huquqi bilan qo'riqlanadi. Asarni maktab darsligi, DTS ro'yxati yoki o'qituvchi bergan manbadan oling. Bu yerdagi nota misollari — qo'shiqning ohangi emas, shu mashg'ulot uchun yozilgan mashqlar: diapazon ko'rsatkichi, qizdirish va qiyin joyga mo'ljallangan mashq.",
          },
        ],
      },
      {
        id: "asar",
        title: "Asar haqida",
        blocks: [
          {
            kind: "royxat",
            items: [
              "Dastur kodi: A30 (amaliy mashg'ulot, 2 soat)",
              "Muallif: P.Mo'min she'ri, F.Alimov musiqasi",
              "Sinf: 7-sinf",
              "Turi: muallif qo'shig'i",
              "Mavzu: ona tili, til bayrami",
              "Ta'lim metodi: Flipped Classroom",
            ],
          },
          {
            kind: "matn",
            text: "Ona tili mavzusidagi qo'shiq — 21-oktabr tadbirlariga mos. Metodik qiymati: matn ma'nosi bilan diksiya bu yerda bir masalaga aylanadi, chunki qo'shiqning o'zi til haqida.",
          },
        ],
      },
      {
        id: "ovoz",
        title: "Ovoz va diapazon",
        blocks: [
          {
            kind: "matn",
            text: "Asarni o'rganishdan oldin sinfning ovoz imkoniyati tekshiriladi: tanlangan tonallik shu oraliqqa sig'masa, qolgan hamma ish behuda ketadi. 12-13 yosh: mutatsiya davom etadi, tessitura ehtiyotkor tanlanadi.",
          },
          {
            kind: "nota",
            caption: "lya (kichik oktava) - do2: 7-sinf uchun ishchi oraliq (taxminiy; notani bosib eshitib ko'ring)",
            playable: true,
            spec: {
              clef: "treble",
              notes: [
                { keys: ["a/3"], duration: "w", lyric: "eng past" },
                { keys: ["c/5"], duration: "w", lyric: "eng baland" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Quyidagi qizdirish mashqi shu oraliqning pastki qismidan boshlanadi. U har bir kuylash darsida bajariladi: sovuq ovoz bilan kuylash ham ovozga zarar, ham ijroga xato.",
          },
          {
            kind: "nota",
            caption: "Qizdirish: besh pog'onali mashq, sekin tempda, past dinamikada",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["b/3"], duration: "q", lyric: "si" },
                { keys: ["c/4"], duration: "q", lyric: "do" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["e/4"], duration: "q", lyric: "mi" },
                { keys: ["f/4"], duration: "q", lyric: "fa" },
                { keys: ["d/4"], duration: "q", lyric: "re" },
                { keys: ["b/3"], duration: "q", lyric: "si" },
              ],
            },
          },
          {
            kind: "eslatma",
            text: "Bu raqamlar yo'naltiruvchi. Aniq oraliq darslik va DTS bo'yicha tekshiriladi, eng ishonchli tekshiruv esa bitta — sinfni kuylatib ko'rish.",
          },
        ],
      },
      {
        id: "tahlil",
        title: "Tahlil (olti band)",
        blocks: [
          {
            kind: "matn",
            text: "Tahlil tartibi M19 ma'ruzasidagi bilan bir xil — har bir asar shu olti band bo'yicha ko'rib chiqiladi. Javoblarni yozib boring: ular ijro rejasiga aylanadi.",
          },
          {
            kind: "royxat",
            items: [
              "Matn: har bir banddan bitta kalit so'z tanlang.",
              "Ohang: kalit so'zlar ohangning kuchli joylariga tushadimi?",
              "Ritm va o'lchov: so'z urg'usi musiqa urg'usiga mos keladimi?",
              "Shakl: bandlar soni va tadbirda ijro etiladigan qismi.",
              "Xarakter: ko'tarinkilik bilan samimiylik qanday nisbatda?",
              "Ijro rejasi: kalit so'zlarga dinamik urg'u bering.",
            ],
          },
          {
            kind: "eslatma",
            text: "Odatda qiyin keladigan joy: matn ko'tarinki va murakkab — so'zlar ma'nosi tushunilmasa, ijro quruq chiqadi. Buni darslikdagi nota bo'yicha tekshirib, o'zingizga mos yechimni yozib qo'ying.",
          },
        ],
      },
      {
        id: "ritm",
        title: "Ritmik asos",
        blocks: [
          {
            kind: "matn",
            text: "Lirik ritm: ibora uzun, cho'ziq nota ibora oxirini ushlab turadi.",
          },
          {
            kind: "nota",
            caption: "Ritmik naqsh — bitta balandlikda yozilgan: bu ohang emas, zarb mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "4/4",
              notes: [
                { keys: ["e/4"], duration: "h", lyric: "bir-ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["e/4"], duration: "q", lyric: "bir" },
                { keys: ["e/4"], duration: "q", lyric: "ik" },
                { keys: ["e/4"], duration: "h", lyric: "uch-to'rt" },
                { keys: ["e/4"], duration: "w", lyric: "to'rt zarb" },
              ],
            },
          },
          {
            kind: "mashq",
            text: "Naqshni avval qo'l bilan urib chiqing, keyin bo'g'inlar bilan ayting, eng oxirida qo'shiq matnini shu ritmga qo'ying. Uch bosqich bir vaqtda bajarilmaydi.",
          },
          {
            kind: "matn",
            text: "Ritmni mustahkamlash qo'shiqdan oldin boradi: ohang ritmga quriladi, teskarisi emas. Shuning uchun ritmik naqsh aniq bo'lmaguncha ohangga o'tilmaydi.",
          },
        ],
      },
      {
        id: "ijro",
        title: "Ijro mashqi",
        blocks: [
          {
            kind: "matn",
            text: "Ijroda uch narsaga e'tibor beriladi:",
          },
          {
            kind: "royxat",
            items: [
              "aniq va ma'noli diksiya",
              "so'z ma'nosiga mos ifoda",
              "ansamblda birga talaffuz",
            ],
          },
          {
            kind: "mashq",
            text: "Har bir banddan kalit so'z tanlab, ularni ro'yxat qilib yozing; keyin shu urg'ular bilan kuylab yozib oling.",
          },
          {
            kind: "mashq",
            text: "Matnni ifodali o'qib, keyin kuylang. Ikki variantda ma'no bir xil chiqdimi?",
          },
          {
            kind: "royxat",
            items: [
              "Boshlash aniq bo'ldimi — nafas, temp, birinchi nota?",
              "Barcha so'zlar tushunarli chiqdimi?",
              "Nafas joylari rejadagi joyda qoldimi?",
              "Dinamika rejasi bajarildimi yoki ijro bir xil chiqdi?",
              "Tugatish aniq bo'ldimi — oxirgi nota va to'xtam?",
            ],
          },
        ],
      },
      {
        id: "qiyinjoy",
        title: "Qiyin joy ustida mashq",
        blocks: [
          {
            kind: "matn",
            text: "Bu asarda odatda qiyin keladigan joy: matn ko'tarinki va murakkab — so'zlar ma'nosi tushunilmasa, ijro quruq chiqadi. Quyidagi mashq aynan shu qiyinchilikka mo'ljallangan va u asarning o'zidan ajratib bajariladi.",
          },
          {
            kind: "nota",
            caption: "Mashq: Diksiya mashqi",
            playable: true,
            spec: {
              clef: "treble",
              timeSignature: "2/4",
              notes: [
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ka" },
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ka" },
                { keys: ["e/4"], duration: "8", lyric: "ta" },
                { keys: ["e/4"], duration: "8", lyric: "ka" },
                { keys: ["e/4"], duration: "q", lyric: "ta" },
              ],
            },
          },
          {
            kind: "matn",
            text: "Diksiya mashqi: bo'g'inlar aniq va bir xil. Sekin boshlanadi, keyin tezlashtiriladi.",
          },
          {
            kind: "royxat",
            items: [
              "Mashq asardan alohida, sekin tempda bajariladi",
              "Bajarilgandan keyin asarning qiyin joyi shu usul bilan takrorlanadi",
              "Keyin qiyin joy o'zidan oldingi va keyingi ibora bilan ulanadi",
              "Oxirida butun qism bir marta to'liq ijro etiladi",
            ],
          },
          {
            kind: "eslatma",
            text: "Qiyin joy darsda topilsa, vaqt yo'qoladi va o'quvchi ishonchi pasayadi. Shuning uchun u darsdan oldin topiladi va unga mashq tayyorlanadi — metodik tahlilning asosiy foydasi shu.",
          },
        ],
      },
      {
        id: "orgatish",
        title: "Sinfda o'rgatish rejasi",
        blocks: [
          {
            kind: "matn",
            text: "Matnni avval tahlil qiling: har bir banddan bitta kalit so'z tanlanadi va ijro shu so'zlar atrofida quriladi.",
          },
          {
            kind: "royxat",
            items: [
              "Qizdirish (3-5 daqiqa): ovoz va nafas mashqi, qo'shiqning eng qiyin oralig'i bilan bog'liq bo'lsin.",
              "Namuna: asarni o'zingiz to'liq ijro eting — yozuv emas, tirik namuna kuchliroq ishlaydi.",
              "Bo'laklab o'rgatish: iboralarni aks-sado usulida; bir vaqtda bitta vazifa qo'yiladi.",
              "Birlashtirish: iboralarni qismga, qismlarni butun asarga ulash.",
              "Ifoda ustida ishlash: dinamika, temp, xarakter — faqat ohang mustahkam bo'lgandan keyin.",
              "Jo'rlik mayin; so'z birinchi o'rinda.",
            ],
          },
          {
            kind: "matn",
            text: "Reja yozilganda har bir bosqichga vaqt qo'yib chiqing: 45 daqiqalik darsda qo'shiq o'rgatishga odatda 15-20 daqiqa qoladi, qolgani boshqa faoliyatlarga.",
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
              "«Ona tilim - O'zbek tilim» — ona tili, til bayrami mavzusida, 7-sinf uchun.",
              "Ijroda asosiy e'tibor: aniq va ma'noli diksiya.",
              "Eng ko'p xato qilinadigan joy: matn ko'tarinki va murakkab — so'zlar ma'nosi tushunilmasa, ijro quruq chiqadi.",
            ],
          },
          {
            kind: "matn",
            text: "Mashg'ulot natijasi — ikkita hujjat: asarning olti bandli tahlili va uni sinfda o'rgatish rejasi. Ikkisini portfolioga saqlab qo'ying: kurs ishi va pedagogik amaliyotda shular kerak bo'ladi.",
          },
        ],
      },
    ],
    reflection: [
      "«Ona tilim - O'zbek tilim» ustida ishlaganda eng ko'p vaqt qaysi narsaga ketdi va bu kutganingizdek bo'ldimi?",
      "Matn ma'nosini tahlil qilmasdan ijroni boshlash nimaga olib keladi?",
    ],
  },
];
