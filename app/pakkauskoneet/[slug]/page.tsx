'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Package, Layers, Scale, Wrench, CheckCircle, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { getMachineBySlug, machines, categoryMeta, machineImages } from '@/lib/machines'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { use } from 'react'

const categoryIcons = {
  flowpack: Package,
  vertical: Layers,
  multihead: Scale,
  accessories: Wrench,
}

export default function MachinePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { t, lang } = useLanguage()
  const machine = getMachineBySlug(slug)

  if (!machine) notFound()

  const Icon = categoryIcons[machine.category]
  const imgSrc = machineImages[machine.slug]
  const related = machines
    .filter((m) => m.category === machine.category && m.slug !== machine.slug)
    .slice(0, 3)

  return (
    <>
      {/* Page header */}
      <section className="py-14" style={{ backgroundColor: 'var(--brand)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              {t('breadcrumb.home')}
            </Link>
            <ChevronRight size={14} />
            <Link href="/pakkauskoneet" className="hover:text-white transition-colors">
              {t('breadcrumb.machines')}
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">{machine.name}</span>
          </nav>
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <Icon size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold mb-1 text-white/70 uppercase tracking-widest">
                {machine.categoryLabel[lang]}
              </p>
              <h1 className="text-4xl font-extrabold text-white uppercase tracking-tight mb-2">
                {machine.name}
              </h1>
              <p className="text-white/75 max-w-xl">{machine.tagline[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: description + specs + FAQ */}
          <div className="lg:col-span-2 space-y-12">

            {/* Real product image */}
            <div
              className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-border relative"
              style={{ backgroundColor: 'var(--bg)' }}
            >
              {imgSrc ? (
                <Image
                  src={imgSrc}
                  alt={machine.name}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Icon size={64} style={{ color: 'var(--brand)', opacity: 0.25 }} />
                  <p className="text-sm text-text-muted mt-3">{machine.name}</p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4 text-text-muted leading-relaxed">
              {machine.description[lang].split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Specs */}
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4 text-text">
                {t('machine.specs')}
              </h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border">
                    {machine.specs.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-bg'}>
                        <td className="px-5 py-3.5 font-semibold text-text w-1/2">{spec.label[lang]}</td>
                        <td className="px-5 py-3.5 text-text-muted">{spec.value[lang]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4 text-text">
                {t('machine.applications')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {machine.applications[lang].map((app) => (
                  <span
                    key={app}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium"
                    style={{ backgroundColor: 'var(--brand)', color: '#fff' }}
                  >
                    <CheckCircle size={13} />
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ */}
            {machine.faqs.length > 0 && (
              <div>
                <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4 text-text">
                  {t('machine.faq')}
                </h2>
                <FAQAccordion faqs={machine.faqs} lang={lang} />
              </div>
            )}
          </div>

          {/* Right: sticky quote form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              <div className="bg-white rounded-2xl border border-border p-6">
                <div
                  className="inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3"
                  style={{ backgroundColor: 'var(--brand)', color: '#fff' }}
                >
                  {lang === 'fi' ? 'Kysy tarjous' : 'Request quote'}
                </div>
                <h3 className="text-base font-bold mb-1 text-text">{t('machine.quotecta')}</h3>
                <p className="text-sm text-text-muted mb-5">{t('machine.quotecta.sub')}</p>
                <ContactForm />
              </div>

              {/* Direct contact */}
              <div className="bg-white rounded-2xl border border-border p-5">
                <p className="text-sm font-semibold text-text mb-3">
                  {lang === 'fi' ? 'Tai ota suoraan yhteyttä:' : 'Or contact us directly:'}
                </p>
                <a
                  href="tel:+358400866569"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors mb-2"
                >
                  <Phone size={14} style={{ color: 'var(--brand)' }} />
                  +358 400 866 569
                </a>
                <a
                  href="mailto:make@harmac.fi"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
                >
                  <span style={{ color: 'var(--brand)', fontSize: 14 }}>@</span>
                  make@harmac.fi
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related machines */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-extrabold uppercase tracking-tight mb-6 text-text">
              {t('machine.related')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((m) => {
                const RelIcon = categoryIcons[m.category]
                const relImg = machineImages[m.slug]
                return (
                  <Link
                    key={m.slug}
                    href={`/pakkauskoneet/${m.slug}`}
                    className="group bg-white rounded-2xl border border-border hover:border-brand hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="h-36 relative" style={{ backgroundColor: 'var(--bg)' }}>
                      {relImg ? (
                        <Image
                          src={relImg}
                          alt={m.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform"
                          sizes="33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <RelIcon size={32} style={{ color: 'var(--brand)', opacity: 0.3 }} />
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-text mb-1">{m.name}</h3>
                      <p className="text-xs text-text-muted leading-relaxed flex-1">{m.tagline[lang]}</p>
                      <div className="mt-3 flex items-center gap-1 text-xs font-semibold" style={{ color: 'var(--brand)' }}>
                        {t('machines.readmore')} <ArrowRight size={12} />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
