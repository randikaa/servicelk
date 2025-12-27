"use client"

import { ShieldCheck, Lock, Headset } from "lucide-react"
import { useLanguage } from "@/lib/context/LanguageContext"

export function TrustSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
          {t.trust.title}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
          {t.trust.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.trust.verified_title}</h3>
            <p className="text-slate-500 leading-relaxed max-w-xs">{t.trust.verified_desc}</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.trust.escrow_title}</h3>
            <p className="text-slate-500 leading-relaxed max-w-xs">{t.trust.escrow_desc}</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Headset className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.trust.support_title}</h3>
            <p className="text-slate-500 leading-relaxed max-w-xs">{t.trust.support_desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
