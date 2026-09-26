import type { AgroIconName } from "@/types/agro";

// Thin line-icon set for the MR Agro benefit features. One <path> per name,
// drawn on a shared 24x24 stroke grid (same approach as Stats.tsx).
const PATHS: Record<AgroIconName, string> = {
  leaf: "M12 3c4.5 1.5 7.5 5.5 7.5 9.75A7.5 7.5 0 0 1 12 20.25a7.5 7.5 0 0 1-7.5-7.5C4.5 8.5 7.5 4.5 12 3Zm0 3v11.25",
  price:
    "M12 6v12m3-9.75a2.25 2.25 0 0 0-2.25-2.25h-1.5A2.25 2.25 0 0 0 9 8.25c0 1.24 1.01 2.25 2.25 2.25h1.5A2.25 2.25 0 0 1 15 12.75 2.25 2.25 0 0 1 12.75 15h-1.5A2.25 2.25 0 0 1 9 12.75",
  seedling:
    "M12 21v-7.5m0 0c0-2.9-2.35-5.25-5.25-5.25H4.5v.75A5.25 5.25 0 0 0 9.75 14.25H12Zm0 0c0-2.9 2.35-5.25 5.25-5.25h2.25v.75A5.25 5.25 0 0 1 14.25 15H12Z",
  growth:
    "M3 17.25 9 11.25l3.75 3.75L21 6.75M21 6.75h-5.25M21 6.75V12",
  shield:
    "M11.998 3.75 4.5 6v5.25c0 4.5 3.2 7.35 7.5 9 4.3-1.65 7.5-4.5 7.5-9V6l-7.502-2.25ZM9.75 12l1.5 1.5 3-3.75",
  report:
    "M19.5 14.25v-2.63c0-1.02-.39-2-1.09-2.74L14.7 5.1a2.25 2.25 0 0 0-1.64-.71H6.75A2.25 2.25 0 0 0 4.5 6.63v12.74a2.25 2.25 0 0 0 2.25 2.25h9m-6.75-9h4.5m-4.5 3h4.5",
  truck:
    "M8.25 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm10.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-15-3V6.75A1.5 1.5 0 0 1 5.25 5.25h9A1.5 1.5 0 0 1 15.75 6.75v9m0-6h3l2.25 3v3.75h-2.25m-3.75 0h-9",
  handshake:
    "m11.25 9 2.25-2.25a1.59 1.59 0 0 1 2.25 0l3 3m-4.5 3 1.5 1.5m-3.75.75 1.5 1.5M3.75 9l3-3a1.59 1.59 0 0 1 2.25 0L15 12l-1.5 1.5-2.25-2.25-3 3a1.59 1.59 0 0 1-2.25 0L3.75 12Z",
};

export default function AgroIcon({
  name,
  className = "h-6 w-6",
}: {
  name: AgroIconName;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={PATHS[name]} />
    </svg>
  );
}
