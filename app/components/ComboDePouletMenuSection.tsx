'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeLeftItem } from '../utils/animations';

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
    <section id="combos" className="relative w-full py-6 lg:pt-8 lg:pb-48 bg-[#0a0a0a]">
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
        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between gap-4 lg:gap-8 w-full lg:pr-[80px]">

          {/* Left Column: Menu Items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 flex flex-col justify-start pr-14 sm:pr-16 md:pr-16 lg:pr-0"
          >
            <motion.div variants={fadeLeftItem} className="mb-6 lg:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#FAAE40] font-['Outfit',sans-serif] uppercase tracking-wide leading-tight drop-shadow-sm mb-4">
                COMBO DE<br />POULET
              </h2>
              <div className="w-full max-w-40 md:max-w-48 lg:max-w-64 h-1.5 bg-[#FAAE40] mt-4"></div>
            </motion.div>

            <div className="flex flex-col gap-5 md:gap-6 w-full">
              {menuItems.map((item, index) => (
                <motion.div variants={fadeLeftItem} key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-1.5 sm:gap-2">
                    <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-normal leading-snug">
                      {item.name}
                    </span>
                    <div
                      className="grow mb-1"
                      style={{
                        borderBottom: '2px dotted rgba(255,255,255,0.5)',
                        minWidth: '4px'
                      }}
                    ></div>
                    <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-nowrap leading-snug">
                      {item.price}
                    </span>
                  </div>
                  {item.note && (
                    <p className="text-red-600 text-xs md:text-xs font-bold uppercase mt-1 tracking-widest leading-relaxed">
                      {item.note}
                    </p>
                  )}
                </motion.div>
              ))}

              {/* Bottom Note */}
              <motion.div variants={fadeLeftItem} className="mt-6 md:mt-10 w-full pt-4 border-t border-white/10">
                <p className="text-[#FAAE40] text-sm md:text-base font-bold uppercase tracking-widest">
                  Ajoutez un 2ᵉ accompagnement pour 4,99
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-start justify-center lg:justify-end relative aspect-[4/3] lg:min-h-[500px] pt-0 lg:pt-0 pb-0 lg:pb-32 pr-12 md:pr-16 lg:pr-0"
          >
            <div className="relative w-full h-full aspect-[4/3] lg:min-h-[500px]">
              {/* Desktop Image */}
              <Image
                src="/images/chcken.png"
                alt="Combo de Poulet Grillé"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-top scale-95 lg:scale-[1.15] origin-top hidden md:block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Mobile Image */}
              <Image
                src="/images/mobile11.jpg"
                alt="Combo de Poulet Grillé Mobile"
                width={1000}
                height={750}
                className="w-full max-w-[500px] mx-auto h-auto object-contain rounded-xl drop-shadow-2xl block md:hidden mt-4 mb-2"
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
