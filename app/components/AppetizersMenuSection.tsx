'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('Menu');
  const rawItems = t.raw('appetizersMenu');
  const menuItemsLocal = [
    { name: rawItems[0].name, price: '3.99', note: rawItems[0].note },
    { name: rawItems[1].name, price: '3.50' },
    { name: rawItems[2].name, price: '4.99' },
    { name: rawItems[3].name, price: '8.99' },
    { name: rawItems[4].name, price: '11.99', note: rawItems[4].note },
    { name: rawItems[5].name, price: '14.99' },
    { name: rawItems[6].name, price: '19.99' },
    { name: rawItems[7].name, price: '18.99' },
    { name: rawItems[8].name, price: '19.99', note: rawItems[8].note },
  ];
  return (
    <section id="appetizers" className="relative w-full py-4 lg:py-8 bg-transparent">


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
            <motion.div variants={fadeLeftItem} className="mb-6 lg:mb-10">
              <h2
                className="uppercase tracking-wide drop-shadow-sm mb-4"
                style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '45px', lineHeight: '45px', color: 'rgb(250,174,64)' }}
              >
                {t('appetizers')}
              </h2>
              <div className="w-full h-1.5 bg-[#FAAE40] mt-3"></div>
            </motion.div>

            <div className="flex flex-col gap-8 md:gap-10 w-full">
              {menuItemsLocal.map((item, index) => (
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
            className="w-full flex items-start justify-center relative lg:min-h-[500px] mx-auto"
          >
            {/* Desktop Image */}
            <Image
              src="/images/onpen.png"
              alt="Open Appetizers"
              width={1000}
              height={750}
              className="w-full h-auto object-contain object-top drop-shadow-2xl rounded-xl lg:rounded-none scale-95 xl:scale-100 origin-top hidden md:block"
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


