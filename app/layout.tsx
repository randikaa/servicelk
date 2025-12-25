import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Header } from "@/components/marketplace/Header"
import { LanguageProvider } from '@/lib/context/LanguageContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'ServiceLK - Hire Verified Professionals',
  description: 'The #1 Service Marketplace in Sri Lanka',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
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
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
