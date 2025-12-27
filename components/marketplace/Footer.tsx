"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/context/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-medium tracking-tighter text-white mb-4">
              sril<span className="text-primary font-black">anzer</span><span className="text-black text-3xl leading-none">.</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.col_cat}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">{t.categories.digital}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t.categories.media}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t.categories.transport}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t.categories.creative}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t.categories.labor}</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.col_support}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Trust & Safety</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Selling on srilanzer</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Buying on srilanzer</Link></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.col_company}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
