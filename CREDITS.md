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
| **Dutor** | **O'z fizik modelimiz** (namuna banki) | To'lqin yo'li modeli — gitara yozuvi emas |
| **Rubob** | **O'z fizik modelimiz** (namuna banki) | To'lqin yo'li modeli, 3 ta simpatik tor bilan |
| **Doira** | **O'z fizik modelimiz** (namuna banki) | Membrana modal sintezi (Bessel rejimlari) |

> **Halol ogohlantirish:** erkin litsenziyali **haqiqiy dutor va rubob yozuvlari topilmadi**. Shuning uchun ular eng yaqin qarindoshlari — nayloniy va metall torli gitara namunalari asosida, tembr filtrlari (past/yuqori chastota kesish, yorqinlik va reverb) bilan moslashtirilgan. Bu sintez ovozidan ancha haqiqiyroq, lekin **haqiqiy dutor/rubob tembri emas**.
>
> Shu sababli dutor, rubob, gitara va doira uchun **bir nechta tembr varianti** berilgan va qaysi biri ishlatilishini foydalanuvchi o'zi tanlaydi (cholg'u sahifasidagi «Tovush turi» ro'yxati). Tanlov brauzerda eslab qolinadi.
>
> Agar sizda erkin foydalanish mumkin bo'lgan dutor yoki rubob yozuvlari bo'lsa, ularni `public/audio/` ga yangi papka sifatida qo'yib, `lib/audio/timbres.ts` ga bitta yozuv qo'shish kifoya — qolgan kod o'zgarmaydi.

### Fizik modellar va namuna banklari

`public/audio/dutor-model/`, `public/audio/rubob-model/` va
`public/audio/doira-model/` dagi namunalar (jami 177 ta fayl) hech qanday tashqi
yozuvdan olinmagan — ular `tools/instrument-models/` dagi skriptlar bilan
hosil qilingan: dutor va rubob uchun raqamli to'lqin yo'li, doira uchun
membrananing modal sintezi. Litsenziya cheklovi yo'q, mualliflik to'liq
loyihaga tegishli.

Har bir papkada `bank.json` bor — unda har bir namunaning notasi yoki
zarbi, asosiy chastotasi, registri, ijro kuchi, varianti, davomiyligi,
manbasi va litsenziyasi yozilgan. Dvigatel namunalarni shu fayl bo'yicha
tanlaydi, kodda hech qanday fayl nomi qotirilmagan.

| Bank | Fayl | Tuzilishi |
|---|---|---|
| `dutor-model` | 60 | 20 nota (Gb3–Db5, har yarim tonda) x 3 ijro kuchi |
| `rubob-model` | 81 | 27 nota (Db3–Eb5, har yarim tonda) x 3 ijro kuchi |
| `doira-model` | 36 | 4 zarb x 3 ijro kuchi x 3 variant |

Uch narsa ataylab shunday qilingan:

1. **Har yarim tonda alohida namuna.** Ilgari har 3 yarim tonda bittasi
   olinib, oraliq notalar namunani cho'zish bilan hosil qilinardi.
   Cho'zish tovush balandligi bilan birga korpus rezonanslarini ham
   suradi — natijada bitta cholg'u turli notada turli o'lchamdagi
   cholg'uga o'xshab qolardi.
2. **Ijro kuchining uch qatlami.** Har biri alohida render qilingan:
   kuch ortganda tovush faqat balandlashmaydi, tembri ham o'zgaradi
   (dutorda spektr markazi 360 -> 448 Hz, rubobda 786 -> 1104 Hz).
   Buni bitta namunani balandroq chalish bilan hosil qilib bo'lmaydi.
3. **Zarb variantlari.** Har bir doira zarbining uch ijrosi bor va ular
   navbat bilan chalinadi; aks holda takroriy zarb mexanik eshitiladi.

Batafsil: [`tools/instrument-models/README.md`](tools/instrument-models/README.md).

### Nega haqiqiy yozuv emas

Erkin litsenziyali **haqiqiy doira, dutor va qashqar rubobi yozuvlari
topilmadi**. Tekshirilgani: npm ekotizimi, General MIDI to'plamlari
(FluidR3_GM, SGM v2.01), ochiq namuna kutubxonalari (oramics/sampled,
VSCO 2 CE). Ularda sitar, tanbur, setar ham yo'q. Bundan tashqari bu
loyiha ishlab chiqilayotgan muhitdan Freesound, Internet Archive va
Wikimedia Commons ga umuman kirib bo'lmaydi (tarmoq siyosati faqat
paket registrlari va GitHub ga ruxsat beradi), shuning uchun u yerdagi
yozuvlarni tekshirish ham mumkin bo'lmadi.

Shu sababli tizim **haqiqiy yozuvlar qo'shilishiga tayyor** qilib
qurildi, sintetik tovush esa hech qayerda yozuv deb ko'rsatilmaydi:

* har bir bankda `tur` maydoni bor — `model` yoki `yozuv`;
* cholg'u sahifasida shu qiymat ko'rsatiladi («Fizik model» yoki
  «Haqiqiy yozuv»);
* birlik testi modelning `tur` qiymati `yozuv` bo'lib qolishini
  bevosita taqiqlaydi.

**Haqiqiy yozuv qo'shish uchun** `public/audio/` ga yangi papka qo'yib,
unga shu ko'rinishdagi `bank.json` yoziladi:

```json
{
  "cholgu": "rubob",
  "nom": "Qashqar rubobi — studiya yozuvi",
  "tur": "yozuv",
  "turi_izoh": "ijrochi va yozuv sanasi",
  "manba": "kim yozgani, qayerda",
  "litsenziya": "CC BY 4.0 / ruxsatnoma",
  "sampleRate": 44100,
  "kuchlar": [{ "id": "orta", "nom": "O'rta", "velocity": 0.7 }],
  "namunalar": [
    {
      "fayl": "A3-orta.mp3", "nota": "A3", "f0": 220.0,
      "registr": "orta", "kuch": "orta", "variant": 1,
      "davomiylik": 3.2, "loop": null
    }
  ]
}
```

So'ng `lib/audio/timbres.ts` ga bitta yozuv qo'shiladi (`folder` va
`bank: true`). Boshqa hech narsa o'zgarmaydi — dvigatel, tanlov
qoidalari va interfeys o'sha-o'sha qoladi.

### Hali kerak bo'lgan yozuvlar

| Cholg'u | Nima kerak |
|---|---|
| Doira | Har bir zarb (markazga ochiq, markazga kaft bosib, chet, gardish) uchun kamida 3 ijro, 3 kuch darajasida. Barmoq bezaklari alohida. |
| Qashqar rubobi | Db3–Eb5 oralig'ida har yarim ton, 3 kuch darajasida; bo'sh tor va pardalangan nota alohida bo'lsa — yaxshi. |
| Dutor | Gb3–Db5 oralig'ida har yarim ton, 3 kuch darajasida; ikki torning birgalikdagi jarangi alohida. |

Har bir yozuv uchun ijrochining ismi, yozuv sanasi, joyi va foydalanish
ruxsati kerak — `bank.json` bu maydonlarni **majburiy** qiladi va
ularsiz bankni umuman qabul qilmaydi.

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
