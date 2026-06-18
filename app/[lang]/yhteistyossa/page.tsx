'use client'

import Link from '@/components/LocaleLink'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { partners } from '@/lib/partners'
import Reveal from '@/components/Reveal'

export default function PartnersPage() {
  const { t, lang } = useLanguage()

  return (
    <>
      {/* Page header */}
      <section className="py-16" style={{ backgroundColor: 'var(--brand)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">{t('breadcrumb.home')}</Link>
            <span>/</span>
            <span className="text-white font-medium">{t('nav.partners')}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-3 break-words">{t('partners.title')}</h1>
          <p className="text-white/70 max-w-xl">{t('partners.sub')}</p>
        </div>
      </section>

      {/* Partners grid */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={(i % 3) * 0.08}>
              <div
                className="h-full bg-white rounded-2xl border border-border p-6 flex flex-col hover:shadow-lg hover:border-brand hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-full h-24 rounded-xl flex items-center justify-center mb-5 p-5 bg-white border border-border">
                  {partner.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-[75%] w-auto object-contain"
                    />
                  ) : (
                    <span className="text-2xl font-extrabold uppercase tracking-widest" style={{ color: 'var(--brand)' }}>
                      {partner.name}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-base font-bold text-text">{partner.name}</h2>
                  <span
                    className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ml-2 flex-shrink-0"
                    style={{ backgroundColor: 'var(--brand)', color: '#fff' }}
                  >
                    {partner.category[lang]}
                  </span>
                </div>

                <p className="text-sm text-text-muted leading-relaxed flex-1">{partner.description[lang]}</p>

                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: 'var(--brand)' }}
                  >
                    {t('partners.visit')} <ExternalLink size={13} />
                  </a>
                )}
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-3 text-text">
            {t('partners.cta.title')}
          </h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto">
            {t('partners.cta.sub')}
          </p>
          <Link
            href="/ota-yhteytta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--brand)' }}
          >
            {t('nav.contact')} <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
