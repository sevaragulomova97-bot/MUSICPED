import type { Metadata } from "next";
import { AdminBosh } from "./admin-bosh";

export const metadata: Metadata = { title: "Admin paneli" };

export default function Page() {
  return <AdminBosh />;
}
