'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MenuSection } from './Menu/MenuSection';
import { MenuTwoColumn } from './Menu/MenuTwoColumn';
import { MenuHeading } from './Menu/MenuHeading';
import { MenuItem } from './Menu/MenuItem';

export const GarnishedRiceSauceMenuSection = () => {
  const t = useTranslations('GarnishedRice');

  const loadedRiceItems = [
    {
      name: t('items.chicken'),
      price: '19.99',
      description: t('items.chickenDesc')
    },
    {
      name: t('items.vegetarianSpecial'),
      price: '18.99',
      description: t('items.vegetarianSpecialDesc')
    },
    {
      name: t('items.houseSpecial'),
      price: '21.99',
      description: t('items.houseSpecialDesc')
    }
  ];

  const sauceLevels = [
    {
      name: t('sauces.lemonHerbs'),
      description: t('sauces.lemonHerbsDesc'),
      image: '/images/Fiery.png',
      style: { fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '45px', lineHeight: '59px', color: 'rgb(140, 197, 63)' }
    },
    {
      name: t('sauces.average'),
      description: t('sauces.averageDesc'),
      image: '/images/Fiery1.png',
      style: { fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '45px', lineHeight: '59px', color: 'rgb(247, 148, 31)' }
    },
    {
      name: t('sauces.strong'),
      description: t('sauces.strongDesc'),
      image: '/images/Fiery2.png',
      style: { fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '45px', lineHeight: '59px', color: 'rgb(147, 26, 29)' }
    },
    {
      name: t('sauces.barbecue'),
      description: t('sauces.barbecueDesc'),
      image: '/images/Fiery3.png',
      style: { fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '45px', lineHeight: '59px', color: 'rgb(147, 26, 29)' }
    },
  ];

  return (
    <MenuSection id="garnished-rice">
      <MenuTwoColumn
        leftContent={
          <>
            <MenuHeading title={t('heading')} />

            <div className="flex flex-col w-full mb-12">
              <div className="flex flex-col gap-4 md:gap-5 w-full">
                {loadedRiceItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    name={item.name}
                    price={item.price}
                    note={item.description}
                    isLast={index === loadedRiceItems.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Image (mobile13) moved above Fiery section */}
            <div className="w-full block md:hidden mx-auto text-center mb-8">
              <Image
                src="/images/mobile13.jpg"
                alt="Zesty Food Mobile"
                width={1000}
                height={750}
                className="w-full max-w-[500px] h-auto object-contain rounded-xl drop-shadow-xl inline-block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="mb-10 w-full pt-8 border-t border-white/10">
              <div className="flex flex-col gap-10 md:gap-12 lg:gap-14 w-full">
                {sauceLevels.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
                    className="flex flex-col w-full"
                  >
                    <div className="flex items-center gap-4 md:gap-8">
                      <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 shrink-0 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={200}
                          height={200}
                          className="w-full h-full object-contain drop-shadow-2xl scale-150"
                        />
                      </div>
                      <div className="flex flex-col justify-center flex-1">
                        <h4 
                          className="uppercase tracking-wider mb-1 md:mb-2"
                          style={item.style}
                        >
                          {item.name}
                        </h4>
                        <p className="text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        }
        rightContent={
          <div className="w-full flex flex-col items-center justify-start gap-8">
            {/* Top Large Peri Image */}
            <div className="relative w-full py-4 flex justify-center">
              {/* Desktop Image */}
              <Image
                src="/images/zasty.png"
                alt="Zesty Food"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-top scale-95 xl:scale-100 origin-top drop-shadow-2xl hidden md:block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Bottom Saucess Image */}
            <div className="relative w-full py-4 lg:py-8 flex justify-center">
              <Image
                src="/images/saucess.png"
                alt="Saucess"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-center scale-95 lg:scale-100 drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        }
      />
    </MenuSection>
  );
};

export default GarnishedRiceSauceMenuSection;


