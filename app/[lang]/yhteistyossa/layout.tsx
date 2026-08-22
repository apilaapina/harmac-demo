import type { Metadata } from 'next'
import { SITE_URL, OG_IMAGE } from '@/lib/site'

const meta = {
  fi: {
    title: 'Yhteistyökumppanit – edustamamme pakkauskonevalmistajat',
    description:
      'Harmac edustaa alan johtavia pakkauskonevalmistajia: PFM, Sorma, Loma Systems ja muut. Tutustu yhteistyökumppaneihin ja edustettuihin brändeihin.',
    ogTitle: 'Yhteistyössä | Harmac Oy',
    ogDescription: 'Edustamme alan johtavia pakkauskonevalmistajia.',
  },
  en: {
    title: 'Partners – the packaging machine manufacturers we represent',
    description:
      'Harmac represents leading packaging machine manufacturers: PFM, Sorma, Loma Systems, and more. Explore our partners and the brands we represent.',
    ogTitle: 'Partners | Harmac Oy',
    ogDescription: 'We represent leading packaging machine manufacturers.',
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
  const path = '/yhteistyossa'

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `/${l}${path}`,
      languages: { 'fi-FI': `/fi${path}`, 'en-US': `/en${path}`, 'x-default': `/fi${path}` },
    },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: `${SITE_URL}/${l}${path}`,
      type: 'website',
      images: [OG_IMAGE],
    },
  }
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children
}
