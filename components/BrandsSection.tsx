import { Zap, DollarSign, Shield, UserCheck, Truck } from 'lucide-react';

const benefits = [
  { icon: UserCheck, title: 'Profissionais Especializados', desc: 'Técnicos com anos de experiência em conserto de óculos' },
  { icon: Zap, title: 'Conserto Rápido', desc: 'Prazo médio de 24h para a maioria dos serviços' },
  { icon: DollarSign, title: 'Orçamento Gratuito', desc: 'Avaliamos seu óculos sem compromisso e sem custo' },
  { icon: Shield, title: 'Garantia no Serviço', desc: 'Todos os nossos serviços têm garantia por escrito' },
  { icon: Truck, title: 'Entrega para Todo Brasil', desc: 'Envio seguro com rastreamento para qualquer estado' },
];

export default function BrandsSection() {
  return (
    <section className="py-16 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FFD400] text-xs font-black uppercase tracking-widest mb-2 block">Por que nos escolher</span>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white">Nossos Diferenciais</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#111111] border border-white/5 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:shadow-[#FFD400]/10 hover:-translate-y-1 hover:border-[#FFD400]/30 transition-all duration-300 group w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(20%-0.8rem)]"
            >
              <div className="w-14 h-14 bg-[#FFD400] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,212,0,0.25)]">
                <Icon className="w-7 h-7 text-[#111111]" />
              </div>
              <h3 className="font-heading font-black text-white text-sm mb-2 leading-snug">{title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
