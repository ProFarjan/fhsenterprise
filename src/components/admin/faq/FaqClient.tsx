"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaqIcon, PlusIcon } from "@/components/admin/icons";
import FaqCard, { type FaqCardData } from "./FaqCard";
import FaqFormModal from "./FaqFormModal";

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-white/60 px-6 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
        <FaqIcon className="h-7 w-7" />
      </span>
      <p className="mt-4 text-sm text-neutral-500">
        No questions yet — the public FAQ page falls back to the built-in list until you add one.
      </p>
    </div>
  );
}

export default function FaqClient({ faqs }: { faqs: FaqCardData[] }) {
  const router = useRouter();
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const editingFaq = faqs.find((f) => f.id === editingId) ?? null;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-lg font-semibold text-neutral-900">Questions ({faqs.length})</h1>
        <button
          type="button"
          onClick={() => setCreating(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
        >
          <PlusIcon className="h-4 w-4" />
          Add question
        </button>
      </div>

      {faqs.length ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <FaqCard key={faq.id} faq={faq} onEdit={() => setEditingId(faq.id)} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      {creating && (
        <FaqFormModal
          onClose={() => setCreating(false)}
          onSaved={() => {
            setCreating(false);
            router.refresh();
          }}
        />
      )}

      {editingFaq && (
        <FaqFormModal
          faq={editingFaq}
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
