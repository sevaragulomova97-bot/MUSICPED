# O'qituvchi qo'llanmasi

Bu qo'llanma MusicPed platformasining o'qituvchi kabineti va tadqiqot bo'limi
bilan ishlashni tushuntiradi.

---

## Serversiz platforma nimani anglatadi

Platformada server yo'q: u GitHub Pages'da turadigan statik sayt va har bir
foydalanuvchining ma'lumoti **o'z brauzerida** saqlanadi.

Buning amaliy oqibati bitta: **talaba natijasi sizga o'z-o'zidan kelmaydi**.
Ma'lumot fayl orqali ko'chiriladi:

```
talaba  ──  natijalar-….json  ──▶  o'qituvchi
o'qituvchi  ──  baholar-….json  ──▶  talaba
```

Bu kamchilik emas, ongli tanlov: hech kimning serveriga ma'lumot
yuborilmaydi, obuna to'lanmaydi va fayl talabaning o'z qo'lida qoladi.

---

## 1. Talaba natijalarini qabul qilish

1. Talabalardan `natijalar-….json` fayllarini oling (pochta, Telegram, flesh).
2. **O'qituvchi kabineti** → **Fayl tanlash**.
3. Bir nechta faylni **birdan** tanlash mumkin.

Har bir fayl uchun alohida natija ko'rsatiladi. Bittasi buzuq bo'lsa,
qolganlari baribir qabul qilinadi va qaysi fayl nega o'tmagani yoziladi.

> **Sinab ko'rish.** «Namunaviy ma'lumot (24 talaba)» tugmasi o'ylab topilgan
> ma'lumotni yuklaydi — platformaning hamma bo'limini real fayllarsiz ko'rish
> uchun. Bunday talabalar hamma joyda «namuna» belgisi bilan ajratiladi va
> tadqiqot hisobotida ogohlantirish chiqadi.

---

## 2. Talabalar bo'limi

Ro'yxatda har bir talaba uchun: guruh, boshlang'ich → oxirgi natija,
yakunlangan darslar, o'rtacha ball va baho kutayotgan ishlar soni.

