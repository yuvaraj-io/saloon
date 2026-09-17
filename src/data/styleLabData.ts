import { HeadShape, HairTexture, HairstyleOption, HairColor } from '@/types/salon';

export interface HeadShapeInfo {
  id: HeadShape;
  title: string;
  subtitle: string;
  description: string;
  flatteringAdvice: string;
  featuresToHighlight: string[];
  recommendedStyleIds: string[];
  avoidStyles: string;
}

export const HEAD_SHAPES: HeadShapeInfo[] = [
  {
    id: "oval",
    title: "Oval",
    subtitle: "Balanced & Symmetrical",
    description: "Forehead slightly wider than the curved chin, with gently rounded cheekbones. Considered universally versatile.",
    flatteringAdvice: "Natural facial balance allows you to pull off almost any silhouette—from voluminous curly shags to razor-sharp bobs and high-fade crops.",
    featuresToHighlight: ["Harmonious proportions", "Defined jawline taper", "High cheekbones"],
    recommendedStyleIds: ["curly-shag", "curly-fade-crop", "wavy-curtain-bob", "straight-glass-lob", "straight-crop-fringe", "gender-free-mullet"],
    avoidStyles: "Avoid excessively tall spikes that unnecessarily lengthen the vertical axis."
  },
  {
    id: "round",
    title: "Round",
    subtitle: "Soft & Equal Width/Length",
    description: "Curved cheekbones and rounded chin with approximately equal facial width and length.",
    flatteringAdvice: "Styles with vertical crown volume, curtain bangs, or asymmetrical angles lengthen your face and give definition to soft contours.",
    featuresToHighlight: ["Youthful contours", "Soft jawline", "Full cheeks"],
    recommendedStyleIds: ["curly-fade-crop", "curly-shag", "wavy-textured-quiff", "straight-glass-lob"],
    avoidStyles: "Avoid wide, horizontal chin-length blunt cuts with zero layers that exaggerate cheek width."
  },
  {
    id: "square",
    title: "Square",
    subtitle: "Strong Angular Jawline",
    description: "Broad forehead, prominent cheekbones, and a chiseled square jawline of equal width.",
    flatteringAdvice: "Soft, organic curly ringlets, sweeping curtain bangs, and soft tapered layers visually soften strong jaw angles while honoring masculine/feminine bone structure.",
    featuresToHighlight: ["Chiseled jaw", "Broad defined planes", "Distinct angles"],
    recommendedStyleIds: ["curly-shag", "curly-cascade-long", "wavy-textured-quiff", "coily-sculpted-afro"],
    avoidStyles: "Avoid geometric jaw-level blunt bobs that sit directly on your jaw corners."
  },
  {
    id: "heart",
    title: "Heart",
    subtitle: "Wide Forehead & Tapered Chin",
    description: "Wider temples and high cheekbones tapering sharply down into a delicate or pointed chin.",
    flatteringAdvice: "Chin-length textured bobs, collarbone waves, or low side volume create equilibrium by filling the narrower jaw area.",
    featuresToHighlight: ["Striking cheekbones", "Delicate chin", "Sculpted forehead"],
    recommendedStyleIds: ["wavy-curtain-bob", "curly-fade-crop", "straight-glass-lob", "gender-free-mullet"],
    avoidStyles: "Avoid heavy top-heavy crown height with slicked flat sides that exaggerate upper width."
  },
  {
    id: "diamond",
    title: "Diamond",
    subtitle: "Dramatic High Cheekbones",
    description: "Widest at the cheekbones with a narrow forehead and narrow pointed jaw.",
    flatteringAdvice: "Mid-length voluminous curls, curtain bangs, and layered fades bring optical balance to temples and chin.",
    featuresToHighlight: ["High dramatic cheekbones", "Cat-eye focal points", "Defined temple line"],
    recommendedStyleIds: ["curly-shag", "curly-cascade-long", "straight-crop-fringe", "wavy-curtain-bob"],
    avoidStyles: "Avoid slicked-back styles without face-framing pieces."
  },
  {
    id: "oblong",
    title: "Oblong",
    subtitle: "Elongated & Graceful",
    description: "Face is noticeably longer than it is wide, with consistent straight cheek and jawline edges.",
    flatteringAdvice: "Wide bouncy curls, textured fringes, and horizontal volume shorten visual length and add gorgeous fullness.",
    featuresToHighlight: ["Tall graceful profile", "Elegant neck balance", "Refined symmetry"],
    recommendedStyleIds: ["curly-cascade-long", "wavy-curtain-bob", "straight-crop-fringe", "gender-free-mullet"],
    avoidStyles: "Avoid extreme vertical pompadours that add more vertical height."
  }
];

