'use client'

import { createContext, useContext, ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'

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

/** Cookie remembering the visitor's choice so the proxy can honour it on `/`. */
const COOKIE_KEY = 'harmac-lang'

/**
 * The active locale is derived from the URL (`/fi/...` or `/en/...`) and passed
 * in by the server layout. Switching languages navigates to the same page under
 * the other locale prefix, so both languages are real, crawlable URLs.
 */
export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const setLang = (next: Lang) => {
    if (next === lang) return
    try {
      document.cookie = `${COOKIE_KEY}=${next};path=/;max-age=31536000;samesite=lax`
    } catch {
      /* cookies may be unavailable — non-fatal */
    }
    // Swap the leading /fi or /en segment, preserving the rest of the path.
    const rest = (pathname ?? `/${lang}`).replace(/^\/(fi|en)(?=\/|$)/, '')
    router.push(`/${next}${rest || ''}`)
  }

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
