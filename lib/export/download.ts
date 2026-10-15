/**
 * Faylni brauzerda yuklab olish.
 *
 * Server yo'q, shuning uchun har qanday «eksport» shu funksiya bilan
 * tugaydi: ma'lumot xotirada tayyorlanadi va foydalanuvchining
 * kompyuteriga tushadi. Hech narsa tashqariga yuborilmaydi.
 */

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Obyekt URL ni bo'shatamiz — aks holda xotirada qolib ketadi.
  window.setTimeout(() => URL.revokeObjectURL(url), 2000);
}

/** JSON ni chiroyli ko'rinishda (2 bo'shliq) yuklab beradi. */
export function downloadJson(data: unknown, filename: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  downloadBlob(blob, filename);
}

/**
 * CSV ni Excel to'g'ri o'qiydigan ko'rinishda yuklab beradi.
 *
 * Ikki nozik joy bor: (1) BOM belgisi bo'lmasa Excel kirill va o'zbek
 * harflarini buzadi; (2) nuqtali vergul ajratuvchi sifatida ishlatiladi,
 * chunki o'nlik kasr vergul bilan yoziladi va oddiy vergul ustunlarni
 * aralashtirib yuboradi.
 */
export function downloadCsv(rows: ReadonlyArray<ReadonlyArray<string | number>>, filename: string) {
  const escape = (v: string | number) => {
    const s = String(v);
    return /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const text = rows.map((r) => r.map(escape).join(";")).join("\r\n");
  const blob = new Blob([`﻿${text}`], { type: "text/csv;charset=utf-8" });
  downloadBlob(blob, filename);
}
