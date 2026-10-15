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

## Doira — uch zarb, bitta membrana

Zarb joyi qaysi rejim uyg'onishini belgilaydi. (m,n) rejimining r radiusdagi
amplitudasi `J_m(z_mn · r/R)` ga proporsional, shuning uchun markazda faqat
radial simmetrik (m=0) rejimlar qo'zg'aladi.

| Zarb | r/R | Past rejim | O'lchangan natija |
|---|---|---|---|
| `bum` | 0,00 | to'liq | cho'qqi 98 Hz, T−20dB 1,17 s, past/yuqori 9,96 |
| `tak` | 0,82 | 0,18 ga bo'g'iladi | cho'qqi 215 Hz, T−20dB 0,10 s, past/yuqori 0,46 |
| `qarsak` | 0,97 | 0,07 ga bo'g'iladi | cho'qqi 5012 Hz, T−20dB 0,17 s, past/yuqori 0,03 |

Chetga urilganda past rejimlar bo'g'iladi, chunki barmoqlar membranani bosib
turadi. Modelda yog'och gardishning zarb transienti va metall halqalarning
jarangi ham bor.

## Sozlash kalibratsiyasi (torli cholg'ular)

Allpass kasr kechikishi chastotaga bog'liq, shuning uchun uni formula bilan
aniq hisoblab bo'lmaydi — dastlabki urinishda xato ±28 sentgacha chiqdi.
`render.py` har bir nota uchun `delay_trim` ni **o'lchab** tanlaydi: chiqish
avtokorrelyatsiya bilan o'lchanadi va xato 1 sentdan kam bo'lguncha ikkilik
qidiruv yuradi.

Oxirgi renderda dutor va rubobning barcha 17 notasi **±0,5 sent** aniqlikda
chiqdi, clipping yo'q.

## Qayta render qilish

```bash
pip install numpy scipy
cd tools/instrument-models
python3 render.py dutor
python3 render.py rubob
python3 render.py doira

for inst in dutor rubob doira; do
  for f in wav/$inst/*.wav; do
    ffmpeg -y -i "$f" -codec:a libmp3lame -b:a 64k -ac 1 \
      "../../public/audio/${inst}-model/$(basename "$f" .wav).mp3"
  done
done
```

Skript har bir notaning sozlanishi va garmonikalar tarkibini (doirada esa
zarblarning so'nish vaqti va spektr muvozanatini) jadval ko'rinishida chop
etadi — natijani raqamlar bilan tekshirish mumkin.

## Cheklov

Bular **model**, haqiqiy yozuv emas. Agar erkin foydalanish mumkin bo'lgan
haqiqiy yozuvlar topilsa, ularni `public/audio/` ga qo'yib
`lib/audio/timbres.ts` ga bitta yozuv qo'shish kifoya.
