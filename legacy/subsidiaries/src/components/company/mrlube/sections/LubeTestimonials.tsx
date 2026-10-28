import type { LubeContent } from "@/types/mrlube";

function QuoteMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-lube-red/40">
      <path d="M7 7h4v4c0 3-1.5 5-4 6v-2c1.3-.6 2-1.6 2-3H7V7zm8 0h4v4c0 3-1.5 5-4 6v-2c1.3-.6 2-1.6 2-3h-2V7z" />
    </svg>
  );
}

// Customer testimonials — three quote cards on a warm-white band.
export default function LubeTestimonials({ testimonials }: { testimonials: LubeContent["testimonials"] }) {
  return (
    <section className="bg-lube-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-lube text-3xl font-bold uppercase leading-tight tracking-tight text-lube-ink sm:text-4xl">
            {testimonials.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-lube-slate">{testimonials.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-lg border border-lube-line bg-white p-8 shadow-sm"
            >
              <QuoteMark />
              <blockquote className="mt-4 flex-1 text-base leading-7 text-lube-ink/80">“{item.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-lube-line pt-5">
                <p className="font-lube font-bold uppercase tracking-wide text-lube-ink">{item.name}</p>
                <p className="mt-0.5 text-sm text-lube-red">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
