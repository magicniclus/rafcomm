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
  title: "RAFCOM - Débouchage Gaines Télécommunications en Île-de-France",
  description: "RAFCOM, expert en débouchage de gaines télécommunications et interventions techniques spécialisées. Devis gratuit en Île-de-France, Paris.",
  keywords: [
    "débouchage gaines télécommunications Île-de-France",
    "maintenance télécoms Paris",
    "installation réseau 75015",
    "interventions techniques télécoms",
    "expert télécommunications Paris",
    "débouchage gaines Paris",
    "maintenance réseau télécom",
    "installation télécommunications",
    "services télécoms",
    "réparation réseau",
    "devis gratuit",
    "RAFCOM",
    "Rafik Hamel",
    "télécommunications Île-de-France",
    "auto-entrepreneur télécoms"
  ],
  author: "Rafik Hamel",
  siteUrl: "https://rafcom.net",
  siteName: "RAFCOM - Télécommunications",
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
  "name": "RAFCOM",
  "legalName": "RAFCOM - Spécialiste télécommunications",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Rafik Hamel"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "postalCode": "75015",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33783490136",
    "contactType": "customer service",
    "email": "contact@rafcom.net",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Île-de-France"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Paris"
    },
    {
      "@type": "City",
      "name": "Paris 15ème"
    }
  ],
  "serviceType": [
    "Débouchage gaines télécommunications",
    "Maintenance télécoms", 
    "Installation réseau",
    "Interventions techniques",
    "Services télécommunications"
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
  "serviceType": "Telecommunications Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services télécommunications",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Débouchage gaines télécommunications",
          "description": "Débouchage professionnel de gaines télécommunications, intervention rapide et efficace"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Maintenance et installation télécoms",
          "description": "Maintenance préventive, installation réseau, interventions techniques spécialisées"
        }
      }
    ]
  }
};
