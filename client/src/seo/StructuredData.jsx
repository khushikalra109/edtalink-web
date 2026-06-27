import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { pageMeta } from './pageMeta'

const siteUrl = 'https://edtalink.com'
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EdTaLink',
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  sameAs: ['https://www.linkedin.com/'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9876543210',
    contactType: 'customer service',
    email: 'hello@edtalink.com',
    areaServed: 'IN',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressCountry: 'IN',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EdTaLink',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function StructuredData() {
  const location = useLocation()
  const pathname = location.pathname
  const meta = pageMeta[pathname] || pageMeta['/']
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      ...(pathname !== '/'
        ? [{ '@type': 'ListItem', position: 2, name: meta.title, item: `${siteUrl}${pathname}` }]
        : []),
    ],
  }

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: meta.title,
    url: `${siteUrl}${pathname}`,
    description: meta.description,
    isPartOf: { '@id': `${siteUrl}/#website` },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webpageSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  )
}
