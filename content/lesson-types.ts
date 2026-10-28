import type { Question } from "@/content/diagnostic";
import type { MashgulotTuri } from "@/content/fan-dasturi";
import type { InstrumentKind } from "@/lib/domain/instruments";
import type { BloomLevel, DiagnosticArea } from "@/lib/domain/types";

/**
 * Dars kontentining tuzilishi.
 *
 * Har bir dars J. Biggsning konstruktiv moslashuvi bo'yicha modulning aniq
 * o'quv natijasiga (`outcomeId`) bog'lanadi va Blum darajasi ko'rsatiladi —
 * ya'ni "nima o'rgatiladi", "qanday mashq qilinadi" va "qanday baholanadi"
 * bir-biriga mos keladi.
 */

/** Nota yo'li — VexFlow shu ma'lumotdan chizadi. */
export type NotationSpec = {
  clef: "treble" | "bass";
  timeSignature?: string;
  /** `keys` VexFlow formatida: "c/4", "f#/4" */
  notes: Array<{ keys: string[]; duration: string; lyric?: string }>;
};

export type Block =
  | { kind: "matn"; text: string }
  | { kind: "eslatma"; text: string }
  | { kind: "royxat"; items: string[] }
  | {
      kind: "nota";
      caption?: string;
      spec: NotationSpec;
      /** Nota ustiga bosilganda tovush chalinsinmi */
      playable?: boolean;
    }
  | {
      kind: "mashq";
      text: string;
      instrument?: InstrumentKind;
      /** `content/practice.ts` dagi mashq identifikatori */
      exerciseId?: string;
    }
  | { kind: "test"; questions: Question[] };

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

export type Lesson = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  durationMin: number;
  bloom: BloomLevel;
  /** `content/modules.ts` dagi o'quv natijasi */
  outcomeId: string;
  /*
    Quyidagi uch maydon darsni **rasmiy fan dasturiga** bog'laydi
    (`content/fan-dasturi.ts`). Ular ixtiyoriy: platformada dasturdan
    oldin yozilgan darslar ham bor va ular o'z o'rnida qoladi.

    `tn` — dasturdagi ta'lim natijasi kodlari (TN1…TN8). Hozircha
    `outcomeId` dan alohida turadi: modulning o'z natijalari darslar
    va topshiriqlar bilan to'liq qoplangan, TN kodlariga esa hamma
    30 ta ma'ruza yozilgandan keyin o'tiladi — aks holda qoplanmagan
    natija paydo bo'lib, kontent tekshiruvi yiqilardi.
  */
  /** Fan dasturidagi mavzu kodi: "M1", "A7", "MT3" */
  dasturKodi?: string;
  /** Dasturdagi mashg'ulot turi */
  dasturTuri?: MashgulotTuri;
  /** Dasturda ajratilgan soat */
  dasturSoati?: number;
  /** Dasturdagi ta'lim natijalari: ["TN1", "TN3"] */
  tn?: string[];
  area: DiagnosticArea;
  sections: Section[];
  /** D. Schön — dars oxiridagi refleksiya savollari */
  reflection: string[];
};

export type Course = {
  slug: string;
  moduleId: string;
  title: string;
  description: string;
  lessons: Lesson[];
};
