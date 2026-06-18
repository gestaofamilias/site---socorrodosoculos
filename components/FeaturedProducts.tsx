import ProductCard, { Product } from './ProductCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <span className="text-[#FFD400] text-xs font-black uppercase tracking-widest mb-1 block">Mais vendidos</span>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-[#111111]">Produtos em Destaque</h2>
          </div>
          <Link
            href="/promocoes"
            className="inline-flex items-center gap-2 border-2 border-[#111111] text-[#111111] font-bold px-6 py-3 rounded-xl hover:bg-[#111111] hover:text-[#FFD400] transition-all duration-200 text-sm"
          >
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
