'use client'

import Link from 'next/link'
import {
  ArrowRight, Phone, Mail, Sprout, TrendingUp, Factory,
  Globe, Handshake, Wrench, Headphones, Cpu, ShieldCheck, Layers, MapPin,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import Reveal from '@/components/Reveal'

export default function HomePage() {
  const { t } = useLanguage()

  const scale = [
    { icon: Sprout, key: 'small', bar: 'w-1/3' },
    { icon: TrendingUp, key: 'mid', bar: 'w-2/3' },
    { icon: Factory, key: 'large', bar: 'w-full' },
  ] as const

  const pillars = [
    { icon: Globe, key: 'import' },
    { icon: Handshake, key: 'sales' },
    { icon: Wrench, key: 'install' },
    { icon: Headphones, key: 'service' },
  ] as const

  const why = [
    { icon: Cpu, key: 'tech' },
    { icon: ShieldCheck, key: 'independent' },
    { icon: Layers, key: 'lifecycle' },
    { icon: MapPin, key: 'local' },
  ] as const

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--dark)' }}>
        {/* animated aurora */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="aurora-a absolute -top-32 -right-24 w-[42rem] h-[42rem] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(0,184,212,0.30), transparent 60%)' }}
          />
          <div
            className="aurora-b absolute -bottom-40 -left-24 w-[36rem] h-[36rem] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(0,184,212,0.18), transparent 60%)' }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center">
          <Reveal>
            <h1
              className="font-extrabold text-white leading-[1.03] mb-7 uppercase tracking-tight"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.6rem)' }}
            >
              {t('hero.headline')}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg sm:text-2xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              {t('hero.sub')}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/ota-yhteytta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03]"
                style={{ backgroundColor: 'var(--brand)', boxShadow: '0 8px 30px rgba(0,184,212,0.35)' }}
              >
                {t('hero.cta.contact')}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/pakkauskoneet"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.25)' }}
              >
                {t('hero.cta.machines')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OFFERING: small → large ──────────────────────── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--brand)' }}>
              {t('offering.eyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mb-4 text-text">
              {t('offering.title')}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">{t('offering.lead')}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scale.map(({ icon: Icon, key, bar }, i) => (
              <Reveal key={key} delay={i * 0.1}>
                <div className="group h-full bg-bg rounded-2xl p-7 border border-border hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: 'var(--brand)' }}
                  >
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-text">{t(`offering.${key}.title`)}</h3>
                  <p className="text-text-muted leading-relaxed mb-6">{t(`offering.${key}.desc`)}</p>
                  <div className="h-1.5 rounded-full bg-border overflow-hidden">
                    <div className={`h-full ${bar} rounded-full`} style={{ backgroundColor: 'var(--brand)' }} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────── */}
      <section id="about" className="py-20 sm:py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--brand)' }}>
              {t('story.eyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mb-6 text-text">
              {t('story.title')}
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed text-[17px]">
              <p>{t('story.p1')}</p>
              <p>{t('story.p2')}</p>
              <p className="font-medium text-text">{t('story.p3')}</p>
            </div>
            <Link
              href="/ota-yhteytta"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--brand)' }}
            >
              {t('story.cta')}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── PILLARS: what we do ──────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--brand)' }}>
              {t('pillars.eyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mb-4 text-text">
              {t('pillars.title')}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">{t('pillars.lead')}</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, key }, i) => (
              <Reveal key={key} delay={i * 0.08}>
                <div className="group h-full text-center px-5 py-8 rounded-2xl border border-transparent hover:border-border hover:bg-bg transition-all duration-300">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform group-hover:-translate-y-1"
                    style={{ backgroundColor: 'var(--brand)' }}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold text-text mb-2">{t(`pillars.${key}.title`)}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{t(`pillars.${key}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY HARMAC ───────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <Reveal className="lg:col-span-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--brand)' }}>
                {t('why.eyebrow')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-text">
                {t('why.title')}
              </h2>
            </Reveal>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-9">
              {why.map(({ icon: Icon, key }, i) => (
                <Reveal key={key} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(0,184,212,0.12)' }}
                    >
                      <Icon size={20} style={{ color: 'var(--brand)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-text mb-1.5">{t(`why.${key}.title`)}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{t(`why.${key}.desc`)}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--dark)' }}>
        <div
          className="aurora-b absolute inset-0"
          style={{ background: 'radial-gradient(50% 80% at 50% 0%, rgba(0,184,212,0.18), transparent 65%)' }}
          aria-hidden="true"
        />
        <Reveal className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-3">
            {t('home.cta.title')}
          </h2>
          <p className="text-white/60 mb-9 max-w-xl mx-auto text-lg">{t('home.cta.sub')}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/ota-yhteytta"
              className="px-8 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--brand)', boxShadow: '0 8px 30px rgba(0,184,212,0.35)' }}
            >
              {t('home.cta.button')}
            </Link>
            <a
              href="tel:+358400866569"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)' }}
            >
              <Phone size={15} />
              +358 400 866 569
            </a>
            <a
              href="mailto:make@harmac.fi"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)' }}
            >
              <Mail size={15} />
              make@harmac.fi
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
