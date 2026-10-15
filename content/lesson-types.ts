import type { Question } from "@/content/diagnostic";
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
