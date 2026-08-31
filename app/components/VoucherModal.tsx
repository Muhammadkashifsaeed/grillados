"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { X, ChevronDown } from 'lucide-react';

interface VoucherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VoucherModal: React.FC<VoucherModalProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('Voucher');
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    countryCode: '+1',
    consent: false,
  });



  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert(t('alertAgree') || 'Please agree to the terms to continue.');
      return;
    }
    console.log('Form submitted:', formData);
    alert(t('alertSent') || "Voucher sent! Check your email/SMS.");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-137.5 bg-[#660000] rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden border-2 border-white/10 z-10 flex flex-col max-h-[90vh]"
          >
            {/* Decorative Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/90 hover:text-white transition-colors z-20"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={3} />
            </button>

            {/* Header */}
            <div className="p-8 sm:p-10 pb-6 text-center relative z-10 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-['Outfit',sans-serif] uppercase leading-[1.1] mb-3 tracking-tight drop-shadow-md">
                {t('getUpToText')} <span className="text-[#FEC602]">{t('discountText')}</span><br />{t('onEntireMenu')}
              </h2>
              <p className="text-white/80 font-medium text-sm sm:text-base">
                {t('fillOutForm')}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 pt-6 flex flex-col gap-4 sm:gap-5 relative z-10 bg-black/20 flex-1 overflow-y-auto">
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="firstName" className="text-white/90 font-bold text-sm ml-1">{t('firstName')}</label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FEC602] focus:bg-white/10 transition-all font-medium"
                  placeholder="{t('enterFirstName')}"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-white/90 font-bold text-sm ml-1">{t('email')}</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FEC602] focus:bg-white/10 transition-all font-medium"
                  placeholder="{t('enterEmail')}"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-white/90 font-bold text-sm ml-1">{t('phone')}</label>
                <div className="flex gap-2 relative">
                  <div className="relative">
                    <select 
                      className="appearance-none bg-white/5 border border-white/10 rounded-xl pl-3 pr-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FEC602] focus:bg-white/10 transition-all font-medium h-full cursor-pointer"
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    >
                      <option value="+1" className="text-black">🇨🇦 +1</option>
                      <option value="+1-US" className="text-black">🇺🇸 +1</option>
                      <option value="+44" className="text-black">🇬🇧 +44</option>
                      <option value="+92" className="text-black">🇵🇰 +92</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" size={16} />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FEC602] focus:bg-white/10 transition-all font-medium"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 mt-2">
                <div className="pt-0.5">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="w-5 h-5 rounded border-white/30 bg-white/5 text-[#FEC602] focus:ring-[#FEC602] focus:ring-offset-[#660000] cursor-pointer accent-[#FEC602]"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  />
                </div>
                <label htmlFor="consent" className="text-white/60 text-2.75 sm:text-xs leading-relaxed cursor-pointer select-none">
                  {t('iAgree')} <a href="#" className="underline hover:text-white transition-colors">{t('privacyPolicy')}</a> | <a href="#" className="underline hover:text-white transition-colors">{t('termsOfService')}</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E50000] hover:bg-red-500 text-white font-extrabold text-base sm:text-lg py-4 sm:py-5 rounded-xl shadow-[0_10px_20px_rgba(229,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(229,0,0,0.5)] transition-all duration-300 active:scale-95 mt-2 border-2 border-[#E50000] hover:border-red-400"
              >
                {t('getYourVoucher')}
              </button>
            </form>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VoucherModal;
