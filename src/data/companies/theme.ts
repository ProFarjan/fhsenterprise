import type { CompanyTheme } from "@/types/company";

// One accent color per company sector, keyed by subdomain. Written as
// literal Tailwind class strings (not composed at runtime) so Tailwind's
// scanner can find them.
export const COMPANY_THEMES: Record<string, CompanyTheme> = {
  agro: {
    accentBg: "bg-green-600",
    accentBgHover: "hover:bg-green-500",
    accentText: "text-green-700",
    accentBorder: "border-green-600",
    heroFrom: "from-green-950",
  },
  "filling-station": {
    accentBg: "bg-blue-600",
    accentBgHover: "hover:bg-blue-500",
    accentText: "text-blue-700",
    accentBorder: "border-blue-600",
    heroFrom: "from-blue-950",
  },
  "agro-medicine": {
    accentBg: "bg-emerald-600",
    accentBgHover: "hover:bg-emerald-500",
    accentText: "text-emerald-700",
    accentBorder: "border-emerald-600",
    heroFrom: "from-emerald-950",
  },
  feed: {
    accentBg: "bg-amber-600",
    accentBgHover: "hover:bg-amber-500",
    accentText: "text-amber-700",
    accentBorder: "border-amber-600",
    heroFrom: "from-amber-950",
  },
  lube: {
    accentBg: "bg-red-600",
    accentBgHover: "hover:bg-red-500",
    accentText: "text-red-700",
    accentBorder: "border-red-600",
    heroFrom: "from-neutral-950",
  },
  mahin: {
    accentBg: "bg-orange-600",
    accentBgHover: "hover:bg-orange-500",
    accentText: "text-orange-700",
    accentBorder: "border-orange-600",
    heroFrom: "from-slate-950",
  },
  rahim: {
    accentBg: "bg-cyan-600",
    accentBgHover: "hover:bg-cyan-500",
    accentText: "text-cyan-700",
    accentBorder: "border-cyan-600",
    heroFrom: "from-slate-950",
  },
};
