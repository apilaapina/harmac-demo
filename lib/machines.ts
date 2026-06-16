const BASE = 'https://harmac.fi/wp-content/uploads/2021/10'

export const machineImages: Record<string, string> = {
  shamal:           `${BASE}/Swift_02-1024x642.jpg`,
  swift:            `${BASE}/Swift_02-1024x642.jpg`,
  falcon:           `${BASE}/Swift_02-1024x642.jpg`,
  pearl:            `${BASE}/Swift_02-1024x642.jpg`,
  zenith:           `${BASE}/BG_Vetta_2-958x1024.jpg`,
  'bg-vetta':       `${BASE}/BG_Vetta_2-958x1024.jpg`,
  'mbp-c2':         `${BASE}/PFM-MBP-C2ew-776x1024.jpg`,
  'mbp-c1':         `${BASE}/PFM-MBP-C2ew-776x1024.jpg`,
  teippauskoneet:   `${BASE}/P1033730-200x300-1-145x218.jpg`,
  vakuumipakkaus:   `${BASE}/duoMAT_450_web_s-1-238x238.jpg`,
  metallinpaljastin:`${BASE}/IQ4-Metal-Detector-Conveyor-217x217.jpg`,
  painotarkkailu:   `${BASE}/c-series-checkweigher-transparent-181x181.png`,
}

export const HERO_IMAGE = 'https://harmac.fi/wp-content/uploads/2021/09/HARMAC_FB_cover_1640x923-1024x576-458x257.jpg'
export const LOGO_URL   = 'https://harmac.fi/wp-content/uploads/2021/10/login-logo.png'

export type MachineSpec = {
  label: { fi: string; en: string }
  value: { fi: string; en: string }
}

export type MachineFAQ = {
  question: { fi: string; en: string }
  answer: { fi: string; en: string }
}

export type Machine = {
  slug: string
  name: string
  category: 'flowpack' | 'vertical' | 'multihead' | 'accessories'
  categoryLabel: { fi: string; en: string }
  tagline: { fi: string; en: string }
  description: { fi: string; en: string }
  specs: MachineSpec[]
  faqs: MachineFAQ[]
  applications: { fi: string[]; en: string[] }
}

