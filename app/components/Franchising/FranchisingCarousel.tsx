"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FranchisingCarousel() {
  const baseImages = Array.from({ length: 18 }, (_, i) => `/images/Canada${i + 1}.jpeg`);
  const extraImages = [
    '/images/Grillados1.jpg',
    '/images/Grillados-Cambridg2.jpg',
    '/images/Grillados-Cambridg3.jpg',
    '/images/Grillados-Cambridg4.jpg',
    '/images/Grillados-Cambridg5.jpg'
  ];
  const images = [...baseImages, ...extraImages];
  
  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="w-full bg-white py-6 overflow-hidden">
      <div className="relative w-full flex flex-col items-center">
        
        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden flex">
          
          <motion.div
            className="flex items-center gap-2"
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
                className="relative flex-shrink-0 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-sm"
              >
                <Image
                  src={src}
                  alt={`Location ${index + 1}`}
                  fill sizes="100vw"
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
