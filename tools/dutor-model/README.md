# Dutor fizik modeli

`public/audio/dutor-model/` dagi namunalar shu skriptlar bilan hosil qilingan.
Ular gitara yoki boshqa cholg'u yozuvi **emas** — dutorning o'zi
modellashtirilgan.

## Nega model

FluidR3_GM va npm ekotizimida erkin litsenziyali **haqiqiy dutor yozuvi
topilmadi**. Gitara namunasini filtr bilan dutorga o'xshatishga urinish
yetarli natija bermadi. Shuning uchun dutor akustik xususiyatlari bo'yicha
noldan modellashtirildi.

## Model nimadan iborat

Raqamli to'lqin yo'li (digital waveguide) usuli:

| Qism | Nimani modellaydi |
|---|---|
| Uchburchak turtki | Barmoq tortgan torning boshlang'ich shakli; chertish nuqtasi `PLUCK_POS = 0.22` |
| Kechikish chizig'i + allpass | Tor uzunligi va aniq sozlash |
| Halqadagi past o'tkazgich | Yuqori garmonikalar tezroq so'nadi (ipak tor) |
| Ikkinchi to'lqin yo'li | Kvarta pastdagi simpatik tor — dutorning "jarangi" |
| Rezonans filtrlari | Kichik tut yog'ochli korpus: 250 Hz havo rezonansi, 430 Hz qopqoq, 1,2 kHz "dimog'i" formanti |
| 130 Hz yuqori o'tkazgich | Kichik korpus — gitaraday past chastotalar yo'q |

Damping tovush balandligiga qarab o'zgaradi: sekundiga aylanalar soni `f0` ga
teng bo'lgani uchun bir xil damping baland notalarni sinusga aylantirib
qo'yardi.

## Sozlash kalibratsiyasi

Allpass kechikishi chastotaga bog'liq, shuning uchun uni formula bilan aniq
hisoblab bo'lmaydi. `render.py` har bir nota uchun `delay_trim` ni **o'lchab**
tanlaydi: chiqish avtokorrelyatsiya bilan o'lchanadi va xato 1 sentdan kam
bo'lguncha ikkilik qidiruv yuradi.

Oxirgi renderda barcha 17 nota **±0,5 sent** aniqlikda chiqdi, clipping yo'q.

## Qayta render qilish

```bash
pip install numpy scipy
cd tools/dutor-model
python3 render.py wav
for f in wav/*.wav; do
  ffmpeg -y -i "$f" -codec:a libmp3lame -b:a 64k -ac 1 "../../public/audio/dutor-model/$(basename "$f" .wav).mp3"
done
```

Skript har bir notaning sozlanishini va garmonikalar tarkibini jadval
ko'rinishida chop etadi — natijani ko'z bilan tekshirish mumkin.

## Cheklov

Bu **model**, haqiqiy dutor yozuvi emas. Agar erkin foydalanish mumkin bo'lgan
haqiqiy yozuvlar topilsa, ularni `public/audio/` ga qo'yib
`lib/audio/timbres.ts` ga bitta yozuv qo'shish kifoya.
