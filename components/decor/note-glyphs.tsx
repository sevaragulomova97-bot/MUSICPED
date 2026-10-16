/**
 * Musiqa belgilari — qo'lda chizilgan SVG yo'llar.
 *
 * Hech qanday tashqi rasm yoki shrift ishlatilmaydi: belgilar shu yerda
 * `path` sifatida chizilgan, shuning uchun ular rangni `currentColor` dan
 * oladi, har qanday o'lchamda tiniq qoladi va litsenziya masalasi chiqmaydi.
 *
 * Barcha belgilar bitta `0 0 24 24` koordinata maydonida, bir xil optik
 * og'irlikda chizilgan — shuning uchun ular yonma-yon turganda bir oilaga
 * tegishli ko'rinadi.
 */

export const NOTA_BELGILARI = [
  "chorak",
  "sakkizlik",
  "juft",
  "kalit",
  "diez",
  "bemol",
  "bekar",
] as const;

export type NotaBelgisi = (typeof NOTA_BELGILARI)[number];

/** Chiziq bilan chiziladigan belgilar uchun umumiy xossalar. */
const chiziq = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const SHAKLLAR: Record<NotaBelgisi, React.ReactNode> = {
  // Chorak nota: egilgan boshcha va tik dum.
  chorak: (
    <>
      <ellipse cx="8.6" cy="17.4" rx="5.1" ry="3.7" transform="rotate(-22 8.6 17.4)" />
      <rect x="12.1" y="2.6" width="2.1" height="15.2" rx="1.05" />
    </>
  ),

  // Sakkizlik: chorak + bayroqcha.
  sakkizlik: (
    <>
      <ellipse cx="8.6" cy="17.4" rx="5.1" ry="3.7" transform="rotate(-22 8.6 17.4)" />
      <rect x="12.1" y="2.6" width="2.1" height="15.2" rx="1.05" />
      <path d="M14.2 3.1c3.9 2 6.1 4.8 5.3 8.2-.3 1.3-1.1 2.4-2.2 3.2.9-2.3.6-4.2-.9-5.8-.7-.8-1.5-1.4-2.2-1.9z" />
    </>
  ),

  // Qo'shma ikki sakkizlik — logotipdagi motivning davomi.
  juft: (
    <>
      <ellipse cx="6.4" cy="18" rx="4.4" ry="3.2" transform="rotate(-22 6.4 18)" />
      <ellipse cx="17.2" cy="16" rx="4.4" ry="3.2" transform="rotate(-22 17.2 16)" />
      <rect x="9.3" y="4.4" width="1.9" height="14.2" rx=".95" />
      <rect x="20.1" y="2.6" width="1.9" height="14" rx=".95" />
      <path d="M9.3 4.6 22 2.6v3.2L9.3 7.8z" />
    </>
  ),

  // Skripka (sol) kaliti: uchta chiziqdan — yuqori jingalak, asosiy
  // kamon bilan spiral, va pastga tushuvchi dum.
  kalit: (
    <>
      <path {...chiziq} d="M13.1 3.4c.5-1 1.3-1.5 1.9-1.2" />
      <path
        {...chiziq}
        d="M15 2.2C14.4 8.8 13.6 15.2 12.7 20.3c-.5 2.7-2.6 3.8-4.1 2.8-1.1-.7-1-2.3.2-2.6"
      />
      <path
        {...chiziq}
        d="M15 2.2C10.8 5.2 8.2 8.4 8.2 11.6c0 3 2.1 5 4.8 5.3 2.7.3 4.4-1.2 4.4-3.3 0-1.8-1.5-3-3.2-2.8"
      />
    </>
  ),

  // Diez: ikki ingichka tik chiziq va ikki qalin qiya ko'ndalang.
  diez: (
    <>
      <path {...chiziq} strokeWidth={1.7} d="M8.8 2.8 7.6 21.2" />
      <path {...chiziq} strokeWidth={1.7} d="M16.1 1.9 14.9 20.3" />
      <path d="M4.4 10.9 19 8.1v3.4L4.4 14.3z" />
      <path d="M4.4 16.3 19 13.5v3.4L4.4 19.7z" />
    </>
  ),

  // Bemol: tik chiziq va ochiq kosacha.
  bemol: (
    <>
      <path {...chiziq} strokeWidth={1.7} d="M8.2 2.2 8.2 21" />
      <path
        {...chiziq}
        strokeWidth={1.7}
        d="M8.2 12.4c1.6-2 3.9-2.7 5.5-1.6 2 1.4 1.7 4.4-.7 6.6-1.3 1.2-3 2.3-4.8 3.1z"
      />
    </>
  ),

  // Bekar: ikki tik chiziq (biri yuqoriroq, biri pastroq) va ikki ko'ndalang.
  bekar: (
    <>
      <path {...chiziq} strokeWidth={1.7} d="M8 3 8 19" />
      <path {...chiziq} strokeWidth={1.7} d="M15.2 5 15.2 21" />
      <path d="M7.4 8.9 15.8 7.4v3.1L7.4 12z" />
      <path d="M7.4 13.9 15.8 12.4v3.1L7.4 17z" />
    </>
  ),
};

