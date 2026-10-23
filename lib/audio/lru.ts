/**
 * Keshdan nimani chiqarish kerakligini hisoblaydi.
 *
 * Dekodlangan audio xotirada siqilmagan holda yotadi: bitta rubob
 * banki (81 namuna) ≈ 41 MB. Chegarasiz keshda uchta cholg'uni aylanib
 * chiqqan talabada 87 MB to'planishi o'lchangan — kuchsiz telefonda bu
 * yorliqning yopilishiga olib keladi.
 *
 * Qoida oddiy: chegaradan oshganda eng uzoq ishlatilmagan yozuvlar
 * birin-ketin chiqariladi. Mantiq alohida sof funksiyada, chunki uni
 * brauzersiz tekshirib bo'ladi — kesh esa brauzerga bog'liq.
 */

export type KeshElementi = { kalit: string; bayt: number; navbat: number };

/**
 * Chegaradan oshgan hajmni bo'shatish uchun chiqariladigan kalitlar.
 *
 * Tartib: eng kichik `navbat` (eng uzoq ishlatilmagan) birinchi.
 * Chegara buzilmasa, bo'sh ro'yxat qaytadi.
 */
export function chiqariladiganlar(
  elementlar: readonly KeshElementi[],
  chegara: number,
): string[] {
  let jami = 0;
  for (const e of elementlar) jami += e.bayt;
  if (jami <= chegara) return [];

  const tartib = [...elementlar].sort((a, b) => a.navbat - b.navbat);
  const chiqadi: string[] = [];
  for (const e of tartib) {
    if (jami <= chegara) break;
    chiqadi.push(e.kalit);
    jami -= e.bayt;
  }
  return chiqadi;
}
