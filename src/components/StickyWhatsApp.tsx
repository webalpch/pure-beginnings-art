import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const StickyWhatsApp = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed && window.scrollY > window.innerHeight * 0.6) {
        setVisible(true);
      } else if (window.scrollY <= window.innerHeight * 0.6) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-espresso border-t border-white/10 px-4 py-3 sm:py-4">
        <div className="container mx-auto max-w-4xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-full bg-cambodia-red/20 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-amber-300" />
            </div>
            <div className="min-w-0">
              <p className="font-sans text-white text-sm font-medium leading-tight">
                Prêt à découvrir le Cambodge ?
              </p>
              <p className="font-sans text-white/50 text-xs hidden sm:block">
                Réponse garantie en moins d'1h · Devis gratuit et sans engagement
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://wa.me/+85512929279?text=Bonjour, je souhaite organiser un tour au Cambodge"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Nous écrire</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <button
              onClick={() => setDismissed(true)}
              className="p-1.5 rounded-full text-white/40 hover:text-white/70 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyWhatsApp;
