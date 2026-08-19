import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeLeftItem } from '../../utils/animations';

interface MenuHeadingProps {
  title: ReactNode;
}

export const MenuHeading = ({ title }: MenuHeadingProps) => {
  return (
    <motion.div variants={fadeLeftItem} className="mb-8 lg:mb-10 flex flex-col items-start w-full">
      <h2 
        className="uppercase tracking-wide"
        style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '45px', lineHeight: '45px', color: 'rgb(250,174,64)' }}
      >
        {title}
      </h2>
      <div className="w-full max-w-40 md:max-w-48 lg:max-w-64 h-1.5 bg-[#FAAE40] mt-3 md:mt-4" />
    </motion.div>
  );
};
