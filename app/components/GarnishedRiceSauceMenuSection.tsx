'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sauceLevels = [
  {
    name: 'Lemon & Herbs',
    description: 'A tangy and tangy blend with a refreshing citrus touch.',
    image: '/images/Fiery.png',
    colorClass: 'text-green-500',
  },
  {
    name: 'AVERAGE',
    description: 'A balanced sauce, slightly spicy with a touch of warmth.',
    image: '/images/Fiery1.png',
    colorClass: 'text-orange-500',
  },
  {
    name: 'Strong',
    description: "Fiery, bold and filled with tangy warmth – a spice lover's dream!",
    image: '/images/Fiery2.png',
    colorClass: 'text-red-500',
  },
  {
    name: 'Barbecue',
    description: 'A rich, smoky and slightly sweet sauce with a classic barbecue flavor.',
    image: '/images/Fiery3.png',
    colorClass: 'text-[#b91c1c]', // Dark Red
  },
];

export const GarnishedRiceSauceMenuSection = () => {
  return (
    <section className="relative w-full py-12 md:py-20 bg-[#0a0a0a] overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-4 xl:gap-8">
          
          {/* Left Column: Menu Items */}
          <motion.div 
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[48%] flex flex-col justify-center lg:pr-6 xl:pr-10"
          >
            <div className="mb-8 lg:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500 font-['Outfit',sans-serif] uppercase tracking-wide leading-snug">
                GARNISHED RICE
              </h2>
              <div className="w-full h-1.5 bg-orange-500 mt-4"></div>
            </div>

            <div className="mb-10 w-full">
              <div className="flex flex-col gap-10 md:gap-12 lg:gap-14 w-full">
                {sauceLevels.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                    className="flex flex-row items-center w-full gap-6 md:gap-8 lg:gap-10"
                  >
                    <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 flex-shrink-0">
                      <Image 
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h4 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold font-['Outfit',sans-serif] uppercase tracking-wide mb-1 ${item.colorClass}`}>
                        {item.name}
                      </h4>
                      <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Images */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[50%] flex flex-col items-end justify-start gap-8"
          >
            {/* Top Large Peri Image */}
            <div className="relative w-full min-h-[450px] md:min-h-[550px] lg:min-h-[650px]">
              <Image 
                src="/images/zasty.png"
                alt="Zesty Food"
                fill
                className="object-contain object-right drop-shadow-2xl scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Bottom Saucess Image */}
            <div className="relative w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
              <Image 
                src="/images/saucess.png"
                alt="Saucess"
                fill
                className="object-contain object-right drop-shadow-2xl scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GarnishedRiceSauceMenuSection;
