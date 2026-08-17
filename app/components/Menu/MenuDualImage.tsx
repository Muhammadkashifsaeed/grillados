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
  mobileLeftImageSrc,
  mobileRightImageSrc,
}: MenuDualImageProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`w-full flex flex-col md:flex-row items-center justify-end lg:pr-[80px] ${(mobileLeftImageSrc || mobileRightImageSrc) ? 'py-4 lg:pt-0 lg:pb-32' : 'py-0 lg:pt-0 lg:pb-32'}`}
      >
        {/* Desktop Left Image */}
        <div className="relative w-[55%] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] xl:h-[600px] z-10 hidden md:block">
          <Image
            src={leftImageSrc}
            alt="Menu Item Left"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-contain object-bottom md:object-bottom-right scale-[1.15] drop-shadow-2xl"
            priority
          />
        </div>

        {/* Desktop Right Image */}
        <div className="relative w-[55%] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] xl:h-[600px] z-0 ml-[-15%] hidden md:block">
          <Image
            src={rightImageSrc}
            alt="Menu Item Right"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-contain object-top md:object-bottom-left scale-[1.15] drop-shadow-2xl"
          />
        </div>

        {/* Mobile Dual Images */}
        {(mobileLeftImageSrc || mobileRightImageSrc) && (
          <div className="w-full max-w-[500px] mx-auto flex flex-row md:hidden items-center justify-center mt-6 rounded-xl overflow-hidden drop-shadow-xl bg-black">
            {mobileLeftImageSrc && (
              <Image
                src={mobileLeftImageSrc}
                alt="Mobile Menu Left"
                width={1000}
                height={750}
                sizes="(max-width: 1024px) 50vw, 50vw"
                className="w-1/2 h-auto object-cover block m-0 p-0 scale-[1.15] origin-right"
              />
            )}
            {mobileRightImageSrc && (
              <Image
                src={mobileRightImageSrc}
                alt="Mobile Menu Right"
                width={1000}
                height={750}
                sizes="(max-width: 1024px) 50vw, 50vw"
                className="w-1/2 h-auto object-cover block m-0 p-0 scale-[1.15] origin-left"
              />
            )}
          </div>
        )}
      </motion.div>
    </>
  );
};
