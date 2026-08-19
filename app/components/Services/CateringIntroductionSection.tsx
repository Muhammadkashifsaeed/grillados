"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const CateringIntroductionSection = () => {
  const t = useTranslations('CateringIntroduction');

  const paragraphs = ['p1', 'p2', 'p3', 'p4', 'p5'];

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Side - Text */}
        <div className="w-full md:w-[55%] flex flex-col">
          
          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '35px', lineHeight: '46px', color: 'rgb(250, 174, 64)' }}
            >
              {t('titleColored')}
            </h3>
            <h2 
              className="mt-2 whitespace-pre-line"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '50px', lineHeight: '65px', color: 'rgb(0, 0, 0)' }}
            >
              {t('titleBlack')}
            </h2>
          </motion.div>

          {/* Paragraphs */}
          <div 
            className="space-y-6 text-left"
            style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: 'rgb(0, 0, 0)' }}
          >
            {paragraphs.map((pKey, index) => (
              <motion.p
                key={pKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {t(pKey)}
              </motion.p>
            ))}
          </div>

        </div>

        {/* Right Side - Video */}
        <motion.div 
          className="w-[90%] sm:w-[70%] md:w-[40%] lg:w-[35%] mx-auto flex justify-center md:justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-[400px] aspect-[9/16] shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02] border-4 border-white">
            <video
              className="w-full h-full object-cover"
              src="https://grillados.ca/wp-content/uploads/2025/04/Add-2-reel.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Grillado Catering Promotional Video"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CateringIntroductionSection;
