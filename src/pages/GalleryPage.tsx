import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { GALLERY_ITEMS } from '../data/cafeData';

interface GalleryPageProps {
  onOpenLightbox: (images: { src: string; title?: string }[], index: number) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenLightbox }) => {
  const [filter, setFilter] = useState<'all' | 'ambience' | 'greenery' | 'food'>('all');

  const filteredItems =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const handleImageClick = (item: (typeof GALLERY_ITEMS)[0]) => {
    const list = filteredItems.map((g) => ({
      src: g.src,
      title: g.title
    }));
    const index = filteredItems.findIndex((g) => g.id === item.id);
    onOpenLightbox(list, Math.max(0, index));
  };

  return (
    <div className="min-h-screen bg-[#0d1819]">
      {/* 1. PAGE BANNER */}
      <PageBanner
        subtitle="Different New"
        title="Gallery"
        backgroundImage="/images/background/banner-image-4.jpg"
      />

      {/* 2. GALLERY GRID SECTION (chef-section in original) */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53] mb-3">
              <span>Photo Showcase</span>
            </div>
            <div className="flex justify-center mb-4">
              <img
                src="/images/icons/separator.svg"
                alt="Ornament"
                className="w-24 sm:w-28 h-auto opacity-80"
              />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-wide mb-4">
              Moments Surrounded by Greenery
            </h2>
            <p className="text-sm text-white/70 max-w-lg mx-auto">
              Explore the serene open-air garden, cozy botanical corners, and artisanal culinary
              creations that define Botanical Café in Udaipur.
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              {[
                { id: 'all', label: 'All Photos (20)' },
                { id: 'ambience', label: 'Ambience & Garden' },
                { id: 'greenery', label: 'Flora & Plants' },
                { id: 'food', label: 'Culinary & Sips' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`px-5 py-2 text-xs uppercase tracking-widest transition-all cursor-pointer border ${
                    filter === tab.id
                      ? 'border-[#606e53] bg-[#606e53] text-black font-bold'
                      : 'border-white/20 text-white/80 hover:border-white/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Responsive Grid matching Original (col-lg-4 col-sm-6) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleImageClick(item)}
                className="group relative bg-[#0e0d0c] border border-white/10 hover:border-[#606e53] transition-all duration-500 shadow-xl overflow-hidden cursor-pointer aspect-[4/3] sm:aspect-square"
              >
                <img
                  src={item.src}
                  alt={`Botanical Cafe Photo ${item.id}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Atmospheric Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="w-10 h-10 rounded-full border border-white/60 text-white bg-black/40 flex items-center justify-center text-sm mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </div>
                  <div className="text-white font-serif text-lg tracking-wide">
                    Botanical Café, Udaipur
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#606e53] font-mono mt-0.5">
                    Photo {item.id} of 20
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
