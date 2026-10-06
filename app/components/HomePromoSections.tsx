'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const HomePromoSections = () => {
  const t = useTranslations('HomePromo');
  return (
    <section className="w-full bg-white overflow-hidden flex flex-col gap-0">

      {/* First Promo Container */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch min-h-100 lg:min-h-100 xl:min-h-100">

        {/* Left Side - Image */}
        <motion.div
          className="w-full h-70 md:h-auto relative order-1 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/1350278.webp"
            alt="Catering Partner"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="w-full flex flex-col justify-start items-center text-center order-2 md:order-2 px-6 md:px-12 lg:px-20 pt-0 pb-6 md:pb-6 bg-gray-50">

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full h-full justify-start mt-0"
          >
            <div className="flex justify-center mb-6 mt-0">
              <Image
                src="/images/test-1.svg"
                alt="Grillados Icon"
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>

            <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 transform -rotate-2 inline-block text-center"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 'clamp(25px, 3.9vw, 39px)' }}
            >
              {t('cateringHeading')}
            </motion.h2>

            {/* Divider */}
            <div className="w-24 h-1 bg-black mx-auto mt-2 mb-4 rounded-full"></div>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="mb-8"
              style={{ fontFamily: "'Noto Sans', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '17px', lineHeight: '28px' }}
            >
              {t('cateringDesc')}
            </motion.p>

            <div className="flex flex-row gap-3 sm:gap-4 w-full justify-center">
              <Link href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white hover: hover: h-12 sm:h-13 px-4 sm:px-8 bg-[#FAC716] hover:bg-[#EB5250] transition-all duration-300 hover:scale-[1.03] shadow-md rounded-lg flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }} >
                {t('orderNow')}
              </Link>
              <button className="text-black hover:text-white hover: hover: h-12 sm:h-13 px-4 sm:px-8 bg-[#FAC716] hover:bg-[#EB5250] transition-all duration-300 hover:scale-[1.03] shadow-md rounded-lg flex-1 sm:flex-none whitespace-nowrap inline-flex items-center justify-center" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }} >
                {t('learnMore')}
              </button>
            </div>
          </motion.div>
        </div>


      </div>

      {/* Second Promo Container */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch min-h-100 lg:min-h-100 xl:min-h-100">

        {/* Left Side - Content */}
        <div className="w-full flex flex-col justify-start items-center text-center order-2 md:order-1 px-6 md:px-12 lg:px-20 pt-0 pb-6 md:pb-6 bg-gray-50 border-t border-gray-200">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full h-full justify-start mt-0"
          >
            <div className="flex justify-center mb-6 mt-0">
              <Image
                src="/images/test-1.svg"
                alt="Grillados Icon"
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>

            <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 transform -rotate-2 inline-block text-center"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 'clamp(25px, 3.9vw, 39px)' }}
            >
              {t('appHeading')}
            </motion.h2>

            {/* Divider */}
            <div className="w-24 h-1 bg-black mx-auto mt-2 mb-4 rounded-full"></div>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="mb-8"
              style={{ fontFamily: "'Noto Sans', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '17px', lineHeight: '28px' }}
            >
              {t('appDesc')}
            </motion.p>

            <div className="flex flex-row gap-3 sm:gap-4 w-full justify-center">
              <Link href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white hover: hover: h-12 sm:h-13 px-4 sm:px-8 bg-[#FAC716] hover:bg-[#EB5250] transition-all duration-300 hover:scale-[1.03] shadow-md rounded-lg flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }} >
                {t('orderNow')}
              </Link>
              <button className="text-black hover:text-white hover: hover: h-12 sm:h-13 px-4 sm:px-8 bg-[#FAC716] hover:bg-[#EB5250] transition-all duration-300 hover:scale-[1.03] shadow-md rounded-lg flex-1 sm:flex-none whitespace-nowrap inline-flex items-center justify-center" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }} >
                {t('learnMore')}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          className="w-full h-70 md:h-auto relative order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/mobile-post.webp"
            alt="Mobile App"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>

    </section>
  );
};

export default HomePromoSections;
