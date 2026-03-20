const features = [
  {
    icon: '🧠',
    title: 'The 1→10 Framework',
    desc: 'How to break one idea into 10 unique video angles — with real examples across niches.',
  },
  {
    icon: '📝',
    title: 'Plug-and-Play Script Structure',
    desc: 'A reusable template so every video starts with a hook, middle, and strong CTA.',
  },
  {
    icon: '🤖',
    title: 'AI Workflow Step-by-Step',
    desc: 'Exact tools and order of operations — from script to published video in under an hour.',
  },
  {
    icon: '⚡',
    title: 'Speed Multipliers',
    desc: '3 shortcuts that cut production time in half without sacrificing quality.',
  },
  {
    icon: '🎯',
    title: 'Niche Idea Bank',
    desc: '50 evergreen video ideas that work for any faceless channel — ready to plug in.',
  },
  {
    icon: '📦',
    title: 'Full Batch System',
    desc: 'How to AI-produce 10 videos in one sitting and schedule them for the week.',
  },
]

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      {features.map((f) => (
        <div
          key={f.title}
          className="
            flex items-start gap-3.5 rounded-[14px] p-[18px]
            bg-surface border border-[rgba(124,58,237,0.2)]
            hover:border-purpleLt/35 hover:shadow-[0_4px_20px_rgba(124,58,237,0.1)]
            transition-all duration-200
          "
        >
          <div
            className="w-[42px] h-[42px] flex-shrink-0 rounded-[10px] flex items-center justify-center text-xl"
            style={{
              background: 'rgba(124,58,237,0.15)',
              border: '1px solid rgba(124,58,237,0.2)',
            }}
          >
            {f.icon}
          </div>
          <div>
            <strong className="block text-[14.5px] font-bold text-textBase mb-0.5">{f.title}</strong>
            <span className="text-[13.5px] text-textMuted leading-relaxed">{f.desc}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
