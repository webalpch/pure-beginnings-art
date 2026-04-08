import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { tours, Tour } from "@/components/ToursSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, MessageCircle, ArrowLeft, Star } from "lucide-react";

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tour: Tour | undefined = tours.find((t) => t.id === id);

  useEffect(() => {
    if (!tour) return;
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
    const prevOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "";
    const prevOgDesc = document.querySelector('meta[property="og:description"]')?.getAttribute("content") || "";

    document.title = `${tour.title} – Routes du Cambodge | Guide francophone`;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    const descText = `${tour.title}. Durée : ${tour.duration}. ${tour.highlights.slice(0, 3).join(", ")}. Guide francophone officiel certifié. Réservation via WhatsApp.`;
    setMeta('meta[name="description"]', "content", descText);
    setMeta('meta[property="og:title"]', "content", `${tour.title} – Routes du Cambodge`);
    setMeta('meta[property="og:description"]', "content", descText);

    return () => {
      document.title = prevTitle;
      setMeta('meta[name="description"]', "content", prevDesc);
      setMeta('meta[property="og:title"]', "content", prevOgTitle);
      setMeta('meta[property="og:description"]', "content", prevOgDesc);
    };
  }, [tour]);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold mb-4">Tour introuvable</h1>
            <Link to="/#tours">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux tours
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const openWhatsApp = () => {
    const message = `Bonjour, je souhaite réserver le tour "${tour.title}". Pouvez-vous me donner plus d'informations ?`;
    window.open(`https://wa.me/+85512929279?text=${encodeURIComponent(message)}`, "_blank");
  };

  const formatDescription = (description: string) => {
    return description.split("\n\n").map((paragraph, index) => {
      const p = paragraph.trim();
      if (!p) return null;

      if (p.length < 80 && p.endsWith(":")) {
        return (
          <h3 key={index} className="font-bold text-foreground text-lg mt-6 mb-2 text-cambodia-red border-l-4 border-cambodia-red pl-4">
            {p}
          </h3>
        );
      }
      if (p.startsWith("Jour ") || p.startsWith("J1 ") || p.startsWith("J2 ") || p.match(/^J\d+ /)) {
        const colonIdx = p.indexOf("–") !== -1 ? p.indexOf("–") : p.indexOf(":");
        const dayLabel = colonIdx > -1 ? p.slice(0, colonIdx + 1) : p.split("\n")[0];
        const dayContent = colonIdx > -1 ? p.slice(colonIdx + 1).trim() : p.split("\n").slice(1).join(" ");
        return (
          <div key={index} className="bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-lg border-l-4 border-cambodia-red">
            <div className="font-semibold text-cambodia-red mb-1">{dayLabel}</div>
            <p className="text-muted-foreground leading-relaxed">{dayContent}</p>
          </div>
        );
      }
      if (p.includes("€") || p.includes("Tarif")) {
        return (
          <div key={index} className="bg-secondary/30 p-4 rounded-lg border border-border">
            {p.split("\n").map((line, i) => (
              <div key={i} className={i > 0 ? "mt-1" : ""}>{line.trim()}</div>
            ))}
          </div>
        );
      }
      if (p.includes("Inclus :") || p.includes("Non inclus :")) return null;
      if (p.includes("Itinéraire ")) {
        return (
          <div key={index} className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
            <h6 className="font-bold text-amber-700 dark:text-amber-300 mb-2">{p.split("\n")[0]}</h6>
            <div className="space-y-1 text-sm text-muted-foreground">
              {p.split("\n").slice(1).map((line, i) => line.trim() && <p key={i}>{line.trim()}</p>)}
            </div>
          </div>
        );
      }
      return <p key={index} className="text-muted-foreground leading-relaxed">{p}</p>;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4 py-3 text-sm text-muted-foreground flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/#tours" className="hover:text-primary transition-colors">Tours</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">{tour.title}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="container mx-auto">
              <Badge variant="outline" className="mb-3 text-white border-white/40 bg-white/10 backdrop-blur-sm">
                Tour privé – Guide francophone
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {tour.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
          {/* Quick Info */}
          <div className="flex flex-wrap gap-3 mb-8 p-4 bg-secondary/30 rounded-2xl border border-border">
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-cambodia-red" />
              <span className="font-medium">{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users size={16} className="text-cambodia-red" />
              <span className="font-medium">{tour.participants}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-cambodia-red" />
              <span className="font-medium">Cambodge</span>
            </div>
            <div className="flex items-center gap-2 text-sm ml-auto">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="font-medium">5.0 / 5 – Guide certifié</span>
            </div>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-cambodia-red mb-8">
            {tour.price}
          </div>

          {/* CTA sticky top */}
          <div className="mb-8">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={openWhatsApp}
              className="w-full sm:w-auto text-base px-8 py-4 h-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Réserver ce tour via WhatsApp
            </Button>
          </div>

          {/* Description */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
              Programme du circuit
            </h2>
            <div className="space-y-4">
              {formatDescription(tour.description)}
            </div>
          </section>

          {/* Highlights */}
          <section className="mb-8 bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Points forts</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tour.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cambodia-red font-bold flex-shrink-0 mt-0.5">•</span>
                  <span className="text-muted-foreground text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Includes */}
          <section className="mb-8 bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Inclus dans ce tour</h2>
            <ul className="space-y-2">
              {tour.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className={`font-bold flex-shrink-0 mt-0.5 ${item.toLowerCase().startsWith("non inclus") ? "text-red-400" : "text-green-500"}`}>
                    {item.toLowerCase().startsWith("non inclus") ? "✗" : "✓"}
                  </span>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Schema.org TouristTrip JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "TouristTrip",
                "name": tour.title,
                "description": tour.highlights.join(". "),
                "touristType": "Tourisme culturel",
                "itinerary": {
                  "@type": "ItemList",
                  "name": tour.title,
                },
                "provider": {
                  "@type": "TouristInformationCenter",
                  "name": "Routes du Cambodge",
                  "telephone": "+85512929279",
                  "url": "https://routesducambodge.com"
                },
                "offers": {
                  "@type": "Offer",
                  "price": tour.price,
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock",
                  "url": `https://routesducambodge.com/tours/${tour.id}`
                }
              })
            }}
          />

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={openWhatsApp}
              className="flex-1 text-base py-4 h-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Réserver via WhatsApp
            </Button>
            <Link to="/#tours" className="flex-1">
              <Button variant="outline" size="lg" className="w-full py-4 h-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voir tous les tours
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TourDetail;
