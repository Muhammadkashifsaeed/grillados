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
        <span 
          className="whitespace-normal shrink leading-snug"
          style={{ fontFamily: '"Poppins", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '20px', lineHeight: '33px', color: 'rgb(255,255,255)' }}
        >
          {name}
        </span>
        <div
          className="grow mb-1"
          style={{
            borderBottom: '2px dotted rgba(255,255,255,0.5)',
            minWidth: '4px'
          }}
        />
        <span 
          className="whitespace-nowrap leading-snug"
          style={{ fontFamily: '"Poppins", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '20px', lineHeight: '33px', color: 'rgb(255,255,255)' }}
        >
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
        <p 
          className="uppercase mt-1 tracking-widest leading-relaxed"
          style={{ fontFamily: '"Poppins", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: 'rgb(255,0,0)' }}
        >
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
