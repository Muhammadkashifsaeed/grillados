"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function EventsCateringSection() {
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
          {/* Top Icon: focus.png */}
          <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] mb-6">
            <Image
              src="/images/focus.png"
              alt="Focus Icon"
              fill
              className="object-contain"
              sizes="100px"
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase leading-tight tracking-wide mb-6">
            Catering service for events
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-[450px] mb-8 font-medium">
            When a big event is on the horizon, focus on what matters most and let us take care of the food. With a variety of dishes and impeccable preparation, Grillado is ready to make your event unforgettable.
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
            src="/images/akerrs.png"
            alt="Events Catering"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

      </div>
    </section>
  );
}
