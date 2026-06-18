import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CreditCard, Lock, CheckCircle2 } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        
        {/* Main Checkout Form */}
        <div className="flex-1 space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-brand-black mb-6 pb-4 border-b border-gray-100">1. Dados Pessoais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="Ex: João da Silva" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">CPF</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="000.000.000-00" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="joao@exemplo.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="(00) 00000-0000" />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-brand-black mb-6 pb-4 border-b border-gray-100">2. Endereço de Entrega</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="space-y-2 md:col-span-4">
                <label className="text-sm font-medium text-gray-700">CEP</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="00000-000" />
              </div>
              <div className="space-y-2 md:col-span-8">
                <label className="text-sm font-medium text-gray-700">Rua / Avenida</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="Ex: Av. Paulista" />
              </div>
              <div className="space-y-2 md:col-span-4">
                <label className="text-sm font-medium text-gray-700">Número</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="1000" />
              </div>
              <div className="space-y-2 md:col-span-8">
                <label className="text-sm font-medium text-gray-700">Complemento (Opcional)</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="Apto 123, Bloco B" />
              </div>
              <div className="space-y-2 md:col-span-5">
                <label className="text-sm font-medium text-gray-700">Bairro</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="Bela Vista" />
              </div>
              <div className="space-y-2 md:col-span-5">
                <label className="text-sm font-medium text-gray-700">Cidade</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="São Paulo" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Estado</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="SP" />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-brand-black mb-6 pb-4 border-b border-gray-100">3. Pagamento</h2>
            
            <div className="space-y-4 mb-8">
              <label className="flex items-center justify-between p-4 border-2 border-brand-yellow bg-brand-yellow/5 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" className="w-5 h-5 text-brand-yellow focus:ring-brand-yellow" defaultChecked />
                  <span className="font-semibold text-brand-black">Cartão de Crédito</span>
                </div>
                <CreditCard className="w-6 h-6 text-brand-black" />
              </label>
              
              <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-brand-yellow transition-all duration-200 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" className="w-5 h-5 text-brand-yellow focus:ring-brand-yellow" />
                  <span className="font-semibold text-brand-black">PIX (5% de desconto)</span>
                </div>
                <div className="font-bold text-green-600 text-sm">R$ 1.662,50</div>
              </label>
              
              <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-brand-yellow transition-all duration-200 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" className="w-5 h-5 text-brand-yellow focus:ring-brand-yellow" />
                  <span className="font-semibold text-brand-black">Boleto Bancário</span>
                </div>
                <div className="text-gray-500 text-sm">Vencimento em 3 dias</div>
              </label>
            </div>

            {/* Credit Card Form (Visible if Credit Card is selected) */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Número do Cartão</label>
                <div className="relative">
                  <input type="text" className="w-full border border-gray-300 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="0000 0000 0000 0000" />
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nome impresso no cartão</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="JOAO DA SILVA" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Validade (MM/AA)</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="12/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">CVV</label>
                  <div className="relative">
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="123" />
                    <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Parcelamento</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 bg-white">
                  <option>1x de R$ 1.750,00 sem juros</option>
                  <option>2x de R$ 875,00 sem juros</option>
                  <option>3x de R$ 583,33 sem juros</option>
                  <option>4x de R$ 437,50 sem juros</option>
                  <option>5x de R$ 350,00 sem juros</option>
                  <option>10x de R$ 175,00 sem juros</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
            <h2 className="font-heading text-xl font-bold text-brand-black mb-6 border-b border-gray-100 pb-4">Resumo da Compra</h2>
            
            <div className="space-y-4 mb-6">
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-50 rounded-md border border-gray-100 flex items-center justify-center flex-shrink-0 relative">
                  <Image src="https://loremflickr.com/100/100/sunglasses?random=check1" alt="Produto" width={50} height={50} className="object-contain" referrerPolicy="no-referrer" />
                  <span className="absolute -top-2 -right-2 bg-brand-black text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">1</span>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <span className="text-sm font-medium text-brand-black line-clamp-2">Óculos de Sol Ray-Ban Aviator Classic</span>
                  <span className="text-sm font-bold text-brand-black mt-1">R$ 850,00</span>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-50 rounded-md border border-gray-100 flex items-center justify-center flex-shrink-0 relative">
                  <Image src="https://loremflickr.com/100/100/eyeglasses?random=check2" alt="Produto" width={50} height={50} className="object-contain" referrerPolicy="no-referrer" />
                  <span className="absolute -top-2 -right-2 bg-brand-black text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">2</span>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <span className="text-sm font-medium text-brand-black line-clamp-2">Armação de Grau Vogue Eyewear Gatinho</span>
                  <span className="text-sm font-bold text-brand-black mt-1">R$ 900,00</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-gray-100 mb-6 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>R$ 1.750,00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Frete (PAC)</span>
                <span className="text-green-600 font-medium">Grátis</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 mb-8">
              <div className="flex justify-between items-end mb-2">
                <span className="font-bold text-lg text-brand-black">Total</span>
                <span className="font-bold text-3xl text-brand-black">R$ 1.750,00</span>
              </div>
            </div>

            <button className="w-full bg-brand-yellow text-brand-black font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95 mb-4 group">
              <CheckCircle2 className="w-5 h-5 transition-transform group-hover:scale-110" /> Confirmar Pagamento
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-6">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              Ambiente 100% seguro e criptografado
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
