"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const trendingItems = [
  { name: "Graphics & Design", href: "#" },
  { name: "Programming & Tech", href: "#" },
  { name: "Digital Marketing", href: "#" },
  { name: "Video & Animation", href: "#" },
  { name: "Writing & Translation", href: "#" },
  { name: "Music & Audio", href: "#" },
  { name: "Business", href: "#" },
  { name: "Finance", href: "#" },
  { name: "AI Services", href: "#" },
  { name: "Photography", href: "#" },
  { name: "Data", href: "#" },
  { name: "Lifestyle", href: "#" },
  { name: "Personal Growth", href: "#" },
  { name: "Local Services", href: "#" },
  { name: "Handyman", href: "#" },
  { name: "Moving Services", href: "#" },
  { name: "Legal & Compliance", href: "#" },
  { name: "Translation", href: "#" },
]

export function TrendingBar() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = React.useState(false)
  const [showRightArrow, setShowRightArrow] = React.useState(true)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 20)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20)
    }
  }

  const scrollBy = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  React.useEffect(() => {
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  return (
    <div className="w-full bg-transparent border-t overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative group">
        
        {/* Left Arrow */}
        <button 
          onClick={() => scrollBy('left')}
          className={cn(
            "absolute left-0 top-0 bottom-0 w-12 md:w-16 bg-gradient-to-r from-white/95 via-white/80 to-transparent flex items-center justify-start pl-4 md:pl-6 z-20 transition-all focus:outline-none",
            showLeftArrow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
          )}
        >
          <div className="bg-white rounded-full p-1 shadow-md border hover:bg-slate-50 transition-colors">
            <ChevronRight className="h-4 w-4 text-slate-600 rotate-180" />
          </div>
        </button>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-center gap-6 overflow-x-auto no-scrollbar py-3 scroll-smooth"
        >
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-sm font-bold text-slate-600 flex items-center gap-1">
              Trending <span className="text-base">🔥</span>
            </span>
            <div className="h-4 w-px bg-slate-200 ml-4 mr-0" />
          </div>

          <div className="flex items-center gap-6 shrink-0">
            {trendingItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-500 hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scrollBy('right')}
          className={cn(
            "absolute right-0 top-0 bottom-0 w-12 md:w-16 bg-gradient-to-l from-white/95 via-white/80 to-transparent flex items-center justify-end pr-4 md:pr-6 z-20 transition-all focus:outline-none",
            showRightArrow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
          )}
        >
          <div className="bg-white rounded-full p-1 shadow-md border hover:bg-slate-50 transition-colors">
            <ChevronRight className="h-4 w-4 text-slate-600" />
          </div>
        </button>
      </div>
    </div>
  )
}
