import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

// Configuration de la page rénovation intérieure
const renovationInterieurConfig = {
  // SEO et métadonnées
  title: "Rénovation Intérieure Île-de-France",
  description: "Spécialiste rénovation intérieure en Île-de-France. Travaux d'aménagement, cloisons, sols, peinture. Devis gratuit et personnalisé.",
  keywords: [
    "rénovation intérieure Île-de-France",
    "travaux rénovation Suresnes",
    "aménagement appartement",
    "devis gratuit rénovation",
    "rénovation maison Hauts-de-Seine",
    "travaux intérieur Paris",
    "artisan rénovation",
    "rénovation complète",
    "aménagement sur mesure"
  ],
  
  // Contenu principal
  serviceName: "Rénovation Intérieure",
  heroImage: "/placo.png",
  heroTitle: "Rénovation Intérieure Complète",
  heroSubtitle: "Transformation et aménagement de vos espaces intérieurs en Île-de-France. Projet clé en main avec devis gratuit et personnalisé.",
  
  // Secteur d'activité
  sector: "BTP - Rénovation Intérieure",
  location: "Île-de-France",
  
  // Contenu détaillé
  mainDescription: "NEAGU LONUT, expert en rénovation intérieure en Île-de-France, vous accompagne dans tous vos projets de transformation d'espaces. Que vous souhaitiez rénover entièrement votre appartement, aménager de nouvelles pièces ou moderniser votre intérieur, nous vous proposons une prestation complète et sur mesure. Notre expertise dans le secteur du BTP nous permet de gérer tous les corps de métier pour un résultat harmonieux et de qualité.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Cloisons et aménagement",
      description: "Création, modification ou suppression de cloisons pour optimiser vos espaces de vie"
    },
    {
      title: "Revêtements de sols",
      description: "Pose de carrelage, parquet, vinyle, moquette selon vos goûts et besoins"
    },
    {
      title: "Peinture et finitions",
      description: "Peinture murale, plafonds, boiseries avec finitions soignées et durables"
    },
    {
      title: "Électricité",
      description: "Mise aux normes électriques, création de points lumineux, prises et interrupteurs"
    },
    {
      title: "Isolation thermique",
      description: "Amélioration de l'isolation pour votre confort et économies d'énergie"
    },
    {
      title: "Aménagement sur mesure",
      description: "Création d'espaces personnalisés : dressing, bibliothèque, rangements"
    },
    {
      title: "Démolition",
      description: "Démolition sécurisée de cloisons non porteuses et évacuation des gravats"
    },
    {
      title: "Finitions décoratives",
      description: "Pose de moulures, plinthes, habillage et tous éléments décoratifs"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Projet clé en main de A à Z",
    "Devis gratuit et détaillé",
    "Matériaux de qualité professionnelle",
    "Respect des délais convenus",
    "Garantie sur tous les travaux",
    "Conseil personnalisé et suivi",
    "Finitions soignées et durables",
    "Suivi post-travaux assuré",
    "Tarification transparente",
    "Estimation gratuite et sans engagement"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Suresnes (92150)",
    "Hauts-de-Seine (92)",
    "Paris et petite couronne",
    "Île-de-France",
    "Nanterre",
    "Puteaux",
    "Rueil-Malmaison",
    "Boulogne-Billancourt"
  ],
  
  // Informations de contact
  contactInfo: {
    phone: "07 58 85 02 26",
    email: "idarenovation2022@gmail.com",
    address: "92150 Suresnes, Île-de-France"
  }
  
  // Pas de section pricing selon les instructions
};

// Génération des métadonnées SEO
export const metadata: Metadata = generateServiceMetadata(
  renovationInterieurConfig.serviceName,
  renovationInterieurConfig.location,
  renovationInterieurConfig.description,
  renovationInterieurConfig.keywords
);

export default function RenovationInterieurePage() {
  return <ServicePage {...renovationInterieurConfig} />;
}
