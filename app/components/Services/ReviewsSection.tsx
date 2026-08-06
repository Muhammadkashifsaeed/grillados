"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  const t = useTranslations('CateringReviews');

  const reviewKeys = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8'];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full bg-[#FDF8F1] overflow-hidden">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full"
        >
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#F5A623] font-['Outfit',sans-serif] text-center leading-tight">
            {t('heading')}
          </h2>
          <div className="w-[160px] h-[4px] bg-black rounded-full mt-3 mb-[60px]"></div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reviewKeys.map((key) => (
            <motion.div key={key} variants={itemVariants} className="h-full">
              <ReviewCard
                rating={t(`${key}_rating`)}
                date={t(`${key}_date`)}
                review={t(`${key}_review`)}
                name={t(`${key}_name`)}
                initials={t(`${key}_initials`)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-black font-bold text-lg bg-transparent hover:text-[#d72323] transition-colors duration-300 outline-none cursor-pointer"
        >
          {t('loadMore')}
        </motion.button>
      </div>
    </section>
  );
};

export default ReviewsSection;
