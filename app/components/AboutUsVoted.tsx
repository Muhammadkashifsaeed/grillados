import React from 'react';
import Image from 'next/image';

const AboutUsVoted = () => {
  return (
    <section className="relative bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-8 w-full flex justify-center items-center overflow-hidden">
      
      {/* Left Corner Fixed Image */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 opacity-80 pointer-events-none">
        <Image 
          src="/images/was.png" 
          alt="Was Decoration" 
          fill sizes="100vw" 
          className="object-contain object-left"
        />
      </div>

      {/* Center Box */}
      <div className="relative z-10 w-full max-w-4xl bg-[#808080] border-4 border-[#FACC15] rounded-xl shadow-xl p-6 sm:p-10 text-center flex flex-col items-center justify-center mx-12 sm:mx-24">
        
        <p className="text-white text-base sm:text-xl md:text-2xl font-bold font-['Outfit',sans-serif] leading-relaxed mb-4">
          <span className="text-[#FACC15]">Grillado’s™</span> was launched in Montreal back in 2015 and was voted the
        </p>

        <h2 className="text-[#FACC15] text-lg sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide font-['Outfit',sans-serif] mb-3 drop-shadow-md whitespace-nowrap">
          "Hottest New Restaurant in Montreal"
        </h2>

        <p className="text-white text-xs sm:text-base font-medium opacity-90 italic">
          by Michael D’alimonite of <span className="font-bold">Thrilist Media Group.</span>
        </p>

      </div>
      
    </section>
  );
};

export default AboutUsVoted;
