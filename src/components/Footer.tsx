"use client";

import React from 'react';
import { SALON_INFO } from '@/data/salonData';
import { Heart, MapPin, Phone, Clock, Star, Instagram, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 border-t border-salon-gold/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-salon-sand">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        
        {/* Col 1: Brand & Tagline (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-salon-moss to-salon-dark flex items-center justify-center border border-salon-gold/40 shadow-lg">
              <span className="text-salon-gold font-serif text-2xl font-bold">M</span>
            </div>
            <div>
              <span className="font-serif font-bold text-xl text-salon-sand tracking-wide">
                MadFern
              </span>
              <div className="text-[11px] text-salon-gold">Luxury Unisex Salon • Lavelle Road</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-salon-sand/70 max-w-sm leading-relaxed">
            Bengaluru&apos;s sanctuary for curly hair dry cuts, natural daylight colour matching with Fern, and immaculate nail care. Homely luxury tucked into peaceful Lavelle Road.
          </p>

          <div className="flex items-center space-x-2 pt-2">
            <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
              <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
              <span>LGBTQ+ Safe &amp; Welcoming</span>
            </span>
            <span className="flex items-center space-x-1 px-3 py-1 rounded-full text-xs bg-salon-moss/50 text-salon-gold border border-salon-gold/20 font-mono">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>4.8 (137 Reviews)</span>
            </span>
          </div>
        </div>

        {/* Col 2: Studio Hours & Access (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-salon-gold font-mono">
            Lavelle Road Studio
          </div>
          <div className="space-y-2 text-xs text-salon-sand/80">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-salon-gold flex-shrink-0 mt-0.5" />
              <span>{SALON_INFO.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-salon-gold flex-shrink-0" />
              <span>{SALON_INFO.hours} (Closed Mondays)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-salon-gold flex-shrink-0" />
              <a href={`tel:${SALON_INFO.phone}`} className="hover:text-salon-gold">
                {SALON_INFO.phone} / {SALON_INFO.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-[11px] text-salon-sand/60">
              <Compass className="w-4 h-4 text-salon-gold flex-shrink-0" />
              <span>Plus Code: {SALON_INFO.plusCode}</span>
            </div>
          </div>
        </div>

        {/* Col 3: Quick Navigation (3 cols) */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-salon-gold font-mono">
            Explore Sanctuary
          </div>
          <ul className="space-y-2 text-xs text-salon-sand/70">
            <li><a href="#style-studio" className="hover:text-salon-gold">Style Lab 3D Engine</a></li>
            <li><a href="#curly" className="hover:text-salon-gold">Curly Hair Rituals</a></li>
            <li><a href="#colour" className="hover:text-salon-gold">Daylight Colour Consultation</a></li>
            <li><a href="#services" className="hover:text-salon-gold">Service Menu &amp; Pricing</a></li>
            <li><a href="#reviews" className="hover:text-salon-gold">Verified Google Reviews</a></li>
            <li><a href="#location" className="hover:text-salon-gold">Directions &amp; Hours</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-salon-sand/50 gap-4">
        <div>
          © {new Date().getFullYear()} MadFern Luxury Unisex Salon. All rights reserved. Lavelle Road, Bengaluru.
        </div>
        <div className="flex items-center space-x-4">
          <span>Homely Bangalore Vibe</span>
          <span>•</span>
          <span>Botanical &amp; Cruelty-Free</span>
        </div>
      </div>
    </footer>
  );
};
