"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Turnstile } from '@marsidev/react-turnstile';

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

export default function FranchisingForm() {
  const t = useTranslations('FranchiseForm');
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Form Fields State
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', funds: '',
    address1: '', address2: '', city: '', state: '', postal: '', country: '',
    prefCity1: '', prefCity2: '', prefCity3: '', howDidYouHear: '',
    q1: '', q2: '', q3: '', q4: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = t('required');
    if (!formData.email.trim()) newErrors.email = t('required');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('invalidEmail');
    if (!formData.phone.trim()) newErrors.phone = t('required');
    if (!formData.funds.trim()) newErrors.funds = t('required');
    if (!formData.prefCity1.trim()) newErrors.prefCity1 = t('required');
    if (!formData.q1) newErrors.q1 = t('required');
    if (!formData.q2) newErrors.q2 = t('required');
    if (!formData.q3) newErrors.q3 = t('required');
    if (!formData.q4) newErrors.q4 = t('required');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!turnstileToken) {
      alert("Please complete the Turnstile verification.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form & success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: '', email: '', phone: '', funds: '',
          address1: '', address2: '', city: '', state: '', postal: '', country: '',
          prefCity1: '', prefCity2: '', prefCity3: '', howDidYouHear: '',
          q1: '', q2: '', q3: '', q4: ''
        });
        setTurnstileToken(null);
      }, 5000);
    }, 1500);
  };

  const inputClass = "w-full h-13 md:h-14 px-4 rounded-xl bg-white text-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#DAAF18] transition-all duration-300 placeholder:text-gray-400 font-medium";
  const errorClass = "text-red-400 text-sm mt-1 font-medium";
  const labelClass = "block text-sm font-semibold text-gray-200 mb-2";
  const sectionTitleClass = "text-2xl font-bold text-white font-['Outfit',sans-serif] mb-6 tracking-wide border-b border-gray-600/50 pb-2";

  const renderRadioGroup = (name: string, question: string) => (
    <div className="flex flex-col gap-2">
      <label className={labelClass}>{question}</label>
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-white font-medium cursor-pointer">
          <input 
            type="radio" 
            name={name} 
            value="yes" 
            checked={formData[name as keyof typeof formData] === 'yes'} 
            onChange={handleChange} 
            className="w-5 h-5 accent-[#DAAF18] cursor-pointer"
          />
          {t('yes')}
        </label>
        <label className="flex items-center gap-2 text-white font-medium cursor-pointer">
          <input 
            type="radio" 
            name={name} 
            value="no" 
            checked={formData[name as keyof typeof formData] === 'no'} 
            onChange={handleChange} 
            className="w-5 h-5 accent-[#DAAF18] cursor-pointer"
          />
          {t('no')}
        </label>
      </div>
      {errors[name] && <p className={errorClass}>{errors[name]}</p>}
    </div>
  );

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-16 pb-24">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-new.png"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-6">
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-['Outfit',sans-serif] uppercase tracking-wide mb-10 text-center drop-shadow-lg"
        >
          {t('formHeading')}
        </motion.h1>

        {/* Glassmorphism Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border border-white/10"
        >
          <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
            
            {/* Section 1: Personal Information */}
            <section>
              <h2 className={sectionTitleClass}>{t('section1')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className={labelClass}>{t('fullName')}</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder={t('fullName').replace('*','')} className={inputClass} />
                  {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
                </div>
                <div>
                  <label className={labelClass}>{t('email')}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('email').replace('*','')} className={inputClass} />
                  {errors.email && <p className={errorClass}>{errors.email}</p>}
                </div>

                <div>
                  <label className={labelClass}>{t('phone')}</label>
                  <div className="flex h-13 md:h-14 rounded-xl bg-white border border-transparent focus-within:ring-2 focus-within:ring-[#DAAF18] transition-all duration-300">
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('phone').replace('*','')} 
                      className="flex-1 h-full px-4 text-gray-900 focus:outline-none placeholder:text-gray-400 font-medium rounded-r-xl" 
                    />
                  </div>
                  {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                </div>
                <div>
                  <label className={labelClass}>{t('funds')}</label>
                  <div className="relative">
                    <select name="funds" value={formData.funds} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer text-gray-500`}>
                      <option value="" disabled>{t('funds').replace('*', '')}</option>
                      <option value="100k-200k">100k - 200k</option>
                      <option value="300k-400k">300k - 400k</option>
                      <option value="500k-600k">500k - 600k</option>
                      <option value="700k-800k">700k - 800k</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <ChevronDown size={20} className="text-gray-400" />
                    </div>
                  </div>
                  {errors.funds && <p className={errorClass}>{errors.funds}</p>}
                </div>
              </div>

              {/* Address Fields */}
              <div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-8">
                <div className="w-full">
                  <label className={labelClass}>{t('address1')}</label>
                  <input type="text" name="address1" value={formData.address1} onChange={handleChange} placeholder={t('address1')} className={inputClass} />
                </div>
                <div className="w-full">
                  <label className={labelClass}>{t('address2')}</label>
                  <input type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder={t('address2')} className={inputClass} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className={labelClass}>{t('city')}</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder={t('city')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('state')}</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder={t('state')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('postal')}</label>
                    <input type="text" name="postal" value={formData.postal} onChange={handleChange} placeholder={t('postal')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('country')}</label>
                    <div className="relative">
                      <select name="country" value={formData.country} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer text-gray-500`}>
                        <option value="" disabled>{t('country')}</option>
                        {countryList.map((c, idx) => (
                          <option key={idx} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <ChevronDown size={20} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Preferred Grillado's Location */}
            <section>
              <h2 className={sectionTitleClass}>{t('section2')}</h2>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="w-full">
                  <label className={labelClass}>{t('prefCity1')}</label>
                  <input type="text" name="prefCity1" value={formData.prefCity1} onChange={handleChange} placeholder={t('prefCity1').replace('*','')} className={inputClass} />
                  {errors.prefCity1 && <p className={errorClass}>{errors.prefCity1}</p>}
                </div>
                <div className="w-full">
                  <label className={labelClass}>{t('prefCity2')}</label>
                  <input type="text" name="prefCity2" value={formData.prefCity2} onChange={handleChange} placeholder={t('prefCity2')} className={inputClass} />
                </div>
                <div className="w-full">
                  <label className={labelClass}>{t('prefCity3')}</label>
                  <input type="text" name="prefCity3" value={formData.prefCity3} onChange={handleChange} placeholder={t('prefCity3')} className={inputClass} />
                </div>
              </div>
            </section>

            {/* Section 3: Additional Information */}
            <section>
              <h2 className={sectionTitleClass}>{t('section3')}</h2>
              <div className="flex flex-col gap-6 md:gap-8">
                <div>
                  <label className={labelClass}>{t('howDidYouHear')}</label>
                  <input type="text" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} placeholder={t('howDidYouHear')} className={inputClass} />
                </div>

                <div className="flex flex-col gap-6 md:gap-8">
                  {renderRadioGroup("q1", t('q1'))}
                  {renderRadioGroup("q2", t('q2'))}
                  {renderRadioGroup("q3", t('q3'))}
                  {renderRadioGroup("q4", t('q4'))}
                </div>
              </div>
            </section>

            {/* Cloudflare Turnstile */}
            <div className="flex flex-col items-center mt-4">
              <Turnstile 
                siteKey="1x00000000000000000000AA" // Dummy key for testing, always passes. Replace with real key in production.
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => setTurnstileToken(null)}
                onExpire={() => setTurnstileToken(null)}
              />
            </div>

            {/* Submit Button & Messages */}
            <div className="flex flex-col items-center mt-2">
              <button 
                type="submit" 
                disabled={isSubmitting || !turnstileToken}
                className={`w-full max-w-3xl bg-[#DAAF18] hover:bg-[#b89214] text-black font-extrabold py-5 px-8 rounded-full transition-all duration-300 uppercase tracking-widest text-lg shadow-[0_0_15px_rgba(247,180,28,0.4)] hover:shadow-[0_0_25px_rgba(247,180,28,0.6)] ${(!turnstileToken || isSubmitting) ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
              >
                {isSubmitting ? t('submitting') : t('submit')}
              </button>

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="mt-6 px-6 py-4 bg-white border border-gray-200 rounded-xl text-green-600 font-bold text-left shadow-lg w-full self-start"
                >
                  {t('success')}
                </motion.div>
              )}
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
