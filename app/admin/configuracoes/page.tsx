'use client';

import { useState, useEffect } from 'react';
import { Save, Globe, Mail, MessageCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const DEFAULTS: Record<string, string> = {
  nome_site: 'Socorro dos Óculos',
  slogan_site: 'A sua ótica online de confiança',
  email_contato: 'contato@socorrodooculos.com.br',
  whatsapp_numero: '5541933852179',
};

export default function AdminConfiguracoes() {
  const [content, setContent] = useState<Record<string, string>>(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from('site_content').select('key, value').in('key', Object.keys(DEFAULTS));
      if (data) {
        const map = { ...DEFAULTS };
        data.forEach((row) => { map[row.key] = row.value ?? ''; });
        setContent(map);
      }
      setLoading(false);
    };
    load();
  }, []);

  const setField = (key: string, value: string) => setContent((prev) => ({ ...prev, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    const rows = Object.entries(content).map(([key, value]) => ({ key, value }));
    await supabase.from('site_content').upsert(rows, { onConflict: 'key' });
    setSaving(false);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  if (loading) {
    return <div className="max-w-4xl mx-auto py-12 text-center text-gray-400">Carregando...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Configurações Gerais</h1>
        <div className="flex items-center gap-3">
          {savedMessage && <span className="text-sm text-green-600 font-medium">Salvo com sucesso!</span>}
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-brand-yellow text-brand-black font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-400 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> {saving ? 'Salvando...' : 'Salvar Configurações'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
          <Globe className="w-5 h-5 text-gray-500" />
          <h2 className="text-lg font-bold text-gray-800">Informações do Site</h2>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Site</label>
            <input
              type="text"
              value={content.nome_site}
              onChange={(e) => setField('nome_site', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slogan (Tagline)</label>
            <input
              type="text"
              value={content.slogan_site}
              onChange={(e) => setField('slogan_site', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1.5">
              <Mail className="w-4 h-4" /> E-mail de Contato Principal
            </label>
            <input
              type="email"
              value={content.email_contato}
              onChange={(e) => setField('email_contato', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4" /> WhatsApp para Vendas (com DDI + DDD, somente números)
            </label>
            <input
              type="tel"
              value={content.whatsapp_numero}
              onChange={(e) => setField('whatsapp_numero', e.target.value)}
              placeholder="5541900000000"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
