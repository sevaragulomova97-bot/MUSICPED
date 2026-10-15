import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uz"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider>
          <SessionProvider>{children}</SessionProvider>
          <PwaRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
