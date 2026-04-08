import { MessageCircle, Award, Languages, Star } from "lucide-react";

const guidesTeamImage = "/lovable-uploads/guides-team.jpg";

const guides = [
  {
    name: "Nan Lady",
    role: "Guide francophone officiel",
    experience: "15 ans d'expérience",
    specialite: "Temples d'Angkor, histoire khmère",
    reviews: "71 avis 5★ TripAdvisor",
    whatsapp: "https://wa.me/+85512929279?text=Bonjour Lady, je souhaite organiser un tour au Cambodge",
  },
  {
    name: "Rin Sovan Rithy",
    role: "Guide francophone officiel",
    experience: "15 ans d'expérience",
    specialite: "Circuits culturels, régions méconnues",
    reviews: "Guide certifié Ministère",
    whatsapp: "https://wa.me/+85512929279?text=Bonjour, je souhaite organiser un tour au Cambodge avec Rin Sovan Rithy",
  },
];

const GuidesSection = () => {
  return (
    <section id="guides" className="py-16 sm:py-20 md:py-28 bg-espresso overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <p className="font-sans text-xs font-medium tracking-[0.2rem] uppercase text-white/40 mb-4">
            Votre équipe
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            Des guides qui<br />
            <span className="italic text-amber-200/90">connaissent chaque pierre</span>
          </h2>
          <div className="flex items-center gap-3 mt-6">
            <div className="h-px w-12 bg-white/20" />
          </div>
        </div>

        {/* Layout photo + guides */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Photo équipe */}
          <div className="relative">
            <img
              src={guidesTeamImage}
              alt="Nan Lady et Rin Sovan Rithy — Guides francophones au Cambodge"
              className="w-full rounded-2xl object-cover aspect-[4/3]"
            />
            {/* Badge social proof sur la photo */}
            <div className="absolute bottom-4 right-4 bg-cambodia-red text-white rounded-2xl px-4 py-3 shadow-elegant hidden sm:block">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                ))}
              </div>
              <div className="font-sans text-xs font-light opacity-80">71 avis TripAdvisor</div>
            </div>
          </div>

          {/* Cards guides */}
          <div className="flex flex-col gap-5">
            {guides.map((guide, i) => (
              <div key={i} className="bg-white/8 border border-white/12 rounded-2xl p-6 hover:bg-white/12 transition-colors">
                {/* Header guide */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-white mb-1">
                      {guide.name}
                    </h3>
                    <p className="font-sans text-white/60 text-sm font-light">{guide.role}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-cambodia-red/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-amber-300" />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="font-sans text-xs text-white/70 bg-white/8 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Languages className="w-3 h-3" /> Français · Khmer · Anglais
                  </span>
                  <span className="font-sans text-xs text-white/70 bg-white/8 px-3 py-1.5 rounded-full">
                    {guide.experience}
                  </span>
                  <span className="font-sans text-xs text-amber-300/80 bg-amber-300/10 px-3 py-1.5 rounded-full">
                    {guide.reviews}
                  </span>
                </div>

                <p className="font-sans text-sm text-white/50 font-light mb-5">
                  Spécialité : {guide.specialite}
                </p>

                {/* WhatsApp direct */}
                <a
                  href={guide.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors w-full justify-center sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contacter {guide.name.split(" ")[0]}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Citation */}
        <div className="border-t border-white/10 pt-10 text-center">
          <p className="font-display text-2xl sm:text-3xl font-light text-white/70 italic max-w-2xl mx-auto">
            "Notre objectif n'est pas de vous faire visiter le Cambodge,
            mais de vous le faire <span className="text-amber-200/90 not-italic font-medium">ressentir</span>."
          </p>
          <p className="font-sans text-white/30 text-sm mt-4">— Nan Lady & Rin Sovan Rithy</p>
        </div>

      </div>
    </section>
  );
};

export default GuidesSection;
