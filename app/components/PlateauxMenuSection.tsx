'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const menuItems = [
  {
    name: 'Plateau d\u2019ailes de poulet grillées',
    price: '49.99',
    note: '15 AILES DE POULET ENTIÈRES, 2 ACCOMPAGNEMENTS RÉGULIERS, 2 PAINS À L\u2019AIL OU 3 PETITS PAINS PORTUGAIS',
  },
  {
    name: 'Plateau de poulet',
    price: '94.99',
    note: '2 POULETS GRILLÉS ENTIERS BIO, 2 GRANDS ACCOMPAGNEMENTS, 2 PAINS À L\u2019AIL OU 3 PETITS PAINS PORTUGAIS',
  },
  {
    name: 'Plateau de b\u0153uf',
    price: '119.99',
    note: '1 CARRÉ COMPLET DE CÔTES DE BŒUF DE QUALITÉ SUPÉRIEURE, 2 GRANDS ACCOMPAGNEMENTS, 2 PAINS À L\u2019AIL OU 3 PETITS PAINS PORTUGAIS',
  },
  {
    name: 'Plateau signature',
    price: '149.99',
    note: '5 BÂTONNETS DE FROMAGE MOZZARELLA, 1 POULET GRILLÉ ENTIER BIO, 10 AILES DE POULET ENTIÈRES, 10 MINI BROCHETTES DE BŒUF, 2 BROCHETTES ESPETADA GRILLÉES, 3 GRANDS ACCOMPAGNEMENTS, 3 PAINS À L\u2019AIL OU 4 PETITS PAINS PORTUGAIS',
  },
  {
    name: 'Plateau mix',
    price: '159.99',
    note: '1 POULET GRILLÉ ENTIER BIO, 1 CARRÉ COMPLET DE CÔTES DE BŒUF DE QUALITÉ SUPÉRIEURE, 3 GRANDS ACCOMPAGNEMENTS, 3 PAINS À L\u2019AIL OU 4 PETITS PAINS PORTUGAIS',
  },
];

export const PlateauxMenuSection = () => {
  return (
    <section className="relative w-full py-12 md:py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/images/footer-doodle.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 md:gap-14">

        {/* ZONE 1: Both images in ONE container — fade UP */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full flex flex-col md:flex-row items-center justify-center pt-4 pb-4"
        >
          {/* previous1.png — left */}
          <div className="relative w-full md:w-[55%] h-[350px] md:h-[500px] lg:h-[700px] z-10 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/previous1.png"
              alt="Grillado Plateaux - Dish 1"
              fill
              className="object-contain object-bottom md:object-right-bottom scale-110 drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>

          {/* previous2.png — right */}
          <div className="relative w-full md:w-[55%] h-[350px] md:h-[500px] lg:h-[700px] z-0 -mt-[70px] md:mt-0 md:-ml-[14%] lg:-ml-[15%] transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/previous2.png"
              alt="Grillado Plateaux - Dish 2"
              fill
              className="object-contain object-top md:object-left-bottom scale-110 drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </motion.div>

        {/* ZONE 2: Bottom row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">

          {/* LEFT: Heading + Divider + Menu Items — fade LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="mb-10">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 uppercase tracking-wide"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                GRILLADO&apos;S<br />PLATEAUX
              </h2>
              <div className="w-full h-1.5 bg-orange-500 mt-3" />
            </div>

            <div className="flex flex-col gap-5 md:gap-6 w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  {/* Name + dotted leader + price */}
                  <div className="flex items-end w-full gap-2 sm:gap-3">
                    <span className="text-white text-sm md:text-base font-normal whitespace-nowrap">
                      {item.name}
                    </span>
                    <div
                      className="flex-grow mb-1"
                      style={{
                        borderBottom: '2px dotted rgba(255,255,255,0.5)',
                        minWidth: '20px',
                      }}
                    />
                    <span className="text-white text-sm md:text-base font-semibold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  {/* Note — bright red, uppercase */}
                  {item.note && (
                    <p className="text-red-400 text-[10px] md:text-[11px] font-semibold uppercase mt-0.5 tracking-widest leading-relaxed">
                      {item.note}
                    </p>
                  )}

                  {/* Divider between items */}
                  {index < menuItems.length - 1 && (
                    <div
                      className="w-full mt-4 md:mt-5"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Fade-in from right — reserved for visual balance */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex items-center justify-end relative min-h-[400px] md:min-h-[500px] lg:min-h-[580px]"
          >
            <Image
              src="/images/where.png"
              alt="Grillado Plateaux Featured"
              fill
              className="object-contain object-right drop-shadow-2xl scale-110 md:scale-100"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PlateauxMenuSection;
