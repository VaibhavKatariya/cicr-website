"use client";

import { AppSidebar } from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const { user, loading, checkingAuth } = useAuth();
  const router = useRouter();

  const isMaintenanceMode =
    process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  useEffect(() => {
    if (!loading && !checkingAuth && !user) {
      router.replace("/");
    }
  }, [user, loading, checkingAuth, router]);

  if (loading || checkingAuth) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-bg-dark text-ctext">
        <div className="text-lg text-ctext-muted">Loading...</div>
      </div>
    );
  }

  if (!user) return (<div className="flex items-center justify-center w-full h-screen bg-bg-dark text-ctext">You must be logged in to access this page.</div>);

  if (isMaintenanceMode) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen p-4 bg-bg-dark text-ctext text-center">
        <h1 className="text-3xl font-bold mb-4">Maintenance in Progress</h1>
        <p className="text-lg text-ctext-muted">
          The app is currently unavailable due to scheduled maintenance. Please
          try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-dark text-ctext overflow-x-hidden break-words">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between px-4 border-b border-border">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="h-4" />
              <h2 className="text-lg font-semibold text-ctext-muted">
                Dashboard
              </h2>
            </div>
          </header>
          <main className="p-4">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
