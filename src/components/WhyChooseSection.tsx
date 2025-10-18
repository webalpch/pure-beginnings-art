import { Badge } from "./ui/badge";
import { Shield, Users, MapPin, Clock, Sparkles, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const CountUpAnimation = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Animation rapide avec easing
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1 sm:mb-2">
      {count}{suffix}
    </div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Expérience locale authentique",
      description: "Découvrez le vrai Cambodge à travers les yeux de nos guides locaux passionnés qui vous feront vivre des moments uniques."
    },
    {
      icon: Award,
      title: "Guides francophones certifiés",
      description: "Nos guides sont officiellement certifiés et parlent parfaitement français pour une communication fluide et des explications détaillées."
    },
    {
      icon: Users,
      title: "Tours flexibles et personnalisés",
      description: "Chaque itinéraire est adaptable selon vos envies, votre rythme et vos centres d'intérêt pour une expérience sur-mesure."
    },
    {
      icon: Shield,
      title: "Confort et sérénité",
      description: "Transport climatisé, prise en charge complète et assistance 24/7 pour voyager en toute tranquillité au Cambodge."
    },
    {
      icon: MapPin,
      title: "Accès privilégié",
      description: "Grâce à notre expertise locale, accédez à des lieux secrets et bénéficiez de tarifs préférentiels dans les meilleurs établissements."
    },
    {
      icon: Clock,
      title: "Disponibilité totale",
      description: "Service client réactif sur WhatsApp, réservation flexible et modifications possibles jusqu'à 24h avant le départ."
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10 md:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm text-royal-blue border-royal-blue">
            Notre Engagement
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 px-2">
            Pourquoi choisir <span className="text-cambodia-red">Routes du Cambodge</span> ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-3 sm:px-4">
            Depuis plus de 15 ans, nous accompagnons les voyageurs dans la découverte 
            authentique du Royaume khmer avec professionnalisme et passion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border border-border hover:border-royal-blue/30"
              >
                <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-hero rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 group-hover:text-royal-blue transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-12 md:mt-14 lg:mt-16 bg-gradient-hero rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div>
              <CountUpAnimation end={15} suffix="+" />
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Années d'expérience</div>
            </div>
            <div>
              <CountUpAnimation end={2000} suffix="+" />
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Voyageurs satisfaits</div>
            </div>
            <div>
              <CountUpAnimation end={100} suffix="%" />
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Recommandations</div>
            </div>
            <div>
              <CountUpAnimation end={50} suffix="+" />
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Tours 100% personnalisable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;