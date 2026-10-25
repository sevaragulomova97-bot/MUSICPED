# Yig'uvchi serverni sozlash

Odatda MusicPed **serversiz** ishlaydi: talaba natijalarini fayl
qilib saqlaydi va o'qituvchiga beradi. Bu usul bepul va hech qanday
ruxsat talab qilmaydi, lekin bitta zaif joyi bor — **talaba faylni
yubormasa, o'qituvchida hech narsa yo'q**.

Yig'uvchi server shu bo'g'inni avtomatlashtiradi:

```
talaba  ──«O'qituvchiga yuborish»──▶  server  ──«Serverdan yuklash»──▶  o'qituvchi
```

Qolgan hamma narsa o'zgarmaydi: darslar, topshiriqlar, cholg'ular,
hisob-kitob — hammasi brauzerda, oflayn ishlayveradi. Server faqat
**pochta qutisi**: tayyor paketni qabul qiladi va qaytarib beradi.

> **Sozlanmagan bo'lsa**, «O'qituvchiga yuborish» va «Serverdan
> yuklash» tugmalari umuman ko'rinmaydi va platforma hozirgidek, fayl
> orqali ishlaydi. Ya'ni bu bo'lim — ixtiyoriy qo'shimcha.

---

## Avval o'qing: shaxsiy ma'lumot

Serverga talabaning **ismi va natijalari** yuboriladi. Ikki narsani
hal qilib oling:

1. **Qonun.** O'zbekiston fuqarolarining shaxsiy ma'lumotlari
   O'zbekistondagi serverlarda qayta ishlanishi talab qilinadi.
   Supabase va Firebase serverlari chet elda. Dissertatsiya davlat
   universitetida himoya qilinsa, buni **ilmiy rahbar yoki universitet
   yuristi bilan** aniqlang.

   Oson yechim: talabalarning ismini emas, **kodini** ishlatish
   (`MT-24-01`, `MT-24-02`…). Ism-kod jadvali faqat sizda qoladi.
   Tajriba-sinov tahliliga ism emas, ball kerak — ya'ni hech narsa
   yo'qotilmaydi. Buning uchun talaba kirishda o'z ismi o'rniga kodni
   yozadi.

2. **Rozilik.** Tajriba qatnashchilaridan ma'lumotlari to'planishiga
   yozma rozilik olish — ilmiy ish uchun odatiy talab.

---

## Supabase bilan sozlash (bepul)

### 1. Loyiha yaratish

1. <https://supabase.com> da ro'yxatdan o'ting (GitHub hisobi bilan
   ham bo'ladi) va **New project** tugmasini bosing.
2. Nom va parol bering, mintaqani tanlang.
3. Loyiha tayyor bo'lgach **Project Settings → API** bo'limida ikkita
   narsa bor:
   - **Project URL** — masalan `https://abcdefgh.supabase.co`
   - **anon public** kaliti — uzun matn

### 2. Jadval va ruxsatlar

**SQL Editor** bo'limida quyidagini bajaring:

```sql
-- Yuborilgan natijalar
create table natijalar (
  talaba_id   text primary key,
  ism         text not null,
  guruh       text,
  yuborilgan  timestamptz not null default now(),
  paket       jsonb not null
);

-- Ruxsatlarni yoqamiz
alter table natijalar enable row level security;

-- Talaba faqat YOZA oladi (o'qiy olmaydi).
-- Shuning uchun ochiq kalit brauzerga tushsa ham, u bilan
-- boshqalarning ishini ko'rib bo'lmaydi.
create policy "yuborish" on natijalar
  for insert to anon with check (true);

create policy "qayta yuborish" on natijalar
  for update to anon using (true) with check (true);
```

**O'qish huquqi berilmaydi** — o'qituvchi `service_role` kaliti bilan
o'qiydi (quyida).

### 3. Saytni sozlash

GitHub omborida **Settings → Secrets and variables → Actions →
Variables** bo'limiga ikkita o'zgaruvchi qo'shing:

