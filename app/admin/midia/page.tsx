'use client';

import { useState, useEffect, useRef } from 'react';
import { Upload, Search, Trash2, Copy, Check } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface MediaFile {
  name: string;
  url: string;
  createdAt: string;
}

export default function AdminMidia() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [uploading, setUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadFiles = async () => {
    setLoading(true);
    const { data } = await supabase.storage.from('media').list('uploads', { sortBy: { column: 'created_at', order: 'desc' } });
    const mapped = (data ?? [])
      .filter((f) => f.name !== '.emptyFolderPlaceholder')
      .map((f) => ({
        name: f.name,
        url: supabase.storage.from('media').getPublicUrl(`uploads/${f.name}`).data.publicUrl,
        createdAt: f.created_at ?? '',
      }));
    setFiles(mapped);
    setLoading(false);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const path = `uploads/${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from('media').upload(path, file);
    if (error) alert('Erro ao enviar: ' + error.message);
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    loadFiles();
  };

  const handleDelete = async (name: string) => {
    if (!confirm('Excluir esta imagem?')) return;
    await supabase.storage.from('media').remove([`uploads/${name}`]);
    loadFiles();
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 1500);
  };

  const filtered = files.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Biblioteca de Mídia</h1>
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="bg-brand-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          <Upload className="w-4 h-4" /> {uploading ? 'Enviando...' : 'Fazer Upload'}
        </button>
        <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleUpload} />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
        <div className="p-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar imagens..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-400 py-12">Carregando...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-400 py-12">Nenhuma imagem na biblioteca ainda.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((file) => (
            <div key={file.name} className="bg-white border border-gray-200 rounded-lg overflow-hidden group relative">
              <div className="aspect-square relative bg-gray-100">
                <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button onClick={() => handleCopy(file.url)} className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors" title="Copiar URL">
                    {copiedUrl === file.url ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button onClick={() => handleDelete(file.name)} className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors" title="Excluir">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-2 text-xs text-gray-500 truncate">{file.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
