import type { Metadata } from "next";
import { DoiraSahifa } from "./doira-sahifa";

export const metadata: Metadata = { title: "Virtual doira" };

export default function Page() {
  return <DoiraSahifa />;
}
