'use client'

import { Search } from 'lucide-react'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'

const tabs = [
  { name: 'Owned Collectibles', active: true },
  { name: 'Collections', active: false },
  { name: 'Packs to Open', active: false }
]

const filters = [
  { name: 'Sort by', options: ['Recent', 'Oldest', 'Price'] },
  { name: 'All Creators', options: ['Creator 1', 'Creator 2'] },
  { name: 'All Collections', options: ['Collection 1', 'Collection 2'] }
]

const cards = Array(12).fill({
  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Collection-6d23dX5FWOXRpDwuIeYkWVydqNNzPJ.png',
  title: 'Goat Player'
})

export default function Collection() {
  return (
    <div className="min-h-screen bg-[#121214]">
      <Sidebar />
      <Header />
      
      <main className="pl-[72px] pt-16">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00FF9D]">
                <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-[17px] font-medium text-white">My Collection</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors
                  ${tab.active 
                    ? 'bg-[#E91E63] text-white' 
                    : 'bg-[#1C1C1E] text-white hover:bg-[#2C2C2E]'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.name}
                  className="px-4 py-1.5 rounded-lg bg-[#1C1C1E] text-[13px] text-white hover:bg-[#2C2C2E] transition-colors flex items-center gap-2"
                >
                  {filter.name}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2"/>
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
            {cards.map((card, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-[#4A154B] to-[#2C1C2D]">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-[15px] font-medium text-white">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

