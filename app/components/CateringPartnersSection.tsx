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
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase tracking-wide mb-3">
          {t('heading')}
        </h2>

        {/* Centered Subtitle */}
        <p className="text-gray-800 text-sm md:text-base uppercase tracking-widest max-w-2xl">
          {t('subtitle')}
        </p>

      </div>

      {/* Infinite Image Carousel (Marquee) */}
      <div className="relative w-full flex overflow-hidden group py-8 bg-zinc-50 border-y border-gray-100">
        <div className="flex w-max animate-marquee space-x-2 md:space-x-4 px-4 md:px-8 items-center">
          {marqueeSponsors.map((src, idx) => (
            <div
              key={idx}
              className="relative h-20 w-40 md:h-28 md:w-56 shrink-0 transition-all duration-500 ease-out hover:scale-125 cursor-pointer hover:drop-shadow-2xl z-10 hover:z-20"
            >
              <Image
                src={src}
                alt={`Catering Partner ${idx + 1}`}
                fill sizes="100vw"
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
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default CateringPartnersSection;
