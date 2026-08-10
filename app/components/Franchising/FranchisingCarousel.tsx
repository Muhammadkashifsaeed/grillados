"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FranchisingCarousel() {
  const images = Array.from({ length: 18 }, (_, i) => `/images/Canada${i + 1}.jpeg`);
  
  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="relative w-full flex flex-col items-center">
        
        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden flex">
          
          <motion.div
            className="flex items-center gap-6"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 90,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ 
              width: "max-content",
            }}
          >
            {duplicatedImages.map((src, index) => (
              <div 
                key={index} 
                className="relative flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-[calc(100vw/6-24px)] lg:h-64 rounded-2xl overflow-hidden shadow-sm"
              >
                <Image
                  src={src}
                  alt={`Location ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
