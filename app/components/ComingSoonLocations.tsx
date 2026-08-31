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
    <section className="relative w-full py-10 md:py-16 z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-16 md:mb-24"
        >
          <h2
            className="uppercase tracking-wide text-center"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '48px', lineHeight: '56px', color: 'rgb(255,255,255)' }}
          >
            {t('comingSoonLocations')}
          </h2>
          <div className="w-25 h-0.75 bg-orange-500 mt-5"></div>
        </motion.div>

        {/* Content Container */}
        <div className="flex flex-col gap-16 md:gap-20">
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
                className="uppercase tracking-wider mb-8 md:mb-12"
                style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '40px', lineHeight: '60px', color: 'rgb(255,255,255)' }}
              >
                {region.province}
              </h3>

              {/* Locations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8">
                {region.locations.map((loc, locIndex) => (
                  <div key={locIndex} className="flex flex-col">
                    <span className="text-white text-xl md:text-2xl font-bold mb-3 font-['Outfit',sans-serif]">
                      {loc}
                    </span>
                    <div className="w-full h-0.5 bg-orange-500"></div>
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
