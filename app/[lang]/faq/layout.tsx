import type { Metadata } from 'next'
import { SITE_URL, OG_IMAGE } from '@/lib/site'

const meta = {
  fi: {
    title: 'Usein kysytyt kysymykset pakkauskoneista',
    description:
      'Vastauksia yleisimpiin kysymyksiin pakkauskoneista: koneen valinta, toimitus, asennus, huolto ja tekniset tiedot. Harmac Oy auttaa löytämään oikean ratkaisun.',
    ogTitle: 'Usein kysytyt kysymykset | Harmac Oy',
    ogDescription: 'Vastauksia yleisimpiin kysymyksiin pakkauskoneista ja palveluistamme.',
  },
  en: {
    title: 'Frequently asked questions about packaging machines',
    description:
      'Answers to common questions about packaging machines: choosing a machine, delivery, installation, service, and technical details. Harmac Oy helps you find the right solution.',
    ogTitle: 'Frequently asked questions | Harmac Oy',
    ogDescription: 'Answers to common questions about packaging machines and our services.',
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
  const path = '/faq'

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

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
