"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FranchisingFAQ() {
  const t = useTranslations('FranchiseFAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqList = Array.from({ length: 14 }, (_, i) => ({
    question: t(`q${i + 1}` as Parameters<typeof t>[0]),
    answer: t(`a${i + 1}` as Parameters<typeof t>[0])
  }));

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-[#000000] text-[45px] leading-[60px] font-semibold font-['Ribeat',sans-serif] text-center mb-4">
          {t('heading')}
        </h2>
        
        {/* Divider */}
        <div className="w-24 h-1 bg-red-600 mb-12 rounded-full" />

        {/* FAQ Accordion */}
        <div className="w-full flex flex-col gap-4">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`w-full border-b border-gray-200 py-4 overflow-hidden transition-all duration-300 ${isOpen ? 'bg-gray-50/50 rounded-xl px-4' : ''}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg md:text-xl font-bold text-gray-800 pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 transition-transform duration-300">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="pt-4 text-gray-600 text-base md:text-base leading-relaxed whitespace-pre-line">
                        {faq.answer}
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
}
