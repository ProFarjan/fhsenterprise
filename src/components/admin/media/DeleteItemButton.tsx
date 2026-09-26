"use client";

import { useFormStatus } from "react-dom";
import { TrashIcon } from "@/components/admin/icons";

function DeleteSubmit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-label="Delete"
      className="rounded-lg bg-white/90 p-1.5 text-neutral-500 shadow-sm transition-colors hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <TrashIcon className="h-4 w-4" />
    </button>
  );
}

export default function DeleteItemButton({
  id,
  itemLabel,
  action,
}: {
  id: number;
  itemLabel: string;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(`Delete "${itemLabel}"? This cannot be undone.`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <DeleteSubmit />
    </form>
  );
}
