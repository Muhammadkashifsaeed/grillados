'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { staggerContainer, fadeLeftItem } from '../utils/animations';

const menuItems = [
  { name: '¼ cuisse de poulet grillée', price: '15.99', note: '(CUISSE + HAUT DE CUISSE)' },
  { name: '¼ poitrine de poulet grillée', price: '16.99', note: '(POITRINE + AILES)' },
  { name: '6 ailes de poulet entières', price: '18.99' },
  { name: 'Doubles kebabs', price: '16.99' },
  { name: 'Poitrine de poulet grillée désossée', price: '19.99', note: '(NOUVEL ARTICLE)' },
  { name: 'Doubles cuisses', price: '20.99' },
  { name: 'Demi-poulet', price: '21.99' }
];

export const ComboDePouletMenuSection = () => {
  const t = useTranslations('Menu');
  const rawItems = t.raw('comboDePouletMenu');
  const menuItemsLocal = [
    { name: rawItems[0].name, price: '15.99', note: rawItems[0].note },
    { name: rawItems[1].name, price: '16.99', note: rawItems[1].note },
    { name: rawItems[2].name, price: '18.99' },
    { name: rawItems[3].name, price: '16.99' },
    { name: rawItems[4].name, price: '19.99', note: rawItems[4].note },
    { name: rawItems[5].name, price: '20.99' },
    { name: rawItems[6].name, price: '21.99' },
  ];
  return (
    <section id="combos" className="relative w-full py-4 lg:py-8 bg-transparent">


      <div className="relative z-10 max-w-7xl mx-auto w-full pl-4 pr-16.25 md:px-6 lg:px-8">
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
                <span dangerouslySetInnerHTML={{ __html: t('comboDePoulet') }} />
              </h2>
              <div className="w-full max-w-40 md:max-w-48 lg:max-w-64 h-1.5 bg-[#FAAE40] mt-4"></div>
            </motion.div>

            <div className="flex flex-col gap-5 md:gap-6 w-full">
              {menuItemsLocal.map((item, index) => (
                <motion.div variants={fadeLeftItem} key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-1.5 sm:gap-2">
                    <span className="text-white text-2.75 sm:text-xs md:text-base font-bold whitespace-normal leading-snug">
                      {item.name}
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
                  {item.note && (
                    <p
                      className="uppercase mt-1 tracking-widest leading-relaxed"
                      style={{ fontFamily: '"Poppins", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: 'rgb(255,0,0)' }}
                    >
                      {item.note}
                    </p>
                  )}
                </motion.div>
              ))}

              {/* Bottom Note */}
              <motion.div variants={fadeLeftItem} className="mt-6 md:mt-10 w-full pt-4 border-t border-white/10">
                <p
                  className="uppercase tracking-widest"
                  style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '26px', lineHeight: '45px', color: 'rgb(250,174,64)' }}
                >
                  {t('addSide')}
                </p>
              </motion.div>
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
                src="/images/chcken.png"
                alt="Combo de Poulet Grillé"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-top scale-90 xl:scale-100 origin-top hidden md:block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Mobile Image */}
              <Image
                src="/images/mobile11.jpg"
                alt="Combo de Poulet Grillé Mobile"
                width={1000}
                height={750}
                className="w-full max-w-125 mx-auto h-auto object-contain rounded-xl drop-shadow-2xl block md:hidden mt-4 mb-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Fade on the left edge (desktop) */}
              <div className="absolute inset-y-0 left-0 w-24 md:w-32 lg:w-48 bg-linear-to-r from-transparent to-transparent pointer-events-none hidden lg:block"></div>
              {/* Top fade for mobile */}
              <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-transparent to-transparent pointer-events-none lg:hidden"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ComboDePouletMenuSection;