| Nom | Qiymat |
|---|---|
| `NEXT_PUBLIC_YIGUVCHI_URL` | `https://abcdefgh.supabase.co/rest/v1/natijalar` |
| `NEXT_PUBLIC_YIGUVCHI_KALIT` | **anon public** kaliti |

So'ng `.github/workflows/deploy.yml` dagi **Build** qadamiga shu
o'zgaruvchilarni uzating:

```yaml
      - name: Build
        env:
          NEXT_PUBLIC_BASE_PATH: ${{ steps.pages.outputs.base_path }}
          NEXT_PUBLIC_YIGUVCHI_URL: ${{ vars.NEXT_PUBLIC_YIGUVCHI_URL }}
          NEXT_PUBLIC_YIGUVCHI_KALIT: ${{ vars.NEXT_PUBLIC_YIGUVCHI_KALIT }}
        run: npm run build
```

Mahalliy ishlab chiqishda `.env` fayliga yoziladi (`.env.example` ga
qarang).

> **anon kaliti maxfiy emas.** U brauzerga tushadi va uni har kim
> ko'ra oladi — shuning uchun yuqoridagi RLS siyosati faqat yozishga
> ruxsat beradi. Maxfiy kalit kodga hech qachon yozilmaydi.

### 4. O'qituvchi kaliti

**Project Settings → API → service_role** kalitini nusxalang va uni
**faqat o'qituvchining brauzeriga** kiriting: O'qituvchi kabineti →
«Serverdan yuklash» → «O'qish kaliti» maydoni. Kalit shu brauzerda
qoladi, kodga ham, saytga ham tushmaydi.

> Bu kalit bilan barcha talabalarning ishini ko'rish mumkin —
> boshqalarga bermang va ommaviy kompyuterga kiritmang.

---

## Boshqa variantlar

| Variant | Qulayligi | E'tibor |
|---|---|---|
| **Firebase (Firestore)** | Bepul tarif saxiy, loyiha «uxlab qolmaydi» | Shu jadval tuzilmasini takrorlash kerak |
| **O'z serveringiz** | Ma'lumot O'zbekistonda qoladi | Oyiga ~5 dollar, sozlash va yangilab turish sizda |
| **Supabase** | Eng tez sozlanadi | Bepul loyiha 7 kun ishlatilmasa uxlaydi (bir bosish bilan uyg'onadi) |

Dastur **manzilni** sozlama orqali oladi, shuning uchun quyidagi
shartni bajaradigan istalgan server ishlaydi:

- `POST <manzil>` — tanasida `{ talaba_id, ism, guruh, yuborilgan, paket }`
  bo'lgan JSON qabul qiladi va 2xx qaytaradi;
- `GET <manzil>?select=*` — shu yozuvlar ro'yxatini JSON massiv
  sifatida qaytaradi;
- kalit `apikey` va `Authorization: Bearer …` sarlavhalarida keladi.

---

## Tekshirish

Tashqi xizmatsiz, mahalliy soxta server bilan:

```cmd
npm run test:e2e:yiguvchi
```

Bu buyruq saytni yig'uvchi manzili bilan quradi,
`tools/soxta-yiguvchi.mjs` ni ishga tushiradi va to'liq oqimni
sinaydi: talaba yuboradi → o'qituvchi yuklaydi → talaba kabinetda
ko'rinadi. Internet uzilgan holat ham tekshiriladi.

---

## Internet yo'q bo'lsa nima bo'ladi

Paket yo'qolmaydi: u brauzerda **navbatda** qoladi va keyingi
ochilishda o'zi jo'naydi. Talabaga shu haqda yoziladi. Besh marta
urinishdan keyin avtomatik urinish to'xtaydi — talaba tugmani o'zi
bosadi.

Fayl orqali topshirish ham joyida qoladi: yig'uvchi server ishlamay
qolsa, «Natijalarimni saqlash» tugmasi baribir ishlaydi.
