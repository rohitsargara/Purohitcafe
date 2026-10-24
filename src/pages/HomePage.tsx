import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { CAFE_INFO, HERO_SLIDES, TESTIMONIALS, HOME_GALLERY_SNIPPETS } from '../data/cafeData';
import { FactCounter } from '../components/FactCounter';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { OrderOnlineCTA } from '../components/OrderOnlineCTA';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenReservation: () => void;
  onOpenLightbox: (images: { src: string; title?: string }[], index: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenReservation,
  onOpenLightbox
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () =>
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="min-h-screen">
      {/* 1. HERO & BANNER SLIDER */}
      <section className="relative h-screen min-h-[640px] max-h-[1050px] w-full overflow-hidden bg-[#0d1819]">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background with Zoom Effect */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Atmospheric Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1819] via-transparent to-black/50"></div>

              {/* Slide Content */}
              <div className="relative h-full max-w-[1440px] mx-auto px-6 sm:px-12 flex items-center">
                <div className="max-w-2xl text-left pt-20">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src="/images/icons/separator.svg"
                      alt=""
                      className="w-20 sm:w-28 h-auto opacity-90"
                    />
                  </div>

                  <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53] mb-3">
                    <span>{slide.subtitle}</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white leading-[1.15] mb-6 tracking-wide drop-shadow-lg">
                    <span>{slide.title}</span>
                  </h1>

                  <p className="text-base sm:text-xl text-white/90 mb-10 font-normal leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    {slide.ctaLink.startsWith('#') ? (
                      <button
                        onClick={() => onNavigate('menu')}
                        className="btn-botanical shadow-2xl cursor-pointer"
                      >
                        <span className="btn-wrap">
                          <span className="text-one">{slide.ctaText}</span>
                          <span className="text-two">{slide.ctaText}</span>
                        </span>
                      </button>
                    ) : (
                      <a
                        href={slide.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-botanical shadow-2xl"
                      >
                        <span className="btn-wrap">
                          <span className="text-one">{slide.ctaText}</span>
                          <span className="text-two">{slide.ctaText}</span>
                        </span>
                      </a>
                    )}

                    <button
                      onClick={() => onNavigate('menu')}
                      className="btn-botanical-outline cursor-pointer"
                    >
                      View All 85+ Dishes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Hero Slider Prev/Next Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 hover:border-[#606e53] hover:text-[#606e53] text-white flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all cursor-pointer"
          aria-label="Previous Slide"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 hover:border-[#606e53] hover:text-[#606e53] text-white flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all cursor-pointer"
          aria-label="Next Slide"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>

        {/* Rotating Book-Btn Diamond in Hero Bottom Right */}
        <div className="absolute right-6 sm:right-16 bottom-8 sm:bottom-12 z-20 hidden sm:block">
          <button
            onClick={onOpenReservation}
            className="book-diamond-btn group cursor-pointer"
            aria-label="Book Your Table"
          >
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-2">
              <img
                src="/images/resource/book-icon-1.png"
                alt=""
                className="w-7 h-7 object-contain mb-1 group-hover:scale-110 transition-transform"
              />
              <span className="book-text text-[10px] uppercase font-bold tracking-widest text-white leading-tight">
                Book Your<br />Table
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* 2. ABOUT & WELCOME SECTION */}
      <section className="relative py-28 bg-[#0d1819] overflow-hidden">
        {/* Subtle Watermarks */}
        <div className="absolute left-0 top-1/4 opacity-10 pointer-events-none">
          <img src="/images/background/bg-10.png" alt="" className="max-h-96 w-auto" />
        </div>
        <div className="absolute right-0 bottom-10 opacity-10 pointer-events-none">
          <img src="/images/background/bg-11.png" alt="" className="max-h-96 w-auto" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Block 1: Story Text & Dish Snapshot (col-xl-4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53]">
                <span>Welcome to Purohit Cafe</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white leading-snug">
                Best South Indian Food and Chaat of Udaipur
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                From South Indian dosas to chaat, our menu is a culinary journey through the authentic
                flavors of the South. Indulge in crispy golden dosas, savory rava dosas, soft steamed
                idlis, crispy medu vadas, and hearty uttapams. Prepared with high-quality rice and
                lentils, fermented to perfection for that genuine regional taste.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="btn-botanical text-xs"
                >
                  <span className="btn-wrap">
                    <span className="text-one">Our Story &amp; Craft</span>
                    <span className="text-two">Our Story &amp; Craft</span>
                  </span>
                </button>
              </div>

              <div className="pt-4 overflow-hidden border border-white/10 group cursor-pointer bg-[#0e0d0c] p-2">
                <img
                  src="/images/purohit/dosaplate.webp"
                  alt="Purohit Cafe Signature Dosa Plate"
                  onClick={() =>
                    onOpenLightbox(
                      [{ src: '/images/purohit/dosaplate.webp', title: 'Signature Paper Mysore Dosa Plate' }],
                      0
                    )
                  }
                  className="w-full h-48 sm:h-56 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Block 2: Large Vertical Image (col-xl-4) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative border border-white/15 p-2 bg-[#0e0d0c] shadow-2xl max-w-md w-full overflow-hidden group">
                <img
                  src="/images/resource/about-image-2.jpg"
                  alt="Purohit Cafe Welcoming Ambience"
                  onClick={() =>
                    onOpenLightbox(
                      [{ src: '/images/resource/about-image-2.jpg', title: 'Purohit Cafe Peaceful Garden Ambience' }],
                      0
                    )
                  }
                  className="w-full h-[460px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-xs tracking-widest uppercase text-white font-mono">
                    Authentic South Indian Sanctuary
                  </span>
                </div>
              </div>
            </div>

            {/* Block 3: Info & Hours Card (col-xl-4) */}
            <div className="lg:col-span-4 bg-[#0e0d0c] p-8 sm:p-10 border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center space-x-3 pb-2 border-b border-white/10">
                <i className="fa-regular fa-clock text-[#606e53] text-xl"></i>
                <h3 className="font-serif text-xl text-white">Opening Hours</h3>
              </div>
              <div className="text-sm text-white/80 leading-relaxed">
                <p className="font-semibold text-white">Sunday – Saturday</p>
                <p className="text-[#606e53] text-lg font-serif">8:00 am – 10:00 pm</p>
                <p className="text-xs text-white/60 mt-1">Breakfast • Lunch • Evening Chaat • Dinner</p>
              </div>

              <div className="flex items-center space-x-3 pt-4 pb-2 border-b border-white/10">
                <i className="fa-solid fa-location-dot text-[#606e53] text-xl"></i>
                <h3 className="font-serif text-xl text-white">Location &amp; Table Call</h3>
              </div>
              <div className="text-sm text-white/80 leading-relaxed space-y-2">
                <p className="text-white/90">{CAFE_INFO.address}</p>
                <div className="pt-2">
                  <a
                    href={CAFE_INFO.phoneTel}
                    className="text-lg font-serif text-[#606e53] hover:text-white transition-colors block font-semibold"
                  >
                    Call: {CAFE_INFO.phone}
                  </a>
                  <a
                    href={`mailto:${CAFE_INFO.email}`}
                    className="text-xs text-white/60 hover:text-white transition-colors block mt-1"
                  >
                    {CAFE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenReservation}
                  className="btn-botanical w-full text-center"
                >
                  <span className="btn-wrap">
                    <span className="text-one">Reserve A Table</span>
                    <span className="text-two">Reserve A Table</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Fact Counter */}
          <FactCounter />
        </div>
      </section>

      {/* 3. AMBIENCE & SIGNATURE DISHES SHOWCASE */}
      <section className="py-20 bg-[#0a1314] border-t border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53] mb-2">
                <span>South Indian Specialties</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide">
                Glimpses of Our Flavors &amp; Ambience
              </h2>
            </div>
            <button
              onClick={() => onNavigate('menu')}
              className="mt-4 md:mt-0 text-xs uppercase tracking-[0.25em] text-[#606e53] hover:text-white transition-colors cursor-pointer self-start md:self-auto flex items-center space-x-2"
            >
              <span>Explore Restaurant Menu</span>
              <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {HOME_GALLERY_SNIPPETS.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() =>
                  onOpenLightbox(
                    HOME_GALLERY_SNIPPETS.map((s, i) => ({
                      src: s,
                      title: `Purohit Delicacy ${i + 1}`
                    })),
                    idx
                  )
                }
                className="group relative h-60 sm:h-72 overflow-hidden border border-white/10 cursor-pointer bg-[#0e0d0c] p-2 flex items-center justify-center"
              >
                <img
                  src={imgSrc}
                  alt={`Purohit Dish ${idx + 1}`}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center text-sm transform scale-75 group-hover:scale-100 transition-transform">
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER TESTIMONIALS */}
      <section className="relative py-28 overflow-hidden bg-[#0e0d0b]">
        {/* Background Image Layer with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(/images/background/image-7.jpg)` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0d0b]/90 via-[#0e0d0b]/80 to-[#0e0d0b]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53] mb-3">
            <span>testimonials</span>
          </div>

          <div className="flex justify-center mb-4">
            <img
              src="/images/icons/separator.svg"
              alt="Ornament"
              className="w-24 sm:w-28 h-auto opacity-80"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-wide mb-12">
            What People Are Saying
          </h2>

          {/* Testimonial Card */}
          <div className="relative bg-[#0d1819]/90 border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-sm min-h-[320px] flex flex-col justify-between">
            <div className="flex justify-center mb-6">
              <img
                src="/images/icons/quotes-1.png"
                alt="Quotes"
                className="w-10 h-10 object-contain opacity-70"
              />
            </div>

            {/* Stars */}
            <div className="flex justify-center space-x-1.5 text-[#606e53] text-sm mb-6">
              {Array.from({ length: TESTIMONIALS[currentTestimonial].rating }).map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-base sm:text-lg text-white/90 font-light italic leading-relaxed max-w-2xl mx-auto mb-8">
              "{TESTIMONIALS[currentTestimonial].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={TESTIMONIALS[currentTestimonial].avatar}
                alt={TESTIMONIALS[currentTestimonial].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#606e53]"
              />
              <div className="text-left">
                <div className="text-base font-serif text-white font-medium">
                  {TESTIMONIALS[currentTestimonial].name}
                </div>
                <div className="text-xs uppercase tracking-widest text-[#606e53]">
                  {TESTIMONIALS[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Nav Arrows & Dots */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-[#606e53] text-white hover:text-[#606e53] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous Review"
            >
              ‹
            </button>

            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    currentTestimonial === i
                      ? 'bg-[#606e53] w-6'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-[#606e53] text-white hover:text-[#606e53] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next Review"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US / OUR STRENGTH */}
      <WhyChooseUs />

      {/* 6. ORDER ONLINE CTA */}
      <OrderOnlineCTA onOpenReservation={onOpenReservation} />
    </div>
  );
};
