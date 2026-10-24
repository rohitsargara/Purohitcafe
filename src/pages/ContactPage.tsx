import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { CAFE_INFO } from '../data/cafeData';

interface ContactPageProps {
  onOpenReservation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenReservation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Table Reservation',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0d1819]">
      {/* 1. PAGE BANNER */}
      <PageBanner
        subtitle="any query ?"
        title="Contact Us"
        backgroundImage="/images/background/banner-image-4.jpg"
      />

      {/* 2. CONTACT DETAILS SECTION */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Foliage Ornaments */}
        <div className="absolute left-0 top-10 opacity-20 pointer-events-none hidden lg:block">
          <img src="/images/background/bg-25.png" alt="" className="max-h-96 w-auto" />
        </div>
        <div className="absolute right-0 bottom-10 opacity-20 pointer-events-none hidden lg:block">
          <img src="/images/background/bg-6.png" alt="" className="max-h-96 w-auto" />
        </div>

        <div className="max-w-[1320px] mx-auto px-6 sm:px-12 relative z-10">
          {/* 3 Contact Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Block 1: Social Media */}
            <div className="bg-[#0e0d0c] border border-white/10 p-8 sm:p-10 text-center hover:border-[#606e53] transition-colors shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full border border-[#606e53] mx-auto flex items-center justify-center text-[#606e53] mb-5 text-xl">
                  <i className="fa-solid fa-share-nodes"></i>
                </div>
                <h4 className="text-xl font-serif text-white mb-3">Social Media</h4>
                <p className="text-xs text-white/60 mb-6">
                  Follow Purohit Cafe for daily crispy dosa reels, breakfast specials, and festival offers.
                </p>
              </div>