- Ism ustiga bosing — batafsil karta ochiladi: sakkiz yo'nalish bo'yicha
  radar grafik (boshlang'ich va oxirgi), topshirilgan ishlar va refleksiya
  javoblari.
- **Jadval** tugmasi grafikni raqamli ko'rinishga almashtiradi va yaqin
  rivojlanish zonasini ko'rsatadi.
- **CSV** tugmasi butun ro'yxatni Excel uchun saqlaydi.

---

## 3. Ishlarni baholash

**Baholash** bo'limi — navbat. Avval baho kutayotgan ishlar, eng eskisidan
boshlab (navbat adolatli bo'lsin).

Rubrikali topshiriqda har bir mezon uchun slayder bor; umumiy ball
mezonlardan **avtomatik** hisoblanadi — «ko'zga chamalab» ball qo'yilmaydi.
Izoh maydoniga yozganingizni talaba ko'radi.

Baho saqlangach ish navbatdan chiqadi va ro'yxat tepasida tasdiq ko'rinadi.

### Baholarni qaytarish

Sahifaning pastida **Baholarni talabalarga qaytarish** bo'limi bor:

1. Har bir talaba uchun **Yuklab olish** (yoki hammasini birdan).
2. `baholar-….json` faylini talabaga bering.
3. Talaba uni Sozlamalar → Import qilish orqali yuklaydi.

---

## 4. Mentorlik (pedagogik amaliyot)

Uch bosqich ketma-ket boradi: **kuzatuv** → **mikro-o'qitish** →
**mustaqil dars**. Ketma-ketlik yaqin rivojlanish zonasi mantiqiga mos: avval
ustoz bilan, keyin yordam bilan, oxirida mustaqil.

Har bosqichda:

- talaba nima qilishi kerakligi ro'yxati;
- 1–5 shkalali **kuzatuv varaqasi** (har bir baho ma'nosi yonida yozilgan);
- bosqich oxiridagi refleksiya savollari.

Varaqa saqlanadi va **CSV** sifatida eksport qilinadi. Bitta bosqich uchun
bitta varaqa bo'ladi — qayta saqlasangiz eskisi yangilanadi.

---

## 5. Tadqiqot bo'limi

Bu bo'lim dissertatsiyaning tajriba-sinov qismi uchun. Tahlil to'rt qadamda
boradi va **shu tartib muhim**.

### 1-qadam. Guruhlar boshida bir xilmi?

Birinchi tekshiruv ataylab shu: tajriba boshida guruhlar farq qilsa, yakuniy
farqni metodikaga bog'lab bo'lmaydi. Platforma buni t-mezon bilan tekshiradi
va farq topilsa **ogohlantiradi**.

### 2-qadam. Guruhlararo farq

Yakuniy natijalar solishtiriladi:

- **Uelch t-mezoni** (standart) — dispersiyalar tengligini talab qilmaydi;
- **Koen d** — farqning amaliy kattaligi (0,2 kichik · 0,5 o'rta · 0,8 katta);
- **Mann–Uitni U** — parametrik bo'lmagan tekshiruv.

Nega uchtasi? `p` qiymati tanlanma hajmiga bog'liq: katta guruhda mazmunsiz
farq ham «ahamiyatli» chiqadi, shuning uchun effekt kattaligi kerak.
12 kishilik guruhda esa taqsimotning normalligini ishonchli tekshirib
bo'lmaydi — Mann–Uitni shu sababli yonida turadi. Ikki mezon bir xil xulosa
bersa, natija taqsimot shakliga bog'liq emas.

### 3-qadam. Guruh ichidagi o'sish

Bir xil talabalarning «oldin» va «keyin» natijasi — **juftlashgan** t-mezon
bilan (kuzatuvlar mustaqil emas).

### 4-qadam. Daraja taqsimoti

Past (<56) · o'rta (56–70) · yuqori (≥71) darajalar bo'yicha **χ² mezoni** va
**Kramer V**. Kutilgan chastota 5 dan kichik bo'lsa, platforma buni yashirmay
ogohlantiradi — mezonning sharti buzilgan bo'ladi.

### Eksport

- **CSV** — barcha jadvallar Excel uchun.
- **PDF hisobot** — to'rt qadam, jadvallar, ogohlantirishlar va hisoblash
  metodikasi tavsifi bilan ko'p sahifali hujjat.

### Kim tahlilga kiradi

Faqat **boshlang'ich va yakuniy diagnostikasi ham bor** hamda tajriba/nazorat
guruhi ko'rsatilgan talabalar. Chetda qolganlar soni va sababi sahifada
yoziladi — jim tashlab ketilmaydi.

> **Statistika isbot bermaydi.** `p < 0,05` — «farq bor» degani emas,
> «kuzatilgan farqni tasodif bilan tushuntirish qiyin» degani. Hisobotdagi
> til ataylab ehtiyotkor.

---

## 6. Tajriba-sinovni to'g'ri tashkil qilish

1. **Guruhlarni oldindan belgilang.** Har bir talaba Profil sahifasida
   «tajriba» yoki «nazorat» ni tanlaydi — buni siz aytasiz.
2. **Boshlang'ich diagnostikani ikkala guruh ham bir vaqtda o'tsin.**
3. Tajriba davomida oraliq diagnostika o'tkazish mumkin.
4. **Yakuniy diagnostika** majburiy: usiz o'sish hisoblanmaydi.
5. Har bir bosqichdan keyin talabalardan eksport faylini yig'ing.

Minimal guruh hajmi — 5 kishi; undan kam bo'lsa platforma ogohlantiradi.
Dissertatsiya uchun odatda guruhda 12–15 kishi bo'ladi.

---

## 7. Ma'lumot xavfsizligi

- Qabul qilingan fayllar **faqat sizning brauzeringizda** saqlanadi.
- Brauzer ma'lumotini tozalasangiz, ular ham o'chadi — muhim bo'lsa asl
  fayllarni alohida papkada saqlang.
- Platformada haqiqiy autentifikatsiya yo'q. Talabalarning shaxsiy
  ma'lumotini (tug'ilgan sana, manzil, telefon) kiritmaslikni so'rang.

---

## 8. Tez-tez beriladigan savollar

**Talabaning faylini import qildim, lekin tadqiqotda ko'rinmayapti.**
Tahlilga faqat boshlang'ich **va** yakuniy diagnostikasi bor talabalar kiradi,
va tajriba guruhi ko'rsatilgan bo'lishi kerak. Tadqiqot sahifasi kim
kirmagani va nega kirmaganini yozadi.

**Bir talabaning faylini ikki marta import qilsam-chi?**
Eskisi yangisi bilan almashtiriladi, nusxa paydo bo'lmaydi.

**Baho qo'ydim, lekin talaba ko'rmayapti.**
Baho sizning nusxangizga yoziladi. Talaba uni ko'rishi uchun
`baholar-….json` faylini yuklab olib, unga berishingiz kerak.

**Statistik hisoblar ishonchlimi?**
Barcha mezonlar platforma ichida hisoblanadi va mustaqil statistik paket
(SciPy 1.18) bilan solishtirib tekshirilgan — natijalar 12 xonadan ortiq
aniqlikda mos keldi. Tekshiruv testlari `tests/unit/stats.test.ts` faylida.
