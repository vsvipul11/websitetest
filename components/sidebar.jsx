"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Zap, Layers, Target, Trophy, User } from "lucide-react"

const links = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/market", icon: Zap, label: "Market" },
  { href: "/collection", icon: Layers, label: "Collection" },
  { href: "/quests", icon: Target, label: "Quests" },
  { href: "/ranking", icon: Trophy, label: "Ranking" },
  { href: "/profile", icon: User, label: "Profile" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-[72px] bg-[#121214] border-r border-[#1C1C1E] flex flex-col fixed h-screen z-50">
      <Link href="/" className="h-16 flex items-center justify-center">
        <img src="/lootix-icon.svg" alt="Lootix" className="w-8 h-8" />
      </Link>

      <nav className="flex flex-col items-center gap-2 mt-4">
        {links.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/")
          return (
            <Link
              key={href}
              href={href}
              className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors
                ${isActive ? "bg-[#1C1C1E] text-[#00FF9D]" : "text-[#6B7280] hover:text-white hover:bg-[#1C1C1E]"}`}
            >
              <Icon size={24} />
              <span className="sr-only">{label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

