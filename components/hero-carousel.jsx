'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20(1)-bYsHLmPDGTlPg89M1eBAtJgCye4v7J.png',
    title: '15 New Cards',
    badge: 'NOW ON',
    badgeIcon: 'LX Creators'
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      <div className="relative h-[200px]">
        <img 
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000B33]/80 to-transparent" />
        
        <div className="absolute bottom-8 left-8">
          <div className="flex items-center gap-2 text-[13px] text-white/80">
            <span>{slides[currentSlide].badge}</span>
            <div className="flex items-center gap-1">
              <img src="/lx-icon.svg" alt="LX" className="w-4 h-4" />
              <span>{slides[currentSlide].badgeIcon}</span>
            </div>
          </div>
          <h2 className="text-[40px] font-bold text-white mt-1 italic tracking-wide">
            {slides[currentSlide].title}
          </h2>
          <button className="mt-4 px-6 py-2 bg-[#00FF9D] text-black rounded-lg text-[15px] font-medium hover:bg-[#00FF9D]/90 transition-colors">
            Explore
          </button>
        </div>

        <button 
          onClick={() => setCurrentSlide(c => c === 0 ? slides.length - 1 : c - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={() => setCurrentSlide(c => c === slides.length - 1 ? 0 : c + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(5)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === currentSlide ? 'bg-[#00FF9D]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

