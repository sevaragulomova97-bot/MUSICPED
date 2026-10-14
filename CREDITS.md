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
| Doira | GM zarbli to'plam: past tom, bongo, daf (tambourine) | `bum`, `tak`, `qarsak` zarblari uchun |
| **Dutor** | `acoustic_guitar_nylon` + tembr filtri | **Yaqinlashtirilgan** |
| **Rubob** | `acoustic_guitar_steel` + tembr filtri | **Yaqinlashtirilgan** |

> **Halol ogohlantirish:** erkin litsenziyali **haqiqiy dutor va rubob yozuvlari topilmadi**. Shuning uchun ular eng yaqin qarindoshlari — nayloniy va metall torli gitara namunalari asosida, tembr filtrlari (past/yuqori chastota kesish, yorqinlik va reverb) bilan moslashtirilgan. Bu sintez ovozidan ancha haqiqiyroq, lekin **haqiqiy dutor/rubob tembri emas**.
>
> Shu sababli dutor, rubob, gitara va doira uchun **bir nechta tembr varianti** berilgan va qaysi biri ishlatilishini foydalanuvchi o'zi tanlaydi (cholg'u sahifasidagi «Tovush turi» ro'yxati). Tanlov brauzerda eslab qolinadi.
>
> Agar sizda erkin foydalanish mumkin bo'lgan dutor yoki rubob yozuvlari bo'lsa, ularni `public/audio/` ga yangi papka sifatida qo'yib, `lib/audio/timbres.ts` ga bitta yozuv qo'shish kifoya — qolgan kod o'zgarmaydi.

### Tembr variantlari uchun ishlatilgan namunalar

| Variant | GM namunasi |
|---|---|
| Rubob — klavesin / klavinet / pitsikato | `harpsichord`, `clavinet`, `pizzicato_strings` |
| Dutor — pitsikato | `pizzicato_strings` |
| Doira — chuqur baraban / past / orkestr | `taiko_drum`, `woodblock`, `standard`, `orchestra_kit` |

## Avatarlar

Haqiqiy shaxslar fotosuratlari ishlatilmaydi. Avatar sifatida foydalanuvchi ismining bosh harflari ko'rsatiladi.

## Namunaviy ma'lumotlar

Platformadagi barcha talaba ismlari, natijalari va matnlari — **namunaviy (demo) ma'lumot**. Ular haqiqiy shaxslarga tegishli emas va faqat platformaning ishlashini ko'rsatish uchun xizmat qiladi.
