'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeLeftItem } from '../utils/animations';
import MenuVoucherCTA from './MenuVoucherCTA';

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
    <section id="appetizers" className="relative w-full py-6 lg:pt-8 lg:pb-48 bg-[#0a0a0a]">
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
                APPETIZERS
              </h2>
              <div className="w-full h-1.5 bg-[#FAAE40] mt-3"></div>
            </motion.div>

            <div className="flex flex-col gap-6 md:gap-8 w-full">
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
                    <p className="text-red-400 text-xs md:text-sm font-semibold uppercase mt-0.5 tracking-widest">
                      {item.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-start justify-center lg:justify-end relative lg:min-h-[500px] pt-0 lg:pt-0 pb-0 lg:pb-32 mx-auto lg:mt-0 pr-12 md:pr-16 lg:pr-0"
          >
            {/* Desktop Image */}
            <Image
              src="/images/onpen.png"
              alt="Open Appetizers"
              width={1000}
              height={750}
              className="w-full h-auto object-contain object-top drop-shadow-2xl rounded-xl lg:rounded-none scale-100 lg:scale-[1.15] origin-top hidden md:block"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Mobile Layout */}
            <div className="w-full max-w-[500px] mx-auto flex md:hidden flex-col gap-4 mt-4 mb-2">
              {/* Top Image: Mobile 1 */}
              <div className="relative w-full aspect-[4/3] drop-shadow-2xl">
                <Image
                  src="/images/mobile1.jpg"
                  alt="Appetizers Featured"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Bottom Images: Mobile 2 & 3 with exact diagonal split */}
              <div className="relative w-full aspect-[4/3] drop-shadow-2xl">
                {/* Left Image (Nachos) */}
                <div 
                  className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
                  style={{ clipPath: 'polygon(0 0, 62% 0, 38% 100%, 0 100%)' }}
                >
                  <Image
                    src="/images/mobile2.jpg"
                    alt="Appetizers Detail Left"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Right Image (Wings) */}
                <div 
                  className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
                  style={{ clipPath: 'polygon(64% 0, 100% 0, 100% 100%, 40% 100%)' }}
                >
                  <Image
                    src="/images/mobile3.jpg"
                    alt="Appetizers Detail Right"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* CTA Voucher placed directly below mobile2 & mobile3 images in mobile view */}
              <div className="w-full mt-2">
                <MenuVoucherCTA />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AppetizersMenuSection;
