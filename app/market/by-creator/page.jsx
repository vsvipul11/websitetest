import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import MarketTabs from "@/components/market-tabs"
import { Search } from "lucide-react"
import Link from "next/link"

const creators = Array(20).fill({
  id: "chris-kogias",
  name: "Chris Kogias",
  role: "YouTuber",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20By%20Creator-oF551xJ0RW1shFyXB2YmgHVhcu7Cjb.png",
  items: 35,
})

export default function ByCreator() {
  return (
    <div className="min-h-screen bg-[#121214]">
      <Sidebar />
      <Header />

      <main className="pl-[72px] pt-16">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FFA500]">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-[17px] font-medium text-white">Market</span>
            </div>
          </div>

          <MarketTabs activeTab="by creator" />

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" size={18} />
              <input
                type="text"
                placeholder="Search users, packs etc..."
                className="w-full h-10 bg-[#1C1C1E] border border-[#2C2C2E] rounded-lg pl-10 pr-4 text-[13px] text-white placeholder-[#6B7280] focus:outline-none focus:border-[#00FF9D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {creators.map((creator, i) => (
              <Link key={i} href={`/market/creators/${creator.id}`} className="text-center">
                <div className="relative mb-3">
                  <img
                    src={creator.image || "/placeholder.svg"}
                    alt={creator.name}
                    className="w-full aspect-square rounded-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-full" />
                </div>
                <h3 className="text-[15px] font-medium text-white">{creator.name}</h3>
                <p className="text-[13px] text-[#6B7280] mb-2">{creator.role}</p>
                <button className="px-3 py-1 bg-[#1C1C1E] rounded-full text-[13px] text-[#00FF9D] hover:bg-[#2C2C2E] transition-colors">
                  Explore {creator.items} items
                </button>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

