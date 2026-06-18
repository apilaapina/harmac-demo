'use client'

import Link from '@/components/LocaleLink'
import { ArrowRight, Building2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { references } from '@/lib/references'
import Reveal from '@/components/Reveal'

export default function ReferencesPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Page header */}
      <section className="py-16" style={{ backgroundColor: 'var(--brand)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">{t('breadcrumb.home')}</Link>
            <span>/</span>
            <span className="text-white font-medium">{t('references.title')}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-3 break-words">
            {t('references.title')}
          </h1>
          <p className="text-white/70 max-w-xl">{t('references.sub')}</p>
        </div>
      </section>

      {/* Company grid */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-10">
            <p className="text-text-muted leading-relaxed text-[17px]">{t('references.intro')}</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {references.map((name, i) => (
              <Reveal key={name} delay={(i % 3) * 0.05}>
                <div className="group h-full flex items-center gap-3 bg-white rounded-xl border border-border px-5 py-4 hover:border-brand hover:shadow-md transition-all duration-300">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ backgroundColor: 'rgba(0,184,212,0.1)' }}
                  >
                    <Building2 size={17} style={{ color: 'var(--brand)' }} />
                  </div>
                  <span className="font-semibold text-text leading-snug">{name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: 'var(--dark)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-3">
            {t('references.cta.title')}
          </h2>
          <p className="text-white/60 mb-6 max-w-xl mx-auto">{t('references.cta.sub')}</p>
          <Link
            href="/ota-yhteytta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--brand)' }}
          >
            {t('nav.contact')} <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
