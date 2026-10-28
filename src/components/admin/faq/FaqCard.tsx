"use client";

import { EditIcon } from "@/components/admin/icons";
import DeleteItemButton from "@/components/admin/media/DeleteItemButton";
import { deleteFaqAction } from "@/app/admin/(panel)/faq/actions";

export type FaqCardData = {
  id: number;
  order: number;
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
};

export default function FaqCard({
  faq,
  onEdit,
}: {
  faq: FaqCardData;
  onEdit: () => void;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-brand-blue-light px-2 font-mono text-xs font-semibold text-brand-blue">
          {faq.order}
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onEdit}
            aria-label="Edit"
            className="rounded-lg bg-white/90 p-1.5 text-neutral-500 shadow-sm transition-colors hover:bg-brand-blue-light hover:text-brand-blue-hover"
          >
            <EditIcon className="h-4 w-4" />
          </button>
          <DeleteItemButton id={faq.id} itemLabel={faq.questionEn} action={deleteFaqAction} />
        </div>
      </div>

      <dl className="mt-4 space-y-4">
        <div>
          <dt className="text-xs font-medium tracking-wide text-neutral-400 uppercase">
            Question
          </dt>
          <dd className="mt-1 text-sm font-semibold text-neutral-900">{faq.questionEn}</dd>
          <dd className="mt-0.5 text-sm text-neutral-500">{faq.questionBn}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wide text-neutral-400 uppercase">Answer</dt>
          <dd className="mt-1 line-clamp-3 text-sm text-neutral-700">{faq.answerEn}</dd>
          <dd className="mt-1 line-clamp-3 text-sm text-neutral-500">{faq.answerBn}</dd>
        </div>
      </dl>
    </div>
  );
}
