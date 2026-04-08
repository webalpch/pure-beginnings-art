import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const featuredTestimonials = [
  {
    nom: "Gab DI",
    origine: "France",
    type: "En famille",
    date: "Février 2025",
    titre: "Le Cambodge c'est Lady !!",
    commentaire:
      "Lady est une personne de grand cœur, de grande patience. Il aime son pays et sait toujours s'adapter à nos envies. Il trouve toujours une solution à tout. Encore merci Lady... sans toi notre voyage au Cambodge n'aurait pas été le même.",
    initiales: "GD",
  },
  {
    nom: "Michel M",
    origine: "France",
    type: "Entre amis",
    date: "Février 2025",
    titre: "Expérience inoubliable",
    commentaire:
      "Nous avons adoré les tours avec notre guide Lady. Une expérience inoubliable pour découvrir la vie des Cambodgiens. Entre visites de grands sites et la vie des fermiers. Notre guide nous a permis de mieux comprendre l'histoire et la vie des Cambodgiens.",
    initiales: "MM",
  },
  {
    nom: "Resort23880710034",
    origine: "Montréal, Canada",
    type: "Entre amis",
    date: "Novembre 2024",
    titre: "Guide fantastique",
    commentaire:
      "Passionné par l'histoire de son pays, Lady a su nous conquérir un temple à la fois. Gentil, patient, drôle, disponible, il trouve des solutions à tous les problèmes. Je les recommande définitivement.",
    initiales: "RC",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 sm:py-20 md:py-28 bg-[hsl(30,28%,90%)] reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <p className="font-sans text-xs font-medium tracking-[0.2rem] uppercase text-cambodia-red mb-4">
            Ils nous ont fait confiance
          </p>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight">
              Ce que disent<br />
              <span className="italic">nos voyageurs</span>
            </h2>
            <div className="flex flex-col items-end gap-1 pt-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <span className="font-sans text-sm text-muted-foreground">
                <strong className="text-foreground">71 avis 5 étoiles</strong> sur TripAdvisor
              </span>
            </div>
          </div>
          <div className="h-px w-full bg-border mt-8" />
        </div>

        {/* Citations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {featuredTestimonials.map((t, i) => (
            <div
              key={i}
              className="group py-8 sm:py-10 md:border-r border-border last:border-r-0 md:pr-8 md:pl-8 first:pl-0 last:pr-0 border-b md:border-b-0 last:border-b-0"
            >
              {/* Grand guillemet */}
              <div className="font-display text-7xl sm:text-8xl font-light text-cambodia-red/20 leading-none mb-4 select-none group-hover:text-cambodia-red/35 transition-colors">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Comment */}
              <p className="font-sans text-sm sm:text-base text-foreground/80 leading-relaxed font-light italic mb-6 flex-1">
                {t.commentaire}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border/60">
                <div className="w-9 h-9 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-semibold font-sans">{t.initiales}</span>
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-foreground">{t.nom}</div>
                  <div className="font-sans text-xs text-muted-foreground font-light">
                    {t.origine} · {t.type} · {t.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <Link
            to="/avis"
            className="font-sans inline-flex items-center gap-2 text-cambodia-red font-medium hover:gap-3 transition-all text-sm sm:text-base"
          >
            Lire les 71 avis complets sur TripAdvisor
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
