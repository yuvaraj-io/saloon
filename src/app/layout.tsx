import type { Metadata } from "next";
import "./globals.css";
import { SALON_INFO } from "@/data/salonData";

export const metadata: Metadata = {
  title: "MadFern | Luxury Unisex Salon, Lavelle Road, Bengaluru (4.8★)",
  description:
    "Bangalore's premier botanical hair sanctuary. Specializing in dry curly haircuts, outdoor natural daylight colour consultations with Fern, beard sculpting, and artisanal nail care on Lavelle Road.",
  keywords: [
    "MadFern salon",
    "curly hair cut bangalore",
    "salon lavelle road",
    "luxury salon bangalore",
    "curly haircut for men bangalore",
    "hair colour consultation bangalore",
    "nail salon lavelle road",
    "unisex salon bangalore",
    "LGBTQ friendly salon bangalore"
  ],
  openGraph: {
    title: "MadFern | Luxury Unisex Salon, Lavelle Road",
    description:
      "Homely luxury Bangalore vibe. Curated Hairstyle & Face Shape Studio, Reddit-celebrated curly hair cuts, daylight color matching.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SALON_INFO.fullName,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035",
    telephone: SALON_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "71, 2nd cross, Lavelle Road",
      addressLocality: "Bengaluru",
      postalCode: "560001",
      addressRegion: "Karnataka",
      addressCountry: "IN"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "137"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "20:30"
      }
    ],
    priceRange: "₹₹"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A130F] text-[#FAF8F5] antialiased min-h-screen font-sans selection:bg-[#C5A880] selection:text-[#0A130F]">
        {children}
      </body>
    </html>
  );
}
