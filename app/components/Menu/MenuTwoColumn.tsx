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
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 w-full ${alignItems}`}>

      {/* Left Column */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className={`w-full flex flex-col justify-start ${reverseOnMobile ? 'order-2 lg:order-1' : 'order-1'}`}
      >
        {leftContent}
      </motion.div>

      {/* Right Column */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className={`w-full flex flex-col justify-start ${reverseOnMobile ? 'order-1 lg:order-2' : 'order-2'}`}
      >
        {rightContent}
      </motion.div>

    </div>
  );
};
