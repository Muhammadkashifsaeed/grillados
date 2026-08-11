import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

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
  alignItems = 'items-stretch'
}: MenuTwoColumnProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 w-full ${alignItems}`}>
      
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`w-full flex flex-col justify-center ${reverseOnMobile ? 'order-2 lg:order-1' : 'order-1'} pr-4 lg:pr-0`}
      >
        {leftContent}
      </motion.div>

      {/* Right Column - Contains the required right padding for the floating button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`w-full flex flex-col justify-center pr-12 md:pr-16 lg:pr-[80px] ${reverseOnMobile ? 'order-1 lg:order-2' : 'order-2'}`}
      >
        {rightContent}
      </motion.div>
      
    </div>
  );
};
