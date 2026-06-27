import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { pageMeta } from './pageMeta'

const siteUrl = 'https://edtalink.com'
const defaultImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'

export default function SeoHelmet() {
  const location = useLocation()
  const pathname = location.pathname
  const meta = pageMeta[pathname] || pageMeta['/']
  const canonicalUrl = `${siteUrl}${meta.canonicalPath}`

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:site_name" content="EdTaLink" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={defaultImage} />
    </Helmet>
  )
}
