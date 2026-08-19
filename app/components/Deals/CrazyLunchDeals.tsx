"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

export default function CrazyLunchDeals() {
  const router = useRouter();
  const t = useTranslations('CrazyLunch');
  
  const deals = [
    {
      id: 1,
      image: '/images/Crazy1.jpeg',
      heading: t('deal1'),
      price: '$ 11.99'
    },
    {
      id: 2,
      image: '/images/Crazy2.jpeg',
      heading: t('deal2'),
      price: '$ 11.99'
    },
    {
      id: 3,
      image: '/images/Crazy3.jpeg',
      heading: t('deal3'),
      price: '$ 11.99'
    },
    {
      id: 4,
      image: '/images/Crazy4.jpeg',
      heading: t('deal4'),
      price: '$ 11.99'
    },
    {
      id: 5,
      image: '/images/Crazy5.jpeg',
      heading: t('deal5'),
      price: '$ 11.99'
    },
    {
      id: 6,
      image: '/images/Crazy6.png',
      heading: t('deal6'),
      description: t('deal6Desc'),
      isSpecial: true
    }
  ];

  return (
    <section className="relative w-full bg-gray-50 py-10 md:py-16 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#DAAF18] font-['Outfit',sans-serif] uppercase tracking-wide mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-800 text-base md:text-base lg:text-xl font-semibold max-w-2xl">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              
              {/* Left Image Section */}
              <div className="relative w-full sm:w-1/2 md:w-[45%] h-62.5 sm:h-70 md:h-80 shrink-0 bg-gray-100">
                <Image
                  src={deal.image}
                  alt={deal.heading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 45vw"
                />
              </div>

              {/* Right Content Section */}
              <div className="flex flex-col justify-center p-6 sm:p-8 flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-['Outfit',sans-serif] leading-tight mb-4">
                  {deal.heading}
                </h3>
                
                {deal.isSpecial ? (
                  <div className="mt-4">
                    <p className="text-gray-600 text-sm md:text-base font-medium mb-4 leading-relaxed">
                      {deal.description}
                    </p>
                    <button
                      onClick={() => router.push('/contact-us')}
                      className="inline-block bg-[#fbbc04] hover:bg-[#e5aa03] text-black font-bold text-sm md:text-base uppercase tracking-wider px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      {t('contactUs')}
                    </button>
                  </div>
                ) : (
                  <div className="mt-2 flex items-baseline">
                    <span className="text-black text-2xl md:text-3xl font-extrabold mr-1.5">
                      $
                    </span>
                    <span className="text-[#fbbc04] text-3xl md:text-4xl font-extrabold tracking-tight">
                      {deal.price ? deal.price.replace('$ ', '').replace('$', '') : ''}
                    </span>
                  </div>
                )}
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
