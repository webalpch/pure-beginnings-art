import { Button } from "./ui/button";
import { Star, Award, Languages, Heart, MessageCircle } from "lucide-react";
const guidesTeamImage = "/lovable-uploads/guides-team.jpg";
const GuidesSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/+85511926262?text=Bonjour, je souhaite en savoir plus sur vos guides francophones", "_blank");
  };
  return <section id="guides" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-hero">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2">
            Rencontrez vos <span className="text-yellow-400">Guides Passionnés</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-3 sm:px-4">
            Rin Sovan Rithy et Nan Lady, vos guides francophones expérimentés, vous feront découvrir 
            le Cambodge authentique avec passion et expertise.
          </p>
        </div>

        {/* Guide Team Presentation */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-10 md:mb-12 lg:mb-16 hover:bg-white/15 transition-all duration-300">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <img 
                src={guidesTeamImage} 
                alt="Nan Lady et Rin Sovan Rithy - Guides francophones" 
                className="w-full max-w-2xl rounded-xl sm:rounded-2xl object-cover border-2 sm:border-4 border-white/30 shadow-elegant" 
              />
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              Nan Lady & Rin Sovan Rithy
            </h3>
            <p className="text-yellow-400 font-semibold mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl">Vos Guides Francophones Passionnés</p>
            
            <p className="text-white/90 mb-6 sm:mb-7 md:mb-8 leading-relaxed text-sm sm:text-base md:text-lg max-w-3xl px-2">
              Avec plus de <strong>15 années d'expérience chacun</strong>, Nan Lady et Rin Sovan Rithy 
              vous accompagnent pour découvrir le Cambodge authentique. Experts des temples d'Angkor, 
              passionnés d'histoire et de culture khmère, ils vous feront vivre des expériences 
              inoubliables, que ce soit dans les sites emblématiques ou hors des sentiers battus.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl">
              <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-white/90">
                <Languages size={20} className="sm:w-6 sm:h-6 text-yellow-400" />
                <span className="font-semibold text-xs sm:text-sm md:text-base">Français, Khmer, Anglais</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-white/90">
                <Award size={20} className="sm:w-6 sm:h-6 text-yellow-400" />
                <span className="font-semibold text-xs sm:text-sm md:text-base">Guides Certifiés</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-white/90">
                <Heart size={20} className="sm:w-6 sm:h-6 text-yellow-400" />
                <span className="font-semibold text-xs sm:text-sm md:text-base">Passion Authentique</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={openWhatsApp} className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto bg-white text-royal-blue hover:bg-white/90 w-full sm:w-auto">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Rencontrer nos guides
          </Button>
        </div>
      </div>
    </section>;
};
export default GuidesSection;