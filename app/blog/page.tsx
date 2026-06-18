import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Como escolher a armação ideal para o seu formato de rosto',
    excerpt: 'Descubra quais modelos de óculos valorizam mais os seus traços e aprenda a escolher a armação perfeita.',
    image: 'https://loremflickr.com/600/400/glasses,face?random=b1',
    category: 'Dicas de Estilo',
    date: '15 Mar 2024',
    author: 'Dra. Camila',
    slug: 'como-escolher-armacao-ideal',
  },
  {
    id: 2,
    title: 'Luz Azul: O que é e por que você deve se proteger',
    excerpt: 'Entenda os efeitos da luz emitida por telas de computadores e celulares e como as lentes com filtro azul podem ajudar.',
    image: 'https://loremflickr.com/600/400/computer,glasses?random=b2',
    category: 'Saúde Ocular',
    date: '10 Mar 2024',
    author: 'Dr. Roberto',
    slug: 'luz-azul-o-que-e',
  },
  {
    id: 3,
    title: 'Mitos e verdades sobre o uso de lentes de contato',
    excerpt: 'Dormir de lente faz mal? Posso entrar na piscina? Esclarecemos as principais dúvidas sobre lentes de contato.',
    image: 'https://loremflickr.com/600/400/contactlenses?random=b3',
    category: 'Lentes de Contato',
    date: '05 Mar 2024',
    author: 'Dra. Camila',
    slug: 'mitos-e-verdades-lentes-de-contato',
  },
  {
    id: 4,
    title: 'Tendências de óculos de sol para o verão 2024',
    excerpt: 'Fique por dentro dos modelos que vão bombar na próxima estação e escolha o seu novo óculos de sol.',
    image: 'https://loremflickr.com/600/400/sunglasses,summer?random=b4',
    category: 'Moda e Tendências',
    date: '28 Fev 2024',
    author: 'Equipe de Estilo',
    slug: 'tendencias-oculos-de-sol-verao-2024',
  },
  {
    id: 5,
    title: 'Como limpar seus óculos corretamente sem riscar as lentes',
    excerpt: 'Aprenda o passo a passo para higienizar seus óculos de grau e de sol de forma segura e eficiente.',
    image: 'https://loremflickr.com/600/400/glasses,cleaning?random=b5',
    category: 'Cuidados',
    date: '20 Fev 2024',
    author: 'Equipe Técnica',
    slug: 'como-limpar-oculos-corretamente',
  },
  {
    id: 6,
    title: 'Sinais de que você precisa usar óculos de grau',
    excerpt: 'Dores de cabeça frequentes? Visão embaçada? Conheça os principais sintomas que indicam a necessidade de óculos.',
    image: 'https://loremflickr.com/600/400/eyeglasses,reading?random=b6',
    category: 'Saúde Ocular',
    date: '15 Fev 2024',
    author: 'Dr. Roberto',
    slug: 'sinais-que-precisa-usar-oculos',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-black mb-4">Blog Socorro do Óculos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dicas de saúde ocular, tendências de moda, guias de compra e muito mais. Fique por dentro de tudo sobre o universo da visão.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col lg:flex-row group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
              <Image
                src="https://loremflickr.com/800/600/glasses,fashion?random=bf1"
                alt="Post em destaque"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-brand-yellow text-brand-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Destaque
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 20 Mar 2024</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> Dr. Roberto</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-brand-black mb-4 group-hover:text-brand-yellow transition-colors">
                Tudo o que você precisa saber sobre lentes multifocais
              </h2>
              <p className="text-gray-600 text-lg mb-8 line-clamp-3">
                As lentes multifocais (ou progressivas) são a solução ideal para quem tem presbiopia (vista cansada). Elas permitem enxergar de perto, de longe e em distâncias intermediárias com o mesmo óculos. Entenda como funcionam e o período de adaptação.
              </p>
              <Link href="/blog/lentes-multifocais" className="inline-flex items-center gap-2 text-brand-black font-bold hover:text-brand-yellow transition-all duration-200 hover:translate-x-1 w-fit">
                Ler artigo completo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Todos', 'Saúde Ocular', 'Dicas de Estilo', 'Lentes de Contato', 'Moda e Tendências', 'Cuidados'].map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95 ${
                index === 0
                  ? 'bg-brand-black text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-yellow hover:text-brand-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300 flex flex-col">
              <Link href={`/blog/${post.slug}`} className="relative h-56 overflow-hidden block">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-heading text-xl font-bold text-brand-black mb-3 line-clamp-2 group-hover:text-brand-yellow transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-brand-black font-bold text-sm hover:text-brand-yellow transition-all duration-200 hover:translate-x-1 mt-auto">
                  Ler mais <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-white border-2 border-brand-black text-brand-black font-bold px-8 py-3 rounded-lg hover:bg-brand-black hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
            Carregar mais artigos
          </button>
        </div>
      </div>
    </div>
  );
}
