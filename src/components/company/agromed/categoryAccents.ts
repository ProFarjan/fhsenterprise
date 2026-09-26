// Per-category accent classes for MR Agro Medicine. Written as literal Tailwind
// class strings (not composed at runtime) so Tailwind's scanner can find them.
// The brand stays teal; these add gentle per-species colour to product cards
// and category tiles.
export interface CategoryAccent {
  chip: string; // icon chip bg + text
  bar: string; // top accent bar bg
  dot: string; // bullet / marker bg
  text: string; // accent text
}

export const CATEGORY_ACCENTS: Record<string, CategoryAccent> = {
  aqua: { chip: "bg-cyan-100 text-cyan-700", bar: "bg-cyan-500", dot: "bg-cyan-500", text: "text-cyan-700" },
  cattle: { chip: "bg-amber-100 text-amber-700", bar: "bg-amber-500", dot: "bg-amber-500", text: "text-amber-700" },
  poultry: { chip: "bg-orange-100 text-orange-700", bar: "bg-orange-500", dot: "bg-orange-500", text: "text-orange-700" },
  pet: { chip: "bg-violet-100 text-violet-700", bar: "bg-violet-500", dot: "bg-violet-500", text: "text-violet-700" },
};

export const DEFAULT_ACCENT: CategoryAccent = {
  chip: "bg-vet-mist text-vet-teal-dark",
  bar: "bg-vet-teal",
  dot: "bg-vet-lime",
  text: "text-vet-teal-dark",
};

export function accentFor(slug: string): CategoryAccent {
  return CATEGORY_ACCENTS[slug] ?? DEFAULT_ACCENT;
}
