"use client"

import { Search } from "lucide-react"
import Link from "next/link"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import MarketTabs from "@/components/market-tabs"

const filters = [
  { name: "Availability", options: ["All", "Available", "Coming Soon"] },
  { name: "All Creators", options: ["Creator 1", "Creator 2"] },
  { name: "All Collections", options: ["Collection 1", "Collection 2"] },
  { name: "Sort Low to High", options: ["Price: Low to High", "Price: High to Low"] },
]

const packs = Array(15).fill({
  id: "summer-pack",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Packs-swQnw3lcHYmpyxpJh6KKPi4IcuP9Pd.png",
  title: "Summer Goatz",
  description: "5 Cards from the WLG Collection",
  price: "2.30",
  status: Math.random() > 0.3 ? "available" : "coming",
})

export default function Market() {
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

          <MarketTabs activeTab="packs" />

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

          <div className="grid grid-cols-5 gap-4">
            {packs.map((pack, i) => (
              <Link key={i} href={`/market/packs/${pack.id}`} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-[#1C1C1E] to-[#1C1C1E]/80">
                  <img
                    src={pack.image || "/placeholder.svg"}
                    alt={pack.title}
                    className="w-full aspect-square object-contain p-4 transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <h3 className="text-[15px] font-medium text-white">{pack.title}</h3>
                  <p className="text-[13px] text-[#6B7280]">{pack.description}</p>
                  {pack.status === "available" ? (
                    <button className="mt-2 px-4 py-2 bg-[#1C1C1E] rounded-lg text-[13px] text-white hover:bg-[#2C2C2E] transition-colors flex items-center">
                      Buy Now
                      <div className="flex items-center gap-1 ml-2">
                        <img src="/coin.svg" alt="LX" className="w-4 h-4" />
                        <span className="text-[#FFA500]">{pack.price}</span>
                      </div>
                    </button>
                  ) : (
                    <button className="mt-2 px-4 py-2 bg-[#1C1C1E] rounded-lg text-[13px] text-[#6B7280]">
                      Coming Soon
                    </button>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

