import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowLeft, MessageCircle, Lightbulb } from "lucide-react";
import { blogArticles, BlogSection } from "@/data/blogArticles";
import { Button } from "@/components/ui/button";

const renderSection = (section: BlogSection, index: number) => {
  switch (section.type) {
    case "h2":
      return <h2 key={index} className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-3">{section.text}</h2>;
    case "h3":
      return <h3 key={index} className="text-lg font-bold text-foreground mt-6 mb-2">{section.text}</h3>;
    case "p":
      return <p key={index} className="text-muted-foreground leading-relaxed">{section.text}</p>;
    case "ul":
      return (
        <ul key={index} className="space-y-2 my-2">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-cambodia-red font-bold flex-shrink-0 mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <div key={index} className="flex gap-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 my-4">
          <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">{section.text}</p>
        </div>
      );
    default:
      return null;
  }
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  useEffect(() => {
    if (!article) return;
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl?.getAttribute("content") || "";
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleEl?.getAttribute("content") || "";

    document.title = `${article.title} | Routes du Cambodge`;
    descEl?.setAttribute("content", article.metaDescription);
    ogTitleEl?.setAttribute("content", article.title);

    // JSON-LD Article schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.metaDescription,
      "image": `https://routesducambodge.com${article.coverImage}`,
      "datePublished": article.date,
      "author": {
        "@type": "Organization",
        "name": "Routes du Cambodge",
        "url": "https://routesducambodge.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Routes du Cambodge",
        "url": "https://routesducambodge.com"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://routesducambodge.com/blog/${article.slug}`
      }
    };
    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.id = "schema-article";
    scriptEl.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptEl);

    return () => {
      document.title = prevTitle;
      descEl?.setAttribute("content", prevDesc);
      ogTitleEl?.setAttribute("content", prevOgTitle);
      document.getElementById("schema-article")?.remove();
    };
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold mb-4">Article introuvable</h1>
            <Link to="/blog"><Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" />Retour au blog</Button></Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const otherArticles = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4 py-3 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-xs">{article.title}</span>
          </div>
        </div>

        {/* Cover image */}
        <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="container mx-auto max-w-3xl">
              <Badge className="mb-3 bg-cambodia-red text-white border-0">{article.category}</Badge>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">{article.title}</h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-3xl">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(article.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {article.readTime} de lecture
            </span>
          </div>

          {/* Content */}
          <article className="space-y-4">
            {article.content.map((section, i) => renderSection(section, i))}
          </article>

          {/* CTA inline */}
          <div className="mt-10 bg-gradient-hero rounded-2xl p-6 text-center">
            <p className="text-white font-semibold mb-3">Envie de vivre cette expérience avec un guide francophone ?</p>
            <Button
              variant="whatsapp"
              onClick={() => window.open(`https://wa.me/+85512929279?text=Bonjour, j'ai lu l'article "${article.title}" et je souhaite réserver un tour`, "_blank")}
              className="mx-auto"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Réserver via WhatsApp
            </Button>
          </div>

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-3">
            <Link to="/blog">
              <Button variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Button>
            </Link>
          </div>

          {/* Articles suggérés */}
          {otherArticles.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg font-bold text-foreground mb-4">À lire aussi</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/blog/${a.slug}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all"
                  >
                    <img src={a.coverImage} alt={a.title} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    <div className="p-4">
                      <p className="text-sm font-semibold text-foreground group-hover:text-cambodia-red transition-colors leading-snug">{a.title}</p>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><Clock size={10} />{a.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogArticle;
