import React from 'react';

const AboutUsProperty = () => {
  return (
    <section className="bg-white pt-4 md:pt-8 pb-4 md:pb-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black font-['Outfit',sans-serif] uppercase mb-4">
          Property
        </h2>
        
        {/* Yellow Divider */}
        <div className="w-24 h-1 bg-[#FACC15] mb-8"></div>
        
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
          You can gain from our comprehensive experience in property requirements & design, with access to both external and internal design teams. Innovative restaurant designs ensure our brand sets trends and maintains its position in the fast-pace casual dining market place.
        </p>

      </div>
    </section>
  );
};

export default AboutUsProperty;
