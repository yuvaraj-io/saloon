"use client";

import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface CurlyShowcaseProps {
  onBookCurly: () => void;
}

export const CurlyShowcase: React.FC<CurlyShowcaseProps> = ({ onBookCurly }) => {
  const curlySteps = [
    {
      step: "01",
      title: "Dry Curl-by-Curl Geometric Sculpt",
      desc: "Curls live in 3D. Cutting them wet causes shrinkage surprise. We sculpt each curl group dry in its natural spring pattern to eliminate the dreaded 'pyramid hair'."
    },
    {
      step: "02",
      title: "Botanical Hard-Water Detox",
      desc: "Bangalore water builds mineral stiffness. We gently clarify with chelating green tea and apple cider extracts without stripping natural sebum."
    },
    {
      step: "03",
      title: "Deep Amino Peptide Hydration",
      desc: "Quenches thirsty 2B to 4C curls under gentle micro-mist steam, ensuring moisture penetrates deep into the cuticle core."
    },
    {
      step: "04",
      title: "Micro-Plop & Low-Heat Diffuser Cast",
      desc: "We style using organic flaxseed and botanical curl gels, locking in clump definition with zero crunch and long-lasting Bangalore humidity resistance."
    }
  ];

  return (
    <section id="curly" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl luxury-card p-6 sm:p-10 lg:p-14 border border-salon-gold/25 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-700/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bangalore&apos;s Reddit-Celebrated Curl Specialists</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-salon-sand leading-tight">
              Tired of Salons Blow-Drying Your Curls Straight Out of Panic?
            </h2>

            <div className="p-4 rounded-2xl bg-salon-dark/80 border border-salon-gold/20 text-xs sm:text-sm text-salon-sand/85 italic space-y-2">
              <p>
                &ldquo;I&apos;ve been struggling to find a good salon that does curly hair cuts for men in Bangalore. Found this place through Reddit and I&apos;m so happy. They actually understand curl patterns!&rdquo;
              </p>
              <div className="flex items-center justify-between text-[11px] text-salon-gold font-mono not-italic pt-1 border-t border-white/5">
                <span>— Shreejeet (Google Maps Review)</span>
                <span>★★★★★ 5.0</span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-salon-sand/80">
              <li className="flex items-center space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-salon-moss flex items-center justify-center text-salon-gold flex-shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Specialized cuts for 2A waves, 3A-3C spirals, and 4A-4C coils</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-salon-moss flex items-center justify-center text-salon-gold flex-shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Unisex consultations for men, women, and non-binary clients</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-salon-moss flex items-center justify-center text-salon-gold flex-shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Take-home styling guidance you can replicate at home</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onBookCurly}
                className="px-6 py-3.5 rounded-xl bg-salon-gold hover:bg-salon-goldHover text-salon-dark font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg shadow-salon-gold/20 transition-all transform active:scale-95"
              >
                <span>Book Signature Curly Cut (₹2,400)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 4-Step Method Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {curlySteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-salon-dark/70 border border-salon-gold/15 hover:border-salon-gold/35 transition-all space-y-2.5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-salon-gold tracking-widest">
                    STEP {step.step}
                  </span>
                  <h3 className="font-serif font-bold text-salon-sand text-base mt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-salon-sand/70 leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>
                <div className="h-0.5 w-10 bg-salon-gold/30 rounded-full mt-3" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
