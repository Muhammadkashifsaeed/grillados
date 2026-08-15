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
    <section className="relative w-full pt-5 lg:pt-12 pb-4 lg:pb-16 bg-[#0a0a0a] ">
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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-4 xl:gap-8">

          {/* Left Column: Menu Items */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col justify-center pr-12 sm:pr-16 md:pr-0 lg:pr-6 xl:pr-10"
          >
            <div className="mb-8 lg:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#fbbc04] font-['Outfit',sans-serif] uppercase tracking-wide leading-snug">
                COMBO DE POULET GRILLÉ GRILLADO’S
              </h2>
              <div className="w-full h-1.5 bg-[#fbbc04] mt-4"></div>
            </div>

            <div className="flex flex-col gap-5 md:gap-6 w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-1.5 sm:gap-2">
                    <span className="text-white text-xs sm:text-sm md:text-base font-normal whitespace-normal shrink">
                      {item.name}
                    </span>
                    <div
                      className="grow mb-1"
                      style={{
                        borderBottom: '2px dotted rgba(255,255,255,0.5)',
                        minWidth: '4px'
                      }}
                    ></div>
                    <span className="text-white text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.note && (
                    <p className="text-red-600 text-xs md:text-xs font-bold uppercase mt-1 tracking-widest leading-relaxed">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}

              {/* Bottom Note */}
              <div className="mt-8 md:mt-10 w-full pt-4 border-t border-white/10">
                <p className="text-[#fbbc04] text-sm md:text-base font-bold uppercase tracking-widest">
                  Ajoutez un 2ᵉ accompagnement pour 4,99
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-stretch justify-center lg:justify-end relative aspect-[4/3] lg:min-h-[500px] pt-8 pb-0 lg:py-12"
          >
            <div className="relative w-full h-full aspect-[4/3] lg:min-h-[500px]">
              {/* Desktop Image */}
              <Image
                src="/images/chcken.png"
                alt="Combo de Poulet Grillé"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-center scale-95 lg:scale-100 drop-shadow-2xl hidden md:block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Mobile Image */}
              <Image
                src="/images/mobile11.jpg"
                alt="Combo de Poulet Grillé Mobile"
                width={1000}
                height={750}
                className="w-full max-w-[500px] mx-auto h-auto object-contain rounded-xl drop-shadow-xl block md:hidden mt-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Fade on the left edge (desktop) */}
              <div className="absolute inset-y-0 left-0 w-24 md:w-32 lg:w-48 bg-linear-to-r from-[#0a0a0a] to-transparent pointer-events-none hidden lg:block"></div>
              {/* Top fade for mobile */}
              <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#0a0a0a] to-transparent pointer-events-none lg:hidden"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ComboDePouletMenuSection;
