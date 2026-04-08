import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import WhyChooseSection from "@/components/WhyChooseSection";
import ToursSection from "@/components/ToursSection";
import GuidesSection from "@/components/GuidesSection";
import PhotoGallery from "@/components/PhotoGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 1. Hero — premier impact visuel + preuve sociale immédiate */}
        <HeroSection />
        {/* 2. Trust bar — chiffres clés rassurants juste sous le hero */}
        <TrustBar />
        {/* 3. Pourquoi nous — rassurer avant de vendre */}
        <WhyChooseSection />
        {/* 4. Tours — présentation de l'offre */}
        <ToursSection />
        {/* 5. Guides — mettre un visage humain sur l'offre */}
        <GuidesSection />
        {/* 6. Galerie — preuves visuelles */}
        <PhotoGallery />
        {/* 7. Avis clients — preuve sociale avant le CTA final */}
        <TestimonialsSection />
        {/* 8. FAQ — lever les derniers doutes */}
        <FAQSection />
        {/* 9. Contact — CTA final avec badges de garantie */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
