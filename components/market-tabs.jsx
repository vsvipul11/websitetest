import Link from 'next/link'

const tabs = [
  { name: 'Packs', href: '/market/packs' },
  { name: 'Auctions', href: '/market/auctions' },
  { name: 'Instant Buy', href: '/market/instant-buy' },
  { name: 'Trading', href: '/market/trading' },
  { name: 'By Creator', href: '/market/by-creator' }
]

export default function MarketTabs({ activeTab }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors
            ${activeTab === tab.name.toLowerCase()
              ? 'bg-[#FFA500] text-black' 
              : 'bg-[#1C1C1E] text-white hover:bg-[#2C2C2E]'
            }`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  )
}

