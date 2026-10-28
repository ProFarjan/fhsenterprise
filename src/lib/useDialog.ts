"use client";

import { useEffect, useRef, type RefObject } from "react";

// Everything a keyboard user can Tab to.
const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), select:not([disabled]), input:not([disabled]):not([type="hidden"]), [tabindex]:not([tabindex="-1"])';

const FIRST_FIELD =
  'input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled])';

// The behaviour every modal dialog needs, in one place (used by the admin Modal
// and the public VideoModal):
//  - on open: move focus inside, and lock page scroll
//  - Tab / Shift+Tab stay inside the dialog; Escape closes it
//  - on close: give focus back to whatever opened it
//
// `dialogRef` must point at the dialog's root element (give it tabIndex={-1}
// so it can take focus when it contains nothing focusable).
export function useDialog(
  dialogRef: RefObject<HTMLElement | null>,
  onClose: () => void,
  { focusFirstField = false }: { focusFirstField?: boolean } = {},
) {
  // Callers pass inline arrow functions, which change identity on every render.
  // Reading the latest one through a ref keeps the key handler mounted once.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;

    const initial =
      (focusFirstField ? dialog?.querySelector<HTMLElement>(FIRST_FIELD) : null) ??
      dialog?.querySelector<HTMLElement>(FOCUSABLE) ??
      dialog;
    initial?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab" || !dialog) return;

      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null,
      );
      if (focusable.length === 0) {
        e.preventDefault();
        dialog.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (!dialog.contains(active)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && (active === first || active === dialog)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [dialogRef, focusFirstField]);
}
