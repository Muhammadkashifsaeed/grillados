'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { staggerContainer, fadeRightItem } from '../utils/animations';

const menuItems = [
  { name: 'Frites Peri', price: '5.99' },
  { name: 'Frites masala', price: '5.99' },
  { name: 'Quartiers de pomme de terre', price: '5.99' },
  { name: 'Rondelles d’oignon', price: '5.99' },
  { name: 'Légumes grillés mélangés', price: '5.99' },
  { name: 'Salade de chou crémeuse', price: '5.99' },
  { name: 'Riz épicé', price: '5.99' },
  { name: 'Maïs grillé', price: '5.99' }
];

export const AccompagnementsMenuSection = () => {
  const t = useTranslations('Menu');
  const rawSides = t.raw('accompagnementsMenu');
  const menuItemsLocal = [
    { name: rawSides[0].name, price: '5.99' },
    { name: rawSides[1].name, price: '5.99' },
    { name: rawSides[2].name, price: '5.99' },
    { name: rawSides[3].name, price: '5.99' },
    { name: rawSides[4].name, price: '5.99' },
    { name: rawSides[5].name, price: '5.99' },
    { name: rawSides[6].name, price: '5.99' },
    { name: rawSides[7].name, price: '5.99' },
  ];
  return (
    <section id="accompagnements" className="relative w-full py-4 lg:py-8 bg-transparent">


      <div className="relative z-10 max-w-7xl mx-auto w-full pl-4 pr-[65px] md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 w-full items-stretch">

          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full flex items-center justify-center relative min-h-[300px] lg:min-h-[500px]"
          >
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px]">
              {/* Desktop Image */}
              <Image
                src="/images/Frities.png"
                alt="Frites Accompagnements"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-left scale-100 lg:scale-100 drop-shadow-2xl hidden md:block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Mobile Image */}
              <Image
                src="/images/mobile10.jpg"
                alt="Frites Accompagnements Mobile"
                width={1000}
                height={750}
                className="w-full max-w-[500px] mx-auto h-auto object-contain rounded-xl drop-shadow-2xl block md:hidden mt-4 mb-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Fade on the right edge (desktop) */}
              <div className="absolute inset-y-0 right-0 w-24 md:w-32 lg:w-48 bg-linear-to-l from-transparent to-transparent pointer-events-none hidden lg:block"></div>
            </div>
          </motion.div>

          {/* Right Column: Menu Items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-col justify-center"
          >
            <motion.div variants={fadeRightItem} className="mb-6 lg:mb-10">
              <h2
                className="uppercase tracking-wide drop-shadow-sm mb-4"
                style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '45px', lineHeight: '45px', color: 'rgb(250,174,64)' }}
              >
                {t('accompagnements')}
              </h2>
              <div className="w-full h-1.5 bg-[#FAAE40] mt-3"></div>
            </motion.div>

            <div className="flex flex-col gap-4 md:gap-5 w-full">
              {menuItemsLocal.map((item, index) => (
                <motion.div variants={fadeRightItem} key={index} className="flex flex-col w-full">
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
                </motion.div>
              ))}

              {/* {t('seasonal')} */}
              <motion.div variants={fadeRightItem} className="mt-6 md:mt-8 flex flex-col w-full">
                <h3 className="text-red-600 text-sm md:text-base font-bold uppercase tracking-widest mb-1.5 md:mb-2">
                  {t('seasonal')}
                </h3>
                <p style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '26px', lineHeight: '45px', color: 'rgb(250,174,64)' }}>
                  {t('sidesSizes')}
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AccompagnementsMenuSection;


