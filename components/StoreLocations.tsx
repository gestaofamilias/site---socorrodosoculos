'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';

const stores = [
  {
    city: 'São José dos Pinhais',
    state: 'PR',
    address: 'Rua Dona Izabel A Redentora, 1984 - Centro',
    hours: 'Seg a Sáb: 09h às 18h',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=600&h=500',
  },
  {
    city: 'Araucária',
    state: 'PR',
    address: 'Av. Vitório do Amaral, 1200 - Centro',
    hours: 'Seg a Sáb: 09h às 18h',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=600&h=500',
  },
  {
    city: 'Itapema',
    state: 'SC',
    address: 'Av. Nereu Ramos, 850 - Centro',
    hours: 'Seg a Sáb: 09h às 19h',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600&h=500',
  },
];

export default function StoreLocations() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-[#0057FF] text-xs font-black uppercase tracking-widest mb-2 block">Onde estamos</span>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-[#0F172A] mb-3">Nossas Lojas</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Visite uma das nossas unidades e conte com atendimento especializado pessoalmente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <motion.div
              key={store.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#0057FF]/20 transition-shadow duration-300 h-80"
            >
              <Image
                src={store.image}
                alt={`Loja em ${store.city}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0057FF]/30 to-transparent" />

              {/* Pulsing pin badge */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-5 right-5 w-11 h-11 bg-[#FFD400] rounded-full flex items-center justify-center shadow-lg"
              >
                <MapPin className="w-5 h-5 text-[#0F172A]" />
              </motion.div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="inline-block bg-[#FFD400] text-[#0F172A] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
                  {store.state}
                </span>
                <h3 className="font-heading font-black text-white text-2xl mb-2 leading-tight">
                  {store.city}
                </h3>
                <p className="text-blue-100 text-sm mb-2 flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#FFD400]" />
                  {store.address}
                </p>
                <p className="text-blue-100/80 text-xs mb-4 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 flex-shrink-0 text-[#FFD400]" />
                  {store.hours}
                </p>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Ver no mapa <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
