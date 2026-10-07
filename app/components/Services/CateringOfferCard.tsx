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
      className="bg-white rounded-3xl border-2 border-[#8B5A2B]/30 shadow-xl overflow-hidden w-full flex flex-col md:flex-row gap-4 lg:gap-6 px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 mb-0 group justify-between items-center relative"
    >
      {/* Brand Image at Top-Left (Attached flush to top border edge with zero top gap) */}
      <div className="absolute -top-1 sm:-top-2 left-4 sm:left-6 lg:left-8 w-56 sm:w-72 lg:w-80 h-16 sm:h-20 lg:h-24 z-20 pointer-events-none">
        <Image 
          src="/images/whole.png"
          alt="Grillado's Logo"
          fill sizes="100vw"
          className="object-contain object-left-top"
        />
      </div>

      {/* Left Content (Text) - 52% Width on Desktop */}
      <div className="w-full md:w-[52%] flex flex-col items-start justify-center pt-10 sm:pt-14 md:pt-16 relative pr-0 md:pr-4">
        
        {/* Heading (Offer 1 / Offer 2) */}
        <h3 
          className="mb-2" 
          style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: 'clamp(27px, 4.5vw, 45px)', lineHeight: 'clamp(38px, 5.9vw, 59px)' }}
        >
          {t(headingKey)}
        </h3>

        <h2 
          className="mb-5 tracking-tight"
          style={{ fontFamily: "'Port Lligat Sans', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '24px', lineHeight: 'clamp(24px, 3.5vw, 34px)' }}
        >
          {t(titleKey)}
        </h2>

        <p 
          className="mb-7 whitespace-pre-line leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '27px' }}
        >
          {t(descKey)}
        </p>

        <Link href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" aria-label={t('orderNow')} className="text-black hover:text-white bg-[#FAC716] hover:bg-[#EB5250] transition-all duration-300 shadow-md rounded-lg px-8 py-3.5 flex items-center justify-center uppercase tracking-wider cursor-pointer inline-flex max-w-[fit-content]" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '16px', lineHeight: '20px' }} >
          {t('orderNow')}
        </Link>
      </div>

      {/* Right Image - 48% Width on Desktop (Fixed without hover animation, centered with balanced space) */}
      <div className="w-full md:w-[48%] flex items-center justify-center relative min-h-[255px] sm:min-h-[315px] lg:min-h-[360px]">
        <div className="relative w-full h-full min-h-[255px] sm:min-h-[315px] lg:min-h-[360px] mx-auto">
          <Image 
            src={imageSrc}
            alt={t(titleKey)}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 48vw"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CateringOfferCard;
