
'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, ArrowRight, Info } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const ChickenSpecialsSection = () => {
  const t = useTranslations('ChickenSpecials');
  return (
    <section className="w-full bg-white overflow-hidden flex flex-col gap-0 border-y border-gray-200">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[400px] lg:min-h-[400px] xl:min-h-[700px]">

        {/* Left Column: Image */}
        <div className="w-full h-[280px] md:h-auto relative order-1 md:order-1">
          <Image
            src="/images/dishes.webp"
            alt="Grillado's Chicken Specials"
            fill sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div className="w-full flex flex-col justify-center items-center text-center order-2 md:order-2 px-6 md:px-12 lg:px-16 xl:px-24 py-6 md:py-6 xl:py-12 bg-gray-50">

          {/* Custom SVG Icon */}
          <div className="flex justify-center mb-6">
            <Image src="/images/test-1.svg" alt="Grillados Icon" width={96} height={96} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
          </div>

          {/* Centered Heading */}
          <h2
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '30px', lineHeight: '39px', color: 'rgb(0,0,0)' }}
            className="mb-4"
          >
            {t('title')}
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mt-2 mb-4 rounded-full"></div>


          {/* Paragraph */}
          <p className="mb-8" style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '17px', lineHeight: '28px', color: 'rgb(0,0,0)' }}>
            {t('desc')}
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 w-full justify-center">
            <Link href="/order" className="group h-[48px] sm:h-[52px] px-4 sm:px-8 bg-[#fbbc04] hover:bg-[#d72323] text-black hover:text-white rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-md flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }}>
              <span>{t('order')}</span>
            </Link>

            <Link href="/menu#chicken-specials" className="group h-[48px] sm:h-[52px] px-4 sm:px-8 bg-[#fbbc04] hover:bg-[#d72323] text-black hover:text-white rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-md flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }}>
              <span>{t('learnMore')}</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChickenSpecialsSection;
