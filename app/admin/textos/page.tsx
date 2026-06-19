'use client';

import { Save, Search, Upload } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';

const DEFAULTS: Record<string, string> = {
  hero_banner_image: '/hero-bg.png',
  sobre_titulo: 'Nossa História',
  sobre_texto: 'A Socorro do Óculos nasceu com a missão de democratizar o acesso à saúde ocular, oferecendo produtos de alta qualidade com preços justos e atendimento humanizado.',
  footer_descricao: 'Sua ótica de confiança. Especialistas em conserto, manutenção e venda de óculos de grau, sol e lentes de contato.',
  footer_endereco: 'Rua Dona Izabel A Redentora, 1984 - Centro, São José dos Pinhais - PR',
};

export default function AdminTextos() {
  const [content, setContent] = useState<Record<string, string>>(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [search, setSearch] = useState('');
  const [savedMessage, setSavedMessage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from('site_content').select('key, value');
      if (data) {
        const map: Record<string, string> = { ...DEFAULTS };
        data.forEach((row) => { map[row.key] = row.value ?? ''; });
        setContent(map);
      }
      setLoading(false);
    };
    load();
  }, []);

  const setField = (key: string, value: string) => setContent((prev) => ({ ...prev, [key]: value }));

  const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const path = `uploads/${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from('media').upload(path, file);
    if (!error) {
      const { data } = supabase.storage.from('media').getPublicUrl(path);
      setField('hero_banner_image', data.publicUrl);
    } else {
      alert('Erro ao enviar imagem: ' + error.message);
    }
    setUploading(false);
  };

  const handleSaveAll = async () => {
    setSaving(true);
    const rows = Object.entries(content).map(([key, value]) => ({ key, value }));
    await supabase.from('site_content').upsert(rows, { onConflict: 'key' });
    setSaving(false);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  const sections = [
    { title: 'Página Inicial - Banner Principal', match: ['hero_banner_image'] },
    { title: 'Página Sobre - Nossa História', match: ['sobre_titulo', 'sobre_texto'] },
    { title: 'Rodapé', match: ['footer_descricao', 'footer_endereco'] },
  ];

  const matchesSearch = (label: string) => !search || label.toLowerCase().includes(search.toLowerCase());

  if (loading) {
    return <div className="max-w-6xl mx-auto py-12 text-center text-gray-400">Carregando...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Aparência e Textos</h1>
        <div className="flex items-center gap-3">
          {savedMessage && <span className="text-sm text-green-600 font-medium">Salvo com sucesso!</span>}
          <button
            onClick={handleSaveAll}
            disabled={saving}
            className="bg-brand-yellow text-brand-black font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-400 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> {saving ? 'Salvando...' : 'Salvar Todas as Alterações'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-200">
          <div className="relative w-full md:w-1/2">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar seção ou texto..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
            />
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Hero banner */}
          {sections[0].match.some(matchesSearch) && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">{sections[0].title}</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Imagem de Fundo do Banner</label>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="relative w-full sm:w-64 h-32 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 flex-shrink-0">
                    <img src={content.hero_banner_image} alt="Preview do Banner" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <input type="file" ref={fileInputRef} onChange={handleBannerUpload} accept="image/*" className="hidden" />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm font-medium w-fit disabled:opacity-50"
                    >
                      <Upload className="w-4 h-4" /> {uploading ? 'Enviando...' : 'Enviar Nova Imagem'}
                    </button>
                    <p className="text-xs text-gray-500">
                      Tamanho recomendado: 1920x1080 pixels. A alteração é refletida no site após salvar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* About */}
          {sections[1].match.some(matchesSearch) && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">{sections[1].title}</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Título da Seção</label>
                  <input
                    type="text"
                    value={content.sobre_titulo}
                    onChange={(e) => setField('sobre_titulo', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Texto Principal</label>
                  <textarea
                    rows={4}
                    value={content.sobre_texto}
                    onChange={(e) => setField('sobre_texto', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          {sections[2].match.some(matchesSearch) && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">{sections[2].title}</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Descrição Curta</label>
                  <textarea
                    rows={2}
                    value={content.footer_descricao}
                    onChange={(e) => setField('footer_descricao', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Endereço Físico (unidade principal)</label>
                  <input
                    type="text"
                    value={content.footer_endereco}
                    onChange={(e) => setField('footer_endereco', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
