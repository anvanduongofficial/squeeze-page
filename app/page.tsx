import CheatSheetVisual from "@/components/CheatSheetVisual";
import FeatureGrid from "@/components/FeatureGrid";
import ForGrid from "@/components/ForGrid";
import OptinForm from "@/components/OptinForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free: Turn 1 Idea Into 10 Videos (AI System)",
  description:
    "A step-by-step system for creating multiple faceless videos from a single script — no editing skills needed.",
  robots: { index: false, follow: false },
};

/* ── Background orbs ── */
function Orbs() {
  return (
    <>
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{
          width: 500,
          height: 500,
          background: "rgba(124,58,237,0.18)",
          top: -180,
          left: -100,
          filter: "blur(100px)",
        }}
      />
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{
          width: 400,
          height: 400,
          background: "rgba(168,85,247,0.1)",
          bottom: -120,
          right: -80,
          filter: "blur(100px)",
        }}
      />
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{
          width: 300,
          height: 300,
          background: "rgba(233,185,110,0.06)",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          filter: "blur(100px)",
        }}
      />
    </>
  );
}

/* ── Section divider ── */
function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-16 text-textMuted font-mono text-[11px] tracking-[1.5px] uppercase">
      <span className="flex-1 h-px bg-[rgba(124,58,237,0.2)]" />
      {label}
      <span className="flex-1 h-px bg-[rgba(124,58,237,0.2)]" />
    </div>
  );
}

/* ── Form card wrapper ── */
function FormCard({ id }: { id: string }) {
  return (
    <div
      className="border-glow-purple relative rounded-[20px] p-9 overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow:
          "0 0 0 1px var(--border-lt) inset, 0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      <p className="font-fraunces text-xl font-bold text-center mb-1.5 text-textBase">
        Where should we send it?
      </p>
      <p className="text-sm text-textMuted text-center mb-6">
        Enter your email — the system arrives in your inbox instantly.
      </p>
      <OptinForm buttonText="Send Me the Free AI System →" formId={id} />
    </div>
  );
}

export default function OptinPage() {
  return (
    <main className="relative min-h-screen bg-bg text-textBase overflow-x-hidden">
      <Orbs />

      {/* ── HEADER ── */}
      <header className="relative z-10 pt-7 pb-5 text-center">
        <span className="font-mono text-[15px] tracking-[2px] uppercase text-purpleLt inline-flex items-center gap-2">
          <span className="text-gold opacity-70">[</span>
          Henry AI
          <span className="text-gold opacity-70">]</span>
        </span>
      </header>

      {/* ── HERO ── */}
      <section className="relative z-10 max-w-[680px] mx-auto px-5 pt-12 pb-16 text-center">
        {/* Badge */}
        <div className="animate-reveal-1">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-bold tracking-[1px] uppercase text-purpleLt mb-6"
            style={{
              border: "1px solid var(--border)",
              background: "var(--purple-dim)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purpleLt animate-pulse-dot" />
            Free Cheat Sheet · Instant Access
          </span>
        </div>

        {/* Headline */}
        <div className="animate-reveal-2">
          <h1 className="font-fraunces font-black text-[clamp(36px,7vw,58px)] leading-[1.05] tracking-[-1px] text-textBase mb-5">
            Turn <em className="italic text-purpleLt">1 idea</em> into
            <br />
            <span className="text-gold not-italic">10 videos</span> with AI
          </h1>
          <p className="text-[17px] text-textMuted max-w-[500px] mx-auto mb-10 leading-[1.7] font-medium">
            A step-by-step system for creating multiple faceless videos from a
            single script — no editing skills, no camera, no burnout.
          </p>
        </div>

        {/* Lead magnet visual */}
        <div className="animate-reveal-3 flex justify-center">
          <CheatSheetVisual />
        </div>

        {/* Form */}
        <div className="animate-reveal-4">
          <FormCard id="form-hero" />

          {/* Social proof */}
          <div className="flex items-center justify-center gap-2.5 mt-6 text-[13.5px] text-textMuted font-semibold">
            <div className="flex">
              {["S", "R", "K"].map((l, i) => (
                <span
                  key={l}
                  className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-xs font-extrabold text-white"
                  style={{
                    marginLeft: i === 0 ? 0 : -8,
                    border: "2px solid #0d0a1a",
                    background: ["#7c3aed", "#db2777", "#059669"][i],
                  }}
                >
                  {l}
                </span>
              ))}
            </div>
            <span>
              Joined by{" "}
              <strong className="text-textBase">
                2,800+ faceless creators
              </strong>
            </span>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section className="relative z-10 max-w-[680px] mx-auto px-5 pb-16">
        <Divider label="What's inside" />

        <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-purpleLt text-center mb-3">
          The full system
        </p>
        <h2 className="font-fraunces font-black text-[clamp(24px,4vw,32px)] tracking-tight text-center mb-2 leading-snug">
          Everything in the cheat sheet
        </h2>
        <p className="text-[15px] text-textMuted text-center mb-9">
          One page. Zero fluff. Ready to use today.
        </p>

        <FeatureGrid />
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="relative z-10 max-w-[680px] mx-auto px-5 pb-16">
        <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-purpleLt text-center mb-3">
          Right person?
        </p>
        <h2 className="font-fraunces font-black text-[clamp(24px,4vw,32px)] tracking-tight text-center mb-2 leading-snug">
          This is for you if…
        </h2>
        <p className="text-[15px] text-textMuted text-center mb-9">
          No experience needed. No face required.
        </p>

        <ForGrid />
      </section>

      {/* ── SECOND FORM ── */}
      <section className="relative z-10 max-w-[680px] mx-auto px-5 pb-16">
        <div
          className="border-glow-purple relative rounded-3xl p-11 text-center overflow-hidden"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <h2 className="font-fraunces font-black text-[28px] tracking-tight mb-2.5">
            Ready to 10x your output?
          </h2>
          <p className="text-[15px] text-textMuted mb-7">
            Drop your email — the cheat sheet lands in your inbox instantly.
          </p>
          <OptinForm
            buttonText="Get the Free AI System →"
            formId="form-bottom"
          />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 max-w-[680px] mx-auto px-5 py-10 text-center border-t border-[rgba(124,58,237,0.2)] mt-4">
        <div className="flex justify-center gap-5 text-xs text-textMuted mb-3.5">
          <a href="#" className="hover:text-textBase transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-textBase transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-textBase transition-colors">
            Contact
          </a>
        </div>
        <p className="text-xs text-textMuted/40">
          Built with{" "}
          <a
            href="https://affitor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purpleLt font-semibold"
          >
            HenryAI
          </a>
        </p>
      </footer>
    </main>
  );
}
