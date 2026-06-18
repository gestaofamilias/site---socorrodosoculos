import Link from 'next/link';
import { Settings, Image as ImageIcon, Layout, Type, LogOut, Home } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-black text-white flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-gray-800">
          <h1 className="font-heading font-bold text-xl text-brand-yellow">Painel Admin</h1>
          <p className="text-sm text-gray-400 mt-1">Socorro do Óculos</p>
        </div>
        <nav className="flex-1 py-4 overflow-y-auto">
          <Link href="/admin" className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <Home className="w-5 h-5" /> Início
          </Link>
          <Link href="/admin/produtos" className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <Layout className="w-5 h-5" /> Produtos
          </Link>
          <Link href="/admin/categorias" className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <Layout className="w-5 h-5" /> Categorias
          </Link>
          <Link href="/admin/midia" className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <ImageIcon className="w-5 h-5" /> Mídia (Fotos)
          </Link>
          <Link href="/admin/textos" className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <Type className="w-5 h-5" /> Textos e Títulos
          </Link>
          <Link href="/admin/configuracoes" className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <Settings className="w-5 h-5" /> Configurações
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <Link href="/" className="flex items-center justify-center gap-2 w-full py-2 bg-gray-800 rounded-md text-sm hover:bg-gray-700 transition-colors">
            <LogOut className="w-4 h-4" /> Voltar ao Site
          </Link>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="font-heading font-semibold text-xl text-gray-800">Administração</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Logado como Administrador</span>
            <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-brand-black font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
