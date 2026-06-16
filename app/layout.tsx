import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_URL, SITE_NAME, ORG, KEYWORDS } from '@/lib/site'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Pakkauskoneet – maahantuonti, myynti, asennus ja huolto | Harmac Oy',
    template: '%s | Harmac Oy',
  },
  description:
    'Harmac Oy maahantuo, myy, asentaa ja huoltaa pakkauskoneet — pientuotannosta suuriin tehtaisiin. Flowpack, pystypakkaus ja monipäävaa’at. Vantaa. Pyydä tarjous.',
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: '/',
    languages: { 'fi-FI': '/', 'en-US': '/' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Harmac Oy – Pakkauskoneet pientuotannosta suuriin tehtaisiin',
    description:
      'Pakkauskoneiden maahantuonti, myynti, asennus ja huolto. Riippumaton kumppani, joka tuntee koneet. Perustettu 2010, Vantaa.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'fi_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harmac Oy – Pakkauskoneet',
    description: 'Pakkauskoneiden maahantuonti, myynti, asennus ja huolto. Perustettu 2010, Vantaa.',
  },
  category: 'Packaging machinery',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: ORG.name,
  description:
    'Harmac Oy on pakkauskoneiden maahantuontiin, myyntiin, asennukseen ja huoltoon erikoistunut yritys. Flowpack, pystypakkauskoneet, monipäävaa’at ja lisälaitteet.',
  url: SITE_URL,
  telephone: ORG.phone,
  email: ORG.email,
  foundingDate: ORG.founded,
  image: `${SITE_URL}/wp-content/uploads/2021/10/login-logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ORG.street,
    postalCode: ORG.postalCode,
    addressLocality: ORG.city,
    addressCountry: ORG.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: ORG.lat, longitude: ORG.lng },
  areaServed: { '@type': 'Country', name: 'Finland' },
  priceRange: '€€',
  knowsAbout: [
    'Pakkauskoneet',
    'Flowpack-pakkauskoneet',
    'Pystypakkauskoneet',
    'Monipäävaa’at',
    'Vakuumipakkauskoneet',
    'Pakkauslinjat',
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: ORG.name,
  url: SITE_URL,
  logo: `${SITE_URL}/wp-content/uploads/2021/10/login-logo.png`,
  email: ORG.email,
  telephone: ORG.phone,
  foundingDate: ORG.founded,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: ORG.phone,
    email: ORG.email,
    contactType: 'sales',
    areaServed: 'FI',
    availableLanguage: ['fi', 'en'],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: 'fi-FI',
  publisher: { '@id': `${SITE_URL}/#organization` },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={`${barlow.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
