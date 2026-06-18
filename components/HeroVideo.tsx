'use client'

import { useRef, useEffect } from 'react'
import Link from './LocaleLink'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

/** Slow-mo playback rate for the hero clip (1 = real time) */
const SLOWMO = 0.5

export default function HeroVideo() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  // Force slow, cinematic playback once the clip is ready
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const apply = () => { v.playbackRate = SLOWMO }
    apply()
    v.addEventListener('loadedmetadata', apply)
    return () => v.removeEventListener('loadedmetadata', apply)
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--dark)' }}>
      {/* ── Cinematic video background ─────────────────────── */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="/video/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Tint + brand wash so white text stays readable over a bright clip */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(15,31,46,0.55) 0%, rgba(15,31,46,0.35) 45%, rgba(15,31,46,0.85) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(80% 60% at 50% 40%, rgba(0,184,212,0.18), transparent 70%)' }}
        aria-hidden="true"
      />

      {/* ── Hero content ───────────────────────────────────── */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-44 text-center">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-extrabold text-white leading-[1.03] mb-7 uppercase tracking-tight"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', textShadow: '0 2px 30px rgba(0,0,0,0.35)' }}
        >
          {t('hero.headline')}
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-2xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
        >
          {t('hero.sub')}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/ota-yhteytta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03]"
            style={{ backgroundColor: 'var(--brand)', boxShadow: '0 8px 30px rgba(0,184,212,0.45)' }}
          >
            {t('hero.cta.contact')}
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/pakkauskoneet"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:bg-white/10"
            style={{ border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)' }}
          >
            {t('hero.cta.machines')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
