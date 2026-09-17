"use client";

import React, { useState, useEffect } from 'react';
import { SALON_SERVICES, SALON_INFO } from '@/data/salonData';
import { HairstyleOption, HairColor, SalonService } from '@/types/salon';
import { X, Calendar, Clock, User, Phone, CheckCircle, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedStyle?: HairstyleOption | null;
  preSelectedColor?: HairColor | null;
  preSelectedService?: SalonService | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedStyle,
  preSelectedColor,
  preSelectedService,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preSelectedService?.id || SALON_SERVICES[0].id
  );
  const [selectedStylist, setSelectedStylist] = useState<string>("Fern (Master Stylist & Curl Lead)");
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("11:30 AM");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (preSelectedService) {
      setSelectedServiceId(preSelectedService.id);
    } else if (preSelectedStyle) {
      // match style to service
      const match = SALON_SERVICES.find(s => s.id === preSelectedStyle.serviceIdRef);
      if (match) setSelectedServiceId(match.id);
      if (preSelectedStyle.recommendedStylist) {
        setSelectedStylist(preSelectedStyle.recommendedStylist);
      }
    }
  }, [preSelectedService, preSelectedStyle]);

  // Generate next 7 dates
  const nextDates = React.useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      // Skip Mondays (day 1)
      if (d.getDay() !== 1) {
        dates.push({
          dateStr: d.toISOString().split('T')[0],
          dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
          displayDate: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
        });
      }
    }
    return dates;
  }, []);

  useEffect(() => {
    if (nextDates.length > 0 && !selectedDate) {
      setSelectedDate(nextDates[0].dateStr);
    }
  }, [nextDates, selectedDate]);

  const activeService = SALON_SERVICES.find(s => s.id === selectedServiceId) || SALON_SERVICES[0];

  const timeSlots = [
    "10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM", "7:00 PM"
  ];

  const stylists = [
    "Fern (Master Stylist & Curl Lead)",
    "Arbaaz (Precision Barber & Fade Lead)",
    "Kavya (Curl Specialist & Botanicals)",
    "Preethi (Creative Colour & Nail Artisan)",
    "Any Senior Artisan Available"
  ];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert("Please provide your name and phone number");
      return;
    }

    // Trigger confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A880', '#1E382B', '#84A98C', '#FAF8F5']
      });
    } catch {
      // fallback
    }

    setIsSuccess(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `*MadFern Lavelle Road Booking Request*\n` +
      `• *Client*: ${clientName}\n` +
      `• *Phone*: ${clientPhone}\n` +
      `• *Service*: ${activeService.name} (₹${activeService.price})\n` +
      (preSelectedStyle ? `• *Style Lab Pick*: ${preSelectedStyle.name}\n` : '') +
      (preSelectedColor ? `• *Daylight Colour*: ${preSelectedColor.name}\n` : '') +
      `• *Preferred Stylist*: ${selectedStylist}\n` +
      `• *Date*: ${selectedDate}\n` +
      `• *Time*: ${selectedTime}\n` +
      (notes ? `• *Notes*: ${notes}\n` : '') +
      `\nPlease confirm slot availability.`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl luxury-glass border border-salon-gold/40 shadow-2xl p-6 sm:p-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-salon-sand transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-bold text-2xl text-salon-sand">
                Booking Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-salon-sand/70 max-w-md mx-auto">
                Thank you, <strong>{clientName}</strong>! Our Lavelle Road concierge team will review your slot with {selectedStylist} for {selectedDate} at {selectedTime}.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-salon-dark/80 border border-salon-gold/20 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-salon-sand/60">Service:</span>
                <span className="font-semibold text-salon-sand">{activeService.name}</span>
              </div>
              {preSelectedStyle && (
                <div className="flex justify-between">
                  <span className="text-salon-sand/60">Style Lab Selection:</span>
                  <span className="font-semibold text-salon-gold">{preSelectedStyle.name}</span>
                </div>
              )}
              {preSelectedColor && (
                <div className="flex justify-between">
                  <span className="text-salon-sand/60">Daylight Colour:</span>
                  <span className="font-semibold text-salon-gold">{preSelectedColor.name}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-salon-sand/60">Location:</span>
                <span className="text-salon-sand">71, 2nd Cross, Lavelle Road, Blr</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-1.5">
                <span className="text-salon-sand/60">Total Estimated:</span>
                <span className="font-bold text-salon-gold">₹{activeService.price}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Open Instant WhatsApp Confirmation</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-salon-deep text-salon-sand text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-salon-gold text-xs font-mono uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MadFern Lavelle Road Reservation</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-salon-sand">
                Reserve Your Chair
              </h3>
              <p className="text-xs text-salon-sand/70">
                Homely Bangalore ambiance, zero-hurry appointments.
              </p>
            </div>

            {/* If coming from Style Lab, show active customized badge */}
            {(preSelectedStyle || preSelectedColor) && (
              <div className="p-3.5 rounded-2xl bg-salon-moss/50 border border-salon-gold/30 text-xs flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-salon-gold font-bold">
                    Custom Style Lab Configuration Attached
                  </div>
                  <div className="text-salon-sand font-serif font-semibold mt-0.5">
                    {preSelectedStyle?.name} {preSelectedColor ? `(${preSelectedColor.name})` : ''}
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-black/40 px-2 py-1 rounded">
                  98% Match
                </span>
              </div>
            )}

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-semibold text-salon-sand/80 mb-2">
                Select Service
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full p-3 rounded-xl bg-salon-dark/90 border border-salon-gold/25 text-salon-sand text-xs font-medium focus:outline-none focus:border-salon-gold"
              >
                {SALON_SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — ₹{s.price} ({s.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Stylist */}
            <div>
              <label className="block text-xs font-semibold text-salon-sand/80 mb-2">
                Preferred Stylist / Artisan
              </label>
              <select
                value={selectedStylist}
                onChange={(e) => setSelectedStylist(e.target.value)}
                className="w-full p-3 rounded-xl bg-salon-dark/90 border border-salon-gold/25 text-salon-sand text-xs font-medium focus:outline-none focus:border-salon-gold"
              >
                {stylists.map((st, idx) => (
                  <option key={idx} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Picker (Horizontal Carousel) */}
            <div>
              <label className="block text-xs font-semibold text-salon-sand/80 mb-2">
                Select Date (Closed Mondays)
              </label>
              <div className="flex space-x-2 overflow-x-auto pb-1 no-scrollbar">
                {nextDates.map((d) => (
                  <button
                    type="button"
                    key={d.dateStr}
                    onClick={() => setSelectedDate(d.dateStr)}
                    className={`px-3.5 py-2 rounded-xl text-xs flex flex-col items-center flex-shrink-0 border transition-all ${
                      selectedDate === d.dateStr
                        ? 'bg-salon-gold text-salon-dark border-salon-gold font-bold shadow-md'
                        : 'bg-salon-deep/60 text-salon-sand/80 border-salon-gold/15 hover:border-salon-gold/40'
                    }`}
                  >
                    <span className="text-[10px] uppercase">{d.dayName}</span>
                    <span className="font-serif font-bold text-sm">{d.displayDate}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Picker */}
            <div>
              <label className="block text-xs font-semibold text-salon-sand/80 mb-2">
                Preferred Time Slot
              </label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((ts) => (
                  <button
                    type="button"
                    key={ts}
                    onClick={() => setSelectedTime(ts)}
                    className={`py-2 px-1 rounded-lg text-xs font-mono transition-all border text-center ${
                      selectedTime === ts
                        ? 'bg-salon-gold text-salon-dark border-salon-gold font-bold'
                        : 'bg-salon-deep/40 text-salon-sand/70 border-salon-gold/15 hover:border-salon-gold/30'
                    }`}
                  >
                    {ts}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-salon-sand/80 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-salon-gold absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-salon-dark/90 border border-salon-gold/25 text-salon-sand text-xs focus:outline-none focus:border-salon-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-salon-sand/80 mb-1">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-salon-gold absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="081058 60702 / mobile"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-salon-dark/90 border border-salon-gold/25 text-salon-sand text-xs focus:outline-none focus:border-salon-gold"
                  />
                </div>
              </div>
            </div>

            {/* Optional Notes */}
            <div>
              <label className="block text-xs font-semibold text-salon-sand/80 mb-1">
                Consultation Notes / Hair Goals
              </label>
              <textarea
                rows={2}
                placeholder="E.g., 3B curly hair, first time color, natural light consultation..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-salon-dark/90 border border-salon-gold/25 text-salon-sand text-xs focus:outline-none focus:border-salon-gold"
              />
            </div>

            {/* Total Price & Submit */}
            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <div>
                <div className="text-[10px] text-salon-sand/60">Estimated Total</div>
                <div className="text-xl font-serif font-bold text-salon-gold">
                  ₹{activeService.price.toLocaleString('en-IN')}
                </div>
              </div>

              <button
                type="submit"
                className="px-7 py-3 rounded-xl bg-salon-gold hover:bg-salon-goldHover text-salon-dark font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-salon-gold/20 transition-all transform active:scale-95"
              >
                Confirm Appointment
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
