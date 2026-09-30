import Image from "next/image";

export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <header className="relative isolate flex min-h-[400px] items-end overflow-hidden">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-40 lg:px-8 lg:pb-24">
        {eyebrow && (
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {eyebrow}
          </div>
        )}
        <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-200">{description}</p>
        )}
      </div>
    </header>
  );
}
