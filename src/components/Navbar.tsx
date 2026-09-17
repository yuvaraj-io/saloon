"use client";

import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '@/data/salonData';
import { Phone, Calendar, Sparkles, MapPin, Menu, X, Star } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigateToStudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigateToStudio }) => {
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 1 is Monday
      const hour = now.getHours();
      // Open Tuesday to Sunday, 10am to 8:30pm (20:30)
      if (day === 1) {
        setIsOpenNow(false); // Closed on Mondays
      } else {
        setIsOpenNow(hour >= 10 && hour < 21);
      }
    };

    checkOpenStatus();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-salon-dark/95 backdrop-blur-md border-b border-salon-gold/20 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Lavelle Road Marker */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-salon-moss to-salon-dark flex items-center justify-center border border-salon-gold/40 shadow-lg group-hover:border-salon-gold transition-colors">
              <span className="text-salon-gold font-serif text-2xl font-bold tracking-tighter">M</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif font-extrabold text-xl text-salon-sand tracking-wide">
                  MadFern
                </span>
                <span className="hidden sm:inline-flex items-center space-x-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <span>4.8</span>
                </span>
              </div>
              <div className="flex items-center space-x-1 text-[11px] text-salon-sand/60">
                <MapPin className="w-3 h-3 text-salon-gold flex-shrink-0" />
                <span className="truncate">Lavelle Road, Bengaluru</span>
                <span className="text-salon-gold/40">•</span>
                <span className={`font-semibold ${isOpenNow ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {isOpenNow ? 'Open Now' : 'Opens 10 AM'}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-7 text-xs font-semibold tracking-wider text-salon-sand/80 uppercase">
            <button
              onClick={onNavigateToStudio}
              className="flex items-center space-x-1 text-salon-gold hover:text-amber-300 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-salon-gold animate-pulse" />
              <span>Style Lab 3D</span>
            </button>
            <a href="#curly" className="hover:text-salon-gold transition-colors">
              Curly Rituals
            </a>
            <a href="#colour" className="hover:text-salon-gold transition-colors">
              Daylight Colour
            </a>
            <a href="#services" className="hover:text-salon-gold transition-colors">
              Services
            </a>
            <a href="#reviews" className="hover:text-salon-gold transition-colors">
              Reviews (137)
            </a>
            <a href="#location" className="hover:text-salon-gold transition-colors">
              Lavelle Road
            </a>
          </div>

          {/* Actions: Call & Book Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-salon-sand/90 hover:text-salon-gold transition-colors"
              title="Call Salon"
            >
              <Phone className="w-3.5 h-3.5 text-salon-gold" />
              <span>{SALON_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-salon-gold hover:bg-salon-goldHover text-salon-dark font-bold text-xs tracking-wider uppercase flex items-center space-x-2 shadow-lg shadow-salon-gold/20 transition-all transform active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-lg bg-salon-gold text-salon-dark font-bold text-xs uppercase"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-salon-deep text-salon-sand border border-salon-gold/20"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl luxury-glass border border-salon-gold/20 space-y-3 animate-fadeIn text-sm">
            <button
              onClick={() => {
                onNavigateToStudio();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-2 py-2 text-salon-gold font-bold"
            >
              <Sparkles className="w-4 h-4" />
              <span>Interactive Style Lab 3D</span>
            </button>
            <a
              href="#curly"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-salon-sand/80 hover:text-salon-gold"
            >
              Curly Hair Experience
            </a>
            <a
              href="#colour"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-salon-sand/80 hover:text-salon-gold"
            >
              Fern Daylight Colour Studio
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-salon-sand/80 hover:text-salon-gold"
            >
              Salon Services Menu
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-salon-sand/80 hover:text-salon-gold"
            >
              Verified Google Reviews (4.8★)
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-salon-sand/80 hover:text-salon-gold"
            >
              Location & Hours (Lavelle Rd)
            </a>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="w-full py-2.5 rounded-xl bg-salon-deep text-center text-salon-sand text-xs flex items-center justify-center space-x-2 border border-salon-gold/20"
              >
                <Phone className="w-3.5 h-3.5 text-salon-gold" />
                <span>Call {SALON_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-salon-gold text-salon-dark font-bold text-xs uppercase"
              >
                Book An Appointment
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};
