import type { MahinContent } from "@/types/mahin";

function QuoteMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-mahin-flame/30">
      <path d="M7 7h4v4c0 3-1.5 5-4 6v-2c1.3-.6 2-1.6 2-3H7V7zm8 0h4v4c0 3-1.5 5-4 6v-2c1.3-.6 2-1.6 2-3h-2V7z" />
    </svg>
  );
}

// Customer testimonials — three quote cards on a white band.
export default function MahinTestimonials({ testimonials }: { testimonials: MahinContent["testimonials"] }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-mahin text-3xl font-bold leading-tight tracking-tight text-mahin-navy sm:text-4xl">
            {testimonials.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-mahin-slate">{testimonials.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-mahin-line bg-mahin-mist p-8"
            >
              <QuoteMark />
              <blockquote className="mt-4 flex-1 text-base leading-7 text-mahin-navy/80">“{item.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-mahin-line pt-5">
                <p className="font-mahin font-bold text-mahin-navy">{item.name}</p>
                <p className="mt-0.5 text-sm text-mahin-flame-dark">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
