"use client";

/**
 * Modul yakunlanganda beriladigan sertifikat (PDF).
 *
 * To'liq brauzerda yaratiladi — serverga ehtiyoj yo'q. QR-kod sertifikat
 * ma'lumotini **o'z ichida** olib yuradi (serverga murojaat qilmaydi),
 * shuning uchun u haqiqiylikni kriptografik tasdiqlamaydi; u faqat
 * sertifikat mazmunini tez o'qish uchun.
 *
 * Dizayn chizmasi (A4 landshaft, 842 x 595):
 *
 *   ┌───────────────────────────────────────────┐  tashqi ramka
 *   │ ┌───────────────────────────────────────┐ │  ichki oltin chiziq
 *   │ │      MusicPed  (harflar ajratilgan)   │ │
 *   │ │      ──────◆──────                    │ │
 *   │ │        ORALIQ SERTIFIKAT              │ │
 *   │ │      izoh satri                       │ │
 *   │ │        Talabaning ismi                │ │
 *   │ │      ─────────────────                │ │
 *   │ │        kurs / kurslar ro'yxati        │ │
 *   │ │  imzo        muhr        QR           │ │
 *   │ └───────────────────────────────────────┘ │
 *   └───────────────────────────────────────────┘
 */

import { toWinAnsi } from "@/lib/export/winansi";
import { formatDateLong } from "@/lib/utils";

/**
 * Ikki xil sertifikat.
 *
 *  • **oraliq** — bitta o'quv kursi yakunlanganda;
 *  • **yakuniy** — barcha kurslar yakunlanganda.
 *
 * Ajratilgan tip qo'llanadi: yakuniy sertifikatda bitta modul nomi emas,
 * butun ro'yxat bo'ladi, shuning uchun ularni bitta ixtiyoriy maydonli
 * obyektga siqish chaqiruv joyida xatoga olib kelardi.
 */
export type CertificateData =
  | {
      kind: "oraliq";
      fullName: string;
      moduleTitle: string;
      credits: number;
      score: number;
      issuedAt: Date;
      serial: string;
    }
  | {
      kind: "yakuniy";
      fullName: string;
      modules: Array<{ title: string; credits: number }>;
      totalCredits: number;
      score: number;
      issuedAt: Date;
      serial: string;
    };

/**
 * Matn berilgan enga sig'adigan eng katta kegl.
 *
 * Ism kegli qat'iy 30 edi. 45 belgilik ism (masalan «Abdurahmonov
 * Muhammadaminjon Abdurashidovich») ramkaning ichki chekkasiga tegib
 * ketardi, undan uzunrog'i esa ramkadan chiqib ketardi — hujjat
 * buzilgan ko'rinardi. Endi kegl matn sig'guncha kichrayadi.
 *
 * `olcha` — berilgan keglda matn enini qaytaruvchi funksiya; shu sabab
 * bu yerda PDF kutubxonasi kerak emas va qoida brauzersiz sinaladi.
 */
export function sigdirilganKegl(
  olcha: (kegl: number) => number,
  maxEn: number,
  boshlangich = 30,
  engKichik = 15,
) {
  let kegl = boshlangich;
  while (kegl > engKichik && olcha(kegl) > maxEn) kegl -= 0.5;
  return Math.max(engKichik, kegl);
}

/**
 * Hujjat maqomi haqidagi ogohlantirish — sertifikatning pastida.
 *
 * Alohida konstanta, chunki uni birlik testi qo'riqlaydi: matn
 * sertifikatdan jim yo'qolib qolmasligi kerak.
 */
export const MAQOM_IZOHI =
  "MusicPed platformasining o'quv dasturi bo'yicha berildi. " +
  "Kredit soni dastur hajmini bildiradi; bu davlat namunasidagi hujjat emas.";

/** Sertifikat raqami — ism va modul asosida barqaror hosil qilinadi. */
export function certificateSerial(
  fullName: string,
  moduleId: string,
  issuedAt: Date,
) {
  const base = `${fullName}|${moduleId}|${issuedAt.toISOString().slice(0, 10)}`;
  let hash = 0;
  for (let i = 0; i < base.length; i += 1) {
    hash = (hash * 31 + base.charCodeAt(i)) >>> 0;
  }
  return `MP-${hash.toString(36).toUpperCase().padStart(7, "0").slice(0, 7)}`;
}

