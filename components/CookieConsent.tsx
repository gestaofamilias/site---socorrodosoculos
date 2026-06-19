'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Cookie, Settings, X } from 'lucide-react';

type ConsentPrefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const saveConsent = (prefs: ConsentPrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, date: new Date().toISOString() }));
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });
  const acceptSelected = () => saveConsent({ necessary: true, analytics, marketing });

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-[#111111] border border-[#FFD400]/20 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
        {!showSettings ? (
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-11 h-11 bg-[#FFD400]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-[#FFD400]" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed flex-1">
              Utilizamos cookies para melhorar sua experiência de navegação. Ao continuar utilizando nosso site
              você concorda com nossa{' '}
              <Link href="/politica-de-privacidade" className="text-[#FFD400] underline hover:text-[#FFC107]">
                Política de Privacidade
              </Link>.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/15 text-white text-sm font-semibold hover:border-[#FFD400]/40 hover:text-[#FFD400] transition-colors"
              >
                <Settings className="w-4 h-4" />
                Configurar
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#FFD400] text-[#111111] text-sm font-black hover:bg-[#FFC107] transition-colors"
              >
                Aceitar
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-black text-white text-base">Configurar Cookies</h3>
              <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 mb-5">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#1A1A1A] border border-white/5">
                <div>
                  <p className="text-white text-sm font-semibold">Cookies Necessários</p>
                  <p className="text-gray-500 text-xs">Essenciais para o funcionamento do site.</p>
                </div>
                <span className="text-[#FFD400] text-xs font-bold">Sempre ativo</span>
              </div>

              <label className="flex items-center justify-between p-3 rounded-xl bg-[#1A1A1A] border border-white/5 cursor-pointer">
                <div>
                  <p className="text-white text-sm font-semibold">Cookies Analíticos</p>
                  <p className="text-gray-500 text-xs">Nos ajudam a entender como você usa o site.</p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="w-5 h-5 accent-[#FFD400] flex-shrink-0"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-[#1A1A1A] border border-white/5 cursor-pointer">
                <div>
                  <p className="text-white text-sm font-semibold">Cookies de Marketing</p>
                  <p className="text-gray-500 text-xs">Usados para exibir anúncios mais relevantes.</p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="w-5 h-5 accent-[#FFD400] flex-shrink-0"
                />
              </label>
            </div>

            <button
              onClick={acceptSelected}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#FFD400] text-[#111111] text-sm font-black hover:bg-[#FFC107] transition-colors"
            >
              Salvar Preferências
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
