# Qabul qilingan qarorlar

Bu yerda loyiha davomida qabul qilingan texnik qarorlar va ularning sabablari yoziladi. Har bir qaror qaysi bosqichda qabul qilingani ko'rsatilgan.

---

## B1 — Poydevor

### Q1. Server umuman ishlatilmaydi

**Qaror.** Platforma `output: "export"` bilan sof statik sayt sifatida quriladi va GitHub Pages'da turadi.

**Sabab.** Talab: hech qanday obunasiz, GitHub havolasi orqali ishlashi kerak. Server, boshqariladigan baza yoki hosting — barchasi pullik yoki hech bo'lmasa ro'yxatdan o'tishni talab qiladi. Statik sayt esa ochiq omborlar uchun butunlay bepul.

**Oqibati.** PostgreSQL, Prisma, Auth.js va Next.js server imkoniyatlari (API routes, server actions, middleware) ishlatilmaydi.

### Q2. Ma'lumot brauzerda saqlanadi

**Qaror.** Foydalanuvchi ma'lumoti IndexedDB'da (Dexie orqali, B2 da), sessiya esa `localStorage` da saqlanadi. Ma'lumotga kirish `lib/db/` ichidagi alohida qatlam orqali amalga oshiriladi.

**Sabab.** Serversiz muhitda boshqa saqlash joyi yo'q. Alohida qatlam — kelajakda haqiqiy ko'p foydalanuvchili rejimga o'tish kerak bo'lsa, faqat shu qatlamni almashtirish yetarli bo'lsin uchun.

**Oqibati.** Ma'lumot bir brauzerda qoladi; ko'chirish uchun JSON eksport/import ishlatiladi.

### Q3. Autentifikatsiya — profil tanlash

**Qaror.** Kirish sahifasida rol tanlanadi; parol tekshiruvi yo'q.

**Sabab.** Serversiz muhitda parolni ishonchli tekshirib bo'lmaydi — brauzerdagi har qanday tekshiruvni chetlab o'tish mumkin. Soxta xavfsizlik ko'rsatgandan ko'ra, uning yo'qligini ochiq aytish to'g'riroq.

**Oqibati.** Kirish sahifasida va README'da ogohlantirish beriladi: platformaga haqiqiy shaxsiy ma'lumot kiritilmasligi kerak.

### Q4. `basePath` CI tomonidan aniqlanadi

**Qaror.** `NEXT_PUBLIC_BASE_PATH` muhit o'zgaruvchisi `actions/configure-pages` ning `base_path` chiqishidan olinadi.

**Sabab.** GitHub Pages loyihani `/<ombor-nomi>/` ostida joylaydi. Qiymat qo'lda yozilsa, ombor nomi o'zgarganda (masalan `MUSICPED` → `MusicPed`) sayt butunlay buziladi. Avtomatik aniqlash bu xatoni umuman yo'q qiladi va lokal `npm run dev` ham `/` da ishlayveradi.

### Q5. Marshrutlar — SPA emas, har biri alohida HTML

**Qaror.** `trailingSlash: true` bilan statik eksport: har bir sahifa `out/<yo'l>/index.html` ko'rinishida chiqadi.

**Sabab.** GitHub Pages SPA uchun server tomonda qayta yo'naltirish qila olmaydi — odatda `404.html` hiylasi ishlatiladi, u esa noto'g'ri HTTP status qaytaradi va SEO'ni buzadi. Har bir marshrut alohida fayl bo'lsa, chuqur havolalar (`/kurslar/musiqa-nazariyasi/`) to'g'ridan-to'g'ri ochiladi.

### Q6. Prisma `enum` emas, `String` + union

**Qaror.** (B2 ga tegishli, lekin hozir qayd etiladi) Ma'lumot turlari TypeScript `union` tiplari sifatida belgilanadi.

**Sabab.** Ma'lumot bazasi almashtirilishi mumkin bo'lgan qatlam; turlar bazadan emas, koddan kelib chiqishi kerak.

### Q7. UI komponentlari qo'lda yoziladi

**Qaror.** `shadcn/ui` CLI ishlatilmaydi; kerakli primitivlar (`Button`, `Card`, `Badge`, `Progress`, `ProgressRing`) shu uslubda qo'lda yoziladi.

**Sabab.** Tailwind v4 + Next 16 + React 19 birikmasi yangi; CLI generatsiyasi ko'pincha eskirgan konfiguratsiya yozadi. Kerakli komponentlar soni kam, qo'lda yozish to'liq nazorat beradi va ortiqcha bog'liqlik qo'shmaydi.

### Q8. Ranglar validator bilan tekshirilgan

**Qaror.** 4 ta yo'nalish rangi (grafiklarda ham ishlatiladi) rang ko'rlik va kontrast bo'yicha tekshirilgan:

| Rejim | Nazariya | Ijro | Metodika | Kasbiy |
|---|---|---|---|---|
| Yorug' | `#3b5bdb` | `#14b8a6` | `#7c5cff` | `#f59e0b` |
| Qorong'i | `#6682ea` | `#00a190` | `#8c74e9` | `#b08300` |

**Sabab.** Qorong'i rejim ranglari yorug' rejimdan avtomatik "aylantirilmaydi" — ular alohida tanlanadi. Dastlabki variant (`#2dd4bf`, `#fbbf24`) qorong'i fonda juda yorqin chiqib, OKLCH yorqinlik oralig'idan chiqib ketdi va tekshiruvdan o'tmadi.

**Natija.** Ikkala rejimda ham: yorqinlik oralig'i, rang to'yinganligi minimumi, protan/deutan/tritan ajratilishi va fonga nisbatan kontrast — hammasi o'tdi. Yorug' rejimda ikki rang fonga nisbatan 3:1 dan past kontrast beradi, shuning uchun grafiklarda **doim yorliq va jadval ko'rinishi** bo'lishi shart (faqat rangga tayanib bo'lmaydi).

### Q9. Ikonkalar kod bilan generatsiya qilinadi

**Qaror.** Ilova ikonkalari (`public/icon-*.png`) Pillow bilan chizilgan, SVG manbasi `public/icon.svg` da saqlanadi.

**Sabab.** Tashqi rasm ishlatilmasligi kerak (mualliflik huquqi cheklovi). Konteynerda SVG→PNG konvertori (`rsvg-convert`) yo'q edi, shuning uchun geometriya to'g'ridan-to'g'ri chizildi.

### Q10. Dev bog'liqliklaridagi zaifliklar

**Qaror.** `npm audit --omit=dev` doim **0 ta zaiflik** bo'lishi talab qilinadi. To'liq `npm audit` dagi qolgan ogohlantirishlar qabul qilinadi.

**Sabab.** Qolgan 5 ta ogohlantirish `eslint-config-next` → `fast-glob`/`micromatch`/`braces` zanjirida. Ularning yagona "tuzatishi" — Next.js 14 ga tushish. Bu lint vositasining bog'liqligi; brauzerga yuboriladigan kodga umuman kirmaydi.

**Yon ta'sir.** `vitest@5` uchun `@types/node` `^20` dan `^22` ga ko'tarildi (vitest 5 ning peer talabi), shu bilan 2 ta kritik zaiflik yo'q qilindi.
