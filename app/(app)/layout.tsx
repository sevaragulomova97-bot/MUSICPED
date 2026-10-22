import { AppShell } from "@/components/layout/app-shell";
import { StorageGuard } from "@/components/storage-guard";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell>
      {/*
        Saqlash bloklangan bo'lsa, interfeys o'rniga tushuntirish
        chiqadi: serversiz platformada saqlashsiz hech narsa ishlamaydi
        va «Yuklanmoqda…» da osilib qolgan sahifa foydalanuvchini
        chalg'itadi.
      */}
      <StorageGuard>{children}</StorageGuard>
    </AppShell>
  );
}
