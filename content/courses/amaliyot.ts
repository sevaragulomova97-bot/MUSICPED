import type { Course } from "@/content/lesson-types";

/**
 * Pedagogik amaliyot kursi.
 *
 * Kuzatuvdan mustaqil darsgacha. Kurs `content/mentorship.ts` dagi uch
 * bosqich bilan bir mantiqqa quriladi: avval ustoz bilan, keyin yordam
 * bilan, oxirida mustaqil.
 */

export const AMALIYOT: Course = {
  slug: "pedagogik-amaliyot",
  moduleId: "mod-amaliyot",
  title: "Pedagogik amaliyot",
  description: "Kuzatuvdan mustaqil darsgacha: amaliyotning uch bosqichi.",
  lessons: [
    {
      id: "ama-1",
      slug: "dars-kuzatuvi",
      title: "Mavzu 1: Dars kuzatuvi",
      summary: "Tajribali o'qituvchi darsini mezonlar bo'yicha kuzatish.",
      durationMin: 30,
      bloom: "tahlil",
      outcomeId: "on-ama-1",
      area: "metodika",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Kuzatuv — shunchaki darsda o'tirish emas. Aniq mezonlarsiz kuzatuvchi faqat umumiy taassurot oladi va undan o'rganib bo'lmaydi.",
            },
          ],
        },
        {
          id: "tushunchalar",
          title: "Asosiy tushunchalar",
          blocks: [
            {
              kind: "royxat",
              items: [
                "Dars maqsadi aniq aytildimi va o'quvchilarga tushunarlimi",
                "Vaqt bosqichlar bo'yicha qanday taqsimlandi",
                "O'quvchilarning faol ishtiroki qanday ta'minlandi",
                "Qaytar aloqa qanday berildi",
                "Dars yakunida natija tekshirildimi",
              ],
            },
            {
              kind: "eslatma",
              text: "Kuzatuv varaqasi baho qo'yish uchun emas — o'z darsingizga g'oya olish uchun to'ldiriladi.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Bitta musiqa darsini yuqoridagi besh mezon bo'yicha kuzating. Har bir mezonga bitta aniq misol yozing — umumiy gap emas.",
            },
          ],
        },
        {
          id: "test",
          title: "Test",
          blocks: [
            {
              kind: "test",
              questions: [
                {
                  id: "ama1-t1",
                  area: "metodika",
                  bloom: "tahlil",
                  kind: "single",
                  prompt: "Kuzatuv yozuvi qanday bo'lsa foydaliroq?",
                  options: [
                    { id: "a", text: "«Dars qiziqarli o'tdi»" },
                    { id: "b", text: "«O'qituvchi 7-daqiqada savol berib, 4 o'quvchini jalb qildi»" },
                    { id: "c", text: "«O'qituvchi yaxshi tayyorlangan»" },
                    { id: "d", text: "«Sinf intizomli»" },
                  ],
                  correctId: "b",
                  explanation:
                    "Aniq, vaqt va raqam bilan qayd etilgan kuzatuvdan xulosa chiqarish mumkin; umumiy taassurotdan esa yo'q.",
                },
              ],
            },
          ],
        },
        {
          id: "xulosa",
          title: "Xulosa",
          blocks: [
            {
              kind: "royxat",
              items: [
                "Kuzatuv mezonlar bilan olib boriladi",
                "Aniq misol umumiy bahodan qimmatliroq",
                "Maqsad — baho emas, o'z darsingiz uchun g'oya",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Kuzatuvda qaysi mezon bo'yicha yozish qiyin bo'ldi?",
        "Ko'rgan narsangizdan qaysi birini o'z darsingizda qo'llaysiz?",
      ],
    },
  ],
};
