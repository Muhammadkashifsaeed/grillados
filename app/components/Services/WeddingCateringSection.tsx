"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function WeddingCateringSection() {
  const locale = useLocale();
  
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      
      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center order-2 md:order-1"
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase leading-tight tracking-wide mb-4">
            Wedding catering service
          </h2>
          
          {/* Divider */}
          <div className="w-[150px] mb-6 flex justify-center">
             <Image 
               src="/images/catering.png" 
               alt="Divider" 
               width={200} 
               height={20} 
               className="w-full h-auto object-contain"
             />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-[450px] mb-8 font-medium">
            Your wedding is a once-in-a-lifetime event. Elevate your catering service to the next level with Grillado's certified halal dishes, prepared with fresh ingredients and the best Portuguese chicken in Canada.
          </p>

          {/* Button */}
          <Link href={`/${locale}/contact`}>
            <button className="px-10 py-3 sm:py-4 bg-[#d72323] hover:bg-[#b01c1c] active:scale-95 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide">
              Contact us
            </button>
          </Link>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[24px] overflow-hidden shadow-2xl order-1 md:order-2"
        >
          <Image
            src="/images/servededd.png"
            alt="Wedding Catering Service"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

      </div>
    </section>
  );
}
