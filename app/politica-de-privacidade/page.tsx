import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Socorro dos Óculos',
  description: 'Saiba como a Socorro dos Óculos coleta, utiliza e protege seus dados pessoais, em conformidade com a LGPD.',
};

const sections = [
  {
    title: '1. Quem Somos',
    body: 'A SOCORRO DOS ÓCULOS LTDA ("nós", "nossa empresa") é uma ótica especializada em venda, conserto e manutenção de óculos de grau, óculos de sol, armações e lentes de contato, com unidades em São José dos Pinhais (PR), Araucária (PR) e Itapema (SC). Esta Política de Privacidade explica como tratamos os dados pessoais coletados através do nosso site.',
  },
  {
    title: '2. Quais Dados Coletamos',
    body: 'Podemos coletar: nome completo, e-mail, telefone/WhatsApp, CEP e endereço, mensagens enviadas em formulários de contato e orçamento, e dados de navegação (cookies, páginas visitadas, dispositivo e localização aproximada).',
  },
  {
    title: '3. Como os Dados são Utilizados',
    body: 'Utilizamos seus dados para: responder solicitações de orçamento e contato, enviar comunicações promocionais (somente com seu consentimento), processar pedidos e melhorar a experiência de navegação no site, além de cumprir obrigações legais e regulatórias.',
  },
  {
    title: '4. Compartilhamento de Dados',
    body: 'Não vendemos seus dados pessoais. Podemos compartilhar informações com prestadores de serviço que nos auxiliam na operação do site (hospedagem, e-mail marketing, atendimento via WhatsApp) e quando exigido por lei ou ordem judicial.',
  },
  {
    title: '5. Segurança das Informações',
    body: 'Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida, incluindo conexão criptografada (HTTPS) e controle de acesso a sistemas internos.',
  },
  {
    title: '6. Tempo de Armazenamento',
    body: 'Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por obrigações legais e fiscais, sendo excluídos ou anonimizados após esse período.',
  },
  {
    title: '7. Direitos do Titular dos Dados',
    body: 'Conforme a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018), você tem direito a: confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar anonimização ou exclusão, revogar o consentimento e solicitar a portabilidade dos dados.',
  },
  {
    title: '8. Solicitação de Exclusão de Dados',
    body: 'Para solicitar a exclusão, correção ou portabilidade dos seus dados pessoais, envie um e-mail para contato@socorrodooculos.com.br com o assunto "Solicitação LGPD", informando seu nome completo e o pedido desejado. Responderemos em até 15 dias úteis.',
  },
  {
    title: '9. Cookies',
    body: 'Utilizamos cookies necessários, analíticos e de marketing para melhorar sua experiência de navegação. Você pode gerenciar suas preferências de cookies através do banner exibido na primeira visita ou nas configurações do seu navegador.',
  },
  {
    title: '10. Contato do Responsável (DPO)',
    body: 'Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados, entre em contato pelo e-mail contato@socorrodooculos.com.br ou pelo telefone (41) 3385-2179.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#FFD400]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <ShieldCheck className="w-8 h-8 text-[#FFD400]" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-black text-[#111111] mb-3">Política de Privacidade</h1>
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
            Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas
            ou na legislação aplicável. Recomendamos a revisão periódica desta página.
          </p>
        </div>
      </div>
    </div>
  );
}
