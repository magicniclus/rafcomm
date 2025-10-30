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
      title: "Rénovation Intérieure",
      subtitle: "Transformation complète de vos espaces",
      content: "Rénovation complète d'appartements et maisons : cloisons, sols, peinture, électricité. Nous transformons vos espaces selon vos besoins et votre style.",
      image: "/macon.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b"
    },
    {
      title: "Plomberie",
      subtitle: "Installation et réparation",
      content: "Installation et réparation de systèmes de plomberie : canalisations, robinetterie, chauffe-eau. Intervention rapide pour tous vos problèmes de plomberie.",
      image: "/plomberie.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2"
    },
    {
      title: "Salle de Bain",
      subtitle: "Aménagement sur mesure",
      content: "Création et rénovation de salles de bain complètes : carrelage, sanitaires, douche, baignoire. Design moderne et fonctionnel adapté à vos besoins.",
      image: "/extension.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997"
    },
    {
      title: "Carrelage",
      subtitle: "Pose professionnelle",
      content: "Pose de carrelage sol et mur, faïence, mosaïque. Travail soigné avec finitions parfaites pour tous types de revêtements céramiques.",
      image: "/facade.png",
      gradientFrom: "#fd7e14",
      gradientTo: "#ffc107"
    }
  ];



  const contactInfo = {
    address: "92150 Suresnes\nÎle-de-France\nRayon d'intervention : Hauts-de-Seine",
    phone: "07 58 85 02 26",
    email: "idarenovation2022@gmail.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=Suresnes,France&t=&z=12&ie=UTF8&iwloc=&output=embed"
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
        subtitle="Parlons de votre projet de rénovation intérieure, plomberie, salle de bain ou carrelage en Île-de-France"
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
