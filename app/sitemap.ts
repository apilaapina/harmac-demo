import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { machines } from '@/lib/machines'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/pakkauskoneet`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/yhteistyossa`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/ota-yhteytta`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ]

  const machineRoutes: MetadataRoute.Sitemap = machines.map((m) => ({
    url: `${SITE_URL}/pakkauskoneet/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...machineRoutes]
}
