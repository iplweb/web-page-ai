"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "pl"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (en: string, pl: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "en"

  const browserLang = navigator.language || navigator.languages?.[0]

  // Check if the browser language starts with 'pl' (e.g., 'pl', 'pl-PL')
  if (browserLang?.toLowerCase().startsWith("pl")) {
    return "pl"
  }

  // Default to English for all other languages
  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const detectedLanguage = detectBrowserLanguage()
    setLanguage(detectedLanguage)
    setIsInitialized(true)
  }, [])

  const t = (en: string, pl: string) => {
    return language === "pl" ? pl : en
  }

  if (!isInitialized) {
    return null
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
