'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Lock, Building2, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Footer() {
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      setConsentError(true);
      return;
    }
    setConsentError(false);
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#111111] pt-16 pb-8 mt-auto border-t border-[#FFD400]/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand & Contact */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group w-max">
              <div className="w-10 h-10 bg-[#FFD400] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,212,0,0.3)]">
                <span className="font-black text-[#111111] text-lg">S</span>
              </div>
              <div className="leading-tight">
                <span className="font-heading font-black text-white text-base block leading-none">Socorro</span>
                <span className="font-heading font-semibold text-[#FFD400] text-xs block">dos Óculos</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Sua ótica de confiança. Especialistas em conserto, manutenção e venda de óculos de grau, sol e lentes de contato.
            </p>

            <div className="flex items-start gap-3 mb-6 p-3 rounded-xl bg-[#1A1A1A] border border-white/5">
              <Building2 className="w-4 h-4 text-[#FFD400] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-gray-500 leading-relaxed">
                <p className="text-gray-300 font-semibold">SOCORRO DOS ÓCULOS LTDA</p>
                <p>CNPJ: 12.345.678/0001-90</p>
                <p>Seg a Sáb: 09h às 18h</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFD400] flex-shrink-0 mt-0.5" />
                <span>Rua Dona Izabel A Redentora, 1984 — Centro, São José dos Pinhais - PR</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFD400] flex-shrink-0 mt-0.5" />
                <span>Av. Vitório do Amaral, 1200 — Centro, Araucária - PR</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFD400] flex-shrink-0 mt-0.5" />
                <span>Av. Nereu Ramos, 850 — Centro, Itapema - SC</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                <span>(41) 3385-2179</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                <span>contato@socorrodooculos.com.br</span>
              </div>
              <a
                href="https://instagram.com/socorrodooculos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#FFD400] transition-colors w-fit"
              >
                <Instagram className="w-4 h-4 text-[#FFD400] flex-shrink-0" />
                <span>@socorrodooculos</span>
              </a>
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-heading font-black text-white text-base mb-6 uppercase tracking-wide">Institucional</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                ['Sobre a Empresa', '/sobre'],
                ['Nossas Lojas', '/nossas-lojas'],
                ['Blog', '/blog'],
                ['Trabalhe Conosco', '/trabalhe-conosco'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#FFD400] transition-colors hover:translate-x-1 inline-block duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ajuda */}
          <div>
            <h3 className="font-heading font-black text-white text-base mb-6 uppercase tracking-wide">Ajuda e Suporte</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                ['Fale Conosco', '/contato'],
                ['Política de Privacidade', '/politica-de-privacidade'],
                ['Termos de Uso', '/termos-de-uso'],
                ['Trocas e Devoluções', '/trocas-e-devolucoes'],
                ['Prazos de Entrega', '/prazos-de-entrega'],
                ['Dúvidas Frequentes', '/faq'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#FFD400] transition-colors hover:translate-x-1 inline-block duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-black text-white text-base mb-6 uppercase tracking-wide">Fique por dentro</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Receba promoções e novidades exclusivas no seu e-mail.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-[#FFD400] bg-[#1A1A1A] border border-[#FFD400]/20 rounded-xl px-4 py-3 mb-8">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                Cadastro realizado com sucesso!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3 mb-8">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FFD400] transition text-sm"
                />
                <label className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (e.target.checked) setConsentError(false);
                    }}
                    className="mt-0.5 w-4 h-4 accent-[#FFD400] flex-shrink-0"
                  />
                  <span>
                    Li e concordo com a{' '}
                    <Link href="/politica-de-privacidade" className="text-[#FFD400] underline hover:text-[#FFC107]">
                      Política de Privacidade
                    </Link>{' '}
                    e autorizo o recebimento de comunicações promocionais.
                  </span>
                </label>
                {consentError && (
                  <p className="text-red-400 text-xs">Você precisa aceitar a Política de Privacidade para se cadastrar.</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-[#FFD400] text-[#111111] font-black py-3 rounded-xl hover:bg-[#FFC107] hover:shadow-[0_0_20px_rgba(255,212,0,0.35)] transition-all duration-200 hover:scale-[1.02] text-sm"
                >
                  Cadastrar
                </button>
              </form>
            )}

            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: 'https://instagram.com/socorrodooculos' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#FFD400] hover:bg-[#FFD400] hover:text-[#111111] hover:border-[#FFD400] transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} Socorro dos Óculos. Todos os direitos reservados.</p>
            <Link href="/admin" className="flex items-center gap-1 text-gray-600 hover:text-[#FFD400] transition-colors" title="Área Administrativa">
              <Lock className="w-3 h-3" />
              <span className="hidden sm:inline">Admin</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {['PIX', 'Visa', 'MC', 'Boleto'].map((method) => (
              <div key={method} className="h-7 px-3 bg-[#1A1A1A] border border-white/10 rounded-md flex items-center justify-center text-gray-400 text-xs font-bold">
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
