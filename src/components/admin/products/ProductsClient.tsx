"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusIcon, ProductsIcon } from "@/components/admin/icons";
import CreateProductModal from "./CreateProductModal";
import ViewProductModal from "./ViewProductModal";
import EditProductModal from "./EditProductModal";
import ProductCard, { type ProductCardData } from "./ProductCard";

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-white/60 px-6 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue">
        <ProductsIcon className="h-7 w-7" />
      </span>
      <p className="mt-4 text-sm text-neutral-500">No products yet — add the first one.</p>
    </div>
  );
}

export default function ProductsClient({
  products,
  sites,
}: {
  products: ProductCardData[];
  sites: { key: string; label: string }[];
}) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [siteFilter, setSiteFilter] = useState<string>("ALL");
  const [viewingId, setViewingId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);

  const filtered =
    siteFilter === "ALL" ? products : products.filter((p) => p.site === siteFilter);
  const viewingProduct = products.find((p) => p.id === viewingId) ?? null;
  const editingProduct = products.find((p) => p.id === editingId) ?? null;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-lg font-semibold text-neutral-900">Products ({filtered.length})</h1>

          <label className="inline-flex items-center gap-2 text-sm text-neutral-600">
            <span className="font-medium">Company</span>
            <select
              value={siteFilter}
              onChange={(e) => setSiteFilter(e.target.value)}
              className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 shadow-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:outline-none"
            >
              <option value="ALL">All companies</option>
              {sites.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-hover"
        >
          <PlusIcon className="h-4 w-4" />
          Add product
        </button>
      </div>

      {filtered.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={() => setViewingId(product.id)}
              onEdit={() => setEditingId(product.id)}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      {modalOpen && (
        <CreateProductModal
          sites={sites}
          onClose={() => setModalOpen(false)}
          onCreated={() => setModalOpen(false)}
        />
      )}

      {viewingProduct && (
        <ViewProductModal product={viewingProduct} onClose={() => setViewingId(null)} />
      )}

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingId(null)}
          onSaved={() => {
            setEditingId(null);
            router.refresh();
          }}
        />
      )}
    </div>
  );
}
