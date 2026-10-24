import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { NoteField } from "@/components/decor/note-field";
import { PwaRegister } from "@/components/pwa-register";
import { SessionProvider } from "@/components/session-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MusicPed — musiqa o'qituvchilari uchun ta'lim platformasi",
    template: "%s · MusicPed",
  },
  description:
    "Bo'lajak musiqa o'qituvchilarini shaxsga yo'naltirilgan ta'lim texnologiyalari asosida kasbiy faoliyatga tayyorlash platformasi.",
  applicationName: "MusicPed",
  manifest: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/manifest.webmanifest`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1222" },
  ],
};

/*
  Prop tipi qo'lda yoziladi. Avval Next.js o'zi hosil qiladigan global
  `LayoutProps<"/">` ishlatilardi — u `.next/types/` ga build paytida
  yoziladi. Mahalliy mashinada `.next` papkasi turgani uchun
  `tsc --noEmit` o'tib ketardi, toza checkout da esa yiqilardi va
  **joylash to'xtab qolardi** (CI da tiplarni tekshirish build dan
  oldin yuriladi). Oddiy tip hech narsa yo'qotmaydi.
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uz"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        {/*
          Bezak sozlamasini birinchi chizishdan OLDIN qo'yadi.
          Aks holda effektlarni o'chirgan foydalanuvchi sahifa
          yuklanganda suzuvchi notalarning bir lahzalik miltillashini
          ko'rardi. Skript ataylab kichik va bloklovchi.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{document.documentElement.dataset.effects=localStorage.getItem("musicped.effects.v1")==="off"?"off":"on"}catch(e){}',
          }}
        />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          {/* Fon qatlami — kontentdan oldin chiziladi */}
          <NoteField />
          {/* Kontent fon ustida turishi uchun alohida qatlamga olinadi */}
          <div className="relative z-10">
            <SessionProvider>{children}</SessionProvider>
          </div>
          <PwaRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