export const HAIR_COLORS: HairColor[] = [
  {
    id: "espresso",
    name: "Lavelle Deep Espresso",
    hex: "#1F1612",
    tone: "Cool Neutral",
    description: "Rich botanical dark espresso with high-gloss mirror shine. Universally flattering in Bangalore lighting."
  },
  {
    id: "honey-balayage",
    name: "Fern Daylight Honey Balayage",
    hex: "#9F7A4A",
    tone: "Warm Golden",
    description: "Fern's signature outdoor daylight consultation color. Soft dimensional ribbons that illuminate skin tone without brassiness."
  },
  {
    id: "caramel-amber",
    name: "Sunlit Amber Bronze",
    hex: "#8B4B27",
    tone: "Warm Terracotta",
    description: "Lustrous copper-chestnut glow that reflects brilliantly in open courtyard natural sunlight."
  },
  {
    id: "ash-smoke",
    name: "Nordic Ash Silver Gloss",
    hex: "#7D7E84",
    tone: "Ultra Cool",
    description: "Sophisticated smoky ash with zero yellow undertones, treated with botanical bonding plex."
  },
  {
    id: "dark-mocha",
    name: "Botanical Raw Mocha",
    hex: "#3D2B24",
    tone: "Velvet Neutral",
    description: "Deep dimensional cocoa tone with natural undertones suitable for curly and textured hair."
  }
];

