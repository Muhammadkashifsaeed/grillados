'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MenuDualImage } from './Menu/MenuDualImage';
import MenuVoucherCTA from './MenuVoucherCTA';

const menuItems = [
  {
    name: 'Grilled Espetada',
    price: '24.99',
    description: 'Tender marinated chicken with fresh peppers, served on a skewer with 2 regular side dishes.',
  },
  {
    name: 'Whole Organic Grilled Chicken',
    price: '31.99',
    note: 'WITH 1 REGULAR ACCOMPANIST',
  },
  {
    name: 'Authentic Montreal Poutine',
    price: '14.99',
    note: 'ADD GRILLED CHICKEN FOR 5.49',
  },
  {
    name: 'Fiesta',
    price: '19.99',
    description: 'Chicken, rice and salad served with Italian dressing.',
  },
  {
    name: 'Veggie Burger',
    price: '16.99',
    note: 'WITH 1 REGULAR SIDE DISH (ADD AN EXTRA PATTY FOR 4.99)',
  },
  {
    name: 'Grilled Chicken Burger',
    price: '16.99',
    note: 'WITH 1 REGULAR SIDE (ADD EXTRA PATTY FOR 4.99)',
  },
  {
    name: 'Garlic Grilled Chicken Sandwich',
    price: '17.99',
    note: 'WITH 1 REGULAR SIDE DISH (ADD AN EXTRA PATTY FOR 4.99)',
  },
  {
    name: 'Flaming Tandoori Grill',
    price: '21.99',
    note: '8 PIECES OF TANDOORI SPICED CHICKEN ON A HOT GRILL',
  },
  {
    name: 'Saji Balochi Chicken',
    price: '39.99',
    note: 'PRE-ORDER ONLY WITH 2 REGULAR SIDES AND 2 PITA BREADS OR 2 GARLIC BREADS',
  },
];

export const ChickenSpecialsMenuSection = () => {
  return (
    <section id="chicken-specials" className="relative w-full py-10 lg:py-16 bg-[#0a0a0a]">
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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col gap-10 md:gap-14">

        <div className="hidden md:block">
          <MenuDualImage 
            leftImageSrc="/images/lockfiles1.png"
            rightImageSrc="/images/lockfiles2.png"
          />
          {/* CTA Voucher placed directly below lockfiles1 & lockfiles2 images in desktop view */}
          <MenuVoucherCTA />
        </div>



        {/* ZONE 2: Bottom row — Left: menu content | Right: set.png */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full">

          {/* Left: Heading + Divider + Menu Items — fade LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#fbbc04] font-['Outfit',sans-serif] uppercase tracking-wide leading-tight drop-shadow-sm mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                GRILLADO&apos;S<br />CHICKEN SPECIALS
              </h2>
              <div className="w-full h-1.5 bg-[#fbbc04] mt-3" />
            </div>

            <div className="flex flex-col gap-5 md:gap-6 w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-1.5 sm:gap-2">
                    <span className="text-white text-sm sm:text-base md:text-lg font-bold whitespace-normal">
                      {item.name}
                    </span>
                    <div
                      className="grow mb-1"
                      style={{ borderBottom: '2px dotted rgba(255,255,255,0.5)', minWidth: '4px' }}
                    />
                    <span className="text-white text-sm sm:text-base md:text-lg font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-gray-400 text-xs md:text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  {item.note && (
                    <p className="text-red-400 text-xs md:text-sm font-semibold uppercase mt-0.5 tracking-widest">
                      {item.note}
                    </p>
                  )}
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

          {/* Right: set.png — fade RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative lg:min-h-[500px] pt-8 pb-0 lg:py-12 lg:mt-0 pr-12 md:pr-16 lg:pr-[80px]"
          >
            {/* Desktop Image */}
            <Image
              src="/images/set.png"
              alt="Grillado Chicken Set"
              width={1000}
              height={750}
              className="w-full h-auto object-contain rounded-xl lg:rounded-none object-center drop-shadow-2xl scale-105 md:scale-110 hidden md:block"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Mobile Image */}
            <Image
              src="/images/mobile4.jpg"
              alt="Grillado Chicken Set Mobile"
              width={1000}
              height={750}
              className="w-full max-w-[500px] mx-auto h-auto object-contain rounded-xl drop-shadow-2xl block md:hidden mt-8 mb-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ChickenSpecialsMenuSection;
