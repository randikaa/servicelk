"use client"

import { Button } from "@/components/ui/button"

export function BecomeSellerHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="pt-20 lg:pt-40 pb-20 lg:pb-40 container px-4 md:px-6 mx-auto relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 max-w-5xl mx-auto leading-tight">
          Work Your Way
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium">
          You bring the skill. We'll make earning easy.
        </p>

        <Button size="lg" className="h-16 px-12 rounded-xl text-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all">
          Become a Seller
        </Button>
      </div>

      {/* Stats Bar */}
      <div className="w-full bg-slate-900 text-white py-14 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-center">
            <div className="space-y-4">
              <p className="text-slate-400 text-sm md:text-base font-bold uppercase tracking-[0.2em]">A Gig is Bought Every</p>
              <h3 className="text-5xl md:text-6xl font-black tabular-nums">4 SEC</h3>
            </div>
            <div className="space-y-4">
              <p className="text-slate-400 text-sm md:text-base font-bold uppercase tracking-[0.2em]">Transactions</p>
              <h3 className="text-5xl md:text-6xl font-black tabular-nums">50M+</h3>
            </div>
            <div className="space-y-4">
              <p className="text-slate-400 text-sm md:text-base font-bold uppercase tracking-[0.2em]">Price Range</p>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tabular-nums">LKR 1,500 - 3M</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
