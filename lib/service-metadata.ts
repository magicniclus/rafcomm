import { Metadata } from 'next';

// Fonction utilitaire pour générer les métadonnées SEO des pages services
export function generateServiceMetadata(
  serviceName: string,
  location: string,
  description: string,
  keywords: string[]
): Metadata {
  const title = `${serviceName} ${location} - NEAGU LONUT | Devis Gratuit`;
  const metaDescription = `${description} Intervention rapide en ${location}. Devis gratuit et personnalisé.`;

  return {
    title,
    description: metaDescription,
    keywords: keywords.join(', '),
    authors: [{ name: 'NEAGU LONUT' }],
    creator: 'NEAGU LONUT',
    publisher: 'NEAGU LONUT',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description: metaDescription,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'NEAGU LONUT - Rénovation Intérieure',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
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
  };
}
