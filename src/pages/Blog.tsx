import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

const Blog = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl?.getAttribute("content") || "";
    document.title = "Blog – Conseils voyage Cambodge | Routes du Cambodge";
    descEl?.setAttribute("content", "Conseils pratiques pour visiter le Cambodge : temples d'Angkor, meilleure saison, villages flottants, guide francophone. Tous nos articles de voyage.");
    return () => {
      document.title = prevTitle;
      descEl?.setAttribute("content", prevDesc);
    };
  }, []);

  const categories = [...new Set(blogArticles.map((a) => a.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4 py-3 text-sm text-muted-foreground flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Blog</span>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-hero py-14 sm:py-18">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-4 text-white border-white/30 bg-white/10 backdrop-blur-sm">
              Conseils & Inspirations
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Le Blog <span className="text-yellow-400">Cambodge</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Guides pratiques, conseils de voyage et récits d'expériences pour préparer votre aventure au Royaume Khmer.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary" className="cursor-default">Tous les articles</Badge>
            {categories.map((cat) => (
              <Badge key={cat} variant="outline" className="cursor-default">{cat}</Badge>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-cambodia-red text-white border-0">
                    {article.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(article.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime} de lecture
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-foreground mb-2 group-hover:text-cambodia-red transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                  <span className="text-sm font-semibold text-cambodia-red flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire l'article <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-hero rounded-3xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Prêt à partir au Cambodge ?</h2>
            <p className="text-white/80 mb-5 text-sm">Nos guides francophones sont disponibles 7j/7 pour créer votre circuit sur-mesure.</p>
            <button
              onClick={() => window.open("https://wa.me/+85512929279?text=Bonjour, j'ai lu votre blog et je souhaite réserver un tour au Cambodge", "_blank")}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Nous contacter sur WhatsApp
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Blog;
