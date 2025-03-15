import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import MarketTabs from '@/components/market-tabs'
import { Search, Send } from 'lucide-react'

export default function Trading() {
  return (
    <div className="min-h-screen bg-[#121214]">
      <Sidebar />
      <Header />
      
      <main className="pl-[72px] pt-16">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FFA500]">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-[17px] font-medium text-white">Market</span>
            </div>
          </div>

          <MarketTabs activeTab="trading" />

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1">
              <h3 className="text-[15px] font-medium text-white mb-4">Search Collector</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" size={18} />
                <input
                  type="text"
                  placeholder="Search collector"
                  className="w-full h-10 bg-[#1C1C1E] border border-[#2C2C2E] rounded-lg pl-10 pr-4 text-[13px] text-white placeholder-[#6B7280] focus:outline-none focus:border-[#00FF9D]"
                />
              </div>
            </div>

            <div className="col-span-1">
              <h3 className="text-[15px] font-medium text-white mb-4">Trade Chat</h3>
              <div className="bg-[#1C1C1E] rounded-lg p-4 h-[400px] flex flex-col">
                <div className="flex-grow overflow-y-auto space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <img src="/avatar.jpg" alt="User" className="w-8 h-8 rounded-full" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-medium text-white">dimitrisp</span>
                          <span className="text-[11px] text-[#6B7280]">3:59 AM</span>
                        </div>
                        <p className="text-[13px] text-[#E5E7EB]">Magkes poios exei oreini melissa limited?</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="text"
                    placeholder="Type Your Message"
                    className="flex-grow h-10 bg-[#2C2C2E] rounded-lg px-4 text-[13px] text-white placeholder-[#6B7280] focus:outline-none focus:ring-1 focus:ring-[#00FF9D]"
                  />
                  <button className="bg-[#FFA500] text-black rounded-lg px-4 py-2 text-[13px] font-medium hover:bg-[#FF9500] transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[15px] font-medium text-white">Trades</h3>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 bg-[#1C1C1E] rounded-full text-[13px] text-white hover:bg-[#2C2C2E] transition-colors">
                    Incoming
                  </button>
                  <button className="px-3 py-1 bg-[#FFA500] rounded-full text-[13px] text-black hover:bg-[#FF9500] transition-colors">
                    Outgoing
                  </button>
                </div>
              </div>
              <div className="bg-[#1C1C1E] rounded-lg p-4">
                <h4 className="text-[13px] font-medium text-[#00FF9D] mb-2">What you get</h4>
                <div className="bg-[#2C2C2E] rounded-lg p-2 flex items-center gap-3 mb-4">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Trading-ytm0pSVAOxpboNKIzjfmxs3hrcfUKN.png" alt="WLG Legend Limited" className="w-12 h-12 rounded" />
                  <span className="text-[13px] text-white">WLG Legend Limited</span>
                </div>
                <h4 className="text-[13px] font-medium text-[#FF4D4D] mb-2">What they want</h4>
                <div className="bg-[#2C2C2E] rounded-lg p-2 flex items-center gap-3 mb-4">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Trading-ytm0pSVAOxpboNKIzjfmxs3hrcfUKN.png" alt="WLG Legend Limited" className="w-12 h-12 rounded" />
                  <span className="text-[13px] text-white">WLG Legend Limited</span>
                </div>
                <div className="bg-[#2C2C2E] rounded-lg p-2 flex items-center gap-3 mb-4">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Trading-ytm0pSVAOxpboNKIzjfmxs3hrcfUKN.png" alt="WLG Legend Limited" className="w-12 h-12 rounded" />
                  <span className="text-[13px] text-white">WLG Legend Limited</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex-1 px-4 py-2 bg-[#00FF9D] rounded-lg text-[13px] font-medium text-black hover:bg-[#00FF9D]/90 transition-colors">
                    Accept
                  </button>
                  <button className="flex-1 px-4 py-2 bg-[#FF4D4D] rounded-lg text-[13px] font-medium text-white hover:bg-[#FF4D4D]/90 transition-colors">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

