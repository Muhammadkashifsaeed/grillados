"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const CateringFAQSection = () => {
  const t = useTranslations('CateringFAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Since FAQs is an array of objects in the translation file, we can map over it.
  // In next-intl, to access arrays, we usually use `raw` if configured, or map over a known length.
  // Alternatively, we can use `t.raw('faqs')`.
  const faqs = t.raw('faqs') as { q: string; a: string }[];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 
            className="uppercase tracking-wide"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '48px', lineHeight: '65px', color: 'rgb(0, 0, 0)' }}
          >
            {t('heading')}
          </h2>
          <div className="w-24 h-1.5 bg-[#fbbc04] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-lg md:text-xl text-gray-900 pr-8">
                    {faq.q}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <span className="shrink-0 flex items-center justify-center text-[#e63946] text-2xl font-bold leading-none w-8 h-8">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-700 text-base md:text-lg leading-relaxed border-t border-gray-100/50 mt-1">
                        {faq.a}
                      </div>
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
