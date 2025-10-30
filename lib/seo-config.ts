import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "Neagu Ionut - Rénovation Intérieure & Plomberie en Île-de-France",
  description: "Neagu Ionut, auto-entrepreneur spécialisé en rénovation intérieure, plomberie, salle de bain et carrelage. Devis gratuit en Île-de-France, Hauts-de-Seine.",
  keywords: [
    "rénovation intérieure Île-de-France",
    "plomberie Hauts-de-Seine",
    "salle de bain Suresnes",
    "carrelage 92150",
    "artisan rénovation Paris",
    "plombier Suresnes",
    "rénovation appartement",
    "travaux salle de bain",
    "pose carrelage",
    "installation plomberie",
    "devis gratuit",
    "Neagu Ionut",
    "travaux maison",
    "rénovation BTP",
    "auto-entrepreneur bâtiment"
  ],
  author: "Neagu Ionut",
  siteUrl: "https://neagu-ionut.fr",
  siteName: "Neagu Ionut - Rénovation Intérieure",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@adbetton"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "Neagu Ionut",
  "legalName": "Neagu Ionut - Entreprise de rénovation",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Neagu Ionut"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Suresnes",
    "postalCode": "92150",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33758850226",
    "contactType": "customer service",
    "email": "idarenovation2022@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Île-de-France"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Hauts-de-Seine"
    },
    {
      "@type": "City",
      "name": "Suresnes"
    }
  ],
  "serviceType": [
    "Rénovation intérieure",
    "Plomberie", 
    "Salle de bain",
    "Carrelage",
    "Travaux BTP"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de construction",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rénovation intérieure",
          "description": "Rénovation complète d'appartements et maisons, cloisons, sols, peinture"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Plomberie et salle de bain",
          "description": "Installation plomberie, création salle de bain, pose carrelage"
        }
      }
    ]
  }
};
