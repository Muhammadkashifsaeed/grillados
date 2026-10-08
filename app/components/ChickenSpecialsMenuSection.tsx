'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { staggerContainer, fadeLeftItem } from '../utils/animations';
import { MenuDualImage } from './Menu/MenuDualImage';
import MenuVoucherCTA from './MenuVoucherCTA';

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
  const t = useTranslations('Menu');
  const rawItems = t.raw('chickenSpecialsMenu');
  const menuItemsLocal = [
    { name: rawItems[0].name, price: '24.99', note: rawItems[0].note },
    { name: rawItems[1].name, price: '31.99', note: rawItems[1].note },
    { name: rawItems[2].name, price: '14.99', note: rawItems[2].note },
    { name: rawItems[3].name, price: '19.99', description: rawItems[3].description },
    { name: rawItems[4].name, price: '16.99', note: rawItems[4].note },
    { name: rawItems[5].name, price: '16.99', note: rawItems[5].note },
    { name: rawItems[6].name, price: '17.99', note: rawItems[6].note },
    { name: rawItems[7].name, price: '21.99', note: rawItems[7].note },
    { name: rawItems[8].name, price: '39.99', note: rawItems[8].note },
  ];
  return (
    <section id="chicken-specials" className="relative w-full py-4 lg:py-8 bg-transparent">


      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col gap-6 md:gap-14">

        <div className="hidden md:block">
          <MenuDualImage
            leftImageSrc="/images/lockfiles1.png"
            rightImageSrc="/images/lockfiles2.png"
          />
          {/* CTA Voucher placed directly below lockfiles1 & lockfiles2 images in desktop view */}
          <div className="w-full mt-12 lg:mt-24">
            <MenuVoucherCTA />
          </div>
        </div>



        {/* ZONE 2: Bottom row — Left: menu content | Right: set.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full items-center md:items-start md:pt-4">

          {/* Left: Heading + Divider + Menu Items — fade LEFT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full flex flex-col justify-start pr-12 md:pr-14 lg:pr-0"
          >
            <motion.div variants={fadeLeftItem} className="mb-6 lg:mb-10">
              <h2
                className="uppercase tracking-wide drop-shadow-sm mb-4"
                style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(27px, 4.5vw, 45px)', lineHeight: 'clamp(29px, 4.5vw, 45px)', color: 'rgb(250,174,64)' }}
              >
                <span dangerouslySetInnerHTML={{ __html: t('chickenSpecials') }} />
              </h2>
              <div className="w-full h-1.5 bg-[#FAAE40] mt-3"></div>
            </motion.div>

            <div className="flex flex-col gap-5 md:gap-6 w-full">
              {menuItemsLocal.map((item, index) => {
                const isUnlinked = index === 3 || index === 4;
                const ItemWrapper = isUnlinked ? 'div' : 'a';
                const wrapperProps = isUnlinked 
                  ? { className: 'flex flex-col w-full' } 
                  : { 
                      href: '/menu#', 
                      onClick: (e: React.MouseEvent) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      },
                      className: 'flex flex-col w-full cursor-pointer' 
                    };

                return (
                  <motion.div variants={fadeLeftItem} key={index} className="flex flex-col w-full">
                    <ItemWrapper {...wrapperProps}>
                      <div className="flex items-end w-full gap-1.5 sm:gap-2">
                        <span className="text-white text-2.75 sm:text-xs md:text-base font-bold whitespace-normal leading-snug">
                          {item.name}
                        </span>
                        <div
                          className="grow mb-1"
                          style={{ borderBottom: '2px dotted rgba(255,255,255,0.5)', minWidth: '4px' }}
                        />
                        <span className="text-white text-2.75 sm:text-xs md:text-base font-bold whitespace-nowrap leading-snug">
                          {item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p
                          className="uppercase mt-0.5 tracking-widest leading-relaxed"
                          style={{ fontFamily: '"Poppins", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: 'rgb(255,0,0)' }}
                        >
                          {item.description}
                        </p>
                      )}
                      {item.note && (
                        <p
                          className="uppercase mt-0.5 tracking-widest"
                          style={{ fontFamily: '"Poppins", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: 'rgb(255,0,0)' }}
                        >
                          {item.note}
                        </p>
                      )}
                    </ItemWrapper>
                    {index < menuItems.length - 1 && (
                      <div
                        className="w-full mt-3 md:mt-3.5"
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: set.png — fade RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full flex items-center md:items-start justify-center relative lg:min-h-125 mx-auto"
          >
            {/* Desktop Image */}
            <Image
              src="/images/set.png"
              alt="Grillado Chicken Set"
              width={1000}
              height={750}
              className="w-full h-auto object-contain object-center drop-shadow-2xl rounded-xl lg:rounded-none scale-100 origin-center hidden md:block"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Mobile Image */}
            <Image
              src="/images/mobile4.jpg"
              alt="Grillado Chicken Set Mobile"
              width={1000}
              height={750}
              className="w-full max-w-125 mx-auto h-auto object-contain rounded-xl drop-shadow-2xl block md:hidden mt-4 mb-2"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ChickenSpecialsMenuSection;


