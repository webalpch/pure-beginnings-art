import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Award, Star, Heart, Users, MapPin } from "lucide-react";

const About = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "À propos – Routes du Cambodge | Guides francophones depuis 15 ans";
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl?.getAttribute("content") || "";
    descEl?.setAttribute("content", "Découvrez l'histoire de Routes du Cambodge. Rin Sovan Rithy (La Dong) et Nan Lady, guides francophones certifiés depuis plus de 15 ans à Siem Reap. Tours privés et authentiques.");
    return () => {
      document.title = prevTitle;
      descEl?.setAttribute("content", prevDesc);
    };
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/+85512929279?text=Bonjour, je souhaite en savoir plus sur vos guides et vos tours au Cambodge", "_blank");
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
            <span className="text-foreground font-medium">À propos</span>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-hero py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-4 text-white border-white/30 bg-white/10 backdrop-blur-sm">
              Notre histoire
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              À propos de <span className="text-yellow-400">Routes du Cambodge</span>
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Depuis plus de 15 ans, nous vous faisons découvrir le vrai Cambodge — celui que les guides touristiques ne montrent pas.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">

          {/* Notre histoire */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Notre histoire</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Routes du Cambodge est née d'une passion profonde pour le patrimoine khmer et d'un désir de partager les merveilles du Cambodge avec les voyageurs francophones du monde entier.
              </p>
              <p>
                Fondée par <strong className="text-foreground">Rin Sovan Rithy (La Dong) et Nan Lady</strong>, deux guides certifiés par le Ministère du Tourisme du Cambodge, notre agence s'est construite sur des valeurs simples : authenticité, proximité et passion.
              </p>
              <p>
                Ce qui nous distingue des circuits de masse ? Chaque tour est <strong className="text-foreground">privé et personnalisé</strong>. Vous ne partagez pas votre guide avec des dizaines d'inconnus. Votre voyage, votre rythme, votre expérience.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <Award className="w-6 h-6 text-cambodia-red" />, value: "15+", label: "Ans d'expérience" },
              { icon: <Star className="w-6 h-6 text-yellow-400" />, value: "5.0", label: "Note moyenne (71 avis)" },
              { icon: <Users className="w-6 h-6 text-royal-blue" />, value: "2 000+", label: "Voyageurs accompagnés" },
              { icon: <MapPin className="w-6 h-6 text-green-500" />, value: "16", label: "Circuits disponibles" },
            ].map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-4 text-center">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Les guides */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Vos guides</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">LD</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Rin Sovan Rithy (La Dong)</h3>
                    <p className="text-sm text-cambodia-red">Guide certifié – Siem Reap</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Spécialiste des temples d'Angkor, La Dong vous guide à travers les merveilles de l'architecture khmère avec une connaissance encyclopédique de l'histoire et de la culture cambodgienne.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Français</Badge>
                  <Badge variant="secondary">Anglais</Badge>
                  <Badge variant="secondary">Khmer</Badge>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">NL</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Nan Lady</h3>
                    <p className="text-sm text-cambodia-red">Guide certifiée – Siem Reap</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Passionnée par la vie locale et les rencontres authentiques, Lady vous emmène à la découverte du Cambodge hors des sentiers battus — villages flottants, marchés locaux, campagne cambodgienne.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Français</Badge>
                  <Badge variant="secondary">Anglais</Badge>
                  <Badge variant="secondary">Khmer</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Nos valeurs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Nos valeurs</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-cambodia-red" />,
                  title: "Authenticité",
                  desc: "Nous vous montrons le vrai Cambodge, loin des circuits de masse.",
                },
                {
                  icon: <Award className="w-8 h-8 text-royal-blue" />,
                  title: "Excellence",
                  desc: "Guides certifiés, équipements de qualité, services irréprochables.",
                },
                {
                  icon: <Users className="w-8 h-8 text-green-600" />,
                  title: "Proximité",
                  desc: "Tours privés uniquement. Votre voyage, à votre rythme.",
                },
              ].map((val, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-3">{val.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{val.title}</h3>
                  <p className="text-muted-foreground text-sm">{val.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-hero rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Prêt à découvrir le Cambodge ?</h2>
            <p className="text-white/90 mb-6">Contactez-nous pour créer votre voyage sur-mesure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" onClick={openWhatsApp} className="px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                Nous contacter sur WhatsApp
              </Button>
              <Link to="/#tours">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
                  Voir nos tours
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;
