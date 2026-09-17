"use client";

import React, { useState } from 'react';
import { HeadShape, HairTexture, HairstyleOption, HairColor } from '@/types/salon';
import { Sparkles, Sun, Eye, Layers, Upload, X, RefreshCw } from 'lucide-react';

interface InteractiveAvatarProps {
  headShape: HeadShape;
  hairTexture: HairTexture;
  selectedStyle: HairstyleOption;
  selectedColor: HairColor;
  onSelectStyle?: (style: HairstyleOption) => void;
}

export const InteractiveAvatar: React.FC<InteractiveAvatarProps> = ({
  headShape,
  hairTexture,
  selectedStyle,
  selectedColor,
}) => {
  const [daylightMode, setDaylightMode] = useState<'indoor' | 'outdoor'>('outdoor');
  const [showFaceGeometry, setShowFaceGeometry] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Face geometries mapping for clean SVG silhouettes
  const getFacePath = (shape: HeadShape): string => {
    switch (shape) {
      case 'oval':
        return 'M 100,42 C 145,42 165,70 165,116 C 165,165 142,194 100,194 C 58,194 35,165 35,116 C 35,70 55,42 100,42 Z';
      case 'round':
        return 'M 100,46 C 152,46 170,80 170,122 C 170,166 150,192 100,192 C 50,192 30,166 30,122 C 30,80 48,46 100,46 Z';
      case 'square':
        return 'M 100,44 C 148,44 168,58 168,108 C 168,154 158,188 100,188 C 42,188 32,154 32,108 C 32,58 52,44 100,44 Z';
      case 'heart':
        return 'M 100,42 C 152,42 168,70 162,112 C 150,154 126,192 100,196 C 74,192 50,154 38,112 C 32,70 48,42 100,42 Z';
      case 'diamond':
        return 'M 100,42 C 135,42 172,96 172,118 C 172,148 132,192 100,196 C 68,192 28,148 28,118 C 28,96 65,42 100,42 Z';
      case 'oblong':
        return 'M 100,34 C 142,34 158,66 158,122 C 158,178 140,204 100,204 C 60,204 42,178 42,122 C 42,66 58,34 100,34 Z';
      default:
        return 'M 100,42 C 145,42 165,70 165,116 C 165,165 142,194 100,194 C 58,194 35,165 35,116 C 35,70 55,42 100,42 Z';
    }
  };

  // Jaw points and cheek guide line
  const getJawGuides = (shape: HeadShape) => {
    switch (shape) {
      case 'square':
        return { cheekY: 108, jawY: 175, jawWidth: 62 };
      case 'round':
        return { cheekY: 118, jawY: 172, jawWidth: 50 };
      case 'heart':
        return { cheekY: 100, jawY: 184, jawWidth: 26 };
      case 'diamond':
        return { cheekY: 115, jawY: 182, jawWidth: 28 };
      case 'oblong':
        return { cheekY: 112, jawY: 190, jawWidth: 46 };
      default: // oval
        return { cheekY: 108, jawY: 178, jawWidth: 42 };
    }
  };

  const guides = getJawGuides(headShape);
  const colorHex = selectedColor.hex;

  // Background ambient filter based on indoor vs outdoor natural daylight
  const ambientBg = daylightMode === 'outdoor'
    ? 'from-[#173024]/80 via-[#1E3B2E]/60 to-[#2A4D3D]/30 border-salon-gold/30'
    : 'from-[#111A16]/90 via-[#16221C]/80 to-[#101914]/90 border-salon-gold/15';

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Studio Header Controls */}
      <div className="w-full flex items-center justify-between px-3 py-2.5 mb-3 rounded-xl luxury-glass text-xs text-salon-sand/80">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-medium text-salon-light">3D Silhouette Engine</span>
        </div>

        {/* Lighting Switcher - Fern's signature daylight concept */}
        <div className="flex items-center space-x-1.5 bg-salon-dark/80 p-1 rounded-lg border border-salon-gold/20">
          <button
            onClick={() => setDaylightMode('indoor')}
            className={`flex items-center space-x-1 px-2 py-1 rounded transition-all ${
              daylightMode === 'indoor'
                ? 'bg-salon-moss text-salon-gold font-medium'
                : 'text-salon-sand/60 hover:text-salon-sand'
            }`}
            title="Warm Salon Mirror Lighting"
          >
            <Layers className="w-3 h-3" />
            <span>Indoor Salon</span>
          </button>
          <button
            onClick={() => setDaylightMode('outdoor')}
            className={`flex items-center space-x-1 px-2 py-1 rounded transition-all ${
              daylightMode === 'outdoor'
                ? 'bg-salon-gold text-salon-dark font-semibold'
                : 'text-salon-sand/60 hover:text-salon-sand'
            }`}
            title="Fern Natural Light Consultation View"
          >
            <Sun className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
            <span>Fern Daylight</span>
          </button>
        </div>

        {/* Toggle Guidelines */}
        <button
          onClick={() => setShowFaceGeometry(!showFaceGeometry)}
          className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg border transition-all ${
            showFaceGeometry
              ? 'border-salon-gold/40 text-salon-gold bg-salon-moss/50'
              : 'border-white/10 text-white/50 hover:text-white'
          }`}
        >
          <Eye className="w-3 h-3" />
          <span className="hidden sm:inline">Face Grid</span>
        </button>
      </div>

      {/* Main Avatar Canvas Area */}
      <div
        className={`relative w-full max-w-[380px] aspect-[4/5] rounded-3xl bg-gradient-to-b ${ambientBg} border shadow-2xl p-4 flex flex-col items-center justify-center overflow-hidden transition-all duration-500`}
      >
        {/* Natural Daylight Sunlight Sheen Effect */}
        {daylightMode === 'outdoor' && (
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />
        )}
        <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-salon-mint/10 rounded-full blur-2xl pointer-events-none" />

        {/* Face Shape Badge Overlay */}
        <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-salon-dark/90 text-salon-gold border border-salon-gold/30 shadow-md">
            {headShape} Head Frame
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/10 text-salon-sand backdrop-blur-md">
            {hairTexture} Texture
          </span>
        </div>

        {/* Selfie Upload Overlay or Default SVG Avatar */}
        <div className="relative w-full h-full flex items-center justify-center">
          {uploadedImage ? (
            <div className="relative w-56 h-72 rounded-2xl overflow-hidden border-2 border-salon-gold/40 shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={uploadedImage}
                alt="Your selfie"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setUploadedImage(null)}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-black/70 text-white hover:bg-red-600 transition-colors"
                title="Remove photo"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <div className="absolute bottom-1 inset-x-1 text-center bg-black/60 backdrop-blur-sm text-[10px] text-salon-sand py-1 rounded">
                Selfie Mode Active
              </div>
            </div>
          ) : (
            <svg
              viewBox="0 0 200 240"
              className="w-full h-full max-h-[320px] drop-shadow-2xl select-none"
              style={{ overflow: 'visible' }}
            >
              <defs>
                {/* Hair Color Gradient with Daylight reflections */}
                <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colorHex} stopOpacity="1" />
                  <stop
                    offset="45%"
                    stopColor={daylightMode === 'outdoor' ? '#D6B485' : colorHex}
                    stopOpacity={daylightMode === 'outdoor' ? '0.65' : '1'}
                  />
                  <stop offset="100%" stopColor={colorHex} stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#DFC3A7" />
                  <stop offset="100%" stopColor="#C9A685" />
                </linearGradient>

                <linearGradient id="glowFilter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C5A880" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#C5A880" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Neck & Shoulders */}
              <path
                d="M 75,170 L 70,225 L 30,240 L 170,240 L 130,225 L 125,170 Z"
                fill="#C5A181"
                opacity="0.95"
              />
              <path
                d="M 80,182 Q 100,195 120,182 L 122,205 Q 100,214 78,205 Z"
                fill="#B38E70"
                opacity="0.6"
              />

              {/* Ears */}
              <ellipse cx="38" cy="118" rx="8" ry="16" fill="#C9A685" />
              <ellipse cx="162" cy="118" rx="8" ry="16" fill="#C9A685" />

              {/* Head Silhouette dynamically rendered per HeadShape */}
              <path
                d={getFacePath(headShape)}
                fill="url(#skinTone)"
                stroke={showFaceGeometry ? '#C5A880' : 'none'}
                strokeWidth={showFaceGeometry ? '1.8' : '0'}
                strokeDasharray={showFaceGeometry ? '4 3' : 'none'}
                className="transition-all duration-500"
              />

              {/* Face Features: Eyes, Brows, Nose, Smile */}
              {/* Eyebrows */}
              <path
                d="M 62,100 Q 75,95 86,99"
                stroke="#423126"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 114,99 Q 125,95 138,100"
                stroke="#423126"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Eyes */}
              <ellipse cx="74" cy="108" rx="6" ry="4" fill="#3D291F" />
              <ellipse cx="126" cy="108" rx="6" ry="4" fill="#3D291F" />
              <circle cx="76" cy="107" r="1.5" fill="#FFFFFF" />
              <circle cx="128" cy="107" r="1.5" fill="#FFFFFF" />

              {/* Nose */}
              <path
                d="M 100,105 L 97,130 Q 100,135 106,133"
                stroke="#A88162"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Natural Smile */}
              <path
                d="M 85,152 Q 100,165 115,152"
                stroke="#96524A"
                strokeWidth="2.8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Face Shape Geometric Analysis Guides */}
              {showFaceGeometry && (
                <g className="transition-opacity duration-300">
                  {/* Vertical Symmetry Axis */}
                  <line
                    x1="100"
                    y1="38"
                    x2="100"
                    y2="200"
                    stroke="#C5A880"
                    strokeWidth="0.8"
                    strokeDasharray="3 3"
                    opacity="0.6"
                  />
                  {/* Cheekbone Width Guide */}
                  <line
                    x1="36"
                    y1={guides.cheekY}
                    x2="164"
                    y2={guides.cheekY}
                    stroke="#3A634E"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    opacity="0.8"
                  />
                  {/* Jaw Taper Guide */}
                  <line
                    x1={100 - guides.jawWidth}
                    y1={guides.jawY}
                    x2={100 + guides.jawWidth}
                    y2={guides.jawY}
                    stroke="#C5A880"
                    strokeWidth="1"
                    opacity="0.7"
                  />
                </g>
              )}

              {/* DYNAMIC HAIRSTYLE OVERLAY */}
              {/* Curly Signature / Curly Shag Style */}
              {selectedStyle.texture === 'curly' && (
                <g className="transition-all duration-300">
                  {/* Outer Curly Volume Ringlets */}
                  <path
                    d="M 32,110 C 20,80 30,30 75,22 C 100,18 128,18 152,28 C 175,40 185,85 174,115 C 168,135 155,145 152,160 C 145,150 148,135 142,120 C 140,80 135,55 100,55 C 65,55 60,80 58,120 C 52,135 55,150 48,160 C 45,145 32,135 32,110 Z"
                    fill="url(#hairGradient)"
                  />
                  {/* Detailed Curled Locks */}
                  <circle cx="50" cy="55" r="14" fill="url(#hairGradient)" />
                  <circle cx="78" cy="35" r="16" fill="url(#hairGradient)" />
                  <circle cx="112" cy="32" r="17" fill="url(#hairGradient)" />
                  <circle cx="145" cy="48" r="15" fill="url(#hairGradient)" />
                  <circle cx="168" cy="85" r="13" fill="url(#hairGradient)" />
                  <circle cx="32" cy="85" r="13" fill="url(#hairGradient)" />
                  {/* Bangs / Forehead Ringlets */}
                  <path
                    d="M 68,52 Q 78,82 85,75 Q 92,68 96,78 Q 105,86 112,74 Q 120,82 128,66"
                    stroke={colorHex}
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Daylight highlight spirals */}
                  {daylightMode === 'outdoor' && (
                    <path
                      d="M 82,38 Q 98,42 110,36 M 60,62 Q 72,70 76,82 M 135,60 Q 148,72 144,88"
                      stroke="#E5C799"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.8"
                    />
                  )}
                </g>
              )}

              {/* Wavy Style Overlay */}
              {selectedStyle.texture === 'wavy' && (
                <g className="transition-all duration-300">
                  <path
                    d="M 38,110 C 32,70 42,32 78,25 C 100,20 125,22 145,30 C 172,42 178,75 170,118 C 165,145 158,180 148,195 C 142,165 145,130 140,95 C 135,65 130,55 100,55 C 70,55 65,65 60,95 C 55,130 58,165 52,195 C 42,180 35,145 38,110 Z"
                    fill="url(#hairGradient)"
                  />
                  {/* Soft wavy ripples */}
                  <path
                    d="M 52,105 Q 60,130 48,155 Q 58,175 52,195"
                    stroke={colorHex}
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 148,105 Q 140,130 152,155 Q 142,175 148,195"
                    stroke={colorHex}
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Soft parted fringe */}
                  <path
                    d="M 68,54 Q 85,65 96,82 M 132,54 Q 115,65 104,82"
                    stroke={colorHex}
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {daylightMode === 'outdoor' && (
                    <path
                      d="M 75,45 Q 100,52 125,46"
                      stroke="#E5C799"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  )}
                </g>
              )}

              {/* Straight / Bob / Fade Style */}
              {selectedStyle.texture === 'straight' && (
                <g className="transition-all duration-300">
                  {selectedStyle.length === 'short' ? (
                    // Short Fade & Crop
                    <>
                      <path
                        d="M 46,90 C 44,55 58,32 100,28 C 142,32 156,55 154,90 C 150,96 142,85 140,65 C 135,50 125,48 100,48 C 75,48 65,50 60,65 C 58,85 50,96 46,90 Z"
                        fill="url(#hairGradient)"
                      />
                      <path
                        d="M 64,52 L 136,52"
                        stroke={colorHex}
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </>
                  ) : (
                    // Glass Lob / Long Straight Cut
                    <>
                      <path
                        d="M 38,95 C 36,45 52,28 100,26 C 148,28 164,45 162,95 L 168,185 L 146,185 L 140,85 C 135,60 128,52 100,52 C 72,52 65,60 60,85 L 54,185 L 32,185 Z"
                        fill="url(#hairGradient)"
                      />
                      {daylightMode === 'outdoor' && (
                        <path
                          d="M 52,90 L 52,160 M 148,90 L 148,160"
                          stroke="#E5C799"
                          strokeWidth="2"
                          opacity="0.75"
                        />
                      )}
                    </>
                  )}
                </g>
              )}

              {/* Coily Crown / Tight Ringlets */}
              {selectedStyle.texture === 'coily' && (
                <g className="transition-all duration-300">
                  <path
                    d="M 28,105 C 15,65 30,18 80,14 C 100,12 125,12 148,18 C 190,28 198,75 182,118 C 172,138 162,148 152,140 C 142,85 135,55 100,55 C 65,55 58,85 48,140 C 38,148 28,138 28,105 Z"
                    fill="url(#hairGradient)"
                  />
                  {/* Tight micro-coils */}
                  <circle cx="45" cy="45" r="15" fill="url(#hairGradient)" />
                  <circle cx="70" cy="25" r="16" fill="url(#hairGradient)" />
                  <circle cx="100" cy="18" r="17" fill="url(#hairGradient)" />
                  <circle cx="130" cy="24" r="16" fill="url(#hairGradient)" />
                  <circle cx="158" cy="45" r="15" fill="url(#hairGradient)" />
                  <circle cx="178" cy="80" r="14" fill="url(#hairGradient)" />
                  <circle cx="24" cy="80" r="14" fill="url(#hairGradient)" />
                  {daylightMode === 'outdoor' && (
                    <circle cx="100" cy="24" r="7" fill="#E5C799" opacity="0.6" />
                  )}
                </g>
              )}
            </svg>
          )}
        </div>

        {/* Action button overlay inside canvas: Upload selfie */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-20">
          <label className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-salon-dark/90 hover:bg-salon-moss text-salon-sand text-xs cursor-pointer border border-salon-gold/25 transition-all shadow-md">
            <Upload className="w-3.5 h-3.5 text-salon-gold" />
            <span>Try With Your Photo</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>

          <button
            onClick={() => {
              setDaylightMode(prev => prev === 'outdoor' ? 'indoor' : 'outdoor');
            }}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-salon-dark/90 hover:bg-salon-moss text-salon-sand text-xs border border-salon-gold/25 transition-all shadow-md"
            title="Toggle lighting condition"
          >
            <RefreshCw className="w-3 h-3 text-salon-gold" />
            <span>{daylightMode === 'outdoor' ? 'Courtyard Daylight' : 'Studio Mirror'}</span>
          </button>
        </div>
      </div>

      {/* Selected Style Highlights Bar below preview */}
      <div className="w-full max-w-[380px] mt-3 p-3 rounded-2xl bg-salon-deep/90 border border-salon-gold/20 flex items-center justify-between text-xs">
        <div>
          <div className="text-[10px] text-salon-sand/60 uppercase tracking-widest">Active Look</div>
          <div className="font-serif font-bold text-salon-gold text-sm truncate max-w-[200px]">
            {selectedStyle.name}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-emerald-400 font-medium">₹{selectedStyle.price}</div>
          <div className="text-[10px] text-salon-sand/70">{selectedStyle.estimatedTime}</div>
        </div>
      </div>
    </div>
  );
};
