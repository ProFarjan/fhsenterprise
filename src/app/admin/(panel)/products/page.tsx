import { prisma } from "@/lib/prisma";
import { siteLabel, SITE_OPTIONS } from "@/lib/sites";
import { parseProductBenefits, parseProductSpecs } from "@/lib/productJson";
import { categoryLabel } from "@/lib/productCategories";
import ProductsClient from "@/components/admin/products/ProductsClient";
import type { ProductCardData } from "@/components/admin/products/ProductCard";

export default async function AdminProductsPage() {
  // Bytes columns are deliberately excluded — the browser fetches image
  // pixels from /api/products/[id]/image instead, so multi-megabyte blobs
  // never ride along in the page's RSC payload.
  const rows = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      site: true,
      slug: true,
      category: true,
      name: true,
      tagline: true,
      description: true,
      benefits: true,
      specs: true,
      isPublished: true,
      createdAt: true,
    },
  });

  const products: ProductCardData[] = rows.map((row) => ({
    id: row.id,
    site: row.site,
    siteLabel: siteLabel(row.site),
    slug: row.slug,
    category: row.category,
    categoryLabel: categoryLabel(row.site, row.category),
    name: row.name,
    tagline: row.tagline,
    description: row.description,
    benefits: parseProductBenefits(row.benefits),
    specs: parseProductSpecs(row.specs),
    imageUrl: `/api/products/${row.id}/image`,
    isPublished: row.isPublished,
    createdAtLabel: row.createdAt.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  }));

  return <ProductsClient products={products} sites={SITE_OPTIONS} />;
}
