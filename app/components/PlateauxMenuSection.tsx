'use client';

import React from 'react';
import MenuVoucherCTA from './MenuVoucherCTA';
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
    <section id="platters" className="relative w-full py-10 lg:py-16 bg-[#0a0a0a]">
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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col lg:flex-col gap-6 md:gap-10 lg:gap-14">


        {/* ZONE 2: Bottom row */}
        <div className="contents lg:flex lg:flex-row items-start justify-between gap-8 lg:gap-12">

          {/* LEFT: Heading + Divider + Menu Items — fade LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex flex-col justify-center order-3 lg:order-none mt-0"
          >
            <div className="mb-10">
              <h2
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#fbbc04] uppercase tracking-wide"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                GRILLADO&apos;S<br />PLATEAUX
              </h2>
              <div className="w-full h-1.5 bg-[#fbbc04] mt-3" />
            </div>

            <div className="flex flex-col gap-5 md:gap-6 w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  {/* Name + dotted leader + price */}
                  <div className="flex items-end w-full gap-1.5 sm:gap-2">
                    <span className="text-white text-sm sm:text-base md:text-lg font-bold whitespace-normal">
                      {item.name}
                    </span>
                    <div
                      className="grow mb-1"
                      style={{
                        borderBottom: '2px dotted rgba(255,255,255,0.5)',
                        minWidth: '4px',
                      }}
                    />
                    <span className="text-white text-sm sm:text-base md:text-lg font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  {/* Note — bright red, uppercase */}
                  {item.note && (
                    <p className="text-red-400 text-xs md:text-sm font-semibold uppercase mt-0.5 tracking-widest leading-relaxed">
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full lg:w-1/2 hidden lg:flex items-center justify-center lg:justify-end relative lg:min-h-[500px] pt-8 pb-0 lg:py-12 mx-auto lg:mt-0 lg:mb-0 pr-12 md:pr-16 lg:pr-[80px]"
          >
            {/* Desktop Image */}
            <Image
              src="/images/10-871x1024-1.png"
              alt="Grillado Plateaux Featured"
              width={1000}
              height={750}
              className="w-full h-auto object-contain object-center lg:object-right drop-shadow-2xl rounded-2xl lg:rounded-none scale-100 lg:scale-100 hidden md:block"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

          </motion.div>

        </div>
                <MenuVoucherCTA />
</div>
    </section>
  );
};

export default PlateauxMenuSection;
