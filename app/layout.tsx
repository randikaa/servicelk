import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Header } from "@/components/marketplace/Header"
import { Footer } from "@/components/marketplace/Footer"
import { LanguageProvider } from '@/lib/context/LanguageContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Srilanzer - Hire Verified Professionals',
  description: 'The #1 Service Marketplace in Sri Lanka',
  icons: {
    icon: '/srilanzericon.png',
    shortcut: '/srilanzericon.png',
    apple: '/srilanzericon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
