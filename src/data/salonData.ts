import { SalonService, Review } from '@/types/salon';

export const SALON_INFO = {
  name: "MadFern",
  fullName: "MadFern | Luxury Unisex Salon",
  tagline: "Botanical Hair, Natural Colour & Curl Sanctuary",
  rating: 4.8,
  reviewCount: 137,
  address: "71, 2nd Cross, Lavelle Road, Bengaluru, Karnataka 560001",
  landmark: "Off Lavelle Road, Near Richmond Circle & UB City",
  plusCode: "XH9X+F2 Bengaluru, Karnataka",
  phone: "081058 60702",
  phoneDisplay: "+91 81058 60702",
  whatsapp: "918105860702",
  hours: "10:00 AM – 8:30 PM (Tuesday – Sunday)",
  closedDays: "Mondays",
  badges: ["LGBTQ+ Friendly", "Curly Hair Specialists", "Daylight Colour Studio", "Luxury Nail Bar"],
  coordinates: {
    lat: 12.9716,
    lng: 77.5946
  }
};

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    author: "Shreejeet",
    reviewCount: 6,
    rating: 5,
    timeAgo: "3 months ago",
    content: "I've been struggling to find a good salon that does curly hair cuts for men in Bangalore. Found this place through Reddit and I'm so happy. They actually understand curl patterns, dry-cutting, and how to shape curls without destroying the volume!",
    highlightTag: "curly haircut",
    likes: 12,
    avatarBg: "bg-emerald-800"
  },
  {
    id: "rev-2",
    author: "Julianne Cott",
    reviewCount: 5,
    rating: 5,
    timeAgo: "3 months ago",
    content: "Had a cut and colour today, and left feeling like I was in a shampoo commercial, tossing my hair around feeling amazing. The Fern in Madfern did my colour consultation—took me outside into the natural light to dissuade me from my initial brassy choice and matched my true undertones perfectly!",
    highlightTag: "hair colour",
    likes: 19,
    avatarBg: "bg-amber-800"
  },
  {
    id: "rev-3",
    author: "Cindy Lalnunmawii",
    reviewCount: 9,
    rating: 5,
    timeAgo: "9 months ago",
    content: "Amazing salon! They are excellent with both nails and hair. My nails were done perfectly clean, neat, and long-lasting. The hairstylist really listens to what customers want, and the results are always beautiful. Friendly staff and a relaxing atmosphere. Highly recommended!",
    highlightTag: "nails & hair",
    likes: 15,
    avatarBg: "bg-teal-800"
  },
  {
    id: "rev-4",
    author: "Arjun Nambiar",
    reviewCount: 14,
    rating: 5,
    timeAgo: "1 month ago",
    content: "I must say the ambience is the cherry on top—such a homely Bangalore vibe! Tucked quietly away on Lavelle Road with leafy green plants, artisanal pour-over coffee, and genuine hospitality. Best beard sculpt in the city.",
    highlightTag: "beard shave",
    likes: 8,
    avatarBg: "bg-stone-800"
  },
  {
    id: "rev-5",
    author: "Ananya Deshmukh",
    reviewCount: 8,
    rating: 5,
    timeAgo: "2 weeks ago",
    content: "The attention to detail is impeccable. As someone with 3B curly hair, salons usually just blow-dry it straight out of panic. MadFern used diffuser drying, botanical scalp masks, and taught me a styling routine I can actually maintain at home.",
    highlightTag: "curly hair",
    likes: 22,
    avatarBg: "bg-emerald-900"
  }
];

