'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const menuItems = [
  { name: '¼ cuisse de poulet grillée', price: '15.99', note: '(CUISSE + HAUT DE CUISSE)' },
  { name: '¼ poitrine de poulet grillée', price: '16.99', note: '(POITRINE + AILES)' },
  { name: '6 ailes de poulet entières', price: '18.99' },
  { name: 'Doubles kebabs', price: '16.99' },
  { name: 'Poitrine de poulet grillée désossée', price: '19.99', note: '(NOUVEL ARTICLE)' },
  { name: 'Doubles cuisses', price: '20.99' },
  { name: 'Demi-poulet', price: '21.99' }
];

export const ComboDePouletMenuSection = () => {
  return (
    <section className="relative w-full py-12 md:py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background with subtle food outline pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/images/footer-doodle.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-4 xl:gap-8">
          
          {/* Left Column: Menu Items */}
          <motion.div 
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[48%] flex flex-col justify-center lg:pr-6 xl:pr-10"
          >
            <div className="mb-8 lg:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500 font-['Outfit',sans-serif] uppercase tracking-wide leading-snug">
                COMBO DE POULET GRILLÉ GRILLADO’S
              </h2>
              <div className="w-full h-1.5 bg-orange-500 mt-4"></div>
            </div>

            <div className="flex flex-col gap-5 md:gap-6 w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-2 sm:gap-3">
                    <span className="text-white text-sm md:text-base font-normal whitespace-nowrap">
                      {item.name}
                    </span>
                    <div
                      className="flex-grow mb-1"
                      style={{
                        borderBottom: '2px dotted rgba(255,255,255,0.5)',
                        minWidth: '20px'
                      }}
                    ></div>
                    <span className="text-white text-sm md:text-base font-semibold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.note && (
                    <p className="text-red-600 text-[10px] md:text-xs font-bold uppercase mt-1 tracking-widest leading-relaxed">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}

              {/* Bottom Note */}
              <div className="mt-8 md:mt-10 w-full pt-4 border-t border-white/10">
                 <p className="text-orange-500 text-sm md:text-base font-bold uppercase tracking-widest">
                   Ajoutez un 2ᵉ accompagnement pour 4,99
                 </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[50%] flex items-stretch justify-end relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
          >
            <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              <Image 
                src="/images/chcken.png"
                alt="Combo de Poulet Grillé"
                fill
                className="object-contain object-right scale-110 md:scale-125 drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Fade on the left edge (desktop) */}
              <div className="absolute inset-y-0 left-0 w-24 md:w-32 lg:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none hidden lg:block"></div>
              {/* Top fade for mobile */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none lg:hidden"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ComboDePouletMenuSection;
