import React from 'react';

interface PageBannerProps {
  subtitle: string;
  title: string;
  backgroundImage: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  subtitle,
  title,
  backgroundImage
}) => {
  return (
    <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Image Layer with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1819]/80 via-[#0d1819]/70 to-[#0d1819]"></div>

      {/* Decorative leaf watermarks */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block">
        <img src="/images/background/bg-10.png" alt="" className="max-h-72 w-auto" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block">
        <img src="/images/background/bg-11.png" alt="" className="max-h-72 w-auto" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53] mb-3">
          <span>{subtitle}</span>
        </div>

        <div className="flex justify-center mb-4">
          <img
            src="/images/icons/separator.svg"
            alt="Ornament"
            className="w-24 sm:w-32 h-auto opacity-80"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif tracking-wider text-white">
          <span>{title}</span>
        </h1>
      </div>
    </section>
  );
};
