"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUsHero = () => {
  return (
    <section className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/best.png" 
          alt="About Us Background" 
          fill 
          priority
          quality={100}
          className="object-cover object-center" 
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full px-4">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-2"
        >
          <h1 className="text-white font-extrabold tracking-tight text-[36px] sm:text-[42px] md:text-[50px] lg:text-[60px] leading-none drop-shadow-lg uppercase font-['Outfit',sans-serif]">
            About Us
          </h1>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUsHero;
