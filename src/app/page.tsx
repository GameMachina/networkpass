"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  BedDouble,
  Check,
  Coffee,
  Globe2,
  HeartHandshake,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

const inclusions = [
  { icon: BedDouble, title: "A place to live", copy: "Stay in homes and spaces inside the Network without rebuilding your life in every city." },
  { icon: Coffee, title: "Food & everyday life", copy: "Access meals, workspaces, wellness, and the places that make a location feel livable." },
  { icon: Users, title: "Built-in community", copy: "Arrive around people with shared values, ambitions, and a reason to know each other." },
  { icon: Sparkles, title: "Events & experiences", copy: "Join dinners, talks, activities, trips, and local experiences already happening around you." },
];

const locations = ["Kazakhstan", "Georgia", "Sri Lanka", "Vietnam", "Colombia", "More coming"];

function Mark() {
  return (
    <div className="relative grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.05]">
      <div className="absolute h-5 w-5 rotate-45 rounded-[5px] border border-cyan-300/70" />
      <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />
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
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.14),transparent_34%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <Mark />
          <span className="font-semibold tracking-tight">Network Pass</span>
        </a>
        <a href="#join" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-200">
          Join the Network
        </a>
      </header>

      <section id="top" className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-20 text-center sm:px-8 md:pb-32 md:pt-28 lg:px-10">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60">
          <Globe2 className="h-3.5 w-3.5 text-cyan-300" />
          A global lifestyle membership
        </div>

        <h1 className="mx-auto mt-7 max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[112px]">
          Pay 1 fee.
          <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">Live anywhere.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-white/58 sm:text-2xl">
          A world of places you belong.
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
          Network Pass gives you access to places to live, food, workspaces, events, experiences, and a built-in community across a growing network of locations.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#join" className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-[#061013] transition hover:bg-cyan-200">
            Join early access
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a href="#how" className="rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white/80 transition hover:bg-white/[0.07]">
            See what’s included
          </a>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-9 gap-y-4 px-5 py-6 text-sm text-white/42 sm:px-8 lg:px-10">
          {locations.map((location) => (
            <span key={location} className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-cyan-300" />
              {location}
            </span>
          ))}
        </div>
      </section>

      <section id="how" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">What membership means</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Land somewhere new. Already have a life there.</h2>
          <p className="mt-5 text-base leading-7 text-white/48 sm:text-lg">
            Instead of finding housing, rebuilding a social circle, discovering where to work, and figuring out what to do every time you move — the Network is already there.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {inclusions.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-6">
              <div className="mb-10 grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">The idea</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Your home stops being a single address.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-white/52">
            <p>
              Network Pass is for people who want the freedom to move without starting from zero every time they arrive somewhere new.
            </p>
            <p>
              Your membership travels with you. The city changes. The network doesn’t.
            </p>
            <div className="flex items-center gap-3 pt-2 text-white/80">
              <HeartHandshake className="h-5 w-5 text-cyan-300" />
              <span className="font-medium">A world of places you belong.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <div className="rounded-[32px] border border-white/[0.09] bg-gradient-to-b from-white/[0.055] to-white/[0.02] px-6 py-12 sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Early access</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Pay 1 fee. Live anywhere.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/48">
            Join the early list for new locations, founding-member access, and the first Network Pass memberships.
          </p>

          {status === "success" ? (
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] px-5 py-4 text-sm font-medium text-emerald-200">
              <Check className="h-4 w-4" />
              You’re on the list.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-black/30 px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/28 focus:border-cyan-300/50"
              />
              <button type="submit" disabled={status === "loading"} className="rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-[#061013] transition hover:bg-cyan-200 disabled:opacity-60">
                {status === "loading" ? "Joining…" : "Join early access"}
              </button>
            </form>
          )}
          {status === "error" && <p className="mt-3 text-sm text-red-300">Something went wrong. Try again.</p>}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.07] px-5 py-8 text-center text-xs text-white/30 sm:px-8">
        Network Pass — a global lifestyle membership.
      </footer>
    </main>
  );
}
