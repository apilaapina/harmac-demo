import type { Metadata } from 'next'
import { getMachineBySlug, machines, machineImages } from '@/lib/machines'
import { SITE_URL, SITE_NAME } from '@/lib/site'

export function generateStaticParams() {
  return machines.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const machine = getMachineBySlug(slug)
  if (!machine) return { title: 'Pakkauskone' }

  const title = `${machine.name} – ${machine.categoryLabel.fi}`
  const description = `${machine.tagline.fi}. ${machine.name} Harmacilta: maahantuonti, asennus ja huolto. Pyydä tarjous.`

  return {
    title,
    description,
    alternates: { canonical: `/pakkauskoneet/${machine.slug}` },
    openGraph: {
      title: `${machine.name} | Harmac Oy`,
      description: machine.tagline.fi,
      url: `${SITE_URL}/pakkauskoneet/${machine.slug}`,
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
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const machine = getMachineBySlug(slug)

  const productSchema = machine && {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: machine.name,
    category: machine.categoryLabel.fi,
    description: machine.description.fi.replace(/\n+/g, ' '),
    image: machineImages[machine.slug],
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      seller: { '@type': 'Organization', name: SITE_NAME },
      url: `${SITE_URL}/pakkauskoneet/${machine.slug}`,
    },
  }

  const faqSchema = machine &&
    machine.faqs.length > 0 && {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: machine.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question.fi,
        acceptedAnswer: { '@type': 'Answer', text: f.answer.fi },
      })),
    }

  const breadcrumbSchema = machine && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Etusivu', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Pakkauskoneet', item: `${SITE_URL}/pakkauskoneet` },
      { '@type': 'ListItem', position: 3, name: machine.name, item: `${SITE_URL}/pakkauskoneet/${machine.slug}` },
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
