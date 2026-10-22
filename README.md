# MusicPed

**Bo'lajak musiqa o'qituvchilarini shaxsga yo'naltirilgan ta'lim texnologiyalari asosida kasbiy faoliyatga tayyorlash platformasi**

Pedagogika fanlari bo'yicha dissertatsiya (13.00.02 — Ta'lim va tarbiya nazariyasi va metodikasi, Qo'qon davlat universiteti) natijalarini amalda joriy etuvchi web platforma.

**Dissertatsiya muallifi:** Bobur Akbarov.

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
npm run test:e2e   :: Uchdan-uchiga testlar (Playwright, qurilgan sayt ustida)
```

`test:e2e` saytni avtomatik qurmaydi — avval `npm run build` ni bajaring.

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
| Nota yozuvi | VexFlow 5 (talab bo'yicha yuklanadi) |
| Grafiklar | Recharts 3 |
| PDF | pdf-lib + qrcode (brauzerda) |
| Jadval eksporti | CSV (BOM bilan, Excel to'g'ri ochadi) |
| Statistika | o'z kodimiz (SciPy bilan solishtirib tekshirilgan) |
| Oflayn | xizmat ishchisi (service worker) + web manifest |
| Bezak | qo'lda chizilgan SVG nota belgilari, CSS va Web Animations |
| Test | Vitest (207 unit), Playwright (13 e2e) |

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
  decor/                Nota belgilari va fondagi suzuvchi notalar
content/
  modules.ts            5 modul, 51 o'quv natijasi, ECTS kredit
  diagnostic.ts         96 ta diagnostika savoli — 8 yo'nalish x 12, A/B/C parallel shakllari
  demo-students.ts      24 namunaviy talaba (tajriba / nazorat)
  practice.ts           18 ta cholg'u mashqi + ritm baholash
  tunes.ts              19 ta mashhur kuy (har cholg'uda 3+), jamoat mulki
  instrument-range.ts   har bir cholg'uning chalinadigan tovushlari
  courses/              5 kurs, 52 ta to'liq dars (har bir modul o'z faylida)
  tasks.ts              52 ta topshiriq + 19 ta baholash rubrikasi
  mentorship.ts         Pedagogik amaliyotning 3 bosqichi + kuzatuv varaqasi
lib/
  audio/engine.ts       AudioContext, klaviatura, nota yozuvchi
  audio/instruments.ts  Namunali cholg'ular (Tone.Sampler) + sintez zaxirasi
  domain/instruments.ts Cholg'u lug'ati (audio dvigateldan mustaqil)
  domain/types.ts       Umumiy lug'at: Blum, ZPD, yo'nalishlar, profil turlari
  personalization.ts    IRY algoritmi (sof funksiya, testlangan)
  scoring.ts            Diagnostika baholash (sof funksiya, testlangan)
  stats.ts              t-mezon, chi-kvadrat, Koen d, Mann-Uitni
  research.ts           Tajriba-sinov tahlili (to'rt qadam)
  transfer.ts           Eksport/import formati va tekshiruvi
  teacher.ts            O'qituvchi kabineti mantig'i
  content-audit.ts      Konstruktiv moslashuv auditi
  audio/bank.ts         Namuna banki: metadata va tanlov qoidalari
  markdown.ts           Qo'llanmalar uchun kichik Markdown tahlilchisi
  notifications.ts      Bildirishnomalar (mavjud ma'lumotdan hisoblanadi)
  draft.ts              Yarim qolgan ish qoralamasi (umumiy)
  diagnostic-draft.ts   Diagnostika qoralamasi
  task-draft.ts         Topshiriq qoralamasi
  db/mavjudlik.ts       Brauzer saqlashga ruxsat beradimi
  audio/sampler.ts      Namunalarni chaluvchi dvigatel (Web Audio)
  db/schema.ts          Dexie sxemasi
  db/repo.ts            Ma'lumotga kirishning yagona yo'li
  navigation.ts         Rol bo'yicha menyu
  analytics.ts          Natijalar statistikasi (sof funksiya, testlangan)
  certificates.ts       Sertifikat qoidalari (oraliq va yakuniy)
  export/certificate.ts PDF sertifikat (pdf-lib, brauzerda)
  utils.ts              cn(), asset(), formatDate()
tests/
  unit/                 Vitest — sof funksiyalar va kontent yaxlitligi
  e2e/                  Playwright — qurilgan sayt ustidagi to'liq oqimlar
                        (12-qulaylik.spec.ts — WCAG 2.1 AA, axe-core)
docs/
  QARORLAR.md           Qabul qilingan texnik qarorlar
  QOLLANMA-TALABA.md    Talaba uchun qo'llanma
  QOLLANMA-OQITUVCHI.md O'qituvchi va tadqiqotchi uchun qo'llanma
```

