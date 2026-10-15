"use client";

import Dexie, { type Table } from "dexie";
import type {
  AreaScores,
  BloomLevel,
  DiagnosticArea,
  DiagnosticKind,
  ExperimentGroup,
  Role,
  StudentProfileType,
  TaskType,
} from "@/lib/domain/types";
import { InstrumentKind } from "@/lib/domain/instruments";
import type { LearningPathItem } from "@/lib/personalization";
import type { TransferBundle } from "@/lib/transfer";

/**
 * Brauzerdagi ma'lumotlar bazasi (IndexedDB).
 *
 * Bu — saqlash qatlamining yagona joyi. Qolgan kod faqat `lib/db/repo.ts`
 * orqali ishlaydi va Dexie haqida bilmaydi; shu sababli kelajakda saqlash
 * usuli almashtirilsa (masalan serverli API ga o'tilsa), faqat shu papka
 * qayta yoziladi.
 *
 * Barcha jadvallarda `userId` bor — bitta brauzerda bir nechta profil bo'lishi
 * mumkin (talaba, o'qituvchi, admin) va ularning ma'lumoti aralashmasligi kerak.
 */

export type StoredProfile = {
  id: string;
  fullName: string;
  role: Role;
  group?: string;
  /** ISO sana */
  startedAt?: string;
  direction?: string;
  /** Tajriba-sinov uchun (faqat talabalarda) */
  experimentGroup?: ExperimentGroup;
  /** Namunaviy ma'lumotdan kelganmi — eksportda ajratish uchun */
  demo?: boolean;
  createdAt: string;
  updatedAt: string;
};

export type StoredDiagnostic = {
  id: string;
  userId: string;
  kind: DiagnosticKind;
  scores: AreaScores;
  profileType: StudentProfileType;
  /** Umumiy foiz */
  overall: number;
  completedAt: string;
};

export type StoredLearningPath = {
  id: string;
  userId: string;
  /** Qaysi diagnostikadan kelib chiqqan */
  diagnosticId: string;
  profileType: StudentProfileType;
  strengths: DiagnosticArea[];
  weaknesses: DiagnosticArea[];
  items: LearningPathItem[];
  recommendations: string[];
  generatedAt: string;
};

export type StoredProgress = {
  /** `${userId}:${lessonId}` */
  id: string;
  userId: string;
  lessonId: string;
  courseSlug: string;
  /** 0–100 */
  percent: number;
  completedAt?: string;
  updatedAt: string;
};

export type StoredSubmission = {
  id: string;
  userId: string;
  taskId: string;
  taskType: TaskType;
  area: DiagnosticArea;
  bloom: BloomLevel;
  /** 0–100, o'qituvchi baholamaguncha `undefined` */
  score?: number;
  answers?: Record<string, unknown>;
  teacherComment?: string;
  submittedAt: string;
  gradedAt?: string;
};

export type StoredReflection = {
  id: string;
  userId: string;
  /** Qaysi topshiriq yoki darsga tegishli */
  contextId: string;
  question: string;
  answer: string;
  createdAt: string;
};

export type StoredRecording = {
  id: string;
  userId: string;
  instrument: InstrumentKind;
  title: string;
  /** Chalingan nota hodisalari (JSON) — audio fayl o'rniga yengil format */
  events: unknown;
  durationMs: number;
  createdAt: string;
};

export type StoredPortfolioItem = {
  id: string;
  userId: string;
  category: "ishlar" | "ishlanmalar" | "ijodiy" | "sertifikat";
  title: string;
  description?: string;
  fileName?: string;
  mimeType?: string;
  /** Fayl mazmuni — IndexedDB Blob'ni to'g'ridan-to'g'ri saqlaydi */
  blob?: Blob;
  sizeBytes?: number;
  createdAt: string;
};

export type StoredActivity = {
  id: string;
  userId: string;
  type: string;
  message: string;
  createdAt: string;
};

/**
 * O'qituvchi import qilgan talaba ma'lumoti.
 *
 * Server yo'q, shuning uchun o'qituvchining kabineti faqat **o'ziga
 * berilgan** fayllardan iborat. Fayl mazmuni butunligicha (`bundle`)
 * saqlanadi: shu sababli o'qituvchi baho qo'yganda uni qaytib eksport
 * qilish uchun hamma narsa joyida turadi.
 *
 * `ownerId` — o'qituvchining profili. Bitta brauzerda bir nechta o'qituvchi
 * bo'lsa, ularning ma'lumoti aralashmaydi.
 */
export type StoredDataset = {
  /** `${ownerId}:${studentId}` — bitta talaba ikki marta qo'shilmaydi */
  id: string;
  ownerId: string;
  studentId: string;
  studentName: string;
  group?: string;
  experimentGroup?: ExperimentGroup;
  bundle: TransferBundle;
  importedAt: string;
};

export class MusicPedDatabase extends Dexie {
  profiles!: Table<StoredProfile, string>;
  diagnostics!: Table<StoredDiagnostic, string>;
  learningPaths!: Table<StoredLearningPath, string>;
  progress!: Table<StoredProgress, string>;
  submissions!: Table<StoredSubmission, string>;
  reflections!: Table<StoredReflection, string>;
  recordings!: Table<StoredRecording, string>;
  portfolio!: Table<StoredPortfolioItem, string>;
  activity!: Table<StoredActivity, string>;
  datasets!: Table<StoredDataset, string>;

  constructor() {
    super("musicped");

    // Indekslar: birinchi ustun — asosiy kalit, qolganlari — qidiruv indekslari.
    // Keyingi bosqichlarda jadval qo'shilsa, `version(2)` bilan migratsiya yoziladi.
    this.version(1).stores({
      profiles: "id, role, group, experimentGroup",
      diagnostics: "id, userId, kind, completedAt, [userId+kind]",
      learningPaths: "id, userId, generatedAt",
      progress: "id, userId, lessonId, courseSlug, [userId+courseSlug]",
      submissions: "id, userId, taskId, taskType, submittedAt, [userId+taskId]",
      reflections: "id, userId, contextId, createdAt",
      recordings: "id, userId, instrument, createdAt",
      portfolio: "id, userId, category, createdAt",
      activity: "id, userId, createdAt",
    });

    // B5: o'qituvchi kabineti uchun import qilingan talaba ma'lumotlari.
    // Eski jadvallar o'zgarmadi, shuning uchun migratsiya ma'lumot
    // ko'chirishni talab qilmaydi — Dexie yangi jadvalni o'zi qo'shadi.
    this.version(2).stores({
      datasets: "id, ownerId, studentId, experimentGroup, [ownerId+studentId]",
    });
  }
}

let instance: MusicPedDatabase | null = null;

/**
 * Bazaga yagona nuqtadan kirish.
 *
 * Dexie faqat brauzerda ishlaydi, shuning uchun modul darajasida emas, talab
 * bo'yicha yaratiladi — aks holda statik build paytida (Node muhitida) xato beradi.
 */
export function db(): MusicPedDatabase {
  if (typeof window === "undefined") {
    throw new Error("Ma'lumotlar bazasiga faqat brauzerda murojaat qilinadi");
  }
  instance ??= new MusicPedDatabase();
  return instance;
}
