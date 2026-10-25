import { expect, test } from "@playwright/test";
import { bazaniTozala, sessiyaBer, TALABA } from "./yordamchi";

test("eski (v1) bazadagi ma'lumot yangi sxemada yo'qolmaydi", async ({ page }) => {
  test.slow();
  await sessiyaBer(page, TALABA);
  await bazaniTozala(page);

  await page.addScriptTag({ path: "node_modules/dexie/dist/dexie.js" });
  const yozildi = await page.evaluate(async (uid) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const D = (window as any).Dexie;
    const eski = new D("musicped");
    eski.version(1).stores({
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
    const hozir = new Date().toISOString();
    await eski.profiles.put({
      id: uid, fullName: "Sinov Talabasi", role: "TALABA",
      group: "MT-24", startedAt: hozir, updatedAt: hozir,
    });
    await eski.diagnostics.put({
      id: `${uid}:boshlangich`, userId: uid, kind: "boshlangich",
      variant: "A", answers: {},
      scores: { nazariya: 70, ijro: 60, metodika: 80, texnologiya: 50 },
      overall: 65, completedAt: hozir,
    });
    await eski.submissions.put({
      id: "eski-ish-1", userId: uid, taskId: "nota-savodi-test",
      taskType: "test", area: "nazariya", bloom: "bilish", score: 88,
      submittedAt: hozir, gradedAt: hozir, answers: { matn: "eski javob" },
    });
    await eski.progress.put({
      id: `${uid}:nota-savodi`, userId: uid, lessonId: "nota-savodi",
      courseSlug: "musiqa-nazariyasi", percent: 100,
      completedAt: hozir, updatedAt: hozir,
    });
    const son = {
      profiles: await eski.profiles.count(),
      submissions: await eski.submissions.count(),
      versiya: eski.verno,
    };
    eski.close();
    return son;
  }, TALABA.id);
  expect(yozildi.profiles).toBe(1);

  // Endi ilova o'z sxemasi (v3) bilan ochadi — Dexie migratsiya qiladi.
  await page.goto("/natijalar/");
  await page.waitForLoadState("networkidle");
  await expect(page.locator("main")).toContainText("88%");
  await expect(page.locator("main")).toContainText(/Bajarilgan topshiriqlar/);

  // Diagnostika natijasi ham o'z joyida.
  await expect(page.locator("main")).toContainText(/Yo'nalishlar bo'yicha/);

  // Yangi jadvallar (v2, v3) ham ishlaydi — mentorlik yozuvi qo'shiladi.
  const yangi = await page.evaluate(async () => {
    const baza = await new Promise<IDBDatabase>((res, rej) => {
      const r = indexedDB.open("musicped");
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    const nomlar = [...baza.objectStoreNames];
    baza.close();
    return nomlar;
  });
  expect(yangi).toContain("datasets");
  expect(yangi).toContain("mentorship");
  expect(yangi).toContain("submissions");
});
