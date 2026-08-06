"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function GiftCardsSection() {
  const locale = useLocale();
  
  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
        
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/propses.png"
            alt="Gift Cards"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right Column: Top Image + Content */}
        <div className="flex flex-col items-center justify-center w-full h-full px-6 md:px-12 lg:px-20 xl:px-24 py-12 md:py-16">
          
          {/* Top Image: simply.png (Smaller) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-25 h-25 md:w-32.5 md:h-32.5 overflow-hidden mb-6"
          >
            <Image
              src="/images/simply.png"
              alt="Simply Gift"
              fill
              className="object-contain"
              sizes="130px"
            />
          </motion.div>

          {/* Bottom Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col items-center justify-center text-center"
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text- font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase leading-tight tracking-wide mb-6">
              Gift Cards
            </h2>

            {/* Description */}
            <p className="text-gray-600 text- md:text- leading-relaxed mb-8 font-medium max-w-112.5">
              Give the gift of good food to your loved ones. Grillado offers a range of gift cards for all occasions: simply choose one and treat your loved ones to the best Portuguese chicken in Canada.
            </p>

            {/* Button */}
            <Link href={`/${locale}/contact`}>
              <button className="px-10 py-3 sm:py-4 bg-[#fbbc04] hover:bg-[#d72323] active:scale-95 text-black hover:text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide">
                Contact us
              </button>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
