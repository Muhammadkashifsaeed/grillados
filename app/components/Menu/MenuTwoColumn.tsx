import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/animations';

interface MenuTwoColumnProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  reverseOnMobile?: boolean; 
  alignItems?: 'items-stretch' | 'items-center' | 'items-start';
}

export const MenuTwoColumn = ({ 
  leftContent, 
  rightContent, 
  reverseOnMobile = false,
  alignItems = 'items-start'
}: MenuTwoColumnProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full lg:pr-[80px] ${alignItems}`}>
      
      {/* Left Column */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className={`w-full flex flex-col justify-start ${reverseOnMobile ? 'order-2 lg:order-1' : 'order-1'} pr-14 sm:pr-4 lg:pr-0`}
      >
        {leftContent}
      </motion.div>

      {/* Right Column - Contains the required right padding for the floating button */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`w-full flex flex-col justify-start pr-14 sm:pr-16 md:pr-16 lg:pr-0 ${reverseOnMobile ? 'order-1 lg:order-2' : 'order-2'}`}
      >
        {rightContent}
      </motion.div>
      
    </div>
  );
};
