'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Layout, Image as ImageIcon, Type, Plus } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ products: 0, categories: 0, media: 0, content: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCounts = async () => {
      const [{ count: products }, { count: categories }, { count: content }, mediaList] = await Promise.all([
        supabase.from('products').select('*', { count: 'exact', head: true }),
        supabase.from('categories').select('*', { count: 'exact', head: true }),
        supabase.from('site_content').select('*', { count: 'exact', head: true }),
        supabase.storage.from('media').list(),
      ]);
      setCounts({
        products: products ?? 0,
        categories: categories ?? 0,
        content: content ?? 0,
        media: mediaList.data?.length ?? 0,
      });
      setLoading(false);
    };
    loadCounts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Visão Geral</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total de Produtos</p>
              <h3 className="text-3xl font-bold text-gray-800">{loading ? '—' : counts.products}</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <Layout className="w-6 h-6" />
            </div>
          </div>
          <Link href="/admin/produtos" className="text-sm text-blue-600 hover:underline">Gerenciar produtos &rarr;</Link>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Categorias</p>
              <h3 className="text-3xl font-bold text-gray-800">{loading ? '—' : counts.categories}</h3>
            </div>
            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
              <Layout className="w-6 h-6" />
            </div>
          </div>
          <Link href="/admin/categorias" className="text-sm text-green-600 hover:underline">Gerenciar categorias &rarr;</Link>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Imagens na Galeria</p>
              <h3 className="text-3xl font-bold text-gray-800">{loading ? '—' : counts.media}</h3>
            </div>
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
              <ImageIcon className="w-6 h-6" />
            </div>
          </div>
          <Link href="/admin/midia" className="text-sm text-purple-600 hover:underline">Acessar biblioteca &rarr;</Link>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Textos Editáveis</p>
              <h3 className="text-3xl font-bold text-gray-800">{loading ? '—' : counts.content}</h3>
            </div>
            <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
              <Type className="w-6 h-6" />
            </div>
          </div>
          <Link href="/admin/textos" className="text-sm text-orange-600 hover:underline">Editar conteúdos &rarr;</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-heading font-semibold text-lg text-gray-800">Ações Rápidas</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/admin/produtos" className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-brand-yellow hover:border-brand-yellow transition-colors font-medium text-gray-700 hover:text-brand-black">
            <Plus className="w-5 h-5" /> Novo Produto
          </Link>
          <Link href="/admin/midia" className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-brand-yellow hover:border-brand-yellow transition-colors font-medium text-gray-700 hover:text-brand-black">
            <ImageIcon className="w-5 h-5" /> Fazer Upload de Imagem
          </Link>
          <Link href="/admin/textos" className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-brand-yellow hover:border-brand-yellow transition-colors font-medium text-gray-700 hover:text-brand-black">
            <Type className="w-5 h-5" /> Editar Banner Principal
          </Link>
        </div>
      </div>
    </div>
  );
}
