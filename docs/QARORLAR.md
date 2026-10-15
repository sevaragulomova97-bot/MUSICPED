# Qabul qilingan qarorlar

Bu yerda loyiha davomida qabul qilingan texnik qarorlar va ularning sabablari yoziladi. Har bir qaror qaysi bosqichda qabul qilingani ko'rsatilgan.

---

## B1 — Poydevor

### Q1. Server umuman ishlatilmaydi

**Qaror.** Platforma `output: "export"` bilan sof statik sayt sifatida quriladi va GitHub Pages'da turadi.

**Sabab.** Talab: hech qanday obunasiz, GitHub havolasi orqali ishlashi kerak. Server, boshqariladigan baza yoki hosting — barchasi pullik yoki hech bo'lmasa ro'yxatdan o'tishni talab qiladi. Statik sayt esa ochiq omborlar uchun butunlay bepul.

**Oqibati.** PostgreSQL, Prisma, Auth.js va Next.js server imkoniyatlari (API routes, server actions, middleware) ishlatilmaydi.

### Q2. Ma'lumot brauzerda saqlanadi

**Qaror.** Foydalanuvchi ma'lumoti IndexedDB'da (Dexie orqali, B2 da), sessiya esa `localStorage` da saqlanadi. Ma'lumotga kirish `lib/db/` ichidagi alohida qatlam orqali amalga oshiriladi.

**Sabab.** Serversiz muhitda boshqa saqlash joyi yo'q. Alohida qatlam — kelajakda haqiqiy ko'p foydalanuvchili rejimga o'tish kerak bo'lsa, faqat shu qatlamni almashtirish yetarli bo'lsin uchun.

**Oqibati.** Ma'lumot bir brauzerda qoladi; ko'chirish uchun JSON eksport/import ishlatiladi.

### Q3. Autentifikatsiya — profil tanlash

**Qaror.** Kirish sahifasida rol tanlanadi; parol tekshiruvi yo'q.

**Sabab.** Serversiz muhitda parolni ishonchli tekshirib bo'lmaydi — brauzerdagi har qanday tekshiruvni chetlab o'tish mumkin. Soxta xavfsizlik ko'rsatgandan ko'ra, uning yo'qligini ochiq aytish to'g'riroq.

**Oqibati.** Kirish sahifasida va README'da ogohlantirish beriladi: platformaga haqiqiy shaxsiy ma'lumot kiritilmasligi kerak.

### Q4. `basePath` CI tomonidan aniqlanadi

**Qaror.** `NEXT_PUBLIC_BASE_PATH` muhit o'zgaruvchisi `actions/configure-pages` ning `base_path` chiqishidan olinadi.

**Sabab.** GitHub Pages loyihani `/<ombor-nomi>/` ostida joylaydi. Qiymat qo'lda yozilsa, ombor nomi o'zgarganda (masalan `MUSICPED` → `MusicPed`) sayt butunlay buziladi. Avtomatik aniqlash bu xatoni umuman yo'q qiladi va lokal `npm run dev` ham `/` da ishlayveradi.

### Q5. Marshrutlar — SPA emas, har biri alohida HTML

**Qaror.** `trailingSlash: true` bilan statik eksport: har bir sahifa `out/<yo'l>/index.html` ko'rinishida chiqadi.

**Sabab.** GitHub Pages SPA uchun server tomonda qayta yo'naltirish qila olmaydi — odatda `404.html` hiylasi ishlatiladi, u esa noto'g'ri HTTP status qaytaradi va SEO'ni buzadi. Har bir marshrut alohida fayl bo'lsa, chuqur havolalar (`/kurslar/musiqa-nazariyasi/`) to'g'ridan-to'g'ri ochiladi.

### Q6. Prisma `enum` emas, `String` + union

**Qaror.** (B2 ga tegishli, lekin hozir qayd etiladi) Ma'lumot turlari TypeScript `union` tiplari sifatida belgilanadi.

