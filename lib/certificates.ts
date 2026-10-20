import { KURSLAR } from "@/content/courses";
import { MODULLAR, type Module } from "@/content/modules";
import type { DiagnosticArea } from "@/lib/domain/types";

/**
 * Sertifikat berish shartlari.
 *
 * Mantiq ataylab komponentdan ajratilgan: u yerda u testlanmas edi, bu
 * yerda esa har bir shart unit test bilan qo'riqlanadi. Sertifikat —
 * talaba uchun rasmiy hujjat, shuning uchun «qachon beriladi» degan
 * savolga aniq va tekshiriladigan javob bo'lishi kerak.
 */

/** Modul bo'yicha o'tish bali. */
export const OTISH_BALI = 70;

export type ProgressRow = { lessonId: string; percent: number };
export type SubmissionRow = { score?: number; area: DiagnosticArea };

export type ModuleStatus = {
  modul: Module;
  darslar: number;
  tugagan: number;
  /** Baholangan topshiriqlar soni */
  soni: number;
  ortacha: number;
  tayyor: boolean;
  sabab: string;
};

/**
 * Har bir modul (kurs) bo'yicha oraliq sertifikat holati.
 *
 * Shartlar:
 *  1. kursdagi **barcha darslar** yakunlangan bo'lsin (100%);
 *  2. shu modul yo'nalishlari bo'yicha baholangan topshiriqlar bo'lsa,
 *     ularning o'rtachasi `OTISH_BALI` dan kam bo'lmasin.
 *
 * Baholanmagan ish (`score` yo'q yoki manfiy) hisobga olinmaydi — aks
 * holda o'qituvchi hali baholamagan ish o'rtachani pasaytirardi.
 */
export function moduleStatuses(
  progress: readonly ProgressRow[],
  submissions: readonly SubmissionRow[],
): ModuleStatus[] {
  return MODULLAR.map((modul) => {
    const kurs = KURSLAR.find((k) => k.moduleId === modul.id);
    const darslar = kurs?.lessons ?? [];
    const tugagan = darslar.filter((l) =>
      progress.some((p) => p.lessonId === l.id && p.percent >= 100),
    ).length;

    const tegishli = submissions.filter(
      (s) => typeof s.score === "number" && s.score >= 0 && modul.areas.includes(s.area),
    );
    const ortacha = tegishli.length
      ? Math.round(tegishli.reduce((x, s) => x + (s.score ?? 0), 0) / tegishli.length)
      : 0;

    const darsTayyor = darslar.length > 0 && tugagan === darslar.length;
    const ballTayyor = tegishli.length === 0 || ortacha >= OTISH_BALI;

    return {
      modul,
      darslar: darslar.length,
      tugagan,
      soni: tegishli.length,
      ortacha,
      tayyor: darsTayyor && ballTayyor,
      sabab: !darsTayyor
        ? `Yana ${darslar.length - tugagan} ta dars qoldi`
        : `O'rtacha ${OTISH_BALI}% dan yuqori bo'lishi kerak (hozir ${ortacha}%)`,
    };
  });
}

export type FinalStatus = {
  tayyor: boolean;
  /** Hali yakunlanmagan modullar nomi */
  qolgan: string[];
  /** Yakunlangan modullar soni */
  tugagan: number;
  jami: number;
  /** Barcha modullar bo'yicha o'rtacha natija */
  ortacha: number;
  jamiKredit: number;
};

/**
 * Yakuniy sertifikat holati.
 *
 * Yakuniy sertifikat **barcha** kurslar yakunlanganda beriladi. O'rtacha
 * natija modullar bo'yicha hisoblanadi: baholangan topshirig'i bo'lmagan
 * modul 100% deb olinmaydi va 0% deb ham olinmaydi — u o'rtachaga
 * umuman kirmaydi, aks holda bitta baholanmagan modul yakuniy raqamni
 * ikki tomonga ham sun'iy siljitardi.
 */
export function finalStatus(statuses: readonly ModuleStatus[]): FinalStatus {
  const tugagan = statuses.filter((s) => s.tayyor);
  const qolgan = statuses.filter((s) => !s.tayyor).map((s) => s.modul.title);

  const baholangan = statuses.filter((s) => s.soni > 0);
  const ortacha = baholangan.length
    ? Math.round(baholangan.reduce((x, s) => x + s.ortacha, 0) / baholangan.length)
    : 0;

  return {
    tayyor: statuses.length > 0 && qolgan.length === 0,
    qolgan,
    tugagan: tugagan.length,
    jami: statuses.length,
    ortacha,
    jamiKredit: statuses.reduce((x, s) => x + s.modul.credits, 0),
  };
}
