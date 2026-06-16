'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { LOGO_URL } from '@/lib/machines'
import LanguageToggle from './LanguageToggle'

export default function Header() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/#about', label: t('nav.company') },
    { href: '/pakkauskoneet', label: t('nav.machines') },
    { href: '/yhteistyossa', label: t('nav.partners') },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'border-b border-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src={LOGO_URL}
              alt="Harmac Oy"
              width={48}
              height={53}
              className="rounded"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+358400866569"
              className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              <Phone size={14} style={{ color: 'var(--brand)' }} />
              +358 400 866 569
            </a>
            <LanguageToggle />
            <Link
              href="/ota-yhteytta"
              className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-colors"
              style={{ backgroundColor: 'var(--brand)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = 'var(--brand-dark)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'var(--brand)')
              }
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-text-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-sm font-medium text-text-muted hover:text-text rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/ota-yhteytta"
              className="mt-2 px-4 py-3 rounded-lg text-sm font-bold text-white text-center"
              style={{ backgroundColor: 'var(--brand)' }}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </nav>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
            <a
              href="tel:+358400866569"
              className="flex items-center gap-1.5 text-sm text-text-muted"
            >
              <Phone size={14} style={{ color: 'var(--brand)' }} />
              +358 400 866 569
            </a>
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  )
}
