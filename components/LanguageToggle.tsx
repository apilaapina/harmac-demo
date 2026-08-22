'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center rounded-lg border border-border overflow-hidden text-xs font-bold uppercase tracking-wide">
      <button
        onClick={() => setLang('fi')}
        className={`px-2.5 py-1.5 transition-all ${
          lang === 'fi' ? 'text-white' : 'text-text-muted hover:text-text bg-white'
        }`}
        style={lang === 'fi' ? { backgroundColor: 'var(--brand)' } : {}}
        aria-label="Suomeksi"
      >
        FI
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1.5 transition-all ${
          lang === 'en' ? 'text-white' : 'text-text-muted hover:text-text bg-white'
        }`}
        style={lang === 'en' ? { backgroundColor: 'var(--brand)' } : {}}
        aria-label="In English"
      >
        EN
      </button>
    </div>
  )
}
