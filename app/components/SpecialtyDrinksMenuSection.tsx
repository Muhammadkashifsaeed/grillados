'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const menuItems = [
  { translationKey: 'lycheeDelight', price: '8.99' },
  { translationKey: 'pinaColada', price: '8.99' },
  { translationKey: 'tangyMangoBlitz', price: '9.99' },
  { translationKey: 'oreoMilkshake', price: '11.99' },
  { translationKey: 'strawberryMilkshake', price: '11.99' },
  { translationKey: 'bananaMilkshake', price: '11.99' },
  { translationKey: 'mangoMilkshake', price: '11.99' },
  { translationKey: 'vanillaMilkshake', price: '11.99' },
  { translationKey: 'ferreroRocherMilkshake', price: '12.99' },
  { translationKey: 'water', price: '2.49' },
  { translationKey: 'canPop', price: '2.99' },
  { translationKey: 'snapple', price: '3.99' },
  { translationKey: 'jarriitos', price: '3.99' },
  { translationKey: 'karakChai', price: '4.49' },
];

export const SpecialtyDrinksMenuSection = () => {
  const t = useTranslations('SpecialtyDrinks');

  return (
    <section className="relative w-full py-6 lg:pt-8 lg:pb-32 bg-[#0a0a0a]">
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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">

        <style>{`
          @media (min-width: 1024px) {
            .clip-slant-left-fade {
              clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
            }
          }
        `}</style>

        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between gap-4 lg:gap-8 w-full lg:pr-[80px]">

          {/* Left Column: Menu Items */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col justify-start pr-14 sm:pr-16 md:pr-16 lg:pr-0"
          >
            <div className="mb-4 lg:mb-10 flex flex-col items-start">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#FAAE40] font-['Outfit',sans-serif] uppercase tracking-wide leading-tight drop-shadow-sm mb-4">
                {t('heading')}<br />
                {t('subheading')}
              </h2>
              {/* Divider matched to heading width using w-full max-w limit to not stretch fully */}
              <div className="w-full max-w-50 md:max-w-62.5 lg:max-w-80 h-1.5 bg-[#FAAE40] mt-4"></div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-1.5 sm:gap-2">
                    <span className="text-white text-[11px] sm:text-xs md:text-lg font-bold whitespace-normal leading-snug">
                      {t(`items.${item.translationKey}`)}
                    </span>
                    <div
                      className="grow mb-1"
                      style={{
                        borderBottom: '2px dotted rgba(255,255,255,0.5)',
                        minWidth: '4px'
                      }}
                    ></div>
                    <span className="text-white text-[11px] sm:text-xs md:text-lg font-bold whitespace-nowrap leading-snug">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-start justify-center lg:justify-end relative aspect-[4/3] lg:min-h-[500px] pt-0 lg:pt-0 pb-0 lg:pb-32 pr-12 md:pr-16 lg:pr-0"
          >
            <div className="relative w-full h-full aspect-[4/3] lg:min-h-[500px]">
              {/* Desktop Image */}
              <Image
                src="/images/d-1.png"
                alt="Specialty Drinks"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-top scale-95 lg:scale-[1.15] origin-top drop-shadow-2xl hidden md:block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Mobile Image */}
              <Image
                src="/images/mobile14.jpg"
                alt="Specialty Drinks Mobile"
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

export default SpecialtyDrinksMenuSection;
