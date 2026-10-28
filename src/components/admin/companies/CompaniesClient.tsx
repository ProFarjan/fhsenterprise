"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import CompanyCard, { type CompanyCardData } from "./CompanyCard";
import EditCompanyModal from "./EditCompanyModal";
import { reorderCompaniesAction, togglePublishedAction } from "@/app/admin/(panel)/companies/actions";

export default function CompaniesClient({ companies }: { companies: CompanyCardData[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [busyId, setBusyId] = useState<number | null>(null);
  const [editing, setEditing] = useState<CompanyCardData | null>(null);
  // Optimistic local ordering — reconciled with the server's response via
  // router.refresh() once the reorder action completes.
  const [order, setOrder] = useState<CompanyCardData[]>(companies);
  const list = order.length === companies.length ? order : companies;

  function persistOrder(next: CompanyCardData[]) {
    setOrder(next);
    startTransition(async () => {
      await reorderCompaniesAction(next.map((c) => c.id));
      router.refresh();
    });
  }

  function moveUp(index: number) {
    if (index === 0) return;
    const next = [...list];
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
    persistOrder(next);
  }

  function moveDown(index: number) {
    if (index === list.length - 1) return;
    const next = [...list];
    [next[index], next[index + 1]] = [next[index + 1], next[index]];
    persistOrder(next);
  }

  function togglePublished(id: number) {
    setBusyId(id);
    startTransition(async () => {
      const formData = new FormData();
      formData.set("id", String(id));
      await togglePublishedAction(formData);
      router.refresh();
      setBusyId(null);
    });
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-semibold text-neutral-900">Companies</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Manage the FHS Enterprise subsidiary companies — profiles, logos, hero content, and ordering.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((company, index) => (
          <CompanyCard
            key={company.id}
            company={company}
            canMoveUp={index > 0}
            canMoveDown={index < list.length - 1}
            onMoveUp={() => moveUp(index)}
            onMoveDown={() => moveDown(index)}
            onTogglePublished={() => togglePublished(company.id)}
            onEdit={() => setEditing(company)}
            busy={isPending && busyId === company.id}
          />
        ))}
      </div>

      {editing && (
        <EditCompanyModal
          company={editing}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            router.refresh();
          }}
        />
      )}
    </div>
  );
}
