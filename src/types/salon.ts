export type HeadShape = 'oval' | 'round' | 'square' | 'heart' | 'diamond' | 'oblong';

export type HairTexture = 'curly' | 'wavy' | 'straight' | 'coily';

export type HairLength = 'short' | 'medium' | 'long';

export type GenderVibe = 'unisex' | 'men' | 'women';

export interface HairColor {
  id: string;
  name: string;
  hex: string;
  tone: string;
  description: string;
}

export interface HairstyleOption {
  id: string;
  name: string;
  gender: GenderVibe;
  texture: HairTexture;
  length: HairLength;
  bestHeadShapes: HeadShape[];
  description: string;
  stylingTip: string;
  maintenanceLevel: 'Low' | 'Medium' | 'High';
  recommendedStylist: string;
  serviceIdRef: string;
  estimatedTime: string;
  price: number;
  imageUrl: string;
  galleryImages: string[];
  faceShapeSuitability: Record<HeadShape, string>;
}

export interface SalonService {
  id: string;
  name: string;
  category: 'curly' | 'cuts' | 'colour' | 'nails' | 'treatments';
  duration: string;
  price: number;
  description: string;
  tags: string[];
  popular?: boolean;
  specialistOnly?: boolean;
}

export interface Review {
  id: string;
  author: string;
  reviewCount: number;
  rating: number;
  timeAgo: string;
  content: string;
  highlightTag: string;
  likes: number;
  avatarBg: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}
