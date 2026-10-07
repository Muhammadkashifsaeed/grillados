"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Plus, Minus } from 'lucide-react';

const CateringFAQSection = () => {
  const t = useTranslations('CateringFAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = t.raw('faqs') as { q: string; a: string }[];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-[#000000] text-3xl sm:text-4xl md:text-[45px] leading-tight md:leading-[60px] font-semibold font-['Ribeat',sans-serif] text-center mb-4 capitalize">
          {t('heading')}
        </h2>
        
        {/* Divider */}
        <div className="w-22.5 h-[2px] bg-red-600 mb-12 rounded-full" />

        {/* FAQ Accordion - Line Divider Style like Franchising Page */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`w-full border-b border-gray-200 py-4 overflow-hidden transition-all duration-300 ${isOpen ? 'bg-gray-50/50 rounded-xl px-4' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg md:text-xl font-bold text-gray-800 pr-8">
                    {faq.q}
                  </span>
                  
                  <div className={`flex-shrink-0 flex items-center justify-center w-5 h-5 transition-transform duration-300 ${isOpen ? 'text-black bg-transparent' : 'bg-[#EB5250] text-white rounded-full'}`}>
                    {isOpen ? <Minus size={14} className="text-black" /> : <Plus size={14} className="text-white" />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="pt-4 text-gray-600 text-base md:text-base leading-relaxed whitespace-pre-line">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CateringFAQSection;
