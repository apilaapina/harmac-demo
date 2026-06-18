import type { Metadata } from 'next'
import { getMachineBySlug, machines, machineImages } from '@/lib/machines'
import { SITE_URL, SITE_NAME } from '@/lib/site'

function isLang(v: string): v is 'fi' | 'en' {
  return v === 'fi' || v === 'en'
}

export function generateStaticParams() {
  return machines.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const l = isLang(lang) ? lang : 'fi'
  const machine = getMachineBySlug(slug)
  if (!machine) return { title: l === 'fi' ? 'Pakkauskone' : 'Packaging machine' }

  const title = `${machine.name} – ${machine.categoryLabel[l]}`
  const description =
    l === 'fi'
      ? `${machine.tagline.fi}. ${machine.name} Harmacilta: maahantuonti, asennus ja huolto. Pyydä tarjous.`
      : `${machine.tagline.en}. ${machine.name} from Harmac: import, installation, and service. Request a quote.`
  const path = `/pakkauskoneet/${machine.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: `/${l}${path}`,
      languages: { 'fi-FI': `/fi${path}`, 'en-US': `/en${path}`, 'x-default': `/fi${path}` },
    },
    openGraph: {
      title: `${machine.name} | Harmac Oy`,
      description: machine.tagline[l],
      url: `${SITE_URL}/${l}${path}`,
      type: 'website',
      images: machineImages[machine.slug] ? [{ url: machineImages[machine.slug] }] : undefined,
    },
  }
}

export default async function MachineLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  const l = isLang(lang) ? lang : 'fi'
  const machine = getMachineBySlug(slug)

  const productSchema = machine && {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: machine.name,
    category: machine.categoryLabel[l],
    description: machine.description[l].replace(/\n+/g, ' '),
    image: machineImages[machine.slug],
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      seller: { '@type': 'Organization', name: SITE_NAME },
      url: `${SITE_URL}/${l}/pakkauskoneet/${machine.slug}`,
    },
  }

  const faqSchema = machine &&
    machine.faqs.length > 0 && {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: machine.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question[l],
        acceptedAnswer: { '@type': 'Answer', text: f.answer[l] },
      })),
    }

  const breadcrumbSchema = machine && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: l === 'fi' ? 'Etusivu' : 'Home',
        item: `${SITE_URL}/${l}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: l === 'fi' ? 'Pakkauskoneet' : 'Packaging Machines',
        item: `${SITE_URL}/${l}/pakkauskoneet`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: machine.name,
        item: `${SITE_URL}/${l}/pakkauskoneet/${machine.slug}`,
      },
    ],
  }

  return (
    <>
      {productSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}
      {children}
    </>
  )
}