export const SALON_SERVICES: SalonService[] = [
  // Curly Hair Experience
  {
    id: "srv-curly-signature",
    name: "Signature MadFern Curly Cut & Curl Hydration",
    category: "curly",
    duration: "75 mins",
    price: 2400,
    description: "Reddit-acclaimed curl specialist cut. Dry curl-by-curl geometric shaping, botanical clarifying wash, deep moisture mask, micro-plop & diffuser styling with home routine coaching.",
    tags: ["Signature", "Dry Cut", "Curly/Coily", "Diffuser"],
    popular: true,
    specialistOnly: true
  },
  {
    id: "srv-curly-refresh",
    name: "Curl Hydration & Detox Spa Treatment",
    category: "curly",
    duration: "50 mins",
    price: 1800,
    description: "Revitalizing amino peptide scalp steam, botanical curl defining cream ritual, and bouncy diffuser finish for tired or dull curls.",
    tags: ["Moisture Spa", "Frizz Control"],
  },
  // Haircuts & Styling
  {
    id: "srv-cut-women",
    name: "Luxury Designer Haircut & Blowout",
    category: "cuts",
    duration: "60 mins",
    price: 1900,
    description: "Detailed consultation, scalp massage shampoo, precision texture layering tailored to facial bone structure, and signature bouncy blowout.",
    tags: ["All Hair Types", "Styling Included"],
    popular: true
  },
  {
    id: "srv-cut-men",
    name: "Gentleman's Precision Cut & Beard Sculpt",
    category: "cuts",
    duration: "45 mins",
    price: 1400,
    description: "Bespoke scissor over comb or fade cut, hot towel beard contouring, natural essential oil beard conditioning, and scalp tonic splash.",
    tags: ["Beard Sculpt", "Hot Towel", "Fade"],
    popular: true
  },
  {
    id: "srv-cut-genderfree",
    name: "Gender-Affirming Sculptural Cut",
    category: "cuts",
    duration: "60 mins",
    price: 1600,
    description: "Welcoming, LGBTQ+ safe consultation to sculpt silhouettes that genuinely reflect your personal identity and natural hair flow.",
    tags: ["LGBTQ+ Friendly", "Custom Silhouette"],
  },
  // Colour & Daylight Consultation
  {
    id: "srv-color-fern",
    name: "The 'Fern' Natural Light Colour Consultation & Balayage",
    category: "colour",
    duration: "180 mins",
    price: 5800,
    description: "MadFern's signature experience: stepping into natural daylight courtyard to diagnose undertones, followed by seamless hand-painted dimensional balayage.",
    tags: ["Natural Daylight", "Signature Fern", "Zero-Brass"],
    popular: true,
    specialistOnly: true
  },
  {
    id: "srv-color-global",
    name: "Botanical Ammonia-Free Global Colour & Gloss",
    category: "colour",
    duration: "90 mins",
    price: 3600,
    description: "Gentle plant-enriched rich colour with luminous acidic gloss seal for high reflectivity and hair fiber protection.",
    tags: ["Ammonia-Free", "High Shine"],
  },
  // Nails
  {
    id: "srv-nail-gel",
    name: "Artisanal Gel Overlay & Minimalist Nail Art",
    category: "nails",
    duration: "75 mins",
    price: 2100,
    description: "Cindy Lalnunmawii review favorite. Russian dry manicure cuticle cleanup, organic strengthener base, chip-resistant gel polish, and hand-painted bespoke accents.",
    tags: ["Long Lasting", "Cuticle Care", "Hand Painted"],
    popular: true
  },
  {
    id: "srv-nail-pedi",
    name: "Lavelle Herbarium Foot Ritual & Pedicure",
    category: "nails",
    duration: "60 mins",
    price: 1750,
    description: "Eucalyptus salt foot soak, gentle pumice exfoliation, organic shea butter massage, and immaculate nail buffing or polish.",
    tags: ["Relaxation", "Herbal Scrub"],
  },
  // Scalp & Spa Treatments
  {
    id: "srv-scalp-botox",
    name: "Fern Botanical Hair Botox & Scalp Reset",
    category: "treatments",
    duration: "90 mins",
    price: 4200,
    description: "Deep restorative protein infusion that repairs heat or water damage, eliminates humidity frizz while preserving your hair's natural curl or wave volume.",
    tags: ["Formaldehyde-Free", "Humidity Defense"],
  }
];

export const POPULAR_HOURS = [
  { time: "10 AM", busyPercent: 30 },
  { time: "12 PM", busyPercent: 55 },
  { time: "2 PM", busyPercent: 70 },
  { time: "4 PM", busyPercent: 95, peak: true },
  { time: "6 PM", busyPercent: 88 },
  { time: "8 PM", busyPercent: 40 },
];
