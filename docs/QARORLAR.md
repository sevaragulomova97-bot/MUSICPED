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


---

## B4 — darslar, topshiriqlar, natijalar, portfolio

### Q36. Nota yozuvi uchun VexFlow, rasm emas

**Qaror.** Notalar brauzerda VexFlow 5 bilan chiziladi; tayyor rasm fayllari ishlatilmaydi.

**Sabab.** Uchta foyda bir vaqtda olinadi: (1) nota kontenti kodda matn sifatida turadi, shuning uchun uni tahrirlash oson va ombor hajmi o'smaydi; (2) hech qanday mualliflik huquqi masalasi yo'q — rasm boshqa joydan olinmaydi; (3) chizilgan notani bosganda aynan shu balandlikdagi tovush chalinadi, ya'ni ko'rish va eshitish bitta harakatda bog'lanadi.

**Yechilishi kerak bo'lgan muammo.** VexFlow faqat SVG chiqaradi — ekran o'quvchi uchun u jim. Shuning uchun SVG `aria-hidden` qilindi va nota nomlari alohida tugmalar sifatida beriladi: klaviatura bilan ham yurish mumkin, screen reader ham o'qiydi.

### Q37. Topshiriq ikki xil baholanadi — avtomatik va rubrika bilan

**Qaror.** Test tipidagi topshiriqlar darhol avtomatik baholanadi; dars ishlanmasi, ijro va tahlil topshiriqlari esa **rubrika** bilan o'qituvchi tomonidan baholanadi va baho kelmaguncha natija `-1` deb saqlanadi.

**Sabab.** Shaxsga yo'naltirilgan ta'lim ijodiy ishni talab qiladi (Rogers), lekin ijodiy ishni mashina baholay olmaydi. Uch rubrika yozildi — `RUBRIKA_DARS`, `RUBRIKA_IJRO`, `RUBRIKA_TAHLIL`; har birida mezonlar va har mezon uchun daraja ta'riflari bor. Talaba rubrikani **topshirishdan oldin** ko'radi: shu bilan baholash mezonlari yashirin emas.

**`-1` ning ma'nosi.** Natijalar sahifasida u "o'qituvchi bahosini kutmoqda" deb ko'rsatiladi va o'rtacha ballni hisoblashda e'tiborga olinmaydi — aks holda baholanmagan ish nolga teng bo'lib, talabaning statistikasini asossiz pasaytirardi.

### Q38. Grafik yonida jadval ko'rinishi majburiy

**Qaror.** Natijalar sahifasidagi chiziqli grafikda "jadval ko'rinishi" tugmasi bor va u o'sha ma'lumotni raqamlar bilan beradi.

**Sabab.** Grafikda beshta yo'nalish bir vaqtda ko'rsatiladi. Palitra tekshiruvi (`scripts/validate_palette.js`) beshta chiziq ranglari orasidagi kontrastni yetarli emas deb ogohlantirdi — rang ko'rish buzilgan foydalanuvchi ikki chiziqni ajrata olmasligi mumkin. Ranglarni yana ajratish grafikni chiroyliligini buzardi, shuning uchun to'g'ri yo'l — ma'lumotni ranglardan **mustaqil** ikkinchi ko'rinishda ham berish.

### Q39. Sertifikat sharti o'zgartirildi

**Qaror.** Modul sertifikati quyidagi shartda beriladi: (1) modulning barcha darslari 100% yakunlangan; (2) agar modul yo'nalishlari bo'yicha baholangan topshiriqlar bo'lsa, ularning o'rtachasi ≥ 70.

**Sabab.** Dastlabki shart "kamida 2 ta baholangan topshiriq" edi. Topshiriqlar bankini yozib bo'lgach ko'rindiki, ayrim modullarda baholanadigan topshiriq ikkitadan kam — ya'ni shart bajarilishi **mumkin emas** edi. Shartni darslar yakuniga bog'lash halolroq: u har bir modulda erishib bo'ladigan va o'lchanadigan.

### Q40. PDF sertifikat brauzerda yasaladi

