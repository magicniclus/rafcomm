import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const debouchageGainesConfig = {
  // SEO et métadonnées
  title: "Débouchage Gaines Télécommunications - Paris 75015",
  description: "RAFCOM, expert en débouchage de gaines télécommunications en Île-de-France. Intervention rapide et efficace. Devis gratuit et personnalisé.",
  keywords: [
    "débouchage gaines télécommunications Paris",
    "débouchage gaines télécoms 75015",
    "intervention technique télécoms",
    "maintenance gaines Paris",
    "débouchage conduits télécoms",
    "expert télécommunications Île-de-France",
    "devis gratuit débouchage gaines",
    "RAFCOM télécoms"
  ],
  
  // Contenu principal
  serviceName: "Débouchage Gaines Télécommunications",
  heroImage: "/placo.png",
  heroTitle: "Débouchage Professionnel de Gaines Télécommunications",
  heroSubtitle: "Expert en débouchage de gaines télécoms - Intervention rapide et efficace en Île-de-France",
  
  // Localisation
  sector: "Télécommunications",
  location: "Paris et Île-de-France",
  
  // Description détaillée
  mainDescription: "RAFCOM est spécialisé dans le débouchage professionnel de gaines télécommunications. Notre expertise technique nous permet d'intervenir rapidement et efficacement sur tous types de réseaux télécoms bloqués. Nous utilisons des équipements de pointe pour garantir un débouchage complet sans endommager vos installations existantes.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Débouchage Gaines Fibre Optique",
      description: "Intervention spécialisée pour déboucher les gaines de fibre optique avec équipements adaptés"
    },
    {
      title: "Débouchage Conduits Cuivre",
      description: "Débouchage des conduits pour câbles cuivre et lignes téléphoniques traditionnelles"
    },
    {
      title: "Nettoyage Fourreaux Télécoms",
      description: "Nettoyage complet des fourreaux et conduits télécommunications"
    },
    {
      title: "Débouchage Gaines Coaxiales",
      description: "Intervention sur les gaines pour câbles coaxiaux et réseaux câblés"
    },
    {
      title: "Diagnostic Obstruction",
      description: "Identification précise des obstructions et évaluation de l'état des gaines"
    },
    {
      title: "Débouchage d'Urgence",
      description: "Intervention rapide 24h/24 pour débouchage urgent de gaines télécoms"
    },
    {
      title: "Tirage de Câbles",
      description: "Tirage de nouveaux câbles après débouchage des gaines"
    },
    {
      title: "Maintenance Préventive",
      description: "Entretien régulier des gaines pour éviter les obstructions futures"
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Intervention rapide sous 24h",
    "Équipements professionnels de pointe",
    "Technicien expert certifié",
    "Tarification transparente",
    "Garantie sur les interventions",
    "Respect des normes télécoms",
    "Estimation gratuite et sans engagement"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Paris 15ème (75015)",
    "Paris et petite couronne",
    "Hauts-de-Seine (92)",
    "Val-de-Marne (94)",
    "Seine-Saint-Denis (93)",
    "Boulogne-Billancourt",
    "Issy-les-Moulineaux",
    "Vanves"
  ],
  
  // Contact
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcom.net",
    address: "Paris (75015), Île-de-France"
  }
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateServiceMetadata(
  debouchageGainesConfig.serviceName,
  debouchageGainesConfig.location,
  debouchageGainesConfig.description,
  debouchageGainesConfig.keywords
);

export default function DebouchageGainesPage() {
  return <ServicePage {...debouchageGainesConfig} />;
}
