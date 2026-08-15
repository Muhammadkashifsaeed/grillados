'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Frites Peri', price: '5.99' },
  { name: 'Frites masala', price: '5.99' },
  { name: 'Quartiers de pomme de terre', price: '5.99' },
  { name: 'Rondelles d’oignon', price: '5.99' },
  { name: 'Légumes grillés mélangés', price: '5.99' },
  { name: 'Salade de chou crémeuse', price: '5.99' },
  { name: 'Riz épicé', price: '5.99' },
  { name: 'Maïs grillé', price: '5.99' }
];

export const AccompagnementsMenuSection = () => {
  return (
    <section className="relative w-full py-10 lg:py-16 bg-[#0a0a0a]">
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
        <div className="flex flex-col-reverse lg:flex-row items-stretch justify-between gap-8 lg:gap-4 xl:gap-8">

          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-center justify-center relative lg:min-h-[500px] pt-8 lg:pt-0 md:mb-16 lg:mb-0"
          >
            <div className="relative w-full h-full lg:min-h-[500px]">
              {/* Desktop Image */}
              <Image
                src="/images/Frities.png"
                alt="Frites Accompagnements"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-left scale-100 lg:scale-100 drop-shadow-2xl hidden md:block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Mobile Image */}
              <Image
                src="/images/mobile10.jpg"
                alt="Frites Accompagnements Mobile"
                width={1000}
                height={750}
                className="w-full max-w-[500px] mx-auto h-auto object-contain rounded-xl drop-shadow-2xl block md:hidden mt-8 mb-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Fade on the right edge (desktop) */}
              <div className="absolute inset-y-0 right-0 w-24 md:w-32 lg:w-48 bg-linear-to-l from-[#0a0a0a] to-transparent pointer-events-none hidden lg:block"></div>
            </div>
          </motion.div>

          {/* Right Column: Menu Items */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="mb-8 lg:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#fbbc04] font-['Outfit',sans-serif] uppercase tracking-wide leading-tight drop-shadow-sm mb-4">
                ACCOMPAGNEMENTS
              </h2>
              <div className="w-full h-1.5 bg-[#fbbc04] mt-3"></div>
            </div>

            <div className="flex flex-col gap-4 md:gap-5 w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-1.5 sm:gap-2">
                    <span className="text-white text-sm sm:text-base md:text-lg font-bold whitespace-normal">
                      {item.name}
                    </span>
                    <div
                      className="grow mb-1"
                      style={{
                        borderBottom: '2px dotted rgba(255,255,255,0.5)',
                        minWidth: '4px'
                      }}
                    ></div>
                    <span className="text-white text-sm sm:text-base md:text-lg font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}

              {/* SEASONAL */}
              <div className="mt-6 md:mt-8 flex flex-col w-full">
                <h3 className="text-red-600 text-sm md:text-base font-bold uppercase tracking-widest mb-1.5 md:mb-2">
                  SEASONAL
                </h3>
                <p className="text-[#fbbc04] text-xl md:text-2xl font-bold font-['Outfit',sans-serif]">
                  Sides Large 8.99 & Sharable 12.99
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AccompagnementsMenuSection;
