import React from 'react';
import Image from 'next/image';

const AboutUsStory = () => {
  return (
    <section className="bg-[#fafafa] pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Images Composition */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] flex items-center justify-center">
          
          {/* First Image (Slightly higher / left) */}
          <div className="absolute top-[5%] left-[5%] w-[42%] h-[65%] sm:h-[70%] rounded-2xl overflow-hidden shadow-2xl z-10 border-[6px] border-white transform transition-transform duration-500 hover:scale-[1.02]">
            <Image 
              src="/images/famous1.png" 
              alt="Grillados Famous 1" 
              fill 
              className="object-cover"
            />
          </div>

          {/* Second Image (Slightly lower / right) */}
          <div className="absolute bottom-[25%] right-[5%] w-[48%] h-[60%] sm:h-[65%] rounded-2xl overflow-hidden shadow-2xl z-20 border-[6px] border-white transform transition-transform duration-500 hover:scale-[1.02]">
            <Image 
              src="/images/famous2.png" 
              alt="Grillados Famous 2" 
              fill 
              className="object-cover"
            />
          </div>

        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black font-['Outfit',sans-serif] leading-tight mb-8 uppercase tracking-wide">
            it all started <br />
            <span className="text-[#DAAF18] drop-shadow-sm">with a craving...</span>
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
              Grillado’s™ is a casual dining restaurant that focuses on grilling the very best Portuguese chicken with a South African twist. That twist is our variety of world famous sauces. 
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
              Located in the heart of Montreal, it has quickly become known for its fun and engaging atmosphere, as well as its multitude of flavours that keep customers happy and coming back for more…
            </p>
          </div>

          {/* Bottom Right Images */}
          <div className="flex flex-wrap gap-5">
            <div className="relative w-40 h-28 sm:w-56 sm:h-36 rounded-xl overflow-hidden shadow-lg border-2 border-white transform transition-all hover:scale-105 hover:shadow-xl">
              <Image 
                src="/images/keep1.jpg" 
                alt="Grillados Keep 1" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative w-40 h-28 sm:w-56 sm:h-36 rounded-xl overflow-hidden shadow-lg border-2 border-white transform transition-all hover:scale-105 hover:shadow-xl">
              <Image 
                src="/images/keep2.jpg" 
                alt="Grillados Keep 2" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default AboutUsStory;
