import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Cliente verificada',
    initial: 'A',
    content: 'Trouxe meu óculos quebrado e em menos de 24h estava como novo. Atendimento incrível, preço justo e com garantia. Recomendo muito!',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    role: 'Cliente verificado',
    initial: 'C',
    content: 'Ótimo atendimento pelo WhatsApp. Me ajudaram a escolher o conserto ideal e explicaram tudo direitinho. Preço bem melhor que esperava.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    role: 'Cliente verificada',
    initial: 'M',
    content: 'Minha armação estava toda torta e com parafuso faltando. Devolveram perfeita, ajustada, higienizada. Fiquei muito satisfeita!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#FFD400] text-xs font-black uppercase tracking-widest mb-2 block">Avaliações reais</span>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-3">O que nossos clientes dizem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            A satisfação dos nossos clientes é a nossa maior prioridade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl relative hover:border-[#FFD400]/30 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-[#FFD400]/30 mb-4" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-[#FFD400] fill-[#FFD400]' : 'text-gray-600'}`}
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed text-sm italic">&quot;{testimonial.content}&quot;</p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#FFD400] flex items-center justify-center flex-shrink-0">
                  <span className="font-black text-[#111111] text-sm">{testimonial.initial}</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <span className="text-xs text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#FFD400] rounded-2xl px-8 py-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#111111] fill-[#111111]" />
              ))}
            </div>
            <span className="font-black text-[#111111] text-lg">4.9</span>
            <span className="text-[#111111]/60 font-semibold text-sm">— Avaliação média de +500 clientes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
