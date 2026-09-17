"use client";

import React, { useState } from 'react';
import { REVIEWS_DATA, SALON_INFO } from '@/data/salonData';
import { Star, ThumbsUp, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTags = [
    { id: 'all', label: 'All Reviews', count: 137 },
    { id: 'curly', label: 'curly haircut', count: 18 },
    { id: 'colour', label: 'hair colour', count: 7 },
    { id: 'beard', label: 'beard shave', count: 3 },
    { id: 'nails', label: 'nails & hair', count: 9 },
  ];

  const filteredReviews = activeFilter === 'all'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(r => r.highlightTag.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Top Header & Rating Overview */}
      <div className="rounded-3xl luxury-card p-6 sm:p-10 border border-salon-gold/25 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Rating Summary */}
          <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-5xl sm:text-6xl font-serif font-extrabold text-salon-gold">
                {SALON_INFO.rating}
              </span>
              <div className="text-left">
                <div className="flex items-center space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-salon-sand/70 mt-1">
                  Based on {SALON_INFO.reviewCount} verified reviews
                </div>
              </div>
            </div>
            <div className="text-xs text-emerald-400 font-semibold flex items-center justify-center md:justify-start space-x-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Google Maps Verified Sanctuary</span>
            </div>
          </div>

          {/* Review Highlights & Quick Filter */}
          <div className="md:col-span-8 space-y-3">
            <div className="text-xs text-salon-sand/60 uppercase font-mono tracking-wider">
              Popular Topics Mentioned In Reviews
            </div>
            <div className="flex flex-wrap gap-2">
              {filterTags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setActiveFilter(tag.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center space-x-1.5 border ${
                    activeFilter === tag.id
                      ? 'bg-salon-gold text-salon-dark border-salon-gold font-bold shadow-md'
                      : 'bg-salon-deep/60 text-salon-sand/75 border-salon-gold/15 hover:border-salon-gold/40'
                  }`}
                >
                  <span>{tag.label}</span>
                  <span className="text-[10px] opacity-75">({tag.count})</span>
                </button>
              ))}
            </div>

            <p className="text-xs text-salon-sand/70 italic pt-1">
              &ldquo;Great place, lovely service and terrific folks. The atmosphere is so relaxing, and the attention to detail is impeccable.&rdquo;
            </p>
          </div>

        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="p-6 rounded-3xl luxury-card border border-salon-gold/15 flex flex-col justify-between space-y-4 hover:border-salon-gold/35 transition-all"
          >
            <div>
              {/* Author header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-9 h-9 rounded-full ${rev.avatarBg} text-salon-sand flex items-center justify-center font-bold text-sm border border-salon-gold/30`}>
                    {rev.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-salon-sand text-sm">
                      {rev.author}
                    </div>
                    <div className="text-[11px] text-salon-sand/60">
                      {rev.reviewCount} reviews • {rev.timeAgo}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] px-2 py-0.5 rounded-full bg-salon-moss/50 text-salon-gold border border-salon-gold/20 font-mono">
                  {rev.highlightTag}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-xs sm:text-sm text-salon-sand/80 leading-relaxed">
                &ldquo;{rev.content}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-salon-sand/60 pt-3 border-t border-white/5">
              <span className="flex items-center space-x-1 text-emerald-400">
                <ThumbsUp className="w-3 h-3" />
                <span>Helpful ({rev.likes})</span>
              </span>
              <span className="text-salon-gold/80 font-medium">Google Maps</span>
            </div>
          </div>
        ))}
      </div>

      {/* External Link to Google Reviews */}
      <div className="mt-10 text-center">
        <a
          href="https://maps.google.com/?q=MadFern+Luxury+Unisex+Salon+Lavelle+Road+Bengaluru"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-salon-deep hover:bg-salon-moss text-salon-sand hover:text-salon-gold text-xs font-semibold border border-salon-gold/25 transition-all"
        >
          <MessageSquare className="w-3.5 h-3.5 text-salon-gold" />
          <span>Read All 137 Google Reviews</span>
          <ExternalLink className="w-3 h-3 ml-1" />
        </a>
      </div>
    </section>
  );
};
