import type { ComponentType, SVGProps } from "react";

// Shared placeholder for admin sections that aren't built yet in this demo.
export default function ComingSoon({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-white/60 px-6 py-16 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue">
        <Icon className="h-8 w-8" />
      </span>
      <h2 className="mt-5 text-lg font-semibold text-neutral-900">{title}</h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-500">{description}</p>
      <span className="mt-6 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
        Coming soon
      </span>
    </div>
  );
}
