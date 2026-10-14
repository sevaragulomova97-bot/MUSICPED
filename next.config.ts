import type { NextConfig } from "next";

/**
 * MusicPed butunlay statik sayt sifatida quriladi — serverga ehtiyoj yo'q.
 * GitHub Pages'da loyiha `https://<user>.github.io/<ombor>/` manzilida turgani uchun
 * `basePath` kerak bo'ladi. Uni CI `NEXT_PUBLIC_BASE_PATH` orqali uzatadi,
 * lokalda esa bo'sh qoladi va `npm run dev` oddiy `/` da ishlaydi.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  // Lint alohida `npm run lint` bilan yuriladi (Next 16 da `eslint` kaliti olib tashlangan).
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
