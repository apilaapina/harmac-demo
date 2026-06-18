'use client'

import Link from '@/components/LocaleLink'
import { useLanguage } from '@/context/LanguageContext'
import { ORG } from '@/lib/site'

type Section = { h: string; p: string[] }
type Content = { title: string; updated: string; intro: string; sections: Section[] }

const addressLine = `${ORG.street}, ${ORG.postalCode} ${ORG.city}`
const phone = ORG.phoneDisplay

const content: Record<'fi' | 'en', Content> = {
  fi: {
    title: 'Tietosuojaseloste',
    updated: 'Päivitetty viimeksi 18.6.2026',
    intro:
      'Tässä tietosuojaselosteessa kerrotaan, miten Harmac Oy kerää, käyttää ja suojaa henkilötietoja, kun käytät verkkosivustoamme tai otat meihin yhteyttä.',
    sections: [
      {
        h: 'Rekisterinpitäjä',
        p: [`${ORG.name}`, addressLine, `Sähköposti: ${ORG.email}`, `Puhelin: ${phone}`],
      },
      {
        h: 'Mitä tietoja keräämme',
        p: [
          'Kun lähetät yhteydenotto- tai tarjouspyyntölomakkeen, käsittelemme antamiasi tietoja: nimi, yritys, sähköpostiosoite, puhelinnumero (jos annat sen) sekä viestin sisältö.',
          'Sivuston teknisen toiminnan yhteydessä voidaan kerätä palvelimen lokitietoja, kuten IP-osoite ja selaintiedot.',
        ],
      },
      {
        h: 'Käsittelyn tarkoitus ja oikeusperuste',
        p: [
          'Käsittelemme tietoja yhteydenottoihin vastaamiseksi, tarjousten laatimiseksi ja asiakassuhteen hoitamiseksi.',
          'Käsittelyn oikeusperusteena on oikeutettu etumme vastata yhteydenottoihin sekä pyynnöstäsi toteutettavat sopimusta edeltävät toimenpiteet (EU:n yleinen tietosuoja-asetus, 6 artikla 1 b ja f).',
        ],
      },
      {
        h: 'Tietojen säilytysaika',
        p: [
          'Säilytämme yhteydenottojen tietoja vain niin kauan kuin on tarpeen asian hoitamiseksi ja mahdollisen asiakassuhteen ylläpitämiseksi. Tarpeettomiksi käyneet tiedot poistetaan.',
        ],
      },
      {
        h: 'Tietojen luovutus ja kolmannet osapuolet',
        p: [
          'Emme myy emmekä vuokraa henkilötietoja kolmansille osapuolille.',
          'Käytämme lomakeviestien välittämiseen Resend-sähköpostipalvelua. Yhteystietosivun kartta näytetään Google Mapsin kautta vasta, kun hyväksyt sen latautumisen.',
        ],
      },
      {
        h: 'Evästeet',
        p: [
          'Sivusto käyttää yhtä välttämätöntä evästettä kielivalintasi muistamiseen. Tämä ei vaadi erillistä suostumusta.',
          'Google Maps -kartta voi asettaa evästeitä, mutta se ladataan vasta suostumuksellasi yhteystietosivulla.',
        ],
      },
      {
        h: 'Oikeutesi',
        p: [
          'Sinulla on oikeus tarkastaa sinua koskevat tiedot, pyytää niiden oikaisua tai poistamista, rajoittaa tai vastustaa käsittelyä sekä pyytää tietojen siirtämistä.',
          'Voit myös tehdä valituksen tietosuojavaltuutetun toimistolle (tietosuoja.fi).',
          `Oikeuksiesi käyttämiseksi ota yhteyttä: ${ORG.email}.`,
        ],
      },
      {
        h: 'Muutokset tähän selosteeseen',
        p: [
          'Voimme päivittää tätä tietosuojaselostetta tarvittaessa. Viimeisin päivityspäivä näkyy sivun yläosassa.',
        ],
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated 18 June 2026',
    intro:
      'This privacy policy explains how Harmac Oy collects, uses, and protects personal data when you use our website or contact us.',
    sections: [
      {
        h: 'Data controller',
        p: [`${ORG.name}`, addressLine, `Email: ${ORG.email}`, `Phone: ${phone}`],
      },
      {
        h: 'What data we collect',
        p: [
          'When you submit a contact or quote-request form, we process the details you provide: name, company, email address, phone number (if given), and the content of your message.',
          'For the technical operation of the site, server log data such as IP address and browser information may be collected.',
        ],
      },
      {
        h: 'Purpose and legal basis',
        p: [
          'We process this data to respond to enquiries, prepare quotations, and manage the customer relationship.',
          'The legal basis is our legitimate interest in responding to enquiries and pre-contractual steps taken at your request (EU General Data Protection Regulation, Article 6(1)(b) and (f)).',
        ],
      },
      {
        h: 'Retention period',
        p: [
          'We retain enquiry data only as long as necessary to handle the matter and maintain any resulting customer relationship. Data no longer needed is deleted.',
        ],
      },
      {
        h: 'Disclosure and third parties',
        p: [
          'We do not sell or rent personal data to third parties.',
          'We use the Resend email service to deliver form messages. The map on the contact page is loaded via Google Maps only after you consent to it loading.',
        ],
      },
      {
        h: 'Cookies',
        p: [
          'The site uses one strictly necessary cookie to remember your language choice. This does not require separate consent.',
          'The Google Maps map may set cookies, but it is loaded only with your consent on the contact page.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'You have the right to access your data, request its rectification or erasure, restrict or object to processing, and request data portability.',
          'You may also lodge a complaint with the Finnish Data Protection Ombudsman (tietosuoja.fi).',
          `To exercise your rights, contact: ${ORG.email}.`,
        ],
      },
      {
        h: 'Changes to this policy',
        p: [
          'We may update this privacy policy when necessary. The date of the most recent update is shown at the top of the page.',
        ],
      },
    ],
  },
}

export default function PrivacyPage() {
  const { t, lang } = useLanguage()
  const c = content[lang]

  return (
    <>
      {/* Page header */}
      <section className="py-16" style={{ backgroundColor: 'var(--brand)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">{t('breadcrumb.home')}</Link>
            <span>/</span>
            <span className="text-white font-medium">{c.title}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-3 break-words">
            {c.title}
          </h1>
          <p className="text-white/70 text-sm">{c.updated}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-text-muted leading-relaxed text-[17px] mb-10">{c.intro}</p>

          <div className="space-y-9">
            {c.sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-lg font-bold text-text mb-2">{s.h}</h2>
                <div className="space-y-2">
                  {s.p.map((para, i) => (
                    <p key={i} className="text-text-muted leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
