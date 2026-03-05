"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [joined, setJoined] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  async function fetchCount() {
    const { data, error } = await supabase
      .from("waitlist")
      .select("id");

    if (error) {
      console.log(error);
      return;
    }

    setCount(data.length);
  }

  fetchCount();
}, []);

async function joinWaitlist() {

  if (!email) {
    setMessage("Please enter your email.");
    return;
  }

  setLoading(true);

  const { error } = await supabase
    .from("waitlist")
    .insert([{ email }]);

  setLoading(false);

  if (error) {
    if (error.message.includes("duplicate")) {
      setMessage("Uh-oh. You're already on our list.");
    } else {
      setMessage("Something went wrong. Please try again.");
    }
    return;
  }

  setJoined(true);
  setEmail("");
  setMessage("You're on our list now.");
  setCount(count + 1);
}

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#F4F5F5] text-[#2E2E2E] text-center px-6 py-16 sm:px-8">

      {/* architectural grid */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\'><path d=\'M20 0 L0 0 0 20\' fill=\'none\' stroke=\'%23e0e0e0\' stroke-width=\'0.5\'/></svg>')] bg-[length:20px_20px]"></div>

      {/* Hero */}
      <section className="w-full max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          <span className="block text-[#4A7C7A]">Projectsmate</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#5A5A5A] mb-10">
          The financial operating system for architects.
        </p>

        {count !== null && (
            <p className="text-sm text-[#5A5A5A] mb-6">
            <strong>{count}</strong> architects are already waiting.
          </p>
        )}
        {/* EMAIL INPUT */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                joinWaitlist();
              }
            }}
            className="px-4 py-4 rounded-lg border border-gray-300 w-full sm:w-80 text-black"
          />

          <button
            onClick={joinWaitlist}
            disabled={loading || !email.includes("@")}
            className="px-8 py-4 text-lg bg-[#55636B] hover:bg-[#44555C] rounded-lg font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Joining..." : "Join the Waitlist"}
          </button>

        </div>

        {message && (
        <p className="mt-4 text-sm text-[#5A5A5A]">
        {message}
        </p>
        )}
      </section>

      {/* Problem */}
      <section className="w-full max-w-3xl mt-24 text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#2E2E2E]">
          The Problem
        </h2>

        <p className="text-[#5A5A5A] leading-relaxed mb-4">
          Architects run their own studios—but the financial side is an
          afterthought. Projects are priced upfront and then evolve over months
          with scope shifts, delays, and overruns. By the time a studio notices,
          the damage is done. The work and the money live in separate worlds,
          leaving principals blind to a project’s commercial health until
          billing or close.
        </p>

        <p className="text-[#5A5A5A] leading-relaxed">
          Projectsmate connects efforts, stages, expenses and payments so
          principals can see profitability in real time—and act while there’s
          still time.
        </p>
      </section>

      {/* How it works */}
      <section className="w-full max-w-3xl mt-24 text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#2E2E2E]">
          How it works
        </h2>

        <ul className="list-none p-0 text-[#5A5A5A]">
          <li className="mb-4">
            • <strong>Define</strong> — structure projects with budgets,
            timelines and payment schedules linked to milestones
          </li>

          <li className="mb-4">
            • <strong>Capture</strong> — log effort, expenses, and payments in
            one place
          </li>

          <li className="mb-4">
            • <strong>Translate</strong> — get a live profitability view:
            planned vs actual margin, cost breakdowns, revenue vs outstanding
          </li>
        </ul>
      </section>

      {/* Why now */}
      <section className="w-full max-w-3xl mt-24 text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#2E2E2E]">
          Why now
        </h2>

        <p className="text-[#5A5A5A] leading-relaxed">
          Architecture studios are smaller, margins are tighter, and workflows
          are fully digital. AI is reshaping professional services, but without
          structured commercial data the insights are noise. The first platform
          to define the financial operating layer for independent studios will
          be foundational—and that window is open now.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-[#5A5A5A]">
        © {new Date().getFullYear()} Projectsmate.
      </footer>

    </main>
  );
}