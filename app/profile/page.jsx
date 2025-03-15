"use client"

import { Flag } from "lucide-react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#121214]">
      <Sidebar />
      <Header />

      <main className="pl-[72px] pt-16">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Profile%20%26%20Profile%20Dropdown-dwg83j3qj7QxLfuLJfMK173v47SFxp.png"
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <div className="flex items-center gap-2">
                <Flag className="w-4 h-4" />
                <h1 className="text-xl font-medium text-white">redragen39</h1>
                <span className="text-[#6B7280]">#3450</span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-[13px] text-[#6B7280]">
                <span>50 Cards</span>
                <span>•</span>
                <span>9 Followers</span>
                <span>•</span>
                <span>130 Following</span>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <button className="px-4 py-1.5 bg-[#1C1C1E] rounded-lg text-[13px] text-white hover:bg-[#2C2C2E] transition-colors">
                  Discord
                </button>
                <button className="px-4 py-1.5 bg-[#1C1C1E] rounded-lg text-[13px] text-white hover:bg-[#2C2C2E] transition-colors">
                  Instagram
                </button>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-[17px] font-medium text-white mb-6">Collection Showcase</h2>
            <div className="grid grid-cols-6 gap-4">
              {Array(6)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="bg-[#1C1C1E] rounded-lg overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Profile%20%26%20Profile%20Dropdown-dwg83j3qj7QxLfuLJfMK173v47SFxp.png"
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

          <section>
            <h2 className="text-[17px] font-medium text-white mb-6">Current Listings</h2>
            <div className="grid grid-cols-4 gap-4">
              {Array(3)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="bg-[#1C1C1E] rounded-lg overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Profile%20%26%20Profile%20Dropdown-dwg83j3qj7QxLfuLJfMK173v47SFxp.png"
                      alt="Card"
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-[15px] font-medium text-white mb-2">WLG Streamer Legend</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <img src="/coin.svg" alt="LX" className="w-4 h-4" />
                          <span className="text-[13px] text-white">2.30</span>
                        </div>
                        <span className="text-[11px] text-[#6B7280]">2 bids</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-[11px] text-[#6B7280]">Ends in 00:40</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

