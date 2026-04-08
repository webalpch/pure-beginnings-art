import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, MessageCircle, ChevronDown, Star, BookOpen, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/saveurs-cambodge-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const explorerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le dropdown si clic en dehors
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (explorerRef.current && !explorerRef.current.contains(e.target as Node)) {
        setIsExplorerOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    setIsExplorerOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+85512929279?text=Bonjour, je souhaite réserver un tour au Cambodge", "_blank");
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path?: string) =>
    cn(
      "text-sm font-medium transition-colors relative",
      path && isActive(path)
        ? "text-cambodia-red after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-cambodia-red after:rounded-full"
        : "text-foreground hover:text-cambodia-red"
    );

  const explorerLinks = [
    { to: "/avis", icon: <Star size={14} className="text-yellow-500" />, label: "Avis clients", sub: "71 avis 5 étoiles" },
    { to: "/blog", icon: <BookOpen size={14} className="text-royal-blue" />, label: "Blog voyage", sub: "Conseils & inspirations" },
    { to: "/about", icon: <Info size={14} className="text-green-600" />, label: "À propos", sub: "Notre histoire & guides" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-border/60" : "bg-white/90 backdrop-blur-sm border-b border-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Routes du Cambodge"
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-10 sm:h-11" : "h-12 sm:h-14"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button onClick={() => handleNavigation("hero")} className={cn(navLinkClass(), "px-3 py-2")}>
              Accueil
            </button>
            <button onClick={() => handleNavigation("tours")} className={cn(navLinkClass(), "px-3 py-2")}>
              Tours
            </button>
            <button onClick={() => handleNavigation("guides")} className={cn(navLinkClass(), "px-3 py-2")}>
              Guides
            </button>
            <button onClick={() => handleNavigation("contact")} className={cn(navLinkClass(), "px-3 py-2")}>
              Contact
            </button>

            {/* Dropdown Explorer */}
            <div className="relative" ref={explorerRef}>
              <button
                onClick={() => setIsExplorerOpen(!isExplorerOpen)}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
                  isExplorerOpen ? "text-cambodia-red" : "text-foreground hover:text-cambodia-red"
                )}
              >
                Explorer
                <ChevronDown size={14} className={cn("transition-transform duration-200", isExplorerOpen && "rotate-180")} />
              </button>

              {/* Dropdown menu */}
              <div className={cn(
                "absolute top-full right-0 mt-2 w-52 bg-white rounded-2xl shadow-elegant border border-border overflow-hidden transition-all duration-200 origin-top-right",
                isExplorerOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
              )}>
                {explorerLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsExplorerOpen(false)}
                    className={cn(
                      "flex items-start gap-3 px-4 py-3 hover:bg-secondary/60 transition-colors border-b border-border last:border-0",
                      isActive(link.to) && "bg-secondary/40"
                    )}
                  >
                    <div className="mt-0.5 flex-shrink-0">{link.icon}</div>
                    <div>
                      <div className={cn("text-sm font-semibold", isActive(link.to) ? "text-cambodia-red" : "text-foreground")}>
                        {link.label}
                      </div>
                      <div className="text-xs text-muted-foreground">{link.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="ml-2 flex items-center gap-3">
              {/* Social proof mini badge */}
              <div className="hidden xl:flex items-center gap-1.5 text-xs text-muted-foreground">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-[10px]">★</span>
                  ))}
                </div>
                <span className="font-sans font-medium text-foreground">71 avis</span>
                <span>TripAdvisor</span>
              </div>
              <Button variant="whatsapp" size="sm" onClick={openWhatsApp} className="flex items-center gap-2 px-4">
                <MessageCircle size={16} />
                Réserver
              </Button>
            </div>
          </div>

          {/* Mobile: WhatsApp compact + burger */}
          <div className="lg:hidden flex items-center gap-2">
            <Button variant="whatsapp" size="sm" onClick={openWhatsApp} className="h-9 w-9 p-0 rounded-full">
              <MessageCircle size={18} />
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col py-4 border-t border-border gap-1">
            {[
              { label: "Accueil", action: () => handleNavigation("hero") },
              { label: "Tours", action: () => handleNavigation("tours") },
              { label: "Guides", action: () => handleNavigation("guides") },
              { label: "Contact", action: () => handleNavigation("contact") },
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-left text-foreground hover:text-cambodia-red hover:bg-secondary/50 transition-colors font-medium py-3 px-3 rounded-lg"
              >
                {item.label}
              </button>
            ))}

            <div className="border-t border-border mt-2 pt-2">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide px-3 py-1">Explorer</p>
              {explorerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 py-3 px-3 rounded-lg transition-colors",
                    isActive(link.to)
                      ? "text-cambodia-red bg-secondary/40 font-semibold"
                      : "text-foreground hover:text-cambodia-red hover:bg-secondary/50 font-medium"
                  )}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-3 px-1">
              <Button variant="whatsapp" onClick={openWhatsApp} className="w-full flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Réserver via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
