"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction, type LoginState } from "@/app/admin/actions";

function SubmitButton() {
  // useFormStatus reads the pending state of the enclosing <form>, so the
  // button knows it's submitting without any local state.
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-hover focus:ring-2 focus:ring-brand-blue/40 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Signing in…" : "Sign in"}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useActionState<LoginState, FormData>(loginAction, {});
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-white/10 bg-neutral-800/60 p-6 shadow-2xl backdrop-blur sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-neutral-200"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 focus:outline-none"
            placeholder="you@fhsenterprise.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-neutral-200"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3.5 py-2.5 pr-12 text-sm text-white placeholder:text-neutral-500 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 focus:outline-none"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute inset-y-0 right-0 flex items-center px-3.5 text-xs font-medium text-neutral-400 hover:text-neutral-200"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {state.error && (
          <p
            role="alert"
            className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-300"
          >
            {state.error}
          </p>
        )}

        <SubmitButton />
      </div>
    </form>
  );
}
