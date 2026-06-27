import { writeFileSync } from 'fs'
import { resolve } from 'path'

const routes = ['/', '/about', '/services', '/recruitment-requirement', '/why-edtalink', '/share-resume', '/faq', '/contact']
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url>\n    <loc>https://edtalink.com${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>`).join('\n')}\n</urlset>\n`

writeFileSync(resolve('public/sitemap.xml'), sitemap)
