"use client";

import { useState, type SubmitEvent } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "mt-1.5 w-full rounded-xl border border-vet-line bg-white px-4 py-2.5 text-sm text-vet-ink focus:border-vet-teal focus:outline-none focus:ring-1 focus:ring-vet-teal";

// MR Agro Medicine-themed contact form. Posts to the shared /api/contact
// endpoint (nodemailer) and reuses the global "form" translations.
export default function AgroMedContactForm() {
  const t = useTranslations("form");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

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
      <div className="rounded-2xl bg-vet-mist p-8 text-center ring-1 ring-vet-line">
        <p className="text-lg font-semibold text-vet-ink">{t("successTitle")}</p>
        <p className="mt-2 text-vet-ink/65">{t("successBody")}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-vet-teal-dark hover:text-vet-ink"
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-vet-ink/80">
          {t("name")}
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-vet-ink/80">
          {t("email")}
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-vet-ink/80">
          {t("phone")}
        </label>
        <input id="phone" name="phone" type="tel" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="subject" className="text-sm font-medium text-vet-ink/80">
          {t("subject")}
        </label>
        <input id="subject" name="subject" type="text" required className={inputClasses} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-vet-ink/80">
          {t("message")}
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClasses} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 sm:col-span-2">{errorMessage}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-vet-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-vet-teal-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? t("sending") : t("submit")}
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">→</span>
        </button>
      </div>
    </form>
  );
}
