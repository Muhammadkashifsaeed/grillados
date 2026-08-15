'use client';

import React from 'react';
import MenuVoucherCTA from './MenuVoucherCTA';
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
      colorClass: 'text-green-500',
    },
    {
      name: t('sauces.average'),
      description: t('sauces.averageDesc'),
      image: '/images/Fiery1.png',
      colorClass: 'text-[#fbbc04]',
    },
    {
      name: t('sauces.strong'),
      description: t('sauces.strongDesc'),
      image: '/images/Fiery2.png',
      colorClass: 'text-red-500',
    },
    {
      name: t('sauces.barbecue'),
      description: t('sauces.barbecueDesc'),
      image: '/images/Fiery3.png',
      colorClass: 'text-[#b91c1c]',
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
            <div className="w-full flex md:hidden justify-center mb-8">
              <Image 
                src="/images/mobile13.jpg"
                alt="Zesty Food Mobile"
                width={1000}
                height={750}
                className="w-full max-w-[500px] h-auto object-contain rounded-xl drop-shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="mb-10 w-full pt-8 border-t border-white/10">
              <div className="flex flex-col gap-10 md:gap-12 lg:gap-14 w-full">
                {sauceLevels.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-8 lg:gap-10"
                  >
                    <div className="relative w-36 h-36 md:w-36 md:h-36 lg:w-48 lg:h-48 shrink-0">
                      <Image 
                        src={item.image}
                        alt={item.name}
                        fill sizes="100vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col flex-1 items-center text-center md:items-start md:text-left mt-2 md:mt-0">
                      <h4 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold font-['Outfit',sans-serif] uppercase tracking-wide mb-2 md:mb-1 ${item.colorClass}`}>
                        {item.name}
                      </h4>
                      <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                        {item.description}
                      </p>
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
            <div className="relative w-full py-4 lg:py-8 flex justify-center">
              {/* Desktop Image */}
              <Image 
                src="/images/zasty.png"
                alt="Zesty Food"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-center scale-95 lg:scale-100 drop-shadow-2xl hidden md:block"
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
