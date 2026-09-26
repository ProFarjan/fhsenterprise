import type { FeedContent } from "@/types/feed";

function QuoteMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-feed-amber/25">
      <path d="M7 7h4v4c0 3-1.5 5-4 6v-2c1.3-.6 2-1.6 2-3H7V7zm8 0h4v4c0 3-1.5 5-4 6v-2c1.3-.6 2-1.6 2-3h-2V7z" />
    </svg>
  );
}

// Farmer testimonials — three quote cards on a cream band.
export default function FeedTestimonials({ testimonials }: { testimonials: FeedContent["testimonials"] }) {
  return (
    <section className="bg-feed-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-feed text-3xl font-bold leading-tight text-feed-espresso sm:text-4xl">
            {testimonials.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">{testimonials.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-3xl border border-feed-cream-dark bg-white p-8 shadow-sm"
            >
              <QuoteMark />
              <blockquote className="mt-4 flex-1 text-base leading-7 text-neutral-700">“{item.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-feed-cream-dark pt-5">
                <p className="font-feed font-bold text-feed-espresso">{item.name}</p>
                <p className="mt-0.5 text-sm text-feed-amber-dark">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
