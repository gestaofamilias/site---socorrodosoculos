'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ShoppingCart, Star, Heart, Share2, Truck, ShieldCheck, CreditCard,
  Play, ChevronDown, CheckCircle, RotateCcw, Award,
} from 'lucide-react';
import ProductCard, { Product } from '@/components/ProductCard';

const gallery = [
  { type: 'image' as const, src: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=900&h=900' },
  { type: 'video' as const, src: '/oculos-1.mp4', poster: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=900&h=900' },
  { type: 'image' as const, src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=900&h=900' },
  { type: 'image' as const, src: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=900&h=900' },
  { type: 'image' as const, src: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=900&h=900' },
];

const reviews = [
  { name: 'Felipe Andrade', rating: 5, date: 'há 2 semanas', content: 'Lente perfeita, sem distorção. A armação dourada é mais bonita ainda pessoalmente. Veio com estojo e flanela, chegou rápido.' },
  { name: 'Juliana Reis', rating: 5, date: 'há 1 mês', content: 'Comprei pra viagem de praia, super confortável e leve. Proteção UV realmente funciona, nada de cansaço visual no sol forte.' },
  { name: 'Marcos Vinícius', rating: 4, date: 'há 1 mês', content: 'Muito bom, só achei a haste um pouco justa pro meu rosto. Mandei ajustar na própria loja e resolveu rapidinho.' },
  { name: 'Patrícia Lima', rating: 5, date: 'há 2 meses', content: 'Modelo clássico, nunca sai de moda. Acabamento impecável, parece muito mais caro do que o preço pago.' },
];

const faqs = [
  { q: 'As lentes possuem proteção UV?', a: 'Sim. Todas as lentes possuem proteção UV400, bloqueando 100% dos raios UVA e UVB.' },
  { q: 'O óculos vem com garantia?', a: 'Sim, garantia de 1 ano contra defeitos de fabricação, além do nosso suporte para ajustes e manutenção.' },
  { q: 'Qual o prazo de entrega?', a: 'Em média 3 a 7 dias úteis dependendo da sua região. Frete grátis para compras acima de R$ 299.' },
  { q: 'Posso trocar se não gostar?', a: 'Sim, você tem até 7 dias após o recebimento para solicitar troca ou devolução, sem custo adicional.' },
];

const relatedProducts: Product[] = [
  { id: '2', name: 'Armação de Grau Vogue Eyewear Gatinho', price: 450.00, installments: 10, rating: 4.5, image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=400&h=300', slug: 'armacao-de-grau-vogue-eyewear-gatinho' },
  { id: '3', name: 'Óculos de Sol Oakley Holbrook', price: 720.00, installments: 10, rating: 4.9, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400&h=300', slug: 'oculos-de-sol-oakley-holbrook' },
  { id: '4', name: 'Lentes de Contato Acuvue Oasys (Caixa)', price: 180.00, installments: 3, rating: 4.7, image: 'https://images.unsplash.com/photo-1589820572855-f71694f4206e?auto=format&fit=crop&q=80&w=400&h=300', slug: 'lentes-de-contato-acuvue-oasys' },
];

export default function RayBanAviatorProduct() {
  const [activeMedia, setActiveMedia] = useState(0);
  const [tab, setTab] = useState<'descricao' | 'especificacoes' | 'avaliacoes'>('descricao');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState('dourado');

  const active = gallery[activeMedia];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#FFD400]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/categoria/oculos-de-sol" className="hover:text-[#FFD400]">Óculos de Sol</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111111] font-medium">Ray-Ban Aviator Classic</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-24 flex-shrink-0">
              {gallery.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMedia(i)}
                  className={`relative w-20 h-20 md:w-24 md:h-24 rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all duration-200 hover:scale-105 ${i === activeMedia ? 'border-[#FFD400]' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <Image
                    src={item.type === 'video' ? item.poster! : item.src}
                    alt={`Mídia ${i + 1}`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center relative overflow-hidden group aspect-square">
              <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm transition-all duration-200 hover:scale-110">
                <Heart className="w-5 h-5" />
              </button>
              <button className="absolute top-16 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#111111] shadow-sm transition-all duration-200 hover:scale-110">
                <Share2 className="w-4 h-4" />
              </button>

              {active.type === 'video' ? (
                <video controls poster={active.poster} className="w-full h-full object-cover" key={active.src}>
                  <source src={active.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={active.src}
                  alt="Óculos de Sol Ray-Ban Aviator Classic"
                  fill
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center gap-2">
              <span className="bg-[#FFD400]/20 text-[#111111] text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Mais Vendido</span>
              <span className="text-sm text-gray-500">Cód: RB3025-AVT</span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-black text-[#111111] mb-4 leading-tight">
              Óculos de Sol Ray-Ban Aviator Classic
            </h1>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-[#FFD400] fill-[#FFD400]' : 'text-gray-300'}`} />
                ))}
              </div>
              <a href="#avaliacoes" className="text-sm text-gray-600 underline cursor-pointer hover:text-[#FFD400]">(4.8 — 128 avaliações)</a>
            </div>

            <div className="mb-8">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-gray-400 line-through text-lg">R$ 1.250,00</span>
                <span className="text-4xl font-black text-[#111111]">R$ 850,00</span>
              </div>
              <p className="text-gray-600">
                ou em até <strong className="text-[#111111]">10x de R$ 85,00</strong> sem juros no cartão
              </p>
              <div className="mt-2 text-sm text-green-600 font-medium flex items-center gap-1">
                <CreditCard className="w-4 h-4" />
                5% de desconto no PIX (R$ 807,50)
              </div>
            </div>

            {/* Color */}
            <div className="mb-8">
              <h3 className="font-semibold text-[#111111] mb-3">
                Cor: <span className="font-normal text-gray-600">{color === 'dourado' ? 'Dourado / Verde G15' : color === 'preto' ? 'Preto Fosco' : 'Prata / Azul'}</span>
              </h3>
              <div className="flex items-center gap-3">
                <button onClick={() => setColor('dourado')} className={`w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-700 border-2 transition-transform duration-200 hover:scale-110 ${color === 'dourado' ? 'border-[#FFD400] ring-2 ring-[#FFD400]/40' : 'border-transparent'}`} />
                <button onClick={() => setColor('preto')} className={`w-10 h-10 rounded-full bg-black border-2 transition-transform duration-200 hover:scale-110 ${color === 'preto' ? 'border-[#FFD400] ring-2 ring-[#FFD400]/40' : 'border-transparent'}`} />
                <button onClick={() => setColor('prata')} className={`w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-blue-400 border-2 transition-transform duration-200 hover:scale-110 ${color === 'prata' ? 'border-[#FFD400] ring-2 ring-[#FFD400]/40' : 'border-transparent'}`} />
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-xl h-14 w-full sm:w-32">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-[#111111] hover:bg-gray-50 rounded-l-xl text-xl transition-colors">-</button>
                <input type="text" value={qty} readOnly className="w-full h-full text-center font-semibold text-[#111111] focus:outline-none" />
                <button onClick={() => setQty(qty + 1)} className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-[#111111] hover:bg-gray-50 rounded-r-xl text-xl transition-colors">+</button>
              </div>
              <button className="flex-1 bg-[#111111] text-[#FFD400] font-black text-lg rounded-xl h-14 flex items-center justify-center gap-2 hover:bg-[#FFD400] hover:text-[#111111] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                <ShoppingCart className="w-6 h-6" />
                Comprar Agora
              </button>
            </div>

            {/* Shipping */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
              <div className="flex items-center gap-2 mb-4 font-semibold text-[#111111]">
                <Truck className="w-5 h-5 text-[#FFD400]" />
                Calcular Frete e Prazo
              </div>
              <div className="flex gap-2">
                <input type="text" placeholder="Digite seu CEP" className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400] transition-colors" />
                <button className="bg-[#111111] text-[#FFD400] font-semibold px-6 py-2 rounded-lg hover:bg-black transition-all duration-200 hover:scale-105">Calcular</button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-600" /><span>Compra 100% Segura</span></div>
              <div className="flex items-center gap-2"><Truck className="w-5 h-5 text-[#FFD400]" /><span>Frete Grátis acima de R$ 299</span></div>
              <div className="flex items-center gap-2"><RotateCcw className="w-5 h-5 text-[#FFD400]" /><span>7 dias para troca</span></div>
              <div className="flex items-center gap-2"><Award className="w-5 h-5 text-[#FFD400]" /><span>1 ano de garantia</span></div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="flex items-center justify-center gap-8 border-b border-gray-200 mb-10 overflow-x-auto">
            {([
              ['descricao', 'Descrição'],
              ['especificacoes', 'Especificações'],
              ['avaliacoes', 'Avaliações (128)'],
            ] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`text-base md:text-lg font-heading font-bold pb-4 px-2 whitespace-nowrap transition-colors ${tab === key ? 'text-[#111111] border-b-4 border-[#FFD400]' : 'text-gray-400 hover:text-[#111111]'}`}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === 'descricao' && (
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
              <p>
                O <strong>Ray-Ban Aviator Classic</strong> é o modelo mais icônico da marca, usado por pilotos da força aérea
                americana desde 1937. Hoje é sinônimo de estilo atemporal, combinando a clássica armação em metal com lentes
                em formato de gota que se adaptam perfeitamente a qualquer formato de rosto.
              </p>
              <p>
                As lentes oferecem proteção 100% contra raios UVA e UVB, com tratamento antirreflexo que reduz o brilho excessivo
                sem distorcer as cores. A armação em metal inox é leve, resistente à corrosão e acompanhada de plaquetas
                nasais ajustáveis para o máximo conforto durante o uso prolongado.
              </p>
              <ul>
                <li>Material da armação: Metal inoxidável premium</li>
                <li>Lentes: Cristal com tratamento antirreflexo e proteção UV400</li>
                <li>Plaquetas nasais ajustáveis</li>
                <li>Acompanha estojo rígido original e flanela de limpeza</li>
                <li>Garantia de 1 ano contra defeitos de fabricação</li>
              </ul>
            </div>
          )}

          {tab === 'especificacoes' && (
            <div className="max-w-3xl mx-auto overflow-x-auto">
              <table className="w-full text-sm min-w-[480px]">
                <tbody>
                  {[
                    ['Marca', 'Ray-Ban'],
                    ['Modelo', 'Aviator Classic RB3025'],
                    ['Material da armação', 'Metal inoxidável'],
                    ['Material da lente', 'Cristal'],
                    ['Proteção UV', 'UV400 (100% UVA/UVB)'],
                    ['Largura da lente', '58mm'],
                    ['Formato', 'Gota / Piloto'],
                    ['Gênero', 'Unissex'],
                    ['Acessórios inclusos', 'Estojo rígido, flanela de limpeza, certificado de garantia'],
                  ].map(([label, value], i) => (
                    <tr key={label} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="py-3 px-4 font-semibold text-[#111111] w-1/3 whitespace-nowrap">{label}</td>
                      <td className="py-3 px-4 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'avaliacoes' && (
            <div id="avaliacoes" className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6 mb-8">
                <span className="text-5xl font-black text-[#111111]">4.8</span>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-[#FFD400] fill-[#FFD400]' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Baseado em 128 avaliações</span>
                </div>
              </div>

              {reviews.map((review) => (
                <div key={review.name} className="border-b border-gray-100 pb-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#FFD400] flex items-center justify-center font-black text-[#111111] text-sm flex-shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <span className="font-bold text-[#111111] text-sm">{review.name}</span>
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-0.5 mb-2 sm:ml-12">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-[#FFD400] fill-[#FFD400]' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm sm:ml-12 leading-relaxed">{review.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-black text-[#111111] mb-6 text-center">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-[#111111] hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-[#FFD400] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why buy from us */}
        <div className="mt-16 bg-[#111111] rounded-2xl p-8 md:p-10">
          <h2 className="font-heading text-2xl font-black text-white mb-6 text-center">Por que comprar na Socorro dos Óculos?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Produto 100% original com nota fiscal',
              'Garantia de 1 ano contra defeitos',
              'Suporte para ajustes e manutenção vitalícios',
              'Pagamento seguro em até 10x sem juros',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#FFD400] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="font-heading text-2xl md:text-3xl font-black text-[#111111] mb-8 text-center">Você também pode gostar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
