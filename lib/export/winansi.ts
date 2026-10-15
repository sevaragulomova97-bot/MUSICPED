/**
 * Matnni `pdf-lib` ning standart shriftlariga moslaydi.
 *
 * Muammo: standart (ichki) PDF shriftlari **WinAnsi** kodlashdan
 * foydalanadi. Unda o'zbek lotin yozuvidagi `oʻ`/`gʻ` belgisi (U+02BB),
 * yunon harflari (χ) va tipografik tirelar yo'q — ularni chizishga urinish
 * xato bilan to'xtaydi.
 *
 * Nega shrift fayli yuklanmaydi? Kirill va lotin diakritikasini qamraydigan
 * Unicode shrift kamida 300–500 KB joy oladi va uni **har bir** PDF ichiga
 * joylash kerak bo'ladi. Serversiz saytda bu hajm sezilarli, almashtirish
 * esa o'qilishni buzmaydi: `oʻ` → `o'`.
 */
const ALMASHTIRISH: Array<[RegExp, string]> = [
  [/[ʻʼ‘’´`]/g, "'"],
  [/[“”«»]/g, '"'],
  [/[–—]/g, "-"],
  [/…/g, "..."],
  [/≥/g, ">="],
  [/≤/g, "<="],
  [/≈/g, "~"],
  [/χ/g, "chi"],
  [/²/g, "2"],
  [/√/g, "sqrt"],
  [/→/g, "->"],
  [/ /g, " "],
];

export function toWinAnsi(text: string): string {
  let out = text;
  for (const [pattern, replacement] of ALMASHTIRISH) {
    out = out.replace(pattern, replacement);
  }
  // Qolgan ASCII va Latin-1 bo'lmagan belgilar PDF da savol belgisiga
  // aylanadi — ularni ataylab olib tashlaymiz, xato bermasin.
  return out.replace(/[^ -~¡-ÿ]/g, "");
}