**Sabab.** Ma'lumot bazasi almashtirilishi mumkin bo'lgan qatlam; turlar bazadan emas, koddan kelib chiqishi kerak.

### Q7. UI komponentlari qo'lda yoziladi

**Qaror.** `shadcn/ui` CLI ishlatilmaydi; kerakli primitivlar (`Button`, `Card`, `Badge`, `Progress`, `ProgressRing`) shu uslubda qo'lda yoziladi.

**Sabab.** Tailwind v4 + Next 16 + React 19 birikmasi yangi; CLI generatsiyasi ko'pincha eskirgan konfiguratsiya yozadi. Kerakli komponentlar soni kam, qo'lda yozish to'liq nazorat beradi va ortiqcha bog'liqlik qo'shmaydi.

### Q8. Ranglar validator bilan tekshirilgan

**Qaror.** 4 ta yo'nalish rangi (grafiklarda ham ishlatiladi) rang ko'rlik va kontrast bo'yicha tekshirilgan:

| Rejim | Nazariya | Ijro | Metodika | Kasbiy |
|---|---|---|---|---|
| Yorug' | `#3b5bdb` | `#14b8a6` | `#7c5cff` | `#f59e0b` |
| Qorong'i | `#6682ea` | `#00a190` | `#8c74e9` | `#b08300` |

**Sabab.** Qorong'i rejim ranglari yorug' rejimdan avtomatik "aylantirilmaydi" — ular alohida tanlanadi. Dastlabki variant (`#2dd4bf`, `#fbbf24`) qorong'i fonda juda yorqin chiqib, OKLCH yorqinlik oralig'idan chiqib ketdi va tekshiruvdan o'tmadi.