/**
 * Bitta musiqa belgisi.
 *
 * Bezak sifatida ishlatilgani uchun standart holatda ekran o'quvchidan
 * yashiriladi (`aria-hidden`) — u ma'no tashimaydi va o'qilishi shart emas.
 */
export function NoteGlyph({
  kind,
  className,
  style,
}: {
  kind: NotaBelgisi;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {SHAKLLAR[kind]}
    </svg>
  );
}

/** `note-burst.ts` uchun: belgini xom SVG matni sifatida beradi. */
export const NOTA_SVG_YOLLARI: Record<NotaBelgisi, string> = {
  chorak:
    '<ellipse cx="8.6" cy="17.4" rx="5.1" ry="3.7" transform="rotate(-22 8.6 17.4)"/>' +
    '<rect x="12.1" y="2.6" width="2.1" height="15.2" rx="1.05"/>',
  sakkizlik:
    '<ellipse cx="8.6" cy="17.4" rx="5.1" ry="3.7" transform="rotate(-22 8.6 17.4)"/>' +
    '<rect x="12.1" y="2.6" width="2.1" height="15.2" rx="1.05"/>' +
    '<path d="M14.2 3.1c3.9 2 6.1 4.8 5.3 8.2-.3 1.3-1.1 2.4-2.2 3.2.9-2.3.6-4.2-.9-5.8-.7-.8-1.5-1.4-2.2-1.9z"/>',
  juft:
    '<ellipse cx="6.4" cy="18" rx="4.4" ry="3.2" transform="rotate(-22 6.4 18)"/>' +
    '<ellipse cx="17.2" cy="16" rx="4.4" ry="3.2" transform="rotate(-22 17.2 16)"/>' +
    '<rect x="9.3" y="4.4" width="1.9" height="14.2" rx=".95"/>' +
    '<rect x="20.1" y="2.6" width="1.9" height="14" rx=".95"/>' +
    '<path d="M9.3 4.6 22 2.6v3.2L9.3 7.8z"/>',
  kalit:
    '<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M13.1 3.4c.5-1 1.3-1.5 1.9-1.2"/>' +
    '<path d="M15 2.2C14.4 8.8 13.6 15.2 12.7 20.3c-.5 2.7-2.6 3.8-4.1 2.8-1.1-.7-1-2.3.2-2.6"/>' +
    '<path d="M15 2.2C10.8 5.2 8.2 8.4 8.2 11.6c0 3 2.1 5 4.8 5.3 2.7.3 4.4-1.2 4.4-3.3 0-1.8-1.5-3-3.2-2.8"/>' +
    "</g>",
  diez:
    '<g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">' +
    '<path d="M8.8 2.8 7.6 21.2"/><path d="M16.1 1.9 14.9 20.3"/></g>' +
    '<path d="M4.4 10.9 19 8.1v3.4L4.4 14.3z"/><path d="M4.4 16.3 19 13.5v3.4L4.4 19.7z"/>',
  bemol:
    '<g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M8.2 2.2 8.2 21"/>' +
    '<path d="M8.2 12.4c1.6-2 3.9-2.7 5.5-1.6 2 1.4 1.7 4.4-.7 6.6-1.3 1.2-3 2.3-4.8 3.1z"/></g>',
  bekar:
    '<g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">' +
    '<path d="M8 3 8 19"/><path d="M15.2 5 15.2 21"/></g>' +
    '<path d="M7.4 8.9 15.8 7.4v3.1L7.4 12z"/><path d="M7.4 13.9 15.8 12.4v3.1L7.4 17z"/>',
};
