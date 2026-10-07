"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const CateringIntroductionSection = () => {
  // Trigger hot reload for translation changes
  const t = useTranslations('CateringIntroduction');

  const paragraphs = ['p1', 'p2', 'p3', 'p4', 'p5'];

  return (
    <section className="hidden md:block w-full bg-white overflow-hidden">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Side - Text */}
        <div className="w-full md:w-[52%] flex flex-col pl-2 md:pl-4 lg:pl-8">
          
          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: 'clamp(22px, 3.5vw, 35px)', lineHeight: 'clamp(30px, 4.6vw, 46px)', color: 'rgb(250, 174, 64)' }}
            >
              {t('titleColored')}
            </h3>
            <h2 
              className="mt-2 whitespace-pre-line"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(30px, 5vw, 50px)', lineHeight: 'clamp(42px, 6.5vw, 65px)', color: 'rgb(0, 0, 0)' }}
            >
              {t('titleBlack')}
            </h2>
          </motion.div>

          {/* Paragraphs */}
          <div 
            className="space-y-7 md:space-y-8 text-left"
            style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '30px', color: 'rgb(0, 0, 0)' }}
          >
            {paragraphs.map((pKey, index) => {
              const text = t(pKey);
              const hasPrefix = text.startsWith("Tailored Menus:");
              return (
                <motion.p
                  key={pKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="leading-relaxed"
                >
                  {hasPrefix ? (
                    <>
                      <span className="font-semibold text-black">Tailored Menus:</span>
                      {text.replace("Tailored Menus:", "")}
                    </>
                  ) : (
                    text
                  )}
                </motion.p>
              );
            })}
          </div>

        </div>

        {/* Right Side - Video (Fixed static, increased size by +6%, sharp corners) */}
        <div className="hidden md:flex md:w-[45%] lg:w-[40%] max-w-[466px] mx-auto justify-center shrink-0">
          <div className="relative w-full aspect-[9/16] shadow-2xl overflow-hidden border-4 border-white rounded-none">
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
        </div>

      </div>
    </section>
  );
};

export default CateringIntroductionSection;
