'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeLeftItem } from '../../utils/animations';

interface MenuItemProps {
  name: string;
  price: string;
  description?: ReactNode;
  note?: ReactNode;
  isLast?: boolean;
}

export const MenuItem = ({ 
  name, 
  price, 
  description, 
  note, 
  isLast = false 
}: MenuItemProps) => {
  return (
    <motion.div variants={fadeLeftItem} className="flex flex-col w-full">
      {/* Name and Price Row */}
      <div className="flex items-end w-full gap-1.5 sm:gap-2">
        <span className="text-white text-[11px] sm:text-xs md:text-base lg:text-base font-normal whitespace-normal shrink leading-snug">
          {name}
        </span>
        <div
          className="grow mb-1"
          style={{
            borderBottom: '2px dotted rgba(255,255,255,0.5)',
            minWidth: '4px'
          }}
        />
        <span className="text-white text-[11px] sm:text-xs md:text-base lg:text-base font-bold whitespace-nowrap leading-snug">
          {price}
        </span>
      </div>
      
      {/* Description */}
      {description && (
        <p className="text-gray-400 text-[11px] sm:text-xs md:text-sm mt-1 leading-relaxed">
          {description}
        </p>
      )}
      
      {/* Highlighted Note */}
      {note && (
        <p className="text-red-500 text-[10px] md:text-xs font-bold uppercase mt-1 tracking-widest leading-relaxed">
          {note}
        </p>
      )}
      
      {/* Divider */}
      {!isLast && (
        <div
          className="w-full mt-4 md:mt-5"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}
        />
      )}
    </motion.div>
  );
};
