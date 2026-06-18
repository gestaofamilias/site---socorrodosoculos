import Link from 'next/link';
import { Layout, Image as ImageIcon, Type, Plus, Settings } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Visão Geral</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stat Cards */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total de Produtos</p>
              <h3 className="text-3xl font-bold text-gray-800">124</h3>
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
              <h3 className="text-3xl font-bold text-gray-800">8</h3>
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
              <h3 className="text-3xl font-bold text-gray-800">450</h3>
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
              <h3 className="text-3xl font-bold text-gray-800">32</h3>
            </div>
            <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
              <Type className="w-6 h-6" />
            </div>
          </div>
          <Link href="/admin/textos" className="text-sm text-orange-600 hover:underline">Editar conteúdos &rarr;</Link>
        </div>
      </div>

      {/* Recent Activity / Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
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
      
      {/* Placeholder Notice */}
      <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-800">
        <h4 className="font-bold flex items-center gap-2 mb-2">
          <Settings className="w-5 h-5" /> Modo de Demonstração
        </h4>
        <p className="text-sm">
          Este é um painel administrativo de demonstração. Como a configuração do banco de dados (Firebase) foi recusada, as alterações feitas aqui não serão salvas permanentemente. Para um sistema totalmente funcional, é necessário configurar um banco de dados.
        </p>
      </div>
    </div>
  );
}
