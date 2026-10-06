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
          <h2 
            className="capitalize tracking-wide mb-4 text-center lg:whitespace-nowrap px-4 text-[#FAC716]"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(39px, 6.5vw, 65px)', lineHeight: 'clamp(59px, 9.1vw, 91px)' }}
          >
            {t('title')}
          </h2>
          <p 
            className="max-w-4xl mx-auto lg:whitespace-nowrap px-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '25px' }}
          >
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pb-16">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-300"
            >
              
              {/* Left Image Section */}
              <div className="relative w-full sm:w-1/2 md:w-[45%] h-62.5 sm:h-70 md:h-80 shrink-0 bg-gray-100">
                <a 
                  href="https://grillados.bycalibre.ca/location" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full h-full block cursor-pointer group"
                >
                  <Image
                    src={deal.image}
                    alt={deal.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 45vw"
                  />
                </a>
              </div>

              {/* Right Content Section */}
              <div className="flex flex-col justify-center p-6 sm:p-8 flex-1">
                <h3 
                  className="mb-4 uppercase"
                  style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(22px, 2.8vw, 28px)', lineHeight: 'clamp(24px, 3.3vw, 33px)' }}
                >
                  {deal.heading}
                </h3>
                
                {deal.isSpecial ? (
                  <div className="mt-4">
                    <p className="text-gray-600 text-sm md:text-base font-medium mb-4 leading-relaxed">
                      {deal.description}
                    </p>
                    <button
                      onClick={() => router.push('/contact-us')}
                      className="text-white inline-block bg-[#FAC716] uppercase tracking-wider px-6 py-3 rounded-full shadow-md cursor-pointer"
                      style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}
                    >
                      {t('contactUs')}
                    </button>
                  </div>
                ) : (
                  <div className="mt-2 flex items-baseline gap-1 text-[#FAC716]">
                    <span className="text-black" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 'clamp(24px, 3.3vw, 33px)' }}>
                      $
                    </span>
                    <span style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 'clamp(24px, 3.3vw, 33px)' }}>
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
