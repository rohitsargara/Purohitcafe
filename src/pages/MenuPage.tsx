import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { OrderOnlineCTA } from '../components/OrderOnlineCTA';
import { PUROHIT_DISHES, CAFE_INFO, PurohitDish } from '../data/cafeData';

interface MenuPageProps {
  onOpenReservation: () => void;
  onOpenLightbox: (images: { src: string; title?: string }[], index: number) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({
  onOpenReservation,
  onOpenLightbox
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Items', count: PUROHIT_DISHES.length },
    { id: 'dosa', label: 'Dosa Specialities', count: PUROHIT_DISHES.filter((d) => d.category === 'dosa').length },
    { id: 'rava-dosa', label: 'Rava Dosas', count: PUROHIT_DISHES.filter((d) => d.category === 'rava-dosa').length },
    { id: 'uttapam', label: 'Uttapams', count: PUROHIT_DISHES.filter((d) => d.category === 'uttapam').length },
    { id: 'idli-vada', label: 'Idli & Vada', count: PUROHIT_DISHES.filter((d) => d.category === 'idli-vada').length },
    { id: 'chaat', label: 'Chaat Specialities', count: PUROHIT_DISHES.filter((d) => d.category === 'chaat').length },
    { id: 'beverages', label: 'Beverages', count: PUROHIT_DISHES.filter((d) => d.category === 'beverages').length }
  ];

  const displayedDishes =
    activeCategory === 'all'
      ? PUROHIT_DISHES
      : PUROHIT_DISHES.filter((d) => d.category === activeCategory);

  const handleDishClick = (dish: PurohitDish) => {
    const list = displayedDishes.map((d) => ({
      src: d.image,
      title: `${d.name} (${d.price})`
    }));
    const idx = displayedDishes.findIndex((d) => d.id === dish.id);
    onOpenLightbox(list, Math.max(0, idx));
  };

  return (
    <div className="min-h-screen bg-[#0d1819]">
      {/* 1. PAGE BANNER */}
      <PageBanner
        subtitle="delicious & amazing"
        title="Menu Restaurant"
        backgroundImage="/images/background/banner-image-4.jpg"
      />

      {/* 2. MENU CONTENT SECTION */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Header & Category Controls */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53] mb-3">
              <span>Authentic Offerings</span>
            </div>
            <div className="flex justify-center mb-4">
              <img
                src="/images/icons/separator.svg"
                alt="Ornament"
                className="w-24 sm:w-28 h-auto opacity-80"
              />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-wide mb-4">
              Purohit Cafe Menu
            </h2>
            <p className="text-sm text-white/70 max-w-lg mx-auto">
              Prepared fresh to order using stone-ground traditional batters, farm vegetables, and authentic South Indian spices. Click any dish for high-res details.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 text-xs uppercase tracking-widest transition-all cursor-pointer border ${
                    activeCategory === cat.id
                      ? 'border-[#606e53] bg-[#606e53] text-black font-bold shadow-lg'
                      : 'border-white/20 text-white/80 hover:border-white/50 bg-[#0e0d0c]'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Dish Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedDishes.map((dish) => (
              <div
                key={dish.id}
                className="group relative bg-[#0e0d0c] border border-white/10 hover:border-[#606e53] transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Dish Image */}
                  <div
                    onClick={() => handleDishClick(dish)}
                    className="relative h-60 w-full overflow-hidden bg-black/40 cursor-pointer flex items-center justify-center p-4 border-b border-white/5"
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    {dish.badge && (
                      <span className="absolute top-3 left-3 bg-[#606e53] text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow">
                        {dish.badge}
                      </span>
                    )}

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border border-white/60 text-white flex items-center justify-center text-sm transform scale-75 group-hover:scale-100 transition-transform">
                        <i className="fa-solid fa-magnifying-glass-plus"></i>
                      </div>
                    </div>
                  </div>

                  {/* Dish Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl font-serif text-white group-hover:text-[#606e53] transition-colors leading-snug">
                        {dish.name}
                      </h3>
                      <span className="text-lg font-serif text-[#606e53] font-bold shrink-0">
                        {dish.price}
                      </span>
                    </div>

                    <div className="text-[11px] uppercase tracking-wider text-white/50 mb-3 font-mono">
                      {dish.categoryLabel}
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      {dish.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-4 bg-[#141516] border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleDishClick(dish)}
                    className="text-xs text-white/70 hover:text-[#606e53] transition-colors cursor-pointer flex items-center space-x-1"
                  >
                    <span>View Dish</span>
                    <span>⤢</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <a
                      href={CAFE_INFO.swiggyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider bg-[#fc8019] text-white hover:brightness-110 transition-all rounded-none"
                    >
                      Swiggy
                    </a>
                    <a
                      href={CAFE_INFO.zomatoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider bg-[#cb202d] text-white hover:brightness-110 transition-all rounded-none"
                    >
                      Zomato
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ORDER ONLINE CALL TO ACTION */}
      <OrderOnlineCTA
        customText="Enjoy authentic South Indian crisp dosas, steaming soft idlis, and tangy Udaipur chaat in our serene botanical dining space or delivered fast to your doorstep."
        onOpenReservation={onOpenReservation}
      />
    </div>
  );
};
