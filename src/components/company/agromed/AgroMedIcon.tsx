import type { AgroMedIconName } from "@/types/agromed";

// Line icons for the MR Agro Medicine UI (categories, features, product cards).
// Decorative interface glyphs, not photographic content — kept as inline SVG,
// consistent with the other company subdomains' icon sets.
const PATHS: Record<AgroMedIconName, React.ReactNode> = {
  aqua: (
    <>
      <path d="M5 12c2.5-2 4.5-2 7 0s4.5 2 7 0" />
      <path d="M5 17c2.5-2 4.5-2 7 0s4.5 2 7 0" />
      <path d="M14 7.5c0-1.5 1.2-3 3-3-.3 1.8.6 3 2 3.5-1.5 1-3 .8-3.8-.2" />
    </>
  ),
  cattle: (
    <>
      <path d="M4 8c0-2 1.5-3 3-3 .5 1.5 2 2 3 2h4c1 0 2.5-.5 3-2 1.5 0 3 1 3 3 0 1.5-1 2.5-2 3v3a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-3c-1-.5-2-1.5-2-3z" />
      <path d="M10 14h.01M14 14h.01" />
    </>
  ),
  poultry: (
    <>
      <path d="M14 20c-3.3 0-6-2.7-6-6 0-3 2-5 2-5-.5-1.5.5-3 2-3.5.3 1.2 1.3 1.8 2.3 1.9C17 7.7 19 10.5 19 14c0 3.3-2 6-5 6z" />
      <path d="M8 14H5l2-2M12 8.5V7" />
    </>
  ),
  pet: (
    <>
      <circle cx="6.5" cy="10" r="1.6" />
      <circle cx="11" cy="7.5" r="1.6" />
      <circle cx="16" cy="8.5" r="1.6" />
      <circle cx="19" cy="12.5" r="1.4" />
      <path d="M12.5 12c-2 0-3.6 1.3-4.3 3-.5 1.3.4 2.7 1.8 2.7.9 0 1.6-.4 2.5-.4s1.6.4 2.5.4c1.4 0 2.3-1.4 1.8-2.7-.7-1.7-2.3-3-4.3-3z" />
    </>
  ),
  vaccine: (
    <>
      <path d="m14 3 3 3M12 5l5 5" />
      <path d="m15.5 8.5-7 7-2.5 1L5 19l-1 1M9 12l2 2" />
      <path d="M6.5 14.5 4 17" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6l-4.5 8A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L14 9V3" />
      <path d="M8 15h8" />
    </>
  ),
  leaf: (
    <>
      <path d="M12 21c-4.5 0-8-3.5-8-8 0-6 8-10 8-10s8 4 8 10c0 4.5-3.5 8-8 8z" />
      <path d="M12 21V9" />
    </>
  ),
  pulse: (
    <>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
    </>
  ),
  truck: (
    <>
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4l4 3v3h-8z" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13.5-1.5 7L12 18l4.5 2.5L15 13.5" />
      <path d="m10 9 1.3 1.3L14.5 7" />
    </>
  ),
};

export default function AgroMedIcon({
  name,
  className = "h-6 w-6",
}: {
  name: AgroMedIconName;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
