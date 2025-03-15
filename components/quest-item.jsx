export default function QuestItem({ progress, total, title, reward }) {
  const percentage = (progress / total) * 100

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="#1C1C1E"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="#00FF9D"
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${percentage * 1.256} 126`}
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[11px] text-white font-medium">
          {progress}/{total}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-[15px] font-medium text-white truncate">{title}</h4>
        <div className="text-[13px] text-[#6B7280]">Streamers</div>
      </div>
      <div className="flex items-center gap-1 flex-shrink-0">
        <img src="/coin.svg" alt="LX" className="w-4 h-4" />
        <span className="text-[15px] font-medium text-white">{reward}</span>
      </div>
    </div>
  )
}

