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
    <section className="relative w-full pt-5 lg:pt-12 pb-0 bg-[#0a0a0a] overflow-x-hidden">
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
        
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-8 xl:gap-12">
          
          {/* Left Column: Menu Items */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col justify-center pr-12 sm:pr-16 md:pr-0"
          >
            <div className="mb-8 lg:mb-10 flex flex-col items-start">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#fbbc04] font-['Outfit',sans-serif] uppercase tracking-wide leading-tight block">
                {t('heading')}<br />
                {t('subheading')}
              </h2>
              {/* Divider matched to heading width using w-full max-w limit to not stretch fully */}
              <div className="w-full max-w-50 md:max-w-62.5 lg:max-w-80 h-1.5 bg-[#fbbc04] mt-4"></div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-1.5 sm:gap-2">
                    <span className="text-white text-sm sm:text-base md:text-lg font-normal whitespace-normal">
                      {t(`items.${item.translationKey}`)}
                    </span>
                    <div
                      className="grow mb-1"
                      style={{
                        borderBottom: '2px dotted rgba(255,255,255,0.5)',
                        minWidth: '4px'
                      }}
                    ></div>
                    <span className="text-white text-base md:text-lg font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-stretch justify-center lg:justify-end relative aspect-[4/3] lg:min-h-[500px] py-8 lg:py-12"
          >
            <div className="relative w-full h-full aspect-[4/3] lg:min-h-[500px]">
              {/* Desktop Image */}
              <Image 
                src="/images/d-1.png"
                alt="Specialty Drinks"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-center lg:object-right scale-100 lg:scale-110 drop-shadow-2xl hidden md:block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Mobile Image */}
              <Image 
                src="/images/mobile14.jpg"
                alt="Specialty Drinks Mobile"
                width={1000}
                height={750}
                className="w-[85%] max-w-[300px] mx-auto h-auto object-contain rounded-xl drop-shadow-xl block md:hidden"
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