**Natija.** Ikkala rejimda ham: yorqinlik oralig'i, rang to'yinganligi minimumi, protan/deutan/tritan ajratilishi va fonga nisbatan kontrast — hammasi o'tdi. Yorug' rejimda ikki rang fonga nisbatan 3:1 dan past kontrast beradi, shuning uchun grafiklarda **doim yorliq va jadval ko'rinishi** bo'lishi shart (faqat rangga tayanib bo'lmaydi).

### Q9. Ikonkalar kod bilan generatsiya qilinadi

**Qaror.** Ilova ikonkalari (`public/icon-*.png`) Pillow bilan chizilgan, SVG manbasi `public/icon.svg` da saqlanadi.

**Sabab.** Tashqi rasm ishlatilmasligi kerak (mualliflik huquqi cheklovi). Konteynerda SVG→PNG konvertori (`rsvg-convert`) yo'q edi, shuning uchun geometriya to'g'ridan-to'g'ri chizildi.

### Q10. Dev bog'liqliklaridagi zaifliklar

**Qaror.** `npm audit --omit=dev` doim **0 ta zaiflik** bo'lishi talab qilinadi. To'liq `npm audit` dagi qolgan ogohlantirishlar qabul qilinadi.

**Sabab.** Qolgan 5 ta ogohlantirish `eslint-config-next` → `fast-glob`/`micromatch`/`braces` zanjirida. Ularning yagona "tuzatishi" — Next.js 14 ga tushish. Bu lint vositasining bog'liqligi; brauzerga yuboriladigan kodga umuman kirmaydi.

**Yon ta'sir.** `vitest@5` uchun `@types/node` `^20` dan `^22` ga ko'tarildi (vitest 5 ning peer talabi), shu bilan 2 ta kritik zaiflik yo'q qilindi.

---

## B2 — Ma'lumot qatlami, diagnostika va IRY algoritmi

### Q11. 8 ta diagnostika yo'nalishi, 4 ta ko'rsatish guruhi

**Qaror.** Diagnostika 8 o'lchov bo'yicha olinadi (eshituv, ritm, texnika, sahna, ijodkorlik, motivatsiya + nazariy bilim va pedagogik metodika), interfeysda esa ular 4 ta asosiy yo'nalishga guruhlanadi (`YONALISH_GURUHI` xaritasi).

**Sabab.** Dissertatsiyada 6 ta yo'nalish ko'rsatilgan, lekin nazariy bilim va metodikani alohida o'lchamasdan individual reja tuzib bo'lmaydi. Maketdagi bosh sahifa esa 4 ta kartadan iborat — shuning uchun o'lchov va ko'rsatish darajalari ajratildi.

### Q12. Algoritm — sof funksiya

**Qaror.** `lib/personalization.ts` va `lib/scoring.ts` da tashqi holat, joriy sana yoki tasodifiy son ishlatilmaydi.

**Sabab.** Natija takrorlanadigan bo'lishi kerak: bir xil diagnostika har doim bir xil rejani bersin. Bu testlash uchun ham, dissertatsiyada natijani asoslash uchun ham zarur. Ballar teng bo'lganda tartib `DIAGNOSTIKA_YONALISHLARI` dagi qat'iy ro'yxat bo'yicha hal qilinadi.

### Q13. Blum darajasi ikki shart bilan ko'tariladi

**Qaror.** Keyingi darajaga o'tish uchun: joriy darajada kamida **2 ta** urinish bo'lishi va o'rtacha natija **80%** dan kam bo'lmasligi kerak.

**Sabab.** Bitta tasodifiy muvaffaqiyat talabani tayyor bo'lmagan darajaga ko'tarib yuborishi mumkin edi.

### Q14. Adaptivlik — eksponensial silliqlash

**Qaror.** Topshiriq natijasi yo'nalish ballini to'liq emas, 0,4 ulush bilan siljitadi (`applyResult`).

**Sabab.** Bitta yomon kun butun individual rejani ag'darib yubormasligi kerak; ayni paytda reja o'zgarishlarga sezgir qolishi lozim.

### Q15. Ko'p javobli savolda jarima

**Qaror.** `multiple` turdagi savolda noto'g'ri belgilangan variant to'g'ri javoblar sonidan ayiriladi (natija 0 dan past tushmaydi).

**Sabab.** Aks holda "hamma variantni belgilash" eng foydali strategiya bo'lib qolardi va diagnostika ma'nosini yo'qotardi.

### Q16. Namunaviy talabalar — deterministik generator

**Qaror.** 24 ta namunaviy talaba ballari qat'iy urug'li (seed) generator bilan hosil qilinadi, qo'lda yozilmaydi.

**Sabab.** 24 talaba × 8 yo'nalish × 2 o'lchov = 384 ta raqamni qo'lda yozish o'qib bo'lmaydigan fayl berardi. Urug' qat'iy bo'lgani uchun natija har safar bir xil va grafiklar «sakramaydi». Boshlang'ich darajada ikkala guruh yaqin (tajriba to'g'ri qo'yilgan), o'sish esa tajriba guruhida kattaroq — bu test bilan tekshiriladi.

**Diqqat.** Bu ma'lumot butunlay o'ylab topilgan va ilmiy xulosa uchun asos bo'la olmaydi; u faqat platformaning ishlashini ko'rsatadi.

### Q17. Ovozli diagnostika savollari B3 ga qoldirildi

**Qaror.** B2 da 32 ta savol — matn va tanlovga asoslangan; interval/ritmni **eshitib** aniqlaydigan interaktiv savollar B3 da shu bankka qo'shiladi.

**Sabab.** Savol banki oddiy ma'lumot (`content/diagnostic.ts`), shuning uchun yangi tur qo'shilganda algoritm va baholash kodiga tegilmaydi.

---

## B3 — Virtual cholg'ular

### Q18. Ovoz sintez qilinadi, namuna ishlatilmaydi ~~(bekor qilindi — Q23 ga qarang)~~

**Qaror.** Uchala cholg'u ovozi Tone.js bilan real vaqtda sintez qilinadi; tayyor audio namunalar (`Sampler`) ishlatilmaydi.

