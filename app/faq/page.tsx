'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

type FAQ = {
  question: { fi: string; en: string }
  answer: { fi: string; en: string }
}

type FAQCategory = {
  title: { fi: string; en: string }
  faqs: FAQ[]
}

const faqCategories: FAQCategory[] = [
  {
    title: { fi: 'Yleistä Harmac Oy:stä', en: 'About Harmac Oy' },
    faqs: [
      {
        question: { fi: 'Milloin Harmac Oy on perustettu?', en: 'When was Harmac Oy founded?' },
        answer: {
          fi: 'Harmac Oy perustettiin vuonna 2010. Meillä on yli 15 vuoden kokemus pakkauskoneiden maahantuonnista, myynnistä, asennuksesta ja huollosta Suomessa.',
          en: 'Harmac Oy was founded in 2010. We have over 15 years of experience in importing, selling, installing, and servicing packaging machines in Finland.',
        },
      },
      {
        question: { fi: 'Missä Harmac Oy sijaitsee?', en: 'Where is Harmac Oy located?' },
        answer: {
          fi: 'Toimipisteemme sijaitsee Vantaalla, osoitteessa Leinikkitie 20B, 01350 Vantaa — Tikkurilan Simonkylässä, helposti saavutettavissa pääkaupunkiseudulta.',
          en: 'Our office is located in Vantaa at Leinikkitie 20B, 01350 Vantaa — in the Tikkurilan Simonkylä area, easily accessible from the greater Helsinki region.',
        },
      },
      {
        question: { fi: 'Miten Harmac Oy eroaa muista pakkauskonevälittäjistä?', en: 'How does Harmac Oy differ from other packaging machine dealers?' },
        answer: {
          fi: 'Harmac Oy:n myyntineuvotteluissa painotetaan aina teknistä osaamista kaupallisen myynninedistämisen sijaan. Emme myy sopivinta konetta vaan parhaiten sopivan. Pienenä toimijana tarjoamme henkilökohtaista palvelua ja nopean vasteajan — asiakkaasi ei joudu jonottamaan puhelinpalveluun.',
          en: 'Harmac Oy\'s sales consultations always emphasise technical expertise over commercial promotion. We do not sell the easiest machine — we sell the best-fit machine. As a lean company, we provide personal service and fast response times — you will not be waiting in a phone queue.',
        },
      },
      {
        question: { fi: 'Mitä pakkauskonetyyppejä edustatte?', en: 'What types of packaging machines do you represent?' },
        answer: {
          fi: 'Edustamme flowpack-pakkauskoneita, pystypakkauskoneita (VFFS), monipäävaakoja sekä lisälaitteita kuten teippauskoneita, vakuumipakkauskoneita, metallinpaljastimia (Loma Systems) ja painotarkkailulaitteita.',
          en: 'We represent flowpack packaging machines, vertical form-fill-seal (VFFS) machines, multi-head weighers, and accessories including taping machines, vacuum packaging machines, metal detectors (Loma Systems), and checkweighers.',
        },
      },
    ],
  },
  {
    title: { fi: 'Pakkauskoneen valinta', en: 'Choosing the right machine' },
    faqs: [
      {
        question: { fi: 'Miten valitsen oikean pakkauskoneen tuotantooni?', en: 'How do I choose the right packaging machine for my production?' },
        answer: {
          fi: 'Oikea kone riippuu kolmesta avaintekijästä: (1) tuotteen muoto, paino ja ominaisuudet, (2) tarvittava pakkausnopeus ja kapasiteetti sekä (3) pakkausmateriaali ja pakkauksen ulkoasu. Harmac Oy tekee tarpeiden kartoituksen kanssasi — ota yhteyttä niin käydään läpi juuri sinulle sopivat vaihtoehdot.',
          en: 'The right machine depends on three key factors: (1) your product\'s shape, weight, and characteristics, (2) required packaging speed and capacity, and (3) packaging material and pack appearance. Harmac Oy conducts a needs assessment with you — get in touch and we will walk you through the options that best suit your situation.',
        },
      },
      {
        question: { fi: 'Sopiiko flowpack- vai pystypakkauskone tuotteelleni?', en: 'Is a flowpack or vertical packaging machine right for my product?' },
        answer: {
          fi: 'Flowpack-kone (vaakasylinterimuoto) sopii parhaiten kiinteille ja puolikiinteille tuotteille kuten leivonnaisille, lihalle ja esinepakkaamiselle. Pystypakkauskone (VFFS) sopii irtotuotteille, jauheille ja rakeisille aineille kuten mausteille, pähkinöille ja granolalle. Jos tuote on nestemäinen, se vaatii erillisen täyttökoneen.',
          en: 'A flowpack machine (horizontal form-fill-seal) works best for solid and semi-solid products such as bakery items, meat, and object packaging. A vertical packaging machine (VFFS) is suited for loose products, powders, and granular materials such as spices, nuts, and granola. Liquid products require a separate filling machine.',
        },
      },
      {
        question: { fi: 'Mihin käyttöön monipäävaaka tarvitaan?', en: 'When do I need a multi-head weigher?' },
        answer: {
          fi: 'Monipäävaaka tarvitaan, kun halutaan punnita irtotuotteet tarkasti ja nopeasti ennen pakkaamista. Se on erityisesti hyödyllinen pystylinjoissa, joissa tuotteet kaadetaan pussin sisään tietyissä painoportaissa. Monipäävaaka minimoi tuotehävikin paremman annostustarkkuuden ansiosta.',
          en: 'A multi-head weigher is needed when you want to accurately and quickly weigh loose products before packaging. It is particularly useful in vertical lines where products are dropped into bags at specific weight targets. A multi-head weigher minimises product giveaway through improved dosing accuracy.',
        },
      },
      {
        question: { fi: 'Voidaanko koneita räätälöidä tuotteilleni?', en: 'Can machines be customised for my products?' },
        answer: {
          fi: 'Kyllä. Kaikki edustamamme koneet voidaan konfiguroida tuotteen, pakkausmateriaalin ja tuotantolinjaston mukaan. Eräitä esimerkkejä räätälöinnistä ovat erityiset kauhut tahmeille tuotteille, suojakaasupakkaus (MAP), erikoisfilmit biopohjaisille pakkausmateriaaleille ja erilaiset pussinmuodot.',
          en: 'Yes. All the machines we represent can be configured to your product, packaging material, and production line. Examples of customisation include special buckets for sticky products, modified atmosphere packaging (MAP), special films for bio-based materials, and various bag formats.',
        },
      },
    ],
  },
  {
    title: { fi: 'Toimitus ja asennus', en: 'Delivery and installation' },
    faqs: [
      {
        question: { fi: 'Kuinka pitkä on toimitusaika?', en: 'How long is the delivery lead time?' },
        answer: {
          fi: 'Toimitusajat vaihtelevat konetyypistä ja varastotilanteesta riippuen. Tyypillisesti toimitusaika on 6–14 viikkoa. Kiireellisissä tapauksissa selvitämme aina mahdollisuuden nopeampaan toimitukseen. Ota yhteyttä ja kerro tarpeestasi niin annamme tarkan aikataulun.',
          en: 'Lead times vary depending on the machine type and stock availability. Typically delivery takes 6–14 weeks. For urgent cases, we always explore the possibility of a faster delivery. Get in touch and tell us your requirements and we will give you a precise timeline.',
        },
      },
      {
        question: { fi: 'Sisältyykö asennus koneen hintaan?', en: 'Is installation included in the machine price?' },
        answer: {
          fi: 'Asennus-, käyttöönotto- ja koulutuspalvelu voidaan sisällyttää toimitukseen. Käymme tämän läpi tarjouksen yhteydessä. Harmac Oy:n teknikot tekevät asennuksen paikan päällä tehtaassasi.',
          en: 'Installation, commissioning, and training services can be included in the delivery. We discuss this when preparing the quotation. Harmac Oy technicians carry out the installation at your factory.',
        },
      },
      {
        question: { fi: 'Kuinka kauan asennus kestää?', en: 'How long does installation take?' },
        answer: {
          fi: 'Yksinkertaisen koneen asennus kestää tyypillisesti 1–2 päivää. Monimutkaisempi pakkauslinja, jossa on useita laitteita, voi vaatia 3–5 päivää. Antamme tarkan aikataulun etukäteen.',
          en: 'A straightforward single-machine installation typically takes 1–2 days. A more complex packaging line involving multiple pieces of equipment may require 3–5 days. We provide a precise schedule in advance.',
        },
      },
      {
        question: { fi: 'Tarjoatteko henkilöstökoulutusta?', en: 'Do you provide staff training?' },
        answer: {
          fi: 'Kyllä. Käyttöönottoon kuuluu aina henkilöstön koulutus. Koulutamme operaattorit koneen käyttöön, perushuoltoon ja vianmääritykseen paikan päällä asennuksen yhteydessä.',
          en: 'Yes. Commissioning always includes staff training. We train operators in machine operation, basic maintenance, and fault-finding on-site during installation.',
        },
      },
    ],
  },
  {
    title: { fi: 'Huolto ja tuki', en: 'Service and support' },
    faqs: [
      {
        question: { fi: 'Tarjoatteko huoltopalvelua ostamisen jälkeen?', en: 'Do you offer after-sales service?' },
        answer: {
          fi: 'Kyllä. Harmac Oy tarjoaa kattavan huoltopalvelun kaikille edustamilleen koneille: ennakkohuollot sopimuksen mukaan, vianetsintä ja korjaus, varaosatoimitus sekä etätuki. Tavoitteemme on minimoida tuotantokatkokset.',
          en: 'Yes. Harmac Oy provides comprehensive after-sales service for all the machines it represents: scheduled preventive maintenance, fault-finding and repair, spare parts supply, and remote support. Our goal is to minimise production downtime.',
        },
      },
      {
        question: { fi: 'Saanko varaosia myös vanhempiin koneisiin?', en: 'Can I get spare parts for older machines?' },
        answer: {
          fi: 'Kyllä. Yhteistyössä valmistajien kanssa pystymme toimittamaan varaosia myös vanhempiin konemalleihin. Otamme yhteyttä valmistajaan ja selvitämme saatavuuden tapauskohtaisesti.',
          en: 'Yes. Working together with manufacturers, we are able to supply spare parts for older machine models too. We contact the manufacturer and investigate availability on a case-by-case basis.',
        },
      },
      {
        question: { fi: 'Onko etätuki saatavilla?', en: 'Is remote support available?' },
        answer: {
          fi: 'Kyllä. Monet ongelmat voidaan ratkaista etänä ilman teknikoiden käyntiä. Etätuki on nopeampi ja edullisempi vaihtoehto pienempiin vianmäärityksiin ja ohjelmistosäätöihin.',
          en: 'Yes. Many issues can be resolved remotely without a technician visit. Remote support is a faster and more cost-effective option for minor fault-finding and software adjustments.',
        },
      },
      {
        question: { fi: 'Teettekö ennakkohuoltosopimuksia?', en: 'Do you offer preventive maintenance contracts?' },
        answer: {
          fi: 'Kyllä. Ennakkohuoltosopimus vähentää odottamattomia tuotantokatkoksia ja pidentää koneen käyttöikää. Sopimus räätälöidään koneen käyttöasteen ja kriittisyyden mukaan. Kysy lisää.',
          en: 'Yes. A preventive maintenance contract reduces unexpected production downtime and extends the machine\'s service life. The contract is tailored to the machine\'s usage intensity and criticality. Ask us for more details.',
        },
      },
    ],
  },
  {
    title: { fi: 'Tekniset kysymykset', en: 'Technical questions' },
    faqs: [
      {
        question: { fi: 'Mitä pakkausmateriaaleja koneet käyttävät?', en: 'What packaging materials can the machines use?' },
        answer: {
          fi: 'Edustamamme koneet soveltuvat laajaan valikoimaan pakkausmateriaaleja: polyeteeni (PE), polypropyleeni (PP), monilaminaatti, biopohjaiset kalvot, kierrätysmateriaalit ja erilaiset yhdistelmämateriaalit. Materiaalin valinta riippuu tuotteesta, säilyvyysvaatimuksista ja brändistäsi.',
          en: 'The machines we represent are compatible with a wide range of packaging materials: polyethylene (PE), polypropylene (PP), multi-laminate, bio-based films, recyclable materials, and various composite materials. The choice of material depends on your product, shelf-life requirements, and brand.',
        },
      },
      {
        question: { fi: 'Onko koneilla CE-merkintä?', en: 'Do the machines have CE marking?' },
        answer: {
          fi: 'Kyllä. Kaikki edustamamme koneet täyttävät EU:n konedirektiivin vaatimukset ja niissä on CE-merkintä. Tarvittaessa voimme toimittaa koneen täydellisen teknisen dokumentaation.',
          en: 'Yes. All the machines we represent comply with the EU Machinery Directive and carry CE marking. If required, we can supply the machine\'s complete technical documentation.',
        },
      },
      {
        question: { fi: 'Mitä sähkösyöttöä koneet vaativat?', en: 'What power supply do the machines require?' },
        answer: {
          fi: 'Suurin osa koneista toimii 3-vaihesähköllä 400V / 50Hz. Jotkut pienemmät pöytämallit toimivat 230V / 50Hz. Tarkka sähköistyssuunnitelma toimitetaan aina koneen mukana.',
          en: 'Most machines operate on 3-phase power at 400V / 50Hz. Some smaller desktop models run on 230V / 50Hz. A precise electrical layout is always supplied with the machine.',
        },
      },
      {
        question: { fi: 'Voidaanko kone integroida olemassa olevaan tuotantolinjaan?', en: 'Can the machine be integrated into an existing production line?' },
        answer: {
          fi: 'Kyllä. Kaikki edustamamme koneet voidaan integroida kuljetinjärjestelmien kautta olemassa oleviin linjoihin. Suunnittelemme integraation yhdessä ja tarvittaessa tilaamme sopivat liitäntäkuljettimet.',
          en: 'Yes. All the machines we represent can be integrated via conveyor systems into existing lines. We plan the integration together and, if needed, order appropriate interface conveyors.',
        },
      },
      {
        question: { fi: 'Kuinka kone puhdistetaan?', en: 'How is the machine cleaned?' },
        answer: {
          fi: 'Puhdistusohjeet vaihtelevat konetyypeittäin ja ovat aina koneen käyttöohjeessa. Elintarvikekoneet ovat yleensä IP65-luokiteltuja ja pestävissä painevedellä. Koulutuksessa käymme läpi puhdistusmenetelmän koneen asennuksen yhteydessä.',
          en: 'Cleaning instructions vary by machine type and are always included in the machine\'s operating manual. Food-grade machines are generally rated IP65 and can be cleaned with pressurised water. We cover the cleaning procedure during training at installation.',
        },
      },
    ],
  },
]

