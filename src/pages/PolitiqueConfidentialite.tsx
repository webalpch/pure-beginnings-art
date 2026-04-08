import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Politique de confidentialité – Routes du Cambodge";
    return () => { document.title = prevTitle; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4 py-3 text-sm text-muted-foreground flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Politique de confidentialité</span>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground mb-2">Politique de confidentialité</h1>
          <p className="text-muted-foreground mb-10">Dernière mise à jour : avril 2026</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement de vos données personnelles est <strong className="text-foreground">Routes du Cambodge</strong>,
                dont le siège est situé à Siem Reap, Cambodge. Pour toute question relative à vos données, vous pouvez nous contacter à :
              </p>
              <ul className="mt-2 space-y-1 pl-4">
                <li>Email : <a href="mailto:info@saveursducambodge.com" className="text-primary hover:underline">info@saveursducambodge.com</a></li>
                <li>WhatsApp : +855 12 929 279</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Données collectées</h2>
              <p>Nous collectons les données suivantes lorsque vous utilisez notre formulaire de contact :</p>
              <ul className="mt-2 space-y-1 pl-4 list-disc">
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Contenu de votre message (projet de voyage, questions)</li>
              </ul>
              <p className="mt-3">
                Aucune donnée de paiement n'est collectée via ce site. Les réservations se font via WhatsApp ou email.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Finalités du traitement</h2>
              <p>Vos données sont utilisées exclusivement pour :</p>
              <ul className="mt-2 space-y-1 pl-4 list-disc">
                <li>Répondre à vos demandes d'information</li>
                <li>Vous envoyer des devis et propositions de voyage personnalisés</li>
                <li>Gérer votre réservation de tour</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Base légale</h2>
              <p>
                Le traitement de vos données repose sur votre <strong className="text-foreground">consentement explicite</strong> lors de l'envoi
                du formulaire de contact, conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Durée de conservation</h2>
              <p>
                Vos données personnelles sont conservées pendant <strong className="text-foreground">3 ans</strong> à compter de notre dernier
                échange, puis supprimées de nos systèmes. Si vous effectuez une réservation, les données relatives à la transaction
                peuvent être conservées 5 ans pour des raisons comptables.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Partage des données</h2>
              <p>
                Vos données ne sont <strong className="text-foreground">jamais vendues ni cédées</strong> à des tiers. Elles peuvent être
                partagées uniquement avec nos prestataires techniques (hébergement du site via Netlify) dans le cadre strict
                de la fourniture du service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies de traçage ou publicitaires. Des cookies fonctionnels essentiels
                au bon fonctionnement du site peuvent être utilisés (session, préférences). Ils ne collectent aucune
                donnée personnelle identifiable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">8. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="mt-2 space-y-1 pl-4 list-disc">
                <li><strong className="text-foreground">Droit d'accès</strong> : obtenir une copie de vos données</li>
                <li><strong className="text-foreground">Droit de rectification</strong> : corriger des données inexactes</li>
                <li><strong className="text-foreground">Droit à l'effacement</strong> : demander la suppression de vos données</li>
                <li><strong className="text-foreground">Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                <li><strong className="text-foreground">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous par email à <a href="mailto:info@saveursducambodge.com" className="text-primary hover:underline">info@saveursducambodge.com</a>.
                Nous nous engageons à répondre dans un délai de 30 jours.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">9. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
                vos données contre tout accès non autorisé, perte ou destruction. Le site est hébergé sur
                Netlify avec connexion HTTPS sécurisée.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">10. Modifications</h2>
              <p>
                Nous pouvons mettre à jour cette politique de confidentialité à tout moment. La date de dernière
                mise à jour est indiquée en haut de cette page. Nous vous encourageons à la consulter régulièrement.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <Link to="/" className="text-primary hover:underline text-sm">← Retour à l'accueil</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
