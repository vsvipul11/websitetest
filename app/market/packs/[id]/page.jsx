"use client"

import Link from "next/link"
import { ChevronLeft, Minus, Plus } from "lucide-react"
import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

const rarityFilters = [
  { label: "Uncommon", percentage: "50%" },
  { label: "Epic", percentage: "10%" },
  { label: "Rare", percentage: "10%" },
  { label: "Legendary", percentage: "10%" },
  { label: "Mythic", percentage: "20%" },
]

const packInfo = [
  { label: "Season", value: "2024/25" },
  { label: "Items in Pack", value: "7" },
  { label: "Packs Opened", value: "576" },
  { label: "Packs Remaining", value: "1,434" },
  { label: "Cards Pool", value: "500" },
]

export default function PackPage() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="min-h-screen bg-[#121214]">
      <Sidebar />
      <Header />

      <main className="pl-[72px] pt-16">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/market"
              className="flex items-center gap-2 text-[13px] text-[#6B7280] hover:text-white transition-colors"
            >
              <ChevronLeft size={16} />
              Back to Market
            </Link>
            <h1 className="text-[17px] font-medium text-white">WLG Summer Pack</h1>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Pack%20Page-UjTUFPnL9Y20U1EWI0L7nUzZ8OMStB.png"
                alt="WLG Summer Pack"
                className="w-full aspect-square object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-2">WLG Summer Pack</h2>
              <p className="text-[15px] text-[#6B7280] mb-6">
                7 Cards from <span className="text-white">WLG Summer Collection</span>
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center bg-[#1C1C1E] rounded-lg text-white hover:bg-[#2C2C2E]"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-[#1C1C1E] rounded-lg text-white hover:bg-[#2C2C2E]"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/coin.svg" alt="LX" className="w-5 h-5" />
                  <span className="text-[17px] font-medium text-white">20</span>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-[#FFA500] text-black rounded-lg font-medium hover:bg-[#FF9500] transition-colors">
                Buy Now
              </button>

              <div className="mt-8 grid grid-cols-5 gap-4">
                {packInfo.map((info) => (
                  <div key={info.label} className="text-center">
                    <div className="text-2xl font-bold text-white">{info.value}</div>
                    <div className="text-[13px] text-[#6B7280]">{info.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Pack%20Page-UjTUFPnL9Y20U1EWI0L7nUzZ8OMStB.png"
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
          </div>
        </div>
      </main>
    </div>
  )
}

