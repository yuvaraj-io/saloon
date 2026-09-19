"use client";

import React, { useState, useMemo } from 'react';
import { HeadShape, HairTexture, HairstyleOption, HairColor } from '@/types/salon';
import { HEAD_SHAPES, HAIR_COLORS, HAIRSTYLES_CATALOG } from '@/data/styleLabData';
import { HaircutVisualGallery } from './HaircutVisualGallery';
import { Sparkles, CheckCircle2, ShieldCheck, Scissors, ArrowRight, Compass, Camera, User, Users, Sliders, Layers } from 'lucide-react';

interface StyleLabProps {
  onBookStyle: (style: HairstyleOption, color?: HairColor) => void;
}

export const StyleLab: React.FC<StyleLabProps> = ({ onBookStyle }) => {
  const [selectedHeadShape, setSelectedHeadShape] = useState<HeadShape>('round');
  const [selectedGender, setSelectedGender] = useState<'all' | 'women' | 'men'>('all');
  const [selectedTexture, setSelectedTexture] = useState<'all' | HairTexture>('all');
  const [selectedColor, setSelectedColor] = useState<HairColor>(HAIR_COLORS[1]); // Honey Balayage
  const [activeTab, setActiveTab] = useState<'shape' | 'styles' | 'color'>('styles');

  // Filter hairstyles matching current gender and texture, prioritizing suitable head shapes
  const availableStyles = useMemo(() => {
    let filtered = [...HAIRSTYLES_CATALOG];
    
    if (selectedGender === 'women') {
      filtered = filtered.filter(s => s.gender === 'women' || s.gender === 'unisex');
    } else if (selectedGender === 'men') {
      filtered = filtered.filter(s => s.gender === 'men' || s.gender === 'unisex');
    }

    if (selectedTexture !== 'all') {
      filtered = filtered.filter(s => s.texture === selectedTexture);
    }
    
    // Sort styles so that those matching the selected head shape appear first
    return filtered.sort((a, b) => {
      const aMatches = a.bestHeadShapes.includes(selectedHeadShape) ? 1 : 0;
      const bMatches = b.bestHeadShapes.includes(selectedHeadShape) ? 1 : 0;
      return bMatches - aMatches;
    });
  }, [selectedGender, selectedTexture, selectedHeadShape]);

  const [selectedStyleId, setSelectedStyleId] = useState<string>(HAIRSTYLES_CATALOG[2].id);

  // Active hairstyle
  const currentStyle = useMemo(() => {
    const found = availableStyles.find(s => s.id === selectedStyleId);
    return found || availableStyles[0] || HAIRSTYLES_CATALOG[0];
  }, [availableStyles, selectedStyleId]);

  const currentHeadShapeInfo = useMemo(() => {
    return HEAD_SHAPES.find(h => h.id === selectedHeadShape) || HEAD_SHAPES[0];
  }, [selectedHeadShape]);

  return (
    <section id="style-studio" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-salon-moss/50 border border-salon-gold/30 text-salon-gold text-xs font-semibold uppercase tracking-widest mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Head Shape Geometry &amp; Haircut Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-salon-sand leading-tight">
          Mix Your Bone Geometry With Curated Haircut Cuts
        </h2>
        <p className="mt-4 text-salon-sand/70 text-sm sm:text-base leading-relaxed">
          Select any head shape geometry to instantly see physical haircut combinations for men and women, calculated by facial thirds, jaw angles, and crown volume.
        </p>
      </div>

      {/* Head Shape Quick Selector Ribbon (Interactive Geometry Switcher) */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-mono uppercase tracking-wider text-salon-sand/70 flex items-center space-x-1.5">
            <Sliders className="w-3.5 h-3.5 text-salon-gold" />
            <span>Select Head Shape Geometry:</span>
          </span>
          <span className="text-xs text-salon-gold font-bold">
            Active: {currentHeadShapeInfo.title} ({currentHeadShapeInfo.geometry.verticalRatio})
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {HEAD_SHAPES.map((shape) => {
            const isSelected = selectedHeadShape === shape.id;
            return (
              <button
                key={shape.id}
                onClick={() => {
                  setSelectedHeadShape(shape.id);
                  // auto-select first matching style for this shape
                  const matching = HAIRSTYLES_CATALOG.find(s => s.bestHeadShapes.includes(shape.id));
                  if (matching) setSelectedStyleId(matching.id);
                }}
                className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-salon-gold text-salon-dark border-salon-gold shadow-lg shadow-salon-gold/25 font-bold scale-[1.02]'
                    : 'bg-salon-deep/60 text-salon-sand border-salon-gold/20 hover:border-salon-gold/40 hover:bg-salon-deep/90'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif font-bold text-sm capitalize">{shape.title}</span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-salon-dark" />}
                </div>
                <div className={`text-[10px] truncate ${isSelected ? 'text-salon-dark/80 font-medium' : 'text-salon-sand/60'}`}>
                  {shape.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gender Category Pill Switcher */}
      <div className="max-w-xl mx-auto mb-8 p-1.5 rounded-2xl bg-salon-deep/90 border border-salon-gold/25 flex items-center justify-between shadow-xl">
        <button
          onClick={() => setSelectedGender('all')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 ${
            selectedGender === 'all'
              ? 'bg-salon-gold text-salon-dark shadow-md'
              : 'text-salon-sand/70 hover:text-salon-sand'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>All Combinations ({HAIRSTYLES_CATALOG.length})</span>
        </button>
        <button
          onClick={() => setSelectedGender('women')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 ${
            selectedGender === 'women'
              ? 'bg-salon-gold text-salon-dark shadow-md'
              : 'text-salon-sand/70 hover:text-salon-sand'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Women&apos;s Cuts</span>
        </button>
        <button
          onClick={() => setSelectedGender('men')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 ${
            selectedGender === 'men'
              ? 'bg-salon-gold text-salon-dark shadow-md'
              : 'text-salon-sand/70 hover:text-salon-sand'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Men&apos;s Cuts &amp; Beards</span>
        </button>
      </div>

      {/* Main Studio Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Head Shape Geometry Blueprint & Combinations Matrix (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">

          {/* Navigation Tabs */}
          <div className="flex border-b border-salon-gold/20 pb-2 space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveTab('styles')}
              className={`flex items-center space-x-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'styles'
                  ? 'bg-salon-gold text-salon-dark shadow-lg shadow-salon-gold/20 font-bold'
                  : 'text-salon-sand/70 hover:text-salon-sand hover:bg-salon-deep/60'
              }`}
            >
              <Scissors className="w-4 h-4" />
              <span>Haircut Photography ({availableStyles.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('shape')}
              className={`flex items-center space-x-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'shape'
                  ? 'bg-salon-gold text-salon-dark shadow-lg shadow-salon-gold/20 font-bold'
                  : 'text-salon-sand/70 hover:text-salon-sand hover:bg-salon-deep/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Geometry Blueprint</span>
            </button>
            <button
              onClick={() => setActiveTab('color')}
              className={`flex items-center space-x-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'color'
                  ? 'bg-salon-gold text-salon-dark shadow-lg shadow-salon-gold/20 font-bold'
                  : 'text-salon-sand/70 hover:text-salon-sand hover:bg-salon-deep/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Daylight Colour</span>
            </button>
          </div>

          {/* TAB 1: COMBINATIONS MATRIX WITH PHYSICAL HAIRCUT PHOTOS */}
          {activeTab === 'styles' && (
            <div className="space-y-4 animate-fadeIn">
              {/* Geometry compensation pill */}
              <div className="p-3.5 rounded-2xl bg-salon-moss/50 border border-salon-gold/30 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-salon-sand font-medium">
                    Optimized for <strong>{currentHeadShapeInfo.title} Geometry</strong>:
                  </span>
                </div>
                <span className="text-salon-gold font-mono text-[11px]">
                  {currentHeadShapeInfo.geometry.goal.split('&')[0]}
                </span>
              </div>

              {/* Texture Filter Sub-bar */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Textures' },
                  { id: 'curly', label: '🌿 Curly (MadFern Specialist)' },
                  { id: 'wavy', label: 'Wavy' },
                  { id: 'straight', label: 'Straight / Fade' },
                  { id: 'coily', label: 'Coily Crown' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTexture(t.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      selectedTexture === t.id
                        ? 'bg-salon-gold text-salon-dark border-salon-gold font-bold shadow-md'
                        : 'bg-salon-deep/50 border-salon-gold/15 text-salon-sand/70 hover:text-salon-sand hover:border-salon-gold/40'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Haircuts List with Physical Photos */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
                  {availableStyles.map((style) => {
                    const isSelected = style.id === currentStyle.id;
                    const isIdeal = style.bestHeadShapes.includes(selectedHeadShape);
                    return (
                      <button
                        key={style.id}
                        onClick={() => setSelectedStyleId(style.id)}
                        className={`p-3 rounded-2xl text-left border transition-all flex items-center space-x-3 group ${
                          isSelected
                            ? 'bg-salon-moss/80 border-salon-gold shadow-lg shadow-salon-gold/20'
                            : 'bg-salon-deep/40 border-salon-gold/15 hover:border-salon-gold/40 hover:bg-salon-deep/70'
                        }`}
                      >
                        {/* Physical Cut Photo Thumbnail */}
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-salon-gold/40 shadow-inner">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={style.imageUrl}
                            alt={style.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-serif font-bold text-salon-sand text-sm truncate">
                              {style.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1.5 mt-1">
                            {isIdeal ? (
                              <span className="text-[10px] bg-emerald-500/25 text-emerald-300 px-2 py-0.5 rounded-full font-bold border border-emerald-500/40">
                                98% {selectedHeadShape} Fit
                              </span>
                            ) : (
                              <span className="text-[10px] bg-salon-dark text-salon-sand/60 px-2 py-0.5 rounded-full border border-white/10">
                                Suitable
                              </span>
                            )}
                            <span className="text-[10px] text-salon-gold uppercase font-mono capitalize">
                              {style.gender}
                            </span>
                          </div>
                          <div className="text-[11px] text-salon-sand/60 mt-1 flex justify-between">
                            <span>{style.estimatedTime}</span>
                            <span className="text-salon-gold font-bold">₹{style.price}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GEOMETRY BLUEPRINT & RATIOS */}
          {activeTab === 'shape' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-5 rounded-2xl luxury-glass border border-salon-gold/30 space-y-4">
                <div className="flex items-center justify-between border-b border-salon-gold/20 pb-3">
                  <div className="flex items-center space-x-2">
                    <Compass className="w-5 h-5 text-salon-gold" />
                    <span className="font-serif font-bold text-salon-sand text-lg">
                      {currentHeadShapeInfo.title} Bone Architecture Blueprint
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-salon-dark border border-salon-gold/30 text-salon-gold">
                    {currentHeadShapeInfo.geometry.verticalRatio}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-salon-dark/80 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-salon-sand/60">Forehead Width</span>
                    <div className="font-bold text-salon-sand">{currentHeadShapeInfo.geometry.foreheadWidth}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-salon-dark/80 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-salon-sand/60">Cheek Apex</span>
                    <div className="font-bold text-emerald-300">{currentHeadShapeInfo.geometry.cheekboneProminence}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-salon-dark/80 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-salon-sand/60">Jawline Taper</span>
                    <div className="font-bold text-salon-gold">{currentHeadShapeInfo.geometry.jawlineTaper}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-salon-dark/80 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-salon-sand/60">Golden Ratio Match</span>
                    <div className="font-bold text-amber-300">98% Calibrated</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-salon-deep/70 border border-salon-gold/20 space-y-1.5 text-xs text-salon-sand/85">
                  <div className="font-bold text-salon-gold flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-salon-gold" />
                    <span>Stylist Geometry Prescription:</span>
                  </div>
                  <p className="leading-relaxed">
                    {currentHeadShapeInfo.geometry.goal}
                  </p>
                </div>

                <div className="text-[11px] text-amber-300/80 italic pt-1">
                  ⚠️ Cut Pitfall to Avoid: {currentHeadShapeInfo.avoidStyles}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DAYLIGHT COLOUR CONSULTATION */}
          {activeTab === 'color' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs text-salon-sand/60 font-mono uppercase tracking-wider">
                  Julianne Cott Natural Light Colour Tone
                </span>
                <span className="text-[11px] text-emerald-400">Courtyard Tested</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed">
                ✨ <strong>Outdoor Daylight Calibration</strong>: Fern takes clients outside into the Lavelle Road patio to match natural undertones and eliminate brassiness.
              </div>

              <div className="space-y-2.5">
                {HAIR_COLORS.map((color) => {
                  const isSelected = selectedColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`w-full p-3 rounded-2xl border transition-all flex items-center justify-between text-left ${
                        isSelected
                          ? 'bg-salon-moss/60 border-salon-gold shadow-md'
                          : 'bg-salon-deep/40 border-salon-gold/15 hover:border-salon-gold/30 hover:bg-salon-deep/60'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <span
                          className="w-8 h-8 rounded-full border-2 border-salon-gold/40 shadow-inner flex-shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div>
                          <div className="font-serif font-bold text-salon-sand text-sm">
                            {color.name}
                          </div>
                          <div className="text-xs text-salon-sand/65">
                            {color.description}
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-3">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-salon-dark border border-salon-gold/25 text-salon-gold">
                          {color.tone}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Stylist Prescription Bar */}
          <div className="p-4 rounded-2xl luxury-card space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-salon-gold font-bold">
                Stylist Tip: {currentStyle.recommendedStylist}
              </span>
              <span className="text-salon-sand/60">
                Maintenance: <strong className="text-salon-sand">{currentStyle.maintenanceLevel}</strong>
              </span>
            </div>
            <p className="text-xs text-salon-sand/80 italic border-l-2 border-salon-gold pl-3">
              &ldquo;{currentStyle.stylingTip}&rdquo;
            </p>
          </div>

        </div>

        {/* Right Column: Physical Haircut Visual Gallery with Geometry HUD (5 Cols) */}
        <div className="lg:col-span-5">
          <HaircutVisualGallery
            headShape={selectedHeadShape}
            selectedStyle={currentStyle}
            selectedColor={selectedColor}
            onBookThisStyle={() => onBookStyle(currentStyle, selectedColor)}
          />
        </div>

      </div>
    </section>
  );
};
