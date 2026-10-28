import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "bn"],
  defaultLocale: "en",
  localePrefix: "always",
  // Always land first-time visitors on English ("/" redirects to "/en"). Without
  // this, next-intl sniffs the browser's Accept-Language header and would send
  // Bangla-language browsers to /bn; visitors switch to Bangla themselves via
  // the language switcher (and their choice is remembered in a cookie).
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];
