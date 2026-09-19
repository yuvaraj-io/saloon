"use client";

import React, { useState } from 'react';
import { HeadShape, HairstyleOption, HairColor } from '@/types/salon';
import { HEAD_SHAPES } from '@/data/styleLabData';
import { Sparkles, Sun, Upload, X, CheckCircle2, Maximize2, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface HaircutVisualGalleryProps {
  headShape: HeadShape;
  selectedStyle: HairstyleOption;
  selectedColor: HairColor;
  onBookThisStyle: () => void;
}

export const HaircutVisualGallery: React.FC<HaircutVisualGalleryProps> = ({
  headShape,
  selectedStyle,
  selectedColor,
  onBookThisStyle,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [daylightFilter, setDaylightFilter] = useState<'outdoor' | 'indoor'>('outdoor');
  const [showGeometryGrid, setShowGeometryGrid] = useState(true);
  const [userSelfie, setUserSelfie] = useState<string | null>(null);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  const currentShapeInfo = HEAD_SHAPES.find(h => h.id === headShape) || HEAD_SHAPES[0];

  const images = selectedStyle.galleryImages && selectedStyle.galleryImages.length > 0
    ? selectedStyle.galleryImages
    : [selectedStyle.imageUrl];

  const currentImage = images[activeImageIndex] || selectedStyle.imageUrl;

  const isBestShape = selectedStyle.bestHeadShapes.includes(headShape);

  // Face shape suitability explanation
  const suitabilityReason = selectedStyle.faceShapeSuitability?.[headShape] ||
    `Specially sculpted to flatter ${headShape} bone geometry with balanced volume and movement.`;

  const handleSelfieUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserSelfie(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto space-y-4">
      
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl luxury-glass border border-salon-gold/25 text-xs">
        {/* Toggle Geometry Grid on Photo */}
        <button
          onClick={() => setShowGeometryGrid(!showGeometryGrid)}
          className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-xl border transition-all ${
            showGeometryGrid
              ? 'bg-salon-moss text-salon-gold border-salon-gold/50 font-bold'
              : 'text-salon-sand/60 border-white/10 hover:text-salon-sand'
          }`}
          title="Toggle face shape geometry blueprint overlay"
        >
          <Compass className="w-3.5 h-3.5 text-salon-gold" />
          <span>Geometry Grid</span>
        </button>

        {/* Daylight / Studio Light Filter */}
        <div className="flex items-center space-x-1 bg-salon-dark/90 p-1 rounded-xl border border-salon-gold/20">
          <button
            onClick={() => setDaylightFilter('indoor')}
            className={`px-2 py-1 rounded-lg text-[11px] font-medium transition-all ${
              daylightFilter === 'indoor'
                ? 'bg-salon-moss text-salon-gold font-bold'
                : 'text-salon-sand/60 hover:text-salon-sand'
            }`}
          >
            Studio Light
          </button>
          <button
            onClick={() => setDaylightFilter('outdoor')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
              daylightFilter === 'outdoor'
                ? 'bg-salon-gold text-salon-dark shadow-sm'
                : 'text-salon-sand/60 hover:text-salon-sand'
            }`}
          >
            <Sun className="w-3 h-3 text-amber-500" />
            <span>Fern Daylight</span>
          </button>
        </div>
      </div>

      {/* Main Haircut Image Showcase Card */}
      <div className="relative rounded-3xl overflow-hidden border border-salon-gold/30 shadow-2xl bg-salon-deep/90 aspect-[4/5] group">
        
        {/* If user uploaded selfie, show side-by-side comparison */}
        {userSelfie ? (
          <div className="grid grid-cols-2 h-full w-full">
            {/* User Selfie */}
            <div className="relative h-full w-full border-r border-salon-gold/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={userSelfie}
                alt="Your photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] text-salon-sand font-mono border border-white/20">
                Your Face
              </div>
              <button
                onClick={() => setUserSelfie(null)}
                className="absolute top-3 right-3 p-1 rounded-full bg-red-600/80 text-white"
                title="Remove photo"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Target Haircut */}
            <div className="relative h-full w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentImage}
                alt={selectedStyle.name}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  daylightFilter === 'outdoor' ? 'brightness-105 contrast-105' : 'brightness-95'
                }`}
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-salon-moss/90 backdrop-blur-md text-[10px] text-salon-gold font-bold border border-salon-gold/30">
                Target Cut
              </div>
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full">
            {/* Main Physical Haircut Photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage}
              alt={selectedStyle.name}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                daylightFilter === 'outdoor'
                  ? 'brightness-105 contrast-105 saturate-[1.05]'
                  : 'brightness-95 contrast-100'
              }`}
            />

            {/* Outdoor Daylight Sunbeam Glow Sheen */}
            {daylightFilter === 'outdoor' && (
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-200/10 to-amber-400/15 pointer-events-none mix-blend-screen" />
            )}

            {/* Geometric Proportion Overlay Lines (Optional HUD) */}
            {showGeometryGrid && (
              <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 opacity-80 transition-opacity">
                {/* Upper Forehead Line */}
                <div className="w-full flex items-center justify-between border-b border-salon-gold/40 border-dashed pb-1">
                  <span className="text-[9px] font-mono text-salon-gold bg-black/60 px-1.5 py-0.5 rounded">
                    Forehead Plane: {currentShapeInfo.geometry.foreheadWidth}
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-black/60 px-1.5 py-0.5 rounded">
                    Ratio: {currentShapeInfo.geometry.verticalRatio}
                  </span>
                </div>

                {/* Cheekbone Width Guide */}
                <div className="w-full flex items-center justify-between border-b border-emerald-400/40 border-dashed pb-1">
                  <span className="text-[9px] font-mono text-emerald-300 bg-black/60 px-1.5 py-0.5 rounded">
                    Cheek Apex: {currentShapeInfo.geometry.cheekboneProminence}
                  </span>
                </div>

                {/* Mandibular Jawline Guide */}
                <div className="w-full flex items-center justify-between border-b border-salon-gold/50 border-dashed pb-1">
                  <span className="text-[9px] font-mono text-salon-gold bg-black/60 px-1.5 py-0.5 rounded">
                    Jawline Taper: {currentShapeInfo.geometry.jawlineTaper}
                  </span>
                  <span className="text-[9px] font-mono text-amber-300 bg-black/60 px-1.5 py-0.5 rounded">
                    {isBestShape ? '✓ Symmetrical Match' : 'Compensated'}
                  </span>
                </div>
              </div>
            )}

            {/* Zoom / Fullscreen Button */}
            <button
              onClick={() => setIsZoomModalOpen(true)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-salon-sand border border-white/20 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-20"
              title="Expand high-res photo"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Head Shape Compatibility Tag Overlay */}
        <div className="absolute top-4 left-4 z-20 flex flex-col space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-salon-dark/95 border border-salon-gold/40 text-salon-gold text-xs font-bold shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-salon-gold" />
            <span className="capitalize">{headShape} Geometry</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-mono font-bold">
              {isBestShape ? '98% Ideal' : '92% Fitted'}
            </span>
          </div>

          <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-salon-sand/90 text-[11px] border border-white/10 w-fit">
            <span className="capitalize">{selectedStyle.gender}</span>
            <span>•</span>
            <span className="capitalize">{selectedStyle.texture}</span>
            <span>•</span>
            <span className="capitalize">{selectedStyle.length}</span>
          </div>
        </div>

        {/* Hair Color Ribbon Tag */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className="p-3.5 rounded-2xl luxury-glass border border-salon-gold/30 shadow-2xl backdrop-blur-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span
                className="w-6 h-6 rounded-full border border-salon-gold shadow-md flex-shrink-0"
                style={{ backgroundColor: selectedColor.hex }}
              />
              <div className="truncate">
                <div className="text-[10px] uppercase font-mono text-salon-sand/60">Daylight Colour Tint</div>
                <div className="font-serif font-bold text-salon-sand text-xs truncate">
                  {selectedColor.name}
                </div>
              </div>
            </div>

            <div className="text-right flex-shrink-0 pl-2">
              <div className="text-xs font-bold text-salon-gold">₹{selectedStyle.price}</div>
              <div className="text-[10px] text-salon-sand/60">{selectedStyle.estimatedTime}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Angle Thumbnails & Selfie Upload Bar */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                activeImageIndex === idx
                  ? 'border-salon-gold scale-105 shadow-md shadow-salon-gold/20'
                  : 'border-white/10 opacity-70 hover:opacity-100'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`Angle ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[8px] text-center text-salon-sand font-mono">
                {idx === 0 ? 'Primary' : idx === 1 ? 'Angle 2' : 'Texture'}
              </span>
            </button>
          ))}
        </div>

        {/* Upload Selfie Button */}
        <label className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-salon-deep hover:bg-salon-moss text-salon-sand hover:text-salon-gold text-xs font-medium cursor-pointer border border-salon-gold/20 transition-all shadow-md">
          <Upload className="w-3.5 h-3.5 text-salon-gold" />
          <span>Compare Face</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleSelfieUpload}
          />
        </label>
      </div>

      {/* Face Geometry Suitability Breakdown Card */}
      <div className="p-4 rounded-2xl bg-salon-deep/80 border border-salon-gold/20 space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5 text-salon-gold font-semibold uppercase text-[11px] tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{headShape.toUpperCase()} Geometry Alignment</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            {currentShapeInfo.geometry.goal.split(' ')[0]} Focus
          </span>
        </div>
        <p className="text-salon-sand/85 leading-relaxed">
          {suitabilityReason}
        </p>
        <div className="p-2.5 rounded-xl bg-salon-dark/80 border border-white/5 space-y-1 text-[11px] text-salon-sand/70">
          <div className="text-salon-gold font-semibold text-[10px] uppercase font-mono">Geometry Objective:</div>
          <div>{currentShapeInfo.geometry.goal}</div>
        </div>
        <div className="pt-1 flex items-center justify-between text-[11px] text-salon-sand/60">
          <span>Stylist: <strong className="text-salon-sand">{selectedStyle.recommendedStylist}</strong></span>
          <span>Upkeep: <strong className="text-salon-sand">{selectedStyle.maintenanceLevel}</strong></span>
        </div>
      </div>

      {/* Direct Book CTA */}
      <button
        onClick={onBookThisStyle}
        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-salon-gold via-[#D8BC94] to-salon-gold hover:opacity-95 text-salon-dark font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl shadow-salon-gold/20 transition-all transform active:scale-95"
      >
        <span>Book This Combination At Lavelle Road</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Zoom Modal */}
      {isZoomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-2xl w-full rounded-3xl overflow-hidden border border-salon-gold/40 shadow-2xl">
            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black"
            >
              <X className="w-5 h-5" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage}
              alt={selectedStyle.name}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="p-4 bg-salon-dark text-center">
              <h4 className="font-serif font-bold text-salon-sand text-lg">{selectedStyle.name}</h4>
              <p className="text-xs text-salon-gold mt-1">Sculpted for {headShape} face geometry</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
