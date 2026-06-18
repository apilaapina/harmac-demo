'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { useLanguage } from '@/context/LanguageContext'

type LinkProps = ComponentProps<typeof Link>

/**
 * Drop-in replacement for next/link that prefixes internal hrefs with the
 * active locale. Write hrefs as usual ("/pakkauskoneet", "/#about", "/") —
 * they become "/fi/pakkauskoneet" etc. External links (http, mailto, tel) and
 * bare hashes pass through untouched.
 */
export default function LocaleLink({ href, ...props }: LinkProps) {
  const { lang } = useLanguage()

  let localized: LinkProps['href'] = href
  if (typeof href === 'string' && href.startsWith('/')) {
    localized = href === '/' ? `/${lang}` : `/${lang}${href}`
  }

  return <Link href={localized} {...props} />
}
