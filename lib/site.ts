/**
 * Central site constants - used by metadata, sitemap, robots, and JSON-LD.
 * Points at the production domain so SEO is correct when the redesign goes live.
 */
export const SITE_URL = 'https://harmac.fi'
export const SITE_NAME = 'Harmac Oy'

/** Default social-share (Open Graph / Twitter) image, served from /public. */
export const OG_IMAGE = { url: '/og.jpg', width: 1200, height: 630 }

export const ORG = {
  name: 'Harmac Oy',
  legalName: 'Harmac Oy',
  phone: '+358400866569',
  phoneDisplay: '+358 400 866 569',
  email: 'make@harmac.fi',
  street: 'Leinikkitie 20B',
  postalCode: '01350',
  city: 'Vantaa',
  country: 'FI',
  lat: 60.2975,
  lng: 25.0449,
  founded: '2010',
}

/** Finnish-first keyword set targeting the packaging-machine niche. */
export const KEYWORDS = [
  'pakkauskoneet',
  'pakkauskone',
  'flowpack-pakkauskone',
  'flowpack',
  'pystypakkauskone',
  'pystypakkaus',
  'monipäävaaka',
  'vakuumipakkauskone',
  'pakkauskoneiden maahantuonti',
  'pakkauskoneiden huolto',
  'elintarvikkeiden pakkauskone',
  'teippauskone',
  'metallinpaljastin',
  'painotarkkailulaite',
  'checkweigher',
  'pakkauslinja',
  'Harmac',
  'pakkauskoneet Vantaa',
]
