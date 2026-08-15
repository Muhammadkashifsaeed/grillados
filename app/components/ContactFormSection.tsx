"use client";

import React, { useState } from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactFormSection() {
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
      <div className="relative w-full max-w-[1200px] rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl min-h-[750px]">
        
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
            className="w-[85%] md:w-[70%] lg:w-[95%] h-auto max-h-[800px] object-contain object-bottom pointer-events-none drop-shadow-2xl translate-y-2 lg:translate-y-4"
          />
        </div>

        {/* Right Area - The Contact Form Card */}
        <div className="w-full lg:w-1/2 relative z-10 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-12 my-auto">
          
          <div className="w-full max-w-[550px] bg-white rounded-[16px] shadow-2xl p-8 sm:p-10 flex flex-col">
            
            {/* Heading */}
            <h2 className="text-[#333333] text-[28px] sm:text-[36px] font-[800] text-center tracking-tight mb-3 font-['Outfit',sans-serif]">
              Get in touch
            </h2>

            {/* Description */}
            <p className="text-[#333333] text-center text-[14px] sm:text-[15px] leading-[1.6] max-w-[480px] mx-auto mb-4 font-medium">
              Hey, we’d love to have a conversation with you about our food and services. Feel free to contact us by filling in our form below!
            </p>

            {/* Email Link */}
            <div className="text-center mb-6">
              <a href="mailto:info@grillados.ca" className="text-[#f4a123] text-[15px] font-medium hover:underline">
                info@grillados.ca
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
              
              {/* Full Name */}
              <div>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full h-[47px] bg-[#f4f4f4] rounded-[6px] px-[15px] text-[15px] text-[#333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#f47f23]/50 transition-shadow border-none"
                />
              </div>

              {/* Address */}
              <div>
                <input 
                  type="text" 
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full h-[47px] bg-[#f4f4f4] rounded-[6px] px-[15px] text-[15px] text-[#333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#f47f23]/50 transition-shadow border-none"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-[15px] flex items-center pointer-events-none">
                  <Mail className="w-[16px] h-[16px] text-[#999999]" />
                </div>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[47px] bg-[#f4f4f4] rounded-[6px] pl-[40px] pr-[15px] text-[15px] text-[#333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#f47f23]/50 transition-shadow border-none"
                />
              </div>

              {/* Phone Number */}
              <div className="relative flex items-center h-[47px] bg-[#f4f4f4] rounded-[6px] focus-within:ring-2 focus-within:ring-[#f47f23]/50 transition-shadow overflow-visible">
                
                {/* Country Dropdown Trigger */}
                <div 
                  className="relative flex items-center gap-1 pl-[15px] pr-[10px] h-full shrink-0 bg-[#f4f4f4] cursor-pointer hover:bg-gray-200 transition-colors border-r border-[#e0e0e0] rounded-l-[6px]"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <img src={selectedCountry.flag} alt={selectedCountry.code} className="w-[18px] h-auto object-contain rounded-[2px]" />
                  <span className="text-[13px] text-[#333] font-medium ml-1">{selectedCountry.dialCode}</span>
                  <ChevronDown className="w-[14px] h-[14px] text-[#666666]" />
                </div>

                {/* Dropdown Menu */}
                {showCountryDropdown && (
                  <div className="absolute top-[52px] left-0 w-[240px] bg-white shadow-xl border border-gray-100 rounded-[8px] py-2 z-50 max-h-[220px] overflow-y-auto">
                    {countries.map((country) => (
                      <div 
                        key={country.code}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-[#f4f4f4] cursor-pointer transition-colors"
                        onClick={() => {
                          setSelectedCountry(country);
                          setShowCountryDropdown(false);
                        }}
                      >
                        <img src={country.flag} alt={country.name} className="w-[20px] h-auto object-contain rounded-[2px]" />
                        <span className="text-[14px] text-[#333] flex-1">{country.name}</span>
                        <span className="text-[13px] text-[#666] font-medium">{country.dialCode}</span>
                      </div>
                    ))}
                  </div>
                )}

                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 h-full bg-[#f4f4f4] px-[10px] text-[15px] text-[#333] placeholder-[#999999] focus:outline-none border-none rounded-r-[6px]"
                />
              </div>

              {/* Message */}
              <div>
                <textarea 
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[100px] bg-[#f4f4f4] rounded-[6px] p-[15px] text-[15px] text-[#333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#f47f23]/50 transition-shadow resize-none border-none"
                ></textarea>
              </div>

              {/* Cloudflare Verification Success */}
              <div className="w-[280px] h-[65px] bg-[#f9f9f9] border border-[#e0e0e0] rounded-[3px] flex items-center justify-between px-3 py-2 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-[26px] h-[26px] bg-[#22c55e] rounded-full flex items-center justify-center relative shadow-sm">
                    {/* Checkmark SVG */}
                    <svg className="w-[14px] h-[14px] text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-[14px] text-[#333] font-medium">Success!</span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="font-bold text-[13px] text-[#f48120] tracking-tight">CLOUDFLARE</span>
                  </div>
                  <span className="text-[9px] text-[#999]">Privacy • Help</span>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full h-[46px] bg-[#e12529] hover:bg-[#c92025] text-white text-[15px] font-[600] rounded-[25px] tracking-wider transition-colors duration-300 mt-4 cursor-pointer flex items-center justify-center shadow-md"
              >
                SUBMIT
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
