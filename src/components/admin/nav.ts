import type { ComponentType, SVGProps } from "react";
import {
  CompaniesIcon,
  DashboardIcon,
  FaqIcon,
  MediaIcon,
  MessagesIcon,
  ProductsIcon,
  SettingsIcon,
} from "./icons";

export type NavItem = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  badge?: number;
};

// The admin sidebar's navigation. Only "Dashboard" is a full page in this
// demo; the rest route to scaffolded placeholder pages.
export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: DashboardIcon },
  { label: "Companies", href: "/admin/companies", icon: CompaniesIcon },
  { label: "Products", href: "/admin/products", icon: ProductsIcon },
  { label: "Media & News", href: "/admin/media", icon: MediaIcon },
  { label: "FAQ", href: "/admin/faq", icon: FaqIcon },
  { label: "Messages", href: "/admin/messages", icon: MessagesIcon, badge: 4 },
  { label: "Settings", href: "/admin/settings", icon: SettingsIcon },
];
