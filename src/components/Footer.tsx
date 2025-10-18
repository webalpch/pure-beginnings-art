import { Button } from "./ui/button";
import { MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Star, Heart } from "lucide-react";
const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/+85511926262?text=Bonjour, je souhaite obtenir des informations sur vos tours au Cambodge", "_blank");
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">RC</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Routes du Cambodge</h3>
                <p className="text-orange-400 text-xs sm:text-sm font-medium">Guides francophones experts</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed max-w-md">
              Depuis plus de 15 ans, nous vous accompagnons dans la découverte authentique 
              du Royaume khmer. Explorez le Cambodge autrement avec nos guides passionnés.
            </p>
            
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="sm:w-4 sm:h-4 text-yellow-400 fill-current" />)}
              </div>
              <span className="text-gray-300 text-xs sm:text-sm">
            </span>
            </div>
            
            <Button variant="whatsapp" onClick={openWhatsApp} className="mb-4 sm:mb-6 text-sm sm:text-base w-full sm:w-auto">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Contactez-nous sur WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-orange-400">Navigation</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-sm sm:text-base text-gray-300 hover:text-orange-400 transition-colors text-left">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('tours')} className="text-sm sm:text-base text-gray-300 hover:text-orange-400 transition-colors text-left">
                  Nos Tours
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('guides')} className="text-sm sm:text-base text-gray-300 hover:text-orange-400 transition-colors text-left">
                  Nos Guides
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-sm sm:text-base text-gray-300 hover:text-orange-400 transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-orange-400">Contact</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] text-orange-400 flex-shrink-0" />
                <div>
                  <div className="text-white text-sm sm:text-base font-medium">+855 12 345 6789</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Disponible 24h/24</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] text-orange-400 flex-shrink-0" />
                <div>
                  <div className="text-white text-sm sm:text-base font-medium break-all">info@routesducambodge.com</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Réponse sous 24h</div>
                </div>
              </div>
              
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px] text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white text-sm sm:text-base font-medium">Siem Reap, Cambodge</div>
                  <div className="text-gray-400 text-xs sm:text-sm">123 Pub Street, Old Market Area</div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-4 sm:mt-6">
              <h5 className="text-orange-400 text-sm sm:text-base font-semibold mb-2 sm:mb-3">Suivez-nous</h5>
              <div className="flex gap-2 sm:gap-3">
                <a href="https://www.facebook.com/share/1JPdFDDp5z/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a href="https://www.instagram.com/la_dy_1987?igsh=bjBqcDI2cXNyZXJz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a href="https://wa.me/+85511926262" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 whatsapp-button rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4">
            <div className="text-gray-300 text-xs sm:text-sm text-center md:text-left">
              © 2024 Routes du Cambodge. Tous droits réservés. 
              <span className="inline-flex items-center gap-1 ml-1 sm:ml-2">
                Fait avec <Heart size={12} className="sm:w-[14px] sm:h-[14px] text-red-500 fill-current animate-pulse" /> par <a href="https://webalp.ch/essu" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Webalp</a>
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;