import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/session";
import LoginForm from "@/components/admin/LoginForm";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ passwordChanged?: string }>;
}) {
  // Already signed in? Skip the form.
  if (await getCurrentAdmin()) redirect("/admin");

  const { passwordChanged } = await searchParams;

  return (
    <div className="flex min-h-full items-center justify-center bg-neutral-900 px-4 py-12">
      {/* Ambient brand glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-600 text-xl font-bold text-white shadow-lg shadow-orange-600/30">
            FHS
          </div>
          <h1 className="text-2xl font-semibold text-white">Admin Panel</h1>
          <p className="mt-1 text-sm text-neutral-400">
            Sign in to manage FHS Enterprise content
          </p>
        </div>

        {passwordChanged && (
          <p className="mb-4 rounded-lg bg-green-500/10 px-3 py-2.5 text-center text-sm text-green-300">
            Password updated. Please sign in again.
          </p>
        )}

        <LoginForm />
      </div>
    </div>
  );
}
