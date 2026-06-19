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
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#111111] via-[#1A1A1A] to-[#111111]">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-bg.png"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-[#111111]/75" />
      {/* Particle / dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(circle, #FFD400 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      {/* Yellow top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFD400]" />
      {/* Golden glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC107]/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FFD400]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">

          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FFD400]/10 border border-[#FFD400]/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD400]" />
              <span className="text-[#FFD400] text-xs font-bold uppercase tracking-widest">Especialistas em Óculos</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] sm:leading-[1.05] mb-6">
              SEU ÓCULOS{' '}
              <span className="text-[#FFD400] relative">
                QUEBROU?
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#FFD400]/40 rounded" />
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                NÓS TEMOS A <span className="text-[#FFD400]">SOLUÇÃO!</span>
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Conserto, ajuste, solda, troca de lentes e manutenção especializada.
              Rápido, garantido e com o melhor preço.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {['Conserto Rápido', 'Orçamento Gratuito', 'Garantia no Serviço', 'Entrega para todo Brasil'].map((item) => (
                <div key={item} className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD400] text-[#111111] font-black py-4 px-8 rounded-xl hover:bg-[#FFC107] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] text-base"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/categoria/oculos-de-grau"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl hover:border-[#FFD400] hover:text-[#FFD400] transition-all duration-200 text-base"
              >
                Ver Produtos
              </Link>
            </div>
          </div>

          {/* Right: Service cards + stats */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-[#FFD400]/15 rounded-full blur-3xl" />

            <div className="relative z-10 w-full max-w-xs sm:max-w-sm">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                {services.map(({ icon: Icon, title, desc }, i) => (
                  <div
                    key={title}
                    className={`rounded-2xl p-4 sm:p-5 border backdrop-blur-sm hover:border-[#FFD400]/50 transition-all duration-300 hover:-translate-y-1 ${i % 2 === 0 ? 'bg-[#FFD400]/10 border-[#FFD400]/25' : 'bg-white/5 border-white/15'}`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFD400] mb-2 sm:mb-3" />
                    <h3 className="text-white font-bold text-xs sm:text-sm mb-0.5">{title}</h3>
                    <p className="text-gray-400 text-[11px] sm:text-xs">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Stats bar */}
              <div className="bg-[#FFD400] rounded-2xl p-3 sm:p-4 flex items-center justify-around shadow-[0_0_30px_rgba(255,212,0,0.35)]">
                <div className="text-center">
                  <div className="font-black text-[#111111] text-xl sm:text-2xl leading-none">200k</div>
                  <div className="text-[#111111]/60 text-[9px] sm:text-[10px] font-semibold mt-0.5">Óculos Recuperados</div>
                </div>
                <div className="w-px h-10 bg-black/15" />
                <div className="text-center">
                  <div className="font-black text-[#111111] text-xl sm:text-2xl leading-none">98%</div>
                  <div className="text-[#111111]/60 text-[9px] sm:text-[10px] font-semibold mt-0.5">Satisfação</div>
                </div>
                <div className="w-px h-10 bg-black/15" />
                <div className="text-center">
                  <div className="font-black text-[#111111] text-xl sm:text-2xl leading-none">1h</div>
                  <div className="text-[#111111]/60 text-[9px] sm:text-[10px] font-semibold mt-0.5">Prazo Médio</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
