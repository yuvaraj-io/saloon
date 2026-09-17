"use client";

import React, { useState } from 'react';
import { SALON_INFO, POPULAR_HOURS } from '@/data/salonData';
import { MapPin, Clock, Phone, Navigation, Share2, Heart, Check, Copy } from 'lucide-react';

export const LocationGuide: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${SALON_INFO.fullName}, ${SALON_INFO.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl luxury-card p-6 sm:p-10 lg:p-12 border border-salon-gold/25 relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Location & Contact Specs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-salon-moss/50 border border-salon-gold/30 text-salon-gold text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Sanctuary Location</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-salon-sand">
              {SALON_INFO.name} Lavelle Road
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-salon-sand/85">
              <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-salon-dark/70 border border-salon-gold/15">
                <MapPin className="w-5 h-5 text-salon-gold flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-bold text-salon-sand text-sm">Postal Address</div>
                  <div className="text-salon-sand/80 mt-0.5">{SALON_INFO.address}</div>
                  <div className="text-[11px] text-salon-sand/60 mt-1 font-mono">
                    Google Plus Code: <span className="text-salon-gold">{SALON_INFO.plusCode}</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="px-2.5 py-1.5 rounded-lg bg-salon-deep text-salon-sand hover:text-salon-gold border border-salon-gold/20 text-xs flex items-center space-x-1"
                  title="Copy full address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-salon-dark/70 border border-salon-gold/15 flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-salon-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-salon-sand text-sm">Operating Hours</div>
                    <div className="text-salon-sand/80 mt-0.5">{SALON_INFO.hours}</div>
                    <div className="text-[11px] text-amber-400 font-semibold mt-1">
                      Closed Mondays • Opens 10 AM
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-salon-dark/70 border border-salon-gold/15 flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-salon-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-salon-sand text-sm">Direct Phone &amp; WhatsApp</div>
                    <a
                      href={`tel:${SALON_INFO.phone}`}
                      className="text-salon-gold font-semibold hover:underline block mt-0.5"
                    >
                      {SALON_INFO.phone}
                    </a>
                    <div className="text-[11px] text-salon-sand/60 mt-1">
                      Pre-booking recommended on weekends
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges & Amenities */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                <span>LGBTQ+ Friendly Safe Space</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-salon-moss/50 text-salon-sand border border-salon-gold/20">
                🌿 Botanical Natural Light Patio
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-salon-moss/50 text-salon-sand border border-salon-gold/20">
                ☕ Artisanal Bangalore Coffee
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-salon-moss/50 text-salon-sand border border-salon-gold/20">
                🚗 Valet / Parking Assistance
              </span>
            </div>

            {/* Directions Action */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=MadFern+Luxury+Unisex+Salon+71+2nd+cross+Lavelle+Road+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-salon-gold hover:bg-salon-goldHover text-salon-dark font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg shadow-salon-gold/20 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions in Google Maps</span>
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsapp}?text=Hi%20MadFern%20Lavelle%20Road,%20I'd%20like%20to%20inquire%20about%20visiting.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-salon-deep hover:bg-salon-moss text-salon-sand hover:text-salon-gold text-xs font-semibold border border-salon-gold/25 flex items-center space-x-2 transition-all"
              >
                <Share2 className="w-3.5 h-3.5 text-salon-gold" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Popular Times Visual Chart & Neighborhood Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 rounded-2xl bg-salon-dark/80 border border-salon-gold/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-salon-sand text-sm">
                  Popular Times (Thursdays &amp; Weekends)
                </span>
                <span className="text-[10px] text-amber-300 font-mono">Usually Peak at 4 PM</span>
              </div>

              {/* Bar Chart representing Google Maps popular times */}
              <div className="grid grid-cols-6 gap-2 items-end h-28 pt-2">
                {POPULAR_HOURS.map((hr, idx) => (
                  <div key={idx} className="flex flex-col items-center h-full justify-end group">
                    <div
                      className={`w-full rounded-t-lg transition-all ${
                        hr.peak
                          ? 'bg-amber-400 shadow-lg shadow-amber-400/20'
                          : 'bg-salon-moss hover:bg-salon-gold/70'
                      }`}
                      style={{ height: `${hr.busyPercent}%` }}
                      title={`${hr.time}: ${hr.busyPercent}% capacity`}
                    />
                    <span className="text-[9px] text-salon-sand/60 mt-1 font-mono">{hr.time}</span>
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-salon-sand/60 text-center">
                Quiet hours: 10:00 AM – 1:00 PM • Peak buzz: 3:30 PM – 7:00 PM
              </div>
            </div>

            {/* Neighborhood Stylized Map Card */}
            <div className="p-4 rounded-2xl bg-salon-deep/60 border border-salon-gold/15 space-y-2 text-xs">
              <div className="text-salon-gold font-semibold uppercase text-[10px] tracking-wider">
                Neighborhood Landmarks
              </div>
              <ul className="space-y-1.5 text-salon-sand/70 text-[11px]">
                <li>• 4 minutes from UB City &amp; Vittal Mallya Road</li>
                <li>• Walking distance from Bangalore Club &amp; Richmond Circle</li>
                <li>• Tucked into peaceful leafy green 2nd Cross</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
