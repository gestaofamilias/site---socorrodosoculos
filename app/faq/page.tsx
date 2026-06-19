import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes | Socorro dos Óculos',
  description: 'Tire suas dúvidas sobre conserto, manutenção, orçamento e atendimento da Socorro dos Óculos.',
};

const faqs = [
  {
    q: 'Quanto tempo demora o conserto do meu óculos?',
    a: 'O prazo médio é de 1h a 24h para a maioria dos serviços, dependendo da complexidade do reparo e disponibilidade de peças. Consertos simples, como troca de parafusos e ajustes, costumam ser feitos na hora.',
  },
  {
    q: 'O orçamento é realmente gratuito?',
    a: 'Sim. Avaliamos seu óculos sem qualquer custo ou compromisso. Você só paga se decidir realizar o serviço conosco.',
  },
  {
    q: 'Como faço para solicitar um orçamento?',
    a: 'Você pode falar diretamente com a gente pelo WhatsApp, telefone, e-mail ou através do formulário na nossa página de Contato. Atendemos as unidades de São José dos Pinhais (PR), Araucária (PR) e Itapema (SC).',
  },
  {
    q: 'Vocês têm garantia nos serviços realizados?',
    a: 'Sim, todos os nossos serviços possuem garantia por escrito. Caso identifique qualquer problema relacionado ao reparo realizado, é só entrar em contato.',
  },
  {
    q: 'Quais tipos de conserto vocês realizam?',
    a: 'Realizamos troca de parafusos, ajuste de armação, soldas em geral, troca de plaquetas e hastes, troca de charneira/dobradiça, polimento e troca de lentes, higienização completa, pintura e reforço de armação, entre outros serviços.',
  },
  {
    q: 'Posso enviar meu óculos pelo correio?',
    a: 'Sim, realizamos entrega e envio para todo o Brasil. Entre em contato pelo WhatsApp para saber como funciona o processo de envio e devolução do seu óculos.',
  },
  {
    q: 'Meus dados estão seguros ao entrar em contato?',
    a: 'Sim. Tratamos seus dados pessoais em conformidade com a LGPD. Consulte nossa Política de Privacidade para mais detalhes sobre como coletamos e utilizamos suas informações.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="bg-white py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#FFD400]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <HelpCircle className="w-8 h-8 text-[#FFD400]" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-black text-[#111111] mb-3">Perguntas Frequentes</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de conserto, manutenção e atendimento.
          </p>
        </div>

        <div className="space-y-3 mb-12">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border border-gray-100 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#111111] hover:bg-gray-50 transition-colors list-none">
                {faq.q}
                <span className="text-[#FFD400] text-xl group-open:rotate-45 transition-transform flex-shrink-0 ml-4">+</span>
              </summary>
              <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="bg-[#111111] rounded-2xl p-8 text-center">
          <h2 className="font-heading text-xl font-black text-white mb-2">Não encontrou sua resposta?</h2>
          <p className="text-gray-400 text-sm mb-6">Fale diretamente com a nossa equipe pelo WhatsApp.</p>
          <Link
            href="https://wa.me/5541933852179?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-black px-8 py-4 rounded-xl hover:bg-[#1EBE57] transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Conversar no WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
