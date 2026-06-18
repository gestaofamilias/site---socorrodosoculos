import { Save, User, Lock, Globe } from 'lucide-react';

export default function AdminConfiguracoes() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Configurações Gerais</h1>
        <button className="bg-brand-yellow text-brand-black font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-400 transition-colors">
          <Save className="w-4 h-4" /> Salvar Configurações
        </button>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <Globe className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold text-gray-800">Informações do Site</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Site</label>
              <input type="text" defaultValue="Socorro do Óculos" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slogan (Tagline)</label>
              <input type="text" defaultValue="A sua ótica online de confiança" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail de Contato Principal</label>
              <input type="email" defaultValue="contato@socorrodooculos.com.br" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp para Vendas</label>
              <input type="tel" defaultValue="(41) 3385-2179" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
            </div>
          </div>
        </div>

        {/* Admin Profile */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <User className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold text-gray-800">Perfil do Administrador</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input type="text" defaultValue="Administrador" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail de Login</label>
              <input type="email" defaultValue="admin@socorrodooculos.com.br" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <Lock className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold text-gray-800">Segurança</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nova Senha</label>
              <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Nova Senha</label>
              <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
            </div>
            <div className="pt-2">
              <button className="bg-gray-100 text-gray-800 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Atualizar Senha
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
