import { User, Package, MapPin, LogOut } from 'lucide-react';

export default function MyAccountPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-brand-yellow/10">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-black font-bold text-2xl mb-4">
                J
              </div>
              <h2 className="font-heading font-bold text-lg text-brand-black">João da Silva</h2>
              <p className="text-sm text-gray-500">joao@exemplo.com</p>
            </div>
            <nav className="flex flex-col py-2">
              <a href="#" className="flex items-center gap-3 px-6 py-4 text-brand-black font-medium bg-gray-50 border-l-4 border-brand-yellow transition-all duration-200">
                <User className="w-5 h-5" /> Meus Dados
              </a>
              <a href="#" className="flex items-center gap-3 px-6 py-4 text-gray-600 font-medium hover:bg-gray-50 hover:text-brand-black transition-all duration-200 hover:translate-x-1 border-l-4 border-transparent">
                <Package className="w-5 h-5" /> Meus Pedidos
              </a>
              <a href="#" className="flex items-center gap-3 px-6 py-4 text-gray-600 font-medium hover:bg-gray-50 hover:text-brand-black transition-all duration-200 hover:translate-x-1 border-l-4 border-transparent">
                <MapPin className="w-5 h-5" /> Endereços
              </a>
              <a href="#" className="flex items-center gap-3 px-6 py-4 text-red-500 font-medium hover:bg-red-50 transition-all duration-200 hover:translate-x-1 border-l-4 border-transparent mt-4 border-t border-gray-100">
                <LogOut className="w-5 h-5" /> Sair
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mb-8">
            <h1 className="font-heading text-2xl font-bold text-brand-black mb-6 pb-4 border-b border-gray-100">Meus Dados</h1>
            
            <form className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                  <input type="text" defaultValue="João da Silva" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">CPF</label>
                  <input type="text" defaultValue="123.456.789-00" disabled className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 text-gray-500 cursor-not-allowed" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">E-mail</label>
                  <input type="email" defaultValue="joao@exemplo.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                  <input type="tel" defaultValue="(11) 98765-4321" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Data de Nascimento</label>
                  <input type="date" defaultValue="1990-01-01" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Gênero</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 bg-white">
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Outro</option>
                    <option>Prefiro não informar</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex justify-end">
                <button type="button" className="bg-brand-black text-white font-bold px-8 py-3 rounded-lg hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95">
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-brand-black mb-6 pb-4 border-b border-gray-100">Alterar Senha</h2>
            <form className="space-y-6 max-w-md">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Senha Atual</label>
                <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nova Senha</label>
                <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Confirmar Nova Senha</label>
                <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20" />
              </div>
              <div className="pt-4">
                <button type="button" className="bg-gray-200 text-brand-black font-bold px-8 py-3 rounded-lg hover:bg-gray-300 transition-all duration-200 hover:scale-105 active:scale-95">
                  Atualizar Senha
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
