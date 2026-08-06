"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Info } from 'lucide-react';

const dealLocations = [
  {
    name: 'LAVAL',
    address: '1228A Boulevard du Curé-Labelle, Laval QC'
  },
  {
    name: 'MILTON',
    address: '6000 Main Street West, Unit 9, Milton ON'
  },
  {
    name: 'CAMBRIDGE',
    address: '480 Hespeler Road, Cambridge ON'
  },
  {
    name: 'MISSISSAUGA',
    address: '5165 Dixie Road, Unit 2B, Mississauga ON'
  }
];

export default function OrderPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-gray-50 relative pt-25 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Section */}
        <div className="flex flex-col gap-6 md:gap-8 mb-12 lg:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0a0a] font-['Outfit',sans-serif] tracking-tight"
          >
            Our Locations
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="w-full max-w-150 bg-[#d72323] rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              Enter your address to find the closest location
            </h2>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full pl-12 pr-4 py-3.5 md:py-4 bg-white text-black font-medium rounded-xl outline-none focus:ring-2 focus:ring-black/20 shadow-inner"
              />
            </div>
          </motion.div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 lg:mb-20">
          {dealLocations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="relative flex flex-col bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-shadow"
            >
              {/* Info Icon */}
              <button 
                type="button" 
                className="absolute top-6 right-6 p-1.5 rounded-full border-2 border-[#d72323] text-[#d72323] hover:bg-[#d72323] hover:text-white transition-colors"
                aria-label={`More info about ${loc.name}`}
              >
                <Info className="w-5 h-5" />
              </button>

              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a0a0a] font-['Outfit',sans-serif] uppercase mb-2 pr-12">
                {loc.name}
              </h3>
              <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed maxw-[-85%] mb-8">
                {loc.address}
              </p>

              <div className="mt-auto">
                <button
                  type="button"
                  className="w-fit bg-[#d72323] hover:bg-[#b01c1c] text-white font-bold text-sm md:text-base uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-87.5 md:h-125 lg:h-162.5 rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/map_125206.jpg"
            alt="Grillado's Restaurant Locations Map"
            fill
            className="object-cover"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
        </motion.div>

      </div>
    </main>
  );
}
