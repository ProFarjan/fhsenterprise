"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Modal from "@/components/admin/Modal";
import {
  createFaqAction,
  updateFaqAction,
  type FaqFormState,
} from "@/app/admin/(panel)/faq/actions";
import type { FaqCardData } from "./FaqCard";

const inputClass =
  "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 focus:outline-none";

function SubmitButton({ isEdit }: { isEdit: boolean }) {
  const { pending } = useFormStatus();
  const idle = isEdit ? "Save changes" : "Add question";
  const busy = isEdit ? "Saving…" : "Adding…";
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? busy : idle}
    </button>
  );
}

// One modal serves both create and edit — the FAQ form is plain text with no
// image or dependent fields, so a shared form (unlike the Product modals)
// keeps it simple. Passing `faq` switches it to edit mode.
export default function FaqFormModal({
  faq,
  onClose,
  onSaved,
}: {
  faq?: FaqCardData;
  onClose: () => void;
  onSaved: () => void;
}) {
  const isEdit = Boolean(faq);

  const action = async (prev: FaqFormState, formData: FormData) => {
    const result = isEdit
      ? await updateFaqAction(prev, formData)
      : await createFaqAction(prev, formData);
    if (result.success) onSaved();
    return result;
  };
  const [state, formAction] = useActionState<FaqFormState, FormData>(action, {});

  return (
    <Modal
      title={isEdit ? "Edit question" : "Add question"}
      onClose={onClose}
      maxWidthClassName="max-w-2xl"
    >
      <form action={formAction} className="space-y-5">
        {faq && <input type="hidden" name="id" value={faq.id} />}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="faq-question-en" className="mb-1.5 block text-sm font-medium text-neutral-700">
              Question (English)
            </label>
            <input
              id="faq-question-en"
              name="questionEn"
              type="text"
              required
              maxLength={500}
              defaultValue={faq?.questionEn ?? ""}
              className={inputClass}
              placeholder="e.g. Where is MR Group headquartered?"
            />
          </div>
          <div>
            <label htmlFor="faq-question-bn" className="mb-1.5 block text-sm font-medium text-neutral-700">
              Question (Bangla)
            </label>
            <input
              id="faq-question-bn"
              name="questionBn"
              type="text"
              required
              maxLength={500}
              defaultValue={faq?.questionBn ?? ""}
              className={inputClass}
              placeholder="এমআর গ্রুপের প্রধান কার্যালয় কোথায়?"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="faq-answer-en" className="mb-1.5 block text-sm font-medium text-neutral-700">
              Answer (English)
            </label>
            <textarea
              id="faq-answer-en"
              name="answerEn"
              required
              rows={4}
              defaultValue={faq?.answerEn ?? ""}
              className={inputClass}
              placeholder="Full answer shown when this question is expanded…"
            />
          </div>
          <div>
            <label htmlFor="faq-answer-bn" className="mb-1.5 block text-sm font-medium text-neutral-700">
              Answer (Bangla)
            </label>
            <textarea
              id="faq-answer-bn"
              name="answerBn"
              required
              rows={4}
              defaultValue={faq?.answerBn ?? ""}
              className={inputClass}
              placeholder="এই প্রশ্নটি খুললে যে সম্পূর্ণ উত্তর দেখানো হবে…"
            />
          </div>
        </div>

        <div className="w-40">
          <label htmlFor="faq-order" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Order
            <span className="ml-1 font-normal text-neutral-400">low = first</span>
          </label>
          <input
            id="faq-order"
            name="order"
            type="number"
            step={1}
            defaultValue={faq?.order ?? 0}
            className={inputClass}
          />
        </div>

        {state.error && (
          <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {state.error}
          </p>
        )}

        <div className="flex justify-end gap-3 border-t border-neutral-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100"
          >
            Cancel
          </button>
          <SubmitButton isEdit={isEdit} />
        </div>
      </form>
    </Modal>
  );
}
