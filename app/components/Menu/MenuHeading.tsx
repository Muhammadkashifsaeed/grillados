import React, { ReactNode } from 'react';

interface MenuHeadingProps {
  title: ReactNode;
}

export const MenuHeading = ({ title }: MenuHeadingProps) => {
  return (
    <div className="mb-8 lg:mb-10 flex flex-col items-start w-full">
      <h2 
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#fbbc04] font-['Outfit',sans-serif] uppercase tracking-wide leading-tight"
      >
        {title}
      </h2>
      <div className="w-full max-w-40 md:max-w-48 lg:max-w-64 h-1.5 bg-[#fbbc04] mt-3 md:mt-4" />
    </div>
  );
};