export const machines: Machine[] = [
  // ─── FLOWPACK ───────────────────────────────────────────────
  {
    slug: 'shamal',
    name: 'Shamal',
    category: 'flowpack',
    categoryLabel: { fi: 'Flowpack-pakkauskoneet', en: 'Flowpack Packaging Machines' },
    tagline: {
      fi: 'Tehokas flowpack pieneen ja keskisuureen tuotantoon',
      en: 'Efficient flowpack for small and medium production',
    },
    description: {
      fi: 'Shamal on luotettava ja helppokäyttöinen flowpack-pakkauskone, joka sopii erinomaisesti pieneen ja keskisuureen tuotantoon. Kone tarjoaa erinomaisen hinta-laatu-suhteen ilman kompromisseja pakkaustuloksessa. Sen kompakti rakenne tekee siitä ihanteellisen ratkaisun tiloihin, joissa tila on rajoitettu.\n\nShamalin intuitiivinen käyttöliittymä vähentää koulutustarvetta ja nopeuttaa asetusaikoja, mikä parantaa tuotannon tehokkuutta. Kone on suunniteltu helposti puhdistettavaksi, mikä on erityisen tärkeää elintarviketeollisuudessa.',
      en: 'The Shamal is a reliable and easy-to-use flowpack packaging machine, ideally suited for small to medium production runs. It offers an excellent price-to-performance ratio without compromising on packaging quality. Its compact structure makes it an ideal solution for facilities where space is limited.\n\nShamal\'s intuitive interface reduces training requirements and speeds up changeover times, improving overall production efficiency. The machine is designed for easy cleaning, which is particularly important in the food industry.',
    },
    specs: [
      { label: { fi: 'Pakkausnopeus', en: 'Packaging speed' }, value: { fi: 'jopa 100 pakk./min', en: 'up to 100 packs/min' } },
      { label: { fi: 'Filmin leveys', en: 'Film width' }, value: { fi: '100–450 mm', en: '100–450 mm' } },
      { label: { fi: 'Tuotteen korkeus', en: 'Product height' }, value: { fi: 'jopa 80 mm', en: 'up to 80 mm' } },
      { label: { fi: 'Sähkösyöttö', en: 'Power supply' }, value: { fi: '400V / 50Hz', en: '400V / 50Hz' } },
    ],
    faqs: [
      {
        question: { fi: 'Mille tuotteille Shamal sopii?', en: 'What products is the Shamal suitable for?' },
        answer: { fi: 'Shamal sopii erinomaisesti leipomotuotteille, makeisille, lihatuotteille sekä muille kiinteille tai puolikiinteille elintarvikkeille. Se sopii myös ei-elintarvikkeille kuten kodin- ja kylpytuotteille.', en: 'The Shamal is excellent for bakery products, confectionery, meat products, and other solid or semi-solid food items. It is also suitable for non-food items such as household and bath products.' },
      },
      {
        question: { fi: 'Kuinka nopeasti kone voidaan asentaa?', en: 'How quickly can the machine be installed?' },
        answer: { fi: 'Tyypillinen asennusaika on 1–2 päivää. Harmac hoitaa asennuksen, käyttöönoton ja henkilöstön koulutuksen paikan päällä.', en: 'Typical installation takes 1–2 days. Harmac handles installation, commissioning, and on-site staff training.' },
      },
      {
        question: { fi: 'Onko koneelle saatavilla huoltopalvelu?', en: 'Is service and maintenance available for this machine?' },
        answer: { fi: 'Kyllä. Harmac tarjoaa täyden huoltopalvelun, varaosatuen ja etätuen kaikille edustamilleen koneille. Myös säännölliset ennakkohuollot hoituvat sopimuksen mukaan.', en: 'Yes. Harmac provides full after-sales service, spare parts support, and remote assistance for all represented machines. Scheduled preventive maintenance is also available under service agreements.' },
      },
    ],
    applications: {
      fi: ['Leipomotuotteet', 'Makeiset', 'Lihatuotteet', 'Pakastetut tuotteet', 'Kodin tuotteet'],
      en: ['Bakery products', 'Confectionery', 'Meat products', 'Frozen products', 'Household products'],
    },
  },
  {
    slug: 'swift',
    name: 'Swift',
    category: 'flowpack',
    categoryLabel: { fi: 'Flowpack-pakkauskoneet', en: 'Flowpack Packaging Machines' },
    tagline: {
      fi: 'Nopea ja joustava flowpack-pakkauskone',
      en: 'Fast and flexible flowpack packaging machine',
    },
    description: {
      fi: 'Swift on korkean suorituskyvyn flowpack-pakkauskone, joka on suunniteltu vaativaan ja nopeaan tuotantoon. Se yhdistää nopean toiminnan ja helpon tuotevaihtamisen, mikä tekee siitä erinomaisen valinnan teollisuusympäristöihin, joissa käytetään useita tuotetyyppejä.\n\nSwift-koneen kehittynyt servo-ohjausjärjestelmä takaa tarkan saumaustuloksen myös korkeilla nopeuksilla. Käyttöliittymä on selkeä ja tehtäväkohtainen muistipaikka mahdollistaa nopean tuotevaihtamisen.',
      en: 'The Swift is a high-performance flowpack packaging machine designed for demanding, high-speed production. It combines fast operation with easy product changeovers, making it an excellent choice for industrial environments that run multiple product types.\n\nThe Swift\'s advanced servo-drive system ensures precise sealing results even at high speeds. The interface is clear, and recipe memory enables rapid product changeovers.',
    },
    specs: [
      { label: { fi: 'Pakkausnopeus', en: 'Packaging speed' }, value: { fi: 'jopa 200 pakk./min', en: 'up to 200 packs/min' } },
      { label: { fi: 'Filmin leveys', en: 'Film width' }, value: { fi: '150–600 mm', en: '150–600 mm' } },
      { label: { fi: 'Tuotteen korkeus', en: 'Product height' }, value: { fi: 'jopa 120 mm', en: 'up to 120 mm' } },
      { label: { fi: 'Ohjausjärjestelmä', en: 'Drive system' }, value: { fi: 'Servo-ohjaus', en: 'Servo-driven' } },
    ],
    faqs: [
      {
        question: { fi: 'Kuinka nopeasti Swift voidaan vaihtaa toiselle tuotteelle?', en: 'How quickly can the Swift be changed over to another product?' },
        answer: { fi: 'Tallennettujen reseptien ansiosta tuotevaihto onnistuu tyypillisesti alle 10 minuutissa. Kone muistaa jopa 99 tuoteprofiilia.', en: 'With stored recipes, product changeovers typically take under 10 minutes. The machine can store up to 99 product profiles.' },
      },
      {
        question: { fi: 'Sopiiko Swift MAP-pakkaamiseen?', en: 'Is the Swift suitable for MAP packaging?' },
        answer: { fi: 'Kyllä, Swift voidaan konfiguroida suojakaasuhuuhtelulla (MAP) tuoretuotteiden säilyvyyden pidentämiseksi.', en: 'Yes, the Swift can be configured with modified atmosphere packaging (MAP) to extend the shelf life of fresh products.' },
      },
    ],
    applications: {
      fi: ['Tuoretuotteet', 'Teollisuuskomponentit', 'Lääketuotteet', 'Keksit ja leivonnaiset'],
      en: ['Fresh produce', 'Industrial components', 'Pharmaceutical products', 'Biscuits and pastries'],
    },
  },
  {
    slug: 'falcon',
    name: 'Falcon',
    category: 'flowpack',
    categoryLabel: { fi: 'Flowpack-pakkauskoneet', en: 'Flowpack Packaging Machines' },
    tagline: {
      fi: 'Raskas flowpack-pakkauskone suureen tuotantoon',
      en: 'Heavy-duty flowpack machine for large-scale production',
    },
    description: {
      fi: 'Falcon on raskaaseen teollisuuskäyttöön suunniteltu flowpack-pakkauskone, joka sopii tuotantolinjoihin, joissa vaaditaan korkea kapasiteetti ja pitkäaikainen käyttövarmuus. Robustin rakenteensa ansiosta Falcon kestää jatkuvan, vuorokautisen käytön vaativissa olosuhteissa.\n\nKone on yhteensopiva useiden pakkausmateriaalien kanssa ja se voidaan integroida helposti olemassa oleviin tuotantolinjoihin. Falcon sopii erityisesti elintarvikealan suuryrityksille, joilla on korkeat tuotantovaatimukset.',
      en: 'The Falcon is a heavy-duty flowpack packaging machine designed for industrial production lines that require high capacity and long-term operational reliability. Its robust construction withstands continuous, round-the-clock use in demanding conditions.\n\nThe machine is compatible with a wide range of packaging materials and can be easily integrated into existing production lines. The Falcon is particularly suited to large food industry companies with high production requirements.',
    },
    specs: [
      { label: { fi: 'Pakkausnopeus', en: 'Packaging speed' }, value: { fi: 'jopa 300 pakk./min', en: 'up to 300 packs/min' } },
      { label: { fi: 'Filmin leveys', en: 'Film width' }, value: { fi: '200–800 mm', en: '200–800 mm' } },
      { label: { fi: 'Maks. tuotepaino', en: 'Max. product weight' }, value: { fi: '5 kg', en: '5 kg' } },
      { label: { fi: 'Rakenne', en: 'Construction' }, value: { fi: 'Hapoton teräs (AISI 304)', en: 'Stainless steel (AISI 304)' } },
    ],
    faqs: [
      {
        question: { fi: 'Sopiiko Falcon 24/7-tuotantoon?', en: 'Is the Falcon suitable for 24/7 production?' },
        answer: { fi: 'Kyllä. Falcon on suunniteltu jatkuvaan käyttöön. Sen komponentit on mitoitettu teolliseen kuormitukseen, ja koneelle on saatavilla kattava varaosapalvelu.', en: 'Yes. The Falcon is designed for continuous use. Its components are rated for industrial loads, and comprehensive spare parts support is available.' },
      },
    ],
    applications: {
      fi: ['Suurtuotanto elintarviketeollisuus', 'Teollisuuspakkaaminen', 'Logistiikkakeskukset'],
      en: ['Large-scale food manufacturing', 'Industrial packaging', 'Logistics centres'],
    },
  },
  {
    slug: 'pearl',
    name: 'Pearl',
    category: 'flowpack',
    categoryLabel: { fi: 'Flowpack-pakkauskoneet', en: 'Flowpack Packaging Machines' },
    tagline: {
      fi: 'Kompakti flowpack pientuotantoon ja käsityöyrityksille',
      en: 'Compact flowpack for small-batch and artisan producers',
    },
    description: {
      fi: 'Pearl on pienyrityksille ja käsityötuottajille suunniteltu kompakti flowpack-pakkauskone. Sen pienen jalanjäljen ja edullisen hankintahinnan ansiosta se on ihanteellinen aloittaville yrityksille tai yrityksille, jotka haluavat automatisoida pakkaamistaan ensimmäistä kertaa.\n\nPienestä koostaan huolimatta Pearl ei tingi pakkaustuloksesta: se tuottaa siistejä, ammattimaisesti suljettuja pakkauksia, jotka parantavat tuotteen ulkonäköä myymälähyllyllä.',
      en: 'The Pearl is a compact flowpack packaging machine designed for small businesses and artisan producers. Its small footprint and affordable purchase price make it ideal for start-up companies or businesses automating their packaging for the first time.\n\nDespite its size, the Pearl does not compromise on packaging quality: it produces neat, professionally sealed packs that improve product appearance on retail shelves.',
    },
    specs: [
      { label: { fi: 'Pakkausnopeus', en: 'Packaging speed' }, value: { fi: 'jopa 60 pakk./min', en: 'up to 60 packs/min' } },
      { label: { fi: 'Filmin leveys', en: 'Film width' }, value: { fi: '80–350 mm', en: '80–350 mm' } },
      { label: { fi: 'Jalanjälki', en: 'Footprint' }, value: { fi: 'Kompakti (alle 2 m²)', en: 'Compact (under 2 m²)' } },
      { label: { fi: 'Käyttö', en: 'Operation' }, value: { fi: 'Helppo, kosketusnäyttö', en: 'Easy touchscreen operation' } },
    ],
    faqs: [
      {
        question: { fi: 'Onko Pearl sopiva ensikoneeksi pienyritykselle?', en: 'Is the Pearl a good first machine for a small business?' },
        answer: { fi: 'Ehdottomasti. Pearl on suunniteltu helppokäyttöiseksi ilman erillistä tekniikkaosaamista. Harmac Oy tarjoaa kattavan käyttöönottokoulutuksen.', en: 'Absolutely. The Pearl is designed to be user-friendly without requiring specialist technical knowledge. Harmac Oy provides comprehensive start-up training.' },
      },
    ],
    applications: {
      fi: ['Käsityöleipomot', 'Pienlihavalmistajat', 'Marjatilat', 'Erikoisruokatuottajat'],
      en: ['Artisan bakeries', 'Small meat producers', 'Berry farms', 'Specialty food producers'],
    },
  },

  // ─── VERTICAL ───────────────────────────────────────────────
  {
    slug: 'zenith',
    name: 'Zenith',
    category: 'vertical',
    categoryLabel: { fi: 'Pystypakkauskoneet', en: 'Vertical Packaging Machines' },
    tagline: {
      fi: 'Tarkka pystypakkaus irtotuotteille ja rakeisille aineille',
      en: 'Precise vertical packaging for loose and granular products',
    },
    description: {
      fi: 'Zenith on korkean suorituskyvyn pystypakkauslinja (VFFS), joka on suunniteltu irtotuotteiden, jauhojen, rakeiden ja nesteiden pakkaamiseen suurilla nopeuksilla. Yhdistettynä Harmac Oy:n edustamiin monipäävaakaihin Zenith muodostaa tehokkaan ja tarkan pakkaustuloksen.\n\nZenith sopii erinomaisesti mausteille, kahville, pähkinöille, granolalle, perunalastuille ja muille irtotuotteille. Koneen muotoilu noudattaa elintarviketeollisuuden hygieniastandardeja ja se on helppo puhdistaa.',
      en: 'The Zenith is a high-performance vertical form-fill-seal (VFFS) packaging line designed for packing loose products, powders, granules, and liquids at high speeds. Combined with the multi-head weighers that Harmac Oy represents, the Zenith delivers efficient and precise packaging results.\n\nThe Zenith is excellent for spices, coffee, nuts, granola, crisps, and other loose products. Its design conforms to food industry hygiene standards and is easy to clean.',
    },
    specs: [
      { label: { fi: 'Pakkausnopeus', en: 'Packaging speed' }, value: { fi: 'jopa 120 pakk./min', en: 'up to 120 packs/min' } },
      { label: { fi: 'Pakkauksen tyyppi', en: 'Pack type' }, value: { fi: 'Pussi, gussettipussi, pillow', en: 'Bag, gusset bag, pillow' } },
      { label: { fi: 'Filmin leveys', en: 'Film width' }, value: { fi: '100–550 mm', en: '100–550 mm' } },
      { label: { fi: 'Sulkemistapa', en: 'Sealing' }, value: { fi: 'Lämpösulku / ultraääni', en: 'Heat seal / ultrasonic' } },
    ],
    faqs: [
      {
        question: { fi: 'Voidaanko Zenith yhdistää monipäävaakaan?', en: 'Can the Zenith be combined with a multi-head weigher?' },
        answer: { fi: 'Kyllä. Zenith on optimaalisessa integraatiossa Harmac Oy:n edustamien MBP-monipäävaakaimien kanssa. Tämä takaa tarkan annostuksen ja korkean pakkausnopeuden.', en: 'Yes. The Zenith integrates optimally with the MBP multi-head weighers that Harmac Oy represents. This ensures precise dosing and high packaging speeds.' },
      },
      {
        question: { fi: 'Minkä pussityyppien teko onnistuu Zenith-koneella?', en: 'What bag types can the Zenith produce?' },
        answer: { fi: 'Zenith voi tuottaa useita pussityyppejä: pillow-pussi, gussettipussi (sivupoimutus), stand-up-pussi sekä leikkaus- ja taittosulkupussit lisävarusteiden kanssa.', en: 'The Zenith can produce several bag types: pillow bags, gusseted bags (side gussets), stand-up pouches, and cut-and-seal bags with optional attachments.' },
      },
    ],
    applications: {
      fi: ['Mausteet ja jauhot', 'Pähkinät ja siemenet', 'Granola ja mysli', 'Perunalastut', 'Kahvi ja tee'],
      en: ['Spices and powders', 'Nuts and seeds', 'Granola and muesli', 'Crisps and snacks', 'Coffee and tea'],
    },
  },
  {
    slug: 'bg-vetta',
    name: 'BG Vetta',
    category: 'vertical',
    categoryLabel: { fi: 'Pystypakkauskoneet', en: 'Vertical Packaging Machines' },
    tagline: {
      fi: 'Monipuolinen pystypakkauslinja herkkä- ja erikoistuotteille',
      en: 'Versatile vertical packaging line for delicate and specialty products',
    },
    description: {
      fi: 'BG Vetta on erityisesti herkkien ja erikoistuotteiden pakkaamiseen kehitetty pystypakkauskone. Koneessa on kehittynyt tuotteen syöttöjärjestelmä, joka estää tuotteiden vaurioitumisen pakkauksen aikana. Se soveltuu erinomaisesti orgaanisille tuotteille, erikoisruokatavaroille ja lisäarvotuotteille.\n\nBG Vetta tukee laajaa valikoimaa pakkausmateriaaleja, mukaan lukien biopohjaiset kalvot ja kierrätettävät materiaalit, mikä sopii erinomaisesti kestävyyteen panostaville brändeille.',
      en: 'The BG Vetta is a vertical packaging machine developed specifically for packing delicate and specialty products. It features an advanced product feeding system that prevents product damage during packaging. It is excellent for organic products, speciality foods, and premium-value products.\n\nThe BG Vetta supports a wide range of packaging materials, including bio-based films and recyclable materials, making it an excellent fit for brands committed to sustainability.',
    },
    specs: [
      { label: { fi: 'Pakkausnopeus', en: 'Packaging speed' }, value: { fi: 'jopa 80 pakk./min', en: 'up to 80 packs/min' } },
      { label: { fi: 'Pakkausmateriaalit', en: 'Packaging materials' }, value: { fi: 'Monilaminaatti, bio-kalvot', en: 'Multi-laminate, bio-films' } },
      { label: { fi: 'Syöttötapa', en: 'Product feeding' }, value: { fi: 'Vaaka / vapaapudotus / annosteluruuvi', en: 'Weigher / free-fall / dosing screw' } },
    ],
    faqs: [
      {
        question: { fi: 'Sopiiko BG Vetta biohajoaville pakkausmateriaaleille?', en: 'Is the BG Vetta compatible with biodegradable packaging materials?' },
        answer: { fi: 'Kyllä. BG Vetta on kehitetty toimimaan bio-kalvoilla ja muilla kestävän kehityksen mukaisilla pakkausmateriaaleilla.', en: 'Yes. The BG Vetta has been developed to work with bio-films and other sustainable packaging materials.' },
      },
    ],
    applications: {
      fi: ['Luomutuotteet', 'Premium-elintarvikkeet', 'Lemmikkieläinten ruoka', 'Yrttiseokset'],
      en: ['Organic products', 'Premium food items', 'Pet food', 'Herb blends'],
    },
  },

  // ─── MULTI-HEAD SCALES ──────────────────────────────────────
  {
    slug: 'mbp-c2',
    name: 'MBP-C2',
    category: 'multihead',
    categoryLabel: { fi: 'Monipäävaa’at', en: 'Multi-Head Weighers' },
    tagline: {
      fi: 'Suorituskykyinen 14-päinen monipäävaaka irtotuotteille',
      en: 'High-performance 14-head multi-head weigher for loose products',
    },
    description: {
      fi: 'MBP-C2 on 14-päinen monipäävaaka, joka on suunniteltu tarkkaan ja nopeaan irtotuotteiden annosteluun. Se yhdistää korkean nopeuden ja erinomaisen annostuksen tarkkuuden, mikä minimoi tuotehävikin ja maksimoi tuotantolinjan tehokkuuden.\n\nMBP-C2 sopii erinomaisesti yhdistämiseen Harmac Oy:n edustamien pystypakkauslinjojen kanssa. Sen helppokäyttöinen ohjausnäyttö mahdollistaa nopean tuoteprofiilin vaihdon.',
      en: 'The MBP-C2 is a 14-head multi-head weigher designed for precise and fast dosing of loose products. It combines high speed with excellent weighing accuracy, minimising product giveaway and maximising production line efficiency.\n\nThe MBP-C2 is excellent for combining with the vertical packaging lines that Harmac Oy represents. Its easy-to-use control display enables rapid product profile changes.',
    },
    specs: [
      { label: { fi: 'Päiden lukumäärä', en: 'Number of heads' }, value: { fi: '14', en: '14' } },
      { label: { fi: 'Punnitustarkkuus', en: 'Weighing accuracy' }, value: { fi: '±0.5 g (tyypillinen)', en: '±0.5 g (typical)' } },
      { label: { fi: 'Pakkausnopeus', en: 'Weighing speed' }, value: { fi: 'jopa 100 punnit./min', en: 'up to 100 weighings/min' } },
      { label: { fi: 'Paino-alue', en: 'Weight range' }, value: { fi: '10–3000 g', en: '10–3000 g' } },
    ],
    faqs: [
      {
        question: { fi: 'Miten MBP-C2 minimoi tuotehävikin?', en: 'How does the MBP-C2 minimise product giveaway?' },
        answer: { fi: 'MBP-C2 käyttää kehittynyttä kombinaatiolaskenta-algoritmia, joka valitsee aina parhaan yhdistelmän kauhoista tavoitepainon saavuttamiseksi minimihäviöllä.', en: 'The MBP-C2 uses an advanced combination calculation algorithm that always selects the best combination of buckets to achieve the target weight with minimal giveaway.' },
      },
      {
        question: { fi: 'Voiko MBP-C2 käsitellä tahmeita tuotteita?', en: 'Can the MBP-C2 handle sticky products?' },
        answer: { fi: 'Kyllä, erityisillä pinnoitetuilla kauhoilla ja tärylevyillä MBP-C2 soveltuu myös tahmeille tuotteille kuten karamellille ja marjoille.', en: 'Yes, with special coated buckets and vibration plates, the MBP-C2 is also suitable for sticky products such as caramel and berries.' },
      },
    ],
    applications: {
      fi: ['Perunalastut', 'Pähkinät', 'Pakastetut vihannekset', 'Makeiset', 'Vihannekset'],
      en: ['Crisps', 'Nuts', 'Frozen vegetables', 'Confectionery', 'Vegetables'],
    },
  },
  {
    slug: 'mbp-c1',
    name: 'MBP C1',
    category: 'multihead',
    categoryLabel: { fi: 'Monipäävaa’at', en: 'Multi-Head Weighers' },
    tagline: {
      fi: 'Kompakti 10-päinen monipäävaaka pienempään tuotantoon',
      en: 'Compact 10-head multi-head weigher for smaller production runs',
    },
    description: {
      fi: 'MBP C1 on kompakti 10-päinen monipäävaaka, joka sopii pienempiin tuotantolinjoihin. Se tarjoaa erinomaisen annostuksen tarkkuuden pienemmässä paketissa, tehden siitä kustannustehokkaan valinnan pk-yrityksille.\n\nKone on helppo puhdistaa ja se täyttää elintarviketeollisuuden hygieniastandardit. Sen kompakti rakenne vie vähän lattiapintaa.',
      en: 'The MBP C1 is a compact 10-head multi-head weigher suitable for smaller production lines. It provides excellent dosing accuracy in a smaller package, making it a cost-effective choice for SMEs.\n\nThe machine is easy to clean and meets food industry hygiene standards. Its compact structure takes up little floor space.',
    },
    specs: [
      { label: { fi: 'Päiden lukumäärä', en: 'Number of heads' }, value: { fi: '10', en: '10' } },
      { label: { fi: 'Punnitustarkkuus', en: 'Weighing accuracy' }, value: { fi: '±0.8 g (tyypillinen)', en: '±0.8 g (typical)' } },
      { label: { fi: 'Pakkausnopeus', en: 'Weighing speed' }, value: { fi: 'jopa 60 punnit./min', en: 'up to 60 weighings/min' } },
      { label: { fi: 'Paino-alue', en: 'Weight range' }, value: { fi: '10–2000 g', en: '10–2000 g' } },
    ],
    faqs: [
      {
        question: { fi: 'Sopiiko MBP C1 aloittavalle yritykselle?', en: 'Is the MBP C1 suitable for a start-up company?' },
        answer: { fi: 'Kyllä. MBP C1 on erinomainen ensimmäinen monipäävaaka pienille elintarvikeyrityksille, jotka haluavat parantaa annostuksen tarkkuuttaan kohtuullisella investoinnilla.', en: 'Yes. The MBP C1 is an excellent first multi-head weigher for small food businesses looking to improve dosing accuracy with a reasonable investment.' },
      },
    ],
    applications: {
      fi: ['Pähkinät', 'Kuivatut hedelmät', 'Karkit', 'Pikkuvihannekset'],
      en: ['Nuts', 'Dried fruits', 'Sweets', 'Small vegetables'],
    },
  },

  // ─── ACCESSORIES ────────────────────────────────────────────
  {
    slug: 'teippauskoneet',
    name: 'Teippauskoneet',
    category: 'accessories',
    categoryLabel: { fi: 'Lisälaitteet', en: 'Accessories & Additional Equipment' },
    tagline: {
      fi: 'Automaattiset teippauskoneet laatikoiden sulkemiseen',
      en: 'Automatic taping machines for box sealing',
    },
    description: {
      fi: 'Teippauskoneet tarjoavat nopean ja luotettavan ratkaisun laatikoiden sulkemiseen tuotantolinjoilla. Automaattiset teippauskoneet sopeutuvat eri kokoisiin laatikoihin ja tarjoavat tasaisen, siistin sulkemistuloksen.\n\nHarmac Oy:n edustamilla teippauskoneilla voidaan käsitellä niin yläsulkua (I-tyyppi) kuin ylä- ja alasulkua (H-tyyppi) riippuen tarpeesta.',
      en: 'Taping machines offer a fast and reliable solution for sealing boxes on production lines. Automatic taping machines adapt to different box sizes and provide a consistent, neat sealing result.\n\nThe taping machines Harmac Oy represents can handle top-only (I-type) as well as top-and-bottom sealing (H-type) depending on requirements.',
    },
    specs: [
      { label: { fi: 'Nopeus', en: 'Speed' }, value: { fi: 'jopa 30 laat./min', en: 'up to 30 boxes/min' } },
      { label: { fi: 'Teippaustavat', en: 'Sealing types' }, value: { fi: 'I-tyyppi / H-tyyppi', en: 'I-type / H-type' } },
      { label: { fi: 'Sopeutuvuus', en: 'Adaptability' }, value: { fi: 'Automaattinen säätö eri laatikoille', en: 'Automatic adjustment for different box sizes' } },
    ],
    faqs: [
      {
        question: { fi: 'Voiko teippauskone integroida muuhun pakkauslinjastoon?', en: 'Can the taping machine be integrated into other packaging lines?' },
        answer: { fi: 'Kyllä. Teippauskoneet voidaan integroida kuljettimilla pakkaus-, täyttö- ja sulkemislinjoihin. Harmac Oy auttaa integraation suunnittelussa.', en: 'Yes. Taping machines can be integrated via conveyors into packaging, filling, and sealing lines. Harmac Oy assists with integration planning.' },
      },
    ],
    applications: {
      fi: ['Verkkokaupan pakkaaminen', 'Jakelukeskukset', 'Elintarviketeollisuus'],
      en: ['E-commerce packaging', 'Distribution centres', 'Food industry'],
    },
  },
  {
    slug: 'vakuumipakkaus',
    name: 'Vakuumipakkauskoneet',
    category: 'accessories',
    categoryLabel: { fi: 'Lisälaitteet', en: 'Accessories & Additional Equipment' },
    tagline: {
      fi: 'Vakuumipakkaus tuotteiden säilyvyyden pidentämiseen',
      en: 'Vacuum packaging to extend product shelf life',
    },
    description: {
      fi: 'Vakuumipakkauskoneet poistavat ilman pakkauksesta ennen sulkemista, mikä pidentää merkittävästi tuotteiden säilyvyyttä. Soveltuvat erityisesti liha-, kala- ja juustotuotteille.\n\nHarmac Oy edustaa useita vakuumipakkauskonemalleja aina yksittäiskappaleita pakkaavista pöytämalleista automaattisiin linjamaisiin koneisiin.',
      en: 'Vacuum packaging machines remove air from the packaging before sealing, significantly extending product shelf life. Particularly suitable for meat, fish, and cheese products.\n\nHarmac Oy represents several vacuum packaging machine models, from single-item desktop models to automatic in-line machines.',
    },
    specs: [
      { label: { fi: 'Tyyppi', en: 'Type' }, value: { fi: 'Kammio / hihnavakuumi', en: 'Chamber / belt vacuum' } },
      { label: { fi: 'Säilyvyysvaikutus', en: 'Shelf life extension' }, value: { fi: 'Jopa 5-kertaiseksi', en: 'Up to 5× longer' } },
    ],
    faqs: [
      {
        question: { fi: 'Sopiiko vakuumipakkaus kaikille elintarvikkeille?', en: 'Is vacuum packaging suitable for all food products?' },
        answer: { fi: 'Vakuumipakkaus sopii parhaiten kiinteille ja puolikiinteille tuotteille kuten liha, kala, juusto ja einekset. Se ei sovi tuotteille, jotka litistyvät paineen alla.', en: 'Vacuum packaging works best for solid and semi-solid products such as meat, fish, cheese, and ready meals. It is not suitable for products that would be crushed under pressure.' },
      },
    ],
    applications: {
      fi: ['Liha ja kala', 'Juusto', 'Einekset', 'Teollisuustuotteet'],
      en: ['Meat and fish', 'Cheese', 'Ready meals', 'Industrial products'],
    },
  },
  {
    slug: 'metallinpaljastin',
    name: 'Metallinpaljastimet ja röntgenlaitteet',
    category: 'accessories',
    categoryLabel: { fi: 'Lisälaitteet', en: 'Accessories & Additional Equipment' },
    tagline: {
      fi: 'Elintarviketurvallisuus: metallinpaljastus ja röntgentarkastus',
      en: 'Food safety: metal detection and X-ray inspection',
    },
    description: {
      fi: 'Elintarviketurvallisuus on kriittinen osa pakkauslinjastoa. Harmac Oy edustaa Loma Systems -merkin metallinpaljastimia ja röntgentarkastuslaitteita, jotka ovat alan johtavia ratkaisuja vierasaineiden havaitsemiseen.\n\nLaitteet sopivat sekä pakattujen tuotteiden tarkastukseen linjassa että irtotuotteiden tarkastukseen ennen pakkausta. Kaikki laitteet täyttävät BRC, IFS ja ISO 22000 vaatimukset.',
      en: 'Food safety is a critical part of any packaging line. Harmac Oy represents Loma Systems metal detectors and X-ray inspection equipment, industry-leading solutions for detecting foreign bodies.\n\nThe equipment is suitable for inspecting packed products in-line as well as loose products before packaging. All devices meet BRC, IFS, and ISO 22000 requirements.',
    },
    specs: [
      { label: { fi: 'Brändi', en: 'Brand' }, value: { fi: 'Loma Systems', en: 'Loma Systems' } },
      { label: { fi: 'Tyypit', en: 'Types' }, value: { fi: 'Metallinpaljastin / Röntgen', en: 'Metal detector / X-ray' } },
      { label: { fi: 'Sertifioinnit', en: 'Certifications' }, value: { fi: 'BRC, IFS, ISO 22000', en: 'BRC, IFS, ISO 22000' } },
    ],
    faqs: [
      {
        question: { fi: 'Kumpi on parempi: metallinpaljastin vai röntgen?', en: 'Which is better: metal detector or X-ray?' },
        answer: { fi: 'Metallinpaljastin tunnistaa metallit tehokkaasti ja edullisemmin. Röntgen havaitsee myös lasi-, luun- ja kivisplitterit. Valinta riippuu tuotteesta ja elintarviketurvallisuusvaatimuksistasi.', en: 'A metal detector detects metals effectively and at lower cost. X-ray also detects glass, bone, and stone fragments. The choice depends on your product and food safety requirements.' },
      },
    ],
    applications: {
      fi: ['Elintarviketeollisuus', 'Lääketeollisuus', 'Pakkauslinjat'],
      en: ['Food industry', 'Pharmaceutical industry', 'Packaging lines'],
    },
  },
  {
    slug: 'painotarkkailu',
    name: 'Painotarkkailulaitteet',
    category: 'accessories',
    categoryLabel: { fi: 'Lisälaitteet', en: 'Accessories & Additional Equipment' },
    tagline: {
      fi: 'Automaattinen painovalvonta tuotantolinjalla',
      en: 'Automatic weight monitoring on the production line',
    },
    description: {
      fi: 'Painotarkkailulaitteet (checkweigher) varmistavat, että jokainen pakkaus täyttää lakisääteiset painovaatimukset. Ne havaitsevat ali- ja ylipainoiset pakkaukset ja poistavat ne linjalta automaattisesti.\n\nHarmac Oy:n tarjoamat painotarkkailulaitteet integroituvat saumattomasti olemassa oleviin pakkauslinjoihin eivätkä hidasta tuotantoa.',
      en: 'Checkweighers ensure that every package meets statutory weight requirements. They detect under-weight and over-weight packs and automatically reject them from the line.\n\nThe checkweighers Harmac Oy offers integrate seamlessly into existing packaging lines without slowing production.',
    },
    specs: [
      { label: { fi: 'Tarkkuus', en: 'Accuracy' }, value: { fi: '±0.1 g', en: '±0.1 g' } },
      { label: { fi: 'Nopeus', en: 'Speed' }, value: { fi: 'jopa 300 pakk./min', en: 'up to 300 packs/min' } },
      { label: { fi: 'IP-luokitus', en: 'IP rating' }, value: { fi: 'IP65 (pesunkestävä)', en: 'IP65 (washdown-resistant)' } },
    ],
    faqs: [
      {
        question: { fi: 'Onko painotarkkailu lakisääteistä?', en: 'Is checkweighing a legal requirement?' },
        answer: { fi: 'EU:n pakkausdirektiivin (76/211/ETY) mukaan valmiiksi pakattujen tuotteiden on täytettävä tietyt painotoleranssit. Painotarkkailulaite auttaa varmistamaan vaatimustenmukaisuuden.', en: 'Under the EU Packaged Goods Directive (76/211/EEC), pre-packaged products must meet specific weight tolerances. A checkweigher helps ensure compliance.' },
      },
    ],
    applications: {
      fi: ['Kaikki pakatut elintarvikkeet', 'Lääketuotteet', 'Kodin tuotteet'],
      en: ['All packaged food', 'Pharmaceutical products', 'Household products'],
    },
  },
]

