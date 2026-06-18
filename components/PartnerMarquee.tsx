'use client'

import { ArrowRight } from 'lucide-react'
import Link from './LocaleLink'
import { useLanguage } from '@/context/LanguageContext'
import { partners } from '@/lib/partners'

/**
 * Slim "brands we represent" strip for the homepage — a continuously scrolling
 * row of partner wordmarks. Built to accept real logo images later: give a
 * partner a `logo` path in lib/partners.ts and it renders the image instead of
 * the wordmark. The full list lives on the dedicated /yhteistyossa page.
 */
export default function PartnerMarquee() {
  const { t } = useLanguage()
  // Duplicate the list so the track can loop seamlessly (-50% translate).
  const items = [...partners, ...partners]

  return (
    <section className="py-14 sm:py-16 bg-white border-y border-border" aria-label={t('partners.strip.title')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-9 flex items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
          {t('partners.strip.title')}
        </p>
        <Link
          href="/yhteistyossa"
          className="inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-80"
          style={{ color: 'var(--brand)' }}
        >
          {t('partners.strip.cta')} <ArrowRight size={14} />
        </Link>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-x-12 gap-y-4 px-6">
          {items.map((p, i) => {
            const dupe = i >= partners.length
            return p.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${p.name}-${i}`}
                src={p.logo}
                alt={dupe ? '' : p.name}
                aria-hidden={dupe || undefined}
                className="h-8 sm:h-9 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 select-none"
              />
            ) : (
              <span
                key={`${p.name}-${i}`}
                aria-hidden={dupe || undefined}
                className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide whitespace-nowrap select-none text-text-muted/45 transition-colors hover:text-brand"
              >
                {p.name}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
