import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Yhteistyökumppanit – edustamamme pakkauskonevalmistajat',
  description:
    'Harmac edustaa alan johtavia pakkauskonevalmistajia: PFM, Sorma, Loma Systems ja muut. Tutustu yhteistyökumppaneihin ja edustettuihin brändeihin.',
  alternates: { canonical: '/yhteistyossa' },
  openGraph: {
    title: 'Yhteistyössä | Harmac Oy',
    description: 'Edustamme alan johtavia pakkauskonevalmistajia.',
    url: `${SITE_URL}/yhteistyossa`,
    type: 'website',
  },
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children
}
