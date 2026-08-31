"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactFormSection from '../../components/ContactFormSection';

const locations = [
  {
    city: "Montreal",
    address: "Montreal - 2079 Rue Ste-Catherine O Montréal, QC H3H 1M6",
    phone: "(514) 933-9399",
  },
  {
    city: "Laval",
    address: "Laval - 1228A Boulevard Curé-Labelle, Laval, QC H7W 2W7",
    phone: "(450) 688-3399",
  },
  {
    city: "Milton",
    address: "6000 Main St W Unit# 9, Milton, ON L9T 2X5, Canada",
    phone: "(905) 878-7770",
  },
  {
    city: "Mississauga",
    address: "5165 Dixie Rd Unit 2B, Mississauga, ON L4W 4G1",
    phone: "(905) 625-5558",
  },
  {
    city: "Cambridge",
    address: "23-480 Hespeler Rd Cambridge ontario N1R7R9",
    phone: "(519) 621-7771",
  }
];

export default function ContactUsPage() {
  const t = useTranslations('ContactPage');
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Texture for the rest of the page (if any) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/Black-Background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      {/* Hero Section */}
      <div className="relative w-full h-[40vh] min-h-75 md:h-[50vh] flex items-center justify-center z-10">
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/Picture-back-ground-5.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Optional overlay if needed for contrast */}
        <div className="absolute inset-0 z-0"></div>

        {/* Heading */}
        <div className="z-10 bg-[#FAC716] px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-lg border-2 border-white/20 inline-block">
          <h1 
            className="uppercase tracking-wide text-center drop-shadow-sm"
            style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(255, 255, 255)', fontSize: '55px', lineHeight: '60px' }}
          >
            {t('title')}
          </h1>
        </div>
      </div>

      {/* Find Us Here Section */}
      <div className="w-full bg-white pt-16 md:pt-24 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <h2 
            className="uppercase tracking-wide text-center mb-16"
            style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(35, 31, 30)', fontSize: '48px', lineHeight: '56px' }}
          >
            Find Us Here
          </h2>

          {/* Cards Container (3 on first line, 2 centered on second line) */}
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {locations.map((loc, idx) => {
              // Default to Fade Down for the first 3 boxes (indices 0, 1, 2)
              let initialProps: any = { opacity: 0, y: -50 };
              let animateProps: any = { opacity: 1, y: 0 };
              
              if (idx === 3) {
                // Fade from left
                initialProps = { opacity: 0, x: -80, y: 0 };
                animateProps = { opacity: 1, x: 0, y: 0 };
              } else if (idx === 4) {
                // Fade from right
                initialProps = { opacity: 0, x: 80, y: 0 };
                animateProps = { opacity: 1, x: 0, y: 0 };
              }

              return (
                <motion.div 
                  key={idx} 
                  initial={initialProps}
                  whileInView={animateProps}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.1 }}
                  className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-[#fafafa] border-2 border-[#FAC716] rounded-xl p-8 shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
                >
                
                  <h3 
                    className="uppercase mb-6 tracking-wide"
                    style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(35, 31, 30)', fontSize: '28px', lineHeight: '32px' }}
                  >
                    {loc.city}
                  </h3>
                  
                  <div className="flex flex-col gap-5 w-full">
                    <div className="flex items-start gap-4 justify-center sm:justify-start">
                      <MapPin className="w-6 h-6 text-[#FAC716] shrink-0 mt-1" />
                      <p className="text-gray-700 text-left font-medium leading-relaxed text-base sm:text-lg">
                        {loc.address}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4 justify-center sm:justify-start">
                      <Phone className="w-6 h-6 text-[#FAC716] shrink-0" />
                      <a href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`} className="text-black text-left font-bold text-lg sm:text-xl hover:text-[#FAC716] transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
      
      {/* Contact Form Section */}
      <ContactFormSection />
    </main>
  );
}
