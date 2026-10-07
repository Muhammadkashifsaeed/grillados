"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

interface LocationCardProps {
  name: string;
  image: string;
  address: string;
  phone: string;
  phoneLink: string;
  reverse: boolean;
  index: number;
}

export default function LocationCard({
  name,
  image,
  address,
  phone,
  phoneLink,
  reverse,
  index,
}: LocationCardProps) {
  // Generate Google Maps search link based on address
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="flex flex-col lg:flex-row items-stretch w-full mx-auto max-w-2xl lg:max-w-none rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-200"
    >
      {/* Image Container Link */}
      <a 
        href="https://grillados.bycalibre.ca/location" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative w-full aspect-video sm:h-75 md:h-87.5 lg:h-auto lg:aspect-auto lg:w-[40%] shrink-0 cursor-pointer block group"
      >
        <Image
          src={image}
          alt={`Grillado's ${name}`}
          fill
          className="w-full h-full object-cover object-center rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority={index === 0}
        />
      </a>

      {/* Info Box */}
      <div className="flex flex-col justify-center w-full lg:w-[60%] p-6 md:p-8 lg:p-12 relative overflow-hidden group">
        {/* Subtle premium gradient background for the white box */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/50 z-0"></div>
        <div className="relative z-10">
        <h3 
          className="capitalize tracking-wide mb-2"
          style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '24px', lineHeight: 'clamp(24px, 3.4vw, 34px)', color: 'rgb(250,174,65)' }}
        >
          {name}
        </h3>

        <div className="flex flex-col gap-3">
          {/* Address Link */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5"
          >
            <div className="mt-0.5 shrink-0">
              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
            </div>
            <p className="text-[#0a0a0a] text-xs md:text-sm lg:text-base font-medium leading-relaxed">
              {address.split(',').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part.trim()}
                  {i < arr.length - 1 && (i === 0 ? ',' : <br />)}
                </React.Fragment>
              ))}
            </p>
          </a>

          {/* Phone Link */}
          <a
            href={phoneLink}
            className="flex items-center gap-2.5"
          >
            <div className="shrink-0">
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
            </div>
            <p className="text-[#0a0a0a] text-xs md:text-sm lg:text-base font-medium">
              {phone}
            </p>
          </a>
        </div>
        </div>
      </div>
    </motion.div>
  );
}
