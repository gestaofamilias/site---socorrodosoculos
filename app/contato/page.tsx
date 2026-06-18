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
                    <h3 className="font-bold text-brand-black mb-1">Endereço</h3>
                    <p className="text-gray-600">Rua Dona Izabel A Redentora, 1984 - Centro<br />São José dos Pinhais - PR, 83005-010</p>
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
                <a href="#" className="w-full bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95">
                  <MessageCircle className="w-6 h-6" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden border border-gray-100 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                [Google Maps Integration]
              </div>
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
