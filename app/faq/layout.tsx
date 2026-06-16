import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Usein kysytyt kysymykset pakkauskoneista',
  description:
    'Vastauksia yleisimpiin kysymyksiin pakkauskoneista: koneen valinta, toimitus, asennus, huolto ja tekniset tiedot. Harmac Oy auttaa löytämään oikean ratkaisun.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Usein kysytyt kysymykset | Harmac Oy',
    description: 'Vastauksia yleisimpiin kysymyksiin pakkauskoneista ja palveluistamme.',
    url: `${SITE_URL}/faq`,
    type: 'website',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