---

## Ishlab chiqish bosqichlari

- [x] **B1** — Poydevor: statik eksport, dizayn tokenlari, layout, dark mode, Pages deploy
- [x] **B2** — Dexie, statik kontent, diagnostika (A/B/C shakllari, 3 x 32 savol), individual yo'nalish algoritmi
- [x] **B3** — 6 ta virtual cholg'u: pianino, gitara, dutor, rubob, nay, doira
      (namunali ovoz, yozib olish, mashq rejimi)
- [x] **Audio** — dutor, rubob va doira uchun namuna banki: har yarim tonda
      alohida namuna, uch ijro kuchi qatlami, doirada zarb variantlari.
      Standart tovush — qarindosh cholg'ularning haqiqiy yozuvi (CC0/MIT),
      ikkinchi tembr — o'z fizik modelimiz
- [x] **B4** — Darslar (VexFlow nota yozuvi), topshiriqlar va rubrikalar,
      natijalar grafiklari, portfolio hamda PDF sertifikat — har bir kurs
      uchun oraliq, barcha kurslar uchun yakuniy
- [x] **B5** — O'qituvchi kabineti, tadqiqot bo'limi (t-mezon, χ², Koen d,
      Mann-Uitni), admin paneli va kontent auditi, oflayn rejim (PWA),
      e2e testlar va qo'llanmalar
- [x] **Kontent** — barcha 51 o'quv natijasi dars va topshiriq bilan
      qoplandi; audit uzilishsiz

---

## Diagnostika: uchta parallel shakl

Bank 96 savoldan iborat: 8 yo'nalishning har birida 12 tadan. Ular uchta
teng shaklga bo'lingan — **A**, **B** va **C**, har bir yo'nalishda
4 tadan. Bitta o'lchov baribir 32 savoldan iborat, ya'ni talaba uchun
test uzunligi o'zgarmagan.

**Nima uchun ikki shakl.** Dissertatsiya tajribasi boshlang'ich va
yakuniy o'lchovni taqqoslaydi (juftlashgan t-mezon). Ikkala o'lchovda
aynan bir xil savollar berilsa, ikkinchi natija qisman savollarni eslab
qolish hisobiga ko'tariladi va o'sishni metodikaga bog'lab bo'lmaydi.

Shakl o'lchov **turiga** bog'langan:

| O'lchov | Shakl |
|---|---|
| Boshlang'ich | A |
| Oraliq nazorat | B |
| Yakuniy | C |

Birinchi o'lchov har doim boshlang'ich; keyingilarida talaba oraliq
nazorat bilan yakuniy diagnostika orasidan tanlaydi.

Qoida urinish raqamiga emas, turga bog'langani bejiz emas:
`lib/research.ts` tahlilga boshlang'ichni va oxirgi yakuniyni oladi,
yakuniy bo'lmasa esa **oraliqni yakuniy o'rnida** ishlatadi. Shuning uchun
yakuniy bo'lishi mumkin bo'lgan har qanday o'lchov boshlang'ichdan boshqa
shaklda bo'lishi shart. Shu bilan tahlil qilinadigan juftlik har doim
A ↔ B bo'ladi.

Uchala o'lchov bir-biridan mustaqil: talaba qaysi ketma-ketlikda
topshirmasin, bir savolni ikki marta ko'rmaydi.

