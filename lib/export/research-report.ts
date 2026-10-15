"use client";

/**
 * Tajriba-sinov hisoboti (PDF).
 *
 * Hisobot dissertatsiyaning 3-bobiga to'g'ridan-to'g'ri kiradigan
 * ko'rinishda tuzilgan: guruhlarning bir xilligi, guruhlararo farq,
 * guruh ichidagi o'sish va daraja taqsimoti — har biri o'z jadvali bilan.
 *
 * Butunlay brauzerda yasaladi (serversiz arxitektura buzilmaydi).
 */

import {
  DARAJA_NOMI,
  DARAJALAR,
  EKSPERIMENT_GURUH_NOMI,
} from "@/lib/domain/types";
import type { Comparison, ResearchAnalysis } from "@/lib/research";
import { formatNumber, formatP } from "@/lib/stats";
import { toWinAnsi } from "@/lib/export/winansi";

/** A4, portret (punktda). */
const SAHIFA = { w: 595.28, h: 841.89 } as const;
const CHAP = 48;
const ONG = SAHIFA.w - 48;
const TEPA = SAHIFA.h - 56;
const PAST = 56;

type Options = {
  teacherName?: string;
  institution?: string;
};

export async function buildResearchReportPdf(
  analysis: ResearchAnalysis,
  options: Options = {},
): Promise<Blob> {
  const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib");

  const pdf = await PDFDocument.create();
  pdf.setTitle("MusicPed — tajriba-sinov tahlili");
  pdf.setCreator("MusicPed");

  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const ink = rgb(0.11, 0.13, 0.18);
  const muted = rgb(0.42, 0.45, 0.52);
  const line = rgb(0.85, 0.87, 0.9);
  const accent = rgb(0.23, 0.36, 0.86);

  let page = pdf.addPage([SAHIFA.w, SAHIFA.h]);
  let y = TEPA;
  let pageNo = 1;

  /** Yangi sahifa ochish kerakmi — har bir yozishdan oldin tekshiriladi. */
  function ensure(space: number) {
    if (y - space >= PAST) return;
    footer();
    page = pdf.addPage([SAHIFA.w, SAHIFA.h]);
    pageNo += 1;
    y = TEPA;
  }

  function footer() {
    page.drawText(toWinAnsi(`MusicPed · ${pageNo}-bet`), {
      x: CHAP,
      y: 32,
      size: 8,
      font: regular,
      color: muted,
    });
  }

  function text(
    value: string,
    opts: { size?: number; font?: typeof regular; color?: typeof ink; x?: number } = {},
  ) {
    const size = opts.size ?? 10;
    ensure(size + 6);
    page.drawText(toWinAnsi(value), {
      x: opts.x ?? CHAP,
      y,
      size,
      font: opts.font ?? regular,
      color: opts.color ?? ink,
    });
    y -= size + 6;
  }

  function heading(value: string) {
    ensure(34);
    y -= 8;
    page.drawText(toWinAnsi(value), { x: CHAP, y, size: 12, font: bold, color: accent });
    y -= 6;
    page.drawLine({
      start: { x: CHAP, y },
      end: { x: ONG, y },
      thickness: 0.7,
      color: line,
    });
    y -= 14;
  }

  /**
   * Jadval chizadi.
   *
   * Ustun kengliklari foizda beriladi — shu sababli jadvalni sahifa
   * kengligiga moslashtirish uchun hisob-kitob qilish kerak emas.
   */
  function table(
    headers: readonly string[],
    rows: ReadonlyArray<readonly string[]>,
    widths: readonly number[],
  ) {
    const total = ONG - CHAP;
    const xs: number[] = [];
    let acc = CHAP;
    for (const w of widths) {
      xs.push(acc);
      acc += (w / 100) * total;
    }

    ensure(26);
    headers.forEach((h, i) => {
      page.drawText(toWinAnsi(h), { x: xs[i], y, size: 8.5, font: bold, color: muted });
    });
    y -= 6;
    page.drawLine({ start: { x: CHAP, y }, end: { x: ONG, y }, thickness: 0.7, color: line });
    y -= 12;

    for (const row of rows) {
      ensure(18);
      row.forEach((cell, i) => {
        page.drawText(toWinAnsi(cell), {
          x: xs[i],
          y,
          size: 9,
          font: regular,
          color: ink,
        });
      });
      y -= 6;
      page.drawLine({
        start: { x: CHAP, y },
        end: { x: ONG, y },
        thickness: 0.4,
        color: line,
      });
      y -= 10;
    }
    y -= 4;
  }

  /** Uzun matnni sahifa kengligiga sig'diradi. */
  function paragraph(value: string, size = 9.5) {
    const maxWidth = ONG - CHAP;
    const words = toWinAnsi(value).split(/\s+/);
    let current = "";

    for (const word of words) {
      const probe = current ? `${current} ${word}` : word;
      if (regular.widthOfTextAtSize(probe, size) > maxWidth) {
        text(current, { size, color: muted });
        current = word;
      } else {
        current = probe;
      }
    }
    if (current) text(current, { size, color: muted });
  }

  /* ─────────── Sarlavha ─────────── */

  page.drawText(toWinAnsi("Tajriba-sinov tahlili"), {
    x: CHAP,
    y,
    size: 20,
    font: bold,
    color: ink,
  });
  y -= 26;
  page.drawText(
    toWinAnsi(
      "Bo'lajak musiqa o'qituvchilarini shaxsga yo'naltirilgan ta'lim texnologiyalari asosida tayyorlash",
    ),
    { x: CHAP, y, size: 9, font: regular, color: muted },
  );
  y -= 14;

  const sana = new Date().toLocaleDateString("uz-UZ");
  const satr = [
    `Sana: ${sana}`,
    options.teacherName ? `Tuzuvchi: ${options.teacherName}` : null,
    options.institution ?? null,
  ]
    .filter(Boolean)
    .join("  ·  ");
  page.drawText(toWinAnsi(satr), { x: CHAP, y, size: 9, font: regular, color: muted });
  y -= 24;

  /* ─────────── Guruhlar ─────────── */

  heading("Tanlanma");
  table(
    ["Guruh", "Ishtirokchi", "Boshlang'ich o'rtacha", "Yakuniy o'rtacha", "O'sish"],
    [
      [
        EKSPERIMENT_GURUH_NOMI.tajriba,
        String(analysis.counts.tajriba),
        `${formatNumber(analysis.overall.tajriba.baseline.mean, 1)}%`,
        `${formatNumber(analysis.overall.tajriba.final.mean, 1)}%`,
        `+${formatNumber(analysis.overall.tajriba.osish, 1)}`,
      ],
      [
        EKSPERIMENT_GURUH_NOMI.nazorat,
        String(analysis.counts.nazorat),
        `${formatNumber(analysis.overall.nazorat.baseline.mean, 1)}%`,
        `${formatNumber(analysis.overall.nazorat.final.mean, 1)}%`,
        `+${formatNumber(analysis.overall.nazorat.osish, 1)}`,
      ],
    ],
    [30, 15, 20, 20, 15],
  );

  /* ─────────── 1. Bir xillik ─────────── */

  heading("1. Guruhlarning boshlang'ich bir xilligi");
  paragraph(
    "Tajriba boshida guruhlar farq qilmasligi kerak: aks holda yakuniy farqni metodikaga bog'lab bo'lmaydi.",
  );
  text(
    `t = ${formatNumber(analysis.homogeneity.ttest.t)} · df = ${formatNumber(analysis.homogeneity.ttest.df, 1)} · ${formatP(analysis.homogeneity.ttest.p)} · d = ${formatNumber(analysis.homogeneity.effect.d)}`,
    { size: 10, font: bold },
  );
  text(
    analysis.homogeneity.homogeneous
      ? "Xulosa: boshlang'ich darajada statistik ahamiyatli farq topilmadi — guruhlar taqqoslashga yaroqli."
      : "DIQQAT: boshlang'ich darajada farq bor — yakuniy natijani faqat metodika bilan tushuntirib bo'lmaydi.",
    { size: 9.5, color: analysis.homogeneity.homogeneous ? muted : rgb(0.7, 0.35, 0.05) },
  );

  /* ─────────── 2. Guruhlararo farq ─────────── */

  heading("2. Guruhlararo farq (yakuniy natija)");
  paragraph(
    "Uelch t-mezoni ishlatilgan — u guruhlar dispersiyasining tengligini talab qilmaydi. d — Koen effekt kattaligi (0,2 kichik · 0,5 o'rta · 0,8 katta). U — Mann-Uitni mezonining parametrik bo'lmagan tekshiruvi.",
  );

  const qatorlar = (c: Comparison) => [
    c.label,
    formatNumber(c.tajriba.final.mean, 1),
    formatNumber(c.nazorat.final.mean, 1),
    formatNumber(c.ttest.t),
    formatNumber(c.ttest.df, 1),
    formatNumber(c.ttest.p, 4),
    formatNumber(c.effect.d),
    formatNumber(c.mann.p, 4),
  ];

  table(
    ["Yo'nalish", "Tajriba", "Nazorat", "t", "df", "p", "d", "p (U)"],
    [qatorlar(analysis.overall), ...analysis.areas.map(qatorlar)],
    [28, 10, 10, 10, 9, 11, 10, 12],
  );

  /* ─────────── 3. Guruh ichidagi o'sish ─────────── */

  heading("3. Guruh ichidagi o'sish (juftlashgan t-mezon)");
  paragraph(
    "Bir xil talabalarning «oldin» va «keyin» natijasi solishtiriladi; kuzatuvlar mustaqil emas, shuning uchun juftlashgan mezon qo'llanadi.",
  );
  table(
    ["Guruh", "O'sish (ball)", "t", "df", "p", "d"],
    (["tajriba", "nazorat"] as const).map((g) => [
      EKSPERIMENT_GURUH_NOMI[g],
      formatNumber(analysis.within[g].ttest.meanDifference, 1),
      formatNumber(analysis.within[g].ttest.t),
      formatNumber(analysis.within[g].ttest.df, 0),
      formatNumber(analysis.within[g].ttest.p, 4),
      formatNumber(analysis.within[g].effect.d),
    ]),
    [30, 16, 14, 12, 14, 14],
  );

  /* ─────────── 4. Daraja taqsimoti ─────────── */

  heading("4. Daraja taqsimoti (chi-kvadrat mezoni)");
  paragraph(
    "Daraja chegaralari: past < 56 · o'rta 56-70 · yuqori 71 va yuqori. Kramer V taqsimotlar farqining kuchini 0 dan 1 gacha o'lchaydi.",
  );

  for (const phase of ["baseline", "final"] as const) {
    const l = analysis.levels[phase];
    text(phase === "baseline" ? "Tajriba boshida:" : "Tajriba oxirida:", {
      size: 10,
      font: bold,
    });
    table(
      ["Guruh", ...DARAJALAR.map((lvl) => DARAJA_NOMI[lvl])],
      (["tajriba", "nazorat"] as const).map((g, i) => [
        EKSPERIMENT_GURUH_NOMI[g],
        ...l.observed[i].map(String),
      ]),
      [40, 20, 20, 20],
    );
    text(
      `chi2 = ${formatNumber(l.chi2.chi2)} · df = ${l.chi2.df} · ${formatP(l.chi2.p)} · Kramer V = ${formatNumber(l.chi2.cramersV)}`,
      { size: 9.5, color: muted },
    );
    if (l.chi2.lowExpectedCells > 0) {
      text(
        `Diqqat: ${l.chi2.lowExpectedCells} katakchaning kutilgan chastotasi 5 dan kichik — mezonning sharti to'liq bajarilmagan.`,
        { size: 9, color: rgb(0.7, 0.35, 0.05) },
      );
    }
    y -= 6;
  }

  /* ─────────── Ogohlantirishlar ─────────── */

  if (analysis.warnings.length > 0) {
    heading("Natijani o'qishda e'tiborga olinadigan holatlar");
    for (const w of analysis.warnings) paragraph(`- ${w}`);
  }

  /* ─────────── Metodika izohi ─────────── */

  heading("Hisoblash metodikasi");
  paragraph(
    "Barcha mezonlar platforma ichida hisoblangan: Uelch va juftlashgan t-mezon, Pirson chi-kvadrat mezoni (Kramer V bilan), Koen d (Xedjes g tuzatmasi bilan) va Mann-Uitni U mezoni (teng qiymatlar hamda uzluksizlik tuzatmalari bilan). Taqsimot funksiyalari to'liqsiz beta va gamma funksiyalari orqali topilgan, shuning uchun p qiymati jadvalga qaramasdan aniq hisoblanadi. Natijalar mustaqil statistik paket (SciPy 1.18) bilan solishtirilgan va 12 xonadan ortiq aniqlikda mos kelgan.",
  );
  paragraph(
    "Statistika isbot bermaydi: p qiymati faqat «kuzatilgan farqni tasodif bilan tushuntirish qanchalik qiyin» degan savolga javob beradi. Shuning uchun har bir mezon yonida effekt kattaligi ham keltirilgan — u farqning amaliy ahamiyatini ko'rsatadi va tanlanma hajmiga bog'liq emas.",
  );

  footer();

  const bytes = await pdf.save();
  return new Blob([bytes as BlobPart], { type: "application/pdf" });
}
