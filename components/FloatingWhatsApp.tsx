import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5541933852179?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20conserto%20de%20%C3%B3culos."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:bg-[#1EBE57] hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-7 h-7 text-white" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#111111] text-white text-xs font-semibold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        Falar no WhatsApp
      </span>
    </a>
  );
}
