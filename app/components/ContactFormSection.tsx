"use client";

import React, { useState } from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ContactFormSection() {
  const t = useTranslations('ContactForm');
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ code: 'CA', dialCode: '+1', flag: 'https://flagcdn.com/w20/ca.png' });

  const countries = [
    { name: 'Canada', code: 'CA', dialCode: '+1', flag: 'https://flagcdn.com/w20/ca.png' },
    { name: 'United States', code: 'US', dialCode: '+1', flag: 'https://flagcdn.com/w20/us.png' },
    { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: 'https://flagcdn.com/w20/gb.png' },
    { name: 'Pakistan', code: 'PK', dialCode: '+92', flag: 'https://flagcdn.com/w20/pk.png' },
    { name: 'India', code: 'IN', dialCode: '+91', flag: 'https://flagcdn.com/w20/in.png' },
    { name: 'Bangladesh', code: 'BD', dialCode: '+880', flag: 'https://flagcdn.com/w20/bd.png' },
    { name: 'United Arab Emirates', code: 'AE', dialCode: '+971', flag: 'https://flagcdn.com/w20/ae.png' },
    { name: 'Saudi Arabia', code: 'SA', dialCode: '+966', flag: 'https://flagcdn.com/w20/sa.png' },
    { name: 'Qatar', code: 'QA', dialCode: '+974', flag: 'https://flagcdn.com/w20/qa.png' },
    { name: 'Australia', code: 'AU', dialCode: '+61', flag: 'https://flagcdn.com/w20/au.png' },
    { name: 'New Zealand', code: 'NZ', dialCode: '+64', flag: 'https://flagcdn.com/w20/nz.png' },
    { name: 'Germany', code: 'DE', dialCode: '+49', flag: 'https://flagcdn.com/w20/de.png' },
    { name: 'France', code: 'FR', dialCode: '+33', flag: 'https://flagcdn.com/w20/fr.png' },
    { name: 'Italy', code: 'IT', dialCode: '+39', flag: 'https://flagcdn.com/w20/it.png' },
    { name: 'Spain', code: 'ES', dialCode: '+34', flag: 'https://flagcdn.com/w20/es.png' },
    { name: 'Netherlands', code: 'NL', dialCode: '+31', flag: 'https://flagcdn.com/w20/nl.png' },
    { name: 'Switzerland', code: 'CH', dialCode: '+41', flag: 'https://flagcdn.com/w20/ch.png' },
    { name: 'South Africa', code: 'ZA', dialCode: '+27', flag: 'https://flagcdn.com/w20/za.png' },
    { name: 'Singapore', code: 'SG', dialCode: '+65', flag: 'https://flagcdn.com/w20/sg.png' },
    { name: 'Malaysia', code: 'MY', dialCode: '+60', flag: 'https://flagcdn.com/w20/my.png' },
    { name: 'China', code: 'CN', dialCode: '+86', flag: 'https://flagcdn.com/w20/cn.png' },
    { name: 'Japan', code: 'JP', dialCode: '+81', flag: 'https://flagcdn.com/w20/jp.png' },
    { name: 'Brazil', code: 'BR', dialCode: '+55', flag: 'https://flagcdn.com/w20/br.png' },
    { name: 'Mexico', code: 'MX', dialCode: '+52', flag: 'https://flagcdn.com/w20/mx.png' },
    { name: 'Turkey', code: 'TR', dialCode: '+90', flag: 'https://flagcdn.com/w20/tr.png' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="w-full pb-16 pt-0 px-4 md:px-8 flex items-center justify-center bg-white relative z-10">
      <div className="relative w-full max-w-300 rounded-8 overflow-hidden flex flex-col lg:flex-row shadow-2xl min-h-187.5">
        
        {/* Background Image for the rounded container */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/Grilladossss.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Left Area - Chef Image */}
        <div className="w-full lg:w-1/2 relative z-10 flex items-end justify-center lg:justify-start pt-16 lg:pt-0">
          <img 
            src="/images/image-66.png" 
            alt="Chef" 
            className="w-[85%] md:w-[70%] lg:w-[95%] h-auto max-h-200 object-contain object-bottom pointer-events-none drop-shadow-2xl translate-y-2 lg:translate-y-4"
          />
        </div>

        {/* Right Area - The Contact Form Card */}
        <div className="w-full lg:w-1/2 relative z-10 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-12 my-auto">
          
          <div className="w-full max-w-137.5 bg-white rounded-4 shadow-2xl p-8 sm:p-10 flex flex-col">
            
            {/* Heading */}
            <h2 className="text-[#333333] text-7 sm:text-9 font-[800] text-center tracking-tight mb-3 font-['Outfit',sans-serif]">
              {t('heading')}
            </h2>

            {/* Description */}
            <p className="text-[#333333] text-center text-3.5 sm:text-3.75 leading-[1.6] max-w-120 mx-auto mb-4 font-medium">
              {t('desc')}
            </p>

            {/* Email Link */}
            <div className="text-center mb-6">
              <a href="mailto:info@grillados.ca" className="text-[#f4a123] text-3.75 font-medium hover:underline">
                info@grillados.ca
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              
              {/* Full Name */}
              <div>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  placeholder={t('fullName')}
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full h-11.75 bg-[#f4f4f4] rounded-1.5 px-3.75 text-3.75 text-[#333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#f47f23]/50 transition-shadow border-none"
                />
              </div>

              {/* Address */}
              <div>
                <input 
                  type="text" 
                  name="address"
                  placeholder={t('address')}
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full h-11.75 bg-[#f4f4f4] rounded-1.5 px-3.75 text-3.75 text-[#333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#f47f23]/50 transition-shadow border-none"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.75 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-[#999999]" />
                </div>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder={t('email')}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-11.75 bg-[#f4f4f4] rounded-1.5 pl-10 pr-3.75 text-3.75 text-[#333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#f47f23]/50 transition-shadow border-none"
                />
              </div>

              {/* Phone Number */}
              <div className="relative flex items-center h-11.75 bg-[#f4f4f4] rounded-1.5 focus-within:ring-2 focus-within:ring-[#f47f23]/50 transition-shadow overflow-visible">
                
                {/* Country Dropdown Trigger */}
                <div 
                  className="relative flex items-center gap-1 pl-3.75 pr-2.5 h-full shrink-0 bg-[#f4f4f4] cursor-pointer hover:bg-gray-200 transition-colors border-r border-[#e0e0e0] rounded-l-[6px]"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <img src={selectedCountry.flag} alt={selectedCountry.code} className="w-4.5 h-auto object-contain rounded-0.5" />
                  <span className="text-3.25 text-[#333] font-medium ml-1">{selectedCountry.dialCode}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#666666]" />
                </div>

                {/* Dropdown Menu */}
                {showCountryDropdown && (
                  <div className="absolute top-13 left-0 w-60 bg-white shadow-xl border border-gray-100 rounded-2 py-2 z-50 max-h-55 overflow-y-auto">
                    {countries.map((country) => (
                      <div 
                        key={country.code}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-[#f4f4f4] cursor-pointer transition-colors"
                        onClick={() => {
                          setSelectedCountry(country);
                          setShowCountryDropdown(false);
                        }}
                      >
                        <img src={country.flag} alt={country.name} className="w-5 h-auto object-contain rounded-0.5" />
                        <span className="text-3.5 text-[#333] flex-1">{country.name}</span>
                        <span className="text-3.25 text-[#666] font-medium">{country.dialCode}</span>
                      </div>
                    ))}
                  </div>
                )}

                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder={t('phone')}
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 h-full bg-[#f4f4f4] px-2.5 text-3.75 text-[#333] placeholder-[#999999] focus:outline-none border-none rounded-r-[6px]"
                />
              </div>

              {/* Message */}
              <div>
                <textarea 
                  name="message"
                  placeholder={t('message')}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-25 bg-[#f4f4f4] rounded-1.5 p-3.75 text-3.75 text-[#333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#f47f23]/50 transition-shadow resize-none border-none"
                ></textarea>
              </div>

              {/* Cloudflare Verification Success */}
              <div className="w-full max-w-70 h-16.25 bg-[#f9f9f9] border border-[#e0e0e0] rounded-0.75 flex items-center justify-between px-3 py-2 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-6.5 h-6.5 bg-[#22c55e] rounded-full flex items-center justify-center relative shadow-sm">
                    {/* Checkmark SVG */}
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-3.5 text-[#333] font-medium">{t('success')}</span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="font-bold text-3.25 text-[#f48120] tracking-tight">CLOUDFLARE</span>
                  </div>
                  <span className="text-2.25 text-[#999]">{t('privacy')} • {t('help')}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full h-11.5 bg-[#e12529] hover:bg-[#c92025] text-white text-3.75 font-[600] rounded-6.25 tracking-wider transition-colors duration-300 mt-4 cursor-pointer flex items-center justify-center shadow-md"
              >
                {t('submit')}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
