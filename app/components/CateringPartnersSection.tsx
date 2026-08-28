'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const CateringPartnersSection = () => {
  const t = useTranslations('CateringPartners');

  // We have sponsors from Spon1.png to Spon13.png
  const sponsors = Array.from({ length: 13 }, (_, i) => `/images/Spon${i + 1}.png`);

  // Double the array for seamless infinite scrolling
  const marqueeSponsors = [...sponsors, ...sponsors];

  return (
    <section className="w-full py-6 md:py-8 bg-white border-t border-gray-200 overflow-hidden">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 mb-8 flex flex-col items-center text-center">

        {/* Centered Heading */}
        <h2 
          className="uppercase tracking-wide mb-2"
          style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '28px', lineHeight: '36px', color: 'rgb(0,0,0)' }}
        >
          {t('heading')}
        </h2>
        <div className="w-24 h-1 bg-[#fbbc04] mx-auto mt-2 mb-1 rounded-full"></div>


        <p className="max-w-3xl text-center mt-3" style={{ fontFamily: "'Noto Sans', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '30px', color: 'rgb(0, 0, 0)' }}>
          {t('platterDescription')}
        </p>

      </div>

      {/* Infinite Image Carousel (Marquee) */}
      <div className="relative w-full flex overflow-hidden py-8 bg-zinc-50 border-y border-gray-100">
        <div className="flex w-max animate-marquee gap-2 md:gap-3 px-2 items-center">
          {marqueeSponsors.map((src, idx) => (
            <div
              key={idx}
              className="relative h-20 w-32 md:h-28 md:w-44 shrink-0"
            >
              <Image
                src={src}
                alt={`Catering Partner ${idx + 1}`}
                fill sizes="200px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for Marquee Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}} />
    </section>
  );
};

export default CateringPartnersSection;
