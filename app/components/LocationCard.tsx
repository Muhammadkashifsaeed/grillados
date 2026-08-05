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
      className={`flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-stretch w-full mx-auto max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-2xl bg-white`}
    >
      {/* Image Container */}
      <div className="relative w-full lg:w-[35%] min-h-[200px] lg:min-h-[250px] bg-white p-2 flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
          className="relative w-full h-full min-h-[180px] lg:min-h-[230px]"
        >
          <Image
            src={image}
            alt={`Grillado's ${name}`}
            fill
            className="object-contain scale-[1.12] drop-shadow-2xl saturate-110 contrast-105 rounded-[4%]"
            sizes="(max-width: 1024px) 100vw, 35vw"
          />
        </motion.div>
      </div>

      {/* Info Box */}
      <div className="flex flex-col justify-center w-full lg:w-[65%] p-4 md:p-5 lg:p-6">
        <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-orange-500 font-['Outfit',sans-serif] uppercase tracking-wide mb-2">
          {name}
        </h3>

        <div className="flex flex-col gap-3">
          {/* Address Link */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 group"
          >
            <div className="mt-0.5 flex-shrink-0">
              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-[#0a0a0a] text-xs md:text-sm lg:text-base font-medium leading-relaxed group-hover:text-orange-500 transition-colors">
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
            className="flex items-center gap-2.5 group"
          >
            <div className="flex-shrink-0">
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-[#0a0a0a] text-xs md:text-sm lg:text-base font-medium group-hover:text-orange-500 transition-colors">
              {phone}
            </p>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
