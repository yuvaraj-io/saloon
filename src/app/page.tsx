"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StyleLab } from '@/components/StyleLab';
import { CurlyShowcase } from '@/components/CurlyShowcase';
import { NaturalColorConsult } from '@/components/NaturalColorConsult';
import { ServicesMenu } from '@/components/ServicesMenu';
import { ReviewsSection } from '@/components/ReviewsSection';
import { LocationGuide } from '@/components/LocationGuide';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { HairstyleOption, HairColor, SalonService } from '@/types/salon';
import { SALON_SERVICES } from '@/data/salonData';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<HairstyleOption | null>(null);
  const [selectedColor, setSelectedColor] = useState<HairColor | null>(null);
  const [selectedService, setSelectedService] = useState<SalonService | null>(null);

  const handleBookFromStyleLab = (style: HairstyleOption, color?: HairColor) => {
    setSelectedStyle(style);
    if (color) setSelectedColor(color);
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: SalonService) => {
    setSelectedService(service);
    setSelectedStyle(null);
    setSelectedColor(null);
    setIsBookingOpen(true);
  };

  const handleOpenCurly = () => {
    const curlyService = SALON_SERVICES.find(s => s.id === 'srv-curly-signature');
    if (curlyService) setSelectedService(curlyService);
    setIsBookingOpen(true);
  };

  const handleOpenColour = () => {
    const colorService = SALON_SERVICES.find(s => s.id === 'srv-color-fern');
    if (colorService) setSelectedService(colorService);
    setIsBookingOpen(true);
  };

  const scrollToStudio = () => {
    const el = document.getElementById('style-studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#0A130F] relative selection:bg-salon-gold selection:text-salon-dark">
      {/* Navigation */}
      <Navbar
        onOpenBooking={() => {
          setSelectedService(null);
          setSelectedStyle(null);
          setIsBookingOpen(true);
        }}
        onNavigateToStudio={scrollToStudio}
      />

      {/* Hero with authentic MadFern Lavelle Road branding */}
      <HeroSection
        onOpenBooking={() => {
          setSelectedService(null);
          setSelectedStyle(null);
          setIsBookingOpen(true);
        }}
        onOpenStudio={scrollToStudio}
      />

      {/* Interactive Style & Silhouette Lab (Head shape, texture, color, 3D avatar) */}
      <StyleLab onBookStyle={handleBookFromStyleLab} />

      {/* Signature Curly Experience (Reddit Favorite) */}
      <CurlyShowcase onBookCurly={handleOpenCurly} />

      {/* Fern's Signature Natural Daylight Colour Consultation */}
      <NaturalColorConsult onBookColour={handleOpenColour} />

      {/* Curated Salon Services & Pricing */}
      <ServicesMenu onSelectService={handleSelectService} />

      {/* Google Maps Reviews (4.8★ with 137 reviews) */}
      <ReviewsSection />

      {/* Lavelle Road Location & Hours */}
      <LocationGuide />

      {/* Footer */}
      <Footer />

      {/* Booking Drawer / Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedStyle={selectedStyle}
        preSelectedColor={selectedColor}
        preSelectedService={selectedService}
      />
    </main>
  );
}
