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
};

// The admin sidebar's navigation. The Messages unread badge is not part of
// this list — it is live data, passed to the Sidebar by the (panel) layout.
export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: DashboardIcon },
  { label: "Companies", href: "/admin/companies", icon: CompaniesIcon },
  { label: "Products", href: "/admin/products", icon: ProductsIcon },
  { label: "Media & News", href: "/admin/media", icon: MediaIcon },
  { label: "FAQ", href: "/admin/faq", icon: FaqIcon },
  { label: "Messages", href: "/admin/messages", icon: MessagesIcon },
  { label: "Settings", href: "/admin/settings", icon: SettingsIcon },
];