              <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
                <a
                  href={CAFE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 hover:border-[#606e53] text-white hover:text-black hover:bg-[#606e53] flex items-center justify-center transition-all"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram text-lg"></i>
                </a>
                <a
                  href={CAFE_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 hover:border-[#606e53] text-white hover:text-black hover:bg-[#606e53] flex items-center justify-center transition-all"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </a>
              </div>
            </div>

            {/* Block 2: Contact Info */}
            <div className="bg-[#0e0d0c] border border-[#606e53] p-8 sm:p-10 text-center shadow-2xl relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#606e53] text-black text-[10px] uppercase font-bold tracking-widest px-4 py-0.5">
                Authentic South Indian
              </div>
              <div>
                <div className="w-14 h-14 rounded-full border border-[#606e53] bg-[#606e53] mx-auto flex items-center justify-center text-black mb-5 text-xl">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h4 className="text-xl font-serif text-white mb-3">Contact Info</h4>
                <div className="text-sm text-white/80 space-y-2 mb-4 leading-relaxed font-light">
                  <p>{CAFE_INFO.address}</p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs">
                <div>
                  <a
                    href={`mailto:${CAFE_INFO.email}`}
                    className="text-white/80 hover:text-[#606e53] transition-colors block"
                  >
                    Email : {CAFE_INFO.email}
                  </a>
                </div>
                <div>
                  <a
                    href={CAFE_INFO.phoneTel}
                    className="text-white hover:text-[#606e53] font-serif text-base font-semibold transition-colors block"
                  >
                    Phone : {CAFE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Block 3: Timings */}
            <div className="bg-[#0e0d0c] border border-white/10 p-8 sm:p-10 text-center hover:border-[#606e53] transition-colors shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full border border-[#606e53] mx-auto flex items-center justify-center text-[#606e53] mb-5 text-xl">
                  <i className="fa-regular fa-clock"></i>
                </div>
                <h4 className="text-xl font-serif text-white mb-3">Opening Hours</h4>
                <p className="text-xs text-white/60 mb-6">
                  Serving piping hot South Indian breakfast, afternoon feasts, and evening snacks.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-sm">
                <span className="text-xs uppercase tracking-widest text-[#606e53] block mb-1">
                  Sunday – Saturday
                </span>
                <span className="text-white font-serif text-lg font-medium">
                  8:00 AM – 10:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Contact & Table Reservation Form */}
          <div className="bg-[#0e0d0c] border border-white/15 p-8 sm:p-14 shadow-2xl mb-20">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53] mb-2">
                <span>Call Us or Visit Purohit Cafe</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif text-white">
                Send Us a Message
              </h3>
              <p className="text-xs text-white/60 mt-2">
                Questions about bulk orders, family gatherings, or catering? Send us an inquiry.
              </p>
            </div>

            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Pooja Menaria"
                      className="w-full bg-[#171819] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#606e53]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 94141 55635"
                      className="w-full bg-[#171819] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#606e53]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@purohitcafe.com"
                      className="w-full bg-[#171819] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#606e53]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#171819] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#606e53]"
                    >
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Family Birthday / Gathering">Family Birthday / Gathering</option>
                      <option value="Corporate / Bulk Catering">Corporate / Bulk Catering</option>
                      <option value="Delivery Assistance">Delivery Assistance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you would like to know or plan..."
                    className="w-full bg-[#171819] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#606e53]"
                  ></textarea>
                </div>

                <div className="text-center pt-2">
                  <button type="submit" className="btn-botanical py-3 px-10">
                    <span className="btn-wrap">
                      <span className="text-one">Submit Message</span>
                      <span className="text-two">Submit Message</span>
                    </span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full border-2 border-[#606e53] text-[#606e53] mx-auto flex items-center justify-center text-3xl mb-4">
                  ✓
                </div>
                <h4 className="text-2xl font-serif text-white mb-2">Message Sent!</h4>
                <p className="text-sm text-white/80 max-w-md mx-auto mb-6">
                  Thank you, {formData.name}. Our staff at Purohit Cafe will get back to you shortly
                  at {formData.phone}.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="btn-botanical-outline cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Also Available on Zomato & Swiggy Section */}
          <div className="bg-[#0e0d0c] border border-white/10 p-8 sm:p-12 mb-20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#606e53]">
                  <span>Fast 30-Minute Delivery</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif text-white">
                  Also Available On Zomato &amp; Swiggy
                </h3>
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  Craving crispy dosas, fluffy idlis, or spicy chaat at home or the office? Purohit Cafe
                  delivers hot and fresh across Udaipur with lightning-fast packaging and delivery.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href={CAFE_INFO.zomatoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-white/20 p-2 hover:border-[#606e53] transition-all bg-white"
                  >
                    <img
                      src="/images/resource/zomato.jpg"
                      alt="Purohit Cafe on Zomato"
                      className="h-10 w-auto object-contain"
                    />
                  </a>
                  <a
                    href={CAFE_INFO.swiggyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-white/20 p-2 hover:border-[#606e53] transition-all bg-white"
                  >
                    <img
                      src="/images/resource/swiggy.jpg"
                      alt="Purohit Cafe on Swiggy"
                      className="h-10 w-auto object-contain"
                    />
                  </a>
                  <a
                    href={CAFE_INFO.phoneTel}
                    className="btn-botanical text-xs"
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Call: {CAFE_INFO.phone}</span>
                      <span className="text-two">Call: {CAFE_INFO.phone}</span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <img
                  src="/images/resource/restaurant.png"
                  alt="Purohit Cafe Dining"
                  className="max-h-72 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Interactive Google Map Section */}
          <div className="border border-white/10 overflow-hidden shadow-2xl relative">
            <div className="p-4 bg-[#0e0d0c] border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-sm text-white/90">
                <i className="fa-solid fa-map-location-dot text-[#606e53]"></i>
                <span>Purohit Cafe: Anand Plaza, University Rd, opp. INOX mall, Udaipur</span>
              </div>
              <a
                href={CAFE_INFO.mapDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-[#606e53] hover:text-white flex items-center space-x-1"
              >
                <span>Open in Google Maps</span>
                <span>↗</span>
              </a>
            </div>

            <iframe
              src={CAFE_INFO.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Purohit Cafe Location Map"
              className="w-full grayscale contrast-125 invert-[0.9] hue-rotate-180"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
