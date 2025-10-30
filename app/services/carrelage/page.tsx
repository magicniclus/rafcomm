import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

// Configuration de la page carrelage
const carrelageConfig = {
  // SEO et métadonnées
  title: "Carrelage Île-de-France",
  description: "Spécialiste pose de carrelage en Île-de-France. Carrelage sol, faïence murale, mosaïque. Devis gratuit et personnalisé pour tous vos projets.",
  keywords: [
    "carrelage Île-de-France",
    "pose carrelage Suresnes",
    "faïence salle de bain",
    "devis carrelage gratuit",
    "carrelage sol Hauts-de-Seine",
    "mosaïque Paris",
    "artisan carreleur",
    "pose carrelage professionnel",
    "carrelage pierre naturelle"
  ],
  
  // Contenu principal
  serviceName: "Carrelage",
  heroImage: "/mur.png",
  heroTitle: "Pose de Carrelage Professionnelle",
  heroSubtitle: "Expert en pose de carrelage, faïence et mosaïque en Île-de-France. Finitions parfaites avec devis gratuit et personnalisé.",
  
  // Secteur d'activité
  sector: "BTP - Carrelage",
  location: "Île-de-France",
  
  // Contenu détaillé
  mainDescription: "NEAGU LONUT, artisan carreleur expert en Île-de-France, vous propose ses services de pose de carrelage pour tous vos projets. Que ce soit pour votre salle de bain, cuisine, salon ou terrasse, nous maîtrisons tous les types de revêtements céramiques. Notre savoir-faire dans le secteur du BTP nous permet de vous garantir une pose professionnelle avec des finitions impeccables et une étanchéité parfaite.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Carrelage sol intérieur",
      description: "Pose de carrelage pour sols de cuisine, salon, entrée avec finitions soignées"
    },
    {
      title: "Faïence murale",
      description: "Revêtement mural pour salle de bain, cuisine, crédence avec étanchéité garantie"
    },
    {
      title: "Mosaïque décorative",
      description: "Pose de mosaïque en verre, céramique ou pierre pour créer des ambiances uniques"
    },
    {
      title: "Pierre naturelle",
      description: "Installation de carrelage en pierre naturelle : travertin, marbre, ardoise"
    },
    {
      title: "Grès cérame",
      description: "Pose de carrelage grand format en grès cérame pour un rendu moderne"
    },
    {
      title: "Étanchéité",
      description: "Mise en œuvre de l'étanchéité sous carrelage pour pièces humides"
    },
    {
      title: "Joints et finitions",
      description: "Réalisation de joints parfaits et pose de profilés de finition"
    },
    {
      title: "Ragréage",
      description: "Préparation et ragréage des sols pour une pose parfaite du carrelage"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Pose professionnelle garantie",
    "Matériaux haut de gamme",
    "Étanchéité parfaite assurée",
    "Finitions impeccables",
    "Conseil design personnalisé",
    "Devis gratuit et personnalisé",
    "Respect du planning convenu",
    "Garantie sur tous les travaux",
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
  carrelageConfig.serviceName,
  carrelageConfig.location,
  carrelageConfig.description,
  carrelageConfig.keywords
);

export default function CarrelagePage() {
  return <ServicePage {...carrelageConfig} />;
}
