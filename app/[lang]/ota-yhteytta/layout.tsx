import type { Metadata } from 'next'
import { SITE_URL, OG_IMAGE } from '@/lib/site'

const meta = {
  fi: {
    title: 'Ota yhteyttä – pyydä tarjous pakkauskoneesta',
    description:
      'Ota yhteyttä Harmac Oy:hyn ja pyydä tarjous pakkauskoneesta. Kerro tuotannostasi, niin asiantuntijamme auttaa löytämään sopivimman ratkaisun. Vantaa.',
    ogTitle: 'Ota yhteyttä | Harmac Oy',
    ogDescription: 'Pyydä tarjous pakkauskoneesta ja kerro tuotannostasi.',
  },
  en: {
    title: 'Contact us – request a packaging machine quote',
    description:
      'Get in touch with Harmac Oy and request a quote for a packaging machine. Tell us about your production and our specialist will help find the best-fit solution. Vantaa, Finland.',
    ogTitle: 'Contact us | Harmac Oy',
    ogDescription: 'Request a packaging machine quote and tell us about your production.',
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
  const path = '/ota-yhteytta'

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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