// Build flat FAQ list for schema
const allFaqs = faqCategories.flatMap((cat) => cat.faqs)

function FAQItem({ faq, lang, isOpen, onToggle }: {
  faq: FAQ
  lang: 'fi' | 'en'
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-bg transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-text pr-4">{faq.question[lang]}</span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: 'var(--brand)' }}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-4 text-sm text-text-muted leading-relaxed">{faq.answer[lang]}</div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const { t, lang } = useLanguage()
  const [openKey, setOpenKey] = useState<string | null>(null)

  // JSON-LD for this page — full FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question[lang],
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer[lang],
      },
    })),
  }

  return (
    <>
      {/* Inject FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page header */}
      <section className="py-16" style={{ backgroundColor: 'var(--brand)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              {t('breadcrumb.home')}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">FAQ</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white uppercase tracking-tight mb-3">
            {lang === 'fi' ? 'Usein kysytyt kysymykset' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-white/70 max-w-xl">
            {lang === 'fi'
              ? 'Vastauksia yleisimpiin kysymyksiin pakkauskoneista, toimituksesta, asennuksesta ja huollosta.'
              : 'Answers to the most common questions about packaging machines, delivery, installation, and service.'}
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-16 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick nav pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {faqCategories.map((cat) => (
              <a
                key={cat.title.fi}
                href={`#${cat.title.fi.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full border border-border bg-white hover:border-brand transition-all"
                style={{ color: 'var(--brand)' }}
              >
                {cat.title[lang]}
              </a>
            ))}
          </div>

          {/* Category sections */}
          <div className="space-y-10">
            {faqCategories.map((cat) => (
              <div key={cat.title.fi} id={cat.title.fi.replace(/\s+/g, '-').toLowerCase()}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="h-px flex-1"
                    style={{ backgroundColor: 'var(--brand)', opacity: 0.3 }}
                  />
                  <h2 className="text-sm font-extrabold uppercase tracking-widest whitespace-nowrap" style={{ color: 'var(--brand)' }}>
                    {cat.title[lang]}
                  </h2>
                  <div
                    className="h-px flex-1"
                    style={{ backgroundColor: 'var(--brand)', opacity: 0.3 }}
                  />
                </div>

                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                  {cat.faqs.map((faq, i) => {
                    const key = `${cat.title.fi}-${i}`
                    return (
                      <FAQItem
                        key={key}
                        faq={faq}
                        lang={lang}
                        isOpen={openKey === key}
                        onToggle={() => setOpenKey(openKey === key ? null : key)}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div
            className="mt-16 rounded-2xl p-8 text-center"
            style={{ backgroundColor: 'var(--dark)' }}
          >
            <h2 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-2">
              {lang === 'fi' ? 'Ei löytynyt vastausta?' : "Didn't find your answer?"}
            </h2>
            <p className="text-white/60 mb-6 text-sm">
              {lang === 'fi'
                ? 'Ota suoraan yhteyttä — vastaamme kaikkiin kysymyksiin.'
                : 'Contact us directly — we answer every question.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/ota-yhteytta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--brand)' }}
              >
                {t('nav.contact')} <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+358400866569"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <Phone size={14} /> +358 400 866 569
              </a>
              <a
                href="mailto:make@harmac.fi"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <Mail size={14} /> make@harmac.fi
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
