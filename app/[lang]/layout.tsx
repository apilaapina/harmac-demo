import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import '../globals.css'
import { LanguageProvider, type Lang } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_URL, SITE_NAME, ORG, KEYWORDS, OG_IMAGE } from '@/lib/site'

const LOCALES: Lang[] = ['fi', 'en']

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

function isLang(value: string): value is Lang {
  return value === 'fi' || value === 'en'
}

const meta = {
  fi: {
    title: 'Pakkauskoneet – maahantuonti, myynti, asennus ja huolto | Harmac Oy',
    description:
      'Harmac maahantuo, myy, asentaa ja huoltaa pakkauskoneet pientuotannosta suuriin tehtaisiin. Flowpack, pystypakkaus ja monipäävaa’at. Vantaa. Pyydä tarjous.',
    ogTitle: 'Harmac Oy – Pakkauskoneet pientuotannosta suuriin tehtaisiin',
    ogDescription:
      'Pakkauskoneiden maahantuonti, myynti, asennus ja huolto. Riippumaton kumppani, joka tuntee koneet. Vantaa.',
    locale: 'fi_FI',
  },
  en: {
    title: 'Packaging machines – import, sales, installation & service | Harmac Oy',
    description:
      'Harmac imports, sells, installs, and services packaging machines from small-batch production to large factories. Flowpack, vertical packaging, and multi-head weighers. Vantaa, Finland. Request a quote.',
    ogTitle: 'Harmac Oy – Packaging machines from small-batch to large factories',
    ogDescription:
      'Import, sales, installation, and service of packaging machines. An independent partner that knows the machines. Vantaa, Finland.',
    locale: 'en_US',
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = isLang(lang) ? lang : 'fi'
  const m = meta[l]

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: m.title, template: '%s | Harmac Oy' },
    description: m.description,
    keywords: KEYWORDS,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: `/${l}`,
      languages: { 'fi-FI': '/fi', 'en-US': '/en', 'x-default': '/fi' },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: `${SITE_URL}/${l}`,
      siteName: SITE_NAME,
      locale: m.locale,
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.ogTitle,
      description: m.description,
      images: [OG_IMAGE.url],
    },
    category: 'Packaging machinery',
  }
}

const businessDescription = {
  fi: 'Harmac Oy on pakkauskoneiden maahantuontiin, myyntiin, asennukseen ja huoltoon erikoistunut yritys. Flowpack, pystypakkauskoneet, monipäävaa’at ja lisälaitteet.',
  en: 'Harmac Oy specialises in the import, sales, installation, and service of packaging machines. Flowpack, vertical packaging machines, multi-head weighers, and accessories.',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLang(lang)) notFound()

  const localeTag = lang === 'fi' ? 'fi-FI' : 'en-US'

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: ORG.name,
    description: businessDescription[lang],
    url: `${SITE_URL}/${lang}`,
    telephone: ORG.phone,
    email: ORG.email,
    foundingDate: ORG.founded,
    image: `${SITE_URL}/logo.png`,
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
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: ORG.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
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
    inLanguage: localeTag,
    publisher: { '@id': `${SITE_URL}/#organization` },
  }

  return (
    <html lang={lang} className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text">
        <LanguageProvider lang={lang}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
