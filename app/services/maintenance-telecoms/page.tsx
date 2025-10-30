import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const maintenanceTelecomsConfig = {
  // SEO et métadonnées
  title: "Maintenance Télécommunications - Paris 75015",
  description: "RAFCOM, expert en maintenance télécommunications en Île-de-France. Entretien préventif et curatif de vos installations télécoms. Devis gratuit et personnalisé.",
  keywords: [
    "maintenance télécommunications Paris",
    "maintenance télécoms 75015",
    "entretien réseau télécoms",
    "maintenance préventive télécoms",
    "réparation équipements télécoms",
    "expert maintenance télécommunications",
    "devis gratuit maintenance télécoms",
    "RAFCOM maintenance"
  ],
  
  // Contenu principal
  serviceName: "Maintenance Télécommunications",
  heroImage: "/plomberie.png",
  heroTitle: "Maintenance Professionnelle de Télécommunications",
  heroSubtitle: "Expert en maintenance préventive et curative de vos installations télécoms - Service professionnel en Île-de-France",
  
  // Localisation
  sector: "Télécommunications",
  location: "Paris et Île-de-France",
  
  // Description détaillée
  mainDescription: "RAFCOM assure la maintenance complète de vos installations télécommunications. Notre expertise technique nous permet d'intervenir sur tous types d'équipements et réseaux télécoms pour garantir leur bon fonctionnement et leur pérennité. Nous proposons des contrats de maintenance préventive et des interventions curatives pour assurer la continuité de vos services.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Maintenance Préventive",
      description: "Entretien régulier programmé pour prévenir les pannes et optimiser les performances"
    },
    {
      title: "Maintenance Curative",
      description: "Réparation et remise en état des équipements télécoms défaillants"
    },
    {
      title: "Contrôle Qualité Réseau",
      description: "Vérification et optimisation de la qualité des signaux et connexions"
    },
    {
      title: "Mise à Jour Équipements",
      description: "Actualisation des firmwares et configurations des équipements télécoms"
    },
    {
      title: "Diagnostic Technique",
      description: "Analyse complète de l'état et des performances de vos installations"
    },
    {
      title: "Maintenance d'Urgence",
      description: "Intervention rapide 24h/24 pour rétablir vos services télécoms"
    },
    {
      title: "Nettoyage Équipements",
      description: "Nettoyage et entretien physique des équipements et armoires techniques"
    },
    {
      title: "Documentation Technique",
      description: "Mise à jour de la documentation et des schémas de vos installations"
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Contrats de maintenance flexibles",
    "Intervention rapide sous 24h",
    "Technicien expert certifié",
    "Tarification transparente",
    "Garantie sur les interventions",
    "Suivi technique personnalisé",
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
  maintenanceTelecomsConfig.serviceName,
  maintenanceTelecomsConfig.location,
  maintenanceTelecomsConfig.description,
  maintenanceTelecomsConfig.keywords
);

export default function MaintenanceTelecomsPage() {
  return <ServicePage {...maintenanceTelecomsConfig} />;
}
