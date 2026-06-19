import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.socorrodooculos.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1, freq: 'weekly' as const },
    { path: '/sobre', priority: 0.8, freq: 'monthly' as const },
    { path: '/contato', priority: 0.8, freq: 'monthly' as const },
    { path: '/faq', priority: 0.7, freq: 'monthly' as const },
    { path: '/blog', priority: 0.6, freq: 'weekly' as const },
    { path: '/categoria/oculos-de-grau', priority: 0.7, freq: 'weekly' as const },
    { path: '/categoria/oculos-de-sol', priority: 0.7, freq: 'weekly' as const },
    { path: '/categoria/armacoes', priority: 0.7, freq: 'weekly' as const },
    { path: '/categoria/lentes-de-contato', priority: 0.7, freq: 'weekly' as const },
    { path: '/politica-de-privacidade', priority: 0.3, freq: 'yearly' as const },
    { path: '/termos-de-uso', priority: 0.3, freq: 'yearly' as const },
  ];

  return routes.map(({ path, priority, freq }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));
}
