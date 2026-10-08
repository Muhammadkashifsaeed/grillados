"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { X, ChevronDown, User, Mail, Phone } from 'lucide-react';

interface VoucherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const countries = [
  { code: '+1', flagUrl: 'https://flagcdn.com/w40/ca.png', name: 'Canada' },
  { code: '+1', flagUrl: 'https://flagcdn.com/w40/us.png', name: 'United States' },
  { code: '+44', flagUrl: 'https://flagcdn.com/w40/gb.png', name: 'United Kingdom' },
  { code: '+92', flagUrl: 'https://flagcdn.com/w40/pk.png', name: 'Pakistan' },
  { code: '+971', flagUrl: 'https://flagcdn.com/w40/ae.png', name: 'United Arab Emirates' },
  { code: '+966', flagUrl: 'https://flagcdn.com/w40/sa.png', name: 'Saudi Arabia' },
  { code: '+974', flagUrl: 'https://flagcdn.com/w40/qa.png', name: 'Qatar' },
  { code: '+965', flagUrl: 'https://flagcdn.com/w40/kw.png', name: 'Kuwait' },
  { code: '+968', flagUrl: 'https://flagcdn.com/w40/om.png', name: 'Oman' },
  { code: '+973', flagUrl: 'https://flagcdn.com/w40/bh.png', name: 'Bahrain' },
  { code: '+962', flagUrl: 'https://flagcdn.com/w40/jo.png', name: 'Jordan' },
  { code: '+33', flagUrl: 'https://flagcdn.com/w40/fr.png', name: 'France' },
  { code: '+49', flagUrl: 'https://flagcdn.com/w40/de.png', name: 'Germany' },
  { code: '+39', flagUrl: 'https://flagcdn.com/w40/it.png', name: 'Italy' },
  { code: '+34', flagUrl: 'https://flagcdn.com/w40/es.png', name: 'Spain' },
  { code: '+31', flagUrl: 'https://flagcdn.com/w40/nl.png', name: 'Netherlands' },
  { code: '+32', flagUrl: 'https://flagcdn.com/w40/be.png', name: 'Belgium' },
  { code: '+351', flagUrl: 'https://flagcdn.com/w40/pt.png', name: 'Portugal' },
  { code: '+41', flagUrl: 'https://flagcdn.com/w40/ch.png', name: 'Switzerland' },
  { code: '+46', flagUrl: 'https://flagcdn.com/w40/se.png', name: 'Sweden' },
  { code: '+47', flagUrl: 'https://flagcdn.com/w40/no.png', name: 'Norway' },
  { code: '+45', flagUrl: 'https://flagcdn.com/w40/dk.png', name: 'Denmark' },
  { code: '+358', flagUrl: 'https://flagcdn.com/w40/fi.png', name: 'Finland' },
  { code: '+353', flagUrl: 'https://flagcdn.com/w40/ie.png', name: 'Ireland' },
  { code: '+61', flagUrl: 'https://flagcdn.com/w40/au.png', name: 'Australia' },
  { code: '+64', flagUrl: 'https://flagcdn.com/w40/nz.png', name: 'New Zealand' },
  { code: '+91', flagUrl: 'https://flagcdn.com/w40/in.png', name: 'India' },
  { code: '+60', flagUrl: 'https://flagcdn.com/w40/my.png', name: 'Malaysia' },
  { code: '+65', flagUrl: 'https://flagcdn.com/w40/sg.png', name: 'Singapore' },
  { code: '+62', flagUrl: 'https://flagcdn.com/w40/id.png', name: 'Indonesia' },
  { code: '+81', flagUrl: 'https://flagcdn.com/w40/jp.png', name: 'Japan' },
  { code: '+82', flagUrl: 'https://flagcdn.com/w40/kr.png', name: 'South Korea' },
  { code: '+63', flagUrl: 'https://flagcdn.com/w40/ph.png', name: 'Philippines' },
  { code: '+90', flagUrl: 'https://flagcdn.com/w40/tr.png', name: 'Turkey' },
  { code: '+20', flagUrl: 'https://flagcdn.com/w40/eg.png', name: 'Egypt' },
  { code: '+212', flagUrl: 'https://flagcdn.com/w40/ma.png', name: 'Morocco' },
  { code: '+27', flagUrl: 'https://flagcdn.com/w40/za.png', name: 'South Africa' },
  { code: '+55', flagUrl: 'https://flagcdn.com/w40/br.png', name: 'Brazil' },
  { code: '+52', flagUrl: 'https://flagcdn.com/w40/mx.png', name: 'Mexico' },
];

