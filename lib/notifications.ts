import { TOPSHIRIQLAR } from "@/content/tasks";
import { moduleStatuses } from "@/lib/certificates";
import type { StoredDiagnostic, StoredProgress, StoredSubmission } from "@/lib/db/schema";

/**
 * Bildirishnomalar — **mavjud ma'lumotdan hisoblanadi**, alohida
 * saqlanmaydi.
 *
 * Platformada server yo'q, demak hech kim xabar yubormaydi. Lekin
 * foydalanuvchiga eslatish kerak bo'lgan narsalar baribir bor va
 * ularning hammasi brauzerdagi ma'lumotdan kelib chiqadi: baholangan
 * ishlar, yarim qolgan darslar, o'tilmagan diagnostika, eksport
 * qilinmagan natijalar.
 *
 * Shu sababli bu — sof funksiya. Yangi jadval ham, migratsiya ham
 * kerak emas, va qoida test bilan to'liq qoplanadi.
 */

export type XabarDarajasi = "muhim" | "eslatma" | "maʼlumot";

export type Xabar = {
  id: string;
  daraja: XabarDarajasi;
  sarlavha: string;
  matn: string;
  /** Qayerga olib boradi */
  href: string;
  /** Tartiblash uchun — ISO sana yoki `undefined` */
  sana?: string;
};

export type XabarKirishi = {
  diagnostics: StoredDiagnostic[];
  progress: StoredProgress[];
  submissions: StoredSubmission[];
  /**
   * Oxirgi eksport sanasi (ISO), bo'lmasa `undefined`.
   *
   * Faoliyat jurnalidagi `eksport` yozuvidan olinadi — alohida
   * maydon saqlanmaydi.
   */
  lastExport?: string;
  /** Hozirgi vaqt — test uchun beriladi */
  now?: Date;
};

/** Eksportsiz o'tgan kunlar shu chegaradan oshsa, eslatiladi. */
export const EKSPORT_KUNLARI = 14;

function kunFarqi(a: Date, b: string) {
  return Math.floor((a.getTime() - new Date(b).getTime()) / 86_400_000);
}

export function xabarlar(kirish: XabarKirishi): Xabar[] {
  const now = kirish.now ?? new Date();
  const out: Xabar[] = [];

  /* 1. Yangi baholangan ishlar */
  const baholangan = kirish.submissions.filter((s) => s.gradedAt && s.score !== undefined);
  for (const s of baholangan) {
    const topshiriq = TOPSHIRIQLAR.find((t) => t.id === s.taskId);
    if (!topshiriq) continue;
    out.push({
      id: `baho:${s.id}`,
      daraja: "muhim",
      sarlavha: "Ish baholandi",
      matn: `«${topshiriq.title}» — ${s.score} ball${s.teacherComment ? ", izoh bilan" : ""}.`,
      href: `/topshiriqlar/${topshiriq.slug}`,
      sana: s.gradedAt,
    });
  }

  /* 2. Baho kutayotgan ishlar */
  const kutayotgan = kirish.submissions.filter((s) => !s.gradedAt && s.score === undefined);
  if (kutayotgan.length) {
    out.push({
      id: "kutilmoqda",
      daraja: "maʼlumot",
      sarlavha: "Baho kutilmoqda",
      matn: `${kutayotgan.length} ta ish o'qituvchi bahosini kutmoqda. Natijalarni eksport qilib topshirdingizmi?`,
      href: "/sozlamalar",
      sana: kutayotgan
        .map((s) => s.submittedAt)
        .sort()
        .at(-1),
    });
  }

  /* 3. Diagnostika */
  if (!kirish.diagnostics.length) {
    out.push({
      id: "diagnostika:yoq",
      daraja: "muhim",
      sarlavha: "Diagnostikadan o'ting",
      matn: "Individual o'quv rejangiz shu natijadan quriladi.",
      href: "/diagnostika",
    });
  } else {
    const oxirgi = [...kirish.diagnostics].sort((a, b) =>
      a.completedAt.localeCompare(b.completedAt),
    ).at(-1)!;
    const turlar = new Set(kirish.diagnostics.map((d) => d.kind));
    if (!turlar.has("yakuniy") && kunFarqi(now, oxirgi.completedAt) >= 30) {
      out.push({
        id: "diagnostika:takror",
        daraja: "eslatma",
        sarlavha: "O'lchovni takrorlash vaqti",
        matn: "Oxirgi diagnostikadan bir oydan ko'p o'tdi — o'sishni ko'rish uchun qayta o'ting.",
        href: "/diagnostika",
      });
    }
  }

  /* 4. Yarim qolgan darslar */
  const yarim = kirish.progress.filter((p) => p.percent > 0 && p.percent < 100);
  if (yarim.length) {
    const eng = [...yarim].sort((a, b) => a.updatedAt.localeCompare(b.updatedAt)).at(-1)!;
    out.push({
      id: "dars:yarim",
      daraja: "eslatma",
      sarlavha: "Yarim qolgan dars",
      matn: `${yarim.length} ta dars tugallanmagan. Oxirgisi — ${eng.percent}%.`,
      href: `/kurslar/${eng.courseSlug}`,
      sana: eng.updatedAt,
    });
  }

  /* 5. Eksport eslatmasi */
  const bormi = kirish.progress.length || kirish.submissions.length || kirish.diagnostics.length;
  if (bormi) {
    const kun = kirish.lastExport ? kunFarqi(now, kirish.lastExport) : null;
    if (kun === null || kun >= EKSPORT_KUNLARI) {
      out.push({
        id: "eksport",
        daraja: "muhim",
        sarlavha: "Ma'lumotni eksport qiling",
        matn:
          kun === null
            ? "Hali bir marta ham eksport qilmagansiz. Ma'lumot faqat shu brauzerda turibdi — brauzer tozalansa yo'qoladi."
            : `Oxirgi eksportdan ${kun} kun o'tdi.`,
        href: "/sozlamalar",
        sana: kirish.lastExport,
      });
    }
  }

  /* 6. Kurs yakuni — sertifikat.
     Shart sertifikat qoidasining o'zi bilan hisoblanadi, shuning uchun
     xabar bilan tugmaning holati hech qachon bir-biriga zid bo'lmaydi. */
  for (const holat of moduleStatuses(kirish.progress, kirish.submissions)) {
    if (!holat.tayyor) continue;
    out.push({
      id: `sertifikat:${holat.modul.id}`,
      daraja: "maʼlumot",
      sarlavha: "Oraliq sertifikat tayyor",
      matn: `«${holat.modul.title}» kursini yakunladingiz — sertifikatni portfoliodan yuklab oling.`,
      href: "/portfolio",
    });
  }

  // Muhimlari yuqorida, keyin yangiligi bo'yicha.
  const vazn: Record<XabarDarajasi, number> = { muhim: 0, eslatma: 1, "maʼlumot": 2 };
  return out.sort(
    (a, b) =>
      vazn[a.daraja] - vazn[b.daraja] ||
      (b.sana ?? "").localeCompare(a.sana ?? ""),
  );
}

/** O'qilmagan muhim xabarlar soni — qo'ng'iroq yonidagi raqam. */
export function muhimlar(list: Xabar[]) {
  return list.filter((x) => x.daraja === "muhim").length;
}
