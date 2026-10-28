import type { FillingIconName } from "@/types/filling";

// Small line icons for the MR Filling Station UI (service cards, feature list).
// These are decorative interface glyphs, not photographic content, so they stay
// as inline SVG — consistent with MR Agro's AgroIcon.
const PATHS: Record<FillingIconName, React.ReactNode> = {
  fuel: (
    <>
      <path d="M4 20V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" />
      <path d="M3 20h12" />
      <path d="M14 9h2.5a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8.5L18 5" />
      <path d="M7 8h5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  spark: (
    <>
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
    </>
  ),
  wash: (
    <>
      <path d="M5 13V9a3 3 0 0 1 3-3h4l3 3h1a2 2 0 0 1 2 2v2" />
      <circle cx="8" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M10 17h5" />
      <path d="M4 3c0 1-1 1.5-1 2.5" />
      <path d="M7 2c0 1-1 1.5-1 2.5" />
    </>
  ),
  store: (
    <>
      <path d="M4 9h16l-1-4H5z" />
      <path d="M5 9v10h14V9" />
      <path d="M9 19v-5h6v5" />
    </>
  ),
  oil: (
    <>
      <path d="M6 21h9a3 3 0 0 0 3-3v-5H8v5a3 3 0 0 1-3 3H4" />
      <path d="M8 13V9h7l3-3" />
      <path d="M12 9V5h3" />
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
  gauge: (
    <>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="m12 14 4-4" />
      <circle cx="12" cy="14" r="1.4" />
    </>
  ),
  leaf: (
    <>
      <path d="M12 21c-4.5 0-8-3.5-8-8 0-6 8-10 8-10s8 4 8 10c0 4.5-3.5 8-8 8z" />
      <path d="M12 21V9" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

export default function FillingIcon({
  name,
  className = "h-6 w-6",
}: {
  name: FillingIconName;
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
