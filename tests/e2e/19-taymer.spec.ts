import { expect, test } from "@playwright/test";
import { bazaniTozala, sessiyaBer, TALABA } from "./yordamchi";

/** «12:34» ko'rinishidagi vaqtni soniyaga aylantiradi. */
function soniya(matn: string) {
  const m = matn.match(/(\d+):(\d{2})/);
  if (!m) throw new Error(`vaqt topilmadi: ${matn}`);
  return Number(m[1]) * 60 + Number(m[2]);
}

test("vaqtli testda sahifani yangilash taymerni qaytadan boshlamaydi", async ({
  page,
}) => {
  test.slow();
  await sessiyaBer(page, TALABA);
  await bazaniTozala(page);
  await page.goto("/topshiriqlar/nota-savodi-test/");
  await page.waitForLoadState("networkidle");

  const taymer = page.locator("main").getByText(/\d+:\d{2}/).first();
  await expect(taymer).toBeVisible();
  const birinchi = soniya((await taymer.textContent()) ?? "");

  // Bir oz kutamiz, so'ng sahifani yangilaymiz.
  await page.waitForTimeout(4000);
  await page.reload({ waitUntil: "networkidle" });

  const ikkinchi = soniya(
    (await page.locator("main").getByText(/\d+:\d{2}/).first().textContent()) ?? "",
  );
  console.log(`birinchi ${birinchi} s -> yangilangandan keyin ${ikkinchi} s`);
  /*
    Kutilgan 4 soniya taymerda ko'rinishi shart. Faqat «kamaygan»
    deyish yetmaydi: taymer qaytadan boshlansa ham sahifa yuklanishi
    bir soniya oladi va qiymat bittaga kamayadi — ya'ni buzuq kod ham
    shunday tekshiruvdan o'tib ketardi.
  */
  expect(birinchi - ikkinchi).toBeGreaterThanOrEqual(4);
});
