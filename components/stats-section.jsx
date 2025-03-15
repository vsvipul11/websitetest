import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function StatsSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1C1C1E] flex items-center justify-center">
            <img src="/avatar.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
          </div>
          <span className="text-[17px] font-medium text-white">dimitrisp</span>
        </div>
        <Link 
          href="/collection" 
          className="text-[13px] text-[#6B7280] hover:text-white ml-auto flex items-center gap-1 group"
        >
          My Collection
          <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-[#1C1C1E] rounded-xl px-6 py-5">
          <div className="text-[32px] font-bold text-white leading-none mb-1">45</div>
          <div className="text-[13px] text-[#6B7280]">Cards Owned</div>
        </div>
        <div className="bg-[#1C1C1E] rounded-xl px-6 py-5">
          <div className="text-[32px] font-bold text-white leading-none mb-1">3</div>
          <div className="text-[13px] text-[#6B7280]">Cards for Sale</div>
        </div>
        <div className="bg-[#1C1C1E] rounded-xl px-6 py-5">
          <div className="text-[32px] font-bold text-white leading-none mb-1">5</div>
          <div className="text-[13px] text-[#6B7280]">Packs to Open</div>
        </div>
      </div>
    </section>
  )
}

