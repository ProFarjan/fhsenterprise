"use client";

import { useEffect, useRef, useState, type SubmitEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SHOW_UNVERIFIED_SECTIONS } from "@/data/organization";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "mt-1.5 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500";

export default function ContactForm() {
  const t = useTranslations("form");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const successRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  // The form is replaced by the confirmation, so keyboard/screen-reader focus
  // would be lost on a removed element — move it to the confirmation instead.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      subject: data.get("subject"),
      message: data.get("message"),
      // Honeypot — see the hidden field below.
      website: data.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      // A proxy/CDN error page (502, 413…) isn't JSON — don't surface a parse error.
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || t("error"));
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t("error"));
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="rounded-2xl border border-orange-200 bg-orange-50 p-8 text-center focus:outline-none"
      >
        <p className="text-lg font-semibold text-neutral-900">{t("successTitle")}</p>
        <p className="mt-2 text-neutral-600">{t("successBody")}</p>
        <button
          type="button"
          onClick={() => {
            // The button being clicked is about to be unmounted with the
            // confirmation, so hand focus to the first field of the fresh form.
            setStatus("idle");
            requestAnimationFrame(() => nameRef.current?.focus());
          }}
          className="mt-5 text-sm font-semibold text-orange-700 hover:text-orange-600"
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {/* Honeypot: invisible to people and assistive tech, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-neutral-700">
          {t("name")}
        </label>
        <input ref={nameRef} id="name" name="name" type="text" required autoComplete="name" maxLength={100} className={inputClasses} />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-neutral-700">
          {t("email")}
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" maxLength={254} className={inputClasses} />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-neutral-700">
          {t("phone")}
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} className={inputClasses} />
      </div>
      <div>
        <label htmlFor="subject" className="text-sm font-medium text-neutral-700">
          {t("subject")}
        </label>
        <input id="subject" name="subject" type="text" required maxLength={200} className={inputClasses} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-neutral-700">
          {t("message")}
        </label>
        <textarea id="message" name="message" rows={5} required maxLength={5000} className={inputClasses} />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700 sm:col-span-2">
          {errorMessage}
        </p>
      )}

      {SHOW_UNVERIFIED_SECTIONS.legalPages && (
        <p className="text-xs text-neutral-500 sm:col-span-2">
          {t.rich("privacyNote", {
            link: (chunks) => (
              <Link href="/privacy" className="font-medium underline hover:text-neutral-700">
                {chunks}
              </Link>
            ),
          })}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-md bg-orange-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? t("sending") : t("submit")}
        </button>
      </div>
    </form>
  );
}
