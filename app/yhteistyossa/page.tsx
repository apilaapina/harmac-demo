'use client'

import Link from 'next/link'
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
          <h1 className="text-4xl font-extrabold text-white uppercase tracking-tight mb-3">{t('partners.title')}</h1>
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
                <div
                  className="w-full h-20 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'var(--brand)' }}
                >
                  <span className="text-2xl font-extrabold uppercase tracking-widest text-white">
                    {partner.name}
                  </span>
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
            {lang === 'fi' ? 'Haluatko kuulla lisää yhteistyöstä?' : 'Want to learn more about our partnerships?'}
          </h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto">
            {lang === 'fi'
              ? 'Ota yhteyttä, niin saat lisätietoa edustetuista brändeistä ja koneista.'
              : 'Get in touch to learn more about the represented brands and machines.'}
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
