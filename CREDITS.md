# CREDITS

Loyihada mualliflik huquqi bilan himoyalangan musiqa asarlari, audio yozuvlar yoki rasmlardan foydalanilmagan.

## Grafika

| Material | Manba | Litsenziya |
|---|---|---|
| MusicPed logotipi va ilova ikonkalari (`public/icon*.png`, `public/icon.svg`) | Shu loyiha uchun yaratilgan | Loyiha bilan birga |
| Interfeys ikonkalari | [Lucide](https://lucide.dev) | ISC |

## Shriftlar

| Shrift | Manba | Litsenziya |
|---|---|---|
| Inter | [Google Fonts](https://fonts.google.com/specimen/Inter) | SIL Open Font License 1.1 |
| Manrope | [Google Fonts](https://fonts.google.com/specimen/Manrope) | SIL Open Font License 1.1 |

Shriftlar `next/font` orqali build paytida yuklab olinadi va sayt bilan birga joylashadi — ishlash vaqtida tashqi serverga murojaat qilinmaydi.

## Audio namunalari

Virtual cholg'ular ovozi **haqiqiy yozib olingan namunalar**dan chiqadi.

| Material | Manba | Litsenziya |
|---|---|---|
| Cholg'u namunalari (`public/audio/`) | FluidR3_GM SoundFont, [`soundfont-for-samplers`](https://www.npmjs.com/package/soundfont-for-samplers) npm paketi orqali | MIT |

Namunalar loyihaning o'ziga joylashtirilgan va sayt bilan birga yetkaziladi — ishlash vaqtida tashqi serverga murojaat qilinmaydi va oflayn ishlaydi. Hajmni kamaytirish uchun har 3 yarim tonda bitta namuna olingan (cholg'u uchun 17 ta fayl); oraliq notalarni `Tone.Sampler` tovush balandligini o'zgartirib hosil qiladi. Jami hajm — 1,6 MB.

### Qaysi namuna qaysi cholg'u uchun

| Platformadagi cholg'u | Ishlatilgan namuna | Izoh |
|---|---|---|
| Pianino | `acoustic_grand_piano` | To'g'ridan-to'g'ri mos |
| Gitara | `acoustic_guitar_nylon` | To'g'ridan-to'g'ri mos |
| Nay | `flute` | Yaqin mos (nay — puflama cholg'u) |
| **Dutor** | **O'z fizik modelimiz** | To'lqin yo'li modeli — gitara yozuvi emas |
| **Rubob** | **O'z fizik modelimiz** | To'lqin yo'li modeli, 3 ta simpatik tor bilan |
| **Doira** | **O'z fizik modelimiz** | Membrana modal sintezi (Bessel rejimlari) |

> **Halol ogohlantirish:** erkin litsenziyali **haqiqiy dutor va rubob yozuvlari topilmadi**. Shuning uchun ular eng yaqin qarindoshlari — nayloniy va metall torli gitara namunalari asosida, tembr filtrlari (past/yuqori chastota kesish, yorqinlik va reverb) bilan moslashtirilgan. Bu sintez ovozidan ancha haqiqiyroq, lekin **haqiqiy dutor/rubob tembri emas**.
>
> Shu sababli dutor, rubob, gitara va doira uchun **bir nechta tembr varianti** berilgan va qaysi biri ishlatilishini foydalanuvchi o'zi tanlaydi (cholg'u sahifasidagi «Tovush turi» ro'yxati). Tanlov brauzerda eslab qolinadi.
>
> Agar sizda erkin foydalanish mumkin bo'lgan dutor yoki rubob yozuvlari bo'lsa, ularni `public/audio/` ga yangi papka sifatida qo'yib, `lib/audio/timbres.ts` ga bitta yozuv qo'shish kifoya — qolgan kod o'zgarmaydi.

### Fizik modellar

`public/audio/dutor-model/`, `public/audio/rubob-model/` va
`public/audio/doira-model/` dagi namunalar (jami 37 ta fayl) hech qanday tashqi
yozuvdan olinmagan — ular `tools/instrument-models/` dagi skriptlar bilan
hosil qilingan: dutor va rubob uchun raqamli to'lqin yo'li, doira uchun
membrananing modal sintezi. Litsenziya cheklovi yo'q, mualliflik to'liq
loyihaga tegishli.

Batafsil: [`tools/instrument-models/README.md`](tools/instrument-models/README.md).

### Tembr variantlari uchun ishlatilgan namunalar

| Variant | GM namunasi |
|---|---|
| Rubob — klavesin / klavinet / pitsikato | `harpsichord`, `clavinet`, `pizzicato_strings` |
| Dutor — yumshoq/yorqin tor, pitsikato | `acoustic_guitar_nylon`, `pizzicato_strings` |
| Doira — chuqur baraban / past / orkestr | `taiko_drum`, `woodblock`, `standard`, `orchestra_kit` |

## Mashhur kuylar (`content/tunes.ts`)

Cholg'u sahifalaridagi «Mashhur kuylar» bo'limiga **faqat mualliflik
huquqi muddati tugagan** ohanglar kiritilgan. Kuylar nota ma'lumoti
sifatida saqlanadi (yozuv emas) va platformaning o'z sintezi bilan
chalinadi — ya'ni hech qanday tashqi audio yozuv ishlatilmaydi.

| Ohang | Manba | Holat |
|---|---|---|
| Yulduzcha | «Ah! vous dirai-je, maman» — 18-asr fransuz xalq kuyi | Jamoat mulki |
| Shodlik madhiyasi | L. van Beethoven, 9-simfoniya finali (1824) | Jamoat mulki |
| Qo'zichoq | 19-asr an'anaviy bolalar kuyi | Jamoat mulki |
| Menuet (sol major) | Ch. Petzold, BWV Anh. 114 (~1725) | Jamoat mulki |
| Elizaga (boshlanishi) | L. van Beethoven, bagatella (1810) | Jamoat mulki |
| Greensleeves | 16-asr ingliz xalq kuyi | Jamoat mulki |
| Doira usullari (2/4, 3/4, 6/8) | O'quv maqsadida tuzilgan metrik naqshlar | Loyihaning o'zi |

Har bir kuyning manbasi interfeysda ham ko'rsatiladi — kuylar panelining
pastki qatorida.

### O'zbek milliy repertuari haqida

Bankda hozircha o'zbek xalq kuylari **yo'q**. Sabab texnik emas, balki
aniqlik: «Boychechak», «Chittigul» kabi kuylarning nota matnini
xotiradan yozish xavfli — musiqa o'qituvchisi uchun mo'ljallangan
platformada taxminiy ohangni mashhur kuy nomi bilan berish eng og'ir
xato bo'lardi.

Milliy repertuar nota matni bilan birga berilsa, u xuddi shu tuzilmaga
qo'shiladi va shu jadvalda qayd etiladi.

## Avatarlar

Haqiqiy shaxslar fotosuratlari ishlatilmaydi. Avatar sifatida foydalanuvchi ismining bosh harflari ko'rsatiladi.

## Namunaviy ma'lumotlar

Platformadagi barcha talaba ismlari, natijalari va matnlari — **namunaviy (demo) ma'lumot**. Ular haqiqiy shaxslarga tegishli emas va faqat platformaning ishlashini ko'rsatish uchun xizmat qiladi.
