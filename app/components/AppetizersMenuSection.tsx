'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Portuguese Bun', price: '3.99', note: 'SERVED WITH BUTTER' },
  { name: 'Pita Bread', price: '3.50' },
  { name: 'Garlic Bread', price: '4.99' },
  { name: 'Hummus & Pita', price: '8.99' },
  { name: '5 Mozzarella Cheese Sticks', price: '11.99', note: 'WITH MARINARA SAUCE' },
  { name: '5 Whole Chicken Wings', price: '14.99' },
  { name: '10 Mini Beef Kebabs', price: '19.99' },
  { name: 'Veggie Nachos', price: '18.99' },
  { name: 'Grilled Chicken Nachos', price: '19.99', note: 'ADD EXTRA CHICKEN FOR 4.99' },
];

export const AppetizersMenuSection = () => {
  return (
    <section className="relative w-full py-12 md:py-20 bg-[#0a0a0a] overflow-hidden">
      {/* 
        Background with subtle food outline pattern. 
        Update the URL if you have a specific pattern image.
      */}
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Menu Items */}
          <motion.div 
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 font-['Outfit',sans-serif] uppercase tracking-wide">
                APPETIZERS
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
                  {item.note && (
                    <p className="text-red-400 text-[10px] md:text-[11px] font-semibold uppercase mt-0.5 tracking-widest">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-center justify-end relative min-h-[400px] md:min-h-[500px] lg:min-h-[580px]"
          >
            <Image 
              src="/images/onpen.png"
              alt="Open Appetizers"
              fill
              className="object-contain object-right drop-shadow-2xl scale-110 md:scale-100"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AppetizersMenuSection;
