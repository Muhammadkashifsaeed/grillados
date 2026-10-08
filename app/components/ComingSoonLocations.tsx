"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ComingSoonLocations() {
  const t = useTranslations('LocationsPage');

  const comingSoonData = [
    {
      province: t('ontario'),
      locations: [
        'Oshawa',
        'Ottawa',
        'Niagara Falls',
        'Markham',
        'Vaughan',
        'Toronto Downtown'
      ]
    },
    {
      province: t('alberta'),
      locations: [
        'Edmonton',
        'Calgary'
      ]
    },
    {
      province: t('britishColumbia'),
      locations: [
        'Vancouver',
        'Surrey',
        'Richmond',
        'Victoria'
      ]
    }
  ];

  return (
    <section className="relative w-full pt-2 pb-10 md:py-16 z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-6 md:mb-20"
        >
          <h2
            className="capitalize tracking-wide text-center"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(29px, 4.8vw, 48px)', lineHeight: 'clamp(36px, 5.6vw, 56px)', color: 'rgb(255,255,255)' }}
          >
            {t('comingSoonLocations')}
          </h2>
          <div className="w-25 h-0.75 bg-orange-500 mt-3 md:mt-5"></div>
        </motion.div>

        {/* Content Container */}
        <div className="flex flex-col gap-10 md:gap-14">
          {comingSoonData.map((region, regionIndex) => (
            <motion.div
              key={region.province}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: regionIndex * 0.15 }}
              className="flex flex-col"
            >
              {/* Province Heading */}
              <h3
                className="uppercase tracking-widest mb-3 md:mb-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 'clamp(39px, 6vw, 60px)' }}
              >
                {region.province}
              </h3>

              {/* Locations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-3 md:gap-y-6 pr-12 md:pr-14 lg:pr-0">
                {region.locations.map((loc, locIndex) => (
                  <div key={locIndex} className="flex flex-col">
                    <span className="text-white text-xl md:text-2xl font-bold mb-2 font-['Outfit',sans-serif]">
                      {loc}
                    </span>
                    <div className="w-full h-0.5 bg-[#FAAE40]"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
