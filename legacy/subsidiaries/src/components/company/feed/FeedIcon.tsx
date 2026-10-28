import type { FeedIconName } from "@/types/feed";

// Inline stroke icons for the MR Feed subdomain. Keyed by name so content data
// can reference an icon without importing components. Scoped to feed.
const PATHS: Record<FeedIconName, React.ReactNode> = {
  flask: (
    <>
      <path d="M9 3h6M10 3v6L5.5 17a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3" />
      <path d="M7.5 14h9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20c-4 0-7-3-7-7 0-6 8-9 15-9 0 8-3 16-8 16-2 0-4-1-4-4 0-3 4-5 8-6" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13-1.5 7L12 18l4.5 2L15 13" />
    </>
  ),
  mill: (
    <>
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M9 21v-6h6v6M4 9h16" />
    </>
  ),
  growth: (
    <>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 4h6v6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  poultry: (
    <>
      <path d="M8 20c-2.5 0-4-2-4-4.5S6 10 9 10c0-3 2.5-5 5-5 .5 0 1 .5 1 1.2 1.5.3 2.5 1.4 2.5 2.8 0 .8-.4 1.5-1 2 1 .8 1.5 2 1.5 3.5 0 3-2.5 5.5-5.5 5.5z" />
      <path d="M15 6.5 17.5 5M9 20l1-3M14 20l1-3" />
    </>
  ),
  cattle: (
    <>
      <path d="M5 8c-1.5 0-3-1-3-3 2 0 3 1 3.5 2M19 8c1.5 0 3-1 3-3-2 0-3 1-3.5 2" />
      <path d="M5 6c0 5 3 12 7 12s7-7 7-12" />
      <path d="M9.5 12h.01M14.5 12h.01M10 16c.6.6 1.3 1 2 1s1.4-.4 2-1" />
    </>
  ),
  fish: (
    <>
      <path d="M3 12c3-4 7-6 11-6 3 0 5 1.5 7 4-2 2.5-4 4-7 4-4 0-8-2-11-6z" />
      <path d="M15 6c-1 2-1 4 0 8M6.5 10.5h.01" />
    </>
  ),
};

export default function FeedIcon({
  name,
  className = "h-6 w-6",
}: {
  name: FeedIconName;
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
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  );
}
