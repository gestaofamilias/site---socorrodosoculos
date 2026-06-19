import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star, Heart } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  installments: number;
  rating: number;
  image: string;
  slug: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#FFD400]/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
      <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 shadow-sm transition-all duration-200 hover:scale-110">
        <Heart className="w-4 h-4" />
      </button>

      <Link href={`/produto/${product.slug}`} className="relative h-60 w-full overflow-hidden bg-gray-50 flex items-center justify-center p-6">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="object-contain transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </Link>

      <div className="p-5 flex flex-col flex-grow border-t border-gray-50">
        <div className="flex items-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-[#FFD400] fill-[#FFD400]' : 'text-gray-200 fill-gray-200'}`}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
        </div>

        <Link href={`/produto/${product.slug}`}>
          <h3 className="font-heading font-semibold text-[#111111] text-sm mb-3 line-clamp-2 hover:text-[#FFC107] transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto pt-3 border-t border-gray-50">
          <span className="text-2xl font-black text-[#111111] block leading-none mb-0.5">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <p className="text-xs text-gray-400 mb-4">
            ou {product.installments}x de R$ {(product.price / product.installments).toFixed(2).replace('.', ',')} sem juros
          </p>

          <button className="w-full flex items-center justify-center gap-2 bg-[#111111] text-[#FFD400] font-black py-3 rounded-xl hover:bg-[#1A1A1A] hover:shadow-[0_0_20px_rgba(255,212,0,0.3)] transition-all duration-200 hover:scale-[1.02] text-sm group/btn">
            <ShoppingCart className="w-4 h-4 transition-transform group-hover/btn:-translate-x-0.5" />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