**Sabab.** Uchta sabab bir yo'nalishga ishora qiladi: (1) erkin litsenziyali pianino namunalari ham o'nlab megabayt — ombor og'irlashadi va birinchi yuklanish sekinlashadi; (2) namunalar litsenziyasini kuzatib borish kerak bo'lardi; (3) sintez oflayn ishlaydi va hech narsa yuklab olmaydi. Natija akustik yozuvdan farq qiladi, lekin mashq va ta'lim maqsadi uchun yetarli.

**Qanday qilingan:** pianino — FM sintez (tez hujum, uzun susayish), dutor — Karplus–Strong torli model, doira — membrana + oq shovqin.

### Q19. Yozuv — audio emas, nota hodisalari

**Qaror.** «Yozib olish» tugmasi audio fayl emas, `{nota, vaqt, davomiylik, kuch}` ro'yxatini saqlaydi.

**Sabab.** Bir daqiqalik audio ~1 MB, o'sha ijroning hodisalar ro'yxati esa bir necha kilobayt. IndexedDB kvotasi cheklangani uchun bu farq muhim. Yon foyda: yozuvni keyin notaga aylantirish yoki tempini o'zgartirish mumkin.

### Q20. Chertma va zarbli cholg'ularda «qo'yib yuborish» yo'q

**Qaror.** Pianino klavishi bosilib turiladi (`attack`/`release`), dutor va doira esa bir zarb bilan ishlaydi (`hit` — 140 ms dan keyin o'zi so'nadi).

**Sabab.** Dastlab uchalasi ham pianino kabi ishlardi va natijada dutor pardasi hamda doira zonasi bosilgandan keyin **doimo yoqilgan bo'lib qolardi**. Bu brauzerda sinovda aniqlandi: haqiqiy cholg'uda ham torni chertgandan keyin «qo'yib yubormaysiz».

### Q21. Ritm aniqligi — vaqt va qamrov ko'paytmasi

**Qaror.** Ritm mashqi bahosi = (mos kelgan zarblar ulushi) × (vaqt aniqligi). Zarb turi ham tekshiriladi, 400 ms dan katta chetlanish umuman hisobga olinmaydi.

**Sabab.** Faqat vaqt aniqligini olsak, bitta zarbni juda aniq urgan talaba 100% olardi. Faqat qamrovni olsak, vaqtga umuman qaramagan bo'lardik. Ikkalasining ko'paytmasi ikkala xatoni ham jazolaydi. `scoreRhythm` sof funksiya va 8 ta test bilan qoplangan.

### Q22. Kompyuter klaviaturasi bilan chalish

**Qaror.** Pianino A–K qatori bilan chalinadi (oq klavishlar), W/E/T/Y/U — qora. Matn maydonida yozilayotgan bo'lsa, tugmalar ushlab qolinmaydi.

**Sabab.** Texnik topshiriqdagi talab («virtual pianino klaviaturadan ham chalinadi») va klaviatura bilan boshqarish bo'yicha accessibility talabi.


---

## B3+ — Namunali ovoz va yangi cholg'ular

### Q23. Sintez bekor qilindi, haqiqiy namunalarga o'tildi

**Qaror.** Q18 bekor qilinadi. Barcha cholg'ular endi FluidR3_GM to'plamidagi **yozib olingan namunalar** bilan ishlaydi (`Tone.Sampler`).

**Sabab.** Q18 dagi mulohaza (hajm, litsenziya, oflayn ishlash) texnik jihatdan to'g'ri edi, lekin asosiy talabni — ovoz haqiqiy cholg'uga o'xshashini — bajarmadi. Foydalanuvchi buni to'g'ridan-to'g'ri aytdi. Sifat bu yerda hajmdan muhimroq.

**Hajm muammosi qanday hal qilindi.** Har 3 yarim tonda bitta namuna olinadi (88 ta emas, 17 ta fayl) — `Tone.Sampler` oraliq notalarni tovush balandligini o'zgartirib hosil qiladi. Natijada 6 ta cholg'u uchun jami **1,6 MB**, bu bitta o'rtacha rasm hajmida.

