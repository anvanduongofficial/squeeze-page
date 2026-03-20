const items = [
  'You want to post consistently without burning out',
  "You're starting a faceless YouTube or short-form channel",
  'You have ideas but no system to turn them into videos',
  "You want to use AI tools but don't know where to start",
]

export default function ForGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {items.map((item) => (
        <div
          key={item}
          className="
            flex items-center gap-3 text-[14.5px] px-[18px] py-3.5
            bg-surface border border-[rgba(124,58,237,0.2)] rounded-xl
            text-textBase
          "
        >
          <span
            className="w-[22px] h-[22px] flex-shrink-0 rounded-full flex items-center justify-center text-xs text-purpleLt font-bold"
            style={{
              background: 'rgba(124,58,237,0.2)',
              border: '1px solid rgba(168,85,247,0.3)',
            }}
          >
            ✓
          </span>
          {item}
        </div>
      ))}
    </div>
  )
}
