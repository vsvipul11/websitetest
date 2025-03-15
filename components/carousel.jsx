'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <div className="relative">
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          
          <div className="absolute bottom-6 left-6">
            <div className="text-sm text-white/80">NOW ON</div>
            <div className="text-3xl font-bold text-white mt-1">15 New Cards</div>
            <button className="mt-4 px-6 py-2 bg-[#00ff9d] text-black rounded-lg font-medium">
              Explore
            </button>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setCurrentSlide(c => c === 0 ? slides.length - 1 : c - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white"
      >
        <ChevronLeft size={20} />
      </button>

      <button 
        onClick={() => setCurrentSlide(c => c === slides.length - 1 ? 0 : c + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === currentSlide ? 'bg-[#00ff9d]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

