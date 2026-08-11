import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MenuDualImageProps {
  leftImageSrc: string;
  rightImageSrc: string;
  mobileLeftImageSrc?: string;
  mobileRightImageSrc?: string;
}

export const MenuDualImage = ({ 
  leftImageSrc, 
  rightImageSrc,
}: MenuDualImageProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full flex flex-row items-center justify-center py-4 lg:py-8 pr-12 md:pr-16 lg:pr-[80px]"
      >
        {/* Left Image */}
        <div className="relative w-[55%] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] xl:h-[600px] z-10">
          <Image
            src={leftImageSrc}
            alt="Menu Item Left"
            fill
            className="object-contain object-bottom md:object-bottom-right scale-115 drop-shadow-2xl"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>

        {/* Right Image */}
        <div className="relative w-[55%] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] xl:h-[600px] z-0 ml-[-15%]">
          <Image
            src={rightImageSrc}
            alt="Menu Item Right"
            fill
            className="object-contain object-top md:object-bottom-left scale-115 drop-shadow-2xl"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </motion.div>
    </>
  );
};