export const HAIRSTYLES_CATALOG: HairstyleOption[] = [
  // 1. Signature Curly Shag
  {
    id: "curly-shag",
    name: "MadFern Signature Curly Shag",
    gender: "unisex",
    texture: "curly",
    length: "medium",
    bestHeadShapes: ["oval", "square", "round", "diamond"],
    description: "Our Reddit-acclaimed signature dry-sculpted curly cut. Multi-length face-framing curl ringlets with soft crown volume, tapered cheek layers, and effortless Bangalore bounce.",
    stylingTip: "Scrunch in organic curl gel onto soaking wet hair, micro-plop with micro-fiber cloth, and diffuse on low heat.",
    maintenanceLevel: "Medium",
    recommendedStylist: "Fern (Founder & Curl Specialist)",
    serviceIdRef: "srv-curly-signature",
    estimatedTime: "75 mins",
    price: 2400,
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584297091622-af8e5bd81b21?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    ],
    faceShapeSuitability: {
      oval: "Universally harmonious. Highlights eye line and cheekbones with bouncy natural symmetry.",
      round: "Crown elevation elongates face length while feathery cheek ringlets taper wide cheeks.",
      square: "Soft round curls soften sharp angular jawline while preserving structured presence.",
      heart: "Lower fringe wisps fill jawline deficit to balance broader forehead.",
      diamond: "Temples and cheekbones receive soft organic framing to temper sharp contours.",
      oblong: "Mid-level horizontal curl volume fills lateral planes to reduce vertical illusion."
    }
  },

  // 2. Modern Curly Taper Fade
  {
    id: "curly-fade-crop",
    name: "Modern Curly Taper Fade",
    gender: "men",
    texture: "curly",
    length: "short",
    bestHeadShapes: ["round", "square", "oval", "heart"],
    description: "Crisp temple fade blending cleanly into high-volume, hydrated curl texture on top. Shreejeet's Reddit favorite for curly men in Bangalore!",
    stylingTip: "Mist with botanical curl refresher and rake through with pea-sized amount of leave-in butter.",
    maintenanceLevel: "Low",
    recommendedStylist: "Arbaaz (Precision Barber)",
    serviceIdRef: "srv-cut-men",
    estimatedTime: "45 mins",
    price: 1400,
    imageUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    ],
    faceShapeSuitability: {
      oval: "Sharp clean edges provide high contrast against symmetrical proportions.",
      round: "Vertical curl height creates the illusion of a longer, leaner face shape.",
      square: "Tight clean fade complements structured jaw; top curls add fluid motion.",
      heart: "Skin taper prevents excess width at temples; focused on crown height.",
      diamond: "Draws eye upward away from pointed chin into defined curl crown.",
      oblong: "Ensure sides are not faded too short to prevent excessive vertical elongation."
    }
  },

  // 3. Botanical Cascade Curly Layers
  {
    id: "curly-cascade-long",
    name: "Botanical Cascade Curly Layers",
    gender: "women",
    texture: "curly",
    length: "long",
    bestHeadShapes: ["square", "diamond", "oblong", "oval"],
    description: "Tiered waterfall layers sculpted dry that prevent the 'triangle shape' and distribute curl volume seamlessly down to shoulders.",
    stylingTip: "Sleep on silk pillowcase, deep condition every 10 days with MadFern peptide mask.",
    maintenanceLevel: "High",
    recommendedStylist: "Fern & Kavya (Curl Team)",
    serviceIdRef: "srv-curly-signature",
    estimatedTime: "90 mins",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584297091622-af8e5bd81b21?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    ],
    faceShapeSuitability: {
      oval: "Flowing curl tiers frame collarbones gracefully.",
      round: "Long vertical lines counteract round cheek fullness.",
      square: "Waterfall layers drape over the jawline, softening angular bone points.",
      heart: "Generous shoulder curl fullness balances wider forehead planes.",
      diamond: "Mid-shaft layers add width adjacent to narrow chin.",
      oblong: "Layered bounce creates width at shoulders to compress visual height."
    }
  },

  // 4. French Wavy Bob with Curtain Bangs
  {
    id: "wavy-curtain-bob",
    name: "French Wavy Bob with Curtain Bangs",
    gender: "women",
    texture: "wavy",
    length: "medium",
    bestHeadShapes: ["heart", "oval", "oblong", "diamond"],
    description: "Chic jaw-grazing textured blunt perimeter with lived-in gentle waves and cheekbone-accentuating drape. Effortless Bangalore cafe aesthetic.",
    stylingTip: "Air-dry with sea-kelp texture spray, twist front pieces with fingers while damp.",
    maintenanceLevel: "Medium",
    recommendedStylist: "Preethi (Creative Stylist)",
    serviceIdRef: "srv-cut-women",
    estimatedTime: "60 mins",
    price: 1900,
    imageUrl: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
    ],
    faceShapeSuitability: {
      oval: "Accentuates neck length and balances brow-to-chin line.",
      round: "Curtain bangs frame cheek contours while wavy texture diverts attention from roundness.",
      square: "Wavy texture breaks straight horizontal jawline.",
      heart: "Bob length directly below jaw fills the chin taper effortlessly.",
      diamond: "Curtain bangs widen forehead while chin-length wave softens cheeks.",
      oblong: "Horizontal wave motion visually shortens face length."
    }
  },

  // 5. Textured Wavy Flow Quiff
  {
    id: "wavy-textured-quiff",
    name: "Textured Wavy Flow Quiff",
    gender: "men",
    texture: "wavy",
    length: "medium",
    bestHeadShapes: ["square", "round", "oval"],
    description: "Relaxed, natural swept-back texture with scissor-cut tapered sides that highlights wave motion without stiffness. Pairs impeccably with beard sculpting.",
    stylingTip: "Blow-dry loosely back with fingers using matte clay for a zero-grease finish.",
    maintenanceLevel: "Low",
    recommendedStylist: "Arbaaz (Senior Stylist)",
    serviceIdRef: "srv-cut-men",
    estimatedTime: "45 mins",
    price: 1400,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
    ],
    faceShapeSuitability: {
      oval: "Natural flow enhances facial symmetry.",
      round: "Swept-back volume creates angular vertical lines.",
      square: "Textured motion counters sharp jaw angles with relaxed elegance.",
      heart: "Soft quiff tapers forehead without excessive temple bulk.",
      diamond: "Soft side taper emphasizes masculine cheekbones.",
      oblong: "Keep height moderate; maintain fuller sides."
    }
  },

  // 6. Architectural Glass Long Bob
  {
    id: "straight-glass-lob",
    name: "Architectural Glass Long Bob",
    gender: "women",
    texture: "straight",
    length: "medium",
    bestHeadShapes: ["round", "heart", "oval"],
    description: "Razor-sharp collarbone blunt cut with mirror gloss finish that creates clean linear vertical lines and sharp modern sophistication.",
    stylingTip: "Apply MadFern argan gloss drops before flat-ironing at 170°C.",
    maintenanceLevel: "Medium",
    recommendedStylist: "Fern (Master Stylist)",
    serviceIdRef: "srv-cut-women",
    estimatedTime: "60 mins",
    price: 1900,
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
    ],
    faceShapeSuitability: {
      oval: "Emphasizes sleek jawline with ultra-clean precision perimeter.",
      round: "Linear vertical straight fall cuts through cheek roundness for a slim effect.",
      square: "Collarbone drop elongates neck; soften edges slightly.",
      heart: "Directs focus downwards past cheekbones to collarbone.",
      diamond: "Sleek straight lines create modern minimalist contrast.",
      oblong: "Style with deep side part to prevent vertical dragging."
    }
  },

  // 7. Textured Crop with Micro-Fringe
  {
    id: "straight-crop-fringe",
    name: "Textured Crop with Micro-Fringe",
    gender: "men",
    texture: "straight",
    length: "short",
    bestHeadShapes: ["oval", "oblong", "diamond"],
    description: "Contemporary textured top with razor-point feathering, low skin taper, and blunt micro-fringe. Ultra-clean, low maintenance daily cut.",
    stylingTip: "Dust with styling powder at roots and mess through with fingers for instant separated texture.",
    maintenanceLevel: "Low",
    recommendedStylist: "Rohan (Barber Artisan)",
    serviceIdRef: "srv-cut-men",
    estimatedTime: "45 mins",
    price: 1400,
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
    ],
    faceShapeSuitability: {
      oval: "Highlights eyebrow ridge and temple proportions.",
      round: "Square fringe shape introduces angular geometry.",
      square: "Enhances sharp jawline; bold and masculine.",
      heart: "Micro-fringe reduces forehead prominence.",
      diamond: "Soft horizontal fringe line widens narrow forehead.",
      oblong: "Horizontal blunt fringe shortens face length dramatically."
    }
  },

  // 8. Sculptural Halo Coily Crown
  {
    id: "coily-sculpted-afro",
    name: "Sculptural Halo Coily Crown",
    gender: "unisex",
    texture: "coily",
    length: "medium",
    bestHeadShapes: ["oval", "heart", "diamond", "square"],
    description: "Round geometric hydration halo cut that honors the tight 4A–4C coil structure while celebrating radiant symmetry and deep scalp moisture.",
    stylingTip: "L.O.C (Liquid, Oil, Cream) method using cold-pressed shea and botanical hibiscus seal.",
    maintenanceLevel: "Medium",
    recommendedStylist: "Fern (Curl & Texture Lead)",
    serviceIdRef: "srv-curly-signature",
    estimatedTime: "80 mins",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584297091622-af8e5bd81b21?auto=format&fit=crop&w=800&q=80"
    ],
    faceShapeSuitability: {
      oval: "Full geometric halo anchors facial symmetry.",
      round: "Custom crown height elongates cheekbones.",
      square: "Curved spherical silhouette contrasts against sharp jaw planes.",
      heart: "Soft halo volume surrounds tapered chin evenly.",
      diamond: "Crown volume complements high cheekbone drama.",
      oblong: "Lateral spherical volume balances vertical height."
    }
  },

  // 9. Botanical Soft Shaggy Wolf Cut
  {
    id: "gender-free-mullet",
    name: "Botanical Soft Shaggy Wolf Cut",
    gender: "unisex",
    texture: "curly",
    length: "medium",
    bestHeadShapes: ["oval", "square", "round", "diamond", "heart"],
    description: "LGBTQ+ favorite gender-affirming sculpted cut. Heavily textured crown, feathery sideburn wisps, and breezy collar length with natural movement.",
    stylingTip: "Scrunch with curl foam and let Bangalore breeze air-dry naturally.",
    maintenanceLevel: "Low",
    recommendedStylist: "Fern (Creative Director)",
    serviceIdRef: "srv-cut-genderfree",
    estimatedTime: "60 mins",
    price: 1600,
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    ],
    faceShapeSuitability: {
      oval: "Effortlessly edgy balance across all facial regions.",
      round: "Layered crown wisps and elongated nape wisp elongate facial profile.",
      square: "Messy shaggy perimeter diffuses broad jawlines into artistic silhouette.",
      heart: "Nape length adds weight beneath chin to balance temple width.",
      diamond: "Cheekbone wisps accentuate eyes and cheek structure.",
      oblong: "Curtain bangs and feathered sides widen narrow face planes."
    }
  },

  // 10. Fern Natural Light Balayage Waves
  {
    id: "balayage-beach-waves",
    name: "Fern Daylight Honey Balayage Waves",
    gender: "women",
    texture: "wavy",
    length: "long",
    bestHeadShapes: ["oval", "square", "heart", "round", "diamond"],
    description: "Julianne Cott review favorite! Hand-painted golden honey ribbons formulated under open Bangalore sky to match natural undertones with sunlit bouncy wave finish.",
    stylingTip: "Use botanical gloss seal and curl wand alternating directions; shake out with fingers.",
    maintenanceLevel: "Medium",
    recommendedStylist: "Fern (Master Colourist)",
    serviceIdRef: "srv-color-fern",
    estimatedTime: "180 mins",
    price: 5800,
    imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80"
    ],
    faceShapeSuitability: {
      oval: "Dimensional sunlit ribbons enhance skin luminosity.",
      round: "Vertical balayage gradient draws eye downwards.",
      square: "Soft undulating waves break harsh angular jawlines.",
      heart: "Lower ribbons bring lightness and fullness around jaw and neck.",
      diamond: "Soft wave tiers widen lower face while highlighting cheekbones.",
      oblong: "Mid-shaft wave volume fills side planes."
    }
  }
];
