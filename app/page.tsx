'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Débouchage Gaines Télécoms",
      subtitle: "Intervention technique spécialisée",
      content: "Débouchage professionnel de gaines télécommunications. Intervention rapide et efficace pour rétablir la circulation dans vos réseaux télécoms.",
      image: "/placo.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/debouchage-gaines"
    },
    {
      title: "Maintenance Télécoms",
      subtitle: "Entretien et réparation",
      content: "Maintenance préventive et curative de vos installations télécommunications. Intervention technique pour assurer la continuité de vos services.",
      image: "/plomberie.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/maintenance-telecoms"
    },
    {
      title: "Installation Réseau",
      subtitle: "Déploiement technique",
      content: "Installation et déploiement de réseaux télécommunications. Solutions techniques adaptées à vos besoins de connectivité.",
      image: "/maison-work.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/installation-reseau"
    },
    {
      title: "Interventions Techniques",
      subtitle: "Expertise spécialisée",
      content: "Interventions techniques spécialisées dans le domaine des télécommunications. Service professionnel et réactif pour tous vos besoins techniques.",
      image: "/mur.png",
      gradientFrom: "#fd7e14",
      gradientTo: "#ffc107",
      href: "/services/interventions-techniques"
    }
  ];



  const contactInfo = {
    address: "Paris (75015)\nÎle-de-France\nRayon d'intervention : Paris et banlieue",
    phone: "07 83 49 01 36",
    email: "contact@rafcom.net",
    mapEmbedUrl: "https://maps.google.com/maps?q=Paris+75015,France&t=&z=12&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      <ServicesSection id="services" cards={servicesData} />
      <ProjectGallery id="realisations" config={config.gallery} />
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection config={config.team} />
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de votre projet de débouchage de gaines télécommunications ou d'interventions techniques en Île-de-France"
        contactInfo={contactInfo} 
      />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
