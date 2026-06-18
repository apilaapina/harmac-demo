import type { Metadata } from 'next'
import { SITE_URL, OG_IMAGE } from '@/lib/site'

const meta = {
  fi: {
    title: 'Referenssit – yrityksiä, joille olemme toimittaneet pakkauskoneita',
    description:
      'Harmac Oy:n referenssejä: suomalaisia elintarvike-, leipomo- ja puutarha-alan yrityksiä, joille olemme toimittaneet pakkauskoneita ja -ratkaisuja.',
    ogTitle: 'Referenssit | Harmac Oy',
    ogDescription: 'Yrityksiä, joille Harmac on toimittanut pakkauskoneita.',
  },
  en: {
    title: 'References – companies we have delivered packaging machines to',
    description:
      'Harmac Oy references: Finnish food, bakery, and horticulture companies we have delivered packaging machines and solutions to.',
    ogTitle: 'References | Harmac Oy',
    ogDescription: 'Companies Harmac has delivered packaging machines to.',
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
  const path = '/referenssit'

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

export default function ReferencesLayout({ children }: { children: React.ReactNode }) {
  return children
}
