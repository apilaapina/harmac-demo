'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package, Layers, Scale, Wrench } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { machines, categoryMeta, machineImages, Machine } from '@/lib/machines'
import Reveal from '@/components/Reveal'

const categoryIcons = {
  flowpack: Package,
  vertical: Layers,
  multihead: Scale,
  accessories: Wrench,
}

const categories = ['all', 'flowpack', 'vertical', 'multihead', 'accessories'] as const
type CategoryFilter = (typeof categories)[number]

function MachinesContent() {
  const { t, lang } = useLanguage()
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')

  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat && categories.includes(cat as CategoryFilter)) {
      setActiveCategory(cat as CategoryFilter)
    }
  }, [searchParams])

  const filtered: Machine[] =
    activeCategory === 'all'
      ? machines
      : machines.filter((m) => m.category === activeCategory)

  const filterLabels: Record<CategoryFilter, string> = {
    all: t('machines.filter.all'),
    flowpack: t('machines.filter.flowpack'),
    vertical: t('machines.filter.vertical'),
    multihead: t('machines.filter.multihead'),
    accessories: t('machines.filter.accessories'),
  }

  return (
    <>
      {/* Page header */}
      <section className="py-16" style={{ backgroundColor: 'var(--brand)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              {t('breadcrumb.home')}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{t('breadcrumb.machines')}</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white uppercase tracking-tight mb-3">
            {t('machines.title')}
          </h1>
          <p className="text-white/70 max-w-xl">{t('machines.sub')}</p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeCategory === cat ? 'text-white' : 'text-text-muted hover:text-text hover:bg-gray-50'
                }`}
                style={activeCategory === cat ? { backgroundColor: 'var(--brand)' } : {}}
              >
                {filterLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Machines grid */}
      <section className="py-12 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory === 'all' ? (
            (['flowpack', 'vertical', 'multihead', 'accessories'] as const).map((cat) => {
              const catMachines = machines.filter((m) => m.category === cat)
              const Icon = categoryIcons[cat]
              return (
                <div key={cat} className="mb-14">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'var(--brand)' }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <h2 className="text-xl font-extrabold uppercase tracking-tight text-text">
                      {categoryMeta[cat].label[lang]}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {catMachines.map((machine, i) => (
                      <Reveal key={machine.slug} delay={(i % 4) * 0.06}>
                        <MachineCard machine={machine} lang={lang} t={t} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              )
            })
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((machine, i) => (
                <Reveal key={machine.slug} delay={(i % 4) * 0.06}>
                  <MachineCard machine={machine} lang={lang} t={t} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: 'var(--dark)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-3">
            {lang === 'fi' ? 'Ei löydy sopivaa? Kysytään yhdessä.' : "Can't find the right fit? Let's find it together."}
          </h2>
          <p className="text-white/60 mb-6">
            {lang === 'fi'
              ? 'Kerro tuotannostasi ja tarpeistasi, niin löytyy sopiva ratkaisu.'
              : 'Tell us about your production and needs, and the right solution will follow.'}
          </p>
          <Link
            href="/ota-yhteytta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--brand)' }}
          >
            {t('nav.contact')}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}

function MachineCard({
  machine,
  lang,
  t,
}: {
  machine: Machine
  lang: 'fi' | 'en'
  t: (key: string) => string
}) {
  const imgSrc = machineImages[machine.slug]

  return (
    <Link
      href={`/pakkauskoneet/${machine.slug}`}
      className="group h-full bg-white rounded-2xl border border-border hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: 'var(--bg)' }}
      >
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={machine.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: 'var(--brand)' }}
          >
            <Package size={28} className="text-white" />
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span
          className="text-xs font-bold uppercase tracking-wider mb-1.5"
          style={{ color: 'var(--brand)' }}
        >
          {machine.categoryLabel[lang]}
        </span>
        <h3 className="text-base font-bold mb-2 text-text">{machine.name}</h3>
        <p className="text-xs text-text-muted leading-relaxed flex-1 line-clamp-2">
          {machine.tagline[lang]}
        </p>
        <div
          className="mt-4 flex items-center gap-1 text-sm font-semibold"
          style={{ color: 'var(--brand)' }}
        >
          {t('machines.readmore')} <ArrowRight size={13} />
        </div>
      </div>
    </Link>
  )
}

export default function MachinesPage() {
  return (
    <Suspense>
      <MachinesContent />
    </Suspense>
  )
}
