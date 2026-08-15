"use client";

import React from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function BirthdayCateringSection() {
  const locale = useLocale();

  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
        
        {/* Left Column: sera.png */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/sera.png"
            alt="Birthday Catering"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right Column: culinary.png + Content */}
        <div className="flex flex-col items-center justify-center w-full h-full px-6 md:px-12 lg:px-20 xl:px-24 py-12 md:py-16">
          
          {/* Top Image: culinary.png (Icon Size) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-20 h-20 md:w-25 md:h-25 overflow-hidden mb-6"
          >
            <Image
              src="/images/culinary.png"
              alt="Culinary Delights"
              fill
              className="object-contain"
              sizes="100px"
            />
          </motion.div>

          {/* Bottom Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center"
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase leading-tight tracking-wide mb-4">
              birthday!
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-112.5">
              With Grillado&apos;s countless menu choices, no one will be left out in this ocean of culinary delights. Let Grillado make your birthday… delicious.
            </p>

            {/* Button */}
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-3 sm:py-4 bg-[#fbbc04] hover:bg-[#d72323] active:scale-95 text-black hover:text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide">
              Contact us
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
