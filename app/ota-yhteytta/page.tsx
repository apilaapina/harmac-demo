'use client'

import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'

export default function ContactPage() {
  const { t, lang } = useLanguage()

  return (
    <>
      {/* Page header */}
      <section className="py-16" style={{ backgroundColor: 'var(--brand)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">{t('breadcrumb.home')}</Link>
            <span>/</span>
            <span className="text-white font-medium">{t('nav.contact')}</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white uppercase tracking-tight mb-3">{t('contact.title')}</h1>
          <p className="text-white/70 max-w-xl">{t('contact.sub')}</p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form */}
            <Reveal className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-border p-8">
                <ContactForm />
              </div>
            </Reveal>

            {/* Contact info */}
            <Reveal delay={0.12} className="space-y-5">
              <div className="bg-white rounded-2xl border border-border p-6">
                <h2 className="text-sm font-extrabold uppercase tracking-widest mb-5" style={{ color: 'var(--brand)' }}>
                  {t('contact.info.title')}
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: t('contact.info.address'), content: 'Harmac Oy\nLeinikkitie 20B\n01350 Vantaa, Finland', href: undefined },
                    { icon: Mail, label: t('contact.info.email'), content: 'make@harmac.fi', href: 'mailto:make@harmac.fi' },
                    { icon: Phone, label: t('contact.info.phone'), content: '+358 400 866 569', href: 'tel:+358400866569' },
                  ].map(({ icon: Icon, label, content, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--brand)' }}
                      >
                        <Icon size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-muted mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm font-medium text-text hover:underline">
                            {content}
                          </a>
                        ) : (
                          <p className="text-sm text-text leading-relaxed whitespace-pre-line">{content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl border border-border overflow-hidden">
                <div className="px-5 py-3 border-b border-border">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--brand)' }}>
                    {t('contact.map.title')}
                  </h3>
                </div>
                <iframe
                  title="Harmac Oy location"
                  src="https://maps.google.com/maps?q=Leinikkitie+20B,+01350+Vantaa,+Finland&output=embed&z=15"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
