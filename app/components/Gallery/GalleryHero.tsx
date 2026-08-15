"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function GalleryHero() {
  const t = useTranslations('Gallery');

  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/amaizing.png"
        alt="Gallery Hero"
        fill sizes="100vw"
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay for text visibility */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Title removed per request */}
      </div>
    </section>
  );
}
