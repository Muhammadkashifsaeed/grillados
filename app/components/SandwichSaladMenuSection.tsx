'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeLeftItem } from '../utils/animations';

export const SandwichSaladMenuSection = () => {
  return (
    <section id="sandwich-salad" className="relative w-full py-4 lg:py-8 bg-[#0a0a0a]">
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

      <div className="relative z-10 max-w-7xl mx-auto w-full pl-4 pr-[65px] md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 w-full items-stretch">

          {/* Left Column: Menu Items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-col justify-start"
          >
            {/* CATEGORY 1: SANDWICH, WRAPS & PITA */}
            <motion.div variants={fadeLeftItem} className="mb-6 lg:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#FAAE40] font-['Outfit',sans-serif] uppercase tracking-wide leading-tight drop-shadow-sm mb-4">
                SANDWICH, WRAPS & PITA
              </h2>
              <div className="w-full max-w-50 md:max-w-62.5 lg:max-w-80 h-1.5 bg-[#FAAE40] mt-4"></div>
            </motion.div>

            <div className="flex flex-col gap-6 md:gap-8 w-full mb-16">
              {/* Chicken Item */}
              <motion.div variants={fadeLeftItem} className="flex flex-col w-full">
                <div className="flex items-end w-full gap-1.5 sm:gap-2">
                  <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-normal leading-snug">Chicken</span>
                  <div className="grow mb-1" style={{ borderBottom: '2px dotted rgba(255,255,255,0.5)', minWidth: '4px' }}></div>
                  <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-nowrap leading-snug">11.99</span>
                </div>
                {/* Combo row */}
                <div className="flex items-end w-full gap-2 sm:gap-3 mt-2 md:mt-3">
                  <span className="text-red-500 text-xs md:text-sm font-bold uppercase tracking-widest whitespace-nowrap">COMBO</span>
                  <div className="grow mb-1" style={{ borderBottom: '2px dotted rgba(255,255,255,0.3)', minWidth: '4px' }}></div>
                  <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-nowrap leading-snug">6.00 <span className="text-gray-300 font-normal text-xs md:text-sm ml-1">(1 SIDE + POP)</span></span>
                </div>
              </motion.div>

              {/* Vegetarian Item */}
              <motion.div variants={fadeLeftItem} className="flex flex-col w-full">
                <div className="flex items-end w-full gap-1.5 sm:gap-2">
                  <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-normal leading-snug">Vegetarian</span>
                  <div className="grow mb-1" style={{ borderBottom: '2px dotted rgba(255,255,255,0.5)', minWidth: '4px' }}></div>
                  <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-nowrap leading-snug">11.99</span>
                </div>
                {/* Combo row */}
                <div className="flex items-end w-full gap-2 sm:gap-3 mt-2 md:mt-3">
                  <span className="text-red-500 text-xs md:text-sm font-bold uppercase tracking-widest whitespace-nowrap">COMBO</span>
                  <div className="grow mb-1" style={{ borderBottom: '2px dotted rgba(255,255,255,0.3)', minWidth: '4px' }}></div>
                  <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-nowrap leading-snug">6.00 <span className="text-gray-300 font-normal text-xs md:text-sm ml-1">(1 SIDE + POP)</span></span>
                </div>
              </motion.div>
            </div>

            {/* CATEGORY 2: SALADS */}
            <motion.div variants={fadeLeftItem} className="mb-4 lg:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#FAAE40] font-['Outfit',sans-serif] uppercase tracking-wide leading-tight drop-shadow-sm mb-4">
                SALADS
              </h2>
              <div className="w-full max-w-50 md:max-w-62.5 lg:max-w-80 h-1.5 bg-[#FAAE40] mt-4"></div>
            </motion.div>

            <div className="flex flex-col gap-4 md:gap-5 w-full">
              {/* Salad Items */}
              {[
                { name: 'Greek Salad', price: '7.99' },
                { name: 'Spring Salad', price: '7.99' },
                { name: 'Cesar Salad.', price: '7.99' }
              ].map((item, index) => (
                <motion.div variants={fadeLeftItem} key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-1.5 sm:gap-2">
                    <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-normal leading-snug">{item.name}</span>
                    <div className="grow mb-1" style={{ borderBottom: '2px dotted rgba(255,255,255,0.5)', minWidth: '4px' }}></div>
                    <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-nowrap leading-snug">{item.price}</span>
                  </div>
                </motion.div>
              ))}

              {/* Additional Options */}
              <motion.div variants={fadeLeftItem} className="mt-8 flex flex-col w-full pt-4 border-t border-white/10">
                <p className="text-white text-sm md:text-base font-bold uppercase tracking-wider mb-1">
                  Salads LARGE 9.99 - ADD
                </p>
                <p className="text-[#FAAE40] text-lg md:text-xl font-bold font-['Outfit',sans-serif]">
                  GRILLED CHICKEN 5.99
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
            className="w-full flex items-start justify-center relative lg:min-h-[500px] mx-auto"
          >
            <div className="relative w-full h-full lg:min-h-[500px]">
              {/* Desktop Image */}
              <Image
                src="/images/poulet.png"
                alt="Poulet"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-top scale-90 xl:scale-100 origin-top hidden md:block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Mobile Image */}
              <Image
                src="/images/mobile12.jpg"
                alt="Poulet Mobile"
                width={1000}
                height={750}
                className="w-full max-w-[500px] mx-auto h-auto object-contain rounded-xl drop-shadow-2xl block md:hidden mt-4 mb-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SandwichSaladMenuSection;
