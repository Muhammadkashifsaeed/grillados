"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function GalleryHero() {
  const t = useTranslations('Gallery');

  return (
    <section className="relative w-full h-[30vh] md:h-[40vh] min-h-[250px] z-10 overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/images/Picture-back-ground.png" 
        alt="Gallery Hero" 
        fill 
        priority
        className="object-cover object-center" 
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Title removed per request */}
      </div>
    </section>
  );
}
