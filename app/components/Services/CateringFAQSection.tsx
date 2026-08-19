"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How much notice do you need for catering?",
    answer: "48 hours minimum for orders under 50 people, 5 days for orders 50–500. Rush orders may be possible — call us."
  },
  {
    question: "Is everything halal?",
    answer: "Yes. All meat at Grillado’s is hand-slaughtered halal-certified."
  },
  {
    question: "Do you deliver?",
    answer: "Yes, within 30km of any Grillado’s location. Delivery fee depends on distance and order size."
  },
  {
    question: "Do you set up at the venue?",
    answer: "Yes — full setup, serving stands, and heating equipment available. We can stay to serve guests for an additional fee."
  },
  {
    question: "What's the minimum order?",
    answer: "Our smallest catering package serves 10 people for $219.99."
  },
  {
    question: "What about dietary restrictions?",
    answer: "We offer vegetarian options, gluten-aware preparation, and can accommodate most dietary needs. Tell us when ordering."
  },
  {
    question: "How do I pay?",
    answer: "Credit card, e-transfer, or invoice for corporate clients with NET 30 terms."
  },
  {
    question: "Can I cancel?",
    answer: "Free cancellation up to 48 hours before the event. Within 48 hours, 50% charge applies."
  }
];

const CateringFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-['Outfit',sans-serif] uppercase tracking-wide">
            Catering FAQs
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
                    {faq.question}
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
                        {faq.answer}
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
