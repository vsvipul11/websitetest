export default function StatsCard({ value, label }) {
  return (
    <div className="bg-[#1C1C1E] rounded-xl p-6 text-center">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-sm text-[#6B7280] mt-1">{label}</div>
    </div>
  )
}