**Qaror.** Sertifikat `pdf-lib` + `qrcode` bilan brauzerda hosil qilinadi va to'g'ridan-to'g'ri yuklab olinadi; server ishlatilmaydi.

**Sabab.** Serversiz arxitektura (Q1) buzilmasligi kerak.

**Kutilmagan to'siq.** `pdf-lib` ning standart shriftlari WinAnsi kodlash bilan ishlaydi va o'zbek lotin alifbosidagi `oʻ`/`gʻ` (U+02BB) belgisini chiza olmaydi — xato bilan to'xtaydi. Shuning uchun `toWinAnsi()` yozildi: u bu belgilarni apostrof bilan almashtiradi. Qo'shimcha shrift faylini yuklash hajmni bir necha yuz kilobaytga oshirardi.

### Q41. Sertifikatdagi QR kod ichida ma'lumot bor

**Qaror.** QR kod havolaga emas, sertifikat ma'lumotining o'ziga (ism, modul, sana, seriya raqami) ishora qiladi.

**Sabab.** Serversiz saytda tekshirish uchun maxsus manzil yo'q. Ma'lumotni QR ichiga joylash tekshiruvchiga sertifikatni qaytadan o'qish imkonini beradi va hech qanday serverga bog'liq bo'lmaydi.


---

## B5 — o'qituvchi, tadqiqot, admin, PWA va testlar

### Q42. Statistika uchun tashqi kutubxona olinmadi

**Qaror.** t-mezon, χ², Koen d va Mann–Uitni `lib/stats.ts` da o'zimiz
yozildi; taqsimot funksiyalari to'liqsiz beta va gamma funksiyalari orqali
hisoblanadi.

**Sabab.** Kerakli funksiyalar sanoqli, mos kutubxonalar esa butun bir
matematik paketni olib keladi — serversiz saytda bu hajm bekorga. Muhimi,
algoritmlar klassik va ularning aniqligini tekshirish mumkin.

**Qanday ishonch hosil qilindi.** Har bir funksiya **SciPy 1.18** bilan
solishtirildi va 12 xonadan ortiq aniqlikda mos keldi. Kutilgan qiymatlar
testga qo'lda ko'chirilgan, ya'ni test o'z kodimizni o'zi bilan emas,
mustaqil paket bilan solishtiradi.

### Q43. Uelch varianti standart qilib olindi

**Qaror.** Bog'liq bo'lmagan tanlanmalar uchun standart — **Uelch** t-mezoni;
klassik (Styudent) variant faqat talab bo'yicha hisoblanadi.

**Sabab.** Styudent varianti guruhlar dispersiyasi teng bo'lishini talab
qiladi. Pedagogik tajribada bu shart tez-tez buziladi (tajriba guruhida
tarqoqlik odatda kattaroq), buzilganda esa `p` asossiz kichik chiqadi.
Uelch bu shartni talab qilmaydi va teng dispersiyada deyarli bir xil
natija beradi — ya'ni uni standart qilish hech narsa yo'qotmaydi.

### Q44. Parametrik bo'lmagan mezon yonma-yon hisoblanadi

**Qaror.** Har bir guruhlararo solishtiruvda t-mezon bilan birga
Mann–Uitni U ham hisoblanadi va interfeysda ikkalasi ham ko'rsatiladi.

**Sabab.** Guruhda 12 kishi; bunday hajmda taqsimotning normalligini
ishonchli tekshirib bo'lmaydi. Ikki mezon bir xil xulosaga olib kelsa,
natija taqsimot shakliga bog'liq emas — bu dissertatsiya himoyasida
beriladigan savolga tayyor javob.

### Q45. Ogohlantirishlar yashirilmaydi

**Qaror.** Tahlil natijasi bilan birga uning cheklovlari ham ko'rsatiladi:
kutilgan chastota 5 dan kichik bo'lgan χ² katakchalari, guruhning kichikligi,
boshlang'ich bir xillikning buzilishi va namunaviy ma'lumat ishtiroki.

