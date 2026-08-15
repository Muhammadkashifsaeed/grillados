"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function FranchisingSponsors() {
  const t = useTranslations('FranchisingPage');

  // We have sponsors from Spon1.png to Spon13.png
  const sponsors = Array.from({ length: 13 }, (_, i) => `/images/Spon${i + 1}.png`);
  
  // Double the array for seamless infinite scrolling
  const marqueeSponsors = [...sponsors, ...sponsors];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 w-full font-['Outfit',sans-serif] overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center uppercase tracking-wide mb-4 text-black drop-shadow-sm">
          {t('sponsorsHeadingMain')}
          <span className="text-[#DAAF18]">{t('sponsorsHeadingYellow')}</span>
        </h2>
        
        {/* Red Divider */}
        <div className="w-24 h-1 bg-red-600 mb-12 rounded"></div>
        
      </div>

      {/* Infinite Image Carousel (Marquee) */}
      <div className="relative w-full flex overflow-hidden group py-6 bg-white">
        <div className="flex w-max animate-marquee space-x-4 md:space-x-8 px-4 md:px-8 items-center">
          {marqueeSponsors.map((src, idx) => (
            <div
              key={idx}
              className="relative h-20 w-32 md:h-28 md:w-48 shrink-0 transition-all duration-500 ease-out hover:scale-110 cursor-pointer hover:drop-shadow-xl"
            >
              <Image
                src={src}
                alt={`Franchising Partner ${idx + 1}`}
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
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
