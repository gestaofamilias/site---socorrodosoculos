import Link from 'next/link';
import { ArrowRight, Snowflake } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-4">
        {/* Main promo banner using the brand image */}
        <div className="relative rounded-3xl overflow-hidden mb-8 shadow-[0_0_40px_rgba(255,212,0,0.1)] border border-white/5">
          <img
            src="/banner-site.png"
            alt="Promoção de Inverno — Até 30% OFF em serviços selecionados"
            className="w-full block"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 via-transparent to-transparent flex items-end p-8 md:p-12">
            <div>
              <Link
                href="/promocoes"
                className="inline-flex items-center gap-2 bg-[#FFD400] text-[#111111] font-black px-8 py-4 rounded-xl hover:bg-[#FFC107] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,212,0,0.5)] text-base shadow-xl"
              >
                Ver Todas as Promoções
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Snowflake, title: 'Promoção de Inverno', desc: 'Até 30% OFF em serviços selecionados. Aproveite!', color: 'bg-[#1A1A1A] text-white border border-white/5' },
            { icon: Snowflake, title: 'Conserto Completo', desc: 'Solda + Ajuste + Higienização por preço especial.', color: 'bg-[#FFD400] text-[#111111]' },
            { icon: Snowflake, title: 'Leve + Pague Menos', desc: 'Traga 2 óculos e ganhe desconto no segundo serviço.', color: 'bg-[#1A1A1A] text-white border border-white/5' },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className={`${color} rounded-2xl p-6 flex items-start gap-4 hover:shadow-[0_0_20px_rgba(255,212,0,0.15)] transition-shadow duration-300`}>
              <Icon className="w-8 h-8 flex-shrink-0 mt-0.5 opacity-80" />
              <div>
                <h3 className="font-heading font-black text-base mb-1">{title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
