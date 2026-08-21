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
      <div className="hidden md:block">
        <MenuDualImage
          leftImageSrc="/images/e-1.png"
          rightImageSrc="/images/f-1.png"
        />
      </div>

      <div className="flex flex-col gap-0 md:gap-12 w-full">
        {/* Custom Mobile Diagonal Split for mobile15 & 16 */}
        <div className="w-full max-w-[500px] mx-auto flex md:hidden relative aspect-[4/3] drop-shadow-2xl mt-2 mb-2">
          {/* Left Image */}
          <div
            className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
            style={{ clipPath: 'polygon(0 0, 62% 0, 38% 100%, 0 100%)' }}
          >
            <Image
              src="/images/mobile15.jpg"
              alt="Dessert Detail Left"
              fill
              className="object-cover scale-[1.15] origin-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Image */}
          <div
            className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
            style={{ clipPath: 'polygon(64% 0, 100% 0, 100% 100%, 40% 100%)' }}
          >
            <Image
              src="/images/mobile16.jpg"
              alt="Dessert Detail Right"
              fill
              className="object-cover scale-[1.15] origin-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

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
            <div className="relative w-full h-full lg:min-h-[500px] flex items-center justify-center lg:mb-8">
              {/* Desktop Image */}
              <Image
                src="/images/a-1.png"
                alt="Dessert"
                width={1000}
                height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-center scale-95 xl:scale-100 drop-shadow-2xl hidden md:block"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Mobile Image */}
              <Image
                src="/images/mobile17.jpg"
                alt="Dessert Mobile"
                width={1000}
                height={750}
                className="w-full max-w-[500px] mx-auto h-auto object-contain rounded-xl drop-shadow-2xl block md:hidden mt-4 mb-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          }
        />
      </div>

      {/* ROW 3: b-1 and c-1 Images */}
      <div className="hidden md:block pb-24">
        <MenuDualImage
          leftImageSrc="/images/b-1.png"
          rightImageSrc="/images/c-1.png"
        />
      </div>

      {/* Custom Mobile Diagonal Split for mobile18 & 19 */}
      <div className="w-full max-w-[500px] mx-auto flex md:hidden relative aspect-[4/3] drop-shadow-2xl mt-4 mb-16">
        {/* Left Image */}
        <div
          className="absolute inset-0 z-10 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
          style={{ clipPath: 'polygon(0 0, 62% 0, 38% 100%, 0 100%)' }}
        >
          <Image
            src="/images/mobile18.jpg"
            alt="Dessert Detail Left"
            fill
            className="object-cover scale-[1.15] origin-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Image */}
        <div
          className="absolute inset-0 z-20 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
          style={{ clipPath: 'polygon(64% 0, 100% 0, 100% 100%, 40% 100%)' }}
        >
          <Image
            src="/images/mobile19.jpg"
            alt="Dessert Detail Right"
            fill
            className="object-cover scale-[1.15] origin-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </MenuSection>
  );
};

export default DessertMenuSection;