**Litsenziya muammosi qanday hal qilindi.** FluidR3_GM — MIT litsenziyali. Namunalar omborga joylashtirildi, shuning uchun tashqi serverga bog'liqlik yo'q va oflayn ishlaydi.

**Zaxira varianti saqlandi.** Namunalarni yuklab bo'lmasa (tarmoq yo'q, fayl topilmadi), cholg'u avtomatik ravishda sintezga tushadi va interfeysda bu haqda ogohlantirish chiqadi — ya'ni cholg'u hech qachon butunlay ishlamay qolmaydi.

### Q24. Dutor va rubob — yaqinlashtirilgan tembr

**Qaror.** Dutor nayloniy torli gitara namunalaridan, rubob esa metall torli gitara namunalaridan, har biri o'z tembr filtri bilan quriladi.

**Sabab.** Erkin litsenziyali haqiqiy dutor va rubob yozuvlari topilmadi (tekshirilgan manbalar: npm ekotizimi, FluidR3_GM, GM to'plamlari — ularda sitar, banjo, shamisen ham yo'q). Eng yaqin qarindosh — chertma torli cholg'u namunasi.

**Filtrlar.** Dutor: yuqori chastotalar 3,4 kHz dan kesiladi va yorqinlik −2 dB ga tushiriladi (ipak/nayloniy torning yumshoq tovushi). Rubob: 110 Hz dan past kesiladi, 4 kHz atrofida +4 dB qo'shiladi va reverb uzaytiriladi (metall torning jarangdor tovushi).

**Bu halol aytilgan.** `CREDITS.md` da aniq yozilgan: bu yaqinlashtirish, haqiqiy dutor/rubob tembri emas. Haqiqiy yozuvlar topilsa, faqat papka nomini almashtirish kifoya.

### Q25. Cholg'u lug'ati audio moduldan ajratildi

**Qaror.** Cholg'u nomlari va toifalari `lib/domain/instruments.ts` da (oddiy modul), Tone.js ga bog'liq kod esa `lib/audio/instruments.ts` da (`"use client"`).

**Sabab.** Build sinovdan o'tmadi: `"use client"` modulidan eksport qilingan oddiy obyekt server komponentida `undefined` bo'lib chiqdi. Lug'at serverda ham, testda ham kerak — demak u audio dvigateliga bog'liq bo'lmasligi kerak edi.

### Q26. Cholg'ular uch toifaga bo'lindi

**Qaror.** `sustained` (pianino, nay) — bosilib turiladi; `plucked` (gitara, dutor, rubob) — bir marta chertiladi; `percussive` (doira) — zarb.

**Sabab.** Avval faqat ikki toifa bor edi va chertma cholg'ular 140 ms dan keyin majburan to'xtatilardi. Namunali ovozda bu gitara yozuvini o'rtasidan kesib tashlardi — tabiiy so'nish yo'qolardi. Endi chertma cholg'u namunasi oxirigacha jaranglaydi, yorqin belgilash esa faqat ko'rinish uchun 180 ms dan keyin o'chadi.


---

## B3++ — Tembr tanlovi foydalanuvchiga berildi

### Q27. Qaysi tovush «haqiqiy» ekanini kod emas, quloq hal qiladi

**Qaror.** Dutor, rubob, gitara va doira uchun bir nechta tembr varianti qo'shildi. Har bir cholg'u sahifasida «Tovush turi» ro'yxati bor, tanlov brauzerda eslab qolinadi.

**Sabab.** Dutor va rubob uchun GM to'plamida to'g'ridan-to'g'ri mos keladigan yozuv yo'q, shuning uchun yaqinlashtirish kerak. Lekin qaysi yaqinlashtirish yaxshiroq ekanini **o'lchab bo'lmaydi** — buni faqat eshitgan odam aytadi. Men signal borligini va balandlikni o'lchayman, tembrni emas. Shuning uchun tanlov kodda qotirilmadi.

