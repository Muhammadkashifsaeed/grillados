'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <section className="relative w-full py-12 md:py-20 bg-[#0a0a0a] overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 md:gap-14">

        {/* ZONE 1: Both images with diagonal split — fade UP */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full flex flex-col md:flex-row items-center justify-center pt-4 pb-4"
        >
          {/* lockfiles1 — left */}
          <div className="relative w-full md:w-[55%] h-[350px] md:h-[500px] lg:h-[700px] z-10 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/lockfiles1.png"
              alt="Chicken Specials Dish 1"
              fill
              className="object-contain object-bottom md:object-right-bottom scale-110 drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>

          {/* lockfiles2 — right */}
          <div className="relative w-full md:w-[55%] h-[350px] md:h-[500px] lg:h-[700px] z-0 -mt-[60px] md:mt-0 md:-ml-[12%] transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/lockfiles2.png"
              alt="Chicken Specials Dish 2"
              fill
              className="object-contain object-top md:object-left-bottom scale-110 drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </motion.div>





        {/* ZONE 2: Bottom row — Left: menu content | Right: set.png */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">

          {/* Left: Heading + Divider + Menu Items — fade LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 uppercase tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                GRILLADO&apos;S<br />CHICKEN SPECIALS
              </h2>
              <div className="w-full h-1.5 bg-orange-500 mt-3" />
            </div>

            <div className="flex flex-col gap-5 md:gap-6 w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-2 sm:gap-3">
                    <span className="text-white text-sm md:text-base font-normal whitespace-nowrap">
                      {item.name}
                    </span>
                    <div
                      className="flex-grow mb-1"
                      style={{ borderBottom: '2px dotted rgba(255,255,255,0.5)', minWidth: '20px' }}
                    />
                    <span className="text-white text-sm md:text-base font-semibold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-gray-400 text-xs md:text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  {item.note && (
                    <p className="text-red-400 text-[10px] md:text-[11px] font-semibold uppercase mt-0.5 tracking-widest">
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
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex items-center justify-end relative min-h-[450px] md:min-h-[650px] lg:min-h-[780px]"
          >
            <Image
              src="/images/set.png"
              alt="Grillado Chicken Set"
              fill
              className="object-contain object-right drop-shadow-2xl scale-110 md:scale-100"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ChickenSpecialsMenuSection;
