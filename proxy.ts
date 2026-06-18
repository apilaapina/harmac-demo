import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Locale routing (Next 16 renamed `middleware` → `proxy`).
 * Any path without a /fi or /en prefix is redirected to a locale, chosen by:
 *   1. the visitor's saved cookie, then
 *   2. the Accept-Language header, then
 *   3. Finnish (the business is Finnish-first).
 */

const LOCALES = ['fi', 'en'] as const
const DEFAULT_LOCALE = 'fi'
const COOKIE_KEY = 'harmac-lang'

function pickLocale(request: NextRequest): string {
  const cookie = request.cookies.get(COOKIE_KEY)?.value
  if (cookie === 'fi' || cookie === 'en') return cookie

  const accept = request.headers.get('accept-language')?.toLowerCase() ?? ''
  // Prefer English only if it's clearly the leading preference.
  const firstLang = accept.split(',')[0]?.trim() ?? ''
  if (firstLang.startsWith('en')) return 'en'

  return DEFAULT_LOCALE
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )
  if (hasLocale) return NextResponse.next()

  const locale = pickLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Run on everything except API routes, Next internals, and files with an
  // extension (so /sitemap.xml, /robots.txt, /favicon.ico, images bypass it).
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
