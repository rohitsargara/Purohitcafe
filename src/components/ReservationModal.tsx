import React, { useState } from 'react';
import { CAFE_INFO } from '../data/cafeData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    guests: '2 People',
    seating: 'AC Comfort Hall',
    requests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Purohit Cafe, I would like to reserve a table:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Guests: ${formData.guests}\n• Seating: ${formData.seating}\n• Requests: ${formData.requests || 'None'}`
    );
    window.open(`https://wa.me/919414155635?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-[#0d1819] border border-[#606e53]/40 w-full max-w-xl p-6 sm:p-10 shadow-2xl z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 border border-white/20 text-white/80 hover:text-white hover:border-[#606e53] flex items-center justify-center transition-colors cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-8">
              <div className="text-xs uppercase tracking-[0.3em] font-bold text-[#606e53] mb-2">
                Table Reservation
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Book Your Table at Purohit Cafe
              </h3>
              <p className="text-xs text-white/70 mt-2">
                Open Daily: 8:00 AM – 10:00 PM • Anand Plaza, opp. INOX mall, University Rd
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Rahul Sharma"
                    className="w-full bg-[#171819] border border-white/20 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#606e53]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#171819] border border-white/20 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#606e53]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#171819] border border-white/20 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#606e53]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#171819] border border-white/20 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#606e53]"
                  >
                    <option value="08:30">08:30 AM (Breakfast)</option>
                    <option value="09:30">09:30 AM (Breakfast)</option>
                    <option value="11:00">11:00 AM (Brunch)</option>
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="14:00">02:00 PM (Lunch)</option>
                    <option value="16:30">04:30 PM (Evening Snacks)</option>
                    <option value="18:30">06:30 PM (Dinner)</option>
                    <option value="20:00">08:00 PM (Dinner)</option>
                    <option value="21:15">09:15 PM (Late Dinner)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#171819] border border-white/20 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#606e53]"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 People">2 People</option>
                    <option value="3-4 People">3-4 People</option>
                    <option value="5-8 People">5-8 People</option>
                    <option value="8+ Large Family Gathering">8+ Large Family Gathering</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                  Seating Ambience Preference
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['AC Comfort Hall', 'Garden Ambience', 'Family Dining Section', 'Quiet Corner Table'].map(
                    (s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setFormData({ ...formData, seating: s })}
                        className={`p-2.5 text-center border transition-all cursor-pointer ${
                          formData.seating === s
                            ? 'border-[#606e53] bg-[#606e53]/20 text-white font-semibold'
                            : 'border-white/10 text-white/70 hover:border-white/30'
                        }`}
                      >
                        {s}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                  Special Notes / Occasion (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.requests}
                  onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                  placeholder="e.g. Birthday celebration, Jain food requirements, high chair needed..."
                  className="w-full bg-[#171819] border border-white/20 px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#606e53]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button type="submit" className="btn-botanical w-full text-center py-3">
                  <span className="btn-wrap">
                    <span className="text-one">Submit Reservation</span>
                    <span className="text-two">Submit Reservation</span>
                  </span>
                </button>

                <a
                  href={CAFE_INFO.phoneTel}
                  className="btn-botanical-outline text-center py-3 flex items-center justify-center space-x-2 shrink-0"
                >
                  <i className="fa-solid fa-phone text-xs"></i>
                  <span>Call {CAFE_INFO.phone}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#606e53] text-[#606e53] mx-auto flex items-center justify-center text-3xl mb-4">
              ✓
            </div>
            <div className="text-xs uppercase tracking-[0.3em] font-bold text-[#606e53] mb-2">
              Reservation Requested
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">
              Thank You, {formData.name}!
            </h3>
            <p className="text-sm text-white/80 max-w-md mx-auto mb-6 leading-relaxed">
              We have received your table booking for <strong>{formData.guests}</strong> on{' '}
              <strong>{formData.date}</strong> at <strong>{formData.time}</strong> ({formData.seating}).
            </p>

            <div className="bg-[#171819] p-4 border border-white/10 mb-6 text-xs text-white/70 text-left space-y-1">
              <div>• <strong>Location:</strong> Anand Plaza, University Rd, opp. INOX mall, Udaipur</div>
              <div>• <strong>Reservation Desk:</strong> {CAFE_INFO.phone}</div>
              <div>• <strong>Hours:</strong> 8:00 AM – 10:00 PM Daily</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppBooking}
                className="btn-botanical py-2.5 px-6"
              >
                <span className="btn-wrap">
                  <span className="text-one">Confirm via WhatsApp</span>
                  <span className="text-two">Confirm via WhatsApp</span>
                </span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-botanical-outline py-2.5 px-6"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
