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
      <div className="bg-[#FFD400] text-[#111111] text-[11px] sm:text-xs py-2 text-center font-bold tracking-wide px-2">
        <span>⚡ Frete grátis acima de R$&nbsp;299</span>
        <span className="hidden sm:inline"> &nbsp;|&nbsp; 📞 (41) 3385-2179 &nbsp;|&nbsp; Orçamento Gratuito</span>
      </div>

      {/* Main header — black premium */}
      <div className="bg-[#111111] shadow-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-[#FFD400] hover:bg-white/5 rounded-lg transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="w-10 h-10 bg-[#FFD400] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,212,0,0.4)]">
              <span className="text-[#111111] font-black text-lg font-heading">S</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="font-heading font-black text-white text-lg block leading-none">Socorro</span>
              <span className="font-heading font-semibold text-[#FFD400] text-xs block">dos Óculos</span>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-2xl relative ml-2 md:ml-4 min-w-0">
            <input
              type="text"
              placeholder="Buscar óculos, serviços, consertos..."
              className="w-full pl-4 md:pl-5 pr-12 md:pr-14 py-2.5 md:py-3 rounded-xl border-2 border-white/10 bg-[#1A1A1A] focus:outline-none focus:border-[#FFD400] transition font-medium placeholder:text-gray-500 text-sm text-white"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FFD400] text-[#111111] p-2 rounded-lg hover:bg-[#FFC107] transition hover:scale-105">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <Link href="/contato" className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-white hover:text-[#FFD400] transition">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:block">Atendimento</span>
            </Link>
            <Link href="/minha-conta" className="flex items-center gap-1.5 text-sm font-bold text-white hover:text-[#FFD400] transition">
              <User className="w-5 h-5" />
              <span className="hidden xl:block">Conta</span>
            </Link>
            <Link href="/carrinho" className="relative flex items-center gap-1.5 text-sm font-bold text-white hover:text-[#FFD400] transition group">
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-[#FFD400] text-[#111111] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">0</span>
              <span className="hidden xl:block">Carrinho</span>
            </Link>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:block border-t border-white/10 bg-[#1A1A1A]">
          <ul className="container mx-auto px-4 flex items-center justify-center">
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="px-5 py-3 text-xs font-black text-white uppercase tracking-wider hover:text-[#FFD400] hover:bg-white/5 block transition"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/promocoes"
                className="px-5 py-3 text-xs font-black bg-[#FFD400] text-[#111111] uppercase tracking-wider hover:bg-[#FFC107] block transition"
              >
                🔥 Promoções
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#111111] text-white border-t border-white/10 shadow-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-4 pr-12 py-3 rounded-xl bg-[#1A1A1A] text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD400] border border-white/10 text-sm"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            </div>
            <nav className="space-y-0.5">
              {[...navLinks, ['🔥 Promoções', '/promocoes']].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center py-3 px-3 hover:bg-white/5 hover:text-[#FFD400] rounded-lg transition font-semibold text-sm border-b border-white/5"
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
