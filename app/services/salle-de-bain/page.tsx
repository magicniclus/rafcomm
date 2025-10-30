import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

// Configuration de la page salle de bain
const salleDeBainConfig = {
  // SEO et métadonnées
  title: "Rénovation Salle de Bain Île-de-France",
  description: "Spécialiste rénovation salle de bain en Île-de-France. Création, aménagement, carrelage, plomberie. Devis gratuit et réalisation clé en main.",
  keywords: [
    "rénovation salle de bain Île-de-France",
    "salle de bain Suresnes",
    "carrelage salle de bain",
    "aménagement salle de bain",
    "douche italienne",
    "rénovation sanitaire",
    "artisan salle de bain",
    "devis salle de bain gratuit",
    "travaux salle de bain"
  ],
  
  // Contenu principal
  serviceName: "Rénovation Salle de Bain",
  heroImage: "/extension.png", // Utilisation d'une image existante
  heroTitle: "Rénovation de Salle de Bain sur Mesure",
  heroSubtitle: "Création et rénovation complète de salles de bain en Île-de-France. Du design à la réalisation, nous vous accompagnons dans votre projet.",
  
  // Secteur d'activité
  sector: "BTP - Rénovation Sanitaire",
  location: "Île-de-France",
  
  // Contenu détaillé
  mainDescription: "NEAGU LONUT, spécialiste de la rénovation de salle de bain en Île-de-France, vous accompagne dans la transformation de votre espace sanitaire. Que vous souhaitiez moderniser une salle de bain existante ou créer un nouvel espace, nous vous proposons une prestation complète incluant la conception, la plomberie, le carrelage et les finitions. Notre expertise dans le secteur du BTP nous permet de réaliser des projets sur mesure, alliant fonctionnalité et esthétique.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Conception et design",
      description: "Étude de votre projet, plans 3D, conseils en aménagement et choix des matériaux"
    },
    {
      title: "Plomberie sanitaire",
      description: "Installation complète de la plomberie, évacuations, arrivées d'eau"
    },
    {
      title: "Carrelage et faïence",
      description: "Pose de carrelage au sol et mural, faïence, mosaïque, étanchéité"
    },
    {
      title: "Installation sanitaires",
      description: "Pose de douche, baignoire, WC, lavabo, meuble vasque"
    },
    {
      title: "Douche à l'italienne",
      description: "Création de douche plain-pied, receveur extra-plat, paroi vitrée"
    },
    {
      title: "Finitions",
      description: "Peinture, éclairage, miroirs, accessoires, ventilation"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Projet clé en main de A à Z",
    "Devis détaillé et gratuit",
    "Matériaux haut de gamme",
    "Respect des délais convenus",
    "Garantie décennale",
    "Conseils personnalisés",
    "Finitions soignées",
    "Suivi post-travaux"
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
  },
  
  // Prix indicatifs
  pricing: [
    {
      title: "Rénovation simple",
      description: "Carrelage + peinture + robinetterie",
      priceRange: "3000-5000€"
    },
    {
      title: "Rénovation complète",
      description: "Plomberie + carrelage + sanitaires",
      priceRange: "8000-12000€"
    },
    {
      title: "Création salle de bain",
      description: "Projet neuf avec douche italienne",
      priceRange: "12000-18000€"
    },
    {
      title: "Douche à l'italienne",
      description: "Transformation baignoire en douche",
      priceRange: "4000-7000€"
    }
  ]
};

// Génération des métadonnées SEO
export const metadata: Metadata = generateServiceMetadata(
  salleDeBainConfig.serviceName,
  salleDeBainConfig.location,
  salleDeBainConfig.description,
  salleDeBainConfig.keywords
);

export default function SalleDeBainPage() {
  return <ServicePage {...salleDeBainConfig} />;
}
