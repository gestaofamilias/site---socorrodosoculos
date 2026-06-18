import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star, Heart, Share2, Truck, ShieldCheck, CreditCard } from 'lucide-react';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const productName = resolvedParams.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-brand-yellow">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/categoria/oculos-de-sol" className="hover:text-brand-yellow">Óculos de Sol</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-black font-medium">{productName}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-24 flex-shrink-0 hide-scrollbar">
            {[1, 2, 3, 4].map((i) => (
              <button key={i} className={`w-20 h-20 md:w-24 md:h-24 rounded-lg border-2 overflow-hidden flex-shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 ${i === 1 ? 'border-brand-yellow' : 'border-gray-200 hover:border-gray-300'}`}>
                <Image
                  src={`https://loremflickr.com/200/200/glasses?random=thumb${i}`}
                  alt={`Thumbnail ${i}`}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-8 relative overflow-hidden group">
            <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm transition-all duration-200 hover:scale-110 active:scale-95">
              <Heart className="w-6 h-6" />
            </button>
            <button className="absolute top-16 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-brand-black shadow-sm transition-all duration-200 hover:scale-110 active:scale-95">
              <Share2 className="w-5 h-5" />
            </button>
            
            <Image
              src="https://loremflickr.com/800/600/glasses?random=main"
              alt={productName}
              width={600}
              height={400}
              className="object-contain transition-transform duration-500 group-hover:scale-125 cursor-zoom-in"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center gap-2">
            <span className="bg-brand-yellow/20 text-brand-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Lançamento</span>
            <span className="text-sm text-gray-500">Cód: 987654321</span>
          </div>
          
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-4 leading-tight">
            {productName}
          </h1>

          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 underline cursor-pointer hover:text-brand-yellow">(128 avaliações)</span>
          </div>

          <div className="mb-8">
            <div className="flex items-end gap-3 mb-2">
              <span className="text-gray-400 line-through text-lg">R$ 1.250,00</span>
              <span className="text-4xl font-bold text-brand-black">R$ 850,00</span>
            </div>
            <p className="text-gray-600">
              ou em até <strong className="text-brand-black">10x de R$ 85,00</strong> sem juros no cartão
            </p>
            <div className="mt-2 text-sm text-green-600 font-medium flex items-center gap-1">
              <CreditCard className="w-4 h-4" />
              5% de desconto no PIX (R$ 807,50)
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <h3 className="font-semibold text-brand-black mb-3">Cor: <span className="font-normal text-gray-600">Preto Fosco</span></h3>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-black border-2 border-brand-yellow ring-2 ring-transparent focus:ring-brand-yellow transition-transform duration-200 hover:scale-110 active:scale-95"></button>
              <button className="w-10 h-10 rounded-full bg-amber-800 border-2 border-transparent hover:border-gray-300 transition-transform duration-200 hover:scale-110 active:scale-95"></button>
              <button className="w-10 h-10 rounded-full bg-gray-400 border-2 border-transparent hover:border-gray-300 transition-transform duration-200 hover:scale-110 active:scale-95"></button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-brand-black">Tamanho: <span className="font-normal text-gray-600">M (55mm)</span></h3>
              <button className="text-sm text-brand-yellow hover:underline font-medium transition-colors">Guia de Medidas</button>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-brand-black text-gray-700 transition-all duration-200 hover:-translate-y-0.5 active:scale-95">P (52mm)</button>
              <button className="px-4 py-2 border-2 border-brand-yellow rounded-md font-bold text-brand-black bg-brand-yellow/10 transition-all duration-200 hover:-translate-y-0.5 active:scale-95">M (55mm)</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-brand-black text-gray-700 transition-all duration-200 hover:-translate-y-0.5 active:scale-95">G (58mm)</button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-lg h-14 w-full sm:w-32">
              <button className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-brand-black hover:bg-gray-50 rounded-l-lg text-xl transition-colors active:bg-gray-200">-</button>
              <input type="text" value="1" readOnly className="w-full h-full text-center font-semibold text-brand-black focus:outline-none" />
              <button className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-brand-black hover:bg-gray-50 rounded-r-lg text-xl transition-colors active:bg-gray-200">+</button>
            </div>
            <button className="flex-1 bg-brand-black text-white font-bold text-lg rounded-lg h-14 flex items-center justify-center gap-2 hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95">
              <ShoppingCart className="w-6 h-6" />
              Comprar Agora
            </button>
          </div>

          {/* Shipping Calculator */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
            <div className="flex items-center gap-2 mb-4 font-semibold text-brand-black">
              <Truck className="w-5 h-5 text-brand-yellow" />
              Calcular Frete e Prazo
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Digite seu CEP" className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors" />
              <button className="bg-gray-200 text-brand-black font-semibold px-6 py-2 rounded-md hover:bg-gray-300 transition-all duration-200 hover:scale-105 active:scale-95">Calcular</button>
            </div>
            <a href="#" className="text-xs text-gray-500 hover:text-brand-yellow mt-2 inline-block underline transition-colors">Não sei meu CEP</a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-brand-yellow" />
              <span>Frete Grátis acima de R$ 299</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16 border-t border-gray-200 pt-16">
        <div className="flex items-center justify-center gap-8 border-b border-gray-200 mb-8">
          <button className="text-lg font-heading font-bold text-brand-black border-b-4 border-brand-yellow pb-4 px-4">Descrição</button>
          <button className="text-lg font-heading font-medium text-gray-500 hover:text-brand-black pb-4 px-4">Especificações</button>
          <button className="text-lg font-heading font-medium text-gray-500 hover:text-brand-black pb-4 px-4">Avaliações (128)</button>
        </div>

        <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
          <p>
            O <strong>{productName}</strong> é a escolha perfeita para quem busca estilo, conforto e proteção. 
            Com um design atemporal, esta armação se adapta a diversos formatos de rosto, garantindo um visual moderno e sofisticado.
          </p>
          <p>
            Fabricado com materiais de alta qualidade, oferece durabilidade e leveza para o uso diário. 
            As lentes contam com proteção 100% contra os raios UVA e UVB, cuidando da saúde dos seus olhos com a máxima eficiência.
          </p>
          <ul>
            <li>Material da armação: Acetato premium</li>
            <li>Cor da armação: Preto Fosco</li>
            <li>Tratamento da lente: Antirreflexo e Proteção UV400</li>
            <li>Acompanha estojo original e flanela de limpeza</li>
            <li>Garantia de 1 ano contra defeitos de fabricação</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
