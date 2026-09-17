"use client";

import React from 'react';
import { SALON_INFO } from '@/data/salonData';
import { Star, Sparkles, MapPin, Calendar, Heart, ShieldCheck, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenStudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenStudio }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambience & Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-salon-moss/30 via-salon-dark to-[#080E0B] pointer-events-none" />
      
      {/* Decorative Botanical Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-salon-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">

        {/* Rating & Location Tag */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-salon-moss/60 border border-salon-gold/30 text-salon-sand text-xs font-semibold backdrop-blur-md shadow-lg">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-salon-gold">4.8 Rating</span>
            <span className="text-salon-sand/50">|</span>
            <span className="text-salon-sand/80">137 Google Reviews</span>
          </div>

          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-salon-deep/80 border border-white/10 text-salon-sand/80 text-xs">
            <MapPin className="w-3 h-3 text-salon-gold" />
            <span>Lavelle Road, Bengaluru</span>
          </div>

          <div className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
            <span>LGBTQ+ Friendly</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-salon-sand tracking-tight leading-[1.1]">
            Lush Botanical Hair &amp; Curl Sanctuary <br className="hidden sm:block" />
            <span className="gold-gradient-text">On Lavelle Road</span>
          </h1>
          <p className="max-w-2xl mx-auto text-salon-sand/75 text-base sm:text-lg font-normal leading-relaxed">
            Bangalore&apos;s celebrated home for curl-by-curl dry cuts, outdoor daylight colour consultations with Fern, and immaculate luxury nail artistry.
          </p>
        </div>

        {/* Customer Soundbite Pill */}
        <div className="max-w-xl mx-auto p-3.5 rounded-2xl luxury-glass border border-salon-gold/20 flex items-center space-x-3 text-left">
          <span className="w-10 h-10 rounded-full bg-salon-gold/20 text-salon-gold flex items-center justify-center font-serif font-bold text-base flex-shrink-0">
            “
          </span>
          <p className="text-xs sm:text-sm text-salon-sand/85 italic">
            &ldquo;The atmosphere is so relaxing, and the attention to detail is impeccable. Such a homely Bangalore vibe!&rdquo;
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenStudio}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-salon-gold via-[#D8BC94] to-salon-gold hover:opacity-95 text-salon-dark font-extrabold text-sm tracking-wider uppercase flex items-center justify-center space-x-2.5 shadow-2xl shadow-salon-gold/20 transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-salon-dark" />
            <span>Launch Interactive Style Lab</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-salon-deep/80 hover:bg-salon-moss text-salon-sand border border-salon-gold/30 font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all"
          >
            <Calendar className="w-4 h-4 text-salon-gold" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Value Pillars */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-salon-gold/15">
          <div className="p-3 rounded-xl bg-salon-deep/40 border border-white/5">
            <div className="text-xs font-semibold text-salon-gold uppercase">Specialty</div>
            <div className="font-serif font-bold text-salon-sand text-sm mt-0.5">Reddit-Favorite Curl Cut</div>
            <div className="text-[11px] text-salon-sand/60 mt-0.5">Zero-triangle dry shaping</div>
          </div>
          <div className="p-3 rounded-xl bg-salon-deep/40 border border-white/5">
            <div className="text-xs font-semibold text-salon-gold uppercase">Colour Craft</div>
            <div className="font-serif font-bold text-salon-sand text-sm mt-0.5">Courtyard Daylight Test</div>
            <div className="text-[11px] text-salon-sand/60 mt-0.5">Authentic true-tone matching</div>
          </div>
          <div className="p-3 rounded-xl bg-salon-deep/40 border border-white/5">
            <div className="text-xs font-semibold text-salon-gold uppercase">Nail Studio</div>
            <div className="font-serif font-bold text-salon-sand text-sm mt-0.5">Artisanal Gel Overlay</div>
            <div className="text-[11px] text-salon-sand/60 mt-0.5">Long-lasting neat artistry</div>
          </div>
          <div className="p-3 rounded-xl bg-salon-deep/40 border border-white/5">
            <div className="text-xs font-semibold text-salon-gold uppercase">Hospitality</div>
            <div className="font-serif font-bold text-salon-sand text-sm mt-0.5">Homely Bangalore Vibe</div>
            <div className="text-[11px] text-salon-sand/60 mt-0.5">Pour-overs &amp; botanical calm</div>
          </div>
        </div>

      </div>
    </section>
  );
};
