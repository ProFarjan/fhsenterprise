"use client";

import { useState } from "react";
import type { CurrentAdmin } from "@/lib/session";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// Presentational shell. Authentication is enforced on the server in
// src/app/admin/(panel)/layout.tsx — by the time this renders, `admin` is a
// verified session, so there is no client-side guard or loading flash.
export default function AdminShell({
  admin,
  children,
}: {
  admin: CurrentAdmin;
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="lg:pl-64">
        <Topbar admin={admin} onOpenMenu={() => setMobileOpen(true)} />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