**Variantlar.** Doira — 4 ta (tom+bongo+daf, chuqur ramkali baraban, past va to'liq, orkestr to'plami). Rubob — 4 ta (metall torli gitara, klavesin, klavinet, pitsikato). Dutor — 3 ta. Gitara — 2 ta (nayloniy va metall tor).

### Q28. Tembrlar balandligi o'lchab tenglashtirildi

**Qaror.** Har bir doira varianti brauzerda o'lchandi va `volumeDb` qiymati natijaga qarab sozlandi: cho'qqi barcha variantlarda ~0,3.

**Sabab.** Namunalar turli manbalardan kelgani uchun balandligi 4 barobargacha farq qilardi — variantni almashtirganda ovoz keskin sakrardi.

**Yo'l-yo'lakay topilgan xato.** Doirada balandlik **ikki marta** qo'llanar ekan: bir marta `Players` guruhiga, ikkinchi marta har bir zarbga. Shu sababli sozlash mantiqsiz ishlardi (−1 dB va +11 dB orasida 16 barobar farq, 4 barobar o'rniga). Endi guruh tembr balandligini, zarb esa faqat urish kuchini belgilaydi.

**Metodologik eslatma.** Dastlabki o'lchovlar noto'g'ri edi: tembr almashtirilganda eski tugunlar tashlanadi va bu «pop» beradi, u esa cho'qqi sifatida qayd etilardi. To'g'ri natija har bir variantni **alohida, toza sahifada** o'lchaganda olindi.


---

## Dutor — fizik model

### Q29. Dutor uchun namuna emas, o'z modeli yozildi

**Qaror.** Dutorning standart tovushi endi **raqamli to'lqin yo'li modeli** bilan hosil qilingan namunalardan iborat (`public/audio/dutor-model/`, manbasi `tools/dutor-model/`). Gitara namunasiga asoslangan variantlar ro'yxatda qoldi, lekin standart emas.

**Sabab.** Gitara yozuvini filtr bilan dutorga o'xshatish yetarli natija bermadi — bu aytildi. Erkin litsenziyali haqiqiy dutor yozuvi esa topilmadi (npm ekotizimi va GM to'plamlari tekshirildi). Uchinchi yo'l — cholg'uning o'zini modellashtirish.

**Modelda nima bor.** Uchburchak chertish turtkisi (chertish nuqtasi 0,22), kechikish chizig'i + allpass, halqadagi past o'tkazgich, kvarta pastdagi **simpatik ikkinchi tor**, va korpus rezonanslari: 250 Hz (havo), 430 Hz (qopqoq), 1,2 kHz ("dimog'i" formanti), 130 Hz dan past kesish (kichik korpus).

**Nega bu gitaradan boshqacha.** Gitaraning katta korpusi 100 Hz atrofida kuchli rezonans beradi va past chastotalarga boy; dutorniki kichik, rezonansi yuqoriroq va tovushi yupqaroq. Simpatik tor esa gitara namunasida umuman yo'q.

### Q30. Sozlash formula bilan emas, o'lchab kalibrlangan

**Qaror.** Har bir nota uchun `delay_trim` qiymati render paytida ikkilik qidiruv bilan tanlanadi: chiqish avtokorrelyatsiya orqali o'lchanadi, xato 1 sentdan kam bo'lguncha davom etadi.

**Sabab.** Allpass kasr kechikishi chastotaga bog'liq, shuning uchun analitik formula xato beradi. Avvalgi urinishlarda xato ±28 sentgacha chiqdi — bu aniq eshitiladi. Kalibrlashdan keyin barcha 17 nota **±0,5 sent** ichida.

### Q31. O'lchov metodikasidagi xatolar

Yo'l-yo'lakay ikkita o'z xatomni tuzatdim, ikkalasi ham noto'g'ri **xulosaga** olib kelgandi:

