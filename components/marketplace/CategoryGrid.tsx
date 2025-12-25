"use client"

import { 
  Laptop, 
  Printer, 
  Truck, 
  Music, 
  Hammer, 
  PenTool,
  Code2,
  Building2,
  Megaphone,
  ArrowRight,
  ChevronRight
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/context/LanguageContext"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "digital",
    title: "Vibe Coding",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    color: "bg-[#7d1a3c]", // Deep red/burgundy
    innerBg: "bg-gradient-to-br from-[#c06b7d] to-[#e48b8b]",
    href: "/search?category=digital"
  },
  {
    id: "media",
    title: "Website Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    color: "bg-[#0c3e2e]", // Dark Green
    innerBg: "bg-[#d1f7e0]", // Light Green
    href: "/search?category=media"
  },
  {
    id: "video",
    title: "Video Editing",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&q=80",
    color: "bg-[#3e1423]", // Dark brownish/red
    innerBg: "bg-[#ffded6]", // Peach
    href: "/search?category=video"
  },
  {
    id: "software",
    title: "Software Development",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80",
    color: "bg-[#343007]", // Olive
    innerBg: "bg-gradient-to-br from-[#807615] to-[#f9e95d]", // Gold gradient
    href: "/search?category=software"
  },
  {
    id: "publishing",
    title: "Book Publishing",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
    color: "bg-[#0b2b1b]", // Dark Teal
    innerBg: "bg-[#ccebe2]", // Light Mint
    href: "/search?category=publishing"
  },
  {
    id: "architecture",
    title: "Architecture & Interior Design",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    color: "bg-[#521c2c]", // Maroon
    innerBg: "bg-[#cf6b84]", // Pinkish
    href: "/search?category=architecture"
  },
  {
      id: "marketing",
      title: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
      color: "bg-[#002f30]", 
      innerBg: "bg-[#b3d4d4]",
      href: "/search?category=marketing"
  }
]

export function CategoryGrid() {
  const { t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-12 bg-white container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">Popular Services</h2>
        
        <div className="relative group">
            <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            {categories.map((cat, index) => (
                <Link key={cat.id} href={cat.href} className="flex-none snap-start">
                    <div 
                        className={`w-[220px] h-[300px] rounded-2xl p-4 flex flex-col justify-between transition-all hover:shadow-lg cursor-pointer bg-primary hover:bg-primary/90 relative overflow-hidden`}
                    >
                        <h3 className="text-white font-bold text-lg leading-tight z-10">{cat.title}</h3>
                        
                        <div className={`mt-auto w-full aspect-[4/3] rounded-xl ${cat.innerBg} shadow-inner flex items-center justify-center relative overflow-hidden`}>
                            <Image 
                              src={cat.image} 
                              alt={cat.title}
                              fill
                              className="object-cover mix-blend-multiply opacity-90"
                            />
                        </div>
                    </div>
                </Link>
            ))}
            </div>
            
            <Button 
                variant="secondary"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 shadow-lg z-20 hidden md:flex rounded-full h-12 w-12 border border-slate-200"
                onClick={() => scroll('right')}
            >
                <img 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYElEQVR4nO3WsQ2AMAxE0b+EI7L/JjRIgQoKxgEhXKUGR4H7CzzJxcmg1N0ILEAiuAIcwBaNG7A6vgNZeEQmHOGBJR+XC58/D1t16kHokwl9NfsNio9Ck9dnavXsqX47AWgjO3Hs8uqqAAAAAElFTkSuQmCC" 
                    alt="forward" 
                    className="h-6 w-6 opacity-70"
                />
            </Button>
      </div>
    </section>
  )
}
