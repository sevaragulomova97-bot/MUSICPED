import {
  Award,
  BarChart3,
  BookOpen,
  ClipboardList,
  FolderOpen,
  GraduationCap,
  Home,
  type LucideIcon,
  Music4,
  Settings,
  Shield,
  Users,
  UserRound,
} from "lucide-react";

export type Role = "TALABA" | "OQITUVCHI" | "ADMIN";

export const ROLE_LABEL: Record<Role, string> = {
  TALABA: "Talaba",
  OQITUVCHI: "O'qituvchi",
  ADMIN: "Administrator",
};

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  /** Mobil pastki panelda ko'rinadimi */
  mobile?: boolean;
  /** Pastki panelda joy tor — uzun nomlar uchun qisqa variant */
  shortLabel?: string;
};

const TALABA_NAV: NavItem[] = [
  { href: "/bosh-sahifa", label: "Bosh sahifa", icon: Home, mobile: true },
  { href: "/kurslar", label: "O'quv kurslari", icon: BookOpen, mobile: true, shortLabel: "Kurslar" },
  { href: "/asboblar", label: "Musiqa asboblari", icon: Music4, mobile: true, shortLabel: "Asboblar" },
  { href: "/topshiriqlar", label: "Topshiriqlar", icon: ClipboardList, mobile: true },
  { href: "/natijalar", label: "Baholash", icon: BarChart3 },
  { href: "/portfolio", label: "Portfolio", icon: FolderOpen },
  { href: "/profil", label: "Profil", icon: UserRound, mobile: true },
];

const OQITUVCHI_NAV: NavItem[] = [
  { href: "/oqituvchi", label: "Bosh sahifa", icon: Home, mobile: true },
  { href: "/oqituvchi/talabalar", label: "Talabalar", icon: Users, mobile: true },
  { href: "/oqituvchi/topshiriqlar", label: "Topshiriqlar", icon: ClipboardList, mobile: true, shortLabel: "Ishlar" },
  { href: "/oqituvchi/mentorlik", label: "Mentorlik", icon: GraduationCap },
  { href: "/oqituvchi/tadqiqot", label: "Tadqiqot", icon: BarChart3, mobile: true },
  { href: "/profil", label: "Profil", icon: UserRound, mobile: true },
];

const ADMIN_NAV: NavItem[] = [
  { href: "/admin", label: "Bosh sahifa", icon: Home, mobile: true },
  { href: "/admin/foydalanuvchilar", label: "Foydalanuvchilar", icon: Users, mobile: true, shortLabel: "Hisoblar" },
  { href: "/admin/kontent", label: "Kontent", icon: BookOpen, mobile: true },
  { href: "/admin/jurnal", label: "Faoliyat jurnali", icon: Shield, mobile: true, shortLabel: "Jurnal" },
  { href: "/profil", label: "Profil", icon: UserRound, mobile: true },
];

export const NAV_BY_ROLE: Record<Role, NavItem[]> = {
  TALABA: TALABA_NAV,
  OQITUVCHI: OQITUVCHI_NAV,
  ADMIN: ADMIN_NAV,
};

export const SETTINGS_NAV: NavItem = {
  href: "/sozlamalar",
  label: "Sozlamalar",
  icon: Settings,
};

export const CERTIFICATE_NAV: NavItem = {
  href: "/portfolio/sertifikatlar",
  label: "Sertifikatlar",
  icon: Award,
};

const normalize = (p: string) => p.replace(/\/+$/, "") || "/";

/**
 * Joriy yo'lga mos keladigan nav bandini topadi.
 *
 * Eng uzun mos keluvchi `href` g'olib bo'ladi — shu sababli `/oqituvchi/talabalar`
 * da turganda faqat "Talabalar" yonadi, "Bosh sahifa" (`/oqituvchi`) emas.
 * Mos keluvchi topilmasa `null` qaytadi.
 */
export function findActiveHref(pathname: string, items: NavItem[]): string | null {
  const current = normalize(pathname);
  let best: string | null = null;

  for (const item of items) {
    const target = normalize(item.href);
    const matches = current === target || current.startsWith(`${target}/`);
    if (!matches) continue;
    if (best === null || target.length > normalize(best).length) {
      best = item.href;
    }
  }

  return best;
}
