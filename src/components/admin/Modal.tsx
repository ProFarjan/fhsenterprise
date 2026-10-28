"use client";

import { useId, useRef } from "react";
import { useDialog } from "@/lib/useDialog";
import { CloseIcon } from "./icons";

export default function Modal({
  title,
  onClose,
  children,
  maxWidthClassName = "max-w-lg",
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  maxWidthClassName?: string;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  // Focus lands on the first form field; Escape closes; Tab stays inside;
  // page scroll is locked; focus returns to the opener on close.
  useDialog(dialogRef, onClose, { focusFirstField: true });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative flex max-h-[90vh] w-full ${maxWidthClassName} flex-col rounded-2xl bg-white shadow-2xl focus:outline-none`}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
          <h2 id={titleId} className="text-base font-semibold text-neutral-900">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
            aria-label="Close"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-5">{children}</div>
      </div>
    </div>
  );
}
