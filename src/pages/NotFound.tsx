import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, MessageCircle, MapPin } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-4 text-center">
      {/* Logo / Brand */}
      <div className="mb-8">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-8 h-8 text-yellow-400" />
        </div>
        <p className="text-white/80 text-sm font-medium tracking-widest uppercase">Routes du Cambodge</p>
      </div>

      {/* 404 */}
      <h1 className="text-8xl sm:text-9xl font-bold text-white/10 leading-none select-none mb-0">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold text-white -mt-4 mb-4">
        Page introuvable
      </h2>
      <p className="text-white/80 text-base sm:text-lg max-w-md mb-8">
        La page que vous cherchez n'existe pas ou a été déplacée. Explorons le Cambodge autrement !
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <Link to="/">
          <Button size="lg" className="bg-white text-royal-blue hover:bg-white/90 font-semibold px-6">
            <Home className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </Link>
        <Link to="/#tours">
          <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voir nos tours
          </Button>
        </Link>
        <Button
          size="lg"
          variant="whatsapp"
          onClick={() => window.open("https://wa.me/+85512929279?text=Bonjour, je cherche des informations sur vos tours au Cambodge", "_blank")}
          className="px-6"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Nous contacter
        </Button>
      </div>

      {/* Quick links */}
      <div className="text-white/60 text-sm">
        <span>Liens utiles : </span>
        <Link to="/" className="text-white/80 hover:text-white underline underline-offset-2 mx-1">Accueil</Link>
        <span>·</span>
        <Link to="/about" className="text-white/80 hover:text-white underline underline-offset-2 mx-1">À propos</Link>
        <span>·</span>
        <Link to="/avis" className="text-white/80 hover:text-white underline underline-offset-2 mx-1">Avis clients</Link>
        <span>·</span>
        <Link to="/#contact" className="text-white/80 hover:text-white underline underline-offset-2 mx-1">Contact</Link>
      </div>
    </div>
  );
};

export default NotFound;
