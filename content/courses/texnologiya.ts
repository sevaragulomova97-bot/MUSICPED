import type { Course } from "@/content/lesson-types";

/**
 * Musiqa texnologiyalari kursi.
 *
 * Faqat erkin litsenziyali dasturlar tavsiya etiladi (MuseScore, Audacity):
 * platformaning o'zi kabi, ular ham hech qanday obuna talab qilmaydi.
 */

export const TEXNOLOGIYA: Course = {
  slug: "musiqa-texnologiyalari",
  moduleId: "mod-texnologiya",
  title: "Musiqa texnologiyalari",
  description: "Raqamli vositalar va ularni dars jarayonida qo'llash.",
  lessons: [
    {
      id: "tex-1",
      slug: "raqamli-vositalar",
      title: "Mavzu 1: Darsda raqamli vositalar",
      summary: "Nota yozuv dasturlari, audio tahrir va ularni tanlash mezonlari.",
      durationMin: 25,
      bloom: "baholash",
      outcomeId: "on-tex-3",
      area: "ijodkorlik",
      sections: [
        {
          id: "kirish",
          title: "Kirish",
          blocks: [
            {
              kind: "matn",
              text: "Raqamli vosita darsni avtomatik yaxshilamaydi. U faqat aniq o'quv maqsadiga xizmat qilgandagina foydali bo'ladi.",
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
                "Nota yozuv dasturlari — partitura tayyorlash",
                "DAW — yozib olish, tahrirlash, aranjirovka",
                "Virtual cholg'ular — cholg'u bo'lmaganda mashq qilish",
                "Interaktiv testlar — tezkor qaytar aloqa",
              ],
            },
            {
              kind: "eslatma",
              text: "Vositani tanlashdan oldin savol bering: bu o'quvchiga nimani o'rganishga yordam beradi? Javob topilmasa — vosita kerak emas.",
            },
          ],
        },
        {
          id: "mashq",
          title: "Amaliy mashq",
          blocks: [
            {
              kind: "mashq",
              text: "Virtual pianinoda qisqa kuy yarating, yozib oling va portfolioga saqlang. So'ng uni darsda qanday ishlatishingizni yozing.",
              instrument: "pianino",
              exerciseId: "p-oz-kuy",
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
                  id: "tex1-t1",
                  area: "metodika",
                  bloom: "baholash",
                  kind: "single",
                  prompt: "Raqamli vositani tanlashda asosiy mezon nima?",
                  options: [
                    { id: "a", text: "Zamonaviyligi" },
                    { id: "b", text: "O'quv maqsadiga mosligi" },
                    { id: "c", text: "Narxi" },
                    { id: "d", text: "O'quvchilarga yoqishi" },
                  ],
                  correctId: "b",
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
                "Vosita maqsadga xizmat qiladi, aksincha emas",
                "Virtual cholg'u — cholg'u yo'qligida real yechim",
                "Tezkor qaytar aloqa o'rganishni tezlashtiradi",
              ],
            },
          ],
        },
      ],
      reflection: [
        "Qaysi vositani o'z darsingizda sinab ko'rmoqchisiz?",
        "Vositasiz ham shu maqsadga erishib bo'ladimi?",
      ],
    },
  ],
};
