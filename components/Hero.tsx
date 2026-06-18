'use client';

import Link from 'next/link';
import { ArrowRight, Wrench, Eye, Sparkles, CheckCircle, Zap } from 'lucide-react';

const services = [
  { icon: Wrench, title: 'Conserto & Solda', desc: 'Armações e hastes' },
  { icon: Eye, title: 'Troca de Lentes', desc: 'Todos os tipos' },
  { icon: Sparkles, title: 'Higienização', desc: 'Limpeza completa' },
  { icon: Zap, title: 'Ajuste Rápido', desc: 'Encaixe perfeito' },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#111111]">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-bg.png"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay so text stays legible */}
      <div className="absolute inset-0 bg-[#111111]/60" />
      {/* Yellow top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFD400]" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400]/25 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD400]" />
              <span className="text-[#FFD400] text-xs font-bold uppercase tracking-widest">Especialistas em Óculos</span>
            </div>

            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
              SEU ÓCULOS{' '}
              <span className="text-[#FFD400] relative">
                QUEBROU?
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#FFD400]/40 rounded" />
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">NÓS SALVAMOS ELE.</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Conserto, ajuste, solda, troca de lentes e manutenção especializada.
              Rápido, garantido e com o melhor preço.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              {['Conserto Rápido', 'Orçamento Gratuito', 'Garantia no Serviço', 'Entrega para todo Brasil'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-[#FFD400] text-[#111111] font-black py-4 px-8 rounded-xl hover:bg-yellow-300 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,212,0,0.35)] text-base"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/categoria/oculos-de-grau"
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-bold py-4 px-8 rounded-xl hover:border-[#FFD400] hover:text-[#FFD400] transition-all duration-200 text-base"
              >
                Ver Produtos
              </Link>
            </div>
          </div>

          {/* Right: Service cards + stats */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-[#FFD400]/15 rounded-full blur-3xl" />

            <div className="relative z-10 w-full max-w-sm">
              <div className="grid grid-cols-2 gap-3 mb-3">
                {services.map(({ icon: Icon, title, desc }, i) => (
                  <div
                    key={title}
                    className={`rounded-2xl p-5 border hover:border-[#FFD400]/50 transition-all duration-300 hover:-translate-y-1 ${i % 2 === 0 ? 'bg-[#FFD400]/10 border-[#FFD400]/20' : 'bg-white/5 border-white/10'}`}
                  >
                    <Icon className="w-7 h-7 text-[#FFD400] mb-3" />
                    <h3 className="text-white font-bold text-sm mb-0.5">{title}</h3>
                    <p className="text-gray-400 text-xs">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Stats bar */}
              <div className="bg-[#FFD400] rounded-2xl p-4 flex items-center justify-around shadow-[0_0_30px_rgba(255,212,0,0.3)]">
                <div className="text-center">
                  <div className="font-black text-[#111111] text-2xl leading-none">+5000</div>
                  <div className="text-[#111111]/60 text-[10px] font-semibold mt-0.5">Óculos Recuperados</div>
                </div>
                <div className="w-px h-10 bg-black/15" />
                <div className="text-center">
                  <div className="font-black text-[#111111] text-2xl leading-none">98%</div>
                  <div className="text-[#111111]/60 text-[10px] font-semibold mt-0.5">Satisfação</div>
                </div>
                <div className="w-px h-10 bg-black/15" />
                <div className="text-center">
                  <div className="font-black text-[#111111] text-2xl leading-none">24h</div>
                  <div className="text-[#111111]/60 text-[10px] font-semibold mt-0.5">Prazo Médio</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
