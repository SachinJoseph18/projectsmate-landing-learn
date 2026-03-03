"use client";

import { useState } from "react";

const containerStyle = {
  maxWidth: "800px",
  width: "100%",
  marginTop: "4rem",
  textAlign: "left" as const,
};

const headingStyle = {
  fontSize: "2.5rem",
  fontWeight: 600,
  marginBottom: "1rem",
};

const paragraphStyle = {
  color: "rgba(255,255,255,0.75)",
  lineHeight: 1.6,
};

export default function Home() {
  const [joined, setJoined] = useState(false);

  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#55636B",
        color: "white",
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      {/* Hero */}
      <section style={{ maxWidth: "700px", width: "100%" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "1rem" }}>
          Projectsmate.
        </h1>

        <p style={{ fontSize: "1.25rem", color: "#cbd5e1", marginBottom: "2.5rem" }}>
          The financial operating system for architects.
        </p>

        <button
          onClick={() => setJoined(true)}
          style={{
            padding: "16px 32px",
            fontSize: "1.125rem",
            backgroundColor: "#2F6F6B",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Join the Waitlist
        </button>

        {joined && (
          <p style={{ marginTop: "1rem", color: "#94a3b8" }}>
            You're on the list.
          </p>
        )}
      </section>

      {/* Problem */}
      <section style={containerStyle}>
        <h2 style={headingStyle}>The Problem</h2>
        <p style={paragraphStyle}>
          Architects run their own studios—but the financial side is an
          afterthought. Projects are priced upfront and then evolve over months
          with scope shifts, delays, and overruns. By the time a studio notices,
          the damage is done. The work and the money live in separate worlds,
          leaving principals blind to a project’s commercial health until
          billing or close.
        </p>
       <p
          style={{
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.6,
          }}
        >
          Projectsmate connects efforts, stages, expenses and payments so
          principals can see profitability in real time—and act while there’s
          still time.
        </p>
      </section>

      {/* How it works */}
      <section style={containerStyle}>
        <h2 style={headingStyle}>How it works</h2>
        <ul style={{ listStyle: "none", padding: 0, color: "#cbd5e1" }}>
            <li style={{ marginBottom: "1rem" }}>
            • <strong>Define</strong> — structure projects with budgets,
            timelines and payment schedules linked to milestones
          </li>
          <li style={{ marginBottom: "1rem" }}>
            • <strong>Capture</strong> — log effort, expenses, and payments in
            one place
          </li>
          <li style={{ marginBottom: "1rem" }}>
            • <strong>Translate</strong> — get a live profitability view: planned
            vs actual margin, cost breakdowns, revenue vs outstanding, and more
          </li>
        </ul>
      </section>

      {/* Why now */}
      <section style={containerStyle}>
        <h2 style={headingStyle}>Why now</h2>
        <p style={paragraphStyle}>
          Architecture studios are smaller, margins are tighter, and workflows are
          fully digital. AI is reshaping professional services, but without
          structured commercial data the insights are noise. The first platform to
          define the financial operating layer for independent studios will be
          foundational—and that window is open now. It won’t stay open for long.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: "6rem", color: "rgba(255,255,255,0.6)" }}>
        © {new Date().getFullYear()} Projectsmate.
      </footer>
    </main>
  );
}