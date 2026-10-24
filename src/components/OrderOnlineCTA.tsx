import React from 'react';
import { CAFE_INFO } from '../data/cafeData';

interface OrderOnlineCTAProps {
  customText?: string;
  onOpenReservation?: () => void;
}

export const OrderOnlineCTA: React.FC<OrderOnlineCTAProps> = ({
  customText,
  onOpenReservation
}) => {
  return (
    <section className="relative py-24 bg-[#0a1314] overflow-hidden text-center border-t border-b border-white/10">
      {/* Decorative leaf watermarks matching theme */}
      <div className="absolute -left-12 bottom-0 opacity-15 pointer-events-none">
        <img src="/images/background/bg-10.png" alt="" className="max-h-64 w-auto" />
      </div>
      <div className="absolute -right-12 top-0 opacity-15 pointer-events-none">
        <img src="/images/background/bg-11.png" alt="" className="max-h-64 w-auto" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-4">
          <img
            src="/images/icons/separator.svg"
            alt="Ornament"
            className="w-24 sm:w-28 h-auto opacity-80"
          />
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-wide mb-6">
          Order Online From Purohit Cafe
        </h2>

        <p className="text-base sm:text-xl text-white/80 italic font-serif max-w-2xl mx-auto mb-10">
          {customText || '"Best South Indian Food and Chaat of Udaipur – Authentic Flavors in Every Bite!"'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={CAFE_INFO.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-botanical shadow-xl text-xs"
          >
            <span className="btn-wrap">
              <span className="text-one">Order on Swiggy</span>
              <span className="text-two">Order on Swiggy</span>
            </span>
          </a>

          <a
            href={CAFE_INFO.zomatoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-botanical shadow-xl text-xs"
          >
            <span className="btn-wrap">
              <span className="text-one">Order on Zomato</span>
              <span className="text-two">Order on Zomato</span>
            </span>
          </a>

          {onOpenReservation ? (
            <button
              onClick={onOpenReservation}
              className="btn-botanical-outline cursor-pointer"
            >
              Book Your Table
            </button>
          ) : (
            <a
              href={CAFE_INFO.phoneTel}
              className="btn-botanical-outline cursor-pointer"
            >
              Call for Table: {CAFE_INFO.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
