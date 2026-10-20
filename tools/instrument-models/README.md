# Cholg'u fizik modellari

`public/audio/{dutor,rubob,doira}-model/` dagi namunalar shu skriptlar bilan
hosil qilingan. Ular hech qanday tashqi yozuvdan olinmagan — cholg'ularning
o'zi modellashtirilgan.

## Nega model

Erkin litsenziyali **haqiqiy dutor, rubob va doira yozuvlari topilmadi**
(npm ekotizimi va General MIDI to'plamlari tekshirildi — ularda hatto sitar,
tanbur yoki setar ham yo'q). Gitara namunasini filtr bilan o'xshatishga
urinish yetarli natija bermadi. Shuning uchun har bir cholg'u o'z akustikasi
bo'yicha noldan modellashtirildi.

Bu **vaqtinchalik yechim**: haqiqiy yozuvlar qo'lga kirganda ularni qo'yish
uchun kodni o'zgartirish kerak emas, `public/audio/` ga papka va `bank.json`
qo'shish kifoya (qarang `CREDITS.md`).

## Bank tuzilishi

Har bir render `bank.json` ham yozadi — namunalar ro'yxati va ular haqidagi
ma'lumot. Dvigatel faqat shu faylga qaraydi, kodda fayl nomlari yo'q.

| Bank | Fayllar | Tuzilishi |
|---|---|---|
| `dutor` | 60 | 20 nota (Gb3–Db5) x 3 ijro kuchi |
| `rubob` | 81 | 27 nota (Db3–Eb5) x 3 ijro kuchi |
| `doira` | 36 | 4 zarb x 3 ijro kuchi x 3 variant |

## Ijro kuchi qatlamlari

Kuch qatlamlari **alohida render qilinadi**, bitta namunaning balandligi
o'zgartirilmaydi. Sabab fizik: torni kuchli chertganda barmoq yoki nokka
tor bilan tor yuzada tegadi va burchak o'tkir qoladi — yuqori garmonikalar
saqlanadi. Yumshoq chertilganda tegish keng bo'ladi va burchak
yumaloqlanadi.

Modelda bu `contact` (tegish kengligi) bilan beriladi; dutorda u 2,4 barobar
keng (barmoq), rubobda tor (nokka).

O'lchangan natija (spektr markazi, zarbning dastlabki 50 ms i):

| | yumshoq | o'rta | kuchli |
|---|---|---|---|
| Dutor G3 | 361 Hz | 409 Hz | 448 Hz |
| Rubob G3 | 786 Hz | 940 Hz | 1105 Hz |

Doirada kuch yuqori rejimlarning kuchayishi (`tilt`), gardish zarbi va
halqalar jarangi bilan beriladi.

## Ikki xil model

| Fayl | Usul | Cholg'ular |
|---|---|---|
| `strings.py` | Raqamli to'lqin yo'li (digital waveguide) | Dutor, rubob |
| `membrane.py` | Modal sintez (Bessel rejimlari) | Doira |

Doira uchun torli model mutlaqo mos kelmaydi: membrana **garmonik bo'lmagan**
chastotalarda tebranadi (1,00 · 1,55 · 2,04 · 2,18 · 2,50 …), aynan shu
barabanni torli cholg'udan ajratib turadi.

## Dutor va rubob — bir oila, boshqa akustika

| | Dutor | Rubob |
|---|---|---|
| Tor | Ipak/nayloniy — yumshoq, tez so'nadi | Metall — yorqin, uzoq jaranglaydi |
| Chertish nuqtasi | 0,22 (barmoq o'rtaroqda) | 0,12 (nokka ko'prikka yaqin) |
| Halqa damping | 0,42 | 0,20 |
| Halqa kuchayishi | 0,9965 | 0,9986 |
| Tegish shovqini | 0,08 / 1,8 kHz (barmoq) | 0,20 / 6 kHz (nokka) |
| Korpus | Yupqa tut yog'ochi: 250 · 430 · 1200 Hz | Teri qoplangan kosa: 320 · 800 · 2000 · 4200 Hz |
| Simpatik tor | 1 ta (kvarta pastda) | 3 ta |

Natijada C4 notasida garmonikalar tarkibi: dutor `0 · −24,9 · −33,4 dB`,
rubob `0 · −6,8 · −10,3 dB` — rubob ancha yorqin. Past notalarda rubobning
2- va 3-garmonikasi asosiy tondan **kuchliroq** (+3,7 va +6,5 dB), bu kichik
korpusli metall torli cholg'u uchun xos.

## Doira — to'rt zarb, bitta membrana

Zarb joyi qaysi rejim uyg'onishini belgilaydi. (m,n) rejimining r radiusdagi
amplitudasi `J_m(z_mn · r/R)` ga proporsional, shuning uchun markazda faqat
radial simmetrik (m=0) rejimlar qo'zg'aladi.

| Zarb | r/R | Past rejim | O'lchangan natija (o'rta kuch) |
|---|---|---|---|
| `bum` | 0,00 | to'liq | cho'qqi 98 Hz, T−20dB 1,19 s, past/yuqori 10,9 |
| `bosiq` | 0,00 | to'liq, lekin tez so'nadi | cho'qqi 98 Hz, T−20dB 0,29 s, past/yuqori 7,2 |
| `tak` | 0,82 | 0,18 ga bo'g'iladi | cho'qqi 215 Hz, T−20dB 0,14 s, past/yuqori 0,52 |
| `qarsak` | 0,97 | 0,07 ga bo'g'iladi | cho'qqi 6840 Hz, T−20dB 0,20 s, past/yuqori 0,06 |

