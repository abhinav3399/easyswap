"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  House,
  Heart,
  Calendar,
  MessageCircle,
  Bell,
  Wallet,
  User,
  Settings,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/search", label: "Search Rooms", icon: Search },
  { href: "/listings", label: "My Listings", icon: House },
  { href: "/saved", label: "Saved", icon: Heart },
  { href: "/matches", label: "Matches", icon: ShieldCheck },
  { href: "/bookings", label: "Bookings", icon: Calendar },
  { href: "/chat", label: "Chat", icon: MessageCircle },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/wallet", label: "Wallet", icon: Wallet },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        <aside className="hidden lg:flex w-80 flex-col border-r border-slate-200 bg-white/80 backdrop-blur-xl p-6">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center text-white font-bold">E</div>
            <div>
              <p className="text-lg font-semibold text-slate-900">EasySwap</p>
              <p className="text-xs text-slate-500">Customer MVP</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",
                    active
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-4">
            <p className="text-sm font-semibold text-slate-900">Your host match</p>
            <p className="mt-1 text-xs text-slate-500">92% compatibility with Mia Alvarez</p>
            <Link href="/matches" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
              View recommendation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-6">
          <nav className="mb-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {navItems.map((item) => {
              const Icon = item.icon;
              return <Link key={item.href} href={item.href} className={cn("flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium", pathname.startsWith(item.href) ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-slate-600")}><Icon className="h-3.5 w-3.5" />{item.label}</Link>;
            })}
          </nav>
          <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">EasySwap</p>
              <h1 className="text-2xl font-semibold text-slate-900">Room exchange customer workspace</h1>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/search">
                <Button variant="glass">Browse Rooms</Button>
              </Link>
              <Link href="/profile">
                <Button variant="primary">My Profile</Button>
              </Link>
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
