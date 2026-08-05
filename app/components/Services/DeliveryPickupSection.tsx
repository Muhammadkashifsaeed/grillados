"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DeliveryPickupSection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-[#f08519] to-[#f7b41c]">
      
      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Column: Content */}
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Top Icon: Vector.png */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[90px] h-[90px] md:w-[110px] md:h-[110px] mb-6"
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
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white font-['Outfit',sans-serif] leading-tight tracking-wide mb-6"
          >
            At Grillado&apos;s, we offer <br className="hidden sm:block" /> 10 minutes of delivery <br className="hidden sm:block" /> and pickup.
          </motion.h2>

          {/* Contact Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="bg-[#1c3664] rounded-[24px] px-8 py-4 mb-8 shadow-lg"
          >
            <p className="text-white text-lg md:text-xl font-medium">
              Call <span className="font-bold">(514) 933-9399</span> for more details!
            </p>
          </motion.div>

          {/* Delivery Partner Logos */}
          <div className="flex flex-col items-center gap-4">
            {/* Top Row: Rectangle1 and Rectangle2 */}
            <div className="flex flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="bg-white rounded-[16px] w-[140px] h-[60px] md:w-[160px] md:h-[70px] relative shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden px-4"
              >
                <Image src="/images/Rectangle1.png" alt="Delivery Partner 1" fill className="object-contain p-2" sizes="160px" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="bg-white rounded-[16px] w-[140px] h-[60px] md:w-[160px] md:h-[70px] relative shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden px-4"
              >
                <Image src="/images/Rectangle2.png" alt="Delivery Partner 2" fill className="object-contain p-2" sizes="160px" />
              </motion.div>
            </div>
            
            {/* Bottom Row: Rectangle3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="bg-white rounded-[16px] w-[140px] h-[60px] md:w-[160px] md:h-[70px] relative shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden px-4"
            >
              <Image src="/images/Rectangle3.png" alt="Delivery Partner 3" fill className="object-contain p-2" sizes="160px" />
            </motion.div>
          </div>
          
        </div>

        {/* Right Column: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
        >
          {/* Note: Adjusting image fit to ensure it blends nicely with the background without strict bounding boxes unless desired */}
          <Image
            src="/images/delivery_boy_ai.png"
            alt="Delivery Rider"
            fill
            className="object-contain md:object-cover rounded-[24px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

      </div>
    </section>
  );
}
