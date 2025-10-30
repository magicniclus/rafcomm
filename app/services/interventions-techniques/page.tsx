import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const interventionsTechniquesConfig = {
  // SEO et métadonnées
  title: "Interventions Techniques Télécommunications - Paris 75015",
  description: "RAFCOM, expert en interventions techniques spécialisées télécommunications en Île-de-France. Service professionnel et réactif. Devis gratuit et personnalisé.",
  keywords: [
    "interventions techniques télécommunications Paris",
    "interventions techniques télécoms 75015",
    "expertise technique télécoms",
    "dépannage télécommunications",
    "service technique télécoms",
    "expert interventions télécommunications",
    "devis gratuit interventions techniques",
    "RAFCOM interventions"
  ],
  
  // Contenu principal
  serviceName: "Interventions Techniques",
  heroImage: "/mur.png",
  heroTitle: "Interventions Techniques Spécialisées Télécommunications",
  heroSubtitle: "Expert en interventions techniques télécoms - Service professionnel et réactif pour tous vos besoins en Île-de-France",
  
  // Localisation
  sector: "Télécommunications",
  location: "Paris et Île-de-France",
  
  // Description détaillée
  mainDescription: "RAFCOM propose des interventions techniques spécialisées dans le domaine des télécommunications. Notre expertise nous permet d'intervenir sur tous types de problématiques techniques, du dépannage urgent aux missions d'expertise. Nous mettons notre savoir-faire au service de vos besoins techniques télécoms.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Dépannage Urgent",
      description: "Intervention rapide pour résoudre les pannes et dysfonctionnements télécoms"
    },
    {
      title: "Expertise Technique",
      description: "Analyse approfondie et diagnostic des problèmes complexes"
    },
    {
      title: "Optimisation Réseau",
      description: "Amélioration des performances et de la qualité des réseaux existants"
    },
    {
      title: "Migration Technique",
      description: "Accompagnement dans les changements et évolutions d'infrastructure"
    },
    {
      title: "Audit Technique",
      description: "Évaluation complète de l'état et des performances de vos installations"
    },
    {
      title: "Support Technique",
      description: "Assistance technique spécialisée et conseil d'expert"
    },
    {
      title: "Mise en Conformité",
      description: "Adaptation des installations aux nouvelles normes et réglementations"
    },
    {
      title: "Formation Technique",
      description: "Formation de vos équipes sur l'utilisation et la maintenance"
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Intervention rapide 24h/24",
    "Expertise technique reconnue",
    "Technicien spécialisé certifié",
    "Tarification transparente",
    "Solutions sur mesure",
    "Conseil personnalisé inclus",
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
  interventionsTechniquesConfig.serviceName,
  interventionsTechniquesConfig.location,
  interventionsTechniquesConfig.description,
  interventionsTechniquesConfig.keywords
);

export default function InterventionsTechniquesPage() {
  return <ServicePage {...interventionsTechniquesConfig} />;
}
