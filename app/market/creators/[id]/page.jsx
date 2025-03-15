"use client"

import Link from "next/link"
import { ChevronLeft, Instagram } from "lucide-react"
import { DiscIcon as Discord } from "lucide-react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

const stats = [
  { label: "Collectibles", value: "150" },
  { label: "Packs Available", value: "10" },
  { label: "Packs Released", value: "35" },
  { label: "Trending Creator", value: "#4" },
  { label: "Epic Cards", value: "3" },
]

const rarityFilters = [
  { label: "Uncommon", percentage: "50%" },
  { label: "Epic", percentage: "10%" },
  { label: "Rare", percentage: "10%" },
  { label: "Legendary", percentage: "10%" },
  { label: "Mythic", percentage: "20%" },
]

export default function CreatorPage() {
  return (
    <div className="min-h-screen bg-[#121214]">
      <Sidebar />
      <Header />

      <main className="pl-[72px] pt-16">
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-[#4A154B] to-[#2C1C2D]" />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/market"
                className="flex items-center gap-2 text-[13px] text-[#6B7280] hover:text-white transition-colors"
              >
                <ChevronLeft size={16} />
                Back to Market
              </Link>
              <h1 className="text-[17px] font-medium text-white">Franco Packs</h1>
            </div>

            <div className="flex items-end justify-between">
              <div className="flex items-end gap-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Creator%20Page-qdLYZmqBIYdHKQaMraAnVdEd1CqeBP.png"
                  alt="Franco"
                  className="w-32 h-32 rounded-full border-4 border-[#121214]"
                />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">Franco</h2>
                  <p className="text-[15px] text-[#6B7280]">10 Packs - 150 Collectible Cards</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Link
                      href="#"
                      className="px-4 py-1.5 bg-[#1C1C1E] rounded-lg text-[13px] text-white hover:bg-[#2C2C2E] transition-colors flex items-center gap-2"
                    >
                      <Instagram size={16} />
                      Instagram
                    </Link>
                    <Link
                      href="#"
                      className="px-4 py-1.5 bg-[#1C1C1E] rounded-lg text-[13px] text-white hover:bg-[#2C2C2E] transition-colors flex items-center gap-2"
                    >
                      <Discord size={16} />
                      Discord
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 mt-24">
          <div className="grid grid-cols-5 gap-4 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[13px] text-[#6B7280]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="text-[17px] font-medium text-white mb-6">Packs Available</h3>
              <div className="grid grid-cols-3 gap-4">
                {Array(3)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-[#1C1C1E] to-[#1C1C1E]/80">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Pack%20Page-UjTUFPnL9Y20U1EWI0L7nUzZ8OMStB.png"
                          alt="Pack"
                          className="w-full aspect-square object-contain p-4 transition-transform group-hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="mt-3 space-y-1">
                        <h3 className="text-[15px] font-medium text-white">Kogias Pack</h3>
                        <p className="text-[13px] text-[#6B7280]">1x pack Summer Goatz, 1x WLG Pack, 2x Simple Packs</p>
                        <button className="mt-2 px-4 py-2 bg-[#1C1C1E] rounded-lg text-[13px] text-white hover:bg-[#2C2C2E] transition-colors flex items-center">
                          Buy Now
                          <div className="flex items-center gap-1 ml-2">
                            <img src="/coin.svg" alt="LX" className="w-4 h-4" />
                            <span className="text-[#FFA500]">2.30</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            <section>
              <h3 className="text-[17px] font-medium text-white mb-4">Cards Pool</h3>
              <div className="flex items-center gap-2 mb-6">
                {rarityFilters.map((filter) => (
                  <button
                    key={filter.label}
                    className="px-4 py-1.5 rounded-lg bg-[#1C1C1E] text-[13px] text-white hover:bg-[#2C2C2E] transition-colors"
                  >
                    {filter.label} ({filter.percentage})
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-4">
                {Array(6)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} className="bg-[#1C1C1E] rounded-lg overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Creator%20Page-qdLYZmqBIYdHKQaMraAnVdEd1CqeBP.png"
                        alt="Card"
                        className="w-full aspect-[3/4] object-cover"
                      />
                      <div className="p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[13px] font-medium text-white">Goat Player</span>
                          <span className="text-[11px] text-[#6B7280]">32 Left</span>
                        </div>
                        <div className="mt-1">
                          <span className="text-[11px] px-2 py-0.5 bg-[#FFA500]/20 text-[#FFA500] rounded">Epic</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

