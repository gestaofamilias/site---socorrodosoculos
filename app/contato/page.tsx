import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-black mb-4">Fale Conosco</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Estamos aqui para ajudar! Entre em contato conosco através de um dos nossos canais de atendimento ou preencha o formulário abaixo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Map */}
          <div className="flex-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="font-heading text-2xl font-bold text-brand-black mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 text-brand-yellow">
                    <MapPin className="w-6 h-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black mb-1">Nossas Unidades</h3>
                    <p className="text-gray-600 mb-2">Rua Dona Izabel A Redentora, 1984 - Centro<br />São José dos Pinhais - PR, 83005-010</p>
                    <p className="text-gray-600 mb-2">Av. Vitório do Amaral, 1200 - Centro<br />Araucária - PR</p>
                    <p className="text-gray-600">Av. Nereu Ramos, 850 - Centro<br />Itapema - SC</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 text-brand-yellow">
                    <Phone className="w-6 h-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black mb-1">Telefone</h3>
                    <p className="text-gray-600">(41) 3385-2179</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 text-brand-yellow">
                    <Mail className="w-6 h-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black mb-1">E-mail</h3>
                    <p className="text-gray-600">contato@socorrodooculos.com.br<br />suporte@socorrodooculos.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 text-brand-yellow">
                    <Clock className="w-6 h-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 09h às 18h<br />Sábado: 09h às 13h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <a
                  href="https://wa.me/5541933852179?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20conserto%20de%20%C3%B3culos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95"
                >
                  <MessageCircle className="w-6 h-6" />
                  Falar no WhatsApp
                </a>
                <p className="text-gray-400 text-xs text-center mt-3">
                  Ao entrar em contato pelo WhatsApp você concorda com o tratamento dos dados informados conforme nossa{' '}
                  <Link href="/politica-de-privacidade" className="underline hover:text-brand-yellow">Política de Privacidade</Link>.
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="h-64 rounded-2xl overflow-hidden border border-gray-100">
              <iframe
                title="Localização Socorro dos Óculos - São José dos Pinhais"
                src="https://www.google.com/maps?q=Rua+Dona+Izabel+A+Redentora,+1984,+S%C3%A3o+Jos%C3%A9+dos+Pinhais+-+PR&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 h-full">
              <h2 className="font-heading text-2xl font-bold text-brand-black mb-6">Envie uma Mensagem</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">E-mail</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Telefone</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Assunto</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 bg-white">
                    <option>Dúvida sobre produto</option>
                    <option>Status do pedido</option>
                    <option>Troca ou devolução</option>
                    <option>Elogio ou reclamação</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 resize-none" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-black text-white font-bold py-4 rounded-xl hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
