import Link from 'next/link';
import { ArrowRight, Snowflake } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main promo banner using the brand image */}
        <div className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl">
          <img
            src="/banner-site.png"
            alt="Promoção de Inverno — Até 30% OFF em serviços selecionados"
            className="w-full block"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/50 via-transparent to-transparent flex items-end p-8 md:p-12">
            <div>
              <Link
                href="/promocoes"
                className="inline-flex items-center gap-2 bg-[#FFD400] text-[#0F172A] font-black px-8 py-4 rounded-xl hover:bg-[#0057FF] hover:text-white transition-all duration-200 hover:scale-105 hover:shadow-lg text-base shadow-xl"
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
            { icon: Snowflake, title: 'Promoção de Inverno', desc: 'Até 30% OFF em serviços selecionados. Aproveite!', color: 'bg-[#0F172A] text-white' },
            { icon: Snowflake, title: 'Conserto Completo', desc: 'Solda + Ajuste + Higienização por preço especial.', color: 'bg-[#FFD400] text-[#0F172A]' },
            { icon: Snowflake, title: 'Leve + Pague Menos', desc: 'Traga 2 óculos e ganhe desconto no segundo serviço.', color: 'bg-[#0057FF] text-white' },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className={`${color} rounded-2xl p-6 flex items-start gap-4`}>
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