**Sabab.** Dastur sonni berishi oson, uni to'g'ri o'qish esa qiyin. Agar
platforma faqat `p` ni ko'rsatsa, u tadqiqotchini xato xulosaga undaydi.
Shuning uchun har bir cheklov matn bilan aytiladi.

### Q46. Tahlilga faqat to'liq o'lchovli talabalar kiradi

**Qaror.** Ishtirokchi tahlilga kirishi uchun **boshlang'ich va yakuniy**
diagnostikasi ham bo'lishi, hamda tajriba/nazorat guruhi ko'rsatilgan
bo'lishi kerak. Kirmaganlar soni va sababi sahifada yoziladi.

**Sabab.** Bitta o'lchov bilan «o'sish» degan son ma'nosiz. Chetda
qolganlarni jim tashlab ketish esa tadqiqotchini «hammasi hisobga olindi»
deb o'ylashga majbur qiladi.

### Q47. Ma'lumot fayl orqali ko'chiriladi

**Qaror.** Talaba natijasi `natijalar-….json`, o'qituvchi bahosi esa
`baholar-….json` fayli orqali ko'chiriladi. Format versiyalangan.

**Sabab.** Server yo'q (Q1), shuning uchun avtomatik sinxronizatsiya ham
yo'q. Fayl — eng sodda va eng shaffof yechim: ma'lumot foydalanuvchining
qo'lida qoladi va u nimani berishni o'zi hal qiladi.

**Format qoidasi: muhim maydonlar qat'iy, qolgani kechirimli.** Ism yoki
identifikator yo'q bo'lsa fayl rad etiladi; bitta buzuq topshiriq qatori
bo'lsa shu qator tashlanadi va qolgani o'qiladi. Shu sababli bitta xato
butun eksportni yo'qotmaydi.

**Kelajak versiyasi jim buzilmaydi.** `version` fayl ichida yoziladi; u
platformanikidan yuqori bo'lsa, fayl rad etiladi va sabab aytiladi.

### Q48. `-1` ball eksportga chiqmaydi

**Qaror.** Ichkarida baholanmagan ish `-1` bilan belgilanadi (B4 kelishuvi),
lekin eksport faylida u **umuman yozilmaydi**; import qilinganda manfiy
qiymat `undefined` ga keltiriladi.

**Sabab.** Bu **e2e test topgan haqiqiy xato edi**. Ball 0–100 oralig'iga
qirqilar edi, `-1` esa 0 ga aylanardi — ya'ni «o'qituvchi bahosini kutmoqda»
degan holat o'qituvchining ekranida «nol ball olgan ish» bo'lib ko'rinardi va
talabaning o'rtachasini asossiz pasaytirardi. Endi ikkala chekkada ham
tekshiriladi va unit test bilan qoplangan.

### Q49. O'qituvchi bahosi o'z nusxasiga yoziladi

**Qaror.** O'qituvchi baho qo'yganda u **import qilingan nusxaga** yoziladi,
talabaning bazasiga emas; keyin fayl orqali qaytadi.

**Sabab.** Bitta manba qoidasi buzilmasligi kerak: o'qituvchi nusxasi
o'qituvchining, talaba nusxasi talabaning. Aks holda ikki tomon bir xil
yozuvni boshqa-boshqa o'zgartirib, qaysi biri to'g'ri ekani noma'lum
bo'lib qolardi.

### Q50. Admin paneli kontentni tekshiradi, foydalanuvchilarni emas

**Qaror.** Admin panelining asosiy vazifasi — **konstruktiv moslashuvni**
tekshirish: har bir o'quv natijasining darsi va baholovchi topshirig'i bormi.

**Sabab.** Serversiz platformada markaziy foydalanuvchilar ro'yxati yo'q,
shuning uchun klassik «admin» vazifasi ma'nosiz. Kontentning yaxlitligini
tekshirish esa aniq foyda beradi va ko'z bilan bajarib bo'lmaydi.

