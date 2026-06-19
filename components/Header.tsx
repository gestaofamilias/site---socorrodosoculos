'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  ['Óculos de Grau', '/categoria/oculos-de-grau'],
  ['Óculos de Sol', '/categoria/oculos-de-sol'],
  ['Armações', '/categoria/armacoes'],
  ['Lentes de Contato', '/categoria/lentes-de-contato'],
  ['Marcas', '/marcas'],
  ['Sobre', '/sobre'],
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[#0F172A] text-white text-[11px] sm:text-xs py-2 text-center font-medium tracking-wide px-2">
        <span>⚡ Frete grátis acima de R$&nbsp;299</span>
        <span className="hidden sm:inline"> &nbsp;|&nbsp; 📞 (41) 3385-2179 &nbsp;|&nbsp; Orçamento Gratuito</span>
      </div>

      {/* Main header — white */}
      <div className="bg-white shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-[#0057FF] hover:bg-[#F4F8FF] rounded-lg transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="w-10 h-10 bg-[#FFD400] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
              <span className="text-black font-black text-lg font-heading">S</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="font-heading font-black text-black text-lg block leading-none">Socorro</span>
              <span className="font-heading font-semibold text-black/70 text-xs block">dos Óculos</span>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-2xl relative ml-2 md:ml-4 min-w-0">
            <input
              type="text"
              placeholder="Buscar óculos, serviços, consertos..."
              className="w-full pl-4 md:pl-5 pr-12 md:pr-14 py-2.5 md:py-3 rounded-xl border-2 border-[#F4F8FF] bg-[#F4F8FF] focus:outline-none focus:border-[#0057FF] focus:bg-white transition font-medium placeholder:text-gray-400 text-sm text-[#0F172A]"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0057FF] text-white p-2 rounded-lg hover:bg-[#0046CC] transition hover:scale-105">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <Link href="/contato" className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-[#0057FF] hover:text-[#0F172A] transition">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:block">Atendimento</span>
            </Link>
            <Link href="/minha-conta" className="flex items-center gap-1.5 text-sm font-bold text-[#0057FF] hover:text-[#0F172A] transition">
              <User className="w-5 h-5" />
              <span className="hidden xl:block">Conta</span>
            </Link>
            <Link href="/carrinho" className="relative flex items-center gap-1.5 text-sm font-bold text-[#0057FF] hover:text-[#0F172A] transition group">
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-[#FFD400] text-[#0F172A] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">0</span>
              <span className="hidden xl:block">Carrinho</span>
            </Link>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:block border-t border-gray-100 bg-[#F4F8FF]">
          <ul className="container mx-auto px-4 flex items-center justify-center">
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="px-5 py-3 text-xs font-black text-[#0F172A] uppercase tracking-wider hover:text-[#0057FF] hover:bg-white block transition"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/promocoes"
                className="px-5 py-3 text-xs font-black bg-[#FFD400] text-[#0F172A] uppercase tracking-wider hover:bg-yellow-300 block transition"
              >
                🔥 Promoções
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0F172A] text-white border-t border-white/10 shadow-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-4 pr-12 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/15 border border-white/20 text-sm"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            </div>
            <nav className="space-y-0.5">
              {[...navLinks, ['🔥 Promoções', '/promocoes']].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center py-3 px-3 hover:bg-white/10 rounded-lg transition font-semibold text-sm border-b border-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
