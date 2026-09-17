"use client";

import React, { useState, useMemo } from 'react';
import { HeadShape, HairTexture, HairstyleOption, HairColor, GenderVibe } from '@/types/salon';
import { HEAD_SHAPES, HAIR_COLORS, HAIRSTYLES_CATALOG } from '@/data/styleLabData';
import { HaircutVisualGallery } from './HaircutVisualGallery';
import { Sparkles, CheckCircle2, ShieldCheck, Scissors, ArrowRight, Compass, Camera, Sparkle } from 'lucide-react';

interface StyleLabProps {
  onBookStyle: (style: HairstyleOption, color?: HairColor) => void;
}

export const StyleLab: React.FC<StyleLabProps> = ({ onBookStyle }) => {
  const [selectedHeadShape, setSelectedHeadShape] = useState<HeadShape>('oval');
  const [selectedTexture, setSelectedTexture] = useState<HairTexture>('curly');
  const [selectedGender, setSelectedGender] = useState<GenderVibe>('unisex');
  const [selectedColor, setSelectedColor] = useState<HairColor>(HAIR_COLORS[1]); // Honey Balayage
  const [activeTab, setActiveTab] = useState<'shape' | 'texture' | 'color'>('shape');

  // Filter hairstyles matching current texture and gender vibe, prioritizing suitable head shapes
  const availableStyles = useMemo(() => {
    let filtered = HAIRSTYLES_CATALOG.filter(s => s.texture === selectedTexture);
    if (selectedGender !== 'unisex') {
      filtered = filtered.filter(s => s.gender === selectedGender || s.gender === 'unisex');
    }
    if (filtered.length === 0) {
      filtered = HAIRSTYLES_CATALOG.filter(s => s.texture === selectedTexture);
    }
    
    // Sort styles so that those matching the selected head shape appear first
    return filtered.sort((a, b) => {
      const aMatches = a.bestHeadShapes.includes(selectedHeadShape) ? 1 : 0;
      const bMatches = b.bestHeadShapes.includes(selectedHeadShape) ? 1 : 0;
      return bMatches - aMatches;
    });
  }, [selectedTexture, selectedGender, selectedHeadShape]);

  const [selectedStyleId, setSelectedStyleId] = useState<string>(HAIRSTYLES_CATALOG[0].id);

  // Active hairstyle
  const currentStyle = useMemo(() => {
    return availableStyles.find(s => s.id === selectedStyleId) || availableStyles[0];
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
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-salon-moss/50 border border-salon-gold/30 text-salon-gold text-xs font-semibold uppercase tracking-widest mb-4">
          <Camera className="w-3.5 h-3.5" />
          <span>MadFern Curated Haircut &amp; Silhouette Studio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-salon-sand leading-tight">
          Select Your Head Type. Discover Flattering Haircuts.
        </h2>
        <p className="mt-4 text-salon-sand/70 text-sm sm:text-base leading-relaxed">
          Browse authentic studio photography of tailored cuts calibrated for your unique face geometry. Match bone structure, curl patterns, and outdoor daylight tones.
        </p>
      </div>

      {/* Main Studio Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Head Shape & Hair Options (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">

          {/* Navigation Tabs */}
          <div className="flex border-b border-salon-gold/20 pb-2 space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveTab('shape')}
              className={`flex items-center space-x-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'shape'
                  ? 'bg-salon-gold text-salon-dark shadow-lg shadow-salon-gold/20 font-bold'
                  : 'text-salon-sand/70 hover:text-salon-sand hover:bg-salon-deep/60'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>1. Choose Head Shape</span>
            </button>
            <button
              onClick={() => setActiveTab('texture')}
              className={`flex items-center space-x-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'texture'
                  ? 'bg-salon-gold text-salon-dark shadow-lg shadow-salon-gold/20 font-bold'
                  : 'text-salon-sand/70 hover:text-salon-sand hover:bg-salon-deep/60'
              }`}
            >
              <Scissors className="w-4 h-4" />
              <span>2. Suitable Haircuts</span>
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
              <span>3. Daylight Colour</span>
            </button>
          </div>

          {/* TAB 1: HEAD SHAPE SELECTION */}
          {activeTab === 'shape' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs text-salon-sand/60 font-mono uppercase tracking-wider">
                  Step 1 • Select Your Head / Face Shape
                </span>
                <span className="text-xs text-salon-gold font-medium">
                  {HEAD_SHAPES.length} Profile Geometries
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {HEAD_SHAPES.map((shape) => {
                  const isSelected = selectedHeadShape === shape.id;
                  return (
                    <button
                      key={shape.id}
                      onClick={() => setSelectedHeadShape(shape.id)}
                      className={`relative p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                        isSelected
                          ? 'bg-salon-moss/70 border-salon-gold shadow-lg shadow-salon-gold/15'
                          : 'bg-salon-deep/40 border-salon-gold/15 hover:border-salon-gold/40 hover:bg-salon-deep/70'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <span className="font-serif font-bold text-salon-sand text-base capitalize">
                          {shape.title}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-salon-gold" />
                        )}
                      </div>
                      <span className="text-xs text-salon-sand/70 line-clamp-2">
                        {shape.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Head Shape Consultation Box */}
              <div className="p-5 rounded-2xl luxury-glass border border-salon-gold/20 space-y-3">
                <div className="flex items-center space-x-2 text-salon-gold text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-salon-gold" />
                  <span>Lavelle Road Stylist Advice for {currentHeadShapeInfo.title} Heads</span>
                </div>
                <p className="text-xs sm:text-sm text-salon-sand/85 leading-relaxed">
                  {currentHeadShapeInfo.flatteringAdvice}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {currentHeadShapeInfo.featuresToHighlight.map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs bg-salon-moss/50 text-salon-sand/90 border border-salon-gold/20"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
                <div className="pt-2 text-[11px] text-amber-300/80 italic">
                  ⚠️ Pro Tip: {currentHeadShapeInfo.avoidStyles}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SUITABLE HAIRCUTS WITH REAL IMAGES */}
          {activeTab === 'texture' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs text-salon-sand/60 font-mono uppercase tracking-wider">
                  Step 2 • Choose Texture &amp; Browse Photography
                </span>
                <span className="text-xs text-emerald-400 font-mono">
                  Filtered for {selectedHeadShape.toUpperCase()} Face
                </span>
              </div>

              {/* Hair Texture Filter */}
              <div>
                <label className="block text-xs font-medium text-salon-sand/70 mb-2">
                  Hair Texture Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(['curly', 'wavy', 'straight', 'coily'] as HairTexture[]).map((tex) => (
                    <button
                      key={tex}
                      onClick={() => setSelectedTexture(tex)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold capitalize border transition-all text-center ${
                        selectedTexture === tex
                          ? 'bg-salon-gold text-salon-dark border-salon-gold font-bold shadow-md'
                          : 'bg-salon-deep/40 border-salon-gold/15 text-salon-sand/70 hover:text-salon-sand'
                      }`}
                    >
                      {tex === 'curly' ? 'Curly 🌿 (MadFern Specialty)' : tex}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gender Filter */}
              <div>
                <label className="block text-xs font-medium text-salon-sand/70 mb-2">
                  Silhouette Vibe
                </label>
                <div className="flex space-x-2">
                  {(['unisex', 'men', 'women'] as GenderVibe[]).map((g) => (
                    <button
                      key={g}
                      onClick={() => setSelectedGender(g)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-medium capitalize border transition-all ${
                        selectedGender === g
                          ? 'bg-salon-moss text-salon-gold border-salon-gold/40'
                          : 'bg-salon-deep/40 text-salon-sand/60 border-salon-gold/10 hover:text-salon-sand'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Haircuts List with Custom Photos */}
              <div className="space-y-3">
                <label className="block text-xs font-medium text-salon-sand/70">
                  Select A Haircut To Preview Real Photography
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                  {availableStyles.map((style) => {
                    const isSelected = style.id === currentStyle.id;
                    const isIdeal = style.bestHeadShapes.includes(selectedHeadShape);
                    return (
                      <button
                        key={style.id}
                        onClick={() => setSelectedStyleId(style.id)}
                        className={`p-3 rounded-2xl text-left border transition-all flex items-center space-x-3 group ${
                          isSelected
                            ? 'bg-salon-moss/80 border-salon-gold shadow-md'
                            : 'bg-salon-deep/40 border-salon-gold/15 hover:border-salon-gold/35 hover:bg-salon-deep/70'
                        }`}
                      >
                        {/* Cut Photo Thumbnail */}
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-salon-gold/30">
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
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-semibold border border-emerald-500/30">
                                98% {selectedHeadShape} Fit
                              </span>
                            ) : (
                              <span className="text-[10px] bg-salon-dark text-salon-sand/60 px-2 py-0.5 rounded-full border border-white/10">
                                Suitable
                              </span>
                            )}
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

          {/* TAB 3: DAYLIGHT COLOUR CONSULTATION */}
          {activeTab === 'color' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs text-salon-sand/60 font-mono uppercase tracking-wider">
                  Step 3 • Julianne Cott Natural Light Colour Tone
                </span>
                <span className="text-[11px] text-emerald-400">Courtyard Tested</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed">
                ✨ <strong>Outdoor Daylight Calibration</strong>: Fern takes clients outside into the Lavelle Road patio to match natural undertones and prevent brassiness.
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

        {/* Right Column: Custom Haircut Visual Gallery Showcase (5 Cols) */}
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
