'use client'

import Link from './LocaleLink'
import Image from 'next/image'
import { Phone, Mail, MapPin, PlayCircle, Share2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { LOGO_URL } from '@/lib/machines'
import { ORG } from '@/lib/site'
import LanguageToggle from './LanguageToggle'

export default function Footer() {
  const { t, lang } = useLanguage()

  return (
    <footer style={{ backgroundColor: 'var(--dark)' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src={LOGO_URL} alt="Harmac Oy" width={40} height={40} className="rounded" />
              <span className="text-lg font-extrabold uppercase tracking-wide" style={{ color: 'var(--brand)' }}>
                HARMAC Oy
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-5">{t('footer.tagline')}</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                aria-label="Facebook"
              >
                <Share2 size={15} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                aria-label="YouTube"
              >
                <PlayCircle size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: 'var(--brand)' }}
            >
              {t('nav.machines')}
            </h3>
            <ul className="space-y-2 text-sm text-white/50">
              {[
                { href: '/pakkauskoneet?cat=flowpack', label: t('category.flowpack') },
                { href: '/pakkauskoneet?cat=vertical', label: t('category.vertical') },
                { href: '/pakkauskoneet?cat=multihead', label: t('category.multihead') },
                { href: '/pakkauskoneet?cat=accessories', label: t('category.accessories') },
                { href: '/yhteistyossa', label: t('nav.partners') },
                { href: '/referenssit', label: t('nav.references') },
                { href: '/faq', label: 'FAQ' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: 'var(--brand)' }}
            >
              {t('contact.info.title')}
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--brand)' }} />
                <span>Leinikkitie 20B<br />01350 Vantaa, Finland</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="flex-shrink-0" style={{ color: 'var(--brand)' }} />
                <a href={`mailto:${ORG.email}`} className="hover:text-white transition-colors">
                  {ORG.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="flex-shrink-0" style={{ color: 'var(--brand)' }} />
                <a href={`tel:${ORG.phone}`} className="hover:text-white transition-colors">
                  {ORG.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Harmac Oy. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/tietosuoja" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              {t('footer.privacy')}
            </Link>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
