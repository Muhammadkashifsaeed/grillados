'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const SandwichSaladMenuSection = () => {
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
            {/* CATEGORY 1: SANDWICH, WRAPS & PITA */}
            <div className="mb-8 lg:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500 font-['Outfit',sans-serif] uppercase tracking-wide leading-snug">
                SANDWICH, WRAPS & PITA
              </h2>
              <div className="w-full h-1.5 bg-orange-500 mt-4"></div>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 w-full mb-16">
              {/* Chicken Item */}
              <div className="flex flex-col w-full">
                <div className="flex items-end w-full gap-2 sm:gap-3">
                  <span className="text-white text-sm md:text-base font-normal whitespace-nowrap">Chicken</span>
                  <div className="flex-grow mb-1" style={{ borderBottom: '2px dotted rgba(255,255,255,0.5)', minWidth: '20px' }}></div>
                  <span className="text-white text-sm md:text-base font-semibold whitespace-nowrap">11.99</span>
                </div>
                {/* Combo row */}
                <div className="flex items-end w-full gap-2 sm:gap-3 mt-2 md:mt-3">
                  <span className="text-red-500 text-xs md:text-sm font-bold uppercase tracking-widest whitespace-nowrap">COMBO</span>
                  <div className="flex-grow mb-1" style={{ borderBottom: '2px dotted rgba(255,255,255,0.3)', minWidth: '20px' }}></div>
                  <span className="text-white text-sm md:text-base font-semibold whitespace-nowrap">6.00 <span className="text-gray-300 font-normal text-xs md:text-sm ml-1">(1 SIDE + POP)</span></span>
                </div>
              </div>

              {/* Vegetarian Item */}
              <div className="flex flex-col w-full">
                <div className="flex items-end w-full gap-2 sm:gap-3">
                  <span className="text-white text-sm md:text-base font-normal whitespace-nowrap">Vegetarian</span>
                  <div className="flex-grow mb-1" style={{ borderBottom: '2px dotted rgba(255,255,255,0.5)', minWidth: '20px' }}></div>
                  <span className="text-white text-sm md:text-base font-semibold whitespace-nowrap">11.99</span>
                </div>
                {/* Combo row */}
                <div className="flex items-end w-full gap-2 sm:gap-3 mt-2 md:mt-3">
                  <span className="text-red-500 text-xs md:text-sm font-bold uppercase tracking-widest whitespace-nowrap">COMBO</span>
                  <div className="flex-grow mb-1" style={{ borderBottom: '2px dotted rgba(255,255,255,0.3)', minWidth: '20px' }}></div>
                  <span className="text-white text-sm md:text-base font-semibold whitespace-nowrap">6.00 <span className="text-gray-300 font-normal text-xs md:text-sm ml-1">(1 SIDE + POP)</span></span>
                </div>
              </div>
            </div>

            {/* CATEGORY 2: SALADS */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500 font-['Outfit',sans-serif] uppercase tracking-wide leading-snug">
                SALADS
              </h2>
              <div className="w-full h-1.5 bg-orange-500 mt-4"></div>
            </div>

            <div className="flex flex-col gap-4 md:gap-5 w-full">
              {/* Salad Items */}
              {[
                { name: 'Greek Salad', price: '7.99' },
                { name: 'Spring Salad', price: '7.99' },
                { name: 'Cesar Salad.', price: '7.99' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-2 sm:gap-3">
                    <span className="text-white text-sm md:text-base font-normal whitespace-nowrap">{item.name}</span>
                    <div className="flex-grow mb-1" style={{ borderBottom: '2px dotted rgba(255,255,255,0.5)', minWidth: '20px' }}></div>
                    <span className="text-white text-sm md:text-base font-semibold whitespace-nowrap">{item.price}</span>
                  </div>
                </div>
              ))}

              {/* Additional Options */}
              <div className="mt-8 flex flex-col w-full pt-4 border-t border-white/10">
                 <p className="text-white text-sm md:text-base font-bold uppercase tracking-wider mb-1">
                   Salads LARGE 9.99 - ADD
                 </p>
                 <p className="text-orange-500 text-lg md:text-xl font-bold font-['Outfit',sans-serif]">
                   GRILLED CHICKEN 5.99
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
            className="w-full lg:w-[50%] flex items-stretch justify-end relative min-h-[450px] md:min-h-[550px] lg:min-h-[700px]"
          >
            <div className="relative w-full h-full min-h-[450px] md:min-h-[550px] lg:min-h-[700px]">
              <Image 
                src="/images/poulet.png"
                alt="Poulet"
                fill
                className="object-contain object-right scale-105 md:scale-110 drop-shadow-2xl"
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
