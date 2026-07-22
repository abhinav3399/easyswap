"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  BookOpen,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Heart,
  MapPinned,
  MessageCircle,
  ShieldCheck,
  Star,
  UserRound,
  Wallet,
  Wifi,
  CarFront,
  CircleDollarSign,
  Sparkles,
  GraduationCap,
  Building2,
  Search,
  Settings,
  CalendarClock,
  House,
  BadgeCheck,
  Phone,
  Upload,
  Lock,
  Mail,
  Map,
  Camera,
  PhoneCall,
  HeartHandshake,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { rooms, notifications, chats, bookings, walletSummary } from "@/lib/mock-data";

export function AuthScreen({ type }: { type: "signin" | "signup" | "forgot" | "otp" | "verify" }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const isSignIn = type === "signin";
  const isForgot = type === "forgot";
  const isOtp = type === "otp";
  const isVerify = type === "verify";

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.15),_transparent_25%),linear-gradient(180deg,#f8fafc_0%,#eef7ff_100%)] px-4 py-10">
      <div className="mx-auto max-w-6xl grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Sparkles className="h-4 w-4" /> Trusted housing exchanges for students and professionals
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
              {isSignIn ? "Welcome back to your swap workspace." : isForgot ? "Reset access in seconds." : isOtp ? "Secure your account with an OTP." : isVerify ? "Verify your account and continue." : "Create your EasySwap profile."}
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              {isSignIn
                ? "Access your dashboard, discover compatible rooms, and stay in sync with your next move."
                : isForgot
                  ? "Use your registered email to recover your account and stay in control of your upcoming swap."
                  : isOtp
                    ? "Enter the one-time code sent to your email to complete the secure login step."
                    : isVerify
                      ? "Finish your email verification to unlock full booking and messaging access."
                      : "Join the network of verified students and professionals looking for safe, flexible room exchange matches."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "Verified users" },
              { icon: HeartHandshake, label: "Compatibility scored" },
              { icon: Wallet, label: "Secure payments" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur-xl">
                <item.icon className="h-5 w-5 text-emerald-600" />
                <p className="mt-3 text-sm font-semibold text-slate-900">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="rounded-3xl border border-white/60 bg-white/85 p-3 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-900">
              {isSignIn ? "Sign in" : isForgot ? "Forgot password" : isOtp ? "Enter OTP" : isVerify ? "Email verification" : "Sign up"}
            </CardTitle>
            <CardDescription>
              {isSignIn ? "Continue with your email or Google account." : isForgot ? "We will send a secure reset link to your inbox." : isOtp ? "A 6-digit code was sent to your email." : isVerify ? "A confirmation email is waiting in your inbox." : "Create an account to unlock your tenant profile."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4 rounded-3xl bg-emerald-50 p-6 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
                <div>
                  <p className="text-lg font-semibold text-slate-900">Success</p>
                  <p className="text-sm text-slate-600">Your account flow is complete. Redirecting to the onboarding experience now.</p>
                </div>
                <Link href="/onboarding">
                  <Button variant="primary" className="w-full">Continue to onboarding</Button>
                </Link>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); void handleSubmit(); }}>
                {!isForgot && !isOtp && !isVerify && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Button variant="outline" className="justify-start gap-2" type="button">
                      <Mail className="h-4 w-4" /> Continue with Google
                    </Button>
                    <Button variant="glass" className="justify-start gap-2" type="button">
                      <Mail className="h-4 w-4" /> Continue with Email
                    </Button>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input type="email" placeholder="you@example.com" />
                </div>

                {!isForgot && !isOtp && !isVerify && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Password</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                )}

                {isOtp && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">OTP code</label>
                    <Input type="text" placeholder="123456" />
                  </div>
                )}

                {isVerify && (
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">
                    We sent a confirmation email to you@example.com. Click the link or use the verification code from your inbox.
                  </div>
                )}

                <Button variant="primary" className="w-full" type="submit" disabled={loading}>
                  {loading ? "Please wait..." : isSignIn ? "Sign in" : isForgot ? "Send reset link" : isOtp ? "Verify OTP" : isVerify ? "Confirm email" : "Create account"}
                </Button>

                <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-600">
                  <Link href="/auth/sign-up" className="text-emerald-700 hover:underline">{isSignIn ? "Need an account?" : "Already have an account?"}</Link>
                  <Link href="/auth/forgot-password" className="text-slate-700 hover:underline">Forgot password?</Link>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function OnboardingForm() {
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(0);
  const [role, setRole] = useState("Student");

  const fields = [
    ["Are you", "Student", "Working Professional", "Family"],
    ["Full Name", "Age", "Gender", "College", "Company", "Occupation"],
    ["City", "Destination City", "Budget", "Move Date", "Stay Duration"],
    ["Religion", "Food Preference", "Smoking", "Drinking", "Pets", "Languages", "Hobbies"],
    ["Emergency Contact", "Government ID", "Student ID", "Employee ID", "Profile Picture", "Bio"],
  ];

  const renderGroup = (group: string[]) => (
    <div className="grid gap-3 md:grid-cols-2">
      {group.slice(1).map((item) => (
        <div key={item} className="space-y-2">
          <label className="text-sm font-medium text-slate-700">{item}</label>
          <Input placeholder={item} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Onboarding</p>
            <h1 className="text-3xl font-semibold text-slate-900">Build your verified profile</h1>
          </div>
          <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">Step {step + 1} of 5</div>
        </div>

        <div className="mb-6 grid gap-3 md:grid-cols-5">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className={idx <= step ? "h-2 rounded-full bg-emerald-500" : "h-2 rounded-full bg-slate-200"} />
          ))}
        </div>

        <div className="space-y-5">
          {step === 0 && <div><p className="mb-4 text-lg font-semibold text-slate-900">Are you joining as…</p><div className="grid gap-3 sm:grid-cols-3">{fields[0].slice(1).map((item) => <button key={item} type="button" onClick={() => setRole(item)} className={role === item ? "rounded-2xl border-2 border-emerald-500 bg-emerald-50 p-5 text-left font-semibold text-emerald-800" : "rounded-2xl border border-slate-200 p-5 text-left font-semibold text-slate-700 hover:border-emerald-300"}>{item}</button>)}</div><p className="mt-4 text-sm text-slate-500">We use this only to personalize relevant housing and compatibility preferences.</p></div>}
          {step === 1 && renderGroup(fields[1])}
          {step === 2 && renderGroup(fields[2])}
          {step === 3 && renderGroup(fields[3])}
          {step === 4 && renderGroup(fields[4])}

          {success ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl bg-emerald-50 p-6 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
              <p className="mt-4 text-xl font-semibold text-slate-900">Profile saved successfully</p>
              <p className="text-sm text-slate-600">You are ready to discover your next room exchange.</p>
              <Link href="/dashboard" className="mt-4 inline-block">
                <Button variant="primary">Go to dashboard</Button>
              </Link>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Button variant="ghost" disabled={step === 0} onClick={() => setStep((current) => Math.max(current - 1, 0))}>Back</Button>
              <Button variant="primary" onClick={() => {
                if (step === 4) setSuccess(true);
                else setStep((current) => Math.min(current + 1, 4));
              }}>
                {step === 4 ? "Save Profile" : "Continue"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function DashboardView() {
  const statCards = [
    { label: "Compatibility score", value: "92%", icon: Sparkles },
    { label: "Saved rooms", value: "12", icon: Heart },
    { label: "Upcoming bookings", value: "03", icon: CalendarClock },
    { label: "Wallet credits", value: "$820", icon: Wallet },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <Card key={card.label} className="rounded-3xl border-slate-200 bg-white/95">
            <CardContent className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{card.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{card.value}</p>
              </div>
              <card.icon className="h-8 w-8 text-emerald-600" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Card className="rounded-3xl border-slate-200 bg-white/95">
          <CardHeader>
            <CardTitle>Recommended swaps</CardTitle>
            <CardDescription>AI-curated homes matching your move preferences</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {rooms.map((room) => (
              <div key={room.id} className="flex flex-col gap-4 rounded-3xl border border-slate-200 p-4 md:flex-row">
                <img src={room.image} alt={room.title} className="h-48 w-full rounded-2xl object-cover md:w-64" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{room.compatibility}% compat</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{room.availability}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{room.title}</h3>
                  <p className="text-sm text-slate-500">{room.host} • {room.distance} mi away</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {room.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-semibold text-slate-900">${room.price}</p>
                      <p className="text-xs text-slate-500">/ month</p>
                    </div>
                    <Link href={`/search/${room.id}`}>
                      <Button variant="primary">View details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="rounded-3xl border-slate-200 bg-white/95">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-3">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.description}</p>
                  <p className="text-xs text-slate-400">{item.time}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-slate-200 bg-white/95">
            <CardHeader>
              <CardTitle>Wallet snapshot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-emerald-50 p-4">
                <div>
                  <p className="text-xs text-emerald-700">Platform credits</p>
                  <p className="text-xl font-semibold text-slate-900">${walletSummary.credits}</p>
                </div>
                <Wallet className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="text-sm text-slate-500">Referral rewards: ${walletSummary.referralRewards} • Coupons: {walletSummary.coupons}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function SearchView() {
  const [query, setQuery] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [view, setView] = useState<"grid" | "list" | "map">("grid");
  const matchingRooms = rooms.filter((room) => (!query || `${room.title} ${room.city} ${room.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())) && (!maxBudget || room.price <= Number(maxBudget)));
  return (
    <div className="space-y-6">
      <Card className="rounded-3xl border-slate-200 bg-white/95">
        <CardHeader>
          <CardTitle>Search rooms</CardTitle>
          <CardDescription>Filter by city, budget, move date, lifestyle, amenities, and availability.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-5">
          <Input placeholder="Current City" value={query} onChange={(event) => setQuery(event.target.value)} />
          <Input placeholder="Destination City" value={query} onChange={(event) => setQuery(event.target.value)} />
          <Input placeholder="Budget" type="number" value={maxBudget} onChange={(event) => setMaxBudget(event.target.value)} />
          <Input placeholder="Move Date" type="date" />
          <select className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600"><option>Any preference</option><option>Vegetarian</option><option>Non-smoking</option><option>Pet friendly</option></select>
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-slate-500">{matchingRooms.length} verified rooms found</p><div className="flex rounded-xl border border-slate-200 bg-white p-1">{(["grid", "list", "map"] as const).map((item) => <button key={item} onClick={() => setView(item)} className={view === item ? "rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700" : "px-3 py-1.5 text-sm text-slate-500"}>{item === "grid" ? "Grid" : item === "list" ? "List" : "Map"}</button>)}</div></div>

      {view === "map" && <div className="relative h-64 overflow-hidden rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_20%_30%,#86efac_0_2px,transparent_3px),radial-gradient(circle_at_65%_50%,#60a5fa_0_3px,transparent_4px),linear-gradient(135deg,#eff6ff,#f0fdf4)]"><p className="absolute left-5 top-5 rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">Interactive area map · {matchingRooms.length} homes</p>{matchingRooms.map((room, index) => <Link key={room.id} href={`/search/${room.id}`} className="absolute rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-lg" style={{ left: `${20 + index * 20}%`, top: `${42 + (index % 2) * 20}%` }}>${room.price}</Link>)}</div>}

      <div className={view === "list" ? "grid gap-4" : "grid gap-4 md:grid-cols-2 xl:grid-cols-3"}>
        {matchingRooms.map((room) => (
          <Card key={room.id} className="rounded-3xl border-slate-200 bg-white/95">
            <img src={room.image} alt={room.title} className="h-48 w-full rounded-2xl object-cover" />
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{room.title}</h3>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{room.compatibility}%</span>
              </div>
              <p className="mt-1 text-sm text-slate-500">{room.city} • {room.availability}</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                <span className="rounded-full bg-slate-100 px-3 py-1">WiFi</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Parking</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">AC</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Attached Bath</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xl font-semibold text-slate-900">${room.price}</p>
                  <p className="text-xs text-slate-500">monthly</p>
                </div>
                <Link href={`/search/${room.id}`}>
                  <Button variant="primary">Book now</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function RoomDetailView({ roomId }: { roomId: string }) {
  const room = rooms.find((item) => item.id === roomId) ?? rooms[0];
  const [saved, setSaved] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="rounded-3xl border-slate-200 bg-white/95">
          <img src={room.image} alt={room.title} className="h-[360px] w-full rounded-[28px] object-cover" />
          <CardContent className="pt-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h1 className="text-3xl font-semibold text-slate-900">{room.title}</h1>
                <p className="text-sm text-slate-500">{room.host} • Verified host • {room.rating} rating</p>
              </div>
              <Button variant="glass" onClick={() => setSaved((value) => !value)}>{saved ? "Saved ✓" : "Save"}</Button>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">Nearby college: 1.2 mi</div>
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">Nearby office: 3.1 mi</div>
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">Metro: 0.7 mi</div>
            </div>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-slate-600">Shared kitchen, quiet study zone, full WiFi, and flexible move-in scheduling. Ideal for verified students and working professionals who want a culturally aligned swap.</p>
              <div className="flex flex-wrap gap-2">
                {room.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{tag}</span>)}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="rounded-3xl border-slate-200 bg-white/95">
            <CardHeader>
              <CardTitle>Availability & price</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-sm text-emerald-700">Compatibility score</p>
                <p className="text-3xl font-semibold text-slate-900">{room.compatibility}%</p>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>Same college</p>
                <p>Same move date</p>
                <p>Same lifestyle</p>
                <p>Same food</p>
              </div>
              <Link href="/booking">
                <Button variant="primary" className="w-full">Book now</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-slate-200 bg-white/95">
            <CardHeader>
              <CardTitle>House rules</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-600">
              <p>• Quiet hours 10 PM - 7 AM</p>
              <p>• No smoking inside</p>
              <p>• Shared community kitchen</p>
              <p>• 2-night minimum booking</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function MatchesView() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="rounded-3xl border-slate-200 bg-white/95">
        <CardHeader>
          <CardTitle>AI compatibility recommendation</CardTitle>
          <CardDescription>Reason: same college, same move date, same lifestyle, same budget.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-3xl bg-emerald-50 p-5 text-center">
            <p className="text-sm text-emerald-700">Compatibility Score</p>
            <p className="text-5xl font-semibold text-slate-900">92%</p>
          </div>
          <div className="grid gap-2 text-sm text-slate-600">
            <p>Same college</p>
            <p>Same move date</p>
            <p>Same food preference</p>
            <p>Same religion</p>
            <p>Same budget</p>
          </div>
          <Link href="/search/room-1">
            <Button variant="primary" className="w-full">View recommendation card</Button>
          </Link>
        </CardContent>
      </Card>

      <Card className="rounded-3xl border-slate-200 bg-white/95">
        <CardHeader>
          <CardTitle>Recommendation card</CardTitle>
          <CardDescription>Best host fit for August move-in</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-lg font-semibold text-slate-900">Mia Alvarez</p>
            <p className="text-sm text-slate-500">Verified host • USC alumni</p>
          </div>
          <div className="space-y-2 text-sm text-slate-600">
            <p>• Quiet, study-friendly, and family-safe</p>
            <p>• Full WiFi and parking available</p>
            <p>• Move-in date aligned with your plan</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function BookingsView() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-3">
        {bookings.map((booking) => (
          <Card key={booking.id} className="rounded-3xl border-slate-200 bg-white/95">
            <CardHeader>
              <CardTitle>{booking.room}</CardTitle>
              <CardDescription>{booking.id} • {booking.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{booking.status}</span>
                <span className="font-semibold text-slate-900">{booking.amount}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function ChatView() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState<string[]>([]);
  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <Card className="rounded-3xl border-slate-200 bg-white/95">
        <CardHeader>
          <CardTitle>Conversation</CardTitle>
          <CardDescription>Secure chat with your host</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {chats.map((chat, idx) => (
            <div key={idx} className={chat.from === "You" ? "ml-auto max-w-[80%] rounded-2xl bg-emerald-50 p-3 text-sm" : "max-w-[80%] rounded-2xl bg-slate-100 p-3 text-sm"}>
              <p className="font-semibold">{chat.from}</p>
              <p>{chat.message}</p>
              <p className="mt-1 text-xs text-slate-500">{chat.time}</p>
            </div>
          ))}
          {sent.map((item, idx) => <div key={`${item}-${idx}`} className="ml-auto max-w-[80%] rounded-2xl bg-emerald-50 p-3 text-sm"><p className="font-semibold">You</p><p>{item}</p><p className="mt-1 text-xs text-slate-500">Just now · Read</p></div>)}
          <form className="flex gap-2 border-t border-slate-100 pt-3" onSubmit={(event) => { event.preventDefault(); if (message.trim()) { setSent((items) => [...items, message.trim()]); setMessage(""); } }}><Input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write a message…"/><Button variant="primary" type="submit">Send</Button></form>
        </CardContent>
      </Card>

      <Card className="rounded-3xl border-slate-200 bg-white/95">
        <CardHeader>
          <CardTitle>Shared docs & media</CardTitle>
          <CardDescription>Images, documents, and voice notes appear here.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          {["Move-in checklist", "ID verification", "House rules", "Voice note"].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-600">{item}</div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export function NotificationsView() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {notifications.map((item) => (
        <Card key={item.title} className="rounded-3xl border-slate-200 bg-white/95">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">{item.description}</p>
            <p className="mt-3 text-xs text-slate-400">{item.time}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function SavedView() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {rooms.map((room) => (
        <Card key={room.id} className="rounded-3xl border-slate-200 bg-white/95">
          <img src={room.image} alt={room.title} className="h-44 w-full rounded-2xl object-cover" />
          <CardContent className="pt-4">
            <h3 className="text-lg font-semibold text-slate-900">{room.title}</h3>
            <p className="text-sm text-slate-500">{room.host}</p>
            <p className="mt-4 font-semibold text-slate-900">${room.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function WalletView() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <Card className="rounded-3xl border-slate-200 bg-white/95">
        <CardHeader>
          <CardTitle>Wallet overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-primary p-5 text-white">
            <p className="text-sm">Platform credits</p>
            <p className="text-4xl font-semibold">${walletSummary.credits}</p>
          </div>
          <div className="grid gap-2 text-sm text-slate-600">
            <p>Referral rewards: ${walletSummary.referralRewards}</p>
            <p>Coupons: {walletSummary.coupons}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl border-slate-200 bg-white/95">
        <CardHeader>
          <CardTitle>Payment history</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {walletSummary.paymentHistory.map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
              <span>{item}</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export function ProfileView() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
      <Card className="rounded-3xl border-slate-200 bg-white/95">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Verification status and travel history</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">AR</div>
            <div>
              <p className="text-lg font-semibold text-slate-900">Ava R.</p>
              <p className="text-sm text-slate-500">Student • Los Angeles</p>
            </div>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800">Verified identity • Verified student ID • Preferences set</div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl border-slate-200 bg-white/95">
        <CardHeader>
          <CardTitle>Preferences and reviews</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">Food: Vegetarian • Smoking: No • Pets: No • Language: English, Hindi</p>
          <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">Travel history: 3 successful swaps • 4.9 average host rating</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function SettingsView() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[
        { title: "Dark mode", desc: "Switch on for low-light browsing" },
        { title: "Language", desc: "English • Hindi • Spanish" },
        { title: "Notification settings", desc: "Booking, match, and chat alerts" },
        { title: "Privacy", desc: "Control visibility and data sharing" },
      ].map((setting) => (
        <Card key={setting.title} className="rounded-3xl border-slate-200 bg-white/95">
          <CardHeader>
            <CardTitle>{setting.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">{setting.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function ListingsView() {
  return <div className="space-y-6"><div className="flex flex-wrap items-center justify-between gap-4"><div><h2 className="text-2xl font-semibold text-slate-900">My listings</h2><p className="text-sm text-slate-500">Manage the rooms you share with verified members.</p></div><Button variant="primary">Create listing</Button></div><div className="grid gap-4 md:grid-cols-2">{rooms.slice(0, 2).map((room, i) => <Card key={room.id} className="overflow-hidden rounded-3xl border-slate-200 bg-white"><img src={room.image} alt={room.title} className="h-44 w-full object-cover"/><CardContent className="pt-4"><div className="flex justify-between"><div><h3 className="font-semibold text-slate-900">{room.title}</h3><p className="text-sm text-slate-500">{i ? "Draft — complete details" : "Live — 18 views this week"}</p></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">{i ? "Draft" : "Live"}</span></div><div className="mt-4 flex gap-2"><Button variant="glass" size="sm">Edit</Button><Link href={`/search/${room.id}`}><Button variant="ghost" size="sm">Preview</Button></Link></div></CardContent></Card>)}</div></div>;
}

export function BookingFlowView() {
  const [complete, setComplete] = useState(false);
  if (complete) return <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-2xl rounded-[32px] border border-emerald-200 bg-emerald-50 p-10 text-center"><CheckCircle2 className="mx-auto h-16 w-16 text-emerald-600"/><h2 className="mt-4 text-3xl font-semibold text-slate-900">Your swap is booked.</h2><p className="mt-2 text-slate-600">Mia has been notified and your invoice is ready.</p><Link href="/bookings" className="mt-6 inline-block"><Button variant="primary">View booking</Button></Link></motion.div>;
  return <div className="mx-auto max-w-3xl space-y-5"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-600">Secure booking</p><h2 className="text-3xl font-semibold text-slate-900">Confirm your swap</h2></div><Card className="rounded-3xl"><CardContent className="grid gap-4 pt-6 sm:grid-cols-2"><div><label className="text-sm font-medium">Move-in date</label><Input type="date" className="mt-2"/></div><div><label className="text-sm font-medium">Move-out date</label><Input type="date" className="mt-2"/></div></CardContent></Card><Card className="rounded-3xl"><CardHeader><CardTitle>Payment summary</CardTitle><CardDescription>Transparent pricing, secure payment.</CardDescription></CardHeader><CardContent className="space-y-3 text-sm"><p className="flex justify-between"><span>Stay total</span><b>$1,450</b></p><p className="flex justify-between"><span>Platform fee</span><b>$49</b></p><p className="flex justify-between"><span>Refundable security deposit</span><b>$250</b></p><p className="flex justify-between border-t pt-3 text-base"><span>Total due today</span><b>$1,749</b></p><Button variant="primary" className="w-full" onClick={() => setComplete(true)}>Book swap securely</Button></CardContent></Card></div>;
}

export function AdminLoginCard() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-md rounded-[32px] border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-semibold text-slate-900">Admin login</h1>
        <div className="mt-4 space-y-3">
          <Input placeholder="Admin email" />
          <Input placeholder="Password" type="password" />
          <Link href="/admin/dashboard">
            <Button variant="primary" className="w-full">Unlock admin panel</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AdminDashboardView() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {[
        { title: "Approve users", value: "48 pending" },
        { title: "Verify IDs", value: "21 pending" },
        { title: "Manage listings", value: "86 active" },
        { title: "Manage bookings", value: "312 total" },
        { title: "Reports", value: "3 critical" },
        { title: "Support tickets", value: "5 open" },
      ].map((item) => (
        <Card key={item.title} className="rounded-3xl border-slate-200 bg-white/95">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
