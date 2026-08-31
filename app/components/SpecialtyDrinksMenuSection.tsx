'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { staggerContainer, fadeLeftItem } from '../utils/animations';

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
    <section className="relative w-full py-4 lg:py-8 bg-transparent">


      <div className="relative z-10 max-w-7xl mx-auto w-full pl-4 pr-16.25 md:px-6 lg:px-8">

        <style>{`
          @media (min-width: 1024px) {
            .clip-slant-left-fade {
              clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
            }
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 w-full items-stretch">

          {/* Left Column: Menu Items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-col justify-start"
          >
            <motion.div variants={fadeLeftItem} className="mb-4 lg:mb-10 flex flex-col items-start">
              <h2
                className="uppercase tracking-wide drop-shadow-sm mb-4"
                style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '45px', lineHeight: '45px', color: 'rgb(250,174,64)' }}
              >
                {t('heading')}<br />
                {t('subheading')}
              </h2>
              {/* Divider matched to heading width using w-full max-w limit to not stretch fully */}
              <div className="w-full max-w-50 md:max-w-62.5 lg:max-w-80 h-1.5 bg-[#FAAE40] mt-4"></div>
            </motion.div>

            <div className="flex flex-col gap-3 md:gap-4 w-full">
              {menuItems.map((item, index) => (
                <motion.div variants={fadeLeftItem} key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-1.5 sm:gap-2">
                    <span className="text-white text-2.75 sm:text-xs md:text-base font-bold whitespace-normal leading-snug">
                      {t(`items.${item.translationKey}`)}
                    </span>
                    <div
                      className="grow mb-1"
                      style={{
                        borderBottom: '2px dotted rgba(255,255,255,0.5)',
                        minWidth: '4px'
                      }}
                    ></div>
                    <span className="text-white text-2.75 sm:text-xs md:text-base font-bold whitespace-nowrap leading-snug">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full flex items-start justify-center relative lg:min-h-125 mx-auto"
          >
            <div className="relative w-full h-full lg:min-h-125">
              {/* Desktop Image */}
              <Image
                src="/images/d-1.png"
                alt="Specialty Drinks"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-top scale-95 xl:scale-100 origin-top drop-shadow-2xl hidden md:block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Mobile Image */}
              <Image
                src="/images/mobile14.jpg"
                alt="Specialty Drinks Mobile"
                width={1000}
                height={750}
                className="w-full max-w-125 mx-auto h-auto object-contain rounded-xl drop-shadow-2xl block md:hidden mt-4 mb-2"
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


