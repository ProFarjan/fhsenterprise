import Image from "next/image";
import AgroMedIcon from "@/components/company/agromed/AgroMedIcon";
import { accentFor } from "@/components/company/agromed/categoryAccents";
import type { AgroMedContent, AgroMedProduct } from "@/types/agromed";

// A compact product card: photo, name, one-line tagline, and a single key fact.
// The whole card links to the product detail page where the full spec lives.
function ProductCard({
  product,
  labels,
  basePath,
}: {
  product: AgroMedProduct;
  labels: AgroMedContent["productsPage"];
  basePath: string;
}) {
  const accent = accentFor(product.category);
  // basePath is the clean, subdomain-relative root (e.g. "/en"); the proxy
  // rewrites it to the internal /companies/agro-medicine path.
  const href = `${basePath}/products/${product.category}/${product.slug}`;
  return (
    <a
      href={href}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-vet-line transition-shadow hover:shadow-xl hover:shadow-vet-ink/5"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl backdrop-blur ${accent.chip}`}
        >
          <AgroMedIcon name={product.icon} className="h-5 w-5" />
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-vet-ink/70 ring-1 ring-white/60 backdrop-blur">
          {product.form}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-vet-ink">{product.name}</h3>
        <p className="mb-5 mt-1.5 text-sm leading-6 text-vet-ink/65">{product.tagline}</p>

        <div className="mt-auto flex items-center justify-end border-t border-vet-line pt-4">
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-vet-teal-dark">
            {labels.viewDetailsLabel}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </a>
  );
}

// Flat grid of product cards. Grouping by category is handled by the page.
export default function ProductGrid({
  products,
  labels,
  basePath,
}: {
  products: AgroMedProduct[];
  labels: AgroMedContent["productsPage"];
  basePath: string;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} labels={labels} basePath={basePath} />
      ))}
    </div>
  );
}
