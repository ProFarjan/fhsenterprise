import { requireAdmin } from "@/lib/session";
import ChangePasswordForm from "@/components/admin/ChangePasswordForm";

export default async function AdminSettingsPage() {
  const admin = await requireAdmin();

  return (
    <div className="space-y-6">
      {/* Account summary */}
      <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-neutral-900">Your account</h2>
        <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-xs text-neutral-500">Name</dt>
            <dd className="mt-0.5 text-sm font-medium text-neutral-800">
              {admin.name}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-neutral-500">Email</dt>
            <dd className="mt-0.5 text-sm font-medium text-neutral-800">
              {admin.email}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-neutral-500">Role</dt>
            <dd className="mt-0.5">
              <span className="inline-flex rounded-full bg-brand-blue-light px-2.5 py-1 text-xs font-medium text-brand-blue">
                {admin.role === "SUPER_ADMIN" ? "Super Admin" : "Admin"}
              </span>
            </dd>
          </div>
        </dl>
      </div>

      {/* Change password */}
      <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-neutral-900">
          Change password
        </h2>
        <p className="mt-1 mb-5 text-sm text-neutral-500">
          Choose a strong password you don&apos;t use anywhere else.
        </p>
        <ChangePasswordForm />
      </div>
    </div>
  );
}
