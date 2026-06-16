import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Ota yhteyttä – pyydä tarjous pakkauskoneesta',
  description:
    'Ota yhteyttä Harmac Oy:hyn ja pyydä tarjous pakkauskoneesta. Kerro tuotannostasi, niin asiantuntijamme auttaa löytämään sopivimman ratkaisun. Vantaa.',
  alternates: { canonical: '/ota-yhteytta' },
  openGraph: {
    title: 'Ota yhteyttä | Harmac Oy',
    description: 'Pyydä tarjous pakkauskoneesta ja kerro tuotannostasi.',
    url: `${SITE_URL}/ota-yhteytta`,
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
