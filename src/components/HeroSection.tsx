import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MessageCircle, Star, Award, Shield } from "lucide-react";

const heroImages = [
  "/lovable-uploads/0bd0a877-3243-4e06-8ed7-b03b007a97c2.png",
  "/lovable-uploads/bc6a5e1a-7176-48a9-a33e-984288ee5882.png",
  "/lovable-uploads/84f445a4-ada1-44fc-a776-9a57ebb16b67.png",
  "/lovable-uploads/0d32fde6-b124-4485-81d1-fa20c5887f49.png",
];

const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach((url, index) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    if (index === 0) link.setAttribute("fetchpriority", "high");
    document.head.appendChild(link);
  });
};

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    preloadImages(heroImages);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/+85512929279?text=Bonjour, je souhaite réserver un tour au Cambodge", "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Overlay dramatique — plus sombre vers le bas */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
        <div className="max-w-5xl mx-auto">

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            <div className="flex items-center gap-1.5 bg-white/12 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-white/90 text-xs font-medium">5.0 · 71 avis TripAdvisor</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/12 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5">
              <Award className="w-3 h-3 text-amber-400" />
              <span className="text-white/90 text-xs font-medium">Certifié Ministère du Tourisme</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/12 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5">
              <Shield className="w-3 h-3 text-emerald-400" />
              <span className="text-white/90 text-xs font-medium">15 ans d'expérience</span>
            </div>
          </div>

          {/* Main Heading — Cormorant Garamond */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-[0.9] tracking-tight mb-6 sm:mb-8">
            <span className="block">Le Cambodge</span>
            <span className="block italic font-light text-amber-200/90">authentique</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mt-2 sm:mt-3 text-white/80">
              avec un guide qui vous ressemble
            </span>
          </h1>

          {/* Khmer divider */}
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="h-px w-16 bg-white/30" />
            <span className="text-amber-300/60 text-xs tracking-[0.4rem]">✦ ✦ ✦</span>
            <div className="h-px w-16 bg-white/30" />
          </div>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Depuis 15 ans, plus de 2 000 voyageurs nous ont fait confiance pour
            découvrir Angkor, le Mékong et le vrai Cambodge — en privé, à votre rythme.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              onClick={openWhatsApp}
              className="text-base sm:text-lg px-7 sm:px-10 py-3.5 h-auto group w-full sm:w-auto font-sans font-medium tracking-wide"
            >
              <MessageCircle className="w-5 h-5 mr-2.5 group-hover:animate-bounce" />
              Réservez votre tour
            </Button>
            <Button
              variant="temple"
              size="lg"
              onClick={() => document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" })}
              className="text-base sm:text-lg px-7 sm:px-10 py-3.5 h-auto w-full sm:w-auto font-sans font-medium tracking-wide border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
            >
              Découvrir nos tours
            </Button>
          </div>

        </div>
      </div>

      {/* Fade vers le fond ivoire */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[hsl(35,40%,96%)] to-transparent" />

      {/* Indicateurs de slide */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-0.5 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
