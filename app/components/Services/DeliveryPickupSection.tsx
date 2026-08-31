"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function DeliveryPickupSection() {
  const t = useTranslations('DeliveryPickup');
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-r from-[#f08519] to-[#DAAF18]">

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 items-stretch">

        {/* Left Column: Content */}
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 xl:px-24 py-12 md:py-16">

          {/* Top Icon: Vector.png */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-22.5 h-22.5 md:w-27.5 md:h-27.5 mb-6"
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
            className="text-3xl sm:text-4xl lg:text- font-extrabold text-white font-['Outfit',sans-serif] leading-tight tracking-wide mb-6"
          >
            At Grillado&apos;s, we offer <br className="hidden sm:block" /> 10 minutes of delivery <br className="hidden sm:block" /> and pickup.
          </motion.h2>

          {/* Contact Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-white text-lg md:text-xl font-medium">
              Call <span style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '22px', lineHeight: '36px', color: 'rgb(182, 34, 59)' }}>(514) 933-9399</span> for more details!
            </p>
          </motion.div>

          {/* Delivery Partner Logos */}
          <div className="flex flex-col items-center gap-4">
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
            <div className="bg-transparent w-35 h-15 md:w-40 md:h-17.5 relative px-4 mt-4">
              <Image src="/images/Rectangle3.png" alt="Delivery Partner 3" fill className="object-contain scale-[1.15] mix-blend-multiply" sizes="160px" />
            </div>
          </div>

        </div>

        {/* Right Column: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full h-100 sm:h-125 md:h-150 lg:h-175 xl:h-200"
        >
          {/* Note: Adjusting image fit to ensure it blends nicely with the background without strict bounding boxes unless desired */}
          <Image
            src="/images/delivery_boy_ai.png"
            alt="Delivery Rider"
            fill
            className="object-contain md:object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

      </div>
    </section>
  );
}