const VoucherModal: React.FC<VoucherModalProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('Voucher');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
            <button onClick={onClose} className="text-black hover:text-white absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-20" aria-label="Close modal">
              <X size={18} strokeWidth={3} />
            </button>

            {/* Header */}
            <div className="p-4 sm:p-4 pb-1 text-center relative z-10 border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent">
              <h2 className="text-sm sm:text-base md:text-lg font-extrabold text-white font-['Outfit',sans-serif] uppercase tracking-wide leading-snug mb-0.5 drop-shadow-sm text-center">
                Get Up To 20% Off On The Entire Menu.
              </h2>
              <p className="text-white/80 text-xs font-normal text-center">
                Fill out the form to get your <span className="font-extrabold text-white">Discounted Voucher</span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-5 pt-2 flex flex-col gap-2.5 relative z-10 flex-1 overflow-y-auto">
              
              <div className="relative">
                <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FEC602] transition-all font-medium text-sm shadow-sm"
                  placeholder={t('firstName')}
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>

              <div className="relative">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FEC602] transition-all font-medium text-sm shadow-sm"
                  placeholder={t('email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="flex gap-2 relative">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FEC602] transition-all font-bold h-full cursor-pointer text-sm shadow-sm flex items-center gap-2 min-w-[95px] justify-between"
                  >
                    <img src={selectedCountry.flagUrl} alt={selectedCountry.name} className="w-5 h-3.5 object-cover rounded-xs border border-gray-200 shrink-0" />
                    <span>{selectedCountry.code}</span>
                    <ChevronDown className="text-gray-400 pointer-events-none shrink-0" size={14} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1.5 w-56 sm:w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 py-1.5 max-h-56 overflow-y-auto divide-y divide-gray-100">
                      {countries.map((c, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(c);
                            setFormData({ ...formData, countryCode: c.code });
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-3.5 py-2 text-left text-xs sm:text-sm hover:bg-yellow-50 flex items-center gap-2.5 transition-colors cursor-pointer ${
                            selectedCountry.name === c.name ? 'bg-yellow-50/80 font-bold' : ''
                          }`}
                        >
                          <img src={c.flagUrl} alt={c.name} className="w-5 h-3.5 object-cover rounded-xs border border-gray-200 shrink-0" />
                          <span className="font-medium text-gray-900 truncate">{c.name}</span>
                          <span className="font-bold text-gray-500 text-xs ml-auto shrink-0">{c.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative flex-1 min-w-0">
                  <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FEC602] transition-all font-medium text-sm shadow-sm"
                    placeholder={t('phone')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex items-start gap-2.5 mt-1">
                <div className="pt-0.5">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="w-4 h-4 rounded border-gray-300 text-[#FEC602] focus:ring-[#FEC602] cursor-pointer accent-[#FEC602]"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  />
                </div>
                <label htmlFor="consent" className="text-white/80 text-[11px] sm:text-xs leading-tight cursor-pointer select-none">
                  {t('iAgree')} <a href="#" className="underline hover:text-white transition-colors">{t('privacyPolicy')}</a> | <a href="#" className="underline hover:text-white transition-colors">{t('termsOfService')}</a>
                </label>
              </div>

              <button type="submit" className="text-white w-full bg-[#EB5250] hover:bg-[#d72323] font-bold text-sm sm:text-base py-3 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 mt-1 border border-white/20 uppercase tracking-wider cursor-pointer" >
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
