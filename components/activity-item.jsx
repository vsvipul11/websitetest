export default function ActivityItem({ user, action, item }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="w-8 h-8 rounded-full bg-[#1C1C1E] flex-shrink-0">
        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 text-[13px]">
          <span className="text-[#6B7280] truncate">{user.name}</span>
          <span className="text-[#6B7280] truncate">{action}</span>
        </div>
        <div className="text-[13px] font-medium text-white truncate">{item}</div>
      </div>
      <img src="/coin.svg" alt="LX" className="w-5 h-5 flex-shrink-0" />
    </div>
  )
}

