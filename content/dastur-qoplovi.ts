import { BARCHA_DARSLAR } from "@/content/courses";
import {
  DASTUR_MAVZULARI,
  type MashgulotTuri,
  soatJami,
} from "@/content/fan-dasturi";

/**
 * Fan dasturining platformadagi **qoplovi**.
 *
 * Bu modul bitta savolga javob berad: dasturdagi mashg'ulot platformada
 * haqiqatan yozilganmi?
 *
 * Ilgari `/dastur` sahifasidagi «Platformada» ustuni `soatJami()` ni
 * ko'rsatardi — u esa dasturning o'z hujjatidan hisoblanadi, ya'ni
 * «Dasturda» ustuni bilan har doim teng chiqardi. Ustun yashil turardi,
 * lekin hech narsani tekshirmasdi. Endi soat platformada yozilgan
 * darslardan hisoblanadi: kontent yo'q bo'lsa, ustun qizil bo'ladi.
 */

/** Platformada shu turda yozilgan mashg'ulot kodlari (takrorsiz). */
export function qoplanganKodlar(tur: MashgulotTuri): string[] {
  const kodlar = new Set<string>();
  for (const dars of BARCHA_DARSLAR) {
    if (dars.dasturTuri === tur && dars.dasturKodi) kodlar.add(dars.dasturKodi);
  }
  return [...kodlar];
}

/** Platformada shu turda yozilgan soat. */
export function platformaSoati(tur: MashgulotTuri): number {
  let soat = 0;
  for (const dars of BARCHA_DARSLAR) {
    if (dars.dasturTuri === tur) soat += dars.dasturSoati ?? 0;
  }
  return soat;
}

export type TurQoplovi = {
  tur: MashgulotTuri;
  /** Dasturdagi soat */
  dasturda: number;
  /** Platformada yozilgan soat */
  platformada: number;
  /** Dasturdagi mavzular soni */
  mavzular: number;
  /** Platformada yozilgan mavzular soni */
  yozilgan: number;
  /** Hali yozilmagan mavzu kodlari */
  qolgan: string[];
};

export function turQoplovi(tur: MashgulotTuri): TurQoplovi {
  const mavzular = DASTUR_MAVZULARI.filter((m) => m.tur === tur);
  const bor = new Set(qoplanganKodlar(tur));
  return {
    tur,
    dasturda: soatJami(tur),
    platformada: platformaSoati(tur),
    mavzular: mavzular.length,
    yozilgan: mavzular.filter((m) => bor.has(m.kod)).length,
    qolgan: mavzular.filter((m) => !bor.has(m.kod)).map((m) => m.kod),
  };
}
