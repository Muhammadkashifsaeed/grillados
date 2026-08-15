"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NewsletterSection() {
  const t = useTranslations('DealsNewsletter');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!firstName.trim()) {
      setError('First Name is required');
      return;
    }
    
    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate successful subscription
    setIsSubmitted(true);
  };

  return (
    <section className="relative w-full min-h-200 flex items-center justify-center py-10 px-4 overflow-hidden">
      
      {/* Background Texture identical to Menu/Deals background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: '#0a0a0a',
          backgroundImage: "url('/images/Black-Background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      {/* Main Newsletter Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-175 bg-white rounded-3xl shadow-2xl p-8 md:p-14 lg:p-16 flex flex-col items-center mx-auto"
      >
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text- font-extrabold text-gray-900 font-['Outfit',sans-serif] text-center leading-[] tracking-tight mb-6 max-w-2xl"
        >
          {t('headingStart')} <span className="text-[#DAAF18]">{t('headingHighlight')}</span>{t('headingEnd')}<br className="hidden md:block" />
          {t('headingEnd2')}
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 text-xs md:text-sm font-medium text-center leading-relaxed mb-10 max-w-xl"
        >
          {t('descriptionLine1')}<br className="hidden md:block" />
          {t('descriptionLine2')}
        </motion.p>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full maxw-[-90%]"
        >
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 bg-green-50 rounded-2xl border border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-xl font-bold text-green-800 font-['Outfit']">{t('successTitle')}</p>
              <p className="text-green-600 mt-2">{t('successDesc')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
              
              {/* First Name Input */}
              <div className="w-full">
                <input
                  type="text"
                  placeholder={t('firstNamePlaceholder')}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-12 md:h-12.5 px-6 bg-gray-50 border border-gray-300 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAAF18] focus:border-transparent transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="relative w-full">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 md:h-12.5 pl-14 pr-6 bg-gray-50 border border-gray-300 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAAF18] focus:border-transparent transition-all"
                />
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-sm text-center font-medium -mt-2">{error}</p>
              )}

              {/* Subscribe Button */}
              <button
                type="submit"
                className="w-full h-12 md:h-12.5 mt-2 bg-[#E02A2B] hover:bg-[#c82222] active:scale-[0.98] text-white font-bold text-xs md:text-smbase uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                {t('subscribeBtn')}
              </button>

            </form>
          )}
        </motion.div>

      </motion.div>
    </section>
  );
}
