"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Search, ChevronDown } from "lucide-react"
import ProfileDropdown from "./profile-dropdown"

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="h-16 border-b border-[#1C1C1E] flex items-center justify-between px-6 fixed top-0 right-0 left-[72px] bg-[#121214] z-40">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[#00FF9D] text-xl font-bold italic">LX</span>
          <span className="text-white text-xl font-bold">Creators</span>
          <ChevronDown size={20} className="text-[#6B7280]" />
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" size={18} />
          <input
            type="text"
            placeholder="Search users, packs etc..."
            className="w-[280px] h-9 bg-[#1C1C1E] border border-[#2C2C2E] rounded-lg pl-10 pr-4 text-[13px] text-white placeholder-[#6B7280] focus:outline-none focus:border-[#00FF9D]"
          />
        </div>

        <div className="relative">
          <Bell size={20} className="text-[#6B7280] hover:text-white cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF3B30] rounded-full text-[10px] flex items-center justify-center text-white font-medium">
            3
          </span>
        </div>

        <div className="flex items-center gap-2">
          <img src="/coin.svg" alt="LX Coin" className="w-5 h-5" />
          <span className="text-[15px] font-medium text-white">500</span>
        </div>

        <div className="relative">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <img src="/avatar.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
            <span className="text-[15px] text-white">dimitrisp</span>
            <ChevronDown size={18} className="text-[#6B7280]" />
          </div>
          <ProfileDropdown isOpen={isDropdownOpen} />
        </div>
      </div>
    </header>
  )
}

