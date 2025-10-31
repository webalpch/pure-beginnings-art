import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/saveurs-cambodge-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, on y va d'abord
      window.location.href = `/#${sectionId}`;
    } else {
      // Si on est sur la page d'accueil, on fait juste le scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+85511926262?text=Bonjour, je souhaite réserver un tour au Cambodge", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-0.5 sm:py-1">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Saveurs du Cambodge Logo" 
              className="h-24 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button 
              onClick={() => handleNavigation('hero')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => handleNavigation('tours')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Tours
            </button>
            <button 
              onClick={() => handleNavigation('guides')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Guides
            </button>
            <button 
              onClick={() => handleNavigation('gallery')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Galerie Photo
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Link 
              to="/avis"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Avis
            </Link>
            <Button variant="whatsapp" onClick={openWhatsApp} className="flex items-center gap-2">
              <MessageCircle size={18} />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col space-y-3 sm:space-y-4 py-3 sm:py-4 border-t border-border">
            <button 
              onClick={() => handleNavigation('hero')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Accueil
            </button>
            <button 
              onClick={() => handleNavigation('tours')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Tours
            </button>
            <button 
              onClick={() => handleNavigation('guides')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Guides
            </button>
            <button 
              onClick={() => handleNavigation('gallery')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Galerie Photo
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Contact
            </button>
            <Link 
              to="/avis"
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 block"
            >
              Avis
            </Link>
            <Button variant="whatsapp" onClick={openWhatsApp} className="w-full flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Réserver via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;