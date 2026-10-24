import React from 'react';
import { CAFE_INFO } from '../data/cafeData';

export type PolicyType = 'privacy' | 'terms' | 'refund' | 'shipping';

interface PolicyModalProps {
  policyType: PolicyType | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  policyType,
  onClose
}) => {
  if (!policyType) return null;

  const contentMap: Record<PolicyType, { title: string; body: React.ReactNode }> = {
    privacy: {
      title: 'Privacy Policy',
      body: (
        <div className="space-y-4 text-sm text-white/80 leading-relaxed">
          <p>
            At Purohit Cafe, accessible from https://purohitcafe.com, one of our main
            priorities is the privacy of our visitors. This Privacy Policy document contains types of
            information that is collected and recorded by Purohit Cafe and how we use it.
          </p>
          <h4 className="text-white font-serif text-base pt-2">Information We Collect</h4>
          <p>
            When you visit or place a table reservation or order, we may collect your name, email
            address, phone number, and dining preferences to ensure an exceptional experience.
          </p>
          <h4 className="text-white font-serif text-base pt-2">How We Use Your Information</h4>
          <p>
            We use the information we collect to operate our restaurant services, confirm table bookings,
            and communicate order fulfillment details.
          </p>
          <h4 className="text-white font-serif text-base pt-2">Contact Us</h4>
          <p>
            If you have additional questions, do not hesitate to contact us at {CAFE_INFO.email} or call {CAFE_INFO.phone}.
          </p>
        </div>
      )
    },
    terms: {
      title: 'Terms and Conditions',
      body: (
        <div className="space-y-4 text-sm text-white/80 leading-relaxed">
          <p>
            Welcome to Purohit Cafe! These terms outline the policies for dining, visiting, and ordering from
            Purohit Cafe, Anand Plaza, Udaipur.
          </p>
          <h4 className="text-white font-serif text-base pt-2">Dine-In Reservations</h4>
          <p>
            Table bookings are subject to availability. Please arrive within 15 minutes of your
            reserved time. For large parties and gatherings, please notify our team in advance.
          </p>
          <h4 className="text-white font-serif text-base pt-2">Pure Vegetarian Quality Assurance</h4>
          <p>
            All our preparations are 100% vegetarian, prepared using hygienic ingredients, pure desi ghee,
            and freshly fermented batters.
          </p>
        </div>
      )
    },
    refund: {
      title: 'Return and Refund Policy',
      body: (
        <div className="space-y-4 text-sm text-white/80 leading-relaxed">
          <p>
            Our top priority is your culinary delight. Because food is prepared fresh to order, please notify
            our manager immediately if a dish served requires attention.
          </p>
          <h4 className="text-white font-serif text-base pt-2">Delivery Resolution</h4>
          <p>
            Orders placed via delivery platforms (Zomato or Swiggy) adhere to their respective platform
            cancellation and refund terms.
          </p>
        </div>
      )
    },
    shipping: {
      title: 'Shipping & Delivery Policy',
      body: (
        <div className="space-y-4 text-sm text-white/80 leading-relaxed">
          <p>
            Purohit Cafe provides dine-in, takeaway pickup, and online food delivery across Udaipur.
          </p>
          <h4 className="text-white font-serif text-base pt-2">Delivery Timings</h4>
          <p>
            Orders are fulfilled daily from 8:00 AM to 10:00 PM with typical delivery times of 25–40 minutes
            across Udaipur.
          </p>
        </div>
      )
    }
  };

  const { title, body } = contentMap[policyType];

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#0d1819] border border-[#606e53]/50 w-full max-w-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center pb-4 mb-6 border-b border-white/10">
          <h3 className="text-2xl font-serif text-white">{title}</h3>
          <button
            onClick={onClose}
            className="w-9 h-9 border border-white/20 text-white hover:text-[#606e53] hover:border-[#606e53] flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>
        {body}
        <div className="mt-8 pt-4 border-t border-white/10 text-right">
          <button onClick={onClose} className="btn-botanical py-2 px-6">
            <span className="btn-wrap">
              <span className="text-one">Close</span>
              <span className="text-two">Close</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
