import { brand, meta, faq } from './content.js';

/* LocalBusiness / ProfessionalService — JarvisCo (web dizaino agentūra) */
export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${brand.url}/#business`,
    name: brand.pavadinimas,
    alternateName: 'JarvisCo Web',
    description: meta.description,
    url: brand.url,
    telephone: brand.telefonas,
    email: brand.elPastas,
    image: `${brand.url}/assets/og.png`,
    founder: { '@type': 'Person', name: brand.savininkas },
    priceRange: '€€',
    areaServed: { '@type': 'Country', name: 'Lietuva' },
    address: { '@type': 'PostalAddress', addressCountry: 'LT' },
    geo: { '@type': 'GeoCoordinates', latitude: brand.geo.lat, longitude: brand.geo.lng },
    sameAs: [brand.gbp],
    knowsAbout: ['Web dizainas', 'Vietinis SEO', 'Verslo automatizacijos', 'Svetainių kūrimas'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}
