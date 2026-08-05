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
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-4 xl:gap-8">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[50%] flex items-stretch justify-start relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
          >
            <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              <Image 
                src="/images/Frities.png"
                alt="Frites Accompagnements"
                fill
                className="object-contain object-left scale-110 md:scale-125 drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Fade on the right edge (desktop) */}
              <div className="absolute inset-y-0 right-0 w-24 md:w-32 lg:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none hidden lg:block"></div>
              {/* Bottom fade for mobile */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none lg:hidden"></div>
            </div>
          </motion.div>

          {/* Right Column: Menu Items */}
          <motion.div 
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[48%] flex flex-col justify-center lg:pl-6 xl:pl-10"
          >
            <div className="mb-8 lg:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500 font-['Outfit',sans-serif] uppercase tracking-wide">
                ACCOMPAGNEMENTS
              </h2>
              <div className="w-full h-1.5 bg-orange-500 mt-3"></div>
            </div>

            <div className="flex flex-col gap-4 md:gap-5 w-full">
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
                </div>
              ))}

              {/* SEASONAL */}
              <div className="mt-6 md:mt-8 flex flex-col w-full">
                 <h3 className="text-red-600 text-sm md:text-base font-bold uppercase tracking-widest mb-1.5 md:mb-2">
                   SEASONAL
                 </h3>
                 <p className="text-orange-500 text-xl md:text-2xl font-bold font-['Outfit',sans-serif]">
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
