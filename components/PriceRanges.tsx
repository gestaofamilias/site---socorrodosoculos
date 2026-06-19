import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function PriceRanges() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0F172A] to-[#0057FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FFD400] text-xs font-black uppercase tracking-widest mb-2 block">Antes e Depois</span>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white">Veja a Transformação</h2>
          <p className="text-blue-100 mt-3 max-w-xl mx-auto">
            Nossos técnicos especializados restauram qualquer óculos como se fosse novo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Before */}
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="relative h-64 w-full">
              <Image
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800&h=500"
                alt="Óculos danificado — antes do conserto"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover brightness-50 group-hover:brightness-75 transition duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="bg-red-500 text-white font-black text-lg px-6 py-2 rounded-full mb-3 shadow-lg">ANTES</span>
              <p className="text-white/80 text-sm font-medium">Armação torta, parafusos faltando, lente riscada</p>
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="relative h-64 w-full">
              <Image
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800&h=500"
                alt="Óculos restaurado — depois do conserto"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:brightness-110 transition duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#0057FF]/70 to-transparent">
              <span className="bg-[#FFD400] text-[#0F172A] font-black text-lg px-6 py-2 rounded-full mb-3 shadow-lg">DEPOIS</span>
              <p className="text-white/90 text-sm font-medium">Restaurado, ajustado, limpo e com garantia</p>
            </div>
          </div>
        </div>

        {/* What we fix */}
        <div className="bg-[#FFD400] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-black text-[#0F172A] text-2xl mb-4">O que consertamos</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {['Troca de parafusos', 'Ajuste de armação', 'Soldas e reparos', 'Troca de plaquetas', 'Higienização completa', 'Troca de lentes'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-[#0F172A] text-white font-black px-8 py-4 rounded-xl hover:bg-[#0057FF] transition-all duration-200 hover:scale-105 hover:shadow-lg text-base flex-shrink-0"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
