import React from 'react';
import { PageId } from '../types';
import { CAFE_INFO } from '../data/cafeData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPolicy: (type: 'privacy' | 'terms' | 'refund' | 'shipping') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicy }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0b1415] text-white pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Background Subtle Gradient & Foliage effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#606e53_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Main Info Column (col-lg-6) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="mb-2">
              <img
                src="/images/purohit/logo.png"
                alt="Purohit Cafe Logo"
                className="h-14 sm:h-18 w-auto object-contain brightness-110 filter drop-shadow"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#606e53] font-medium">
              {CAFE_INFO.tagline}
            </p>
            <ul className="space-y-3 text-sm text-white/80 max-w-md">
              <li className="flex items-start justify-center lg:justify-start space-x-3">
                <i className="fa-solid fa-location-dot text-[#606e53] mt-1 shrink-0"></i>
                <span>{CAFE_INFO.address}</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start space-x-3">
                <i className="fa-regular fa-envelope text-[#606e53] shrink-0"></i>
                <a
                  href={`mailto:${CAFE_INFO.email}`}
                  className="hover:text-[#606e53] transition-colors"
                >
                  {CAFE_INFO.email}
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start space-x-3">
                <i className="fa-solid fa-phone text-[#606e53] shrink-0"></i>
                <a
                  href={CAFE_INFO.phoneTel}
                  className="hover:text-[#606e53] transition-colors font-semibold"
                >
                  Call Us: {CAFE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start space-x-3">
                <i className="fa-regular fa-clock text-[#606e53] shrink-0"></i>
                <span>Opening Hours: {CAFE_INFO.timings}</span>
              </li>
            </ul>

            {/* Separator Dots */}
            <div className="flex space-x-2 pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#606e53]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#606e53]"></span>
            </div>
          </div>

          {/* Quick Links Column (col-lg-3) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-sm uppercase tracking-[0.25em] text-[#606e53] font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-[#606e53] hover:translate-x-1 transition-all cursor-pointer inline-block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-[#606e53] hover:translate-x-1 transition-all cursor-pointer inline-block"
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('menu')}
                  className="hover:text-[#606e53] hover:translate-x-1 transition-all cursor-pointer inline-block"
                >
                  Menu Restaurant
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('gallery')}
                  className="hover:text-[#606e53] hover:translate-x-1 transition-all cursor-pointer inline-block"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-[#606e53] hover:translate-x-1 transition-all cursor-pointer inline-block"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href={CAFE_INFO.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#606e53] font-medium hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Order on Swiggy ↗
                </a>
              </li>
              <li>
                <a
                  href={CAFE_INFO.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#606e53] font-medium hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Order on Zomato ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Policies Column (col-lg-3) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-sm uppercase tracking-[0.25em] text-[#606e53] font-semibold mb-6">
              Connect With Us
            </h4>
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
              <a
                href={CAFE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/90 hover:text-black hover:bg-[#606e53] hover:border-[#606e53] transition-all"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/90 hover:text-black hover:bg-[#606e53] hover:border-[#606e53] transition-all"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
            </div>

            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
              Information & Policies
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-[#606e53] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-[#606e53] transition-colors cursor-pointer"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('refund')}
                  className="hover:text-[#606e53] transition-colors cursor-pointer"
                >
                  Return and Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('shipping')}
                  className="hover:text-[#606e53] transition-colors cursor-pointer"
                >
                  Shipping &amp; Delivery Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright - Petpooja completely removed as requested */}
        <div className="pt-8 text-center text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {currentYear} Purohit Cafe, Udaipur. All Rights Reserved.
          </div>
          <div className="text-white/60 font-serif">
            Authentic South Indian &amp; Chaat • Anand Plaza, University Road
          </div>
        </div>
      </div>
    </footer>
  );
};
