import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Faut-il un visa pour visiter le Cambodge ?",
      answer: "Oui, la plupart des voyageurs ont besoin d'un visa touristique pour entrer au Cambodge. Il peut être obtenu en ligne (e-visa) ou à l'arrivée à l'aéroport. Pensez à vérifier la validité de votre passeport (au moins 6 mois après la date de retour)."
    },
    {
      question: "Quelle est la meilleure période pour visiter le Cambodge ?",
      answer: "La meilleure période pour voyager au Cambodge s'étend de novembre à mars, pendant la saison sèche. Le climat est plus doux et idéal pour visiter les temples d'Angkor, Phnom Penh, Battambang ou le lac Tonlé Sap."
    },
    {
      question: "Est-il possible d'avoir un guide francophone ?",
      answer: "Oui, tous nos circuits sont accompagnés de guides francophones officiels, certifiés par le ministère du Tourisme du Cambodge. Ils connaissent parfaitement la culture, l'histoire et les traditions locales."
    },
    {
      question: "Quels types de circuits proposez-vous ?",
      answer: "Nous proposons des circuits privés et personnalisés, allant d'une journée à plusieurs semaines : Visite des temples d'Angkor à Siem Reap, Découverte du lac Tonlé Sap et des villages flottants, Circuits culturels à Phnom Penh et Battambang, Séjours combinés avec Kep, Kampot ou Kratie, Voyages sur mesure à la demande."
    },
    {
      question: "Le transport est-il inclus dans les circuits ?",
      answer: "Oui, le transport est inclus : Tuk Tuk, voiture privée, bateau local ou minibus selon le programme choisi. Tous nos véhicules sont confortables et climatisés."
    },
    {
      question: "Les repas sont-ils inclus ?",
      answer: "Certains repas sont inclus selon le type de circuit. En général, le petit-déjeuner est prévu avec l'hébergement, et les déjeuners sont pris dans des restaurants locaux sélectionnés. Les dîners restent libres pour découvrir la gastronomie cambodgienne."
    },
    {
      question: "Que comprend le prix du voyage ?",
      answer: "Le tarif inclut généralement : Le guide francophone officiel, Les transports mentionnés (Tuk Tuk, voiture, bateau…), Les billets d'entrée pour les sites touristiques, De l'eau fraîche pendant les excursions. Les repas, boissons, pourboires et assurances ne sont pas inclus sauf mention contraire."
    },
    {
      question: "Est-il possible d'adapter le programme ?",
      answer: "Oui, nos itinéraires sont entièrement personnalisables selon vos envies, votre temps de séjour et votre budget. Vous pouvez choisir la durée, les activités, le type d'hôtel et le rythme des visites."
    },
    {
      question: "Proposez-vous des circuits familiaux ou en groupe ?",
      answer: "Absolument ! Nous organisons des voyages pour couples, familles, groupes d'amis ou circuits sur mesure avec activités adaptées à chacun."
    },
    {
      question: "Comment réserver un circuit ?",
      answer: "Vous pouvez nous contacter directement via le formulaire du site, par WhatsApp ou e-mail. Après avoir choisi votre itinéraire, nous vous enverrons une proposition personnalisée et un devis détaillé."
    }
  ];

  return (
    <section id="faq" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 px-2">
            FAQ – Voyager au Cambodge avec un guide francophone
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-3 sm:px-4">
            Toutes les réponses à vos questions pour préparer votre voyage
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold text-foreground hover:no-underline py-4 sm:py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
