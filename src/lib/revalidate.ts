import { revalidatePath } from "next/cache";
import { routing } from "@/i18n/routing";

// Invalidates the same public path in every locale ("/" is the homepage), so a
// change made in the admin shows up on both /bn/... and /en/... immediately.
export function revalidateLocalized(...paths: string[]) {
  for (const locale of routing.locales) {
    for (const path of paths) {
      revalidatePath(path === "/" ? `/${locale}` : `/${locale}${path}`);
    }
  }
}
