import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

const SITE_URL = 'https://www.socorrodooculos.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Socorro dos Óculos | Conserto, Manutenção e Venda de Óculos',
    template: '%s | Socorro dos Óculos',
  },
  description: 'Conserto, ajuste, solda e manutenção de óculos com orçamento gratuito e garantia. Atendimento em São José dos Pinhais, Araucária e Itapema. Fale agora no WhatsApp.',
  keywords: ['conserto de óculos', 'manutenção de óculos', 'ótica', 'óculos de grau', 'óculos de sol', 'troca de lentes', 'São José dos Pinhais', 'Araucária', 'Itapema'],
  authors: [{ name: 'Socorro dos Óculos' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Socorro dos Óculos',
    title: 'Socorro dos Óculos | Conserto, Manutenção e Venda de Óculos',
    description: 'Conserto, ajuste, solda e manutenção de óculos com orçamento gratuito e garantia. Atendimento em São José dos Pinhais, Araucária e Itapema.',
    images: [{ url: '/banner-site.png', width: 1200, height: 630, alt: 'Socorro dos Óculos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Socorro dos Óculos | Conserto, Manutenção e Venda de Óculos',
    description: 'Conserto, ajuste, solda e manutenção de óculos com orçamento gratuito e garantia.',
    images: ['/banner-site.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const branchSchema = (name: string, city: string, state: string, address: string, phone: string) => ({
  '@type': 'Optician',
  name: `Socorro dos Óculos - ${name}`,
  image: `${SITE_URL}/banner-site.png`,
  telephone: phone,
  email: 'contato@socorrodooculos.com.br',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: address,
    addressLocality: city,
    addressRegion: state,
    addressCountry: 'BR',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Socorro dos Óculos',
      legalName: 'SOCORRO DOS ÓCULOS LTDA',
      url: SITE_URL,
      logo: `${SITE_URL}/banner-site.png`,
      email: 'contato@socorrodooculos.com.br',
      telephone: '+55 41 3385-2179',
      sameAs: ['https://instagram.com/socorrodooculos'],
    },
    branchSchema('São José dos Pinhais', 'São José dos Pinhais', 'PR', 'Rua Dona Izabel A Redentora, 1984 - Centro', '+55 41 3385-2179'),
    branchSchema('Araucária', 'Araucária', 'PR', 'Av. Vitório do Amaral, 1200 - Centro', '+55 41 3552-8890'),
    branchSchema('Itapema', 'Itapema', 'SC', 'Av. Nereu Ramos, 850 - Centro', '+55 47 3368-4421'),
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-white text-brand-black antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
