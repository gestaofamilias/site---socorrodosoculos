'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const defaultCategories = [
  {
    title: 'Óculos de Sol',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600&h=800',
    link: '/categoria/oculos-de-sol',
    desc: 'Proteção com estilo',
  },
  {
    title: 'Óculos de Grau',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=600&h=800',
    link: '/categoria/oculos-de-grau',
    desc: 'Precisão e conforto',
  },
  {
    title: 'Lentes de Contato',
    image: 'https://images.unsplash.com/photo-1589820572855-f71694f4206e?auto=format&fit=crop&q=80&w=600&h=800',
    link: '/categoria/lentes-de-contato',
    desc: 'Liberdade total',
  },
  {
    title: 'Armações',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=600&h=800',
    link: '/categoria/armacoes',
    desc: 'Estilo e personalidade',
  },
];

export default function CategorySection() {
  const [categories, setCategories] = useState(defaultCategories);

  useEffect(() => {
    const savedCategories = localStorage.getItem('site_categories');
    if (savedCategories) {
      const parsed = JSON.parse(savedCategories);
      const mapped = parsed.map((cat: any) => {
        let img = cat.image || defaultCategories[0].image;
        if (img.includes('loremflickr.com') || img.includes('1620052302324')) {
          if (cat.slug === 'oculos-de-sol') img = defaultCategories[0].image;
          else if (cat.slug === 'oculos-de-grau') img = defaultCategories[1].image;
          else if (cat.slug === 'lentes-de-contato') img = defaultCategories[2].image;
          else if (cat.slug === 'armacoes') img = defaultCategories[3].image;
        }
        return {
          title: cat.name,
          image: img,
          link: `/categoria/${cat.slug}`,
          desc: '',
        };
      });
      setCategories(mapped);
    }
  }, []);

  return (
    <section className="py-16 bg-[#F4F8FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#0057FF] text-xs font-black uppercase tracking-widest mb-2 block">Navegue por categoria</span>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-[#0F172A]">Compre por Categoria</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#0057FF]/15 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0057FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 border-t-2 border-transparent group-hover:border-[#0057FF] transition-colors duration-300">
                <h3 className="font-heading font-black text-[#0F172A] text-lg mb-0.5">{category.title}</h3>
                {category.desc && (
                  <p className="text-gray-500 text-sm mb-3">{category.desc}</p>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0057FF] group-hover:text-[#0F172A] transition-colors duration-200">
                  Ver produtos <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
