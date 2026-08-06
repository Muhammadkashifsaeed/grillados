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
      className="flex flex-col lg:flex-row items-stretch w-full mx-auto max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-2xl bg-white"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video sm:h-[300px] md:h-[350px] lg:h-auto lg:aspect-auto lg:w-[50%] shrink-0">
        <Image
          src={image}
          alt={`Grillado's ${name}`}
          fill
          className="w-full h-full object-cover object-center rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority={index === 0}
        />
      </div>

      {/* Info Box */}
      <div className="flex flex-col justify-center w-full lg:w-[50%] p-6 md:p-8 lg:p-10">
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
            <div className="mt-0.5 shrink-0">
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
            <div className="shrink-0">
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
