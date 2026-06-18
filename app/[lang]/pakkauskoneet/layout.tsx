import type { Metadata } from 'next'
import { SITE_URL, OG_IMAGE } from '@/lib/site'

const meta = {
  fi: {
    title: 'Pakkauskoneet – flowpack, pystypakkaus ja monipäävaa’at',
    description:
      'Harmac Oy:n pakkauskonevalikoima: flowpack-pakkauskoneet, pystypakkauskoneet (VFFS), monipäävaa’at ja lisälaitteet. Pientuotannosta suurteollisuuteen. Pyydä tarjous.',
    ogTitle: 'Pakkauskoneet | Harmac Oy',
    ogDescription:
      'Flowpack, pystypakkaus, monipäävaa’at ja lisälaitteet pientuotannosta suurteollisuuteen.',
  },
  en: {
    title: 'Packaging machines – flowpack, vertical & multi-head weighers',
    description:
      'Harmac Oy’s packaging machine range: flowpack machines, vertical (VFFS) machines, multi-head weighers, and accessories. From small-batch to large-scale industry. Request a quote.',
    ogTitle: 'Packaging machines | Harmac Oy',
    ogDescription:
      'Flowpack, vertical packaging, multi-head weighers, and accessories from small-batch to large-scale industry.',
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
  const path = '/pakkauskoneet'

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

export default function MachinesLayout({ children }: { children: React.ReactNode }) {
  return children
}
