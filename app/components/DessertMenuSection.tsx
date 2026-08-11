'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MenuSection } from './Menu/MenuSection';
import { MenuTwoColumn } from './Menu/MenuTwoColumn';
import { MenuHeading } from './Menu/MenuHeading';
import { MenuItem } from './Menu/MenuItem';
import { MenuDualImage } from './Menu/MenuDualImage';

const menuItems = [
  { translationKey: 'ferreroRocherCake', price: '7.99' },
  { translationKey: 'oreoCake', price: '7.99' },
  { translationKey: 'natas', price: '4.99' },
  { translationKey: 'iceCream1Scoop', price: '4.99' },
];

export const DessertMenuSection = () => {
  const t = useTranslations('Desserts');

  return (
    <MenuSection id="desserts">
      {/* ROW 1: e-1 and f-1 Images */}
      <MenuDualImage 
        leftImageSrc="/images/e-1.png"
        rightImageSrc="/images/f-1.png"
      />

      {/* ROW 2: Dessert Menu + a-1 Image */}
      <MenuTwoColumn
        leftContent={
          <>
            <MenuHeading title={t('heading')} />
            <div className="flex flex-col gap-3 md:gap-4 w-full">
              {menuItems.map((item, index) => (
                <MenuItem 
                  key={index} 
                  name={t(`items.${item.translationKey}`)} 
                  price={item.price} 
                  isLast={index === menuItems.length - 1} 
                />
              ))}
            </div>
          </>
        }
        rightContent={
          <div className="relative w-full h-full lg:min-h-[500px] flex items-center justify-center lg:mb-24">
            {/* Desktop Image */}
            <Image 
              src="/images/a-1.png"
              alt="Dessert"
              width={1000}
              height={750}
              className="w-full h-auto rounded-xl lg:rounded-none object-contain object-center scale-95 lg:scale-100 drop-shadow-2xl hidden md:block"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Mobile Image */}
            <Image 
              src="/images/mobile17.jpg"
              alt="Dessert Mobile"
              width={1000}
              height={750}
              className="w-[85%] max-w-[300px] mx-auto h-auto object-contain rounded-xl drop-shadow-xl block md:hidden"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        }
      />

      {/* ROW 3: b-1 and c-1 Images */}
      <MenuDualImage 
        leftImageSrc="/images/b-1.png"
        rightImageSrc="/images/c-1.png"
      />
    </MenuSection>
  );
};

export default DessertMenuSection;