`bum` va `bosiq` bir joyga uriladi va bir xil asosiy chastotada
jaranglaydi — farqi **so'nishda**: kaft membranani bosib turganda
tebranish to'rt barobar tez so'nadi. Ochiq va bo'g'iq zarb farqi ramkali
baraban ijrosining asosi, shuning uchun u alohida namuna sifatida
berilgan, filtr bilan taqlid qilinmagan.

Chetga urilganda past rejimlar bo'g'iladi, chunki barmoqlar membranani bosib
turadi. Modelda yog'och gardishning zarb transienti va metall halqalarning
jarangi ham bor.

## Sozlash kalibratsiyasi (torli cholg'ular)

Allpass kasr kechikishi chastotaga bog'liq, shuning uchun uni formula bilan
aniq hisoblab bo'lmaydi — dastlabki urinishda xato ±28 sentgacha chiqdi.
`render.py` har bir nota uchun `delay_trim` ni **o'lchab** tanlaydi: chiqish
avtokorrelyatsiya bilan o'lchanadi va xato 1 sentdan kam bo'lguncha ikkilik
qidiruv yuradi.

Oxirgi renderda dutorning 20 va rubobning 27 notasi — jami 47 tasi —
**±0,5 sent** aniqlikda chiqdi, clipping yo'q. Kalibratsiya har bir nota
uchun bir marta yuriladi: tegish kengligi tovush balandligiga ta'sir
qilmaydi, shuning uchun bitta `delay_trim` uchala kuch qatlamiga yetadi.

## Qayta render qilish

```bash
pip install numpy scipy
cd tools/instrument-models
python3 -I render.py hammasi     # wav/ va bank.json
./pack.sh dutor rubob doira      # MP3 -> public/audio/
```

`wav/` papkasi git ga kiritilmaydi (42 MB): urug'lar qat'iy, shuning
uchun render har safar bir xil natija beradi.

Skript har bir notaning sozlanishi va garmonikalar tarkibini (doirada esa
zarblarning so'nish vaqti va spektr muvozanatini) jadval ko'rinishida chop
etadi — natijani raqamlar bilan tekshirish mumkin.

## Cheklov

Bular **model**, haqiqiy yozuv emas. Shu sababli `bank.json` da
`"tur": "model"` turadi, cholg'u sahifasi buni ko'rsatadi, birlik testi
esa uni «yozuv» deb belgilab qo'yishni taqiqlaydi.
