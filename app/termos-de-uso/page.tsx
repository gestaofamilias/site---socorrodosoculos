import type { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Termos de Uso | Socorro dos Óculos',
  description: 'Termos e condições de uso do site da Socorro dos Óculos.',
};

const sections = [
  {
    title: '1. Objetivo do Site',
    body: 'Este site tem como objetivo apresentar os produtos e serviços da Socorro dos Óculos, permitir a solicitação de orçamentos, facilitar o contato via WhatsApp, telefone e formulário, e disponibilizar informações institucionais sobre nossas unidades.',
  },
  {
    title: '2. Uso Permitido da Plataforma',
    body: 'Você concorda em utilizar este site apenas para fins lícitos, fornecendo informações verdadeiras e atualizadas nos formulários de contato e orçamento. É proibido utilizar o site para fins fraudulentos, enviar conteúdo ofensivo ou tentar acessar áreas restritas sem autorização.',
  },
  {
    title: '3. Direitos Autorais',
    body: 'Todo o conteúdo deste site — incluindo textos, imagens, logotipos, vídeos e identidade visual — é de propriedade da Socorro dos Óculos ou de seus licenciadores, sendo protegido pela legislação de direitos autorais. É proibida a reprodução, distribuição ou uso comercial sem autorização prévia.',
  },
  {
    title: '4. Limitação de Responsabilidade',
    body: 'As informações sobre produtos, preços e prazos exibidas no site têm caráter informativo e podem ser alteradas sem aviso prévio. A Socorro dos Óculos não se responsabiliza por eventuais indisponibilidades temporárias do site ou por uso indevido das informações por terceiros.',
  },
  {
    title: '5. Uso de Informações',
    body: 'As informações fornecidas através dos formulários de contato, orçamento e newsletter serão utilizadas conforme descrito em nossa Política de Privacidade, exclusivamente para fins de atendimento, orçamento e comunicação comercial autorizada.',
  },
  {
    title: '6. Alterações Futuras dos Termos',
    body: 'Estes Termos de Uso podem ser atualizados periodicamente para refletir mudanças legais, operacionais ou de funcionalidades do site. A versão vigente estará sempre disponível nesta página, e o uso continuado do site após alterações implica concordância com os novos termos.',
  },
];

export default function TermsOfUsePage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#FFD400]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <FileText className="w-8 h-8 text-[#FFD400]" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-black text-[#111111] mb-3">Termos de Uso</h1>
          <p className="text-gray-500 text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading font-black text-[#111111] text-lg mb-2">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[#F4F4F4] rounded-2xl border border-gray-100">
          <p className="text-gray-500 text-xs leading-relaxed">
            Ao utilizar este site, você declara ter lido e concordado com estes Termos de Uso e com nossa{' '}
            <a href="/politica-de-privacidade" className="text-[#111111] underline font-semibold">Política de Privacidade</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
