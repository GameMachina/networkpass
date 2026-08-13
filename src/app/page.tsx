"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CreditCard,
  Gift,
  Globe2,
  MapPin,
  Sparkles,
  Store,
  Users,
  WalletCards,
} from "lucide-react";

const memberFeatures = [
  {
    icon: MapPin,
    title: "Discover what’s inside",
    copy: "Find food, fitness, wellness, coworking, services, places to stay, and experiences available through your network.",
  },
  {
    icon: WalletCards,
    title: "Pay with Network Credits",
    copy: "Top up once, then use credits across participating places and experiences without juggling different payment flows.",
  },
  {
    icon: CalendarDays,
    title: "Join what’s happening",
    copy: "See online and offline events, reserve your spot, and keep everything you’ve booked in one place.",
  },
  {
    icon: Gift,
    title: "Unlock more by participating",
    copy: "Your activity can unlock member benefits, discounts, access, and rewards that make the network better to use over time.",
  },
];

const operatorFeatures = [
  "Launch memberships and packages",
  "Publish events and experiences",
  "Accept credits across partner merchants",
  "Reward members for participating",
  "See how economic activity moves through the network",
  "Give members one consistent experience everywhere",
];

const steps = [
  {
    n: "01",
    title: "Join a network",
    copy: "Your pass connects you to the people, places, events, and benefits available in that community.",
  },
  {
    n: "02",
    title: "Top up credits",
    copy: "Add value to your pass and use it across participating merchants, experiences, and packages.",
  },
  {
    n: "03",
    title: "Use the network",
    copy: "Eat, work, train, attend events, book experiences, and move through the community from one app.",
  },
  {
    n: "04",
    title: "Unlock more",
    copy: "Participation earns access to better benefits and gives the community a clearer picture of what its members value.",
  },
];

function LogoMark() {
  return (
    <div className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="absolute h-5 w-5 rotate-45 rounded-[5px] border border-cyan-300/70" />
      <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.8)]" />
    </div>
  );
}

function AppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="absolute -inset-10 -z-10 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#0c0d10] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
        <div className="rounded-[30px] border border-white/[0.06] bg-[#111318] p-5">
          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="text-xs text-white/45">Good morning</p>
              <p className="mt-1 font-semibold text-white">Your Network</p>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-semibold text-black">J</div>
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 p-5 text-[#061019] shadow-[0_18px_45px_rgba(56,189,248,0.18)]">
            <div className="absolute right-[-28px] top-[-40px] h-36 w-36 rounded-full border border-white/30" />
            <div className="absolute right-3 top-7 h-20 w-20 rounded-full border border-white/25" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/55">Network Credits</p>
                  <p className="mt-2 text-3xl font-bold tracking-tight">1,240</p>
                </div>
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-black/50">Member</p>
                  <p className="mt-1 text-sm font-semibold">NETWORK PASS</p>
                </div>
                <button className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">Top up</button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <h3 className="font-semibold text-white">Around you</h3>
            <span className="text-xs text-cyan-300">See all</span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
              <div className="mb-8 grid h-9 w-9 place-items-center rounded-xl bg-amber-300/10 text-amber-200">
                <Store className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-white">Breakfast Club</p>
              <p className="mt-1 text-xs text-white/40">Food · 0.3 km</p>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
              <div className="mb-8 grid h-9 w-9 place-items-center rounded-xl bg-violet-300/10 text-violet-200">
                <CalendarDays className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-white">Builder Dinner</p>
              <p className="mt-1 text-xs text-white/40">Tonight · 7:00 PM</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">This month</p>
                <p className="mt-1 text-xs text-white/40">Keep participating to unlock more</p>
              </div>
              <div className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-300">8 / 10</div>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-4/5 rounded-full bg-emerald-300" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-5 gap-2 border-t border-white/[0.06] pt-4 text-center text-[9px] text-white/35">
            {[
              ["Home", "●"],
              ["Explore", "⌕"],
              ["Events", "◇"],
              ["Upcoming", "◷"],
              ["Profile", "○"],
            ].map(([label, glyph], index) => (
              <div key={label} className={index === 0 ? "text-cyan-300" : ""}>
                <div className="mb-1 text-base leading-none">{glyph}</div>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Unable to join");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#07080a] text-white selection:bg-cyan-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-40 [background-image:radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_32%)]" />

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <LogoMark />
          <span className="text-sm font-semibold tracking-[-0.01em] sm:text-base">Network Pass</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-white/55 md:flex">
          <a className="transition hover:text-white" href="#members">For members</a>
          <a className="transition hover:text-white" href="#communities">For communities</a>
          <a className="transition hover:text-white" href="#how">How it works</a>
        </nav>
        <a
          href="#join"
          className="rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-200"
        >
          Join early access
        </a>
      </header>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-14 sm:px-8 md:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:px-10 lg:pb-32 lg:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            The membership layer for real-world communities
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px]">
            Your community,
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">in one pass.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58 sm:text-xl">
            Network Pass is a membership and payments app for communities. Members use one pass to pay, book events and experiences, and unlock benefits — while the community gets one place to organize participation and understand its economy.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#join"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-[#061013] transition hover:bg-cyan-200"
            >
              Join Network Pass
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white/80 transition hover:bg-white/[0.07]"
            >
              See how it works
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/45">
            {["One membership", "One balance", "One place for events", "Benefits for participation"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-cyan-300" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <AppPreview />
      </section>

      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
          {[
            { icon: Users, title: "For members", copy: "Everything the community offers, without the fragmentation." },
            { icon: Store, title: "For local partners", copy: "A simple way to reach and serve members already inside the network." },
            { icon: Globe2, title: "For community builders", copy: "The infrastructure to turn a group of people into a functioning local economy." },
          ].map(({ icon: Icon, title, copy }, index) => (
            <div key={title} className={`py-10 md:px-8 ${index > 0 ? "border-t border-white/[0.07] md:border-l md:border-t-0" : ""}`}>
              <Icon className="mb-5 h-5 w-5 text-cyan-300" />
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/45">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="members" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">For members</p>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Stop stitching your community life together.</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/50">
              Communities already have places to eat, things to do, people to meet, and benefits to unlock. Network Pass puts all of it behind one simple membership.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {memberFeatures.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-white/[0.14] hover:bg-white/[0.04]">
                <div className="mb-10 grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="communities" className="relative z-10 border-y border-white/[0.07] bg-[#0b0d10]">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">For community builders</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A community becomes real when people can live inside it.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
              Network Pass gives communities a shared commercial layer — membership, payments, experiences, events, and benefits — so participation stops being scattered across chats, spreadsheets, ticketing tools, and individual merchants.
            </p>
          </div>
          <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
            <div className="flex items-center gap-3 border-b border-white/[0.07] pb-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300 text-black">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Your network</p>
                <p className="text-xs text-white/40">One operating layer</p>
              </div>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {operatorFeatures.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-2xl border border-white/[0.06] bg-black/20 p-4">
                  <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-300/10 text-cyan-300">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm leading-6 text-white/65">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">How it works</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">From “I’m in the group” to “I live in the network.”</h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.n} className="bg-[#0a0b0e] p-7 sm:p-8">
              <span className="font-mono text-xs text-cyan-300">{step.n}</span>
              <h3 className="mt-14 text-xl font-semibold tracking-[-0.025em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="join" className="relative z-10 px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.10] via-white/[0.025] to-blue-500/[0.08] px-6 py-16 text-center sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto w-fit"><LogoMark /></div>
            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Build more than a community.</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/50">
              Build the layer that lets people actually participate in it. Join early access to Network Pass.
            </p>
            {status === "success" ? (
              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-5 py-3.5 text-sm font-medium text-emerald-200">
                <Check className="h-4 w-4" />
                You’re on the list. We’ll be in touch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-full border border-white/10 bg-black/30 px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-300/50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-200 disabled:cursor-wait disabled:opacity-60"
                >
                  {status === "loading" ? "Joining…" : "Join early access"}
                  {status !== "loading" && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
            {status === "error" && <p className="mt-3 text-sm text-red-300">Something went wrong. Try again.</p>}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.07] px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 text-sm text-white/35 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-white/65">
            <LogoMark />
            <span className="font-semibold">Network Pass</span>
          </div>
          <p>Membership. Payments. Participation.</p>
        </div>
      </footer>
    </main>
  );
}