1. **Garmonikalarni oyna bilan o'lchash.** Davr butun songa bo'linmagani uchun garmonikalar FFT binlari orasiga tarqalib ketdi va men modelni buzuq deb o'yladim. To'g'ri yo'l — tahlil oynasini aniq butun sonli davrga tenglash (davrga sinxron spektr).
2. **Sof shovqinli turtki.** Garmonikalar nisbati notadan notaga tasodifiy chiqardi. Fizik jihatdan to'g'ri turtki — chertilgan torning uchburchak shakli; u garmonikalarni `sin(nπβ)/n²` qonuni bo'yicha taqsimlaydi va natija takrorlanadigan bo'ladi.


---

## Rubob va doira — ular ham modelga o'tkazildi

### Q32. Uch cholg'u ham o'z modeliga ega bo'ldi

**Qaror.** Dutordan keyin rubob va doira ham fizik modelga o'tkazildi. Model kodi umumlashtirildi: `tools/instrument-models/` ichida `strings.py` (torli cholg'ular) va `membrane.py` (doira).

**Sabab.** Dutorda usul ishladi; rubob va doira uchun GM namunalari ham mos emasligi aytildi.

### Q33. Doira uchun boshqa model sinfi kerak bo'ldi

**Qaror.** Doira to'lqin yo'li bilan emas, **modal sintez** bilan modellashtirildi.

**Sabab.** Membrana torga o'xshamaydi: u garmonik bo'lmagan chastotalarda tebranadi va ular Bessel funksiyalarining nollari bilan belgilanadi (1,00 · 1,55 · 2,04 · 2,18 …). Aynan shu garmonik bo'lmaganlik barabanni torli cholg'udan ajratadi; uni garmonik qatorlar bilan taqlid qilib bo'lmaydi. `scipy.special.jn_zeros` va `jv` bilan rejimlar va ularning zarb joyiga bog'liq amplitudalari to'g'ridan-to'g'ri hisoblanadi.

**Zarblarning farqi fizikadan kelib chiqadi.** Markazga urilganda faqat radial simmetrik rejimlar uyg'onadi — "bum" chuqur. Chetga urilganda yuqori rejimlar qo'shiladi va barmoqlar membranani bosib turgani uchun past rejimlar bo'g'iladi — "tak" qisqa va baland. O'lchangan natija: bum past/yuqori energiya nisbati 9,96 va T−20dB 1,17 s; tak 0,46 va 0,10 s; qarsak 0,03 va 0,17 s.

### Q34. Dutor va rubob bir modeldan, lekin boshqa parametrlar bilan

**Qaror.** Ikkalasi `StringSpec` bilan beriladi; farqlar parametrlarda.

**Sabab.** Ular bir oiladan, lekin akustikasi jiddiy farq qiladi: ipak torga qarshi metall tor, barmoqqa qarshi nokka, yog'och qopqoqqa qarshi teri qoplangan kosa, bitta simpatik torga qarshi uchta.

**Natija o'lchovda ko'rinadi.** C4 notasida garmonikalar: dutor `0 · −24,9 · −33,4 dB`, rubob `0 · −6,8 · −10,3 dB`. Past notalarda rubobning 2- va 3-garmonikasi asosiy tondan kuchliroq (+3,7 va +6,5 dB) — kichik korpusli metall torli cholg'u uchun xos.

### Q35. Patch skripti faylni buzdi — saboq

Modelni tahrirlashda `s.index()` bilan ikki nuqta orasidagi bo'lakni almashtirmoqchi bo'ldim, lekin qidirilgan satr (`y = np.zeros(n)`) faylda ikki joyda bor edi va kesim teskari chiqib, matn hamma joyga qo'shilib ketdi.

**Xulosa.** Kod bo'laklarini almashtirganda qidiruv satri yagona ekaniga ishonch bo'lmasa, faylni butunlay qayta yozish xavfsizroq — shunday qilindi.
