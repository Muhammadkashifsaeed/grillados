import React, { ReactNode } from 'react';

interface MenuSectionProps {
  children: ReactNode;
  id?: string;
  bgTexture?: string;
  bgOpacity?: string;
}

export const MenuSection = ({ 
  children, 
  id,
  bgTexture = "/images/footer-doodle.png",
  bgOpacity = "opacity-40"
}: MenuSectionProps) => {
  return (
    <section id={id} className="relative w-full py-12 lg:py-16 bg-[#0a0a0a] overflow-x-hidden">
      {/* Background Texture */}
      <div 
        className={`absolute inset-0 z-0 ${bgOpacity} pointer-events-none`}
        style={{
          backgroundImage: `url('${bgTexture}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col gap-12 lg:gap-16">
        {children}
      </div>
    </section>
  );
};
