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
        src="/images/Picture-background.png"
        alt="Gallery Hero"
        fill sizes="100vw"
        className="object-cover"
        quality={100}
        unoptimized={true}
        priority
      />

      {/* No overlay to keep dishes clear */}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Title removed per request */}
      </div>
    </section>
  );
}
