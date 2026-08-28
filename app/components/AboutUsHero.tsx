"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUsHero = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-black overflow-hidden">

      {/* Background Image - Aspect ratio matching the provided screenshot exactly */}
      <div className="w-full relative aspect-[100/34] md:aspect-[100/31] max-h-[55vh] md:max-h-[65vh]">
        <Image
          src="/images/Grillados-Cambridge-interior.jpg"
          alt="About Us Background"
          fill
          priority
          quality={100}
          className="object-cover object-[50%_20%]"
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay for better text readability (lightened for visibility) */}
      <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>

    </section>
  );
};

export default AboutUsHero;
