import Link from 'next/link';
import ProductCard, { Product } from '@/components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Óculos de Sol Ray-Ban Aviator Classic',
    price: 850.00,
    installments: 10,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400&h=300',
    slug: 'oculos-de-sol-ray-ban-aviator-classic',
  },
  {
    id: '2',
    name: 'Armação de Grau Vogue Eyewear Gatinho',
    price: 450.00,
    installments: 10,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=400&h=300',
    slug: 'armacao-de-grau-vogue-eyewear-gatinho',
  },
  {
    id: '3',
    name: 'Óculos de Sol Oakley Holbrook',
    price: 720.00,
    installments: 10,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400&h=300',
    slug: 'oculos-de-sol-oakley-holbrook',
  },
  {
    id: '4',
    name: 'Lentes de Contato Acuvue Oasys (Caixa)',
    price: 180.00,
    installments: 3,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1589820572855-f71694f4206e?auto=format&fit=crop&q=80&w=400&h=300',
    slug: 'lentes-de-contato-acuvue-oasys',
  },
  {
    id: '5',
    name: 'Óculos de Grau Prada Linea Rossa',
    price: 1200.00,
    installments: 10,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=400&h=300',
    slug: 'oculos-de-grau-prada-linea-rossa',
  },
  {
    id: '6',
    name: 'Óculos de Sol Gucci Oversized',
    price: 1850.00,
    installments: 10,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80&w=400&h=300',
    slug: 'oculos-de-sol-gucci-oversized',
  },
];

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const categoryName = resolvedParams.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-brand-yellow transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-black font-medium">{categoryName}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
            <div className="flex items-center gap-2 font-heading font-bold text-lg mb-6 pb-4 border-b border-gray-100">
              <Filter className="w-5 h-5" />
              Filtros
            </div>

            {/* Filter Group: Preço */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 flex items-center justify-between cursor-pointer">
                Preço <ChevronDown className="w-4 h-4" />
              </h3>
              <div className="space-y-2">
                {['Até R$ 250', 'R$ 251 a R$ 500', 'R$ 501 a R$ 1000', 'Acima de R$ 1000'].map((range, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-brand-yellow focus:ring-brand-yellow" />
                    <span className="text-sm text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group: Marca */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 flex items-center justify-between cursor-pointer">
                Marca <ChevronDown className="w-4 h-4" />
              </h3>
              <div className="space-y-2">
                {['Ray-Ban', 'Oakley', 'Vogue', 'Prada', 'Gucci'].map((brand, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-brand-yellow focus:ring-brand-yellow" />
                    <span className="text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group: Formato */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 flex items-center justify-between cursor-pointer">
                Formato <ChevronDown className="w-4 h-4" />
              </h3>
              <div className="space-y-2">
                {['Aviador', 'Gatinho', 'Quadrado', 'Redondo', 'Retangular'].map((shape, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-brand-yellow focus:ring-brand-yellow" />
                    <span className="text-sm text-gray-700">{shape}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-brand-yellow text-brand-black font-bold py-2 rounded-md hover:bg-yellow-400 transition-all duration-200 hover:scale-105 active:scale-95 mt-4">
              Aplicar Filtros
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="font-heading text-3xl font-bold text-brand-black">{categoryName}</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Ordenar por:</span>
              <select className="border border-gray-300 rounded-md py-2 px-4 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow">
                <option>Mais Relevantes</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
                <option>Mais Vendidos</option>
                <option>Melhor Avaliados</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 transition-all duration-200 hover:scale-105 active:scale-95" disabled>
                &larr;
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-brand-yellow text-brand-black font-bold transition-all duration-200 hover:scale-105 active:scale-95">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200 hover:scale-105 active:scale-95">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200 hover:scale-105 active:scale-95">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 transition-all duration-200 hover:scale-105 active:scale-95">
                &rarr;
              </button>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}
