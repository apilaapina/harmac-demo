import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { machines } from '@/lib/machines'

const LOCALES = ['fi', 'en'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: { path: string; changeFrequency: 'monthly' | 'yearly'; priority: number }[] = [
    { path: '', changeFrequency: 'monthly', priority: 1 },
    { path: '/pakkauskoneet', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/yhteistyossa', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/referenssit', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/ota-yhteytta', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/tietosuoja', changeFrequency: 'yearly', priority: 0.2 },
    ...machines.map((m) => ({
      path: `/pakkauskoneet/${m.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  const entries: MetadataRoute.Sitemap = []
  for (const { path, changeFrequency, priority } of routes) {
    for (const lang of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${lang}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            fi: `${SITE_URL}/fi${path}`,
            en: `${SITE_URL}/en${path}`,
          },
        },
      })
    }
  }

  return entries
}
