import type { Metadata } from "next";
import { OqituvchiBosh } from "./oqituvchi-bosh";

export const metadata: Metadata = { title: "O'qituvchi kabineti" };

export default function Page() {
  return <OqituvchiBosh />;
}
