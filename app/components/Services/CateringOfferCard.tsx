"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

export interface CateringOfferProps {
  headingKey: string;
  titleKey: string;
  descKey: string;
  imageSrc: string;
  headingColor: string;
}

const CateringOfferCard: React.FC<CateringOfferProps> = ({
  headingKey,
  titleKey,
  descKey,
  imageSrc,
  headingColor,
}) => {
  const t = useTranslations('CateringOffers');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-3xl border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden w-full px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-16 mb-0 group"
    >
      {/* Left Content (Text) - 55% Width on Desktop */}
      <div className="w-full md:w-[55%] flex flex-col items-start justify-center pt-24 lg:pt-16 relative">
        
        {/* Brand Image at Top-Left (Fixed closer to border edge) */}
        <div className="absolute -top-2 left-0 sm:-top-4 sm:left-2 lg:-top-6 lg:left-4 w-48 sm:w-64 lg:w-72 h-16 sm:h-20 lg:h-24">
          <Image 
            src="/images/whole.png"
            alt="Grillado's Logo"
            fill sizes="100vw"
            className="object-contain object-left"
          />
        </div>

        {/* Heading (Offer 1 / Offer 2) */}
        <h3 
          className="mb-2" 
          style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '45px', lineHeight: '59px', color: 'rgb(250, 174, 64)' }}
        >
          {t(headingKey)}
        </h3>

        <h2 
          className="mb-6 tracking-tight"
          style={{ fontFamily: "'Port Lligat Sans', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '25px', lineHeight: '35px', color: 'rgb(0, 0, 0)' }}
        >
          {t(titleKey)}
        </h2>

        <p 
          className="mb-10 whitespace-pre-line leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '30px', color: 'rgb(0, 0, 0)' }}
        >
          {t(descKey)}
        </p>

        <Link 
          href="/order"
          aria-label={t('orderNow')}
          className="bg-[#fbbc04] hover:bg-[#d72323] rounded-lg px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 shadow-md flex items-center justify-center uppercase tracking-wider cursor-pointer inline-flex max-w-[fit-content]"
          style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '16px', lineHeight: '20px', color: 'rgb(255, 255, 255)' }}
        >
          {t('orderNow')}
        </Link>
      </div>

      {/* Right Image - 45% Width on Desktop */}
      <div className="w-full md:w-[45%] flex items-center justify-center relative min-h-[250px] sm:min-h-[350px] lg:min-h-[450px]">
        <motion.div 
          className="relative w-[70%] sm:w-[60%] lg:w-[65%] min-h-[250px] sm:min-h-[350px] lg:min-h-[450px] mx-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image 
            src={imageSrc}
            alt={t(titleKey)}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CateringOfferCard;
