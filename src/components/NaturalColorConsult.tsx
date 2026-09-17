"use client";

import React from 'react';
import { Sun, Sparkles, Check, ArrowRight } from 'lucide-react';

interface NaturalColorConsultProps {
  onBookColour: () => void;
}

export const NaturalColorConsult: React.FC<NaturalColorConsultProps> = ({ onBookColour }) => {
  return (
    <section id="colour" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Visual Card with Daylight Spectrum (5 Cols) */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl luxury-glass p-7 border border-salon-gold/30 shadow-2xl relative overflow-hidden space-y-6">
            <div className="flex items-center justify-between border-b border-salon-gold/20 pb-4">
              <div className="flex items-center space-x-2">
                <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
                <span className="font-serif font-bold text-salon-sand text-lg">The Fern Protocol</span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] bg-amber-500/20 text-amber-300 font-mono">
                True Undertone
              </span>
            </div>

            {/* Spectrum Comparison */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-salon-dark/90 border border-red-500/20 text-xs">
                <div className="text-red-400 font-semibold mb-1">✕ Standard Salon Lighting</div>
                <p className="text-salon-sand/70 text-[11px]">
                  Yellow indoor halogens disguise brassiness. You leave thinking it&apos;s ash, but step outside into the sun and look orange.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs">
                <div className="text-emerald-300 font-semibold mb-1">✓ The MadFern Courtyard Consultation</div>
                <p className="text-salon-sand/80 text-[11px]">
                  Fern walks you directly into the open Lavelle Road garden patio. We match natural daylight reflections against your iris and skin undertone.
                </p>
              </div>
            </div>

            {/* Julianne Cott Quote */}
            <div className="p-4 rounded-2xl bg-amber-900/15 border border-salon-gold/20 text-xs text-salon-sand/85 italic space-y-2">
              <p>
                &ldquo;Had a cut and colour today, and left feeling like I was in a shampoo commercial, tossing my hair around feeling amazing. The Fern in Madfern did my colour consultation took me outside into the natural light to dissuade me from my initial brassy choice...&rdquo;
              </p>
              <div className="text-[11px] text-salon-gold font-mono not-italic text-right">
                — Julianne Cott (Google Review)
              </div>
            </div>
          </div>
        </div>

        {/* Right Info Details (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-salon-moss/60 border border-salon-gold/30 text-salon-gold text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Colour Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-salon-sand leading-tight">
            Hair Colour Engineered For Daylight, Not Deceptive Mirrors
          </h2>

          <p className="text-salon-sand/75 text-sm sm:text-base leading-relaxed">
            Most colour disappointment happens because the formulation wasn&apos;t designed for real sunlight. At our Lavelle Road studio, every balayage, gloss, or global tint is calibrated under natural sky exposure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-salon-deep/50 border border-salon-gold/15 space-y-1">
              <div className="text-salon-gold font-serif font-bold text-base">Ammonia-Free Botanicals</div>
              <p className="text-xs text-salon-sand/70">Enriched with cold-pressed camellia seed oil to preserve hair protein integrity.</p>
            </div>
            <div className="p-4 rounded-xl bg-salon-deep/50 border border-salon-gold/15 space-y-1">
              <div className="text-salon-gold font-serif font-bold text-base">Melted Seamless Balayage</div>
              <p className="text-xs text-salon-sand/70">Soft root tapers that grow out naturally for 4–6 months without harsh lines.</p>
            </div>
            <div className="p-4 rounded-xl bg-salon-deep/50 border border-salon-gold/15 space-y-1">
              <div className="text-salon-gold font-serif font-bold text-base">Acidic Gloss Finish</div>
              <p className="text-xs text-salon-sand/70">Seals the hair cuticle for reflective, glass-like shine that repels humidity.</p>
            </div>
            <div className="p-4 rounded-xl bg-salon-deep/50 border border-salon-gold/15 space-y-1">
              <div className="text-salon-gold font-serif font-bold text-base">Zero-Damage Lightening</div>
              <p className="text-xs text-salon-sand/70">Incorporated plex bond builders protect curls from losing their elastic bounce.</p>
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={onBookColour}
              className="px-7 py-3.5 rounded-xl bg-salon-gold hover:bg-salon-goldHover text-salon-dark font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg shadow-salon-gold/20 transition-all transform active:scale-95"
            >
              <span>Book Daylight Colour Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
