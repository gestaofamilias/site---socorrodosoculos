import { Upload, Search, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function AdminMidia() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Biblioteca de Mídia</h1>
        <button className="bg-brand-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
          <Upload className="w-4 h-4" /> Fazer Upload
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
        <div className="p-4 flex gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Buscar imagens..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow">
            <option>Todas as datas</option>
            <option>Março 2024</option>
            <option>Fevereiro 2024</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div key={item} className="bg-white border border-gray-200 rounded-lg overflow-hidden group relative">
            <div className="aspect-square relative bg-gray-100">
              <Image 
                src={`https://loremflickr.com/300/300/glasses?random=${item}`} 
                alt={`Imagem ${item}`} 
                fill 
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors" title="Visualizar">
                  <Search className="w-4 h-4" />
                </button>
                <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors" title="Excluir">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-2 text-xs text-gray-500 truncate">
              imagem_produto_{item}.jpg
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
