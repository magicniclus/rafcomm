import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const installationReseauConfig = {
  // SEO et métadonnées
  title: "Installation Réseau Télécommunications - Paris 75015",
  description: "RAFCOM, expert en installation de réseaux télécommunications en Île-de-France. Déploiement technique professionnel. Devis gratuit et personnalisé.",
  keywords: [
    "installation réseau télécommunications Paris",
    "installation réseau télécoms 75015",
    "déploiement réseau télécoms",
    "installation fibre optique",
    "câblage réseau télécoms",
    "expert installation télécommunications",
    "devis gratuit installation réseau",
    "RAFCOM installation"
  ],
  
  // Contenu principal
  serviceName: "Installation Réseau",
  heroImage: "/maison-work.png",
  heroTitle: "Installation Professionnelle de Réseaux Télécommunications",
  heroSubtitle: "Expert en déploiement et installation de réseaux télécoms - Solutions techniques adaptées en Île-de-France",
  
  // Localisation
  sector: "Télécommunications",
  location: "Paris et Île-de-France",
  
  // Description détaillée
  mainDescription: "RAFCOM est spécialisé dans l'installation et le déploiement de réseaux télécommunications. Notre expertise technique nous permet de réaliser des installations complètes, du câblage à la mise en service, en respectant les normes en vigueur. Nous proposons des solutions adaptées à vos besoins de connectivité.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Installation Fibre Optique",
      description: "Déploiement complet de réseaux fibre optique avec raccordements professionnels"
    },
    {
      title: "Câblage Réseau Cuivre",
      description: "Installation de câblage cuivre pour réseaux téléphoniques et data"
    },
    {
      title: "Pose de Fourreaux",
      description: "Installation de fourreaux et gaines pour passage de câbles télécoms"
    },
    {
      title: "Raccordement Équipements",
      description: "Connexion et mise en service des équipements de télécommunications"
    },
    {
      title: "Installation Armoires Techniques",
      description: "Pose et configuration d'armoires de brassage et équipements actifs"
    },
    {
      title: "Tirage de Câbles",
      description: "Tirage professionnel de câbles dans les gaines et fourreaux existants"
    },
    {
      title: "Tests et Recette",
      description: "Validation technique et tests de performance des installations"
    },
    {
      title: "Mise en Service",
      description: "Configuration finale et mise en production des réseaux installés"
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Installation aux normes télécoms",
    "Équipements professionnels certifiés",
    "Technicien expert qualifié",
    "Tarification transparente",
    "Garantie sur les installations",
    "Tests de performance inclus",
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
  installationReseauConfig.serviceName,
  installationReseauConfig.location,
  installationReseauConfig.description,
  installationReseauConfig.keywords
);

export default function InstallationReseauPage() {
  return <ServicePage {...installationReseauConfig} />;
}
