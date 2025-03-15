"use client"

import Link from "next/link"
import { LogOut, Settings, User, Wallet } from "lucide-react"

const menuItems = [
  { label: "Buy LX Points", icon: Wallet, href: "/buy-points" },
  { label: "Withdraw", icon: Wallet, href: "/withdraw" },
  { label: "View Profile", icon: User, href: "/profile" },
  { label: "Settings", icon: Settings, href: "/settings" },
  { label: "Logout", icon: LogOut, href: "/logout", className: "text-[#FF4444]" },
]

export default function ProfileDropdown({ isOpen }) {
  if (!isOpen) return null

  return (
    <div className="absolute top-16 right-0 w-48 bg-[#1C1C1E] border border-[#2C2C2E] rounded-lg shadow-lg overflow-hidden z-50">
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`flex items-center gap-2 px-4 py-3 text-[13px] hover:bg-[#2C2C2E] transition-colors ${item.className || "text-white"}`}
        >
          <item.icon size={16} />
          {item.label}
        </Link>
      ))}
    </div>
  )
}

