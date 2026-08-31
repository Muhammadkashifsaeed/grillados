"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

const CustomizedOptionsSection = () => {
  const t = useTranslations('CustomizedOptions');

  const features = ['feature1', 'feature2', 'feature3', 'feature4'];

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch">

        {/* Left Side - Image */}
        <motion.div
          className="w-full md:w-full flex justify-center order-1 md:order-none"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full flex items-end justify-center overflow-hidden">
            <Image
              src="/images/bottle.png"
              alt="Grillado Customized Options"
              width={800}
              height={800}
              className="w-full max-w-full h-auto object-cover drop-shadow-2xl translate-y-2"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="w-full flex flex-col justify-center order-2 md:order-none px-6 md:pr-12 md:pl-4 lg:pr-20 lg:pl-8 xl:pr-24 xl:pl-12 pt-2 pb-4 md:pt-16 md:pb-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="inline-block whitespace-nowrap"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '30px', lineHeight: '39px', color: 'rgb(0,0,0)' }}
            >
              {t('heading')}
              {/* Divider (Full width of heading) */}
              <div className="w-full h-1 bg-black rounded-full mt-4 mb-10"></div>
            </h2>
          </motion.div>

          {/* Feature List */}
          <div className="flex flex-col mb-10">
            {features.map((featureKey, index) => (
              <motion.div
                key={featureKey}
                className="flex items-start gap-4 pb-2 mb-2 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Circular Dot (Bullet Point) */}
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-black mt-2.5 shadow-sm"></div>

                {/* Feature Text */}
                <p 
                  style={{ fontFamily: "'Noto Sans', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '17px', lineHeight: '28px', color: 'rgb(0, 0, 0)' }}
                >
                  {t(featureKey)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div
            className="flex flex-row gap-3 sm:gap-4 w-full justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Button 1 */}
            <Link 
              href="/order" 
              className="h-12 sm:h-13 px-2 sm:px-8 bg-[#fbbc04] hover:bg-[#d72323] text-black hover:text-white rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-md flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '14px', lineHeight: '16px' }}
            >
              {t('orderNow')}
            </Link>

            {/* Button 2 */}
            <button 
              className="h-12 sm:h-13 px-2 sm:px-8 bg-[#fbbc04] hover:bg-[#d72323] text-black hover:text-white rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-md flex-1 sm:flex-none whitespace-nowrap inline-flex items-center justify-center"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '14px', lineHeight: '16px' }}
            >
              {t('learnMore')}
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CustomizedOptionsSection;
