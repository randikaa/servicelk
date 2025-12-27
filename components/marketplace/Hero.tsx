"use client"

import { Search, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/context/LanguageContext"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full bg-slate-50 border-b border-slate-200 py-20 lg:py-32 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
        
        <div className="z-10 flex min-h-12 items-center justify-center">
          <div className="mb-6 group rounded-full border border-black/5 bg-neutral-100/50 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 backdrop-blur-sm">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1.5 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-primary font-bold tracking-wide uppercase text-sm">
              <span>{t.hero.badge}</span>
              <ArrowRight className="ml-1 size-3.5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
          {t.hero.title_1} <span className="text-primary">{t.hero.title_highlight}</span> <br className="hidden md:block"/> {t.hero.title_2}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto text-balance font-medium whitespace-pre-line">
          {t.hero.subtitle}
        </p>

        {/* Search Box Container */}
        <div className="max-w-3xl mx-auto bg-white p-2 rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200 flex flex-col md:flex-row gap-2 transition-all focus-within:ring-2 focus-within:ring-primary/20">
          
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
            <Input 
              type="text" 
              placeholder={t.hero.searchPlaceholder}
              className="pl-10 h-12 border-none shadow-none focus-visible:ring-0 text-base placeholder:text-slate-400"
            />
          </div>

          <div className="hidden md:block w-px bg-slate-200 my-2"></div>

          <div className="relative md:w-1/3 group">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
            <Input 
              type="text" 
              placeholder={t.hero.locationPlaceholder}
              className="pl-10 h-12 border-none shadow-none focus-visible:ring-0 text-base placeholder:text-slate-400"
            />
          </div>

          <Button className="h-12 px-8 rounded-xl text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" size="lg">
            {t.hero.searchButton}
          </Button>
        </div>

        {/* Popular Tags */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-sm font-medium text-slate-500">
          <span>Popular:</span>
          {["Logo Design", "House Moving", "Plumbers", "Video Editing"].map((tag) => (
            <button 
              key={tag}
              className="px-3 py-1 bg-white border border-slate-200 rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
