import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { FactCounter } from '../components/FactCounter';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { BOTANICAL_HERBS, CAFE_INFO } from '../data/cafeData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenReservation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenReservation }) => {
  return (
    <div className="min-h-screen bg-[#0d1819]">
      {/* 1. PAGE BANNER */}
      <PageBanner
        subtitle="our story"
        title="About Us"
        backgroundImage="/images/background/banner-image-1.jpg"
      />

      {/* 2. WHO WE ARE / WELCOME TO PUROHIT CAFE */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle Decorative Foliage */}
        <div className="absolute left-0 top-10 opacity-15 pointer-events-none">
          <img src="/images/background/bg-10.png" alt="" className="max-h-80 w-auto" />
        </div>
        <div className="absolute right-0 bottom-10 opacity-15 pointer-events-none">
          <img src="/images/background/bg-11.png" alt="" className="max-h-80 w-auto" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53] mb-3">
              <span>who we are</span>
            </div>
            <div className="flex justify-center mb-4">
              <img
                src="/images/icons/separator.svg"
                alt="Ornament"
                className="w-24 sm:w-28 h-auto opacity-80"
              />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-wide">
              Welcome to Purohit Cafe
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] text-[#606e53] mt-2 font-medium">
              Best South Indian Food and Chaat of Udaipur
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-white/85 leading-relaxed font-light">
              <p>
                From crispy South Indian dosas to lip-smacking street chaat, our menu at{' '}
                <strong className="text-white font-medium">Purohit Cafe</strong> is a culinary
                journey through the rich, time-honored flavors of the South. Located at Anand Plaza
                opposite INOX Mall in Udaipur, we take pride in offering a welcoming haven for food
                lovers, families, and travelers.
              </p>
              <p>
                Quality is our <strong className="text-white font-medium">#1 ingredient</strong>.
                That’s why our Dosa and Uttapam batter is prepared with a blend of the finest rice and
                lentils, naturally fermented to perfection for that unmatched authentic taste. Plus,
                every dish is crafted with care using traditional methods that preserve its wholesome
                nutritional value, aroma, and delicate crunch.
              </p>
              <p>
                Whether you’re here for an energizing morning breakfast with steaming soft idlis and
                piping hot sambhar, an afternoon feast of savory rava dosas, or an evening chaat and
                South Indian filter coffee, Purohit Cafe is your premier dining sanctuary in Udaipur.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenReservation}
                  className="btn-botanical text-xs"
                >
                  <span className="btn-wrap">
                    <span className="text-one">Book Your Table</span>
                    <span className="text-two">Book Your Table</span>
                  </span>
                </button>
                <button
                  onClick={() => onNavigate('menu')}
                  className="btn-botanical-outline cursor-pointer"
                >
                  Explore Menu Restaurant
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative border border-white/20 p-2 bg-[#0e0d0c] shadow-2xl">
                <img
                  src="/images/purohit/dosaplate.webp"
                  alt="Purohit Cafe Dosa Delicacy"
                  className="w-full h-96 object-contain bg-black/30 p-4"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#606e53] text-black px-6 py-3 font-serif font-bold text-sm shadow-xl">
                  Authentic South Indian &amp; Chaat
                </div>
              </div>
            </div>
          </div>

          {/* 3. OUR BOTANICAL INGREDIENTS & HERBAL ESSENCE */}
          <div className="pt-10 mb-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53] mb-3">
                <span>Natural &amp; Pure</span>
              </div>
              <div className="flex justify-center mb-3">
                <img
                  src="/images/icons/separator.svg"
                  alt="Ornament"
                  className="w-20 sm:w-24 h-auto opacity-80"
                />
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif text-white tracking-wide">
                Our Botanical Ingredients &amp; Spices
              </h3>
              <p className="text-sm text-white/70 mt-3 font-light">
                Discover the 7 fresh botanical herbs and whole spices that define our authentic South Indian tadkas, dosas, and chutneys.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BOTANICAL_HERBS.map((plant, index) => (
                <div
                  key={plant.id}
                  className={`bg-[#0e0d0c] border border-white/10 p-6 sm:p-8 hover:border-[#606e53] transition-all duration-300 relative group flex flex-col justify-between ${
                    index === BOTANICAL_HERBS.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-full border border-[#606e53]/40 bg-[#171819] flex items-center justify-center text-[#606e53] group-hover:bg-[#606e53] group-hover:text-black transition-colors">
                        <i className={`fa-solid ${plant.iconName} text-lg`}></i>
                      </div>
                      <span className="text-xs font-mono text-[#606e53] border border-[#606e53]/30 px-2 py-0.5">
                        0{index + 1}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif text-white group-hover:text-[#606e53] transition-colors mb-1">
                      {plant.name}
                    </h4>
                    {plant.scientificName && (
                      <div className="text-xs italic text-white/50 font-serif mb-3">
                        {plant.scientificName}
                      </div>
                    )}
                    <p className="text-sm text-white/80 leading-relaxed font-light mb-6">
                      {plant.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="text-[10px] uppercase tracking-wider text-white/50 mb-2">
                      Key Highlights:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {plant.benefits.map((b, bIdx) => (
                        <span
                          key={bIdx}
                          className="text-[11px] bg-white/5 text-white/80 px-2 py-0.5 border border-white/5"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. OUR MISSION SECTION */}
          <div className="bg-[#0e0d0c] border border-white/10 p-8 sm:p-14 relative overflow-hidden mb-20 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53] mb-3">
                <span>Our Heritage &amp; Mission</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif text-white tracking-wide mb-6">
                Our Mission
              </h3>
              <p className="text-base sm:text-xl text-white/90 leading-relaxed font-light italic font-serif">
                "To celebrate and share the true spirit of South Indian culinary traditions in the
                City of Lakes. At Purohit Cafe, every dosa is cooked with uncompromised love, pure ghee
                and butter, and genuine hospitality, creating memorable meals for families and friends
                year after year."
              </p>
            </div>
          </div>

          {/* 5. FACT COUNTERS */}
          <FactCounter />
        </div>
      </section>

      {/* 6. OUR STRENGTH */}
      <WhyChooseUs />
    </div>
  );
};
