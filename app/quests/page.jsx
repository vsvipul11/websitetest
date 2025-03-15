'use client'

import Sidebar from '@/components/sidebar'
import Header from '@/components/header'

const tabs = [
  { name: 'Onboarding', active: true },
  { name: 'Daily', active: false },
  { name: 'Weekly', active: false },
  { name: 'Monthly', active: false },
  { name: 'General', active: false }
]

const quests = Array(8).fill({
  progress: 1,
  total: 4,
  title: 'Unlock 4 WLG Streamers',
  difficulty: 'Hard',
  reward: 40,
  color: ['#FF4D4D', '#FFA500', '#00FF9D'][Math.floor(Math.random() * 3)]
})

export default function Quests() {
  return (
    <div className="min-h-screen bg-[#121214]">
      <Sidebar />
      <Header />
      
      <main className="pl-[72px] pt-16">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00FF9D]">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-[17px] font-medium text-white">Your Quests</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors
                  ${tab.active 
                    ? 'bg-[#00FF9D] text-black' 
                    : 'bg-[#1C1C1E] text-white hover:bg-[#2C2C2E]'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4">
            {quests.map((quest, i) => (
              <div key={i} className="bg-[#1C1C1E] rounded-xl p-6 flex flex-col items-center text-center">
                <div className="relative w-20 h-20 mb-4">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="#2C2C2E"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke={quest.color}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(quest.progress / quest.total) * 226} 226`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[15px] text-white font-medium">
                    {quest.progress}/{quest.total}
                  </div>
                </div>
                <h3 className="text-[15px] font-medium text-white mb-1">{quest.title}</h3>
                <p className="text-[13px] text-[#6B7280] mb-4">{quest.difficulty}</p>
                <div className="flex items-center gap-1">
                  <img src="/coin.svg" alt="LX" className="w-4 h-4" />
                  <span className="text-[15px] font-medium text-white">{quest.reward}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

