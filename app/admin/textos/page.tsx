'use client';

import { Save, Search, Upload, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function AdminTextos() {
  const [bannerImage, setBannerImage] = useState('https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1920&h=800');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('site_banner_image');
    if (savedImage && !savedImage.includes('loremflickr.com')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBannerImage(savedImage);
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setBannerImage(base64String);
        localStorage.setItem('site_banner_image', base64String);
        alert('Imagem do banner atualizada com sucesso!');
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Aparência e Textos</h1>
        <button className="bg-brand-yellow text-brand-black font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-400 transition-colors">
          <Save className="w-4 h-4" /> Salvar Todas as Alterações
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-200">
          <div className="relative w-full md:w-1/2">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Buscar seção ou texto..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Section: Hero */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Página Inicial - Banner Principal</h2>
            <div className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Imagem de Fundo do Banner</label>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="relative w-full sm:w-64 h-32 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 flex-shrink-0">
                    <Image
                      src={bannerImage}
                      alt="Preview do Banner"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-2">
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageUpload} 
                        accept="image/jpeg, image/png, image/webp" 
                        className="hidden" 
                      />
                      <button 
                        onClick={triggerFileInput}
                        className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm font-medium"
                      >
                        <Upload className="w-4 h-4" /> Enviar Nova Imagem
                      </button>
                      <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm font-medium">
                        <ImageIcon className="w-4 h-4" /> Escolher da Galeria
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Tamanho recomendado: 1920x1080 pixels. Formatos aceitos: JPG, PNG, WEBP. Tamanho máximo: 2MB.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: About */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Página Sobre - Nossa História</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Título da Seção</label>
                <input type="text" defaultValue="Nossa História" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Texto Principal</label>
                <textarea rows={4} defaultValue="A Socorro do Óculos nasceu com a missão de democratizar o acesso à saúde ocular, oferecendo produtos de alta qualidade com preços justos e atendimento humanizado." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow resize-none"></textarea>
              </div>
            </div>
          </div>
          
          {/* Section: Footer */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Rodapé</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição Curta</label>
                <textarea rows={2} defaultValue="A sua ótica online de confiança. Encontre os melhores óculos de grau, sol e lentes de contato com qualidade e preço justo." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow resize-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Endereço Físico</label>
                <input type="text" defaultValue="Rua Dona Izabel A Redentora, 1984 - Centro, São José dos Pinhais - PR, 83005-010" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
