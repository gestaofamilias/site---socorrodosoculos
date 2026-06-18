import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-8">Meu Carrinho</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-gray-50 border-b border-gray-100 font-semibold text-sm text-gray-500 uppercase tracking-wider">
              <div className="col-span-6">Produto</div>
              <div className="col-span-2 text-center">Quantidade</div>
              <div className="col-span-2 text-right">Preço Unitário</div>
              <div className="col-span-2 text-right">Subtotal</div>
            </div>

            {/* Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-gray-100 items-center">
              <div className="col-span-1 md:col-span-6 flex gap-4">
                <div className="w-24 h-24 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="https://loremflickr.com/100/100/sunglasses?random=cart1"
                    alt="Óculos de Sol Ray-Ban"
                    width={80}
                    height={80}
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <Link href="/produto/oculos-de-sol-ray-ban" className="font-heading font-medium text-brand-black hover:text-brand-yellow transition-colors line-clamp-2 mb-1">
                    Óculos de Sol Ray-Ban Aviator Classic
                  </Link>
                  <span className="text-sm text-gray-500 mb-2">Cor: Preto Fosco | Tamanho: M</span>
                  <button className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 w-fit transition-colors">
                    <Trash2 className="w-4 h-4" /> Remover
                  </button>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center mt-4 md:mt-0">
                <span className="md:hidden text-sm text-gray-500">Quantidade:</span>
                <div className="flex items-center border border-gray-300 rounded-lg h-10 w-24">
                  <button className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-brand-black hover:bg-gray-50 rounded-l-lg transition-colors active:bg-gray-200">-</button>
                  <input type="text" value="1" readOnly className="w-full h-full text-center font-semibold text-brand-black focus:outline-none text-sm" />
                  <button className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-brand-black hover:bg-gray-50 rounded-r-lg transition-colors active:bg-gray-200">+</button>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-between md:justify-end items-center mt-2 md:mt-0">
                <span className="md:hidden text-sm text-gray-500">Preço:</span>
                <span className="font-medium text-gray-700">R$ 850,00</span>
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-between md:justify-end items-center mt-2 md:mt-0">
                <span className="md:hidden text-sm text-gray-500 font-semibold">Subtotal:</span>
                <span className="font-bold text-brand-black text-lg">R$ 850,00</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center">
              <div className="col-span-1 md:col-span-6 flex gap-4">
                <div className="w-24 h-24 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="https://loremflickr.com/100/100/eyeglasses?random=cart2"
                    alt="Armação Vogue"
                    width={80}
                    height={80}
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <Link href="/produto/armacao-vogue" className="font-heading font-medium text-brand-black hover:text-brand-yellow transition-colors line-clamp-2 mb-1">
                    Armação de Grau Vogue Eyewear Gatinho
                  </Link>
                  <span className="text-sm text-gray-500 mb-2">Cor: Tartaruga | Tamanho: Único</span>
                  <button className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 w-fit transition-colors">
                    <Trash2 className="w-4 h-4" /> Remover
                  </button>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center mt-4 md:mt-0">
                <span className="md:hidden text-sm text-gray-500">Quantidade:</span>
                <div className="flex items-center border border-gray-300 rounded-lg h-10 w-24">
                  <button className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-brand-black hover:bg-gray-50 rounded-l-lg transition-colors active:bg-gray-200">-</button>
                  <input type="text" value="2" readOnly className="w-full h-full text-center font-semibold text-brand-black focus:outline-none text-sm" />
                  <button className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-brand-black hover:bg-gray-50 rounded-r-lg transition-colors active:bg-gray-200">+</button>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-between md:justify-end items-center mt-2 md:mt-0">
                <span className="md:hidden text-sm text-gray-500">Preço:</span>
                <span className="font-medium text-gray-700">R$ 450,00</span>
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-between md:justify-end items-center mt-2 md:mt-0">
                <span className="md:hidden text-sm text-gray-500 font-semibold">Subtotal:</span>
                <span className="font-bold text-brand-black text-lg">R$ 900,00</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <Link href="/" className="text-brand-black font-semibold hover:text-brand-yellow transition-all duration-200 hover:-translate-x-1 flex items-center gap-2">
              &larr; Continuar Comprando
            </Link>
            <button className="text-gray-500 hover:text-red-500 transition-all duration-200 hover:scale-105 active:scale-95 text-sm flex items-center gap-1">
              <Trash2 className="w-4 h-4" /> Limpar Carrinho
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 sticky top-24">
            <h2 className="font-heading text-xl font-bold text-brand-black mb-6 border-b border-gray-200 pb-4">Resumo do Pedido</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal (3 itens)</span>
                <span>R$ 1.750,00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Descontos</span>
                <span className="text-green-600">- R$ 0,00</span>
              </div>
              
              {/* Shipping Calculator */}
              <div className="pt-4 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">Calcular Frete</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="CEP" className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
                  <button className="bg-white border border-gray-300 text-brand-black font-semibold px-4 py-2 rounded-md hover:bg-gray-50 transition-all duration-200 hover:scale-105 active:scale-95 text-sm">OK</button>
                </div>
                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-gray-600">Frete (PAC)</span>
                  <span className="font-medium text-green-600">Grátis</span>
                </div>
              </div>

              {/* Coupon */}
              <div className="pt-4 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">Cupom de Desconto</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Digite seu cupom" className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow uppercase" />
                  <button className="bg-white border border-gray-300 text-brand-black font-semibold px-4 py-2 rounded-md hover:bg-gray-50 transition-all duration-200 hover:scale-105 active:scale-95 text-sm">Aplicar</button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-8">
              <div className="flex justify-between items-end mb-2">
                <span className="font-bold text-lg text-brand-black">Total</span>
                <span className="font-bold text-3xl text-brand-black">R$ 1.750,00</span>
              </div>
              <p className="text-sm text-gray-500 text-right">
                ou em até <strong>10x de R$ 175,00</strong> sem juros
              </p>
            </div>

            <Link href="/checkout" className="w-full bg-brand-yellow text-brand-black font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95 mb-4 group">
              Finalizar Compra <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-6">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              Ambiente 100% seguro
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
