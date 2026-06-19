import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/checkout', '/carrinho', '/minha-conta'],
    },
    sitemap: 'https://www.socorrodooculos.com.br/sitemap.xml',
  };
}
