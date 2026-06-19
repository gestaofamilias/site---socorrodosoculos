import { UserCheck, DollarSign, ShieldCheck, MessageCircle, Lock, FileLock2 } from 'lucide-react';

const trustItems = [
  { icon: UserCheck, label: 'Atendimento Especializado' },
  { icon: DollarSign, label: 'Orçamento Gratuito' },
  { icon: ShieldCheck, label: 'Garantia no Serviço' },
  { icon: MessageCircle, label: 'Atendimento via WhatsApp' },
  { icon: Lock, label: 'Segurança e Privacidade' },
  { icon: FileLock2, label: 'Proteção de Dados (LGPD)' },
];

export default function TrustSection() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-5">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#FFD400]/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-[#FFC107]" />
              </div>
              <span className="text-sm font-semibold text-[#111111]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
