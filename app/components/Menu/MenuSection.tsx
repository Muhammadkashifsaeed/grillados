import React, { ReactNode } from 'react';

interface MenuSectionProps {
  children: ReactNode;
  id?: string;
  bgTexture?: string;
  bgOpacity?: string;
  className?: string;
}

export const MenuSection = ({
  children,
  id,
  bgTexture = "/images/footer-doodle.png",
  bgOpacity = "opacity-40",
  className = ""
}: MenuSectionProps) => {
  return (
    <section id={id} className={`relative w-full py-4 lg:py-8 bg-transparent ${className}`}>
      

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pl-4 pr-16.25 md:px-6 lg:px-8 flex flex-col gap-8 lg:gap-16">
        {children}
      </div>
    </section>
  );
};


