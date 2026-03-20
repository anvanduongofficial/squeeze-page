export default function CheatSheetVisual() {
  const steps = [
    'One script → 10 angles',
    'AI visuals + voiceover',
    'Auto subtitles + export',
    'Schedule & publish',
  ]

  return (
    <div className="animate-float relative inline-block mb-11">
      {/* Card */}
      <div
        className="cs-shine relative w-[270px] rounded-[18px] p-7 text-left overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #1a0f3a 0%, #2d1863 50%, #3b1f80 100%)',
          border: '1px solid rgba(124,58,237,0.4)',
          boxShadow: `
            0 0 0 1px rgba(168,85,247,0.1),
            0 30px 70px rgba(0,0,0,0.6),
            0 0 60px rgba(124,58,237,0.2)
          `,
        }}
      >
        {/* Tag */}
        <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-gold mb-3.5 block">
          // Cheat Sheet
        </span>

        {/* Title */}
        <p className="font-fraunces text-base font-bold italic text-textBase leading-snug mb-5">
          Turn 1 Idea Into 10 Videos (AI System)
        </p>

        {/* Steps */}
        <div className="flex flex-col gap-2">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[12px] text-textBase/65">
              <span
                className="flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center font-mono text-[9px] text-purpleLt"
                style={{
                  border: '1px solid rgba(168,85,247,0.4)',
                  background: 'rgba(124,58,237,0.2)',
                }}
              >
                {i + 1}
              </span>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Badge */}
      <div
        className="absolute -top-3 -right-3 w-[52px] h-[52px] rounded-full flex flex-col items-center justify-center text-center leading-tight"
        style={{
          background: '#e9b96e',
          color: '#1a0f3a',
          boxShadow: '0 4px 16px rgba(233,185,110,0.4)',
          border: '2px solid #0d0a1a',
        }}
      >
        <span className="font-fraunces font-black text-lg leading-none">10x</span>
        <span className="font-manrope font-bold text-[9px] tracking-tight leading-none">OUTPUT</span>
      </div>
    </div>
  )
}
