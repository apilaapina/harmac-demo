export type Partner = {
  name: string
  category: { fi: string; en: string }
  description: { fi: string; en: string }
  website?: string
  /** Logo path in /public/partners (official logos from harmac.fi); falls back to a wordmark. */
  logo?: string
}

export const partners: Partner[] = [
  {
    name: 'PFM',
    category: { fi: 'Pakkauskoneet', en: 'Packaging Machines' },
    description: {
      fi: 'PFM on italialainen pakkauskonevalmistaja, joka on erikoistunut flowpack- ja vertikaalisiin pakkausratkaisuihin elintarvike- ja ei-elintarviketeollisuuteen.',
      en: 'PFM is an Italian packaging machine manufacturer specialising in flowpack and vertical packaging solutions for food and non-food industries.',
    },
    website: 'https://www.pfm-group.com',
    logo: '/partners/pfm.png',
  },
  {
    name: 'Sorma',
    category: { fi: 'Pakkauskoneet', en: 'Packaging Machines' },
    description: {
      fi: 'Sorma tarjoaa innovatiivisia pakkausratkaisuja tuoretuotteille, erityisesti hedelmille ja vihanneksille.',
      en: 'Sorma offers innovative packaging solutions for fresh produce, particularly fruits and vegetables.',
    },
    website: 'https://www.sorma.it',
    logo: '/partners/sorma.jpg',
  },
  {
    name: 'Jehitek',
    category: { fi: 'Lavaajat ja kuljettimet', en: 'Palletisers & Conveyors' },
    description: {
      fi: 'Jehitek on erikoistunut automaattisiin lavaajiin ja pakkauslinjaston loppupään ratkaisuihin.',
      en: 'Jehitek specialises in automatic palletisers and end-of-line packaging solutions.',
    },
    logo: '/partners/jehitek.png',
  },
  {
    name: 'Nemesis',
    category: { fi: 'Vaakat ja annostelulaitteet', en: 'Scales & Dosing Equipment' },
    description: {
      fi: 'Nemesis valmistaa tarkkoja vaakoja ja annostelulaitteita, jotka integroituvat saumattomasti pakkauslinjoihin.',
      en: 'Nemesis manufactures precise scales and dosing equipment that integrate seamlessly with packaging lines.',
    },
    logo: '/partners/nemesis.png',
  },
  {
    name: 'Carl Valentin',
    category: { fi: 'Etikettitulostimet', en: 'Label Printers' },
    description: {
      fi: 'Carl Valentin on saksalainen etikettitulostimien valmistaja, jonka tuotteet tunnetaan luotettavuudestaan teollisuusympäristöissä.',
      en: 'Carl Valentin is a German label printer manufacturer whose products are known for reliability in industrial environments.',
    },
    website: 'https://www.carl-valentin.de',
    logo: '/partners/carl-valentin.svg',
  },
  {
    name: 'Webomatic',
    category: { fi: 'Pakkauskoneet', en: 'Packaging Machines' },
    description: {
      fi: 'Webomatic tarjoaa korkealaatuisia trayseal- ja tyhjöpakkausratkaisuja elintarvike- ja lääketeollisuuteen.',
      en: 'Webomatic provides high-quality tray-seal and vacuum packaging solutions for food and pharmaceutical industries.',
    },
    website: 'https://www.webomatic.de',
    logo: '/partners/webomatic.png',
  },
  {
    name: 'Comarme',
    category: { fi: 'Täyttö- ja suljentakoneet', en: 'Filling & Closing Machines' },
    description: {
      fi: 'Comarme on erikoistunut nestemäisten ja puolinestemäisten tuotteiden täyttökoneisiin.',
      en: 'Comarme specialises in filling machines for liquid and semi-liquid products.',
    },
    logo: '/partners/comarme.png',
  },
  {
    name: 'Loma Systems',
    category: { fi: 'Elintarviketurvallisuus', en: 'Food Safety Inspection' },
    description: {
      fi: 'Loma Systems on yksi maailman johtavista elintarviketurvallisuuslaitteiden valmistajista: metallinpaljastimet, röntgenlaitteet ja painotarkkailulaitteet.',
      en: 'Loma Systems is one of the world\'s leading manufacturers of food safety inspection equipment: metal detectors, X-ray systems, and checkweighers.',
    },
    website: 'https://www.loma.com',
    logo: '/partners/loma.jpg',
  },
  {
    name: 'PMR',
    category: { fi: 'Täyttökoneet', en: 'Filling Machines' },
    description: {
      fi: 'PMR valmistaa täyttökoneita nestemäisille ja puolinestemäisille tuotteille elintarvike- ja kosmetiikkateollisuuteen.',
      en: 'PMR manufactures filling machines for liquid and semi-liquid products in the food and cosmetics industries.',
    },
    logo: '/partners/pmr.jpg',
  },
]
