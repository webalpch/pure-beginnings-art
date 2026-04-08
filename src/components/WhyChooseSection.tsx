import React from "react";
import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CountUpAnimation = ({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="font-display text-4xl sm:text-5xl font-light text-amber-100 mb-1">
      {count}{suffix}
    </div>
  );
};

const features = [
  {
    title: "Expérience locale authentique",
    description:
      "Découvrez le vrai Cambodge à travers les yeux de nos guides locaux passionnés qui vous feront vivre des moments uniques et mémorables.",
  },
  {
    title: "Guides francophones certifiés",
    description:
      "Nos guides sont officiellement certifiés par le ministère du Tourisme et parlent parfaitement français pour une communication fluide.",
  },
  {
    title: "Tours flexibles & personnalisés",
    description:
      "Chaque itinéraire est adapté selon vos envies, votre rythme et vos centres d'intérêt — du temple d'Angkor aux villages flottants.",
  },
  {
    title: "Confort et sérénité",
    description:
      "Transport climatisé, prise en charge complète et assistance 24/7 pour voyager en toute tranquillité au Cambodge.",
  },
  {
    title: "Accès privilégié",
    description:
      "Grâce à notre expertise locale, accédez à des lieux secrets et bénéficiez de tarifs préférentiels dans les meilleurs établissements.",
  },
  {
    title: "Disponibilité totale",
    description:
      "Service client réactif sur WhatsApp, réservation flexible et modifications possibles jusqu'à 24h avant le départ.",
  },
];

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 sm:py-20 md:py-28 bg-white reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <p className="font-sans text-xs font-medium tracking-[0.2rem] uppercase text-cambodia-red mb-4">
            Notre Engagement
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight max-w-2xl">
            Pourquoi choisir{" "}
            <span className="italic">Routes du Cambodge</span> ?
          </h2>
          <div className="flex items-center gap-3 mt-6">
            <div className="h-px w-12 bg-cambodia-red/40" />
            <span className="text-cambodia-red/40 text-xs tracking-[0.3rem]">✦</span>
          </div>
        </div>

        {/* Features Grid — style éditorial numéroté */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border-t border-border py-8 sm:py-10 pr-0 sm:pr-8 hover:bg-muted/30 transition-colors duration-300 px-4 sm:px-0"
            >
              <div className="font-display text-5xl sm:text-6xl font-light text-cambodia-red/15 leading-none mb-4 group-hover:text-cambodia-red/25 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-medium text-foreground mb-3 group-hover:text-cambodia-red transition-colors leading-snug">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 sm:mt-20 bg-espresso rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 15, suffix: "+", label: "Années d'expérience" },
              { end: 2000, suffix: "+", label: "Voyageurs satisfaits" },
              { end: 100, suffix: "%", label: "Recommandations" },
              { end: 50, suffix: "+", label: "Tours personnalisables" },
            ].map((stat, i) => (
              <div key={i}>
                <CountUpAnimation end={stat.end} suffix={stat.suffix} />
                <div className="font-sans text-white/60 text-xs sm:text-sm font-light tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
