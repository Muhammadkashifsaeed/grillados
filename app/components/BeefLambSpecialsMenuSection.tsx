'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeLeftItem } from '../utils/animations';
import { MenuDualImage } from './Menu/MenuDualImage';

const menuItems = [
  {
    name: 'Rear Ribs',
    price: '44.99',
    note: 'BEEF RIBS (3 BONES), 1 SIDE DISH, 1 PORTUGUESE BREAD OR 1 GARLIC BREAD',
  },
  {
    name: 'Lamb Chops',
    price: '36.99',
    note: '4 LAMB CHOPS FRENCH STYLE SERVED WITH 1 REGULAR SIDE DISH AND 1 GARLIC BREAD',
  },
  {
    name: '12 oz Sirloin Steak',
    price: '47.99',
    note: 'AAA SIRLOIN STEAK SERVED WITH 1 REGULAR SIDE AND GARLIC BREAD',
  },
  {
    name: '12 oz Sirloin Steak',
    price: '46.99',
    note: 'AAA SIRLOIN STEAK SERVED WITH 1 REGULAR SIDE AND GARLIC BREAD',
  },
  {
    name: "Grillado's Beef Burger",
    price: '17.99',
    note: 'WITH 1 REGULAR SIDE DISH (ADD AN EXTRA PATTY FOR 4.99)',
  },
  {
    name: 'Full Rack of Rear Ribs',
    price: '94.99',
    note: '7 PREMIUM BACK RIBS',
  },
];

export const BeefLambSpecialsMenuSection = () => {
  return (
    <section id="beef-lamb-specials" className="relative w-full py-4 lg:py-8 bg-[#0a0a0a]">
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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col gap-6 md:gap-14">

        <div className="hidden md:block">
          <MenuDualImage 
            leftImageSrc="/images/Order.png"
            rightImageSrc="/images/Order1.png"
          />
        </div>

        {/* Custom Mobile Diagonal Split for mobile5 & 6 */}
        <div className="w-full max-w-[500px] mx-auto flex md:hidden relative aspect-[4/3] drop-shadow-2xl mt-4 mb-2">
          {/* Left Image */}
          <div 
            className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
            style={{ clipPath: 'polygon(0 0, 62% 0, 38% 100%, 0 100%)' }}
          >
            <Image
              src="/images/mobile5.jpg"
              alt="Beef and Lamb Detail Left"
              fill
              className="object-cover scale-[1.15] origin-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Image */}
          <div 
            className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
            style={{ clipPath: 'polygon(64% 0, 100% 0, 100% 100%, 40% 100%)' }}
          >
            <Image
              src="/images/mobile6.jpg"
              alt="Beef and Lamb Detail Right"
              fill
              className="object-cover scale-[1.15] origin-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>



        {/* ZONE 2: Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 w-full items-stretch">

          {/* LEFT: Heading + Divider + Menu Items — fade LEFT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full flex flex-col justify-start"
          >
            <motion.div variants={fadeLeftItem} className="mb-6 lg:mb-10">
              <h2
                className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold text-[#FAAE40] uppercase tracking-wide"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                GRILLADO&apos;S<br />BEEF & LAMB SPECIALS
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
                    />
                    <span className="text-white text-[11px] sm:text-xs md:text-base font-bold whitespace-nowrap leading-snug">
                      {item.price}
                    </span>
                  </div>

                  {/* Note — red, uppercase, small */}
                  {item.note && (
                    <p className="text-red-400 text-xs md:text-sm font-semibold uppercase mt-0.5 tracking-widest">
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

          {/* RIGHT: component.png — fade RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full flex items-start justify-center lg:justify-end relative lg:min-h-[500px] mx-auto"
          >
            {/* Desktop Image */}
            <Image
              src="/images/component.png"
              alt="Grillado Beef and Lamb"
              width={1000}
              height={750}
              className="w-full h-auto object-contain rounded-xl lg:rounded-none object-top drop-shadow-2xl scale-95 xl:scale-100 origin-top hidden md:block"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Mobile Layout for 7, 8, 9 */}
            <div className="w-full max-w-[500px] mx-auto flex md:hidden flex-col gap-4 mt-4 mb-2">
              {/* Top Image: Mobile 7 */}
              <div className="w-full drop-shadow-2xl">
                <Image
                  src="/images/mobile7.jpg"
                  alt="Beef and Lamb Featured"
                  width={1000}
                  height={750}
                  className="w-full h-auto object-contain rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Bottom Images: Mobile 8 & 9 with VIP diagonal split */}
              <div className="relative w-full aspect-[4/3] drop-shadow-2xl">
                {/* Left Image (8) */}
                <div 
                  className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
                  style={{ clipPath: 'polygon(0 0, 62% 0, 38% 100%, 0 100%)' }}
                >
                  <Image
                    src="/images/mobile8.jpg"
                    alt="Detail Left"
                    fill
                    className="object-cover scale-[1.15] origin-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Right Image (9) */}
                <div 
                  className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
                  style={{ clipPath: 'polygon(64% 0, 100% 0, 100% 100%, 40% 100%)' }}
                >
                  <Image
                    src="/images/mobile9.jpg"
                    alt="Detail Right"
                    fill
                    className="object-cover scale-[1.15] origin-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ZONE 3: Centered previous1.png and previous2.png images */}
        <div className="hidden md:block">
          <MenuDualImage 
            leftImageSrc="/images/previous1.png"
            rightImageSrc="/images/previous2.png"
          />
        </div>

      </div>
    </section>
  );
};

export default BeefLambSpecialsMenuSection;
