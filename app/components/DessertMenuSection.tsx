'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const menuItems = [
  { translationKey: 'ferreroRocherCake', price: '7.99' },
  { translationKey: 'oreoCake', price: '7.99' },
  { translationKey: 'natas', price: '4.99' },
  { translationKey: 'iceCream1Scoop', price: '4.99' },
];

export const DessertMenuSection = () => {
  const t = useTranslations('Desserts');

  return (
    <section className="relative w-full pt-5 lg:pt-12 pb-0 bg-[#0a0a0a] overflow-hidden">
      {/* Background with subtle food outline pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/images/footer-doodle.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col gap-12 lg:gap-16">
        
        <style>{`
          @media (min-width: 1024px) {
            .clip-slant-left-fade {
              clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
            }
          }
        `}</style>
        
        {/* ROW 1: e-1 and f-1 Images */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex flex-row items-center justify-center py-8 lg:py-12"
        >
          {/* e-1.png — left */}
          <div className="relative w-[55%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] z-10 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/e-1.png"
              alt="e-1.png"
              fill
              className="object-contain object-bottom md:object-bottom-right scale-110 drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>
          {/* f-1.png — right */}
          <div className="relative w-[55%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] z-0 ml-[-14%] lg:ml-[-15%] transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/f-1.png"
              alt="f-1.png"
              fill
              className="object-contain object-top md:object-bottom-left scale-110 drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </motion.div>

        {/* ROW 2: Dessert Menu + a-1 Image */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-8 xl:gap-12">
          {/* Left Column: Menu Items */}
          <motion.div 
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="mb-8 lg:mb-10 flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#fbbc04] font-['Outfit',sans-serif] uppercase tracking-wide leading-tight inline-block">
                {t('heading')}
              </h2>
              {/* Divider matched to heading width using w-full max-w limit to not stretch fully */}
              <div className="w-full max-w-37.5 md:max-w-50 lg:max-w-62.5 h-1.5 bg-[#fbbc04] mt-4"></div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div className="flex items-end w-full gap-2 sm:gap-3">
                    <span className="text-white text-base md:text-lg font-normal whitespace-nowrap">
                      {t(`items.${item.translationKey}`)}
                    </span>
                    <div
                      className="grow mb-1"
                      style={{
                        borderBottom: '2px dotted rgba(255,255,255,0.5)',
                        minWidth: '20px'
                      }}
                    ></div>
                    <span className="text-white text-base md:text-lg font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: a-1 Image */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative lg:min-h-[500px] py-8 lg:py-12 lg:mb-24"
          >
            <div className="relative w-full h-full lg:min-h-[500px]">
            <Image 
                src="/images/a-1.png"
                alt="Dessert"
                width={1000}
              height={750}
                className="w-full h-auto rounded-xl lg:rounded-none object-contain object-center lg:object-right scale-100 lg:scale-110 drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* ROW 3: b-1 and c-1 Images */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex flex-row items-center justify-center py-8 lg:py-12"
        >
          {/* b-1.png — left */}
          <div className="relative w-[55%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] z-10 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/b-1.png"
              alt="b-1.png"
              fill
              className="object-contain object-bottom md:object-bottom-right scale-110 drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>
          {/* c-1.png — right */}
          <div className="relative w-[55%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] z-0 ml-[-14%] lg:ml-[-15%] transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/c-1.png"
              alt="c-1.png"
              fill
              className="object-contain object-top md:object-bottom-left scale-110 drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default DessertMenuSection;
