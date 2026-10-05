"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function DeliveryPickupSection() {
  const t = useTranslations('DeliveryPickup');
  return (
    <section className="relative w-full max-w-[95%] lg:max-w-7xl mx-auto mt-12 md:mt-20 mb-6 md:mb-8 rounded-3xl overflow-hidden bg-[#121212] shadow-2xl">
      {/* Background Image */}
      <Image
        src="/images/Rectangle-1.png"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 items-stretch">

        {/* Left Column: Content */}
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 xl:px-24 py-2 md:py-4">

          {/* Top Icon: Vector.png */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-16 h-16 md:w-20 md:h-20 mb-2"
          >
            <Image
              src="/images/Vector.png"
              alt="Delivery Icon"
              fill
              className="object-contain"
              sizes="110px"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Outfit',sans-serif] leading-tight tracking-wide mb-2"
          >
            At Grillado&apos;s, we offer <br className="hidden sm:block" /> 10 minutes of delivery <br className="hidden sm:block" /> and pickup.
          </motion.h2>

          {/* Contact Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mb-4"
          >
            <p className="text-white text-lg md:text-xl font-medium">
              Call <span style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '22px', lineHeight: 'clamp(24px, 3.6vw, 36px)', color: 'rgb(182, 34, 59)' }}>(514) 933-9399</span> for more details!
            </p>
          </motion.div>

          {/* Delivery Partner Logos */}
          <div className="flex flex-col items-center gap-2">
            {/* Top Row: Rectangle1 and Rectangle2 */}
            <div className="flex flex-row gap-8 md:gap-10">
              <div className="bg-transparent w-35 h-15 md:w-40 md:h-17.5 relative px-4">
                <Image src="/images/Rectangle1.png" alt="Delivery Partner 1" fill className="object-contain scale-[1.15] mix-blend-multiply" sizes="160px" />
              </div>

              <div className="bg-transparent w-35 h-15 md:w-40 md:h-17.5 relative px-4">
                <Image src="/images/Rectangle2.png" alt="Delivery Partner 2" fill className="object-contain scale-[1.15] mix-blend-multiply" sizes="160px" />
              </div>
            </div>

            {/* Bottom Row: Rectangle3 */}
            <div className="bg-transparent w-35 h-15 md:w-40 md:h-17.5 relative px-4 mt-1">
              <Image src="/images/Rectangle3.png" alt="Delivery Partner 3" fill className="object-contain scale-[1.15] mix-blend-multiply" sizes="160px" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
