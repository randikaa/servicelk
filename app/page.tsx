"use client"

import { Hero } from "@/components/marketplace/Hero"
import { CategoryGrid } from "@/components/marketplace/CategoryGrid"
import { TrustSection } from "@/components/marketplace/TrustSection"
import { Footer } from "@/components/marketplace/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <CategoryGrid />
      <TrustSection />
      <Footer />
    </main>
  )
}
