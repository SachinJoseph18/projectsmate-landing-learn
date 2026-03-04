"use client";

import "./globals.css";
import { useState } from "react";

// utility styles moved into Tailwind classes; responsive variants used inline below

// (retained constants for legacy but not used)
const containerStyle = {} as const;
const headingStyle = {} as const;
const paragraphStyle = {} as const;

export default function Home() {
  const [joined, setJoined] = useState(false);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#F4F5F5] text-[#2E2E2E] text-center px-6 py-16 sm:px-8">
      {/* subtle architectural grid */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\'><path d=\'M20 0 L0 0 0 20\' fill=\'none\' stroke=\'%23e0e0e0\' stroke-width=\'0.5\'/></svg>')] bg-[length:20px_20px]"></div>

      {/* Hero */}
      <section className="w-full max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          {/* split to create two-line headline with accent on second line */}
          <span className="block text-[#2E2E2E]">Projectsmate</span>
  
        </h1>

        <p className="text-lg sm:text-xl text-[#5A5A5A] mb-10">
          The financial operating system for architects.
        </p>

        <button
          onClick={() => setJoined(true)}
          className="w-full sm:w-auto px-8 py-4 text-lg sm:text-xl bg-[#55636B] hover:bg-[#44555C] rounded-lg font-semibold text-white"
        >
          Join the Waitlist
        </button>

        {joined && (
          <p className="mt-4 text-[#5A5A5A]">
            You're on the list.
          </p>
        )}
      </section>

      {/* Problem */}
      <section className="w-full max-w-3xl mt-24 text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#2E2E2E]">The Problem</h2>
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
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#2E2E2E]">How it works</h2>
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
            • <strong>Translate</strong> — get a live profitability view: planned
            vs actual margin, cost breakdowns, revenue vs outstanding, and more
          </li>
        </ul>
      </section>

      {/* Why now */}
      <section className="w-full max-w-3xl mt-24 text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#2E2E2E]">Why now</h2>
        <p className="text-[#5A5A5A] leading-relaxed">
          Architecture studios are smaller, margins are tighter, and workflows are
          fully digital. AI is reshaping professional services, but without
          structured commercial data the insights are noise. The first platform to
          define the financial operating layer for independent studios will be
          foundational—and that window is open now. It won’t stay open for long.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-[#5A5A5A]">
        © {new Date().getFullYear()} Projectsmate.
      </footer>
    </main>
  );
}