import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Pakkauskoneet – flowpack, pystypakkaus ja monipäävaa’at',
  description:
    'Harmac Oy:n pakkauskonevalikoima: flowpack-pakkauskoneet, pystypakkauskoneet (VFFS), monipäävaa’at ja lisälaitteet. Pientuotannosta suurteollisuuteen. Pyydä tarjous.',
  alternates: { canonical: '/pakkauskoneet' },
  openGraph: {
    title: 'Pakkauskoneet | Harmac Oy',
    description:
      'Flowpack, pystypakkaus, monipäävaa’at ja lisälaitteet pientuotannosta suurteollisuuteen.',
    url: `${SITE_URL}/pakkauskoneet`,
    type: 'website',
  },
}

export default function MachinesLayout({ children }: { children: React.ReactNode }) {
  return children
}
