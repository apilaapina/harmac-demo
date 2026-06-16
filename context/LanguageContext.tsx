'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'fi' | 'en'

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

import fiTranslations from '@/locales/fi.json'
import enTranslations from '@/locales/en.json'

const translations: Record<Lang, Record<string, string>> = {
  fi: fiTranslations,
  en: enTranslations,
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fi')

  const t = (key: string): string => {
    return translations[lang][key] ?? translations['fi'][key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
