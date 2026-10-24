import React from 'react';
import { STRENGTHS } from '../data/cafeData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#0d1819] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Title Box Centered */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53] mb-3">
            <span>why choose us</span>
          </div>
          <div className="flex justify-center mb-4">
            <img
              src="/images/icons/separator.svg"
              alt="Ornament"
              className="w-24 sm:w-28 h-auto opacity-80"
            />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-wide">
            Our Strength
          </h2>
        </div>

        {/* 4 Feature Blocks with Staggered Elevation (m-top) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STRENGTHS.map((item, idx) => {
            const isElevated = idx % 2 === 1; // 2nd and 4th columns have offset
            return (
              <div
                key={idx}
                className={`group relative overflow-hidden transition-all duration-500 ${
                  isElevated ? 'lg:translate-y-8' : ''
                }`}
              >
                <div className="bg-[#0e0d0b] border border-white/5 relative overflow-hidden group-hover:border-[#606e53]/50 transition-colors shadow-xl">
                  {/* Image Container with Zoom effect */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#606e53]/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/40 to-transparent"></div>
                  </div>

                  {/* Over Box: Floating Icon & Title */}
                  <div className="relative p-6 -mt-12 text-center z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#0e0d0b] border-2 border-[#606e53] p-3 shadow-xl mb-4 flex items-center justify-center transform group-hover:-translate-y-1 group-hover:scale-110 transition-transform">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-serif text-white group-hover:text-[#606e53] transition-colors tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
