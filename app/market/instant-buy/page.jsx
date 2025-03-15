import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import MarketTabs from "@/components/market-tabs"
import { Search } from "lucide-react"
import Link from "next/link"

const filters = [
  { name: "Availability", options: ["All", "Available", "Coming Soon"] },
  { name: "All Creators", options: ["Creator 1", "Creator 2"] },
  { name: "All Collections", options: ["Collection 1", "Collection 2"] },
  { name: "Sort Low to High", options: ["Price: Low to High", "Price: High to Low"] },
]

const items = Array(12).fill({
  id: "goat-player",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Instant%20Buy-371GVUOAC4z8xo9lgrUwsWt57o6Vhg.png",
  title: "Goat Player",
  price: "2.30",
})

export default function InstantBuy() {
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

          <MarketTabs activeTab="instant buy" />

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.name}
                  className="px-4 py-1.5 rounded-lg bg-[#1C1C1E] text-[13px] text-white hover:bg-[#2C2C2E] transition-colors flex items-center gap-2"
                >
                  {filter.name}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" size={18} />
              <input
                type="text"
                placeholder="Search users, packs etc..."
                className="w-[280px] h-9 bg-[#1C1C1E] border border-[#2C2C2E] rounded-lg pl-10 pr-4 text-[13px] text-white placeholder-[#6B7280] focus:outline-none focus:border-[#00FF9D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {items.map((item, i) => (
              <Link key={i} href={`/market/instant-buy/${item.id}`} className="bg-[#1C1C1E] rounded-lg overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-[15px] font-medium text-white mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <img src="/coin.svg" alt="LX" className="w-4 h-4" />
                      <span className="text-[13px] text-white">{item.price}</span>
                    </div>
                    <button className="px-3 py-1 bg-[#2C2C2E] rounded text-[13px] text-white hover:bg-[#3C3C3E] transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