**Birinchi natija yashirilmadi.** Audit 24 o'quv natijasidan atigi 5 tasi
to'liq qoplanganini, 12 tasida na dars na topshiriq borligini ko'rsatdi. Bu
to'g'ri: kontent — to'liq o'quv dasturi emas, uning namunaviy qismi. Jadval
buni ochiq ko'rsatadi va to'ldirish tartibini beradi.

### Q51. Kontent testlari kontentning o'zini tekshiradi

**Qaror.** `tests/unit/content-audit.test.ts` funksiyalarni emas, kontentni
ham tekshiradi: dasturdan tashqarida qolgan dars yoki topshiriq bo'lsa, test
yiqiladi.

**Sabab.** Kontent o'sgani sari aloqa jim uziladi. Testga qo'yilgan shart —
«orphan yo'q» — buni birinchi push'dayoq ushlaydi.

### Q52. Oflayn rejim: har bir resurs turiga alohida strategiya

**Qaror.** Xizmat ishchisida uch strategiya: xeshlangan fayllar uchun avval
kesh, sahifalar uchun avval tarmoq, qolganlari uchun avval tarmoq + kesh
zaxirasi.

**Sabab.** `/_next/static/…` fayllari nomida mazmun xeshi bor — mazmuni
o'zgarsa nomi ham o'zgaradi, shuning uchun keshdagi nusxa hech qachon
eskirmaydi. Sahifalar esa o'zgaradi: ularni keshdan berish yangi versiyani
ko'rsatmay qo'yardi.

**`scope` qat'iy yozilmadi.** U `self.registration.scope` dan olinadi, shuning
uchun sayt `/` da ham, `/MUSICPED/` da ham bir xil ishlaydi — Q4 mantig'i
davom ettirildi.

### Q53. e2e testlar qurilgan sayt ustida ishlaydi

**Qaror.** Playwright testlari `next dev` emas, `npm run build` natijasi
(`out/`) ustida yuriladi.

**Sabab.** Platforma aynan shu ko'rinishda joylanadi. `next dev` boshqa kodni
sinash bo'lardi: xizmat ishchisi faqat ishlab chiqarish qurilishida
ro'yxatdan o'tadi va yo'llar `trailingSlash` bilan yoziladi.

### Q54. e2e testlar joylashni to'xtatmaydi

**Qaror.** CI da e2e alohida ish sifatida yuriladi va `continue-on-error`
bilan belgilangan; `deploy` faqat lint + unit test + build dan keyin ketadi.

**Sabab.** Brauzer testlari muhit sababli vaqti-vaqti bilan yiqiladi.
Platformani bitta odam yuritadi — tasodifiy yiqilish saytni yangilashni
bloklab qo'ysa, foyda emas, to'siq bo'lardi. Natija baribir ko'rinadi.

### Q55. `force` bilan bosish testdan olib tashlandi

**Qaror.** Testlarda `check({ force: true })` ishlatilmaydi (ko'rinmas
`sr-only` inputlardan tashqari, u yerda yorliq bosiladi).

**Sabab va topilgan muammo.** `force` aktuallik tekshiruvini o'tkazib
yuboradi va klik yopishqoq sarlavha ostidagi elementga «ko'r» yuborilishi
mumkin — aynan shunday bo'ldi. Tekshirish shuni ko'rsatdiki, brauzer
elementni ko'rinishga olib kelganda (Tab bilan fokus yoki sahifa ichidagi
havola) u 64px balandlikdagi sarlavha ostida qolib ketar ekan. Shuning uchun
`html` ga `scroll-padding-top: 5rem` qo'shildi — bu klaviatura bilan
ishlaydigan foydalanuvchi uchun haqiqiy tuzatish.

### Q56. Baho saqlanganda tasdiq kartada emas, ro'yxat ustida

**Qaror.** «Saqlandi» xabari baholash kartasida emas, navbat ro'yxatining
tepasida ko'rsatiladi.

**Sabab.** Yana e2e test topdi: baho saqlangach ish navbatdan chiqadi va
karta o'chadi — kartadagi tasdiq xabari bilan birga. O'qituvchi hech qanday
javob ko'rmay qolardi. Endi xabar o'chmaydigan joyda chiqadi va qaysi ishga
necha ball qo'yilganini aytadi.


