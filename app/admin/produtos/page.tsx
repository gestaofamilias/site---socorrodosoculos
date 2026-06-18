import { Plus, Search, Edit, Trash2 } from 'lucide-react';

export default function AdminProdutos() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Produtos</h1>
        <button className="bg-brand-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
          <Plus className="w-4 h-4" /> Adicionar Produto
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Buscar produtos..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow">
            <option>Todas as Categorias</option>
            <option>Óculos de Sol</option>
            <option>Óculos de Grau</option>
            <option>Lentes de Contato</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500">
                <th className="p-4 font-medium">Produto</th>
                <th className="p-4 font-medium">Categoria</th>
                <th className="p-4 font-medium">Preço</th>
                <th className="p-4 font-medium">Estoque</th>
                <th className="p-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: 1, name: 'Óculos de Sol Ray-Ban Aviator', cat: 'Óculos de Sol', price: 'R$ 850,00', stock: 12 },
                { id: 2, name: 'Armação Vogue Gatinho', cat: 'Óculos de Grau', price: 'R$ 450,00', stock: 5 },
                { id: 3, name: 'Lentes Acuvue Oasys', cat: 'Lentes de Contato', price: 'R$ 180,00', stock: 45 },
                { id: 4, name: 'Óculos de Sol Oakley Holbrook', cat: 'Óculos de Sol', price: 'R$ 720,00', stock: 8 },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-800">{item.name}</td>
                  <td className="p-4 text-gray-600">{item.cat}</td>
                  <td className="p-4 text-gray-800 font-medium">{item.price}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.stock > 10 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                      {item.stock} em estoque
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors mr-2">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
