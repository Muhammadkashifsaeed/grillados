'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeLeftItem } from '../utils/animations';

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
    <section id="plateaux" className="relative w-full py-4 lg:py-8 bg-[#0a0a0a]">
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

      <div className="relative z-10 max-w-7xl mx-auto w-full pl-4 pr-[65px] md:px-6 lg:px-8 flex flex-col lg:flex-col gap-4 md:gap-10 lg:gap-14">


        {/* ZONE 2: Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 w-full items-stretch">

          {/* LEFT: Heading + Divider + Menu Items — fade LEFT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full flex flex-col justify-start order-3 lg:order-none mt-0"
          >
            <motion.div variants={fadeLeftItem} className="mb-6 lg:mb-10">
              <h2
                className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold text-[#FAAE40] uppercase tracking-wide"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                GRILLADO&apos;S<br />PLATEAUX
              </h2>
              <div className="w-full h-1.5 bg-[#FAAE40] mt-3" />
            </motion.div>

            <div className="flex flex-col gap-5 md:gap-6 w-full">
              {menuItems.map((item, index) => (
                <motion.div variants={fadeLeftItem} key={index} className="flex flex-col w-full">
                  {/* Name + dotted leader + price */}
                  <div className="flex items-end w-full gap-1.5 sm:gap-2">
                    <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-normal leading-snug">
                      {item.name}
                    </span>
                    <div
                      className="grow mb-1"
                      style={{
                        borderBottom: '2px dotted rgba(255,255,255,0.5)',
                        minWidth: '4px',
                      }}
                    ></div>
                    <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-nowrap leading-snug">
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Fade-in from right — reserved for visual balance */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full hidden md:flex items-start justify-center lg:justify-end relative lg:min-h-[500px] mx-auto"
          >
            {/* Desktop Image */}
            <Image
              src="/images/10-871x1024-1.png"
              alt="Grillado Plateaux Featured"
              width={1000}
              height={750}
              className="w-full h-auto object-contain object-top lg:object-right-top drop-shadow-2xl rounded-2xl lg:rounded-none scale-95 xl:scale-100 origin-top hidden md:block"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PlateauxMenuSection;
