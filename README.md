# MusicPed

**Bo'lajak musiqa o'qituvchilarini shaxsga yo'naltirilgan ta'lim texnologiyalari asosida kasbiy faoliyatga tayyorlash platformasi**

Pedagogika fanlari bo'yicha dissertatsiya (13.00.02 — Ta'lim va tarbiya nazariyasi va metodikasi, Qo'qon davlat universiteti) natijalarini amalda joriy etuvchi web platforma.

---

## Eng muhimi: bu platforma serversiz ishlaydi

MusicPed — **to'liq statik sayt**. Hech qanday server, ma'lumotlar bazasi serveri, obuna yoki to'lov talab qilmaydi. GitHub Pages'da bepul turadi va havola orqali ochiladi.

Buning ikkita amaliy oqibati bor:

| ✅ Nimasi yaxshi | ⚠️ Nimani bilib qo'yish kerak |
|---|---|
| Havolani ochgan har kim darhol foydalanadi | Ma'lumot **faqat o'sha brauzerda** saqlanadi |
| Internetsiz ham ishlaydi (birinchi ochishdan keyin) | Boshqa kompyuterda ochsa — bo'sh boshlaydi |
| Hech kimning serveriga ma'lumot yuborilmaydi | **Haqiqiy parol himoyasi yo'q** — shaxsiy ma'lumot kiritmang |
| Hech qachon pul to'lanmaydi | O'qituvchi natijalarni **fayl orqali** yig'adi, avtomatik emas |

Ma'lumotni ko'chirish uchun **eksport / import** mexanizmi ishlatiladi: talaba natijalarini JSON fayl sifatida saqlaydi, o'qituvchi esa bir nechta shunday faylni yuklab, guruh bo'yicha statistik tahlil oladi.

---

## Ishga tushirish (Windows CMD)

```cmd
git clone https://github.com/sevaragulomova97-bot/MUSICPED musicped
cd musicped
npm install
npm run dev
```

Brauzerda `http://localhost:3000` manzilini oching.

### Boshqa buyruqlar

```cmd
npm run build      :: Statik saytni `out\` papkasiga quradi
npm run lint       :: ESLint tekshiruvi
npm run typecheck  :: TypeScript tekshiruvi
npm test           :: Unit testlar (Vitest)
```

Build natijasini lokal ko'rish uchun:

```cmd
npm run build
npx serve out
```

---

## GitHub Pages'ga joylash

Omborga push qilinganda `.github/workflows/deploy.yml` avtomatik ishga tushadi va saytni Pages'ga joylaydi.

**Bir martalik sozlash** — omborda:

> **Settings → Pages → Build and deployment → Source: `GitHub Actions`**

Shundan keyin sayt quyidagi manzilda ochiladi:

```
https://<foydalanuvchi>.github.io/<ombor-nomi>/
```

Manzildagi `/<ombor-nomi>/` qismi `actions/configure-pages` tomonidan avtomatik aniqlanadi va `NEXT_PUBLIC_BASE_PATH` orqali Next.js'ga uzatiladi — ombor nomi o'zgarsa ham hech narsani qo'lda tuzatish shart emas.

### Boshqa omborga ko'chirish

```cmd
git remote add target https://github.com/<foydalanuvchi>/<ombor>
git push -u target claude/musicped-account-storage-dcg5ox:main
```

Yangi omborda ham yuqoridagi **Settings → Pages** sozlamasi takrorlanadi.

---

## Texnologiyalar

| Qatlam | Tanlov |
|---|---|
| Framework | Next.js 16 (App Router, `output: "export"`) |
| Til | TypeScript (strict) |
| UI | React 19, Tailwind CSS v4, qo'lda yozilgan shadcn uslubidagi komponentlar |
| Ikonkalar | lucide-react |
| Mavzu (dark mode) | next-themes |
| Ma'lumot | IndexedDB (Dexie 4) |
| Audio | Tone.js 15 + FluidR3_GM namunalari (MIT) + dutor, rubob va doiraning o'z fizik modellari |
| Nota yozuvi | VexFlow — *B4* |
| Grafiklar | Recharts — *B4* |
| PDF / Excel | pdf-lib, write-excel-file — *B4–B5* |
| Test | Vitest (unit), Playwright (e2e) |

---

## Loyiha tuzilmasi

```
app/
  page.tsx              Landing sahifa
  kirish/               Profil tanlash
  (app)/                Ilova qobig'i ichidagi sahifalar
    bosh-sahifa/  kurslar/  asboblar/  topshiriqlar/
    natijalar/    portfolio/  profil/
    oqituvchi/    admin/
components/
  ui/                   Button, Card, Badge, Progress, ProgressRing, ChoiceCard
  layout/               Sidebar, Header, MobileNav, AppShell, Logo
content/
  modules.ts            5 modul, ECTS kredit, o'quv natijalari
  diagnostic.ts         32 ta diagnostika savoli (8 yo'nalish)
  demo-students.ts      24 namunaviy talaba (tajriba / nazorat)
  practice.ts           18 ta cholg'u mashqi + ritm baholash
lib/
  audio/engine.ts       AudioContext, klaviatura, nota yozuvchi
  audio/instruments.ts  Namunali cholg'ular (Tone.Sampler) + sintez zaxirasi
  domain/instruments.ts Cholg'u lug'ati (audio dvigateldan mustaqil)
  domain/types.ts       Umumiy lug'at: Blum, ZPD, yo'nalishlar, profil turlari
  personalization.ts    IRY algoritmi (sof funksiya, testlangan)
  scoring.ts            Diagnostika baholash (sof funksiya, testlangan)
  db/schema.ts          Dexie sxemasi
  db/repo.ts            Ma'lumotga kirishning yagona yo'li
  navigation.ts         Rol bo'yicha menyu
  utils.ts              cn(), asset(), formatDate()
docs/
  QARORLAR.md           Qabul qilingan texnik qarorlar
```

---

## Ishlab chiqish bosqichlari

- [x] **B1** — Poydevor: statik eksport, dizayn tokenlari, layout, dark mode, Pages deploy
- [x] **B2** — Dexie, statik kontent, diagnostika (32 savol), individual yo'nalish algoritmi
- [x] **B3** — 6 ta virtual cholg'u: pianino, gitara, dutor, rubob, nay, doira
      (haqiqiy namunali ovoz, yozib olish, mashq rejimi)
- [ ] **B4** — Darslar, topshiriqlar, natijalar, portfolio, sertifikatlar
- [ ] **B5** — O'qituvchi kabineti, tadqiqot bo'limi (t-mezon, χ²), PWA, testlar

---

## Hujjatlar

- [`docs/QARORLAR.md`](docs/QARORLAR.md) — qabul qilingan texnik qarorlar va ularning sabablari
- [`CREDITS.md`](CREDITS.md) — ishlatilgan erkin litsenziyali materiallar
