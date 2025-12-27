import { BecomeSellerHero } from "@/components/marketplace/BecomeSellerHero"
import { SellerHowItWorks } from "@/components/marketplace/SellerHowItWorks"
import { SellerFAQ } from "@/components/marketplace/SellerFAQ"
import { TrustSection } from "@/components/marketplace/TrustSection"

export default function BecomeSellerPage() {
  return (
    <main className="min-h-screen bg-white">
      <BecomeSellerHero />
      <SellerHowItWorks />
      <SellerFAQ />
      <div className="py-20 lg:py-32">
        <TrustSection />
      </div>
    </main>
  )
}
