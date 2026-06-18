'use client';

import { useState, useEffect, useRef } from 'react';
import { Plus, Search, Edit, Trash2, X, Image as ImageIcon, Upload } from 'lucide-react';

const defaultCategories = [
  { id: 1, name: 'Óculos de Sol', slug: 'oculos-de-sol', count: 45, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600&h=800' },
  { id: 2, name: 'Óculos de Grau', slug: 'oculos-de-grau', count: 32, image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=600&h=800' },
  { id: 3, name: 'Lentes de Contato', slug: 'lentes-de-contato', count: 18, image: 'https://images.unsplash.com/photo-1589820572855-f71694f4206e?auto=format&fit=crop&q=80&w=600&h=800' },
  { id: 4, name: 'Armações', slug: 'armacoes', count: 29, image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=600&h=800' },
];

export default function AdminCategorias() {
  const [categories, setCategories] = useState(defaultCategories);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedCategories = localStorage.getItem('site_categories');
    if (savedCategories) {
      const parsed = JSON.parse(savedCategories);
      // Force update old loremflickr images to new unsplash ones
      const updated = parsed.map((cat: any) => {
        if (cat.image && (cat.image.includes('loremflickr.com') || cat.image.includes('1620052302324'))) {
          if (cat.slug === 'oculos-de-sol') cat.image = 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600&h=800';
          else if (cat.slug === 'oculos-de-grau') cat.image = 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=600&h=800';
          else if (cat.slug === 'lentes-de-contato') cat.image = 'https://images.unsplash.com/photo-1589820572855-f71694f4206e?auto=format&fit=crop&q=80&w=600&h=800';
          else if (cat.slug === 'armacoes') cat.image = 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=600&h=800';
        }
        return cat;
      });
      setCategories(updated);
      localStorage.setItem('site_categories', JSON.stringify(updated));
    }
  }, []);

  const saveCategories = (newCategories: any[]) => {
    setCategories(newCategories);
    localStorage.setItem('site_categories', JSON.stringify(newCategories));
  };

  const handleEditClick = (category: any) => {
    setEditingCategory({ ...category });
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setEditingCategory(null);
  };

  const handleSaveCategory = () => {
    if (!editingCategory) return;
    
    const newCategories = categories.map(cat => 
      cat.id === editingCategory.id ? editingCategory : cat
    );
    
    saveCategories(newCategories);
    handleCloseModal();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingCategory({ ...editingCategory, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Categorias</h1>
        <button className="bg-brand-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
          <Plus className="w-4 h-4" /> Adicionar Categoria
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Buscar categorias..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500">
                <th className="p-4 font-medium">Imagem</th>
                <th className="p-4 font-medium">Nome da Categoria</th>
                <th className="p-4 font-medium">Slug</th>
                <th className="p-4 font-medium">Qtd. Produtos</th>
                <th className="p-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <ImageIcon className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </td>
                  <td className="p-4 font-medium text-gray-800">{item.name}</td>
                  <td className="p-4 text-gray-500">/{item.slug}</td>
                  <td className="p-4 text-gray-800">{item.count}</td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleEditClick(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors mr-2"
                      title="Editar categoria"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Excluir categoria">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Edição */}
      {isEditModalOpen && editingCategory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h2 className="font-bold text-lg text-gray-800">Editar Categoria</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700 p-1 rounded-md hover:bg-gray-200 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Categoria</label>
                  <input 
                    type="text" 
                    value={editingCategory.name}
                    onChange={(e) => setEditingCategory({...editingCategory, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                  <input 
                    type="text" 
                    value={editingCategory.slug}
                    onChange={(e) => setEditingCategory({...editingCategory, slug: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Imagem da Categoria</label>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center">
                    {editingCategory.image ? (
                      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={editingCategory.image} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-48 mb-4 rounded-lg bg-gray-50 flex flex-col items-center justify-center text-gray-400">
                        <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                        <span className="text-sm">Nenhuma imagem</span>
                      </div>
                    )}
                    
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                    />
                    
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      {editingCategory.image ? 'Trocar Imagem' : 'Fazer Upload'}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Recomendado: Imagem vertical (proporção 3:4), min 600x800px.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
              <button 
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancelar
              </button>
              <button 
                onClick={handleSaveCategory}
                className="px-4 py-2 bg-brand-yellow text-brand-black rounded-lg hover:bg-yellow-400 transition-colors font-bold"
              >
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
