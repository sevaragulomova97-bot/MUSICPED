"use client";

/**
 * Modul yakunlanganda beriladigan sertifikat (PDF).
 *
 * To'liq brauzerda yaratiladi — serverga ehtiyoj yo'q. QR-kod sertifikat
 * ma'lumotini **o'z ichida** olib yuradi (serverga murojaat qilmaydi),
 * shuning uchun u haqiqiylikni kriptografik tasdiqlamaydi; u faqat
 * sertifikat mazmunini tez o'qish uchun.
 */

import { toWinAnsi } from "@/lib/export/winansi";

export type CertificateData = {
  fullName: string;
  moduleTitle: string;
  credits: number;
  score: number;
  issuedAt: Date;
  serial: string;
};

/** Sertifikat raqami — ism va modul asosida barqaror hosil qilinadi. */
export function certificateSerial(fullName: string, moduleId: string, issuedAt: Date) {
  const base = `${fullName}|${moduleId}|${issuedAt.toISOString().slice(0, 10)}`;
  let hash = 0;
  for (let i = 0; i < base.length; i += 1) {
    hash = (hash * 31 + base.charCodeAt(i)) >>> 0;
  }
  return `MP-${hash.toString(36).toUpperCase().padStart(7, "0").slice(0, 7)}`;
}

export async function buildCertificatePdf(data: CertificateData): Promise<Blob> {
  const [{ PDFDocument, StandardFonts, rgb }, QRCode] = await Promise.all([
    import("pdf-lib"),
    import("qrcode"),
  ]);

  const pdf = await PDFDocument.create();
  const page = pdf.addPage([842, 595]); // A4 landshaft
  const { width, height } = page.getSize();

  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdf.embedFont(StandardFonts.Helvetica);

  const primary = rgb(0.231, 0.357, 0.859);
  const ink = rgb(0.059, 0.09, 0.165);
  const muted = rgb(0.392, 0.455, 0.545);

  page.drawRectangle({
    x: 24,
    y: 24,
    width: width - 48,
    height: height - 48,
    borderColor: primary,
    borderWidth: 2,
  });

  const center = (
    text: string,
    y: number,
    size: number,
    font = regular,
    color = ink,
  ) => {
    const safe = toWinAnsi(text);
    const w = font.widthOfTextAtSize(safe, size);
    page.drawText(safe, { x: (width - w) / 2, y, size, font, color });
  };

  center("MusicPed", height - 90, 26, bold, primary);
  center("SERTIFIKAT", height - 135, 36, bold, ink);
  center("Quyidagi talaba modulni muvaffaqiyatli yakunladi", height - 175, 13, regular, muted);
  center(data.fullName, height - 235, 30, bold, ink);
  center(data.moduleTitle, height - 285, 18, bold, primary);
  center(
    `${data.credits} ECTS kredit  ·  Natija: ${data.score}%`,
    height - 315,
    13,
    regular,
    muted,
  );

  const payload = JSON.stringify({
    seriya: data.serial,
    ism: data.fullName,
    modul: data.moduleTitle,
    natija: data.score,
    sana: data.issuedAt.toISOString().slice(0, 10),
  });
  const qrDataUrl = await QRCode.toDataURL(payload, { margin: 1, width: 240 });
  const qrImage = await pdf.embedPng(qrDataUrl);
  page.drawImage(qrImage, { x: width - 170, y: 70, width: 100, height: 100 });

  const left = (text: string, y: number, size: number, color = muted) =>
    page.drawText(toWinAnsi(text), { x: 70, y, size, font: regular, color });

  left(`Seriya: ${data.serial}`, 120, 11);
  left(`Berilgan sana: ${data.issuedAt.toLocaleDateString("uz-UZ")}`, 100, 11);
  left("QR-kod sertifikat ma'lumotini o'zida saqlaydi.", 78, 9);

  const bytes = await pdf.save();
  return new Blob([bytes as BlobPart], { type: "application/pdf" });
}

// Yuklab olish yordamchisi `download.ts` ga ko'chirildi (bir nechta eksport
// turi uni ishlatadi); eski import yo'li buzilmasligi uchun qayta eksport.
export { downloadBlob } from "@/lib/export/download";