---

## Kontentni to'ldirish

### Q57. Kurslar fayli modullarga bo'lindi

**Qaror.** `content/courses.ts` o'rniga `content/courses/` papkasi: har bir
modul o'z faylida, `index.ts` esa eski eksportlarni saqlaydi.

**Sabab.** Kontent to'ldirilgach bitta fayl uch mingdan ortiq satrga
yetardi. Bo'lingandan keyin ikki modulni parallel tahrirlash mumkin va
o'zgarish qaysi modulga tegishli ekani commit diffida darhol ko'rinadi.
Index saqlangani uchun hech bir import o'zgarmadi.

### Q58. Barcha o'quv natijalari qoplandi

**Qaror.** 15 ta yangi dars va 16 ta yangi topshiriq yozildi; natijada
24 o'quv natijasining hammasi dars va topshiriq bilan ta'minlandi
(oldin 5 tasi).

**Sabab.** Audit (Q50) uzilishlarni ochiq ko'rsatgandi: 12 ta natijada na
dars, na topshiriq bor edi. Dissertatsiya platformasi uchun bu jiddiy
kamchilik — konstruktiv moslashuv qog'ozda e'lon qilinib, amalda
bajarilmagan bo'lardi.

**Endi bu test bilan qo'riqlanadi.** `tests/unit/content-audit.test.ts`
uzilish qolsa yiqiladi va qaysi natija ochiq qolganini xabarda yozadi.
Shuning uchun keyingi kontent qo'shilganda aloqa jim uzilmaydi.

### Q59. Maqom darsidagi nota misoli «shartli» deb belgilandi

**Qaror.** Maqom darsidagi nota namunasi o'zimiz tuzildi va matnda ochiq
«shartli misol, haqiqiy maqom asaridan ko'chirma emas» deb yozildi.

**Sabab ikkita.** Birinchidan, mualliflik huquqi: haqiqiy ijro yozuvi yoki
nashr etilgan nota ko'chirilmaydi (loyiha qoidasi). Ikkinchidan, ilmiy
halollik: bitta soddalashtirilgan iborani «maqom namunasi» deb berish
o'quvchini chalg'itadi — maqomning lad tuzilishi bunday qisqartmaga
sig'maydi. Misol faqat bitta g'oyani ko'rsatadi: ohang tayanch tovushdan
uzoqlashadi va unga qaytadi.

### Q60. Texnologiya kursida faqat erkin dasturlar

**Qaror.** Nota yozuvi uchun MuseScore, audio uchun Audacity tavsiya
etiladi; kursda pullik dasturlar o'rgatilmaydi.

**Sabab.** Platformaning o'zi obunasiz ishlaydi (Q1); o'qituvchini pullik
dasturga bog'laydigan kurs shu tamoyilni buzardi. Maktab kompyuteriga
erkin dastur qonuniy o'rnatiladi va litsenziya masalasi chiqmaydi.
Darsda esa ish tartibi o'rgatiladi — u dasturdan qat'i nazar bir xil,
shuning uchun bilim boshqa dasturga ham ko'chadi.

### Q61. Yangi rubrikalar: refleksiya va texnologiya

**Qaror.** Mavjud uch rubrikaga (dars, ijro, tahlil) ikkitasi qo'shildi:
`RUBRIKA_REFLEKSIYA` — pedagogik yozma ishlar uchun, `RUBRIKA_TEXNOLOGIYA`
— raqamli mahsulotlar uchun.

**Sabab.** `RUBRIKA_TAHLIL` musiqa asarini tahlil qilishga mo'ljallangan:
uning mezonlari «shakl», «lad va garmoniya», «xulosa asoslanganligi».
Refleksiv esseni shu mezonlar bilan baholab bo'lmaydi — unda dalil asar
matnidan emas, dars amaliyotidan olinadi. Raqamli mahsulotda esa texnik
bajarilish bilan birga manba va litsenziya ham baholanishi kerak.
