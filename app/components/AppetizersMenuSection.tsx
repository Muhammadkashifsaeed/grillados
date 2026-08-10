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
    <section className="relative w-full pt-5 lg:pt-12 pb-0 bg-[#0a0a0a] overflow-x-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Menu Items */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col pr-12 sm:pr-16 md:pr-0"
          >
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#fbbc04] font-['Outfit',sans-serif] uppercase tracking-wide">
                APPETIZERS
              </h2>
              <div className="w-full h-1.5 bg-[#fbbc04] mt-3"></div>
            </div>

            <div className="flex flex-col gap-4 md:gap-5 w-full">
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
                    <p className="text-red-400 text-xs md:text-sm font-semibold uppercase mt-0.5 tracking-widest">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative lg:min-h-[500px] py-8 lg:py-12 mx-auto lg:mt-0"
          >
            {/* Desktop Image */}
            <Image 
              src="/images/onpen.png"
              alt="Open Appetizers"
              width={1000}
              height={750}
              className="w-full h-auto object-contain object-center drop-shadow-2xl rounded-xl lg:rounded-none scale-100 lg:scale-125 hidden md:block"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Mobile Image */}
            <Image 
              src="/images/mobile1.jpg"
              alt="Mobile Appetizers"
              width={1000}
              height={750}
              className="w-[85%] max-w-[300px] mx-auto h-auto object-contain rounded-xl drop-shadow-xl block md:hidden"
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