export function getMachineBySlug(slug: string): Machine | undefined {
  return machines.find((m) => m.slug === slug)
}

export function getMachinesByCategory(category: Machine['category']): Machine[] {
  return machines.filter((m) => m.category === category)
}

export const categoryMeta: Record<
  Machine['category'],
  { label: { fi: string; en: string }; description: { fi: string; en: string } }
> = {
  flowpack: {
    label: { fi: 'Flowpack-pakkauskoneet', en: 'Flowpack Machines' },
    description: {
      fi: 'Millainen on tuotantokapasiteettisi? Meiltä löydät niin pienempään tuotantoon kuin järeään tuotantoon sopivat tehokkaat flowpack-koneet.',
      en: 'What is your production capacity? We have efficient flowpack machines for everything from small-batch to large-scale production.',
    },
  },
  vertical: {
    label: { fi: 'Pystypakkauskoneet', en: 'Vertical Packaging Machines' },
    description: {
      fi: 'Onko tarvetta pystypakkaamiselle? Valikoimastamme löydät useita pystypakkauskoneita irtotuotteille ja jauheille.',
      en: 'Do you need vertical packaging? Our range includes several vertical packaging machines for loose products and powders.',
    },
  },
  multihead: {
    label: { fi: 'Monipäävaa’at', en: 'Multi-Head Weighers' },
    description: {
      fi: 'Tarkkaan ja tehokkaaseen annosteluun soveltuvat hyvin edustamamme monipäävaakat.',
      en: 'Our multi-head weighers are well suited for precise and efficient dosing.',
    },
  },
  accessories: {
    label: { fi: 'Lisälaitteet', en: 'Accessories' },
    description: {
      fi: 'Täydennä pakkauslinjastoasi laadukkailla lisälaitteilla: teippauskoneet, vakuumipakkaus, metallinpaljastimet ja painotarkkailu.',
      en: 'Complete your packaging line with quality accessories: taping machines, vacuum packaging, metal detectors, and checkweighers.',
    },
  },
}
