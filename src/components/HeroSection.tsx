import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MessageCircle, Star, MapPin } from "lucide-react";
const heroImages = ["/lovable-uploads/0bd0a877-3243-4e06-8ed7-b03b007a97c2.png", "/lovable-uploads/bc6a5e1a-7176-48a9-a33e-984288ee5882.png", "/lovable-uploads/84f445a4-ada1-44fc-a776-9a57ebb16b67.png", "/lovable-uploads/0d32fde6-b124-4485-81d1-fa20c5887f49.png"];

// Preload hero images for faster display
const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    // Preload hero images immediately
    preloadImages(heroImages);
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);
  const openWhatsApp = () => {
    window.open("https://wa.me/+85511926262?text=Bonjour, je souhaite réserver un tour au Cambodge", "_blank");
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} style={{
      backgroundImage: `url(${image})`
    }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent"></div>
        </div>)}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Explorez le Cambodge
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
              autrement
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 drop-shadow-lg">
            Découvrez les merveilles du Royaume khmer avec nos guides passionnés. 
            Des temples d'Angkor aux marchés flottants, vivez une expérience authentique.
          </p>
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            <span className="text-white text-xs sm:text-sm">Siem Reap et l'ensemble du Cambodge</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button variant="hero" size="lg" onClick={openWhatsApp} className="text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 h-auto group w-full sm:w-auto">
              <MessageCircle className="w-6 h-6 mr-2 group-hover:animate-bounce" />
              Réservez votre tour
            </Button>
            <Button variant="temple" size="lg" onClick={() => document.getElementById('tours')?.scrollIntoView({
            behavior: 'smooth'
          })} className="text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto">
              Découvrir nos tours
            </Button>
          </div>
          
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};
export default HeroSection;