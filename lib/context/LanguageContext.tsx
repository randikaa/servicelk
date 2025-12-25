"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { dictionary, Language } from '../dictionary'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof dictionary.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // Load language preference from local storage if available
  useEffect(() => {
    const savedLang = localStorage.getItem('servicelk-lang') as Language
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('servicelk-lang', lang)
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: dictionary[language]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