Shakllar **mazmun va Blum darajasi** bo'yicha moslashtirilgan, empirik
qiyinlik bo'yicha emas — buning uchun pilot ma'lumot kerak bo'lardi va
buni hisobotda ko'rsatish lozim.

**Motivatsiya shkalasida teskari bandlar bor.** Likert bandlarining bir
qismida yuqori ball past motivatsiyani bildiradi («Mashq qilishni
ko'pincha oxirgi kunga qoldiraman»). Shu sababli hamma bandga «5» qo'yib
chiqqan varaqa 100% emas, o'rtacha natija beradi.

Shakllar muvozanati kodda tekshiriladi: biror yo'nalishda A va B dagi
savollar soni teng bo'lmasa, audit xato beradi va unit test yiqiladi.

---

## Ma'lumotni ko'chirish (serversiz "tarmoq")

Server yo'qligi uchun ma'lumot fayl orqali yuradi:

```
talaba  --  natijalar-….json  -->  o'qituvchi
o'qituvchi  --  baholar-….json  -->  talaba
```

Talaba **Sozlamalar -> Eksport qilish** bo'limida faylni saqlaydi va
o'qituvchiga beradi. O'qituvchi uni kabinetida qabul qiladi, rubrika bo'yicha
baho qo'yadi va `baholar-….json` ni qaytaradi; talaba uni import qilgach baho
va izoh natijalarida paydo bo'ladi. Fayl formati versiyalangan: eski fayl
o'qiladi, yangiroq versiyadagi fayl esa jim buzilmay, aniq xato beradi.

---

## O'quv dasturining qamrovi

| Modul | Kredit | Darslar | Topshiriqlar | O'quv natijalari |
|---|---|---|---|---|
| Musiqa nazariyasi | 5 | 10 | 9 | 9 / 9 qoplangan |
| Ijro amaliyoti | 7 | 11 | 11 | 11 / 11 qoplangan |
| Musiqa ta'limi metodikasi | 6 | 11 | 12 | 11 / 11 qoplangan |
| Musiqa texnologiyalari | 4 | 9 | 9 | 9 / 9 qoplangan |
| Pedagogik amaliyot | 10 | 11 | 11 | 11 / 11 qoplangan |

Har bir o'quv natijasi uchun uni **o'rgatadigan dars** ham, unga
erishilganini **tekshiradigan topshiriq** ham bor (J. Biggsning konstruktiv
moslashuvi). Bu shart kodda tekshiriladi: `lib/content-audit.ts` uzilishni
topsa, unit test yiqiladi va admin panelining «Kontent» sahifasi qaysi
natija ochiq qolganini ko'rsatadi.

---

## Tadqiqot bo'limi

O'qituvchi kabinetidagi **Tadqiqot** sahifasi dissertatsiyaning tajriba-sinov
qismi uchun to'rt qadamni bajaradi:

1. **Guruhlar bir xilligi** — tajriba boshida farq bo'lsa ogohlantiradi
2. **Guruhlararo farq** — Uelch t-mezoni, Koen d va Mann-Uitni U
3. **Guruh ichidagi o'sish** — juftlashgan t-mezon
4. **Daraja taqsimoti** — Pirson chi-kvadrat mezoni va Kramer V

Natija CSV va ko'p sahifali PDF hisobot sifatida eksport qilinadi.

Statistik funksiyalar platforma ichida yozilgan va **SciPy 1.18** bilan
solishtirib tekshirilgan — natijalar 12 xonadan ortiq aniqlikda mos keldi
(`tests/unit/stats.test.ts`).

---

## Hujjatlar

- [`docs/QOLLANMA-TALABA.md`](docs/QOLLANMA-TALABA.md) — talaba uchun qo'llanma
- [`docs/QOLLANMA-OQITUVCHI.md`](docs/QOLLANMA-OQITUVCHI.md) — o'qituvchi va tadqiqotchi uchun qo'llanma
- [`docs/QARORLAR.md`](docs/QARORLAR.md) — qabul qilingan 56 ta texnik qaror va ularning sabablari
- [`CREDITS.md`](CREDITS.md) — ishlatilgan erkin litsenziyali materiallar
