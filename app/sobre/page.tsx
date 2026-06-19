import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle2, Users, Award, Heart, MessageCircle, ArrowRight, Target, Eye, MapPinned, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre a Empresa | Socorro dos Óculos',
  description: 'Conheça a história, missão, visão e valores da Socorro dos Óculos — mais de 23 anos especializados em conserto e venda de óculos.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://loremflickr.com/1920/1080/glasses,store?random=about1"
            alt="Nossa loja"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-yellow">Nossa História</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            A Socorro do Óculos nasceu com a missão de democratizar o acesso à saúde ocular, oferecendo produtos de alta qualidade com preços justos e atendimento humanizado.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-8">Mais que uma ótica, cuidamos da sua visão.</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Fundada em 2003, a Socorro do Óculos começou como uma pequena loja de bairro. Com o passar dos anos, nossa dedicação em oferecer o melhor para nossos clientes nos fez crescer e expandir para o mundo digital.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Acreditamos que enxergar bem não deve ser um luxo. Por isso, trabalhamos incansavelmente para trazer as melhores marcas, tecnologias de lentes avançadas e armações que acompanham as últimas tendências de moda, tudo isso com condições acessíveis.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nossa equipe é formada por especialistas apaixonados pelo que fazem, prontos para ajudar você a encontrar o óculos perfeito para o seu estilo e necessidade visual.
              </p>
            </div>
            <div className="flex-1 relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://loremflickr.com/800/1000/optician,store?random=about2"
                  alt="Interior da nossa loja"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-yellow p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="font-heading text-4xl font-bold text-brand-black mb-2">+23 Anos</p>
                <p className="text-brand-black font-medium">de experiência no mercado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Stats */}
      <section className="py-20 bg-brand-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #FFD400 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-yellow/30 transition-colors duration-300">
              <div className="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-brand-yellow" />
              </div>
              <h3 className="font-heading font-black text-2xl text-white mb-3">Nossa Missão</h3>
              <p className="text-gray-400 leading-relaxed">
                Democratizar o acesso à saúde ocular, oferecendo conserto, manutenção e venda de óculos com qualidade,
                agilidade e preço justo, cuidando de cada cliente como se fosse da família.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-yellow/30 transition-colors duration-300">
              <div className="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-brand-yellow" />
              </div>
              <h3 className="font-heading font-black text-2xl text-white mb-3">Nossa Visão</h3>
              <p className="text-gray-400 leading-relaxed">
                Ser a referência nacional em conserto e manutenção de óculos, reconhecida pela confiança, tecnologia
                e excelência no atendimento em cada unidade que abrimos pelo Brasil.
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, value: '+50.000', label: 'Clientes Atendidos' },
              { icon: Award, value: '+23 Anos', label: 'De Mercado' },
              { icon: MapPinned, value: '3', label: 'Unidades pelo Brasil' },
              { icon: Star, value: '4.9', label: 'Avaliação Média' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="w-7 h-7 text-brand-yellow mx-auto mb-3" />
                <p className="font-heading font-black text-2xl md:text-3xl text-white mb-1">{value}</p>
                <p className="text-gray-500 text-xs md:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Os princípios que guiam nosso trabalho todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-yellow">
                <CheckCircle2 className="w-8 h-8 text-brand-black" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-black mb-4">Qualidade</h3>
              <p className="text-gray-600">Trabalhamos apenas com produtos originais e certificados, garantindo a durabilidade e segurança.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-yellow">
                <Users className="w-8 h-8 text-brand-black" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-black mb-4">Atendimento</h3>
              <p className="text-gray-600">Foco total na experiência do cliente, com suporte humanizado antes, durante e após a compra.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-yellow">
                <Award className="w-8 h-8 text-brand-black" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-black mb-4">Transparência</h3>
              <p className="text-gray-600">Preços justos e clareza em todas as informações sobre nossos produtos e serviços.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-yellow">
                <Heart className="w-8 h-8 text-brand-black" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-black mb-4">Paixão</h3>
              <p className="text-gray-600">Amamos o que fazemos e isso se reflete no cuidado com cada detalhe do nosso trabalho.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section className="relative py-16 bg-[#111111] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, #FFD400 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#25D366]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-yellow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-4xl mx-auto text-center lg:text-left">
            <div className="flex items-center gap-5">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
                <div className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.5)]">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h2 className="font-heading text-2xl md:text-3xl font-black text-white mb-1">
                  Precisa de ajuda agora?
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                  Fale com a gente no WhatsApp e receba atendimento rápido e personalizado.
                </p>
              </div>
            </div>

            <Link
              href="https://wa.me/5541933852179?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20conserto%20de%20%C3%B3culos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-black px-8 py-4 rounded-xl hover:bg-[#1EBE57] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] text-base flex-shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              Conversar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-gray-500 text-xs text-center mt-6">
            Ao entrar em contato pelo WhatsApp você concorda com o tratamento dos dados informados conforme nossa{' '}
            <Link href="/politica-de-privacidade" className="underline hover:text-brand-yellow">Política de Privacidade</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