export async function buildCertificatePdf(
  data: CertificateData,
): Promise<Blob> {
  const [{ PDFDocument, StandardFonts, rgb }, QRCode] = await Promise.all([
    import("pdf-lib"),
    import("qrcode"),
  ]);

  const pdf = await PDFDocument.create();
  const page = pdf.addPage([842, 595]); // A4 landshaft
  const { width, height } = page.getSize();

  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);

  const siyoh = rgb(0.055, 0.078, 0.149); // deyarli qora ko'k
  const asosiy = rgb(0.192, 0.282, 0.737); // indigo
  const oltin = rgb(0.706, 0.573, 0.286);
  const kulrang = rgb(0.42, 0.47, 0.55);
  const qogoz = rgb(0.996, 0.992, 0.98);

  const yakuniy = data.kind === "yakuniy";

  /* ── Yordamchilar ── */

  /**
   * Harflari ajratilgan matn.
   *
   * `pdf-lib` da harflar orasidagi masofani sozlash yo'q, shuning uchun
   * har bir harf alohida chiziladi. Sarlavhalarda bu muhim: ajratilgan
   * harflar hujjatga rasmiy ko'rinish beradi va uni oddiy hisobotdan
   * ajratib turadi.
   */
  const spacedWidth = (
    text: string,
    size: number,
    font: typeof bold,
    gap: number,
  ) => {
    const safe = toWinAnsi(text);
    let w = 0;
    for (const ch of safe) w += font.widthOfTextAtSize(ch, size) + gap;
    return w - gap;
  };

  const spacedCenter = (
    text: string,
    y: number,
    size: number,
    font: typeof bold,
    color = siyoh,
    gap = 2,
  ) => {
    const safe = toWinAnsi(text);
    let x = (width - spacedWidth(text, size, font, gap)) / 2;
    for (const ch of safe) {
      page.drawText(ch, { x, y, size, font, color });
      x += font.widthOfTextAtSize(ch, size) + gap;
    }
  };

  const center = (
    text: string,
    y: number,
    size: number,
    font = regular,
    color = siyoh,
  ) => {
    const safe = toWinAnsi(text);
    const w = font.widthOfTextAtSize(safe, size);
    page.drawText(safe, { x: (width - w) / 2, y, size, font, color });
    return w;
  };

  const chiziq = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color = oltin,
    t = 0.6,
  ) =>
    page.drawLine({
      start: { x: x1, y: y1 },
      end: { x: x2, y: y2 },
      thickness: t,
      color,
    });

  /** Romb — chiziqlar orasidagi bezak. */
  const romb = (cx: number, cy: number, r: number, color = oltin) => {
    page.drawLine({
      start: { x: cx - r, y: cy },
      end: { x: cx, y: cy + r },
      thickness: 1.1,
      color,
    });
    page.drawLine({
      start: { x: cx, y: cy + r },
      end: { x: cx + r, y: cy },
      thickness: 1.1,
      color,
    });
    page.drawLine({
      start: { x: cx + r, y: cy },
      end: { x: cx, y: cy - r },
      thickness: 1.1,
      color,
    });
    page.drawLine({
      start: { x: cx, y: cy - r },
      end: { x: cx - r, y: cy },
      thickness: 1.1,
      color,
    });
  };

  /* ── Fon va ramkalar ── */

  page.drawRectangle({ x: 0, y: 0, width, height, color: qogoz });

  // Tashqi ramka — qalin, asosiy rang.
  page.drawRectangle({
    x: 20,
    y: 20,
    width: width - 40,
    height: height - 40,
    borderColor: asosiy,
    borderWidth: 2.4,
  });
  // Ichki ingichka oltin chiziq — ikkisi orasidagi bo'shliq hujjatga
  // «chop etilgan» ko'rinish beradi.
  page.drawRectangle({
    x: 29,
    y: 29,
    width: width - 58,
    height: height - 58,
    borderColor: oltin,
    borderWidth: 0.7,
  });
  // Yakuniy sertifikat uchinchi ramka bilan ajratiladi — qog'ozda
  // ikkalasi yonma-yon turganda qaysi biri nima ekani birinchi
  // qarashda ko'rinishi kerak.
  if (yakuniy) {
    page.drawRectangle({
      x: 35,
      y: 35,
      width: width - 70,
      height: height - 70,
      borderColor: asosiy,
      borderWidth: 0.7,
    });
  }

  // Burchak bezaklari: ikki qisqa chiziq va romb.
  const burchak = (cx: number, cy: number, sx: number, sy: number) => {
    chiziq(cx, cy, cx + 34 * sx, cy, oltin, 1.2);
    chiziq(cx, cy, cx, cy + 34 * sy, oltin, 1.2);
    romb(cx + 9 * sx, cy + 9 * sy, 3.4);
  };
  const ichki = yakuniy ? 44 : 38;
  burchak(ichki, ichki, 1, 1);
  burchak(width - ichki, ichki, -1, 1);
  burchak(ichki, height - ichki, 1, -1);
  burchak(width - ichki, height - ichki, -1, -1);

  /* ── Sarlavha ── */

  spacedCenter("MUSICPED", height - 82, 13, bold, asosiy, 4.5);

  // Nozik ajratgich: ikki chiziq va o'rtada romb.
  const ajr = height - 100;
  chiziq(width / 2 - 150, ajr, width / 2 - 14, ajr);
  chiziq(width / 2 + 14, ajr, width / 2 + 150, ajr);
  romb(width / 2, ajr, 5);

  spacedCenter(
    yakuniy ? "YAKUNIY SERTIFIKAT" : "ORALIQ SERTIFIKAT",
    height - 150,
    29,
    bold,
    siyoh,
    3.5,
  );

  center(
    yakuniy
      ? "Quyidagi talaba dasturning barcha o'quv kurslarini muvaffaqiyatli yakunladi"
      : "Quyidagi talaba o'quv kursini muvaffaqiyatli yakunladi",
    height - 178,
    10.5,
    italic,
    kulrang,
  );

  /* ── Ism ── */

  const ismO = height - 238;
  // Ramkaning ichki chekkasigacha bo'lgan en — ikki tomondan nafas
  // joyi qoldirilgan.
  const ismKegl = sigdirilganKegl(
    (kegl) => bold.widthOfTextAtSize(toWinAnsi(data.fullName), kegl),
    width - 192,
  );
  const ismW = center(data.fullName, ismO, ismKegl, bold, siyoh);
  // Ism ostidagi chiziq matndan biroz keng — ism hujjatning markazi.
  const yarim = Math.min(width / 2 - 90, ismW / 2 + 34);
  chiziq(width / 2 - yarim, ismO - 12, width / 2 + yarim, ismO - 12, oltin, 1);

  /* ── Kurs ma'lumoti ── */

  // Bezak chizig'i oxirgi matn satridan pastda turishi kerak — yakuniy
  // sertifikatda kurslar ro'yxati uzun bo'lsa, u pastga suriladi.
  let oxirgiSatr = height - 316;

  if (data.kind === "oraliq") {
    center(data.moduleTitle, height - 292, 17, bold, asosiy);
    center(
      `${data.credits} ECTS kredit   ·   Natija: ${data.score}%`,
      height - 316,
      11.5,
      regular,
      kulrang,
    );
  } else {
    center(
      `${data.modules.length} ta kurs   ·   ${data.totalCredits} ECTS kredit   ·   Natija: ${data.score}%`,
      height - 272,
      11.5,
      regular,
      kulrang,
    );
    // Kurslar ro'yxati: hujjat qaysi kurslarni qamraganini ko'rsatadi.
    //
    // Qatorlar **chapdan tekislanadi**, har biri alohida markazlashmaydi:
    // markazlashgan ro'yxatda kurs nomlari tishli chiqib, hujjat
    // tartibsiz ko'rinardi.
    const satrlar = data.modules.map((m) => `${m.title}  —  ${m.credits} ECTS`);
    const eng = Math.max(
      ...satrlar.map((t) => regular.widthOfTextAtSize(toWinAnsi(t), 11.5)),
    );
    const x0 = (width - eng) / 2;
    let y = height - 302;
    for (const matn of satrlar) {
      // Har bir qator oldidagi kichik romb — ro'yxatni tartibga soladi.
      romb(x0 - 14, y + 4, 2.6);
      page.drawText(toWinAnsi(matn), {
        x: x0,
        y,
        size: 11.5,
        font: regular,
        color: siyoh,
      });
      y -= 19;
    }
    oxirgiSatr = y + 19;
  }

  /* ── Bezak chizig'i ── */

  // Matn bloki bilan pastki qator orasidagi bo'shliqni to'ldiradi.
  // Bo'sh maydon hujjatni «tugallanmagan» ko'rsatadi; to'lqin esa uni
  // ikki qismga ajratib, ko'zni pastki ma'lumotlarga olib tushadi.
  const tolqin = (
    y: number,
    x1: number,
    x2: number,
    amp: number,
    davr: number,
  ) => {
    const qadam = 4;
    let oldingi = { x: x1, y: y + Math.sin(0) * amp };
    for (let x = x1 + qadam; x <= x2; x += qadam) {
      const n = { x, y: y + Math.sin(((x - x1) / davr) * Math.PI * 2) * amp };
      page.drawLine({ start: oldingi, end: n, thickness: 0.6, color: oltin });
      oldingi = n;
    }
  };
  const bezakY = Math.min(208, oxirgiSatr - 28);
  tolqin(bezakY, 190, 652, 4, 148);
  romb(176, bezakY, 3.4);
  romb(666, bezakY, 3.4);

  /* ── Muhr ── */

  // Muhr — bu rasmiy tashkilot muhri emas, platformaning o'z belgisi.
  // Shuning uchun unda tashkilot nomi yoki gerb emas, sertifikat
  // seriyasi va yili turadi.
  const mx = width / 2;
  const my = 132;
  page.drawCircle({
    x: mx,
    y: my,
    size: 38,
    borderColor: oltin,
    borderWidth: 1.2,
  });
  page.drawCircle({
    x: mx,
    y: my,
    size: 32,
    borderColor: asosiy,
    borderWidth: 0.6,
  });
  for (let i = 0; i < 16; i += 1) {
    const a = (i / 16) * Math.PI * 2;
    romb(mx + Math.cos(a) * 44, my + Math.sin(a) * 44, 2.2);
  }
  const seriyaW = bold.widthOfTextAtSize(toWinAnsi(data.serial), 9);
  page.drawText(toWinAnsi(data.serial), {
    x: mx - seriyaW / 2,
    y: my + 4,
    size: 9,
    font: bold,
    color: asosiy,
  });
  const yil = String(data.issuedAt.getFullYear());
  const yilW = regular.widthOfTextAtSize(yil, 8);
  page.drawText(yil, {
    x: mx - yilW / 2,
    y: my - 11,
    size: 8,
    font: regular,
    color: kulrang,
  });

  /* ── Imzo va sana ── */

  chiziq(70, 132, 250, 132, kulrang, 0.7);
  page.drawText(toWinAnsi("O'qituvchi imzosi"), {
    x: 70,
    y: 118,
    size: 9,
    font: regular,
    color: kulrang,
  });
  page.drawText(toWinAnsi(`Berilgan sana: ${formatDateLong(data.issuedAt)}`), {
    x: 70,
    y: 98,
    size: 9,
    font: regular,
    color: kulrang,
  });

  /*
    Hujjatning maqomi haqida ogohlantirish.

    Sertifikatni talaba boshqalarga ko'rsatadi, unda esa «32 ECTS
    kredit» yozuvi bor — buni rasmiy diplom yoki kredit berilgani deb
    tushunish mumkin. Platforma esa akkreditatsiyadan o'tgan muassasa
    emas: hujjatni o'zi beradi va kreditlar faqat o'quv dasturining
    hajmini bildiradi. Shuning uchun maqom kichik shriftda bo'lsa ham
    ochiq yoziladi — loyihaning qolgan joyidagi qoida bilan bir xil:
    hech narsa o'zidan kattaroq qilib ko'rsatilmaydi.
  */
  const izohMatni = toWinAnsi(MAQOM_IZOHI);
  const izohW = regular.widthOfTextAtSize(izohMatni, 7);
  page.drawText(izohMatni, {
    x: (width - izohW) / 2,
    y: 58,
    size: 7,
    font: regular,
    color: kulrang,
  });

  /* ── QR ── */

  const payload = JSON.stringify({
    seriya: data.serial,
    tur: data.kind,
    ism: data.fullName,
    modul:
      data.kind === "oraliq"
        ? data.moduleTitle
        : data.modules.map((m) => m.title).join(", "),
    natija: data.score,
    sana: data.issuedAt.toISOString().slice(0, 10),
  });
  const qrDataUrl = await QRCode.toDataURL(payload, { margin: 1, width: 240 });
  const qrImage = await pdf.embedPng(qrDataUrl);
  const qx = width - 162;
  const qy = 98;
  page.drawRectangle({
    x: qx - 6,
    y: qy - 6,
    width: 92,
    height: 92,
    borderColor: oltin,
    borderWidth: 0.7,
  });
  page.drawImage(qrImage, { x: qx, y: qy, width: 80, height: 80 });
  const izoh = toWinAnsi("QR-kod sertifikat ma'lumotini o'zida saqlaydi");
  page.drawText(izoh, {
    x: qx + 40 - regular.widthOfTextAtSize(izoh, 6.5) / 2,
    y: qy - 18,
    size: 6.5,
    font: regular,
    color: kulrang,
  });

  const bytes = await pdf.save();
  return new Blob([bytes as BlobPart], { type: "application/pdf" });
}

// Yuklab olish yordamchisi `download.ts` ga ko'chirildi (bir nechta eksport
// turi uni ishlatadi); eski import yo'li buzilmasligi uchun qayta eksport.
export { downloadBlob } from "@/lib/export/download";
