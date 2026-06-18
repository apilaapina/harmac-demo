import type { Metadata } from 'next'
import { SITE_URL, OG_IMAGE } from '@/lib/site'

const meta = {
  fi: {
    title: 'Tietosuojaseloste',
    description:
      'Harmac Oy:n tietosuojaseloste: miten keräämme, käytämme ja suojaamme henkilötietoja verkkosivustollamme ja yhteydenottojen yhteydessä.',
  },
  en: {
    title: 'Privacy Policy',
    description:
      'Harmac Oy privacy policy: how we collect, use, and protect personal data on our website and when you contact us.',
  },
} as const

function isLang(v: string): v is 'fi' | 'en' {
  return v === 'fi' || v === 'en'
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = isLang(lang) ? lang : 'fi'
  const m = meta[l]
  const path = '/tietosuoja'

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `/${l}${path}`,
      languages: { 'fi-FI': `/fi${path}`, 'en-US': `/en${path}`, 'x-default': `/fi${path}` },
    },
    openGraph: {
      title: `${m.title} | Harmac Oy`,
      description: m.description,
      url: `${SITE_URL}/${l}${path}`,
      type: 'website',
      images: [OG_IMAGE],
    },
  }
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
