import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { CAFE_INFO } from '../data/cafeData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenReservation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu Restaurant' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d1819]/95 backdrop-blur-md shadow-2xl py-2 border-b border-white/10'
            : 'bg-transparent py-0'
        }`}
      >
        {/* Top Info Bar */}
        <div
          className={`transition-all duration-300 overflow-hidden border-b border-white/15 ${
            isScrolled ? 'max-h-0 opacity-0 py-0 border-transparent' : 'max-h-16 opacity-100 py-2.5'
          }`}
        >
          <div className="max-w-[1780px] mx-auto px-4 sm:px-8 flex justify-between items-center text-xs tracking-wider text-white/80">
            {/* Top Left */}
            <div className="flex items-center space-x-6 sm:space-x-10">
              <span className="flex items-center space-x-2">
                <i className="fa-solid fa-location-dot text-[#606e53] text-sm"></i>
                <span className="hidden sm:inline">Anand Plaza, opp. INOX mall, Udaipur</span>
                <span className="sm:hidden">Udaipur, Rajasthan</span>
              </span>
              <span className="hidden md:flex items-center space-x-2 relative after:content-[''] after:absolute after:right-[-20px] after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:border after:border-[#606e53] after:rotate-45">
                <i className="fa-regular fa-clock text-[#606e53] text-sm"></i>
                <span>{CAFE_INFO.timings}</span>
              </span>
            </div>

            {/* Top Right */}
            <div className="flex items-center space-x-6 sm:space-x-8">
              <a
                href={CAFE_INFO.phoneTel}
                className="flex items-center space-x-2 hover:text-[#606e53] transition-colors"
              >
                <i className="fa-solid fa-phone text-[#606e53] text-sm"></i>
                <span>CALL US: {CAFE_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CAFE_INFO.email}`}
                className="hidden lg:flex items-center space-x-2 hover:text-[#606e53] transition-colors"
              >
                <i className="fa-regular fa-envelope text-[#606e53] text-sm"></i>
                <span>{CAFE_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Header Upper */}
        <div className="max-w-[1780px] mx-auto px-4 sm:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Left Box: Hamburger Toggler */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="group flex flex-col justify-center items-center w-11 h-11 border border-white/20 hover:border-[#606e53] transition-colors cursor-pointer bg-black/20 rounded-none p-2"
                aria-label="Open Navigation Menu"
              >
                <span className="w-6 h-0.5 bg-white group-hover:bg-[#606e53] transition-all mb-1.5"></span>
                <span className="w-4 h-0.5 bg-white group-hover:bg-[#606e53] transition-all self-start ml-0.5 mb-1.5 group-hover:w-6"></span>
                <span className="w-6 h-0.5 bg-white group-hover:bg-[#606e53] transition-all"></span>
              </button>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick('home')}
                className="block text-left cursor-pointer group"
              >
                <img
                  src="/images/purohit/logo.png"
                  alt="Purohit Cafe Logo"
                  className="h-10 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow brightness-110"
                />
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-8 text-sm uppercase tracking-[0.2em] font-medium">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative py-2 transition-all cursor-pointer ${
                      isActive
                        ? 'text-[#606e53] font-semibold'
                        : 'text-white hover:text-[#606e53]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#606e53] animate-pulse"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={onOpenReservation}
                className="hidden sm:inline-block text-xs uppercase tracking-widest px-4 py-2.5 border border-white/25 hover:border-[#606e53] text-white hover:text-[#606e53] transition-colors cursor-pointer"
              >
                Book Table
              </button>
              <button
                onClick={() => handleNavClick('menu')}
                className="btn-botanical shadow-lg text-xs"
              >
                <span className="btn-wrap">
                  <span className="text-one">Order Now</span>
                  <span className="text-two">Order Now</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hidden Bar Side Drawer */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        ></div>

        {/* Slide-out Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-full max-w-[400px] bg-[#0e0d0c] text-white p-8 sm:p-10 shadow-2xl flex flex-col justify-between transform transition-transform duration-500 ease-out z-10 overflow-y-auto border-r border-[#606e53]/30 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:text-[#606e53] hover:border-[#606e53] transition-colors cursor-pointer text-lg"
                aria-label="Close Navigation Menu"
              >
                ✕
              </button>
            </div>

            {/* Sidebar Logo */}
            <div className="text-center mb-8">
              <img
                src="/images/purohit/sidebar-logo.png"
                alt="Purohit Cafe"
                className="mx-auto max-h-20 w-auto object-contain filter drop-shadow brightness-110"
              />
              <div className="text-xs uppercase tracking-widest text-[#606e53] mt-2">
                Udaipur, Rajasthan
              </div>
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex flex-col space-y-4 text-center my-6">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-lg uppercase tracking-[0.25em] font-serif py-2 border-b border-white/10 transition-colors cursor-pointer ${
                      isActive ? 'text-[#606e53] font-bold' : 'text-white/90 hover:text-[#606e53]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-2 flex flex-col space-y-2">
                <a
                  href={CAFE_INFO.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest py-2 bg-[#fc8019] text-white font-bold hover:brightness-110 transition-all text-center"
                >
                  Order on Swiggy
                </a>
                <a
                  href={CAFE_INFO.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest py-2 bg-[#cb202d] text-white font-bold hover:brightness-110 transition-all text-center"
                >
                  Order on Zomato
                </a>
              </div>
            </nav>
          </div>

          {/* Booking Info and Contacts in Drawer */}
          <div className="pt-6 border-t border-white/15 text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-[#606e53] mb-2 font-medium">
              Call us for Reservation
            </div>
            <a
              href={CAFE_INFO.phoneTel}
              className="text-xl font-serif text-white hover:text-[#606e53] transition-colors block mb-4"
            >
              {CAFE_INFO.phone}
            </a>
            <button
              onClick={() => {
                setIsSidebarOpen(false);
                onOpenReservation();
              }}
              className="btn-botanical w-full text-center"
            >
              <span className="btn-wrap">
                <span className="text-one">Book Your Table</span>
                <span className="text-two">Book Your Table</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
