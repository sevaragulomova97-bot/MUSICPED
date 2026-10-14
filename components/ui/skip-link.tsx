/** Klaviatura foydalanuvchisi navigatsiyani o'tkazib yuborishi uchun (WCAG 2.4.1). */
export function SkipLink() {
  return (
    <a
      href="#asosiy-kontent"
      className="sr-only-focusable absolute left-4 top-4 z-50 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
    >
      Asosiy kontentga o&apos;tish
    </a>
  );
}
