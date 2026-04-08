import { useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
const avisData = [{
  id: 1,
  nom: "Phil",
  origine: "France",
  note: 5,
  titre: "Tout était parfait",
  date: "Avril 2025",
  type: "En couple",
  commentaire: "Tout s'est très bien passé. Notre guide Lady était très intéressant dans ses commentaires et très serviable du début à la fin de notre séjour.",
  photos: ["/lovable-uploads/30/f3/fa/25/caption.jpg", "/lovable-uploads/30/f3/fa/24/caption.jpg", "/lovable-uploads/30/f3/fa/23/caption.jpg"]
}, {
  id: 2,
  nom: "Isabelle L",
  origine: "Boulogne-billancourt, France",
  note: 5,
  titre: "Très bonne expérience et guide sympa en français à Angkor",
  date: "Février 2025",
  type: "En famille",
  commentaire: "Très bonne expérience avec notre guide francophone So. Beaucoup d'informations pour Angkor Vat, Ta Prohm et Angkor Thom. So connaît tous les bons spots pour les photos et pour le lever du soleil.",
  photos: []
}, {
  id: 3,
  nom: "Gab DI",
  origine: "France",
  note: 5,
  titre: "Le Cambodge c'est Lady !!",
  date: "Février 2025",
  type: "En famille",
  commentaire: "Lady est une personne de grand cœur, de grande patience.. il aime son pays et sait toujours s'adapter à nos envies (ce qu'on aime ou pas).. il trouve toujours une solution à tout.. Encore merci Lady... sans toi notre voyage au Cambodge n'aurait pas été le même. Beaucoup d'émotions de vous quitter 😘😘😘😘",
  photos: ["/lovable-uploads/2f/29/34/c8/caption.jpg", "/lovable-uploads/2f/29/34/c7/caption.jpg"]
}, {
  id: 4,
  nom: "Michel M",
  origine: "France",
  note: 5,
  titre: "Expérience au Cambodge",
  date: "Février 2025",
  type: "Entre amis",
  commentaire: "Nous avons adoré les tours avec notre guide Lady. Une expérience inoubliable pour découvrir la vie des Cambodgiens. Entre visites de grands sites et la vie des fermiers. Une découverte culinaire extraordinaire. Notre guide nous a permis de mieux comprendre l'histoire et la vie des Cambodgiens.",
  photos: []
}, {
  id: 5,
  nom: "Discover07978994299",
  origine: "Canada",
  note: 5,
  titre: "Recommandé !",
  date: "Février 2025",
  type: "En couple",
  commentaire: "Nous avons pris 2 jours avec Lady pour faire le village flottant et les 3 temples principaux. Très bon programme, très bon timing, échanges intéressants, bienveillance. Recommandé ++++",
  photos: []
}, {
  id: 6,
  nom: "Resort23880710034",
  origine: "Montréal, Canada",
  note: 5,
  titre: "Trésors du Cambodge",
  date: "Novembre 2024",
  type: "Entre amis",
  commentaire: "Passionné par l'histoire de son pays, Lady a su nous conquérir un temple à la fois et encore plus. Gentil, patient, drôle, disponible, il trouve des solutions à tous les problèmes. Lady était un guide fantastique et le chauffeur était très attentionné. Je les recommande définitivement.",
  photos: []
}, {
  id: 7,
  nom: "Sightsee39128961953",
  origine: "Saint Jérôme, Canada",
  note: 5,
  titre: "Voyage historique du Cambodge",
  date: "Novembre 2024",
  type: "Entre amis",
  commentaire: "Nous avons passé deux belles journées à Siem Reap avec Sourire Khmer. Le guide qui parle bien français et anglais était très généreux et aussi très explicite, il connaît vraiment l'histoire de son pays. Merci beaucoup, Lady.",
  photos: []
}, {
  id: 8,
  nom: "Léa",
  origine: "France",
  note: 5,
  titre: "Vacances Siem Reap 2024",
  date: "Septembre 2024",
  type: "En famille",
  commentaire: "Je tiens à vous remercier énormément pour l'incroyable visite que vous m'avez fait découvrir à Siem Reap. Grâce à vous, j'ai pu non seulement découvrir la beauté majestueuse des temples, mais aussi plonger au cœur de la culture cambodgienne. Votre enthousiasme et vos explications détaillées ont rendu cette expérience encore plus enrichissante. J'ai particulièrement apprécié notre moment de découverte des gâteaux cambodgiens, une délicieuse touche gourmande qui restera un souvenir mémorable.",
  photos: []
}, {
  id: 9,
  nom: "Seaside01767724235",
  origine: "France",
  note: 5,
  titre: "Super séjour au Cambodge",
  date: "Octobre 2024",
  type: "En couple",
  commentaire: "Nous avons passé un super moment au Cambodge grâce à Lady, aussi bon guide que photographe ! Nous espérons pouvoir revenir très bientôt !",
  photos: []
}, {
  id: 10,
  nom: "Explorer11329466091",
  origine: "France",
  note: 5,
  titre: "Guide Lady",
  date: "Juillet 2024",
  type: "En famille",
  commentaire: "Lady était un guide parfait ! Il parle parfaitement français et anglais. C'était magnifique ! Toujours là avec une petite blague et sa passion pour la culture locale.",
  photos: []
}];
const Avis = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDescription = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
    const prevOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "";
    const prevOgDesc = document.querySelector('meta[property="og:description"]')?.getAttribute("content") || "";

    document.title = "Avis clients – Routes du Cambodge | 71 avis 5 étoiles";

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", "Découvrez les avis de nos voyageurs satisfaits. 71 avis 5 étoiles sur nos tours avec guides francophones au Cambodge. Angkor, Mekong, Phnom Penh.");
    setMeta('meta[property="og:title"]', "content", "Avis clients – Routes du Cambodge | 71 avis 5 étoiles");
    setMeta('meta[property="og:description"]', "content", "71 avis 5 étoiles de voyageurs français ayant découvert le Cambodge avec nos guides francophones. Angkor Wat, Mekong, Phnom Penh.");

    // Schema.org Reviews JSON-LD
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Routes du Cambodge",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "71",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": avisData.slice(0, 5).map((avis) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": avis.nom },
        "reviewRating": { "@type": "Rating", "ratingValue": String(avis.note), "bestRating": "5" },
        "reviewBody": avis.commentaire,
        "datePublished": avis.date,
        "name": avis.titre,
      })),
    };
    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.id = "schema-reviews";
    scriptEl.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptEl);

    return () => {
      document.title = prevTitle;
      setMeta('meta[name="description"]', "content", prevDescription);
      setMeta('meta[property="og:title"]', "content", prevOgTitle);
      setMeta('meta[property="og:description"]', "content", prevOgDesc);
      document.getElementById("schema-reviews")?.remove();
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({
      length: 5
    }, (_, i) => <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />);
  };
  return <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Avis de nos clients
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Découvrez ce que nos voyageurs pensent de leurs expériences avec Cambodge Authentique. 
              Plus de 71 avis avec une note moyenne de 5/5 étoiles sur TripAdvisor.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5.0/5</div>
                <div className="flex justify-center mb-2">{renderStars(5)}</div>
                <div className="text-sm text-muted-foreground">Note moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">71+</div>
                <div className="text-sm text-muted-foreground">Avis clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
              </div>
                <div className="text-sm text-muted-foreground">
              </div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avisData.map(avis => <Card key={avis.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{avis.nom}</h3>
                      <p className="text-sm text-muted-foreground">{avis.origine}</p>
                    </div>
                    <div className="flex">{renderStars(avis.note)}</div>
                  </div>
                  
                  <h4 className="font-semibold text-primary mb-2 line-clamp-2">
                    {avis.titre}
                  </h4>
                  
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span>{avis.date}</span>
                    <span>•</span>
                    <span>{avis.type}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-1 h-6 w-6 text-primary/30" />
                    <p className="text-sm text-muted-foreground leading-relaxed pl-6 line-clamp-4">
                      {avis.commentaire}
                    </p>
                  </div>
                  
                </CardContent>
              </Card>)}
          </div>

          {/* TripAdvisor Link */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Consultez tous nos avis sur TripAdvisor
            </p>
            <a href="https://www.tripadvisor.co.uk/Attraction_Review-g297390-d15072032-Reviews-Sourire_Khmer-Siem_Reap_Siem_Reap_Province.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Voir tous les avis sur TripAdvisor
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>;
};
export default Avis;