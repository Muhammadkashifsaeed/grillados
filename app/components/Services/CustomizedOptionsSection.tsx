"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

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
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
            <Image
              src="/images/bottle.png"
              alt="Grillado Customized Options"
              fill
              className="object-cover md:object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="w-full flex flex-col justify-center order-2 md:order-none px-6 md:px-12 lg:px-20 xl:px-24 py-12 md:py-16">
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[34px] md:text-[46px] lg:text-[56px] font-bold text-black font-['Outfit',sans-serif] leading-tight inline-block">
              {t('heading')}
              {/* Divider (Full width of heading) */}
              <div className="w-full h-[4px] bg-black rounded-full mt-4 mb-[40px]"></div>
            </h2>
          </motion.div>

          {/* Feature List */}
          <div className="flex flex-col mb-10">
            {features.map((featureKey, index) => (
              <motion.div
                key={featureKey}
                className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Circular Dot (Bullet Point) */}
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-black mt-2.5 shadow-sm"></div>
                
                {/* Feature Text */}
                <p className="text-black text-lg leading-relaxed font-normal">
                  {t(featureKey)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Button 1 */}
            <button className="h-[52px] px-8 bg-[#fbbc04] hover:bg-[#d72323] hover:text-white text-black font-bold rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-md w-full md:w-auto">
              {t('orderNow')}
            </button>
            
            {/* Button 2 */}
            <button className="h-[52px] px-8 bg-[#fbbc04] hover:bg-[#d72323] hover:text-white text-black font-bold rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-md w-full md:w-auto">
              {t('learnMore')}
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CustomizedOptionsSection;
