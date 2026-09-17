"use client";

import React, { useState } from 'react';
import { SALON_SERVICES } from '@/data/salonData';
import { SalonService } from '@/types/salon';
import { Sparkles, Clock, Check, ArrowRight } from 'lucide-react';

interface ServicesMenuProps {
  onSelectService: (service: SalonService) => void;
}

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'curly', label: 'Curly Rituals' },
    { id: 'cuts', label: 'Precision Cuts' },
    { id: 'colour', label: 'Daylight Colour' },
    { id: 'nails', label: 'Nails & Art' },
    { id: 'treatments', label: 'Scalp & Treatments' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SALON_SERVICES
    : SALON_SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-salon-moss/50 border border-salon-gold/30 text-salon-gold text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Treatment Menu</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-salon-sand">
          Artisanal Hair &amp; Nail Offerings
        </h2>
        <p className="text-salon-sand/70 text-sm sm:text-base">
          Transparent pricing, botanical cruelty-free formulations, and bespoke consultations tailored to your individual silhouette.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 space-x-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              activeCategory === cat.id
                ? 'bg-salon-gold text-salon-dark border-salon-gold shadow-lg shadow-salon-gold/20 font-bold'
                : 'bg-salon-deep/50 text-salon-sand/70 border-salon-gold/15 hover:border-salon-gold/40 hover:text-salon-sand'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="p-6 rounded-3xl luxury-card border border-salon-gold/20 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-serif font-bold text-salon-sand text-lg group-hover:text-salon-gold transition-colors">
                      {service.name}
                    </h3>
                    {service.popular && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-salon-sand/60 mt-1">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-salon-gold" />
                      <span>{service.duration}</span>
                    </span>
                    <span>•</span>
                    <span className="capitalize">{service.category} Experience</span>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="font-serif font-bold text-xl text-salon-gold">
                    ₹{service.price.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-salon-sand/50">All inclusive</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-salon-sand/75 leading-relaxed mt-3">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2.5 py-0.5 rounded-md bg-salon-dark/80 text-salon-sand/70 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-salon-sand/60">
                Lavelle Road Studio
              </span>
              <button
                onClick={() => onSelectService(service)}
                className="px-4 py-2 rounded-xl bg-salon-deep hover:bg-salon-moss text-salon-sand hover:text-salon-gold text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 border border-salon-gold/30 transition-all group-hover:border-salon-gold"
              >
                <span>Select &amp; Book</span>
                <ArrowRight className="w-3.5 h-3.5 text-salon-gold" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
