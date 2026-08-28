"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";
import { Search, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const countryList = [
  { code: '+1', iso: 'ca', name: 'Canada' },
  { code: '+1', iso: 'us', name: 'United States' },
  { code: '+44', iso: 'gb', name: 'United Kingdom' },
  { code: '+61', iso: 'au', name: 'Australia' },
  { code: '+33', iso: 'fr', name: 'France' },
  { code: '+49', iso: 'de', name: 'Germany' },
  { code: '+39', iso: 'it', name: 'Italy' },
  { code: '+34', iso: 'es', name: 'Spain' },
  { code: '+91', iso: 'in', name: 'India' },
  { code: '+92', iso: 'pk', name: 'Pakistan' },
  { code: '+971', iso: 'ae', name: 'UAE' },
  { code: '+966', iso: 'sa', name: 'Saudi Arabia' },
  { code: '+86', iso: 'cn', name: 'China' },
  { code: '+81', iso: 'jp', name: 'Japan' },
  { code: '+55', iso: 'br', name: 'Brazil' },
  { code: '+52', iso: 'mx', name: 'Mexico' },
  { code: '+27', iso: 'za', name: 'South Africa' },
  { code: '+20', iso: 'eg', name: 'Egypt' },
  { code: '+90', iso: 'tr', name: 'Turkey' },
];

export default function ContactCateringSection() {
  const t = useTranslations('ContactCatering');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const inputClass = "w-full h-13 md:h-14 px-4 rounded-xl bg-white text-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#DAAF18] transition-all duration-300 placeholder:text-gray-400 font-medium";
  const labelClass = "block text-sm font-semibold text-gray-200 mb-2";
  const sectionTitleClass = "text-2xl font-bold text-white font-['Outfit',sans-serif] mb-6 tracking-wide border-b border-gray-600/50 pb-2";

  return (
    <section id="contact" className="relative w-full min-h-screen flex flex-col items-center justify-start pb-24">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cable32.png"
          alt="Contact Background"
          fill sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="uppercase tracking-wide mb-10 mt-16 text-center drop-shadow-lg"
          style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '48px', lineHeight: '56px', color: 'rgb(255,255,255)' }}
        >
          Get in touch
        </motion.h1>

        {/* Glassmorphism Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-6xl bg-[#A77B5C]/40 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border border-white/20"
        >
          <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
            
            {/* Section 1: Contact Information */}
            <section>
              <h2 className={sectionTitleClass}>{t('contactInfo')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <div>
                    <label className={labelClass}>{t('firstName')}</label>
                    <input type="text" placeholder={t('firstName')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('phoneNumber')}</label>
                    <div className="flex h-13 md:h-14 rounded-xl bg-white border border-transparent focus-within:ring-2 focus-within:ring-[#DAAF18] transition-all duration-300">
                      {/* Functional Custom Country Code Selector with Real Flags */}
                      <div className="relative flex items-center bg-gray-100 border-r border-gray-200 hover:bg-gray-200 transition-colors rounded-l-xl" ref={dropdownRef}>
                        <div 
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="flex items-center gap-2 px-3 cursor-pointer h-full"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`https://flagcdn.com/w20/${selectedCountry.iso}.png`} alt={selectedCountry.name} className="w-5 h-auto rounded-sm shadow-sm" />
                          <span className="text-gray-700 font-medium text-base">{selectedCountry.code}</span>
                          <ChevronDown size={16} className="text-gray-500" />
                        </div>
                        
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 shadow-xl rounded-xl z-50 max-h-60 overflow-y-auto py-2 flex flex-col">
                            {countryList.map((c, idx) => (
                              <div 
                                key={idx}
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsDropdownOpen(false);
                                }}
                                className="flex items-center gap-3 px-4 py-2 hover:bg-orange-50 cursor-pointer transition-colors"
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={`https://flagcdn.com/w20/${c.iso}.png`} alt={c.name} className="w-5 h-auto rounded-sm shadow-sm" />
                                <span className="font-semibold text-gray-800 w-10">{c.code}</span>
                                <span className="text-gray-500 text-sm">{c.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <input 
                        type="tel" 
                        placeholder={t('phoneNumber').replace('*', '')} 
                        required
                        className="flex-1 h-full px-4 text-gray-900 focus:outline-none placeholder:text-gray-400 font-medium rounded-r-xl" 
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  <div>
                    <label className={labelClass}>{t('lastName')}</label>
                    <input type="text" placeholder={t('lastName')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('email')}</label>
                    <input type="email" placeholder={t('email').replace('*', '')} required className={inputClass} />
                  </div>
                </div>
                
              </div>
            </section>

            {/* Section 2: Event Information */}
            <section>
              <h2 className={sectionTitleClass}>{t('eventInfo')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
                
                {/* Left */}
                <div>
                  <label className={labelClass}>{t('guests')}</label>
                  <input type="text" placeholder={t('guestsPlaceholder')} required className={inputClass} />
                </div>

                {/* Right */}
                <div>
                  <label className={labelClass}>{t('deliveryDate')}</label>
                  <div className="relative">
                    <input type="date" required className={`${inputClass} text-gray-400 appearance-none`} />
                    {/* Custom Calendar Icon Overlay to match design if native isn't enough, but native date picker works */}
                  </div>
                </div>
              </div>

              {/* Full Width */}
              <div className="mb-6">
                <label className={labelClass}>{t('deliveryTime')}</label>
                <input type="time" placeholder="16:00" required className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>{t('deliveryNotes')}</label>
                <textarea 
                  placeholder={t('deliveryNotesPlaceholder')} 
                  className="w-full h-45 p-4 rounded-xl bg-white text-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#DAAF18] transition-all duration-300 placeholder:text-gray-400 font-medium resize-none"
                ></textarea>
              </div>
            </section>

            {/* Section 3: Delivery Information */}
            <section>
              <h2 className={sectionTitleClass}>{t('deliveryInfo')}</h2>
              
              <div className="flex flex-col gap-6">
                {/* Full Width Search */}
                <div>
                  <label className={labelClass}>{t('searchAddress')}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search size={20} className="text-gray-400" />
                    </div>
                    <input type="text" placeholder={t('searchAddressPlaceholder')} className={`${inputClass} pl-12`} />
                  </div>
                </div>

                {/* Full Width Address */}
                <div>
                  <label className={labelClass}>{t('address')}</label>
                  <input type="text" placeholder={t('address').replace('*', '')} required className={inputClass} />
                </div>

                {/* City & Postal Code */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className={labelClass}>{t('city')}</label>
                    <input type="text" placeholder={t('city').replace('*', '')} required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('postalCode')}</label>
                    <input type="text" placeholder={t('postalCode').replace('*', '')} required className={inputClass} />
                  </div>
                </div>

                {/* Nearby Landmark Select */}
                <div>
                  <label className={labelClass}>{t('nearbyLandmark')}</label>
                  <div className="relative">
                    <select defaultValue="" required className={`${inputClass} appearance-none cursor-pointer text-gray-500`}>
                      <option value="" disabled>{t('selectLocation')}</option>
                      <option value="laval">{t('laval')}</option>
                      <option value="milton">{t('milton')}</option>
                      <option value="cambridge">{t('cambridge')}</option>
                      <option value="mississauga">{t('mississauga')}</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <ChevronDown size={20} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Submit & Consent Section */}
            <div className="flex flex-col items-center mt-4">
              
              {/* SMS Consent */}
              <label className="flex items-start gap-4 cursor-pointer mb-8 max-w-4xl group">
                <div className="relative flex items-center mt-1">
                  <input type="checkbox" className="peer w-6 h-6 rounded-md border-gray-300 text-[#DAAF18] focus:ring-[#DAAF18] cursor-pointer appearance-none bg-white checked:bg-[#DAAF18] checked:border-transparent transition-all duration-200" />
                  <svg className="absolute w-4 h-4 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm leading-relaxed select-none group-hover:text-white transition-colors duration-200">
                  {t('consent')}
                </span>
              </label>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`w-full h-15 text-white font-extrabold text-xl rounded-xl shadow-lg uppercase tracking-widest font-['Outfit',sans-serif] transition-all duration-300 flex items-center justify-center ${
                  isSuccess 
                    ? 'bg-green-500 hover:bg-green-600 shadow-green-500/30' 
                    : isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#DAAF18] hover:bg-[#e0a217] hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('processing')}
                  </span>
                ) : isSuccess ? (
                  t('success')
                ) : (
                  t('submit')
                )}
              </button>

              {/* Legal Links */}
              <div className="mt-6 flex items-center gap-2 text-sm text-blue-400 font-medium">
                <Link href="/privacy" className="hover:text-blue-300 hover:underline transition-colors">{t('privacy')}</Link>
                <span className="text-gray-500">|</span>
                <Link href="/terms" className="hover:text-blue-300 hover:underline transition-colors">{t('terms')}</Link>
              </div>

            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
