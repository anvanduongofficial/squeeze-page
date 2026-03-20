import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "You're in! Check your inbox.",
  robots: { index: false, follow: false },
}

const steps = [
  {
    n: 1,
    text: (
      <>Check your <strong className="text-textBase font-bold">Spam</strong> or <strong className="text-textBase font-bold">Promotions</strong> tab — it sometimes lands there.</>
    ),
  },
  {
    n: 2,
    text: (
      <>Move the email to your <strong className="text-textBase font-bold">Primary inbox</strong> so you don't miss future tips.</>
    ),
  },
  {
    n: 3,
    text: (
      <>Still nothing after 5 minutes? <strong className="text-textBase font-bold">Check the address</strong> you entered and try again.</>
    ),
  },
]

export default function ThankYouPage() {
  return (
    <main
      className="relative min-h-screen bg-bg text-textBase flex flex-col items-center justify-center px-5 py-6 overflow-x-hidden"
    >
      {/* Orbs */}
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{ width: 400, height: 400, background: 'rgba(74,222,128,0.08)', top: -100, right: -80, filter: 'blur(100px)' }}
      />
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{ width: 350, height: 350, background: 'rgba(124,58,237,0.12)', bottom: -80, left: -60, filter: 'blur(100px)' }}
      />

      {/* Card */}
      <div
        className="border-glow-green animate-card-in relative z-10 w-full max-w-[500px] rounded-3xl px-11 py-13 text-center overflow-hidden"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          boxShadow: '0 0 0 1px var(--border-lt) inset, 0 24px 60px rgba(0,0,0,0.5)',
          padding: '52px 44px',
        }}
      >
        {/* Check circle */}
        <div
          className="animate-pop-in w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-7"
          style={{
            background: 'var(--green-dim)',
            border: '1px solid rgba(74,222,128,0.25)',
          }}
        >
          <span className="text-[32px]" style={{ color: 'var(--green)' }}>✓</span>
        </div>

        <h1 className="font-fraunces font-black text-[clamp(26px,5vw,36px)] tracking-tight leading-snug mb-3">
          You're in! 🎉
        </h1>

        <p className="text-[15.5px] text-textMuted leading-relaxed mb-9">
          Your <strong className="text-textBase font-bold">Turn 1 Idea Into 10 Videos</strong> cheat sheet is on its way — check your inbox in the next minute or two.
        </p>

        {/* Steps */}
        <p className="font-mono text-[10px] tracking-[1.5px] uppercase text-textMuted mb-3.5">
          // Can't find it?
        </p>

        <div className="flex flex-col gap-2.5 text-left">
          {steps.map(({ n, text }) => (
            <div
              key={n}
              className="flex items-start gap-3.5 rounded-[14px] px-[18px] py-4"
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
              }}
            >
              <span
                className="flex-shrink-0 w-[28px] h-[28px] rounded-full flex items-center justify-center font-mono text-xs text-purpleLt mt-0.5"
                style={{
                  border: '1px solid rgba(168,85,247,0.4)',
                  background: 'var(--purple-dim)',
                }}
              >
                {n}
              </span>
              <p className="text-[14px] leading-relaxed text-textMuted">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer brand */}
      <p className="relative z-10 text-xs mt-6" style={{ color: 'rgba(157,143,191,0.4)' }}>
        Built with{' '}
        <a href="https://affitor.com" target="_blank" rel="noopener noreferrer" className="text-purpleLt font-semibold">
          HenryAI
        </a>
      </p>
    </main>
  )
}
