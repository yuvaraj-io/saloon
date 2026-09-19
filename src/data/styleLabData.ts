import { HeadShape, HairTexture, HairstyleOption, HairColor } from '@/types/salon';

export interface GeometricRatio {
  foreheadWidth: string; // e.g. "Medium-Wide"
  cheekboneProminence: string; // e.g. "High & Curved"
  jawlineTaper: string; // e.g. "Chiseled 90°"
  verticalRatio: string; // e.g. "1.5 : 1 (Elongated)"
  goal: string; // e.g. "Softens angular corners & adds organic movement"
}

export interface HeadShapeInfo {
  id: HeadShape;
  title: string;
  subtitle: string;
  description: string;
  flatteringAdvice: string;
  featuresToHighlight: string[];
  recommendedStyleIds: string[];
  avoidStyles: string;
  geometry: GeometricRatio;
}

export const HEAD_SHAPES: HeadShapeInfo[] = [
  {
    id: "oval",
    title: "Oval",
    subtitle: "Balanced & Symmetrical",
    description: "Forehead slightly wider than the curved chin, with gently rounded cheekbones. Universally versatile baseline.",
    flatteringAdvice: "Natural facial symmetry allows you to pull off almost any silhouette—from voluminous curly shags to razor-sharp bobs, tapers, and textured fades.",
    featuresToHighlight: ["Harmonious facial thirds", "Natural cheekbone taper", "Soft jaw contour"],
    recommendedStyleIds: ["curly-shag", "curly-fade-crop", "wavy-curtain-bob", "straight-glass-lob", "straight-crop-fringe", "gender-free-mullet", "men-beard-sculpt", "women-balayage-waves"],
    avoidStyles: "Avoid excessively tall spikes that unnecessarily lengthen the vertical axis.",
    geometry: {
      foreheadWidth: "Balanced (1.0x)",
      cheekboneProminence: "Naturally Symmetrical (1.1x)",
      jawlineTaper: "Softly Curved (0.85x)",
      verticalRatio: "1.4 : 1 (Ideal Golden Ratio)",
      goal: "Maintain natural facial balance without adding extreme vertical or horizontal distortion."
    }
  },
  {
    id: "round",
    title: "Round",
    subtitle: "Soft & Equal Width/Length",
    description: "Curved cheekbones and rounded chin with approximately equal facial width and length.",
    flatteringAdvice: "Styles with vertical crown volume, curtain bangs, or asymmetrical angles lengthen your face and give definition to soft contours.",
    featuresToHighlight: ["Youthful full cheeks", "Soft jaw curvature", "Smooth temple planes"],
    recommendedStyleIds: ["men-round-quiff", "women-round-lob", "curly-fade-crop", "curly-shag", "wavy-textured-quiff", "straight-glass-lob"],
    avoidStyles: "Avoid wide, horizontal chin-length blunt cuts with zero layers that exaggerate cheek width.",
    geometry: {
      foreheadWidth: "Rounded & Broad (1.15x)",
      cheekboneProminence: "Widest Plane (1.3x)",
      jawlineTaper: "Soft Circular Arc (1.1x)",
      verticalRatio: "1 : 1 (Equal Planes)",
      goal: "Add vertical crown height (+30mm) while tapering sides to create an elongated oval illusion."
    }
  },
  {
    id: "square",
    title: "Square",
    subtitle: "Strong Angular Jawline",
    description: "Broad forehead, prominent cheekbones, and a chiseled square jawline of equal width.",
    flatteringAdvice: "Soft, organic curly ringlets, sweeping curtain bangs, and soft tapered layers visually soften strong jaw angles while honoring bone structure presence.",
    featuresToHighlight: ["Chiseled mandibular jaw", "Broad masculine/defined planes", "Distinct architectural corners"],
    recommendedStyleIds: ["curly-shag", "curly-cascade-long", "wavy-textured-quiff", "coily-sculpted-afro", "men-beard-sculpt", "women-balayage-waves"],
    avoidStyles: "Avoid geometric jaw-level blunt bobs that sit directly on your jaw corners.",
    geometry: {
      foreheadWidth: "Broad Angular (1.25x)",
      cheekboneProminence: "Planar Structure (1.2x)",
      jawlineTaper: "Chiseled 90° Corners (1.25x)",
      verticalRatio: "1.1 : 1 (Broad & Powerful)",
      goal: "Introduce organic curves and soft circular curls to diffuse sharp 90° mandibular corners."
    }
  },
  {
    id: "heart",
    title: "Heart",
    subtitle: "Wide Forehead & Tapered Chin",
    description: "Wider temples and high cheekbones tapering sharply down into a delicate or pointed chin.",
    flatteringAdvice: "Chin-length textured bobs, collarbone waves, or low side volume create equilibrium by filling the narrower jaw area.",
    featuresToHighlight: ["Striking high cheekbones", "Delicate chin taper", "Sculpted forehead plane"],
    recommendedStyleIds: ["wavy-curtain-bob", "curly-fade-crop", "straight-glass-lob", "gender-free-mullet", "women-balayage-waves"],
    avoidStyles: "Avoid heavy top-heavy crown height with slicked flat sides that exaggerate upper width.",
    geometry: {
      foreheadWidth: "Prominent & Broad (1.35x)",
      cheekboneProminence: "High Focal Points (1.2x)",
      jawlineTaper: "Sharply Pointed (0.6x)",
      verticalRatio: "1.3 : 1 (Tapered Wedge)",
      goal: "Add horizontal perimeter volume directly adjacent to the chin and neck to counterbalance wide temples."
    }
  },
  {
    id: "diamond",
    title: "Diamond",
    subtitle: "Dramatic High Cheekbones",
    description: "Widest at the cheekbones with a narrow forehead and narrow pointed jaw.",
    flatteringAdvice: "Mid-length voluminous curls, curtain bangs, and layered fades bring optical balance to temples and chin.",
    featuresToHighlight: ["Dramatic high cheekbones", "Cat-eye focal points", "Defined temple lines"],
    recommendedStyleIds: ["curly-shag", "curly-cascade-long", "straight-crop-fringe", "wavy-curtain-bob", "gender-free-mullet"],
    avoidStyles: "Avoid slicked-back styles without face-framing pieces.",
    geometry: {
      foreheadWidth: "Narrow Tapered (0.8x)",
      cheekboneProminence: "Widest Architectural Apex (1.4x)",
      jawlineTaper: "Delicate Point (0.7x)",
      verticalRatio: "1.45 : 1 (Sculptural Diamond)",
      goal: "Broaden both upper temples with bangs/fringes and lower jawline with textured flare."
    }
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
    ,
    geometry: {
      foreheadWidth: "Straight & Tall (1.0x)",
      cheekboneProminence: "Consistent Width (1.0x)",
      jawlineTaper: "Square-Rounded Base (0.95x)",
      verticalRatio: "1.8 : 1 (Noticeably Long)",
      goal: "Cut vertical forehead axis with horizontal fringes while generating lateral bounce to widen the silhouette."
    }
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
  // 1. Signature Curly Shag (Women / Unisex)
  {
    id: "curly-shag",
    name: "MadFern Signature Curly Shag",
    gender: "women",
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
    imageUrl: "/images/hairstyles/women_curly_shag.jpg",
    galleryImages: [
      "/images/hairstyles/women_curly_shag.jpg",
      "/images/hairstyles/women_long_curls.jpg",
      "/images/hairstyles/unisex_wolf_cut.jpg"
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

  // 2. Modern Curly Taper Fade (Men)
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
    imageUrl: "/images/hairstyles/men_curly_fade.jpg",
    galleryImages: [
      "/images/hairstyles/men_curly_fade.jpg",
      "/images/hairstyles/men_crop_fringe.jpg",
      "/images/hairstyles/men_wavy_quiff.jpg"
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

  // 3. High-Volume Textured Quiff Fade (Men - Round / Oval Face Specialist)
  {
    id: "men-round-quiff",
    name: "Vertical Architectural Quiff & Fade",
    gender: "men",
    texture: "wavy",
    length: "medium",
    bestHeadShapes: ["round", "square", "oval"],
    description: "Engineered specifically for round and broad jaw silhouettes. Adds +35mm vertical elevation at the crown while tight low fade chisels the cheeks.",
    stylingTip: "Blow-dry upwards with round vent brush, lock texture with botanical matte clay.",
    maintenanceLevel: "Low",
    recommendedStylist: "Arbaaz (Master Barber)",
    serviceIdRef: "srv-cut-men",
    estimatedTime: "45 mins",
    price: 1500,
    imageUrl: "/images/hairstyles/men_round_quiff.jpg",
    galleryImages: [
      "/images/hairstyles/men_round_quiff.jpg",
      "/images/hairstyles/men_curly_fade.jpg",
      "/images/hairstyles/men_wavy_quiff.jpg"
    ],
    faceShapeSuitability: {
      oval: "Bold executive height pairs cleanly with natural symmetry.",
      round: "Ideal geometry correction: +35mm crown height visually counteracts equal width/length cheek ratio.",
      square: "Sharp vertical lift balances heavy jawbone planes.",
      heart: "Maintains balanced side taper without over-widening forehead.",
      diamond: "Draws visual focal point straight up from narrow chin.",
      oblong: "Reduce crown height slightly to avoid over-lengthening."
    }
  },

  // 4. Asymmetrical Curtain Wavy Lob (Women - Round / Heart Face Specialist)
  {
    id: "women-round-lob",
    name: "Contouring Curtain Wavy Lob",
    gender: "women",
    texture: "wavy",
    length: "medium",
    bestHeadShapes: ["round", "heart", "square", "oval"],
    description: "Designed specifically to contour round and soft cheekbones. Features an asymmetrical center drape, jawline-grazing waves, and face-slimming curtain fringe.",
    stylingTip: "Apply sea kelp mist to damp curtain bangs, wrap around 1.25-inch brush away from face.",
    maintenanceLevel: "Medium",
    recommendedStylist: "Fern & Preethi",
    serviceIdRef: "srv-cut-women",
    estimatedTime: "60 mins",
    price: 1900,
    imageUrl: "/images/hairstyles/women_round_lob.jpg",
    galleryImages: [
      "/images/hairstyles/women_round_lob.jpg",
      "/images/hairstyles/women_wavy_bob.jpg",
      "/images/hairstyles/women_balayage_waves.jpg"
    ],
    faceShapeSuitability: {
      oval: "Effortlessly drapes across cheekbones with romantic bounce.",
      round: "Ideal geometry contour: Center curtain bangs visually halve horizontal cheek width for an instant slimming taper.",
      square: "Curtain bangs soften square temple and jawline corners.",
      heart: "Collarbone wave flare fills narrow space beside chin.",
      diamond: "Soft curtain wings widen narrow forehead.",
      oblong: "Provides mid-face fullness to soften vertical length."
    }
  },

  // 5. Botanical Cascade Curly Layers (Women)
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
    imageUrl: "/images/hairstyles/women_long_curls.jpg",
    galleryImages: [
      "/images/hairstyles/women_long_curls.jpg",
      "/images/hairstyles/women_curly_shag.jpg",
      "/images/hairstyles/women_balayage_waves.jpg"
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

  // 6. French Wavy Bob with Curtain Bangs (Women)
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
    imageUrl: "/images/hairstyles/women_wavy_bob.jpg",
    galleryImages: [
      "/images/hairstyles/women_wavy_bob.jpg",
      "/images/hairstyles/women_balayage_waves.jpg",
      "/images/hairstyles/women_glass_lob.jpg"
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

  // 7. Textured Wavy Flow Quiff (Men)
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
    imageUrl: "/images/hairstyles/men_wavy_quiff.jpg",
    galleryImages: [
      "/images/hairstyles/men_wavy_quiff.jpg",
      "/images/hairstyles/men_beard_sculpt.jpg",
      "/images/hairstyles/men_curly_fade.jpg"
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

  // 8. Gentleman's Precision Scissor Cut & Beard Sculpt (Men)
  {
    id: "men-beard-sculpt",
    name: "Gentleman's Precision Cut & Beard Sculpt",
    gender: "men",
    texture: "straight",
    length: "short",
    bestHeadShapes: ["square", "oval", "round", "diamond"],
    description: "Arjun Nambiar review favorite! Bespoke scissor-over-comb tailored side part, hot towel beard contouring, and essential oil conditioning.",
    stylingTip: "Comb neatly with sandalwood beard oil and flexible natural hold pomade.",
    maintenanceLevel: "Low",
    recommendedStylist: "Arbaaz (Barber Lead)",
    serviceIdRef: "srv-cut-men",
    estimatedTime: "50 mins",
    price: 1600,
    imageUrl: "/images/hairstyles/men_beard_sculpt.jpg",
    galleryImages: [
      "/images/hairstyles/men_beard_sculpt.jpg",
      "/images/hairstyles/men_wavy_quiff.jpg",
      "/images/hairstyles/men_crop_fringe.jpg"
    ],
    faceShapeSuitability: {
      oval: "Clean contours accentuate bone structure effortlessly.",
      round: "Sharp square beard outline chisels soft jawline.",
      square: "Harmonizes with natural angular jawbone for executive presence.",
      heart: "Beard bulk balances narrow pointed chin.",
      diamond: "Beard fullness widens lower jaw.",
      oblong: "Keeps sideburns blended to prevent elongating."
    }
  },

  // 9. Architectural Glass Long Bob (Women)
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
    imageUrl: "/images/hairstyles/women_glass_lob.jpg",
    galleryImages: [
      "/images/hairstyles/women_glass_lob.jpg",
      "/images/hairstyles/women_wavy_bob.jpg",
      "/images/hairstyles/unisex_wolf_cut.jpg"
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

  // 10. Textured Crop with Micro-Fringe (Men)
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
    imageUrl: "/images/hairstyles/men_crop_fringe.jpg",
    galleryImages: [
      "/images/hairstyles/men_crop_fringe.jpg",
      "/images/hairstyles/men_curly_fade.jpg",
      "/images/hairstyles/men_beard_sculpt.jpg"
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

  // 11. Sculptural Halo Coily Crown (Women / Unisex)
  {
    id: "coily-sculpted-afro",
    name: "Sculptural Halo Coily Crown",
    gender: "women",
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
    imageUrl: "/images/hairstyles/women_coily_halo.jpg",
    galleryImages: [
      "/images/hairstyles/women_coily_halo.jpg",
      "/images/hairstyles/women_curly_shag.jpg",
      "/images/hairstyles/women_long_curls.jpg"
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

  // 12. Botanical Soft Shaggy Wolf Cut (Unisex)
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
    imageUrl: "/images/hairstyles/unisex_wolf_cut.jpg",
    galleryImages: [
      "/images/hairstyles/unisex_wolf_cut.jpg",
      "/images/hairstyles/women_curly_shag.jpg",
      "/images/hairstyles/women_glass_lob.jpg"
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

  // 13. Fern Natural Light Balayage Waves (Women)
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
    imageUrl: "/images/hairstyles/women_balayage_waves.jpg",
    galleryImages: [
      "/images/hairstyles/women_balayage_waves.jpg",
      "/images/hairstyles/women_wavy_bob.jpg",
      "/images/hairstyles/women_long_curls.jpg"
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
